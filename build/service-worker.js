"use strict";var precacheConfig=[["/index.html","c08d4a0c286f0c4b3412330057bfd2e0"],["/static/css/main.65027555.css","41e5e45b9b5d9ecaa09b72c11eed3386"],["/static/js/main.24738dd4.js","7bfb5df8637981623abce663c5ce0e0e"],["/static/media/App.970122fa.scss","970122fa822892318c73e8aa1c0e47a3"],["/static/media/about.fe6963d3.scss","fe6963d397856f1ca1f77dca251a5767"],["/static/media/editor.5874f2c8.scss","5874f2c856eb17ab472d64c5a4ef78f3"],["/static/media/infoItem.0202dbea.scss","0202dbeaabdf12a110fe9fae459040a6"],["/static/media/navItem.2e3c95a0.scss","2e3c95a0205cfbef70972fcc60ba7702"],["/static/media/navbar.92fa31b6.scss","92fa31b6c97d52991db23509a9f2f102"],["/static/media/profile.839b2adc.jpg","839b2adc42ea93d6b74d080ea00834ee"],["/static/media/project.8fe8b81a.scss","8fe8b81aaf85a0b496172b4596738d34"],["/static/media/projects.4c1d502c.scss","4c1d502c52c4b67bdc6bebc20935e7ac"],["/static/media/social.6eb572e1.scss","6eb572e11364e51a8315ad3482d16fad"],["/static/media/welcome.57d3b788.scss","57d3b78898efdcf06e5aa0e7191eb463"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});