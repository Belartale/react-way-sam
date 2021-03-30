import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="wrapper__header">
      <div className="block">
        <div className="row row--justify_center block--relative">
          <h1 className="caption caption--size_1">Empire</h1>
          <NavLink to="/login">Login</NavLink>

          <NavLink
            // className="link block--absolute block--z_index_lg block--top_sm block--right_sm"
            className="link block--absolute_right_sm block--z_index_lg"
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

class HeaderContainer extends React.Component {
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
      .then((response) => {
        console.log(response);
      });
  }
  render() {
    return <div></div>;
  }
}

export default HeaderContainer;
