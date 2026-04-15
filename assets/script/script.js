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
getcookies();