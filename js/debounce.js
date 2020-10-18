'use strict';
// (function () {
//   const DEBOUNCE_INTERVAL = 500; // ms

//   let lastTimeout;
//   window.debounce = function (cb) {
//     if (lastTimeout) {
//       window.clearTimeout(lastTimeout);
//     }
//     lastTimeout = window.setTimeout(cb, DEBOUNCE_INTERVAL);
//   };
// })();
// Файл debounce.js

(function () {
  let DEBOUNCE_INTERVAL = 500; // ms

  window.debounce = function (cb) {
    let lastTimeout = null;

    return function (...args) {
      // let parameters = arguments;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        cb.apply(null, [...args]);
      }, DEBOUNCE_INTERVAL);
    };
  };
})();
