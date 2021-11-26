import React from "react"
import { motion } from "framer-motion"
import Herobgcopy from "../../Components/Hero/Herobgcopy"
import LayoutP from "../../Components/LayoutP"
import Hoverimg from "../../Components/gal/Hoverimg"
import FourMain from "../../Components/gal/FourMain"
import { Link } from "gatsby"
import "../../Components/roooms.scss"

export default function index() {
  return (
    <LayoutP>
      <div className="graincontain">
        <div
          style={{ backgroundImage: `url(/grain.png)` }}
          className="bg-container"
        />
      </div>
      <Herobgcopy />
      <div className="projcontainer">
        <h1 className="head4proj">Project Archive</h1>
        <h5>(Scrool to bottom for selected project)</h5>
        <br />
        <br />
        <br />
        <Hoverimg
          bgproj="/galimg/poster4.png"
          projname="POSTER COLLECTION VI"
          projlink="https://www.behance.net/gallery/110470175/POSTER-COLLECTION-VI"
        />

        <Hoverimg
          bgproj="/galimg/logo2.png"
          projname="LOGOPHOLIO - II"
          projlink="https://www.behance.net/gallery/110469395/LOGOPHOLIO-II"
        />
        <Hoverimg
          bgproj="/galimg/ph.png"
          projname="Photo Manipulation - I"
          projlink="https://www.behance.net/gallery/110468877/Photo-Manipulation-I"
        />
        <Hoverimg
          bgproj="/galimg/logo1.jpg"
          projname="LOGO PHOLIO I"
          projlink="https://www.behance.net/gallery/110468575/LOGO-PHOLIO-I"
        />
        <Hoverimg
          bgproj="/galimg/gif.jpg"
          projname="A GIFY PORTFOLIO"
          projlink="https://www.behance.net/gallery/100895521/A-GIFY-PORTFOLIO"
        />

        <Hoverimg
          bgproj="/galimg/p4.jpg"
          projname="Poster Collection - V"
          projlink="https://www.behance.net/gallery/100894555/Poster-Collection-V"
        />
        <Hoverimg
          bgproj="/galimg/five.jpg"
          projname="Poster Collection - IV"
          projlink="https://www.behance.net/gallery/100894353/Poster-Collection-IV"
        />
        <Hoverimg
          bgproj="/galimg/creep.jpg"
          projname="creepy front page"
          projlink="https://www.behance.net/gallery/100892663/creepy-front-page"
        />

        <Hoverimg
          bgproj="/break.jpg"
          projname="cloudy day"
          projlink="https://www.behance.net/gallery/100892479/cloudy-day"
        />
        <Hoverimg
          bgproj="/galimg/f.jpg"
          projname="Poster collection -III"
          projlink="https://www.behance.net/gallery/100891383/Poster-collection-III"
        />
        <Hoverimg
          bgproj="/galimg/new.jpg"
          projname="Poster Collection - II"
          projlink="https://www.behance.net/gallery/100891273/Poster-Collection-II"
        />
        <Hoverimg
          bgproj="/galimg/zew.png"
          projname="Poster collection - I"
          projlink="https://www.behance.net/gallery/100890957/Poster-collection-I"
        />
        <Hoverimg
          bgproj="/galimg/sk.png"
          projname="3d skull"
          projlink="https://www.behance.net/gallery/100887535/3d-skull"
        />
        <h1>Selected Works</h1>
        <FourMain />
      </div>
      <div className="selecwork">
        <Link to="/Contact">
          <motion.span
            className="clickclick"
            whileHover={{ color: "#7263fa" }}
            whileTap={{ color: "#7263fa" }}
          >
            Lets Do Something Awsome → <h4>Contact Me</h4>
          </motion.span>
        </Link>
      </div>
    </LayoutP>
  )
}
