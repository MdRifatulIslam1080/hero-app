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

  if (installedAppData.includes(id)) {
    toast.warn("already installed");
  } else {
    installedAppData.push(id);
    const data = JSON.stringify(installedAppData);
    localStorage.setItem("installList", data);
    toast.success(`Yahoo ⚡!! ${title} Installed Successfully
`);
  }
};
export { addToInstalledDB, getInstalledApp };
