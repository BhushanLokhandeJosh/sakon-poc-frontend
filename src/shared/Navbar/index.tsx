import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Grid } from "@mui/material";

import AvatarImage from "../../assets/images/avatar-icon.jpeg";
import { useDispatch } from "react-redux";

import "./styles/style.css";
import { Link } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";
import { ADMIN, SUPER_ADMIN, USER } from "../../pages/User/UserListing/types";
import { logoutStart } from "../../redux/actions/authActions";
import Footer from "../../HomePages/Footer/component";
import { API_ROUTES } from "../../routes/routes-constants";

interface IProps {
  children?: React.ReactNode;
  sideBarMenus: any;
  navBarMenus: { path: string; name: string }[];
  commonNavBarMenus: any;
  loggedInUser: any;
}

//TODO : Visit and checkout all components and also see check whether it is
//  responsiveness or not.
const LayoutComponent = (props: IProps) => {
  const dispatch = useDispatch();
  const {
    children,
    sideBarMenus,
    loggedInUser,
    navBarMenus,
    commonNavBarMenus,
  } = props;
  let sideBarMenu;
  let basicMenus;
  if (loggedInUser?.type === SUPER_ADMIN) {
    sideBarMenu = sideBarMenus.superAdmin;
  } else if (loggedInUser?.type === ADMIN) {
    sideBarMenu = sideBarMenus.admin;
  } else if (loggedInUser?.type === USER) {
    sideBarMenu = sideBarMenus.user;
  }

  if (loggedInUser?.type === undefined) {
    basicMenus = commonNavBarMenus.login;
  } else {
    basicMenus = commonNavBarMenus.logout;
  }

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    if (loggedInUser?.type) {
      dispatch(logoutStart());
    } else return;
  };

  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // };

  return (
    <div>
      <div className="navbar-style">
        <AppBar
          position="static"
          style={{ backgroundColor: "rgb(52, 54, 53)" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                <Link
                  to={API_ROUTES.HOME}
                  style={{
                    color: "white",
                    textDecoration: "none",
                  }}
                >
                  BOT
                </Link>
              </Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                ></IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {navBarMenus.map((item) => (
                    <MenuItem
                      key={item.name}
                      onClick={handleCloseNavMenu}
                      sx={{
                        color: "white",
                        display: "block",
                        textDecoration: "none",
                      }}
                    >
                      <Link
                        to={item.path}
                        style={{
                          color: "black",
                          textDecoration: "none",
                        }}
                      >
                        {item.name}
                      </Link>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  fontFamily: "monospace",
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                LOGO
              </Typography>
              <Box
                sx={{
                  flexGrow: 1,
                  color: "white",
                  display: { xs: "none", md: "flex" },
                  position: "relative",
                }}
              >
                {navBarMenus.map((item) => (
                  <Button
                    key={item.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      px: 4,
                    }}
                  >
                    <Link
                      to={item.path}
                      style={{
                        color: "white",
                        textDecoration: "none",
                      }}
                    >
                      {item.name}
                    </Link>
                  </Button>
                ))}

                <Box
                  sx={{
                    my: 3,
                    color: "white",
                    fontSize: "1rem",
                    display: "block",
                    position: "absolute",
                    right: "5rem",
                  }}
                >
                  {loggedInUser?.type
                    ? `HI ${loggedInUser.name.toUpperCase()} (${
                        loggedInUser?.type
                      })`
                    : "HI USER"}
                </Box>

                {basicMenus.map((item: any) => (
                  <Button
                    key={item.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      position: "absolute",
                      right: "-5%",
                    }}
                  >
                    <Link
                      to={item.path}
                      style={{
                        color: "white",
                        textDecoration: "none",
                        paddingRight: "2rem",
                      }}
                    >
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </Box>

              {/* <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar alt="Can't Load" src={AvatarImage} />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "90px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {Object.values(SETTING_MENU).map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box> */}
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      {loggedInUser?.type ? (
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <SideBar sideBarMenus={sideBarMenu} />
          </Grid>
          <Grid item xs={9}>
            {/* <div> */}
            {/* <Outlet /> */}
            {children}
            {/* </div> */}
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      ) : (
        <Grid spacing={2}>
          <Grid
            item
            xs={12}
            sx={{
              background: "linear-gradient(to right top, #f7f7f7, #dfefff)",
            }}
          >
            {children}
          </Grid>
          <Grid item xs={12}>
            <Footer />
          </Grid>
        </Grid>
      )}
    </div>
  );
};
export default LayoutComponent;
