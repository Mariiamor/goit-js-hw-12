import{a as S,S as q,i as d}from"./assets/vendor-CwNK-mcT.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function m(o,e){const s={params:{key:"48678129-2163769dcaa82a491114adb07",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}};try{return(await S.get("https://pixabay.com/api/",s)).data}catch(a){throw console.error("Error fetching images:",a),a}}const k="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3c!--%20Magnifying%20Glass%20--%3e%3ccircle%20cx='10'%20cy='10'%20r='7'%20stroke='%23fff'%20stroke-width='2'%20/%3e%3cline%20x1='15'%20y1='15'%20x2='21'%20y2='21'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c!--%20Cross%20inside%20the%20lens%20--%3e%3cline%20x1='7'%20y1='7'%20x2='13'%20y2='13'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3cline%20x1='13'%20y1='7'%20x2='7'%20y2='13'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c/svg%3e",u=document.querySelector(".gallery"),f=document.querySelector(".loader-box"),g=document.querySelector(".load-more");let M=new q(".gallery a",{captionsData:"alt",captionDelay:250});function y(o){const e=o.map(({webformatURL:s,largeImageURL:a,tags:t,likes:r,views:n,comments:L,downloads:x})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${a}">
              <figure class="thumb-container">
                <img
                  class="thumb-image"
                  src="${s}"
                  data-source="${a}"
                  alt="${t}"
                />
                <figcaption class="thumb-data">
                  <dl class="thumb-data-list">
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Likes</dt>
                      <dd class="thumb-data-data">${r}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Views</dt>
                      <dd class="thumb-data-data">${n}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Comments</dt>
                      <dd class="thumb-data-data">${L}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Downloads</dt>
                      <dd class="thumb-data-data">${x}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </a>
          </li>`).join("");u.insertAdjacentHTML("beforeend",e),M.refresh()}function P(){u.innerHTML=""}function p(){u.classList.add("hidden"),f.classList.remove("hidden")}function b(){u.classList.remove("hidden"),f.classList.add("hidden")}function E(){g.classList.remove("hidden")}function h(){g.classList.add("hidden")}function B(){d.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",iconUrl:k,maxWidth:"432px",backgroundColor:"#EF4040"})}const $=document.querySelector("form"),H=document.querySelector("#search-text"),C=document.querySelector(".load-more");let c="",i=1,l=0;const w=40;$.addEventListener("submit",async o=>{if(o.preventDefault(),c=H.value.trim(),i=1,l=0,!c){d.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}P(),h(),p();try{const e=await m(c,i);if(l=e.totalHits,e.hits.length===0){B();return}y(e.hits);const s=Math.ceil(l/w);i<s&&E()}catch(e){v(e)}finally{b()}});C.addEventListener("click",async()=>{i+=1,p();try{const o=await m(c,i);y(o.hits),O();const e=Math.ceil(l/w);i>=e&&(h(),d.info({title:"End of Results",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch(o){v(o)}finally{b()}});function O(){const o=document.querySelector(".gallery-item");if(o){const e=o.getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}}function v(o){console.error("Fetch error:",o),h(),d.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}
//# sourceMappingURL=index.js.map
