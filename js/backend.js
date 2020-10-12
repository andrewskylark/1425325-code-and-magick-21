'use strict';
(() => {
  const URL_UP = `https://21.javascript.pages.academy/code-and-magick`;
  const URL_DOWN = `https://21.javascript.pages.academy/code-and-magick/data`;
  const TIMEOUT_IN_MS = 10000;
  const StatusCode = {
    OK: 200
  };

  const save = (data, onError, onLoad) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, () => {
      if (xhr.status === StatusCode.OK) {
        onLoad(xhr.response);
      } else {
        onError(`Произошла ошибка: ` + xhr.status + ` ` + xhr.statusText);
      }
    });
    xhr.addEventListener(`error`, () => {
      onError(`Произошла ошибка`);
    });

    xhr.open(`POST`, URL_UP);
    xhr.send(data);
  };

  const download = (onSuccess, onError) => {
    const xhr = new XMLHttpRequest();
    xhr.responseType = `json`;

    xhr.addEventListener(`load`, () => {
      if (xhr.status === StatusCode.OK) {
        onSuccess(xhr.response);
      } else {
        onError(`Статус ответа: ` + xhr.status + ` ` + xhr.statusText);
      }
    });
    xhr.addEventListener(`error`, () => {
      onError(`Произошла ошибка соединения`);
    });
    xhr.addEventListener(`timeout`, () => {
      onError(`Запрос не успел выполниться за ` + xhr.timeout + `mc`);
    });

    xhr.timeout = TIMEOUT_IN_MS;
    xhr.open(`GET`, URL_DOWN);
    xhr.send();
  };

  window.backend = {
    save,
    download
  };
})();
