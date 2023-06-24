import { FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart } from "react-icons/ai";
import { LiaUserSolid } from "react-icons/lia";
import { BsCartCheck } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { API_ROUTES } from "../../routes/routes-constants";

export const sideBarMenus = {
  basicRoutes: [
    {
      path: "/",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <FaUser />,
    },
    {
      path: "/messages",
      name: "Messages",
      icon: <MdMessage />,
    },
    {
      path: "/analytics",
      name: "Analytics",
      icon: <BiAnalyse />,
    },
    {
      path: "/order",
      name: "Order",
      icon: <BsCartCheck />,
    },
    {
      path: "/saved",
      name: "Saved",
      icon: <AiFillHeart />,
    },
    {
      path: "/settings",
      name: "Settings",
      icon: <BiCog />,
      exact: true,
      subRoutes: [
        {
          path: "/settings/profile",
          name: "Profile ",
          icon: <FaUser />,
        },
        {
          path: "/settings/2fa",
          name: "2FA",
          icon: <FaLock />,
        },
        {
          path: "/settings/billing",
          name: "Billing",
          icon: <FaMoneyBill />,
        },
      ],
    },
  ],
  superAdmin: [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: API_ROUTES.SIGNUP,
      name: "User Enquiry",
      icon: <FaUser />,
    },
    {
      path: API_ROUTES.SERVICE_PROVIDERS,
      name: "Service Providers",
      icon: <RiServiceFill />,
    },
    {
      path: API_ROUTES.ORGANIZATION_LIST,
      name: "Organizations",
      icon: <GoOrganization />,
    },
    {
      path: API_ROUTES.USER_LISTING,
      name: "Users",
      icon: <LiaUserSolid />,
    },
  ],
  admin: [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: API_ROUTES.DEPARTMENT_LIST,
      name: "Department",
      icon: <FaUser />,
    },
    {
      path: API_ROUTES.USER_LISTING,
      name: "Users",
      icon: <LiaUserSolid />,
    },
    {
      path: API_ROUTES.SERVICE_PROVIDERS,
      name: "Service Providers",
      icon: <RiServiceFill />,
    },
  ],
  user: [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <FaHome />,
    },
  ],
};
