import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
    return false ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoutes;
