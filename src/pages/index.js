import React from "react"
import BalloonBanner from "../components/balloonBanner/BalloonBanner"
import Contact from "../components/contact/Contact"
import Layout from '../components/Layout'




// markup
const IndexPage = () => {
  return (
    <Layout>
      <h1>Keen Dream Events</h1>
      <h2>About me</h2>
      <BalloonBanner/>
      <Contact/>
    </Layout>
  )
}

export default IndexPage
