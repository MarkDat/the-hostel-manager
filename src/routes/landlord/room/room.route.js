import { RoomPage } from "@app-pages";
import { Navigate } from "react-router-dom";
import { roomListRoute, roomDetailsRoute } from "@app-routes"



const routes = [
    {
        path: "room",
        element: <RoomPage />,
        children: [
            {
                index: true,
                element: <Navigate to="./list" replace />,
            },
            ...roomListRoute,
            ...roomDetailsRoute,
        ]
    }
];

export default routes;
