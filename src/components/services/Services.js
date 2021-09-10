import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../SectionTitle/SectionTitle'
import TeepeeIcon from '../../images/teepee-icon.png'
import BalloonIcon from '../../images/balloon-icon.png'
import AdditionalIcon from '../../images/additional-icon.png'
import TeepeeImg from '../../images/teepee-img.png'
import BalloonImg from '../../images/balloon-img.png'
import AdditionalImg from '../../images/additional-img.png'
import {color} from '../GlobalStyle.css'

const serviceData =[
    {
        icon:TeepeeIcon,
        img:TeepeeImg,
        name:'Teepee Parties',
        prices:[
            {obj:'2 Tents', price:'£100'},
            {obj:'3 Tents', price:'£150'},
            {obj:'4 Tents', price:'£200'},
            {obj:'5 Tents', price:'£250'},
            {obj:'Lace Tent', price:'£50'},
            {obj:'2 Lace Tents', price:'£100'},
            {obj:'1 Den', price:'£100'},
            {obj:'2 Dens', price:'£200'},
            {obj:'4 Meter Bell Tent',price:'£225'},
            {obj:'5 Meter Bell Tent',price:'£275'},
            {obj:'5 Meter Nova Air Dome',price:'£300'},

        ],
        orderInList:1
    },
    {
        icon:BalloonIcon,
        img:BalloonImg,
        name:'Balloons',
        prices:[
            {obj:'6ft Balloon Arch', price:'£150'},
            {obj:'Balloons On Side Of Bell Tent', price:'£25'},
            {obj:'Small 120cm Full Balloon Ring With Neon', price:'£150'},
            {obj:'Medium 150cm Full Balloon Ring With Neon', price:'£200'},
            {obj:'Small Half Balloon Ring With Neon', price:'£100'},
            {obj:'Medium Half Balloon Ring With Neon', price:'£120'},
            {obj:'Large 150cm Balloon Ring With Neon', price:'£200'},
        ],
        orderInList:2
    },
    {
        icon: AdditionalIcon,
        img: AdditionalImg,
        name:'Additional Items',
        prices:[
            {
                obj:'Giant 3ft Light Up Numbers',
                details:[
                    {obj:'One Number',price:'£50'},
                    {obj:'Two Numbers',price:'£75'}
                ]
            },            
            {obj:'Decorated Picnic Table 240cm',price:'£100'},
            {obj:'Decorated Picnic Table 360cm',price:'£150'},
            {obj:'Neon In 120cm Gold Hoop With Foliage',price:'£100'},
            {obj:'5ft Prosecco Wall',price:'£100'},
            {obj:'6ft Prosecco Wall',price:'£120'},
            {obj:'Shot Cart',price:'£130'},
            {obj:'6ft Doughnut Wall',price:'£120'},
            {obj:'Peacock Chair',price:'£75'},
            {obj:'Small Sweet Cart',price:'£50'},
        ],
        orderInList:3
    }

]

const Wrap = styled.div`
 max-width: 1575px;
    margin:0 auto;
    padding:1rem 0rem;
    @media only screen and (min-width: 700px){
        padding:1rem 15.3%;
    }
`
const List = styled.ul`
padding-top: 2rem;
padding-left: 2rem;
padding-right: 2rem;
margin:0 auto;
display: block;
@media only screen and (min-width: 700px){
    display: flex; 
   // flex-wrap  :wrap ;
    width:100%;
    justify-content: center;
    padding-top: 2rem;
    padding-left: 0rem;
padding-right: 0rem;
}
@media only screen and (min-width: 900px){
     /* justify-content: space-between; */
}
  /* @media only screen and (min-width: 1200px){
       justify-content: space-between;
     } */
`
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

    @media only screen and (min-width: 700px){
        max-width: 495px;
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
           min-height: 439px;
        }
        .second-item{
            max-width: 235px;
            /* .price-list-item{
                line-height: 1.5;
            } */
        }
    
    }
     /* @media only screen and (min-width: 1200px){
        max-width: 550px;
     } */
`
const Item = ({data})=>{
    const extraClassForBalloonsItem=[];
    if(data.name==='Balloons'){
        extraClassForBalloonsItem.push('second-item')
    }
    return(
        <StyledItem>
            <div className='details'>
                <img className='decoIcon' alt='' src={data.icon}/>
                <h3>{data.name}</h3>
                <ul className={`price-list ${extraClassForBalloonsItem.join(' ')}`}>
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

const Services = () => {
    const sortedData = serviceData.sort((a,b)=>a.orderInList-b.orderInList);
    //console.log(sortedData)
    return (
        <Wrap id='services'>
           <SectionTitle title='Different Services Available'/> 
            <List>
                {sortedData.map((item,index)=><Item data={item} key={index}/>)}
            </List>
        </Wrap>
    )
}

export default Services
