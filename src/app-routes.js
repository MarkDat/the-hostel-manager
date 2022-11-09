import Content from "Content";
import { Navigate } from "react-router-dom";
import { dashboardRoute, roomRoute, settingRoute } from "routes";
import { withNavigationWatcher } from "./contexts/navigation";
import { HomePage } from "./pages";

const childRoutes = [
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
        index: true,
        element: <Navigate to="/dashboard" replace />,
      },
      ...childRoutes,
    ],
  },
];

export default routes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
