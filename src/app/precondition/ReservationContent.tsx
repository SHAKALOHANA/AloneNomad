import React, { useEffect, useState } from 'react';
import {
  reservationContainer,
  buttonContainer,
  confirmedButton,
  declinedButton,
  confirmedContainer,
  declinedContainer,
} from './ReservationContent.css';
import CustomButton from '../../components/CustomButton';
import { instance } from '../../app/api/instance';

interface Reservation {
  nickname: string;
  headCount: number;
  totalPrice: number;
  id: number;
}

interface ReservationResponseItem {
  nickname: string;
  headCount: number;
  totalPrice: number;
  id: number;
}

interface ReservationContentProps {
  selectedActivityId: string;
  scheduleId: string;
  activeTab: 'pending' | 'confirmed' | 'declined';
}

const ReservationContent: React.FC<ReservationContentProps> = ({
  selectedActivityId,
  scheduleId,
  activeTab,
}) => {
  const [reservations, setReservations] = useState<Reservation[]>([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        if (!scheduleId || !selectedActivityId) return;

        const url = `/my-activities/${selectedActivityId}/reservations`;
        const params = {
          size: 10,
          scheduleId,
          status: activeTab,
        };

        const response = await instance.get(url, { params });

        setReservations(
          response.data.reservations.map(
            (reservation: ReservationResponseItem) => ({
              nickname: reservation.nickname,
              headCount: reservation.headCount,
              totalPrice: reservation.totalPrice,
              id: reservation.id,
            })
          )
        );
      } catch (error) {
        console.error('예약 데이터 불러오기 실패:', error);
      }
    };

    fetchReservations();
  }, [selectedActivityId, scheduleId, activeTab]);

  const handleApproveReservation = async (id: number) => {
    try {
      const url = `/my-activities/${selectedActivityId}/reservations/${id}`;
      const data = {
        status: 'confirmed',
      };

      await instance.patch(url, data);

      setReservations((prevReservations) =>
        prevReservations.filter((reservation) => reservation.id !== id)
      );

      console.log('예약 승인 성공');
    } catch (error) {
      console.error('예약 승인 중 오류 발생:', error);
      alert('예약 승인 중 오류 발생');
    }
  };

  const handleRejectReservation = async (id: number) => {
    try {
      const url = `/my-activities/${selectedActivityId}/reservations/${id}`;
      const data = {
        status: 'declined',
      };

      await instance.patch(url, data);

      setReservations((prevReservations) =>
        prevReservations.filter((reservation) => reservation.id !== id)
      );

      console.log('예약 거절 성공');
    } catch (error) {
      console.error('예약 거절 중 오류 발생:', error);
      alert('예약 거절 중 오류 발생');
    }
  };

  return (
    <>
      {reservations.map((reservation) => (
        <div key={reservation.id} className={reservationContainer}>
          <p>닉네임 {reservation.nickname}</p>
          <p>인원 {reservation.headCount}명</p>
          {activeTab === 'pending' && (
            <div className={buttonContainer}>
              <CustomButton
                mode="reservationFinalize"
                onClick={() => handleApproveReservation(reservation.id)}
              >
                승인하기
              </CustomButton>
              <CustomButton
                mode="reservationReject"
                onClick={() => handleRejectReservation(reservation.id)}
              >
                거절하기
              </CustomButton>
            </div>
          )}
          {activeTab === 'confirmed' && (
            <div className={confirmedContainer}>
              <button className={confirmedButton}>예약 승인</button>
            </div>
          )}
          {activeTab === 'declined' && (
            <div className={declinedContainer}>
              <button className={declinedButton}>예약 거절</button>
            </div>
          )}
        </div>
      ))}
    </>
  );
};

export default ReservationContent;
