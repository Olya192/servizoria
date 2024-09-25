import { Route, Routes } from "react-router-dom";
import { Authorization } from "./components/authorization/Authorization";
import { Homepage } from "./components/home/Home";
import { useEffect } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute/ProtedRouter";

export const AppRoutes = () => {

  const userName = () => {
    const user = localStorage.getItem("name");
    return user;
  };

  useEffect(() => {
    userName();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Authorization />} />
      <Route element={<ProtectedRoute userName={userName} />}>
        <Route path="/home" element={<Homepage />} />
      </Route>
    </Routes>
  );
};
