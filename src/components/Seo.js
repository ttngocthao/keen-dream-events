import React from 'react'
import { Helmet } from 'react-helmet'
import TabIcon from '../images/icon.png'
const Seo = ({ title }) => {
    return (
         <Helmet>
           <html lang="en" amp />
            <meta name="description" content="We are passionate about making any Event extra special. We like to provide that extra touch that will bring the wow factor and put a smile on people’s faces. From Bell tents to balloon arches there isn’t much we won’t do." />
            <title>Keen Dream Events{title ? ` - ${title}` : ''}</title>
            <link rel='icon' type="image/icon" href={TabIcon} />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Kanit:wght@300;400;600&display=swap" rel="stylesheet"/>
        </Helmet>
    )
}

export default Seo
