import React from 'react'
import styled from 'styled-components'
import {color} from '../GlobalStyle.css'
import FBIcon from '../../images/facebook-icon.png'
import InstagramIcon from '../../images/instagram-icon.png'


const StyledFooter = styled.footer`
    background-color: ${color.black};
    color: white;
    padding:1rem 2rem;
    @media only screen and (min-width: 700px){
        display: flex;
        flex-direction: row-reverse;
        align-items: center;
        justify-content: space-between;
        padding-left: 2.7%;
        padding-right: 2.7%;
    }
`
const MediaList = styled.ul`
    padding-left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    li{
        padding: .5rem;
        list-style: none;
    }
    img{
        max-width: 30px;
        width:100%;
    }
    

`
const Info = styled.div`
    text-align: center;
    font-size:1rem;
    font-weight: 400;
`
const SocialMediaData =[
    {
        icon:FBIcon,
        url:'https://www.facebook.com/Keen-Dream-Events-104469348305747',
        orderInList:1,
        label:'Facebook'
    },
    {
        icon:InstagramIcon,
        url:'https://www.instagram.com/keendreamevents/',
        orderInList:2,
        label:'Instagram'
    }
]
const Footer = () => {
    const orderedData = SocialMediaData.sort((a,b)=> a.orderInList - b.orderInList)
    return (
        <StyledFooter>
            <MediaList>
                {orderedData.map((item,index)=>{
                    return(
                        <li key={index}>
                            <a rel="noreferrer" target='_blank' href={item.url} aria-label={`Follow us on ${item.label}`}>
                                <img src={item.icon} alt=''/>
                            </a>
                        </li>
                    )
                })}
            </MediaList>
            <Info>
                © 2021 KEEN DREAM EVENTS LTD   /   CREATED BY <a href='https://www.mightycultured.co.uk/'>MIGHTY CULTURED LTD</a>
            </Info>
            
            
            
        </StyledFooter>
    )
}

export default Footer
