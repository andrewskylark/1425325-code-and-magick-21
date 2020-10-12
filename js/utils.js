'use strict';

(() => {
  const ESC_KEY = `Escape`;
  const ENTER_KEY = `Enter`;

  window.util = {
    isEscEvt: (evt, action) => {
      if (evt.key === ESC_KEY) {
        action();
      }
    },
    isEnterEvt: (evt, action) => {
      if (evt.key === ENTER_KEY) {
        action();
      }
    },
    getRandom: (max) => {
      return Math.floor(Math.random() * max);
    },
    getRandomFromArray: (array) => {
      return array[window.util.getRandom(array.length - 1)];
    }
  };
})();
