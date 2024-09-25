import { Navigate, Outlet } from "react-router-dom";

type Typs = {
  userName: () => string | null;
};

export const ProtectedRoute = ({ userName }: Typs) => {
  console.log(userName(), "userName");
  if (!userName()) {
    return <Navigate to="/" replace={true} />;
  }

  return <Outlet />;
};
