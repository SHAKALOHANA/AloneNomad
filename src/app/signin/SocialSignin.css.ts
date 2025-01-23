import { style } from '@vanilla-extract/css';
import { theme } from '../global.css';

export const socialContainer = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '54px',
});

export const socialInfo = style({
  display: 'flex',
  color: theme.colors.gray7,
  whiteSpace: 'nowrap',
});

export const SNSBtnBox = style({
  display: 'flex',
});

export const socialBtn = style({
  background: 'none',
  border: 'none',
});
