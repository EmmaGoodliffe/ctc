var app=function(){"use strict";function e(){}function t(e){return e()}function n(){return Object.create(null)}function o(e){e.forEach(t)}function i(e){return"function"==typeof e}function r(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}let s,a;function c(e,t){return s||(s=document.createElement("a")),s.href=t,e===s.href}function l(e,t,n,o){if(e){const i=u(e,t,n,o);return e[0](i)}}function u(e,t,n,o){return e[1]&&o?function(e,t){for(const n in t)e[n]=t[n];return e}(n.ctx.slice(),e[1](o(t))):n.ctx}function p(e,t,n,o){if(e[2]&&o){const i=e[2](o(n));if(void 0===t.dirty)return i;if("object"==typeof i){const e=[],n=Math.max(t.dirty.length,i.length);for(let o=0;o<n;o+=1)e[o]=t.dirty[o]|i[o];return e}return t.dirty|i}return t.dirty}function d(e,t,n,o,i,r){if(i){const s=u(t,n,o,r);e.p(s,i)}}function f(e){if(e.ctx.length>32){const t=[],n=e.ctx.length/32;for(let e=0;e<n;e++)t[e]=-1;return t}return-1}function h(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function g(e){e.parentNode.removeChild(e)}function $(e){return document.createElement(e)}function w(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function y(e){return document.createTextNode(e)}function b(){return y(" ")}function v(e,t,n,o){return e.addEventListener(t,n,o),()=>e.removeEventListener(t,n,o)}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function I(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function k(e,t,n){e.classList[n?"add":"remove"](t)}function S(e){a=e}const C=[],T=[],_=[],E=[],z=Promise.resolve();let D=!1;function A(e){_.push(e)}const j=new Set;let U=0;function O(){const e=a;do{for(;U<C.length;){const e=C[U];U++,S(e),P(e.$$)}for(S(null),C.length=0,U=0;T.length;)T.pop()();for(let e=0;e<_.length;e+=1){const t=_[e];j.has(t)||(j.add(t),t())}_.length=0}while(C.length);for(;E.length;)E.pop()();D=!1,j.clear(),S(e)}function P(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(A)}}const M=new Set;let N;function L(e,t){e&&e.i&&(M.delete(e),e.i(t))}function F(e,t,n,o){if(e&&e.o){if(M.has(e))return;M.add(e),N.c.push((()=>{M.delete(e),o&&(n&&e.d(1),o())})),e.o(t)}}function q(e){e&&e.c()}function B(e,n,r,s){const{fragment:a,on_mount:c,on_destroy:l,after_update:u}=e.$$;a&&a.m(n,r),s||A((()=>{const n=c.map(t).filter(i);l?l.push(...n):o(n),e.$$.on_mount=[]})),u.forEach(A)}function R(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function H(e,t){-1===e.$$.dirty[0]&&(C.push(e),D||(D=!0,z.then(O)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function W(t,i,r,s,c,l,u,p=[-1]){const d=a;S(t);const f=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(d?d.$$.context:[])),callbacks:n(),dirty:p,skip_bound:!1,root:i.target||d.$$.root};u&&u(f.root);let h=!1;if(f.ctx=r?r(t,i.props||{},((e,n,...o)=>{const i=o.length?o[0]:n;return f.ctx&&c(f.ctx[e],f.ctx[e]=i)&&(!f.skip_bound&&f.bound[e]&&f.bound[e](i),h&&H(t,e)),n})):[],f.update(),h=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);f.fragment&&f.fragment.l(e),e.forEach(g)}else f.fragment&&f.fragment.c();i.intro&&L(t.$$.fragment),B(t,i.target,i.anchor,i.customElement),O()}S(d)}class K{$destroy(){R(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}
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
     */class G{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"==typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}class V extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,V.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Y.prototype.create)}}class Y{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},o=`${this.service}/${e}`,i=this.errors[e],r=i?function(e,t){return e.replace(J,((e,n)=>{const o=t[n];return null!=o?String(o):`<${n}?>`}))}(i,n):"Error",s=`${this.serviceName}: ${r} (${o}).`;return new V(o,s,n)}}const J=/\{\$([^}]+)}/g;function Q(e,t){if(e===t)return!0;const n=Object.keys(e),o=Object.keys(t);for(const i of n){if(!o.includes(i))return!1;const n=e[i],r=t[i];if(X(n)&&X(r)){if(!Q(n,r))return!1}else if(n!==r)return!1}for(const e of o)if(!n.includes(e))return!1;return!0}function X(e){return null!==e&&"object"==typeof e}
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
     */function Z(e,t=1e3,n=2){const o=t*Math.pow(n,e),i=Math.round(.5*o*(Math.random()-.5)*2);return Math.min(144e5,o+i)}
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
     */function ee(e){return e&&e._delegate?e._delegate:e}class te{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
     */const ne="[DEFAULT]";
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
     */class oe{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new G;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),o=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(o)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(e){if(o)return null;throw e}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
     */(e))try{this.getOrInitializeService({instanceIdentifier:ne})}catch(e){}for(const[e,t]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:n});t.resolve(e)}catch(e){}}}}clearInstance(e="[DEFAULT]"){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e="[DEFAULT]"){return this.instances.has(e)}getOptions(e="[DEFAULT]"){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[e,t]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(e)&&t.resolve(o)}return o}onInit(e,t){var n;const o=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(o))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(o,i);const r=this.instances.get(o);return r&&e(r,o),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const o of n)try{o(e,t)}catch(e){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(o=e,o===ne?void 0:o),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(e){}var o;return n||null}normalizeInstanceIdentifier(e="[DEFAULT]"){return this.component?this.component.multipleInstances?e:ne:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}class ie{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oe(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}
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
     */var re;!function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"}(re||(re={}));const se={debug:re.DEBUG,verbose:re.VERBOSE,info:re.INFO,warn:re.WARN,error:re.ERROR,silent:re.SILENT},ae=re.INFO,ce={[re.DEBUG]:"log",[re.VERBOSE]:"log",[re.INFO]:"info",[re.WARN]:"warn",[re.ERROR]:"error"},le=(e,t,...n)=>{if(t<e.logLevel)return;const o=(new Date).toISOString(),i=ce[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${o}]  ${e.name}:`,...n)};class ue{constructor(e){this.name=e,this._logLevel=ae,this._logHandler=le,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in re))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"==typeof e?se[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,re.DEBUG,...e),this._logHandler(this,re.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,re.VERBOSE,...e),this._logHandler(this,re.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,re.INFO,...e),this._logHandler(this,re.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,re.WARN,...e),this._logHandler(this,re.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,re.ERROR,...e),this._logHandler(this,re.ERROR,...e)}}
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
     */class pe{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map((e=>{if(function(e){const t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}const de="@firebase/app",fe="0.7.11",he=new ue("@firebase/app"),me="[DEFAULT]",ge={[de]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},$e=new Map,we=new Map;function ye(e,t){try{e.container.addComponent(t)}catch(n){he.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function be(e){const t=e.name;if(we.has(t))return he.debug(`There were multiple attempts to register component ${t}.`),!1;we.set(t,e);for(const t of $e.values())ye(t,e);return!0}function ve(e,t){return e.container.getProvider(t)}
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
     */const xe=new Y("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."});
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
class Ie{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new te("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xe.create("app-deleted",{appName:this._name})}}function ke(e,t,n){var o;let i=null!==(o=ge[e])&&void 0!==o?o:e;n&&(i+=`-${n}`);const r=i.match(/\s|\//),s=t.match(/\s|\//);if(r||s){const e=[`Unable to register library "${i}" with version "${t}":`];return r&&e.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&s&&e.push("and"),s&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void he.warn(e.join(" "))}be(new te(`${i}-version`,(()=>({library:i,version:t})),"VERSION"))}
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
     */var Se;Se="",be(new te("platform-logger",(e=>new pe(e)),"PRIVATE")),ke(de,fe,Se),ke(de,fe,"esm2017"),ke("fire-js","");"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var Ce,Te,_e=(Ce=function(e,t){!function(e){function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function o(e,t,o){var i,r=new Promise((function(r,s){n(i=e[t].apply(e,o)).then(r,s)}));return r.request=i,r}function i(e,t,n){var i=o(e,t,n);return i.then((function(e){if(e)return new u(e,i.request)}))}function r(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function s(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return o(this[t],i,arguments)})}))}function a(e,t,n,o){o.forEach((function(o){o in n.prototype&&(e.prototype[o]=function(){return this[t][o].apply(this[t],arguments)})}))}function c(e,t,n,o){o.forEach((function(o){o in n.prototype&&(e.prototype[o]=function(){return i(this[t],o,arguments)})}))}function l(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function p(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function h(e){this._db=e}function m(e,t,n){var i=o(indexedDB,"open",[e,t]),r=i.request;return r&&(r.onupgradeneeded=function(e){n&&n(new f(r.result,e.oldVersion,r.transaction))}),i.then((function(e){return new h(e)}))}function g(e){return o(indexedDB,"deleteDatabase",[e])}r(l,"_index",["name","keyPath","multiEntry","unique"]),s(l,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),c(l,"_index",IDBIndex,["openCursor","openKeyCursor"]),r(u,"_cursor",["direction","key","primaryKey","value"]),s(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,o=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,o),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),p.prototype.createIndex=function(){return new l(this._store.createIndex.apply(this._store,arguments))},p.prototype.index=function(){return new l(this._store.index.apply(this._store,arguments))},r(p,"_store",["name","keyPath","indexNames","autoIncrement"]),s(p,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),c(p,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(p,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new p(this._tx.objectStore.apply(this._tx,arguments))},r(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new p(this._db.createObjectStore.apply(this._db,arguments))},r(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},r(h,"_db",["name","version","objectStoreNames"]),a(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[p,l].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),o=n[n.length-1],i=this._store||this._index,r=i[e].apply(i,n.slice(0,-1));r.onsuccess=function(){o(r.result)}})}))})),[l,p].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,o=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(o.push(e.value),void 0===t||o.length!=t?e.continue():i(o)):i(o)}))}))})})),e.openDb=m,e.deleteDb=g,Object.defineProperty(e,"__esModule",{value:!0})}(t)},Ce(Te={exports:{}},Te.exports),Te.exports);const Ee="@firebase/installations",ze="0.5.4",De=1e4,Ae="w:0.5.4",je="FIS_v2",Ue=36e5,Oe=new Y("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function Pe(e){return e instanceof V&&e.code.includes("request-failed")}
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
     */function Me({projectId:e}){return`https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`}function Ne(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()};var t}async function Le(e,t){const n=(await t.json()).error;return Oe.create("request-failed",{requestName:e,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function Fe({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function qe(e,{refreshToken:t}){const n=Fe(e);return n.append("Authorization",function(e){return`FIS_v2 ${e}`}
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
     */(t)),n}async function Be(e){const t=await e();return t.status>=500&&t.status<600?e():t}
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
const He=/^[cdef][\w-]{21}$/;function We(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const t=function(e){return(t=e,btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22);var t}
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
     */(e);return He.test(t)?t:""}catch(e){return""}}function Ke(e){return`${e.appName}!${e.appId}`}
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
     */const Ge=new Map;function Ve(e,t){const n=Ke(e);Ye(n,t),function(e,t){const n=function(){!Je&&"BroadcastChannel"in self&&(Je=new BroadcastChannel("[Firebase] FID Change"),Je.onmessage=e=>{Ye(e.data.key,e.data.fid)});return Je}();n&&n.postMessage({key:e,fid:t});0===Ge.size&&Je&&(Je.close(),Je=null)}(n,t)}function Ye(e,t){const n=Ge.get(e);if(n)for(const e of n)e(t)}let Je=null;
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
const Qe="firebase-installations-store";let Xe=null;function Ze(){return Xe||(Xe=_e.openDb("firebase-installations-database",1,(e=>{if(0===e.oldVersion)e.createObjectStore(Qe)}))),Xe}async function et(e,t){const n=Ke(e),o=(await Ze()).transaction(Qe,"readwrite"),i=o.objectStore(Qe),r=await i.get(n);return await i.put(t,n),await o.complete,r&&r.fid===t.fid||Ve(e,t.fid),t}async function tt(e){const t=Ke(e),n=(await Ze()).transaction(Qe,"readwrite");await n.objectStore(Qe).delete(t),await n.complete}async function nt(e,t){const n=Ke(e),o=(await Ze()).transaction(Qe,"readwrite"),i=o.objectStore(Qe),r=await i.get(n),s=t(r);return void 0===s?await i.delete(n):await i.put(s,n),await o.complete,!s||r&&r.fid===s.fid||Ve(e,s.fid),s}
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
     */async function ot(e){let t;const n=await nt(e,(n=>{const o=function(e){return st(e||{fid:We(),registrationStatus:0})}(n),i=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine){return{installationEntry:t,registrationPromise:Promise.reject(Oe.create("app-offline"))}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},o=async function(e,t){try{const n=await async function(e,{fid:t}){const n=Me(e),o=Fe(e),i={fid:t,authVersion:je,appId:e.appId,sdkVersion:Ae},r={method:"POST",headers:o,body:JSON.stringify(i)},s=await Be((()=>fetch(n,r)));if(s.ok){const e=await s.json();return{fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:Ne(e.authToken)}}throw await Le("Create Installation",s)}(e,t);return et(e,n)}catch(n){throw Pe(n)&&409===n.customData.serverCode?await tt(e):await et(e,{fid:t.fid,registrationStatus:0}),n}}(e,n);return{installationEntry:n,registrationPromise:o}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:it(e)}:{installationEntry:t}}(e,o);return t=i.registrationPromise,i.installationEntry}));return""===n.fid?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}async function it(e){let t=await rt(e);for(;1===t.registrationStatus;)await Re(100),t=await rt(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await ot(e);return n||t}return t}function rt(e){return nt(e,(e=>{if(!e)throw Oe.create("installation-not-found");return st(e)}))}function st(e){return 1===(t=e).registrationStatus&&t.registrationTime+De<Date.now()?{fid:e.fid,registrationStatus:0}:e;var t;
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
     */}async function at({appConfig:e,platformLoggerProvider:t},n){const o=function(e,{fid:t}){return`${Me(e)}/${t}/authTokens:generate`}
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
     */(e,n),i=qe(e,n),r=t.getImmediate({optional:!0});r&&i.append("x-firebase-client",r.getPlatformInfoString());const s={installation:{sdkVersion:Ae}},a={method:"POST",headers:i,body:JSON.stringify(s)},c=await Be((()=>fetch(o,a)));if(c.ok){return Ne(await c.json())}throw await Le("Generate Auth Token",c)}async function ct(e,t=!1){let n;const o=await nt(e.appConfig,(o=>{if(!ut(o))throw Oe.create("not-registered");const i=o.authToken;if(!t&&function(e){return 2===e.requestStatus&&!function(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ue}(e)}(i))return o;if(1===i.requestStatus)return n=async function(e,t){let n=await lt(e.appConfig);for(;1===n.authToken.requestStatus;)await Re(100),n=await lt(e.appConfig);const o=n.authToken;return 0===o.requestStatus?ct(e,t):o}(e,t),o;{if(!navigator.onLine)throw Oe.create("app-offline");const t=function(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}(o);return n=async function(e,t){try{const n=await at(e,t),o=Object.assign(Object.assign({},t),{authToken:n});return await et(e.appConfig,o),n}catch(n){if(!Pe(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await et(e.appConfig,n)}else await tt(e.appConfig);throw n}}(e,t),t}}));return n?await n:o.authToken}function lt(e){return nt(e,(e=>{if(!ut(e))throw Oe.create("not-registered");const t=e.authToken;return 1===(n=t).requestStatus&&n.requestTime+De<Date.now()?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e;var n;
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
     */}))}function ut(e){return void 0!==e&&2===e.registrationStatus}
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
async function pt(e,t=!1){const n=e;await async function(e){const{registrationPromise:t}=await ot(e);t&&await t}
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
     */(n.appConfig);return(await ct(n,t)).token}function dt(e){return Oe.create("missing-app-config-values",{valueName:e})}
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
     */const ft="installations",ht=e=>{const t=e.getProvider("app").getImmediate(),n=function(e){if(!e||!e.options)throw dt("App Configuration");if(!e.name)throw dt("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw dt(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t);return{app:t,appConfig:n,platformLoggerProvider:ve(t,"platform-logger"),_delete:()=>Promise.resolve()}},mt=e=>{const t=ve(e.getProvider("app").getImmediate(),ft).getImmediate();return{getId:()=>async function(e){const t=e,{installationEntry:n,registrationPromise:o}=await ot(t.appConfig);return o?o.catch(console.error):ct(t).catch(console.error),n.fid}(t),getToken:e=>pt(t,e)}};be(new te(ft,ht,"PUBLIC")),be(new te("installations-internal",mt,"PRIVATE")),ke(Ee,ze),ke(Ee,ze,"esm2017");
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
const gt="analytics",$t="https://www.googletagmanager.com/gtag/js",wt=new ue("@firebase/analytics");
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
function yt(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function bt(e,t,n,o){return async function(i,r,s){try{"event"===i?await async function(e,t,n,o,i){try{let r=[];if(i&&i.send_to){let e=i.send_to;Array.isArray(e)||(e=[e]);const o=await yt(n);for(const n of e){const e=o.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){r=[];break}r.push(i)}}0===r.length&&(r=Object.values(t)),await Promise.all(r),e("event",o,i||{})}catch(e){wt.error(e)}}(e,t,n,r,s):"config"===i?await async function(e,t,n,o,i,r){const s=o[i];try{if(s)await t[s];else{const e=(await yt(n)).find((e=>e.measurementId===i));e&&await t[e.appId]}}catch(e){wt.error(e)}e("config",i,r)}(e,t,n,o,r,s):e("set",r)}catch(e){wt.error(e)}}}
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
const vt=new Y("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'});const xt=new class{constructor(e={},t=1e3){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}};function It(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function kt(e,t=xt,n){const{appId:o,apiKey:i,measurementId:r}=e.options;if(!o)throw vt.create("no-app-id");if(!i){if(r)return{measurementId:r,appId:o};throw vt.create("no-api-key")}const s=t.getThrottleMetadata(o)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Ct;return setTimeout((async()=>{a.abort()}),void 0!==n?n:6e4),St({appId:o,apiKey:i,measurementId:r},s,a,t)}async function St(e,{throttleEndTimeMillis:t,backoffCount:n},o,i=xt){const{appId:r,measurementId:s}=e;try{await function(e,t){return new Promise(((n,o)=>{const i=Math.max(t-Date.now(),0),r=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(r),o(vt.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}(o,t)}catch(e){if(s)return wt.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${e.message}]`),{appId:r,measurementId:s};throw e}try{const t=await async function(e){var t;const{appId:n,apiKey:o}=e,i={method:"GET",headers:It(o)},r="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",n),s=await fetch(r,i);if(200!==s.status&&304!==s.status){let e="";try{const n=await s.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(e){}throw vt.create("config-fetch-failed",{httpStatus:s.status,responseMessage:e})}return s.json()}(e);return i.deleteThrottleMetadata(r),t}catch(t){if(!function(e){if(!(e instanceof V&&e.customData))return!1;const t=Number(e.customData.httpStatus);return 429===t||500===t||503===t||504===t}(t)){if(i.deleteThrottleMetadata(r),s)return wt.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${s} provided in the "measurementId" field in the local Firebase config. [${t.message}]`),{appId:r,measurementId:s};throw t}const a=503===Number(t.customData.httpStatus)?Z(n,i.intervalMillis,30):Z(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+a,backoffCount:n+1};return i.setThrottleMetadata(r,c),wt.debug(`Calling attemptFetch again in ${a} millis`),St(e,c,o,i)}}class Ct{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
     */async function Tt(){if("object"!=typeof indexedDB)return wt.warn(vt.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await new Promise(((e,t)=>{try{let n=!0;const o="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(o);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(o),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}}))}catch(e){return wt.warn(vt.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function _t(e,t,n,o,i,r,s){var a;const c=kt(e);c.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&wt.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>wt.error(e))),t.push(c);const l=Tt().then((e=>e?o.getId():void 0)),[u,p]=await Promise.all([c,l]);(function(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes($t))return t;return null})()||function(e,t){const n=document.createElement("script");n.src=`${$t}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}(r,u.measurementId),i("js",new Date);const d=null!==(a=null==s?void 0:s.config)&&void 0!==a?a:{};return d.origin="firebase",d.update=!0,null!=p&&(d.firebase_id=p),i("config",u.measurementId,d),u.measurementId}
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
     */class Et{constructor(e){this.app=e}_delete(){return delete zt[this.app.options.appId],Promise.resolve()}}let zt={},Dt=[];const At={};let jt,Ut,Ot="dataLayer",Pt=!1;function Mt(){const e=[];if(function(){const e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof e&&void 0!==e.id}()&&e.push("This is a browser extension environment."),"undefined"!=typeof navigator&&navigator.cookieEnabled||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=vt.create("invalid-analytics-context",{errorInfo:t});wt.warn(n.message)}}function Nt(e,t,n){Mt();const o=e.options.appId;if(!o)throw vt.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw vt.create("no-api-key");wt.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=zt[o])throw vt.create("already-exists",{id:o});if(!Pt){!function(e){let t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Ot);const{wrappedGtag:e,gtagCore:t}=function(e,t,n,o,i){let r=function(...e){window[o].push(arguments)};return window[i]&&"function"==typeof window[i]&&(r=window[i]),window[i]=bt(r,e,t,n),{gtagCore:r,wrappedGtag:window[i]}}(zt,Dt,At,Ot,"gtag");Ut=e,jt=t,Pt=!0}zt[o]=_t(e,Dt,At,t,jt,Ot,n);return new Et(e)}
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
     */function Lt(e,t,n,o){e=ee(e),async function(e,t,n,o,i){if(i&&i.global)e("event",n,o);else{const i=await t;e("event",n,Object.assign(Object.assign({},o),{send_to:i}))}}(Ut,zt[e.app.options.appId],t,n,o).catch((e=>wt.error(e)))}const Ft="@firebase/analytics",qt="0.7.4";be(new te(gt,((e,{options:t})=>Nt(e.getProvider("app").getImmediate(),e.getProvider("installations-internal").getImmediate(),t)),"PUBLIC")),be(new te("analytics-internal",(function(e){try{const t=e.getProvider(gt).getImmediate();return{logEvent:(e,n,o)=>Lt(t,e,n,o)}}catch(e){throw vt.create("interop-component-reg-failed",{reason:e})}}),"PRIVATE")),ke(Ft,qt),ke(Ft,qt,"esm2017");
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
ke("firebase","9.6.1","app");const Bt=function(e,t={}){if("object"!=typeof t){t={name:t}}const n=Object.assign({name:me,automaticDataCollectionEnabled:!1},t),o=n.name;if("string"!=typeof o||!o)throw xe.create("bad-app-name",{appName:String(o)});const i=$e.get(o);if(i){if(Q(e,i.options)&&Q(n,i.config))return i;throw xe.create("duplicate-app",{appName:o})}const r=new ie(o);for(const e of we.values())r.addComponent(e);const s=new Ie(e,n,r);return $e.set(o,s),s}({apiKey:"AIzaSyCKI5ugoATk4ZIPBpXYd_JvpotryjDDrzE",authDomain:"ctc-eg.firebaseapp.com",projectId:"ctc-eg",storageBucket:"ctc-eg.appspot.com",messagingSenderId:"350248348226",appId:"1:350248348226:web:b5afb039230ff97dfd5bdb",measurementId:"G-S9SXNB843P"});function Rt(t){let n,o;return{c(){n=$("img"),c(n.src,o=t[0])||x(n,"src",o),x(n,"alt",t[1]),x(n,"class","w-6 h-6 mr-2")},m(e,t){m(e,n,t)},p(e,[t]){1&t&&!c(n.src,o=e[0])&&x(n,"src",o),2&t&&x(n,"alt",e[1])},i:e,o:e,d(e){e&&g(n)}}}function Ht(e,t,n){let{url:o}=t,{altText:i}=t;return e.$$set=e=>{"url"in e&&n(0,o=e.url),"altText"in e&&n(1,i=e.altText)},[o,i]}!function(e=function(e="[DEFAULT]"){const t=$e.get(e);if(!t)throw xe.create("no-app",{appName:e});return t}()){const t=ve(e=ee(e),gt);t.isInitialized()?t.getImmediate():function(e,t={}){const n=ve(e,gt);if(n.isInitialized()){const e=n.getImmediate();if(Q(t,n.getOptions()))return e;throw vt.create("already-initialized")}n.initialize({options:t})}(e)}(Bt);class Wt extends K{constructor(e){super(),W(this,e,Ht,Rt,r,{url:0,altText:1})}}function Kt(e){let t,n,o,i,r,s;return o=new Wt({props:{url:e[0],altText:e[2]}}),{c(){t=$("a"),n=$("button"),q(o.$$.fragment),i=b(),r=y(e[1]),x(n,"class","flex items-center justify-between rounded border border-sky-800 px-4 py-2"),x(t,"href",e[3]),x(t,"class","mr-4 mb-2 min-w-max")},m(e,a){m(e,t,a),h(t,n),B(o,n,null),h(n,i),h(n,r),s=!0},p(e,[n]){const i={};1&n&&(i.url=e[0]),4&n&&(i.altText=e[2]),o.$set(i),(!s||2&n)&&I(r,e[1]),(!s||8&n)&&x(t,"href",e[3])},i(e){s||(L(o.$$.fragment,e),s=!0)},o(e){F(o.$$.fragment,e),s=!1},d(e){e&&g(t),R(o)}}}function Gt(e,t,n){let{iconUrl:o}=t,{text:i}=t,{altText:r=i}=t,{url:s}=t;return e.$$set=e=>{"iconUrl"in e&&n(0,o=e.iconUrl),"text"in e&&n(1,i=e.text),"altText"in e&&n(2,r=e.altText),"url"in e&&n(3,s=e.url)},[o,i,r,s]}class Vt extends K{constructor(e){super(),W(this,e,Gt,Kt,r,{iconUrl:0,text:1,altText:2,url:3})}}function Yt(e){let t;return{c(){t=$("span"),t.textContent="New",x(t,"class","new")},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function Jt(e){let t,n,o,i,r,s,a,c,u,w,v,k,S,C=e[1]&&Yt();a=new Vt({props:{altText:"Windows logo",iconUrl:"https://img.icons8.com/ios-filled/50/000000/windows-10.png",text:"Windows via Steam",url:e[2]}}),u=new Vt({props:{altText:"Apple logo",iconUrl:"https://img.icons8.com/ios-filled/30/000000/mac-os.png",text:"iOS",url:e[3]}}),v=new Vt({props:{altText:"Android logo",iconUrl:"https://img.icons8.com/ios-filled/50/000000/android-os.png",text:"Android",url:e[4]}});const T=e[6].default,_=l(T,e,e[5],null);return{c(){t=$("div"),n=$("header"),o=y(e[0]),i=b(),C&&C.c(),r=b(),s=$("div"),q(a.$$.fragment),c=b(),q(u.$$.fragment),w=b(),q(v.$$.fragment),k=b(),_&&_.c(),x(n,"class","text-lg font-semibold mb-4 flex items-center"),x(s,"class","flex flex-wrap text-sm"),x(t,"class","w-11/12 md:w-5/12 my-2 px-8 py-6 shadow border border-bg-dark")},m(e,l){m(e,t,l),h(t,n),h(n,o),h(n,i),C&&C.m(n,null),h(t,r),h(t,s),B(a,s,null),h(s,c),B(u,s,null),h(s,w),B(v,s,null),h(t,k),_&&_.m(t,null),S=!0},p(e,[t]){(!S||1&t)&&I(o,e[0]),e[1]?C||(C=Yt(),C.c(),C.m(n,null)):C&&(C.d(1),C=null);const i={};4&t&&(i.url=e[2]),a.$set(i);const r={};8&t&&(r.url=e[3]),u.$set(r);const s={};16&t&&(s.url=e[4]),v.$set(s),_&&_.p&&(!S||32&t)&&d(_,T,e,e[5],S?p(T,e[5],t,null):f(e[5]),null)},i(e){S||(L(a.$$.fragment,e),L(u.$$.fragment,e),L(v.$$.fragment,e),L(_,e),S=!0)},o(e){F(a.$$.fragment,e),F(u.$$.fragment,e),F(v.$$.fragment,e),F(_,e),S=!1},d(e){e&&g(t),C&&C.d(),R(a),R(u),R(v),_&&_.d(e)}}}function Qt(e,t,n){let{$$slots:o={},$$scope:i}=t,{title:r}=t,{isNew:s=!1}=t,{windowsUrl:a}=t,{appleUrl:c}=t,{androidUrl:l}=t;return e.$$set=e=>{"title"in e&&n(0,r=e.title),"isNew"in e&&n(1,s=e.isNew),"windowsUrl"in e&&n(2,a=e.windowsUrl),"appleUrl"in e&&n(3,c=e.appleUrl),"androidUrl"in e&&n(4,l=e.androidUrl),"$$scope"in e&&n(5,i=e.$$scope)},[r,s,a,c,l,i,o]}class Xt extends K{constructor(e){super(),W(this,e,Qt,Jt,r,{title:0,isNew:1,windowsUrl:2,appleUrl:3,androidUrl:4})}}function Zt(e){let t,n,o,i;const r=e[2].default,s=l(r,e,e[1],null);return{c(){t=$("h3"),n=y(e[0]),o=b(),s&&s.c(),x(t,"class","mt-6 mb-0")},m(e,r){m(e,t,r),h(t,n),m(e,o,r),s&&s.m(e,r),i=!0},p(e,[t]){(!i||1&t)&&I(n,e[0]),s&&s.p&&(!i||2&t)&&d(s,r,e,e[1],i?p(r,e[1],t,null):f(e[1]),null)},i(e){i||(L(s,e),i=!0)},o(e){F(s,e),i=!1},d(e){e&&g(t),e&&g(o),s&&s.d(e)}}}function en(e,t,n){let{$$slots:o={},$$scope:i}=t,{question:r}=t;return e.$$set=e=>{"question"in e&&n(0,r=e.question),"$$scope"in e&&n(1,i=e.$$scope)},[r,i,o]}class tn extends K{constructor(e){super(),W(this,e,en,Zt,r,{question:0})}}function nn(e){let t,n,o,i,r,s;n=new Wt({props:{url:e[2],altText:e[3]}});const a=e[5].default,c=l(a,e,e[4],null);return{c(){t=$("h3"),q(n.$$.fragment),o=b(),i=y(e[0]),r=b(),c&&c.c()},m(e,a){m(e,t,a),B(n,t,null),h(t,o),h(t,i),m(e,r,a),c&&c.m(e,a),s=!0},p(e,t){const o={};4&t&&(o.url=e[2]),8&t&&(o.altText=e[3]),n.$set(o),(!s||1&t)&&I(i,e[0]),c&&c.p&&(!s||16&t)&&d(c,a,e,e[4],s?p(a,e[4],t,null):f(e[4]),null)},i(e){s||(L(n.$$.fragment,e),L(c,e),s=!0)},o(e){F(n.$$.fragment,e),F(c,e),s=!1},d(e){e&&g(t),R(n),e&&g(r),c&&c.d(e)}}}function on(e){let t,n,o,i,r,s,a;o=new Wt({props:{url:e[2],altText:e[3]}});const c=e[5].default,u=l(c,e,e[4],null);return{c(){t=$("a"),n=$("h3"),q(o.$$.fragment),i=b(),r=y(e[0]),s=b(),u&&u.c(),x(t,"href",e[1]),x(t,"target","_blank")},m(e,c){m(e,t,c),h(t,n),B(o,n,null),h(n,i),h(n,r),h(t,s),u&&u.m(t,null),a=!0},p(e,n){const i={};4&n&&(i.url=e[2]),8&n&&(i.altText=e[3]),o.$set(i),(!a||1&n)&&I(r,e[0]),u&&u.p&&(!a||16&n)&&d(u,c,e,e[4],a?p(c,e[4],n,null):f(e[4]),null),(!a||2&n)&&x(t,"href",e[1])},i(e){a||(L(o.$$.fragment,e),L(u,e),a=!0)},o(e){F(o.$$.fragment,e),F(u,e),a=!1},d(e){e&&g(t),R(o),u&&u.d(e)}}}function rn(e){let t,n,i,r;const s=[on,nn],a=[];function c(e,t){return e[1]?0:1}return n=c(e),i=a[n]=s[n](e),{c(){t=$("div"),i.c(),x(t,"class","mt-6 px-6 py-4 hover:bg-bg-dark transition duration-1 rounded-sm"),k(t,"cursor-pointer",e[1])},m(e,o){m(e,t,o),a[n].m(t,null),r=!0},p(e,[r]){let l=n;n=c(e),n===l?a[n].p(e,r):(N={r:0,c:[],p:N},F(a[l],1,1,(()=>{a[l]=null})),N.r||o(N.c),N=N.p,i=a[n],i?i.p(e,r):(i=a[n]=s[n](e),i.c()),L(i,1),i.m(t,null)),2&r&&k(t,"cursor-pointer",e[1])},i(e){r||(L(i),r=!0)},o(e){F(i),r=!1},d(e){e&&g(t),a[n].d()}}}function sn(e,t,n){let{$$slots:o={},$$scope:i}=t,{title:r}=t,{url:s=null}=t,{iconUrl:a}=t,{altText:c=r}=t;return e.$$set=e=>{"title"in e&&n(0,r=e.title),"url"in e&&n(1,s=e.url),"iconUrl"in e&&n(2,a=e.iconUrl),"altText"in e&&n(3,c=e.altText),"$$scope"in e&&n(4,i=e.$$scope)},[r,s,a,c,i,o]}class an extends K{constructor(e){super(),W(this,e,sn,rn,r,{title:0,url:1,iconUrl:2,altText:3})}}function cn(t){let n,i,r,s,a,c,l,u,p,d,f,y,I,S,C,T,_,E,z,D,A,j;return{c(){n=$("nav"),i=$("div"),r=w("svg"),s=w("rect"),a=w("rect"),c=w("rect"),l=b(),u=$("div"),p=$("a"),p.textContent="Home",d=b(),f=$("a"),f.textContent="Apps",y=b(),I=$("a"),I.textContent="Info",S=b(),C=$("a"),C.textContent="About us",T=b(),_=$("a"),_.textContent="Submissions",E=b(),z=$("a"),z.textContent="FAQs",x(s,"width","100"),x(s,"height","10"),x(a,"y","30"),x(a,"width","100"),x(a,"height","10"),x(c,"y","60"),x(c,"width","100"),x(c,"height","10"),x(r,"class","w-6 h-6 cursor-pointer"),x(r,"viewBox","0 0 100 80"),x(i,"class","sm:hidden p-4"),x(p,"href","#home"),x(f,"href","#apps"),x(I,"href","#info"),x(C,"href","#about"),x(_,"href","#submissions"),x(z,"href","#faq"),x(u,"class",D="sm:mx-auto md:mr-0 sm:w-fit flex flex-col sm:flex-row justify-end overflow-hidden max-h-0 transition-[max-height] sm:max-h-[32rem] "+(t[0]?"max-h-[32rem]":"")),k(u,"duration-2",t[0]),k(u,"duration-1",!t[0]),x(n,"class","px-4 sticky top-0 bg-inherit"),k(n,"shadow",t[1])},m(e,o){m(e,n,o),h(n,i),h(i,r),h(r,s),h(r,a),h(r,c),h(n,l),h(n,u),h(u,p),h(u,d),h(u,f),h(u,y),h(u,I),h(u,S),h(u,C),h(u,T),h(u,_),h(u,E),h(u,z),A||(j=[v(r,"click",t[2]),v(u,"click",t[3]),v(n,"blur",t[4])],A=!0)},p(e,[t]){1&t&&D!==(D="sm:mx-auto md:mr-0 sm:w-fit flex flex-col sm:flex-row justify-end overflow-hidden max-h-0 transition-[max-height] sm:max-h-[32rem] "+(e[0]?"max-h-[32rem]":""))&&x(u,"class",D),1&t&&k(u,"duration-2",e[0]),1&t&&k(u,"duration-1",!e[0]),2&t&&k(n,"shadow",e[1])},i:e,o:e,d(e){e&&g(n),A=!1,o(j)}}}function ln(e,t,n){let o=!1,i=!1;document.addEventListener("scroll",(()=>n(1,i=window.scrollY>0)));return[o,i,()=>n(0,o=!o),()=>n(0,o=!1),()=>n(0,o=!1)]}class un extends K{constructor(e){super(),W(this,e,ln,cn,r,{})}}function pn(e){let t;return{c(){t=$("p"),t.textContent="Search for “SudokuPad” on Amazon"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function dn(e){let t;return{c(){t=$("p"),t.textContent="Our merchandise (including birthday merch)"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function fn(e){let t;return{c(){t=$("p"),t.textContent="CTC fan Discord server"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function hn(e){let t;return{c(){t=$("p"),t.textContent="Join the community, support us and try our puzzle hunts"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function mn(e){let t;return{c(){t=$("p"),t.textContent="Our back catalogue (all categorised with links)"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function gn(e){let t;return{c(){t=$("p"),t.innerHTML='Send us puzzles to solve or contact us: <a href="mailto:crackingthecryptic@gmail.com">crackingthecryptic@gmail.com</a>'},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function $n(e){let t,n,o;return{c(){t=$("p"),t.innerHTML='Twitter:\n        <a href="https://twitter.com/crypticcracking">@crypticcracking</a> \n        <a href="https://twitter.com/search?q=(%23crypticcracking)&amp;src=typed_query">#crypticcracking</a>',n=b(),o=$("p"),o.innerHTML='Instagram:\n        <a href="https://www.instagram.com/crackingthecryptic/?hl=en">@crypticcracking</a> (for how to solve daily clues from The Times)'},m(e,i){m(e,t,i),m(e,n,i),m(e,o,i)},d(e){e&&g(t),e&&g(n),e&&g(o)}}}function wn(e){let t;return{c(){t=$("p"),t.textContent="Tim McCaskey (Guitar) or Lucy Audrin (Piano) plays Mozart's Sonata no 16\n        (“Sonata Facile”)"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function yn(e){let t;return{c(){t=$("p"),t.textContent="Play the puzzle in the video by clicking the link under the video\n        (above). Thanks to Sam Cappleman-Lynes and Sven Neumann for their work."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function bn(e){let t;return{c(){t=$("p"),t.textContent="Melvyn Mainini"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function vn(e){let t;return{c(){t=$("p"),t.textContent="Joel Blundell"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function xn(e){let t;return{c(){t=$("p"),t.textContent="We get hundreds of communications daily, and though we try to keep up as\n        far as possible with everything sent to us, necessarily we can't\n        reply to everything, and quite a few of the things we are asked are\n        recurrent questions. Often your public queries will be answered by our\n        helpful viewers directly. For private communications, give us a few\n        weeks at least, and check these FAQs and our puzzle submission\n        preferences for possible answers."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function In(e){let t;return{c(){t=$("p"),t.textContent="The software just checks for repeat digits in rows, columns and boxes.\n        If the puzzle has extra constraints, it doesn't check those."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function kn(e){let t;return{c(){t=$("p"),t.textContent="You haven't. Our solves are rigorously logical and rule out\n        alternative solutions. What you have found is a solution that obeys most\n        of the rules, but is wrong in some respect, perhaps due to one of the\n        constraints. Check it carefully, because our software doesn't check\n        extra constraints (see Q2)."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function Sn(e){let t;return{c(){t=$("p"),t.innerHTML='We have made one <a href="https://www.youtube.com/watch?v=936S5jWQTYE">video</a> on setting a Sandwich Sudoku. We&#39;re very happy for the setters we\n        admire to concentrate on setting entertaining puzzles for us to solve without\n        necessarily recording how they do it, and there may be some aspect of “We\n        must not let daylight in upon the magic.”'},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function Cn(e){let t;return{c(){t=$("p"),t.textContent="Definitely. But please see our puzzle submission guidelines [URL here].\n        They help our testers ensure the video content will be high quality. We\n        prefer not to receive crossword submissions at all."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function Tn(e){let t;return{c(){t=$("p"),t.textContent="It's by Mozart, and is his Piano Sonata No. 16 in C Major,\n        “Sonata facile” K545"},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function _n(e){let t;return{c(){t=$("p"),t.textContent="We're not familiar with the technology, and don't think it\n        would add much to our explanations of where we're looking."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function En(e){let t;return{c(){t=$("p"),t.textContent="On our apps, you can be sure that each puzzle has been crafted for your\n        enjoyment, tested and hinted by us, and will help you learn how to solve\n        better. Most of the free content out there uses computer-generated\n        puzzles, with difficulties based on computer solving,\n        “Hints” in those puzzles will often just provide an extra\n        number, given with no logical reason."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function zn(e){let t;return{c(){t=$("p"),t.textContent="The channel is now mostly about sudoku variants and pencil puzzles. We\n        will be doing more cryptic crossword content, but it will probably be on\n        Patreon. We're keeping the channel name, because of the goodwill\n        built up with it."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function Dn(e){let t;return{c(){t=$("p"),t.textContent="We prefer to focus on producing plenty of content that people are tuning\n        in for."},m(e,n){m(e,t,n)},d(e){e&&g(t)}}}function An(e){let t,n,o,i,r,s,a,c,l,u,p,d,f,w,y,v,I,k,S,C,T,_,E,z,D,A,j,U,O,P,M,N,H,W,K,G,V,Y,J,Q,X,Z,ee,te,ne,oe,ie,re,se,ae,ce,le,ue,pe,de,fe,he,me,ge,$e,we,ye,be,ve,xe,Ie,ke,Se,Ce,Te,_e,Ee,ze,De,Ae,je,Ue;return t=new un({}),d=new Xt({props:{title:"Sudoku Pad",isNew:!0,windowsUrl:"https://store.steampowered.com/app/1706870/Svens_SudokuPad/",appleUrl:"https://apps.apple.com/us/app/svens-sudokupad/id1570622073",androidUrl:"https://play.google.com/store/apps/details?id=com.svencodes.sudokupad",$$slots:{default:[pn]},$$scope:{ctx:e}}}),w=new Xt({props:{title:"Arrow Sudoku App",isNew:!0,windowsUrl:"https://store.steampowered.com/app/1613680/Arrow_Sudoku/",appleUrl:"https://apps.apple.com/us/app/arrow-sudoku/id1568407537",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.ArrowSudoku"}}),v=new Xt({props:{title:"Killer Sudoku App",windowsUrl:"https://store.steampowered.com/app/1471910/Killer_Sudoku/",appleUrl:"https://apps.apple.com/us/app/killer-sudoku-ctc/id1544165118",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.KillerSudoku&hl=en_US≷=US"}}),k=new Xt({props:{title:"Miracle Sudoku App",windowsUrl:"https://store.steampowered.com/app/1377260/Miracle_Sudoku/",appleUrl:"https://apps.apple.com/us/app/id1527363795",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.MiracleSudokuCTC"}}),C=new Xt({props:{title:"Thermo Sudoku App",windowsUrl:"https://store.steampowered.com/app/1316390/Thermo_Sudoku/",appleUrl:"https://apps.apple.com/us/app/thermo-sudoku/id1513994223",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.ThermoSudoku"}}),_=new Xt({props:{title:"Chess Sudoku App",windowsUrl:"https://store.steampowered.com/app/1250560/Chess_Sudoku/",appleUrl:"https://apps.apple.com/us/app/chess-sudoku/id1500654482?ls=1",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.ChessSudoku&hl=en_US"}}),z=new Xt({props:{title:"Classic Sudoku App",windowsUrl:"https://store.steampowered.com/app/1188330/Classic_Sudoku/",appleUrl:"https://apps.apple.com/us/app/classic-sudoku/id1488838275?ls=1",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.ClassicSudoku&hl=en_US"}}),A=new Xt({props:{title:"Sandwich Sudoku App",windowsUrl:"https://store.steampowered.com/app/1117310/Sandwich_Sudoku/",appleUrl:"https://apps.apple.com/us/app/sandwich-sudoku/id1476116705?ls=1",androidUrl:"https://play.google.com/store/apps/details?id=com.StudioGoya.SandwichSudoku"}}),M=new an({props:{title:"Merchandise",url:"https://cracking-the-cryptic.creator-spring.com/",iconUrl:"https://img.icons8.com/ios-filled/24/000000/clothes.png",$$slots:{default:[dn]},$$scope:{ctx:e}}}),H=new an({props:{title:"Discord",url:"https://discord.gg/BbN89j",iconUrl:"https://img.icons8.com/ios-filled/50/000000/discord-logo.png",$$slots:{default:[fn]},$$scope:{ctx:e}}}),K=new an({props:{title:"Patreon",url:"https://www.patreon.com/crackingthecryptic",iconUrl:"https://img.icons8.com/material/24/000000/patreon.png",$$slots:{default:[hn]},$$scope:{ctx:e}}}),V=new an({props:{title:"Catalogue",url:"https://tinyurl.com/CTCCatalogue",iconUrl:"https://img.icons8.com/ios-filled/50/000000/summary-list.png",$$slots:{default:[mn]},$$scope:{ctx:e}}}),J=new an({props:{title:"Email",iconUrl:"https://img.icons8.com/ios-filled/50/000000/email-open.png",$$slots:{default:[gn]},$$scope:{ctx:e}}}),X=new an({props:{title:"Follow us",iconUrl:"https://img.icons8.com/ios-filled/30/000000/twitter.png",$$slots:{default:[$n]},$$scope:{ctx:e}}}),ee=new an({props:{title:"Music",iconUrl:"https://img.icons8.com/ios-filled/30/000000/musical-notes.png",$$slots:{default:[wn]},$$scope:{ctx:e}}}),ne=new an({props:{title:"Software",iconUrl:"https://img.icons8.com/ios-glyphs/30/000000/web.png",$$slots:{default:[yn]},$$scope:{ctx:e}}}),ie=new an({props:{title:"Logo Design",iconUrl:"https://img.icons8.com/ios-filled/30/000000/design--v1.png",$$slots:{default:[bn]},$$scope:{ctx:e}}}),se=new an({props:{title:"Opening Credits Design",iconUrl:"https://img.icons8.com/ios-filled/30/000000/movie.png",$$slots:{default:[vn]},$$scope:{ctx:e}}}),me=new tn({props:{question:"Why haven't you replied to my email/comment/tweet?",$$slots:{default:[xn]},$$scope:{ctx:e}}}),$e=new tn({props:{question:"Why does your software sometimes say the solution is right when it's not?",$$slots:{default:[In]},$$scope:{ctx:e}}}),ye=new tn({props:{question:"I have found an alternative solution to a puzzle you showed. What's going on?",$$slots:{default:[kn]},$$scope:{ctx:e}}}),ve=new tn({props:{question:"Can we see a video about how to set a sudoku/puzzle? ",$$slots:{default:[Sn]},$$scope:{ctx:e}}}),Ie=new tn({props:{question:"Can I send you a puzzle to solve?",$$slots:{default:[Cn]},$$scope:{ctx:e}}}),Se=new tn({props:{question:"What is the music at the beginning of the videos?",$$slots:{default:[Tn]},$$scope:{ctx:e}}}),Te=new tn({props:{question:"Will you do an eye-tracker on your videos so we can see where you're looking?",$$slots:{default:[_n]},$$scope:{ctx:e}}}),Ee=new tn({props:{question:"Why do you charge for your apps when there is so much free sudoku content available?",$$slots:{default:[En]},$$scope:{ctx:e}}}),De=new tn({props:{question:"Will you be doing more crossword videos?",$$slots:{default:[zn]},$$scope:{ctx:e}}}),je=new tn({props:{question:"Can't you improve the production of your videos?",$$slots:{default:[Dn]},$$scope:{ctx:e}}}),{c(){q(t.$$.fragment),n=b(),o=$("main"),i=$("h1"),i.textContent="Cracking the Cryptic",r=b(),s=$("p"),s.innerHTML='The PDF of our book is now available! If you backed the <a href="https://www.kickstarter.com/projects/peterchayward/cracking-the-cryptics-greatest-hits/description">Kickstarter</a>, go to the Jellybeangames email receipt, where there is a button to\n    download the pdf. Delivery of the physical book should be underway soon.',a=b(),c=$("section"),l=$("h2"),l.textContent="Apps",u=b(),p=$("div"),q(d.$$.fragment),f=b(),q(w.$$.fragment),y=b(),q(v.$$.fragment),I=b(),q(k.$$.fragment),S=b(),q(C.$$.fragment),T=b(),q(_.$$.fragment),E=b(),q(z.$$.fragment),D=b(),q(A.$$.fragment),j=b(),U=$("section"),O=$("h2"),O.textContent="Information",P=b(),q(M.$$.fragment),N=b(),q(H.$$.fragment),W=b(),q(K.$$.fragment),G=b(),q(V.$$.fragment),Y=b(),q(J.$$.fragment),Q=b(),q(X.$$.fragment),Z=b(),q(ee.$$.fragment),te=b(),q(ne.$$.fragment),oe=b(),q(ie.$$.fragment),re=b(),q(se.$$.fragment),ae=b(),ce=$("section"),ce.innerHTML="<h2>About us</h2> \n    <p>Hi! We&#39;re Simon Anthony and Mark Goodliffe, two of the UK&#39;s most\n      enthusiastic puzzle solvers. We have both represented the UK at the World\n      Sudoku Championships and the World Puzzle Championships. We&#39;re also\n      “cryptic crossword” aficionados. Mark is the twelve-time\n      winner of The Times championship and Simon is the former record holder for\n      most consecutive correct solutions to The Listener crossword. We hope we\n      can help your puzzle solving while also introducing you to some of the\n      world&#39;s best puzzles.</p>",le=b(),ue=$("section"),ue.innerHTML="<h2>Guidance for Sudoku/Puzzle Submissions</h2> \n    <p>If you create a puzzle/sudoku that you&#39;d like to see us solve on Cracking\n      The Cryptic then a) FANTASTIC! And b) Please, when sending your submission\n      to us, do make sure you adhere to the following requirements. These help\n      our testers to get through the sheer volume of requests we receive. Thank\n      you.</p> \n    <ol><li>1. Make sure your puzzle has been test-solved and contains no errors.</li> \n      <li>2. Please indicate in the covering email your preferences as regards\n        your puzzle - i.e. are you only looking for it to appear in a video on\n        the channel; or, if we decide not to video it but like the puzzle, are\n        you happy for us to release it as a community post or on patreon (free\n        or behind the paywall)? “Use it how you choose” covers\n        everything!</li> \n      <li>3. Your puzzle email should include: i) the puzzle presented exactly as\n        you&#39;d like our testers to see it; ii) on a separate page, the solution.\n        The solution should include a description of any difficult/interesting\n        steps in the logical path. [This is not for Simon &amp; Mark but is to aid\n        the testers. We endeavour not to publish puzzles that require\n        bifurcation/guesswork so, if a tester feels their only chance to crack a\n        difficult puzzle is using such techniques then it is very likely the\n        puzzle will be rejected. By including the logic path, the tester may\n        appreciate that some logical step WAS reasonable and so still pass the\n        puzzle on to Simon &amp; Mark.</li> \n      <li>4. Send the above to: crackingthecryptic@gmail.com Please be aware that\n        we do not have time to reply to submissions. You should assume that, if\n        you hear nothing and the puzzle has not appeared in a video/community\n        post/patreon post within a month then, unfortunately, we have not\n        decided to use the puzzle. At this point, by all means do submit another\n        puzzle (but please do wait this one month period before doing so).</li></ol>",pe=b(),de=$("section"),fe=$("h2"),fe.textContent="Frequently Asked Questions",he=b(),q(me.$$.fragment),ge=b(),q($e.$$.fragment),we=b(),q(ye.$$.fragment),be=b(),q(ve.$$.fragment),xe=b(),q(Ie.$$.fragment),ke=b(),q(Se.$$.fragment),Ce=b(),q(Te.$$.fragment),_e=b(),q(Ee.$$.fragment),ze=b(),q(De.$$.fragment),Ae=b(),q(je.$$.fragment),x(s,"class","text-lg"),x(p,"class","flex flex-col content-center md:flex-row md:justify-around flex-wrap xl:w-2/3 mx-auto"),x(c,"class","scroll-m-[26rem] sm:scroll-m-16"),x(c,"id","apps"),x(U,"id","info"),x(ce,"id","about"),x(ue,"id","submissions"),x(de,"id","faq"),x(o,"class","w-11/12 mx-auto")},m(e,g){B(t,e,g),m(e,n,g),m(e,o,g),h(o,i),h(o,r),h(o,s),h(o,a),h(o,c),h(c,l),h(c,u),h(c,p),B(d,p,null),h(p,f),B(w,p,null),h(p,y),B(v,p,null),h(p,I),B(k,p,null),h(p,S),B(C,p,null),h(p,T),B(_,p,null),h(p,E),B(z,p,null),h(p,D),B(A,p,null),h(o,j),h(o,U),h(U,O),h(U,P),B(M,U,null),h(U,N),B(H,U,null),h(U,W),B(K,U,null),h(U,G),B(V,U,null),h(U,Y),B(J,U,null),h(U,Q),B(X,U,null),h(U,Z),B(ee,U,null),h(U,te),B(ne,U,null),h(U,oe),B(ie,U,null),h(U,re),B(se,U,null),h(o,ae),h(o,ce),h(o,le),h(o,ue),h(o,pe),h(o,de),h(de,fe),h(de,he),B(me,de,null),h(de,ge),B($e,de,null),h(de,we),B(ye,de,null),h(de,be),B(ve,de,null),h(de,xe),B(Ie,de,null),h(de,ke),B(Se,de,null),h(de,Ce),B(Te,de,null),h(de,_e),B(Ee,de,null),h(de,ze),B(De,de,null),h(de,Ae),B(je,de,null),Ue=!0},p(e,[t]){const n={};1&t&&(n.$$scope={dirty:t,ctx:e}),d.$set(n);const o={};1&t&&(o.$$scope={dirty:t,ctx:e}),M.$set(o);const i={};1&t&&(i.$$scope={dirty:t,ctx:e}),H.$set(i);const r={};1&t&&(r.$$scope={dirty:t,ctx:e}),K.$set(r);const s={};1&t&&(s.$$scope={dirty:t,ctx:e}),V.$set(s);const a={};1&t&&(a.$$scope={dirty:t,ctx:e}),J.$set(a);const c={};1&t&&(c.$$scope={dirty:t,ctx:e}),X.$set(c);const l={};1&t&&(l.$$scope={dirty:t,ctx:e}),ee.$set(l);const u={};1&t&&(u.$$scope={dirty:t,ctx:e}),ne.$set(u);const p={};1&t&&(p.$$scope={dirty:t,ctx:e}),ie.$set(p);const f={};1&t&&(f.$$scope={dirty:t,ctx:e}),se.$set(f);const h={};1&t&&(h.$$scope={dirty:t,ctx:e}),me.$set(h);const m={};1&t&&(m.$$scope={dirty:t,ctx:e}),$e.$set(m);const g={};1&t&&(g.$$scope={dirty:t,ctx:e}),ye.$set(g);const $={};1&t&&($.$$scope={dirty:t,ctx:e}),ve.$set($);const w={};1&t&&(w.$$scope={dirty:t,ctx:e}),Ie.$set(w);const y={};1&t&&(y.$$scope={dirty:t,ctx:e}),Se.$set(y);const b={};1&t&&(b.$$scope={dirty:t,ctx:e}),Te.$set(b);const v={};1&t&&(v.$$scope={dirty:t,ctx:e}),Ee.$set(v);const x={};1&t&&(x.$$scope={dirty:t,ctx:e}),De.$set(x);const I={};1&t&&(I.$$scope={dirty:t,ctx:e}),je.$set(I)},i(e){Ue||(L(t.$$.fragment,e),L(d.$$.fragment,e),L(w.$$.fragment,e),L(v.$$.fragment,e),L(k.$$.fragment,e),L(C.$$.fragment,e),L(_.$$.fragment,e),L(z.$$.fragment,e),L(A.$$.fragment,e),L(M.$$.fragment,e),L(H.$$.fragment,e),L(K.$$.fragment,e),L(V.$$.fragment,e),L(J.$$.fragment,e),L(X.$$.fragment,e),L(ee.$$.fragment,e),L(ne.$$.fragment,e),L(ie.$$.fragment,e),L(se.$$.fragment,e),L(me.$$.fragment,e),L($e.$$.fragment,e),L(ye.$$.fragment,e),L(ve.$$.fragment,e),L(Ie.$$.fragment,e),L(Se.$$.fragment,e),L(Te.$$.fragment,e),L(Ee.$$.fragment,e),L(De.$$.fragment,e),L(je.$$.fragment,e),Ue=!0)},o(e){F(t.$$.fragment,e),F(d.$$.fragment,e),F(w.$$.fragment,e),F(v.$$.fragment,e),F(k.$$.fragment,e),F(C.$$.fragment,e),F(_.$$.fragment,e),F(z.$$.fragment,e),F(A.$$.fragment,e),F(M.$$.fragment,e),F(H.$$.fragment,e),F(K.$$.fragment,e),F(V.$$.fragment,e),F(J.$$.fragment,e),F(X.$$.fragment,e),F(ee.$$.fragment,e),F(ne.$$.fragment,e),F(ie.$$.fragment,e),F(se.$$.fragment,e),F(me.$$.fragment,e),F($e.$$.fragment,e),F(ye.$$.fragment,e),F(ve.$$.fragment,e),F(Ie.$$.fragment,e),F(Se.$$.fragment,e),F(Te.$$.fragment,e),F(Ee.$$.fragment,e),F(De.$$.fragment,e),F(je.$$.fragment,e),Ue=!1},d(e){R(t,e),e&&g(n),e&&g(o),R(d),R(w),R(v),R(k),R(C),R(_),R(z),R(A),R(M),R(H),R(K),R(V),R(J),R(X),R(ee),R(ne),R(ie),R(se),R(me),R($e),R(ye),R(ve),R(Ie),R(Se),R(Te),R(Ee),R(De),R(je)}}}return new class extends K{constructor(e){super(),W(this,e,null,An,r,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
