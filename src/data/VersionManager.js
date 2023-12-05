import AdmZip from "adm-zip";
import { homedir } from "os";

const fs = require('fs');
const { exec } = require("child_process");
const { load } = require('cheerio');

const baseURL = "https://godotengine.org";

export const listOnlineVersions = async function () {
    var res = await (await fetch(baseURL + "/download/archive")).text();
    let $ = load(res);

    const listing = $('a.archive-version').toArray();
    const versionList = []

    for (const version of listing) {
        const title = version.children[1].attribs.id
        const url = version.attribs.href

        const data = await getVersionData(url)

        const fileName = data.download.split('/').pop().replace(".zip", "")
        const path = homedir() + "/Godot/" + fileName
        const available = fs.existsSync(path)

        versionList.push({ title, url, path, available, ...data })
    }

    return versionList;
}

const getVersionData = async function (versionURL) {
    var res = await (await fetch(baseURL + versionURL)).text();
    let $ = load(res);

    // get <a> element of class btn_changelog and log it's href
    const changelog = $('.btn-release-changelog').attr('href');
    const news = baseURL + $('.btn-release-notes').attr('href');

    const downloads = $('.btn-download-primary').toArray();
    const download = downloads.find(a => a.attribs.href.includes('win')).attribs.href;

    return { changelog, news, download }
}

export const downloadVersion = function (versionURL, callback) {
    fs.existsSync(homedir() + "/Godot") || fs.mkdirSync(homedir() + "/Godot");

    const name = versionURL.split('/').pop()

    exec(`curl -OL ${versionURL} --output-dir ${homedir()}/Godot`, (error, stdout, stderr) => {
        const zip = AdmZip(homedir() + "/Godot/" + name);
        zip.extractAllTo(homedir() + "/Godot/", true);
        callback(error)
    });
}

export const openVersion = function (path) {
    exec(`"${path}"`, (error, stdout, stderr) => {
        console.log(error)
    });
}
