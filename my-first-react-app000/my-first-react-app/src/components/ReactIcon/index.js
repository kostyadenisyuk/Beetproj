import React from "react";

import classnames from "classnames";

import "./styles.scss";

export default function ReactIcon(props) {
	const reactIconClass = classnames({
		"react-icon": true,
		[`react-icon--color-${props.color}`]: props.color,
		[`react-icon--size-${props.size}`]: props.size,
	});

	return (
		<div className={reactIconClass} onClick={props.onClick} id={props.id}>
			{props.children}
		</div>
	);
}
