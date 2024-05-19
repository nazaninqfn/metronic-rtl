import {useListView} from '../../core/ListViewProvider'
import DropDownComponents from './DropDownComponents'
import DropDownComponentsLocation from './DropDownComponentsLocation'
import DropDownComponentscode from './DropDownComponentscode'
import DropDownComponentsteacher from './DropDownComponentsteacher'
// import {UsersListToolbar} from './UserListToolbar'
import {UsersListGrouping} from './UsersListGrouping'
import {UsersListSearchComponent} from './UsersListSearchComponent'
import DropDownComponentsSdate from './DropDownComponentsSdate'
import DropDownComponentsEdate from './DropDownComponentsEdate'

const UsersListHeader = () => {
  // const {selected} = useListView()
  return (
    <div className='card-header border-0 pt-6'>
      <DropDownComponents/>
      <DropDownComponentscode/>
      <DropDownComponentsteacher/>
      <DropDownComponentsLocation/>
      <DropDownComponentsSdate/>
      <DropDownComponentsEdate/>
      <UsersListSearchComponent />
      
      {/* begin::Card toolbar */}
      {/* <div className='card-toolbar'> */}
        {/* begin::Group actions */}
        {/* {selected.length > 0 ? <UsersListGrouping /> : <UsersListToolbar />} */}
        {/* end::Group actions */}
      {/* </div> */}
      {/* end::Card toolbar */}
    </div>
  )
}

export {UsersListHeader}
