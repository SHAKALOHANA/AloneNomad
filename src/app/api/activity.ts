'use client'

import { useQuery } from '@tanstack/react-query';
import { Activity } from '@/types/Activity';
import { instance } from '@/app/api/instance';

interface postReservationProps {
  activityId: number;
  reservation: {
    scheduleId: number;
    headCount: number;
  }
}

const fetchActivityById = async (id: number): Promise<Activity> => {
  const response = await instance.get(`/activities/${id}`);
  return response.data;
};

// React Query 훅
export const useActivity = (id: number) => {
  const data = useQuery<Activity, Error>({
    queryKey: ['activity', id],
    queryFn: async () => fetchActivityById(id),
    staleTime: 1000*10,
  });

  return data;
};

export const postActivityReservation = async (ReservationProps: postReservationProps): Promise<postReservationProps> => {
  const response = await instance.post(`/activities/${ReservationProps.activityId}/reservations`, ReservationProps.reservation); // Swagger의 POST endpoint URL
  return response.data;
};