import {Route, Routes, Outlet, Navigate} from 'react-router-dom'
import {PageLink, PageTitle} from '../../../../_metronic/layout/core'
// import {UsersListWrapper} from './users-list/UsersList'
import { Tab1 } from './users-list/components/header/Tab1'


// const usersBreadcrumbs: Array<PageLink> = [
//   {
//     title: 'User Management',
//     path: '/apps/user-management/users',
//     isSeparator: false,
//     isActive: false,
//   },
//   {
//     title: '',
//     path: '',
//     isSeparator: true,
//     isActive: false,
//   },
// ]

const UsersPage = () => {
  return (
    <Routes>
      <Route element={<Outlet />}>
        <Route
          path='users'
          element={
            <>
              {/* <PageTitle breadcrumbs={usersBreadcrumbs}>Users list</PageTitle> */}
              {/* <UsersListWrapper /> */}
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
