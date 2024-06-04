// ==UserScript==
// @name         No radio
// @namespace    https://github.com/Astropilot
// @version      0.3.0
// @description  Remove annoying radio widget for multiple manga reader websites
// @author       Astropilot
// @license      MIT
// @homepage     https://github.com/Astropilot/webtoon_userscripts
// @homepageURL  https://github.com/Astropilot/webtoon_userscripts
// @supportURL   https://github.com/Astropilot/webtoon_userscripts/issues
// @downloadURL  https://raw.githubusercontent.com/Astropilot/webtoon_userscripts/main/src/no_radio.user.js
// @run-at       document-end
// @grant        none
// @noframes
// @match        *://*.hivescans.com/*
// @match        *://*.anigliscans.xyz/*
// ==/UserScript==

(function () {
  "use strict";

  document.querySelector("#radio_content")?.remove();
  document.querySelector("#theradios_content")?.remove();
})();
