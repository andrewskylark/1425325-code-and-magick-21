'use strict';
// валидация формы имени создания персонажа
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;
const usernameInput = document.querySelector(`.setup-user-name`);

usernameInput.addEventListener(`input`, () => {
  const valueLength = usernameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    usernameInput.setCustomValidity(`'Ещё ${(MIN_NAME_LENGTH - valueLength)} симв.`);
  } else if (valueLength > MAX_NAME_LENGTH) {
    usernameInput.setCustomValidity(`Удалите лишние ${(valueLength - MAX_NAME_LENGTH)} симв.`);
  } else {
    usernameInput.setCustomValidity(``);
  }
  usernameInput.reportValidity();
});
