import { homedir } from 'os'

const fs = require('fs')
const ini = require('ini')
const Path = require('path')
const { exec } = require("child_process");

const listPath = homedir() + '/.godothub';

function getProjectList() {
    if (!fs.existsSync(listPath))
        fs.writeFileSync(listPath, '', 'utf8')

    return fs.readFileSync(listPath, 'utf8').split('\n');
}

function setProjectList(list) {
    fs.writeFileSync(listPath, list.join('\n'), 'utf8');
}

export const loadProject = function (projectPath) {
    if (!fs.existsSync(projectPath))
        return null

    const config = ini.parse(fs.readFileSync(projectPath, 'utf-8'))
    const application = config.application

    let title = application['config/name']

    let path = Path.dirname(projectPath)

    let features = application['config/features'];
    let match = features.match(/PackedStringArray\("([^"]*)"/);
    let version = match ? match[1] : "N/A";

    let resIconPath = application['config/icon'];
    let icon = "file://" + path + "/" + resIconPath.replace("res://", "");
    console.log(icon);

    return { title, version, icon, path }
}

export const loadRegisteredProjects = function () {
    var register = [];
    var projectList = getProjectList();
    register = projectList.map(loadProject).filter(obj => obj != null);
    return register;
}

export const registerProject = function (path) {
    var projectList = getProjectList();

    if (projectList.includes(path))
        return;

    projectList.push(path);
    setProjectList(projectList);
}

export const removeRegisteredProject = function (path) {
    var removedProjectList = getProjectList().filter(projectPath => {
        return Path.dirname(projectPath) != path
    });

    setProjectList(removedProjectList);
}

export const openProject = function (path, version) {
    const versionsDir = homedir() + "/Godot/"

    const availableVersions = fs.readdirSync(versionsDir).filter(file => file.includes(`v${version}`) && !file.endsWith(".zip"))

    return availableVersions.map(foundVersion => ({
        title: foundVersion,
        handler: function () {
            exec(`"${versionsDir + foundVersion}" --path "${path}" -e`, (error, stdout, stderr) => {
                console.log(error)
            });
        }
    }))
}
