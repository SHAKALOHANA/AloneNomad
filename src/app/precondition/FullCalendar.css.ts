import { style } from '@vanilla-extract/css';
import { theme } from '../../app/global.css';
import { globalStyle } from '@vanilla-extract/css';

globalStyle(':root', {
  '--fc-button-active-bg-color': 'transparent',
  '--fc-event-bg-color': 'transparent',
  '--fc-event-border-color': 'transparent',
} as Record<string, string>);

globalStyle(':root', {
  '--fc-button-bg-color': 'transparent',
  '--fc-button-border-color': 'transparent',
  '--fc-button-hover-bg-color': 'transparent',
  '--fc-button-active-bg-color': 'transparent',
  '--fc-button-text-color': '#000',
} as Record<string, string>);

export const pendingEvent = style({
  backgroundColor: theme.colors.blue1,
  color: theme.colors.white,
  padding: '5px',
  borderRadius: '4px',
});

export const completedEvent = style({
  backgroundColor: theme.colors.gray7,
  color: theme.colors.gray1,
  padding: '5px',
  borderRadius: '4px',
});

export const confirmedEvent = style({
  backgroundColor: theme.colors.orange2,
  color: theme.colors.orange1,
  padding: '5px',
  borderRadius: '4px',
});

export const dayGridDay = style({
  height: '154px',
});

export const dayNumberText = style({
  fontSize: '21px',
});

