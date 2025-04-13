// Функції, які передаються колбеками в addEventListners

import { getAllProducts } from './products-api';

export const onCategoryClick = event => {
  /* Отримати категорію, зробити запит, перерендерити */
};

export const onProductClick = event => {
  /* Отримати ID, відкрити модалку */
};

export const onSearchSubmit = event => {
  /* Сабміт форми пошуку */
};

export const onClearSearch = () => {
  /* Очистити інпут пошуку */
};

export const onModalButtonClick = event => {
  // Додати/видалити з wishlist/cart, оновити лічильники, змінити текст кнопки
};
