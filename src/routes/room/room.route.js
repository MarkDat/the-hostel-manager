import { RoomPage } from "pages";
import {roomListRoute} from "routes"

const routes = [
    {
        path: "/room",
        element: <RoomPage />,
        children: [ ...roomListRoute ]
    }
];

export default routes;
