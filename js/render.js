'use strict';

(() => {
  const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const WIZARDS_MAX_COUNT = 4;
  const similarListElement = document.querySelector(`.setup-similar-list`);
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
      .content
      .querySelector(`.setup-similar-item`);
  const userDialog = document.querySelector(`.setup`);
  const fragment = document.createDocumentFragment();

  const getWizardData = () => {
    return {
      name: `${window.util.getRandomFromArray(WIZARD_NAMES)} ${window.util.getRandomFromArray(WIZARD_SURNAMES)}`,
      coatColor: window.util.getRandomFromArray(window.consts.COAT_COLORS),
      eyesColor: window.util.getRandomFromArray(window.consts.EYES_COLORS)
    };
  };
  const generateWizard = (wizardData) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizardData.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizardData.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizardData.colorEyes;

    return wizardElement;
  };
  const renderWizards = (wizards) => {
    const wizardNum = wizards.length > WIZARDS_MAX_COUNT ?
      WIZARDS_MAX_COUNT :
      wizards.length;

    similarListElement.innerHTML = ``;

    for (let i = 0; i < wizardNum; i++) {
      getWizardData(wizards[i]);
      fragment.appendChild(generateWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };

  window.render = {
    renderWizards
  };
})();
