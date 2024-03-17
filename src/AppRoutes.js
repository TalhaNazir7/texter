import { createBrowserRouter } from "react-router-dom";
import About from "./components/About";
import App from "./App";
// import Navbar from "./components/Navbar";
import { RootLayout } from "./components/RootLayout";

/**
 * Docs https://reactrouter.com/en/main/start/overview
 */
const router = createBrowserRouter([
    {
      path:'/',
      element: <RootLayout />,
      children:[
        {
          path: "",
          element: <App />,
        },
        {
        path: "about",
        element: <About />,
      },
      ]
    },
   
    ]);
export { router };

