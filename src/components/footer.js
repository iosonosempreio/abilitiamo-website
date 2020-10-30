import React from "react"
import Logo from "./logo"
import items from "../menu-items.json"
import { Link } from "gatsby"
import logoCariplo from "./assets/cariplo.svg"
import logoLombardia from "./assets/lombardia.svg"

import { FaFacebookSquare, FaInstagram, FaYoutube, FaRegEnvelope, FaEnvelope, FaPiggyBank } from "react-icons/fa"

export default function Footer(props) {
  return (
    <footer style={{ backgroundColor: "var(--beige)" }}>
      <div className="layout-main">
        <div className="footer-nav">
          <Logo style={{fontSize: '1.3125rem'}} showOnlus={true} />
          {items
            .filter(i => i.menues.indexOf("footer") > -1)
            .map(item => {
              return (
                <Link key={item.label} to={item.url}>
                  {item.label}
                </Link>
              )
            })}
        </div>
        <div className="footer-contacts">
          <a href="https://www.facebook.com/abilitiamo/" target="_blank" rel="noreferrer">
            <FaFacebookSquare style={{top: 2}} /> <span>Facebook</span>
          </a>
          <Link to="/">
            <FaInstagram style={{top: 2}} /> <span>Instagram</span>
          </Link>
          <a href="https://www.youtube.com/channel/UCzlesA7SjzJXyVJxeLhL-Iw" target="_blank" rel="noreferrer">
            <FaYoutube style={{top: 2}} /> <span>Youtube</span>
          </a>
          <span className="pointer">
            <FaRegEnvelope style={{top: 2}} /> info@abilitiamo.org
          </span>
          <span>
            <FaEnvelope style={{top: 2}} /> certificata@pec.abilitiamo.org
          </span>
          <span>
            <span style={{fontSize: '0.75rem',fontWeight:700}}>C.F.</span> 900411400139
          </span>
          <span>
            <FaPiggyBank style={{top: 2}} /> IT52P0843051100000000114383
          </span>
        </div>
        <div className="footer-contributors">
            <span style={{fontWeight: 600}}>Con il contributo di</span>
            <img style={{margin:'1rem 0',width:160}} src={logoCariplo} alt="logo Fondazione Cariplo" />
            <img style={{margin:'1rem 0',width:160}} src={logoLombardia} alt="logo Regione Lombardia" />
            <img style={{margin:'2rem 0',width:210}} src="https://www.fondazione-comasca.it/wp-content/uploads/2012/05/logo.jpg" alt="logo Fondazione Provinciale Comasca" />
        </div>
        <span className="text-center copyright">
          @ 2020 Associazione Abilitiamo Autismo ONLUS
        </span>
      </div>
    </footer>
  )
}
