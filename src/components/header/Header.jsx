import {
  AppBar,
  Avatar,
  Box,
  Button,
  ButtonBase,
  Container,
  Grid,
  makeStyles,
  Popover,
  Toolbar,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import React from "react";
import { connect } from "react-redux";
// import { NavLink } from "react-router-dom";
import { setAuthUserData } from "../../redux/authReducer";

const AuthAvatar = (props) => {
  const useStyles = makeStyles((theme) => ({}));

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <Box>
      <ButtonBase
        aria-describedby={id}
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        <Avatar />
      </ButtonBase>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          The content of the Popover.
        </Typography>
        <Typography className={classes.typography}>
          The content of the Popover.
        </Typography>
        <Typography className={classes.typography}>
          The content of the Popover.
        </Typography>
      </Popover>
    </Box>
  );
};

{
  /* <NavLink
      className="link block--absolute_right_sm block--z_index_lg"
      to="/settings"
    >
      
    </NavLink> */
}

const Header = (props) => {
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },

    marginRightSmall: {
      marginRight: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
    },
  }));

  const classes = useStyles();

  function checkLogin(params) {
    console.log(params);
    if (!params.isAuth === true) {
      return (
        <div>
          <Button
            className={classes.marginRightSmall}
            color="secondary"
            variant="outlined"
          >
            Sign in
          </Button>
          <Button color="secondary" variant="contained">
            Create account
          </Button>
        </div>
      );
    } else {
      return <AuthAvatar />;
    }
  }

  // const [anchorEl, setAnchorEl] = React.useState(null);

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  {
    /* <Button
                  aria-describedby={id}
                  variant="contained"
                  color="primary"
                  onClick={handleClick}
                >
                  Open Popover
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "center",
                  }}
                >
                  <Typography className={classes.typography}>
                    The content of the Popover.
                  </Typography>
                  <Typography className={classes.typography}>
                    The content of the Popover.
                  </Typography>
                  <Typography className={classes.typography}>
                    The content of the Popover.
                  </Typography>
                </Popover> */
  }

  return (
    <AppBar position="relative" className="wrapper__header">
      <Container>
        <Toolbar>
          <Typography
            className={classes.title}
            variant="h3"
            style={{ color: "red" }}
          >
            CORSAIRS
          </Typography>
          <Box>
            <Grid container>
              <Grid item>
                <Box>{checkLogin(props)}</Box>
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
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
