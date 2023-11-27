import ProjectShortcut from './utils/ProjectShortcut';
import React, { useState } from 'react';

function ProjectPage() {
  const projects = [
    { title: 'B', version: '5.0.0', path: '/projeto-1', icon: '' },
    { title: 'Arojeto 2', version: '2.1.0', path: '/projeto-2', icon: '' },
    { title: 'Crojeto 3', version: '3.5.2', path: '/projeto-3', icon: '' },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Nome');

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortProjects = (sortBy) => {
    const sorted = [...filteredProjects].sort((a, b) => {
      if (sortBy === 'Nome') {
        return a.title.localeCompare(b.title, 'en', { sensitivity: 'base' });
      } else if (sortBy === 'Versão') {
        return b.version.localeCompare(a.version);
      }
      return 0;
    });
    return sorted;
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const sortedProjects = sortProjects(sortBy);

  return (
    <div className="bg-gray-400 min-h-screen">
      <div className="text-3xl p-4 flex justify-between">
        <p>Projetos</p>
        <button className="bg-gray-700 text-gray-300 text-sm px-4 py-2 rounded"> Adicionar Projeto </button>
      </div>
      <div className="ml-5 mr-5 rounded-lg flex justify-between items-center">
        <div className="search-header flex-grow">
          <input
            className="bg-gray-700 p-2 rounded-lg text-gray-300 w-full"
            type="text"
            placeholder="Pesquisar projeto..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filter-section ml-4">
          <label htmlFor="sort-by">Ordenar por:</label>
          <select id="sort-by" value={sortBy} onChange={handleSortChange}>
            <option value="Nome">Nome</option>
            <option value="Versão">Versão</option>
          </select>
        </div>
      </div>
      <div className="ProjectList p-4">
        {sortedProjects.map((project, index) => (
          <ProjectShortcut
            key={index}
            projectTitle={project.title}
            projectVersion={project.version}
            projectPath={project.path}
            projectIcon={project.icon}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
