import { Link } from 'react-router-dom';
import { Folder } from 'feather-icons-react';
import { openProject } from '../../data/ProjectManager';
import { useState } from 'react';

const truncateStyle = {
  overflow: 'hidden',
  display: '-webkit-box',
  WebkitLineClamp: 1,
  WebkitBoxOrient: 'vertical',
};

export default function ProjectShortcut({
  projectTitle,
  projectVersion,
  projectPath,
  projectIcon,
  handleRemoveProject,
}) {
  const foundVersions = openProject(projectPath, projectVersion);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const requestOpenProject = function () {
    openProject(projectPath, projectVersion);
    setIsModalOpen(true);
  };

  const handleCloseModal = function () {
    setIsModalOpen(false);
  };

  const handleOpenProject = function (handler) {
    handler();
    handleCloseModal();
  }


  return (
    <>
      <div className="p-1">
        {/* {header} */}
        <div className="flex items-center justify-start w-full h-18 rounded-lg bg-gray-800 px-4 py-2">
          <img src={projectIcon} alt="Icon" className="w-16 h-16 mr-2" />
          <div className="flex flex-col w-full">
            <div className="flex">
              <div className="flex text-xl font-semibold text-gray-300" style={truncateStyle}>
                <a onClick={requestOpenProject}>{projectTitle}</a>
              </div>
              <div className="text-xs text-gray-400 ml-2 py-2">
                {projectVersion}
              </div>
              <button className="text-sm text-gray-400 font-bold ms-auto px-4 -me-2 pb-2 rounded" onClick={() => handleRemoveProject(projectPath)}>x</button>
            </div>
            <div className="flex items-center">
              <Folder className="w-3 h-3 mr-2 text-white" />
              <Link style={truncateStyle} to="/produtos" className="text-sm text-gray-400 hover:text-red-700">
                {projectPath}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center ps-[8rem] z-50">
          <div className="bg-white rounded-lg p-4">
            {/* <h2 className="text-xl font-semibold mb-4">Modal Title</h2> */}
            <ul className="mb-4">
              {foundVersions.map(version => {
                return (
                  <li>
                    <a onClick={() => handleOpenProject(version.handler)}>{version.title}</a>
                  </li>
                )
              })}
            </ul>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div >
      )
      }
    </>
  );
}
