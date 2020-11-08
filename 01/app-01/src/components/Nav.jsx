import React from "react";

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="list">
        <li className="list__item">
          <a className="link"><p className="caption">profile</p></a>
        </li>
        <li className="list__item">
          <a className="link"><p className="caption">mess</p></a>
        </li>
        <li className="list__item">
          <a className="link"><p className="caption">news</p></a>
        </li>
        <li className="list__item">
          <a className="link"><p className="caption">music</p></a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
