import React from "react";
import "./Navbar.css";
import { FaStar } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
function Navbar() {
	return (
		<>
			<nav>
				<h1>BK NEWS</h1>
				<ul>
					<li className="app-icons">
						<FaStar className="icon1" />
						Favoriler
					</li>
					<li>
						<MdAccountCircle className="icon2" />
						Hesap
					</li>
				</ul>
			</nav>
		</>
	);
}

export default Navbar;
