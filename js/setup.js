'use strict';
(() => {
  const WIZARD_NAMES = [`Иван`, `Хуан Себастьян`, `Мария`, `Кристоф`, `Виктор`, `Юлия`, `Люпита`, `Вашингтон`];
  const WIZARD_SURNAMES = [`да Марья`, `Верон`, `Мирабелла`, `Вальц`, `Онопко`, `Топольницкая`, `Нионго`, `Ирвинг`];
  const similarListElement = document.querySelector(`.setup-similar-list`);
  const WIZARDS_COUNT = 4;
  const similarWizardTemplate = document.querySelector(`#similar-wizard-template`)
      .content
      .querySelector(`.setup-similar-item`);
  const fragment = document.createDocumentFragment();
  const userDialog = document.querySelector(`.setup`);

  const getWizardData = () => {
    return {
      name: `${window.util.getRandomFromArray(WIZARD_NAMES)} ${window.util.getRandomFromArray(WIZARD_SURNAMES)}`,
      coatColor: window.util.getRandomFromArray(window.consts.COAT_COLORS),
      eyesColor: window.util.getRandomFromArray(window.consts.EYES_COLORS)
    };
  };
  const getWizard = (wizardData) => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector(`.setup-similar-label`).textContent = wizardData.name;
    wizardElement.querySelector(`.wizard-coat`).style.fill = wizardData.colorCoat;
    wizardElement.querySelector(`.wizard-eyes`).style.fill = wizardData.colorEyes;

    return wizardElement;
  };

  const successHandler = (wizards) => {
    for (let i = 0; i < WIZARDS_COUNT; i++) {
      getWizardData(wizards[i]);
      fragment.appendChild(getWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector(`.setup-similar`).classList.remove(`hidden`);
  };
  const errorHandler = (errorMsg) => {
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
  };
  const form = userDialog.querySelector(`.setup-wizard-form`);
  const submitHandler = (evt) => {
    window.backend.save(new FormData(form), errorHandler, () => {
      userDialog.classList.add(`hidden`);
    });
    evt.preventDefault();
  };

  window.backend.download(successHandler, errorHandler);
  form.addEventListener(`submit`, submitHandler);
})();

