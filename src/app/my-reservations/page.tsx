'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useInfiniteQuery, QueryFunctionContext } from '@tanstack/react-query';
import { instance } from '@/app/api/instance';
import SideNavigationMenu from '@/components/SideNavigationMenu';

import { FIXED_OPTIONS } from '@/utils/translateStatus';
import {
  ReservationStatus,
  ReservationsType,
  MyReservationsType,
} from '@/types/MyReservationsList';
import * as S from './page.css';
import ReservationsList from './components/ReservationsList';
import DropdownMenu from '@/components/Dropdown/DropdownMenu';
import DropdownBox from '@/components/Dropdown/DropdownBox';

const dropList = FIXED_OPTIONS.map((option) => ({
  label: option.label,
  value: option.value,
}));

export default function MyReservationsPage() {
  const [selectedStatus, setSelectedStatus] = useState<ReservationStatus | ''>(
    ''
  );
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  async function fetchReservations({}: QueryFunctionContext): Promise<MyReservationsType> {
    const { data } = await instance.get<MyReservationsType>(
      '/my-reservations',
      {
        params: {
          size: 10,
        },
      }
    );
    return data;
  }

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isFetching,
  } = useInfiniteQuery<MyReservationsType, Error>({
    queryKey: ['myReservations'], // 'status'는 서버로 안 보내고, 클라이언트쪽에서 필터만.
    queryFn: fetchReservations,
    initialPageParam: 1,
    getNextPageParam: (lastPage, pages) => {
      // 1) 첫 페이지의 totalCount를 기준으로 삼음
      const totalCount = pages[0]?.totalCount ?? 0;

      // 2) 지금까지 로드된 데이터의 총 개수 계산
      const totalLoaded = pages.reduce(
        (sum, page) => sum + page.reservations.length,
        0
      );

      // 3) 아직 불러올 데이터가 남았다면 lastPage.cursorId 반환
      if (totalLoaded < totalCount) {
        return lastPage.cursorId;
      }

      // 남은 데이터 없으면 undefined 반환(추가 요청 X)
      return undefined;
    },
  });

  useEffect(() => {
    if (!sentinelRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(sentinelRef.current);

    return () => {
      observer.disconnect();
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleButtonClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleStatusChange = (value: string) => {
    setSelectedStatus(value as ReservationStatus | '');
    setIsMenuOpen(false);
  };

  const selectedLabel =
    dropList.find((item) => item.value === selectedStatus)?.label || '필터';

  const allReservations: ReservationsType[] =
    data?.pages.flatMap((page) => page.reservations) || [];

  const filteredReservations = selectedStatus
    ? allReservations.filter((r) => r.status === selectedStatus)
    : allReservations;

  return (
    <div className={S.myPageContainer}>
      <div className={S.sideNavigationNone}>
        <SideNavigationMenu />
      </div>
      <div>
        <div className={S.headerContainer}>
          <h2 className={S.headerTitle}>예약 내역</h2>
          <div className={S.selectWrapper}>
            <DropdownBox onClick={handleButtonClick} label={selectedLabel} />
            <DropdownMenu
              items={dropList}
              onSelect={handleStatusChange}
              isVisible={isMenuOpen}
            />
          </div>
        </div>

        {isLoading ? (
          <p>불러오는 중...</p>
        ) : isError ? (
          <p>에러가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>
        ) : (
          <div>
            <ReservationsList reservations={filteredReservations} />
            <div
              ref={sentinelRef}
              style={{ height: 1, background: 'transparent' }}
            />

            {/* 전체 fetch 중이고, next page fetch 중이 아닐 때 */}
            {isFetching && !isFetchingNextPage && (
              <div style={{ marginTop: '0.5rem' }}>불러오는 중...</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
