import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="nav">
			<ul className="list">
				<li className="list__item">
					<NavLink className="link" activeClassName="nav__link" to="/profile">
						<p className="caption">profile</p>
					</NavLink>
				</li>
				<li className="list__item">
					<NavLink className="link" activeClassName="nav__link" to="/dialogs">
						<p className="caption">messages</p>
					</NavLink>
				</li>
				<li className="list__item">
					<NavLink className="link" activeClassName="nav__link" to="/news">
						<p className="caption">news</p>
					</NavLink>
				</li>
				<li className="list__item">
					<NavLink className="link" activeClassName="nav__link" to="/music">
						<p className="caption">music</p>
					</NavLink>
				</li>
				<li className="list__item">
					<NavLink className="link" activeClassName="nav__link" to="/settings">
						<p className="caption">settings</p>
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
