'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
const MIN_NAME_LENGTH = 2;
const MAX_NAME_LENGTH = 25;
const userDialog = document.querySelector(`.setup`);
const userDialogOpen = document.querySelector(`.setup-open`);
const userDialogClose = document.querySelector(`.setup-close`);
// открытие/закрытие окна выбора персонажа
const onPopupEscPress = function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    closePopup();
  }
};
const openPopup = function () {
  userDialog.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};
const closePopup = function () {
  userDialog.classList.add(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

userDialogOpen.addEventListener(`click`, function () {
  openPopup();
});
userDialogOpen.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    openPopup();
  }
});
userDialogClose.addEventListener(`click`, function () {
  closePopup();
});
userDialogClose.addEventListener(`keydown`, function (evt) {
  if (evt.key === `Enter`) {
    closePopup();
  }
});

const similarListElement = document.querySelector(`.setup-similar-list`);
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

function getRandom(max) {
  return Math.floor(Math.random() * max);
}
const wizards = [
  {
    name: `${WIZARD_NAMES[getRandom(WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES.length)]}`,
    coatColor: COAT_COLORS[getRandom(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandom(EYES_COLORS.length)]
  },
  {
    name: `${WIZARD_NAMES[getRandom(WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES.length)]}`,
    coatColor: COAT_COLORS[getRandom(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandom(EYES_COLORS.length)]
  },
  {
    name: `${WIZARD_NAMES[getRandom(WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES.length)]}`,
    coatColor: COAT_COLORS[getRandom(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandom(EYES_COLORS.length)]
  },
  {
    name: `${WIZARD_NAMES[getRandom(WIZARD_NAMES.length)]} ${WIZARD_SURNAMES[getRandom(WIZARD_SURNAMES.length)]}`,
    coatColor: COAT_COLORS[getRandom(COAT_COLORS.length)],
    eyesColor: EYES_COLORS[getRandom(EYES_COLORS.length)]
  }
];
const renderWizard = function (wizard) {
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizard.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizard.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizard.eyesColor;
  return wizardElement;
};
const fragment = document.createDocumentFragment();
for (let i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
// валидация формы имени создания персонажа
const usernameInput = document.querySelector(`.setup-user-name`);

usernameInput.addEventListener(`input`, function () {
  const valueLength = usernameInput.value.length;

  if (valueLength < MIN_NAME_LENGTH) {
    usernameInput.setCustomValidity(`'Ещё ${(MIN_NAME_LENGTH - valueLength)} симв.`);
  } else if (valueLength > MIN_NAME_LENGTH) {
    usernameInput.setCustomValidity(`Удалите лишние ${(valueLength - MAX_NAME_LENGTH)} симв.`);
  } else {
    usernameInput.setCustomValidity(``);
  }
  usernameInput.reportValidity();
});
// смена цветов по клику на волшебника
const setupWizard = document.querySelector(`.setup-wizard`);
const setupPlayer = document.querySelector(`.setup-player`);
const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
const wizardEyes = setupWizard.querySelector(`.eyes-color`);
const wizardFireball = document.querySelector(`.setup-fireball-wrap`);

const getRandomFromArray = function (array) {
  return array[getRandom(0, array.length - 1)];
};

wizardCoat.addEventListener(`click`, function () {
  wizardCoat.style.fill = `getRandomFromArray(COAT_COLORS)`;
  // wizardCoatInput.value = wizardCoat.style.fill.value;
  // console.log(wizardCoat.style.fill);
});
