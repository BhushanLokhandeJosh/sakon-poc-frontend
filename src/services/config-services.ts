import { InitialValuesProps } from "../pages/CreateConfiguration/constants";
import { POST } from "./api/axios";


export const createConfiguration = (payload: InitialValuesProps) => {
    return POST('/configuration', payload);
}
  