import { instance } from './instance';

export const uploadProfileImage = async (file: File): Promise<string> => {
  const formData = new FormData();
  formData.append('file', file);

  const { data } = await instance.post<{ profileImageUrl: string }>(
    '/users/me/image',
    formData,
    { headers: { 'Content-Type': 'multipart/form-data' } }
  );

  // 서버가 돌려주는 최종 URL
  return data.profileImageUrl;
};
