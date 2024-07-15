import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: "Roboto Slab", serif;
        font-size: 16px;
        outline: none;
    }

    ::-webkit-scrollbar {
    width: 8px;
    }
 
    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.colors.white}; 
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.colors.primary}; 
    }

    body {
        background-color: ${({ theme }) => theme.colors.background_800};
        color: ${({ theme }) => theme.colors.white};
        -webkit-font-smoothing: antialiased;
    }

    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9);
    }
`;
