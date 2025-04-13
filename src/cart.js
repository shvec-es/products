//Логіка сторінки Cart

import { getProductById } from './js/products-api.js';
import { getCart } from './js/storage.js';
import { renderProducts } from './js/render-function.js';

window.addEventListener('DOMContentLoaded', async () => {
  const ids = getCart();
  const productPromises = ids.map(id => getProductById(id));
  const products = await Promise.all(productPromises);
  renderProducts(products);
  // підрахунок total price, items
});
