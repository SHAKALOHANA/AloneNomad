import { style } from '@vanilla-extract/css';
import { theme } from '../global.css';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const card = style({
  width: '700px',
  paddingTop: '118px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const logo = style({
  marginBottom: '64px',
});

export const label = style({
  fontWeight: '500',
  fontSize: theme.text['lg-regular'].fontSize,
  color: theme.colors.black,
  display: 'block',
  marginBottom: '10px',
});

export const inputField = style({
  width: '640px',
  height: '48px',
  fontSize: theme.text['xs-regular'].fontSize,
  border: `1px solid ${theme.colors.gray2}`,
  borderRadius: '6px',
  marginBottom: '20px',
});

export const errorMessage = style({
  color: theme.colors.red1,
  position: 'absolute',
  marginTop: '8px',
  visibility: 'hidden',
});

export const errorVisible = style({
  visibility: 'visible',
});

export const signinBox = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  padding: '56px 0',
});

export const signinBtn = style({
  width: '640px',
  height: '50px',
  borderRadius: '6px',
  color: theme.colors.white,
  backgroundColor: theme.colors.nomadBlack,
});

export const signupArea = style({
  display: 'flex',
  gap: '10px',
  marginBottom: '48px',
});

export const text = style({
  fontSize: theme.text['lg-regular'].fontSize,
  color: '#333236',
  margin: 'auto',
});

export const linkButton = style({
  fontSize: theme.text['lg-regular'].fontSize,
  color: '#333236',
});
