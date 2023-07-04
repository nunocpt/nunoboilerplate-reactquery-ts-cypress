import { QueryClient, QueryClientConfig } from "react-query";
import { toast } from "react-toastify";
import axios from "axios";

interface QueryKey {
   queryKey: string[];
}

const defaultQueryFn = async ({ queryKey }: QueryKey) => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}${queryKey[0]}`,
    {
      headers: {
        idToken: queryKey[1],
        userId: queryKey[2],
      },
    }
  );
  return data;
};

const queryClientConfig: QueryClientConfig | unknown = {
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 5000,
      cacheTime: 5000,
      refetchOnMount: false, //"always",
      refetchOnWindowFocus: false, //"always",
      refetchOnReconnect: false, //"always",
      refetchInterval: 3600000, // 1 hour
      refetchIntervalInBackground: false,
      suspense: false,
      setTimeout: 0,
      queryFn: defaultQueryFn,
      onError: (error: { message: string }) =>
        toast.error(`Something went wrong: ${error.message}`),
    },
    mutations: {
      retry: 1,
      onError: (error: { message: string }) =>
        toast.error(`Something went wrong: ${error.message}`),
    },
  },
};
export const queryClient = new QueryClient(queryClientConfig as QueryClientConfig);
