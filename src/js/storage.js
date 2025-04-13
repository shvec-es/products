//Робота з loacalStorage

const load = key => JSON.parse(localStorage.getItem(key)) || [];
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export const getWishlist = () => load('wishlist');
export const getCart = () => load('cart');

export const addToWishlist = id => {
  const list = getWishlist();
  if (!list.includes(id)) list.push(id);
  save('wishlist', list);
};

export const removeFromWishlist = id => {
  const list = getWishlist().filter(item => item !== id);
  save('wishlist', list);
};

export const addToCart = id => {
  const cart = getCart();
  if (!cart.includes(id)) cart.push(id);
  save('cart', cart);
};

export const removeFromCart = id => {
  const cart = getCart().filter(item => item !== id);
  save('cart', cart);
};
