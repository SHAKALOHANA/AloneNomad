import { style } from '@vanilla-extract/css';
import { theme } from '../global.css';

export const reservationContainer = style({
  width: '381px',
  height: '116px',
  border: '1px solid #79747e',
  margin: '10px auto',
  padding: '0px 10px',
  position: 'relative',
});

export const buttonContainer = style({
  width: '170px',
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  display: 'flex',
  justifyContent: 'space-between',
});

export const confirmedButton = style({
  width: '82px',
  height: '44px',
  border: '0px',
  borderRadius: '26.5px',
  backgroundColor: theme.colors.orange2,
  color: theme.colors.orange1,
});

export const declinedButton = style({
  width: '82px',
  height: '44px',
  border: '0px',
  borderRadius: '26.5px',
  backgroundColor: theme.colors.red3,
  color: theme.colors.red1,
});

export const confirmedContainer = style({
  width: '82px',
  position: 'absolute',
  bottom: '10px',
  right: '10px',
});

export const declinedContainer = style({
  width: '82px',
  position: 'absolute',
  bottom: '10px',
  right: '10px',
});

