import React from "react";
import { NavLink } from "react-router-dom";

const Header = (props) => {
	return (
		<header className="header">
			<div className="block">
				<div className="row row--justify_center">
					<h1 className="caption caption--size_1">Empire</h1>

					<NavLink
						className="link block--absolute block--z_index_lg block--top_sm block--right_sm"
						to="/settings"
					>
						<img
							className="img--sm"
							src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Settings_app_icon.png"
							alt="Settings"
						/>
					</NavLink>

					<button className="control control__btn block--absolute block--z_index_lg block--top_sm block--right_sm"></button>
				</div>
			</div>
		</header>
	);
};

export default Header;