import { style } from '@vanilla-extract/css';
import { theme } from '../global.css';

export const modalContainer = style({
  width: '429px',
  height: '697px',
  borderRadius: '14px',
  border: '1px solid #dddddd', //색수정필요
  backgroundColor: '#ffffff',
  padding: '24px',
  position: 'absolute',
  top: '60px',
  right: '0px',
  zIndex: 10,
});

export const header = style({
  width: '381px',
  height: '40px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const menu = style({
  display: 'flex',
  marginTop: '20px',
});

export const tabButton = style({
  backgroundColor: theme.colors.white,
  border: '0px',
  fontSize: '20px',
  color: theme.colors.gray1,
});

export const selectedTab = style({
  border: '0px',
  backgroundColor: theme.colors.white,
  fontSize: '20px',
  fontWeight: '600',
  color: theme.colors.green1,
});

