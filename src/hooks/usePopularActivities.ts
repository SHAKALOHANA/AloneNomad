import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchPopularActivities } from '@/app/api/popularActivities';
import { ActivitiesResponse } from '@/app/api/activitiesList';

export function usePopularActivities() {
  return useInfiniteQuery<ActivitiesResponse>({
    queryKey: ['popular-activities'],
    queryFn: fetchPopularActivities,
    initialPageParam: 1,

    getNextPageParam: (lastPage, pages) => {
      // pages[0] => 첫 페이지 응답
      const totalCount = pages[0]?.totalCount ?? 0;

      // 이미 불러온 Activities 개수 합
      const totalLoaded = pages.reduce(
        (sum, page) => sum + page.activities.length,
        0
      );

      // 아직 전체 개수(totalCount)보다 덜 불러왔다면 다음 페이지 요청
      if (totalLoaded < totalCount) {
        // lastPage.cursorId가 null이 아니면 (다음 커서가 있다면)
        // 다음 호출 시 사용할 커서: lastPage.cursorId + 1
        return lastPage.cursorId !== null ? lastPage.cursorId + 1 : undefined;
      }
      return undefined; // 더 이상 불러올 페이지가 없음
    },
  });
}
