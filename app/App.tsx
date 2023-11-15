import { ThemeProvider } from "styled-components";

import Theme from "@theme/index";

import { StatusBar } from "expo-status-bar";
import { Routes } from "./src/routes";
import { CustomerProvider } from "@context/customer";

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <CustomerProvider>
        <StatusBar style="dark" backgroundColor="transparent" translucent />
        <Routes />
      </CustomerProvider>
    </ThemeProvider>
  );
}
