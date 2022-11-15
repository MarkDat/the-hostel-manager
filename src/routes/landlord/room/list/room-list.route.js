import { RequireAuth } from "@app-components";
import { RoomListPage } from "@app-pages";


const routes = [
    {
        path: "list",
        element: <RequireAuth><RoomListPage /></RequireAuth>,
    }
];

export default routes;
