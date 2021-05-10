(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>o});var r=t(645),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"/**\r\n * Body CSS\r\n */\r\n\r\nhtml,\r\nbody {\r\n    height: 100%;\r\n}\r\n\r\nhtml,\r\nbody,\r\ninput,\r\ntextarea,\r\nbutton {\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n}\r\n\r\n\r\n/**\r\n * Sidebar CSS\r\n */\r\n\r\n#sidebar {\r\n    background-color: #2196F3;\r\n    padding: 15px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n    #sidebar {\r\n        position: fixed;\r\n        top: 0;\r\n        bottom: 0;\r\n        width: 180px;\r\n        height: 100%;\r\n        padding-top: 30px;\r\n    }\r\n}\r\n\r\n\r\n/**\r\n * Content CSS\r\n */\r\n@media (min-width: 768px) {\r\n    #content {\r\n        margin-left: 180px;\r\n    }\r\n}\r\n\r\n.author {\r\n    font-size: 1rem;\r\n}\r\n\r\n.floating-btn {\r\n    position: fixed;\r\n    bottom: 50px;\r\n    right: 50px\r\n}\r\n\r\n.modal {\r\n    max-width: 600px;\r\n    max-height: 300px;\r\n    margin: 100px auto;\r\n    overflow-y: auto;\r\n    background: #fff;\r\n}\r\n\r\n.modal > h1 {\r\n    text-align: center;\r\n}\r\n\r\n.modal .modal-content {\r\n    padding: 1rem;\r\n}\r\n\r\n.error {\r\n    color: red;\r\n    text-align: center;\r\n}\r\n\r\n.date {\r\n    text-align: right;\r\n}",""]);const o=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var s=0;s<e.length;s++){var d=[].concat(e[s]);r&&i[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var r,i=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function s(e,n){for(var t={},r=[],i=0;i<e.length;i++){var s=e[i],d=n.base?s[0]+n.base:s[0],l=t[d]||0,u="".concat(d," ").concat(l);t[d]=l+1;var c=a(u),f={css:s[1],media:s[2],sourceMap:s[3]};-1!==c?(o[c].references++,o[c].updater(f)):o.push({identifier:u,updater:h(f,n),references:1}),r.push(u)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var l,u=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function c(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function f(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var p=null,m=0;function h(e,n){var t,r,i;if(n.singleton){var o=m++;t=p||(p=d(n)),r=c.bind(null,t,o,!1),i=c.bind(null,t,o,!0)}else t=d(n),r=f.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=s(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var d=s(e,n),l=0;l<t.length;l++){var u=a(t[l]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}t=d}}}}},n={};function t(r){var i=n[r];if(void 0!==i)return i.exports;var o=n[r]={id:r,exports:{}};return e[r](o,o.exports,t),o.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{function e(e){return(e=e.trim()).length>=10&&e.length<=255}function n(e,n){const t=document.createElement("div");t.classList.add("modal"),t.innerHTML=`\n        <h1>${e}</h1>\n        <div class="modal-content">${n}</div>\n    `,mui.overlay("on",t)}class r{static create(e){return fetch("https://askme-app-9eff3-default-rtdb.firebaseio.com/questions.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((n=>(e.id=n.name,e))).then((e=>{!function(e){let n=i();n.push(e),localStorage.setItem("questions",JSON.stringify(n))}(e)})).then(r.renderList)}static fetch(e){return e?fetch(`https://askme-app-9eff3-default-rtdb.firebaseio.com/questions.json?auth=${e}`).then((e=>e.json())).then(r.parseQuestions):Promise.resolve('<p class="error">You have no rights to visit this page</p>')}static parseQuestions(e){return e&&e.error?'<p class="error">You have no rights to visit this page</p>':e?Object.keys(e).map((n=>({...e[n],id:n}))):[]}static renderList(){const e=i(),n=e.length?e.map(o).join(""):'<div class="mui--text-headline">You have not asked any questions yet ;(</div>';document.getElementById("list").innerHTML=n}static questionListToHTML(e){return e.length?`<ol>${e.map((e=>`<li>${e.text} <p class="date">${e.date}</p></li>`)).join("")}</ol>`:"<p>There are no questions yet</p>"}}function i(){return JSON.parse(localStorage.getItem("questions")||"[]")}function o(e){return`\n        <div class="mui--text-black-54">\n            ${new Date(e.date).toLocaleDateString()}\n            ${new Date(e.date).toLocaleTimeString()}\n        </div>\n        \n        <div>\n            ${e.text}\n        </div>\n        <br>\n    `}var a=t(379),s=t.n(a),d=t(28);s()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,console.log("App is running!");const l=document.getElementById("modalBtn"),u=document.getElementById("questionForm"),c=u.querySelector("#questionInput"),f=u.querySelector("#submitQuestionBtn");function p(e){e.preventDefault();const n=e.target.querySelector("button"),t=e.target.querySelector("#email").value,i=e.target.querySelector("#password").value;n.disabled=!0,function(e,n){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDThE31IWJ0KkFwUairqk10iDKmnIyZ1Qg",{method:"POST",body:JSON.stringify({email:e,password:n,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((e=>e.json())).then((e=>e.idToken))}(t,i).then(r.fetch).then(m).then((()=>n.disabled=!1))}function m(e){"string"==typeof e?n("Authorization Error",e):n("Questions List",r.questionListToHTML(e))}l.addEventListener("click",(function(){n("Authorization",'\n    <form class="mui-form" id="authForm">\n        <div class="mui-textfield mui-textfield--float-label">\n            <input type="email" id="email" required>\n            <label for="email">Email</label>\n        </div>\n        \n        <div class="mui-textfield mui-textfield--float-label">\n            <input type="password" id="password" required>\n            <label for="password">Password</label>\n        </div>\n\n        <button\n            id="submitAuthBtn"\n            type="submit"\n            class="mui-btn mui-btn--raised mui-btn--primary"\n             >\n            Sign In\n        </button>\n    </form>\n    '),document.getElementById("authForm").addEventListener("submit",p)})),window.addEventListener("load",r.renderList),u.addEventListener("submit",(function(n){if(n.preventDefault(),e(c.value)){const e={text:c.value.trim(),date:(new Date).toJSON()};f.disabled=!0,console.log("Question:",e),r.create(e).then((()=>{c.value="",c.className=""}))}})),c.addEventListener("input",(function(n){f.disabled=!e(c.value)}))})()})();