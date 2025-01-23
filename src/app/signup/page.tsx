'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { postSignUp } from '../api/authApi';
import Image from 'next/image';
import Link from 'next/link';
import {
  container,
  card,
  inputContainer,
  label,
  inputField,
  errorMessage,
  errorVisible,
  signupBtn,
  loginArea,
  linkButton,
  text,
  logoBlock,
  modalOverlay,
  modalContent,
  closeButton,
} from './SignUp.css';
import { isAxiosError } from 'axios';
import SocialLogin from '../signin/socialSignin';

const SignUp = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [errors, setErrors] = useState({
    email: '',
    nickname: '',
    password: '',
    confirmPassword: '',
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const handleBlur = (field: string) => {
    let errorMessage = '';

    switch (field) {
      case 'email':
        if (!email) {
          errorMessage = '이메일은 필수 입력입니다.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
          errorMessage = '이메일 형식으로 작성해 주세요.';
        }
        break;

      case 'nickname':
        if (!nickname) {
          errorMessage = '닉네임은 필수 입력입니다.';
        } else if (nickname.length > 20) {
          errorMessage = '닉네임은 최대 20자까지 가능합니다.';
        }
        break;

      case 'password':
        if (!password) {
          errorMessage = '비밀번호는 필수 입력입니다.';
        } else if (password.length < 8) {
          errorMessage = '비밀번호는 최소 8자 이상입니다.';
        } else if (
          !/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]+$/.test(
            password
          )
        ) {
          errorMessage = '비밀번호는 숫자, 영문, 특수문자로만 가능합니다.';
        }
        break;

      case 'confirmPassword':
        if (!confirmPassword) {
          errorMessage = '비밀번호 확인을 입력해주세요.';
        } else if (confirmPassword !== password) {
          errorMessage = '비밀번호가 일치하지 않습니다.';
        }
        break;

      default:
        break;
    }

    setErrors((prevErrors) => ({ ...prevErrors, [field]: errorMessage }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    for (const key in errors) {
      handleBlur(key);
    }

    const isValid =
      Object.values(errors).every((error) => error === '') &&
      email &&
      nickname &&
      password &&
      confirmPassword;

    if (isValid) {
      try {
        await postSignUp({
          email,
          nickname,
          password,
        });
        setModalMessage('가입이 완료되었습니다!');
        setIsModalOpen(true);
      } catch (error) {
        if (isAxiosError(error)) {
          if (error.response?.status === 409) {
            setModalMessage('이미 사용 중인 이메일입니다.'); // 409 에러 메시지
          } else {
            setModalMessage('가입 중 오류가 발생했습니다.'); // 다른 Axios 에러 처리
          }
        } else if (error instanceof Error) {
          // 일반 에러 처리
          setModalMessage(error.message); // 사용자 정의 에러 메시지 사용
        } else {
          setModalMessage('가입 중 오류가 발생했습니다.'); // 다른 오류 처리
        }
        setIsModalOpen(true);
        console.log('Modal opened:', isModalOpen);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalMessage('');
    if (modalMessage === '가입이 완료되었습니다!') {
      router.push('/signin'); // 성공 시 로그인 페이지로 이동
    }
  };

  return (
    <div className={container}>
      <div className={card}>
        <Link href="/" className={logoBlock}>
          <Image
            src="/icons/logoGroup.svg"
            alt="로고"
            width={340}
            height={180}
            priority
          />
        </Link>
        <form onSubmit={handleSubmit}>
          <div className={inputContainer}>
            <label className={label}>이메일</label>
            <input
              type="email"
              className={inputField}
              placeholder="이메일을 입력해 주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => handleBlur('email')}
              onFocus={() => setErrors((prev) => ({ ...prev, email: '' }))}
            />
            {errors.email && (
              <p
                className={`${errorMessage} ${
                  errors.email ? errorVisible : ''
                }`}
              >
                {errors.email}
              </p>
            )}
          </div>
          <div className={inputContainer}>
            <label className={label}>닉네임</label>
            <input
              type="text"
              className={inputField}
              placeholder="닉네임을 입력해 주세요"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              onBlur={() => handleBlur('nickname')}
              onFocus={() => setErrors((prev) => ({ ...prev, nickname: '' }))}
            />
            {errors.nickname && (
              <p
                className={`${errorMessage} ${
                  errors.nickname ? errorVisible : ''
                }`}
              >
                {errors.nickname}
              </p>
            )}
          </div>
          <div className={inputContainer}>
            <label className={label}>비밀번호</label>
            <input
              type="password"
              className={inputField}
              placeholder="영문, 숫자 포함 8자 이상"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={() => handleBlur('password')}
              onFocus={() => setErrors((prev) => ({ ...prev, password: '' }))}
            />
            {errors.password && (
              <p
                className={`${errorMessage} ${
                  errors.password ? errorVisible : ''
                }`}
              >
                {errors.password}
              </p>
            )}
          </div>
          <div className={inputContainer}>
            <label className={label}>비밀번호 확인</label>
            <input
              type="password"
              className={inputField}
              placeholder="비밀번호 확인"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              onBlur={() => handleBlur('confirmPassword')}
              onFocus={() =>
                setErrors((prev) => ({ ...prev, confirmPassword: '' }))
              }
            />
            {errors.confirmPassword && (
              <p
                className={`${errorMessage} ${
                  errors.password ? errorVisible : ''
                }`}
              >
                {errors.confirmPassword}
              </p>
            )}
          </div>
          <button type="submit" className={signupBtn}>
            회원가입하기
          </button>
        </form>
        <div className={loginArea}>
          <p className={text}>회원이신가요?</p>
          <Link href="/signin" className={linkButton}>
            로그인하기
          </Link>
        </div>
        <div>
          {loginError && <div className="error-message">{loginError}</div>}{' '}
          {/* 오류 메시지 표시 */}
          <SocialLogin setLoginError={setLoginError} />
        </div>
      </div>
      {isModalOpen && (
        <div className={modalOverlay}>
          <div className={modalContent}>
            <h2>{modalMessage}</h2>
            <button className={closeButton} onClick={closeModal}>
              닫기
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUp;
