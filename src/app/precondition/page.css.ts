import { style } from '@vanilla-extract/css';
import { theme } from '../../app/global.css';
import { mediaQueries } from '@/styles/media';

export const mainContainer = style({
  width: '1200px',
  height: '1800px',
  display: 'flex',
  justifyContent: 'space-between',
  margin: '30px auto',
  backgroundColor: theme.colors.gray9,

  '@media': {
    [mediaQueries.tablet]: {
      width: '696px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

export const sideContainer = style({
  width: '792px',
  height: '100%',
  backgroundColor: theme.colors.gray9,

  '@media': {
    [mediaQueries.tablet]: {
      width: '429px',
    },
    [mediaQueries.mobile]: {
      width: '343px',
    },
  },
});

