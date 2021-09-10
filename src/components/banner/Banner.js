import React from 'react'
import styled from 'styled-components'
import BannerBkg from '../../images/brick-background.png'
import BannerImg from '../../images/banner.png'
import SmallBannerImg from '../../images/banner-s.png'
const Figure = styled.figure`
    background-image: url(${BannerBkg});
    background-position: center bottom;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100%;
    max-width: 1920px;
     padding-top: 6.25rem;
     padding-bottom: 1rem;
     margin:0 auto;

      @media only screen and (min-width: 700px){
           padding-top: 8.8125rem;
           padding-bottom: 1rem;
             box-sizing: border-box;
             padding-left: 8.9%;
             padding-right: 8.9%;
      }
   
    img{
        width: 100%;
        max-width: 1575px;
        margin:0 auto;
        display: block;
        box-sizing: border-box;
        &.desktop{
            display: none;
        }
         @media only screen and (min-width: 700px){
             &.desktop{
                 display: block;
                  /* margin:0 8.9%; */
             }
             &.mobile{
                 display: none;
             }
         }
    }
`
const Banner = () => {
    return (
        <div id='home'>
            <Figure>
                <img className='desktop' alt='' src={BannerImg}/>
                <img className='mobile' alt='' src={SmallBannerImg}/>
                
            </Figure>
        </div>
    )
}

export default Banner
