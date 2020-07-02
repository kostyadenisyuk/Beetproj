import React from "react";

import ContentWidthLimiter from "../ContentWidthLimiter";

import "./styles.scss";

export default function AboutSection() {
	return (
		<section id="about" className="about">
			<ContentWidthLimiter>About section</ContentWidthLimiter>
		</section>
	);
}
