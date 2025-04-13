//Логіка сторінки Home

import {
  getCategories,
  getAllProducts,
  getProductsByCategory,
} from './js/products-api.js';
import { renderCategories, renderProducts } from './js/render-function.js';
import {
  onCategoryClick,
  onProductClick,
  onSearchSubmit,
  onClearSearch,
} from './js/handlers.js';
import { refs } from './js/refs.js';

let currentPage = 1;

window.addEventListener('DOMContentLoaded', async () => {
  const categories = await getCategories();
  const catName = categories.map(cat => cat.name);
  renderCategories(['All', ...catName], refs);

  const productsData = await getAllProducts(currentPage);
  renderProducts(productsData.products, refs);

  refs.loadMoreBtn.addEventListener('click', async () => {
    currentPage++;
    const productsData = await getAllProducts(currentPage);
    renderProducts(productsData.products, refs);
  });
  refs.categoriesList.addEventListener('click', onCategoryClick);
  refs.productsList.addEventListener('click', onProductClick);
  refs.searchForm.addEventListener('submit', onSearchSubmit);
  refs.clearSearchBtn.addEventListener('click', onClearSearch);
});
