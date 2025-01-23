'use client';

import React, { useState } from 'react';
import * as S from './MyInfo.css';
import CustomInput from '@/components/CustomInput';

interface MyInfoData {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

interface MyInfoProps {
  myInfo: MyInfoData;
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  passwordConfirm: string;
  setPasswordConfirm: React.Dispatch<React.SetStateAction<string>>;
}

export default function MyInfo({
  myInfo,
  nickname,
  setNickname,
  password,
  setPassword,
  passwordConfirm,
  setPasswordConfirm,
}: MyInfoProps) {
  const passwordsMatch = password === passwordConfirm;

  const [isPasswordConfirmTouched, setPasswordConfirmTouched] = useState(false);

  const showPasswordError =
    isPasswordConfirmTouched && passwordConfirm.length > 0 && !passwordsMatch;

  return (
    <div className={S.container}>
      <div className={S.myInfoContainer}>
        <div className={S.inputContainer}>
          <label className={S.labelStyle}>닉네임</label>
          <CustomInput
            id="nickname"
            mode="myNickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <div className={S.inputContainer}>
          <label className={S.labelStyle}>이메일</label>
          <CustomInput
            mode="myEmail"
            id="email"
            value={myInfo.email}
            readOnly
          />
        </div>
        <div className={S.inputContainer}>
          <label className={S.labelStyle}>비밀번호</label>
          <CustomInput
            mode="myPassword"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={S.inputContainer}>
          <label className={S.labelStyle}>비밀번호 재입력</label>
          <CustomInput
            mode="myPasswordConfirm"
            id="passwordConfirm"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            onBlur={() => setPasswordConfirmTouched(true)}
            className={showPasswordError ? S.invalidInput : undefined}
          />
          {showPasswordError && (
            <div className={S.errorMessage}>비밀번호가 일치하지 않습니다.</div>
          )}
        </div>
      </div>
    </div>
  );
}
