import React from "react"
import "./fourmain.scss"
import { AnimatePresence, motion } from "framer-motion"

export default function GalModal({ isToggled, children }) {
  return (
    <AnimatePresence>
      {isToggled && (
        <>
          <div>{children}</div>
        </>
      )}
    </AnimatePresence>
  )
}
