export enum PAGE_MENU {
  HOME = "Home",
  ABOUT_US = "About Us",
  SERVICES = "Services",
  CONTACT_US = "Contact Us",
  PRODUCTS = "Products",
}

export enum SETTING_MENU {
  PROFILE = "Profile",
  ACCOUNT = "Account",
  DASHBOARD = "Dashboard",
  LOGOUT = "Logout",
}

export const navBarMenus = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/contactus",
    name: "Contact Us",
  },
];

export const commonNavBarMenus = {
  login: [
    {
      path: "/login",
      name: "Login",
    },
  ],
  logout: [
    {
      path: "/logout",
      name: "Logout",
    },
  ],
};
