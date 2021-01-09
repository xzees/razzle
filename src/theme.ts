import { createMuiTheme } from "@material-ui/core/styles";
import { indigo, orange } from "@material-ui/core/colors";

const DBHeaventRoundedv32 = {
  fontfamily: "DBHeaventRoundedv32",
  src: ` url("assets/fonts/DBHeaventRounded/DBHeaventRoundedv32.woff2")
    format("truetype")`,
  fontdisplay: "swap",
};

// Configure Material UI theme
const theme = createMuiTheme({
  palette: {
    primary: indigo,
    secondary: orange,
    type: "light",
  },
  typography: {
    fontFamily: "DBHeaventRoundedv32",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [DBHeaventRoundedv32],
      },
    },
  },
  spacing: (factor) => `${0.25 * factor}rem`,
});

export default theme;
