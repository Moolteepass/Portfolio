import Head from "next/head"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import FadeInWrapper from "@/components/FadeInWrapper"

export default function Contact() {
  return (
    <FadeInWrapper>
      <div className="contact-page">
        <Head>
          <title>Contact Jacob McCormack</title>
          <meta
            name="description"
            content="Get in touch with Jacob McCormack"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="contact-page__main">
          <div className="contact-container">
            <div className="contact-card">
              <div className="contact-card__content">
                <h1 className="contact-card__title">Let's Connect!</h1>
                <div className="contact-card__info">
                  <a
                    href="mailto:mccormack.jacob@gmail.com"
                    className="contact-item"
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="contact-item__icon"
                    />
                    <span className="contact-item__text">
                      mccormack.jacob@gmail.com
                    </span>
                  </a>
                  <a href="tel:0427922863" className="contact-item">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="contact-item__icon"
                    />
                    <span className="contact-item__text">0427 922 863</span>
                  </a>
                  <a
                    href="https://www.instagram.com/monkeymedia.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-item"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="contact-item__icon"
                    />
                    <span className="contact-item__text">monkeymedia.io</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="map-card">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6552245.210514247!2d140.96235608988767!3d-37.020497363552296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad4314b7e18954f%3A0x5a4efce2be829534!2sVictoria!5e0!3m2!1sen!2sau!4v1623345678901!5m2!1sen!2sau"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </main>
      </div>
    </FadeInWrapper>
  )
}
