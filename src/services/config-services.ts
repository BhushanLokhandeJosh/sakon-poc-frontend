import { InitialValuesProps } from "../pages/CreateConfiguration/types";
import { POST } from "./api/axios";


export const createConfiguration = (payload: InitialValuesProps) => {
    return POST('/configurations', payload);
}
  