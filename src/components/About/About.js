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
             Hello my name's Hollie and I started Keen Dream Events with the motivation of no longer working in the finance industry. I have always loved organising events and going that extra mile to make any party as memorable as possible. My daughters, nieces and nephews have provided me with daily inspiration and motivate me to offer the absolute best results! This business wouldn't be possible without the help and support of husband Adam and my sister Stacey, who are a huge part of Keen Dream Events success.


            </p>  
            <Avatar>
              <img className='desktop' src={AvatarImg} alt=''/>  
            </Avatar>
            
          </FlexWrap>
         
        </Wrap>
    )
}

export default About
