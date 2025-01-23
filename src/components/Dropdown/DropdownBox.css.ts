import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/app/global.css';
import { mediaQueries } from '@/styles/media';

export const dropdownButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '127px',
  height: '53px',
  backgroundColor: theme.colors.white,
  color: theme.colors.green1,
  fontSize: theme.text['2lg-medium'].fontSize,
  lineHeight: theme.text['2lg-medium'].lineHeight,
  fontWeight: theme.text['2lg-medium'].fontWeight,
  padding: '16px 30px 16px 10px',
  boxSizing: 'border-box',
  border: `1px solid ${theme.colors.green1}`,
  borderRadius: '15px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  position: 'relative', // 자식 요소의 절대 위치 지정 가능
  selectors: {
    '&:hover': {
      backgroundColor: theme.colors.green2,
    },
    '&::after': {
      content: '"▼"', // 아이콘 표시
      position: 'absolute',
      right: '5px', // 오른쪽에서 아이콘 배치
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '16px',
      color: theme.colors.green1,
    },
  },
});

export const dropdownText = style({
  whiteSpace: 'nowrap', // 줄 바꿈 방지
  overflow: 'hidden', // 넘치는 텍스트 숨김
  textOverflow: 'ellipsis', // 줄임표 처리
  wordBreak: 'break-all',
  display: 'block',
});

export const dropdownIn = style({
  width: '800px',
  height: '56px',
  border: `1px solid ${theme.colors.gray2}`,
  borderRadius: '4px',
  selectors: {
    '&::after': {
      content: '"▼"', // 아이콘 표시
      position: 'absolute',
      right: '10px',
      top: '50%',
      transform: 'translateY(-50%)',
      fontSize: '16px',
      color: '#888',
      pointerEvents: 'none', // 아이콘 클릭 방지
    },
  },
})

export const defaultDropdown = style({
  display: 'flex',
  alignItems: 'center',
  //justifyContent: 'center',
  backgroundColor: theme.colors.white,
  color: theme.colors.green1,
  fontSize: theme.text['lg-bold'].fontSize,
  lineHeight: theme.text['lg-bold'].lineHeight,
  fontWeight: theme.text['lg-bold'].fontWeight,
  cursor: 'pointer',
  border: `1px solid ${theme.colors.green1}`,
  borderRadius: '15px',
  paddingLeft: '20px',
});

export const variantsDropdown = styleVariants({
  price: {
    width: '127px',
    height: '48px',
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.gray4,
      },
    },
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '48px',
      },
    },
  },
  threedot: {
    width: '640px',
    height: '48px',
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.gray4,
      },
    },
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '48px',
      },
    },
  },
  filter: {
    width: '136px',
    height: '56px',
    borderRadius: '4px',
    '@media': {
      [mediaQueries.tablet]: {},
      [mediaQueries.mobile]: {
        width: '96px',
        height: '56px',
      },
    },
  },
  category: {
    width: '120px',
    height: '48px',
    borderRadius: '4px',
  },
  time: {
    width: '144px',
    height: '43px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '112px',
        height: '40px',
      },
      [mediaQueries.mobile]: {
        fontSize: theme.text['md-bold'].fontSize,
        lineHeight: theme.text['md-bold'].lineHeight,
        fontWeight: theme.text['md-bold'].fontWeight,
        width: '80px',
        height: '32px',
      },
    },
  },
  activity: {
    width: '432px',
    height: '56px',
    borderRadius: '4px',
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '54px',
      },
    },
  },
});