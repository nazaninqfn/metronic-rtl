import { Route, Routes, Outlet, Navigate } from "react-router-dom";

import { Settings } from "../../accounts/components/settings/Settings";

const AddUser = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="Add"
          element={
            <>
              <Settings />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/apps/user-management/Add" />} />
    </Routes>
  );
};

export default AddUser;
