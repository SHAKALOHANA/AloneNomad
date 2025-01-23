'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { instance } from '@/app/api/instance';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import SideNavigationMenu from '@/components/SideNavigationMenu';
import CategoryDropDown from './../components/categoryDropdown';
import StartTimeDropDown from '@/app/experienceregister/StartTimeDropDown';
import EndTimeDropDown from '@/app/experienceregister/EndTimeDropDown';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import DaumPostcode from 'react-daum-postcode';
import CustomButton from '@/components/CustomButton';
import * as S from './page.css';
import Xbotton from '../../../../public/icons/xbutton.svg';

/* ------------------ 타입 정의 ------------------ */
interface Schedule {
  date: string;
  startTime: string;
  endTime: string;
}

interface ActivityResParams {
  id: number;
  userId: number;
  title: string;
  description: string;
  category: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  rating: number;
  reviewCount: number;
  createdAt: string;
  updatedAt: string;
  subImages: {
    imageUrl: string;
    id: number;
  }[];
  schedules: {
    startTime: string;
    endTime: string;
    date: string;
    id: number;
  }[];
}

interface UpdateMyActivityBodyData {
  title: string;
  category: string;
  description: string;
  price: number;
  address: string;
  bannerImageUrl: string;
  subImageIdsToRemove: number[];
  subImageUrlsToAdd: string[];
  scheduleIdsToRemove: number[];
  schedulesToAdd: {
    date: string;
    startTime: string;
    endTime: string;
  }[];
}

