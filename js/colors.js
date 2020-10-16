'use strict';
(() => {
// смена цветов по клику на волшебника
  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const setupWizard = document.querySelector(`.setup-wizard`);
  const setupPlayer = document.querySelector(`.setup-player`);
  const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
  const wizardCoatInput = setupPlayer.querySelector(`[name="coat-color"]`);
  const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
  const wizardEyesInput = setupPlayer.querySelector(`[name="eyes-color"]`);
  const wizardFireball = document.querySelector(`.setup-fireball-wrap`);
  const wizardFireballInput = wizardFireball.querySelector(`input`);

  const setWizardColors = (wizardElement, wizardInput, array, field = `fill`) => {
    const color = window.util.getRandomFromArray(array);
    wizardElement.style[field] = color;
    wizardInput.value = color;
    window.savedColor = color;
  };

  wizardCoat.addEventListener(`click`, () => {
    setWizardColors(wizardCoat, wizardCoatInput, window.consts.COAT_COLORS);
    window.onCoatChange(window.savedColor);
  });
  wizardEyes.addEventListener(`click`, () => {
    setWizardColors(wizardEyes, wizardEyesInput, window.consts.EYES_COLORS);
    window.onEyesChange(window.savedColor);
  });
  wizardFireball.addEventListener(`click`, () => setWizardColors(wizardFireball, wizardFireballInput, FIREBALL_COLORS, `backgroundColor`));

  window.colors = {
    setCoatChangeHandler: (cb) => {
      window.onCoatChange = cb;
    },
    setEyesChangeHandler: (cb) => {
      window.onEyesChange = cb;
    }
  };
})();
