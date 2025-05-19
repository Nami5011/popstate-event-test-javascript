const popup = document.getElementById('popup');
const initialUrl = location.href;

const popstateEventHandler = () => {
  if (!popup || initialUrl !== location.href) return;
  popup.style.display = 'block';
};
history.pushState({}, '', location.href);
window.addEventListener('popstate', popstateEventHandler);

const closePopUp = () => {
  popup.style.display = 'none';
  history.pushState({}, '', location.href);
};
// When the user clicks Cancel button, close the modal
document.querySelector('.close').addEventListener('click', closePopUp);
// When the user clicks anywhere outside of the modal, close it
document.addEventListener('click', (event) => {
  if (event.target == popup) {
    closePopUp();
  }
});
