import { style } from '@vanilla-extract/css';
import { theme } from '../../global.css';
import { mediaQueries } from '@/styles/media';

export const cardContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
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
  padding: '14px 24px',
  '@media': {
    [mediaQueries.tablet]: {
      width: '273px',
      height: '156px',
      padding: '12px 18px 13px 12px',
    },
    [mediaQueries.mobile]: {
      width: '202px',
      height: '128px',
      padding: '9.5px 0px 9.5px 8px',
    },
  },
});

export const ratingContainer = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  height: '24px',
  margin: '0 0 6px 0',
});

export const ratingStar = style({
  justifyContent: 'center',
  width: '19px',
  height: '19px',
  margin: '0',
  '@media': {
    [mediaQueries.mobile]: {
      width: '16px',
      height: '16px',
    },
  },
});

export const rating = style({
  display: 'inline-block',
  color: theme.colors.black,
  fontSize: theme.text['lg-regular'].fontSize,
  fontWeight: theme.text['lg-regular'].fontWeight,
  lineHeight: theme.text['lg-regular'].lineHeight,
  margin: '0 0 0 6px',

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: theme.text['xs-regular'].fontSize,
      fontWeight: theme.text['xs-regular'].fontWeight,
      lineHeight: '24px',
    },
  },
});

export const activityTitle = style({
  color: theme.colors.nomadBlack,
  fontSize: theme.text['xl-bold'].fontSize,
  fontWeight: theme.text['xl-bold'].fontWeight,
  lineHeight: theme.text['xl-bold'].lineHeight,
  width: '491px',
  border: 'none',
  textAlign: 'left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  margin: '0',
  padding: '0 0 72px 0',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.tablet]: {
      fontSize: theme.text['2lg-bold'].fontSize,
      fontWeight: theme.text['2lg-bold'].fontWeight,
      lineHeight: theme.text['2lg-bold'].lineHeight,
      width: '243px',
      padding: '0 0 33px 0',
    },
    [mediaQueries.mobile]: {
      fontSize: theme.text['md-bold'].fontSize,
      fontWeight: theme.text['md-bold'].fontWeight,
      lineHeight: '26px',
      width: '194px',
      padding: '0 0 29px 0',
    },
  },
});

export const activityPriceContainer = style({
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

export const activityPriceWrapper = style({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '39px',
});

export const activityPrice = style({
  display: 'inline-block',
  color: theme.colors.nomadBlack,
  fontSize: theme.text['2xl-medium'].fontSize,
  fontWeight: theme.text['2xl-medium'].fontWeight,
  lineHeight: theme.text['2xl-medium'].lineHeight,
  margin: '0',

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

export const activityPriceUnit = style({
  display: 'inline-block',
  color: theme.colors.gray1,
  fontSize: theme.text['lg-medium'].fontSize,
  fontWeight: theme.text['lg-medium'].fontWeight,
  lineHeight: theme.text['lg-medium'].lineHeight,
  margin: '0 0 0 10px',

  '@media': {
    [mediaQueries.tablet]: {
      margin: '0 0 0 4px',
    },
    [mediaQueries.mobile]: {
      fontSize: theme.text['xs-medium'].fontSize,
      fontWeight: theme.text['xs-medium'].fontWeight,
      lineHeight: theme.text['xs-medium'].lineHeight,
      margin: '0 0 0 2px',
    },
  },
});

export const dropdownContainer = style({
  position: 'relative',
  width: '40px',
  height: '40px',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.mobile]: {
      width: '32px',
      height: '32px',
    },
  },
});

export const dropdown = style({
  position: 'absolute',
  width: '40px',
  height: '40px',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.mobile]: {
      width: '32px',
      height: '32px',
    },
  },
});

export const dropdownContent = style({
  position: 'absolute',
  inset: '24px 0px auto auto',
  borderRadius: '80px',
});

export const dropdownList = style({
  listStyle: 'none',
});

export const dropdownItem = style({
  fontSize: theme.text['2lg-medium'].fontSize,
  fontWeight: theme.text['2lg-medium'].fontWeight,
  lineHeight: theme.text['2lg-medium'].lineHeight,
  outline: `1px solid ${theme.colors.gray7}`,
  border: 'none',
  width: '160px',
  height: '62px',
  cursor: 'pointer',
  borderRadius: '6px',

  selectors: {
    '&:hover': {
      backgroundColor: theme.colors.green2, // 호버 시 배경색 변경버 시 텍스트 색 변경
    },
  },
});
