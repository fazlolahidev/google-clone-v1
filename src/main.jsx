import { createRoot } from "react-dom/client";

//* Comnponents *//
import App from "./App";

//* Styles *//
import "./index.css";

//* Router *//
import { BrowserRouter } from "react-router-dom";

//* Query *//
import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
