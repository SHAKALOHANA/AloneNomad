import { style, styleVariants } from '@vanilla-extract/css';
import { mediaQueries } from '@/styles/media';
import { theme } from '@/app/global.css';

export const baseInput = style({
  color: theme.colors.nomadBlack,
  backgroundColor: theme.colors.white,
  borderRadius: '4px',
  outline: '1px solid theme.colors.gray2',
  padding: '16px 20px',
  ':focus': {
    outline: '1px solid theme.colors.nomadBlack',
  },
  '::placeholder': {
    color: theme.colors.gray3,
  },
});

export const inputVariants = styleVariants({
  email: {
    width: '640px',
    height: '58px',
    borderRadius: '6px',
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '56px',
      },
    },
  },
  nickname: {
    width: '640px',
    height: '58px',
    borderRadius: '6px',
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '56px',
      },
    },
  },
  password: {
    width: '640px',
    height: '58px',
    borderRadius: '6px',
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '56px',
      },
    },
  },
  passwordConfirm: {
    width: '640px',
    height: '58px',
    borderRadius: '6px',
    '@media': {
      [mediaQueries.mobile]: {
        width: '350px',
        height: '56px',
      },
    },
  },
  search: {
    width: '1004px',
    height: '56px',

    '@media': {
      [mediaQueries.tablet]: {
        width: '500px',
      },
      [mediaQueries.mobile]: {
        width: '295px',
      },
    },
  },

  image: {},
  profile: {},

  title: {
    width: '792px',
    height: '56px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '429px',
      },
      [mediaQueries.mobile]: {
        width: '343px',
      },
    },
  },

  price: {
    width: '792px',
    height: '56px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '429px',
      },
      [mediaQueries.mobile]: {
        width: '343px',
      },
    },
  },
  address: {
    width: '792px',
    height: '56px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '429px',
      },
      [mediaQueries.mobile]: {
        width: '343px',
      },
    },
  },
  date: {
    width: '379px',
    height: '56px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '149px',
      },
      [mediaQueries.mobile]: {
        width: '343px',
        height: '44px',
      },
    },
  },

  startTime: {
    width: '140px',
    height: '56px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '104px',
      },
      [mediaQueries.mobile]: {
        width: '79px',
        height: '44px',
      },
    },
  },

  endTime: {
    width: '140px',
    height: '56px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '104px',
      },
      [mediaQueries.mobile]: {
        width: '79px',
        height: '44px',
      },
    },
  },

  myNickname: {
    width: '797px',
    height: '56px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '429px',
      },
      [mediaQueries.mobile]: {
        width: '343px',
      },
    },
  },
  myEmail: {
    width: '797px',
    height: '56px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '429px',
      },
      [mediaQueries.mobile]: {
        width: '343px',
      },
    },
  },
  myPassword: {
    width: '797px',
    height: '56px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '429px',
      },
      [mediaQueries.mobile]: {
        width: '343px',
      },
    },
  },
  myPasswordConfirm: {
    width: '797px',
    height: '56px',
    '@media': {
      [mediaQueries.tablet]: {
        width: '429px',
      },
      [mediaQueries.mobile]: {
        width: '343px',
      },
    },
  },
});

export const passwordInputWrapper = style({
  position: 'relative',
  display: 'inline-block',
  width: '100%',
});

export const fileInputHidden = style({
  display: 'none',
});

export const uploadLabelVariants = styleVariants({
  image: {
    display: 'inline-block',
    width: '180px',
    height: '180px',
    backgroundImage: 'url("/icons/image_upload.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
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
  },

  profile: {
    display: 'inline-block',
    width: '44px',
    height: '44px',
    backgroundImage: 'url("/icons/profile_edit.svg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    cursor: 'pointer',
  },
});
