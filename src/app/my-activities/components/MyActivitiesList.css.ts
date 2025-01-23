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

export const myActivitiesContainer = style({
  display: 'flex',
  flexDirection: 'column',
  width: '792px',
  height: '580px',
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

export const header = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '792px',
  height: '48px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
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

export const reservationList = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
  width: '100%',

  '@media': {
    [mediaQueries.tablet]: {
      gap: '16px',
    },
  },
});

export const emptyListContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
});

export const emptyList = style({
  display: 'block',
  alignItems: 'center',
  width: '240px',
  height: '240px',
  marginTop: '86px',
  marginBottom: '20px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '200px',
      height: '200px',
      marginTop: '56px',
      marginBottom: '12px',
    },
  },
});

export const emptyMessage = style({
  display: 'inline-block',
  color: theme.colors.gray2,
  fontSize: theme.text['2xl-medium'].fontSize,
  fontWeight: theme.text['2xl-medium'].fontWeight,
  lineHeight: theme.text['2xl-medium'].lineHeight,
});
