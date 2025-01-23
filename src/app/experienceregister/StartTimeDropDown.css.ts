import { style } from '@vanilla-extract/css';
import { theme } from '../global.css';
import { mediaQueries } from '@/styles/media';

export const CategoryMenuBox = style({
  width: '140px',
  height: '56px',
  borderRadius: '4px',
  border: `1px solid ${theme.colors.gray2}`,
  backgroundColor: theme.colors.white,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '0 10px',
  cursor: 'pointer',

  '@media': {
    [mediaQueries.tablet]: {
      width: '104px',
    },
    [mediaQueries.mobile]: {
      width: '79px',
    },
  },
});

export const DropDownBoxWrap = style({
  position: 'relative',
  width: '140px',
  borderRadius: '4px',
  border: `1px solid ${theme.colors.gray2}`,
  backgroundColor: theme.colors.white,
  zIndex: 10,

  '@media': {
    [mediaQueries.tablet]: {
      width: '104px',
    },
    [mediaQueries.mobile]: {
      width: '79px',
    },
  },
});

export const DropDownContainer = style({
  listStyle: 'none',
  margin: 0,
  padding: 0,
});

export const ListItem = style({
  padding: '12px 16px',
  cursor: 'pointer',
  ':hover': {
    backgroundColor: theme.colors.gray2,
  },
  fontSize: '14px',
  color: theme.colors.black,
});

