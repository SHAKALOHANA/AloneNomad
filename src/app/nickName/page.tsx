'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const NicknameInput: React.FC = () => {
  const [nickname, setNickname] = useState('');
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [errorMessage, setErrorMessage] = useState('');
  // TODO: 해당 메소드 맞는지 확인 필요
  const router = useRouter();

  const getKakaoCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');
    return code
  }

  const handleKakaoSignUp = async () => {
    const code = getKakaoCode();

    if (!nickname || !code) {
      setIsAvailable(null);
      return;
    }

    try {
      const response = await fetch(
        `https://sp-globalnomad-api.vercel.app/10-1/oauth/sign-up/kakao`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            nickname, // 닉네임
            redirectUri: 'http://localhost:3000/nickname',
            token: code,
          }),
        }
      );

      const responseData = await response.json()
      console.log("responseData:", responseData);

      // 400 에러 처리
      if (response.status === 400) {
        if (responseData.message === '이미 등록된 사용자입니다.') {
            setErrorMessage('닉네임이 이미 사용 중입니다.');
            setIsAvailable(false);
        } else if (responseData.message === '잘못된 인가 코드입니다.') {
            setErrorMessage('인가 코드가 잘못되었습니다.');
            setIsAvailable(null);
        } else {
            setErrorMessage('알 수 없는 오류가 발생했습니다.');
        }
        return;
    }
      // 간편 로그인에 등록
      
      if (response.ok) {
        const loginResponse = await fetch(
          `https://sp-globalnomad-api.vercel.app/10-1/oauth/sign-in/kakao`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              redirectUri: 'http://localhost:3000/signin', // 리다이렉트 URI
              token: code, // 인가 코드
            }),
          }
        );

        if (loginResponse.ok) {
          router.push('/'); // 로그인 성공 시 홈으로 리다이렉트
        } else {
          const loginError = await loginResponse.json();
          setErrorMessage(loginError.message || '로그인에 실패했습니다.');
        }
      }
    } catch (error) {
      console.error('Error checking nickname:', error);
      setErrorMessage('서버 오류가 발생했습니다.');
      setIsAvailable(null);
      return false;
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await handleKakaoSignUp();  
  };

  return (
    <div>
      <h1>닉네임 입력</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
          placeholder="닉네임을 입력하세요"
        />
        {isAvailable !== null && (
          <div>
            {isAvailable ? (
              <span style={{ color: 'green' }}>사용 가능한 닉네임입니다.</span>
            ) : (
              <span style={{ color: 'red' }}>이미 사용 중인 닉네임입니다.</span>
            )}
          </div>
        )}
        {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
        <button type="submit" disabled={isAvailable === false}>
          제출
        </button>
      </form>
    </div>
  );
};

export default NicknameInput;
