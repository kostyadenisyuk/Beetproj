import React from "react";

import { FaAtlassian } from "react-icons/fa";

import ContentWidthLimiter from "../ContentWidthLimiter";
import ReactIcon from "../ReactIcon";
import Navbar from "../Navbar";

import "./styles.scss";

export default function Header(props) {
	return (
		<header className="header">
			<ContentWidthLimiter>
				<div className="header__content">
					<ReactIcon size="xl">
						<FaAtlassian />
					</ReactIcon>

					<Navbar />
				</div>
			</ContentWidthLimiter>
		</header>
	);
}
