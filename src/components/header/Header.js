import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import LogoImg from '../../images/logo.png'
import MenuOpen from '../../images/menu-open.png'
import MenuClose from '../../images/menu-close.png'
import useScroll from '../../hooks/useScroll'
import BlueUnderlineImg_S from '../../images/blue_underline.png'
import BlueUnderlineImg from '../../images/blue_underline_large.png'
import PinkUnderlineImg_S from '../../images/pink_underline.png'
import PinkUnderlineImg from '../../images/pink_underline_large.png'
import WhiteUnderlineImg from '../../images/white_underline.png'
import WhiteUnderlineImg_S from '../../images/white_underline_small.png'
import { C } from '@styled-icons/simple-icons'


const navItems =[
    {
        name:'Home',
        url:'/#home',       
        orderInMainList:1,
        underlineImg:WhiteUnderlineImg_S,
        hoverImg:BlueUnderlineImg_S,
        activeImg:PinkUnderlineImg_S
    },
    {
        name:'About',
        url:'/#about',       
        orderInMainList:2,
        underlineImg:WhiteUnderlineImg_S,
        hoverImg:BlueUnderlineImg_S,
        activeImg:PinkUnderlineImg_S
    },
    {
        name:'Services',
        url:'/#services',       
        orderInMainList:3,
        underlineImg:WhiteUnderlineImg,
        hoverImg:BlueUnderlineImg,
        activeImg:PinkUnderlineImg,
        itemSize:'L'
    },
    {
        name:'Contact',
        url:'/#contact',       
        orderInMainList:4,
        underlineImg:WhiteUnderlineImg,
        hoverImg:BlueUnderlineImg,
        activeImg:PinkUnderlineImg,
        itemSize:'L'
    }
]

const StyledHeader = styled.header`
    position: fixed;
    top:0;
    left:0;
    right:0;
    width: 100%;
    background-color: transparent;
    z-index: 100;
    max-width: 1920px;
    margin:0 auto;
    /* padding:0 1rem; */
    box-sizing: border-box;
    &.barActive{
        background-color: #17172F;
    }
    .underlined{
        width: 65.79px;
        height: 3px;
        display: block;
        background-image: url(${BlueUnderlineImg_S});
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: absolute;
        bottom: 20%;
        left:0;
        &.underlined_hover,&.underlined_active{
            opacity: 0;
        }
        
    }
    .nav-item{
        &:hover {
            & .underlined_active,& .underlined{
                opacity: 0;
            }
            & .underlined_hover{
                opacity: 1;
            }
        }
        &.active-item{
            & .underlined_hover,& .underlined{
                opacity: 0;
            }
            & .underlined_active{
                opacity: 1;
            }
        }
    }
    .nav-item a{
        font-size: 1.875rem;
         font-family: 'Dancing Script', cursive;
         font-weight: bold;
         color: white;
         text-decoration: none;
         position: relative;
         display: block;
         padding:.5rem 0;
    }
`
const NavMobile = styled.nav`
   
    .mobile-nav-ul{
         background-color: #17172F;
         padding:1rem 2rem;
         
    }
    
     @media only screen and (min-width: 700px){
         display: none;
     }
    
`
const MobileBar = styled.div`
    display: flex;
    justify-content: space-between;
    width: 62.5%;
    align-items: center;
    margin-left: auto;
    background-color: transparent;
     padding:0 2rem 0 0;
    .logo-figure{
        max-width: 92px;
        min-width: 80px;
        width: 100%;
       
    }
    .menu-btn{
        img{
            max-width: 33px;
        }
    }
   
`
const NavDesk = styled.nav`
    .desk-nav-ul{
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 998px;
        box-sizing: border-box;
        margin: 0rem auto;
         padding:.5rem 1rem 0;
         
    }
    .desk-item{
        min-width: 130px ;
        
    }
    .desk-item a{
        /* padding: 1rem 2rem; */
        font-size: 2rem;
         .underlined{
             /* left: 2rem; */
             width: 110px;
        }
    }
    display: none;
    .logo-figure{
        min-width: 126px;
        max-width: 130px;
    }
     @media only screen and (min-width: 700px){
         display: block;
     }
`

