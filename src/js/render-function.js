//Функцію для створення, рендеру або видалення розмітки

export function renderCategories(categories, refs) {
  refs.categoriesList.innerHTML = categories
    .map(
      cat => `
      <li class="categories__item">
   <button class="categories__btn" type="button">${cat}</button>
 </li>
`
    )
    .join('');
}

export function renderProducts(products, refs) {
  refs.productsList.innerHTML += products
    .map(
      prod => `
      <li class="products__item" data-id="${prod.id}">
        <img class="products__image" src="${prod.thumbnail}" alt="${prod.title}"/>
        <p class="products__title">${prod.title}</p>
        <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${prod.brand}</p>
        <p class="products__category">Category: ${prod.category}</p>
        <p class="products__price">Price: $${prod.price}</p>
      </li>
`
    )
    .join('');
}

export function clearProducts(refs) {
  refs.productsList.innerHTML = '';
}

export function toggleNotFound(refs, visible) {
  refs.notFound.classList.toggle('not-found--visible', visible);
}
