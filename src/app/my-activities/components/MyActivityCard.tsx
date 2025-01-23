'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import * as S from './MyActivityCard.css';
import { MyActivityCardProps } from '@/types/MyActivitiesList';
import StarOnIcon from '../../../../public/icons/star_on.svg';
import MeatballIcon from '../../../../public/icons/meatball.svg';
import DeleteActivityModal from './DeleteActivityModal';
import DropdownMenu from '@/components/Dropdown/DropdownMenu';

interface dropdownItem {
  label: string;
  value: string;
}

const dropdownItems: dropdownItem[] = [
  { label: '수정하기', value: 'edit' },
  { label: '삭제하기', value: 'delete' },
];

const dropList = dropdownItems.map((option) => ({
  label: option.label,
  value: option.value,
}));

export default function MyExperienceCard({ ...activity }: MyActivityCardProps) {
  const router = useRouter();
  const [deleteModalState, setDeleteModalState] = useState<{
    isOpen: boolean;
    id: number | null;
  }>({ isOpen: false, id: null });

  const openDeleteModal = (id: number) => {
    setDeleteModalState({ isOpen: true, id });
  };

  const closeDeleteModal = () => {
    setDeleteModalState({ isOpen: false, id: null });
  };

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDropdownOpen((prev) => !prev);
  };

  const handleCardClick = () => {
    if (dropdownOpen) {
      setDropdownOpen(false);
    }
  };

  const handleSelect = (value: string) => {
    setDropdownOpen(false); // 드롭다운을 닫아줌
    switch (value) {
      case 'edit':
        // 수정하기
        router.push(`/edit-activity/${activity.id}`);
        break;
      case 'delete':
        // 삭제하기
        openDeleteModal(activity.id);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={S.cardContainer} onClick={handleCardClick}>
        <div className={S.imageContainer}>
          <Image
            src={activity.bannerImageUrl}
            alt={`${activity.title} 배너 이미지`}
            fill
          />
        </div>
        <div className={S.activityInfoContainer}>
          <div className={S.ratingContainer}>
            <div className={S.ratingStar}>
              <StarOnIcon />
            </div>
            <p className={S.rating}>
              {activity.rating} {`(${activity.reviewCount})`}
            </p>
          </div>
          <h3 className={S.activityTitle}>{activity.title}</h3>
          <div className={S.activityPriceContainer}>
            <div className={S.activityPriceWrapper}>
              <p
                className={S.activityPrice}
              >{`￦${activity.price.toLocaleString()}`}</p>
              <p className={S.activityPriceUnit}> /인</p>
            </div>

            <div className={S.dropdownContainer}>
              <MeatballIcon className={S.dropdown} onClick={toggleDropdown} />
              <DropdownMenu
                items={dropList}
                onSelect={handleSelect}
                isVisible={dropdownOpen}
              />
            </div>
          </div>
        </div>
      </div>

      {deleteModalState.isOpen && (
        <DeleteActivityModal
          isOpen={deleteModalState.isOpen}
          activityId={deleteModalState.id}
          onClose={closeDeleteModal}
        />
      )}
    </>
  );
}
