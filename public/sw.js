if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,c)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let t={};const n=e=>s(e,r),o={module:{uri:r},exports:t,require:n};i[r]=Promise.all(a.map((e=>o[e]||n(e)))).then((e=>(c(...e),t)))}}define(["./workbox-c05e7c83"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"51d20faf5828d5c125e0dc849a67d997"},{url:"/_next/static/UrLFyNLTtt3-r6Xy846UH/_buildManifest.js",revision:"849a004093f4c3b6bc69a890c1078e4e"},{url:"/_next/static/UrLFyNLTtt3-r6Xy846UH/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/180-87fe2065d838d996.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/295-fdb68d105c4403e4.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/396-674a3e371952d924.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/3ccc0e3c-6548fe83dfde89ef.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/581.d08817051d2f76b7.js",revision:"d08817051d2f76b7"},{url:"/_next/static/chunks/596.bf75519b808fd862.js",revision:"bf75519b808fd862"},{url:"/_next/static/chunks/609-3da6f1870fc01885.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/63-75441e81f2cb554e.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/73-137b392cb79f40d1.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/733-51f29d0e6cf445a1.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/_not-found/page-534932df71af6b4a.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/contact/layout-b632b6279864a901.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/contact/page-63607034fa7e2edd.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/layout-f14e51cc4527126d.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/my-story/page-78086e52d07ffb2f.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/page-5da1436f2bad25f7.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/projects/page-954cd58b2c36f77d.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/resume/layout-5caf204135f624f4.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/resume/page-a391873151c0e3cd.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/resume/template-3b6062dcbeb88186.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/services/layout-073305a64dd869f6.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/services/page-1babe385ddab563f.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/app/services/template-69613313c446239f.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/framework-ad208f078cb719fe.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/main-6a383d84352b34f9.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/main-app-012ab6b8655d61a2.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/pages/_app-482a9b4eba057c97.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/pages/_error-71ca41a69703cd29.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-ab414e0975ba6aee.js",revision:"UrLFyNLTtt3-r6Xy846UH"},{url:"/_next/static/css/d93b03e2ca62ea5a.css",revision:"d93b03e2ca62ea5a"},{url:"/_next/static/media/07a54048a9278940-s.p.woff2",revision:"5e6c7802c5c4cc0423f86c3aad29f60a"},{url:"/_next/static/media/0aa834ed78bf6d07-s.woff2",revision:"324703f03c390d2e2a4f387de85fe63d"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/4f2204fa15b9b11a-s.woff2",revision:"6f4cf2d9f078b52024414970b7b7f704"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/67957d42bae0796d-s.woff2",revision:"54f02056e07c55023315568c637e3a96"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/886030b0b59bc5a7-s.woff2",revision:"c94e6e6c23e789fcb0fc60d790c9d2c1"},{url:"/_next/static/media/939c4f875ee75fbb-s.woff2",revision:"4a4e74bed5809194e4bc6538eb1a1e30"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/bb3ef058b751a6ad-s.p.woff2",revision:"782150e6836b9b074d1a798807adcb18"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/_next/static/media/f911b923c6adde36-s.woff2",revision:"0f8d347d49960d05c9430d83e49edeb7"},{url:"/googlef35f625f535cf5ec.html",revision:"beff3d009254575ef4bf85f57d0b8990"},{url:"/icons/apple-icon.png",revision:"35acb077c280c2a0832e0c3c961129d6"},{url:"/icons/apple-touch-icon.png",revision:"b818edc26216e7a772f19eaab1d9e386"},{url:"/icons/favicon-16x16.png",revision:"156fd64f9030b3c107821718b70cb0fd"},{url:"/icons/favicon-32x32.png",revision:"c08ede50e85e465846e8d32f3e267d2b"},{url:"/icons/favicon.ico",revision:"15f75282dea46e4df7164216ac5aaff0"},{url:"/icons/icon-144x144.png",revision:"598b3c0e576cba1ac96b8f956dc05ab5"},{url:"/icons/icon-16x16.png",revision:"597b8db73e1b50d1ac9c6a0f2473152a"},{url:"/icons/icon-192x192-maskable.png",revision:"674240c7817ce623ca3c39cbcade5c06"},{url:"/icons/icon-192x192.png",revision:"e91ec77f49091da3415b03229f791e44"},{url:"/icons/icon-32x32.png",revision:"730d624fb0639953a623a7c280fd3a69"},{url:"/icons/icon-48x48.png",revision:"bd2f600443da74d2a3072ca4174511ed"},{url:"/icons/icon-512x512-maskable.png",revision:"c17dd8aef24314d3473c2599359c224c"},{url:"/icons/icon-512x512.png",revision:"8d559c065d3fe2a3eaa40074befaa203"},{url:"/icons/icon-72x72.png",revision:"9b1b1fde2869d4cc6c4c8511554329fa"},{url:"/icons/icon-96x96.png",revision:"04cc82d6622fb2bb4bf4729e6a497771"},{url:"/icons/icon.png",revision:"9f510c3d3ac726d54831793a9dde49fb"},{url:"/icons/manifest.json",revision:"6684c65ab0652f8af949f5c0a976a04f"},{url:"/icons/source/original.png",revision:"67988fce66999127797c44bd10d9b122"},{url:"/images/2022.jpg",revision:"5dbf2762e2bb9d3740815b5b562a13b8"},{url:"/images/JOHN-NATHANIEL-MARQUEZ-RESUME.pdf",revision:"700eb5344e30c745f2d617c02f28ebf4"},{url:"/images/graduation.jpg",revision:"ef75da2a90b2d4562987a57eb51d3f9f"},{url:"/images/jnm_picture.png",revision:"2c82f4fa45b63bacbfffbff8e3681935"},{url:"/images/jnm_picture2.jpg",revision:"cc17a9d546db742e37f0ab39f5b2a7b9"},{url:"/images/jnm_picture3.jpg",revision:"1634d90aac0b62f1ec243e25d7c99e54"},{url:"/images/jnm_picture4.jpg",revision:"7264ce01e47ffdecd3cb2965bdd0787f"},{url:"/images/logo.png",revision:"67988fce66999127797c44bd10d9b122"},{url:"/images/projects/edible-artistry.png",revision:"fa72309b3ffe1704e8c78ffeddeef440"},{url:"/images/projects/edible-artistry.webp",revision:"4e9468d58132405731116c07339c767f"},{url:"/images/projects/excel-glass.png",revision:"8fe2e6ad09836b62988801a3608e3ece"},{url:"/images/projects/excel-glass.webp",revision:"625f78b55b73054f12656cebc4ac01f8"},{url:"/images/projects/filipino-cuisine-ui.png",revision:"abdd5e2a4257fb046cda7906c679feee"},{url:"/images/projects/filipino-cuisine-ui.webp",revision:"ca0f10e4690c3d0bbc07c0846e1d3f89"},{url:"/images/projects/kda-product-showcase.vercel.app.jpeg",revision:"d0d86691d7434163e2b40e7a2b0be615"},{url:"/images/projects/portfolio-marquez.jpeg",revision:"b9b7aab510df5a69a4ad76083715d4c6"},{url:"/images/projects/portfolio-marquez.webp",revision:"df976455e57358c982970dbd03b558a9"},{url:"/images/projects/todo-list.png",revision:"20201613a6d3eec0252b56c36e525e14"},{url:"/images/projects/todo-list.webp",revision:"ac517857a6ce63ad2f54f4ff39991bbe"},{url:"/images/projects/weather-api.png",revision:"757f1f648f7d160314ed9f70b483ffd4"},{url:"/images/projects/weather-api.webp",revision:"eaee06d93debf67a41d5e6bcad392021"},{url:"/images/projects/wedding-memories.png",revision:"6281812785a03a492dab2cff21f8d45d"},{url:"/images/projects/wedding-memories.webp",revision:"ed436e2934d4123171a628d35c1400c7"},{url:"/images/projects/youtube.png",revision:"36b39011697b64b0f252c9625e67a4f1"},{url:"/images/projects/youtube.webp",revision:"f3c25faa9c1f7a13d62502f8b22c46c3"},{url:"/manifest.json",revision:"a9a98f05b95f4a18e7a65223aa90e7e1"},{url:"/private/common-job-interview.md",revision:"f0100a740ed1bff54021a11c47294ec9"},{url:"/private/job-interview.md",revision:"0a0f5cdfbb5da4eb94f3c2eef3b80a1e"},{url:"/private/real-story-marquez.md",revision:"de8ca4839a4da1867c458ca6a0b9cb19"},{url:"/robots.txt",revision:"43804d9c6c3d3d47840232be5745332d"},{url:"/screenshots/desktop.png",revision:"f1c5a4f8f8e449ec019e7a666c7610f0"},{url:"/screenshots/mobile.png",revision:"736366a6a1ea3325abaf740ee6611c9c"},{url:"/site.webmanifest",revision:"ce7ba918a05fcb1ec7af12b8676a26e8"},{url:"/sitemap.xml",revision:"d397bbd36252e9e24c9dfde58216b450"},{url:"/videos/edible-artistry.mp4",revision:"06e843e27bea6f537dd1217987d563fd"},{url:"/videos/excel_glass.mp4",revision:"abaabd57ba0f3da347dfc3b5eeac3318"},{url:"/videos/kusina_de_amadeo.mp4",revision:"54fc37e73d132a4faa4f7d8530c217c6"},{url:"/videos/portfolio-marquez.mp4",revision:"fd7aefbf3cc5bc436af1ec3dd5fc3640"},{url:"/videos/weather_api.mp4",revision:"550bcec0f3b203295f748042f5ad88d7"},{url:"/videos/wedding_memories.mp4",revision:"1e9477adc4ae82e622327e7bb2c65802"},{url:"/videos/youtube.mp4",revision:"569addb7dc7cdc956bf863ab14938b9f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET")}));
