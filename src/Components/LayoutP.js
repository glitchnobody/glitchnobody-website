import React from "react"
import NavabarP from "./NavbarP"
import "./global.css"

export default function LayoutP({ children }) {
  return (
    <div>
      <NavabarP />
      <div>{children}</div>
    </div>
  )
}
