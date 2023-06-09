import { Navigate, Outlet } from "react-router-dom";

const PublicRoutes = () => {
    return !localStorage.getItem("token") ? <Outlet /> : <Navigate to="/home" />;
};

export default PublicRoutes;
