import React from "react"
import "./fourmain.scss"
import { motion } from "framer-motion"
import Galpart from "./Galpart"

export default function FourMain() {
  return (
    <div className="gal4contain">
      <div className="part part1">
        <Galpart
          srno="1/4"
          name="Swift Send"
          bggal="/swift.jpg"
          drivelink="https://drive.google.com/file/d/1_4NhGPNLYQfu2oGCxmLMO2jlN79PVV8w/preview"
        />
      </div>

      <div className="part part2">
        <Galpart
          srno="2/4"
          name="Medical App Research"
          bggal="/res.jpg"
          drivelink="https://drive.google.com/file/d/1K3r_7Kasa13LQZigh-vhMlnLmbiJex6e/preview"
        />
      </div>

      <div className="part part3">
        <Galpart
          srno="3/4"
          name="Space X Commercial App UI"
          bggal="/space.jpg"
          drivelink="https://drive.google.com/file/d/1EajMEc7FUUTQHIf_HB5cuwpo5TbO3nmt/preview"
        />
      </div>

      <div className="part part4">
        <Galpart
          srno="4/4"
          name="UFO TACO"
          bggal="/tak.jpg"
          drivelink="https://drive.google.com/file/d/1ahcl8ElRT6FZDAhvgMRsCU7PjwBciyVJ/preview"
        />
      </div>
    </div>
  )
}
