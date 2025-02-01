"use client"
import React from 'react'
import styled from 'styled-components'
import {useGlobalState} from '@/app/context/GlobalProvider';


const Sidebar = () => {
    const {theme} = useGlobalState();
  
  return (
    <div>
      
     <SidebarStyles theme={theme}><div className="profile"><div className="profile-overlay">
        <Image width={70} height={70} src="to-do-list-task-management-or-completion-tracking-or-reminder-to-finish-assignment-work-planning-or-schedule-concept-productive-businessman-with-pencil-and-to-do-list-clipboard-with-alarm-clock-vector.jpg" alt="profile"/></div></div></SidebarStyles> 
    </div>
  )
}
const SidebarStyles=styled.nav`
  position:relative;
  width: ${(props) => props.theme.sidebarWidth};
  
  background-color:${(props) => props.theme.colorBg2};
  border: 2px solid ${(props) => props.theme.borderColor2};
  border-radius:1rem;
  `;

export default Sidebar
