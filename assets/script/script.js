'use strict';

function setCookie(name, value, seconds) {
  document.cookie = name + "=" + value + ";max-age=" + seconds + ";path=/";
}

function getCookie(name) {
  let cookies = document.cookie.split(";");
  for (let i = 0; i < cookies.length; i++) {
    let cook = cookies[i].trim();

    if (cook.indexOf(name + "=") === 0) {
      return cook.substring(name.length + 1);
    }
  }
  return "";
}

function getBrowserName() {
  let data = navigator.userAgent;

  if (data.indexOf("Chrome") !== -1) {
    return "Chrome";
  } else if (data.indexOf("Firefox") !== -1) {
    return "Firefox";
  } else if (data.indexOf("Safari") !== -1) {
    return "Safari";
  } else {
    return "Unknown Browser";
  }
}

function getOSName() {
  let systemInfo = navigator.userAgent;

  if (systemInfo.indexOf("Win") !== -1) {
    return "Windows";
  }else if (systemInfo.indexOf("Mac") !== -1) {
    return "MacOS";
  }else if (systemInfo.indexOf("Linux") !== -1) {
    return "Linux";
  }else {
    return "Unknown OS";
  }
}

window.addEventListener("load", function () {
  const dialog = document.getElementById("dialoguebox");
  const settings = document.getElementById("settingsbox");
  const acceptBtn = document.getElementById("acceptAll");
  const settingsBtn = document.getElementById("openSettings");
  const saveBtn = document.getElementById("saveSettings");

  setTimeout(() => {
    if (!getCookie("userChoice")) {
     dialog.style.display = "flex";
     dialog.style.justifyContent = "center";
     dialog.style.alignItems = "center";
    }
  }, 10000);

  acceptBtn.onclick = function () {
    setAllCookies();
    dialog.style.display = "none";
  };

  settingsBtn.onclick = function () {
    settings.style.display = "flex";
    settings.style.justifyContent = "center";
    settings.style.alignItems = "center";
  };

  saveBtn.onclick = function () {
    let browser = document.getElementById("browser").checked;
    let os = document.getElementById("os").checked;
    let screenSize = document.getElementById("screen").checked;
    let anySelected = false;

    if (browser) {
      setCookie("browser", getBrowserName(), 20);
      anySelected = true;
    }

    if (os) {
      setCookie("os", getOSName(), 20);
      anySelected = true;
    }

    if (screenSize) {
      setCookie("screen", screen.width + "x" + screen.height, 20);
      anySelected = true;
    }

    if (!anySelected) {
      setCookie("userChoice", "rejected", 20);
    } else {
      setCookie("userChoice", "custom", 20);
    }

    settings.style.display = "none";
    dialog.style.display ="none";
  };
});