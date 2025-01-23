import { instance } from './instance';
import { AxiosError } from 'axios';

interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}
export interface ActivityData {
  title: string;
  category: string;
  description: string;
  address: string;
  price: number;
  schedules: Schedule[];
  bannerImageUrl: string;
  subImageUrls: string[];
}

/** /activities POST의 응답 타입 */
export type CreateActivityResParams = {
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
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  subImages: {
    imageUrl: string;
    id: number;
  }[];
  schedules: {
    date: string; // ISO date string
    times: {
      startTime: string; // e.g. "HH:mm"
      endTime: string; // e.g. "HH:mm"
      id: number;
    }[];
  }[];
};

export const uploadActivityImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await instance.post<{ activityImageUrl: string }>(
    '/activities/image',
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );

  // 서버가 돌려주는 최종 URL
  return data.activityImageUrl;
};

/** 액티비티 등록 API */
export const postActivity = async (
  data: ActivityData
): Promise<CreateActivityResParams> => {
  const response = await instance.post('/activities', data);
  return response.data; // 서버응답 형태가 명확하다면 그에 맞게 타입을 지정하세요!
};

interface PostRefreshParams {
  refreshToken: string;
}

interface PostRefreshRes {
  accessToken: string;
  refreshToken: string;
}

//리액트 쿼리 사용 시 참고
export const postRefresh = async ({ refreshToken }: PostRefreshParams) => {
  const response = await instance.post<PostRefreshRes>(
    '/auth/tokens',
    undefined,
    {
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    }
  );

  return response.data;
};

// 로그인 요청 인터페이스
interface PostLogInParams {
  email: string;
  password: string;
}

// 회원가입 요청 인터페이스
interface PostSignUpParams {
  email: string;
  nickname: string;
  password: string;
}

// 로그인 응답 인터페이스
interface PostLogInRes {
  accessToken: string;
  refreshToken: string;
  user: {
    id: number;
    email: string;
    nickname: string;
    profileImageUrl: string;
    updatedAt: string;
    createdAt: string;
  };
}

// 회원가입 응답 인터페이스
interface PostSignUpRes {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string;
  createdAt: string;
  updatedAt: string;
}

// 로그인 응답 인터페이스
export const postLogIn = async ({
  email,
  password,
}: PostLogInParams): Promise<PostLogInRes> => {
  const bodyObj = { email, password };

  const response = await instance.post<PostLogInRes>('/auth/login', bodyObj);
  return response.data;
};

// 회원가입 응답 인터페이스
export const postSignUp = async ({
  email,
  nickname,
  password,
}: PostSignUpParams) => {
  const bodyObj = { email, nickname, password };

  try {
    const response = await instance.post<PostSignUpRes>('/users', bodyObj);
    return response.data; // 성공 시 데이터 반환
  } catch (error) {
    // 409 에러 처리 추가
    const axiosError = error as AxiosError;
    if (axiosError.response && axiosError.response.status === 409) {
      throw new Error('이미 사용중인 이메일입니다.'); // 사용자 정의 에러 메시지
    }
    throw error; // 다른 에러는 그대로 던짐
  }
};
