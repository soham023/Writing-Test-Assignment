// import React from 'react';
// import { FaUserFriends , FaVideo, FaSignOutAlt ,FaTachometerAlt } from 'react-icons/fa'; // Example icons from react-icons
// import icon from '../assets/icon.jpeg';
// import { NavLink } from 'react-router-dom';
// function Sidebar() {
//   return (
//     <div className="sidebar">
//       <div>
//         <img src={icon} alt="" />
//       </div>
//       <ul className="sidebar-list">
//         <li><FaTachometerAlt /> Dashboard</li>
//         <li><FaUserFriends /> 1 on 1 mentor</li>
//         <li><FaVideo /> Mock Interviews</li>
//         <li><FaSignOutAlt /> Practice Test</li>
//         <li><FaSignOutAlt /> Communication</li>
//         <li className='active-link'><FaSignOutAlt /><NavLink to="/reports" className="nav-link" activestyle={{ fontWeight: 'bold', color: 'black'}}> Reports </NavLink></li>
//         <li><FaSignOutAlt /> Settings</li>
//         <li><FaSignOutAlt /> Premium</li>
//         <li> Resume</li>
//         <li> Courses </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;

import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList,
    FaBeer 
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import Icon from '../assets/Icon.png';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(true);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/1on1mentor",
            name:"1 on 1 mentor",
            icon:<FaUserAlt/>
        },
        {
            path:"/mockInterviews",
            name:" Mock Interviews",
            icon:<FaRegChartBar/>
        },
        {
            path:"/practiceTest",
            name:"Practice Test",
            icon:<FaCommentAlt/>
        },
        {
            path:"/communication",
            name:"Communication",
            icon:<FaShoppingBag/>
        },
        {
            path:"/reports",
            name:"Reports",
            icon:<FaThList/>
        },
        {
          path:"/settings",
          name:"Settings",
          icon:<FaBeer/>
        },
        {
          path:'/Premium',
          name: "Premium",
          icon:<FaThList/>
        },
        {
          path:'/resume',
          name: "Resume",
          icon:<FaThList/>
        },
        {
          path:'/courses',
          name: "Courses",
          icon:<FaThList/>
        }

    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo"><img src={Icon} alt="" className='icon-img'/></h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;