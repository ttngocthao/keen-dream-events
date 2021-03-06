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
        font-weight: 300;
    }
    body{
        margin: 0;
    }
    ul,p,div{
        padding:0;
        margin:0;
         @media only screen and (min-width: 700px){
             font-size: 20px;
          }
    }
    button{
        background-color: transparent;
            border:none;
            box-shadow: none;
            padding:0;
            cursor: pointer;
            &:focus,&:focus-visible,&:target{
                outline: none;
                border: 2px solid white;
                padding: .25rem;
            }

    }
    figure{
        margin: 0;
        img{
            width: 100%;
            vertical-align: bottom;
        }
    }
    li{
        list-style: none;
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
             font-size: 32px;
          }
    }
  

`