import React from "react";
import SideBar2 from "../Components/sidebar2";

const AdminHomeLayout = (props) => {
    return (
        <section class="home-section">
        <SideBar2/>
        <div class="home-content">
           {props.children}
        </div>
        
    </section>
    )
}

export default AdminHomeLayout;