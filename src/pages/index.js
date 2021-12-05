import React from "react"
import "../Components/index.scss"
import Glitch from "../Components/Hero/Glitch"
import TheBalls from "../Components/Hero/Theballs"
import TheBallsm from "../Components/Hero/Theballsm"
import Herobg from "../Components/Hero/Herobg"
import Stripbg from "../Components/Hero/Stripbg"
import FourMain from "../Components/gal/FourMain"
import { motion } from "framer-motion"
import LayoutP from "../Components/LayoutP"
import { Link } from "gatsby"

export default function Home() {
  return (
    <LayoutP>
      <div className="graincontain">
        <div
          style={{ backgroundImage: `url(/grain.png)` }}
          className="bg-container"
        />
      </div>
      <Herobg />
      <Glitch className="Glitch" />
      <Stripbg />
      <TheBalls className="bal" />
      <TheBallsm className="balm" />

      <div className="selecwork">
        <span>SELECTED WORKS-</span>
      </div>
      <FourMain />

      <div className="projectarrow">
        <div className="selecwork">
          <Link to="/Projects">
            <motion.span
              className="loldviusdvbisdbu"
              whileHover={{ color: "#7263fa" }}
              whileTap={{ color: "#7263fa" }}
            >
              Check <br />
              All Projects
            </motion.span>
          </Link>
        </div>

        <div className="arrow">
          <Link to="/Projects">
            <motion.span
              whileHover={{ color: "#7263fa" }}
              whileTap={{ color: "#7263fa" }}
            >
              →
            </motion.span>
          </Link>
        </div>
      </div>
      <div className="slikkcard">
        <div style={{ backgroundImage: `url(/break.jpg)` }} className="break">
          <h4>Why Work</h4>
          <h4>With Me ?</h4>
        </div>
        <div className="card">
          <div
            style={{ backgroundImage: `url(/blackcard.png)` }}
            className="black"
          ></div>
          <div
            style={{ backgroundImage: `url(/whitecard.png)` }}
            className="white"
          ></div>
        </div>

        <div className="skill">
          <div className="soft">
            <h5>How I design-</h5>
            <p>
              Creating the perfect design is to analyze and craft the optimal
              solution. For me, the ideal solution in design is something that
              looks simple, is legible, and easily understandable yet makes the
              Viewer think, “ why didn’t I come up with this ? ” I always try to
              add a layer of simplicity and ease in my design borrowing from
              many other mediums such as literature, history, and culture. The
              main purpose of designing is to make people understand your agenda
              and believe in your purpose that's what separates it from just
              art.
            </p>
          </div>
          <div className="hard">
            <h5>Skills</h5>
            <ul>
              <li>AdobeXD/Figma</li>
              <li>Html/CSS/Javascript</li>
              <li>ReactJS/VueJs</li>
              <li>Cinema4d/AfterEffects</li>
              <li>Photoshop/Illustrator</li>
              <li>Problem Solving</li>
              <li>Public Speaking</li>
              <li>Collaboration</li>
              <li>Adaptive</li>
              <li>Open-Minded</li>
              <li>Copywriting</li>
            </ul>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="selecwork">
        <Link to="/Contact">
          <motion.span
            className="clickclick"
            whileHover={{ color: "#7263fa" }}
            whileTap={{ color: "#7263fa" }}
          >
            Lets Do Something Awesome → <h4>Contact Me</h4>
          </motion.span>
        </Link>
      </div>
    </LayoutP>
  )
}
