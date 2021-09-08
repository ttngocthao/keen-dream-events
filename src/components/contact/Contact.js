import React from 'react'
import styled from 'styled-components'
import { color } from '../GlobalStyle.css'
import BlueUnderline from '../../images/blue_underline.png'

const Wrap = styled.div`
   background-color: ${color.purple};
    color: white;
    text-align: center;
    padding:1rem 2rem;
    p{
        color: white;
       
    }
     @media only screen and (min-width: 700px){
          display: flex;
          align-items: center;
          padding-left: 9%;
          padding-right: 9%;
          justify-content: space-between;
          p{
               font-size: 1.5625rem;
          }
      }
`
const LeftCol = styled.div`
padding-right: 0;
     @media only screen and (min-width: 700px){
         text-align: left;
         max-width: 1000px;
         padding-right: 2rem;
      }
`
const Title = styled.h2`
    color: white;
    font-weight: 600;
    font-size: 1.875rem;
    padding-bottom: 1rem;
    @media only screen and (min-width: 700px){
        font-size: 2.8125rem;
        
      }
`
const ContactBtn = styled.a`
    font-family: 'Dancing Script', cursive;
    font-size: 1.875rem;
    background-color: transparent;
    border: 2px solid white;
    color:white;
    padding:0rem 1rem 0.25rem;
    border-radius: 7px;
    text-decoration: none;
    position: relative;
    font-weight: 700;
    margin:1rem 0;
    display: inline-block;
    &::after{
        content: '';
        width: 82px;
        height: 4px;
        background-image: url(${BlueUnderline});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: absolute;
        bottom: 10%;
        left:50%;
        transform: translateX(-50%);

    }
    @media only screen and (min-width: 700px){
         margin-right: 5%;
         font-size: 2.5rem;
      }
`
const Contact = () => {
    const mailToAddress='';
    return (
        <Wrap>
            <LeftCol>
                <Title>
                    We’d Love To Hear From You!
                </Title>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.
                </p> 
            </LeftCol>
            
            <ContactBtn href={`mailto:${mailToAddress}`}>
                Email
            </ContactBtn>
        </Wrap>
    )
}

export default Contact

