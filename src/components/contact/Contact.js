import React from 'react'
import styled from 'styled-components'
import { color } from '../GlobalStyle.css'
import BlueUnderline from '../../images/blue_underline.png'

const Wrap = styled.div`
   background-color: ${color.purple};
    color: black;
    text-align: center;
    padding:1rem 2rem;
   
    p{
        color: black; 
        font-weight: 400;
        margin-bottom: 1rem; 
        line-height: 1.25;
       
    }
     @media only screen and (min-width: 700px){
          display: flex;
          align-items: center;
          padding-left: 15.3%;
          padding-right: 15.3%;
          
          justify-content: space-between;
          p{
               font-size: 20px;
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
    color: black;
    font-weight: 600;
    font-size: 1.875rem;
    padding-bottom: 1rem;
    @media only screen and (min-width: 700px){
        font-size: 2.1875rem;
        
      }
`
const ContactBtn = styled.a`
    font-family: 'Dancing Script', cursive;
    font-size: 1.875rem;
    background-color: transparent;
    border: 2px solid black;
    color:black;
    padding:0rem 1rem;
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
         
         font-size: 32px;
      }
`
const Contact = () => {
    const mailToAddress='keendreamevents631@gmail.com';
    return (
        <Wrap id='contact'>
            <LeftCol>
                <Title>
                    We???d Love To Hear From You!
                </Title>
                <p>
                    If you would like to find out more details about the services we offer or talk about a bespoke event or set up please do not hesitate to contact us.
                </p> 
                <p>T: 07500 904 508</p>
                <p>E: {mailToAddress} </p>
            </LeftCol>
            
            <ContactBtn href={`mailto:${mailToAddress}`}>
                Email
            </ContactBtn>
        </Wrap>
    )
}

export default Contact

