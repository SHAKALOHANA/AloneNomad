import { instance } from '@/app/api/instance';

export interface ActivitiesProps {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface ActivitiesResponse {
  cursorId: number | null;
  totalCount: number;
  activities: ActivitiesProps[];
}

export const fetchActivities = async ({
  method,
  cursorId,
  page,
  size,
  keyword,
  sort,
  category,
}: {
  method: 'offset' | 'cursor';
  cursorId?: number;
  page?: number;
  size?: number;
  keyword?: string;
  sort?: 'most_reviewed' | 'price_asc' | 'price_desc' | 'latest';
  category?: string;
}): Promise<ActivitiesResponse> => {
  const response = await instance.get<ActivitiesResponse>('/activities', {
    params: {
      method,
      cursorId,
      page,
      size,
      keyword,
      sort,
      category,
    },
  });
  return response.data;
};