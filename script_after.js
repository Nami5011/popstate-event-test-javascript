const popup = document.getElementById('popup');
const initialUrl = location.href;

const popstateEventHandler = () => {
  document.getElementById('message').innerText = 'popstate was fired';
  if (!popup) {
    document.getElementById('message').innerText = 'popstate was fired. popup is undefined.';
    alert('popup is undefined.');
  }
  if (!popup || initialUrl !== location.href) return;
  popup.style.display = 'block';
};
const shortGestureName = window.ontouchend === null ? 'touchend' : 'click';
window.addEventListener(
  shortGestureName,
  (event) => {
    document.getElementById('message').innerText = `${shortGestureName} was fired`;
    history.pushState({ page: 1 }, '', location.href);
    window.addEventListener('popstate', popstateEventHandler);
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
window.addEventListener('click', (event) => {
  if (event.target == popup) {
    closePopUp();
  }
});
