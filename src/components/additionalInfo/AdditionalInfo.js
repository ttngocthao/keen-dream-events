import React from 'react'
import styled from 'styled-components'
import SectionTitle from '../SectionTitle/SectionTitle'
const Wrap = styled.div`
    max-width: 1408px;
    margin:0 auto;
    padding:2rem 1rem 0rem;
`


const AdditionalInfo = () => {
    return (
        <Wrap>
            <SectionTitle title=' Additional Information'/>
           
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </Wrap>
    )
}

export default AdditionalInfo
