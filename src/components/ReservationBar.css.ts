import { style } from '@vanilla-extract/css';
import { theme } from '@/app/global.css';

export const reservationBar = style({
  border: '1px solid #ddd',
  padding: '16px',
  borderRadius: '12px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  backgroundColor: theme.colors.white,
});

export const price = style({
  fontSize: theme.text['3xl-bold'].fontSize,
  fontWeight: 'bold',
  marginBottom: '16px',
});

export const smallprice = style({
  fontSize: theme.text['xl-regular'].fontSize,
  fontWeight: theme.text['xl-regular'].fontWeight,
});
export const calendar = style({
  marginBottom: '16px',
  width: '90%',
});

export const timeSelection = style({
  marginBottom: '16px',
});

export const peopleSelection = style({
  marginBottom: '16px',
});

export const totalPrice = style({
  fontSize: theme.text['xl-bold'].fontSize,
  fontWeight: 'bold',
  margin: '16px 0px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const reserveButton = style({
  padding: '10px',
  width: '100%',
  fontSize: '1rem',
  backgroundColor: theme.colors.nomadBlack,
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: theme.colors.green1,
    },
  },
  marginBottom: '10px',
});
export const enabledDate = style({
  backgroundColor: theme.colors.green2,
  borderRadius: '10px',
  selectors: {
    '&:hover': {
      backgroundColor: theme.colors.green1,
      color: theme.colors.white,
    },
  },
});

export const selectedDate = style({
  backgroundColor: theme.colors.green1,
  color: theme.colors.white,
});

export const timeSelectionContainer = style({
  margin: '10px 0px',
});

export const smallLabel = style({
  marginBottom: '10px',
  color: theme.colors.nomadBlack,
  fontWeight: theme.text['2lg-bold'].fontWeight,
  fontSize: theme.text['2lg-bold'].fontSize,
  lineHeight: theme.text['2lg-bold'].lineHeight,
});

export const timeButtons = style({
  display: 'flex',
  gap: '10px',
  flexWrap: 'wrap',
});

export const timeButton = style({
  padding: '10px 12px',
  textAlign: 'center',
  fontSize: theme.text['lg-medium'].fontSize,
  fontWeight: theme.text['lg-medium'].fontWeight,
  lineHeight: theme.text['lg-medium'].lineHeight,
  border: `1px solid ${theme.colors.nomadBlack}`,
  borderRadius: '8px',
  backgroundColor: theme.colors.white,
  cursor: 'pointer',
  ':hover': {
    backgroundColor: theme.colors.green1,
    color: theme.colors.white,
  },
});

export const selectedTime = style({
  backgroundColor: theme.colors.nomadBlack,
  color: theme.colors.white,
});

export const peopleButtons = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '10px',
  border: `1px solid ${theme.colors.gray6}`,
  borderRadius: '6px',
  width: '120px',
  fontSize: theme.text['md-regular'].fontSize,
  fontWeight: theme.text['md-regular'].fontWeight,
});

export const iconButton = style({
  padding: '10px',
  objectFit: 'contain',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: '0',
  borderRadius: '12px',
  backgroundColor: theme.colors.white,
});

export const peopleCount = style({
  color: theme.colors.gray1,
});
