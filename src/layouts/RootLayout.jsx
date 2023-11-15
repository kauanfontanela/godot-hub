import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
/* icons */
import InstallsIcon from "../assets/icons/InstallsIcon.svg";
import ProjectsIcon from "../assets/icons/ProjectsIcon.svg";
import CommunityIcon from "../assets/icons/CommunityIcon.svg";

const SidebarNavbar = () => {
  const liClass = "bg-transparent rounded-lg my-1 p-2 flex items-center hover:font-semibold"
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div class="flex h-screen bg-gray-200">
        {/* Sidebar */}
        <aside class="w-64 bg-gray-800 p-4 text-white">
          {/* Sidebar Content Goes Here */}
          <ul>
            <li class={liClass}>
              <img src={ProjectsIcon} alt="" class="w-4 h-4 mr-4" />
              <p>Projetos</p>
            </li>
            <li class={liClass}>
              <img src={InstallsIcon} alt="" class="w-4 h-4 mr-4" />
              <p class="">Versões</p>
            </li>
            <li class={liClass}>
              <img src={CommunityIcon} alt="" class="w-4 h-4 mr-4" />
              <p>Comunidade</p>
            </li>
            {/* <li class={liClass}>
              <p>Sobre</p>
            </li> */}
          </ul>
        </aside>

        {/* Main Content */}
        <div class="flex-1 flex flex-col overflow-hidden">
          {/* Page Content Goes Here */}
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SidebarNavbar;
