import { Link } from 'react-router-dom';
import { Folder } from 'feather-icons-react';

export default function ProjectShortcut({
  projectTitle,
  projectVersion,
  projectPath,
}) {
  return (
    <div className="p-1">
      {/* {header} */}
      <div className="flex items-center justify-start w-full h-18 rounded-lg bg-gray-700 px-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6a/Godot_icon.svg"
          alt="Icon"
          className="w-16 h-16 mr-2 rounded-full"
        />
        <div className="flex flex-col">
          <div className="justify-between">
            <h2 className="text-xl font-semibold text-white-700">
              {projectTitle}
              <span className="text-xs text-gray-400 ml-2">
                {projectVersion}
              </span>
            </h2>
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
