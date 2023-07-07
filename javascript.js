function toggleModal(imageSrc) {
  var modal = document.getElementById('modal');
  var modalImage = document.getElementById('modal-image');
  var modalClose = document.getElementById('modal-close');
  var modalCloseButton = document.getElementById('modal-close-button');
  var modalMessage = document.getElementById('modal-message');

  if (modal.style.display === 'block') {
    modal.style.display = 'none';
    modalImage.src = '';
    modalClose.classList.add('hidden');
    modalCloseButton.classList.add('hidden');
    modalMessage.classList.add('hidden');
  } else {
    modal.style.display = 'block';
    modalImage.src = imageSrc;
    modalClose.classList.remove('hidden');
    modalCloseButton.classList.remove('hidden');
    modalMessage.classList.remove('hidden');
  }
}

function closeWindow() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}