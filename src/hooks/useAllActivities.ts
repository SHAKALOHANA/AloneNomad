import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query';
import { fetchActivities, ActivitiesResponse } from '@/app/api/activitiesList';

interface UseAllActivitiesProps {
  page: number;
  size: number;
  sort?: 'price_asc' | 'price_desc' | 'most_reviewed' | 'latest';
  category?: string;
  keyword?: string;
}

export function useAllActivities({
  page,
  size,
  sort,
  category,
  keyword,
}: UseAllActivitiesProps): UseQueryResult<ActivitiesResponse, Error> {
  return useQuery<ActivitiesResponse, Error>({
    queryKey: ['all-activities', page, sort, category, keyword],
    queryFn: () =>
      fetchActivities({
        method: 'offset',
        page,
        size,
        sort,
        category,
        keyword,
      }),
    keepPreviousData: true,
  } as UseQueryOptions<ActivitiesResponse, Error>);
}
