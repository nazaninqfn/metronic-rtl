import { Route, Routes, Outlet, Navigate } from "react-router-dom";

import { Settings } from "../../accounts/components/settings/Settings";

const AddSubject = () => {
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
      <Route index element={<Navigate to="/apps/add-subject/Add" />} />
    </Routes>
  );
};

export default AddSubject;
