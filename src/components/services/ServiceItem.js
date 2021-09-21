import React, { useState, useEffect, useRef }  from 'react'
import styled from 'styled-components'
import {color} from '../GlobalStyle.css'
const StyledItem = styled.li`
    list-style: none;
    padding:0rem 0 1rem;
    overflow: hidden;
  
    h3{
        font-size: 1.875rem;
        font-weight: bold;
        color: ${color.gray};
        text-align:center;
    }
    img{
         display: block;
         width: 100%;
         margin: 0 auto;
    }
    img.decoIcon{       
        max-width: 4.9375rem;        
    }
    /* img.decoImg{
        max-width: 31.5625rem;
    } */
     .details{
         padding: 1.5rem 0;
         border: 5px solid #f5f5f5;
         border-bottom:none;
     }
     .price-list{
         /* max-width: 420px; */
         padding:1rem;
         margin:0 auto;
         box-sizing: border-box;
         
     }
     .price-list-item{
         font-weight: 600;
         list-style: none;
         text-align: center;
         line-height: 1.0;
         padding-top: 0.75rem;
        
            span{
                 font-weight: 600;
            }
         .blue{
             color: ${color.blue};
         }
         .pink{
             color: ${color.pink};
         }
     }
    .first-item li:last-child{
            font-size: 13px;
        }
    @media only screen and (min-width: 700px){
        /* max-width: 495px; */
        box-sizing: border-box;
        margin-right: 1rem;
          min-width: 320px;
        &:last-child{
            margin: 0;
        }
        /* .details{
             border: 5px solid #f5f5f5;
             border-bottom:none;
        } */
        h3{
            font-size: 2.625rem;
        }
        img.decoIcon{       
            max-width: 9.0625rem;        
        }
        .price-list{
           min-height: 510px;
        }
        .second-item{
            max-width: 280px;
           
            /* .price-list-item{
                line-height: 1.8;
            } */
        }
       
    
    }
     /* @media only screen and (min-width: 1200px){
        max-width: 550px;
     } */
`

const ServiceItem = ({data})=>{
     
    const extraClassForBalloonsItem=[];
    if(data.name==='Teepee Parties'){
        extraClassForBalloonsItem.push('first-item')
    }
    if(data.name==='Balloons'){
        extraClassForBalloonsItem.push('second-item')
    }
   
    return(
        <StyledItem >
            <div className='details' >
                <img className='decoIcon' alt='' src={data.icon}/>
                <h3>{data.name}</h3>
                <ul  className={`price-list ${extraClassForBalloonsItem.join(' ')}`}>
                    {data.prices.map((item,index)=>{
                        const priceTxtColor = item.price ? (index%2===0 ? 'blue' :'pink') : ''
                       
                       if(item.details){
                           return(
                               <li className={`price-list-item`} key={index}>
                                   {item.obj} <br/> 
                                   {item.details.map((detail,detailIndex)=><span key={detailIndex}>
                                       {detail.obj} &nbsp;
                                       <span className={detailIndex%2===0 ? 'blue' : 'pink'}>{detail.price}&nbsp;</span>
                                    </span>)}
                               </li>
                           )
                       }else{
                            return(<li className={`price-list-item `} key={index}>{item.obj}&nbsp;<span className={priceTxtColor}>{item.price ? item.price : ''} </span></li>)
                       }
                           
                       
                        })}
                </ul>
               
            </div>
           
            <img className='decoImg' alt='' src={data.img}/>
        </StyledItem>
    )
}

export default ServiceItem
