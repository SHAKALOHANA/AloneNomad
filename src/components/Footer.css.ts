import { style } from "@vanilla-extract/css";
import { theme } from "../app/global.css";
import { mediaQueries } from "@/styles/media";

export const FooterContainer = style({
  ...theme.text["xs-semibold"],
  backgroundColor: theme.colors.nomadBlack,
  color: theme.colors.gray3,
  padding: "32px 360px 108px",
  margin: '0 auto',
  '@media' : {
    [mediaQueries.tablet]: {
      padding: "32px 20px 108px",
    },
    [mediaQueries.mobile]: {
    }
  }
});

export const containerBlock = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "60px",
  margin: '0 auto',
  maxWidth: '1200px',
  width: '100%',
  '@media': {
    [mediaQueries.tablet]: {
      maxWidth: '522px',
      width: '100%',
    },
    [mediaQueries.mobile]: {
      maxWidth: '298px',
      width: '100%',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
    }
  }
})

export const whiteSpace = style({
  '@media': {
    [mediaQueries.tablet]: {
    }
  }
})

export const FooterMenu =style({
  display: "flex",
  gap: "30px",
});

export const FooterLink=style({
  color: theme.colors.gray3,
  textDecoration: 'none',
  '@media': {
    [mediaQueries.tablet]: {
    }
  }
})

export const SocialMedia = style({
  display: "flex",
  gap: "12px",

  '@media': {
  }
})