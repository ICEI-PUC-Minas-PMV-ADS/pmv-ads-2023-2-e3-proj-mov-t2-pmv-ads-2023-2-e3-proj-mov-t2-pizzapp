import { ThemeProvider } from "styled-components";

import Theme from "@theme/index";
import { Home } from "@screens/Home";


export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Home />
    </ThemeProvider>
  );
}
