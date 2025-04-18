import{a as b,S as w,i as v}from"./assets/vendor-CwNK-mcT.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function d(t,o){const r={params:{key:"48678129-2163769dcaa82a491114adb07",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}};try{return(await b.get("https://pixabay.com/api/",r)).data}catch(a){throw console.error("Error fetching images:",a),a}}const L="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3c!--%20Magnifying%20Glass%20--%3e%3ccircle%20cx='10'%20cy='10'%20r='7'%20stroke='%23fff'%20stroke-width='2'%20/%3e%3cline%20x1='15'%20y1='15'%20x2='21'%20y2='21'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c!--%20Cross%20inside%20the%20lens%20--%3e%3cline%20x1='7'%20y1='7'%20x2='13'%20y2='13'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3cline%20x1='13'%20y1='7'%20x2='7'%20y2='13'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c/svg%3e",l=document.querySelector(".gallery"),u=document.querySelector(".loader-box"),h=document.querySelector(".load-more");let x=new w(".gallery a",{captionsData:"alt",captionDelay:250});function m(t){const o=t.map(({webformatURL:r,largeImageURL:a,tags:e,likes:s,views:i,comments:y,downloads:p})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${a}">
              <figure class="thumb-container">
                <img
                  class="thumb-image"
                  src="${r}"
                  data-source="${a}"
                  alt="${e}"
                />
                <figcaption class="thumb-data">
                  <dl class="thumb-data-list">
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Likes</dt>
                      <dd class="thumb-data-data">${s}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Views</dt>
                      <dd class="thumb-data-data">${i}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Comments</dt>
                      <dd class="thumb-data-data">${y}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Downloads</dt>
                      <dd class="thumb-data-data">${p}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </a>
          </li>`).join("");l.insertAdjacentHTML("beforeend",o),x.refresh()}function S(){l.innerHTML=""}function f(){l.classList.add("hidden"),u.classList.remove("hidden")}function g(){l.classList.remove("hidden"),u.classList.add("hidden")}function q(){h.classList.remove("hidden")}function k(){h.classList.add("hidden")}function $(){v.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",iconUrl:L,maxWidth:"432px",backgroundColor:"#EF4040"})}const M=document.querySelector("form"),B=document.querySelector("#search-text");let n="",c=1,E=0;M.addEventListener("submit",async t=>{if(t.preventDefault(),n=B.value.trim(),!n){iziToast.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}c=1,S(),f();try{const o=await d(n,c);E=o.totalHits,o.hits.length===0?$():(m(o.hits),q())}catch(o){console.error(o)}finally{g()}});document.querySelector(".load-more").addEventListener("click",async()=>{c+=1,f();try{const t=await d(n,c);t.hits.length===0?(k(),iziToast.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):(m(t.hits),H())}catch(t){console.error(t)}finally{g()}});function H(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
