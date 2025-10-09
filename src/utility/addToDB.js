const getInstalledApp = () => {
  const installedAppSTR = localStorage.getItem("installList");

  if (installedAppSTR) {
    const installedAppData = JSON.parse(installedAppSTR);
    return installedAppData;
  } else {
    return [];
  }
};

const addToInstalledDB = (id) => {
  const installedAppData = getInstalledApp();

  if (installedAppData.includes(id)) {
    alert("you already installed this app");
  } else {
    installedAppData.push(id);
    const data = JSON.stringify(installedAppData);
    localStorage.setItem("installList", data);
  }
};
export { addToInstalledDB, getInstalledApp };
