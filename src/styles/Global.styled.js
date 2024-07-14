import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
        list-style: none;
    }

    :root {
        --primary-text-color: #222260;
        --primary-text-color2: "color: rgba(34, 34, 96, .6)";
        --primary-text-color3: "color: rgba(34, 34, 96, .4)";

        --main-background: rgba(252, 246, 249, 0.78);
        //--background-lighter:   ;
        --color-green: #42AD00;
        --color-grey: #aaa;
        --color-accent: #F56692;
        --color-delete: #FF0000;

       --shadow: 0px 1px 17px rgba(0, 0, 0, 0.06);

        --transition: all 0.2s ease-in-out;
    }

    body {
        font-family: "Nunito", sans-serif;
        font-size: clamp(1rem, 1.5vw, 1.2rem);
        overflow: hidden;
        color: rgba(34, 34, 96, .6);

    }
`;
