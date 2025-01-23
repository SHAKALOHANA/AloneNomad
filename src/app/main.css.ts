import { style } from '@vanilla-extract/css';
import { theme } from '@/app/global.css';
import { mediaQueries } from '@/styles/media';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  padding: '0',
  margin: '0',
  boxSizing: 'border-box',
  alignItems: 'center',
  //justifyContent: 'center',
});

export const sectionWall = style({
  width: '100%',
  height: '550px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.colors.white,

  '@media': {
    [mediaQueries.tablet]: {},
    [mediaQueries.mobile]: {
      height: '240px',
    },
  },
});

export const bannerImage = style({
  position: 'absolute',
  top: 0,
  left: 0,
  objectFit: 'cover',
  zIndex: 0,
});

export const bannerTextWrapper = style({
  position: 'relative',
  width: '100%',
  height: '550px',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0 30px',
  margin: '0 auto',
  color: theme.colors.white,

  '@media': {
    [mediaQueries.tablet]: {},
    [mediaQueries.mobile]: {
      height: '240px',
    },
  },
});

export const hText = style({
  textAlign: 'left',
  fontSize: '68px',
  fontWeight: '700',
  lineHeight: '81px',

  margin: '0 auto',
  zIndex: 1,
  width: '1200px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '696px',
      fontSize: '54px',
      lineHeight: '64px',
    },
    [mediaQueries.mobile]: {
      width: '335px',
      fontSize: '24px',
      lineHeight: '28px',
    },
  },
});

export const pText = style({
  zIndex: 1,
  textAlign: 'left',
  width: '1200px',
  margin: '0 auto',
  paddingTop: '20px',
  fontSize: theme.text['2xl-bold'].fontSize,
  fontWeight: theme.text['2xl-bold'].fontWeight,
  lineHeight: '28px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '696px',
      fontSize: theme.text['xl-bold'].fontSize,
      lineHeight: '26px',
    },
    [mediaQueries.mobile]: {
      width: '335px',
      fontSize: theme.text['md-bold'].fontSize,
    },
  },
});

export const searchBar = style({
  width: '1200px',
  height: '184px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '32px 24px',
  border: '0',
  borderRadius: '16px',
  backgroundColor: theme.colors.white,
  position: 'relative',
  top: '-60px',
  gap: '32px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '696px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
      height: '129px',
      padding: '16px 24px',
      gap: '15px',
      marginTop: '20px',
    },
  },
});

export const searchBarText = style({
  fontSize: theme.text['xl-bold'].fontSize,
  lineHeight: theme.text['xl-bold'].lineHeight,
  fontWeight: theme.text['xl-bold'].fontWeight,

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: theme.text['lg-bold'].fontSize,
      lineHeight: theme.text['lg-bold'].lineHeight,
    },
  },
});

export const searchBarForm = style({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
  position: 'relative',
  selectors: {
    '&::before': {
      content: '"🛏️"',
      position: 'absolute',
      left: '10px',
      fontSize: theme.text['2xl-medium'].fontSize,
      lineHeight: '45px',
      color: theme.colors.green1,
      pointerEvents: 'none',
    },
  },
});

export const searchBarInput = style({
  padding: '4px 16px 4px 50px',
  width: '1004px',
  height: '56px',
  border: `1px solid ${theme.colors.gray1}`,
  borderRadius: '5px',
  color: theme.colors.gray3,
  fontSize: theme.text['lg-regular'].fontSize,
  lineHeight: theme.text['lg-regular'].lineHeight,
  fontWeight: theme.text['lg-regular'].fontWeight,

  '@media': {
    [mediaQueries.tablet]: {
      width: '500px',
    },
    [mediaQueries.mobile]: {
      width: '187px',
    },
  },
});

