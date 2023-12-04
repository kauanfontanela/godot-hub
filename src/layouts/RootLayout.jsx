import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import InstallsIcon from "../assets/icons/InstallsIcon.svg";
import ProjectsIcon from "../assets/icons/ProjectsIcon.svg";
import CommunityIcon from "../assets/icons/CommunityIcon.svg";
import ConfigIcon from "../assets/icons/ConfigIcon.svg";
import ProfilePictureIcon from "../assets/icons/ProfilePictureIcon.svg";
import { Link } from 'react-router-dom';
import { useUser } from "../routes/utils/ReactContext";

const sidebarItems = [
  { icon: ProjectsIcon, text: "Projetos", route: "/projects" },
  { icon: InstallsIcon, text: "Versões", route: "/versions" },
  { icon: CommunityIcon, text: "Comunidade", route: "/community" },
];

const SidebarNavbar = () => {
  const { user } = useUser(); // Obtendo o contexto do usuário

  // Se o usuário existir e tiver uma propriedade 'id', usamos seu 'id' como nome do usuário
  const userName = user && user.id ? user.id : "Anônimo";

  return (
    <>
      <div className="flex h-screen bg-gray-200">
        <aside className="w-64 bg-gray-800 p-4 text-white">
          <div className="flex items-center mt-5">
            <Link to="/login" className="me-2 hover:drop-shadow-[0px_4px_12px_rgba(255,255,255,.35)] transition-all">
              <img src={ProfilePictureIcon} alt="" width="42px" />
            </Link>
            <span className="text-sm">{userName}</span>
            <button to="/" className="ml-auto opacity-70 hover:opacity-100 hover:drop-shadow-[0px_4px_12px_rgba(255,255,255,.35)] transition-all">
              <img src={ConfigIcon} alt="" width="26px" />
            </button>
          </div>
          <hr className="border-gray-700 border-1 mt-7 mb-5" />
          <ul>
            {sidebarItems.map((item, index) => (
              <li className="bg-transparent rounded-lg flex items-center" key={index}>
                <NavLink to={item.route} className="flex items-center focus:outline-none hover:font-semibold opacity-70 hover:opacity-100 w-full h-full blur-[0.7px] hover:blur-none transition-all ps-1 py-3">
                  <img src={item.icon} alt="" className="mr-4" width="22px" />
                  <p>{item.text}</p>
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden bg-gray-700">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default SidebarNavbar;
