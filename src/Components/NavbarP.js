import React, { useState, useRef, useEffect } from "react"

import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import gsap from "gsap"

import "./navbar.scss"
import { Link } from "gatsby"

const NavbarP = () => {
  //variables
  let menuLayer = useRef(null)
  let backmenuLayer = useRef(null)
  let blinds1 = useRef(null)
  let blinds2 = useRef(null)
  let blinds3 = useRef(null)
  let blinds4 = useRef(null)
  let blinds5 = useRef(null)
  let blinds6 = useRef(null)
  let blinds7 = useRef(null)
  let blinds8 = useRef(null)
  let blindsback = useRef(null)
  let menulogo = useRef(null)
  let blog = useRef(null)
  let logo = useRef(null)

  /////////////
  const [isOn, setIsOn] = useState(false)
  const toggleBurger = () => setIsOn(!isOn)
  const JustClose = () => setIsOn(false)

  //animation

  useEffect(() => {
    // If the menu is open and we click the menu button to close it.
    if (isOn === false) {
      // If menu is closed and we want to open it.
      enableBodyScroll(menuLayer)
      gsap.to(backmenuLayer, { delay: 0, opacity: 0 })
      gsap.to(menuLayer, {
        delay: 0.6,
        duration: 0,
        height: "0%",
        css: { display: "none" },
      })
      gsap.to(
        [
          blinds8,
          blinds7,
          blinds6,
          blinds5,
          blinds4,
          blinds3,
          blinds2,
          blinds1,
        ],
        {
          duration: 0.3,
          height: "0%",
          ease: "power3.inOut",
          stagger: {
            each: 0.05,
          },
        }
      )
      gsap.to(menulogo, {
        css: { color: "rgb(230, 230, 230)" },
      })
      gsap.to(blog, {
        css: { color: "rgb(230, 230, 230)" },
      })
      gsap.to(logo, {
        css: { fill: "rgb(230, 230, 230)" },
      })
      gsap.to(blindsback, {
        delay: 0.5,
        height: "0%",
      })
      //
    } else if (isOn === true || (isOn === true && isOn.initial === null)) {
      disableBodyScroll(menuLayer)
      gsap.to(menulogo, {
        css: { color: "#7263fa" },
      })
      gsap.to(blog, {
        css: { color: "#7263fa" },
      })
      gsap.to(logo, {
        css: { fill: "#7263fa" },
      })

      gsap.to(menuLayer, {
        duration: 0,
        height: "100%",
        css: { display: "block" },
      })
      gsap.to(backmenuLayer, { delay: 0.4, opacity: 1 })
      gsap.to(
        [
          blinds1,
          blinds2,
          blinds3,
          blinds4,
          blinds5,
          blinds6,
          blinds7,
          blinds8,
        ],
        {
          height: "100%",
          duration: 0.3,
          ease: "power3.inOut",
          stagger: {
            each: 0.05,
          },
        }
      )
      gsap.to(blindsback, {
        height: "100%",
      })
      //
    }
  }, [isOn])

  return (
    <nav>
      <header>
        <div className="mainMenu">
          <div onClick={JustClose} className="logo">
            <Link to="/">
              <svg
                ref={el => (logo = el)}
                className="logo"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 202.76 348.49"
              >
                <title id="title">glitchnobody logo</title>
                <path d="M105,37.37c2.84-6.69,11.18,9.91,13.08-7.42.61-7.34,2.19-16.45-1.94-16.7,0,0-19.29.42-45.16,22.91C47.54,55.28-15.48,149.65,27.13,188.22c18.42,12.28,41.32,11.95,101-14.95a11.51,11.51,0,0,0,6.25-7l27.71-88.9s2.48-7.65-5.85,2.47c-12.71,12.44-55.88,75.64-84.68,80.51-4.6,0-6.81-2.13-5.18-2.54a31.87,31.87,0,0,0,13.27-6.54c14.34-12.39,31-37.92,35.88-43.65,12.94-12.87,26.86-37.2,46.9-45.44,30.51-2.52,8.06,40.21,6.75,49L154,158.54a1.84,1.84,0,0,0,2.62,2.19c8-4.23,42.92-21.59,43.18-30.14,15,10.36-30.2,38.57-48.91,49.26a9.11,9.11,0,0,0-4.94,5.93c-5.42,20.75-25.68,109-28.07,123.76-3.11,19.24,2.89,15.7,8.43,10.16l28.62-37.91s11.48-16,3.83,3.15c-6,15-17.47,42.58-30.27,56.27-10.61,12.16-31,9-30.31-8.68a22.92,22.92,0,0,1,.32-2.75c4.72-30,15.56-94.09,27.27-131.75a1.68,1.68,0,0,0-2.64-1.83c-76.45,44-140.31,16.73-118.9-78.61,0,0,26.64-89.08,93.51-116.07,0,0,16.93-6.41,26,7.09S130.49,39,119,49.77c0,0-2,3-7.43-3.37S105,37.37,105,37.37Z" />
              </svg>
            </Link>
          </div>
          <div className="menu">
            {/* <a href="https://journal.glitchnobody.com/" target="_blank">
              <button className="blog" ref={el => (blog = el)}>
                Journal
              </button>
            </a> */}

            <button
              ref={el => (menulogo = el)}
              initial={false}
              data-isOn={isOn}
              onClick={toggleBurger}
            >
              MENU
            </button>
          </div>
        </div>
        {/* ///////////the updown */}
        <div ref={el => (menuLayer = el)} className="menu_bg">
          <div ref={el => (backmenuLayer = el)} className="innnermenu">
            <ul className="lonks">
              <li onClick={JustClose}>
                <Link to="/">HOME</Link>
              </li>
              <li onClick={JustClose}>
                <Link to="/Projects">PROJECTS</Link>
              </li>

              <li onClick={JustClose}>
                <Link to="/Contact">
                  ABOUT
                  <br />&<br />
                  CONTACT
                </Link>
              </li>
            </ul>
            <div>{/* <Icon /> */}</div>
          </div>
          <div ref={el => (blindsback = el)} className="blinds">
            <div ref={el => (blinds1 = el)} className="blind"></div>
            <div ref={el => (blinds2 = el)} className="blind"></div>
            <div ref={el => (blinds3 = el)} className="blind"></div>
            <div ref={el => (blinds4 = el)} className="blind"></div>
            <div ref={el => (blinds5 = el)} className="blind"></div>
            <div ref={el => (blinds6 = el)} className="blind"></div>
            <div ref={el => (blinds7 = el)} className="blindx"></div>
            <div ref={el => (blinds8 = el)} className="blindx"></div>
          </div>
        </div>
      </header>
    </nav>
  )
}

export default NavbarP
