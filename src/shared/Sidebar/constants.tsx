import { FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { GoTasklist } from "react-icons/go";
import { AiFillHeart, AiOutlineSchedule } from "react-icons/ai";
import { LiaUserSolid } from "react-icons/lia";
import { BsCartCheck } from "react-icons/bs";
import { RiServiceFill } from "react-icons/ri";
import { GoOrganization } from "react-icons/go";
import { FcDataConfiguration } from "react-icons/fc";
import { API_ROUTES } from "../../routes/routes-constants";

export const sideBarMenus = {
  superAdmin: [
    {
      path: API_ROUTES.DASHBOARD,
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: API_ROUTES.SIGNUP,
      name: "User Enquiries",
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
      name: "Org. Admins",
      icon: <LiaUserSolid />,
    },
  ],
  admin: [
    {
      path: API_ROUTES.DASHBOARD,
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: API_ROUTES.CONFIGURATION_LIST,
      name: "Configuration",
      icon: <FcDataConfiguration />,
    },
    {
      path: API_ROUTES.SCHEDULING_LIST,
      name: "Scheduler",
      icon: <AiOutlineSchedule />,
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
    {
      path: API_ROUTES.JOBS_LIST,
      name: "Jobs",
      icon: <GoTasklist />,
    },
  ],
  user: [
    {
      path: API_ROUTES.DASHBOARD,
      name: "Dashboard",
      icon: <FaHome />,
    },
    {
      path: API_ROUTES.CONFIGURATION_LIST,
      name: "Configuration",
      icon: <FcDataConfiguration />,
    },
    {
      path: API_ROUTES.SCHEDULING_LIST,
      name: "Scheduler",
      icon: <AiOutlineSchedule />,
    },
    {
      path: API_ROUTES.JOBS_LIST,
      name: "Jobs",
      icon: <GoTasklist />,
    },
  ],
};
