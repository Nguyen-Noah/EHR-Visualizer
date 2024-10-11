import React from "react";
import "../styles/header.css";

function Header() {
	return (
		<nav>
			<a href="/bar">Bar</a>
			<a href="/area">Area</a>
			<a href="/bubble">Bubble</a>
			<a href="/doughnut">Doughnut</a>
			<a href="/line">Line</a>
			<a href="/polar">Polar</a>
			<a href="/radar">Radar</a>
			<a href="/scatter">Scatter</a>
		</nav>
	)
}

export default Header;