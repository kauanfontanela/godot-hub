import { useState } from "react";
import ProjectShortcut from "./utils/ProjectShortcut";

import { loadRegisteredProjects, removeRegisteredProject, registerProject } from "../data/ProjectManager";
import { useRef } from "react";

export default function ProjectPage() {
  const inputProjectFileRef = useRef(null);
  const [projects, setProjects] = useState(loadRegisteredProjects());
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProjects = [...filteredProjects].sort((a, b) => {
    if (sortBy === "name") {
      return a.title.localeCompare(b.title, "en", { sensitivity: "base" });
    } else if (sortBy === "version") {
      return b.version.localeCompare(a.version);
    }
    return 0;
  });


  function spawnOpenProjectDialog() {
    inputProjectFileRef.current.click();
  }

  function openProjectHandler(e) {
    const filePath = e.target.files[0].path;
    registerProject(filePath);
    setProjects(loadRegisteredProjects());
  }

  function removeProjectHandler(path) {
    removeRegisteredProject(path);
    setProjects(loadRegisteredProjects());
  }

  return (
    <div className="bg-gray-800 px-6" style={{ height: "100svh" }}>
      <div className="flex items-center text-gray-100 mb-11">
        <h1 className="text-4xl mt-7">
          Projetos
        </h1>
        <input className="hidden" ref={inputProjectFileRef} type="file" accept=".godot" onChange={openProjectHandler} />
        <button className="font-semibold ms-auto p-1 mt-8 w-36 rounded-lg bg-[#478cbf] h-min" onClick={spawnOpenProjectDialog}>Localizar Projeto</button>
      </div>

      <div className="flex items-center mb-3">
        {/* TODO add search logo */}
        <input
          className="bg-gray-700 px-3 p-1 rounded-xl text-gray-100 placeholder-dray-400 w-full"
          type="text"
          placeholder="Filtrar projeto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="flex items-center filterSelection text-gray-300">
          <label className="ms-3 me-2 text-gray-400" htmlFor="sort-by">Ordem:</label>
          <select name="" id="sort-by" value={sortBy} className="rounded-xl bg-gray-700 p-1 w-28 text-center" onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Nome</option>
            <option value="version">Versão</option>
          </select>
        </div>
      </div>

      {/* project list */}
      <ul>
        {
          sortedProjects.map((project, index) => (
            <ProjectShortcut
              key={index}
              projectTitle={project.title}
              projectVersion={project.version}
              projectPath={project.path}
              projectIcon={project.icon}
              removeProjectHandler={removeProjectHandler}
            />
          ))
        }
      </ul>
    </div >
  )
}
