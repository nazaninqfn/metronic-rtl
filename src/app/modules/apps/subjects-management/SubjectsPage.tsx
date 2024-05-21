import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import { Tab1 } from '../user-management/users-list/components/header/Tab1'



const SubjectsPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='Subjects'
          element={
            <>
            {/* <UsersListWrapper/> */}
            <Tab1/>

            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/subjects-management/Subjects' />} />
    </Routes>
  )
}

export default SubjectsPage
