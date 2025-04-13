//Описана робота модалки - відкриття закриття і все що з модалкою повʼязано

export const openModal = () => {
  refs.modal.classList.add('modal--is-open');
  document.addEventListener('keydown', onEscPress);
};

export const closeModal = () => {
  refs.modal.classList.remove('modal--is-open');
  document.removeEventListener('keydown', onEscPress);
};

const onEscPress = e => {
  if (e.key === 'Escape') closeModal();
};
