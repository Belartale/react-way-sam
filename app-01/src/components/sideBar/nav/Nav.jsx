import React from "react";
import { NavLink } from "react-router-dom";

const Nav = (props) => {
	return (
		<nav className="nav">
			<ul className="list">
				<li className="list__item list__item--bottom_sm">
					<NavLink
						className="link"
						activeClassName="nav__link_active"
						to="/profile"
					>
						<span className="caption caption--size_3">profile</span>
					</NavLink>
				</li>
				<li className="list__item list__item--bottom_sm">
					<NavLink
						className="link"
						activeClassName="nav__link_active"
						to="/dialogs"
					>
						<span className="caption caption--size_3 ">messages</span>
					</NavLink>
				</li>
				<li className="list__item list__item--bottom_sm">
					<NavLink
						className="link"
						activeClassName="nav__link_active"
						to="/news"
					>
						<span className="caption caption--size_3 ">news</span>
					</NavLink>
				</li>
				<li className="list__item list__item--bottom_sm">
					<NavLink
						className="link"
						activeClassName="nav__link_active"
						to="/music"
					>
						<span className="caption caption--size_3 ">music</span>
					</NavLink>
				</li>
				<li className="list__item list__item--bottom_sm">
					<NavLink
						className="link"
						activeClassName="nav__link_active"
						to="/settings"
					>
						<span className="caption caption--size_3 ">settings</span>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
