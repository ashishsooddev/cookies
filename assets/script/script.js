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