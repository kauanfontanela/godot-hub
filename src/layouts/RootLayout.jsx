import { useLocation } from "react-router"
import { NavLink, Outlet } from "react-router-dom"
import { User, Box, DownloadCloud, Compass } from "feather-icons-react"

const pages = [
  { title: "Projetos", route: "/projects", icon: Box },
  { title: "Versões", route: "/versions", icon: DownloadCloud },
  { title: "Comunidade", route: "/community", icon: Compass }

]

const SidebarNavbar = () => {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login"

  return (
    <div className="flex" style={{ height: "100svh" }}>
      <aside className="w-64 bg-gray-800 p-2 text-white ">
        {/* Login block */}
        <NavLink to="/login" className="group" >
          <div className="flex items-center rounded-full p-1 mb-4 mt-3">
            <User className={`w-[42px] h-[42px] p-1 rounded-full bg-gray-600 group-hover:drop-shadow-[0px_1px_6px_rgba(255,255,255,.35)] group-hover:border-[1px] transition-all ${isLoginPage ? "drop-shadow-[0px_1px_6px_rgba(255,255,255,.35)] border-[1px]" : ""}`}></User>
            <span className="text-lg m-3 group-hover:drop-shadow-[0px_4px_12px_rgba(255,255,255,.44)] transition-all">Lorem Ipsum</span>
          </div>
        </NavLink>

        {/* Pages navlinks */}
        <ul>
          {pages.map((page, idx) => {
            const classNameApdx = location.pathname === page.route
              ? "from-gray-900"
              : "from-gray-700"

            return (<NavLink to={page.route}>
              <li key={idx} className={`my-1 px-1 bg-gradient-to-r rounded-full hover:ms-2 hover:from-gray-950 transition-all ${classNameApdx}`}>
                <div className="flex py-2">
                  <page.icon className="w-[22px] mx-3"></page.icon>
                  <p>{page.title}</p>
                </div>
              </li>
            </NavLink>)
          })}
        </ul>
      </aside>
      <div className="flex flex-1 flex-col">
        <Outlet />
      </div>
    </div>
  )
}

export default SidebarNavbar;