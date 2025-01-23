'use client';

import { createContext, useContext, useState } from 'react';

interface ProfileContextType {
  isLoggedIn: boolean;
  profileImageUrl?: string;
  setIsLoggedIn: (status: boolean) => void;
  setProfileImageUrl: (url: string) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

export const useProfileContext = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfileContext must be used within a ProfileProvider');
  }
  return context;
};
