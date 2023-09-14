import { ThemeProvider } from "styled-components";

import Theme from "@theme/index";

import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <StatusBar style="dark" backgroundColor="transparent" translucent />
      <Routes />
    </ThemeProvider>
  );
}
