import React from 'react'
import { Helmet } from 'react-helmet'
import TabIcon from '../images/icon.png'
const Seo = ({ title }) => {
    return (
        <Helmet>
            <title>Keen Dream Events{title ? ` - ${title}` : ''}</title>
            <link rel='icon' type="image/icon" href={TabIcon} />
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;600;700&family=Kanit:wght@300;400;600&display=swap" rel="stylesheet"/>
        </Helmet>
    )
}

export default Seo
