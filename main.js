(()=>{var e={562:()=>{navigator.serviceWorker&&window.addEventListener("load",(async()=>{try{navigator.serviceWorker&&(await navigator.serviceWorker.register("/service.worker.js"),console.log("sw registered"))}catch(e){console.log(e)}})),document.addEventListener("DOMContentLoaded",(()=>{let e=0;const r=document.getElementById("reload_page"),t=document.querySelectorAll("img");for(let r=0;r<t.length-1;r++)t[r].addEventListener("load",(()=>{console.log(`picture "${t[r].getAttribute("id")}" has loaded!`),t[r].classList.remove("placeholder"),e++}));setTimeout((()=>{console.log(`Pictures has loaded: ${e}`),4!==e&&(r.classList.remove("display_none"),r.classList.add("display_flex"))}),6e3)}))}},r={};function t(o){if(r[o])return r[o].exports;var s=r[o]={exports:{}};return e[o](s,s.exports,t),s.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var o in r)t.o(r,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:r[o]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{"use strict";t(562)})()})();