import VersionShortcut from './utils/VersionShortcut';
import React, { useState } from 'react';

function VersionPage() {
  const versions = [
    {
      title: 'Godot V4.2',
      release: '5.0.0',
      path: '/projeto-1',
      icon: '',
      available: true,
    },
    {
      title: 'Godot V4.1',
      release: '2.1.0',
      path: '/projeto-2',
      icon: '',
      available: false,
    },
    {
      title: 'Godot V3.5',
      release: '3.5.2',
      path: '/projeto-3',
      icon: '',
      available: true,
    },
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('Nome');

  const filteredVersions = versions.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortVersions = (sortBy) => {
    const sorted = [...filteredVersions].sort((a, b) => {
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

  const sortedversions = sortVersions(sortBy);

  return (
    <div className="bg-gray-400 min-h-screen">
      <div className="text-3xl p-4 flex justify-between">
        <p>Versões</p>
        <button className="bg-gray-700 text-gray-300 text-sm px-4 py-2 rounded">
          {' '}
          Localizar Versão{' '}
        </button>
      </div>
      <div className="ml-5 mr-5 rounded-lg flex justify-between items-center">
        <div className="search-header flex-grow">
          <input
            className="bg-gray-700 p-2 rounded-lg text-gray-300 w-full"
            type="text"
            placeholder="Pesquisar versão..."
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
        {sortedversions.map((project, index) => (
          <VersionShortcut
            key={index}
            versionTitle={project.title}
            versionRelease={project.release}
            versionPath={project.path}
            versionAvailable={project.available}
          />
        ))}
      </div>
    </div>
  );
}

export default VersionPage;
