import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "react-query/Query/queryClient";
import { ToastContainer } from "react-toastify";
import { Webapp } from "./components";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <Webapp />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
export default App;
