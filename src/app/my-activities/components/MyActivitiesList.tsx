'use client';

import React from 'react';
import * as S from './MyActivitiesList.css';
import MyActivityCard from './MyActivityCard';
import { MyActivityCardProps } from '@/types/MyActivitiesList';
import EmptyListIcon from '../../../../public/icons/empty_list.svg';

type ActivitiesListProps = {
  activities: MyActivityCardProps[];
};

export default function MyActivitiesList({ activities }: ActivitiesListProps) {
  return (
    <div className={S.container}>
      <div className={S.myActivitiesContainer}>
        <div className={S.reservationList}>
          {activities.map((r) => (
            <MyActivityCard key={r.id} {...r} />
          ))}

          {activities.length === 0 && (
            <div className={S.emptyListContainer}>
              <EmptyListIcon className={S.emptyList} />
              <p className={S.emptyMessage}>아직 등록한 체험이 없어요</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
