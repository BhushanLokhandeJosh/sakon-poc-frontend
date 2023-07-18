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

import "./styles/style.css";
import { Link, Outlet } from "react-router-dom";
import SideBar from "../Sidebar/SideBar";
import { useDispatch } from "react-redux";
import { logoutStart } from "../../redux/actions/authActions";
import { IRootState } from "../../redux/reducer/rootReducer";

interface ISideBarProps {
  basicRoutes: {
    path: string;
    name: string;
    icon: JSX.Element;
  }[];
  superAdmin: {
    path: string;
    name: string;
    icon: JSX.Element;
  }[];
}

interface ICommonNavbarProps {
  login: {
    path: string;
    name: string;
  }[];
  logout: {
    path: string;
    name: string;
  }[];
}

interface IProps {
  children?: React.ReactNode;
  sideBarMenus: ISideBarProps;
  navBarMenus: { path: string; name: string }[];
  commonNavBarMenus: ICommonNavbarProps;
  loggedInUser: IRootState["AuthReducer"]["loggedInUser"];
}

const LayoutComponent = (props: IProps) => {
  const {
    children,
    sideBarMenus,
    loggedInUser,
    navBarMenus,
    commonNavBarMenus,
  } = props;
  const dispatch = useDispatch();
  let sideBarMenu;
  let basicMenus;
  if (loggedInUser?.type === "SUPERADMIN") {
    sideBarMenu = sideBarMenus.superAdmin;
  } else {
    sideBarMenu = sideBarMenus.basicRoutes;
  }

  if (loggedInUser?.type === undefined) {
    basicMenus = commonNavBarMenus.login;
  } else {
    basicMenus = commonNavBarMenus.logout;
  }

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    if (loggedInUser?.type) {
      dispatch(logoutStart());
    } else return;
  };

  return (
    <div>
      <div className="navbar-style">
        <AppBar
          position="static"
          style={{ backgroundColor: "rgb(52, 54, 53)" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
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
                BOT
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
                {basicMenus.map((item: any) => (
                  <Button
                    key={item.name}
                    onClick={handleCloseNavMenu}
                    sx={{
                      my: 2,
                      color: "white",
                      display: "block",
                      position: "absolute",
                      right: "3rem",
                    }}
                  >
                    <Link
                      to={item.path}
                      style={{
                        color: "white",
                        textDecoration: "none",
                        paddingRight: "6rem",
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
                    display: "block",
                    position: "absolute",
                    right: "0.5rem",
                  }}
                >
                  {loggedInUser?.type ? loggedInUser.type : "HI USER"}
                </Box>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
      <Grid container spacing={2}>
        {loggedInUser?.type && (
          <Grid item xs={2}>
            <SideBar sideBarMenus={sideBarMenu} />
          </Grid>
        )}
        <Grid item xs={10}>
          <div>
            <Outlet />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};
export default LayoutComponent;
