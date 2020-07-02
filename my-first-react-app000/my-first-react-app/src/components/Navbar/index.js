import React from "react";

import "./styles.scss";

const navbarList = [
	{ name: "Home", to: "home" },
	{ name: "About", to: "about" },
	{ name: "Features", to: "features" },
	{ name: "Contacts", to: "contacts" },
];

export default function Navbar() {
	return (
		<nav className="navbar">
			{navbarList.map((item) => {
				return (
					<a href={`#${item.to}`} className="navbar__item">
						{item.name}
					</a>
				);
			})}
		</nav>
	);
}
