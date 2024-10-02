import { RouteObject } from "react-router-dom";
import { Home } from "../components/pages/Home";

const router: RouteObject[] = [
  {
    path: "/",
    element: <Home />,
  },
];

export { router };
