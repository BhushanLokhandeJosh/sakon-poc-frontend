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
    path: "/home",
    name: "Home",
  },
  {
    path: "/aboutus",
    name: "About Us",
  },
  {
    path: "/services",
    name: "Services",
  },
  {
    path: "/contactus",
    name: "Contact Us",
  },
  {
    path: "/products",
    name: "Products",
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
