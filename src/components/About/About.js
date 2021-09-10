import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../SectionTitle/SectionTitle'
import AvatarImg from '../../images/avatar.png'


const Wrap = styled.div`
     /* max-width: 1320px; */
    margin:0 auto;
    padding:0rem 2rem;
    text-align: center;
     @media only screen and (min-width: 700px){
         text-align: left;         
        padding:0; 
        padding-top:2rem;
        margin: 0 15.3%;
     }
`
const FlexWrap = styled.div`
padding-top: 2rem;
            padding-bottom: 1rem;
    @media only screen and (min-width: 900px){
            display: flex;
            padding-top: 2rem;
            padding-bottom: 1rem;
        }
`
const Avatar = styled.figure`
    margin:0 auto;
    padding:0;
    width: 100%;
   max-width: 202px;
    min-width: 202px;
     @media only screen and (min-width: 900px){
          max-width: 300px;
           margin-left: 2rem;
     }
    img{
        width: 100%;
    }
    img.mobile{
        margin-top: 2rem;
        margin-bottom: 2rem;
        @media only screen and (min-width: 900px){
            display: none;
        }
    }
    img.desktop{
        display: none;
        @media only screen and (min-width: 900px){
            display: block;
           
        }
    }
`

const About = () => {
    return (
        <Wrap id='about'>
            <Avatar>
              <img className='mobile' src={AvatarImg} alt=''/>  
            </Avatar>
          <SectionTitle title='About me'/>  
          <FlexWrap>
             <p>
              Hello my names Hollie and I started Keen Dream events with the dream of no longer having to work in finance. I always loved organising events and going that extra mile to make any party extra special. My daughters, nieces and nephews where my inspiration and continue to give me new ideas and motivate me daily! This business wouldn’t be possible without the help and support from my Sister Stacey and Husband Adam and a huge part of Keen Dreams success I owe to them.
            </p>  
            <Avatar>
              <img className='desktop' src={AvatarImg} alt=''/>  
            </Avatar>
            
          </FlexWrap>
         
        </Wrap>
    )
}

export default About
