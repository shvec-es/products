//Логіка сторінки Wishlist

import { getProductById } from './js/products-api.js';
import { getWishlist } from './js/storage.js';
import { renderProducts } from './js/render-function.js';

window.addEventListener('DOMContentLoaded', async () => {
  const ids = getWishlist();
  const productPromises = ids.map(id => getProductById(id));
  const products = await Promise.all(productPromises);
  renderProducts(products);
});
