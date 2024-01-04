import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import About from "./routes/about";
import Team from "./routes/team";
import Sponsors from "./routes/sponsors";
import Join from "./routes/join";
import Contact from "./routes/contact";
import Past from "./routes/past";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <About />,
  },
  {
    path: "past",
    element: <Past />,
  },
  {
    path: "team",
    element: <Team />,
  },
  {
    path: "sponsor",
    element: <Sponsors />,
  },
  {
    path: "join",
    element: <Join />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
