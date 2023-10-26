import { Col, Container, Row } from "react-bootstrap";
import ArrowLink from "../components/ArrowLink";
import { PageTemplate } from "../components/Templates";
import classNames from "classnames";
import info from "../utils/info.json";

export default function DiventaVolontario() {
	return (
		<PageTemplate title="Diventa volontario/a">
			<Container>
				<Row className="my-5">
					<Col md={{ span: 7, offset: 1 }}>
						<h5>
							Abilitiamo è una <span style={{ color: "var(--red)" }}>Organizzazione Di Volontariato</span> (ODV).
							<br />I volontari e le volontarie sono il cuore pulsante della nostra organizzazione.
						</h5>
						<p>
							Per diventare volontario/a è sufficiente inviare una mail di presentazione a{" "}
							<a href={`mailto:${info.associazione.mailRisorseUmane}`}>{info.associazione.mailRisorseUmane}</a>.
							Si richiede di descrivere le proprie capacità e la motivazione per la quale si desidera entrare a far parte della nostra
							associazione.
						</p>
						<p>
							Ad ogni volontario/a verrà data la adeguata formazione, specifica per il ruolo che dovrà ricoprire, e sarà
							coperto da un'assicurazione.
						</p>
						<p>Pubblicheremo in questa pagina aggiornamenti riguardo corsi di formazione e altre questioni.</p>
						<p>
							Per qualsiasi dubbio o informazione puoi scrivere a{" "}
							<a href={`mailto:${info.associazione.mailRisorseUmane}`}>{info.associazione.mailRisorseUmane}</a>
						</p>
						<h5 className={classNames("mt-5")}>F.A.Q.</h5>
						<p>In allestimento</p>
					</Col>
					<Col>
						<div className={classNames("position-sticky")} style={{ top: 65 }}>
							{sideLinks.map((d, i) => (
								<ArrowLink key={i} data={d} />
							))}
						</div>
					</Col>
				</Row>
			</Container>
		</PageTemplate>
	);
}

const sideLinks = [
	{ label: "Organizzazione", url: "/organizzazione" },
	{ label: "Comitato scientifico", url: "/comitato-scientifico" },
	{ label: "Diventa socio", url: "/diventa-socio" },
];
