/**
 * Estilos globais da aplicação usando styled-components
 * Define reset de CSS e estilos base para todo o aplicativo
 */
import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

/**
 * Estilos globais aplicados a toda a aplicação
 * Inclui reset de CSS, configurações de fonte, e estilos base
 */
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }
    body, html {
        height: 100%;
        background-color: ${props => props.theme["background-color"]};
    }

    body {
        display: flex;
        flex-direction: column;
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    button{
        cursor: pointer;
    }

    a{
        color: inherit;
        text-decoration: none;
    }


    @media (max-width: 1450px){
        html{
            font-size: 93.75%;
        }
    }
    @media (max-width: 1200px){
        html{
            font-size: 87.5%;
        }
    }

`;
