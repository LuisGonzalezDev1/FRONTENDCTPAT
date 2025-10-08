

import { lazy, Suspense } from "react";
import { Route } from "react-router-dom";
import AppLayout from '../layouts/AppLayout';
import { Spinner } from "../components/utilities-components/Spinner";

const routes = [
  { path: "/rol", component: lazy(() => import("../views/adminPanel/TableRoleView")), roles: [] },
  { path: "/rol/create", component: lazy(() => import("../views/adminPanel/CreateRol")), roles: [] },
  { path: "/user", component: lazy(() => import("../views/adminPanel/TableUserView")), roles: [] },
  { path: "/user/create", component: lazy(() => import("../components/forms/adminPanel/CreateUserForm")), roles: [] },

];

export default function AdminRoutes() {
 return (
    <Route element={<AppLayout />}>
      {routes.map(({ path, component: Component}) => (
        <Route
          key={path}
          path={path}
          element={
            <Suspense fallback={<Spinner />}>
                <Component />
            </Suspense>
          }
        />
      ))}
    </Route>
  );
}
