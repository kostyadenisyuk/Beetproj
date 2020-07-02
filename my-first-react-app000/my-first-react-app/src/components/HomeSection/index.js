import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";

import "./styles.scss";

export default function HomeSection() {
	return (
		<section id="home" className="home">
			<ContentWidthLimiter fullWidth>Home section</ContentWidthLimiter>
		</section>
	);
}
