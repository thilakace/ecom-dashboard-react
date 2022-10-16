import React, {  useState } from "react";
import { HomeOutline, CartOutline, BagHandleOutline, SettingsOutline, BarChartOutline, LogOutOutline, ListOutline,PersonCircleOutline } from 'react-ionicons';
import { useLocation, Link } from 'react-router-dom';

const SideBar = () => {
    const [isActive, setActive] = useState(false);
    const toggleSidebar = () => {
        setActive(!isActive);
    }

    const location = useLocation();

  console.log(location.pathname);
  return location.pathname !='/admin/login' ? 
  (
    <>
      <div className={isActive? "sidebar active" : "sidebar"} >
    <div class="logo-details">
      <i class='bx bxl-c-plus-plus'>
      <i class='bx' >
            <HomeOutline color={'#FFF'} title={'ddd'} height="25px" width="25px" />
            </i>
      </i>
      <span class="logo_name">CodingLab</span>
    </div>
      <ul class="nav-links">
        <li>
          <a  class="active">
             <i class='bx' >
               <HomeOutline color={'#FFF'} title={'ddd'} height="25px" width="25px" />
            </i>
            <span class="links_name"><Link to="/admin/dashboard">Dashboard</Link></span>
            
          </a>
        </li>
        <li>
          <a href="#">
          <i class='bx' >
               <BagHandleOutline color={'#FFF'} title={'ddd'} height="25px" width="25px" />
            </i>
            <span class="links_name">Product</span>
          </a>
        </li>
        <li>
          <a href="#">
          <i class='bx' >
               <CartOutline color={'#FFF'} title={'ddd'} height="25px" width="25px" />
            </i>
            <span class="links_name">Order list</span>
          </a>
        </li>
        <li>
          <a href="#">
          <i class='bx' >
               <PersonCircleOutline color={'#FFF'} title={'ddd'} height="25px" width="25px" />
            </i>
            <span class="links_name"><Link to="/admin/users">Users</Link></span>
          </a>
        </li>
        <li>
          <a href="#">
          <i class='bx' >
               <HomeOutline color={'#FFF'} title={'ddd'} height="25px" width="25px" />
            </i>
            <span class="links_name"><Link to="/admin/category">Category</Link></span>
          </a>
        </li>
        <li>
          <a href="#">
          <i class='bx' >
               <HomeOutline color={'#FFF'} title={'ddd'} height="25px" width="25px" />
            </i>
            <span class="links_name">Total order</span>
          </a>
        </li>
        <li>
          <a href="#">
          <i class='bx' >
               <HomeOutline color={'#FFF'} title={'ddd'} height="25px" width="25px" />
            </i>
            <span class="links_name">Team</span>
          </a>
        </li>
        <li>
          <a href="#">
          <i class='bx' >
               <HomeOutline color={'#FFF'} title={'ddd'} height="25px" width="25px" />
            </i>
            <span class="links_name">Messages</span>
          </a>
        </li>
        <li>
          <a href="#">
          <i class='bx' >
               <HomeOutline color={'#FFF'} title={'ddd'} height="25px" width="25px" />
            </i>
            <span class="links_name">Favrorites</span>
          </a>
        </li>
        <li>
          <a href="#">
             <i class='bx' >
               <SettingsOutline color={'#FFF'} title={'ddd'} height="25px" width="25px" />
            </i>
            <span class="links_name">Setting</span>
          </a>
        </li>
        <li class="log_out">
          <a href="#">
          <i class='bx' >
               <LogOutOutline color={'#FFF'} title={'ddd'} height="25px" width="25px" />
            </i>
            <span class="links_name">Log out</span>
          </a>
        </li>
      </ul>
      </div>
      
    </>
  ) : null
}

export default SideBar;