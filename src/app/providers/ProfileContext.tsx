'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ProfileContextProps {
  isLoggedIn: boolean;
  profileImageUrl?: string;
  setIsLoggedIn: (value: boolean) => void;
  setProfileImageUrl: (url: string) => void;
}

const ProfileContext = createContext<ProfileContextProps | undefined>(
  undefined
);

export const ProfileProvider = ({ children }: { children: ReactNode }) => {
  // 전역으로 관리될 상태
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [profileImageUrl, setProfileImageUrl] = useState<string>(
    '/images/defaultProfileImage.png'
  );

  return (
    <ProfileContext.Provider
      value={{
        isLoggedIn,
        profileImageUrl,
        setIsLoggedIn,
        setProfileImageUrl,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

// Hook
export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfileContext must be used within a ProfileProvider');
  }
  return context;
};
