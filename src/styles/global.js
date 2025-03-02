import { createGlobalStyle } from "styled-components";
import "@fontsource/poppins";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
    body, html {
        height: 100%;
        background-color: ${props => props.theme["gray-100"]};
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


    @media (max-width: 1080px){
        html{
            font-size: 93.75%;
        }
    }
    @media (max-width: 720px){
        html{
            font-size: 87.5%;
        }
    }

`;
