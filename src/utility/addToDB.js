import { toast } from "react-toastify";

const getInstalledApp = () => {
  const installedAppSTR = localStorage.getItem("installList");

  if (installedAppSTR) {
    const installedAppData = JSON.parse(installedAppSTR);
    return installedAppData;
  } else {
    return [];
  }
};

const addToInstalledDB = (id, title) => {
  const installedAppData = getInstalledApp();
  const stringId = id.toString();

  if (installedAppData.includes(stringId)) {
    toast.warn(`"${title}" is already installed.`);
    return false;
  } else {
    installedAppData.push(stringId);
    const data = JSON.stringify(installedAppData);
    localStorage.setItem("installList", data);
    toast.success(`Yahoo ⚡!! "${title}" Installed Successfully!`);
    return true;
  }
};

const removeAppFromInstalledDB = (id, title) => {
  const installedAppData = getInstalledApp();
  const stringId = id.toString();

  if (installedAppData.includes(stringId)) {
    const remaining = installedAppData.filter((appId) => appId !== stringId);
    const data = JSON.stringify(remaining);
    localStorage.setItem("installList", data);
    toast.info(`"${title}" successfully uninstalled.`);
    return true;
  } else {
    toast.error(`Error: "${title}" was not found in your installed list.`);
    return false;
  }
};

export { addToInstalledDB, getInstalledApp, removeAppFromInstalledDB };
