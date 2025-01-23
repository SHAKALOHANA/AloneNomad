'use client';

import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { instance } from '@/app/api/instance';
import CustomButton from '@/components/CustomButton';
import SideNavigationMenu from '@/components/SideNavigationMenu';
import MyInfo from './components/MyInfo';
import * as S from './page.css';
import {
  MyInfoData,
  UpdateUserBody,
  MyInfoPatchResponse,
} from '@/types/MyInfo';

interface ErrorData {
  message: string;
}

export default function MyPage() {
  const queryClient = useQueryClient();

  const {
    data: myInfo,
    isLoading,
    isFetching,
    error,
  } = useQuery<MyInfoData, Error>({
    queryKey: ['myInfo'],
    queryFn: async () => {
      const { data } = await instance.get('/users/me');
      return data;
    },
  });

  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  useEffect(() => {
    if (myInfo?.nickname) {
      setNickname(myInfo.nickname);
    }
  }, [myInfo?.nickname]);

  const updateUserMutation = useMutation<
    MyInfoPatchResponse,
    AxiosError<ErrorData>,
    UpdateUserBody
  >({
    mutationFn: async (updateBody: UpdateUserBody) => {
      const { data } = await instance.patch<MyInfoPatchResponse>(
        '/users/me',
        updateBody
      );
      return data;
    },
    onSuccess: () => {
      alert('수정이 완료되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['myInfo'] });
    },
    onError: (err) => {
      if (err instanceof AxiosError) {
        if (err.response?.status === 400) {
          const msg = err.response?.data?.message;
          alert(msg);
        }
      } else {
        console.error(err);
      }
    },
  });

  const passwordsMatch = password === passwordConfirm;
  const isSaveButtonDisabled = password.length > 0 && !passwordsMatch;

  const handleSave = () => {
    if (!myInfo) return;

    const updateBody: UpdateUserBody = {};

    // 닉네임 변경 사항 있으면
    if (nickname && nickname !== myInfo.nickname) {
      updateBody.nickname = nickname;
    }

    // 새 비밀번호 입력되어 있으면
    if (password.length > 0) {
      updateBody.newPassword = password;
    }

    updateUserMutation.mutate(updateBody);
  };

  return (
    <div className={S.myPageContainer}>
      <div className={S.sideNavigationNone}>
        <SideNavigationMenu />
      </div>
      <div className={S.myInfoContainer}>
        <div className={S.header}>
          <h2 className={S.headerTitle}>내 정보</h2>
          <CustomButton
            mode="save"
            onClick={handleSave}
            disabled={isSaveButtonDisabled}
          />
        </div>
        {isLoading || isFetching ? (
          <p>불러오는 중...</p>
        ) : error ? (
          <p>에러가 발생했습니다. 잠시 후 다시 시도해 주세요.</p>
        ) : (
          myInfo && (
            <MyInfo
              myInfo={myInfo}
              nickname={nickname}
              setNickname={setNickname}
              password={password}
              setPassword={setPassword}
              passwordConfirm={passwordConfirm}
              setPasswordConfirm={setPasswordConfirm}
            />
          )
        )}
      </div>
    </div>
  );
}
