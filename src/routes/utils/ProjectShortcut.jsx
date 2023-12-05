import { useState } from 'react';
import { X } from 'feather-icons-react';
import { openProject } from '../../data/ProjectManager';

export default function ProjectShortcut({
  projectTitle,
  projectVersion,
  projectPath,
  projectIcon,
  removeProjectHandler,
}) {
  const compatibleVersions = openProject(projectPath, projectVersion);
  const [isModalOpen, setIsModalOpen] = useState(false);


  const removeProject = function () {
    removeProjectHandler(projectPath);
  }

  return (<>
    <li className="flex items-center w-full h-18 p-2 bg-gray-800">
      <button className="flex group w-full" onClick={() => setIsModalOpen(true)}>
        <img src={projectIcon} alt="icon" className="w-16 h-16" />
        <div className="flex-col px-3 text-gray-300">
          <div className="flex font-semibold">
            <div className="text-xl group-hover:underline">
              {projectTitle}
            </div>
            <span className="text-sm h-min ms-4 mt-0.5 p-1 px-3 bg-gray-700 rounded-xl">{projectVersion}</span>
          </div>
          <span className="text-gray-400">
            {projectPath}
          </span>
        </div>
      </button>
      <button className="flex mb-10 p-1 hover:bg-red-700 rounded-full transition-all group" onClick={removeProject}>
        <X className="text-gray-300 ms-auto " />
      </button>
    </li>

    {isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center ms-64">
        <div className="bg-gradient-to-t to-gray-900 from-gray-800 drop-shadow-xl p-5 px-8 rounded-lg transition-all">
          <ul>
            {compatibleVersions.map(version => (
              <li className="text-lg text-gray-200 hover:drop-shadow-[0px_1px_6px_rgba(255,255,255,.44)]">
                <button className='w-full' onClick={version.handler}>{version.title}</button>
              </li>
            ))}
          </ul>
          <button className='text-sm text-white bg-gray-700 rounded-lg p-1 w-full mt-2' onClick={() => setIsModalOpen(false)}>
            CANCEL
          </button>
        </div>
      </div>
    )}
  </>)
}