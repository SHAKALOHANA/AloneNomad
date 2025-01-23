import { style } from '@vanilla-extract/css';
import { theme } from '../../global.css';

export const starRatingContainer = style({
  display: 'flex',
  gap: '8px',
  cursor: 'pointer',
  userSelect: 'none',
  touchAction: 'none',
});

export const starIcon = style({
  width: '56px',
  height: '56px',
  transition: 'fill 0.2s ease',
  fill: theme.colors.white,
});

export const starIconFilled = style({
  fill: theme.colors.yellow1,
});
