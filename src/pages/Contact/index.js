import React from "react"
import LayoutP from "../../Components/LayoutP"

export default function index() {
  return (
    <LayoutP>
      <div className="slikkcard">
        <div className="imgtext">
          <div className="text">
            <h3>Hi My Name Is </h3>
            <h5>Siddhant Vij</h5>
            <p>I am a UX designer from india</p>
            <h5>EMAIL :</h5>
            <a href="mailto:work.glitchnobody@gmail.com" target="_blank">
              <p>work.glitchnobody@gmail.com</p>
            </a>
            <h5>Phone Number :</h5>

            <p>+91 852566741</p>
          </div>
          <div
            style={{ backgroundImage: `url(/myimg.jpg)` }}
            className="myimage"
          ></div>
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
    </LayoutP>
  )
}
