'use strict';
(() => {
// смена цветов по клику на волшебника
  const FIREBALL_COLORS = [`#ee4830`, `#30a8ee`, `#5ce6c0`, `#e848d5`, `#e6e848`];
  const COAT_COLORS = [`rgb(101, 137, 164)`, `rgb(241, 43, 107)`, `rgb(146, 100, 161)`, `rgb(56, 159, 117)`, `rgb(215, 210, 55)`, `rgb(0, 0, 0)`];
  const EYES_COLORS = [`black`, `red`, `blue`, `yellow`, `green`];
  const setupWizard = document.querySelector(`.setup-wizard`);
  const setupPlayer = document.querySelector(`.setup-player`);
  const wizardCoat = setupWizard.querySelector(`.wizard-coat`);
  const wizardCoatInput = setupPlayer.querySelector(`[name="coat-color"]`);
  const wizardEyes = setupWizard.querySelector(`.wizard-eyes`);
  const wizardEyesInput = setupPlayer.querySelector(`[name="eyes-color"]`);
  const wizardFireball = document.querySelector(`.setup-fireball-wrap`);
  const wizardFireballInput = wizardFireball.querySelector(`input`);

  function getRandom(max) {
    return Math.floor(Math.random() * max);
  }
  const getRandomFromArray = (array) => {
    return array[getRandom(array.length - 1)];
  };

  const setWizardColors = (wizardElement, wizardInput, array, field = `fill`) => {
    const color = getRandomFromArray(array);
    wizardElement.style[field] = color;
    wizardInput.value = color;
  };

  wizardCoat.addEventListener(`click`, () => setWizardColors(wizardCoat, wizardCoatInput, COAT_COLORS));
  wizardEyes.addEventListener(`click`, () => setWizardColors(wizardEyes, wizardEyesInput, EYES_COLORS));
  wizardFireball.addEventListener(`click`, () => setWizardColors(wizardFireball, wizardFireballInput, FIREBALL_COLORS, `backgroundColor`));
})();
