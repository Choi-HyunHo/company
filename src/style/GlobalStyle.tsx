import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing : border-box;
        padding : 0;
        margin : 0;
        -ms-overflow-style: none;

        ::-webkit-scrollbar {
            display : none;
        }
    }

    

   /* Reset CSS */
    a{
        color: inherit; /* 부모의 color를 상속 받는다 */
        text-decoration: none;
    }

    button,input,textarea{
        font-family: 'DM Sans', sans-serif;
        font-size: 16px;
    }

    button:focus,button:active,
    input:focus,input:active,
    textarea:focus,textarea:active{
        outline: none;
        box-shadow: none;
    }

    ul,ol,li{
        list-style-type: none;
        padding-left: 0;
        margin-left: 0;
    }
`