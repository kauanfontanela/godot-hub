import { useState } from "react"
import { listOnlineVersions, remapVersionList } from "../data/VersionManager"
import VersionShortcut from "./utils/VersionShortcut";


const onlineVersionList = await listOnlineVersions();

export default function VersionPage() {
  const [versionList, setVersionList] = useState(remapVersionList(onlineVersionList))
  const [searchTerm, setSearchTerm] = useState("")

  // const filteredVersions = versionList
  const filteredVersions = versionList.filter((version) =>
    version.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-gray-800 px-6" style={{ height: "100svh" }}>
      <div className="flex items-center text-gray-100 mb-11">
        <h1 className="text-4xl mt-7">
          Versões
        </h1>
      </div>

      <div className="flex items-center mb-3">
        <input
          className="bg-gray-700 px-3 p-1 rounded-xl text-gray-100 placeholder-dray-400 w-full"
          type="text"
          placeholder="Encontrar versão..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* version list */}
      <ul className="overflow-y-auto" style={{ height: "calc(100svh - 160px)" }}>
        {filteredVersions.map((version, index) => (
          <VersionShortcut
            key={index}
            versionTitle={version.title}
            versionDownloadURL={version.download}
            versionChangelogURL={version.changelog}
            versionNewsURL={version.news}
            versionAvailable={version.available}
            versionPath={version.path}
            downloadCallback={() => setVersionList(remapVersionList(onlineVersionList))}
          />
        ))}
      </ul>
    </div >
  )
}