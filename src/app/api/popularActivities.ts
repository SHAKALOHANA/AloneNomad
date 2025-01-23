import { QueryFunctionContext } from '@tanstack/react-query';
import { fetchActivities, ActivitiesResponse } from '@/app/api/activitiesList';

export async function fetchPopularActivities({}: QueryFunctionContext): Promise<ActivitiesResponse> {
  const response = await fetchActivities({
    method: 'cursor',
    size: 4,
    sort: 'most_reviewed',
  });
  return response;
}