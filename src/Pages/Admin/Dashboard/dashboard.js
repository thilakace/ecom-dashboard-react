import React, {  useState } from "react";
import AdminHomeLayout from "../Components/layout";
import SideBar2 from "../Components/sidebar2";
import { HomeOutline, CartOutline, BagHandleOutline, SettingsOutline, BarChartOutline, LogOutOutline, ListOutline } from 'react-ionicons';

const Dashboard = () => {
   
    return (
        <>
        <AdminHomeLayout >
            <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Order</div>
                <div class="number">40,876</div>
                <div class="indicator">
                  <i class='bx bx-up-arrow-alt'></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
              <i class='bx bx-cart-alt cart'></i>
            </div>
            </div>
        </AdminHomeLayout>   

       
        </>
      );
}

export default Dashboard;