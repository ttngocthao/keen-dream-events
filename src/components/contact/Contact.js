import React from 'react'
import styled from 'styled-components'
import { color } from '../GlobalStyle.css'
import BlueUnderline from '../../images/blue_underline.png'
const Bkg = styled.div`
 
`
const Wrap = styled.div`
   background-color: ${color.purple};
    color: white;
    text-align: center;
    padding:1rem;
    p{
        color: white;
    }
     @media only screen and (min-width: 700px){
          display: flex;
          align-items: center;
          padding-left: 9%;
          padding-right: 9%;
      }
`
const LeftCol = styled.div`
     @media only screen and (min-width: 700px){
         text-align: left;
         max-width: 1038px;
      }
`
const Title = styled.h2`
    color: white;
    font-weight: 600;
    font-size: 1.875rem;
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
    margin:1rem auto;
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
`
const Contact = () => {
    const mailToAddress='';
    return (
        <Wrap>
            <LeftCol>
                <Title>
                    We’d Love To HearFrom You!
                </Title>
                <p>
                    Nostrud velit eiusmod do laboris. Lorem veniam non ad velit enim sint excepteur officia. Excepteur dolor proident enim laboris.
                </p> 
            </LeftCol>
            
            <ContactBtn href={`mailto:${mailToAddress}`}>
                Email
            </ContactBtn>
        </Wrap>
    )
}

export default Contact

