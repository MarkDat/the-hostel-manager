import { RoomPage } from "pages";
import { Navigate } from "react-router-dom";
import { roomListRoute } from "routes"

const routes = [
    {
        path: "room",
        element: <RoomPage />,
        children: [
            {
                index: true,
                element: <Navigate to="./list" replace />,
            },
            ...roomListRoute
        ]
    }
];

export default routes;
