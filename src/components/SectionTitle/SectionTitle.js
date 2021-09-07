import React from 'react'
import styled from 'styled-components'

const Wrap = styled.h2`
    text-align: center;
    /* padding-bottom: 1rem; */
`
const SectionTitle = ({title}) => {
    return (
         <Wrap>
            {title ? title : 'Title'}
        </Wrap>
    )
}

export default SectionTitle
