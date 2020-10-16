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
      let randomElementIndex = Math.floor(Math.random() * array.length);
      return array[randomElementIndex];
    },
    createErrorMsg: (errorMsg) => {
      const divError = document.body.querySelector(`div.div-error`);
      if (divError) {
        divError.remove();
      }

      const node = document.createElement(`div`);
      node.style = `z-index: 100; margin: 0 auto; text-align: center; background-color: tomato;`;
      node.style.position = `absolute`;
      node.style.left = `0px`;
      node.style.right = `0px`;
      node.style.fontSize = `30px`;
      node.className = (`div-error`);
      node.textContent = errorMsg;
      document.body.insertAdjacentElement(`afterbegin`, node);
    }
  };
})();
