import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";

function App() {
  return (
    <BrowserRouter>
          <ThemeProvider theme={defaultTheme}> {/* Aplica o tema padrão definido para a aplicação */}
            <Router /> {/* Gerencia as rotas da aplicação */}
            <GlobalStyle /> {/* Aplica os estilos globais */}
          </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;