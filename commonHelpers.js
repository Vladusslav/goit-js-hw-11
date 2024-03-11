import{S as c,i as l}from"./assets/vendor-5b791d57.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const u=new c(".photo-container a",{captionsData:"alt",captionDelay:250}),a={searchForm:document.querySelector(".search-form"),photoListEl:document.querySelector(".photo-list"),loader:document.querySelector(".loader")};function p(t){if(!t.ok)throw new Error(t.statusText);return t.json()}a.loader.style.display="none";a.searchForm.addEventListener("submit",d);function d(t){t.preventDefault();const s=t.currentTarget,r=s.elements.query.value.trim();if(a.photoListEl.innerHTML="",!r){l.show({message:"Please enter your request",position:"topRight",color:"yellow"});return}a.loader.style.display="inline-block",m(r).then(n=>{if(n.hits.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"center",color:"red"});return}f(n)}).catch(n=>console.log(n)).finally(()=>{a.loader.style.display="none",s.reset()})}function m(t){const s="https://pixabay.com/api",r="41870399-9b44301246ceb98c07efd626a",n=new URLSearchParams({key:r,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}),e=`${s}/?${n}`;return fetch(e).then(p)}function f({hits:t}){const s=t.map(r=>`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img
      class="gallery-image"
      src="${r.webformatURL}"
      alt="${r.tags}"
    />
  </a><div class="gallery-descr">
   <p>Likes: <br><span>${r.likes}</span></p>
   <p>Views: <br><span>${r.views}</span></p>
   <p>Comment: <br><span>${r.comments}</span></p>
   <p>Downloads: <br><span>${r.downloads}</span></p></div>
</li>`).join("");a.photoListEl.insertAdjacentHTML("beforeend",s),u.refresh()}
//# sourceMappingURL=commonHelpers.js.map
