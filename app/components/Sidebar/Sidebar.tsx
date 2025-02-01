"use client";
import React from "react";
import styled from "styled-components";
import { useGlobalState } from "@/app/context/GlobalProvider";
import Image from "next/image";
import menu from "@/app/utils/menu"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
const Sidebar = () => {
  const { theme } = useGlobalState();
  const router=useRouter();
  const pathname=usePathname();
  const handleClick= (link:string) => {
    router.push(link);
  }
  return (
    <div>
      <SidebarStyles theme={theme}>
        <div className="profile">
          <div className="profile-overlay"></div>
           
             <div className="image">
              <Image
                width={100}
                height={100}
                src="/to-do-list-task-management-or-completion-tracking-or-reminder-to-finish-assignment-work-planning-or-schedule-concept-productive-businessman-with-pencil-and-to-do-list-clipboard-with-alarm-clock-vector.jpg"
                alt="profile"
              />
             </div><h3>
              <span>adarsh</span>
              <span>hero</span>
            </h3></div>
            
         
          <ul className="nav-items">{menu.map((item)=> {
            const link=item.link;
return <li  key={item.link} className={`nav-item ${pathname===link ? "active" : ""}`} onClick={() => {
  handleClick(link);
}}>
      {item.icon}
      <Link href={item.link}>
      {item.title}</Link>
</li>
          })}</ul>
          <button></button>
       
      </SidebarStyles>
    </div>
  );
};const SidebarStyles = styled.nav`
position: relative;
width: ${(props) => props.theme.sidebarWidth};
height: 100%;
background-color: ${(props) => props.theme.colorBg2};
border: 2px solid ${(props) => props.theme.borderColor2};
border-radius: 1rem;
display: flex;
flex-direction: column;
justify-content: space-between;
color: ${(props) => props.theme.colorGrey3};

.profile {
  margin: 1.5rem;
  padding: 1rem 0.8rem;
  position: relative;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 500;
  color: ${(props) => props.theme.colorGrey0};
  display: flex;
  align-items: center;

  .profile-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(10px);
    z-index: 0;
    background: ${(props) => props.theme.colorBg3};
    transition: all 0.55s linear;
    border-radius: 1rem;
    border: 2px solid ${(props) => props.theme.borderColor2};
    opacity: 0.2;
  }

  h3 {
    font-size: 1.2rem;
    display: flex;
    flex-direction: column;
    line-height: 1.4rem;
  }

  .image,
  h3 {
    position: relative;
    z-index: 1;
  }

  .image {
    flex-shrink: 0;
    display: inline-block;
    overflow: hidden;
    transition: all 0.5s ease;
    border-radius: 50%; 
    width: 70px;
    height: 70px;

    img {
      height: 100%;
      width: auto;
      transition: all 0.5s ease;
    }
  }

  .image,
  h3 {
    margin-left: 0.9rem;
    font-size: clamp(1.2rem, 4vw, 1.4rem);
    line-height: 100%;
  }

  &:hover .profile-overlay {
    opacity: 1;
    border: 2px solid ${(props) => props.theme.borderColor2};
  }

  &:hover img {
    transform: scale(1.1);
  }
}

.nav-item {
  position: relative;
  padding: 0.6rem 1rem 1rem 2.1rem;
  margin: 0.3rem 0;
  display: grid;
  grid-template-columns: 40px 1fr;
  cursor: pointer;

  &::after {
    position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: ${(props) => props.theme.activeNavLinkHover};
    z-index: 1;
    transition: all 0.3s ease-in-out;
  }
    &::after {
     position: absolute;
    content: "";
    left: 0;
    top: 0;
    width: 0;
    height: 100%;
    background-color: ${(props) => props.theme.colorGreenDark};
    border-top-left-radius:5px;
    border-bottom-left-radius:5px;
     }

    a {
    font-weight:500;
    transition:all 0.3s ease-in-out;
    z-index:2;}
    i {
    display:flex;
    align-items:center;
    color:${(props) => props.theme.colorIcons};
    }
    &:hover {
    &::after {
    width:100%;
    }}
}
`;


export default Sidebar;
