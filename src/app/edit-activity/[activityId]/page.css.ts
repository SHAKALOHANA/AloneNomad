import { style } from '@vanilla-extract/css';
import { theme } from '../../global.css';
import { mediaQueries } from '@/styles/media';

export const mainContainer = style({
  width: '1200px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '30px auto',
  backgroundColor: theme.colors.gray9,

  '@media': {
    [mediaQueries.tablet]: {
      width: '696px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const sideContainer = style({
  width: '792px',
  height: '100%',
  backgroundColor: theme.colors.gray9,

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const contentContainer = style({
  width: '100%',
  height: '56px',
  backgroundColor: theme.colors.white,
  border: '1px solid #79747e',
  borderRadius: '4px',
  padding: '0px 10px',
});

export const descriptionContainer = style({
  width: '100%',
  height: '346px',
  backgroundColor: theme.colors.white,
  border: '1px solid #79747e',
  borderRadius: '4px',
  padding: '20px 10px',
  marginTop: '20px',
});

export const dateContainer = style({
  width: '379px',
  height: '56px',
  padding: '8px',
  backgroundColor: theme.colors.white,
  border: '1px solid #79747e',
  borderRadius: '4px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative',

  '@media': {
    [mediaQueries.tablet]: {
      width: '149px',
    },
    [mediaQueries.mobile]: {
      width: '130px',
    },
  },
});

export const reservationContainer = style({
  width: '792px',
  height: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const addedDateWrapper = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginTop: '10px',
});

export const addedDateContainer = style({
  width: '379px',
  height: '56px',
  backgroundColor: theme.colors.white,
  border: '1px solid #79747e',
  borderRadius: '4px',
  padding: '8px',
  display: 'flex',
  alignItems: 'center',

  '@media': {
    [mediaQueries.tablet]: {
      width: '149px',
    },
    [mediaQueries.mobile]: {
      width: '130px',
      height: '44px',
    },
  },
});

export const calendarWrapper = style({
  border: `1px solid ${theme.colors.black}`,
  padding: '10px',
  position: 'absolute',
  top: '56px',
  backgroundColor: theme.colors.white,
});

export const line = style({
  marginTop: '15px',
  width: '792px',
  border: `1px solid ${theme.colors.gray7}`,

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const postSearchButton = style({
  position: 'absolute',
  right: '20px',
  top: '50%',
  transform: 'translateY(-50%)',
  cursor: 'pointer',
  padding: '10px',
  backgroundColor: '#ccc',
});

export const imageRegister = style({
  width: '180px',
  height: '180px',
  borderRadius: '12px',
  border: `1px dashed ${theme.colors.gray1}`,
  backgroundColor: theme.colors.gray9,
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.tablet]: {
      width: '206px',
      height: '206px',
    },
    [mediaQueries.mobile]: {
      width: '167px',
      height: '167px',
    },
  },
});

export const imagePreviewContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const bannerContainer = style({
  width: '792px',
  display: 'flex',
  alignItems: 'center',
  gap: '24px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const introContainer = style({
  width: '792px',
  display: 'flex',
  alignItems: 'center',
  gap: '24px',
  flexWrap: 'wrap',

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
      gap: '17px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
      gap: '8px',
    },
  },
});

export const images = style({
  width: '180px',
  height: '180px',
  borderRadius: '12px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '206px',
      height: '206px',
    },
    [mediaQueries.mobile]: {
      width: '167px',
      height: '167px',
    },
  },
});

export const deleteButton = style({
  position: 'absolute',
  top: '0px',
  right: '0px',
  width: '40px',
  height: '40px',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.tablet]: {
      width: '32px',
      height: '32px',
    },
    [mediaQueries.mobile]: {
      width: '24px',
      height: '24px',
    },
  },
});

export const qqq = style({
  width: '792px',
  height: '48px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const inputWithPlaceholder = style({
  fontSize: '14px',
  color: '#000000',
  resize: 'none',

  selectors: {
    '&::placeholder': {
      color: '#a1a1a1',
      fontSize: '14px',
    },
  },
});

export const tildeSymbol = style({
  display: 'inline',
  '@media': {
    [mediaQueries.tablet]: {
      display: 'none',
    },
    [mediaQueries.mobile]: {
      display: 'none',
    },
  },
});

export const addedStartTimeContainer = style({
  width: '140px',
  height: '56px',
  borderRadius: '4px',
  border: `1px solid ${theme.colors.gray2}`,
  backgroundColor: theme.colors.white,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10px',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.tablet]: {
      width: '104px',
    },
    [mediaQueries.mobile]: {
      width: '79px',
    },
  },
});

export const addedEndTimeContainer = style({
  width: '140px',
  height: '56px',
  borderRadius: '4px',
  border: `1px solid ${theme.colors.gray2}`,
  backgroundColor: theme.colors.white,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10px',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.tablet]: {
      width: '104px',
    },
    [mediaQueries.mobile]: {
      width: '79px',
    },
  },
});
