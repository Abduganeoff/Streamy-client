import { ComponentType } from "react";
import { RouteProps } from "react-router-dom";

export interface IProtectedRouteProps extends Omit<RouteProps, "component"> {
  isUserLoggedIn: boolean;
  component: ComponentType<any>;
}
