'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
const userDialog = document.querySelector(`.setup`);
const similarListElement = document.querySelector(`.setup-similar-list`);
const WIZARDS_NUMBER = 4;
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

function getRandom(max) {
  return Math.floor(Math.random() * max);
}
const getRandomFromArray = (array) => {
  return array[getRandom(array.length - 1)];
};
const fragment = document.createDocumentFragment();
const getWizardData = () => {
  return {
    name: `${getRandomFromArray(WIZARD_NAMES)} ${getRandomFromArray(WIZARD_SURNAMES)}`,
    coatColor: getRandomFromArray(COAT_COLORS),
    eyesColor: getRandomFromArray(EYES_COLORS)
  };
};
const getWizard = () => {
  const wizardData = getWizardData();
  const wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector(`.setup-similar-label`).textContent = wizardData.name;
  wizardElement.querySelector(`.wizard-coat`).style.fill = wizardData.coatColor;
  wizardElement.querySelector(`.wizard-eyes`).style.fill = wizardData.eyesColor;
  return wizardElement;
};
const renderWizards = () => {
  for (let i = 0; i < WIZARDS_NUMBER; i++) {
    fragment.appendChild(getWizard());
  }
  similarListElement.appendChild(fragment);
};
renderWizards();

userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
