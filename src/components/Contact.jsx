import AnimatedPage from "./AnimatedPage"
import { contact } from "./images.json"

const Contact = () => {
  return (
    <AnimatedPage>
      <div className="Contact-All">
        <div className="Contact-Image-Container">
          <img src={contact[0].src} alt="" />
        </div>
        <div className="Contact-Lower">
          <iframe
            src="https://www.google.com/maps/embed/v1/view?center=-37.8136,144.9631&zoom=10&key=AIzaSyDaZxFmnUm_QSbWHLy4vRl4eE0gOqWeulQ"
            width="50%"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <div className="Contact-Info">
            <div>CONTACT INFO</div>
            <div>
              <br />
            </div>
            <div>PH: 0427 922 863</div>
            <div>EMAIL: mccormack.jacob@gmail.com</div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default Contact
