function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("7Y9D8");const i=document.querySelector('button[type="submit"]'),l=document.querySelector('input[name="delay"]'),d=document.querySelector('input[name="step"]'),a=document.querySelector('input[name="amount"]');i.addEventListener("click",(t=>{t.preventDefault();const n=+l.value,o=+d.value,r=+a.value;function i(t,n){return new Promise(((o,r)=>{setTimeout((()=>{Math.random()>.3?o(e(u).Notify.success(`✅ Fulfilled promise ${t} in ${n}ms`)):r(e(u).Notify.failure(`❌ Rejected promise ${t} in ${n}ms`))}),n)}))}for(let e=1;e<=r;e++)i(e,n+(e-1)*o).then((e=>e)).catch((e=>console.log(e)))}));
//# sourceMappingURL=03-promises.16f0717f.js.map