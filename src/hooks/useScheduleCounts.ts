import { useQuery } from '@tanstack/react-query';
import { instance } from '@/app/api/instance';

interface ScheduleCountsResponse {
  scheduleId: number;
  startTime: string;
  endTime: string;
  count: {
    pending: number;
    confirmed: number;
    declined: number;
  };
}

export function useScheduleCounts(
  selectedActivityId: string,
  date: string | null
) {
  return useQuery<ScheduleCountsResponse>({
    // 1) queryKey, queryFn, options 모두 객체로 묶는다
    queryKey: ['scheduleCounts', selectedActivityId, date],
    queryFn: async () => {
      if (!date || !selectedActivityId) {
        // date가 null 이거나 selectedActivityId가 없으면 빈 객체 반환
        return {} as ScheduleCountsResponse;
      }

      const response = await instance.get(
        `/my-activities/${selectedActivityId}/reserved-schedule`,
        { params: { date } }
      );
      return response.data;
    },
    // 2) 기타 옵션을 여기에 적는다
    enabled: Boolean(date && selectedActivityId),
    // refetchOnWindowFocus: false,
    refetchInterval: 30000,
  });
}
