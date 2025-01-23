'use client';

import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from 'react';

interface UserInfo {
  id: number;
  email: string;
  nickname: string;
  profileImageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

type UserContextType = {
  isLoggedIn: boolean;
  userInfo: UserInfo | null;
  saveUserInfo: (info: UserInfo) => void;
  removeUserInfo: () => void;
};

const UserContext = createContext<UserContextType>({
  isLoggedIn: false,
  userInfo: null,
  saveUserInfo: () => {},
  removeUserInfo: () => {},
});

export function UserProvider({ children }: { children: ReactNode }) {
  // 1) 전역으로 관리할 상태
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);

  // 2) 토큰 확인, userInfo 복원
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const storedUser = localStorage.getItem('userInfo');
    if (accessToken && storedUser) {
      setUserInfo(JSON.parse(storedUser));
    }
  }, []);

  // 로그인 여부는 userInfo 유무로 판단
  const isLoggedIn = userInfo !== null;

  // 3) 함수: 유저 정보를 저장 (로그인 시점)
  const saveUserInfo = (info: UserInfo) => {
    setUserInfo(info);
    localStorage.setItem('userInfo', JSON.stringify(info));
  };

  // 4) 함수: 유저 정보 제거 (로그아웃 시점)
  const removeUserInfo = () => {
    setUserInfo(null);
    localStorage.removeItem('userInfo');
  };

  // 5) Context 제공
  return (
    <UserContext.Provider
      value={{
        isLoggedIn,
        userInfo,
        saveUserInfo,
        removeUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

// Hook
export function useUserContext() {
  return useContext(UserContext);
}
