import { AxiosResponse } from "axios";

import { GET, POST, PUT } from "../../services/api/axios";
import { API_ROUTES } from "../../routes/routes-constants";
import { IUserPayload } from "./UserListing/types";

export const createUser = (
  payload: IUserPayload
): Promise<AxiosResponse<string, any>> => {
  return POST(`${API_ROUTES.USER_LISTING}`, payload);
};

export const getUserList = async (props: any) => {
  const  {id,search} = props;
  console.log("In Service",id);
  
  return await GET(`${API_ROUTES.USER_LISTING}/${id}`, search);
};

export const getDepartmentList = (params: any) => {
  const { emp_id } = params;
  return GET(`${API_ROUTES.DEPARTMENT_LIST}/${emp_id}`);
};

export const getOrganizations = () => {
  return GET(API_ROUTES.ORGANIZATION_LIST);
};

export const updateUser = (
  payload: IUserPayload
): Promise<AxiosResponse<string, any>> => {
  console.log("Update User service Called");
  return PUT(`${API_ROUTES.USER_LISTING}/${payload.id}`, payload);
};
