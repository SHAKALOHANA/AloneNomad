'use client';

import { useRouter } from 'next/navigation';
// import { useEffect } from 'react';
import {
  socialBtn,
  socialInfo,
  socialContainer,
  SNSBtnBox,
} from './SocialSignin.css';
import Image from 'next/image';

interface SocialLoginProps {
  setLoginError: (message: string) => void;
}

// interface KakaoUserInfo {
//   id: number;
//   nickname: string;
//   profile_image: string;
// }

const SocialLogin: React.FC<SocialLoginProps> = ({ setLoginError }) => {
  const router = useRouter();

  const handleLoginKakao = () => {
    const KAKAO_APP_KEY = process.env.NEXT_PUBLIC_KAKAO_APP_KEY; // 카카오 앱 키
    const REDIRECT_URI = 'http://localhost:3000/nickname'; // 리디렉션 URI
    // 카카오 로그인 페이지로 리디렉션
    const url = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_APP_KEY}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&response_type=code`;
    window.location.href = url;
  };

  const handleLoginGoogle = async () => {
    const url = `https://winereview-api.vercel.app/10-1/auth/sign-in/google`;
    const appKey = process.env.NEXT_PUBLIC_GOOGLE_APP_KEY;

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        appKey: appKey,
        provider: 'google',
      }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('구글 로그인 성공:', data);
      router.push('/signin');
    } else {
      const errorData = await response.json();
      const errorMessage = errorData.message || '소셜 로그인에 실패했습니다.';
      setLoginError(errorMessage);
      router.push(`/signin?error=${encodeURIComponent(errorMessage)}`);
    }
  };

  // const fetchUserInfo = async (accessToken: string) => {
  //   const response = await fetch('https://kapi.kakao.com/v2/user/me', {
  //     method: 'GET',
  //     headers: {
  //       Authorization: `Bearer ${accessToken}`,
  //       'Content-Type': 'application/json',
  //     },
  //   });

  //   if (response.ok) {
  //     const userInfo: KakaoUserInfo = await response.json();
  //     console.log('사용자 정보:', userInfo);
  //   } else {
  //     const errorData = await response.json();
  //     const errorMessage =
  //       errorData.message || '사용자 정보를 가져오는 데 실패했습니다.';
  //     setLoginError(errorMessage);
  //     router.push(`/signin?error=${encodeURIComponent(errorMessage)}`);
  //   }
  // };

  // // TODO: 토큰 받는 자리, 인가 코드를 받아서 액세스 토큰을 요청하는 함수
  // const fetchKakaoAccessToken = async (code: string) => {
  //   try {
  //     const response = await fetch(`https://kauth.kakao.com/oauth/token`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/x-www-form-urlencoded',
  //       },
  //       body: new URLSearchParams({
  //         grant_type: 'authorization_code',
  //         client_id: process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY || '', // 카카오 REST API 키
  //         redirect_uri: 'http://localhost:3000/nickname', // 리디렉션 URI
  //         code: code, // 인가 코드
  //       }).toString(),
  //     });

  //     const data = await response.json();

  //     if (response.ok) {
  //       await fetchUserInfo(data.access_token); // 액세스 토큰을 사용하여 사용자 정보 요청
  //     } else {
  //       const errorMessage = data.message || '토큰 발급에 실패했습니다.';
  //       setLoginError(errorMessage);
  //       router.push(`/signin?error=${encodeURIComponent(errorMessage)}`);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     setLoginError('서버 오류입니다.');
  //   }
  // };

  // useEffect(() => {
  //   const urlParams = new URLSearchParams(window.location.search);
  //   const code = urlParams.get('code');

  //   if (code) {
  //     // fetchKakaoAccessToken 함수를 호출하여 액세스 토큰 요청
  //     fetchKakaoAccessToken(code);
  //   }
  // }, []);

  return (
    <div className={socialContainer}>
      <div className={socialInfo}>
        <Image src="/icons/Vector2499.svg" alt="" width="180" height="2" />
        <div style={{ color: '#79747E' }}>SNS계정으로 회원가입하기</div>
        <Image src="/icons/Vector2499.svg" alt="" width="180" height="2" />
      </div>
      <div className={SNSBtnBox}>
        <button onClick={handleLoginGoogle} className={socialBtn}>
          <Image
            src="/icons/logo_google.svg"
            alt="구글 로고"
            width={72}
            height={72}
            priority
          />
        </button>
        <button onClick={handleLoginKakao} className={socialBtn}>
          <Image
            src="/icons/logo_kakao.svg"
            alt="카카오 로고"
            width={72}
            height={72}
            priority
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