export const content = style({
  width: '1200px',
  margin: '0 auto',

  '@media': {
    [mediaQueries.tablet]: {
      width: '696px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const section = style({
  width: '100%',
  marginBottom: '40px',
});

export const sectionTitle = style({
  marginBottom: '20px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const sectionTitleH = style({
  margin: '0',
  fontSize: '36px',
  fontWeight: '700',
});

export const sectionTitlePage = style({
  width: '80px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0',
});

export const PaginationArrow = style({
  margin: '0',
  fontSize: theme.text['3xl-bold'].fontSize,
  fontWeight: theme.text['3xl-bold'].fontWeight,
  fontFamily: 'serif',
  width: '30px',
  textAlign: 'center',
});

export const cardHotContainer = style({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  overflow: 'hidden',
  overflowX: 'auto',
  gap: '24px',

  // 스크롤바 숨기기 (웹킷 / 파이어폭스 / IE 표준 호환)
  WebkitOverflowScrolling: 'touch',
  scrollbarWidth: 'none', // Firefox
  msOverflowStyle: 'none', // IE, Edge

  selectors: {
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
});

export const cardHot = style({
  display: 'flex',
  width: '384px',
  height: '384px',
  flex: '0 0 auto',
  border: '0',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
  color: theme.colors.white,

  '@media': {
    [mediaQueries.mobile]: {
      width: '186px',
      height: '186px',
    },
  },
});

export const cardImage = style({});

export const cardText = style({
  position: 'absolute',
  bottom: '0',
  padding: '30px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  color: theme.colors.white,
});

export const cardH = style({
  margin: '0',
  fontSize: theme.text['3xl-bold'].fontSize,
  fontWeight: theme.text['3xl-bold'].fontWeight,
  lineHeight: theme.text['3xl-bold'].lineHeight,

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: theme.text['2lg-bold'].fontSize,
      fontWeight: theme.text['2lg-bold'].fontWeight,
      lineHeight: theme.text['2lg-bold'].lineHeight,
    },
  },
});

export const cardP = style({
  margin: '0',
  fontSize: theme.text['xl-bold'].fontSize,
  fontWeight: theme.text['xl-bold'].fontWeight,
  lineHeight: theme.text['xl-bold'].lineHeight,
  //color: theme.colors.white,

  '@media': {
    [mediaQueries.mobile]: {
      fontSize: theme.text['lg-bold'].fontSize,
      lineHeight: theme.text['lg-bold'].lineHeight,
    },
  },
});

export const cardSmall = style({
  fontSize: theme.text['md-regular'].fontSize,
  fontWeight: theme.text['md-regular'].fontWeight,
});

export const tagContainer = style({
  display: 'flex',
  gap: '10px',
  margin: '24px',
});

export const tags = style({
  width: '127px',
  height: '58px',
  border: `1px solid ${theme.colors.green1}`,
  borderRadius: '15px',
  textAlign: 'center',
  fontSize: theme.text['2lg-medium'].fontSize,
  fontWeight: theme.text['2lg-medium'].fontWeight,
  lineHeight: theme.text['2lg-medium'].lineHeight,
  padding: '16px',
  backgroundColor: theme.colors.white,
});

export const cardActivityContainer = style({
  width: '1204px',
  height: '897px',
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridTemplateRows: 'repeat(2, 1fr)',
  columnGap: '16px',
  rowGap: '24px',

  '@media': {
    [mediaQueries.tablet]: {
      width: '695px',
      height: '1154px',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gridTemplateRows: 'repeat(3, 1fr)',
    },
    [mediaQueries.mobile]: {
      width: '344px',
      height: '591px',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gridTemplateRows: 'repeat(2, 1fr)',
    },
  },
});

export const cardActivity = style({
  width: '100%',
  height: '100%',
  border: '0',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
});

export const cardActivityImage = style({
  width: '100%',
  height: 'auto',
  aspectRatio: '1/1',
  borderRadius: '20px',
  selectors: {
    '&::after': {
      display: 'block',
      content: '',
      paddingBottom: '100%',
    },
  },
});

export const pagination = style({
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginBottom: '50px',
});

export const pagBu = style({
  padding: '5px 10px',
  border: `1px solid ${theme.colors.green1}`,
  borderRadius: '15px',
  backgroundColor: theme.colors.white,
  color: theme.colors.green1,
  fontSize: theme.text['2lg-regular'].fontSize,
  fontWeight: theme.text['2lg-regular'].fontWeight,
  cursor: 'pointer',
  width: '55px',
  height: '55px',
});

export const linkLine = style({
  color: '#1b1b1b',
  textDecorationLine: 'none',

  ':visited': {
    color: '#1b1b1b',
  },
  ':hover': {
    textDecorationLine: 'underline',
  },
});

export const cardAllTitle = style({
  fontSize: theme.text['2xl-bold'].fontSize,
  fontWeight: theme.text['2xl-semibold'].fontWeight,
  lineHeight: theme.text['2xl-bold'].lineHeight,
  color: theme.colors.nomadBlack,
  margin: '0',
});

export const cardTextAll = style({
  lineHeight: theme.text['2xl-bold'].lineHeight,
});

export const ratingText = style({
  margin: '0',
});

export const dropdownContainer = style({
  position: 'relative',
  left: '280px',
});

export const TagAndDropdown = style({
  display: 'flex',
  justifyContent: 'space-between',
});
