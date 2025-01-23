'use client';

import { useActivity } from '@/app/api/activity';
import ReservationBar from '@/components/ReservationBar';
import { use, useState, useEffect, useRef } from 'react';
import * as styles from './activity.css';
import 'react-day-picker/style.css';
import KakaoMap from '../../../components/Map';
import Image from 'next/image';
import DropdownMenu from '@/components/Dropdown/DropdownMenu';

interface Props {
  params: Promise<{ id: string }>;
}
interface DropdownItem {
  label: string;
  value: string;
}

const items: DropdownItem[] = [
  { label: '수정하기', value: 'edit' },
  { label: '삭제하기', value: 'delete' },
];

export default function Activities({ params }: Props) {
  const { id } = use(params);
  const activityId = parseInt(id, 10);

  const { data: activity, isLoading, error } = useActivity(activityId);

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleItemSelect = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (error) {
    return <div>에러가 발생했습니다: {error.message}</div>;
  }
  if (!activity) {
    return <div>활동 정보를 찾을 수 없습니다.</div>;
  }

  return (
    <div>
      <div className={styles.container}>
        {/* 제목 섹션 */}
        <p className={`${styles.extraText} ${styles.colorNomad}`}>
          {activity?.category}
        </p>
        <div className={styles.titleArea}>
          <h1 className={styles.title}>{activity?.title}</h1>
          <div className={styles.threedots} ref={dropdownRef}>
            <button className={styles.btnMeatball} onClick={handleButtonClick}>
              <Image
                src="/icons/meatball.svg"
                width={40}
                height={40}
                alt={'meatball'}
              />
            </button>
            <DropdownMenu
              items={items}
              onSelect={handleItemSelect}
              isVisible={isMenuOpen}
            />
          </div>
        </div>
        <div className={`${styles.extraText} ${styles.extra}`}>
          <div className={styles.colorBlack}>
            ⭐ {activity.rating}
            {'('}
            {activity.reviewCount}
            {')'}
          </div>
          <div className={`${styles.colorNomad}`}>📍 {activity.address}</div>
        </div>

        {/* 이미지 섹션 */}
        <div className={styles.imageSection}>
          <div className={styles.mainImageContainer}>
            <Image
              src={activity.bannerImageUrl}
              width={500}
              height={500}
              alt={'bannerImage'}
            />
          </div>
          <div className={styles.thumbnailContainer}>
            {activity.subImages.map((url) => (
              <div key={url.id} className={styles.thumbnail}>
                <Image
                  key={url.id}
                  src={url.imageUrl}
                  alt={`Subimage`}
                  layout="fill" // 이미지 크기 자동 조절
                  objectFit="cover" // 이미지가 컨테이너에 맞게 조정
                  priority={url.id === 0} // 첫 번째 이미지를 우선 로드
                />
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />

        <div className={styles.contentsContatiner}>
          <div className={styles.sections}>
            <hr />
            {/* 체험 설명 */}
            <section className={styles.section}>
              <h2>체험 설명</h2>
              <p className={styles.paragraph}>{activity?.description}</p>
            </section>

            {/* 지도 섹션 */}
            <section className={styles.section}>
              <br />
              <hr />
              <br />
              <div className={styles.mapContainer}>
                <KakaoMap address={activity.address} />
              </div>
            </section>
            <br />
            <br />
            <hr />

            {/* 후기 섹션 */}
            <section className={styles.section}>
              <h2>후기</h2>
              <div className={styles.ratingText}>
                <div>{activity.rating}</div>
                <div className={styles.countReview}>
                  ⭐{activity.reviewCount}개의 후기
                </div>
              </div>
              <div className={styles.review}>
                <h3 className={styles.reviewTitle}>후기 1</h3>
                <p className={styles.reviewParagraph}>1</p>
              </div>
              <div className={styles.review}>
                <h3 className={styles.reviewTitle}>후기 2</h3>
                <p className={styles.reviewParagraph}>2</p>
              </div>
              <div className={styles.review}>
                <h3 className={styles.reviewTitle}>후기 3</h3>
                <p className={styles.reviewParagraph}>3</p>
              </div>
              <br />
              <div className={styles.pagination}>
                <button className={styles.pagBu}>&lt;</button>
                {[1, 2, 3, 4, 5].map((page) => (
                  <button className={styles.pagBu} key={page}>
                    {page}
                  </button>
                ))}
                <button className={styles.pagBu}>&gt;</button>
              </div>
            </section>
          </div>

          <div className={styles.registerContainer}>
            {/* 예약 섹션 */}
            <section className={styles.section}>
              <ReservationBar
                activityId={activity.id}
                price={activity.price}
                schedules={activity.schedules}
              />
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
