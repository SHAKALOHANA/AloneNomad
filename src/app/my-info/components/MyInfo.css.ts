import { style } from '@vanilla-extract/css';
import { theme } from '../../global.css';
import { mediaQueries } from '@/styles/media';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
});

export const myInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '792px',
  height: '502px',
  gap: '24px',
  marginLeft: '10px',
  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  height: '48px',
});

export const headerTitle = style({
  display: 'inline-block',
  color: theme.colors.nomadBlack,
  fontSize: theme.text['3xl-bold'].fontSize,
  fontWeight: theme.text['3xl-bold'].fontWeight,
  lineHeight: '38px',

  '@media': {
    [mediaQueries.tablet]: {
      lineHeight: '42px',
    },
    [mediaQueries.mobile]: {
      lineHeight: '42px',
    },
  },
});

export const inputContainer = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  position: 'relative',
});

export const labelStyle = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['2xl-bold'].fontSize,
  fontWeight: theme.text['2xl-bold'].fontWeight,
  lineHeight: theme.text['2xl-bold'].lineHeight,
});

export const invalidInput = style({
  outline: `1px solid ${theme.colors.red1}`,
  border: 'none',
});

export const errorMessage = style({
  position: 'absolute',
  color: theme.colors.red1,
  // 실제 위치는 상황에 맞게 조정
  top: 'calc(100% + 4px)',
  // left: 0,  // 필요하면 조정
  // 또는 bottom: '-20px' 등 원하는 위치로 조정 가능
  // marginTop, marginLeft 등으로 미세 조정
});
