export interface ActivityResponse {
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
  subImages: ActivityResponseSubImages[];
  schedules: { date: string; times: ActivityResponseTime[] }[];
}

interface ActivityResponseSubImages {
  imageUrl: string;
  id: number;
}

interface ActivityResponseTime {
  endTime: string;
  startTime: string;
  id: number;
}
