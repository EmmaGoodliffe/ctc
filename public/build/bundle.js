var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function r(e){e.forEach(t)}function o(e){return"function"==typeof e}function a(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let i,s;function c(e,t){return i||(i=document.createElement("a")),i.href=t,e===i.href}function l(e,t,n,r){if(e){const o=u(e,t,n,r);return e[0](o)}}function u(e,t,n,r){return e[1]&&r?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](r(t))):n.ctx}function p(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}function d(e,t,n,r,o,a){if(o){const i=u(t,n,r,a);e.p(i,o)}}function h(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function f(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function y(e){return document.createTextNode(e)}function b(){return y(" ")}function v(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function I(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function S(e,t,n,r){null===n?e.style.removeProperty(t):e.style.setProperty(t,n,r?"important":"")}function C(e,t,n){e.classList[n?"add":"remove"](t)}function k(e){s=e}const T=[],_=[],E=[],D=[],A=Promise.resolve();let M=!1;function z(e){E.push(e)}const O=new Set;let L=0;function U(){const e=s;do{for(;L<T.length;){const e=T[L];L++,k(e),B(e.$$)}for(k(null),T.length=0,L=0;_.length;)_.pop()();for(let e=0;e<E.length;e+=1){const t=E[e];O.has(t)||(O.add(t),t())}E.length=0}while(T.length);for(;D.length;)D.pop()();M=!1,O.clear(),k(e)}function B(e){if(null!==e.fragment){e.update(),r(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(z)}}const P=new Set;let j;function N(){j={r:0,c:[],p:j}}function F(){j.r||r(j.c),j=j.p}function H(e,t){e&&e.i&&(P.delete(e),e.i(t))}function W(e,t,n,r){if(e&&e.o){if(P.has(e))return;P.add(e),j.c.push((()=>{P.delete(e),r&&(n&&e.d(1),r())})),e.o(t)}else r&&r()}function q(e){e&&e.c()}function R(e,n,a,i){const{fragment:s,on_mount:c,on_destroy:l,after_update:u}=e.$$;s&&s.m(n,a),i||z((()=>{const n=c.map(t).filter(o);l?l.push(...n):r(n),e.$$.on_mount=[]})),u.forEach(z)}function V(e,t){const n=e.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function G(e,t){-1===e.$$.dirty[0]&&(T.push(e),M||(M=!0,A.then(U)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(t,o,a,i,c,l,u,p=[-1]){const d=s;k(t);const h=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(o.context||(d?d.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:o.target||d.$$.root};u&&u(h.root);let f=!1;if(h.ctx=a?a(t,o.props||{},((e,n,...r)=>{const o=r.length?r[0]:n;return h.ctx&&c(h.ctx[e],h.ctx[e]=o)&&(!h.skip_bound&&h.bound[e]&&h.bound[e](o),f&&G(t,e)),n})):[],h.update(),f=!0,r(h.before_update),h.fragment=!!i&&i(h.ctx),o.target){if(o.hydrate){const e=function(e){return Array.from(e.childNodes)}(o.target);h.fragment&&h.fragment.l(e),e.forEach(g)}else h.fragment&&h.fragment.c();o.intro&&H(t.$$.fragment),R(t,o.target,o.anchor,o.customElement),U()}k(d)}class J{$destroy(){V(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Y=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let o=e.charCodeAt(r);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=63&o|128):55296==(64512&o)&&r+1<e.length&&56320==(64512&e.charCodeAt(r+1))?(o=65536+((1023&o)<<10)+(1023&e.charCodeAt(++r)),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=63&o|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=63&o|128)}return t},Q={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let t=0;t<e.length;t+=3){const o=e[t],a=t+1<e.length,i=a?e[t+1]:0,s=t+2<e.length,c=s?e[t+2]:0,l=o>>2,u=(3&o)<<4|i>>4;let p=(15&i)<<2|c>>6,d=63&c;s||(d=64,a||(p=64)),r.push(n[l],n[u],n[p],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Y(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){const t=[];let n=0,r=0;for(;n<e.length;){const o=e[n++];if(o<128)t[r++]=String.fromCharCode(o);else if(o>191&&o<224){const a=e[n++];t[r++]=String.fromCharCode((31&o)<<6|63&a)}else if(o>239&&o<365){const a=((7&o)<<18|(63&e[n++])<<12|(63&e[n++])<<6|63&e[n++])-65536;t[r++]=String.fromCharCode(55296+(a>>10)),t[r++]=String.fromCharCode(56320+(1023&a))}else{const a=e[n++],i=e[n++];t[r++]=String.fromCharCode((15&o)<<12|(63&a)<<6|63&i)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let t=0;t<e.length;){const o=n[e.charAt(t++)],a=t<e.length?n[e.charAt(t)]:0;++t;const i=t<e.length?n[e.charAt(t)]:64;++t;const s=t<e.length?n[e.charAt(t)]:64;if(++t,null==o||null==a||null==i||null==s)throw Error();const c=o<<2|a>>4;if(r.push(c),64!==i){const e=a<<4&240|i>>2;if(r.push(e),64!==s){const e=i<<6&192|s;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},X=function(e){return function(e){const t=Y(e);return Q.encodeByteArray(t,!0)}(e).replace(/\./g,"")};
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Z{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}function ee(){return"object"==typeof indexedDB}function te(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(r);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var e;t((null===(e=o.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}class ne extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,ne.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,re.prototype.create)}}class re{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,o=this.errors[e],a=o?function(e,t){return e.replace(oe,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}(o,n):"Error",i=`${this.serviceName}: ${a} (${r}).`;return new ne(r,i,n)}}const oe=/\{\$([^}]+)}/g;function ae(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const o of n){if(!r.includes(o))return!1;const n=e[o],a=t[o];if(ie(n)&&ie(a)){if(!ae(n,a))return!1}else if(n!==a)return!1}for(const e of r)if(!n.includes(e))return!1;return!0}function ie(e){return null!==e&&"object"==typeof e}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function se(e,t=1e3,n=2){const r=t*Math.pow(n,e),o=Math.round(.5*r*(Math.random()-.5)*2);return Math.min(144e5,r+o)}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ce(e){return e&&e._delegate?e._delegate:e}class le{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const ue="[DEFAULT]";
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class pe{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new Z;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),r=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(r)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e))try{this.getOrInitializeService({instanceIdentifier:ue})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),o=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;o.add(e),this.onInitCallbacks.set(r,o);const a=this.instances.get(r);return a&&e(a,r),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=e,r===ue?void 0:r),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var r;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:ue:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class de{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new pe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
/**
     * @license
     * Copyright 2017 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var he;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(he||(he={}));const fe={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},me=he.INFO,ge={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},$e=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),o=ge[t];if(!o)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[o](`[${r}]  ${e.name}:`,...n)};class we{constructor(e){this.name=e,this._logLevel=me,this._logHandler=$e,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?fe[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}let ye,be;const ve=new WeakMap,xe=new WeakMap,Ie=new WeakMap,Se=new WeakMap,Ce=new WeakMap;let ke={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return xe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Ie.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ee(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e};function Te(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(be||(be=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(De(this),t),Ee(ve.get(this))}:function(...t){return Ee(e.apply(De(this),t))}:function(t,...n){const r=e.call(De(this),t,...n);return Ie.set(r,t.sort?t.sort():[t]),Ee(r)}}function _e(e){return"function"==typeof e?Te(e):(e instanceof IDBTransaction&&function(e){if(xe.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",a),e.removeEventListener("abort",a)},o=()=>{t(),r()},a=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",o),e.addEventListener("error",a),e.addEventListener("abort",a)}));xe.set(e,t)}(e),t=e,(ye||(ye=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((e=>t instanceof e))?new Proxy(e,ke):e);var t}function Ee(e){if(e instanceof IDBRequest)return function(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",o),e.removeEventListener("error",a)},o=()=>{t(Ee(e.result)),r()},a=()=>{n(e.error),r()};e.addEventListener("success",o),e.addEventListener("error",a)}));return t.then((t=>{t instanceof IDBCursor&&ve.set(t,e)})).catch((()=>{})),Ce.set(t,e),t}(e);if(Se.has(e))return Se.get(e);const t=_e(e);return t!==e&&(Se.set(e,t),Ce.set(t,e)),t}const De=e=>Ce.get(e);function Ae(e,t,{blocked:n,upgrade:r,blocking:o,terminated:a}={}){const i=indexedDB.open(e,t),s=Ee(i);return r&&i.addEventListener("upgradeneeded",(e=>{r(Ee(i.result),e.oldVersion,e.newVersion,Ee(i.transaction))})),n&&i.addEventListener("blocked",(()=>n())),s.then((e=>{a&&e.addEventListener("close",(()=>a())),o&&e.addEventListener("versionchange",(()=>o()))})).catch((()=>{})),s}const Me=["get","getKey","getAll","getAllKeys","count"],ze=["put","add","delete","clear"],Oe=new Map;function Le(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!=typeof t)return;if(Oe.get(t))return Oe.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,o=ze.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!o&&!Me.includes(n))return;const a=async function(e,...t){const a=this.transaction(e,o?"readwrite":"readonly");let i=a.store;return r&&(i=i.index(t.shift())),(await Promise.all([i[n](...t),o&&a.done]))[0]};return Oe.set(t,a),a}ke=(e=>({...e,get:(t,n,r)=>Le(t,n)||e.get(t,n,r),has:(t,n)=>!!Le(t,n)||e.has(t,n)}))(ke);
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ue{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const Be="@firebase/app",Pe="0.7.30",je=new we("@firebase/app"),Ne="[DEFAULT]",Fe={[Be]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},He=new Map,We=new Map;function qe(e,t){try{e.container.addComponent(t)}catch(n){je.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Re(e){const t=e.name;if(We.has(t))return je.debug(`There were multiple attempts to register component ${t}.`),!1;We.set(t,e);for(const t of He.values())qe(t,e);return!0}function Ve(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ge=new re("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
class Ke{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new le("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}}function Je(e,t,n){var r;let o=null!==(r=Fe[e])&&void 0!==r?r:e;n&&(o+=`-${n}`);const a=o.match(/\s|\//),i=t.match(/\s|\//);if(a||i){const e=[`Unable to register library "${o}" with version "${t}":`];return a&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),a&&i&&e.push("and"),i&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void je.warn(e.join(" "))}Re(new le(`${o}-version`,(()=>({library:o,version:t})),"VERSION"))}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const Ye="firebase-heartbeat-store";let Qe=null;function Xe(){return Qe||(Qe=Ae("firebase-heartbeat-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(Ye)}}).catch((e=>{throw Ge.create("idb-open",{originalErrorMessage:e.message})}))),Qe}async function Ze(e,t){var n;try{const n=(await Xe()).transaction(Ye,"readwrite"),r=n.objectStore(Ye);return await r.put(t,et(e)),n.done}catch(e){if(e instanceof ne)je.warn(e.message);else{const t=Ge.create("idb-set",{originalErrorMessage:null===(n=e)||void 0===n?void 0:n.message});je.warn(t.message)}}}function et(e){return`${e.name}!${e.options.appId}`}
/**
     * @license
     * Copyright 2021 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class tt{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rt(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),t=nt();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==t&&!this._heartbeatsCache.heartbeats.some((e=>e.date===t)))return this._heartbeatsCache.heartbeats.push({date:t,agent:e}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=nt(),{heartbeatsToSend:t,unsentEntries:n}=function(e,t=1024){const n=[];let r=e.slice();for(const o of e){const e=n.find((e=>e.agent===o.agent));if(e){if(e.dates.push(o.date),ot(n)>t){e.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),ot(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=X(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function nt(){return(new Date).toISOString().substring(0,10)}class rt{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!ee()&&te().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){const e=await async function(e){var t;try{return(await Xe()).transaction(Ye).objectStore(Ye).get(et(e))}catch(e){if(e instanceof ne)je.warn(e.message);else{const n=Ge.create("idb-get",{originalErrorMessage:null===(t=e)||void 0===t?void 0:t.message});je.warn(n.message)}}}(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ze(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;if(await this._canUseIndexedDBPromise){const n=await this.read();return Ze(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function ot(e){return X(JSON.stringify({version:2,heartbeats:e})).length}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */var at;at="",Re(new le("platform-logger",(e=>new Ue(e)),"PRIVATE")),Re(new le("heartbeat",(e=>new tt(e)),"PRIVATE")),Je(Be,Pe,at),Je(Be,Pe,"esm2017"),Je("fire-js","");const it="@firebase/installations",st="0.5.12",ct=1e4,lt="w:0.5.12",ut="FIS_v2",pt=36e5,dt=new re("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function ht(e){return e instanceof ne&&e.code.includes("request-failed")}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */function ft({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function mt(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function gt(e,t){const n=(await t.json()).error;return dt.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function $t({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function wt(e,{refreshToken:t}){const n=$t(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(t)),n}async function yt(e){const t=await e();return t.status>=500&&t.status<600?e():t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function bt(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const vt=/^[cdef][\w-]{21}$/;function xt(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e);return vt.test(t)?t:""}catch(e){return""}}function It(e){return`${e.appName}!${e.appId}`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const St=new Map;function Ct(e,t){const n=It(e);kt(n,t),function(e,t){const n=function(){!Tt&&"BroadcastChannel"in self&&(Tt=new BroadcastChannel("[Firebase] FID Change"),Tt.onmessage=e=>{kt(e.data.key,e.data.fid)});return Tt}();n&&n.postMessage({key:e,fid:t});0===St.size&&Tt&&(Tt.close(),Tt=null)}(n,t)}function kt(e,t){const n=St.get(e);if(n)for(const e of n)e(t)}let Tt=null;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const _t="firebase-installations-store";let Et=null;function Dt(){return Et||(Et=Ae("firebase-installations-database",1,{upgrade:(e,t)=>{if(0===t)e.createObjectStore(_t)}})),Et}async function At(e,t){const n=It(e),r=(await Dt()).transaction(_t,"readwrite"),o=r.objectStore(_t),a=await o.get(n);return await o.put(t,n),await r.done,a&&a.fid===t.fid||Ct(e,t.fid),t}async function Mt(e){const t=It(e),n=(await Dt()).transaction(_t,"readwrite");await n.objectStore(_t).delete(t),await n.done}async function zt(e,t){const n=It(e),r=(await Dt()).transaction(_t,"readwrite"),o=r.objectStore(_t),a=await o.get(n),i=t(a);return void 0===i?await o.delete(n):await o.put(i,n),await r.done,!i||a&&a.fid===i.fid||Ct(e,i.fid),i}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */async function Ot(e){let t;const n=await zt(e.appConfig,(n=>{const r=function(e){return Bt(e||{fid:xt(),registrationStatus:0})}(n),o=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(dt.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=async function(e,t){try{const n=await async function({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=ft(e),o=$t(e),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const i={fid:n,authVersion:ut,appId:e.appId,sdkVersion:lt},s={method:"POST",headers:o,body:JSON.stringify(i)},c=await yt((()=>fetch(r,s)));if(c.ok){const e=await c.json();return{fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:mt(e.authToken)}}throw await gt("Create Installation",c)}(e,t);return At(e.appConfig,n)}catch(n){throw ht(n)&&409===n.customData.serverCode?await Mt(e.appConfig):await At(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:Lt(e)}:{installationEntry:t}}(e,r);return t=o.registrationPromise,o.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function Lt(e){let t=await Ut(e.appConfig);for(;1===t.registrationStatus;)await bt(100),t=await Ut(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Ot(e);return n||t}return t}function Ut(e){return zt(e,(e=>{if(!e)throw dt.create("installation-not-found");return Bt(e)}))}function Bt(e){return 1===(t=e).registrationStatus&&t.registrationTime+ct<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}async function Pt({appConfig:e,heartbeatServiceProvider:t},n){const r=function(e,{fid:t}){return`${ft(e)}/${t}/authTokens:generate`}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(e,n),o=wt(e,n),a=t.getImmediate({optional:!0});if(a){const e=await a.getHeartbeatsHeader();e&&o.append("x-firebase-client",e)}const i={installation:{sdkVersion:lt,appId:e.appId}},s={method:"POST",headers:o,body:JSON.stringify(i)},c=await yt((()=>fetch(r,s)));if(c.ok){return mt(await c.json())}throw await gt("Generate Auth Token",c)}async function jt(e,t=!1){let n;const r=await zt(e.appConfig,(r=>{if(!Ft(r))throw dt.create("not-registered");const o=r.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+pt}(e)}(o))return r;if(1===o.requestStatus)return n=async function(e,t){let n=await Nt(e.appConfig);for(;1===n.authToken.requestStatus;)await bt(100),n=await Nt(e.appConfig);const r=n.authToken;return 0===r.requestStatus?jt(e,t):r}(e,t),r;{if(!navigator.onLine)throw dt.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(r);return n=async function(e,t){try{const n=await Pt(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await At(e.appConfig,r),n}catch(n){if(!ht(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await At(e.appConfig,n)}else await Mt(e.appConfig);throw n}}(e,t),t}}));return n?await n:r.authToken}function Nt(e){return zt(e,(e=>{if(!Ft(e))throw dt.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+ct<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */}))}function Ft(e){return void 0!==e&&2===e.registrationStatus}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function Ht(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await Ot(e);t&&await t}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */(n);return(await jt(n,t)).token}function Wt(e){return dt.create("missing-app-config-values",{valueName:e})}
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */const qt="installations",Rt=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw Wt("App Configuration");if(!e.name)throw Wt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Wt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,heartbeatServiceProvider:Ve(t,"heartbeat"),_delete:()=>Promise.resolve()}},Vt=e=>{const t=Ve(e.getProvider("app").getImmediate(),qt).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ot(t);return r?r.catch(console.error):jt(t).catch(console.error),n.fid}(t),getToken:e=>Ht(t,e)}};Re(new le(qt,Rt,"PUBLIC")),Re(new le("installations-internal",Vt,"PRIVATE")),Je(it,st),Je(it,st,"esm2017");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Gt="analytics",Kt="https://www.googletagmanager.com/gtag/js",Jt=new we("@firebase/analytics");
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
function Yt(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Qt(e,t,n,r){return async function(o,a,i){try{"event"===o?await async function(e,t,n,r,o){try{let a=[];if(o&&o.send_to){let e=o.send_to;Array.isArray(e)||(e=[e]);const r=await Yt(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),o=e&&t[e.appId];if(!o){a=[];break}a.push(o)}}0===a.length&&(a=Object.values(t)),await Promise.all(a),e("event",r,o||{})}catch(e){Jt.error(e)}}(e,t,n,a,i):"config"===o?await async function(e,t,n,r,o,a){const i=r[o];try{if(i)await t[i];else{const e=(await Yt(n)).find((e=>e.measurementId===o));e&&await t[e.appId]}}catch(e){Jt.error(e)}e("config",o,a)}(e,t,n,r,a,i):"consent"===o?e("consent","update",i):e("set",a)}catch(e){Jt.error(e)}}}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
const Xt=new re("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const Zt=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function en(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function tn(e,t=Zt,n){const{appId:r,apiKey:o,measurementId:a}=e.options;if(!r)throw Xt.create("no-app-id");if(!o){if(a)return{measurementId:a,appId:r};throw Xt.create("no-api-key")}const i=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},s=new rn;return setTimeout((async()=>{s.abort()}),void 0!==n?n:6e4),nn({appId:r,apiKey:o,measurementId:a},i,s,t)}async function nn(e,{throttleEndTimeMillis:t,backoffCount:n},r,o=Zt){var a,i;const{appId:s,measurementId:c}=e;try{await function(e,t){return new Promise(((n,r)=>{const o=Math.max(t-Date.now(),0),a=setTimeout(n,o);e.addEventListener((()=>{clearTimeout(a),r(Xt.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(r,t)}catch(e){if(c)return Jt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===(a=e)||void 0===a?void 0:a.message}]`),{appId:s,measurementId:c};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:r}=e,o={method:"GET",headers:en(r)},a="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),i=await fetch(a,o);if(200!==i.status&&304!==i.status){let e="";try{const n=await i.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw Xt.create("config-fetch-failed",{httpStatus:i.status,responseMessage:e})}return i.json()}(e);return o.deleteThrottleMetadata(s),t}catch(t){const a=t;if(!function(e){if(!(e instanceof ne&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(a)){if(o.deleteThrottleMetadata(s),c)return Jt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==a?void 0:a.message}]`),{appId:s,measurementId:c};throw t}const l=503===Number(null===(i=null==a?void 0:a.customData)||void 0===i?void 0:i.httpStatus)?se(n,o.intervalMillis,30):se(n,o.intervalMillis),u={throttleEndTimeMillis:Date.now()+l,backoffCount:n+1};return o.setThrottleMetadata(s,u),Jt.debug(`Calling attemptFetch again in ${l} millis`),nn(e,u,r,o)}}class rn{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}async function on(e,t,n,r,o,a,i){var s;const c=tn(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Jt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Jt.error(e))),t.push(c);const l=
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
async function(){var e;if(!ee())return Jt.warn(Xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await te()}catch(t){return Jt.warn(Xt.create("indexeddb-unavailable",{errorInfo:null===(e=t)||void 0===e?void 0:e.toString()}).message),!1}return!0}().then((e=>e?r.getId():void 0)),[u,p]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Kt))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${Kt}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(a,u.measurementId),o("js",new Date);const d=null!==(s=null==i?void 0:i.config)&&void 0!==s?s:{};return d.origin="firebase",d.update=!0,null!=p&&(d.firebase_id=p),o("config",u.measurementId,d),u.measurementId}
/**
     * @license
     * Copyright 2019 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */class an{constructor(e){this.app=e}_delete(){return delete sn[this.app.options.appId],Promise.resolve()}}let sn={},cn=[];const ln={};let un,pn,dn="dataLayer",hn=!1;function fn(){const e=[];if(function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Xt.create("invalid-analytics-context",{errorInfo:t});Jt.warn(n.message)}}function mn(e,t,n){fn();const r=e.options.appId;if(!r)throw Xt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Xt.create("no-api-key");Jt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=sn[r])throw Xt.create("already-exists",{id:r});if(!hn){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(dn);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,r,o){let a=function(...e){window[r].push(arguments)};return window[o]&&"function"==typeof window[o]&&(a=window[o]),window[o]=Qt(a,e,t,n),{gtagCore:a,wrappedGtag:window[o]}}(sn,cn,ln,dn,"gtag");pn=e,un=t,hn=!0}sn[r]=on(e,cn,ln,t,un,dn,n);return new an(e)}function gn(e,t,n,r){e=ce(e),async function(e,t,n,r,o){if(o&&o.global)e("event",n,r);else{const o=await t;e("event",n,Object.assign(Object.assign({},r),{send_to:o}))}}(pn,sn[e.app.options.appId],t,n,r).catch((e=>Jt.error(e)))}const $n="@firebase/analytics",wn="0.8.0";Re(new le(Gt,((e,{options:t})=>mn(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),Re(new le("analytics-internal",(function(e){try{const t=e.getProvider(Gt).getImmediate();return{logEvent:(e,n,r)=>gn(t,e,n,r)}}catch(e){throw Xt.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Je($n,wn),Je($n,wn,"esm2017");
/**
     * @license
     * Copyright 2020 Google LLC
     *
     * Licensed under the Apache License, Version 2.0 (the "License");
     * you may not use this file except in compliance with the License.
     * You may obtain a copy of the License at
     *
     *   http://www.apache.org/licenses/LICENSE-2.0
     *
     * Unless required by applicable law or agreed to in writing, software
     * distributed under the License is distributed on an "AS IS" BASIS,
     * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
     * See the License for the specific language governing permissions and
     * limitations under the License.
     */
Je("firebase","9.9.2","app");const yn=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:Ne,automaticDataCollectionEnabled:!1},t),r=n.name;if("string"!=typeof r||!r)throw Ge.create("bad-app-name",{appName:String(r)});const o=He.get(r);if(o){if(ae(e,o.options)&&ae(n,o.config))return o;throw Ge.create("duplicate-app",{appName:r})}const a=new de(r);for(const e of We.values())a.addComponent(e);const i=new Ke(e,n,a);return He.set(r,i),i}({apiKey:"AIzaSyCKI5ugoATk4ZIPBpXYd_JvpotryjDDrzE",authDomain:"ctc-eg.firebaseapp.com",projectId:"ctc-eg",storageBucket:"ctc-eg.appspot.com",messagingSenderId:"350248348226",appId:"1:350248348226:web:b5afb039230ff97dfd5bdb",measurementId:"G-S9SXNB843P"});function bn(t){let n,r;return{c(){n=$("img"),c(n.src,r=t[0])||x(n,"src",r),x(n,"alt",t[1]),x(n,"class","w-6 h-6 mr-2")},m(e,t){m(e,n,t)},p(e,[t]){1&t&&!c(n.src,r=e[0])&&x(n,"src",r),2&t&&x(n,"alt",e[1])},i:e,o:e,d(e){e&&g(n)}}}function vn(e,t,n){let{url:r}=t,{altText:o}=t;return e.$$set=e=>{"url"in e&&n(0,r=e.url),"altText"in e&&n(1,o=e.altText)},[r,o]}!function(e=function(e="[DEFAULT]"){const t=He.get(e);if(!t)throw Ge.create("no-app",{appName:e});return t}()){const t=Ve(e=ce(e),Gt);t.isInitialized()?t.getImmediate():function(e,t={}){const n=Ve(e,Gt);if(n.isInitialized()){const e=n.getImmediate();if(ae(t,n.getOptions()))return e;throw Xt.create("already-initialized")}n.initialize({options:t})}(e)}(yn);class xn extends J{constructor(e){super(),K(this,e,vn,bn,a,{url:0,altText:1})}}function In(e){let t,n,r,o,a,i;return r=new xn({props:{url:e[0],altText:e[2]}}),{c(){t=$("a"),n=$("button"),q(r.$$.fragment),o=b(),a=y(e[1]),x(n,"class","flex items-center justify-between rounded border border-light px-4 py-2"),x(t,"href",e[3]),x(t,"class","mr-4 mb-2 min-w-max")},m(e,s){m(e,t,s),f(t,n),R(r,n,null),f(n,o),f(n,a),i=!0},p(e,[n]){const o={};1&n&&(o.url=e[0]),4&n&&(o.altText=e[2]),r.$set(o),(!i||2&n)&&I(a,e[1]),(!i||8&n)&&x(t,"href",e[3])},i(e){i||(H(r.$$.fragment,e),i=!0)},o(e){W(r.$$.fragment,e),i=!1},d(e){e&&g(t),V(r)}}}function Sn(e,t,n){let{iconUrl:r}=t,{text:o}=t,{altText:a=o}=t,{url:i}=t;return e.$$set=e=>{"iconUrl"in e&&n(0,r=e.iconUrl),"text"in e&&n(1,o=e.text),"altText"in e&&n(2,a=e.altText),"url"in e&&n(3,i=e.url)},[r,o,a,i]}class Cn extends J{constructor(e){super(),K(this,e,Sn,In,a,{iconUrl:0,text:1,altText:2,url:3})}}function kn(e){let t;return{c(){t=$("span"),t.textContent="New",x(t,"class","new")},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function Tn(e){let t,n,r,o,a,i,s,c,u,w,v,C,k,T=e[1]&&kn();s=new Cn({props:{altText:"Windows logo",iconUrl:"./img/icon/windows.svg",text:"Windows via Steam",url:e[2]}}),u=new Cn({props:{altText:"Apple logo",iconUrl:"./img/icon/apple.svg",text:"iOS",url:e[3]}}),v=new Cn({props:{altText:"Android logo",iconUrl:"./img/icon/android.svg",text:"Android",url:e[4]}});const _=e[6].default,E=l(_,e,e[5],null);return{c(){t=$("div"),n=$("header"),r=y(e[0]),o=b(),T&&T.c(),a=b(),i=$("div"),q(s.$$.fragment),c=b(),q(u.$$.fragment),w=b(),q(v.$$.fragment),C=b(),E&&E.c(),x(n,"class","text-lg font-semibold mb-4 flex items-center"),x(i,"class","flex flex-wrap text-sm"),x(t,"class","w-11/12 md:w-5/12 my-2 px-8 py-6 bg-dark shadow border-[3px] border-light rounded-md"),S(t,"--tw-bg-opacity","0.44")},m(e,l){m(e,t,l),f(t,n),f(n,r),f(n,o),T&&T.m(n,null),f(t,a),f(t,i),R(s,i,null),f(i,c),R(u,i,null),f(i,w),R(v,i,null),f(t,C),E&&E.m(t,null),k=!0},p(e,[t]){(!k||1&t)&&I(r,e[0]),e[1]?T||(T=kn(),T.c(),T.m(n,null)):T&&(T.d(1),T=null);const o={};4&t&&(o.url=e[2]),s.$set(o);const a={};8&t&&(a.url=e[3]),u.$set(a);const i={};16&t&&(i.url=e[4]),v.$set(i),E&&E.p&&(!k||32&t)&&d(E,_,e,e[5],k?p(_,e[5],t,null):h(e[5]),null)},i(e){k||(H(s.$$.fragment,e),H(u.$$.fragment,e),H(v.$$.fragment,e),H(E,e),k=!0)},o(e){W(s.$$.fragment,e),W(u.$$.fragment,e),W(v.$$.fragment,e),W(E,e),k=!1},d(e){e&&g(t),T&&T.d(),V(s),V(u),V(v),E&&E.d(e)}}}function _n(e,t,n){let{$$slots:r={},$$scope:o}=t,{title:a}=t,{isNew:i=!1}=t,{windowsUrl:s}=t,{appleUrl:c}=t,{androidUrl:l}=t;return e.$$set=e=>{"title"in e&&n(0,a=e.title),"isNew"in e&&n(1,i=e.isNew),"windowsUrl"in e&&n(2,s=e.windowsUrl),"appleUrl"in e&&n(3,c=e.appleUrl),"androidUrl"in e&&n(4,l=e.androidUrl),"$$scope"in e&&n(5,o=e.$$scope)},[a,i,s,c,l,o,r]}class En extends J{constructor(e){super(),K(this,e,_n,Tn,a,{title:0,isNew:1,windowsUrl:2,appleUrl:3,androidUrl:4})}}function Dn(e){let t,n,r,o;const a=e[2].default,i=l(a,e,e[1],null);return{c(){t=$("h3"),n=y(e[0]),r=b(),i&&i.c(),x(t,"class","mt-6 mb-0")},m(e,a){m(e,t,a),f(t,n),m(e,r,a),i&&i.m(e,a),o=!0},p(e,[t]){(!o||1&t)&&I(n,e[0]),i&&i.p&&(!o||2&t)&&d(i,a,e,e[1],o?p(a,e[1],t,null):h(e[1]),null)},i(e){o||(H(i,e),o=!0)},o(e){W(i,e),o=!1},d(e){e&&g(t),e&&g(r),i&&i.d(e)}}}function An(e,t,n){let{$$slots:r={},$$scope:o}=t,{question:a}=t;return e.$$set=e=>{"question"in e&&n(0,a=e.question),"$$scope"in e&&n(1,o=e.$$scope)},[a,o,r]}class Mn extends J{constructor(e){super(),K(this,e,An,Dn,a,{question:0})}}function zn(e){let t,n,r,o,a,i;n=new xn({props:{url:e[2],altText:e[3]}});const s=e[5].default,c=l(s,e,e[4],null);return{c(){t=$("h3"),q(n.$$.fragment),r=b(),o=y(e[0]),a=b(),c&&c.c()},m(e,s){m(e,t,s),R(n,t,null),f(t,r),f(t,o),m(e,a,s),c&&c.m(e,s),i=!0},p(e,t){const r={};4&t&&(r.url=e[2]),8&t&&(r.altText=e[3]),n.$set(r),(!i||1&t)&&I(o,e[0]),c&&c.p&&(!i||16&t)&&d(c,s,e,e[4],i?p(s,e[4],t,null):h(e[4]),null)},i(e){i||(H(n.$$.fragment,e),H(c,e),i=!0)},o(e){W(n.$$.fragment,e),W(c,e),i=!1},d(e){e&&g(t),V(n),e&&g(a),c&&c.d(e)}}}function On(e){let t,n,r,o=e[0]&&Ln(e);const a=e[5].default,i=l(a,e,e[4],null);return{c(){t=$("a"),o&&o.c(),n=b(),i&&i.c(),x(t,"href",e[1]),x(t,"target","_blank")},m(e,a){m(e,t,a),o&&o.m(t,null),f(t,n),i&&i.m(t,null),r=!0},p(e,s){e[0]?o?(o.p(e,s),1&s&&H(o,1)):(o=Ln(e),o.c(),H(o,1),o.m(t,n)):o&&(N(),W(o,1,1,(()=>{o=null})),F()),i&&i.p&&(!r||16&s)&&d(i,a,e,e[4],r?p(a,e[4],s,null):h(e[4]),null),(!r||2&s)&&x(t,"href",e[1])},i(e){r||(H(o),H(i,e),r=!0)},o(e){W(o),W(i,e),r=!1},d(e){e&&g(t),o&&o.d(),i&&i.d(e)}}}function Ln(e){let t,n,r,o,a;return n=new xn({props:{url:e[2],altText:e[3]}}),{c(){t=$("h3"),q(n.$$.fragment),r=b(),o=y(e[0])},m(e,i){m(e,t,i),R(n,t,null),f(t,r),f(t,o),a=!0},p(e,t){const r={};4&t&&(r.url=e[2]),8&t&&(r.altText=e[3]),n.$set(r),(!a||1&t)&&I(o,e[0])},i(e){a||(H(n.$$.fragment,e),a=!0)},o(e){W(n.$$.fragment,e),a=!1},d(e){e&&g(t),V(n)}}}function Un(e){let t,n,r,o;const a=[On,zn],i=[];function s(e,t){return e[1]?0:1}return n=s(e),r=i[n]=a[n](e),{c(){t=$("div"),r.c(),x(t,"class","info"),C(t,"cursor-pointer",e[1])},m(e,r){m(e,t,r),i[n].m(t,null),o=!0},p(e,[o]){let c=n;n=s(e),n===c?i[n].p(e,o):(N(),W(i[c],1,1,(()=>{i[c]=null})),F(),r=i[n],r?r.p(e,o):(r=i[n]=a[n](e),r.c()),H(r,1),r.m(t,null)),2&o&&C(t,"cursor-pointer",e[1])},i(e){o||(H(r),o=!0)},o(e){W(r),o=!1},d(e){e&&g(t),i[n].d()}}}function Bn(e,t,n){let{$$slots:r={},$$scope:o}=t,{title:a}=t,{url:i=null}=t,{iconUrl:s}=t,{altText:c=a}=t;return e.$$set=e=>{"title"in e&&n(0,a=e.title),"url"in e&&n(1,i=e.url),"iconUrl"in e&&n(2,s=e.iconUrl),"altText"in e&&n(3,c=e.altText),"$$scope"in e&&n(4,o=e.$$scope)},[a,i,s,c,o,r]}class Pn extends J{constructor(e){super(),K(this,e,Bn,Un,a,{title:0,url:1,iconUrl:2,altText:3})}}function jn(t){let n,o,a,i,s,c,l,u,p,d,h,y,I,k,T,_,E,D,A,M,z,O,L,U;return{c(){n=$("nav"),o=$("div"),a=w("svg"),i=w("rect"),s=w("rect"),c=w("rect"),l=b(),u=$("div"),p=$("a"),p.textContent="Home",d=b(),h=$("a"),h.textContent="Apps",y=b(),I=$("a"),I.textContent="Merch",k=b(),T=$("a"),T.textContent="Info",_=b(),E=$("a"),E.textContent="About us",D=b(),A=$("a"),A.textContent="Submissions",M=b(),z=$("a"),z.textContent="FAQs",x(i,"width","100"),x(i,"height","10"),x(s,"y","30"),x(s,"width","100"),x(s,"height","10"),x(c,"y","60"),x(c,"width","100"),x(c,"height","10"),x(a,"viewBox","0 0 100 80"),x(a,"class","w-6 h-6 cursor-pointer text-white"),S(a,"fill","currentColor"),x(o,"class","sm:hidden px-4 pt-6 pb-4"),x(p,"href","#home"),x(h,"href","#apps"),x(I,"href","#merch"),x(T,"href","#info"),x(E,"href","#about"),x(A,"href","#submissions"),x(z,"href","#faq"),x(u,"class",O="sm:mx-auto md:mr-0 sm:w-fit flex flex-col sm:flex-row justify-end overflow-hidden max-h-0 transition-[max-height] sm:max-h-[32rem] "+(t[0]?"max-h-[32rem]":"")),C(u,"duration-2",t[0]),C(u,"duration-1",!t[0]),x(n,"class","px-4 sticky top-0 bg-inherit z-10"),C(n,"shadow-md",t[1])},m(e,r){m(e,n,r),f(n,o),f(o,a),f(a,i),f(a,s),f(a,c),f(n,l),f(n,u),f(u,p),f(u,d),f(u,h),f(u,y),f(u,I),f(u,k),f(u,T),f(u,_),f(u,E),f(u,D),f(u,A),f(u,M),f(u,z),L||(U=[v(a,"click",t[2]),v(u,"click",t[3]),v(n,"blur",t[4])],L=!0)},p(e,[t]){1&t&&O!==(O="sm:mx-auto md:mr-0 sm:w-fit flex flex-col sm:flex-row justify-end overflow-hidden max-h-0 transition-[max-height] sm:max-h-[32rem] "+(e[0]?"max-h-[32rem]":""))&&x(u,"class",O),1&t&&C(u,"duration-2",e[0]),1&t&&C(u,"duration-1",!e[0]),2&t&&C(n,"shadow-md",e[1])},i:e,o:e,d(e){e&&g(n),L=!1,r(U)}}}function Nn(e,t,n){let r=!1,o=!1;document.addEventListener("scroll",(()=>n(1,o=window.scrollY>0)));return[r,o,()=>n(0,r=!r),()=>n(0,r=!1),()=>n(0,r=!1)]}class Fn extends J{constructor(e){super(),K(this,e,Nn,jn,a,{})}}function Hn(t){let n;return{c(){n=$("p"),n.textContent="Search for “SudokuPad” on Amazon"},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function Wn(t){let n;return{c(){n=$("div"),n.innerHTML='<img src="./img/cap.png" alt="Cap" class="w-1/2 sm:w-1/3 max-w-[16rem]"/> \n      <img src="./img/bottle.png" alt="Bottle" class="w-1/2 sm:w-1/3 max-w-[16rem]"/> \n      <img src="./img/hoodie.png" alt="Hoodie" class="w-1/2 sm:w-1/3 max-w-[16rem]"/>',x(n,"class","flex flex-col sm:flex-row justify-between items-center")},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function qn(t){let n;return{c(){n=$("p"),n.textContent="Our merchandise (including birthday merch)"},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function Rn(t){let n;return{c(){n=$("p"),n.textContent="Become part of the CTC fan Discord server"},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function Vn(t){let n;return{c(){n=$("p"),n.textContent="Join the community, support us and try our puzzle hunts"},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function Gn(t){let n;return{c(){n=$("p"),n.textContent="Our back catalogue (all categorised with links)"},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function Kn(t){let n;return{c(){n=$("p"),n.innerHTML='Send us puzzles to solve or contact us: <a href="mailto:crackingthecryptic@gmail.com">crackingthecryptic@gmail.com</a>'},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function Jn(t){let n;return{c(){n=$("p"),n.textContent="Mark Goodliffe / Simon Anthony, Box 102, 56 Gloucester Road, London SW7\n        4UB"},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function Yn(t){let n,r,o;return{c(){n=$("p"),n.innerHTML='Twitter:\n        <a href="https://twitter.com/crypticcracking" target="_blank">@crypticcracking</a> \n        <a href="https://twitter.com/search?q=(%23crypticcracking)&amp;src=typed_query" target="_blank">#crypticcracking</a>',r=b(),o=$("p"),o.innerHTML='Instagram:\n        <a href="https://www.instagram.com/crackingthecryptic/?hl=en" target="_blank">@crypticcracking</a> (for how to solve daily clues from The Times)'},m(e,t){m(e,n,t),m(e,r,t),m(e,o,t)},p:e,d(e){e&&g(n),e&&g(r),e&&g(o)}}}function Qn(t){let n;return{c(){n=$("p"),n.textContent="Tim McCaskey (Guitar) or Lucy Audrin (Piano) plays Mozart's Sonata No.\n        16 (“Sonata Facile”)"},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function Xn(t){let n;return{c(){n=$("p"),n.textContent="Play the puzzle in the video by clicking the link under the video.\n        Thanks to Sam Cappleman-Lynes and Sven Neumann for their work."},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function Zn(t){let n;return{c(){n=$("p"),n.textContent="Melvyn Mainini"},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function er(t){let n;return{c(){n=$("p"),n.textContent="Joel Blundell"},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function tr(t){let n;return{c(){n=$("p"),n.textContent="We get hundreds of communications daily, and though we try to keep up as\n      far as possible with everything sent to us, necessarily we can't\n      reply to everything, and quite a few of the things we are asked are\n      recurrent questions. Often your public queries will be answered by our\n      helpful viewers directly. For private communications, give us a few weeks\n      at least, and check these FAQs and our puzzle submission preferences for\n      possible answers."},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function nr(t){let n;return{c(){n=$("p"),n.textContent="The software just checks for repeat digits in rows, columns and boxes. If\n      the puzzle has extra constraints, it doesn't check those."},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function rr(t){let n;return{c(){n=$("p"),n.textContent="You haven't. Our solves are rigorously logical and rule out\n      alternative solutions. What you have found is a solution that obeys most\n      of the rules, but is wrong in some respect, perhaps due to one of the\n      constraints. Check it carefully, because our software doesn't check\n      extra constraints (see Q2)."},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function or(t){let n;return{c(){n=$("p"),n.innerHTML='We have made one <a href="https://www.youtube.com/watch?v=936S5jWQTYE" target="_blank">video</a> on setting a Sandwich Sudoku. We&#39;re very happy for the setters we admire\n      to concentrate on setting entertaining puzzles for us to solve without necessarily\n      recording how they do it, and there may be some aspect of “We must not\n      let daylight in upon the magic.”'},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function ar(t){let n;return{c(){n=$("p"),n.innerHTML='Definitely. But please see our puzzle <a href="#submissions">submission guidelines\n      </a>. They help our testers ensure the video content will be high quality.\n      We prefer not to receive crossword submissions at all.'},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function ir(t){let n;return{c(){n=$("p"),n.textContent="It's by Mozart, and is his Piano Sonata No. 16 in C Major,\n      “Sonata facile” K545."},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function sr(t){let n;return{c(){n=$("p"),n.textContent="We're not familiar with the technology, and don't think it would\n      add much to our explanations of where we're looking."},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function cr(t){let n;return{c(){n=$("p"),n.textContent="On our apps, you can be sure that each puzzle has been crafted for your\n      enjoyment, tested and hinted by us, and will help you learn how to solve\n      better. Most of the free content out there uses computer-generated\n      puzzles, with difficulties based on computer solving, “Hints”\n      in those puzzles will often just provide an extra number, given with no\n      logical reason."},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function lr(t){let n;return{c(){n=$("p"),n.textContent="The channel is now mostly about sudoku variants and pencil puzzles. We\n      will be doing more cryptic crossword content, but it will probably be on\n      Patreon. We're keeping the channel name, because of the goodwill\n      built up with it."},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function ur(t){let n;return{c(){n=$("p"),n.textContent="We prefer to focus on producing plenty of content that people are tuning\n      in for."},m(e,t){m(e,n,t)},p:e,d(e){e&&g(n)}}}function pr(e){let t,n,r,o,a,i,s,l,u,p,d,h,w,y,v,I,S,C,k,T,_,E,D,A,M,z,O,L,U,B,P,j,N,F,G,K,J,Y,Q,X,Z,ee,te,ne,re,oe,ae,ie,se,ce,le,ue,pe,de,he,fe,me,ge,$e,we,ye,be,ve,xe,Ie,Se,Ce,ke,Te,_e,Ee,De,Ae,Me,ze,Oe,Le,Ue,Be,Pe,je,Ne,Fe,He,We,qe,Re,Ve,Ge,Ke,Je,Ye,Qe,Xe,Ze,et,tt;return t=new Fn({}),I=new En({props:{title:"Sudoku Pad",isNew:!0,windowsUrl:"https://store.steampowered.com/app/1706870/Svens_SudokuPad/",appleUrl:"https://apps.apple.com/us/app/svens-sudokupad/id1570622073",androidUrl:"https://play.google.com/store/apps/details?id=com.svencodes.sudokupad",$$slots:{default:[Hn]},$$scope:{ctx:e}}}),C=new En({props:{title:"Arrow Sudoku App",isNew:!0,windowsUrl:"https://store.steampowered.com/app/1613680/Arrow_Sudoku/",appleUrl:"https://apps.apple.com/us/app/arrow-sudoku/id1568407537",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.ArrowSudoku"}}),T=new En({props:{title:"Killer Sudoku App",windowsUrl:"https://store.steampowered.com/app/1471910/Killer_Sudoku/",appleUrl:"https://apps.apple.com/us/app/killer-sudoku-ctc/id1544165118",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.KillerSudoku&hl=en_US≷=US"}}),E=new En({props:{title:"Miracle Sudoku App",windowsUrl:"https://store.steampowered.com/app/1377260/Miracle_Sudoku/",appleUrl:"https://apps.apple.com/us/app/id1527363795",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.MiracleSudokuCTC"}}),A=new En({props:{title:"Thermo Sudoku App",windowsUrl:"https://store.steampowered.com/app/1316390/Thermo_Sudoku/",appleUrl:"https://apps.apple.com/us/app/thermo-sudoku/id1513994223",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.ThermoSudoku"}}),z=new En({props:{title:"Chess Sudoku App",windowsUrl:"https://store.steampowered.com/app/1250560/Chess_Sudoku/",appleUrl:"https://apps.apple.com/us/app/chess-sudoku/id1500654482?ls=1",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.ChessSudoku&hl=en_US"}}),L=new En({props:{title:"Classic Sudoku App",windowsUrl:"https://store.steampowered.com/app/1188330/Classic_Sudoku/",appleUrl:"https://apps.apple.com/us/app/classic-sudoku/id1488838275?ls=1",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.ClassicSudoku&hl=en_US"}}),B=new En({props:{title:"Sandwich Sudoku App",windowsUrl:"https://store.steampowered.com/app/1117310/Sandwich_Sudoku/",appleUrl:"https://apps.apple.com/us/app/sandwich-sudoku/id1476116705?ls=1",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.SandwichSudoku"}}),J=new Pn({props:{title:"",url:"https://cracking-the-cryptic.creator-spring.com/",iconUrl:"",$$slots:{default:[Wn]},$$scope:{ctx:e}}}),se=new Pn({props:{title:"Merchandise",url:"https://cracking-the-cryptic.creator-spring.com/",iconUrl:"./img/icon/merch.svg",$$slots:{default:[qn]},$$scope:{ctx:e}}}),le=new Pn({props:{title:"Discord",url:"https://discord.gg/BbN89j5",iconUrl:"./img/icon/discord.svg",$$slots:{default:[Rn]},$$scope:{ctx:e}}}),pe=new Pn({props:{title:"Patreon",url:"https://www.patreon.com/crackingthecryptic",iconUrl:"./img/icon/patreon.svg",$$slots:{default:[Vn]},$$scope:{ctx:e}}}),he=new Pn({props:{title:"Catalogue",url:"https://tinyurl.com/CTCCatalogue",iconUrl:"./img/icon/contents.svg",$$slots:{default:[Gn]},$$scope:{ctx:e}}}),me=new Pn({props:{title:"Email",iconUrl:"./img/icon/email.svg",$$slots:{default:[Kn]},$$scope:{ctx:e}}}),$e=new Pn({props:{title:"Snailmail",iconUrl:"./img/icon/snail.svg",$$slots:{default:[Jn]},$$scope:{ctx:e}}}),ye=new Pn({props:{title:"Follow us",iconUrl:"./img/icon/social_media.svg",$$slots:{default:[Yn]},$$scope:{ctx:e}}}),ve=new Pn({props:{title:"Music",iconUrl:"./img/icon/music.svg",$$slots:{default:[Qn]},$$scope:{ctx:e}}}),Ie=new Pn({props:{title:"Software",iconUrl:"./img/icon/software.svg",$$slots:{default:[Xn]},$$scope:{ctx:e}}}),Ce=new Pn({props:{title:"Logo Design",iconUrl:"./img/icon/paint_brush.svg",$$slots:{default:[Zn]},$$scope:{ctx:e}}}),Te=new Pn({props:{title:"Opening Credits Design",iconUrl:"./img/icon/film.svg",$$slots:{default:[er]},$$scope:{ctx:e}}}),Ue=new Mn({props:{question:"Why haven't you replied to my email/comment/tweet?",$$slots:{default:[tr]},$$scope:{ctx:e}}}),Pe=new Mn({props:{question:"Why does your software sometimes say the solution is right when it's not?",$$slots:{default:[nr]},$$scope:{ctx:e}}}),Ne=new Mn({props:{question:"I have found an alternative solution to a puzzle you showed. What's going on?",$$slots:{default:[rr]},$$scope:{ctx:e}}}),He=new Mn({props:{question:"Can we see a video about how to set a sudoku/puzzle? ",$$slots:{default:[or]},$$scope:{ctx:e}}}),qe=new Mn({props:{question:"Can I send you a puzzle to solve?",$$slots:{default:[ar]},$$scope:{ctx:e}}}),Ve=new Mn({props:{question:"What is the music at the beginning of the videos?",$$slots:{default:[ir]},$$scope:{ctx:e}}}),Ke=new Mn({props:{question:"Will you do an eye-tracker on your videos so we can see where you're looking?",$$slots:{default:[sr]},$$scope:{ctx:e}}}),Ye=new Mn({props:{question:"Why do you charge for your apps when there is so much free sudoku content available?",$$slots:{default:[cr]},$$scope:{ctx:e}}}),Xe=new Mn({props:{question:"Will you be doing more crossword videos?",$$slots:{default:[lr]},$$scope:{ctx:e}}}),et=new Mn({props:{question:"Can't you improve the production of your videos?",$$slots:{default:[ur]},$$scope:{ctx:e}}}),{c(){q(t.$$.fragment),n=b(),r=$("header"),r.innerHTML='<div class="flex flex-col md:flex-row md:h-auto"><div class="flex flex-col"><h1 class="mt-4 md:mt-2">Cracking the Cryptic</h1> \n      <div class="mt-4 md:mt-12 pr-12"><p>We are a Youtube channel called <a href="https://www.youtube.com/c/CrackingTheCryptic" target="_blank">Cracking the Cryptic</a>.</p> \n        <p>The PDF of our book is now available! If you backed the <a href="https://www.kickstarter.com/projects/peterchayward/cracking-the-cryptics-greatest-hits/description" target="_blank">Kickstarter</a>, go to the Jellybeangames email receipt, where there is a button to\n          download the pdf. Delivery of the physical book should be underway\n          soon.</p></div></div> \n    <div class="w-11/12 sm:w-8/12 md:w-5/12 max-w-[768px] h-auto md:h-full object-cover mx-auto md:mx-0 mt-12 md:mt-24 bg-light translate-x-4 translate-y-4 group hover:translate-x-[1.1rem] hover:translate-y-[1.1rem] hover:rotate-1 transition"><img src="./img/lads.jpg" alt="Simon Anthony and Mark Goodliffe" width="768" height="768" class="text-light -translate-x-4 -translate-y-4 group-hover:-rotate-1 group-hover:-translate-x-[1.1rem] group-hover:-translate-y-[1.1rem] transition"/></div></div>',o=b(),a=$("section"),i=$("img"),l=b(),u=$("img"),d=b(),h=$("div"),w=$("h2"),w.textContent="Apps",y=b(),v=$("div"),q(I.$$.fragment),S=b(),q(C.$$.fragment),k=b(),q(T.$$.fragment),_=b(),q(E.$$.fragment),D=b(),q(A.$$.fragment),M=b(),q(z.$$.fragment),O=b(),q(L.$$.fragment),U=b(),q(B.$$.fragment),P=b(),j=$("section"),N=$("h2"),N.textContent="Merch",F=b(),G=$("p"),G.textContent="We have some great merchandise available.",K=b(),q(J.$$.fragment),Y=b(),Q=$("section"),X=$("img"),ee=b(),te=$("img"),re=b(),oe=$("div"),ae=$("h2"),ae.textContent="Information",ie=b(),q(se.$$.fragment),ce=b(),q(le.$$.fragment),ue=b(),q(pe.$$.fragment),de=b(),q(he.$$.fragment),fe=b(),q(me.$$.fragment),ge=b(),q($e.$$.fragment),we=b(),q(ye.$$.fragment),be=b(),q(ve.$$.fragment),xe=b(),q(Ie.$$.fragment),Se=b(),q(Ce.$$.fragment),ke=b(),q(Te.$$.fragment),_e=b(),Ee=$("section"),Ee.innerHTML="<h2>About us</h2> \n  <p>Hi! We&#39;re Simon Anthony and Mark Goodliffe, two of the UK&#39;s most\n    enthusiastic puzzle solvers. We have both represented the UK at the World\n    Sudoku Championships and the World Puzzle Championships. We&#39;re also\n    “cryptic crossword” aficionados. Mark is the twelve-time winner\n    of The Times championship and Simon is the former record holder for most\n    consecutive correct solutions to The Listener crossword. We hope we can help\n    your puzzle solving while also introducing you to some of the world&#39;s best\n    puzzles.</p>",De=b(),Ae=$("section"),Ae.innerHTML="<h2>Guidance for Sudoku/Puzzle Submissions</h2> \n  <p>If you create a puzzle/sudoku that you&#39;d like to see us solve on Cracking\n    The Cryptic then a) FANTASTIC! And b) Please, when sending your submission\n    to us, do make sure you adhere to the following requirements. These help our\n    testers to get through the sheer volume of requests we receive. Thank you.</p> \n  <ol><li>1. Make sure your puzzle has been test-solved and contains no errors.</li> \n    <li>2. Please indicate in the covering email your preferences as regards your\n      puzzle - i.e. are you only looking for it to appear in a video on the\n      channel; or, if we decide not to video it but like the puzzle, are you\n      happy for us to release it as a community post or on patreon (free or\n      behind the paywall)? “Use it how you choose” covers\n      everything!</li> \n    <li>3. Your puzzle email should include: i) the puzzle presented exactly as\n      you&#39;d like our testers to see it; ii) on a separate page, the solution.\n      The solution should include a description of any difficult/interesting\n      steps in the logical path. This is not for Simon &amp; Mark but is to aid the\n      testers. We endeavour not to publish puzzles that require\n      bifurcation/guesswork so, if a tester feels their only chance to crack a\n      difficult puzzle is using such techniques then it is very likely the\n      puzzle will be rejected. By including the logic path, the tester may\n      appreciate that some logical step WAS reasonable and so still pass the\n      puzzle on to Simon &amp; Mark.</li> \n    <li>4. Send the above to: crackingthecryptic@gmail.com Please be aware that we\n      do not have time to reply to submissions. You should assume that, if you\n      hear nothing and the puzzle has not appeared in a video/community\n      post/patreon post within a month then, unfortunately, we have not decided\n      to use the puzzle. At this point, by all means do submit another puzzle\n      (but please do wait this one month period before doing so).</li></ol>",Me=b(),ze=$("section"),Oe=$("h2"),Oe.textContent="Frequently Asked Questions",Le=b(),q(Ue.$$.fragment),Be=b(),q(Pe.$$.fragment),je=b(),q(Ne.$$.fragment),Fe=b(),q(He.$$.fragment),We=b(),q(qe.$$.fragment),Re=b(),q(Ve.$$.fragment),Ge=b(),q(Ke.$$.fragment),Je=b(),q(Ye.$$.fragment),Qe=b(),q(Xe.$$.fragment),Ze=b(),q(et.$$.fragment),x(r,"class","contain"),c(i.src,s="./img/hexagon.svg")||x(i,"src","./img/hexagon.svg"),x(i,"alt","Background Logo"),x(i,"class","hexagon top-48 md:top-24 -right-[25%] lg:-right-[10%]"),c(u.src,p="./img/hexagon.svg")||x(u,"src","./img/hexagon.svg"),x(u,"alt","Background Logo"),x(u,"class","hexagon bottom-48 md:bottom-24 -left-[25%] lg:-left-[10%]"),x(v,"class","flex flex-col content-center md:flex-row md:justify-around flex-wrap xl:w-2/3 mx-auto"),x(h,"class","contain"),x(a,"class","scroll-m-[26rem] relative overflow-x-hidden"),x(a,"id","apps"),x(j,"class","contain"),x(j,"id","merch"),c(X.src,Z="./img/hexagon.svg")||x(X,"src","./img/hexagon.svg"),x(X,"alt","Background Logo"),x(X,"class","hexagon top-48 md:top-24 -right-[25%] lg:-right-[10%]"),c(te.src,ne="./img/hexagon.svg")||x(te,"src","./img/hexagon.svg"),x(te,"alt","Background Logo"),x(te,"class","hexagon bottom-48 md:bottom-24 -left-[25%] lg:-left-[10%]"),x(oe,"class","contain"),x(Q,"class","relative overflow-x-hidden"),x(Q,"id","info"),x(Ee,"class","contain"),x(Ee,"id","about"),x(Ae,"class","contain"),x(Ae,"id","submissions"),x(ze,"class","contain"),x(ze,"id","faq")},m(e,s){R(t,e,s),m(e,n,s),m(e,r,s),m(e,o,s),m(e,a,s),f(a,i),f(a,l),f(a,u),f(a,d),f(a,h),f(h,w),f(h,y),f(h,v),R(I,v,null),f(v,S),R(C,v,null),f(v,k),R(T,v,null),f(v,_),R(E,v,null),f(v,D),R(A,v,null),f(v,M),R(z,v,null),f(v,O),R(L,v,null),f(v,U),R(B,v,null),m(e,P,s),m(e,j,s),f(j,N),f(j,F),f(j,G),f(j,K),R(J,j,null),m(e,Y,s),m(e,Q,s),f(Q,X),f(Q,ee),f(Q,te),f(Q,re),f(Q,oe),f(oe,ae),f(oe,ie),R(se,oe,null),f(oe,ce),R(le,oe,null),f(oe,ue),R(pe,oe,null),f(oe,de),R(he,oe,null),f(oe,fe),R(me,oe,null),f(oe,ge),R($e,oe,null),f(oe,we),R(ye,oe,null),f(oe,be),R(ve,oe,null),f(oe,xe),R(Ie,oe,null),f(oe,Se),R(Ce,oe,null),f(oe,ke),R(Te,oe,null),m(e,_e,s),m(e,Ee,s),m(e,De,s),m(e,Ae,s),m(e,Me,s),m(e,ze,s),f(ze,Oe),f(ze,Le),R(Ue,ze,null),f(ze,Be),R(Pe,ze,null),f(ze,je),R(Ne,ze,null),f(ze,Fe),R(He,ze,null),f(ze,We),R(qe,ze,null),f(ze,Re),R(Ve,ze,null),f(ze,Ge),R(Ke,ze,null),f(ze,Je),R(Ye,ze,null),f(ze,Qe),R(Xe,ze,null),f(ze,Ze),R(et,ze,null),tt=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),I.$set(n);const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),J.$set(r);const o={};1&t&&(o.$$scope={dirty:t,ctx:e}),se.$set(o);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),le.$set(a);const i={};1&t&&(i.$$scope={dirty:t,ctx:e}),pe.$set(i);const s={};1&t&&(s.$$scope={dirty:t,ctx:e}),he.$set(s);const c={};1&t&&(c.$$scope={dirty:t,ctx:e}),me.$set(c);const l={};1&t&&(l.$$scope={dirty:t,ctx:e}),$e.$set(l);const u={};1&t&&(u.$$scope={dirty:t,ctx:e}),ye.$set(u);const p={};1&t&&(p.$$scope={dirty:t,ctx:e}),ve.$set(p);const d={};1&t&&(d.$$scope={dirty:t,ctx:e}),Ie.$set(d);const h={};1&t&&(h.$$scope={dirty:t,ctx:e}),Ce.$set(h);const f={};1&t&&(f.$$scope={dirty:t,ctx:e}),Te.$set(f);const m={};1&t&&(m.$$scope={dirty:t,ctx:e}),Ue.$set(m);const g={};1&t&&(g.$$scope={dirty:t,ctx:e}),Pe.$set(g);const $={};1&t&&($.$$scope={dirty:t,ctx:e}),Ne.$set($);const w={};1&t&&(w.$$scope={dirty:t,ctx:e}),He.$set(w);const y={};1&t&&(y.$$scope={dirty:t,ctx:e}),qe.$set(y);const b={};1&t&&(b.$$scope={dirty:t,ctx:e}),Ve.$set(b);const v={};1&t&&(v.$$scope={dirty:t,ctx:e}),Ke.$set(v);const x={};1&t&&(x.$$scope={dirty:t,ctx:e}),Ye.$set(x);const S={};1&t&&(S.$$scope={dirty:t,ctx:e}),Xe.$set(S);const C={};1&t&&(C.$$scope={dirty:t,ctx:e}),et.$set(C)},i(e){tt||(H(t.$$.fragment,e),H(I.$$.fragment,e),H(C.$$.fragment,e),H(T.$$.fragment,e),H(E.$$.fragment,e),H(A.$$.fragment,e),H(z.$$.fragment,e),H(L.$$.fragment,e),H(B.$$.fragment,e),H(J.$$.fragment,e),H(se.$$.fragment,e),H(le.$$.fragment,e),H(pe.$$.fragment,e),H(he.$$.fragment,e),H(me.$$.fragment,e),H($e.$$.fragment,e),H(ye.$$.fragment,e),H(ve.$$.fragment,e),H(Ie.$$.fragment,e),H(Ce.$$.fragment,e),H(Te.$$.fragment,e),H(Ue.$$.fragment,e),H(Pe.$$.fragment,e),H(Ne.$$.fragment,e),H(He.$$.fragment,e),H(qe.$$.fragment,e),H(Ve.$$.fragment,e),H(Ke.$$.fragment,e),H(Ye.$$.fragment,e),H(Xe.$$.fragment,e),H(et.$$.fragment,e),tt=!0)},o(e){W(t.$$.fragment,e),W(I.$$.fragment,e),W(C.$$.fragment,e),W(T.$$.fragment,e),W(E.$$.fragment,e),W(A.$$.fragment,e),W(z.$$.fragment,e),W(L.$$.fragment,e),W(B.$$.fragment,e),W(J.$$.fragment,e),W(se.$$.fragment,e),W(le.$$.fragment,e),W(pe.$$.fragment,e),W(he.$$.fragment,e),W(me.$$.fragment,e),W($e.$$.fragment,e),W(ye.$$.fragment,e),W(ve.$$.fragment,e),W(Ie.$$.fragment,e),W(Ce.$$.fragment,e),W(Te.$$.fragment,e),W(Ue.$$.fragment,e),W(Pe.$$.fragment,e),W(Ne.$$.fragment,e),W(He.$$.fragment,e),W(qe.$$.fragment,e),W(Ve.$$.fragment,e),W(Ke.$$.fragment,e),W(Ye.$$.fragment,e),W(Xe.$$.fragment,e),W(et.$$.fragment,e),tt=!1},d(e){V(t,e),e&&g(n),e&&g(r),e&&g(o),e&&g(a),V(I),V(C),V(T),V(E),V(A),V(z),V(L),V(B),e&&g(P),e&&g(j),V(J),e&&g(Y),e&&g(Q),V(se),V(le),V(pe),V(he),V(me),V($e),V(ye),V(ve),V(Ie),V(Ce),V(Te),e&&g(_e),e&&g(Ee),e&&g(De),e&&g(Ae),e&&g(Me),e&&g(ze),V(Ue),V(Pe),V(Ne),V(He),V(qe),V(Ve),V(Ke),V(Ye),V(Xe),V(et)}}}return new class extends J{constructor(e){super(),K(this,e,null,pr,a,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
