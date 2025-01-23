import { style } from '@vanilla-extract/css';
import { mediaQueries } from '@/styles/media';
import { theme } from '../global.css';

export const myPageContainer = style({
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '1200px',
  paddingTop: '70px',
  paddingBottom: '200px',
  gap: '24px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '696px',
      paddingTop: '24px',
      gap: '16px',
    },
    [mediaQueries.mobile]: {
      width: '375px',
      paddingTop: '24px',
      gap: '0px',
    },
  },
});

export const sideNavigationNone = style({
  '@media': {
    [mediaQueries.mobile]: {
      display: 'none',
    },
  },
});

export const headerContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '24px',
  width: '792px',
  height: '48px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '344px',
      marginBottom: '12px',
    },
  },
});

export const headerTitle = style({
  display: 'inline-block',
  color: theme.colors.nomadBlack,
  fontSize: theme.text['3xl-bold'].fontSize,
  fontWeight: theme.text['3xl-bold'].fontWeight,
  lineHeight: '38px',
  marginLeft: '10px',
});

export const selectWrapper = style({
  position: 'relative',
  display: 'inline-block',
  width: '127px',
});

export const statusFilterOptions = style({
  WebkitAppearance: 'none',
  MozAppearance: 'none',
  appearance: 'none',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '13.5px 20px',
  gap: '8px',
  width: '160px',
  height: '53px',
  borderRadius: '15px',
  color: theme.colors.green1,
  outline: `1px solid ${theme.colors.green1}`,
  ...theme.text['2lg-medium'],
});
