import React from "react"
import SEO from "../components/seo"
import Welcome from '../chunks/welcome';
import Intro from '../chunks/intro';
import Booking from '../chunks/booking';
import GetInTouch from '../chunks/getintouch';
//import InstagramShow from "../chunks/instagramShow";
import GalleryShow from '../chunks/galleryShow';

const IndexPage = () => (
  <div>
    <SEO title="Home" keywords={[`petalimn`, `cake`, `design`]} />
    <Welcome />
    <Intro />
    <Booking />
    <GetInTouch />
    <GalleryShow />
  </div>
)

export default IndexPage;
