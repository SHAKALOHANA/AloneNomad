import { style } from '@vanilla-extract/css';
import { theme } from '../../global.css';

export const overlay = style({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(0, 0, 0, 0.7)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 9999,
});

export const modalContainer = style({
  backgroundColor: theme.colors.white,
  borderRadius: '24px',
  overflow: 'auto',
});
