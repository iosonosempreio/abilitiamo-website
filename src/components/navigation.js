import React, { useState } from "react"
import { Link } from "gatsby"
import { FaFacebookSquare, FaInstagram, FaYoutube } from "react-icons/fa"
import { HiOutlineMenuAlt4 } from "react-icons/hi"
import Logo from "./logo"
import styles from "../styles/navigation.module.css"
import items  from "../menu-items.json"

export default function Navigation({background}) {
  const [menu, setMenu] = useState(false);
  return (
    <div className={["position-sticky",styles.navigation].join(" ")} style={{backgroundColor: background}}>
      <div>
        <Logo showOnlus={true} />
        <div className={[styles.items, menu?styles.open:styles.closed].join(" ")}>
          {items.filter(i=>(i.menues.indexOf("main")>-1)).map(item=>{
            return <Link key={item.label} to={item.url}>{item.label}</Link>
          })}
          <div className={styles.socials}>
            <a href="./" aria-label="Facebook"><FaFacebookSquare /></a>
            <a href="./" aria-label="Instagram"><FaInstagram /></a>
            <a href="./" aria-label="Youtube"><FaYoutube /></a>
          </div>
        </div>
        <button className={["pointer", styles.toggle].join(" ")} onClick={()=>setMenu(!menu)} onKeyDown={()=>setMenu(!menu)}>
          <HiOutlineMenuAlt4 style={{width:"1.3rem",height:"1.3rem"}} />
        </button>
      </div>
    </div>

  )
}

Navigation.defaultProps = {
  background: "#ffffff"
}