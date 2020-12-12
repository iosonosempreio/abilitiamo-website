import React from "react"
import { Carousel } from "bootstrap"
import { useStaticQuery, graphql } from "gatsby"
import classNames from "classNames"
import Img from "gatsby-image"

export default function CarouselHome(props) {
	const data = useStaticQuery(query)
	// if (false )console.log(Carousel)
	return (
		<div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" data-bs-interval="5000">
			<ol className="carousel-indicators">
				{Object.keys(data).map((img, i) => (
					<li key={"indicator-" + i} data-bs-target="#carouselExampleIndicators" data-bs-slide-to={i} className={classNames({ active: i === 0 })}></li>
				))}
			</ol>
			<div className="carousel-inner">
				{Object.keys(data).map((key, i) => {
					const image = data[key]
					return (
						<div key={"item-" + i} className={classNames("carousel-item", { active: i === 0 })}>
							<Img fluid={image.childImageSharp.fluid} className="round-borders d-block w-100" />
						</div>
					)
				})}
			</div>
			<a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-bs-slide="prev">
				<span className="carousel-control-prev-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Previous</span>
			</a>
			<a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-bs-slide="next">
				<span className="carousel-control-next-icon" aria-hidden="true"></span>
				<span className="visually-hidden">Next</span>
			</a>
		</div>
	)
}

export const query4_3 = graphql`
	fragment query4_3 on File {
		childImageSharp {
			fluid(maxWidth: 800, maxHeight: 600) {
				...GatsbyImageSharpFluid
			}
		}
	}
`
export const query16_9 = graphql`
	fragment query16_9 on File {
		childImageSharp {
			fluid(maxWidth: 800, maxHeight: 450) {
				...GatsbyImageSharpFluid
			}
		}
	}
`

export const query = graphql`
	query {
		image1: file(relativePath: { eq: "Matteo2copia.jpeg" }) {
			...query16_9
		}
		image2: file(relativePath: { eq: "Roberta.jpg" }) {
			...query16_9
		}
		image3: file(relativePath: { eq: "orto2.jpg" }) {
			...query16_9
		}
	}
`
