import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SideBarLink from "../components/sideBarLink"
import styles from "../styles/page.module.css"
const sidebar1 = [
  { label: "Storia di Abilítiamo", url: "/storia" },
  { label: "Organizzazione", url: "/organizzazione" },
  { label: "Bilanci", url: "/bilanci" },
  { label: "Diventa socio", url: "/tesseramento" },
]
const sidebar2 = [{ label: 'Progetto "Cascina Cristina"', url: "/cascina-cristina"  }]
export default function ChiSiamo() {
  const data = useStaticQuery(query)
  return (
    <Layout title={<>Associazione Abi<span>lí</span>tiamo Autismo ONLUS</>} bgColor='var(--red)' color='white'>
      <div className="a-row">
        <p className={["paragraph", "paragraphBig"].join(" ")}>
          Un nome, due significati, un unico obiettivo. Abitare abilitando è lo
          scopo per il quale la nostra associazione è nata: creare una casa per
          i nostri ragazzi autistici dove potranno esprimere al meglio le loro
          abilità.
        </p>
        <div className={[styles.sideBar].join(" ")}>
          <div className="position-sticky"  style={{top: 104}}>
            {sidebar1.map((d, i) => (
              <SideBarLink key={i} data={d} />
            ))}
          </div>
        </div>
      </div>
      <div className="a-row">
        <Img
          className="round-borders"
          style={{ gridColumn: "1 / span 3" }}
          fluid={data.image1.childImageSharp.fluid}
        />
        <Img
          className="round-borders"
          style={{ gridColumn: "4 / span 3" }}
          fluid={data.image2.childImageSharp.fluid}
        />
        <Img
          className="round-borders"
          style={{ gridColumn: "1 / span 6", gridRow: "2 / span 1" }}
          fluid={data.image4.childImageSharp.fluid}
        />
        <Img
          className="round-borders"
          style={{ gridColumn: "7 / span 6", gridRow: "1 / span 2" }}
          fluid={data.image3.childImageSharp.fluid}
        />
      </div>
      <div className="a-row">
        <p className={["paragraph", "paragraphBig"].join(" ")}>
          Il nostro obiettivo è creare sul nostro territorio un contesto capace
          di migliorare la qualità di vita di giovani adulti autistici
          attraverso interventi permanenti di carattere socio assistenziale,
          psicoeducativi e abilitativi. Un luogo che i nostri ragazzi possano
          chiamare casa.
        </p>
      </div>
      <div className="a-row">
        <Img
          className="round-borders"
          style={{ gridColumn: "1 / -1", gridRow: "1 / span 2" }}
          fluid={data.image5.childImageSharp.fluid}
        />
      </div>
      <div className="a-row">
        <p className={["paragraph", "paragraphBig"].join(" ")}>
          Grazie al supporto del territorio, dei suoi soci e dei suoi
          collaboratori, Abilitiamo è risultata vincitrice del bando per i
          Progetti Emblematici Maggiori della Provincia di Como (anno 2019).
          <br />
          Con questo contributo, Abilitiamo ha dato inizio alla
          realizzazione di un polo multifunzionale per la presa in carico di
          giovani adulti affetti da disturbi dello spettro autistico: Cascina
          Cristina.
        </p>
        <div className={styles.sideBar}>
          <div className="position-sticky"  style={{top: 104}}>
            {sidebar2.map((d, i) => (
              <SideBarLink key={i} data={d} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const squareImage = graphql`
  fragment squareImage on File {
    childImageSharp {
      fluid(maxWidth: 1000, maxHeight: 1000) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

export const query = graphql`
  query {
    image1: file(relativePath: { eq: "Matteo2copia.jpeg" }) {
      ...squareImage
    }
    image2: file(relativePath: { eq: "Roberta.jpg" }) {
      ...squareImage
    }
    image3: file(relativePath: { eq: "Daniele de Andrea al lavoro2.jpg" }) {
      ...squareImage
    }
    image4: file(relativePath: { eq: "orto2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 200, maxHeight: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    image5: file(relativePath: { eq: "cascina-interno.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
