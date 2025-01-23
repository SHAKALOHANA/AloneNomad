'use client';

import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useInfiniteQuery, QueryFunctionContext } from '@tanstack/react-query';
import { instance } from '@/app/api/instance';

import SideNavigationMenu from '@/components/SideNavigationMenu';
import MyActivitiesList from './components/MyActivitiesList';
import * as S from './page.css';
import CustomButton from '@/components/CustomButton';
import { MyActivitiesResProps } from '@/types/MyActivitiesList';

export default function MyActivitiesPage() {
  const router = useRouter();

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  const fetchMyActivities =
    async ({}: QueryFunctionContext): Promise<MyActivitiesResProps> => {
      const { data } = await instance.get<MyActivitiesResProps>(
        '/my-activities',
        {
          params: {
            size: 20,
          },
        }
      );
      return data; // { cursorId, totalCount, activities }
    };

  const {
    data,
    isLoading,
    isError,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery<MyActivitiesResProps>({
    queryKey: ['myActivities'],
    queryFn: fetchMyActivities,
    initialPageParam: 1,

    getNextPageParam: (lastPage, pages) => {
      const totalCount = pages[0]?.totalCount ?? 0;

      const totalLoaded = pages.reduce(
        (sum, page) => sum + page.activities.length,
        0
      );

      if (totalLoaded < totalCount) {
        return lastPage.cursorId !== null ? lastPage.cursorId + 1 : undefined;
      }

      return undefined;
    },
  });

  useEffect(() => {
    // 1. 현재 ref가 가리키는 DOM 요소를 로컬 변수에 저장
    const currentTarget = loadMoreRef.current;
    if (!currentTarget) return;

    // 2. IntersectionObserver 인스턴스 생성 및 해당 DOM 요소 관찰
    const observer = new IntersectionObserver(
      (entries) => {
        const first = entries[0];
        if (first.isIntersecting && hasNextPage && !isFetchingNextPage) {
          fetchNextPage();
        }
      },
      {
        threshold: 0.5,
      }
    );

    observer.observe(currentTarget);

    return () => {
      observer.unobserve(currentTarget);
    };
  }, [hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleButtonClick = () => {
    router.push('/experienceregister');
  };

  const allActivities = data?.pages.flatMap((page) => page.activities) || [];

  return (
    <div className={S.myPageContainer}>
      <div className={S.sideNavigationNone}>
        <SideNavigationMenu />
      </div>

      <div>
        <div className={S.headerContainer}>
          <h2 className={S.headerTitle}>내 체험 관리</h2>
          <CustomButton
            mode="experienceRegistration"
            onClick={handleButtonClick}
          />
        </div>

        {isLoading ? (
          <p>불러오는 중...</p>
        ) : isError ? (
          <p>에러가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>
        ) : (
          <div>
            <MyActivitiesList activities={allActivities} />

            {isFetchingNextPage && <p>추가 로딩 중...</p>}
            <div ref={loadMoreRef} />
          </div>
        )}
      </div>
    </div>
  );
}
