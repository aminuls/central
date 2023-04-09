import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Main from "./Main/Main";
import Ticket from "./pages/Ticket/Ticket";
import Customer from "./pages/Customer/Customer";
import Error from "./pages/Error/Error";

function App() {
   const router = createBrowserRouter([
      {
         path: "/",
         element: <Main></Main>,
         errorElement: <Error></Error>,
         children: [
            {
               path: "/",
               element: <Home></Home>,
            },
            {
               path: "/ticket_list",
               element: <Ticket></Ticket>,
            },
            {
               path: "/customer_details",
               element: <Customer></Customer>,
            },
         ],
      },
   ]);
   return <RouterProvider router={router} />;
}

export default App;
