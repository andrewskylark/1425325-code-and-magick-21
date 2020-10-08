'use strict';

const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
const similarListElement = document.querySelector(`.setup-similar-list`);
const WIZARDS_NUMBER = 4;
const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
    .content
    .querySelector(`.setup-similar-item`);

const fragment = document.createDocumentFragment();
const getWizardData = () => {
  return {
    name: `${window.util.getRandomFromArray(WIZARD_NAMES)} ${window.util.getRandomFromArray(WIZARD_SURNAMES)}`,
    coatColor: window.util.getRandomFromArray(window.consts.COAT_COLORS),
    eyesColor: window.util.getRandomFromArray(window.consts.EYES_COLORS)
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

window.consts.userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
