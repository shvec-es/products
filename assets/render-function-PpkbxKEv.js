import{a as n}from"./vendor-N5iQpiFS.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const u=async()=>{const{data:o}=await n("https://dummyjson.com/products/categories");return o},l=async(o=1)=>{const s=(o-1)*12,{data:e}=await n(`https://dummyjson.com/products?limit=12&skip=${s}`);return e},d=o=>fetch(`https://dummyjson.com/products/${o}`).then(s=>s.json());function p(o,s){s.categoriesList.innerHTML=o.map(e=>`
      <li class="categories__item">
   <button class="categories__btn" type="button">${e}</button>
 </li>
`).join("")}function m(o,s){s.productsList.innerHTML+=o.map(e=>`
      <li class="products__item" data-id="${e.id}">
        <img class="products__image" src="${e.thumbnail}" alt="${e.title}"/>
        <p class="products__title">${e.title}</p>
        <p class="products__brand"><span class="products__brand--bold">Brand:</span> ${e.brand}</p>
        <p class="products__category">Category: ${e.category}</p>
        <p class="products__price">Price: $${e.price}</p>
      </li>
`).join("")}export{u as a,p as b,l as c,d as g,m as r};
//# sourceMappingURL=render-function-PpkbxKEv.js.map
