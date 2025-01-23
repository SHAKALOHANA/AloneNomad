'use client';

import Link from 'next/link';
import Image from 'next/image';
import { headerStyle, linkStyle, linkAtrribute } from './Header.css';
import { useState, useEffect } from 'react';
import { useUserContext } from '../app/context/UserContext';

const Header = () => {
  // 1) UserContext에서 이미 가져온 userInfo
  const { isLoggedIn, userInfo } = useUserContext();

  // 2) 프로필 이미지 결정
  const defaultProfileImage = '/images/defaultProfileImage.png';
  const profileImageUrl = userInfo?.profileImageUrl
    ? userInfo.profileImageUrl
    : defaultProfileImage;

  // 3) 반응형 처리
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleIconClick = () => {
    if (isMobile) {
      window.location.href = '/mobile-navigation';
    }
  };

  return (
    <header className={headerStyle}>
      <Link href="/">
        <Image
          src="/icons/logo.svg"
          alt="로고"
          width={100}
          height={50}
          priority
        />
      </Link>
      <div className={linkStyle}>
        {isLoggedIn ? (
          <>
            <Link href="/my-notifications">
              <Image
                src="/icons/icon_notification.svg"
                alt="종모양 알림버튼"
                width={20}
                height={20}
                priority
              />
            </Link>
            <Link href="/my-info" onClick={handleIconClick}>
              <Image
                src={profileImageUrl}
                alt="Profile"
                width={32}
                height={32}
                style={{ borderRadius: '50%' }}
              />
            </Link>
          </>
        ) : (
          <>
            <Link href="/signin" className={linkAtrribute}>
              로그인
            </Link>
            <Link href="/signup" className={linkAtrribute}>
              회원가입
            </Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
