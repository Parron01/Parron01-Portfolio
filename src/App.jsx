import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PortfolioProvider } from "./hooks/usePortfolioData";

function App() {
  return (
    <BrowserRouter>
      <PortfolioProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </PortfolioProvider>
    </BrowserRouter>
  );
}

export default App;