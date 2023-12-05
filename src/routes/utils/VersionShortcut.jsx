import { LoadingSpinner } from './LoadingSpinner';
import { useState } from 'react';
import { downloadVersion, openVersion } from '../../data/VersionManager';

const shell = require('electron').shell


export default function VersionShortcut({
  versionTitle,
  versionDownloadURL,
  versionChangelogURL,
  versionNewsURL,
  versionAvailable,
  versionPath,
  downloadCallback
}) {
  const [isDownloading, setIsDownloading] = useState(false)

  function startDownload() {
    setIsDownloading(true)
    downloadVersion(versionDownloadURL, err => {
      if (!err) downloadCallback()
      setIsDownloading(false)
    });
  }

  return (
    <div className="p-1 text-gray-200">
      <div className="flex items-center justify-start wfull h-12">
        <h2 className="text-lg font-semibold">{versionTitle}</h2>
        {versionAvailable
          ? (<button className='ms-auto mx-2 w-24 bg-[#47bf8d] p-1 rounded-lg font-semibold' onClick={() => openVersion(versionPath)}>
            Abrir
          </button>)
          : (<button className='ms-auto mx-2 w-24 bg-[#478cbf] p-1 rounded-lg font-semibold' onClick={startDownload}>
            {isDownloading ? <LoadingSpinner /> : 'Baixar'}
          </button>)
        }
        <button className='mx-2 w-24 bg-gray-700 p-1 rounded-lg' onClick={() => shell.openExternal(versionNewsURL)}>Release</button>
        <button className='mx-2 w-24 bg-gray-700 p-1 rounded-lg' onClick={() => shell.openExternal(versionChangelogURL)}>Changelog</button>
      </div>
      <hr className='border-gray-700 border-dashed' />
    </div >
  );
}