'use client';

import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import Modal from '@/app/my-reservations/components/Modal';
import CustomButton from '@/components/CustomButton';
import Check from '../../../../public/icons/check.svg';
import { instance } from '@/app/api/instance';
import { AxiosError } from 'axios';
import * as S from './DeleteActivityModal.css';

interface DeleteActivityModalProps {
  isOpen: boolean;
  activityId: number | null;
  onClose: () => void;
}

export default function DeleteActivityModal({
  isOpen,
  activityId,
  onClose,
}: DeleteActivityModalProps) {
  const queryClient = useQueryClient();

  const { mutate: deleteActivity, isPending } = useMutation<
    void,
    AxiosError<{ message?: string }>,
    number | null
  >({
    mutationFn: async (id) => {
      if (id == null) return;
      await instance.delete(`/my-activities/${id}`);
    },
    onSuccess: () => {
      alert('체험이 삭제되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['myActivities'] });
      onClose();
    },
    onError: (error) => {
      const status = error.response?.status;
      const msg = error.response?.data?.message;
      console.error(`Error (${status}): ${msg}`);
      alert('체험 삭제 중 문제가 발생했습니다.');
    },
  });

  const handleDeleteActivity = () => {
    deleteActivity(activityId);
  };

  if (!isOpen) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div>
        {isPending ? (
          <div className={S.deleteModalContainer}>
            <p className={S.deleteModalHeaderH2}>삭제중...</p>
          </div>
        ) : (
          <div className={S.deleteModalContainer}>
            <div className={S.deleteModalHeader}>
              <div className={S.checkIconContainer}>
                <Check className={S.checkIcon} />
              </div>
              <h3 className={S.deleteModalHeaderH2}>체험을 삭제하시겠어요?</h3>
            </div>
            <div className={S.deleteModalButtonContainer}>
              <CustomButton mode="no" onClick={onClose}>
                아니오
              </CustomButton>
              <CustomButton mode="delete" onClick={handleDeleteActivity}>
                삭제하기
              </CustomButton>
            </div>
          </div>
        )}
      </div>
    </Modal>
  );
}
