(()=>{"use strict";var e={336:(e,t,n)=>{n.d(t,{c:()=>a});var o=n(500),r=n.n(o),i=n(312),s=n.n(i)()(r());s.push([e.id,'* {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  font-family: "Caveat", cursive, \'Courier New\', Courier, monospace;\n}\n:root {\n  --primary-color: #fff;\n  --secondary-color: #000;\n  --tertiary-color: #222;\n  --fourth-color: #666;\n  --fifth-color: #444;\n  --sixth-color: #777;\n  --background-color: #7dd3fc;\n}\n#header-holder {\n  display: flex;\n  justify-content: center;\n}\n#header {\n  box-sizing: border-box;\n  position: fixed;\n  top: 0;\n  background-color: var(--secondary-color);\n  color: var(--primary-color);\n  \n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  padding: 2rem;\n  height: 5rem;\n  width: 40%;\n  justify-content: space-between;\n  font-size: 2rem;\n}\nbody {\n  background-color: var(--secondary-color);\n  color: var(--primary-color);\n}\n.top-holder {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0 3%;\n}\n.list-half {\n  display: flex;\n  flex-direction: row;\n  column-gap: 1rem;\n  align-items: center;\n}\n.list-holder {\n  display: flex;\n  justify-content: center;\n}\n#list-box {\n  display: flex;\n  flex-direction: column;\n  width: 40%;\n  border-radius: 0.5rem;\n  overflow: hidden;\n  margin: 5rem 0;\n}\n#list-box > div {\n  font-size: 2rem;\n  text-align: center;\n}\n.empty#list-box {\n  height: 20rem;\n  align-items: center;\n  justify-content: center;\n}\n#list-box.in-list {\n\n}\n.list {\n  background-color: var(--tertiary-color);\n  color: var(--primary-color);\n  padding: 1rem;\n  transition: background-color 1s;\n  transition: color 1s;\n}\n.list ~ .list {\n  border-top: 0.05rem solid var(--sixth-color);\n}\n.todo-img {\n  width: 1rem;\n  height: 1rem;\n}\n.todo-img:hover, .header-img:hover {\n  opacity: 0.5;\n}\n.list:hover {\n  background-color: var(--fourth-color);\n  -webkit-transition: background-color 400ms linear;\n  -ms-transition: background-color 400ms linear;\n  transition: background-color 400ms linear;\n}\n.todo-title {\n  display: flex;\n  gap: 1rem;\n  align-items: center;\n  height: 1.4rem;\n  font-size: 1.4rem;\n}\n.header-img {\n  width: 2rem;\n  height: 2rem;\n  font-size: 2rem;\n  border: none;\n  color: white;\n  background-color: inherit;\n}\n.header-img:hover {\n  cursor: pointer;\n}\n.header-button {\n  background-color: rgba(0, 0, 0, 0);\n  border: none;\n}\n.header-button:hover {\n  cursor: pointer;\n}\nli {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\nh3 {\n  flex: 0 0 auto;\n}\np {\n  flex: 1 0 auto;\n  text-align: center;\n}\nform.item-form {\n  background-color: var(--tertiary-color);\n  border: none;\n  border-radius: 0.5rem;\n  padding: 3rem;\n  font-size: 2rem;\n  color: var(--primary-color);\n}\nform.item-form label {\n  display: inline-block;\n  width: 12rem;\n  text-align: center;\n  font-weight: 100;\n}\nform.item-form input, form.item-form select, form.item-form option {\n  box-sizing: border-box;\n  background-color: var(--secondary-color);\n  width: 16rem;\n  outline: none;\n  height: 2.6rem;\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--primary-color);\n  padding-left: 0.4rem;\n  font-size: 2rem;\n}\nform.item-form input:focus, form.item-form select:focus, form.item-form option:focus {\n  background-color: var(--sixth-color);\n}\n.form-pair-holder {\n  display: flex;\n  align-items: center;\n  column-gap: 1rem;\n  margin-bottom: 2rem;\n  flex-wrap: wrap;\n}\ndialog {\n  border: none;\n  position: absolute;\n  left: 0;\n  right: 0;\n  margin: 8rem auto;\n  margin-bottom: 5rem;\n  color: rgba(0, 0, 0, 0);\n  background-color: rgba(0, 0, 0, 0);\n}\ndialog::backdrop {\n  background-image: linear-gradient(var(--secondary-color), var(--secondary-color));\n  opacity: 0.5;\n}\nform.item-form button {\n  width: 12rem;\n  background-color: var(--secondary-color);\n  padding: 1rem;\n  font-size: 2rem;\n  border: none;\n  border-radius: 0.5rem;\n  color: var(--primary-color);\n  transition: background-color 1s;\n}\nform.item-form button:hover {\n  cursor: pointer;\n  background-color: var(--sixth-color);\n  -webkit-transition: background-color 400ms linear;\n  -ms-transition: background-color 400ms linear;\n  transition: background-color 400ms linear;\n}\n.form-button-holder {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 1.5rem;\n}\n.list.complete {\n  color: var(--sixth-color);\n  background-color: var(--fifth-color);\n  user-select: none;\n}\n.inner-title {\n  border: none;\n  outline: none;\n  font-size: 2rem;\n  font-family: "Caveat", cursive, \'Courier New\', Courier, monospace;\n  text-align: center;\n  background-color: var(--secondary-color);\n  color: var(--primary-color);\n  text-decoration: underline;\n  text-decoration-thickness: 0.1rem;\n  text-underline-offset: 0.5rem;\n  width: 90%;\n}\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 45px;\n  height: 26px;\n}\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  -webkit-transition: .4s;\n  transition: .4s;\n  border-radius: 34px;\n}\n.slider.priority1 {\n  background-color: #65a30d\n}\n.slider.priority2 {\n  background-color: #ca8a04\n}\n.slider.priority3 {\n  background-color: #dc2626\n}\n.slider:before {\n  position: absolute;\n  content: "";\n  height: 18px;\n  width: 18px;\n  top: 4px;\n  right: 4px;\n  background-color: var(--tertiary-color);\n  -webkit-transition: .4s;\n  transition: .4s;\n  border-radius: 50%;\n}\ninput:checked + .slider {\n  background-color: var(--sixth-color);\n}\ninput:focus + .slider {\n  box-shadow: 0 0 1px var(--sixth-color);\n}\ninput:checked + .slider:before {\n  -webkit-transform: translateX(-20px);\n  -ms-transform: translateX(-20px);\n  transform: translateX(-20px);\n}\n.footer {\n  padding: 0.2rem;\n  width: 100%;\n  background-color: var(--secondary-color);\n  position: fixed;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.footer img {\n  width: 1.5rem;\n  margin-bottom: -0.2rem;\n  margin-right: 0.5rem;\n  color: var(--primary-color);\n}\n.footer a {\n  font-size: 1.2rem;\n  text-decoration: none;\n  color: var(--primary-color);\n}',""]);const a=s},312:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,r,i){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var a=0;a<this.length;a++){var c=this[a][0];null!=c&&(s[c]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&s[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),t.push(d))}},t}},500:e=>{e.exports=function(e){return e[1]}},596:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var i={},s=[],a=0;a<e.length;a++){var c=e[a],l=o.base?c[0]+o.base:c[0],d=i[l]||0,u="".concat(l," ").concat(d);i[l]=d+1;var m=n(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)t[m].references++,t[m].updater(p);else{var g=r(p,o);o.byIndex=a,t.splice(a,0,{identifier:u,updater:g,references:1})}s.push(u)}return s}function r(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,r){var i=o(e=e||[],r=r||{});return function(e){e=e||[];for(var s=0;s<i.length;s++){var a=n(i[s]);t[a].references--}for(var c=o(e,r),l=0;l<i.length;l++){var d=n(i[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}i=c}}},176:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},808:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},120:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},520:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},936:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,exports:{}};return e[o](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var r=o.length-1;r>-1&&!e;)e=o[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0;var o={};(()=>{n.d(o,{c:()=>A});const e=n.p+"a1651cfac52a66cee5d9.svg",t=n.p+"3c5028aa7146e47ce92f.svg",r=n.p+"af2ea316eaa131aa5b96.png";function i(e){this.list.push(e)}function s(e){this.list.splice(e,1)}function a(e){return this.list[e]}const c=(()=>{let e=0;return function(){return++e}})();function l(){const n=document.querySelector("#list-box"),o=document.createElement("div");o.innerText="Looks like you have no tasks in this todo list yet!\n                                Click on the + to create your first task!";const i=document.querySelector("#header");i.classList.add("in-list"),i.innerHTML="";const s=document.createElement("button");s.classList.toggle("header-button");const a=document.createElement("img");a.src=e,a.classList.toggle("header-img"),s.appendChild(a);const l=document.createElement("input");l.value=this.name,l.classList.toggle("inner-title"),l.setAttribute("maxlength",30),l.setAttribute("minlength",1),l.setAttribute("required",!0),l.setAttribute("spellCheck",!1);const d=document.createElement("form");d.appendChild(l),d.addEventListener("submit",(e=>{e.preventDefault()}));const u=document.createElement("button");u.classList.toggle("todo-button");const m=document.createElement("img");m.src=t,m.classList.toggle("header-img"),u.classList.toggle("header-button"),u.appendChild(m),u.addEventListener("click",(e=>{this.addTask((()=>{p()}))})),i.appendChild(s),i.appendChild(d),i.appendChild(u),s.addEventListener("click",(e=>{d.checkValidity()?(this.name=l.value,A()):(d.reportValidity(),l.focus())})),n.innerHTML="";const p=()=>{n.classList.add("in-list"),1==this.list.length&&n.classList.remove("empty"),n.innerHTML="";for(let e=0;e<this.list.length;e++){const t=document.createElement("div");t.classList.toggle("list");let o=!0;c();const i=document.createElement("div"),s=document.createElement("div"),a=document.createElement("input"),l=document.createElement("div"),d=document.createElement("span");a.type="checkbox",l.classList.toggle("switch"),d.classList.toggle("slider"),l.append(a),l.append(d),i.classList.toggle("todo-title"),s.classList.toggle("todo-title"),l.addEventListener("click",(n=>{n.stopImmediatePropagation(),this.list[e].isComplete()?(o=!0,this.list[e].uncomplete(),a.checked=!1,t.classList.remove("complete")):(this.list[e].complete(),a.checked=!0,o=!1,t.classList.add("complete")),console.log(this.list[e].isComplete()),setTimeout((()=>{p()}),"400")})),this.list[e].isComplete()?(t.classList.add("complete"),a.checked=!0):t.addEventListener("click",(t=>{t.stopImmediatePropagation(),o&&this.list[e].update((()=>{p()}))})),"1"==this.list[e].priority?d.classList.toggle("priority1"):"2"==this.list[e].priority?d.classList.toggle("priority2"):d.classList.toggle("priority3"),i.textContent=this.list[e].name,s.textContent=this.list[e].dueDate;const u=document.createElement("img");u.classList.toggle("todo-img"),u.src=r,u.addEventListener("click",(t=>{t.stopImmediatePropagation(),this.removeItem(e),p()}));const m=document.createElement("div"),g=document.createElement("div"),f=document.createElement("div");g.classList.toggle("list-half"),f.classList.toggle("list-half"),g.appendChild(l),g.appendChild(i),f.appendChild(s),f.appendChild(u),m.classList.toggle("top-holder"),m.appendChild(g),m.appendChild(f),t.appendChild(m),n.appendChild(t)}0==this.list.length&&(n.classList.add("empty"),n.append(o))};l.focus(),p()}function d(){return this.list}function u(){this.isCompleted=!0}function m(){this.isCompleted=!1}function p(){return this.isCompleted}function g(e){b((t=>{this.name=t.name,this.priority=t.priority,this.dueDate=t.dueDate,e()}),(()=>{}),!0,this)}const f={complete:u,uncomplete:m,isComplete:p,update:g},h=(e,t)=>{const n={isCompleted:!1};Object.assign(Object.getPrototypeOf(n),{complete:u,uncomplete:m,isComplete:p,update:g}),b((t=>{n.name=t.name,n.priority=t.priority,n.dueDate=t.dueDate,e(n)}),(()=>{t()}),!1,n)},b=(e,t,n,o)=>{const r=document.querySelector("dialog"),i=document.querySelector("form.item-form"),s=document.querySelector("#close"),a=document.querySelector("#submit");if(n){const e=document.querySelector("#name"),t=document.querySelector("#priority"),n=document.querySelector("#due-date");e.value=o.name,t.value=o.priority,n.value=o.dueDate}function c(t){if(t.preventDefault(),i.checkValidity()){let t=new FormData(i);o.name=t.get("name"),o.priority=t.get("priority"),o.dueDate=t.get("due-date"),i.reset(),r.close(),a.removeEventListener("click",c),s.removeEventListener("click",l),e(o)}else i.reportValidity()}function l(e){i.reset(),r.close(),a.removeEventListener("click",c),s.removeEventListener("click",l),t()}r.showModal(),s.addEventListener("click",l),a.addEventListener("click",c)};function v(e){this.list[e].update()}function y(e){h((t=>{this.list.push(t),e()}),(()=>{e()}))}function x(){for(let e=0;e<this.list.length;e++)Object.assign(Object.getPrototypeOf(this.list[e]),f)}const k={loadItemFunctions:x,addTask:y,updateItem:v};var L=n(596),w=n.n(L),C=n(520),E=n.n(C),S=n(176),I=n.n(S),T=n(120),j=n.n(T),z=n(808),O=n.n(z),M=n(936),q=n.n(M),P=n(336),N={};N.styleTagTransform=q(),N.setAttributes=j(),N.insert=I().bind(null,"head"),N.domAPI=E(),N.insertStyleElement=O(),w()(P.c,N),P.c&&P.c.locals&&P.c.locals;const D=n.p+"5b722d5e4e002699bc28.svg",A=(()=>{const e=(()=>{let e;if(0==localStorage.length)e=Object.assign({list:[]},{size:0,sublist:void 0});else{e=JSON.parse(localStorage.getItem("list"));for(let t=0;t<e.size;t++)Object.assign(Object.getPrototypeOf(e.list[t]),k),e.list[t].loadItemFunctions()}return Object.assign(Object.getPrototypeOf(e),{addItem:i,removeItem:s,getItem:a,displayList:l}),{addList:function(t="Todo List"){e.addItem(((e,t)=>{const n={name:e,list:[].map((e=>e))};return Object.assign(n,{addItem:i,removeItem:s,displayList:l,getList:d,getItem:a,updateItem:v,addTask:y,loadItemFunctions:x})})(t)),e.size++},removeList:function(t){e.removeItem(t),e.size=e.size>0?e.size-1:0},chooseSublist:function(t){return e.sublist=e.getItem(t),e.sublist.displayList(),e.sublist},addToSublist:function(){return e.sublist.addItem(h()),e.sublist.displayList(),e.sublist},removeFromSublist:function(t){return e.sublist.removeItem(t),e.sublist.displayList(),e.sublist},modifySublistItem:function(t){return e.sublist.updateItem(t),e.sublist.displayList(),e.sublist},changeSublistName:function(t,n){e.list[t].name=n},getSize:function(){return e.size},getSublist:function(t){return e.getItem(t)},getSelected:function(){return e.sublist},listHolder:e}})();function n(){const o=document.querySelector("#list-box");o.innerHTML="",o.className="";const i=document.createElement("div");i.innerText="Looks like you have no todo lists created yet!\n                                    Click on the + to create your first list!\n                                    Click on 'save' to locally save your list!";const s=document.querySelector("#header");s.innerHTML="",s.className="",s.classList.toggle("home-header");const a=document.createElement("img"),c=document.createElement("img"),l=document.createElement("button");a.src=D,a.classList.toggle("header-img"),c.src=t,c.classList.toggle("header-img"),l.appendChild(c),l.classList.toggle("header-button"),s.appendChild(a),s.appendChild(l),1==e.getSize()&&o.classList.remove("empty"),o.innerHTML="";for(let t=0;t<e.getSize();t++){const i=document.createElement("div"),s=document.createElement("div");s.classList.toggle("todo-title");const a=document.createElement("img");a.classList.toggle("todo-img"),a.src=r,a.addEventListener("click",(o=>{o.stopImmediatePropagation(),e.removeList(t),n()}));const c=document.createElement("div");c.classList.toggle("top-holder"),i.classList.toggle("list");let l=e.getSublist(t);s.textContent=l.name,c.appendChild(s),c.appendChild(a),i.appendChild(c),i.addEventListener("click",(n=>{e.chooseSublist(t)})),o.appendChild(i)}0==e.getSize()&&(o.classList.add("empty"),o.appendChild(i)),l.addEventListener("click",(t=>{e.addList(),e.chooseSublist(e.getSize()-1)})),a.addEventListener("click",(t=>{localStorage.setItem("list",JSON.stringify(e.listHolder)),alert("Your Todo Lists have been saved. They will be here when you come back at a later time")}))}return n(),n})()})()})();