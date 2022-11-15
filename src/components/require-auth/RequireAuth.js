import { useAuth } from "@app-contexts/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";

export default function RequireAuth ({ allowedRoles, children}) {
    const {user} = useAuth();
    const location = useLocation();

    return !!user
            ? children
            : <Navigate to='/landlord' state={{from: location}} replace />;
}