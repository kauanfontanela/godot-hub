import { LoadingSpinner } from './LoadingSpinner';
import { useState, version } from 'react';
import { downloadVersion, openVersion } from '../../data/VersionManager';

const shell = require('electron').shell


export default function versionShortcut({
  versionTitle,
  versionDownloadURL,
  versionChangelogURL,
  versionNewsURL,
  versionAvailable,
  versionPath
}) {
  const [isAvailable, setIsAvailable] = useState(versionAvailable)
  const [isDownloading, setIsDownloading] = useState(false)

  function startDownload() {
    setIsDownloading(true)
    downloadVersion(versionDownloadURL, err => {
      if (!err) setIsAvailable(true)
      setIsDownloading(false)
    });
  }

  return (
    <div className="p-1">
      {/* {header} */}
      <div className="flex items-center justify-start w-full h-20 rounded-lg bg-gray-800 px-4">
        <div className="flex flex-col w-full">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-300">
              {versionTitle}
            </h2>
          </div>
        </div>
        <div className="flex flex-row">
          {isAvailable ? (
            <button className="mr-1 bg-green-700 text-gray-200 text-sm px-5 py-2 rounded transition-all hover:bg-green-600 hover:text-gray-200 hover:shadow-lg" onClick={() => openVersion(versionPath)}>
              Abrir
            </button>
          ) : (
            <button className="mr-1 bg-blue-700 text-white text-sm px-5 py-2 rounded transition-all hover:bg-blue-800 hover:text-white hover:shadow-lg" onClick={startDownload}>
              {isDownloading ? <LoadingSpinner /> : 'Baixar'}
            </button>
          )}
          <button className="mr-1 bg-gray-200 text-black text-sm px-5 py-2 rounded transition-all hover:bg-gray-400 hover:text-white hover:shadow-lg" onClick={() => shell.openExternal(versionNewsURL)} >
            News
          </button>
          <button className="bg-gray-200 text-black text-sm px-5 py-2 rounded transition-all hover:bg-gray-400 hover:text-white hover:shadow-lg" onClick={() => shell.openExternal(versionChangelogURL)}>
            Changelog
          </button>
        </div>
      </div>
    </div >
  );
}
