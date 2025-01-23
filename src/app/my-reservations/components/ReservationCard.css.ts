import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '../../global.css';
import { mediaQueries } from '@/styles/media';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  margin: '0 auto',
});

export const imageContainer = style({
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: '24px',
  borderBottomLeftRadius: '24px',
  width: '204px',
  height: '204px',
  overflow: 'hidden',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.tablet]: {
      width: '156px',
      height: '156px',
    },
    [mediaQueries.mobile]: {
      width: '128px',
      height: '128px',
    },
  },
});

export const activityInfoContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  width: '564px',
  height: '204px',
  padding: '21px 24px',
  '@media': {
    [mediaQueries.tablet]: {
      width: '273px',
      height: '156px',
      padding: '12px 18px 12px 12px',
    },
    [mediaQueries.mobile]: {
      width: '202px',
      height: '128px',
      padding: '9px 14px 9px 8px',
    },
  },
});

export const reservationStatus1 = style({
  fontSize: theme.text['lg-bold'].fontSize,
  fontWeight: theme.text['lg-bold'].fontWeight,
  lineHeight: theme.text['lg-bold'].lineHeight,
  margin: '0 0 8px 0',

  '@media': {
    [mediaQueries.tablet]: {
      margin: '0',
    },
    [mediaQueries.mobile]: {
      fontSize: theme.text['md-bold'].fontSize,
      fontWeight: theme.text['md-bold'].fontWeight,
      lineHeight: '26px',
    },
  },
});

export const reservationStatus2 = styleVariants({
  pending: {
    color: theme.colors.blue2,
  },

  confirmed: {
    color: theme.colors.yellow1,
  },

  declined: {
    color: theme.colors.red1,
  },

  canceled: {
    color: theme.colors.gray2,
  },

  completed: {
    color: theme.colors.gray2,
  },
});

export const activityTitle = style({
  margin: '0',
});

export const titleButton = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['xl-bold'].fontSize,
  fontWeight: theme.text['xl-bold'].fontWeight,
  lineHeight: theme.text['xl-bold'].lineHeight,
  backgroundColor: theme.colors.gray9,
  width: '491px',
  border: 'none',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  margin: '0',
  padding: '0 0 12px 0',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.tablet]: {
      fontSize: theme.text['2lg-bold'].fontSize,
      fontWeight: theme.text['2lg-bold'].fontWeight,
      lineHeight: theme.text['2lg-bold'].lineHeight,
      width: '243px',
      padding: '0 0 4px 0',
    },
    [mediaQueries.mobile]: {
      fontSize: theme.text['md-bold'].fontSize,
      fontWeight: theme.text['md-bold'].fontWeight,
      lineHeight: '26px',
      width: '194px',
      padding: '0',
    },
  },
});

export const activityDate = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['2lg-regular'].fontSize,
  fontWeight: theme.text['2lg-regular'].fontWeight,
  lineHeight: theme.text['2lg-regular'].lineHeight,
  margin: '0 0 16px 0',

  '@media': {
    [mediaQueries.tablet]: {
      fontSize: theme.text['md-regular'].fontSize,
      fontWeight: theme.text['md-regular'].fontWeight,
      lineHeight: theme.text['md-regular'].lineHeight,
      margin: '0 0 10px 0',
    },
    [mediaQueries.mobile]: {
      fontSize: theme.text['xs-regular'].fontSize,
      fontWeight: theme.text['xs-regular'].fontWeight,
      lineHeight: '24px',
      margin: '0',
    },
  },
});

export const priceContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '42px',

  '@media': {
    [mediaQueries.tablet]: {
      height: '40px',
    },
    [mediaQueries.mobile]: {
      height: '32px',
    },
  },
});

export const activityPrice = style({
  display: 'inline-block',
  margin: '0',
  color: theme.colors.nomadBlack,
  fontSize: theme.text['2xl-medium'].fontSize,
  fontWeight: theme.text['2xl-medium'].fontWeight,
  lineHeight: theme.text['2xl-medium'].lineHeight,

  '@media': {
    [mediaQueries.tablet]: {
      fontSize: theme.text['xl-medium'].fontSize,
      fontWeight: theme.text['xl-medium'].fontWeight,
      lineHeight: theme.text['xl-medium'].lineHeight,
    },
    [mediaQueries.mobile]: {
      fontSize: theme.text['lg-medium'].fontSize,
      fontWeight: theme.text['lg-medium'].fontWeight,
      lineHeight: '19px',
    },
  },
});
