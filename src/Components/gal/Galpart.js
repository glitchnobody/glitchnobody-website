import React, { useState, useEffect, useRef } from "react"
import "./fourmain.scss"
import { AnimatePresence, motion } from "framer-motion"
import GalModal from "./GalModal"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"

export default function Galpart(props) {
  const [isHover, setIsHover] = useState(false)
  const open = () => setIsHover(true)
  const close = () => setIsHover(false)
  const openclose = () => setIsHover(!isHover)

  const [isToggled, setToggled] = useState(false)
  const openm = () => setToggled(true)
  const closem = () => setToggled(false)
  const openclosem = () => setToggled(!isToggled)

  let modallayer = useRef(null)

  useEffect(() => {
    if (isToggled === false) {
      enableBodyScroll(modallayer)
    } else if (
      isToggled === true ||
      (isToggled === true && isToggled.initial === null)
    ) {
      disableBodyScroll(modallayer)
    }
  }, [isToggled])

  const seemore = {
    open: {
      opacity: 1,
    },
    closed: {
      opacity: 0,
    },
  }

  return (
    <div onMouseEnter={open} onMouseLeave={close}>
      <div className="srno">
        <h6> {props.srno}</h6>
      </div>
      <div className="namepluslink">
        <h3>{props.name}</h3>
        <h3>{props.something}</h3>
      </div>

      <div className="imglink">
        <motion.div
          onClick={openm}
          style={{
            backgroundImage: `url(${props.bggal})`,
          }}
          className="imagegal"
        ></motion.div>
        <motion.div
          onClick={openm}
          animate={isHover ? "open" : "closed"}
          variants={seemore}
          className="projectlinkd"
        >
          <h4>See More</h4>
        </motion.div>

        <motion.div onClick={openm} className="projectlinkm">
          <h5>See More</h5>
        </motion.div>
      </div>

      <GalModal isToggled={isToggled} ref={modallayer}>
        <div className="modalbackground">
          <div className="modalcontain">
            <h2 onClick={closem}>CLOSE</h2>
            <iframe
              height="100%"
              width="100%"
              src={props.drivelink}
              allow="autoplay"
            ></iframe>
          </div>
        </div>
      </GalModal>
    </div>
  )
}
