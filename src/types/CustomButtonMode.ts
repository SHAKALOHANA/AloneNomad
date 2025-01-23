export type CustomButtonMode =
  | 'login'
  | 'signup'
  | 'search'
  | 'save'
  | 'writeReview'
  | 'write'
  | 'reserve'
  | 'confirm'
  | 'reservationCancel'
  | 'experienceRegistration'
  | 'edit'
  | 'reservationFinalize'
  | 'reservationReject'
  | 'reservationConfirmed'
  | 'reservationDenied'
  | 'check'
  | 'cancel'
  | 'delete'
  | 'no'
  | 'none';

export const modeTextMap: Record<CustomButtonMode, string> = {
  login: '로그인하기',
  signup: '회원 가입하기',
  search: '검색하기',
  save: '저장하기',
  writeReview: '후기 작성',
  write: '작성하기',
  reserve: '예약하기',
  confirm: '확인', //예약하기 - 모바일버전에서만 변환되어 활용
  reservationCancel: '예약 취소',
  experienceRegistration: '체험 등록하기',
  edit: '수정하기',
  reservationFinalize: '확정하기',
  reservationReject: '거절하기',
  reservationConfirmed: '예약 확정',
  reservationDenied: '예약 거절',
  check: '확인', // 단순 팝업창 확인
  cancel: '취소하기',
  delete: '삭제하기',
  no: '아니오',
  none: '',
};
