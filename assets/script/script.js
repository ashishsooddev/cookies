'use strict';

function setCookie(name, value, seconds) {
  document.cookie = name + "=" + value + ";max-age=" + seconds + ";path=/";
}