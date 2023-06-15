import { useQuery, useMutation } from "react-query";

import { AxiosError, AxiosResponse } from "axios";

import { createOrganization } from "./organization-services";

interface IResponseProps {
  onSuccess: (values: AxiosResponse) => void;
  onError: (values: AxiosError) => void;
}

export const useCreateOrganization = (props: IResponseProps) => {
  const { onSuccess, onError } = props;
  return useMutation(createOrganization, {
    onSuccess,
    onError,
  });
};
