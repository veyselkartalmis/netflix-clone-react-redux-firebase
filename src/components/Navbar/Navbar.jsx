import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.scss";

function Navbar() {
	const [show, handleShow] = useState(false);
	const history = useNavigate();

	const transitionNavbar = () => {
		if (window.scrollY > 100) {
			handleShow(true);
		} else {
			handleShow(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", transitionNavbar);
		return () => window.removeEventListener("scroll", transitionNavbar);
	}, []);

	return (
		<div className={`nav ${show && "nav__black"}`}>
			<div className="nav__contents">
				<img
				onClick={() => history("/")}
					className="nav__logo"
					src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
					alt="netflix-logo"
				/>
				<img
					onClick={() => history("/profile")}
					className="nav__avatar"
					src="https://avatars.githubusercontent.com/u/6759280?v=4"
					alt=""
				/>
			</div>
		</div>
	);
}

export default Navbar;
