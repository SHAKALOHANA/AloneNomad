import React, { useState } from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css'; // DayPicker 기본 스타일
import * as styles from './ReservationBar.css';
import { scheduleTime } from '@/types/Schedules';
import { useMutation } from '@tanstack/react-query';
import { postActivityReservation } from '@/app/api/activity';

interface Props {
  activityId: number;
  price: number; // 1인당 가격
  schedules: scheduleTime[]; // 예약 가능한 날짜 및 시간
}

interface reservationProps {
  activityId: number;
  reservation: {
    scheduleId: number;
    headCount: number;
  }
}

const ReservationBar: React.FC<Props> = ({ activityId, price, schedules }) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [selectedSchedule, setSelectedSchedule] = useState<scheduleTime | null>(
    null
  );  const [people, setPeople] = useState<number>(1);

  const mutation = useMutation({
    mutationFn: postActivityReservation,
    onSuccess: () => {
      alert('예약이 완료되었습니다!');
    },
    onError: () => {
      alert('예약 중 문제가 발생했습니다. 다시 시도해주세요.');
    },
  });

  const availableDates = schedules.map((schedule) => new Date(schedule.date));

  // 선택된 날짜의 스케줄 확인
  const availableSchedules = schedules.filter((schedule) =>
    selectedDate
      ? new Date(schedule.date).toDateString() ===
        selectedDate.toDateString()
      : false
  );

  // 총 가격 계산
  const totalPrice = price * people;

  const handleReservation = () => {
    if (!selectedSchedule) {
      alert('날짜와 시간을 선택해주세요.');
      return;
    }

    // 예약 데이터 구성
    const bookingData:reservationProps = {
      activityId: activityId,
      reservation:
      {
        scheduleId: selectedSchedule.id,
        headCount: 0,
      }
    };

    // 예약 요청 전송
    mutation.mutate(bookingData);
  };

  return (
    <div className={styles.reservationBar}>
      <div className={styles.price}>
        <p>₩{price.toLocaleString()} <small className={styles.smallprice}>/ 인</small></p>
      </div>
      
      <hr />

      <p className={styles.smallLabel}>날짜</p>
      <div className={styles.calendar}>
        <DayPicker
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          modifiers={{
            enabled: availableDates,
          }}
          modifiersClassNames={{
            enabled: styles.enabledDate,
            selected: styles.selectedDate,
          }}
        />
      </div>

      {selectedDate && (
        <div className={styles.timeSelectionContainer}>
          <div className={styles.timeButtons}>
          {availableSchedules.map((schedule) => (
            <div
              key={schedule.id}
              className={`${styles.timeButton} ${
                selectedSchedule?.id === schedule.id
                  ? styles.selectedTime
                  : ''
              }`}
              onClick={() => setSelectedSchedule(schedule)}
            >
              {`${schedule.startTime} ~ ${schedule.endTime}`}
            </div>
          ))}
          </div>
        </div>
      )}

      <hr />

      <div className={styles.peopleSelection}>
        <p className={styles.smallLabel}>참여 인원 수</p>
        <div className={styles.peopleButtons}>
          <button
            className={styles.iconButton}
            onClick={() => setPeople((prev) => Math.max(prev - 1, 1))}
          >
            <img src="/icons/countminus.svg" alt="Minus" />
          </button>
          <span className={styles.peopleCount}>{people}</span>
          <button
            className={styles.iconButton}
            onClick={() => setPeople((prev) => prev + 1)}
          >
            <img src="/icons/countplus.svg" alt="Plus" />
          </button>
        </div>
      </div>

      <button className={styles.reserveButton} onClick={handleReservation}>예약하기</button>

      <hr />

      <div className={styles.totalPrice}>
        <div>총 합계</div><div>₩ {totalPrice.toLocaleString()}</div>
      </div>

    </div>
  );
};

export default ReservationBar;
