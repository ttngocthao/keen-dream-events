import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    padding: 0rem 1rem;
    text-align: center;
    max-width: 1440px;
    margin:0 auto;
    box-sizing: border-box;
    @media only screen and (min-width: 700px){
        text-align: left;
        h1{
            text-align: center;
            padding-bottom: 1rem;
        }
    }
`
const Intro = () => {
    return (
        <Wrap>
            <h1>What is Keen Dream Events?</h1>
            <p>Keen Dream Events was a dream created in lock down and since the start of 2021 has hit the ground running. We are passionate about making any Event extra special. We like to provide that extra touch that will bring the wow factor and put a smile on people’s faces. From Bell tents to balloon arches there isn’t much we won’t do.</p>
        </Wrap>
    )
}

export default Intro
