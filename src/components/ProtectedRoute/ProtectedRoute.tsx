import { Route, useNavigate } from "react-router-dom";
import { IProtectedRouteProps } from "./ProtectedRoute.models";
import { FC } from "react";
import NoAccessPage from "../../pages/NoAccessPage/NoAccessPage";

const ProtectedRoute: FC<IProtectedRouteProps> = ({
  path,
  component: Component,
  isUserLoggedIn,
  ...rest
}) => {
  return isUserLoggedIn ? (
    <Route path={path} element={<Component />} />
  ) : (
    <Route path="/403" element={<NoAccessPage />} />
  );
};

export default ProtectedRoute;
