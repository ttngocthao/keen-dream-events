import React from 'react'
import styled from 'styled-components'
import {color} from '../GlobalStyle.css'

const StyledFooter = styled.footer`
    background-color: ${color.black};
    color: white;
`

const Footer = () => {
    return (
        <StyledFooter>
            <div>
                © 2021 KEEN DREAM EVENTS LTD   /   CREATED BY <a href='https://www.mightycultured.co.uk/'>MIGHTY CULTURED LTD</a>
            </div>
            
        </StyledFooter>
    )
}

export default Footer
