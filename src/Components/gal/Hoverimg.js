import React, { useState } from "react"
import "./fourmain.scss"
import { motion } from "framer-motion"
export default function (props) {
  const [isHover, setIsHover] = useState(false)
  const open = () => setIsHover(true)
  const close = () => setIsHover(false)
  const openclose = () => setIsHover(!isHover)

  const seebg = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  }

  return (
    <div className="Hovercontain">
      <motion.a
        className="linkprof"
        whileHover={{ color: "#7263fa" }}
        whileTap={{ color: "#7263fa" }}
        href={props.projlink}
        target="_blank"
      >
        <motion.h3
          whileHover={{ color: "#7263fa" }}
          whileTap={{ color: "#7263fa" }}
          className="vvhjvjh"
          onMouseEnter={open}
          onMouseLeave={close}
        >
          {props.projname}
        </motion.h3>
      </motion.a>
      <motion.div
        animate={isHover ? "open" : "closed"}
        variants={seebg}
        className="projbg"
        style={{
          backgroundImage: `url(${props.bgproj})`,
        }}
      ></motion.div>
    </div>
  )
}
