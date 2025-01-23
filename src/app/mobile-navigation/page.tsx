'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  containerBox,
  profileImage,
  editButton,
  navigationBoxes,
  navigationBox,
  navigationBoxImage,
  activeNavigationBox,
  activeText,
  inactiveText,
  activeImage,
  inactiveImage,
  linkStyle,
  profileImageContainer,
} from './page.css';

import { useQuery } from '@tanstack/react-query';
import { instance } from '@/app/api/instance';
import { MyInfoData } from '@/types/MyInfo';

export type UpdateUserBody = Partial<{
  profileImageUrl: string | null;
}>;

const SideNavigationMenu = () => {
  const { data: MyInfo, isLoading } = useQuery<MyInfoData, Error>({
    queryKey: ['myInfo'],
    queryFn: async () => {
      const { data } = await instance.get('/users/me');
      return data;
    },
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [profileImageSrc, setProfileImageSrc] = useState<string | null>(null);

  useEffect(() => {
    if (MyInfo?.profileImageUrl) {
      setProfileImageSrc(MyInfo.profileImageUrl);
    }
  }, [MyInfo]);

  const pathname = usePathname();

  useEffect(() => {
    if (pathname === '/my-info') {
      setActiveIndex(0);
    } else if (pathname === '/my-reservations') {
      setActiveIndex(1);
    } else if (pathname === '/my-activities') {
      setActiveIndex(2);
    } else if (pathname === '/precondition') {
      setActiveIndex(3);
    }
  }, [pathname]);

  const handleProfileImageChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];
    const maxSizeInMB = 5;

    const fileExtension = file.name.split('.').pop()?.toLowerCase();
    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      alert('이미지 파일만 업로드할 수 있습니다. (jpg, jpeg, png, gif, webp)');
      event.target.value = '';
      return;
    }

    if (file.size > maxSizeInMB * 1024 * 1024) {
      alert(`파일 크기는 최대 ${maxSizeInMB}MB를 초과할 수 없습니다.`);
      event.target.value = '';
      return;
    }

    try {
      const formData = new FormData();
      formData.append('image', file);

      const uploadResponse = await instance.post('/users/me/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const imageUrl = uploadResponse.data?.profileImageUrl;

      if (!imageUrl) {
        throw new Error('이미지 URL이 응답에 없습니다.');
      }

      console.log('이미지 업로드 성공, 이미지 URL:', imageUrl);

      try {
        const patchResponse = await instance.patch('/users/me', {
          profileImageUrl: imageUrl,
        });

        console.log('프로필 업데이트 성공:', patchResponse.data); // 디버깅용 로그
        setProfileImageSrc(patchResponse.data.profileImageUrl);

        alert('프로필 이미지가 업데이트되었습니다.');
      } catch (patchError) {
        console.error('프로필 업데이트 실패:', patchError);
        alert('사용자 정보 업데이트에 실패했습니다.');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('에러 발생:', error.message);
        alert('이미지 업로드 중 문제가 발생했습니다.');
      } else {
        console.error('알 수 없는 에러:', error);
        alert('예상치 못한 문제가 발생했습니다.');
      }
    } finally {
      event.target.value = '';
    }
  };

  return (
    <div className={containerBox}>
      <div className={profileImageContainer}>
        <div className={profileImage}>
          {profileImageSrc ? (
            <Image
              src={profileImageSrc}
              className="profileImage"
              alt="프로필 이미지"
              width={160}
              height={160}
            />
          ) : (
            <Image
              src="/images/defaultProfileImage.png"
              className="defaultProfileImage"
              alt="기본 프로필 이미지"
              width={160}
              height={160}
            />
          )}
          <Image
            className={editButton}
            src="/icons/profileeditbutton.svg"
            alt="프로필편집버튼"
            width={44}
            height={44}
            onClick={() => document.getElementById('fileInput')?.click()}
          />
        </div>
      </div>
      <div>
        {isLoading && <p></p>} {/* 로딩 상태 표시 */}
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleProfileImageChange}
        />
      </div>
      <div className={navigationBoxes}>
        <Link href="/my-info" className={linkStyle}>
          <div
            className={`${navigationBox} ${
              activeIndex === 0 ? activeNavigationBox : ''
            }`}
          >
            <Image
              className={`${navigationBoxImage} ${
                activeIndex === 0 ? activeImage : inactiveImage
              }`}
              src="/icons/myprofileicon.svg"
              alt="내정보"
              width={24}
              height={24}
            />
            <p className={activeIndex === 0 ? activeText : inactiveText}>
              내 정보
            </p>
          </div>
        </Link>
        <Link href="/my-reservations" className={linkStyle}>
          <div
            className={`${navigationBox} ${
              activeIndex === 1 ? activeNavigationBox : ''
            }`}
          >
            <Image
              className={`${navigationBoxImage} ${
                activeIndex === 1 ? activeImage : inactiveImage
              }`}
              src="/icons/reservationdetail.svg"
              alt="예약내역"
              width={24}
              height={24}
            />
            <p className={activeIndex === 1 ? activeText : inactiveText}>
              예약 내역
            </p>
          </div>
        </Link>
        <Link href="/my-activities" className={linkStyle}>
          <div
            className={`${navigationBox} ${
              activeIndex === 2 ? activeNavigationBox : ''
            }`}
          >
            <Image
              className={`${navigationBoxImage} ${
                activeIndex === 2 ? activeImage : inactiveImage
              }`}
              src="/icons/experiencemanage.svg"
              alt="내 체험 관리"
              width={24}
              height={24}
            />
            <p className={activeIndex === 2 ? activeText : inactiveText}>
              내 체험 관리
            </p>
          </div>
        </Link>
        <Link href="/precondition" className={linkStyle}>
          <div
            className={`${navigationBox} ${
              activeIndex === 3 ? activeNavigationBox : ''
            }`}
          >
            <Image
              className={`${navigationBoxImage} ${
                activeIndex === 3 ? activeImage : inactiveImage
              }`}
              src="../../../icons/precondition.svg"
              alt="예약 현황"
              width={24}
              height={24}
            />
            <p className={activeIndex === 3 ? activeText : inactiveText}>
              예약현황
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SideNavigationMenu;
