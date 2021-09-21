import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
    padding: 0rem 2rem;
    text-align: center;
    /* max-width: 1320px; */
    margin:0 auto;
    box-sizing: border-box;
    h1{
            text-align: center;
            padding-top: 1rem;
            padding-bottom: 2rem;
        }
    @media only screen and (min-width: 700px){
        text-align: left;
        padding:0;
        margin: 0 15.3%;
        h1{
            
            padding-top: 1rem;
            padding-bottom: 2rem;
        }
    }
`
const Intro = () => {
    return (
        <Wrap>
            <h1>What is Keen Dream Events?</h1>
            <p>Keen Dream Events strive to offer the most beautiful, unique and insta worthy set-ups for any party or event. We are passionate about making any event extra special, providing an added touch that will bring the wow factor and put a smile on people's faces. From bell tents to balloon arches, themed set-ups and Prosecco walls, there isn't much we won't do.

</p>
        </Wrap>
    )
}

export default Intro