const Header = () => {
    const sortedNavData = navItems.sort((a,b)=>a.orderInMainList-b.orderInMainList);
    const [showMobileMenuList,setShowMobileMenuList]= useState(false);
    const [currentPath,setCurrentPath] = useState('/');
    const [showHeaderBkg,setShowHeaderBkg]= useState(false)
    const scroll = useScroll();
    useEffect(()=>{

       //for active item
       let hashName;       
        if(window){
           
            hashName = window.location.hash;
            if(hashName && hashName!==''){
                setCurrentPath(hashName.split('#')[1]);
                console.log('testing',hashName);
            }
            if(hashName===''){
                setCurrentPath('home');
            }
            
            
            
        }

       //for scrolling and header background color
        if(scroll.y !==0){          
            setShowHeaderBkg(true);
        }else{
            if(showMobileMenuList)  {
                setShowHeaderBkg(true);
            } else{
                setShowHeaderBkg(false);
            }
            
        }
    },[scroll.y])
    
    const logoClickHandle =(e)=>{
        e.preventDefault();
       window.location.href='/';
       window.scrollTo(0,0);
    }
    const menuClickHandle =()=>{
        setShowMobileMenuList(!showMobileMenuList)
        if(!showMobileMenuList){
            setShowHeaderBkg(true)
        }
    }
   
    return (
        <StyledHeader className={showHeaderBkg ? 'barActive': ''}>
           <NavMobile >
               <MobileBar>
                    <a href='/' aria-label='Keen Dream Events - Home' onClick={logoClickHandle}>
                        <figure className='logo-figure'>
                            <img src={LogoImg} alt='Keen Dream Events - Home' />
                        </figure>
                    </a>
                    <button className='menu-btn' aria-label='menu button' onClick={menuClickHandle}>
                        <img src={MenuOpen} alt='menu button'/>
                    </button>
               </MobileBar>
                {showMobileMenuList &&  <ul className='mobile-nav-ul'>
                    {sortedNavData.map((item,index)=>{
                        let liClassName=['nav-item'];
                        if(item.url.split('#')[1]===currentPath){
                            liClassName=[...liClassName,'active-item'];
                        }
                        return(
                            <li className={liClassName.join(' ')} key={index} onClick={()=>setShowMobileMenuList(false)}>
                                <a aria-label={item.name} href={item.url}>
                                   {item.name} 
                                   <span className='underlined' style={{backgroundImage:`url(${item.underlineImg})`,width: item?.itemSize==="L" ? '88.85px':'65.79px'}}></span>
                                    <span className='underlined underlined_hover' style={{backgroundImage:`url(${item.hoverImg})`,width: item?.itemSize==="L" ? '88.85px':'65.79px'}}></span>
                                    <span className='underlined underlined_active' style={{backgroundImage:`url(${item.activeImg})`,width: item?.itemSize==="L" ? '88.85px':'65.79px'}}></span>

                                </a>
                                
                            </li>
                        )
                    })}
                </ul>}
           </NavMobile>
           <NavDesk>
                <ul className='desk-nav-ul'>
               {sortedNavData.filter(item=>item.orderInMainList<3).map((item,index)=>{
                   let liClassName=['nav-item desk-item'];
                   if(item.url.split('#')[1]===currentPath){
                       liClassName=[...liClassName,'active-item'];
                   }
                        return(
                            <li className={liClassName.join(' ')} key={index}>
                                <a aria-label={item.name} href={item.url}>
                                   {item.name} 
                                   <span className='underlined' style={{backgroundImage:`url(${item.underlineImg})`,width: item?.itemSize==="L" ? '110px':'81.71px'}}></span>
                                    <span className='underlined underlined_hover' style={{backgroundImage:`url(${item.hoverImg})`,width: item?.itemSize==="L" ? '110px':'81.71px'}}></span>
                                    <span className='underlined underlined_active' style={{backgroundImage:`url(${item.activeImg})`,width: item?.itemSize==="L" ? '110px':'81.71px'}}></span>
                                </a>
                                
                            </li>
                        )
                    })}
                    <li>
                        <a href='/' aria-label='Keen Dream Events - Home' onClick={logoClickHandle}>
                            <figure className='logo-figure'>
                                <img src={LogoImg} alt='Keen Dream Events - Home' />
                            </figure>
                        </a>
                    </li>
                    {sortedNavData.filter(item=>item.orderInMainList>2).map((item,index)=>{
                         let liClassName=['nav-item desk-item'];
                        if(item.url.split('#')[1]===currentPath){
                            liClassName=[...liClassName,'active-item'];
                        }
                        return(
                            <li className={liClassName.join(' ')} key={index}>
                                <a aria-label={item.name} href={item.url}>
                                   {item.name} 
                                   <span className='underlined' style={{backgroundImage:`url(${item.underlineImg})`,width: item?.itemSize==="L" ? '110px':'81.71px'}}></span>
                                     <span className='underlined underlined_hover' style={{backgroundImage:`url(${item.hoverImg})`,width: item?.itemSize==="L" ? '110px':'81.71px'}}></span>
                                    <span className='underlined underlined_active' style={{backgroundImage:`url(${item.activeImg})`,width: item?.itemSize==="L" ? '110px':'81.71px'}}></span>
                                </a>
                                
                            </li>
                        )
                    })}
                    </ul>
           </NavDesk>
          
        </StyledHeader>
    )
}

export default Header
