import React from "react";

import HomeSection from "../../components/HomeSection";
import AboutSection from "../../components/AboutSection";
import Header from "../../components/Header";

export default function LandingPage() {
	return (
		<div>
			<HomeSection />
			<Header />
			<AboutSection />
		</div>
	);
}
