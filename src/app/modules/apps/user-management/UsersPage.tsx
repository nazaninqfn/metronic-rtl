import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import { Tab1 } from './Tab1'


const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='users'
          element={
            <>
              <Tab1/>
            </>
          }
        />
      </Route>
      <Route index element={<Navigate to='/apps/user-management/users' />} />
    </Routes>
  )
}

export default UsersPage
