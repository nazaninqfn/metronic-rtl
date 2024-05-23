import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import { SubjectDetails } from "./SubjectDetails";

const AddSubject = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path="Add"
          element={
            <>
              <SubjectDetails />
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to="/apps/add-subject/Add" />} />
    </Routes>
  );
};

export default AddSubject;