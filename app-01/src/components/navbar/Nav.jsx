import React from "react";

const Nav = () => {
	return (
		<nav className="nav">
			<ul className="list">
				<li className="list__item">
					<a className="link" href="/profile">
						<p className="caption">profile</p>
					</a>
				</li>
				<li className="list__item">
					<a className="link" href="/dialogs">
						<p className="caption">messages</p>
					</a>
				</li>
				<li className="list__item">
					<a className="link" href="/news">
						<p className="caption">news</p>
					</a>
				</li>
				<li className="list__item">
					<a className="link" href="/music">
						<p className="caption">music</p>
					</a>
				</li>
				<li className="list__item">
					<a className="link" href="/settings">
						<p className="caption">settings</p>
					</a>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
