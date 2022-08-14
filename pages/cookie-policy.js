import { PageTemplate } from "../components/Templates";

import { CookiePolicy20220812 } from "../components/CookiePolicy"

export default function CookiePolicy() {
	return (
		<>
			<PageTemplate title="Informativa estesa sui cookie">
				<CookiePolicy20220812 />
			</PageTemplate>
		</>
	);
}

const sideLinks = [
	{ label: "Chi siamo", url: "/chi-siamo" },
	{ label: "Organizzazione", url: "/organizzazione" },
	{ label: "Diventa socio", url: "/diventa-socio" },
];
