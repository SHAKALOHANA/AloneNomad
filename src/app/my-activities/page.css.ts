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
