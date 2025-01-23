import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/app/global.css';
import { mediaQueries } from '@/styles/media';

export const baseButtonStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.colors.nomadBlack,
  color: theme.colors.white,
  fontSize: theme.text['lg-bold'].fontSize,
  lineHeight: theme.text['lg-bold'].lineHeight,
  fontWeight: theme.text['lg-bold'].fontWeight,
  cursor: 'pointer',
  border: 'none',
  borderRadius: '6px',
  transition: 'background-color 0.3s',
});

export const buttonVariants = styleVariants({
  login: {
    backgroundColor: theme.colors.green1,
    width: '640px',
    height: '48px',
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.gray4,
      },
    },
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '48px',
      },
    },
  },
  signup: {
    width: '640px',
    height: '48px',
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.gray4,
      },
    },
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '48px',
      },
    },
  },
  search: {
    width: '136px',
    height: '56px',
    borderRadius: '4px',
    '@media': {
      [mediaQueries.tablet]: {},
      [mediaQueries.mobile]: {
        width: '96px',
        height: '56px',
      },
    },
  },
  save: {
    width: '120px',
    height: '48px',
    borderRadius: '4px',
  },
  writeReview: {
    width: '144px',
    height: '43px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '112px',
        height: '40px',
      },
      [mediaQueries.mobile]: {
        fontSize: theme.text['md-bold'].fontSize,
        lineHeight: theme.text['md-bold'].lineHeight,
        fontWeight: theme.text['md-bold'].fontWeight,
        width: '80px',
        height: '32px',
      },
    },
  },
  write: {
    width: '432px',
    height: '56px',
    borderRadius: '4px',
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '54px',
      },
    },
  },
  reserve: {
    width: '336px',
    height: '56px',
    borderRadius: '4px',
    selectors: {
      '&:disabled': {
        cursor: 'not-allowed',
        backgroundColor: theme.colors.gray4,
      },
    },
    '@media': {
      [mediaQueries.tablet]: {
        width: '100%',
      },
      [mediaQueries.mobile]: {
        width: '203px',
      },
    },
  },
  confirm: {
    width: '327px',
    height: '56px',
    borderRadius: '4px',
  },
  reservationCancel: {
    color: theme.colors.nomadBlack,
    backgroundColor: theme.colors.white,
    outline: `1px solid ${theme.colors.nomadBlack}`,
    border: 'none',
    width: '144px',
    height: '43px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '112px',
        height: '40px',
      },
      [mediaQueries.mobile]: {
        fontSize: theme.text['md-bold'].fontSize,
        lineHeight: theme.text['md-bold'].lineHeight,
        fontWeight: theme.text['md-bold'].fontWeight,
        width: '80px',
        height: '32px',
      },
    },
  },

  experienceRegistration: {
    width: '120px',
    height: '48px',
    borderRadius: '4px',
  },

  edit: {
    width: '120px',
    height: '48px',
    borderRadius: '4px',
  },

  reservationFinalize: {
    fontSize: theme.text['md-bold'].fontSize,
    lineHeight: theme.text['md-bold'].lineHeight,
    fontWeight: theme.text['md-bold'].fontWeight,
    width: '82px',
    height: '38px',
  },

  reservationReject: {
    color: theme.colors.nomadBlack,
    backgroundColor: theme.colors.white,
    fontSize: theme.text['md-bold'].fontSize,
    lineHeight: theme.text['md-bold'].lineHeight,
    fontWeight: theme.text['md-bold'].fontWeight,
    width: '82px',
    height: '38px',
    outline: `1px solid ${theme.colors.nomadBlack}`,
  },

  reservationConfirmed: {
    cursor: 'not-allowed',
    color: theme.colors.orange1,
    backgroundColor: theme.colors.orange2,
    borderRadius: '26.5px',
    width: '82px',
    height: '44px',
  },

  reservationDenied: {
    cursor: 'not-allowed',
    color: theme.colors.red1,
    backgroundColor: theme.colors.orange2,
    borderRadius: '26.5px',
    width: '82px',
    height: '44px',
  },

  check: {
    width: '120px',
    height: '48px',
    borderRadius: '8px',
    fontSize: theme.text['lg-medium'].fontSize,
    lineHeight: theme.text['lg-medium'].lineHeight,
    fontWeight: theme.text['lg-medium'].fontWeight,

    '@media': {
      [mediaQueries.mobile]: {
        fontSize: theme.text['md-medium'].fontSize,
        lineHeight: theme.text['md-medium'].lineHeight,
        fontWeight: theme.text['md-medium'].fontWeight,
      },
    },
  },

  cancel: {
    backgroundColor: theme.colors.nomadBlack,
    color: theme.colors.white,
    fontSize: theme.text['md-bold'].fontSize,
    lineHeight: theme.text['md-bold'].lineHeight,
    fontWeight: theme.text['md-bold'].fontWeight,
    width: '80px',
    height: '38px',
    borderRadius: '1px',
    outline: `1px solid ${theme.colors.nomadBlack}`,
  },

  delete: {
    backgroundColor: theme.colors.nomadBlack,
    color: theme.colors.white,
    fontSize: theme.text['md-bold'].fontSize,
    lineHeight: theme.text['md-bold'].lineHeight,
    fontWeight: theme.text['md-bold'].fontWeight,
    width: '80px',
    height: '38px',
    borderRadius: '1px',
    outline: `1px solid ${theme.colors.nomadBlack}`,
  },

  no: {
    backgroundColor: theme.colors.white,
    color: theme.colors.nomadBlack,
    fontSize: theme.text['md-bold'].fontSize,
    lineHeight: theme.text['md-bold'].lineHeight,
    fontWeight: theme.text['md-bold'].fontWeight,
    width: '80px',
    height: '38px',
    borderRadius: '1px',
    outline: `1px solid ${theme.colors.nomadBlack}`,
  },

  none: {
    width: '120px',
    height: '48px',
    borderRadius: '8px',
    backgroundColor: theme.colors.gray9,
    color: theme.colors.white,
  },
});
