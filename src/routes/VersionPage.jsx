import { listOnlineVersions } from '../data/VersionManager';
import VersionShortcut from './utils/VersionShortcut';
import React, { useState } from 'react';

const versions = await listOnlineVersions();

function VersionPage() {
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
    <div className="bg-gray-700 min-h-screen">
      <div className="text-3xl text-gray-300 p-4 flex justify-between">
        <p>Versões</p>
        <button className="bg-gray-800 text-gray-300 text-sm px-4 py-2 rounded transition-all hover:bg-blue-900 hover:shadow-lg">
          {' '}
          Localizar Versão{' '}
        </button>
      </div>
      <div className="ml-2 mr-5 rounded-lg flex justify-between items-center">
        <div className="search-header flex-grow">
          <input
            className="bg-gray-800 p-2 rounded-lg text-gray-300 w-full"
            type="text"
            placeholder="Pesquisar versão..."
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filter-section ml-4">
          <label htmlFor="sort-by">Ordenar por: </label>
          <select id="sort-by" value={sortBy} onChange={handleSortChange} className='rounded border border-black bg-gray-800 px-3 py-2 text-gray-300 focus:outline-none focus:border-gray-900'>
            <option value='Nome'>Nome</option>
            <option value='Versão'>Versão</option>
          </select>
        </div>
      </div>
      <div className="ProjectList m-2 p-2 bg-gray-900 rounded h-full overflow-y-auto">
        {sortedversions.map((project, index) => (
          <VersionShortcut
            key={index}
            versionTitle={project.title}
            versionDownloadURL={project.download}
            versionChangelogURL={project.changelog}
            versionNewsURL={project.news}
            versionAvailable={project.available}
          />
        ))}
      </div>
    </div>
  );
}

export default VersionPage;
