import React from "react";
import { Link } from "react-router-dom";
import { BsBagCheck, BsLightning } from "react-icons/bs";

const Header = () => {
	return (
		<header>
			<div className="ek-navbar">
				<div className="ek-navbar__logo">
					<Link to="/">Eksho</Link>
				</div>
				<div className="ek-navbar__menu">
					<ul>
						<li>
							<Link to="/offer">
								<BsLightning /> Special Offer
							</Link>
						</li>
						<li>
							<Link to="/offer">
								<BsBagCheck />
								Cart
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
};

export default Header;
