if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,i)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const t=e=>n(e,l),u={module:{uri:l},exports:o,require:t};s[l]=Promise.all(r.map((e=>u[e]||t(e)))).then((e=>(i(...e),o)))}}define(["./workbox-7369c0e1"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/index-3edd2bf2.css",revision:null},{url:"assets/index-e5cc1cf7.js",revision:null},{url:"assets/rank-2019-ddbc6ac9.js",revision:null},{url:"assets/rank-2020-6c6f6a37.js",revision:null},{url:"assets/rank-2021-e0e27ced.js",revision:null},{url:"assets/rank-2022-8da34090.js",revision:null},{url:"assets/rank-2023-e374841e.js",revision:null},{url:"assets/vendor-f2f6c7d8.js",revision:null},{url:"assets/workbox-window.prod.es5-295a6886.js",revision:null},{url:"index.html",revision:"e40c38d8c338d9929ff15fa5ca059ca5"},{url:"manifest.webmanifest",revision:"bd8aa41703f07adc113683e6ed3d39c2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
