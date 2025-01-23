import { style } from "@vanilla-extract/css";
import { theme } from "../app/global.css";
import { mediaQueries } from "@/styles/media";

export const headerStyle = style({
  maxWidth: '1900px',
  width: '100%',
  margin: '0 auto',
	display: "flex",
	justifyContent: "space-between",
	borderBottom: `1px solid ${theme.colors.gray7}`,
  padding: '0 360px',

  '@media' : {
    [mediaQueries.tablet]: {
      maxWidth: '1199px',
      width: '100%',
      margin: '0 auto',
      padding: '0 24px',
    },
    [mediaQueries.mobile]: {
      maxWidth: '767px',
      width: '100%',
      margin: '0 auto',
      padding: '0 20px',
    }
  }
});


export const linkStyle = style({
	display: "flex",
	alignItems: "center",
	gap: "25px",
	color: "#0070f3",
});

export const linkAtrribute = style({
	textDecoration: "none",
	color: theme.colors.black,
	...theme.text["xs-medium"],
});
