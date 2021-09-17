import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../SectionTitle/SectionTitle'
import DonutWallImg from '../../images/additional/keen-dream-events-donut-wall.png'
import HarryPotterImg from '../../images/additional/keen-dream-events-harry-potter-party.png'
import LoveLetterImg from '../../images/additional/keen-dream-events-love-letters.png'
import MermaidImg from '../../images/additional/keen-dream-events-mermaid-party.png'
const Wrap = styled.div`
    /* max-width: 1408px; */
    margin:0 auto;
    padding:1rem 2rem 0rem;
    @media only screen and (min-width: 700px){
        
        padding:0;
        padding-top: 1rem;
        margin: 0 8.9%;
    }
`
// const  StyledP= styled.p`
//     padding:2rem 0 1rem;
//     @media only screen and (min-width: 700px){
//         padding:2rem 0 2rem;
//     }
// `
const ImgRow = styled.div`
    figure{
        width:100%;
        margin-bottom: 1rem;
    }
    @media only screen and (min-width: 700px){
        display: flex;
        justify-content: space-between;
        padding:1rem 0 2rem;
        figure{
            width:24.25%;
            
        }
    }
`
const imgList =[
  {  url:MermaidImg,orderInList:1},
  {  url:DonutWallImg,orderInList:2},
  {  url:LoveLetterImg,orderInList:3},
  {  url:HarryPotterImg,orderInList:4}

]

const AdditionalInfo = () => {
    return (
        <Wrap>
           
           
            <ImgRow>
            {imgList.map((item,index)=>{
                return(
                    <figure key={index}>
                        <img alt='' src={item.url}/>
                    </figure>
                )
            })}
            </ImgRow>
        </Wrap>
    )
}

export default AdditionalInfo
