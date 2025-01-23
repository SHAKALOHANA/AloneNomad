import React from 'react';
import ReservationCard from './ReservationCard';
import * as S from './ReservationsList.css';
import { ReservationsType } from '@/types/MyReservationsList';
import EmptyListIcon from '../../../../public/icons/empty_list.svg';

type ReservationsListProps = {
  reservations: ReservationsType[];
};

export default function ReservationsList({
  reservations,
}: ReservationsListProps) {
  return (
    <div className={S.reservationsContainer}>
      <div className={S.reservationList}>
        {reservations.map((r) => (
          <ReservationCard key={r.id} {...r} />
        ))}

        {reservations.length === 0 && (
          <div className={S.emptyListContainer}>
            <EmptyListIcon className={S.emptyList} />
            <p className={S.emptyMessage}>아직 예약한 체험이 없어요</p>
          </div>
        )}
      </div>
    </div>
  );
}
