import { style } from '@vanilla-extract/css';
import { theme } from '../../global.css';
import { mediaQueries } from '@/styles/media';

export const deleteModalContainer = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '298px',
  height: '184px',
  margin: '0 auto',
  padding: '24px 24px',

  '@media': {
    [mediaQueries.tablet]: {},
    [mediaQueries.mobile]: {},
  },
});

export const deleteModalHeader = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '250px',
  height: '66px',
  margin: '0 0 32px 0',

  '@media': {
    [mediaQueries.tablet]: {},
    [mediaQueries.mobile]: {},
  },
});

export const checkIconContainer = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '24px',
  height: '24px',
  padding: '6px',
  backgroundColor: theme.colors.nomadBlack,
  borderRadius: '50%',
});

export const checkIcon = style({
  width: '12px',
  height: '12px',
});

export const deleteModalHeaderH2 = style({
  fontSize: theme.text['lg-regular'].fontSize,
  fontWeight: theme.text['lg-regular'].fontWeight,
  lineHeight: theme.text['lg-regular'].lineHeight,
});

export const deleteModalButtonContainer = style({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  width: '168px',
  height: '38px',

  '@media': {
    [mediaQueries.tablet]: {},
    [mediaQueries.mobile]: {},
  },
});
