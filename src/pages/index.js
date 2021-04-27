import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Service from "../components/services"
import Work from "../components/work"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout> 
    <SEO title="MOGS" />
    <About />
    <Service />
    <Work />
    <Contact/>
  </Layout>
)

export default IndexPage
