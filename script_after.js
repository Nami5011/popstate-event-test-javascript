const popup = document.getElementById('popup');
const initialUrl = location.href;

const popstateEventHandler = () => {
  if (!popup || initialUrl !== location.href) return;
  popup.style.display = 'block';
};
window.addEventListener('popstate', popstateEventHandler);
const shortGestureName = window.ontouchend === null ? 'touchend' : 'click';
document.addEventListener(
  shortGestureName,
  (event) => {
    history.pushState({ page: 1 }, '', location.href);
  },
  {
    once: true,
  }
);

const closePopUp = () => {
  popup.style.display = 'none';
  history.pushState({ page: 1 }, '', location.href);
};
// When the user clicks Cancel button, close the modal
document.querySelector('.close').addEventListener('click', closePopUp);
// When the user clicks anywhere outside of the modal, close it
document.addEventListener('click', (event) => {
  if (event.target == popup) {
    closePopUp();
  }
});
