!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function t(e){return e&&e.__esModule?e.default:e}var n="feedback-form-state",o={form:document.querySelector(".feedback-form"),email:document.querySelector('[name="email"]'),message:document.querySelector('[name="message"]')},r={email:"",message:""};if(null!==localStorage.getItem(n))try{r=JSON.parse(localStorage.getItem(n)),o.email.value=r.email,o.message.value=r.message}catch(e){console.log(e.message)}var i={},a={};Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var u="Expected a function",f=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,c=/^0b[01]+$/i,s=/^0o[0-7]+$/i,m=parseInt,d="object"==typeof e&&e&&e.Object===Object&&e,v="object"==typeof self&&self&&self.Object===Object&&self,g=d||v||Function("return this")(),y=Object.prototype.toString,p=Math.max,b=Math.min,S=function(){return g.Date.now()};function T(e,t,n){var o,r,i,a,f,l,c=0,s=!1,m=!1,d=!0;if("function"!=typeof e)throw new TypeError(u);function v(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function g(e){return c=e,f=setTimeout(T,t),s?v(e):a}function y(e){var n=e-l;return void 0===l||n>=t||n<0||m&&e-c>=i}function T(){var e=S();if(y(e))return w(e);f=setTimeout(T,function(e){var n=t-(e-l);return m?b(n,i-(e-c)):n}(e))}function w(e){return f=void 0,d&&o?v(e):(o=r=void 0,a)}function O(){var e=S(),n=y(e);if(o=arguments,r=this,l=e,n){if(void 0===f)return g(l);if(m)return f=setTimeout(T,t),v(l)}return void 0===f&&(f=setTimeout(T,t)),a}return t=j(t)||0,h(n)&&(s=!!n.leading,i=(m="maxWait"in n)?p(j(n.maxWait)||0,t):i,d="trailing"in n?!!n.trailing:d),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=l=r=f=void 0},O.flush=function(){return void 0===f?a:w(S())},O}function h(e){var n=void 0===e?"undefined":t(a)(e);return!!e&&("object"==n||"function"==n)}function j(e){if("number"==typeof e)return e;if(function(e){return"symbol"==(void 0===e?"undefined":t(a)(e))||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==y.call(e)}(e))return NaN;if(h(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=h(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=c.test(e);return o||s.test(e)?m(e.slice(2),o?2:8):l.test(e)?NaN:+e}i=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError(u);return h(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),T(e,t,{leading:o,maxWait:t,trailing:r})},o.form.addEventListener("input",i((function(e){var t=e.target;switch(t.nodeName){case"INPUT":r.email=t.value;break;case"TEXTAREA":r.message=t.value}localStorage.setItem(n,JSON.stringify(r))}),500)),o.form.addEventListener("submit",(function(e){e.preventDefault(),console.log(r),o.form.reset(),localStorage.removeItem(n)}))}();
//# sourceMappingURL=03-feedback.9b482533.js.map
