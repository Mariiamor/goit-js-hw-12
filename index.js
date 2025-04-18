import{a as f,S as g,i as n}from"./assets/vendor-CwNK-mcT.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function p(o){const s={params:{key:"48678129-2163769dcaa82a491114adb07",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}};return f.get("https://pixabay.com/api/",s)}const y="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%20%3e%3c!--%20Magnifying%20Glass%20--%3e%3ccircle%20cx='10'%20cy='10'%20r='7'%20stroke='%23fff'%20stroke-width='2'%20/%3e%3cline%20x1='15'%20y1='15'%20x2='21'%20y2='21'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c!--%20Cross%20inside%20the%20lens%20--%3e%3cline%20x1='7'%20y1='7'%20x2='13'%20y2='13'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3cline%20x1='13'%20y1='7'%20x2='7'%20y2='13'%20stroke='%23fff'%20stroke-width='2'%20stroke-linecap='round'%20/%3e%3c/svg%3e",l=document.querySelector(".gallery"),c=document.querySelector(".loader-box");let b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function v(o){const s=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:r,comments:m,downloads:h})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${a}">
              <figure class="thumb-container">
                <img
                  class="thumb-image"
                  src="${i}"
                  data-source="${a}"
                  alt="${e}"
                />

                <figcaption class="thumb-data">
                  <dl class="thumb-data-list">
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Likes</dt>
                      <dd class="thumb-data-data">${t}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Views</dt>
                      <dd class="thumb-data-data">${r}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Comments</dt>
                      <dd class="thumb-data-data">${m}</dd>
                    </div>
                    <div class="thumb-data-item">
                      <dt class="thumb-data-title">Downloads</dt>
                      <dd class="thumb-data-data">${h}</dd>
                    </div>
                  </dl>
                </figcaption>
              </figure>
            </a>
          </li>
        `).join("");l.innerHTML=s,b.refresh(),u()}function w(){l.innerHTML=""}function x(){l.classList.add("hidden"),c.classList.remove("hidden")}function u(){l.classList.remove("hidden"),c.classList.add("hidden")}function L(){n.show({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!",messageSize:"16px",messageLineHeight:"24px",messageColor:"white",iconUrl:y,maxWidth:"432px",backgroundColor:"#EF4040"})}const S=document.querySelector("form"),d=document.querySelector("#search-text");S.addEventListener("submit",k);function k(o){o.preventDefault();const s=d.value.trim();if(!s){n.error({title:"Error",message:"Please enter a search query!",position:"topRight"});return}w(),x(),d.value="",n.info({message:"Loading images, please wait...",position:"topRight",timeout:2e3}),p(s).then(i=>{const a=i.data.hits;if(!a.length){L();return}v(a)}).catch(i=>{n.error({title:"Error",message:"Oops! Something went wrong. Please try again later.",position:"topRight"}),console.error(i)}).finally(()=>{u()})}
//# sourceMappingURL=index.js.map
