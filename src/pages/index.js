import React from "react"
import About from "../components/About/About"
import AdditionalInfo from "../components/additionalInfo/AdditionalInfo"
import BalloonBanner from "../components/balloonBanner/BalloonBanner"
import Contact from "../components/contact/Contact"
import Layout from '../components/Layout'




// markup
const IndexPage = () => {
  return (
    <Layout>
      <h1>Keen Dream Events</h1>
      
      <About/>
      <BalloonBanner/>
      <AdditionalInfo/>
      <BalloonBanner/>
      <Contact/>
    </Layout>
  )
}

export default IndexPage
