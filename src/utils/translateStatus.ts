export const translateStatus = (status: string) => {
  switch (status) {
    case 'pending':
      return '예약 신청';
    case 'confirmed':
      return '예약 승인';
    case 'declined':
      return '예약 거절';
    case 'canceled':
      return '예약 취소';
    case 'completed':
      return '체험 완료';
    default:
      return '';
  }
};

export const FIXED_OPTIONS = [
  { label: '전체', value: '' },
  { label: '예약 신청', value: 'pending' },
  { label: '예약 승인', value: 'confirmed' },
  { label: '예약 거절', value: 'declined' },
  { label: '예약 취소', value: 'canceled' },
  { label: '체험 완료', value: 'completed' },
];

