import { Avatar } from "@material-ui/core";
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { setAuthUserData } from "../../redux/authReducer";

const Header = (props) => {
  function checkLogin(params) {
    console.log(params);
    if (params.isAuth === true) {
      return <Avatar />;
    } else {
      return <p>Login</p>;
    }
  }

  return (
    <header className="wrapper__header">
      <div className="block">
        <div className="row row--justify_center block--relative">
          <h1 className="caption caption--size_1">Empire</h1>
          <NavLink to="/login">{checkLogin(props)}</NavLink>

          <NavLink
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
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        if (response.data.resultCode === 0) {
          let { userId, email, login } = response.data.data;
          this.props.setAuthUserData(userId, email, login);
        }
      });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
const mapDispatchToProps = {
  setAuthUserData,
};
export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

// export default HeaderContainer;
