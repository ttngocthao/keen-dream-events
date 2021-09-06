import { createGlobalStyle } from 'styled-components'
//font-family: 'Dancing Script', cursive;
//font-family: 'Kanit', sans-serif;
export const color ={
    gray: '#bfbfbf',
    purple: '#d8b4e2',
    black:'#17172f',
    pink:'#e71d73',
    blue:'#36a9e1'
}
export default createGlobalStyle`
    *{
        font-size: 16px;
        line-height: 1.6;
        font-family: 'Kanit', sans-serif;
        color: ${color.gray};
        box-sizing: border-box;
    }
    body{
        margin: 0;
    }
    ul,p,div{
        padding:0;
        margin:0;
         @media only screen and (min-width: 700px){
             font-size: 1.5625rem;
          }
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Dancing Script', cursive;
        color: ${color.pink};
        font-weight: bold;
        margin:0;
    }
    h1,h2{ 
         font-size: 1.875rem;
          @media only screen and (min-width: 700px){
             font-size: 2.8125rem;
          }
    }
  

`