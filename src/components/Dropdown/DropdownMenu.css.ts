import { style, styleVariants } from '@vanilla-extract/css';
import { theme } from '@/app/global.css';
import { mediaQueries } from '@/styles/media';

export const dropdownMenu = style({
  position: 'absolute',
  top: '95%',
  left: '-220%',
  backgroundColor: theme.colors.white,
  color: theme.colors.green1,
  borderRadius: '6px',
  boxShadow: '0 4px 16px rgba(17, 34, 17, 0.05)',
  zIndex: 1000,
  marginTop: '5px',
  listStyle: 'none',
  padding: 0,
  display: 'none',
  cursor: 'pointer',
});

export const dropdownMenuVisible = style({
  display: 'block',
});

export const dropdownItem = style({
  width: '127px',
  height: '56px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: theme.text['lg-medium'].fontSize,
  lineHeight: theme.text['sm-medium'].lineHeight,
  fontWeight: theme.text['lg-medium'].fontWeight,
  border: `1px solid ${theme.colors.gray1}`,
  borderTop: 'none',
  color: theme.colors.gray1,
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
  selectors: {
    '&:hover': {
      backgroundColor: theme.colors.green2,
      color: theme.colors.nomadBlack,
      fontWeight: 'bold',
    },
    '&:active': {
      backgroundColor: `${theme.colors.green1}`,
      color: `${theme.colors.white}`,
      fontWeight: theme.text['lg-semibold'].fontWeight,
    },
  },
});

export const dropdownItemTop = style({
  borderTop: `1px solid ${theme.colors.gray1}`,
  borderTopLeftRadius: '6px',
  borderTopRightRadius: '6px',
});

export const dropdownItemBottom = style({
  borderBottomLeftRadius: '6px',
  borderBottomRightRadius: '6px',
});

export const variantsMenu = styleVariants({
  price: {
    width: '127px',
    height: '53px',
    selectors: {},
    '@media': {
      [mediaQueries.tablet]: {},
      [mediaQueries.mobile]: {},
    },
  },
  threedot: {
    width: '10px',
    height: '48px',
    selectors: {},
    '@media': {
      [mediaQueries.tablet]: {},
      [mediaQueries.mobile]: {},
    },
  },
  filter: {
    width: '160px',
    height: '53px',
    '@media': {
      [mediaQueries.tablet]: {},
      [mediaQueries.mobile]: {},
    },
  },
  category: {
    height: '56px',
    borderRadius: '4px',
    '@media': {
      [mediaQueries.tablet]: {},
      [mediaQueries.mobile]: {},
    },
  },
  time: {
    width: '140px',
    height: '56px',
    '@media': {
      [mediaQueries.tablet]: {},
      [mediaQueries.mobile]: {},
    },
  },
  activity: {
    height: '56px',
    borderRadius: '4px',
    '@media': {
      [mediaQueries.tablet]: {},
      [mediaQueries.mobile]: {},
    },
  },
});
