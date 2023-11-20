import React, { useState } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
/* icons */
import InstallsIcon from "../assets/icons/InstallsIcon.svg";
import ProjectsIcon from "../assets/icons/ProjectsIcon.svg";
import CommunityIcon from "../assets/icons/CommunityIcon.svg";
import ConfigIcon from "../assets/icons/ConfigIcon.svg";
import ProfilePictureIcon from "../assets/icons/ProfilePictureIcon.svg";

const sidebarItems = [
  { icon: ProjectsIcon, text: "Projetos" },
  { icon: InstallsIcon, text: "Versões" },
  { icon: CommunityIcon, text: "Comunidade" },
];

const SidebarNavbar = () => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggleSidebar = () => {
  //   setIsOpen(!isOpen);
  // };

  return (
    <>
      <div class="flex h-screen bg-gray-200">
        <aside className="w-64 bg-gray-800 p-4 text-white">
          <div className="flex mt-5">
            {/* <button className="me-auto blur-[0.8px] hover:blur-none"> */}
            <button className="me-auto hover:drop-shadow-[0px_4px_12px_rgba(255,255,255,.35)] transition-all">
              <img src={ProfilePictureIcon} className="drop-shadow-[]" alt="" width="42px" />
            </button>

            <button className="ms-auto opacity-70 hover:opacity-100">
              <img src={ConfigIcon} alt="" width="26px" />
            </button>
          </div>

          <hr className="border-gray-700 border-1 mt-7 mb-5" />

          <ul>
            {sidebarItems.map((item, index) => (
              <li className="bg-transparent rounded-lg flex items-center" key={index}>
                <button className="flex items-centerfocus:outline-none hover:font-semibold opacity-70 hover:opacity-100 w-full h-full blur-[0.7px] hover:blur-none transition-all ps-1 py-3">
                  <img src={item.icon} alt="" className="mr-4" width="22px" />
                  <p>{item.text}</p>
                </button>
              </li>
            ))}
          </ul>
        </aside >

        {/* Main Content */}
        < div class="flex-1 flex flex-col overflow-hidden" >
          {/* Page Content Goes Here */}
          < Outlet />
        </div >
      </div >
    </>
  );
};

export default SidebarNavbar;
