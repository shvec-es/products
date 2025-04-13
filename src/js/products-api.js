// Функції для роботи з бекендом

import axios from 'axios';

export const getCategories = async () => {
  const { data } = await axios('https://dummyjson.com/products/categories');
  return data;
};

export const getAllProducts = async (page = 1) => {
  const skip = (page - 1) * 12;
  const { data } = await axios(
    `https://dummyjson.com/products?limit=12&skip=${skip}`
  );
  return data;
};

export const getProductById = id =>
  fetch(`https://dummyjson.com/products/${id}`).then(res => res.json());

export const searchProducts = query =>
  fetch(`https://dummyjson.com/products/search?q=${query}`).then(res =>
    res.json()
  );

export const getProductsByCategory = (category, page = 1) => {
  const skip = (page - 1) * 12;
  return fetch(
    `https://dummyjson.com/products/category/${category}?limit=12&skip=${skip}`
  ).then(res => res.json());
};
