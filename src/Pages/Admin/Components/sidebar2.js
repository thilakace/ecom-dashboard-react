import React, {  useState } from "react";
import { HomeOutline, CartOutline, BagHandleOutline, SettingsOutline,  LogOutOutline, ListOutline } from 'react-ionicons'


const SideBar2 = (props) => {
    const [isActive, setActive] = useState(false);
    const toggleSidebar = () => {
        setActive(!isActive);
    }
  return (
    <>
       <nav>
          <div class="sidebar-button">
            <i class='bx' >
              <ListOutline color={'#000'} title={'ddd'} height="25px" width="25px" />
            </i>
            <span class="dashboard">Dashboard</span>
          </div>
          <div class="search-box">
            <input type="text" placeholder="Search..."/>
            <i class='bx bx-search' ></i>
          </div>
          <div class="">
             <LogOutOutline color={'#000'} title={'ddd'} height="25px" width="25px" />
          </div>
        </nav>
    </>
  )
}

export default SideBar2;