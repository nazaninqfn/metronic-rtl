import { FC } from 'react'
import { UsersListWrapper } from '../../UsersList'
import { PageLink,PageTitle } from '../../../../../../../_metronic/layout/core'
const usersBreadcrumbs: Array<PageLink> = [
    {
      title: 'User Management',
      path: '',
      isSeparator: false,
      isActive: false,
    },
    {
      title: '',
      path: '',
      isSeparator: true,
      isActive: false,
    },
  ]

type Props = {
className: string
}

const Tab1: FC<Props> = ({className}) => {
return (
    <>
    <div className={`card ${className}`}>
    {/* begin::Header */}
    <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
        <PageTitle breadcrumbs={usersBreadcrumbs}>Users list1</PageTitle>

        <span className='card-label fw-bold fs-3 mb-1'></span>
        <span className='text-muted mt-1 fw-semibold fs-7'></span>
        </h3>
        <div className='card-toolbar'>
        <ul className='nav'>
            <li className='nav-item'>
            <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary active fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_1'
            >
                Month
            </a>
            </li>
            <li className='nav-item'>
            <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4 me-1'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_2'
            >
                Week
            </a>
            </li>
            <li className='nav-item'>
            <a
                className='nav-link btn btn-sm btn-color-muted btn-active btn-active-light-primary fw-bold px-4'
                data-bs-toggle='tab'
                href='#kt_table_widget_5_tab_3'
            >
                Day
            </a>
            </li>
        </ul>
        </div>
    </div>
    {/* end::Header */}
    {/* begin::Body */}
    <div className='card-body py-3'>
        <div className='tab-content'>
        {/* begin::Tap pane */}
        <div className='tab-pane fade show active' id='kt_table_widget_5_tab_1'>
            {/* begin::Table container */}
            <div className='table-responsive'>
            {/* begin::Table */}

            <UsersListWrapper/>
            
            </div>
            {/* end::Table */}
        </div>
        {/* end::Tap pane */}
        {/* begin::Tap pane */}
        <div className='tab-pane fade' id='kt_table_widget_5_tab_2'>
            {/* begin::Table container */}
            <div className='table-responsive'>
            {/* begin::Table */}
            <UsersListWrapper/>
            
            </div>
            {/* end::Table */}
        </div>
        {/* end::Tap pane */}
        {/* begin::Tap pane */}
        <div className='tab-pane fade' id='kt_table_widget_5_tab_3'>
            {/* begin::Table container */}
            <div className='table-responsive'>
            {/* begin::Table */}
            <UsersListWrapper/>
            
            </div>
            {/* end::Table */}
        </div>
        {/* end::Tap pane */}
        </div>
    </div>
    {/* end::Body */}
    </div>
    </>
)
}

export {Tab1}
