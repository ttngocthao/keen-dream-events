import React from 'react'
import styled from 'styled-components'
import BalloonImg from '../../images/balloon_banner.png'
import SmallBalloonImg from '../../images/balloon_banner_s.png'
const Figure = styled.figure`
    margin:1rem auto;
    padding:0;
    max-width: 1575px;
     @media only screen and (min-width: 700px){
         margin:2rem auto;
     }
    img{
        width: 100%;
    }
    img.desktop{
        display: none;
         @media only screen and (min-width: 600px){
             display: block;
         }
    }
    img.mobile{
        display: block;
         @media only screen and (min-width: 600px){
             display: none;
         }
    }
`

const BalloonBanner = () => {
    return (
        <Figure>
            <img className='desktop' alt='' src={BalloonImg}/>
            <img className='mobile' alt='' src={SmallBalloonImg}/>
        </Figure>
    )
}

export default BalloonBanner
