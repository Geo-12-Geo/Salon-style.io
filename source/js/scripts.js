function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add('show');
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove('show');
}
