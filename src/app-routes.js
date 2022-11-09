import { HomePage, TasksPage, ProfilePage } from "./pages";
import { withNavigationWatcher } from "./contexts/navigation";
import Content from "Content";
import { Navigate } from "react-router-dom";
import Information from "components/information/Information";
import UserPanel from "components/user-panel/UserPanel";

const routes = [
  {
    path: "/",
    element: <Content />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/inform",
        element: <Information />,
        children: [
          {
            index: true,
            element: <Navigate to="tasks" />,
          },
          {
            path: "tasks",
            element: <TasksPage />,
            children: [
              {
                path: ":id",
                element: <UserPanel />,
              }
            ]
          },
          {
            path: "profile",
            element: <ProfilePage />,
          },
        ],
      },
    ],
  },
];

export default routes.map((route) => {
  return {
    ...route,
    element: withNavigationWatcher(route.element, route.path),
  };
});
