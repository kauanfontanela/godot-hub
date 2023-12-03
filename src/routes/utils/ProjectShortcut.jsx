import { Link } from 'react-router-dom';
import { Folder } from 'feather-icons-react';
import { removeRegisteredProject } from '../../data/ProjectManager';

function handleRemoveProject(path) {
  removeRegisteredProject(path);
  // REVIEW reload ou useState
  window.location.reload();
}

export default function ProjectShortcut({
  projectTitle,
  projectVersion,
  projectPath,
  projectIcon,
}) {
  return (
    <div class="p-1">
      {/* {header} */}
      <div className="flex items-center justify-start w-full h-18 rounded-lg bg-gray-700 px-4 py-2">
        <img
          src={projectIcon}
          alt="Icon"
          className="w-16 h-16 mr-2"
        />
        <div className="flex flex-col w-full">
          <div className="flex">
            <div className="flex text-xl font-semibold text-white-700">
              {projectTitle}
            </div>
            <div className="text-xs text-gray-400 ml-2 py-2">
              {projectVersion}
            </div>
            <button className="text-sm text-gray-400 font-bold ms-auto px-4 -me-2 pb-2 rounded" onClick={() => handleRemoveProject(projectPath)}>x</button>
          </div>
          <div className="flex items-center">
            <Folder className="w-3 h-3 mr-2 text-white" />
            <Link
              to="/produtos"
              className="text-sm text-gray-400 hover:text-red-700"
            >
              {projectPath}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
