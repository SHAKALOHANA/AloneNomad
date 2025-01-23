import { style } from '@vanilla-extract/css';
import { theme } from '../../global.css';
import { mediaQueries } from '@/styles/media';

export const reviewModalContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  padding: '23px 24px 41px 24px',

  '@media': {
    [mediaQueries.tablet]: {},
    [mediaQueries.mobile]: {
      padding: '24px 16px 33px 16px',
    },
  },
});

export const reviewModalHeader = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '432px',
  height: '40px',
  margin: '0 0 41px 0',

  '@media': {
    [mediaQueries.tablet]: {},
    [mediaQueries.mobile]: {
      width: '343px',
      margin: '0 0 35px 0',
    },
  },
});

export const reviewModalHeaderH2 = style({
  fontSize: theme.text['2xl-bold'].fontSize,
  fontWeight: theme.text['2xl-bold'].fontWeight,
  lineHeight: theme.text['2xl-bold'].lineHeight,

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: '28px',
      fontWeight: theme.text['2lg-bold'].fontWeight,
      lineHeight: theme.text['2lg-bold'].lineHeight,
    },
  },
});

export const modalCloseBtn = style({
  backgroundColor: theme.colors.white,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  border: 'none',
  width: '40px',
  height: '40px',
  padding: '0',
});

export const activityInfoContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '432px',
  height: '137px',
  marginBottom: '24px',
  gap: '24px',

  '@media': {
    [mediaQueries.tablet]: {},
    [mediaQueries.mobile]: {
      width: '350px',
      height: '100px',
      marginBottom: '12px',
      gap: '8px',
    },
  },
});

export const activityImage = style({
  position: 'relative',
  width: '126px',
  height: '126px',
  borderRadius: '12px',
  overflow: 'hidden',

  '@media': {
    [mediaQueries.mobile]: {
      width: '100px',
      height: '100px',
    },
  },
});

export const activityInfo = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  width: '271px',
  height: '137px',

  '@media': {
    [mediaQueries.mobile]: {
      width: '235px',
      height: '95px',
    },
  },
});

export const activityTitle = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['xl-bold'].fontSize,
  fontWeight: theme.text['xl-bold'].fontWeight,
  lineHeight: theme.text['xl-bold'].lineHeight,
  margin: '0 0 12px 0 ',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: theme.text['lg-bold'].fontSize,
      fontWeight: theme.text['lg-bold'].fontWeight,
      lineHeight: theme.text['lg-bold'].lineHeight,
      margin: '0 0 6px 0 ',
    },
  },
});

export const activityDate = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['2lg-regular'].fontSize,
  fontWeight: theme.text['2lg-regular'].fontWeight,
  lineHeight: theme.text['2lg-regular'].lineHeight,
  margin: '0 0 25px 0 ',

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: theme.text['md-regular'].fontSize,
      fontWeight: theme.text['md-regular'].fontWeight,
      lineHeight: theme.text['md-regular'].lineHeight,
      margin: '0 0 13px 0 ',
    },
  },
});

export const activityPrice = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['3xl-bold'].fontSize,
  fontWeight: theme.text['3xl-bold'].fontWeight,
  lineHeight: theme.text['3xl-bold'].lineHeight,
  margin: '0',

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: theme.text['xl-bold'].fontSize,
      fontWeight: theme.text['xl-bold'].fontWeight,
      lineHeight: '24px',
    },
  },
});

export const starRatingContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100px',
  gap: '8px',
  cursor: 'pointer',
  marginBottom: '24px',

  '@media': {
    [mediaQueries.mobile]: {
      marginBottom: '12px',
    },
  },
});

export const reviewTextarea = style({
  width: '100%',
  height: '240px',
  borderRadius: '4px',
  outline: `1px solid theme.colors.gray2`,
  padding: '8px 16px',
  marginBottom: '24px',
  resize: 'none',

  '@media': {
    [mediaQueries.mobile]: {
      width: '350px',
      height: '346px',
    },
  },
});
