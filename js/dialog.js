// открытие/закрытие окна выбора персонажа
'use strict';
const userDialogOpen = document.querySelector(`.setup-open`);
const userDialogClose = document.querySelector(`.setup-close`);
const userDialog = document.querySelector(`.setup`);

let onPopupEscPress = (evt) => {
  window.util.isEscEvt(evt, closePopup);
};
const openPopup = () => {
  userDialog.classList.remove(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};
const closePopup = () => {
  userDialog.classList.add(`hidden`);
  document.addEventListener(`keydown`, onPopupEscPress);
};

userDialogOpen.addEventListener(`click`, () => {
  openPopup();
});
userDialogOpen.addEventListener(`keydown`, (evt) => {
  window.util.isEnterEvt(evt, openPopup);
});
userDialogClose.addEventListener(`click`, () => {
  closePopup();
});
userDialogClose.addEventListener(`keydown`, (evt) => {
  window.util.isEnterEvt(evt, closePopup);
});

