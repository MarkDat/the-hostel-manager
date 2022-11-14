import { RequireAuth } from "components";
import { RoomListPage } from "pages";


const routes = [
    {
        path: "list",
        element: <RequireAuth><RoomListPage /></RequireAuth>,
    }
];

export default routes;
