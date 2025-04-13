/**
 * Componente raiz da aplicação que configura os provedores de tema e roteamento
 */
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { PortfolioProvider } from "./hooks/usePortfolioData.jsx"; // Usando o .jsx para evitar confusão

/**
 * Componente principal da aplicação
 * Configura providers para tema, roteamento e dados do portfólio
 * @returns {React.ReactElement} Aplicação completa com providers
 */
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