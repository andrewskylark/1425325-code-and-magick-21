'use strict';
(() => {
  const userDialog = document.querySelector(`.setup`);
  let coatColor = `rgb(101, 137, 164)`;
  let eyesColor = `black`;
  let wizards = [];
  window.savedColor = `rgb(101, 137, 164)`;

  const getRank = (wizard) => {
    let rank = 0;

    if (wizard.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizard.colorEyes === eyesColor) {
      rank += 1;
    }
    return rank;
  };
  const namesComparator = (a, b) => {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  };
  const updateWizards = () => {
    window.render.renderWizards(wizards.sort((a, b) => {
      let rankDiff = getRank(b) - getRank(a);
      if (rankDiff === 0) {
        rankDiff = namesComparator(a.name, b.name);
      }
      return rankDiff;
    }));
  };

  // window.colors.setCoatChangeHandler((color) => {
  //   coatColor = color;
  //   window.debounce(updateWizards);
  // });
  // window.colors.setEyesChangeHandler((color) => {
  //   eyesColor = color;
  //   window.debounce(updateWizards);
  // });
  window.colors.setEyesChangeHandler = window.debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  window.colors.setCoatChangeHandler = window.debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  const successHandler = (data) => {
    wizards = data;
    updateWizards();
  };
  const errorHandler = (errorMsg) => {
    window.utils.createErrorMsg(errorMsg);
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

