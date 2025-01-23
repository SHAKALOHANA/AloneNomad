'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Modal from './Modal';
import StarRating from './StarRating';
import CustomButton from '@/components/CustomButton';
import { instance } from '@/app/api/instance';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import * as S from './ReviewModal.css';
import Btn_X from '../../../../public/icons/btn_X.svg';

interface ReviewModalProps {
  id: number;
  activity: {
    bannerImageUrl: string;
    title: string;
    id: number;
  };
  totalPrice: number;
  headCount: number;
  date: string;
  startTime: string;
  endTime: string;
}

interface PostReviewResponse {
  deletedAt: string | null;
  updatedAt: string;
  createdAt: string;
  content: string;
  rating: number;
  userId: number;
  activityId: number;
  teamId: string;
  id: number;
}

interface ErrorData {
  message?: string;
}

export default function ReviewModal({ ...reservation }: ReviewModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const queryClient = useQueryClient();

  const { mutate: submitReview, isPending } = useMutation<
    PostReviewResponse,
    AxiosError<ErrorData>,
    void
  >({
    mutationFn: async () => {
      const { data } = await instance.post<PostReviewResponse>(
        `/my-reservations/${reservation.id}/reviews`,
        { rating, content }
      );
      return data;
    },

    onSuccess: () => {
      setIsOpen(false);
      alert('리뷰가 작성되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['my-reservations'] });
    },

    onError: (error) => {
      const status = error.response?.status;
      const msg = error.response?.data?.message;

      switch (status) {
        case 400:
          alert(msg || '리뷰 내용은 문자열로 입력해주세요.(400)');
          break;
        case 401:
          alert(msg || '로그인이 필요합니다.(401)');
          break;
        case 403:
          alert(msg || '본인의 예약만 리뷰를 작성할 수 있습니다.(403)');
          break;
        case 404:
          alert(msg || '존재하지 않는 예약입니다.(404)');
          break;
        case 409:
          alert(msg || '이미 리뷰를 작성했습니다.(409)');
          break;
        default:
          console.error('리뷰 작성 중 에러 발생:', error);
          alert('리뷰 작성 실패! 잠시 후 다시 시도해주세요.');
      }
    },
  });

  const handleSubmit = () => {
    if (isPending) return;
    submitReview();
  };

  return (
    <div>
      <CustomButton mode="writeReview" onClick={() => setIsOpen(true)} />

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className={S.reviewModalContainer}>
          <div className={S.reviewModalHeader}>
            <h2 className={S.reviewModalHeaderH2}>후기 작성</h2>
            <button
              className={S.modalCloseBtn}
              onClick={() => setIsOpen(false)}
            >
              <Btn_X />
            </button>
          </div>
          <div className={S.activityInfoContainer}>
            <div className={S.activityImage}>
              <Image
                src={reservation.activity.bannerImageUrl}
                alt={`${reservation.activity.title} 체험 이미지`}
                fill
              />
            </div>
            <div className={S.activityInfo}>
              <h3 className={S.activityTitle}>{reservation.activity.title}</h3>
              <p
                className={S.activityDate}
              >{`${reservation.date} | ${reservation.startTime} ~ ${reservation.endTime} | ${reservation.headCount}명`}</p>
              <p
                className={S.activityPrice}
              >{`₩${reservation.totalPrice.toLocaleString()}`}</p>
            </div>
          </div>
          <div className={S.starRatingContainer}>
            <StarRating
              value={rating}
              onChange={(newValue) => setRating(newValue)}
            />
          </div>
          <textarea
            className={S.reviewTextarea}
            placeholder="후기를 작성해주세요"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <CustomButton
            mode="write"
            onClick={handleSubmit}
            disabled={isPending}
          />
        </div>
      </Modal>
    </div>
  );
}
