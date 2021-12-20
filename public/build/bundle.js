var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function r(e){return"function"==typeof e}function i(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let s,a;function c(e,t){return s||(s=document.createElement("a")),s.href=t,e===s.href}function l(e,t,n,o){if(e){const r=u(e,t,n,o);return e[0](r)}}function u(e,t,n,o){return e[1]&&o?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](o(t))):n.ctx}function p(e,t,n,o){if(e[2]&&o){const r=e[2](o(n));if(void 0===t.dirty)return r;if("object"==typeof r){const e=[],n=Math.max(t.dirty.length,r.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|r[o];return e}return t.dirty|r}return t.dirty}function d(e,t,n,o,r,i){if(r){const s=u(t,n,o,i);e.p(s,r)}}function f(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function h(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function y(e){return document.createTextNode(e)}function b(){return y(" ")}function v(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function I(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function k(e,t,n,o){e.style.setProperty(t,n,o?"important":"")}function S(e,t,n){e.classList[n?"add":"remove"](t)}function C(e){a=e}const T=[],_=[],z=[],E=[],D=Promise.resolve();let A=!1;function j(e){z.push(e)}const U=new Set;let O=0;function P(){const e=a;do{for(;O<T.length;){const e=T[O];O++,C(e),M(e.$$)}for(C(null),T.length=0,O=0;_.length;)_.pop()();for(let e=0;e<z.length;e+=1){const t=z[e];U.has(t)||(U.add(t),t())}z.length=0}while(T.length);for(;E.length;)E.pop()();A=!1,U.clear(),C(e)}function M(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(j)}}const L=new Set;let N;function F(e,t){e&&e.i&&(L.delete(e),e.i(t))}function q(e,t,n,o){if(e&&e.o){if(L.has(e))return;L.add(e),N.c.push((()=>{L.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function B(e){e&&e.c()}function H(e,n,i,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(n,i),s||j((()=>{const n=c.map(t).filter(r);l?l.push(...n):o(n),e.$$.on_mount=[]})),u.forEach(j)}function R(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function W(e,t){-1===e.$$.dirty[0]&&(T.push(e),A||(A=!0,D.then(P)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function K(t,r,i,s,c,l,u,p=[-1]){const d=a;C(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(r.context||(d?d.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:r.target||d.$$.root};u&&u(f.root);let h=!1;if(f.ctx=i?i(t,r.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&c(f.ctx[e],f.ctx[e]=r)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](r),h&&W(t,e)),n})):[],f.update(),h=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);f.fragment&&f.fragment.l(e),e.forEach(g)}else f.fragment&&f.fragment.c();r.intro&&F(t.$$.fragment),H(t,r.target,r.anchor,r.customElement),P()}C(d)}class G{$destroy(){R(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}
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
     */class V{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}class Y extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,Y.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,J.prototype.create)}}class J{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},o=`${this.service}/${e}`,r=this.errors[e],i=r?function(e,t){return e.replace(Q,((e,n)=>{const o=t[n];return null!=o?String(o):`<${n}?>`}))}(r,n):"Error",s=`${this.serviceName}: ${i} (${o}).`;return new Y(o,s,n)}}const Q=/\{\$([^}]+)}/g;function X(e,t){if(e===t)return!0;const n=Object.keys(e),o=Object.keys(t);for(const r of n){if(!o.includes(r))return!1;const n=e[r],i=t[r];if(Z(n)&&Z(i)){if(!X(n,i))return!1}else if(n!==i)return!1}for(const e of o)if(!n.includes(e))return!1;return!0}function Z(e){return null!==e&&"object"==typeof e}
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
     */function ee(e,t=1e3,n=2){const o=t*Math.pow(n,e),r=Math.round(.5*o*(Math.random()-.5)*2);return Math.min(144e5,o+r)}
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
     */function te(e){return e&&e._delegate?e._delegate:e}class ne{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const oe="[DEFAULT]";
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
     */class re{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new V;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),o=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(o)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(o)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:oe})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(o)}return o}onInit(e,t){var n;const o=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(o))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(o,r);const i=this.instances.get(o);return i&&e(i,o),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(o=e,o===oe?void 0:o),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var o;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:oe:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ie{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new re(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var se;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(se||(se={}));const ae={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},ce=se.INFO,le={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},ue=(e,t,...n)=>{if(t<e.logLevel)return;const o=(new Date).toISOString(),r=le[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${o}]  ${e.name}:`,...n)};class pe{constructor(e){this.name=e,this._logLevel=ce,this._logHandler=ue,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?ae[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}
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
     */class de{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const fe="@firebase/app",he="0.7.11",me=new pe("@firebase/app"),ge="[DEFAULT]",$e={[fe]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},we=new Map,ye=new Map;function be(e,t){try{e.container.addComponent(t)}catch(n){me.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function ve(e){const t=e.name;if(ye.has(t))return me.debug(`There were multiple attempts to register component ${t}.`),!1;ye.set(t,e);for(const t of we.values())be(t,e);return!0}function xe(e,t){return e.container.getProvider(t)}
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
     */const Ie=new J("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class ke{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new ne("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ie.create("app-deleted",{appName:this._name})}}function Se(e,t,n){var o;let r=null!==(o=$e[e])&&void 0!==o?o:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),s=t.match(/\s|\//);if(i||s){const e=[`Unable to register library "${r}" with version "${t}":`];return i&&e.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void me.warn(e.join(" "))}ve(new ne(`${r}-version`,(()=>({library:r,version:t})),"VERSION"))}
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
     */var Ce;Ce="",ve(new ne("platform-logger",(e=>new de(e)),"PRIVATE")),Se(fe,he,Ce),Se(fe,he,"esm2017"),Se("fire-js","");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Te,_e,ze=(Te=function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function o(e,t,o){var r,i=new Promise((function(i,s){n(r=e[t].apply(e,o)).then(i,s)}));return i.request=r,i}function r(e,t,n){var r=o(e,t,n);return r.then((function(e){if(e)return new u(e,r.request)}))}function i(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function s(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return o(this[t],r,arguments)})}))}function a(e,t,n,o){o.forEach((function(o){o in n.prototype&&(e.prototype[o]=function(){return this[t][o].apply(this[t],arguments)})}))}function c(e,t,n,o){o.forEach((function(o){o in n.prototype&&(e.prototype[o]=function(){return r(this[t],o,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function p(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function h(e){this._db=e}function m(e,t,n){var r=o(indexedDB,"open",[e,t]),i=r.request;return i&&(i.onupgradeneeded=function(e){n&&n(new f(i.result,e.oldVersion,i.transaction))}),r.then((function(e){return new h(e)}))}function g(e){return o(indexedDB,"deleteDatabase",[e])}i(l,"_index",["name","keyPath","multiEntry","unique"]),s(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),i(u,"_cursor",["direction","key","primaryKey","value"]),s(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,o=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,o),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),p.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},p.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},i(p,"_store",["name","keyPath","indexNames","autoIncrement"]),s(p,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(p,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(p,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new p(this._tx.objectStore.apply(this._tx,arguments))},i(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new p(this._db.createObjectStore.apply(this._db,arguments))},i(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},i(h,"_db",["name","version","objectStoreNames"]),a(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[p,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),o=n[n.length-1],r=this._store||this._index,i=r[e].apply(r,n.slice(0,-1));i.onsuccess=function(){o(i.result)}})}))})),[l,p].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,o=[];return new Promise((function(r){n.iterateCursor(e,(function(e){e?(o.push(e.value),void 0===t||o.length!=t?e.continue():r(o)):r(o)}))}))})})),e.openDb=m,e.deleteDb=g,Object.defineProperty(e,"__esModule",{value:!0})}(t)},Te(_e={exports:{}},_e.exports),_e.exports);const Ee="@firebase/installations",De="0.5.4",Ae=1e4,je="w:0.5.4",Ue="FIS_v2",Oe=36e5,Pe=new J("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Me(e){return e instanceof Y&&e.code.includes("request-failed")}
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
     */function Le({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Ne(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Fe(e,t){const n=(await t.json()).error;return Pe.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function qe({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Be(e,{refreshToken:t}){const n=qe(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
     */(t)),n}async function He(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
function Re(e){return new Promise((t=>{setTimeout(t,e)}))}
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
const We=/^[cdef][\w-]{21}$/;function Ke(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
     */(e);return We.test(t)?t:""}catch(e){return""}}function Ge(e){return`${e.appName}!${e.appId}`}
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
     */const Ve=new Map;function Ye(e,t){const n=Ge(e);Je(n,t),function(e,t){const n=function(){!Qe&&"BroadcastChannel"in self&&(Qe=new BroadcastChannel("[Firebase] FID Change"),Qe.onmessage=e=>{Je(e.data.key,e.data.fid)});return Qe}();n&&n.postMessage({key:e,fid:t});0===Ve.size&&Qe&&(Qe.close(),Qe=null)}(n,t)}function Je(e,t){const n=Ve.get(e);if(n)for(const e of n)e(t)}let Qe=null;
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
const Xe="firebase-installations-store";let Ze=null;function et(){return Ze||(Ze=ze.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(Xe)}))),Ze}async function tt(e,t){const n=Ge(e),o=(await et()).transaction(Xe,"readwrite"),r=o.objectStore(Xe),i=await r.get(n);return await r.put(t,n),await o.complete,i&&i.fid===t.fid||Ye(e,t.fid),t}async function nt(e){const t=Ge(e),n=(await et()).transaction(Xe,"readwrite");await n.objectStore(Xe).delete(t),await n.complete}async function ot(e,t){const n=Ge(e),o=(await et()).transaction(Xe,"readwrite"),r=o.objectStore(Xe),i=await r.get(n),s=t(i);return void 0===s?await r.delete(n):await r.put(s,n),await o.complete,!s||i&&i.fid===s.fid||Ye(e,s.fid),s}
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
     */async function rt(e){let t;const n=await ot(e,(n=>{const o=function(e){return at(e||{fid:Ke(),registrationStatus:0})}(n),r=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Pe.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=async function(e,t){try{const n=await async function(e,{fid:t}){const n=Le(e),o=qe(e),r={fid:t,authVersion:Ue,appId:e.appId,sdkVersion:je},i={method:"POST",headers:o,body:JSON.stringify(r)},s=await He((()=>fetch(n,i)));if(s.ok){const e=await s.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:Ne(e.authToken)}}throw await Fe("Create Installation",s)}(e,t);return tt(e,n)}catch(n){throw Me(n)&&409===n.customData.serverCode?await nt(e):await tt(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:o}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:it(e)}:{installationEntry:t}}(e,o);return t=r.registrationPromise,r.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function it(e){let t=await st(e);for(;1===t.registrationStatus;)await Re(100),t=await st(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await rt(e);return n||t}return t}function st(e){return ot(e,(e=>{if(!e)throw Pe.create("installation-not-found");return at(e)}))}function at(e){return 1===(t=e).registrationStatus&&t.registrationTime+Ae<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
     */}async function ct({appConfig:e,platformLoggerProvider:t},n){const o=function(e,{fid:t}){return`${Le(e)}/${t}/authTokens:generate`}
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
     */(e,n),r=Be(e,n),i=t.getImmediate({optional:!0});i&&r.append("x-firebase-client",i.getPlatformInfoString());const s={installation:{sdkVersion:je}},a={method:"POST",headers:r,body:JSON.stringify(s)},c=await He((()=>fetch(o,a)));if(c.ok){return Ne(await c.json())}throw await Fe("Generate Auth Token",c)}async function lt(e,t=!1){let n;const o=await ot(e.appConfig,(o=>{if(!pt(o))throw Pe.create("not-registered");const r=o.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Oe}(e)}(r))return o;if(1===r.requestStatus)return n=async function(e,t){let n=await ut(e.appConfig);for(;1===n.authToken.requestStatus;)await Re(100),n=await ut(e.appConfig);const o=n.authToken;return 0===o.requestStatus?lt(e,t):o}(e,t),o;{if(!navigator.onLine)throw Pe.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(o);return n=async function(e,t){try{const n=await ct(e,t),o=Object.assign(Object.assign({},t),{authToken:n});return await tt(e.appConfig,o),n}catch(n){if(!Me(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await tt(e.appConfig,n)}else await nt(e.appConfig);throw n}}(e,t),t}}));return n?await n:o.authToken}function ut(e){return ot(e,(e=>{if(!pt(e))throw Pe.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+Ae<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
     */}))}function pt(e){return void 0!==e&&2===e.registrationStatus}
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
async function dt(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await rt(e);t&&await t}
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
     */(n.appConfig);return(await lt(n,t)).token}function ft(e){return Pe.create("missing-app-config-values",{valueName:e})}
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
     */const ht="installations",mt=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw ft("App Configuration");if(!e.name)throw ft("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw ft(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:xe(t,"platform-logger"),_delete:()=>Promise.resolve()}},gt=e=>{const t=xe(e.getProvider("app").getImmediate(),ht).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:o}=await rt(t.appConfig);return o?o.catch(console.error):lt(t).catch(console.error),n.fid}(t),getToken:e=>dt(t,e)}};ve(new ne(ht,mt,"PUBLIC")),ve(new ne("installations-internal",gt,"PRIVATE")),Se(Ee,De),Se(Ee,De,"esm2017");
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
const $t="analytics",wt="https://www.googletagmanager.com/gtag/js",yt=new pe("@firebase/analytics");
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
function bt(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function vt(e,t,n,o){return async function(r,i,s){try{"event"===r?await async function(e,t,n,o,r){try{let i=[];if(r&&r.send_to){let e=r.send_to;Array.isArray(e)||(e=[e]);const o=await bt(n);for(const n of e){const e=o.find((e=>e.measurementId===n)),r=e&&t[e.appId];if(!r){i=[];break}i.push(r)}}0===i.length&&(i=Object.values(t)),await Promise.all(i),e("event",o,r||{})}catch(e){yt.error(e)}}(e,t,n,i,s):"config"===r?await async function(e,t,n,o,r,i){const s=o[r];try{if(s)await t[s];else{const e=(await bt(n)).find((e=>e.measurementId===r));e&&await t[e.appId]}}catch(e){yt.error(e)}e("config",r,i)}(e,t,n,o,i,s):e("set",i)}catch(e){yt.error(e)}}}
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
const xt=new J("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const It=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function kt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function St(e,t=It,n){const{appId:o,apiKey:r,measurementId:i}=e.options;if(!o)throw xt.create("no-app-id");if(!r){if(i)return{measurementId:i,appId:o};throw xt.create("no-api-key")}const s=t.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Tt;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),Ct({appId:o,apiKey:r,measurementId:i},s,a,t)}async function Ct(e,{throttleEndTimeMillis:t,backoffCount:n},o,r=It){const{appId:i,measurementId:s}=e;try{await function(e,t){return new Promise(((n,o)=>{const r=Math.max(t-Date.now(),0),i=setTimeout(n,r);e.addEventListener((()=>{clearTimeout(i),o(xt.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(o,t)}catch(e){if(s)return yt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:i,measurementId:s};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:o}=e,r={method:"GET",headers:kt(o)},i="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(i,r);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw xt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return r.deleteThrottleMetadata(i),t}catch(t){if(!function(e){if(!(e instanceof Y&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(r.deleteThrottleMetadata(i),s)return yt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:i,measurementId:s};throw t}const a=503===Number(t.customData.httpStatus)?ee(n,r.intervalMillis,30):ee(n,r.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return r.setThrottleMetadata(i,c),yt.debug(`Calling attemptFetch again in ${a} millis`),Ct(e,c,o,r)}}class Tt{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
     */async function _t(){if("object"!=typeof indexedDB)return yt.warn(xt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const o="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(o);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(o),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return yt.warn(xt.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function zt(e,t,n,o,r,i,s){var a;const c=St(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&yt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>yt.error(e))),t.push(c);const l=_t().then((e=>e?o.getId():void 0)),[u,p]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(wt))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${wt}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(i,u.measurementId),r("js",new Date);const d=null!==(a=null==s?void 0:s.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=p&&(d.firebase_id=p),r("config",u.measurementId,d),u.measurementId}
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
     */class Et{constructor(e){this.app=e}_delete(){return delete Dt[this.app.options.appId],Promise.resolve()}}let Dt={},At=[];const jt={};let Ut,Ot,Pt="dataLayer",Mt=!1;function Lt(){const e=[];if(function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=xt.create("invalid-analytics-context",{errorInfo:t});yt.warn(n.message)}}function Nt(e,t,n){Lt();const o=e.options.appId;if(!o)throw xt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw xt.create("no-api-key");yt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=Dt[o])throw xt.create("already-exists",{id:o});if(!Mt){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Pt);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,o,r){let i=function(...e){window[o].push(arguments)};return window[r]&&"function"==typeof window[r]&&(i=window[r]),window[r]=vt(i,e,t,n),{gtagCore:i,wrappedGtag:window[r]}}(Dt,At,jt,Pt,"gtag");Ot=e,Ut=t,Mt=!0}Dt[o]=zt(e,At,jt,t,Ut,Pt,n);return new Et(e)}
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
     */function Ft(e,t,n,o){e=te(e),async function(e,t,n,o,r){if(r&&r.global)e("event",n,o);else{const r=await t;e("event",n,Object.assign(Object.assign({},o),{send_to:r}))}}(Ot,Dt[e.app.options.appId],t,n,o).catch((e=>yt.error(e)))}const qt="@firebase/analytics",Bt="0.7.4";ve(new ne($t,((e,{options:t})=>Nt(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),ve(new ne("analytics-internal",(function(e){try{const t=e.getProvider($t).getImmediate();return{logEvent:(e,n,o)=>Ft(t,e,n,o)}}catch(e){throw xt.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),Se(qt,Bt),Se(qt,Bt,"esm2017");
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
Se("firebase","9.6.1","app");const Ht=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:ge,automaticDataCollectionEnabled:!1},t),o=n.name;if("string"!=typeof o||!o)throw Ie.create("bad-app-name",{appName:String(o)});const r=we.get(o);if(r){if(X(e,r.options)&&X(n,r.config))return r;throw Ie.create("duplicate-app",{appName:o})}const i=new ie(o);for(const e of ye.values())i.addComponent(e);const s=new ke(e,n,i);return we.set(o,s),s}({apiKey:"AIzaSyCKI5ugoATk4ZIPBpXYd_JvpotryjDDrzE",authDomain:"ctc-eg.firebaseapp.com",projectId:"ctc-eg",storageBucket:"ctc-eg.appspot.com",messagingSenderId:"350248348226",appId:"1:350248348226:web:b5afb039230ff97dfd5bdb",measurementId:"G-S9SXNB843P"});function Rt(t){let n,o;return{c(){n=$("img"),c(n.src,o=t[0])||x(n,"src",o),x(n,"alt",t[1]),x(n,"class","w-6 h-6 mr-2")},m(e,t){m(e,n,t)},p(e,[t]){1&t&&!c(n.src,o=e[0])&&x(n,"src",o),2&t&&x(n,"alt",e[1])},i:e,o:e,d(e){e&&g(n)}}}function Wt(e,t,n){let{url:o}=t,{altText:r}=t;return e.$$set=e=>{"url"in e&&n(0,o=e.url),"altText"in e&&n(1,r=e.altText)},[o,r]}!function(e=function(e="[DEFAULT]"){const t=we.get(e);if(!t)throw Ie.create("no-app",{appName:e});return t}()){const t=xe(e=te(e),$t);t.isInitialized()?t.getImmediate():function(e,t={}){const n=xe(e,$t);if(n.isInitialized()){const e=n.getImmediate();if(X(t,n.getOptions()))return e;throw xt.create("already-initialized")}n.initialize({options:t})}(e)}(Ht);class Kt extends G{constructor(e){super(),K(this,e,Wt,Rt,i,{url:0,altText:1})}}function Gt(e){let t,n,o,r,i,s;return o=new Kt({props:{url:e[0],altText:e[2]}}),{c(){t=$("a"),n=$("button"),B(o.$$.fragment),r=b(),i=y(e[1]),x(n,"class","flex items-center justify-between rounded border border-light px-4 py-2"),x(t,"href",e[3]),x(t,"class","mr-4 mb-2 min-w-max")},m(e,a){m(e,t,a),h(t,n),H(o,n,null),h(n,r),h(n,i),s=!0},p(e,[n]){const r={};1&n&&(r.url=e[0]),4&n&&(r.altText=e[2]),o.$set(r),(!s||2&n)&&I(i,e[1]),(!s||8&n)&&x(t,"href",e[3])},i(e){s||(F(o.$$.fragment,e),s=!0)},o(e){q(o.$$.fragment,e),s=!1},d(e){e&&g(t),R(o)}}}function Vt(e,t,n){let{iconUrl:o}=t,{text:r}=t,{altText:i=r}=t,{url:s}=t;return e.$$set=e=>{"iconUrl"in e&&n(0,o=e.iconUrl),"text"in e&&n(1,r=e.text),"altText"in e&&n(2,i=e.altText),"url"in e&&n(3,s=e.url)},[o,r,i,s]}class Yt extends G{constructor(e){super(),K(this,e,Vt,Gt,i,{iconUrl:0,text:1,altText:2,url:3})}}function Jt(e){let t;return{c(){t=$("span"),t.textContent="New",x(t,"class","new")},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function Qt(e){let t,n,o,r,i,s,a,c,u,w,v,S,C,T=e[1]&&Jt();a=new Yt({props:{altText:"Windows logo",iconUrl:"./img/icon/windows.svg",text:"Windows via Steam",url:e[2]}}),u=new Yt({props:{altText:"Apple logo",iconUrl:"./img/icon/apple.svg",text:"iOS",url:e[3]}}),v=new Yt({props:{altText:"Android logo",iconUrl:"./img/icon/android.svg",text:"Android",url:e[4]}});const _=e[6].default,z=l(_,e,e[5],null);return{c(){t=$("div"),n=$("header"),o=y(e[0]),r=b(),T&&T.c(),i=b(),s=$("div"),B(a.$$.fragment),c=b(),B(u.$$.fragment),w=b(),B(v.$$.fragment),S=b(),z&&z.c(),x(n,"class","text-lg font-semibold mb-4 flex items-center"),x(s,"class","flex flex-wrap text-sm"),x(t,"class","w-11/12 md:w-5/12 my-2 px-8 py-6 bg-dark shadow border-[3px] border-light rounded-md"),k(t,"--tw-bg-opacity","0.44")},m(e,l){m(e,t,l),h(t,n),h(n,o),h(n,r),T&&T.m(n,null),h(t,i),h(t,s),H(a,s,null),h(s,c),H(u,s,null),h(s,w),H(v,s,null),h(t,S),z&&z.m(t,null),C=!0},p(e,[t]){(!C||1&t)&&I(o,e[0]),e[1]?T||(T=Jt(),T.c(),T.m(n,null)):T&&(T.d(1),T=null);const r={};4&t&&(r.url=e[2]),a.$set(r);const i={};8&t&&(i.url=e[3]),u.$set(i);const s={};16&t&&(s.url=e[4]),v.$set(s),z&&z.p&&(!C||32&t)&&d(z,_,e,e[5],C?p(_,e[5],t,null):f(e[5]),null)},i(e){C||(F(a.$$.fragment,e),F(u.$$.fragment,e),F(v.$$.fragment,e),F(z,e),C=!0)},o(e){q(a.$$.fragment,e),q(u.$$.fragment,e),q(v.$$.fragment,e),q(z,e),C=!1},d(e){e&&g(t),T&&T.d(),R(a),R(u),R(v),z&&z.d(e)}}}function Xt(e,t,n){let{$$slots:o={},$$scope:r}=t,{title:i}=t,{isNew:s=!1}=t,{windowsUrl:a}=t,{appleUrl:c}=t,{androidUrl:l}=t;return e.$$set=e=>{"title"in e&&n(0,i=e.title),"isNew"in e&&n(1,s=e.isNew),"windowsUrl"in e&&n(2,a=e.windowsUrl),"appleUrl"in e&&n(3,c=e.appleUrl),"androidUrl"in e&&n(4,l=e.androidUrl),"$$scope"in e&&n(5,r=e.$$scope)},[i,s,a,c,l,r,o]}class Zt extends G{constructor(e){super(),K(this,e,Xt,Qt,i,{title:0,isNew:1,windowsUrl:2,appleUrl:3,androidUrl:4})}}function en(e){let t,n,o,r;const i=e[2].default,s=l(i,e,e[1],null);return{c(){t=$("h3"),n=y(e[0]),o=b(),s&&s.c(),x(t,"class","mt-6 mb-0")},m(e,i){m(e,t,i),h(t,n),m(e,o,i),s&&s.m(e,i),r=!0},p(e,[t]){(!r||1&t)&&I(n,e[0]),s&&s.p&&(!r||2&t)&&d(s,i,e,e[1],r?p(i,e[1],t,null):f(e[1]),null)},i(e){r||(F(s,e),r=!0)},o(e){q(s,e),r=!1},d(e){e&&g(t),e&&g(o),s&&s.d(e)}}}function tn(e,t,n){let{$$slots:o={},$$scope:r}=t,{question:i}=t;return e.$$set=e=>{"question"in e&&n(0,i=e.question),"$$scope"in e&&n(1,r=e.$$scope)},[i,r,o]}class nn extends G{constructor(e){super(),K(this,e,tn,en,i,{question:0})}}function on(e){let t,n,o,r,i,s;n=new Kt({props:{url:e[2],altText:e[3]}});const a=e[5].default,c=l(a,e,e[4],null);return{c(){t=$("h3"),B(n.$$.fragment),o=b(),r=y(e[0]),i=b(),c&&c.c()},m(e,a){m(e,t,a),H(n,t,null),h(t,o),h(t,r),m(e,i,a),c&&c.m(e,a),s=!0},p(e,t){const o={};4&t&&(o.url=e[2]),8&t&&(o.altText=e[3]),n.$set(o),(!s||1&t)&&I(r,e[0]),c&&c.p&&(!s||16&t)&&d(c,a,e,e[4],s?p(a,e[4],t,null):f(e[4]),null)},i(e){s||(F(n.$$.fragment,e),F(c,e),s=!0)},o(e){q(n.$$.fragment,e),q(c,e),s=!1},d(e){e&&g(t),R(n),e&&g(i),c&&c.d(e)}}}function rn(e){let t,n,o,r,i,s,a;o=new Kt({props:{url:e[2],altText:e[3]}});const c=e[5].default,u=l(c,e,e[4],null);return{c(){t=$("a"),n=$("h3"),B(o.$$.fragment),r=b(),i=y(e[0]),s=b(),u&&u.c(),x(t,"href",e[1]),x(t,"target","_blank")},m(e,c){m(e,t,c),h(t,n),H(o,n,null),h(n,r),h(n,i),h(t,s),u&&u.m(t,null),a=!0},p(e,n){const r={};4&n&&(r.url=e[2]),8&n&&(r.altText=e[3]),o.$set(r),(!a||1&n)&&I(i,e[0]),u&&u.p&&(!a||16&n)&&d(u,c,e,e[4],a?p(c,e[4],n,null):f(e[4]),null),(!a||2&n)&&x(t,"href",e[1])},i(e){a||(F(o.$$.fragment,e),F(u,e),a=!0)},o(e){q(o.$$.fragment,e),q(u,e),a=!1},d(e){e&&g(t),R(o),u&&u.d(e)}}}function sn(e){let t,n,r,i;const s=[rn,on],a=[];function c(e,t){return e[1]?0:1}return n=c(e),r=a[n]=s[n](e),{c(){t=$("div"),r.c(),x(t,"class","info"),S(t,"cursor-pointer",e[1])},m(e,o){m(e,t,o),a[n].m(t,null),i=!0},p(e,[i]){let l=n;n=c(e),n===l?a[n].p(e,i):(N={r:0,c:[],p:N},q(a[l],1,1,(()=>{a[l]=null})),N.r||o(N.c),N=N.p,r=a[n],r?r.p(e,i):(r=a[n]=s[n](e),r.c()),F(r,1),r.m(t,null)),2&i&&S(t,"cursor-pointer",e[1])},i(e){i||(F(r),i=!0)},o(e){q(r),i=!1},d(e){e&&g(t),a[n].d()}}}function an(e,t,n){let{$$slots:o={},$$scope:r}=t,{title:i}=t,{url:s=null}=t,{iconUrl:a}=t,{altText:c=i}=t;return e.$$set=e=>{"title"in e&&n(0,i=e.title),"url"in e&&n(1,s=e.url),"iconUrl"in e&&n(2,a=e.iconUrl),"altText"in e&&n(3,c=e.altText),"$$scope"in e&&n(4,r=e.$$scope)},[i,s,a,c,r,o]}class cn extends G{constructor(e){super(),K(this,e,an,sn,i,{title:0,url:1,iconUrl:2,altText:3})}}function ln(t){let n,r,i,s,a,c,l,u,p,d,f,y,I,C,T,_,z,E,D,A,j,U;return{c(){n=$("nav"),r=$("div"),i=w("svg"),s=w("rect"),a=w("rect"),c=w("rect"),l=b(),u=$("div"),p=$("a"),p.textContent="Home",d=b(),f=$("a"),f.textContent="Apps",y=b(),I=$("a"),I.textContent="Info",C=b(),T=$("a"),T.textContent="About us",_=b(),z=$("a"),z.textContent="Submissions",E=b(),D=$("a"),D.textContent="FAQs",x(s,"width","100"),x(s,"height","10"),x(a,"y","30"),x(a,"width","100"),x(a,"height","10"),x(c,"y","60"),x(c,"width","100"),x(c,"height","10"),x(i,"viewBox","0 0 100 80"),x(i,"class","w-6 h-6 cursor-pointer text-white"),k(i,"fill","currentColor"),x(r,"class","sm:hidden px-4 pt-6 pb-4"),x(p,"href","#home"),x(f,"href","#apps"),x(I,"href","#info"),x(T,"href","#about"),x(z,"href","#submissions"),x(D,"href","#faq"),x(u,"class",A="sm:mx-auto md:mr-0 sm:w-fit flex flex-col sm:flex-row justify-end overflow-hidden max-h-0 transition-[max-height] sm:max-h-[32rem] "+(t[0]?"max-h-[32rem]":"")),S(u,"duration-2",t[0]),S(u,"duration-1",!t[0]),x(n,"class","px-4 sticky top-0 bg-inherit z-10"),S(n,"shadow-md",t[1])},m(e,o){m(e,n,o),h(n,r),h(r,i),h(i,s),h(i,a),h(i,c),h(n,l),h(n,u),h(u,p),h(u,d),h(u,f),h(u,y),h(u,I),h(u,C),h(u,T),h(u,_),h(u,z),h(u,E),h(u,D),j||(U=[v(i,"click",t[2]),v(u,"click",t[3]),v(n,"blur",t[4])],j=!0)},p(e,[t]){1&t&&A!==(A="sm:mx-auto md:mr-0 sm:w-fit flex flex-col sm:flex-row justify-end overflow-hidden max-h-0 transition-[max-height] sm:max-h-[32rem] "+(e[0]?"max-h-[32rem]":""))&&x(u,"class",A),1&t&&S(u,"duration-2",e[0]),1&t&&S(u,"duration-1",!e[0]),2&t&&S(n,"shadow-md",e[1])},i:e,o:e,d(e){e&&g(n),j=!1,o(U)}}}function un(e,t,n){let o=!1,r=!1;document.addEventListener("scroll",(()=>n(1,r=window.scrollY>0)));return[o,r,()=>n(0,o=!o),()=>n(0,o=!1),()=>n(0,o=!1)]}class pn extends G{constructor(e){super(),K(this,e,un,ln,i,{})}}function dn(e){let t;return{c(){t=$("p"),t.textContent="Search for “SudokuPad” on Amazon"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function fn(e){let t;return{c(){t=$("p"),t.textContent="Our merchandise (including birthday merch)"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function hn(e){let t;return{c(){t=$("p"),t.textContent="CTC fan Discord server"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function mn(e){let t;return{c(){t=$("p"),t.textContent="Join the community, support us and try our puzzle hunts"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function gn(e){let t;return{c(){t=$("p"),t.textContent="Our back catalogue (all categorised with links)"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function $n(e){let t;return{c(){t=$("p"),t.innerHTML='Send us puzzles to solve or contact us: <a href="mailto:crackingthecryptic@gmail.com">crackingthecryptic@gmail.com</a>'},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function wn(e){let t,n,o;return{c(){t=$("p"),t.innerHTML='Twitter:\n        <a href="https://twitter.com/crypticcracking">@crypticcracking</a> \n        <a href="https://twitter.com/search?q=(%23crypticcracking)&amp;src=typed_query">#crypticcracking</a>',n=b(),o=$("p"),o.innerHTML='Instagram:\n        <a href="https://www.instagram.com/crackingthecryptic/?hl=en">@crypticcracking</a> (for how to solve daily clues from The Times)'},m(e,r){m(e,t,r),m(e,n,r),m(e,o,r)},d(e){e&&g(t),e&&g(n),e&&g(o)}}}function yn(e){let t;return{c(){t=$("p"),t.textContent="Tim McCaskey (Guitar) or Lucy Audrin (Piano) plays Mozart's Sonata no 16\n        (“Sonata Facile”)"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function bn(e){let t;return{c(){t=$("p"),t.textContent="Play the puzzle in the video by clicking the link under the video.\n        Thanks to Sam Cappleman-Lynes and Sven Neumann for their work."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function vn(e){let t;return{c(){t=$("p"),t.textContent="Melvyn Mainini"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function xn(e){let t;return{c(){t=$("p"),t.textContent="Joel Blundell"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function In(e){let t;return{c(){t=$("p"),t.textContent="We get hundreds of communications daily, and though we try to keep up as\n      far as possible with everything sent to us, necessarily we can't\n      reply to everything, and quite a few of the things we are asked are\n      recurrent questions. Often your public queries will be answered by our\n      helpful viewers directly. For private communications, give us a few weeks\n      at least, and check these FAQs and our puzzle submission preferences for\n      possible answers."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function kn(e){let t;return{c(){t=$("p"),t.textContent="The software just checks for repeat digits in rows, columns and boxes. If\n      the puzzle has extra constraints, it doesn't check those."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function Sn(e){let t;return{c(){t=$("p"),t.textContent="You haven't. Our solves are rigorously logical and rule out\n      alternative solutions. What you have found is a solution that obeys most\n      of the rules, but is wrong in some respect, perhaps due to one of the\n      constraints. Check it carefully, because our software doesn't check\n      extra constraints (see Q2)."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function Cn(e){let t;return{c(){t=$("p"),t.innerHTML='We have made one <a href="https://www.youtube.com/watch?v=936S5jWQTYE">video</a> on setting a Sandwich Sudoku. We&#39;re very happy for the setters we admire\n      to concentrate on setting entertaining puzzles for us to solve without necessarily\n      recording how they do it, and there may be some aspect of “We must not\n      let daylight in upon the magic.”'},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function Tn(e){let t;return{c(){t=$("p"),t.innerHTML='Definitely. But please see our puzzle <a href="#submissions">submission guidelines\n      </a>. They help our testers ensure the video content will be high quality.\n      We prefer not to receive crossword submissions at all.'},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function _n(e){let t;return{c(){t=$("p"),t.textContent="It's by Mozart, and is his Piano Sonata No. 16 in C Major,\n      “Sonata facile” K545."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function zn(e){let t;return{c(){t=$("p"),t.textContent="We're not familiar with the technology, and don't think it would\n      add much to our explanations of where we're looking."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function En(e){let t;return{c(){t=$("p"),t.textContent="On our apps, you can be sure that each puzzle has been crafted for your\n      enjoyment, tested and hinted by us, and will help you learn how to solve\n      better. Most of the free content out there uses computer-generated\n      puzzles, with difficulties based on computer solving, “Hints”\n      in those puzzles will often just provide an extra number, given with no\n      logical reason."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function Dn(e){let t;return{c(){t=$("p"),t.textContent="The channel is now mostly about sudoku variants and pencil puzzles. We\n      will be doing more cryptic crossword content, but it will probably be on\n      Patreon. We're keeping the channel name, because of the goodwill\n      built up with it."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function An(e){let t;return{c(){t=$("p"),t.textContent="We prefer to focus on producing plenty of content that people are tuning\n      in for."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function jn(e){let t,n,o,r,i,s,a,l,u,p,d,f,w,y,v,I,k,S,C,T,_,z,E,D,A,j,U,O,P,M,L,N,W,K,G,V,Y,J,Q,X,Z,ee,te,ne,oe,re,ie,se,ae,ce,le,ue,pe,de,fe,he,me,ge,$e,we,ye,be,ve,xe,Ie,ke,Se,Ce,Te,_e,ze,Ee,De,Ae,je,Ue,Oe,Pe,Me,Le,Ne,Fe,qe,Be,He,Re,We,Ke;return t=new pn({}),I=new Zt({props:{title:"Sudoku Pad",isNew:!0,windowsUrl:"https://store.steampowered.com/app/1706870/Svens_SudokuPad/",appleUrl:"https://apps.apple.com/us/app/svens-sudokupad/id1570622073",androidUrl:"https://play.google.com/store/apps/details?id=com.svencodes.sudokupad",$$slots:{default:[dn]},$$scope:{ctx:e}}}),S=new Zt({props:{title:"Arrow Sudoku App",isNew:!0,windowsUrl:"https://store.steampowered.com/app/1613680/Arrow_Sudoku/",appleUrl:"https://apps.apple.com/us/app/arrow-sudoku/id1568407537",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.ArrowSudoku"}}),T=new Zt({props:{title:"Killer Sudoku App",windowsUrl:"https://store.steampowered.com/app/1471910/Killer_Sudoku/",appleUrl:"https://apps.apple.com/us/app/killer-sudoku-ctc/id1544165118",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.KillerSudoku&hl=en_US≷=US"}}),z=new Zt({props:{title:"Miracle Sudoku App",windowsUrl:"https://store.steampowered.com/app/1377260/Miracle_Sudoku/",appleUrl:"https://apps.apple.com/us/app/id1527363795",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.MiracleSudokuCTC"}}),D=new Zt({props:{title:"Thermo Sudoku App",windowsUrl:"https://store.steampowered.com/app/1316390/Thermo_Sudoku/",appleUrl:"https://apps.apple.com/us/app/thermo-sudoku/id1513994223",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.ThermoSudoku"}}),j=new Zt({props:{title:"Chess Sudoku App",windowsUrl:"https://store.steampowered.com/app/1250560/Chess_Sudoku/",appleUrl:"https://apps.apple.com/us/app/chess-sudoku/id1500654482?ls=1",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.ChessSudoku&hl=en_US"}}),O=new Zt({props:{title:"Classic Sudoku App",windowsUrl:"https://store.steampowered.com/app/1188330/Classic_Sudoku/",appleUrl:"https://apps.apple.com/us/app/classic-sudoku/id1488838275?ls=1",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.ClassicSudoku&hl=en_US"}}),M=new Zt({props:{title:"Sandwich Sudoku App",windowsUrl:"https://store.steampowered.com/app/1117310/Sandwich_Sudoku/",appleUrl:"https://apps.apple.com/us/app/sandwich-sudoku/id1476116705?ls=1",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.SandwichSudoku"}}),ee=new cn({props:{title:"Merchandise",url:"https://cracking-the-cryptic.creator-spring.com/",iconUrl:"./img/icon/merch.svg",$$slots:{default:[fn]},$$scope:{ctx:e}}}),ne=new cn({props:{title:"Discord",url:"https://discord.gg/BbN89j",iconUrl:"./img/icon/discord.svg",$$slots:{default:[hn]},$$scope:{ctx:e}}}),re=new cn({props:{title:"Patreon",url:"https://www.patreon.com/crackingthecryptic",iconUrl:"./img/icon/patreon.svg",$$slots:{default:[mn]},$$scope:{ctx:e}}}),se=new cn({props:{title:"Catalogue",url:"https://tinyurl.com/CTCCatalogue",iconUrl:"./img/icon/contents.svg",$$slots:{default:[gn]},$$scope:{ctx:e}}}),ce=new cn({props:{title:"Email",iconUrl:"./img/icon/email.svg",$$slots:{default:[$n]},$$scope:{ctx:e}}}),ue=new cn({props:{title:"Follow us",iconUrl:"./img/icon/social_media.svg",$$slots:{default:[wn]},$$scope:{ctx:e}}}),de=new cn({props:{title:"Music",iconUrl:"./img/icon/music.svg",$$slots:{default:[yn]},$$scope:{ctx:e}}}),he=new cn({props:{title:"Software",iconUrl:"./img/icon/software.svg",$$slots:{default:[bn]},$$scope:{ctx:e}}}),ge=new cn({props:{title:"Logo Design",iconUrl:"./img/icon/paint_brush.svg",$$slots:{default:[vn]},$$scope:{ctx:e}}}),we=new cn({props:{title:"Opening Credits Design",iconUrl:"./img/icon/film.svg",$$slots:{default:[xn]},$$scope:{ctx:e}}}),Te=new nn({props:{question:"Why haven't you replied to my email/comment/tweet?",$$slots:{default:[In]},$$scope:{ctx:e}}}),ze=new nn({props:{question:"Why does your software sometimes say the solution is right when it's not?",$$slots:{default:[kn]},$$scope:{ctx:e}}}),De=new nn({props:{question:"I have found an alternative solution to a puzzle you showed. What's going on?",$$slots:{default:[Sn]},$$scope:{ctx:e}}}),je=new nn({props:{question:"Can we see a video about how to set a sudoku/puzzle? ",$$slots:{default:[Cn]},$$scope:{ctx:e}}}),Oe=new nn({props:{question:"Can I send you a puzzle to solve?",$$slots:{default:[Tn]},$$scope:{ctx:e}}}),Me=new nn({props:{question:"What is the music at the beginning of the videos?",$$slots:{default:[_n]},$$scope:{ctx:e}}}),Ne=new nn({props:{question:"Will you do an eye-tracker on your videos so we can see where you're looking?",$$slots:{default:[zn]},$$scope:{ctx:e}}}),qe=new nn({props:{question:"Why do you charge for your apps when there is so much free sudoku content available?",$$slots:{default:[En]},$$scope:{ctx:e}}}),He=new nn({props:{question:"Will you be doing more crossword videos?",$$slots:{default:[Dn]},$$scope:{ctx:e}}}),We=new nn({props:{question:"Can't you improve the production of your videos?",$$slots:{default:[An]},$$scope:{ctx:e}}}),{c(){B(t.$$.fragment),n=b(),o=$("header"),o.innerHTML='<div class="flex flex-col md:flex-row md:h-auto"><div class="flex flex-col justify-between"><h1 class="mt-4 md:mt-2">Cracking the Cryptic</h1> \n      <p class="mt-12 md:mt-0 pr-12">The PDF of our book is now available! If you backed the <a href="https://www.kickstarter.com/projects/peterchayward/cracking-the-cryptics-greatest-hits/description">Kickstarter</a>, go to the Jellybeangames email receipt, where there is a button to\n        download the pdf. Delivery of the physical book should be underway soon.</p></div> \n    <div class="w-11/12 sm:w-8/12 md:w-5/12 max-w-[768px] h-auto md:h-full object-cover mx-auto md:mx-0 mt-12 md:mt-24 bg-light translate-x-4 translate-y-4 group hover:translate-x-[1.1rem] hover:translate-y-[1.1rem] hover:rotate-1 transition"><img src="./img/lads.jpg" alt="Simon Anthony and Mark Goodliffe" width="768" height="768" class="text-light -translate-x-4 -translate-y-4 group-hover:-rotate-1 group-hover:-translate-x-[1.1rem] group-hover:-translate-y-[1.1rem] transition"/></div></div>',r=b(),i=$("section"),s=$("img"),l=b(),u=$("img"),d=b(),f=$("div"),w=$("h2"),w.textContent="Apps",y=b(),v=$("div"),B(I.$$.fragment),k=b(),B(S.$$.fragment),C=b(),B(T.$$.fragment),_=b(),B(z.$$.fragment),E=b(),B(D.$$.fragment),A=b(),B(j.$$.fragment),U=b(),B(O.$$.fragment),P=b(),B(M.$$.fragment),L=b(),N=$("section"),W=$("img"),G=b(),V=$("img"),J=b(),Q=$("div"),X=$("h2"),X.textContent="Information",Z=b(),B(ee.$$.fragment),te=b(),B(ne.$$.fragment),oe=b(),B(re.$$.fragment),ie=b(),B(se.$$.fragment),ae=b(),B(ce.$$.fragment),le=b(),B(ue.$$.fragment),pe=b(),B(de.$$.fragment),fe=b(),B(he.$$.fragment),me=b(),B(ge.$$.fragment),$e=b(),B(we.$$.fragment),ye=b(),be=$("section"),be.innerHTML="<h2>About us</h2> \n  <p>Hi! We&#39;re Simon Anthony and Mark Goodliffe, two of the UK&#39;s most\n    enthusiastic puzzle solvers. We have both represented the UK at the World\n    Sudoku Championships and the World Puzzle Championships. We&#39;re also\n    “cryptic crossword” aficionados. Mark is the twelve-time winner\n    of The Times championship and Simon is the former record holder for most\n    consecutive correct solutions to The Listener crossword. We hope we can help\n    your puzzle solving while also introducing you to some of the world&#39;s best\n    puzzles.</p>",ve=b(),xe=$("section"),xe.innerHTML="<h2>Guidance for Sudoku/Puzzle Submissions</h2> \n  <p>If you create a puzzle/sudoku that you&#39;d like to see us solve on Cracking\n    The Cryptic then a) FANTASTIC! And b) Please, when sending your submission\n    to us, do make sure you adhere to the following requirements. These help our\n    testers to get through the sheer volume of requests we receive. Thank you.</p> \n  <ol><li>1. Make sure your puzzle has been test-solved and contains no errors.</li> \n    <li>2. Please indicate in the covering email your preferences as regards your\n      puzzle - i.e. are you only looking for it to appear in a video on the\n      channel; or, if we decide not to video it but like the puzzle, are you\n      happy for us to release it as a community post or on patreon (free or\n      behind the paywall)? “Use it how you choose” covers\n      everything!</li> \n    <li>3. Your puzzle email should include: i) the puzzle presented exactly as\n      you&#39;d like our testers to see it; ii) on a separate page, the solution.\n      The solution should include a description of any difficult/interesting\n      steps in the logical path. This is not for Simon &amp; Mark but is to aid the\n      testers. We endeavour not to publish puzzles that require\n      bifurcation/guesswork so, if a tester feels their only chance to crack a\n      difficult puzzle is using such techniques then it is very likely the\n      puzzle will be rejected. By including the logic path, the tester may\n      appreciate that some logical step WAS reasonable and so still pass the\n      puzzle on to Simon &amp; Mark.</li> \n    <li>4. Send the above to: crackingthecryptic@gmail.com Please be aware that we\n      do not have time to reply to submissions. You should assume that, if you\n      hear nothing and the puzzle has not appeared in a video/community\n      post/patreon post within a month then, unfortunately, we have not decided\n      to use the puzzle. At this point, by all means do submit another puzzle\n      (but please do wait this one month period before doing so).</li></ol>",Ie=b(),ke=$("section"),Se=$("h2"),Se.textContent="Frequently Asked Questions",Ce=b(),B(Te.$$.fragment),_e=b(),B(ze.$$.fragment),Ee=b(),B(De.$$.fragment),Ae=b(),B(je.$$.fragment),Ue=b(),B(Oe.$$.fragment),Pe=b(),B(Me.$$.fragment),Le=b(),B(Ne.$$.fragment),Fe=b(),B(qe.$$.fragment),Be=b(),B(He.$$.fragment),Re=b(),B(We.$$.fragment),x(o,"class","contain"),c(s.src,a="./img/hexagon.svg")||x(s,"src","./img/hexagon.svg"),x(s,"alt","Background Logo"),x(s,"class","hexagon top-48 md:top-24 -right-[25%] lg:-right-[10%]"),c(u.src,p="./img/hexagon.svg")||x(u,"src","./img/hexagon.svg"),x(u,"alt","Background Logo"),x(u,"class","hexagon bottom-48 md:bottom-24 -left-[25%] lg:-left-[10%]"),x(v,"class","flex flex-col content-center md:flex-row md:justify-around flex-wrap xl:w-2/3 mx-auto"),x(f,"class","contain"),x(i,"class","scroll-m-[26rem] sm:scroll-m-16 relative overflow-x-hidden"),x(i,"id","apps"),c(W.src,K="./img/hexagon.svg")||x(W,"src","./img/hexagon.svg"),x(W,"alt","Background Logo"),x(W,"class","hexagon top-48 md:top-24 -right-[25%] lg:-right-[10%]"),c(V.src,Y="./img/hexagon.svg")||x(V,"src","./img/hexagon.svg"),x(V,"alt","Background Logo"),x(V,"class","hexagon bottom-48 md:bottom-24 -left-[25%] lg:-left-[10%]"),x(Q,"class","contain"),x(N,"class","relative overflow-x-hidden"),x(N,"id","info"),x(be,"class","contain"),x(be,"id","about"),x(xe,"class","contain"),x(xe,"id","submissions"),x(ke,"class","contain"),x(ke,"id","faq")},m(e,a){H(t,e,a),m(e,n,a),m(e,o,a),m(e,r,a),m(e,i,a),h(i,s),h(i,l),h(i,u),h(i,d),h(i,f),h(f,w),h(f,y),h(f,v),H(I,v,null),h(v,k),H(S,v,null),h(v,C),H(T,v,null),h(v,_),H(z,v,null),h(v,E),H(D,v,null),h(v,A),H(j,v,null),h(v,U),H(O,v,null),h(v,P),H(M,v,null),m(e,L,a),m(e,N,a),h(N,W),h(N,G),h(N,V),h(N,J),h(N,Q),h(Q,X),h(Q,Z),H(ee,Q,null),h(Q,te),H(ne,Q,null),h(Q,oe),H(re,Q,null),h(Q,ie),H(se,Q,null),h(Q,ae),H(ce,Q,null),h(Q,le),H(ue,Q,null),h(Q,pe),H(de,Q,null),h(Q,fe),H(he,Q,null),h(Q,me),H(ge,Q,null),h(Q,$e),H(we,Q,null),m(e,ye,a),m(e,be,a),m(e,ve,a),m(e,xe,a),m(e,Ie,a),m(e,ke,a),h(ke,Se),h(ke,Ce),H(Te,ke,null),h(ke,_e),H(ze,ke,null),h(ke,Ee),H(De,ke,null),h(ke,Ae),H(je,ke,null),h(ke,Ue),H(Oe,ke,null),h(ke,Pe),H(Me,ke,null),h(ke,Le),H(Ne,ke,null),h(ke,Fe),H(qe,ke,null),h(ke,Be),H(He,ke,null),h(ke,Re),H(We,ke,null),Ke=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),I.$set(n);const o={};1&t&&(o.$$scope={dirty:t,ctx:e}),ee.$set(o);const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),ne.$set(r);const i={};1&t&&(i.$$scope={dirty:t,ctx:e}),re.$set(i);const s={};1&t&&(s.$$scope={dirty:t,ctx:e}),se.$set(s);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),ce.$set(a);const c={};1&t&&(c.$$scope={dirty:t,ctx:e}),ue.$set(c);const l={};1&t&&(l.$$scope={dirty:t,ctx:e}),de.$set(l);const u={};1&t&&(u.$$scope={dirty:t,ctx:e}),he.$set(u);const p={};1&t&&(p.$$scope={dirty:t,ctx:e}),ge.$set(p);const d={};1&t&&(d.$$scope={dirty:t,ctx:e}),we.$set(d);const f={};1&t&&(f.$$scope={dirty:t,ctx:e}),Te.$set(f);const h={};1&t&&(h.$$scope={dirty:t,ctx:e}),ze.$set(h);const m={};1&t&&(m.$$scope={dirty:t,ctx:e}),De.$set(m);const g={};1&t&&(g.$$scope={dirty:t,ctx:e}),je.$set(g);const $={};1&t&&($.$$scope={dirty:t,ctx:e}),Oe.$set($);const w={};1&t&&(w.$$scope={dirty:t,ctx:e}),Me.$set(w);const y={};1&t&&(y.$$scope={dirty:t,ctx:e}),Ne.$set(y);const b={};1&t&&(b.$$scope={dirty:t,ctx:e}),qe.$set(b);const v={};1&t&&(v.$$scope={dirty:t,ctx:e}),He.$set(v);const x={};1&t&&(x.$$scope={dirty:t,ctx:e}),We.$set(x)},i(e){Ke||(F(t.$$.fragment,e),F(I.$$.fragment,e),F(S.$$.fragment,e),F(T.$$.fragment,e),F(z.$$.fragment,e),F(D.$$.fragment,e),F(j.$$.fragment,e),F(O.$$.fragment,e),F(M.$$.fragment,e),F(ee.$$.fragment,e),F(ne.$$.fragment,e),F(re.$$.fragment,e),F(se.$$.fragment,e),F(ce.$$.fragment,e),F(ue.$$.fragment,e),F(de.$$.fragment,e),F(he.$$.fragment,e),F(ge.$$.fragment,e),F(we.$$.fragment,e),F(Te.$$.fragment,e),F(ze.$$.fragment,e),F(De.$$.fragment,e),F(je.$$.fragment,e),F(Oe.$$.fragment,e),F(Me.$$.fragment,e),F(Ne.$$.fragment,e),F(qe.$$.fragment,e),F(He.$$.fragment,e),F(We.$$.fragment,e),Ke=!0)},o(e){q(t.$$.fragment,e),q(I.$$.fragment,e),q(S.$$.fragment,e),q(T.$$.fragment,e),q(z.$$.fragment,e),q(D.$$.fragment,e),q(j.$$.fragment,e),q(O.$$.fragment,e),q(M.$$.fragment,e),q(ee.$$.fragment,e),q(ne.$$.fragment,e),q(re.$$.fragment,e),q(se.$$.fragment,e),q(ce.$$.fragment,e),q(ue.$$.fragment,e),q(de.$$.fragment,e),q(he.$$.fragment,e),q(ge.$$.fragment,e),q(we.$$.fragment,e),q(Te.$$.fragment,e),q(ze.$$.fragment,e),q(De.$$.fragment,e),q(je.$$.fragment,e),q(Oe.$$.fragment,e),q(Me.$$.fragment,e),q(Ne.$$.fragment,e),q(qe.$$.fragment,e),q(He.$$.fragment,e),q(We.$$.fragment,e),Ke=!1},d(e){R(t,e),e&&g(n),e&&g(o),e&&g(r),e&&g(i),R(I),R(S),R(T),R(z),R(D),R(j),R(O),R(M),e&&g(L),e&&g(N),R(ee),R(ne),R(re),R(se),R(ce),R(ue),R(de),R(he),R(ge),R(we),e&&g(ye),e&&g(be),e&&g(ve),e&&g(xe),e&&g(Ie),e&&g(ke),R(Te),R(ze),R(De),R(je),R(Oe),R(Me),R(Ne),R(qe),R(He),R(We)}}}return new class extends G{constructor(e){super(),K(this,e,null,jn,i,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
