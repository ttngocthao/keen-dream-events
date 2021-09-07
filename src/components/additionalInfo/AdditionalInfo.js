import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../SectionTitle/SectionTitle'
const Wrap = styled.div`
    max-width: 1408px;
    margin:0 auto;
    padding:1rem 1rem 0rem;
    @media only screen and (min-width: 700px){
        padding-top: 2rem;
    }
`
const  StyledP= styled.p`
    padding:2rem 0 1rem;
    @media only screen and (min-width: 700px){
        padding:4rem 0 2rem;
    }
`

const AdditionalInfo = () => {
    return (
        <Wrap>
            <SectionTitle title=' Additional Information'/>
           
            <StyledP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </StyledP>
        </Wrap>
    )
}

export default AdditionalInfo