export default function ExperienceEdit() {
  const params = useParams<{ activityId: string }>();

  const activityIdString = params.activityId; // string | undefined
  const activityId = activityIdString
    ? parseInt(activityIdString, 10)
    : undefined;

  const queryClient = useQueryClient();

  /* =============== 서버에서 기존 데이터 GET =============== */
  const {
    data: activityDetail,
    isLoading: isLoadingActivity,
    isError: isActivityError,
  } = useQuery<ActivityResParams, Error>({
    queryKey: ['activityDetail', activityId],
    queryFn: async () => {
      if (!activityId) {
        throw new Error('activityId가 유효하지 않습니다.');
      }
      const res = await instance.get(`/activities/${activityId}`);
      return res.data as ActivityResParams;
    },
    // activityId가 없으면 요청 X
    enabled: !!activityId,
  });

  const [dates, setDates] = useState<Schedule[]>([]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [startTime, setStartTime] = useState<string>('시간선택');
  const [endTime, setEndTime] = useState<string>('시간선택');
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);

  const [address, setAddress] = useState<string>('');
  const [isPostcodeVisible, setIsPostcodeVisible] = useState(false);
  const [price, setPrice] = useState<string>('');
  const [priceError, setPriceError] = useState<string | null>(null);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<string>('');

  const [bannerImageUrl, setBannerImageUrl] = useState<string>('');
  const [introImageUrls, setIntroImageUrls] = useState<string[]>([]);

  // 반응형 체크
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* =============== 서버 데이터 -> 로컬 상태 세팅 =============== */
  useEffect(() => {
    if (activityDetail) {
      setTitle(activityDetail.title);
      setDescription(activityDetail.description);
      setCategory(activityDetail.category);
      setPrice(String(activityDetail.price));
      setAddress(activityDetail.address);
      setBannerImageUrl(activityDetail.bannerImageUrl);

      const initialIntroUrls = activityDetail.subImages.map(
        (img) => img.imageUrl
      );
      setIntroImageUrls(initialIntroUrls);

      const initialSchedules: Schedule[] = activityDetail.schedules.map(
        (s) => ({
          date: s.date,
          startTime: s.startTime,
          endTime: s.endTime,
        })
      );
      setDates(initialSchedules);
    }
  }, [activityDetail]);

  // 주소 찾기
  interface DaumPostcodeCompleteData {
    address: string;
    zonecode: string;
  }
  const handlePostcodeClick = () => {
    setIsPostcodeVisible(true);
  };
  const handlePostcodeComplete = (data: DaumPostcodeCompleteData) => {
    setAddress(data.address);
    setIsPostcodeVisible(false);
  };

  // 일정 추가/삭제
  const handleAddDate = () => {
    if (selectedDate && startTime !== '시간선택' && endTime !== '시간선택') {
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, '0');
      const day = String(selectedDate.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;

      setDates((prev) => [
        ...prev,
        { date: formattedDate, startTime, endTime },
      ]);
    }
  };
  const handleRemoveDate = (idxToRemove: number) => {
    setDates((prev) => prev.filter((_, i) => i !== idxToRemove));
  };

  // 가격 숫자만
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setPrice(value);
      setPriceError(null);
    } else {
      setPriceError('가격은 숫자만 입력 가능합니다.');
    }
  };

  // 카테고리 선택
  const handleCategoryChange = (selectedCategory: string) => {
    setCategory(selectedCategory);
  };

  // 제목, 설명
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setDescription(e.target.value);
  };

  // 배너 이미지 업로드/삭제
  const handleBannerImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.[0]) return;

    try {
      // 1) 파일 준비
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append('image', file);

      // 2) 서버에 업로드 (multipart/form-data)
      const res = await instance.post('/activities/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // 3) 업로드 성공 → 서버가 준 URL (activityImageUrl)을 배너에 반영
      const { activityImageUrl } = res.data;
      setBannerImageUrl(activityImageUrl);
    } catch (err) {
      console.error(err);
      alert('배너 이미지 업로드 실패');
    }
  };

  const handleDeleteBannerImage = () => {
    setBannerImageUrl('');
  };

  // 소개 이미지
  const handleIntroImageChange = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!e.target.files?.[0]) return;

    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('image', file);

    try {
      // 1) 업로드
      // /activities/image (multipart/form-data)
      const res = await instance.post('/activities/image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // 2) 응답에서 실제 업로드된 이미지 URL 받기
      const { activityImageUrl } = res.data;

      // 3) introImageUrls 배열에 추가
      setIntroImageUrls((prev) => [...prev, activityImageUrl]);

      // 필요하다면 업로드 성공 메시지
      // alert('이미지 업로드 성공');
    } catch (error) {
      console.error(error);
      alert('이미지 업로드 실패');
    }
  };

  const handleDeleteIntroImage = (idx: number) => {
    setIntroImageUrls((prev) => prev.filter((_, i) => i !== idx));
  };

  // PATCH 뮤테이션
  const patchMutation = useMutation({
    mutationFn: async (updateBody: UpdateMyActivityBodyData) => {
      if (!activityId) throw new Error('activityId가 없음');
      await instance.patch(`/my-activities/${activityId}`, updateBody);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['activityDetail', activityId],
      });
      alert('수정이 완료되었습니다.');
    },
    onError: (err) => {
      console.error(err);
      alert('수정 실패. 다시 시도해주세요.');
    },
  });

  // 업데이트 핸들러
  const handleUpdate = () => {
    if (!activityDetail || !activityId) return;

    // 1) 원래 서버에 존재했던 subImages
    //    -> 지금 introImageUrls 배열에 없는 것 => 삭제 대상
    const subImageIdsToRemove = activityDetail.subImages
      .filter((orig) => !introImageUrls.includes(orig.imageUrl))
      .map((orig) => orig.id);

    // 2) 새로 추가된 이미지
    //    -> 기존 subImages 목록에는 없고, introImageUrls에는 있는 것
    const existingUrls = activityDetail.subImages.map((orig) => orig.imageUrl);
    const subImageUrlsToAdd = introImageUrls.filter(
      (url) => !existingUrls.includes(url)
    );

    // 3) 스케줄 변경도 동일한 로직
    const scheduleIdsToRemove = activityDetail.schedules.map((sch) => sch.id);
    const schedulesToAdd = dates.map((d) => ({
      date: d.date,
      startTime: d.startTime,
      endTime: d.endTime,
    }));

    const updateBody: UpdateMyActivityBodyData = {
      title: title.trim(),
      category: category.trim(),
      description: description.trim(),
      price: Number(price) || 0,
      address: address.trim(),
      bannerImageUrl,
      subImageIdsToRemove, // 삭제할 ID 배열
      subImageUrlsToAdd, // 새로 추가할 이미지 URL 배열
      scheduleIdsToRemove,
      schedulesToAdd,
    };

    patchMutation.mutate(updateBody);
  };

  // 렌더링
  return (
    <div>
      <div className={S.mainContainer}>
        {!isMobile && <SideNavigationMenu />}
        <div className={S.sideContainer}>
          <div className={S.qqq}>
            <h1>내 체험 수정</h1>
            <CustomButton mode="experienceRegistration" onClick={handleUpdate}>
              수정하기
            </CustomButton>
          </div>

          {isLoadingActivity ? (
            <p>로딩 중...</p>
          ) : isActivityError ? (
            <p>데이터를 불러오는 중 오류가 발생했습니다.</p>
          ) : (
            <div>
              <input
                className={`${S.contentContainer} ${S.inputWithPlaceholder}`}
                type="text"
                placeholder="제목"
                value={title}
                onChange={handleTitleChange}
                style={{ marginBottom: '20px' }}
              />

              <CategoryDropDown
                onCategorySelect={handleCategoryChange}
                selectedCategory={category}
              />

              <textarea
                className={`${S.descriptionContainer} ${S.inputWithPlaceholder}`}
                placeholder="설명"
                value={description}
                onChange={handleDescriptionChange}
              />

              <h2>가격</h2>
              <input
                className={`${S.contentContainer} ${S.inputWithPlaceholder}`}
                type="text"
                placeholder="가격"
                value={price}
                onChange={handlePriceChange}
              />
              {priceError && (
                <p style={{ color: 'red', fontSize: '12px' }}>{priceError}</p>
              )}

              <h2>주소</h2>
              <div style={{ position: 'relative' }}>
                <input
                  className={`${S.contentContainer} ${S.inputWithPlaceholder}`}
                  type="text"
                  placeholder="주소를 입력해주세요"
                  value={address}
                  readOnly
                />
                <button
                  className={S.postSearchButton}
                  onClick={handlePostcodeClick}
                >
                  우편번호 검색
                </button>
              </div>
              {isPostcodeVisible && (
                <DaumPostcode onComplete={handlePostcodeComplete} />
              )}

              <h2>예약 가능한 시간대</h2>
              <div className={S.reservationContainer}>
                <div className={S.dateContainer}>
                  <p style={{ color: selectedDate ? 'black' : '#a1a1a1' }}>
                    {selectedDate
                      ? `${selectedDate.getFullYear().toString().slice(-2)}/${(
                          selectedDate.getMonth() + 1
                        )
                          .toString()
                          .padStart(2, '0')}/${selectedDate
                          .getDate()
                          .toString()
                          .padStart(2, '0')}`
                      : 'YY/MM/DD'}
                  </p>
                  <Image
                    src="../../../icons/calendar.svg"
                    alt="달력버튼"
                    width={32}
                    height={32}
                    style={{
                      position: 'absolute',
                      right: '8px',
                      cursor: 'pointer',
                    }}
                    onClick={() => setIsCalendarVisible((prev) => !prev)}
                  />
                  {isCalendarVisible && (
                    <div className={S.calendarWrapper}>
                      <DayPicker
                        selected={selectedDate}
                        onDayClick={(date) => {
                          setSelectedDate(date);
                          setIsCalendarVisible(false);
                        }}
                      />
                    </div>
                  )}
                </div>
                <StartTimeDropDown
                  onChange={setStartTime}
                  selected={startTime}
                />
                <p className={S.tildeSymbol}>~</p>
                <EndTimeDropDown onChange={setEndTime} selected={endTime} />
                <Image
                  src="/icons/plusbutton.svg"
                  alt="추가버튼"
                  width={56}
                  height={56}
                  onClick={handleAddDate}
                  style={{
                    cursor:
                      startTime === '시간선택' ||
                      endTime === '시간선택' ||
                      !selectedDate
                        ? 'not-allowed'
                        : 'pointer',
                    opacity:
                      startTime === '시간선택' ||
                      endTime === '시간선택' ||
                      !selectedDate
                        ? 0.5
                        : 1,
                  }}
                />
              </div>
              <div className={S.line} />

              {/* 일정 목록 */}
              <div>
                {dates.map((dateInfo, index) => (
                  <div key={index} className={S.addedDateWrapper}>
                    <div className={S.addedDateContainer}>{dateInfo.date}</div>
                    <div className={S.addedStartTimeContainer}>
                      {dateInfo.startTime}
                    </div>
                    <p className={S.tildeSymbol}>~</p>
                    <div className={S.addedEndTimeContainer}>
                      {dateInfo.endTime}
                    </div>
                    <Image
                      src="/icons/minusbutton.svg"
                      alt="빼기버튼"
                      width={56}
                      height={56}
                      style={{ cursor: 'pointer' }}
                      onClick={() => handleRemoveDate(index)}
                    />
                  </div>
                ))}
              </div>

              <h2>배너 이미지</h2>
              <div className={S.bannerContainer}>
                <label htmlFor="banner-upload" className={S.imageRegister}>
                  <input
                    id="banner-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleBannerImageChange}
                  />
                  {bannerImageUrl ? '이미지 변경' : '이미지 업로드'}
                </label>
                {bannerImageUrl && (
                  <div
                    style={{ position: 'relative', width: 180, height: 180 }}
                  >
                    <Image
                      className={S.images}
                      src={bannerImageUrl}
                      alt="배너 이미지 미리보기"
                      fill
                    />
                    <Xbotton
                      className={S.deleteButton}
                      onClick={handleDeleteBannerImage}
                    />
                  </div>
                )}
              </div>

              <h2>소개 이미지</h2>
              <div className={S.introContainer}>
                <label htmlFor="intro-upload" className={S.imageRegister}>
                  <input
                    id="intro-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleIntroImageChange}
                  />
                  이미지 업로드
                </label>
                {introImageUrls.map((url, index) => (
                  <div
                    key={index}
                    style={{ position: 'relative', width: 180, height: 180 }}
                  >
                    <Image
                      className={S.images}
                      src={url}
                      alt={`소개 이미지 ${index + 1}`}
                      fill
                    />
                    <Xbotton
                      className={S.deleteButton}
                      onClick={() => handleDeleteIntroImage(index)}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
