import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Layout from "../components/MyLayout.js";

import NavBar from "../components/Navbar";

export default () => (
  <MuiThemeProvider>
    <div>
      <NavBar />
    </div>
  </MuiThemeProvider>
);
