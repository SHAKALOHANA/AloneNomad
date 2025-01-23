'use client';

import React from 'react';
import Image from 'next/image';
import CustomButton from '@/components/CustomButton';
import ReviewModal from './ReviewModal';
import * as S from './ReservationCard.css';
import {
  ReservationsType,
  ReservationStatus,
} from '@/types/MyReservationsList';
import { translateStatus } from '@/utils/translateStatus';
import { useActivityNavigation } from '@/hooks/useActivityNavigation';
import { instance } from '@/app/api/instance';

export default function ReservationCard({
  id,
  activity,
  status,
  totalPrice,
  headCount,
  date,
  startTime,
  endTime,
  reviewSubmitted,
}: ReservationsType) {
  const NavigateToActivity = useActivityNavigation();

  const variantClass = S.reservationStatus2[status as ReservationStatus];
  const combinedClassName = [S.reservationStatus1, variantClass].join(' ');

  const handleCancelReservation = async (reservationId: number) => {
    try {
      await instance.patch(`/my-reservations/${reservationId}`, {
        status: 'canceled',
      });
      alert('예약이 취소되었습니다.');
      window.location.reload();
    } catch (err) {
      console.error(err);
      alert('예약 취소 중 문제가 발생했습니다.');
    }
  };

  const renderButtonByMode = () => {
    switch (status) {
      case 'pending':
        return (
          <CustomButton
            mode="reservationCancel"
            onClick={() => handleCancelReservation(id)}
          />
        );
      case 'completed':
        if (reviewSubmitted) {
          return <CustomButton mode="none" />;
        } else {
          return (
            <ReviewModal
              {...{
                id,
                activity,
                totalPrice,
                headCount,
                date,
                startTime,
                endTime,
              }}
            />
          );
        }
      default:
        return <CustomButton mode="none" />;
    }
  };

  const base64 = 'data:image/jpeg;base64,';
  const blurImg =
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO88B8AAqUB0Y/H4mkAAAAASUVORK5CYII=';

  return (
    <div className={S.cardContainer}>
      <div
        className={S.imageContainer}
        onClick={() => NavigateToActivity(activity.id)}
      >
        <Image
          placeholder="blur"
          src={activity.bannerImageUrl}
          blurDataURL={base64 + blurImg}
          alt={activity.title}
          fill
          sizes="100%"
        />
      </div>
      <div className={S.activityInfoContainer}>
        <p className={combinedClassName}>{translateStatus(status)}</p>
        <h3 className={S.activityTitle}>
          <button
            className={S.titleButton}
            onClick={() => NavigateToActivity(activity.id)}
          >
            {activity.title}
          </button>{' '}
        </h3>
        <p
          className={S.activityDate}
        >{`${date} | ${startTime} ~ ${endTime} | ${headCount}명`}</p>
        <div className={S.priceContainer}>
          <p
            className={S.activityPrice}
          >{`￦${totalPrice.toLocaleString()}`}</p>
          {renderButtonByMode()}
        </div>
      </div>
    </div>
  );
}
