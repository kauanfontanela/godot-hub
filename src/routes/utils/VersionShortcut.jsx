import { Link } from 'react-router-dom';
// import { Folder } from 'feather-icons-react';

export default function versionShortcut({
  versionTitle,
  versionRelease,
  versionPath,
  versionType,
  versionAvailable,
}) {
  return (
    <div class="p-1">
      {/* {header} */}
      <div className="flex items-center justify-start w-full h-20 rounded-lg bg-gray-700 px-4">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-white-700">
              {versionTitle}
            </h2>
          </div>
          <div className="flex items-center">
            {/* <Folder className="w-3 h-3 mr-2 text-white" /> */}
            <p className="text-sm"> {versionRelease} </p>
          </div>
        </div>
        <div className="flex flex-row">
          {versionAvailable ? (
            <button className="mr-1 bg-green-700 text-gray-200 text-sm px-5 py-2 rounded transition-all hover:bg-green-600 hover:text-gray-200 hover:shadow-lg">
              Abrir
            </button>
          ) : (
            <button className="mr-1 bg-blue-700 text-white text-sm px-5 py-2 rounded transition-all hover:bg-blue-800 hover:text-white hover:shadow-lg">
              Download
            </button>
          )}
          <button className="mr-1 bg-gray-200 text-black text-sm px-5 py-2 rounded transition-all hover:bg-gray-400 hover:text-white hover:shadow-lg">
            News
          </button>
          <button className="bg-gray-200 text-black text-sm px-5 py-2 rounded transition-all hover:bg-gray-400 hover:text-white hover:shadow-lg">
            Changelog
          </button>
        </div>
      </div>
    </div>
  );
}
