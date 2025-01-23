export interface MyInfoData {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export type MyInfoPatchResponse = MyInfoData;

export type UpdateUserBody = Partial<{
  nickname: string;
  newPassword: string;
  profileImageUrl: string | null;
}>;
