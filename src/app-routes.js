import { RequireAuth } from "components";
import Content from "Content";
import { Navigate } from "react-router-dom";
import { dashboardRoute, roomRoute, settingRoute } from "routes";
import { withNavigationWatcher } from "./contexts/navigation";
import { HomePage, LandLord } from "./pages";

const childLandLordRoutes = [
  ...dashboardRoute,
  ...roomRoute,
  ...settingRoute
]

const routes = [
  {
    path: "/",
    element: <Content />,
    children: [
      {
        path: "/landlord",
        element: <LandLord />,
        children: [
          {
            index: true,
            element: <Navigate to="./dashboard" replace />,
          },
          ...childLandLordRoutes
        ]
      },
      {
        index: true,
        element: <Navigate to="/landlord" replace />,
      }
    ],
  },
];

export default routes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
