import React from "react"
import About from "../components/About/About"
import AdditionalInfo from "../components/additionalInfo/AdditionalInfo"
import BalloonBanner from "../components/balloonBanner/BalloonBanner"
import Banner from "../components/banner/Banner"
import Contact from "../components/contact/Contact"
import Intro from "../components/intro/Intro"
import Layout from '../components/Layout'




// markup
const IndexPage = () => {
  return (
    <Layout>
      <Banner/>
      <Intro/>
      
      <About/>
      <BalloonBanner/>
      <AdditionalInfo/>
      <BalloonBanner/>
      <Contact/>
    </Layout>
  )
}

export default IndexPage
