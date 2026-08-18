(function(){const O=document.createElement("link").relList;if(O&&O.supports&&O.supports("modulepreload"))return;for(const C of document.querySelectorAll('link[rel="modulepreload"]'))d(C);new MutationObserver(C=>{for(const q of C)if(q.type==="childList")for(const F of q.addedNodes)F.tagName==="LINK"&&F.rel==="modulepreload"&&d(F)}).observe(document,{childList:!0,subtree:!0});function R(C){const q={};return C.integrity&&(q.integrity=C.integrity),C.referrerPolicy&&(q.referrerPolicy=C.referrerPolicy),C.crossOrigin==="use-credentials"?q.credentials="include":C.crossOrigin==="anonymous"?q.credentials="omit":q.credentials="same-origin",q}function d(C){if(C.ep)return;C.ep=!0;const q=R(C);fetch(C.href,q)}})();var rr={exports:{}},At={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bd;function nh(){if(bd)return At;bd=1;var E=Symbol.for("react.transitional.element"),O=Symbol.for("react.fragment");function R(d,C,q){var F=null;if(q!==void 0&&(F=""+q),C.key!==void 0&&(F=""+C.key),"key"in C){q={};for(var J in C)J!=="key"&&(q[J]=C[J])}else q=C;return C=q.ref,{$$typeof:E,type:d,key:F,ref:C!==void 0?C:null,props:q}}return At.Fragment=O,At.jsx=R,At.jsxs=R,At}var yd;function eh(){return yd||(yd=1,rr.exports=nh()),rr.exports}var ga=eh(),or={exports:{}},_={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sd;function sh(){if(Sd)return _;Sd=1;var E=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),d=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),q=Symbol.for("react.consumer"),F=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),T=Symbol.for("react.suspense"),A=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),x=Symbol.for("react.activity"),ra=Symbol.iterator;function Ja(u){return u===null||typeof u!="object"?null:(u=ra&&u[ra]||u["@@iterator"],typeof u=="function"?u:null)}var _a={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},wa=Object.assign,xn={};function ka(u,z,j){this.props=u,this.context=z,this.refs=xn,this.updater=j||_a}ka.prototype.isReactComponent={},ka.prototype.setState=function(u,z){if(typeof u!="object"&&typeof u!="function"&&u!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,u,z,"setState")},ka.prototype.forceUpdate=function(u){this.updater.enqueueForceUpdate(this,u,"forceUpdate")};function Wn(){}Wn.prototype=ka.prototype;function qa(u,z,j){this.props=u,this.context=z,this.refs=xn,this.updater=j||_a}var rn=qa.prototype=new Wn;rn.constructor=qa,wa(rn,ka.prototype),rn.isPureReactComponent=!0;var En=Array.isArray;function Ha(){}var k={H:null,A:null,T:null,S:null},Ba=Object.prototype.hasOwnProperty;function Tn(u,z,j){var L=j.ref;return{$$typeof:E,type:u,key:z,ref:L!==void 0?L:null,props:j}}function Fe(u,z){return Tn(u.type,z,u.props)}function Gn(u){return typeof u=="object"&&u!==null&&u.$$typeof===E}function Pa(u){var z={"=":"=0",":":"=2"};return"$"+u.replace(/[=:]/g,function(j){return z[j]})}var Ee=/\/+/g;function Mn(u,z){return typeof u=="object"&&u!==null&&u.key!=null?Pa(""+u.key):z.toString(36)}function yn(u){switch(u.status){case"fulfilled":return u.value;case"rejected":throw u.reason;default:switch(typeof u.status=="string"?u.then(Ha,Ha):(u.status="pending",u.then(function(z){u.status==="pending"&&(u.status="fulfilled",u.value=z)},function(z){u.status==="pending"&&(u.status="rejected",u.reason=z)})),u.status){case"fulfilled":return u.value;case"rejected":throw u.reason}}throw u}function b(u,z,j,L,H){var Q=typeof u;(Q==="undefined"||Q==="boolean")&&(u=null);var na=!1;if(u===null)na=!0;else switch(Q){case"bigint":case"string":case"number":na=!0;break;case"object":switch(u.$$typeof){case E:case O:na=!0;break;case Y:return na=u._init,b(na(u._payload),z,j,L,H)}}if(na)return H=H(u),na=L===""?"."+Mn(u,0):L,En(H)?(j="",na!=null&&(j=na.replace(Ee,"$&/")+"/"),b(H,z,j,"",function(Ds){return Ds})):H!=null&&(Gn(H)&&(H=Fe(H,j+(H.key==null||u&&u.key===H.key?"":(""+H.key).replace(Ee,"$&/")+"/")+na)),z.push(H)),1;na=0;var Ra=L===""?".":L+":";if(En(u))for(var va=0;va<u.length;va++)L=u[va],Q=Ra+Mn(L,va),na+=b(L,z,j,Q,H);else if(va=Ja(u),typeof va=="function")for(u=va.call(u),va=0;!(L=u.next()).done;)L=L.value,Q=Ra+Mn(L,va++),na+=b(L,z,j,Q,H);else if(Q==="object"){if(typeof u.then=="function")return b(yn(u),z,j,L,H);throw z=String(u),Error("Objects are not valid as a React child (found: "+(z==="[object Object]"?"object with keys {"+Object.keys(u).join(", ")+"}":z)+"). If you meant to render a collection of children, use an array instead.")}return na}function G(u,z,j){if(u==null)return u;var L=[],H=0;return b(u,L,"","",function(Q){return z.call(j,Q,H++)}),L}function U(u){if(u._status===-1){var z=u._result;z=z(),z.then(function(j){(u._status===0||u._status===-1)&&(u._status=1,u._result=j)},function(j){(u._status===0||u._status===-1)&&(u._status=2,u._result=j)}),u._status===-1&&(u._status=0,u._result=z)}if(u._status===1)return u._result.default;throw u._result}var ta=typeof reportError=="function"?reportError:function(u){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof u=="object"&&u!==null&&typeof u.message=="string"?String(u.message):String(u),error:u});if(!window.dispatchEvent(z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",u);return}console.error(u)},oa={map:G,forEach:function(u,z,j){G(u,function(){z.apply(this,arguments)},j)},count:function(u){var z=0;return G(u,function(){z++}),z},toArray:function(u){return G(u,function(z){return z})||[]},only:function(u){if(!Gn(u))throw Error("React.Children.only expected to receive a single React element child.");return u}};return _.Activity=x,_.Children=oa,_.Component=ka,_.Fragment=R,_.Profiler=C,_.PureComponent=qa,_.StrictMode=d,_.Suspense=T,_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=k,_.__COMPILER_RUNTIME={__proto__:null,c:function(u){return k.H.useMemoCache(u)}},_.cache=function(u){return function(){return u.apply(null,arguments)}},_.cacheSignal=function(){return null},_.cloneElement=function(u,z,j){if(u==null)throw Error("The argument must be a React element, but you passed "+u+".");var L=wa({},u.props),H=u.key;if(z!=null)for(Q in z.key!==void 0&&(H=""+z.key),z)!Ba.call(z,Q)||Q==="key"||Q==="__self"||Q==="__source"||Q==="ref"&&z.ref===void 0||(L[Q]=z[Q]);var Q=arguments.length-2;if(Q===1)L.children=j;else if(1<Q){for(var na=Array(Q),Ra=0;Ra<Q;Ra++)na[Ra]=arguments[Ra+2];L.children=na}return Tn(u.type,H,L)},_.createContext=function(u){return u={$$typeof:F,_currentValue:u,_currentValue2:u,_threadCount:0,Provider:null,Consumer:null},u.Provider=u,u.Consumer={$$typeof:q,_context:u},u},_.createElement=function(u,z,j){var L,H={},Q=null;if(z!=null)for(L in z.key!==void 0&&(Q=""+z.key),z)Ba.call(z,L)&&L!=="key"&&L!=="__self"&&L!=="__source"&&(H[L]=z[L]);var na=arguments.length-2;if(na===1)H.children=j;else if(1<na){for(var Ra=Array(na),va=0;va<na;va++)Ra[va]=arguments[va+2];H.children=Ra}if(u&&u.defaultProps)for(L in na=u.defaultProps,na)H[L]===void 0&&(H[L]=na[L]);return Tn(u,Q,H)},_.createRef=function(){return{current:null}},_.forwardRef=function(u){return{$$typeof:J,render:u}},_.isValidElement=Gn,_.lazy=function(u){return{$$typeof:Y,_payload:{_status:-1,_result:u},_init:U}},_.memo=function(u,z){return{$$typeof:A,type:u,compare:z===void 0?null:z}},_.startTransition=function(u){var z=k.T,j={};k.T=j;try{var L=u(),H=k.S;H!==null&&H(j,L),typeof L=="object"&&L!==null&&typeof L.then=="function"&&L.then(Ha,ta)}catch(Q){ta(Q)}finally{z!==null&&j.types!==null&&(z.types=j.types),k.T=z}},_.unstable_useCacheRefresh=function(){return k.H.useCacheRefresh()},_.use=function(u){return k.H.use(u)},_.useActionState=function(u,z,j){return k.H.useActionState(u,z,j)},_.useCallback=function(u,z){return k.H.useCallback(u,z)},_.useContext=function(u){return k.H.useContext(u)},_.useDebugValue=function(){},_.useDeferredValue=function(u,z){return k.H.useDeferredValue(u,z)},_.useEffect=function(u,z){return k.H.useEffect(u,z)},_.useEffectEvent=function(u){return k.H.useEffectEvent(u)},_.useId=function(){return k.H.useId()},_.useImperativeHandle=function(u,z,j){return k.H.useImperativeHandle(u,z,j)},_.useInsertionEffect=function(u,z){return k.H.useInsertionEffect(u,z)},_.useLayoutEffect=function(u,z){return k.H.useLayoutEffect(u,z)},_.useMemo=function(u,z){return k.H.useMemo(u,z)},_.useOptimistic=function(u,z){return k.H.useOptimistic(u,z)},_.useReducer=function(u,z,j){return k.H.useReducer(u,z,j)},_.useRef=function(u){return k.H.useRef(u)},_.useState=function(u){return k.H.useState(u)},_.useSyncExternalStore=function(u,z,j){return k.H.useSyncExternalStore(u,z,j)},_.useTransition=function(){return k.H.useTransition()},_.version="19.2.8",_}var Ad;function fr(){return Ad||(Ad=1,or.exports=sh()),or.exports}var Ta=fr(),ur={exports:{}},zt={},pr={exports:{}},dr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var zd;function th(){return zd||(zd=1,(function(E){function O(b,G){var U=b.length;b.push(G);a:for(;0<U;){var ta=U-1>>>1,oa=b[ta];if(0<C(oa,G))b[ta]=G,b[U]=oa,U=ta;else break a}}function R(b){return b.length===0?null:b[0]}function d(b){if(b.length===0)return null;var G=b[0],U=b.pop();if(U!==G){b[0]=U;a:for(var ta=0,oa=b.length,u=oa>>>1;ta<u;){var z=2*(ta+1)-1,j=b[z],L=z+1,H=b[L];if(0>C(j,U))L<oa&&0>C(H,j)?(b[ta]=H,b[L]=U,ta=L):(b[ta]=j,b[z]=U,ta=z);else if(L<oa&&0>C(H,U))b[ta]=H,b[L]=U,ta=L;else break a}}return G}function C(b,G){var U=b.sortIndex-G.sortIndex;return U!==0?U:b.id-G.id}if(E.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var q=performance;E.unstable_now=function(){return q.now()}}else{var F=Date,J=F.now();E.unstable_now=function(){return F.now()-J}}var T=[],A=[],Y=1,x=null,ra=3,Ja=!1,_a=!1,wa=!1,xn=!1,ka=typeof setTimeout=="function"?setTimeout:null,Wn=typeof clearTimeout=="function"?clearTimeout:null,qa=typeof setImmediate<"u"?setImmediate:null;function rn(b){for(var G=R(A);G!==null;){if(G.callback===null)d(A);else if(G.startTime<=b)d(A),G.sortIndex=G.expirationTime,O(T,G);else break;G=R(A)}}function En(b){if(wa=!1,rn(b),!_a)if(R(T)!==null)_a=!0,Ha||(Ha=!0,Pa());else{var G=R(A);G!==null&&yn(En,G.startTime-b)}}var Ha=!1,k=-1,Ba=5,Tn=-1;function Fe(){return xn?!0:!(E.unstable_now()-Tn<Ba)}function Gn(){if(xn=!1,Ha){var b=E.unstable_now();Tn=b;var G=!0;try{a:{_a=!1,wa&&(wa=!1,Wn(k),k=-1),Ja=!0;var U=ra;try{n:{for(rn(b),x=R(T);x!==null&&!(x.expirationTime>b&&Fe());){var ta=x.callback;if(typeof ta=="function"){x.callback=null,ra=x.priorityLevel;var oa=ta(x.expirationTime<=b);if(b=E.unstable_now(),typeof oa=="function"){x.callback=oa,rn(b),G=!0;break n}x===R(T)&&d(T),rn(b)}else d(T);x=R(T)}if(x!==null)G=!0;else{var u=R(A);u!==null&&yn(En,u.startTime-b),G=!1}}break a}finally{x=null,ra=U,Ja=!1}G=void 0}}finally{G?Pa():Ha=!1}}}var Pa;if(typeof qa=="function")Pa=function(){qa(Gn)};else if(typeof MessageChannel<"u"){var Ee=new MessageChannel,Mn=Ee.port2;Ee.port1.onmessage=Gn,Pa=function(){Mn.postMessage(null)}}else Pa=function(){ka(Gn,0)};function yn(b,G){k=ka(function(){b(E.unstable_now())},G)}E.unstable_IdlePriority=5,E.unstable_ImmediatePriority=1,E.unstable_LowPriority=4,E.unstable_NormalPriority=3,E.unstable_Profiling=null,E.unstable_UserBlockingPriority=2,E.unstable_cancelCallback=function(b){b.callback=null},E.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ba=0<b?Math.floor(1e3/b):5},E.unstable_getCurrentPriorityLevel=function(){return ra},E.unstable_next=function(b){switch(ra){case 1:case 2:case 3:var G=3;break;default:G=ra}var U=ra;ra=G;try{return b()}finally{ra=U}},E.unstable_requestPaint=function(){xn=!0},E.unstable_runWithPriority=function(b,G){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var U=ra;ra=b;try{return G()}finally{ra=U}},E.unstable_scheduleCallback=function(b,G,U){var ta=E.unstable_now();switch(typeof U=="object"&&U!==null?(U=U.delay,U=typeof U=="number"&&0<U?ta+U:ta):U=ta,b){case 1:var oa=-1;break;case 2:oa=250;break;case 5:oa=1073741823;break;case 4:oa=1e4;break;default:oa=5e3}return oa=U+oa,b={id:Y++,callback:G,priorityLevel:b,startTime:U,expirationTime:oa,sortIndex:-1},U>ta?(b.sortIndex=U,O(A,b),R(T)===null&&b===R(A)&&(wa?(Wn(k),k=-1):wa=!0,yn(En,U-ta))):(b.sortIndex=oa,O(T,b),_a||Ja||(_a=!0,Ha||(Ha=!0,Pa()))),b},E.unstable_shouldYield=Fe,E.unstable_wrapCallback=function(b){var G=ra;return function(){var U=ra;ra=G;try{return b.apply(this,arguments)}finally{ra=U}}}})(dr)),dr}var Ed;function ih(){return Ed||(Ed=1,pr.exports=th()),pr.exports}var gr={exports:{}},Na={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Td;function lh(){if(Td)return Na;Td=1;var E=fr();function O(T){var A="https://react.dev/errors/"+T;if(1<arguments.length){A+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)A+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+T+"; visit "+A+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function R(){}var d={d:{f:R,r:function(){throw Error(O(522))},D:R,C:R,L:R,m:R,X:R,S:R,M:R},p:0,findDOMNode:null},C=Symbol.for("react.portal");function q(T,A,Y){var x=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:C,key:x==null?null:""+x,children:T,containerInfo:A,implementation:Y}}var F=E.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function J(T,A){if(T==="font")return"";if(typeof A=="string")return A==="use-credentials"?A:""}return Na.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=d,Na.createPortal=function(T,A){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!A||A.nodeType!==1&&A.nodeType!==9&&A.nodeType!==11)throw Error(O(299));return q(T,A,null,Y)},Na.flushSync=function(T){var A=F.T,Y=d.p;try{if(F.T=null,d.p=2,T)return T()}finally{F.T=A,d.p=Y,d.d.f()}},Na.preconnect=function(T,A){typeof T=="string"&&(A?(A=A.crossOrigin,A=typeof A=="string"?A==="use-credentials"?A:"":void 0):A=null,d.d.C(T,A))},Na.prefetchDNS=function(T){typeof T=="string"&&d.d.D(T)},Na.preinit=function(T,A){if(typeof T=="string"&&A&&typeof A.as=="string"){var Y=A.as,x=J(Y,A.crossOrigin),ra=typeof A.integrity=="string"?A.integrity:void 0,Ja=typeof A.fetchPriority=="string"?A.fetchPriority:void 0;Y==="style"?d.d.S(T,typeof A.precedence=="string"?A.precedence:void 0,{crossOrigin:x,integrity:ra,fetchPriority:Ja}):Y==="script"&&d.d.X(T,{crossOrigin:x,integrity:ra,fetchPriority:Ja,nonce:typeof A.nonce=="string"?A.nonce:void 0})}},Na.preinitModule=function(T,A){if(typeof T=="string")if(typeof A=="object"&&A!==null){if(A.as==null||A.as==="script"){var Y=J(A.as,A.crossOrigin);d.d.M(T,{crossOrigin:Y,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0})}}else A==null&&d.d.M(T)},Na.preload=function(T,A){if(typeof T=="string"&&typeof A=="object"&&A!==null&&typeof A.as=="string"){var Y=A.as,x=J(Y,A.crossOrigin);d.d.L(T,Y,{crossOrigin:x,integrity:typeof A.integrity=="string"?A.integrity:void 0,nonce:typeof A.nonce=="string"?A.nonce:void 0,type:typeof A.type=="string"?A.type:void 0,fetchPriority:typeof A.fetchPriority=="string"?A.fetchPriority:void 0,referrerPolicy:typeof A.referrerPolicy=="string"?A.referrerPolicy:void 0,imageSrcSet:typeof A.imageSrcSet=="string"?A.imageSrcSet:void 0,imageSizes:typeof A.imageSizes=="string"?A.imageSizes:void 0,media:typeof A.media=="string"?A.media:void 0})}},Na.preloadModule=function(T,A){if(typeof T=="string")if(A){var Y=J(A.as,A.crossOrigin);d.d.m(T,{as:typeof A.as=="string"&&A.as!=="script"?A.as:void 0,crossOrigin:Y,integrity:typeof A.integrity=="string"?A.integrity:void 0})}else d.d.m(T)},Na.requestFormReset=function(T){d.d.r(T)},Na.unstable_batchedUpdates=function(T,A){return T(A)},Na.useFormState=function(T,A,Y){return F.H.useFormState(T,A,Y)},Na.useFormStatus=function(){return F.H.useHostTransitionStatus()},Na.version="19.2.8",Na}var Gd;function ch(){if(Gd)return gr.exports;Gd=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(O){console.error(O)}}return E(),gr.exports=lh(),gr.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jd;function rh(){if(jd)return zt;jd=1;var E=ih(),O=fr(),R=ch();function d(a){var n="https://react.dev/errors/"+a;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+a+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function C(a){return!(!a||a.nodeType!==1&&a.nodeType!==9&&a.nodeType!==11)}function q(a){var n=a,e=a;if(a.alternate)for(;n.return;)n=n.return;else{a=n;do n=a,(n.flags&4098)!==0&&(e=n.return),a=n.return;while(a)}return n.tag===3?e:null}function F(a){if(a.tag===13){var n=a.memoizedState;if(n===null&&(a=a.alternate,a!==null&&(n=a.memoizedState)),n!==null)return n.dehydrated}return null}function J(a){if(a.tag===31){var n=a.memoizedState;if(n===null&&(a=a.alternate,a!==null&&(n=a.memoizedState)),n!==null)return n.dehydrated}return null}function T(a){if(q(a)!==a)throw Error(d(188))}function A(a){var n=a.alternate;if(!n){if(n=q(a),n===null)throw Error(d(188));return n!==a?null:a}for(var e=a,s=n;;){var t=e.return;if(t===null)break;var i=t.alternate;if(i===null){if(s=t.return,s!==null){e=s;continue}break}if(t.child===i.child){for(i=t.child;i;){if(i===e)return T(t),a;if(i===s)return T(t),n;i=i.sibling}throw Error(d(188))}if(e.return!==s.return)e=t,s=i;else{for(var l=!1,c=t.child;c;){if(c===e){l=!0,e=t,s=i;break}if(c===s){l=!0,s=t,e=i;break}c=c.sibling}if(!l){for(c=i.child;c;){if(c===e){l=!0,e=i,s=t;break}if(c===s){l=!0,s=i,e=t;break}c=c.sibling}if(!l)throw Error(d(189))}}if(e.alternate!==s)throw Error(d(190))}if(e.tag!==3)throw Error(d(188));return e.stateNode.current===e?a:n}function Y(a){var n=a.tag;if(n===5||n===26||n===27||n===6)return a;for(a=a.child;a!==null;){if(n=Y(a),n!==null)return n;a=a.sibling}return null}var x=Object.assign,ra=Symbol.for("react.element"),Ja=Symbol.for("react.transitional.element"),_a=Symbol.for("react.portal"),wa=Symbol.for("react.fragment"),xn=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),Wn=Symbol.for("react.consumer"),qa=Symbol.for("react.context"),rn=Symbol.for("react.forward_ref"),En=Symbol.for("react.suspense"),Ha=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),Ba=Symbol.for("react.lazy"),Tn=Symbol.for("react.activity"),Fe=Symbol.for("react.memo_cache_sentinel"),Gn=Symbol.iterator;function Pa(a){return a===null||typeof a!="object"?null:(a=Gn&&a[Gn]||a["@@iterator"],typeof a=="function"?a:null)}var Ee=Symbol.for("react.client.reference");function Mn(a){if(a==null)return null;if(typeof a=="function")return a.$$typeof===Ee?null:a.displayName||a.name||null;if(typeof a=="string")return a;switch(a){case wa:return"Fragment";case ka:return"Profiler";case xn:return"StrictMode";case En:return"Suspense";case Ha:return"SuspenseList";case Tn:return"Activity"}if(typeof a=="object")switch(a.$$typeof){case _a:return"Portal";case qa:return a.displayName||"Context";case Wn:return(a._context.displayName||"Context")+".Consumer";case rn:var n=a.render;return a=a.displayName,a||(a=n.displayName||n.name||"",a=a!==""?"ForwardRef("+a+")":"ForwardRef"),a;case k:return n=a.displayName||null,n!==null?n:Mn(a.type)||"Memo";case Ba:n=a._payload,a=a._init;try{return Mn(a(n))}catch{}}return null}var yn=Array.isArray,b=O.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=R.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,U={pending:!1,data:null,method:null,action:null},ta=[],oa=-1;function u(a){return{current:a}}function z(a){0>oa||(a.current=ta[oa],ta[oa]=null,oa--)}function j(a,n){oa++,ta[oa]=a.current,a.current=n}var L=u(null),H=u(null),Q=u(null),na=u(null);function Ra(a,n){switch(j(Q,n),j(H,a),j(L,null),n.nodeType){case 9:case 11:a=(a=n.documentElement)&&(a=a.namespaceURI)?Pp(a):0;break;default:if(a=n.tagName,n=n.namespaceURI)n=Pp(n),a=Yp(n,a);else switch(a){case"svg":a=1;break;case"math":a=2;break;default:a=0}}z(L),j(L,a)}function va(){z(L),z(H),z(Q)}function Ds(a){a.memoizedState!==null&&j(na,a);var n=L.current,e=Yp(n,a.type);n!==e&&(j(H,a),j(L,e))}function Tt(a){H.current===a&&(z(L),z(H)),na.current===a&&(z(na),vt._currentValue=U)}var Qi,mr;function Te(a){if(Qi===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Qi=n&&n[1]||"",mr=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Qi+a+mr}var Vi=!1;function Xi(a,n){if(!a||Vi)return"";Vi=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(m){var h=m}Reflect.construct(a,[],S)}else{try{S.call()}catch(m){h=m}a.call(S.prototype)}}else{try{throw Error()}catch(m){h=m}(S=a())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(m){if(m&&h&&typeof m.stack=="string")return[m.stack,h.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var t=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");t&&t.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=s.DetermineComponentFrameRoot(),l=i[0],c=i[1];if(l&&c){var r=l.split(`
`),f=c.split(`
`);for(t=s=0;s<r.length&&!r[s].includes("DetermineComponentFrameRoot");)s++;for(;t<f.length&&!f[t].includes("DetermineComponentFrameRoot");)t++;if(s===r.length||t===f.length)for(s=r.length-1,t=f.length-1;1<=s&&0<=t&&r[s]!==f[t];)t--;for(;1<=s&&0<=t;s--,t--)if(r[s]!==f[t]){if(s!==1||t!==1)do if(s--,t--,0>t||r[s]!==f[t]){var v=`
`+r[s].replace(" at new "," at ");return a.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",a.displayName)),v}while(1<=s&&0<=t);break}}}finally{Vi=!1,Error.prepareStackTrace=e}return(e=a?a.displayName||a.name:"")?Te(e):""}function Md(a,n){switch(a.tag){case 26:case 27:case 5:return Te(a.type);case 16:return Te("Lazy");case 13:return a.child!==n&&n!==null?Te("Suspense Fallback"):Te("Suspense");case 19:return Te("SuspenseList");case 0:case 15:return Xi(a.type,!1);case 11:return Xi(a.type.render,!1);case 1:return Xi(a.type,!0);case 31:return Te("Activity");default:return""}}function vr(a){try{var n="",e=null;do n+=Md(a,e),e=a,a=a.return;while(a);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var Zi=Object.prototype.hasOwnProperty,Ki=E.unstable_scheduleCallback,Ji=E.unstable_cancelCallback,Od=E.unstable_shouldYield,qd=E.unstable_requestPaint,Wa=E.unstable_now,Nd=E.unstable_getCurrentPriorityLevel,br=E.unstable_ImmediatePriority,yr=E.unstable_UserBlockingPriority,Gt=E.unstable_NormalPriority,wd=E.unstable_LowPriority,Sr=E.unstable_IdlePriority,Rd=E.log,Ud=E.unstable_setDisableYieldValue,Ls=null,Ia=null;function In(a){if(typeof Rd=="function"&&Ud(a),Ia&&typeof Ia.setStrictMode=="function")try{Ia.setStrictMode(Ls,a)}catch{}}var $a=Math.clz32?Math.clz32:Bd,_d=Math.log,Hd=Math.LN2;function Bd(a){return a>>>=0,a===0?32:31-(_d(a)/Hd|0)|0}var jt=256,Ct=262144,Dt=4194304;function Ge(a){var n=a&42;if(n!==0)return n;switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return a&261888;case 262144:case 524288:case 1048576:case 2097152:return a&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return a&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return a}}function Lt(a,n,e){var s=a.pendingLanes;if(s===0)return 0;var t=0,i=a.suspendedLanes,l=a.pingedLanes;a=a.warmLanes;var c=s&134217727;return c!==0?(s=c&~i,s!==0?t=Ge(s):(l&=c,l!==0?t=Ge(l):e||(e=c&~a,e!==0&&(t=Ge(e))))):(c=s&~i,c!==0?t=Ge(c):l!==0?t=Ge(l):e||(e=s&~a,e!==0&&(t=Ge(e)))),t===0?0:n!==0&&n!==t&&(n&i)===0&&(i=t&-t,e=n&-n,i>=e||i===32&&(e&4194048)!==0)?n:t}function xs(a,n){return(a.pendingLanes&~(a.suspendedLanes&~a.pingedLanes)&n)===0}function Pd(a,n){switch(a){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ar(){var a=Dt;return Dt<<=1,(Dt&62914560)===0&&(Dt=4194304),a}function ki(a){for(var n=[],e=0;31>e;e++)n.push(a);return n}function Ms(a,n){a.pendingLanes|=n,n!==268435456&&(a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0)}function Yd(a,n,e,s,t,i){var l=a.pendingLanes;a.pendingLanes=e,a.suspendedLanes=0,a.pingedLanes=0,a.warmLanes=0,a.expiredLanes&=e,a.entangledLanes&=e,a.errorRecoveryDisabledLanes&=e,a.shellSuspendCounter=0;var c=a.entanglements,r=a.expirationTimes,f=a.hiddenUpdates;for(e=l&~e;0<e;){var v=31-$a(e),S=1<<v;c[v]=0,r[v]=-1;var h=f[v];if(h!==null)for(f[v]=null,v=0;v<h.length;v++){var m=h[v];m!==null&&(m.lane&=-536870913)}e&=~S}s!==0&&zr(a,s,0),i!==0&&t===0&&a.tag!==0&&(a.suspendedLanes|=i&~(l&~n))}function zr(a,n,e){a.pendingLanes|=n,a.suspendedLanes&=~n;var s=31-$a(n);a.entangledLanes|=n,a.entanglements[s]=a.entanglements[s]|1073741824|e&261930}function Er(a,n){var e=a.entangledLanes|=n;for(a=a.entanglements;e;){var s=31-$a(e),t=1<<s;t&n|a[s]&n&&(a[s]|=n),e&=~t}}function Tr(a,n){var e=n&-n;return e=(e&42)!==0?1:Wi(e),(e&(a.suspendedLanes|n))!==0?0:e}function Wi(a){switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=128;break;case 268435456:a=134217728;break;default:a=0}return a}function Ii(a){return a&=-a,2<a?8<a?(a&134217727)!==0?32:268435456:8:2}function Gr(){var a=G.p;return a!==0?a:(a=window.event,a===void 0?32:pd(a.type))}function jr(a,n){var e=G.p;try{return G.p=a,n()}finally{G.p=e}}var $n=Math.random().toString(36).slice(2),Da="__reactFiber$"+$n,Ya="__reactProps$"+$n,Qe="__reactContainer$"+$n,$i="__reactEvents$"+$n,Fd="__reactListeners$"+$n,Qd="__reactHandles$"+$n,Cr="__reactResources$"+$n,Os="__reactMarker$"+$n;function al(a){delete a[Da],delete a[Ya],delete a[$i],delete a[Fd],delete a[Qd]}function Ve(a){var n=a[Da];if(n)return n;for(var e=a.parentNode;e;){if(n=e[Qe]||e[Da]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(a=Jp(a);a!==null;){if(e=a[Da])return e;a=Jp(a)}return n}a=e,e=a.parentNode}return null}function Xe(a){if(a=a[Da]||a[Qe]){var n=a.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return a}return null}function qs(a){var n=a.tag;if(n===5||n===26||n===27||n===6)return a.stateNode;throw Error(d(33))}function Ze(a){var n=a[Cr];return n||(n=a[Cr]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function ja(a){a[Os]=!0}var Dr=new Set,Lr={};function je(a,n){Ke(a,n),Ke(a+"Capture",n)}function Ke(a,n){for(Lr[a]=n,a=0;a<n.length;a++)Dr.add(n[a])}var Vd=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),xr={},Mr={};function Xd(a){return Zi.call(Mr,a)?!0:Zi.call(xr,a)?!1:Vd.test(a)?Mr[a]=!0:(xr[a]=!0,!1)}function xt(a,n,e){if(Xd(n))if(e===null)a.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":a.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){a.removeAttribute(n);return}}a.setAttribute(n,""+e)}}function Mt(a,n,e){if(e===null)a.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(n);return}a.setAttribute(n,""+e)}}function On(a,n,e,s){if(s===null)a.removeAttribute(e);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":a.removeAttribute(e);return}a.setAttributeNS(n,e,""+s)}}function on(a){switch(typeof a){case"bigint":case"boolean":case"number":case"string":case"undefined":return a;case"object":return a;default:return""}}function Or(a){var n=a.type;return(a=a.nodeName)&&a.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Zd(a,n,e){var s=Object.getOwnPropertyDescriptor(a.constructor.prototype,n);if(!a.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var t=s.get,i=s.set;return Object.defineProperty(a,n,{configurable:!0,get:function(){return t.call(this)},set:function(l){e=""+l,i.call(this,l)}}),Object.defineProperty(a,n,{enumerable:s.enumerable}),{getValue:function(){return e},setValue:function(l){e=""+l},stopTracking:function(){a._valueTracker=null,delete a[n]}}}}function nl(a){if(!a._valueTracker){var n=Or(a)?"checked":"value";a._valueTracker=Zd(a,n,""+a[n])}}function qr(a){if(!a)return!1;var n=a._valueTracker;if(!n)return!0;var e=n.getValue(),s="";return a&&(s=Or(a)?a.checked?"true":"false":a.value),a=s,a!==e?(n.setValue(a),!0):!1}function Ot(a){if(a=a||(typeof document<"u"?document:void 0),typeof a>"u")return null;try{return a.activeElement||a.body}catch{return a.body}}var Kd=/[\n"\\]/g;function un(a){return a.replace(Kd,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function el(a,n,e,s,t,i,l,c){a.name="",l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"?a.type=l:a.removeAttribute("type"),n!=null?l==="number"?(n===0&&a.value===""||a.value!=n)&&(a.value=""+on(n)):a.value!==""+on(n)&&(a.value=""+on(n)):l!=="submit"&&l!=="reset"||a.removeAttribute("value"),n!=null?sl(a,l,on(n)):e!=null?sl(a,l,on(e)):s!=null&&a.removeAttribute("value"),t==null&&i!=null&&(a.defaultChecked=!!i),t!=null&&(a.checked=t&&typeof t!="function"&&typeof t!="symbol"),c!=null&&typeof c!="function"&&typeof c!="symbol"&&typeof c!="boolean"?a.name=""+on(c):a.removeAttribute("name")}function Nr(a,n,e,s,t,i,l,c){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(a.type=i),n!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||n!=null)){nl(a);return}e=e!=null?""+on(e):"",n=n!=null?""+on(n):e,c||n===a.value||(a.value=n),a.defaultValue=n}s=s??t,s=typeof s!="function"&&typeof s!="symbol"&&!!s,a.checked=c?a.checked:!!s,a.defaultChecked=!!s,l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(a.name=l),nl(a)}function sl(a,n,e){n==="number"&&Ot(a.ownerDocument)===a||a.defaultValue===""+e||(a.defaultValue=""+e)}function Je(a,n,e,s){if(a=a.options,n){n={};for(var t=0;t<e.length;t++)n["$"+e[t]]=!0;for(e=0;e<a.length;e++)t=n.hasOwnProperty("$"+a[e].value),a[e].selected!==t&&(a[e].selected=t),t&&s&&(a[e].defaultSelected=!0)}else{for(e=""+on(e),n=null,t=0;t<a.length;t++){if(a[t].value===e){a[t].selected=!0,s&&(a[t].defaultSelected=!0);return}n!==null||a[t].disabled||(n=a[t])}n!==null&&(n.selected=!0)}}function wr(a,n,e){if(n!=null&&(n=""+on(n),n!==a.value&&(a.value=n),e==null)){a.defaultValue!==n&&(a.defaultValue=n);return}a.defaultValue=e!=null?""+on(e):""}function Rr(a,n,e,s){if(n==null){if(s!=null){if(e!=null)throw Error(d(92));if(yn(s)){if(1<s.length)throw Error(d(93));s=s[0]}e=s}e==null&&(e=""),n=e}e=on(n),a.defaultValue=e,s=a.textContent,s===e&&s!==""&&s!==null&&(a.value=s),nl(a)}function ke(a,n){if(n){var e=a.firstChild;if(e&&e===a.lastChild&&e.nodeType===3){e.nodeValue=n;return}}a.textContent=n}var Jd=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ur(a,n,e){var s=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?s?a.setProperty(n,""):n==="float"?a.cssFloat="":a[n]="":s?a.setProperty(n,e):typeof e!="number"||e===0||Jd.has(n)?n==="float"?a.cssFloat=e:a[n]=(""+e).trim():a[n]=e+"px"}function _r(a,n,e){if(n!=null&&typeof n!="object")throw Error(d(62));if(a=a.style,e!=null){for(var s in e)!e.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?a.setProperty(s,""):s==="float"?a.cssFloat="":a[s]="");for(var t in n)s=n[t],n.hasOwnProperty(t)&&e[t]!==s&&Ur(a,t,s)}else for(var i in n)n.hasOwnProperty(i)&&Ur(a,i,n[i])}function tl(a){if(a.indexOf("-")===-1)return!1;switch(a){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function qt(a){return Wd.test(""+a)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":a}function qn(){}var il=null;function ll(a){return a=a.target||a.srcElement||window,a.correspondingUseElement&&(a=a.correspondingUseElement),a.nodeType===3?a.parentNode:a}var We=null,Ie=null;function Hr(a){var n=Xe(a);if(n&&(a=n.stateNode)){var e=a[Ya]||null;a:switch(a=n.stateNode,n.type){case"input":if(el(a,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=a;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+un(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var s=e[n];if(s!==a&&s.form===a.form){var t=s[Ya]||null;if(!t)throw Error(d(90));el(s,t.value,t.defaultValue,t.defaultValue,t.checked,t.defaultChecked,t.type,t.name)}}for(n=0;n<e.length;n++)s=e[n],s.form===a.form&&qr(s)}break a;case"textarea":wr(a,e.value,e.defaultValue);break a;case"select":n=e.value,n!=null&&Je(a,!!e.multiple,n,!1)}}}var cl=!1;function Br(a,n,e){if(cl)return a(n,e);cl=!0;try{var s=a(n);return s}finally{if(cl=!1,(We!==null||Ie!==null)&&(Si(),We&&(n=We,a=Ie,Ie=We=null,Hr(n),a)))for(n=0;n<a.length;n++)Hr(a[n])}}function Ns(a,n){var e=a.stateNode;if(e===null)return null;var s=e[Ya]||null;if(s===null)return null;e=s[n];a:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(a=a.type,s=!(a==="button"||a==="input"||a==="select"||a==="textarea")),a=!s;break a;default:a=!1}if(a)return null;if(e&&typeof e!="function")throw Error(d(231,n,typeof e));return e}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),rl=!1;if(Nn)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){rl=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{rl=!1}var ae=null,ol=null,Nt=null;function Pr(){if(Nt)return Nt;var a,n=ol,e=n.length,s,t="value"in ae?ae.value:ae.textContent,i=t.length;for(a=0;a<e&&n[a]===t[a];a++);var l=e-a;for(s=1;s<=l&&n[e-s]===t[i-s];s++);return Nt=t.slice(a,1<s?1-s:void 0)}function wt(a){var n=a.keyCode;return"charCode"in a?(a=a.charCode,a===0&&n===13&&(a=13)):a=n,a===10&&(a=13),32<=a||a===13?a:0}function Rt(){return!0}function Yr(){return!1}function Fa(a){function n(e,s,t,i,l){this._reactName=e,this._targetInst=t,this.type=s,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(e=a[c],this[c]=e?e(i):i[c]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?Rt:Yr,this.isPropagationStopped=Yr,this}return x(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=Rt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=Rt)},persist:function(){},isPersistent:Rt}),n}var Ce={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ut=Fa(Ce),Rs=x({},Ce,{view:0,detail:0}),Id=Fa(Rs),ul,pl,Us,_t=x({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:gl,button:0,buttons:0,relatedTarget:function(a){return a.relatedTarget===void 0?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){return"movementX"in a?a.movementX:(a!==Us&&(Us&&a.type==="mousemove"?(ul=a.screenX-Us.screenX,pl=a.screenY-Us.screenY):pl=ul=0,Us=a),ul)},movementY:function(a){return"movementY"in a?a.movementY:pl}}),Fr=Fa(_t),$d=x({},_t,{dataTransfer:0}),ag=Fa($d),ng=x({},Rs,{relatedTarget:0}),dl=Fa(ng),eg=x({},Ce,{animationName:0,elapsedTime:0,pseudoElement:0}),sg=Fa(eg),tg=x({},Ce,{clipboardData:function(a){return"clipboardData"in a?a.clipboardData:window.clipboardData}}),ig=Fa(tg),lg=x({},Ce,{data:0}),Qr=Fa(lg),cg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},rg={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},og={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ug(a){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(a):(a=og[a])?!!n[a]:!1}function gl(){return ug}var pg=x({},Rs,{key:function(a){if(a.key){var n=cg[a.key]||a.key;if(n!=="Unidentified")return n}return a.type==="keypress"?(a=wt(a),a===13?"Enter":String.fromCharCode(a)):a.type==="keydown"||a.type==="keyup"?rg[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:gl,charCode:function(a){return a.type==="keypress"?wt(a):0},keyCode:function(a){return a.type==="keydown"||a.type==="keyup"?a.keyCode:0},which:function(a){return a.type==="keypress"?wt(a):a.type==="keydown"||a.type==="keyup"?a.keyCode:0}}),dg=Fa(pg),gg=x({},_t,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vr=Fa(gg),fg=x({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:gl}),hg=Fa(fg),mg=x({},Ce,{propertyName:0,elapsedTime:0,pseudoElement:0}),vg=Fa(mg),bg=x({},_t,{deltaX:function(a){return"deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return"deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),yg=Fa(bg),Sg=x({},Ce,{newState:0,oldState:0}),Ag=Fa(Sg),zg=[9,13,27,32],fl=Nn&&"CompositionEvent"in window,_s=null;Nn&&"documentMode"in document&&(_s=document.documentMode);var Eg=Nn&&"TextEvent"in window&&!_s,Xr=Nn&&(!fl||_s&&8<_s&&11>=_s),Zr=" ",Kr=!1;function Jr(a,n){switch(a){case"keyup":return zg.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function kr(a){return a=a.detail,typeof a=="object"&&"data"in a?a.data:null}var $e=!1;function Tg(a,n){switch(a){case"compositionend":return kr(n);case"keypress":return n.which!==32?null:(Kr=!0,Zr);case"textInput":return a=n.data,a===Zr&&Kr?null:a;default:return null}}function Gg(a,n){if($e)return a==="compositionend"||!fl&&Jr(a,n)?(a=Pr(),Nt=ol=ae=null,$e=!1,a):null;switch(a){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Xr&&n.locale!=="ko"?null:n.data;default:return null}}var jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Wr(a){var n=a&&a.nodeName&&a.nodeName.toLowerCase();return n==="input"?!!jg[a.type]:n==="textarea"}function Ir(a,n,e,s){We?Ie?Ie.push(s):Ie=[s]:We=s,n=Ci(n,"onChange"),0<n.length&&(e=new Ut("onChange","change",null,e,s),a.push({event:e,listeners:n}))}var Hs=null,Bs=null;function Cg(a){wp(a,0)}function Ht(a){var n=qs(a);if(qr(n))return a}function $r(a,n){if(a==="change")return n}var ao=!1;if(Nn){var hl;if(Nn){var ml="oninput"in document;if(!ml){var no=document.createElement("div");no.setAttribute("oninput","return;"),ml=typeof no.oninput=="function"}hl=ml}else hl=!1;ao=hl&&(!document.documentMode||9<document.documentMode)}function eo(){Hs&&(Hs.detachEvent("onpropertychange",so),Bs=Hs=null)}function so(a){if(a.propertyName==="value"&&Ht(Bs)){var n=[];Ir(n,Bs,a,ll(a)),Br(Cg,n)}}function Dg(a,n,e){a==="focusin"?(eo(),Hs=n,Bs=e,Hs.attachEvent("onpropertychange",so)):a==="focusout"&&eo()}function Lg(a){if(a==="selectionchange"||a==="keyup"||a==="keydown")return Ht(Bs)}function xg(a,n){if(a==="click")return Ht(n)}function Mg(a,n){if(a==="input"||a==="change")return Ht(n)}function Og(a,n){return a===n&&(a!==0||1/a===1/n)||a!==a&&n!==n}var an=typeof Object.is=="function"?Object.is:Og;function Ps(a,n){if(an(a,n))return!0;if(typeof a!="object"||a===null||typeof n!="object"||n===null)return!1;var e=Object.keys(a),s=Object.keys(n);if(e.length!==s.length)return!1;for(s=0;s<e.length;s++){var t=e[s];if(!Zi.call(n,t)||!an(a[t],n[t]))return!1}return!0}function to(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function io(a,n){var e=to(a);a=0;for(var s;e;){if(e.nodeType===3){if(s=a+e.textContent.length,a<=n&&s>=n)return{node:e,offset:n-a};a=s}a:{for(;e;){if(e.nextSibling){e=e.nextSibling;break a}e=e.parentNode}e=void 0}e=to(e)}}function lo(a,n){return a&&n?a===n?!0:a&&a.nodeType===3?!1:n&&n.nodeType===3?lo(a,n.parentNode):"contains"in a?a.contains(n):a.compareDocumentPosition?!!(a.compareDocumentPosition(n)&16):!1:!1}function co(a){a=a!=null&&a.ownerDocument!=null&&a.ownerDocument.defaultView!=null?a.ownerDocument.defaultView:window;for(var n=Ot(a.document);n instanceof a.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)a=n.contentWindow;else break;n=Ot(a.document)}return n}function vl(a){var n=a&&a.nodeName&&a.nodeName.toLowerCase();return n&&(n==="input"&&(a.type==="text"||a.type==="search"||a.type==="tel"||a.type==="url"||a.type==="password")||n==="textarea"||a.contentEditable==="true")}var qg=Nn&&"documentMode"in document&&11>=document.documentMode,as=null,bl=null,Ys=null,yl=!1;function ro(a,n,e){var s=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;yl||as==null||as!==Ot(s)||(s=as,"selectionStart"in s&&vl(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Ys&&Ps(Ys,s)||(Ys=s,s=Ci(bl,"onSelect"),0<s.length&&(n=new Ut("onSelect","select",null,n,e),a.push({event:n,listeners:s}),n.target=as)))}function De(a,n){var e={};return e[a.toLowerCase()]=n.toLowerCase(),e["Webkit"+a]="webkit"+n,e["Moz"+a]="moz"+n,e}var ns={animationend:De("Animation","AnimationEnd"),animationiteration:De("Animation","AnimationIteration"),animationstart:De("Animation","AnimationStart"),transitionrun:De("Transition","TransitionRun"),transitionstart:De("Transition","TransitionStart"),transitioncancel:De("Transition","TransitionCancel"),transitionend:De("Transition","TransitionEnd")},Sl={},oo={};Nn&&(oo=document.createElement("div").style,"AnimationEvent"in window||(delete ns.animationend.animation,delete ns.animationiteration.animation,delete ns.animationstart.animation),"TransitionEvent"in window||delete ns.transitionend.transition);function Le(a){if(Sl[a])return Sl[a];if(!ns[a])return a;var n=ns[a],e;for(e in n)if(n.hasOwnProperty(e)&&e in oo)return Sl[a]=n[e];return a}var uo=Le("animationend"),po=Le("animationiteration"),go=Le("animationstart"),Ng=Le("transitionrun"),wg=Le("transitionstart"),Rg=Le("transitioncancel"),fo=Le("transitionend"),ho=new Map,Al="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Al.push("scrollEnd");function Sn(a,n){ho.set(a,n),je(n,[a])}var Bt=typeof reportError=="function"?reportError:function(a){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof a=="object"&&a!==null&&typeof a.message=="string"?String(a.message):String(a),error:a});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",a);return}console.error(a)},pn=[],es=0,zl=0;function Pt(){for(var a=es,n=zl=es=0;n<a;){var e=pn[n];pn[n++]=null;var s=pn[n];pn[n++]=null;var t=pn[n];pn[n++]=null;var i=pn[n];if(pn[n++]=null,s!==null&&t!==null){var l=s.pending;l===null?t.next=t:(t.next=l.next,l.next=t),s.pending=t}i!==0&&mo(e,t,i)}}function Yt(a,n,e,s){pn[es++]=a,pn[es++]=n,pn[es++]=e,pn[es++]=s,zl|=s,a.lanes|=s,a=a.alternate,a!==null&&(a.lanes|=s)}function El(a,n,e,s){return Yt(a,n,e,s),Ft(a)}function xe(a,n){return Yt(a,null,null,n),Ft(a)}function mo(a,n,e){a.lanes|=e;var s=a.alternate;s!==null&&(s.lanes|=e);for(var t=!1,i=a.return;i!==null;)i.childLanes|=e,s=i.alternate,s!==null&&(s.childLanes|=e),i.tag===22&&(a=i.stateNode,a===null||a._visibility&1||(t=!0)),a=i,i=i.return;return a.tag===3?(i=a.stateNode,t&&n!==null&&(t=31-$a(e),a=i.hiddenUpdates,s=a[t],s===null?a[t]=[n]:s.push(n),n.lane=e|536870912),i):null}function Ft(a){if(50<ut)throw ut=0,Oc=null,Error(d(185));for(var n=a.return;n!==null;)a=n,n=a.return;return a.tag===3?a.stateNode:null}var ss={};function Ug(a,n,e,s){this.tag=a,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function nn(a,n,e,s){return new Ug(a,n,e,s)}function Tl(a){return a=a.prototype,!(!a||!a.isReactComponent)}function wn(a,n){var e=a.alternate;return e===null?(e=nn(a.tag,n,a.key,a.mode),e.elementType=a.elementType,e.type=a.type,e.stateNode=a.stateNode,e.alternate=a,a.alternate=e):(e.pendingProps=n,e.type=a.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=a.flags&65011712,e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=a.sibling,e.index=a.index,e.ref=a.ref,e.refCleanup=a.refCleanup,e}function vo(a,n){a.flags&=65011714;var e=a.alternate;return e===null?(a.childLanes=0,a.lanes=n,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,a.type=e.type,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a}function Qt(a,n,e,s,t,i){var l=0;if(s=a,typeof a=="function")Tl(a)&&(l=1);else if(typeof a=="string")l=Ff(a,e,L.current)?26:a==="html"||a==="head"||a==="body"?27:5;else a:switch(a){case Tn:return a=nn(31,e,n,t),a.elementType=Tn,a.lanes=i,a;case wa:return Me(e.children,t,i,n);case xn:l=8,t|=24;break;case ka:return a=nn(12,e,n,t|2),a.elementType=ka,a.lanes=i,a;case En:return a=nn(13,e,n,t),a.elementType=En,a.lanes=i,a;case Ha:return a=nn(19,e,n,t),a.elementType=Ha,a.lanes=i,a;default:if(typeof a=="object"&&a!==null)switch(a.$$typeof){case qa:l=10;break a;case Wn:l=9;break a;case rn:l=11;break a;case k:l=14;break a;case Ba:l=16,s=null;break a}l=29,e=Error(d(130,a===null?"null":typeof a,"")),s=null}return n=nn(l,e,n,t),n.elementType=a,n.type=s,n.lanes=i,n}function Me(a,n,e,s){return a=nn(7,a,s,n),a.lanes=e,a}function Gl(a,n,e){return a=nn(6,a,null,n),a.lanes=e,a}function bo(a){var n=nn(18,null,null,0);return n.stateNode=a,n}function jl(a,n,e){return n=nn(4,a.children!==null?a.children:[],a.key,n),n.lanes=e,n.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation},n}var yo=new WeakMap;function dn(a,n){if(typeof a=="object"&&a!==null){var e=yo.get(a);return e!==void 0?e:(n={value:a,source:n,stack:vr(n)},yo.set(a,n),n)}return{value:a,source:n,stack:vr(n)}}var ts=[],is=0,Vt=null,Fs=0,gn=[],fn=0,ne=null,jn=1,Cn="";function Rn(a,n){ts[is++]=Fs,ts[is++]=Vt,Vt=a,Fs=n}function So(a,n,e){gn[fn++]=jn,gn[fn++]=Cn,gn[fn++]=ne,ne=a;var s=jn;a=Cn;var t=32-$a(s)-1;s&=~(1<<t),e+=1;var i=32-$a(n)+t;if(30<i){var l=t-t%5;i=(s&(1<<l)-1).toString(32),s>>=l,t-=l,jn=1<<32-$a(n)+t|e<<t|s,Cn=i+a}else jn=1<<i|e<<t|s,Cn=a}function Cl(a){a.return!==null&&(Rn(a,1),So(a,1,0))}function Dl(a){for(;a===Vt;)Vt=ts[--is],ts[is]=null,Fs=ts[--is],ts[is]=null;for(;a===ne;)ne=gn[--fn],gn[fn]=null,Cn=gn[--fn],gn[fn]=null,jn=gn[--fn],gn[fn]=null}function Ao(a,n){gn[fn++]=jn,gn[fn++]=Cn,gn[fn++]=ne,jn=n.id,Cn=n.overflow,ne=a}var La=null,pa=null,W=!1,ee=null,hn=!1,Ll=Error(d(519));function se(a){var n=Error(d(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qs(dn(n,a)),Ll}function zo(a){var n=a.stateNode,e=a.type,s=a.memoizedProps;switch(n[Da]=a,n[Ya]=s,e){case"dialog":X("cancel",n),X("close",n);break;case"iframe":case"object":case"embed":X("load",n);break;case"video":case"audio":for(e=0;e<dt.length;e++)X(dt[e],n);break;case"source":X("error",n);break;case"img":case"image":case"link":X("error",n),X("load",n);break;case"details":X("toggle",n);break;case"input":X("invalid",n),Nr(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":X("invalid",n);break;case"textarea":X("invalid",n),Rr(n,s.value,s.defaultValue,s.children)}e=s.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||s.suppressHydrationWarning===!0||Hp(n.textContent,e)?(s.popover!=null&&(X("beforetoggle",n),X("toggle",n)),s.onScroll!=null&&X("scroll",n),s.onScrollEnd!=null&&X("scrollend",n),s.onClick!=null&&(n.onclick=qn),n=!0):n=!1,n||se(a,!0)}function Eo(a){for(La=a.return;La;)switch(La.tag){case 5:case 31:case 13:hn=!1;return;case 27:case 3:hn=!0;return;default:La=La.return}}function ls(a){if(a!==La)return!1;if(!W)return Eo(a),W=!0,!1;var n=a.tag,e;if((e=n!==3&&n!==27)&&((e=n===5)&&(e=a.type,e=!(e!=="form"&&e!=="button")||Zc(a.type,a.memoizedProps)),e=!e),e&&pa&&se(a),Eo(a),n===13){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(d(317));pa=Kp(a)}else if(n===31){if(a=a.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(d(317));pa=Kp(a)}else n===27?(n=pa,ve(a.type)?(a=Ic,Ic=null,pa=a):pa=n):pa=La?vn(a.stateNode.nextSibling):null;return!0}function Oe(){pa=La=null,W=!1}function xl(){var a=ee;return a!==null&&(Za===null?Za=a:Za.push.apply(Za,a),ee=null),a}function Qs(a){ee===null?ee=[a]:ee.push(a)}var Ml=u(null),qe=null,Un=null;function te(a,n,e){j(Ml,n._currentValue),n._currentValue=e}function _n(a){a._currentValue=Ml.current,z(Ml)}function Ol(a,n,e){for(;a!==null;){var s=a.alternate;if((a.childLanes&n)!==n?(a.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),a===e)break;a=a.return}}function ql(a,n,e,s){var t=a.child;for(t!==null&&(t.return=a);t!==null;){var i=t.dependencies;if(i!==null){var l=t.child;i=i.firstContext;a:for(;i!==null;){var c=i;i=t;for(var r=0;r<n.length;r++)if(c.context===n[r]){i.lanes|=e,c=i.alternate,c!==null&&(c.lanes|=e),Ol(i.return,e,a),s||(l=null);break a}i=c.next}}else if(t.tag===18){if(l=t.return,l===null)throw Error(d(341));l.lanes|=e,i=l.alternate,i!==null&&(i.lanes|=e),Ol(l,e,a),l=null}else l=t.child;if(l!==null)l.return=t;else for(l=t;l!==null;){if(l===a){l=null;break}if(t=l.sibling,t!==null){t.return=l.return,l=t;break}l=l.return}t=l}}function cs(a,n,e,s){a=null;for(var t=n,i=!1;t!==null;){if(!i){if((t.flags&524288)!==0)i=!0;else if((t.flags&262144)!==0)break}if(t.tag===10){var l=t.alternate;if(l===null)throw Error(d(387));if(l=l.memoizedProps,l!==null){var c=t.type;an(t.pendingProps.value,l.value)||(a!==null?a.push(c):a=[c])}}else if(t===na.current){if(l=t.alternate,l===null)throw Error(d(387));l.memoizedState.memoizedState!==t.memoizedState.memoizedState&&(a!==null?a.push(vt):a=[vt])}t=t.return}a!==null&&ql(n,a,e,s),n.flags|=262144}function Xt(a){for(a=a.firstContext;a!==null;){if(!an(a.context._currentValue,a.memoizedValue))return!0;a=a.next}return!1}function Ne(a){qe=a,Un=null,a=a.dependencies,a!==null&&(a.firstContext=null)}function xa(a){return To(qe,a)}function Zt(a,n){return qe===null&&Ne(a),To(a,n)}function To(a,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},Un===null){if(a===null)throw Error(d(308));Un=n,a.dependencies={lanes:0,firstContext:n},a.flags|=524288}else Un=Un.next=n;return e}var _g=typeof AbortController<"u"?AbortController:function(){var a=[],n=this.signal={aborted:!1,addEventListener:function(e,s){a.push(s)}};this.abort=function(){n.aborted=!0,a.forEach(function(e){return e()})}},Hg=E.unstable_scheduleCallback,Bg=E.unstable_NormalPriority,Sa={$$typeof:qa,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Nl(){return{controller:new _g,data:new Map,refCount:0}}function Vs(a){a.refCount--,a.refCount===0&&Hg(Bg,function(){a.controller.abort()})}var Xs=null,wl=0,rs=0,os=null;function Pg(a,n){if(Xs===null){var e=Xs=[];wl=0,rs=_c(),os={status:"pending",value:void 0,then:function(s){e.push(s)}}}return wl++,n.then(Go,Go),n}function Go(){if(--wl===0&&Xs!==null){os!==null&&(os.status="fulfilled");var a=Xs;Xs=null,rs=0,os=null;for(var n=0;n<a.length;n++)(0,a[n])()}}function Yg(a,n){var e=[],s={status:"pending",value:null,reason:null,then:function(t){e.push(t)}};return a.then(function(){s.status="fulfilled",s.value=n;for(var t=0;t<e.length;t++)(0,e[t])(n)},function(t){for(s.status="rejected",s.reason=t,t=0;t<e.length;t++)(0,e[t])(void 0)}),s}var jo=b.S;b.S=function(a,n){op=Wa(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&Pg(a,n),jo!==null&&jo(a,n)};var we=u(null);function Rl(){var a=we.current;return a!==null?a:ua.pooledCache}function Kt(a,n){n===null?j(we,we.current):j(we,n.pool)}function Co(){var a=Rl();return a===null?null:{parent:Sa._currentValue,pool:a}}var us=Error(d(460)),Ul=Error(d(474)),Jt=Error(d(542)),kt={then:function(){}};function Do(a){return a=a.status,a==="fulfilled"||a==="rejected"}function Lo(a,n,e){switch(e=a[e],e===void 0?a.push(n):e!==n&&(n.then(qn,qn),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw a=n.reason,Mo(a),a;default:if(typeof n.status=="string")n.then(qn,qn);else{if(a=ua,a!==null&&100<a.shellSuspendCounter)throw Error(d(482));a=n,a.status="pending",a.then(function(s){if(n.status==="pending"){var t=n;t.status="fulfilled",t.value=s}},function(s){if(n.status==="pending"){var t=n;t.status="rejected",t.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw a=n.reason,Mo(a),a}throw Ue=n,us}}function Re(a){try{var n=a._init;return n(a._payload)}catch(e){throw e!==null&&typeof e=="object"&&typeof e.then=="function"?(Ue=e,us):e}}var Ue=null;function xo(){if(Ue===null)throw Error(d(459));var a=Ue;return Ue=null,a}function Mo(a){if(a===us||a===Jt)throw Error(d(483))}var ps=null,Zs=0;function Wt(a){var n=Zs;return Zs+=1,ps===null&&(ps=[]),Lo(ps,a,n)}function Ks(a,n){n=n.props.ref,a.ref=n!==void 0?n:null}function It(a,n){throw n.$$typeof===ra?Error(d(525)):(a=Object.prototype.toString.call(n),Error(d(31,a==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":a)))}function Oo(a){function n(p,o){if(a){var g=p.deletions;g===null?(p.deletions=[o],p.flags|=16):g.push(o)}}function e(p,o){if(!a)return null;for(;o!==null;)n(p,o),o=o.sibling;return null}function s(p){for(var o=new Map;p!==null;)p.key!==null?o.set(p.key,p):o.set(p.index,p),p=p.sibling;return o}function t(p,o){return p=wn(p,o),p.index=0,p.sibling=null,p}function i(p,o,g){return p.index=g,a?(g=p.alternate,g!==null?(g=g.index,g<o?(p.flags|=67108866,o):g):(p.flags|=67108866,o)):(p.flags|=1048576,o)}function l(p){return a&&p.alternate===null&&(p.flags|=67108866),p}function c(p,o,g,y){return o===null||o.tag!==6?(o=Gl(g,p.mode,y),o.return=p,o):(o=t(o,g),o.return=p,o)}function r(p,o,g,y){var N=g.type;return N===wa?v(p,o,g.props.children,y,g.key):o!==null&&(o.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ba&&Re(N)===o.type)?(o=t(o,g.props),Ks(o,g),o.return=p,o):(o=Qt(g.type,g.key,g.props,null,p.mode,y),Ks(o,g),o.return=p,o)}function f(p,o,g,y){return o===null||o.tag!==4||o.stateNode.containerInfo!==g.containerInfo||o.stateNode.implementation!==g.implementation?(o=jl(g,p.mode,y),o.return=p,o):(o=t(o,g.children||[]),o.return=p,o)}function v(p,o,g,y,N){return o===null||o.tag!==7?(o=Me(g,p.mode,y,N),o.return=p,o):(o=t(o,g),o.return=p,o)}function S(p,o,g){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=Gl(""+o,p.mode,g),o.return=p,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case Ja:return g=Qt(o.type,o.key,o.props,null,p.mode,g),Ks(g,o),g.return=p,g;case _a:return o=jl(o,p.mode,g),o.return=p,o;case Ba:return o=Re(o),S(p,o,g)}if(yn(o)||Pa(o))return o=Me(o,p.mode,g,null),o.return=p,o;if(typeof o.then=="function")return S(p,Wt(o),g);if(o.$$typeof===qa)return S(p,Zt(p,o),g);It(p,o)}return null}function h(p,o,g,y){var N=o!==null?o.key:null;if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return N!==null?null:c(p,o,""+g,y);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ja:return g.key===N?r(p,o,g,y):null;case _a:return g.key===N?f(p,o,g,y):null;case Ba:return g=Re(g),h(p,o,g,y)}if(yn(g)||Pa(g))return N!==null?null:v(p,o,g,y,null);if(typeof g.then=="function")return h(p,o,Wt(g),y);if(g.$$typeof===qa)return h(p,o,Zt(p,g),y);It(p,g)}return null}function m(p,o,g,y,N){if(typeof y=="string"&&y!==""||typeof y=="number"||typeof y=="bigint")return p=p.get(g)||null,c(o,p,""+y,N);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ja:return p=p.get(y.key===null?g:y.key)||null,r(o,p,y,N);case _a:return p=p.get(y.key===null?g:y.key)||null,f(o,p,y,N);case Ba:return y=Re(y),m(p,o,g,y,N)}if(yn(y)||Pa(y))return p=p.get(g)||null,v(o,p,y,N,null);if(typeof y.then=="function")return m(p,o,g,Wt(y),N);if(y.$$typeof===qa)return m(p,o,g,Zt(o,y),N);It(o,y)}return null}function D(p,o,g,y){for(var N=null,I=null,M=o,P=o=0,K=null;M!==null&&P<g.length;P++){M.index>P?(K=M,M=null):K=M.sibling;var $=h(p,M,g[P],y);if($===null){M===null&&(M=K);break}a&&M&&$.alternate===null&&n(p,M),o=i($,o,P),I===null?N=$:I.sibling=$,I=$,M=K}if(P===g.length)return e(p,M),W&&Rn(p,P),N;if(M===null){for(;P<g.length;P++)M=S(p,g[P],y),M!==null&&(o=i(M,o,P),I===null?N=M:I.sibling=M,I=M);return W&&Rn(p,P),N}for(M=s(M);P<g.length;P++)K=m(M,p,P,g[P],y),K!==null&&(a&&K.alternate!==null&&M.delete(K.key===null?P:K.key),o=i(K,o,P),I===null?N=K:I.sibling=K,I=K);return a&&M.forEach(function(ze){return n(p,ze)}),W&&Rn(p,P),N}function w(p,o,g,y){if(g==null)throw Error(d(151));for(var N=null,I=null,M=o,P=o=0,K=null,$=g.next();M!==null&&!$.done;P++,$=g.next()){M.index>P?(K=M,M=null):K=M.sibling;var ze=h(p,M,$.value,y);if(ze===null){M===null&&(M=K);break}a&&M&&ze.alternate===null&&n(p,M),o=i(ze,o,P),I===null?N=ze:I.sibling=ze,I=ze,M=K}if($.done)return e(p,M),W&&Rn(p,P),N;if(M===null){for(;!$.done;P++,$=g.next())$=S(p,$.value,y),$!==null&&(o=i($,o,P),I===null?N=$:I.sibling=$,I=$);return W&&Rn(p,P),N}for(M=s(M);!$.done;P++,$=g.next())$=m(M,p,P,$.value,y),$!==null&&(a&&$.alternate!==null&&M.delete($.key===null?P:$.key),o=i($,o,P),I===null?N=$:I.sibling=$,I=$);return a&&M.forEach(function(ah){return n(p,ah)}),W&&Rn(p,P),N}function ca(p,o,g,y){if(typeof g=="object"&&g!==null&&g.type===wa&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Ja:a:{for(var N=g.key;o!==null;){if(o.key===N){if(N=g.type,N===wa){if(o.tag===7){e(p,o.sibling),y=t(o,g.props.children),y.return=p,p=y;break a}}else if(o.elementType===N||typeof N=="object"&&N!==null&&N.$$typeof===Ba&&Re(N)===o.type){e(p,o.sibling),y=t(o,g.props),Ks(y,g),y.return=p,p=y;break a}e(p,o);break}else n(p,o);o=o.sibling}g.type===wa?(y=Me(g.props.children,p.mode,y,g.key),y.return=p,p=y):(y=Qt(g.type,g.key,g.props,null,p.mode,y),Ks(y,g),y.return=p,p=y)}return l(p);case _a:a:{for(N=g.key;o!==null;){if(o.key===N)if(o.tag===4&&o.stateNode.containerInfo===g.containerInfo&&o.stateNode.implementation===g.implementation){e(p,o.sibling),y=t(o,g.children||[]),y.return=p,p=y;break a}else{e(p,o);break}else n(p,o);o=o.sibling}y=jl(g,p.mode,y),y.return=p,p=y}return l(p);case Ba:return g=Re(g),ca(p,o,g,y)}if(yn(g))return D(p,o,g,y);if(Pa(g)){if(N=Pa(g),typeof N!="function")throw Error(d(150));return g=N.call(g),w(p,o,g,y)}if(typeof g.then=="function")return ca(p,o,Wt(g),y);if(g.$$typeof===qa)return ca(p,o,Zt(p,g),y);It(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint"?(g=""+g,o!==null&&o.tag===6?(e(p,o.sibling),y=t(o,g),y.return=p,p=y):(e(p,o),y=Gl(g,p.mode,y),y.return=p,p=y),l(p)):e(p,o)}return function(p,o,g,y){try{Zs=0;var N=ca(p,o,g,y);return ps=null,N}catch(M){if(M===us||M===Jt)throw M;var I=nn(29,M,null,p.mode);return I.lanes=y,I.return=p,I}finally{}}}var _e=Oo(!0),qo=Oo(!1),ie=!1;function _l(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Hl(a,n){a=a.updateQueue,n.updateQueue===a&&(n.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,callbacks:null})}function le(a){return{lane:a,tag:0,payload:null,callback:null,next:null}}function ce(a,n,e){var s=a.updateQueue;if(s===null)return null;if(s=s.shared,(aa&2)!==0){var t=s.pending;return t===null?n.next=n:(n.next=t.next,t.next=n),s.pending=n,n=Ft(a),mo(a,null,e),n}return Yt(a,s,n,e),Ft(a)}function Js(a,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194048)!==0)){var s=n.lanes;s&=a.pendingLanes,e|=s,n.lanes=e,Er(a,e)}}function Bl(a,n){var e=a.updateQueue,s=a.alternate;if(s!==null&&(s=s.updateQueue,e===s)){var t=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var l={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?t=i=l:i=i.next=l,e=e.next}while(e!==null);i===null?t=i=n:i=i.next=n}else t=i=n;e={baseState:s.baseState,firstBaseUpdate:t,lastBaseUpdate:i,shared:s.shared,callbacks:s.callbacks},a.updateQueue=e;return}a=e.lastBaseUpdate,a===null?e.firstBaseUpdate=n:a.next=n,e.lastBaseUpdate=n}var Pl=!1;function ks(){if(Pl){var a=os;if(a!==null)throw a}}function Ws(a,n,e,s){Pl=!1;var t=a.updateQueue;ie=!1;var i=t.firstBaseUpdate,l=t.lastBaseUpdate,c=t.shared.pending;if(c!==null){t.shared.pending=null;var r=c,f=r.next;r.next=null,l===null?i=f:l.next=f,l=r;var v=a.alternate;v!==null&&(v=v.updateQueue,c=v.lastBaseUpdate,c!==l&&(c===null?v.firstBaseUpdate=f:c.next=f,v.lastBaseUpdate=r))}if(i!==null){var S=t.baseState;l=0,v=f=r=null,c=i;do{var h=c.lane&-536870913,m=h!==c.lane;if(m?(Z&h)===h:(s&h)===h){h!==0&&h===rs&&(Pl=!0),v!==null&&(v=v.next={lane:0,tag:c.tag,payload:c.payload,callback:null,next:null});a:{var D=a,w=c;h=n;var ca=e;switch(w.tag){case 1:if(D=w.payload,typeof D=="function"){S=D.call(ca,S,h);break a}S=D;break a;case 3:D.flags=D.flags&-65537|128;case 0:if(D=w.payload,h=typeof D=="function"?D.call(ca,S,h):D,h==null)break a;S=x({},S,h);break a;case 2:ie=!0}}h=c.callback,h!==null&&(a.flags|=64,m&&(a.flags|=8192),m=t.callbacks,m===null?t.callbacks=[h]:m.push(h))}else m={lane:h,tag:c.tag,payload:c.payload,callback:c.callback,next:null},v===null?(f=v=m,r=S):v=v.next=m,l|=h;if(c=c.next,c===null){if(c=t.shared.pending,c===null)break;m=c,c=m.next,m.next=null,t.lastBaseUpdate=m,t.shared.pending=null}}while(!0);v===null&&(r=S),t.baseState=r,t.firstBaseUpdate=f,t.lastBaseUpdate=v,i===null&&(t.shared.lanes=0),de|=l,a.lanes=l,a.memoizedState=S}}function No(a,n){if(typeof a!="function")throw Error(d(191,a));a.call(n)}function wo(a,n){var e=a.callbacks;if(e!==null)for(a.callbacks=null,a=0;a<e.length;a++)No(e[a],n)}var ds=u(null),$t=u(0);function Ro(a,n){a=Zn,j($t,a),j(ds,n),Zn=a|n.baseLanes}function Yl(){j($t,Zn),j(ds,ds.current)}function Fl(){Zn=$t.current,z(ds),z($t)}var en=u(null),mn=null;function re(a){var n=a.alternate;j(ba,ba.current&1),j(en,a),mn===null&&(n===null||ds.current!==null||n.memoizedState!==null)&&(mn=a)}function Ql(a){j(ba,ba.current),j(en,a),mn===null&&(mn=a)}function Uo(a){a.tag===22?(j(ba,ba.current),j(en,a),mn===null&&(mn=a)):oe()}function oe(){j(ba,ba.current),j(en,en.current)}function sn(a){z(en),mn===a&&(mn=null),z(ba)}var ba=u(0);function ai(a){for(var n=a;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||kc(e)||Wc(e)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break;for(;n.sibling===null;){if(n.return===null||n.return===a)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Hn=0,B=null,ia=null,Aa=null,ni=!1,gs=!1,He=!1,ei=0,Is=0,fs=null,Fg=0;function ha(){throw Error(d(321))}function Vl(a,n){if(n===null)return!1;for(var e=0;e<n.length&&e<a.length;e++)if(!an(a[e],n[e]))return!1;return!0}function Xl(a,n,e,s,t,i){return Hn=i,B=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,b.H=a===null||a.memoizedState===null?Su:cc,He=!1,i=e(s,t),He=!1,gs&&(i=Ho(n,e,s,t)),_o(a),i}function _o(a){b.H=nt;var n=ia!==null&&ia.next!==null;if(Hn=0,Aa=ia=B=null,ni=!1,Is=0,fs=null,n)throw Error(d(300));a===null||za||(a=a.dependencies,a!==null&&Xt(a)&&(za=!0))}function Ho(a,n,e,s){B=a;var t=0;do{if(gs&&(fs=null),Is=0,gs=!1,25<=t)throw Error(d(301));if(t+=1,Aa=ia=null,a.updateQueue!=null){var i=a.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}b.H=Au,i=n(e,s)}while(gs);return i}function Qg(){var a=b.H,n=a.useState()[0];return n=typeof n.then=="function"?$s(n):n,a=a.useState()[0],(ia!==null?ia.memoizedState:null)!==a&&(B.flags|=1024),n}function Zl(){var a=ei!==0;return ei=0,a}function Kl(a,n,e){n.updateQueue=a.updateQueue,n.flags&=-2053,a.lanes&=~e}function Jl(a){if(ni){for(a=a.memoizedState;a!==null;){var n=a.queue;n!==null&&(n.pending=null),a=a.next}ni=!1}Hn=0,Aa=ia=B=null,gs=!1,Is=ei=0,fs=null}function Ua(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Aa===null?B.memoizedState=Aa=a:Aa=Aa.next=a,Aa}function ya(){if(ia===null){var a=B.alternate;a=a!==null?a.memoizedState:null}else a=ia.next;var n=Aa===null?B.memoizedState:Aa.next;if(n!==null)Aa=n,ia=a;else{if(a===null)throw B.alternate===null?Error(d(467)):Error(d(310));ia=a,a={memoizedState:ia.memoizedState,baseState:ia.baseState,baseQueue:ia.baseQueue,queue:ia.queue,next:null},Aa===null?B.memoizedState=Aa=a:Aa=Aa.next=a}return Aa}function si(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function $s(a){var n=Is;return Is+=1,fs===null&&(fs=[]),a=Lo(fs,a,n),n=B,(Aa===null?n.memoizedState:Aa.next)===null&&(n=n.alternate,b.H=n===null||n.memoizedState===null?Su:cc),a}function ti(a){if(a!==null&&typeof a=="object"){if(typeof a.then=="function")return $s(a);if(a.$$typeof===qa)return xa(a)}throw Error(d(438,String(a)))}function kl(a){var n=null,e=B.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var s=B.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(t){return t.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=si(),B.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(a),s=0;s<a;s++)e[s]=Fe;return n.index++,e}function Bn(a,n){return typeof n=="function"?n(a):n}function ii(a){var n=ya();return Wl(n,ia,a)}function Wl(a,n,e){var s=a.queue;if(s===null)throw Error(d(311));s.lastRenderedReducer=e;var t=a.baseQueue,i=s.pending;if(i!==null){if(t!==null){var l=t.next;t.next=i.next,i.next=l}n.baseQueue=t=i,s.pending=null}if(i=a.baseState,t===null)a.memoizedState=i;else{n=t.next;var c=l=null,r=null,f=n,v=!1;do{var S=f.lane&-536870913;if(S!==f.lane?(Z&S)===S:(Hn&S)===S){var h=f.revertLane;if(h===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null}),S===rs&&(v=!0);else if((Hn&h)===h){f=f.next,h===rs&&(v=!0);continue}else S={lane:0,revertLane:f.revertLane,gesture:null,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},r===null?(c=r=S,l=i):r=r.next=S,B.lanes|=h,de|=h;S=f.action,He&&e(i,S),i=f.hasEagerState?f.eagerState:e(i,S)}else h={lane:S,revertLane:f.revertLane,gesture:f.gesture,action:f.action,hasEagerState:f.hasEagerState,eagerState:f.eagerState,next:null},r===null?(c=r=h,l=i):r=r.next=h,B.lanes|=S,de|=S;f=f.next}while(f!==null&&f!==n);if(r===null?l=i:r.next=c,!an(i,a.memoizedState)&&(za=!0,v&&(e=os,e!==null)))throw e;a.memoizedState=i,a.baseState=l,a.baseQueue=r,s.lastRenderedState=i}return t===null&&(s.lanes=0),[a.memoizedState,s.dispatch]}function Il(a){var n=ya(),e=n.queue;if(e===null)throw Error(d(311));e.lastRenderedReducer=a;var s=e.dispatch,t=e.pending,i=n.memoizedState;if(t!==null){e.pending=null;var l=t=t.next;do i=a(i,l.action),l=l.next;while(l!==t);an(i,n.memoizedState)||(za=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),e.lastRenderedState=i}return[i,s]}function Bo(a,n,e){var s=B,t=ya(),i=W;if(i){if(e===void 0)throw Error(d(407));e=e()}else e=n();var l=!an((ia||t).memoizedState,e);if(l&&(t.memoizedState=e,za=!0),t=t.queue,nc(Fo.bind(null,s,t,a),[a]),t.getSnapshot!==n||l||Aa!==null&&Aa.memoizedState.tag&1){if(s.flags|=2048,hs(9,{destroy:void 0},Yo.bind(null,s,t,e,n),null),ua===null)throw Error(d(349));i||(Hn&127)!==0||Po(s,n,e)}return e}function Po(a,n,e){a.flags|=16384,a={getSnapshot:n,value:e},n=B.updateQueue,n===null?(n=si(),B.updateQueue=n,n.stores=[a]):(e=n.stores,e===null?n.stores=[a]:e.push(a))}function Yo(a,n,e,s){n.value=e,n.getSnapshot=s,Qo(n)&&Vo(a)}function Fo(a,n,e){return e(function(){Qo(n)&&Vo(a)})}function Qo(a){var n=a.getSnapshot;a=a.value;try{var e=n();return!an(a,e)}catch{return!0}}function Vo(a){var n=xe(a,2);n!==null&&Ka(n,a,2)}function $l(a){var n=Ua();if(typeof a=="function"){var e=a;if(a=e(),He){In(!0);try{e()}finally{In(!1)}}}return n.memoizedState=n.baseState=a,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:a},n}function Xo(a,n,e,s){return a.baseState=e,Wl(a,ia,typeof s=="function"?s:Bn)}function Vg(a,n,e,s,t){if(ri(a))throw Error(d(485));if(a=n.action,a!==null){var i={payload:t,action:a,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(l){i.listeners.push(l)}};b.T!==null?e(!0):i.isTransition=!1,s(i),e=n.pending,e===null?(i.next=n.pending=i,Zo(n,i)):(i.next=e.next,n.pending=e.next=i)}}function Zo(a,n){var e=n.action,s=n.payload,t=a.state;if(n.isTransition){var i=b.T,l={};b.T=l;try{var c=e(t,s),r=b.S;r!==null&&r(l,c),Ko(a,n,c)}catch(f){ac(a,n,f)}finally{i!==null&&l.types!==null&&(i.types=l.types),b.T=i}}else try{i=e(t,s),Ko(a,n,i)}catch(f){ac(a,n,f)}}function Ko(a,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(s){Jo(a,n,s)},function(s){return ac(a,n,s)}):Jo(a,n,e)}function Jo(a,n,e){n.status="fulfilled",n.value=e,ko(n),a.state=e,n=a.pending,n!==null&&(e=n.next,e===n?a.pending=null:(e=e.next,n.next=e,Zo(a,e)))}function ac(a,n,e){var s=a.pending;if(a.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=e,ko(n),n=n.next;while(n!==s)}a.action=null}function ko(a){a=a.listeners;for(var n=0;n<a.length;n++)(0,a[n])()}function Wo(a,n){return n}function Io(a,n){if(W){var e=ua.formState;if(e!==null){a:{var s=B;if(W){if(pa){n:{for(var t=pa,i=hn;t.nodeType!==8;){if(!i){t=null;break n}if(t=vn(t.nextSibling),t===null){t=null;break n}}i=t.data,t=i==="F!"||i==="F"?t:null}if(t){pa=vn(t.nextSibling),s=t.data==="F!";break a}}se(s)}s=!1}s&&(n=e[0])}}return e=Ua(),e.memoizedState=e.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Wo,lastRenderedState:n},e.queue=s,e=vu.bind(null,B,s),s.dispatch=e,s=$l(!1),i=lc.bind(null,B,!1,s.queue),s=Ua(),t={state:n,dispatch:null,action:a,pending:null},s.queue=t,e=Vg.bind(null,B,t,i,e),t.dispatch=e,s.memoizedState=a,[n,e,!1]}function $o(a){var n=ya();return au(n,ia,a)}function au(a,n,e){if(n=Wl(a,n,Wo)[0],a=ii(Bn)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=$s(n)}catch(l){throw l===us?Jt:l}else s=n;n=ya();var t=n.queue,i=t.dispatch;return e!==n.memoizedState&&(B.flags|=2048,hs(9,{destroy:void 0},Xg.bind(null,t,e),null)),[s,i,a]}function Xg(a,n){a.action=n}function nu(a){var n=ya(),e=ia;if(e!==null)return au(n,e,a);ya(),n=n.memoizedState,e=ya();var s=e.queue.dispatch;return e.memoizedState=a,[n,s,!1]}function hs(a,n,e,s){return a={tag:a,create:e,deps:s,inst:n,next:null},n=B.updateQueue,n===null&&(n=si(),B.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=a.next=a:(s=e.next,e.next=a,a.next=s,n.lastEffect=a),a}function eu(){return ya().memoizedState}function li(a,n,e,s){var t=Ua();B.flags|=a,t.memoizedState=hs(1|n,{destroy:void 0},e,s===void 0?null:s)}function ci(a,n,e,s){var t=ya();s=s===void 0?null:s;var i=t.memoizedState.inst;ia!==null&&s!==null&&Vl(s,ia.memoizedState.deps)?t.memoizedState=hs(n,i,e,s):(B.flags|=a,t.memoizedState=hs(1|n,i,e,s))}function su(a,n){li(8390656,8,a,n)}function nc(a,n){ci(2048,8,a,n)}function Zg(a){B.flags|=4;var n=B.updateQueue;if(n===null)n=si(),B.updateQueue=n,n.events=[a];else{var e=n.events;e===null?n.events=[a]:e.push(a)}}function tu(a){var n=ya().memoizedState;return Zg({ref:n,nextImpl:a}),function(){if((aa&2)!==0)throw Error(d(440));return n.impl.apply(void 0,arguments)}}function iu(a,n){return ci(4,2,a,n)}function lu(a,n){return ci(4,4,a,n)}function cu(a,n){if(typeof n=="function"){a=a();var e=n(a);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return a=a(),n.current=a,function(){n.current=null}}function ru(a,n,e){e=e!=null?e.concat([a]):null,ci(4,4,cu.bind(null,n,a),e)}function ec(){}function ou(a,n){var e=ya();n=n===void 0?null:n;var s=e.memoizedState;return n!==null&&Vl(n,s[1])?s[0]:(e.memoizedState=[a,n],a)}function uu(a,n){var e=ya();n=n===void 0?null:n;var s=e.memoizedState;if(n!==null&&Vl(n,s[1]))return s[0];if(s=a(),He){In(!0);try{a()}finally{In(!1)}}return e.memoizedState=[s,n],s}function sc(a,n,e){return e===void 0||(Hn&1073741824)!==0&&(Z&261930)===0?a.memoizedState=n:(a.memoizedState=e,a=pp(),B.lanes|=a,de|=a,e)}function pu(a,n,e,s){return an(e,n)?e:ds.current!==null?(a=sc(a,e,s),an(a,n)||(za=!0),a):(Hn&42)===0||(Hn&1073741824)!==0&&(Z&261930)===0?(za=!0,a.memoizedState=e):(a=pp(),B.lanes|=a,de|=a,n)}function du(a,n,e,s,t){var i=G.p;G.p=i!==0&&8>i?i:8;var l=b.T,c={};b.T=c,lc(a,!1,n,e);try{var r=t(),f=b.S;if(f!==null&&f(c,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var v=Yg(r,s);at(a,n,v,cn(a))}else at(a,n,s,cn(a))}catch(S){at(a,n,{then:function(){},status:"rejected",reason:S},cn())}finally{G.p=i,l!==null&&c.types!==null&&(l.types=c.types),b.T=l}}function Kg(){}function tc(a,n,e,s){if(a.tag!==5)throw Error(d(476));var t=gu(a).queue;du(a,t,n,U,e===null?Kg:function(){return fu(a),e(s)})}function gu(a){var n=a.memoizedState;if(n!==null)return n;n={memoizedState:U,baseState:U,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:U},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Bn,lastRenderedState:e},next:null},a.memoizedState=n,a=a.alternate,a!==null&&(a.memoizedState=n),n}function fu(a){var n=gu(a);n.next===null&&(n=a.alternate.memoizedState),at(a,n.next.queue,{},cn())}function ic(){return xa(vt)}function hu(){return ya().memoizedState}function mu(){return ya().memoizedState}function Jg(a){for(var n=a.return;n!==null;){switch(n.tag){case 24:case 3:var e=cn();a=le(e);var s=ce(n,a,e);s!==null&&(Ka(s,n,e),Js(s,n,e)),n={cache:Nl()},a.payload=n;return}n=n.return}}function kg(a,n,e){var s=cn();e={lane:s,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null},ri(a)?bu(n,e):(e=El(a,n,e,s),e!==null&&(Ka(e,a,s),yu(e,n,s)))}function vu(a,n,e){var s=cn();at(a,n,e,s)}function at(a,n,e,s){var t={lane:s,revertLane:0,gesture:null,action:e,hasEagerState:!1,eagerState:null,next:null};if(ri(a))bu(n,t);else{var i=a.alternate;if(a.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var l=n.lastRenderedState,c=i(l,e);if(t.hasEagerState=!0,t.eagerState=c,an(c,l))return Yt(a,n,t,0),ua===null&&Pt(),!1}catch{}finally{}if(e=El(a,n,t,s),e!==null)return Ka(e,a,s),yu(e,n,s),!0}return!1}function lc(a,n,e,s){if(s={lane:2,revertLane:_c(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},ri(a)){if(n)throw Error(d(479))}else n=El(a,e,s,2),n!==null&&Ka(n,a,2)}function ri(a){var n=a.alternate;return a===B||n!==null&&n===B}function bu(a,n){gs=ni=!0;var e=a.pending;e===null?n.next=n:(n.next=e.next,e.next=n),a.pending=n}function yu(a,n,e){if((e&4194048)!==0){var s=n.lanes;s&=a.pendingLanes,e|=s,n.lanes=e,Er(a,e)}}var nt={readContext:xa,use:ti,useCallback:ha,useContext:ha,useEffect:ha,useImperativeHandle:ha,useLayoutEffect:ha,useInsertionEffect:ha,useMemo:ha,useReducer:ha,useRef:ha,useState:ha,useDebugValue:ha,useDeferredValue:ha,useTransition:ha,useSyncExternalStore:ha,useId:ha,useHostTransitionStatus:ha,useFormState:ha,useActionState:ha,useOptimistic:ha,useMemoCache:ha,useCacheRefresh:ha};nt.useEffectEvent=ha;var Su={readContext:xa,use:ti,useCallback:function(a,n){return Ua().memoizedState=[a,n===void 0?null:n],a},useContext:xa,useEffect:su,useImperativeHandle:function(a,n,e){e=e!=null?e.concat([a]):null,li(4194308,4,cu.bind(null,n,a),e)},useLayoutEffect:function(a,n){return li(4194308,4,a,n)},useInsertionEffect:function(a,n){li(4,2,a,n)},useMemo:function(a,n){var e=Ua();n=n===void 0?null:n;var s=a();if(He){In(!0);try{a()}finally{In(!1)}}return e.memoizedState=[s,n],s},useReducer:function(a,n,e){var s=Ua();if(e!==void 0){var t=e(n);if(He){In(!0);try{e(n)}finally{In(!1)}}}else t=n;return s.memoizedState=s.baseState=t,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:t},s.queue=a,a=a.dispatch=kg.bind(null,B,a),[s.memoizedState,a]},useRef:function(a){var n=Ua();return a={current:a},n.memoizedState=a},useState:function(a){a=$l(a);var n=a.queue,e=vu.bind(null,B,n);return n.dispatch=e,[a.memoizedState,e]},useDebugValue:ec,useDeferredValue:function(a,n){var e=Ua();return sc(e,a,n)},useTransition:function(){var a=$l(!1);return a=du.bind(null,B,a.queue,!0,!1),Ua().memoizedState=a,[!1,a]},useSyncExternalStore:function(a,n,e){var s=B,t=Ua();if(W){if(e===void 0)throw Error(d(407));e=e()}else{if(e=n(),ua===null)throw Error(d(349));(Z&127)!==0||Po(s,n,e)}t.memoizedState=e;var i={value:e,getSnapshot:n};return t.queue=i,su(Fo.bind(null,s,i,a),[a]),s.flags|=2048,hs(9,{destroy:void 0},Yo.bind(null,s,i,e,n),null),e},useId:function(){var a=Ua(),n=ua.identifierPrefix;if(W){var e=Cn,s=jn;e=(s&~(1<<32-$a(s)-1)).toString(32)+e,n="_"+n+"R_"+e,e=ei++,0<e&&(n+="H"+e.toString(32)),n+="_"}else e=Fg++,n="_"+n+"r_"+e.toString(32)+"_";return a.memoizedState=n},useHostTransitionStatus:ic,useFormState:Io,useActionState:Io,useOptimistic:function(a){var n=Ua();n.memoizedState=n.baseState=a;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=lc.bind(null,B,!0,e),e.dispatch=n,[a,n]},useMemoCache:kl,useCacheRefresh:function(){return Ua().memoizedState=Jg.bind(null,B)},useEffectEvent:function(a){var n=Ua(),e={impl:a};return n.memoizedState=e,function(){if((aa&2)!==0)throw Error(d(440));return e.impl.apply(void 0,arguments)}}},cc={readContext:xa,use:ti,useCallback:ou,useContext:xa,useEffect:nc,useImperativeHandle:ru,useInsertionEffect:iu,useLayoutEffect:lu,useMemo:uu,useReducer:ii,useRef:eu,useState:function(){return ii(Bn)},useDebugValue:ec,useDeferredValue:function(a,n){var e=ya();return pu(e,ia.memoizedState,a,n)},useTransition:function(){var a=ii(Bn)[0],n=ya().memoizedState;return[typeof a=="boolean"?a:$s(a),n]},useSyncExternalStore:Bo,useId:hu,useHostTransitionStatus:ic,useFormState:$o,useActionState:$o,useOptimistic:function(a,n){var e=ya();return Xo(e,ia,a,n)},useMemoCache:kl,useCacheRefresh:mu};cc.useEffectEvent=tu;var Au={readContext:xa,use:ti,useCallback:ou,useContext:xa,useEffect:nc,useImperativeHandle:ru,useInsertionEffect:iu,useLayoutEffect:lu,useMemo:uu,useReducer:Il,useRef:eu,useState:function(){return Il(Bn)},useDebugValue:ec,useDeferredValue:function(a,n){var e=ya();return ia===null?sc(e,a,n):pu(e,ia.memoizedState,a,n)},useTransition:function(){var a=Il(Bn)[0],n=ya().memoizedState;return[typeof a=="boolean"?a:$s(a),n]},useSyncExternalStore:Bo,useId:hu,useHostTransitionStatus:ic,useFormState:nu,useActionState:nu,useOptimistic:function(a,n){var e=ya();return ia!==null?Xo(e,ia,a,n):(e.baseState=a,[a,e.queue.dispatch])},useMemoCache:kl,useCacheRefresh:mu};Au.useEffectEvent=tu;function rc(a,n,e,s){n=a.memoizedState,e=e(s,n),e=e==null?n:x({},n,e),a.memoizedState=e,a.lanes===0&&(a.updateQueue.baseState=e)}var oc={enqueueSetState:function(a,n,e){a=a._reactInternals;var s=cn(),t=le(s);t.payload=n,e!=null&&(t.callback=e),n=ce(a,t,s),n!==null&&(Ka(n,a,s),Js(n,a,s))},enqueueReplaceState:function(a,n,e){a=a._reactInternals;var s=cn(),t=le(s);t.tag=1,t.payload=n,e!=null&&(t.callback=e),n=ce(a,t,s),n!==null&&(Ka(n,a,s),Js(n,a,s))},enqueueForceUpdate:function(a,n){a=a._reactInternals;var e=cn(),s=le(e);s.tag=2,n!=null&&(s.callback=n),n=ce(a,s,e),n!==null&&(Ka(n,a,e),Js(n,a,e))}};function zu(a,n,e,s,t,i,l){return a=a.stateNode,typeof a.shouldComponentUpdate=="function"?a.shouldComponentUpdate(s,i,l):n.prototype&&n.prototype.isPureReactComponent?!Ps(e,s)||!Ps(t,i):!0}function Eu(a,n,e,s){a=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,s),n.state!==a&&oc.enqueueReplaceState(n,n.state,null)}function Be(a,n){var e=n;if("ref"in n){e={};for(var s in n)s!=="ref"&&(e[s]=n[s])}if(a=a.defaultProps){e===n&&(e=x({},e));for(var t in a)e[t]===void 0&&(e[t]=a[t])}return e}function Tu(a){Bt(a)}function Gu(a){console.error(a)}function ju(a){Bt(a)}function oi(a,n){try{var e=a.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Cu(a,n,e){try{var s=a.onCaughtError;s(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(t){setTimeout(function(){throw t})}}function uc(a,n,e){return e=le(e),e.tag=3,e.payload={element:null},e.callback=function(){oi(a,n)},e}function Du(a){return a=le(a),a.tag=3,a}function Lu(a,n,e,s){var t=e.type.getDerivedStateFromError;if(typeof t=="function"){var i=s.value;a.payload=function(){return t(i)},a.callback=function(){Cu(n,e,s)}}var l=e.stateNode;l!==null&&typeof l.componentDidCatch=="function"&&(a.callback=function(){Cu(n,e,s),typeof t!="function"&&(ge===null?ge=new Set([this]):ge.add(this));var c=s.stack;this.componentDidCatch(s.value,{componentStack:c!==null?c:""})})}function Wg(a,n,e,s,t){if(e.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=e.alternate,n!==null&&cs(n,e,t,!0),e=en.current,e!==null){switch(e.tag){case 31:case 13:return mn===null?Ai():e.alternate===null&&ma===0&&(ma=3),e.flags&=-257,e.flags|=65536,e.lanes=t,s===kt?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([s]):n.add(s),wc(a,s,t)),!1;case 22:return e.flags|=65536,s===kt?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([s]):e.add(s)),wc(a,s,t)),!1}throw Error(d(435,e.tag))}return wc(a,s,t),Ai(),!1}if(W)return n=en.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=t,s!==Ll&&(a=Error(d(422),{cause:s}),Qs(dn(a,e)))):(s!==Ll&&(n=Error(d(423),{cause:s}),Qs(dn(n,e))),a=a.current.alternate,a.flags|=65536,t&=-t,a.lanes|=t,s=dn(s,e),t=uc(a.stateNode,s,t),Bl(a,t),ma!==4&&(ma=2)),!1;var i=Error(d(520),{cause:s});if(i=dn(i,e),ot===null?ot=[i]:ot.push(i),ma!==4&&(ma=2),n===null)return!0;s=dn(s,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,a=t&-t,e.lanes|=a,a=uc(e.stateNode,s,a),Bl(e,a),!1;case 1:if(n=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(ge===null||!ge.has(i))))return e.flags|=65536,t&=-t,e.lanes|=t,t=Du(t),Lu(t,a,e,s),Bl(e,t),!1}e=e.return}while(e!==null);return!1}var pc=Error(d(461)),za=!1;function Ma(a,n,e,s){n.child=a===null?qo(n,null,e,s):_e(n,a.child,e,s)}function xu(a,n,e,s,t){e=e.render;var i=n.ref;if("ref"in s){var l={};for(var c in s)c!=="ref"&&(l[c]=s[c])}else l=s;return Ne(n),s=Xl(a,n,e,l,i,t),c=Zl(),a!==null&&!za?(Kl(a,n,t),Pn(a,n,t)):(W&&c&&Cl(n),n.flags|=1,Ma(a,n,s,t),n.child)}function Mu(a,n,e,s,t){if(a===null){var i=e.type;return typeof i=="function"&&!Tl(i)&&i.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=i,Ou(a,n,i,s,t)):(a=Qt(e.type,null,s,n,n.mode,t),a.ref=n.ref,a.return=n,n.child=a)}if(i=a.child,!yc(a,t)){var l=i.memoizedProps;if(e=e.compare,e=e!==null?e:Ps,e(l,s)&&a.ref===n.ref)return Pn(a,n,t)}return n.flags|=1,a=wn(i,s),a.ref=n.ref,a.return=n,n.child=a}function Ou(a,n,e,s,t){if(a!==null){var i=a.memoizedProps;if(Ps(i,s)&&a.ref===n.ref)if(za=!1,n.pendingProps=s=i,yc(a,t))(a.flags&131072)!==0&&(za=!0);else return n.lanes=a.lanes,Pn(a,n,t)}return dc(a,n,e,s,t)}function qu(a,n,e,s){var t=s.children,i=a!==null?a.memoizedState:null;if(a===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(i=i!==null?i.baseLanes|e:e,a!==null){for(s=n.child=a.child,t=0;s!==null;)t=t|s.lanes|s.childLanes,s=s.sibling;s=t&~i}else s=0,n.child=null;return Nu(a,n,i,e,s)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},a!==null&&Kt(n,i!==null?i.cachePool:null),i!==null?Ro(n,i):Yl(),Uo(n);else return s=n.lanes=536870912,Nu(a,n,i!==null?i.baseLanes|e:e,e,s)}else i!==null?(Kt(n,i.cachePool),Ro(n,i),oe(),n.memoizedState=null):(a!==null&&Kt(n,null),Yl(),oe());return Ma(a,n,t,e),n.child}function et(a,n){return a!==null&&a.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Nu(a,n,e,s,t){var i=Rl();return i=i===null?null:{parent:Sa._currentValue,pool:i},n.memoizedState={baseLanes:e,cachePool:i},a!==null&&Kt(n,null),Yl(),Uo(n),a!==null&&cs(a,n,s,!0),n.childLanes=t,null}function ui(a,n){return n=di({mode:n.mode,children:n.children},a.mode),n.ref=a.ref,a.child=n,n.return=a,n}function wu(a,n,e){return _e(n,a.child,null,e),a=ui(n,n.pendingProps),a.flags|=2,sn(n),n.memoizedState=null,a}function Ig(a,n,e){var s=n.pendingProps,t=(n.flags&128)!==0;if(n.flags&=-129,a===null){if(W){if(s.mode==="hidden")return a=ui(n,s),n.lanes=536870912,et(null,a);if(Ql(n),(a=pa)?(a=Zp(a,hn),a=a!==null&&a.data==="&"?a:null,a!==null&&(n.memoizedState={dehydrated:a,treeContext:ne!==null?{id:jn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},e=bo(a),e.return=n,n.child=e,La=n,pa=null)):a=null,a===null)throw se(n);return n.lanes=536870912,null}return ui(n,s)}var i=a.memoizedState;if(i!==null){var l=i.dehydrated;if(Ql(n),t)if(n.flags&256)n.flags&=-257,n=wu(a,n,e);else if(n.memoizedState!==null)n.child=a.child,n.flags|=128,n=null;else throw Error(d(558));else if(za||cs(a,n,e,!1),t=(e&a.childLanes)!==0,za||t){if(s=ua,s!==null&&(l=Tr(s,e),l!==0&&l!==i.retryLane))throw i.retryLane=l,xe(a,l),Ka(s,a,l),pc;Ai(),n=wu(a,n,e)}else a=i.treeContext,pa=vn(l.nextSibling),La=n,W=!0,ee=null,hn=!1,a!==null&&Ao(n,a),n=ui(n,s),n.flags|=4096;return n}return a=wn(a.child,{mode:s.mode,children:s.children}),a.ref=n.ref,n.child=a,a.return=n,a}function pi(a,n){var e=n.ref;if(e===null)a!==null&&a.ref!==null&&(n.flags|=4194816);else{if(typeof e!="function"&&typeof e!="object")throw Error(d(284));(a===null||a.ref!==e)&&(n.flags|=4194816)}}function dc(a,n,e,s,t){return Ne(n),e=Xl(a,n,e,s,void 0,t),s=Zl(),a!==null&&!za?(Kl(a,n,t),Pn(a,n,t)):(W&&s&&Cl(n),n.flags|=1,Ma(a,n,e,t),n.child)}function Ru(a,n,e,s,t,i){return Ne(n),n.updateQueue=null,e=Ho(n,s,e,t),_o(a),s=Zl(),a!==null&&!za?(Kl(a,n,i),Pn(a,n,i)):(W&&s&&Cl(n),n.flags|=1,Ma(a,n,e,i),n.child)}function Uu(a,n,e,s,t){if(Ne(n),n.stateNode===null){var i=ss,l=e.contextType;typeof l=="object"&&l!==null&&(i=xa(l)),i=new e(s,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=oc,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=s,i.state=n.memoizedState,i.refs={},_l(n),l=e.contextType,i.context=typeof l=="object"&&l!==null?xa(l):ss,i.state=n.memoizedState,l=e.getDerivedStateFromProps,typeof l=="function"&&(rc(n,e,l,s),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(l=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),l!==i.state&&oc.enqueueReplaceState(i,i.state,null),Ws(n,s,i,t),ks(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(a===null){i=n.stateNode;var c=n.memoizedProps,r=Be(e,c);i.props=r;var f=i.context,v=e.contextType;l=ss,typeof v=="object"&&v!==null&&(l=xa(v));var S=e.getDerivedStateFromProps;v=typeof S=="function"||typeof i.getSnapshotBeforeUpdate=="function",c=n.pendingProps!==c,v||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(c||f!==l)&&Eu(n,i,s,l),ie=!1;var h=n.memoizedState;i.state=h,Ws(n,s,i,t),ks(),f=n.memoizedState,c||h!==f||ie?(typeof S=="function"&&(rc(n,e,S,s),f=n.memoizedState),(r=ie||zu(n,e,r,s,h,f,l))?(v||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=f),i.props=s,i.state=f,i.context=l,s=r):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{i=n.stateNode,Hl(a,n),l=n.memoizedProps,v=Be(e,l),i.props=v,S=n.pendingProps,h=i.context,f=e.contextType,r=ss,typeof f=="object"&&f!==null&&(r=xa(f)),c=e.getDerivedStateFromProps,(f=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==S||h!==r)&&Eu(n,i,s,r),ie=!1,h=n.memoizedState,i.state=h,Ws(n,s,i,t),ks();var m=n.memoizedState;l!==S||h!==m||ie||a!==null&&a.dependencies!==null&&Xt(a.dependencies)?(typeof c=="function"&&(rc(n,e,c,s),m=n.memoizedState),(v=ie||zu(n,e,v,s,h,m,r)||a!==null&&a.dependencies!==null&&Xt(a.dependencies))?(f||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(s,m,r),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(s,m,r)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===a.memoizedProps&&h===a.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===a.memoizedProps&&h===a.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=m),i.props=s,i.state=m,i.context=r,s=v):(typeof i.componentDidUpdate!="function"||l===a.memoizedProps&&h===a.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===a.memoizedProps&&h===a.memoizedState||(n.flags|=1024),s=!1)}return i=s,pi(a,n),s=(n.flags&128)!==0,i||s?(i=n.stateNode,e=s&&typeof e.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,a!==null&&s?(n.child=_e(n,a.child,null,t),n.child=_e(n,null,e,t)):Ma(a,n,e,t),n.memoizedState=i.state,a=n.child):a=Pn(a,n,t),a}function _u(a,n,e,s){return Oe(),n.flags|=256,Ma(a,n,e,s),n.child}var gc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function fc(a){return{baseLanes:a,cachePool:Co()}}function hc(a,n,e){return a=a!==null?a.childLanes&~e:0,n&&(a|=ln),a}function Hu(a,n,e){var s=n.pendingProps,t=!1,i=(n.flags&128)!==0,l;if((l=i)||(l=a!==null&&a.memoizedState===null?!1:(ba.current&2)!==0),l&&(t=!0,n.flags&=-129),l=(n.flags&32)!==0,n.flags&=-33,a===null){if(W){if(t?re(n):oe(),(a=pa)?(a=Zp(a,hn),a=a!==null&&a.data!=="&"?a:null,a!==null&&(n.memoizedState={dehydrated:a,treeContext:ne!==null?{id:jn,overflow:Cn}:null,retryLane:536870912,hydrationErrors:null},e=bo(a),e.return=n,n.child=e,La=n,pa=null)):a=null,a===null)throw se(n);return Wc(a)?n.lanes=32:n.lanes=536870912,null}var c=s.children;return s=s.fallback,t?(oe(),t=n.mode,c=di({mode:"hidden",children:c},t),s=Me(s,t,e,null),c.return=n,s.return=n,c.sibling=s,n.child=c,s=n.child,s.memoizedState=fc(e),s.childLanes=hc(a,l,e),n.memoizedState=gc,et(null,s)):(re(n),mc(n,c))}var r=a.memoizedState;if(r!==null&&(c=r.dehydrated,c!==null)){if(i)n.flags&256?(re(n),n.flags&=-257,n=vc(a,n,e)):n.memoizedState!==null?(oe(),n.child=a.child,n.flags|=128,n=null):(oe(),c=s.fallback,t=n.mode,s=di({mode:"visible",children:s.children},t),c=Me(c,t,e,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,_e(n,a.child,null,e),s=n.child,s.memoizedState=fc(e),s.childLanes=hc(a,l,e),n.memoizedState=gc,n=et(null,s));else if(re(n),Wc(c)){if(l=c.nextSibling&&c.nextSibling.dataset,l)var f=l.dgst;l=f,s=Error(d(419)),s.stack="",s.digest=l,Qs({value:s,source:null,stack:null}),n=vc(a,n,e)}else if(za||cs(a,n,e,!1),l=(e&a.childLanes)!==0,za||l){if(l=ua,l!==null&&(s=Tr(l,e),s!==0&&s!==r.retryLane))throw r.retryLane=s,xe(a,s),Ka(l,a,s),pc;kc(c)||Ai(),n=vc(a,n,e)}else kc(c)?(n.flags|=192,n.child=a.child,n=null):(a=r.treeContext,pa=vn(c.nextSibling),La=n,W=!0,ee=null,hn=!1,a!==null&&Ao(n,a),n=mc(n,s.children),n.flags|=4096);return n}return t?(oe(),c=s.fallback,t=n.mode,r=a.child,f=r.sibling,s=wn(r,{mode:"hidden",children:s.children}),s.subtreeFlags=r.subtreeFlags&65011712,f!==null?c=wn(f,c):(c=Me(c,t,e,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,et(null,s),s=n.child,c=a.child.memoizedState,c===null?c=fc(e):(t=c.cachePool,t!==null?(r=Sa._currentValue,t=t.parent!==r?{parent:r,pool:r}:t):t=Co(),c={baseLanes:c.baseLanes|e,cachePool:t}),s.memoizedState=c,s.childLanes=hc(a,l,e),n.memoizedState=gc,et(a.child,s)):(re(n),e=a.child,a=e.sibling,e=wn(e,{mode:"visible",children:s.children}),e.return=n,e.sibling=null,a!==null&&(l=n.deletions,l===null?(n.deletions=[a],n.flags|=16):l.push(a)),n.child=e,n.memoizedState=null,e)}function mc(a,n){return n=di({mode:"visible",children:n},a.mode),n.return=a,a.child=n}function di(a,n){return a=nn(22,a,null,n),a.lanes=0,a}function vc(a,n,e){return _e(n,a.child,null,e),a=mc(n,n.pendingProps.children),a.flags|=2,n.memoizedState=null,a}function Bu(a,n,e){a.lanes|=n;var s=a.alternate;s!==null&&(s.lanes|=n),Ol(a.return,n,e)}function bc(a,n,e,s,t,i){var l=a.memoizedState;l===null?a.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:e,tailMode:t,treeForkCount:i}:(l.isBackwards=n,l.rendering=null,l.renderingStartTime=0,l.last=s,l.tail=e,l.tailMode=t,l.treeForkCount=i)}function Pu(a,n,e){var s=n.pendingProps,t=s.revealOrder,i=s.tail;s=s.children;var l=ba.current,c=(l&2)!==0;if(c?(l=l&1|2,n.flags|=128):l&=1,j(ba,l),Ma(a,n,s,e),s=W?Fs:0,!c&&a!==null&&(a.flags&128)!==0)a:for(a=n.child;a!==null;){if(a.tag===13)a.memoizedState!==null&&Bu(a,e,n);else if(a.tag===19)Bu(a,e,n);else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===n)break a;for(;a.sibling===null;){if(a.return===null||a.return===n)break a;a=a.return}a.sibling.return=a.return,a=a.sibling}switch(t){case"forwards":for(e=n.child,t=null;e!==null;)a=e.alternate,a!==null&&ai(a)===null&&(t=e),e=e.sibling;e=t,e===null?(t=n.child,n.child=null):(t=e.sibling,e.sibling=null),bc(n,!1,t,e,i,s);break;case"backwards":case"unstable_legacy-backwards":for(e=null,t=n.child,n.child=null;t!==null;){if(a=t.alternate,a!==null&&ai(a)===null){n.child=t;break}a=t.sibling,t.sibling=e,e=t,t=a}bc(n,!0,e,null,i,s);break;case"together":bc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Pn(a,n,e){if(a!==null&&(n.dependencies=a.dependencies),de|=n.lanes,(e&n.childLanes)===0)if(a!==null){if(cs(a,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(a!==null&&n.child!==a.child)throw Error(d(153));if(n.child!==null){for(a=n.child,e=wn(a,a.pendingProps),n.child=e,e.return=n;a.sibling!==null;)a=a.sibling,e=e.sibling=wn(a,a.pendingProps),e.return=n;e.sibling=null}return n.child}function yc(a,n){return(a.lanes&n)!==0?!0:(a=a.dependencies,!!(a!==null&&Xt(a)))}function $g(a,n,e){switch(n.tag){case 3:Ra(n,n.stateNode.containerInfo),te(n,Sa,a.memoizedState.cache),Oe();break;case 27:case 5:Ds(n);break;case 4:Ra(n,n.stateNode.containerInfo);break;case 10:te(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,Ql(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(re(n),n.flags|=128,null):(e&n.child.childLanes)!==0?Hu(a,n,e):(re(n),a=Pn(a,n,e),a!==null?a.sibling:null);re(n);break;case 19:var t=(a.flags&128)!==0;if(s=(e&n.childLanes)!==0,s||(cs(a,n,e,!1),s=(e&n.childLanes)!==0),t){if(s)return Pu(a,n,e);n.flags|=128}if(t=n.memoizedState,t!==null&&(t.rendering=null,t.tail=null,t.lastEffect=null),j(ba,ba.current),s)break;return null;case 22:return n.lanes=0,qu(a,n,e,n.pendingProps);case 24:te(n,Sa,a.memoizedState.cache)}return Pn(a,n,e)}function Yu(a,n,e){if(a!==null)if(a.memoizedProps!==n.pendingProps)za=!0;else{if(!yc(a,e)&&(n.flags&128)===0)return za=!1,$g(a,n,e);za=(a.flags&131072)!==0}else za=!1,W&&(n.flags&1048576)!==0&&So(n,Fs,n.index);switch(n.lanes=0,n.tag){case 16:a:{var s=n.pendingProps;if(a=Re(n.elementType),n.type=a,typeof a=="function")Tl(a)?(s=Be(a,s),n.tag=1,n=Uu(null,n,a,s,e)):(n.tag=0,n=dc(null,n,a,s,e));else{if(a!=null){var t=a.$$typeof;if(t===rn){n.tag=11,n=xu(null,n,a,s,e);break a}else if(t===k){n.tag=14,n=Mu(null,n,a,s,e);break a}}throw n=Mn(a)||a,Error(d(306,n,""))}}return n;case 0:return dc(a,n,n.type,n.pendingProps,e);case 1:return s=n.type,t=Be(s,n.pendingProps),Uu(a,n,s,t,e);case 3:a:{if(Ra(n,n.stateNode.containerInfo),a===null)throw Error(d(387));s=n.pendingProps;var i=n.memoizedState;t=i.element,Hl(a,n),Ws(n,s,null,e);var l=n.memoizedState;if(s=l.cache,te(n,Sa,s),s!==i.cache&&ql(n,[Sa],e,!0),ks(),s=l.element,i.isDehydrated)if(i={element:s,isDehydrated:!1,cache:l.cache},n.updateQueue.baseState=i,n.memoizedState=i,n.flags&256){n=_u(a,n,s,e);break a}else if(s!==t){t=dn(Error(d(424)),n),Qs(t),n=_u(a,n,s,e);break a}else{switch(a=n.stateNode.containerInfo,a.nodeType){case 9:a=a.body;break;default:a=a.nodeName==="HTML"?a.ownerDocument.body:a}for(pa=vn(a.firstChild),La=n,W=!0,ee=null,hn=!0,e=qo(n,null,s,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling}else{if(Oe(),s===t){n=Pn(a,n,e);break a}Ma(a,n,s,e)}n=n.child}return n;case 26:return pi(a,n),a===null?(e=$p(n.type,null,n.pendingProps,null))?n.memoizedState=e:W||(e=n.type,a=n.pendingProps,s=Di(Q.current).createElement(e),s[Da]=n,s[Ya]=a,Oa(s,e,a),ja(s),n.stateNode=s):n.memoizedState=$p(n.type,a.memoizedProps,n.pendingProps,a.memoizedState),null;case 27:return Ds(n),a===null&&W&&(s=n.stateNode=kp(n.type,n.pendingProps,Q.current),La=n,hn=!0,t=pa,ve(n.type)?(Ic=t,pa=vn(s.firstChild)):pa=t),Ma(a,n,n.pendingProps.children,e),pi(a,n),a===null&&(n.flags|=4194304),n.child;case 5:return a===null&&W&&((t=s=pa)&&(s=xf(s,n.type,n.pendingProps,hn),s!==null?(n.stateNode=s,La=n,pa=vn(s.firstChild),hn=!1,t=!0):t=!1),t||se(n)),Ds(n),t=n.type,i=n.pendingProps,l=a!==null?a.memoizedProps:null,s=i.children,Zc(t,i)?s=null:l!==null&&Zc(t,l)&&(n.flags|=32),n.memoizedState!==null&&(t=Xl(a,n,Qg,null,null,e),vt._currentValue=t),pi(a,n),Ma(a,n,s,e),n.child;case 6:return a===null&&W&&((a=e=pa)&&(e=Mf(e,n.pendingProps,hn),e!==null?(n.stateNode=e,La=n,pa=null,a=!0):a=!1),a||se(n)),null;case 13:return Hu(a,n,e);case 4:return Ra(n,n.stateNode.containerInfo),s=n.pendingProps,a===null?n.child=_e(n,null,s,e):Ma(a,n,s,e),n.child;case 11:return xu(a,n,n.type,n.pendingProps,e);case 7:return Ma(a,n,n.pendingProps,e),n.child;case 8:return Ma(a,n,n.pendingProps.children,e),n.child;case 12:return Ma(a,n,n.pendingProps.children,e),n.child;case 10:return s=n.pendingProps,te(n,n.type,s.value),Ma(a,n,s.children,e),n.child;case 9:return t=n.type._context,s=n.pendingProps.children,Ne(n),t=xa(t),s=s(t),n.flags|=1,Ma(a,n,s,e),n.child;case 14:return Mu(a,n,n.type,n.pendingProps,e);case 15:return Ou(a,n,n.type,n.pendingProps,e);case 19:return Pu(a,n,e);case 31:return Ig(a,n,e);case 22:return qu(a,n,e,n.pendingProps);case 24:return Ne(n),s=xa(Sa),a===null?(t=Rl(),t===null&&(t=ua,i=Nl(),t.pooledCache=i,i.refCount++,i!==null&&(t.pooledCacheLanes|=e),t=i),n.memoizedState={parent:s,cache:t},_l(n),te(n,Sa,t)):((a.lanes&e)!==0&&(Hl(a,n),Ws(n,null,null,e),ks()),t=a.memoizedState,i=n.memoizedState,t.parent!==s?(t={parent:s,cache:s},n.memoizedState=t,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=t),te(n,Sa,s)):(s=i.cache,te(n,Sa,s),s!==t.cache&&ql(n,[Sa],e,!0))),Ma(a,n,n.pendingProps.children,e),n.child;case 29:throw n.pendingProps}throw Error(d(156,n.tag))}function Yn(a){a.flags|=4}function Sc(a,n,e,s,t){if((n=(a.mode&32)!==0)&&(n=!1),n){if(a.flags|=16777216,(t&335544128)===t)if(a.stateNode.complete)a.flags|=8192;else if(hp())a.flags|=8192;else throw Ue=kt,Ul}else a.flags&=-16777217}function Fu(a,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)a.flags&=-16777217;else if(a.flags|=16777216,!td(n))if(hp())a.flags|=8192;else throw Ue=kt,Ul}function gi(a,n){n!==null&&(a.flags|=4),a.flags&16384&&(n=a.tag!==22?Ar():536870912,a.lanes|=n,ys|=n)}function st(a,n){if(!W)switch(a.tailMode){case"hidden":n=a.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?a.tail=null:e.sibling=null;break;case"collapsed":e=a.tail;for(var s=null;e!==null;)e.alternate!==null&&(s=e),e=e.sibling;s===null?n||a.tail===null?a.tail=null:a.tail.sibling=null:s.sibling=null}}function da(a){var n=a.alternate!==null&&a.alternate.child===a.child,e=0,s=0;if(n)for(var t=a.child;t!==null;)e|=t.lanes|t.childLanes,s|=t.subtreeFlags&65011712,s|=t.flags&65011712,t.return=a,t=t.sibling;else for(t=a.child;t!==null;)e|=t.lanes|t.childLanes,s|=t.subtreeFlags,s|=t.flags,t.return=a,t=t.sibling;return a.subtreeFlags|=s,a.childLanes=e,n}function af(a,n,e){var s=n.pendingProps;switch(Dl(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return da(n),null;case 1:return da(n),null;case 3:return e=n.stateNode,s=null,a!==null&&(s=a.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),_n(Sa),va(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(a===null||a.child===null)&&(ls(n)?Yn(n):a===null||a.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,xl())),da(n),null;case 26:var t=n.type,i=n.memoizedState;return a===null?(Yn(n),i!==null?(da(n),Fu(n,i)):(da(n),Sc(n,t,null,s,e))):i?i!==a.memoizedState?(Yn(n),da(n),Fu(n,i)):(da(n),n.flags&=-16777217):(a=a.memoizedProps,a!==s&&Yn(n),da(n),Sc(n,t,a,s,e)),null;case 27:if(Tt(n),e=Q.current,t=n.type,a!==null&&n.stateNode!=null)a.memoizedProps!==s&&Yn(n);else{if(!s){if(n.stateNode===null)throw Error(d(166));return da(n),null}a=L.current,ls(n)?zo(n):(a=kp(t,s,e),n.stateNode=a,Yn(n))}return da(n),null;case 5:if(Tt(n),t=n.type,a!==null&&n.stateNode!=null)a.memoizedProps!==s&&Yn(n);else{if(!s){if(n.stateNode===null)throw Error(d(166));return da(n),null}if(i=L.current,ls(n))zo(n);else{var l=Di(Q.current);switch(i){case 1:i=l.createElementNS("http://www.w3.org/2000/svg",t);break;case 2:i=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;default:switch(t){case"svg":i=l.createElementNS("http://www.w3.org/2000/svg",t);break;case"math":i=l.createElementNS("http://www.w3.org/1998/Math/MathML",t);break;case"script":i=l.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild);break;case"select":i=typeof s.is=="string"?l.createElement("select",{is:s.is}):l.createElement("select"),s.multiple?i.multiple=!0:s.size&&(i.size=s.size);break;default:i=typeof s.is=="string"?l.createElement(t,{is:s.is}):l.createElement(t)}}i[Da]=n,i[Ya]=s;a:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break a;for(;l.sibling===null;){if(l.return===null||l.return===n)break a;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=i;a:switch(Oa(i,t,s),t){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break a;case"img":s=!0;break a;default:s=!1}s&&Yn(n)}}return da(n),Sc(n,n.type,a===null?null:a.memoizedProps,n.pendingProps,e),null;case 6:if(a&&n.stateNode!=null)a.memoizedProps!==s&&Yn(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(d(166));if(a=Q.current,ls(n)){if(a=n.stateNode,e=n.memoizedProps,s=null,t=La,t!==null)switch(t.tag){case 27:case 5:s=t.memoizedProps}a[Da]=n,a=!!(a.nodeValue===e||s!==null&&s.suppressHydrationWarning===!0||Hp(a.nodeValue,e)),a||se(n,!0)}else a=Di(a).createTextNode(s),a[Da]=n,n.stateNode=a}return da(n),null;case 31:if(e=n.memoizedState,a===null||a.memoizedState!==null){if(s=ls(n),e!==null){if(a===null){if(!s)throw Error(d(318));if(a=n.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(d(557));a[Da]=n}else Oe(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;da(n),a=!1}else e=xl(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=e),a=!0;if(!a)return n.flags&256?(sn(n),n):(sn(n),null);if((n.flags&128)!==0)throw Error(d(558))}return da(n),null;case 13:if(s=n.memoizedState,a===null||a.memoizedState!==null&&a.memoizedState.dehydrated!==null){if(t=ls(n),s!==null&&s.dehydrated!==null){if(a===null){if(!t)throw Error(d(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(d(317));t[Da]=n}else Oe(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;da(n),t=!1}else t=xl(),a!==null&&a.memoizedState!==null&&(a.memoizedState.hydrationErrors=t),t=!0;if(!t)return n.flags&256?(sn(n),n):(sn(n),null)}return sn(n),(n.flags&128)!==0?(n.lanes=e,n):(e=s!==null,a=a!==null&&a.memoizedState!==null,e&&(s=n.child,t=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(t=s.alternate.memoizedState.cachePool.pool),i=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(i=s.memoizedState.cachePool.pool),i!==t&&(s.flags|=2048)),e!==a&&e&&(n.child.flags|=8192),gi(n,n.updateQueue),da(n),null);case 4:return va(),a===null&&Yc(n.stateNode.containerInfo),da(n),null;case 10:return _n(n.type),da(n),null;case 19:if(z(ba),s=n.memoizedState,s===null)return da(n),null;if(t=(n.flags&128)!==0,i=s.rendering,i===null)if(t)st(s,!1);else{if(ma!==0||a!==null&&(a.flags&128)!==0)for(a=n.child;a!==null;){if(i=ai(a),i!==null){for(n.flags|=128,st(s,!1),a=i.updateQueue,n.updateQueue=a,gi(n,a),n.subtreeFlags=0,a=e,e=n.child;e!==null;)vo(e,a),e=e.sibling;return j(ba,ba.current&1|2),W&&Rn(n,s.treeForkCount),n.child}a=a.sibling}s.tail!==null&&Wa()>bi&&(n.flags|=128,t=!0,st(s,!1),n.lanes=4194304)}else{if(!t)if(a=ai(i),a!==null){if(n.flags|=128,t=!0,a=a.updateQueue,n.updateQueue=a,gi(n,a),st(s,!0),s.tail===null&&s.tailMode==="hidden"&&!i.alternate&&!W)return da(n),null}else 2*Wa()-s.renderingStartTime>bi&&e!==536870912&&(n.flags|=128,t=!0,st(s,!1),n.lanes=4194304);s.isBackwards?(i.sibling=n.child,n.child=i):(a=s.last,a!==null?a.sibling=i:n.child=i,s.last=i)}return s.tail!==null?(a=s.tail,s.rendering=a,s.tail=a.sibling,s.renderingStartTime=Wa(),a.sibling=null,e=ba.current,j(ba,t?e&1|2:e&1),W&&Rn(n,s.treeForkCount),a):(da(n),null);case 22:case 23:return sn(n),Fl(),s=n.memoizedState!==null,a!==null?a.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(e&536870912)!==0&&(n.flags&128)===0&&(da(n),n.subtreeFlags&6&&(n.flags|=8192)):da(n),e=n.updateQueue,e!==null&&gi(n,e.retryQueue),e=null,a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==e&&(n.flags|=2048),a!==null&&z(we),null;case 24:return e=null,a!==null&&(e=a.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),_n(Sa),da(n),null;case 25:return null;case 30:return null}throw Error(d(156,n.tag))}function nf(a,n){switch(Dl(n),n.tag){case 1:return a=n.flags,a&65536?(n.flags=a&-65537|128,n):null;case 3:return _n(Sa),va(),a=n.flags,(a&65536)!==0&&(a&128)===0?(n.flags=a&-65537|128,n):null;case 26:case 27:case 5:return Tt(n),null;case 31:if(n.memoizedState!==null){if(sn(n),n.alternate===null)throw Error(d(340));Oe()}return a=n.flags,a&65536?(n.flags=a&-65537|128,n):null;case 13:if(sn(n),a=n.memoizedState,a!==null&&a.dehydrated!==null){if(n.alternate===null)throw Error(d(340));Oe()}return a=n.flags,a&65536?(n.flags=a&-65537|128,n):null;case 19:return z(ba),null;case 4:return va(),null;case 10:return _n(n.type),null;case 22:case 23:return sn(n),Fl(),a!==null&&z(we),a=n.flags,a&65536?(n.flags=a&-65537|128,n):null;case 24:return _n(Sa),null;case 25:return null;default:return null}}function Qu(a,n){switch(Dl(n),n.tag){case 3:_n(Sa),va();break;case 26:case 27:case 5:Tt(n);break;case 4:va();break;case 31:n.memoizedState!==null&&sn(n);break;case 13:sn(n);break;case 19:z(ba);break;case 10:_n(n.type);break;case 22:case 23:sn(n),Fl(),a!==null&&z(we);break;case 24:_n(Sa)}}function tt(a,n){try{var e=n.updateQueue,s=e!==null?e.lastEffect:null;if(s!==null){var t=s.next;e=t;do{if((e.tag&a)===a){s=void 0;var i=e.create,l=e.inst;s=i(),l.destroy=s}e=e.next}while(e!==t)}}catch(c){sa(n,n.return,c)}}function ue(a,n,e){try{var s=n.updateQueue,t=s!==null?s.lastEffect:null;if(t!==null){var i=t.next;s=i;do{if((s.tag&a)===a){var l=s.inst,c=l.destroy;if(c!==void 0){l.destroy=void 0,t=n;var r=e,f=c;try{f()}catch(v){sa(t,r,v)}}}s=s.next}while(s!==i)}}catch(v){sa(n,n.return,v)}}function Vu(a){var n=a.updateQueue;if(n!==null){var e=a.stateNode;try{wo(n,e)}catch(s){sa(a,a.return,s)}}}function Xu(a,n,e){e.props=Be(a.type,a.memoizedProps),e.state=a.memoizedState;try{e.componentWillUnmount()}catch(s){sa(a,n,s)}}function it(a,n){try{var e=a.ref;if(e!==null){switch(a.tag){case 26:case 27:case 5:var s=a.stateNode;break;case 30:s=a.stateNode;break;default:s=a.stateNode}typeof e=="function"?a.refCleanup=e(s):e.current=s}}catch(t){sa(a,n,t)}}function Dn(a,n){var e=a.ref,s=a.refCleanup;if(e!==null)if(typeof s=="function")try{s()}catch(t){sa(a,n,t)}finally{a.refCleanup=null,a=a.alternate,a!=null&&(a.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(t){sa(a,n,t)}else e.current=null}function Zu(a){var n=a.type,e=a.memoizedProps,s=a.stateNode;try{a:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&s.focus();break a;case"img":e.src?s.src=e.src:e.srcSet&&(s.srcset=e.srcSet)}}catch(t){sa(a,a.return,t)}}function Ac(a,n,e){try{var s=a.stateNode;Tf(s,a.type,e,n),s[Ya]=n}catch(t){sa(a,a.return,t)}}function Ku(a){return a.tag===5||a.tag===3||a.tag===26||a.tag===27&&ve(a.type)||a.tag===4}function zc(a){a:for(;;){for(;a.sibling===null;){if(a.return===null||Ku(a.return))return null;a=a.return}for(a.sibling.return=a.return,a=a.sibling;a.tag!==5&&a.tag!==6&&a.tag!==18;){if(a.tag===27&&ve(a.type)||a.flags&2||a.child===null||a.tag===4)continue a;a.child.return=a,a=a.child}if(!(a.flags&2))return a.stateNode}}function Ec(a,n,e){var s=a.tag;if(s===5||s===6)a=a.stateNode,n?(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e).insertBefore(a,n):(n=e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,n.appendChild(a),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=qn));else if(s!==4&&(s===27&&ve(a.type)&&(e=a.stateNode,n=null),a=a.child,a!==null))for(Ec(a,n,e),a=a.sibling;a!==null;)Ec(a,n,e),a=a.sibling}function fi(a,n,e){var s=a.tag;if(s===5||s===6)a=a.stateNode,n?e.insertBefore(a,n):e.appendChild(a);else if(s!==4&&(s===27&&ve(a.type)&&(e=a.stateNode),a=a.child,a!==null))for(fi(a,n,e),a=a.sibling;a!==null;)fi(a,n,e),a=a.sibling}function Ju(a){var n=a.stateNode,e=a.memoizedProps;try{for(var s=a.type,t=n.attributes;t.length;)n.removeAttributeNode(t[0]);Oa(n,s,e),n[Da]=a,n[Ya]=e}catch(i){sa(a,a.return,i)}}var Fn=!1,Ea=!1,Tc=!1,ku=typeof WeakSet=="function"?WeakSet:Set,Ca=null;function ef(a,n){if(a=a.containerInfo,Vc=wi,a=co(a),vl(a)){if("selectionStart"in a)var e={start:a.selectionStart,end:a.selectionEnd};else a:{e=(e=a.ownerDocument)&&e.defaultView||window;var s=e.getSelection&&e.getSelection();if(s&&s.rangeCount!==0){e=s.anchorNode;var t=s.anchorOffset,i=s.focusNode;s=s.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break a}var l=0,c=-1,r=-1,f=0,v=0,S=a,h=null;n:for(;;){for(var m;S!==e||t!==0&&S.nodeType!==3||(c=l+t),S!==i||s!==0&&S.nodeType!==3||(r=l+s),S.nodeType===3&&(l+=S.nodeValue.length),(m=S.firstChild)!==null;)h=S,S=m;for(;;){if(S===a)break n;if(h===e&&++f===t&&(c=l),h===i&&++v===s&&(r=l),(m=S.nextSibling)!==null)break;S=h,h=S.parentNode}S=m}e=c===-1||r===-1?null:{start:c,end:r}}else e=null}e=e||{start:0,end:0}}else e=null;for(Xc={focusedElem:a,selectionRange:e},wi=!1,Ca=n;Ca!==null;)if(n=Ca,a=n.child,(n.subtreeFlags&1028)!==0&&a!==null)a.return=n,Ca=a;else for(;Ca!==null;){switch(n=Ca,i=n.alternate,a=n.flags,n.tag){case 0:if((a&4)!==0&&(a=n.updateQueue,a=a!==null?a.events:null,a!==null))for(e=0;e<a.length;e++)t=a[e],t.ref.impl=t.nextImpl;break;case 11:case 15:break;case 1:if((a&1024)!==0&&i!==null){a=void 0,e=n,t=i.memoizedProps,i=i.memoizedState,s=e.stateNode;try{var D=Be(e.type,t);a=s.getSnapshotBeforeUpdate(D,i),s.__reactInternalSnapshotBeforeUpdate=a}catch(w){sa(e,e.return,w)}}break;case 3:if((a&1024)!==0){if(a=n.stateNode.containerInfo,e=a.nodeType,e===9)Jc(a);else if(e===1)switch(a.nodeName){case"HEAD":case"HTML":case"BODY":Jc(a);break;default:a.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((a&1024)!==0)throw Error(d(163))}if(a=n.sibling,a!==null){a.return=n.return,Ca=a;break}Ca=n.return}}function Wu(a,n,e){var s=e.flags;switch(e.tag){case 0:case 11:case 15:Vn(a,e),s&4&&tt(5,e);break;case 1:if(Vn(a,e),s&4)if(a=e.stateNode,n===null)try{a.componentDidMount()}catch(l){sa(e,e.return,l)}else{var t=Be(e.type,n.memoizedProps);n=n.memoizedState;try{a.componentDidUpdate(t,n,a.__reactInternalSnapshotBeforeUpdate)}catch(l){sa(e,e.return,l)}}s&64&&Vu(e),s&512&&it(e,e.return);break;case 3:if(Vn(a,e),s&64&&(a=e.updateQueue,a!==null)){if(n=null,e.child!==null)switch(e.child.tag){case 27:case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}try{wo(a,n)}catch(l){sa(e,e.return,l)}}break;case 27:n===null&&s&4&&Ju(e);case 26:case 5:Vn(a,e),n===null&&s&4&&Zu(e),s&512&&it(e,e.return);break;case 12:Vn(a,e);break;case 31:Vn(a,e),s&4&&ap(a,e);break;case 13:Vn(a,e),s&4&&np(a,e),s&64&&(a=e.memoizedState,a!==null&&(a=a.dehydrated,a!==null&&(e=df.bind(null,e),Of(a,e))));break;case 22:if(s=e.memoizedState!==null||Fn,!s){n=n!==null&&n.memoizedState!==null||Ea,t=Fn;var i=Ea;Fn=s,(Ea=n)&&!i?Xn(a,e,(e.subtreeFlags&8772)!==0):Vn(a,e),Fn=t,Ea=i}break;case 30:break;default:Vn(a,e)}}function Iu(a){var n=a.alternate;n!==null&&(a.alternate=null,Iu(n)),a.child=null,a.deletions=null,a.sibling=null,a.tag===5&&(n=a.stateNode,n!==null&&al(n)),a.stateNode=null,a.return=null,a.dependencies=null,a.memoizedProps=null,a.memoizedState=null,a.pendingProps=null,a.stateNode=null,a.updateQueue=null}var fa=null,Qa=!1;function Qn(a,n,e){for(e=e.child;e!==null;)$u(a,n,e),e=e.sibling}function $u(a,n,e){if(Ia&&typeof Ia.onCommitFiberUnmount=="function")try{Ia.onCommitFiberUnmount(Ls,e)}catch{}switch(e.tag){case 26:Ea||Dn(e,n),Qn(a,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:Ea||Dn(e,n);var s=fa,t=Qa;ve(e.type)&&(fa=e.stateNode,Qa=!1),Qn(a,n,e),ft(e.stateNode),fa=s,Qa=t;break;case 5:Ea||Dn(e,n);case 6:if(s=fa,t=Qa,fa=null,Qn(a,n,e),fa=s,Qa=t,fa!==null)if(Qa)try{(fa.nodeType===9?fa.body:fa.nodeName==="HTML"?fa.ownerDocument.body:fa).removeChild(e.stateNode)}catch(i){sa(e,n,i)}else try{fa.removeChild(e.stateNode)}catch(i){sa(e,n,i)}break;case 18:fa!==null&&(Qa?(a=fa,Vp(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,e.stateNode),Cs(a)):Vp(fa,e.stateNode));break;case 4:s=fa,t=Qa,fa=e.stateNode.containerInfo,Qa=!0,Qn(a,n,e),fa=s,Qa=t;break;case 0:case 11:case 14:case 15:ue(2,e,n),Ea||ue(4,e,n),Qn(a,n,e);break;case 1:Ea||(Dn(e,n),s=e.stateNode,typeof s.componentWillUnmount=="function"&&Xu(e,n,s)),Qn(a,n,e);break;case 21:Qn(a,n,e);break;case 22:Ea=(s=Ea)||e.memoizedState!==null,Qn(a,n,e),Ea=s;break;default:Qn(a,n,e)}}function ap(a,n){if(n.memoizedState===null&&(a=n.alternate,a!==null&&(a=a.memoizedState,a!==null))){a=a.dehydrated;try{Cs(a)}catch(e){sa(n,n.return,e)}}}function np(a,n){if(n.memoizedState===null&&(a=n.alternate,a!==null&&(a=a.memoizedState,a!==null&&(a=a.dehydrated,a!==null))))try{Cs(a)}catch(e){sa(n,n.return,e)}}function sf(a){switch(a.tag){case 31:case 13:case 19:var n=a.stateNode;return n===null&&(n=a.stateNode=new ku),n;case 22:return a=a.stateNode,n=a._retryCache,n===null&&(n=a._retryCache=new ku),n;default:throw Error(d(435,a.tag))}}function hi(a,n){var e=sf(a);n.forEach(function(s){if(!e.has(s)){e.add(s);var t=gf.bind(null,a,s);s.then(t,t)}})}function Va(a,n){var e=n.deletions;if(e!==null)for(var s=0;s<e.length;s++){var t=e[s],i=a,l=n,c=l;a:for(;c!==null;){switch(c.tag){case 27:if(ve(c.type)){fa=c.stateNode,Qa=!1;break a}break;case 5:fa=c.stateNode,Qa=!1;break a;case 3:case 4:fa=c.stateNode.containerInfo,Qa=!0;break a}c=c.return}if(fa===null)throw Error(d(160));$u(i,l,t),fa=null,Qa=!1,i=t.alternate,i!==null&&(i.return=null),t.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)ep(n,a),n=n.sibling}var An=null;function ep(a,n){var e=a.alternate,s=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:Va(n,a),Xa(a),s&4&&(ue(3,a,a.return),tt(3,a),ue(5,a,a.return));break;case 1:Va(n,a),Xa(a),s&512&&(Ea||e===null||Dn(e,e.return)),s&64&&Fn&&(a=a.updateQueue,a!==null&&(s=a.callbacks,s!==null&&(e=a.shared.hiddenCallbacks,a.shared.hiddenCallbacks=e===null?s:e.concat(s))));break;case 26:var t=An;if(Va(n,a),Xa(a),s&512&&(Ea||e===null||Dn(e,e.return)),s&4){var i=e!==null?e.memoizedState:null;if(s=a.memoizedState,e===null)if(s===null)if(a.stateNode===null){a:{s=a.type,e=a.memoizedProps,t=t.ownerDocument||t;n:switch(s){case"title":i=t.getElementsByTagName("title")[0],(!i||i[Os]||i[Da]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=t.createElement(s),t.head.insertBefore(i,t.querySelector("head > title"))),Oa(i,s,e),i[Da]=a,ja(i),s=i;break a;case"link":var l=ed("link","href",t).get(s+(e.href||""));if(l){for(var c=0;c<l.length;c++)if(i=l[c],i.getAttribute("href")===(e.href==null||e.href===""?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){l.splice(c,1);break n}}i=t.createElement(s),Oa(i,s,e),t.head.appendChild(i);break;case"meta":if(l=ed("meta","content",t).get(s+(e.content||""))){for(c=0;c<l.length;c++)if(i=l[c],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){l.splice(c,1);break n}}i=t.createElement(s),Oa(i,s,e),t.head.appendChild(i);break;default:throw Error(d(468,s))}i[Da]=a,ja(i),s=i}a.stateNode=s}else sd(t,a.type,a.stateNode);else a.stateNode=nd(t,s,a.memoizedProps);else i!==s?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,s===null?sd(t,a.type,a.stateNode):nd(t,s,a.memoizedProps)):s===null&&a.stateNode!==null&&Ac(a,a.memoizedProps,e.memoizedProps)}break;case 27:Va(n,a),Xa(a),s&512&&(Ea||e===null||Dn(e,e.return)),e!==null&&s&4&&Ac(a,a.memoizedProps,e.memoizedProps);break;case 5:if(Va(n,a),Xa(a),s&512&&(Ea||e===null||Dn(e,e.return)),a.flags&32){t=a.stateNode;try{ke(t,"")}catch(D){sa(a,a.return,D)}}s&4&&a.stateNode!=null&&(t=a.memoizedProps,Ac(a,t,e!==null?e.memoizedProps:t)),s&1024&&(Tc=!0);break;case 6:if(Va(n,a),Xa(a),s&4){if(a.stateNode===null)throw Error(d(162));s=a.memoizedProps,e=a.stateNode;try{e.nodeValue=s}catch(D){sa(a,a.return,D)}}break;case 3:if(Mi=null,t=An,An=Li(n.containerInfo),Va(n,a),An=t,Xa(a),s&4&&e!==null&&e.memoizedState.isDehydrated)try{Cs(n.containerInfo)}catch(D){sa(a,a.return,D)}Tc&&(Tc=!1,sp(a));break;case 4:s=An,An=Li(a.stateNode.containerInfo),Va(n,a),Xa(a),An=s;break;case 12:Va(n,a),Xa(a);break;case 31:Va(n,a),Xa(a),s&4&&(s=a.updateQueue,s!==null&&(a.updateQueue=null,hi(a,s)));break;case 13:Va(n,a),Xa(a),a.child.flags&8192&&a.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(vi=Wa()),s&4&&(s=a.updateQueue,s!==null&&(a.updateQueue=null,hi(a,s)));break;case 22:t=a.memoizedState!==null;var r=e!==null&&e.memoizedState!==null,f=Fn,v=Ea;if(Fn=f||t,Ea=v||r,Va(n,a),Ea=v,Fn=f,Xa(a),s&8192)a:for(n=a.stateNode,n._visibility=t?n._visibility&-2:n._visibility|1,t&&(e===null||r||Fn||Ea||Pe(a)),e=null,n=a;;){if(n.tag===5||n.tag===26){if(e===null){r=e=n;try{if(i=r.stateNode,t)l=i.style,typeof l.setProperty=="function"?l.setProperty("display","none","important"):l.display="none";else{c=r.stateNode;var S=r.memoizedProps.style,h=S!=null&&S.hasOwnProperty("display")?S.display:null;c.style.display=h==null||typeof h=="boolean"?"":(""+h).trim()}}catch(D){sa(r,r.return,D)}}}else if(n.tag===6){if(e===null){r=n;try{r.stateNode.nodeValue=t?"":r.memoizedProps}catch(D){sa(r,r.return,D)}}}else if(n.tag===18){if(e===null){r=n;try{var m=r.stateNode;t?Xp(m,!0):Xp(r.stateNode,!1)}catch(D){sa(r,r.return,D)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===a)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===a)break a;for(;n.sibling===null;){if(n.return===null||n.return===a)break a;e===n&&(e=null),n=n.return}e===n&&(e=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=a.updateQueue,s!==null&&(e=s.retryQueue,e!==null&&(s.retryQueue=null,hi(a,e))));break;case 19:Va(n,a),Xa(a),s&4&&(s=a.updateQueue,s!==null&&(a.updateQueue=null,hi(a,s)));break;case 30:break;case 21:break;default:Va(n,a),Xa(a)}}function Xa(a){var n=a.flags;if(n&2){try{for(var e,s=a.return;s!==null;){if(Ku(s)){e=s;break}s=s.return}if(e==null)throw Error(d(160));switch(e.tag){case 27:var t=e.stateNode,i=zc(a);fi(a,i,t);break;case 5:var l=e.stateNode;e.flags&32&&(ke(l,""),e.flags&=-33);var c=zc(a);fi(a,c,l);break;case 3:case 4:var r=e.stateNode.containerInfo,f=zc(a);Ec(a,f,r);break;default:throw Error(d(161))}}catch(v){sa(a,a.return,v)}a.flags&=-3}n&4096&&(a.flags&=-4097)}function sp(a){if(a.subtreeFlags&1024)for(a=a.child;a!==null;){var n=a;sp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),a=a.sibling}}function Vn(a,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Wu(a,n.alternate,n),n=n.sibling}function Pe(a){for(a=a.child;a!==null;){var n=a;switch(n.tag){case 0:case 11:case 14:case 15:ue(4,n,n.return),Pe(n);break;case 1:Dn(n,n.return);var e=n.stateNode;typeof e.componentWillUnmount=="function"&&Xu(n,n.return,e),Pe(n);break;case 27:ft(n.stateNode);case 26:case 5:Dn(n,n.return),Pe(n);break;case 22:n.memoizedState===null&&Pe(n);break;case 30:Pe(n);break;default:Pe(n)}a=a.sibling}}function Xn(a,n,e){for(e=e&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,t=a,i=n,l=i.flags;switch(i.tag){case 0:case 11:case 15:Xn(t,i,e),tt(4,i);break;case 1:if(Xn(t,i,e),s=i,t=s.stateNode,typeof t.componentDidMount=="function")try{t.componentDidMount()}catch(f){sa(s,s.return,f)}if(s=i,t=s.updateQueue,t!==null){var c=s.stateNode;try{var r=t.shared.hiddenCallbacks;if(r!==null)for(t.shared.hiddenCallbacks=null,t=0;t<r.length;t++)No(r[t],c)}catch(f){sa(s,s.return,f)}}e&&l&64&&Vu(i),it(i,i.return);break;case 27:Ju(i);case 26:case 5:Xn(t,i,e),e&&s===null&&l&4&&Zu(i),it(i,i.return);break;case 12:Xn(t,i,e);break;case 31:Xn(t,i,e),e&&l&4&&ap(t,i);break;case 13:Xn(t,i,e),e&&l&4&&np(t,i);break;case 22:i.memoizedState===null&&Xn(t,i,e),it(i,i.return);break;case 30:break;default:Xn(t,i,e)}n=n.sibling}}function Gc(a,n){var e=null;a!==null&&a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(e=a.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==e&&(a!=null&&a.refCount++,e!=null&&Vs(e))}function jc(a,n){a=null,n.alternate!==null&&(a=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==a&&(n.refCount++,a!=null&&Vs(a))}function zn(a,n,e,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)tp(a,n,e,s),n=n.sibling}function tp(a,n,e,s){var t=n.flags;switch(n.tag){case 0:case 11:case 15:zn(a,n,e,s),t&2048&&tt(9,n);break;case 1:zn(a,n,e,s);break;case 3:zn(a,n,e,s),t&2048&&(a=null,n.alternate!==null&&(a=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==a&&(n.refCount++,a!=null&&Vs(a)));break;case 12:if(t&2048){zn(a,n,e,s),a=n.stateNode;try{var i=n.memoizedProps,l=i.id,c=i.onPostCommit;typeof c=="function"&&c(l,n.alternate===null?"mount":"update",a.passiveEffectDuration,-0)}catch(r){sa(n,n.return,r)}}else zn(a,n,e,s);break;case 31:zn(a,n,e,s);break;case 13:zn(a,n,e,s);break;case 23:break;case 22:i=n.stateNode,l=n.alternate,n.memoizedState!==null?i._visibility&2?zn(a,n,e,s):lt(a,n):i._visibility&2?zn(a,n,e,s):(i._visibility|=2,ms(a,n,e,s,(n.subtreeFlags&10256)!==0||!1)),t&2048&&Gc(l,n);break;case 24:zn(a,n,e,s),t&2048&&jc(n.alternate,n);break;default:zn(a,n,e,s)}}function ms(a,n,e,s,t){for(t=t&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var i=a,l=n,c=e,r=s,f=l.flags;switch(l.tag){case 0:case 11:case 15:ms(i,l,c,r,t),tt(8,l);break;case 23:break;case 22:var v=l.stateNode;l.memoizedState!==null?v._visibility&2?ms(i,l,c,r,t):lt(i,l):(v._visibility|=2,ms(i,l,c,r,t)),t&&f&2048&&Gc(l.alternate,l);break;case 24:ms(i,l,c,r,t),t&&f&2048&&jc(l.alternate,l);break;default:ms(i,l,c,r,t)}n=n.sibling}}function lt(a,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=a,s=n,t=s.flags;switch(s.tag){case 22:lt(e,s),t&2048&&Gc(s.alternate,s);break;case 24:lt(e,s),t&2048&&jc(s.alternate,s);break;default:lt(e,s)}n=n.sibling}}var ct=8192;function vs(a,n,e){if(a.subtreeFlags&ct)for(a=a.child;a!==null;)ip(a,n,e),a=a.sibling}function ip(a,n,e){switch(a.tag){case 26:vs(a,n,e),a.flags&ct&&a.memoizedState!==null&&Qf(e,An,a.memoizedState,a.memoizedProps);break;case 5:vs(a,n,e);break;case 3:case 4:var s=An;An=Li(a.stateNode.containerInfo),vs(a,n,e),An=s;break;case 22:a.memoizedState===null&&(s=a.alternate,s!==null&&s.memoizedState!==null?(s=ct,ct=16777216,vs(a,n,e),ct=s):vs(a,n,e));break;default:vs(a,n,e)}}function lp(a){var n=a.alternate;if(n!==null&&(a=n.child,a!==null)){n.child=null;do n=a.sibling,a.sibling=null,a=n;while(a!==null)}}function rt(a){var n=a.deletions;if((a.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var s=n[e];Ca=s,rp(s,a)}lp(a)}if(a.subtreeFlags&10256)for(a=a.child;a!==null;)cp(a),a=a.sibling}function cp(a){switch(a.tag){case 0:case 11:case 15:rt(a),a.flags&2048&&ue(9,a,a.return);break;case 3:rt(a);break;case 12:rt(a);break;case 22:var n=a.stateNode;a.memoizedState!==null&&n._visibility&2&&(a.return===null||a.return.tag!==13)?(n._visibility&=-3,mi(a)):rt(a);break;default:rt(a)}}function mi(a){var n=a.deletions;if((a.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var s=n[e];Ca=s,rp(s,a)}lp(a)}for(a=a.child;a!==null;){switch(n=a,n.tag){case 0:case 11:case 15:ue(8,n,n.return),mi(n);break;case 22:e=n.stateNode,e._visibility&2&&(e._visibility&=-3,mi(n));break;default:mi(n)}a=a.sibling}}function rp(a,n){for(;Ca!==null;){var e=Ca;switch(e.tag){case 0:case 11:case 15:ue(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var s=e.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Vs(e.memoizedState.cache)}if(s=e.child,s!==null)s.return=e,Ca=s;else a:for(e=a;Ca!==null;){s=Ca;var t=s.sibling,i=s.return;if(Iu(s),s===e){Ca=null;break a}if(t!==null){t.return=i,Ca=t;break a}Ca=i}}}var tf={getCacheForType:function(a){var n=xa(Sa),e=n.data.get(a);return e===void 0&&(e=a(),n.data.set(a,e)),e},cacheSignal:function(){return xa(Sa).controller.signal}},lf=typeof WeakMap=="function"?WeakMap:Map,aa=0,ua=null,V=null,Z=0,ea=0,tn=null,pe=!1,bs=!1,Cc=!1,Zn=0,ma=0,de=0,Ye=0,Dc=0,ln=0,ys=0,ot=null,Za=null,Lc=!1,vi=0,op=0,bi=1/0,yi=null,ge=null,Ga=0,fe=null,Ss=null,Kn=0,xc=0,Mc=null,up=null,ut=0,Oc=null;function cn(){return(aa&2)!==0&&Z!==0?Z&-Z:b.T!==null?_c():Gr()}function pp(){if(ln===0)if((Z&536870912)===0||W){var a=Ct;Ct<<=1,(Ct&3932160)===0&&(Ct=262144),ln=a}else ln=536870912;return a=en.current,a!==null&&(a.flags|=32),ln}function Ka(a,n,e){(a===ua&&(ea===2||ea===9)||a.cancelPendingCommit!==null)&&(As(a,0),he(a,Z,ln,!1)),Ms(a,e),((aa&2)===0||a!==ua)&&(a===ua&&((aa&2)===0&&(Ye|=e),ma===4&&he(a,Z,ln,!1)),Ln(a))}function dp(a,n,e){if((aa&6)!==0)throw Error(d(327));var s=!e&&(n&127)===0&&(n&a.expiredLanes)===0||xs(a,n),t=s?of(a,n):Nc(a,n,!0),i=s;do{if(t===0){bs&&!s&&he(a,n,0,!1);break}else{if(e=a.current.alternate,i&&!cf(e)){t=Nc(a,n,!1),i=!1;continue}if(t===2){if(i=n,a.errorRecoveryDisabledLanes&i)var l=0;else l=a.pendingLanes&-536870913,l=l!==0?l:l&536870912?536870912:0;if(l!==0){n=l;a:{var c=a;t=ot;var r=c.current.memoizedState.isDehydrated;if(r&&(As(c,l).flags|=256),l=Nc(c,l,!1),l!==2){if(Cc&&!r){c.errorRecoveryDisabledLanes|=i,Ye|=i,t=4;break a}i=Za,Za=t,i!==null&&(Za===null?Za=i:Za.push.apply(Za,i))}t=l}if(i=!1,t!==2)continue}}if(t===1){As(a,0),he(a,n,0,!0);break}a:{switch(s=a,i=t,i){case 0:case 1:throw Error(d(345));case 4:if((n&4194048)!==n)break;case 6:he(s,n,ln,!pe);break a;case 2:Za=null;break;case 3:case 5:break;default:throw Error(d(329))}if((n&62914560)===n&&(t=vi+300-Wa(),10<t)){if(he(s,n,ln,!pe),Lt(s,0,!0)!==0)break a;Kn=n,s.timeoutHandle=Fp(gp.bind(null,s,e,Za,yi,Lc,n,ln,Ye,ys,pe,i,"Throttled",-0,0),t);break a}gp(s,e,Za,yi,Lc,n,ln,Ye,ys,pe,i,null,-0,0)}}break}while(!0);Ln(a)}function gp(a,n,e,s,t,i,l,c,r,f,v,S,h,m){if(a.timeoutHandle=-1,S=n.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:qn},ip(n,i,S);var D=(i&62914560)===i?vi-Wa():(i&4194048)===i?op-Wa():0;if(D=Vf(S,D),D!==null){Kn=i,a.cancelPendingCommit=D(Ap.bind(null,a,n,i,e,s,t,l,c,r,v,S,null,h,m)),he(a,i,l,!f);return}}Ap(a,n,i,e,s,t,l,c,r)}function cf(a){for(var n=a;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var s=0;s<e.length;s++){var t=e[s],i=t.getSnapshot;t=t.value;try{if(!an(i(),t))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===a)break;for(;n.sibling===null;){if(n.return===null||n.return===a)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function he(a,n,e,s){n&=~Dc,n&=~Ye,a.suspendedLanes|=n,a.pingedLanes&=~n,s&&(a.warmLanes|=n),s=a.expirationTimes;for(var t=n;0<t;){var i=31-$a(t),l=1<<i;s[i]=-1,t&=~l}e!==0&&zr(a,e,n)}function Si(){return(aa&6)===0?(pt(0),!1):!0}function qc(){if(V!==null){if(ea===0)var a=V.return;else a=V,Un=qe=null,Jl(a),ps=null,Zs=0,a=V;for(;a!==null;)Qu(a.alternate,a),a=a.return;V=null}}function As(a,n){var e=a.timeoutHandle;e!==-1&&(a.timeoutHandle=-1,Cf(e)),e=a.cancelPendingCommit,e!==null&&(a.cancelPendingCommit=null,e()),Kn=0,qc(),ua=a,V=e=wn(a.current,null),Z=n,ea=0,tn=null,pe=!1,bs=xs(a,n),Cc=!1,ys=ln=Dc=Ye=de=ma=0,Za=ot=null,Lc=!1,(n&8)!==0&&(n|=n&32);var s=a.entangledLanes;if(s!==0)for(a=a.entanglements,s&=n;0<s;){var t=31-$a(s),i=1<<t;n|=a[t],s&=~i}return Zn=n,Pt(),e}function fp(a,n){B=null,b.H=nt,n===us||n===Jt?(n=xo(),ea=3):n===Ul?(n=xo(),ea=4):ea=n===pc?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,tn=n,V===null&&(ma=1,oi(a,dn(n,a.current)))}function hp(){var a=en.current;return a===null?!0:(Z&4194048)===Z?mn===null:(Z&62914560)===Z||(Z&536870912)!==0?a===mn:!1}function mp(){var a=b.H;return b.H=nt,a===null?nt:a}function vp(){var a=b.A;return b.A=tf,a}function Ai(){ma=4,pe||(Z&4194048)!==Z&&en.current!==null||(bs=!0),(de&134217727)===0&&(Ye&134217727)===0||ua===null||he(ua,Z,ln,!1)}function Nc(a,n,e){var s=aa;aa|=2;var t=mp(),i=vp();(ua!==a||Z!==n)&&(yi=null,As(a,n)),n=!1;var l=ma;a:do try{if(ea!==0&&V!==null){var c=V,r=tn;switch(ea){case 8:qc(),l=6;break a;case 3:case 2:case 9:case 6:en.current===null&&(n=!0);var f=ea;if(ea=0,tn=null,zs(a,c,r,f),e&&bs){l=0;break a}break;default:f=ea,ea=0,tn=null,zs(a,c,r,f)}}rf(),l=ma;break}catch(v){fp(a,v)}while(!0);return n&&a.shellSuspendCounter++,Un=qe=null,aa=s,b.H=t,b.A=i,V===null&&(ua=null,Z=0,Pt()),l}function rf(){for(;V!==null;)bp(V)}function of(a,n){var e=aa;aa|=2;var s=mp(),t=vp();ua!==a||Z!==n?(yi=null,bi=Wa()+500,As(a,n)):bs=xs(a,n);a:do try{if(ea!==0&&V!==null){n=V;var i=tn;n:switch(ea){case 1:ea=0,tn=null,zs(a,n,i,1);break;case 2:case 9:if(Do(i)){ea=0,tn=null,yp(n);break}n=function(){ea!==2&&ea!==9||ua!==a||(ea=7),Ln(a)},i.then(n,n);break a;case 3:ea=7;break a;case 4:ea=5;break a;case 7:Do(i)?(ea=0,tn=null,yp(n)):(ea=0,tn=null,zs(a,n,i,7));break;case 5:var l=null;switch(V.tag){case 26:l=V.memoizedState;case 5:case 27:var c=V;if(l?td(l):c.stateNode.complete){ea=0,tn=null;var r=c.sibling;if(r!==null)V=r;else{var f=c.return;f!==null?(V=f,zi(f)):V=null}break n}}ea=0,tn=null,zs(a,n,i,5);break;case 6:ea=0,tn=null,zs(a,n,i,6);break;case 8:qc(),ma=6;break a;default:throw Error(d(462))}}uf();break}catch(v){fp(a,v)}while(!0);return Un=qe=null,b.H=s,b.A=t,aa=e,V!==null?0:(ua=null,Z=0,Pt(),ma)}function uf(){for(;V!==null&&!Od();)bp(V)}function bp(a){var n=Yu(a.alternate,a,Zn);a.memoizedProps=a.pendingProps,n===null?zi(a):V=n}function yp(a){var n=a,e=n.alternate;switch(n.tag){case 15:case 0:n=Ru(e,n,n.pendingProps,n.type,void 0,Z);break;case 11:n=Ru(e,n,n.pendingProps,n.type.render,n.ref,Z);break;case 5:Jl(n);default:Qu(e,n),n=V=vo(n,Zn),n=Yu(e,n,Zn)}a.memoizedProps=a.pendingProps,n===null?zi(a):V=n}function zs(a,n,e,s){Un=qe=null,Jl(n),ps=null,Zs=0;var t=n.return;try{if(Wg(a,t,n,e,Z)){ma=1,oi(a,dn(e,a.current)),V=null;return}}catch(i){if(t!==null)throw V=t,i;ma=1,oi(a,dn(e,a.current)),V=null;return}n.flags&32768?(W||s===1?a=!0:bs||(Z&536870912)!==0?a=!1:(pe=a=!0,(s===2||s===9||s===3||s===6)&&(s=en.current,s!==null&&s.tag===13&&(s.flags|=16384))),Sp(n,a)):zi(n)}function zi(a){var n=a;do{if((n.flags&32768)!==0){Sp(n,pe);return}a=n.return;var e=af(n.alternate,n,Zn);if(e!==null){V=e;return}if(n=n.sibling,n!==null){V=n;return}V=n=a}while(n!==null);ma===0&&(ma=5)}function Sp(a,n){do{var e=nf(a.alternate,a);if(e!==null){e.flags&=32767,V=e;return}if(e=a.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(a=a.sibling,a!==null)){V=a;return}V=a=e}while(a!==null);ma=6,V=null}function Ap(a,n,e,s,t,i,l,c,r){a.cancelPendingCommit=null;do Ei();while(Ga!==0);if((aa&6)!==0)throw Error(d(327));if(n!==null){if(n===a.current)throw Error(d(177));if(i=n.lanes|n.childLanes,i|=zl,Yd(a,e,i,l,c,r),a===ua&&(V=ua=null,Z=0),Ss=n,fe=a,Kn=e,xc=i,Mc=t,up=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(a.callbackNode=null,a.callbackPriority=0,ff(Gt,function(){return jp(),null})):(a.callbackNode=null,a.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=b.T,b.T=null,t=G.p,G.p=2,l=aa,aa|=4;try{ef(a,n,e)}finally{aa=l,G.p=t,b.T=s}}Ga=1,zp(),Ep(),Tp()}}function zp(){if(Ga===1){Ga=0;var a=fe,n=Ss,e=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||e){e=b.T,b.T=null;var s=G.p;G.p=2;var t=aa;aa|=4;try{ep(n,a);var i=Xc,l=co(a.containerInfo),c=i.focusedElem,r=i.selectionRange;if(l!==c&&c&&c.ownerDocument&&lo(c.ownerDocument.documentElement,c)){if(r!==null&&vl(c)){var f=r.start,v=r.end;if(v===void 0&&(v=f),"selectionStart"in c)c.selectionStart=f,c.selectionEnd=Math.min(v,c.value.length);else{var S=c.ownerDocument||document,h=S&&S.defaultView||window;if(h.getSelection){var m=h.getSelection(),D=c.textContent.length,w=Math.min(r.start,D),ca=r.end===void 0?w:Math.min(r.end,D);!m.extend&&w>ca&&(l=ca,ca=w,w=l);var p=io(c,w),o=io(c,ca);if(p&&o&&(m.rangeCount!==1||m.anchorNode!==p.node||m.anchorOffset!==p.offset||m.focusNode!==o.node||m.focusOffset!==o.offset)){var g=S.createRange();g.setStart(p.node,p.offset),m.removeAllRanges(),w>ca?(m.addRange(g),m.extend(o.node,o.offset)):(g.setEnd(o.node,o.offset),m.addRange(g))}}}}for(S=[],m=c;m=m.parentNode;)m.nodeType===1&&S.push({element:m,left:m.scrollLeft,top:m.scrollTop});for(typeof c.focus=="function"&&c.focus(),c=0;c<S.length;c++){var y=S[c];y.element.scrollLeft=y.left,y.element.scrollTop=y.top}}wi=!!Vc,Xc=Vc=null}finally{aa=t,G.p=s,b.T=e}}a.current=n,Ga=2}}function Ep(){if(Ga===2){Ga=0;var a=fe,n=Ss,e=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||e){e=b.T,b.T=null;var s=G.p;G.p=2;var t=aa;aa|=4;try{Wu(a,n.alternate,n)}finally{aa=t,G.p=s,b.T=e}}Ga=3}}function Tp(){if(Ga===4||Ga===3){Ga=0,qd();var a=fe,n=Ss,e=Kn,s=up;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?Ga=5:(Ga=0,Ss=fe=null,Gp(a,a.pendingLanes));var t=a.pendingLanes;if(t===0&&(ge=null),Ii(e),n=n.stateNode,Ia&&typeof Ia.onCommitFiberRoot=="function")try{Ia.onCommitFiberRoot(Ls,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=b.T,t=G.p,G.p=2,b.T=null;try{for(var i=a.onRecoverableError,l=0;l<s.length;l++){var c=s[l];i(c.value,{componentStack:c.stack})}}finally{b.T=n,G.p=t}}(Kn&3)!==0&&Ei(),Ln(a),t=a.pendingLanes,(e&261930)!==0&&(t&42)!==0?a===Oc?ut++:(ut=0,Oc=a):ut=0,pt(0)}}function Gp(a,n){(a.pooledCacheLanes&=n)===0&&(n=a.pooledCache,n!=null&&(a.pooledCache=null,Vs(n)))}function Ei(){return zp(),Ep(),Tp(),jp()}function jp(){if(Ga!==5)return!1;var a=fe,n=xc;xc=0;var e=Ii(Kn),s=b.T,t=G.p;try{G.p=32>e?32:e,b.T=null,e=Mc,Mc=null;var i=fe,l=Kn;if(Ga=0,Ss=fe=null,Kn=0,(aa&6)!==0)throw Error(d(331));var c=aa;if(aa|=4,cp(i.current),tp(i,i.current,l,e),aa=c,pt(0,!1),Ia&&typeof Ia.onPostCommitFiberRoot=="function")try{Ia.onPostCommitFiberRoot(Ls,i)}catch{}return!0}finally{G.p=t,b.T=s,Gp(a,n)}}function Cp(a,n,e){n=dn(e,n),n=uc(a.stateNode,n,2),a=ce(a,n,2),a!==null&&(Ms(a,2),Ln(a))}function sa(a,n,e){if(a.tag===3)Cp(a,a,e);else for(;n!==null;){if(n.tag===3){Cp(n,a,e);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ge===null||!ge.has(s))){a=dn(e,a),e=Du(2),s=ce(n,e,2),s!==null&&(Lu(e,s,n,a),Ms(s,2),Ln(s));break}}n=n.return}}function wc(a,n,e){var s=a.pingCache;if(s===null){s=a.pingCache=new lf;var t=new Set;s.set(n,t)}else t=s.get(n),t===void 0&&(t=new Set,s.set(n,t));t.has(e)||(Cc=!0,t.add(e),a=pf.bind(null,a,n,e),n.then(a,a))}function pf(a,n,e){var s=a.pingCache;s!==null&&s.delete(n),a.pingedLanes|=a.suspendedLanes&e,a.warmLanes&=~e,ua===a&&(Z&e)===e&&(ma===4||ma===3&&(Z&62914560)===Z&&300>Wa()-vi?(aa&2)===0&&As(a,0):Dc|=e,ys===Z&&(ys=0)),Ln(a)}function Dp(a,n){n===0&&(n=Ar()),a=xe(a,n),a!==null&&(Ms(a,n),Ln(a))}function df(a){var n=a.memoizedState,e=0;n!==null&&(e=n.retryLane),Dp(a,e)}function gf(a,n){var e=0;switch(a.tag){case 31:case 13:var s=a.stateNode,t=a.memoizedState;t!==null&&(e=t.retryLane);break;case 19:s=a.stateNode;break;case 22:s=a.stateNode._retryCache;break;default:throw Error(d(314))}s!==null&&s.delete(n),Dp(a,e)}function ff(a,n){return Ki(a,n)}var Ti=null,Es=null,Rc=!1,Gi=!1,Uc=!1,me=0;function Ln(a){a!==Es&&a.next===null&&(Es===null?Ti=Es=a:Es=Es.next=a),Gi=!0,Rc||(Rc=!0,mf())}function pt(a,n){if(!Uc&&Gi){Uc=!0;do for(var e=!1,s=Ti;s!==null;){if(a!==0){var t=s.pendingLanes;if(t===0)var i=0;else{var l=s.suspendedLanes,c=s.pingedLanes;i=(1<<31-$a(42|a)+1)-1,i&=t&~(l&~c),i=i&201326741?i&201326741|1:i?i|2:0}i!==0&&(e=!0,Op(s,i))}else i=Z,i=Lt(s,s===ua?i:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(i&3)===0||xs(s,i)||(e=!0,Op(s,i));s=s.next}while(e);Uc=!1}}function hf(){Lp()}function Lp(){Gi=Rc=!1;var a=0;me!==0&&jf()&&(a=me);for(var n=Wa(),e=null,s=Ti;s!==null;){var t=s.next,i=xp(s,n);i===0?(s.next=null,e===null?Ti=t:e.next=t,t===null&&(Es=e)):(e=s,(a!==0||(i&3)!==0)&&(Gi=!0)),s=t}Ga!==0&&Ga!==5||pt(a),me!==0&&(me=0)}function xp(a,n){for(var e=a.suspendedLanes,s=a.pingedLanes,t=a.expirationTimes,i=a.pendingLanes&-62914561;0<i;){var l=31-$a(i),c=1<<l,r=t[l];r===-1?((c&e)===0||(c&s)!==0)&&(t[l]=Pd(c,n)):r<=n&&(a.expiredLanes|=c),i&=~c}if(n=ua,e=Z,e=Lt(a,a===n?e:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),s=a.callbackNode,e===0||a===n&&(ea===2||ea===9)||a.cancelPendingCommit!==null)return s!==null&&s!==null&&Ji(s),a.callbackNode=null,a.callbackPriority=0;if((e&3)===0||xs(a,e)){if(n=e&-e,n===a.callbackPriority)return n;switch(s!==null&&Ji(s),Ii(e)){case 2:case 8:e=yr;break;case 32:e=Gt;break;case 268435456:e=Sr;break;default:e=Gt}return s=Mp.bind(null,a),e=Ki(e,s),a.callbackPriority=n,a.callbackNode=e,n}return s!==null&&s!==null&&Ji(s),a.callbackPriority=2,a.callbackNode=null,2}function Mp(a,n){if(Ga!==0&&Ga!==5)return a.callbackNode=null,a.callbackPriority=0,null;var e=a.callbackNode;if(Ei()&&a.callbackNode!==e)return null;var s=Z;return s=Lt(a,a===ua?s:0,a.cancelPendingCommit!==null||a.timeoutHandle!==-1),s===0?null:(dp(a,s,n),xp(a,Wa()),a.callbackNode!=null&&a.callbackNode===e?Mp.bind(null,a):null)}function Op(a,n){if(Ei())return null;dp(a,n,!0)}function mf(){Df(function(){(aa&6)!==0?Ki(br,hf):Lp()})}function _c(){if(me===0){var a=rs;a===0&&(a=jt,jt<<=1,(jt&261888)===0&&(jt=256)),me=a}return me}function qp(a){return a==null||typeof a=="symbol"||typeof a=="boolean"?null:typeof a=="function"?a:qt(""+a)}function Np(a,n){var e=n.ownerDocument.createElement("input");return e.name=n.name,e.value=n.value,a.id&&e.setAttribute("form",a.id),n.parentNode.insertBefore(e,n),a=new FormData(a),e.parentNode.removeChild(e),a}function vf(a,n,e,s,t){if(n==="submit"&&e&&e.stateNode===t){var i=qp((t[Ya]||null).action),l=s.submitter;l&&(n=(n=l[Ya]||null)?qp(n.formAction):l.getAttribute("formAction"),n!==null&&(i=n,l=null));var c=new Ut("action","action",null,s,t);a.push({event:c,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(me!==0){var r=l?Np(t,l):new FormData(t);tc(e,{pending:!0,data:r,method:t.method,action:i},null,r)}}else typeof i=="function"&&(c.preventDefault(),r=l?Np(t,l):new FormData(t),tc(e,{pending:!0,data:r,method:t.method,action:i},i,r))},currentTarget:t}]})}}for(var Hc=0;Hc<Al.length;Hc++){var Bc=Al[Hc],bf=Bc.toLowerCase(),yf=Bc[0].toUpperCase()+Bc.slice(1);Sn(bf,"on"+yf)}Sn(uo,"onAnimationEnd"),Sn(po,"onAnimationIteration"),Sn(go,"onAnimationStart"),Sn("dblclick","onDoubleClick"),Sn("focusin","onFocus"),Sn("focusout","onBlur"),Sn(Ng,"onTransitionRun"),Sn(wg,"onTransitionStart"),Sn(Rg,"onTransitionCancel"),Sn(fo,"onTransitionEnd"),Ke("onMouseEnter",["mouseout","mouseover"]),Ke("onMouseLeave",["mouseout","mouseover"]),Ke("onPointerEnter",["pointerout","pointerover"]),Ke("onPointerLeave",["pointerout","pointerover"]),je("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),je("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),je("onBeforeInput",["compositionend","keypress","textInput","paste"]),je("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),je("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),je("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var dt="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Sf=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(dt));function wp(a,n){n=(n&4)!==0;for(var e=0;e<a.length;e++){var s=a[e],t=s.event;s=s.listeners;a:{var i=void 0;if(n)for(var l=s.length-1;0<=l;l--){var c=s[l],r=c.instance,f=c.currentTarget;if(c=c.listener,r!==i&&t.isPropagationStopped())break a;i=c,t.currentTarget=f;try{i(t)}catch(v){Bt(v)}t.currentTarget=null,i=r}else for(l=0;l<s.length;l++){if(c=s[l],r=c.instance,f=c.currentTarget,c=c.listener,r!==i&&t.isPropagationStopped())break a;i=c,t.currentTarget=f;try{i(t)}catch(v){Bt(v)}t.currentTarget=null,i=r}}}}function X(a,n){var e=n[$i];e===void 0&&(e=n[$i]=new Set);var s=a+"__bubble";e.has(s)||(Rp(n,a,2,!1),e.add(s))}function Pc(a,n,e){var s=0;n&&(s|=4),Rp(e,a,s,n)}var ji="_reactListening"+Math.random().toString(36).slice(2);function Yc(a){if(!a[ji]){a[ji]=!0,Dr.forEach(function(e){e!=="selectionchange"&&(Sf.has(e)||Pc(e,!1,a),Pc(e,!0,a))});var n=a.nodeType===9?a:a.ownerDocument;n===null||n[ji]||(n[ji]=!0,Pc("selectionchange",!1,n))}}function Rp(a,n,e,s){switch(pd(n)){case 2:var t=Kf;break;case 8:t=Jf;break;default:t=sr}e=t.bind(null,n,e,a),t=void 0,!rl||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(t=!0),s?t!==void 0?a.addEventListener(n,e,{capture:!0,passive:t}):a.addEventListener(n,e,!0):t!==void 0?a.addEventListener(n,e,{passive:t}):a.addEventListener(n,e,!1)}function Fc(a,n,e,s,t){var i=s;if((n&1)===0&&(n&2)===0&&s!==null)a:for(;;){if(s===null)return;var l=s.tag;if(l===3||l===4){var c=s.stateNode.containerInfo;if(c===t)break;if(l===4)for(l=s.return;l!==null;){var r=l.tag;if((r===3||r===4)&&l.stateNode.containerInfo===t)return;l=l.return}for(;c!==null;){if(l=Ve(c),l===null)return;if(r=l.tag,r===5||r===6||r===26||r===27){s=i=l;continue a}c=c.parentNode}}s=s.return}Br(function(){var f=i,v=ll(e),S=[];a:{var h=ho.get(a);if(h!==void 0){var m=Ut,D=a;switch(a){case"keypress":if(wt(e)===0)break a;case"keydown":case"keyup":m=dg;break;case"focusin":D="focus",m=dl;break;case"focusout":D="blur",m=dl;break;case"beforeblur":case"afterblur":m=dl;break;case"click":if(e.button===2)break a;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Fr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=ag;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=hg;break;case uo:case po:case go:m=sg;break;case fo:m=vg;break;case"scroll":case"scrollend":m=Id;break;case"wheel":m=yg;break;case"copy":case"cut":case"paste":m=ig;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Vr;break;case"toggle":case"beforetoggle":m=Ag}var w=(n&4)!==0,ca=!w&&(a==="scroll"||a==="scrollend"),p=w?h!==null?h+"Capture":null:h;w=[];for(var o=f,g;o!==null;){var y=o;if(g=y.stateNode,y=y.tag,y!==5&&y!==26&&y!==27||g===null||p===null||(y=Ns(o,p),y!=null&&w.push(gt(o,y,g))),ca)break;o=o.return}0<w.length&&(h=new m(h,D,null,e,v),S.push({event:h,listeners:w}))}}if((n&7)===0){a:{if(h=a==="mouseover"||a==="pointerover",m=a==="mouseout"||a==="pointerout",h&&e!==il&&(D=e.relatedTarget||e.fromElement)&&(Ve(D)||D[Qe]))break a;if((m||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,m?(D=e.relatedTarget||e.toElement,m=f,D=D?Ve(D):null,D!==null&&(ca=q(D),w=D.tag,D!==ca||w!==5&&w!==27&&w!==6)&&(D=null)):(m=null,D=f),m!==D)){if(w=Fr,y="onMouseLeave",p="onMouseEnter",o="mouse",(a==="pointerout"||a==="pointerover")&&(w=Vr,y="onPointerLeave",p="onPointerEnter",o="pointer"),ca=m==null?h:qs(m),g=D==null?h:qs(D),h=new w(y,o+"leave",m,e,v),h.target=ca,h.relatedTarget=g,y=null,Ve(v)===f&&(w=new w(p,o+"enter",D,e,v),w.target=g,w.relatedTarget=ca,y=w),ca=y,m&&D)n:{for(w=Af,p=m,o=D,g=0,y=p;y;y=w(y))g++;y=0;for(var N=o;N;N=w(N))y++;for(;0<g-y;)p=w(p),g--;for(;0<y-g;)o=w(o),y--;for(;g--;){if(p===o||o!==null&&p===o.alternate){w=p;break n}p=w(p),o=w(o)}w=null}else w=null;m!==null&&Up(S,h,m,w,!1),D!==null&&ca!==null&&Up(S,ca,D,w,!0)}}a:{if(h=f?qs(f):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var I=$r;else if(Wr(h))if(ao)I=Mg;else{I=Lg;var M=Dg}else m=h.nodeName,!m||m.toLowerCase()!=="input"||h.type!=="checkbox"&&h.type!=="radio"?f&&tl(f.elementType)&&(I=$r):I=xg;if(I&&(I=I(a,f))){Ir(S,I,e,v);break a}M&&M(a,h,f),a==="focusout"&&f&&h.type==="number"&&f.memoizedProps.value!=null&&sl(h,"number",h.value)}switch(M=f?qs(f):window,a){case"focusin":(Wr(M)||M.contentEditable==="true")&&(as=M,bl=f,Ys=null);break;case"focusout":Ys=bl=as=null;break;case"mousedown":yl=!0;break;case"contextmenu":case"mouseup":case"dragend":yl=!1,ro(S,e,v);break;case"selectionchange":if(qg)break;case"keydown":case"keyup":ro(S,e,v)}var P;if(fl)a:{switch(a){case"compositionstart":var K="onCompositionStart";break a;case"compositionend":K="onCompositionEnd";break a;case"compositionupdate":K="onCompositionUpdate";break a}K=void 0}else $e?Jr(a,e)&&(K="onCompositionEnd"):a==="keydown"&&e.keyCode===229&&(K="onCompositionStart");K&&(Xr&&e.locale!=="ko"&&($e||K!=="onCompositionStart"?K==="onCompositionEnd"&&$e&&(P=Pr()):(ae=v,ol="value"in ae?ae.value:ae.textContent,$e=!0)),M=Ci(f,K),0<M.length&&(K=new Qr(K,a,null,e,v),S.push({event:K,listeners:M}),P?K.data=P:(P=kr(e),P!==null&&(K.data=P)))),(P=Eg?Tg(a,e):Gg(a,e))&&(K=Ci(f,"onBeforeInput"),0<K.length&&(M=new Qr("onBeforeInput","beforeinput",null,e,v),S.push({event:M,listeners:K}),M.data=P)),vf(S,a,f,e,v)}wp(S,n)})}function gt(a,n,e){return{instance:a,listener:n,currentTarget:e}}function Ci(a,n){for(var e=n+"Capture",s=[];a!==null;){var t=a,i=t.stateNode;if(t=t.tag,t!==5&&t!==26&&t!==27||i===null||(t=Ns(a,e),t!=null&&s.unshift(gt(a,t,i)),t=Ns(a,n),t!=null&&s.push(gt(a,t,i))),a.tag===3)return s;a=a.return}return[]}function Af(a){if(a===null)return null;do a=a.return;while(a&&a.tag!==5&&a.tag!==27);return a||null}function Up(a,n,e,s,t){for(var i=n._reactName,l=[];e!==null&&e!==s;){var c=e,r=c.alternate,f=c.stateNode;if(c=c.tag,r!==null&&r===s)break;c!==5&&c!==26&&c!==27||f===null||(r=f,t?(f=Ns(e,i),f!=null&&l.unshift(gt(e,f,r))):t||(f=Ns(e,i),f!=null&&l.push(gt(e,f,r)))),e=e.return}l.length!==0&&a.push({event:n,listeners:l})}var zf=/\r\n?/g,Ef=/\u0000|\uFFFD/g;function _p(a){return(typeof a=="string"?a:""+a).replace(zf,`
`).replace(Ef,"")}function Hp(a,n){return n=_p(n),_p(a)===n}function la(a,n,e,s,t,i){switch(e){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||ke(a,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&ke(a,""+s);break;case"className":Mt(a,"class",s);break;case"tabIndex":Mt(a,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Mt(a,e,s);break;case"style":_r(a,s,i);break;case"data":if(n!=="object"){Mt(a,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||e!=="href")){a.removeAttribute(e);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){a.removeAttribute(e);break}s=qt(""+s),a.setAttribute(e,s);break;case"action":case"formAction":if(typeof s=="function"){a.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(n!=="input"&&la(a,n,"name",t.name,t,null),la(a,n,"formEncType",t.formEncType,t,null),la(a,n,"formMethod",t.formMethod,t,null),la(a,n,"formTarget",t.formTarget,t,null)):(la(a,n,"encType",t.encType,t,null),la(a,n,"method",t.method,t,null),la(a,n,"target",t.target,t,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){a.removeAttribute(e);break}s=qt(""+s),a.setAttribute(e,s);break;case"onClick":s!=null&&(a.onclick=qn);break;case"onScroll":s!=null&&X("scroll",a);break;case"onScrollEnd":s!=null&&X("scrollend",a);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(d(61));if(e=s.__html,e!=null){if(t.children!=null)throw Error(d(60));a.innerHTML=e}}break;case"multiple":a.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":a.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){a.removeAttribute("xlink:href");break}e=qt(""+s),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?a.setAttribute(e,""+s):a.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?a.setAttribute(e,""):a.removeAttribute(e);break;case"capture":case"download":s===!0?a.setAttribute(e,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?a.setAttribute(e,s):a.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?a.setAttribute(e,s):a.removeAttribute(e);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?a.removeAttribute(e):a.setAttribute(e,s);break;case"popover":X("beforetoggle",a),X("toggle",a),xt(a,"popover",s);break;case"xlinkActuate":On(a,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":On(a,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":On(a,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":On(a,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":On(a,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":On(a,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":On(a,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":On(a,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":On(a,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":xt(a,"is",s);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=kd.get(e)||e,xt(a,e,s))}}function Qc(a,n,e,s,t,i){switch(e){case"style":_r(a,s,i);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(d(61));if(e=s.__html,e!=null){if(t.children!=null)throw Error(d(60));a.innerHTML=e}}break;case"children":typeof s=="string"?ke(a,s):(typeof s=="number"||typeof s=="bigint")&&ke(a,""+s);break;case"onScroll":s!=null&&X("scroll",a);break;case"onScrollEnd":s!=null&&X("scrollend",a);break;case"onClick":s!=null&&(a.onclick=qn);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Lr.hasOwnProperty(e))a:{if(e[0]==="o"&&e[1]==="n"&&(t=e.endsWith("Capture"),n=e.slice(2,t?e.length-7:void 0),i=a[Ya]||null,i=i!=null?i[e]:null,typeof i=="function"&&a.removeEventListener(n,i,t),typeof s=="function")){typeof i!="function"&&i!==null&&(e in a?a[e]=null:a.hasAttribute(e)&&a.removeAttribute(e)),a.addEventListener(n,s,t);break a}e in a?a[e]=s:s===!0?a.setAttribute(e,""):xt(a,e,s)}}}function Oa(a,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":X("error",a),X("load",a);var s=!1,t=!1,i;for(i in e)if(e.hasOwnProperty(i)){var l=e[i];if(l!=null)switch(i){case"src":s=!0;break;case"srcSet":t=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:la(a,n,i,l,e,null)}}t&&la(a,n,"srcSet",e.srcSet,e,null),s&&la(a,n,"src",e.src,e,null);return;case"input":X("invalid",a);var c=i=l=t=null,r=null,f=null;for(s in e)if(e.hasOwnProperty(s)){var v=e[s];if(v!=null)switch(s){case"name":t=v;break;case"type":l=v;break;case"checked":r=v;break;case"defaultChecked":f=v;break;case"value":i=v;break;case"defaultValue":c=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(d(137,n));break;default:la(a,n,s,v,e,null)}}Nr(a,i,c,r,f,l,t,!1);return;case"select":X("invalid",a),s=l=i=null;for(t in e)if(e.hasOwnProperty(t)&&(c=e[t],c!=null))switch(t){case"value":i=c;break;case"defaultValue":l=c;break;case"multiple":s=c;default:la(a,n,t,c,e,null)}n=i,e=l,a.multiple=!!s,n!=null?Je(a,!!s,n,!1):e!=null&&Je(a,!!s,e,!0);return;case"textarea":X("invalid",a),i=t=s=null;for(l in e)if(e.hasOwnProperty(l)&&(c=e[l],c!=null))switch(l){case"value":s=c;break;case"defaultValue":t=c;break;case"children":i=c;break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(d(91));break;default:la(a,n,l,c,e,null)}Rr(a,s,t,i);return;case"option":for(r in e)if(e.hasOwnProperty(r)&&(s=e[r],s!=null))switch(r){case"selected":a.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:la(a,n,r,s,e,null)}return;case"dialog":X("beforetoggle",a),X("toggle",a),X("cancel",a),X("close",a);break;case"iframe":case"object":X("load",a);break;case"video":case"audio":for(s=0;s<dt.length;s++)X(dt[s],a);break;case"image":X("error",a),X("load",a);break;case"details":X("toggle",a);break;case"embed":case"source":case"link":X("error",a),X("load",a);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(f in e)if(e.hasOwnProperty(f)&&(s=e[f],s!=null))switch(f){case"children":case"dangerouslySetInnerHTML":throw Error(d(137,n));default:la(a,n,f,s,e,null)}return;default:if(tl(n)){for(v in e)e.hasOwnProperty(v)&&(s=e[v],s!==void 0&&Qc(a,n,v,s,e,void 0));return}}for(c in e)e.hasOwnProperty(c)&&(s=e[c],s!=null&&la(a,n,c,s,e,null))}function Tf(a,n,e,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var t=null,i=null,l=null,c=null,r=null,f=null,v=null;for(m in e){var S=e[m];if(e.hasOwnProperty(m)&&S!=null)switch(m){case"checked":break;case"value":break;case"defaultValue":r=S;default:s.hasOwnProperty(m)||la(a,n,m,null,s,S)}}for(var h in s){var m=s[h];if(S=e[h],s.hasOwnProperty(h)&&(m!=null||S!=null))switch(h){case"type":i=m;break;case"name":t=m;break;case"checked":f=m;break;case"defaultChecked":v=m;break;case"value":l=m;break;case"defaultValue":c=m;break;case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(d(137,n));break;default:m!==S&&la(a,n,h,m,s,S)}}el(a,l,c,r,f,v,i,t);return;case"select":m=l=c=h=null;for(i in e)if(r=e[i],e.hasOwnProperty(i)&&r!=null)switch(i){case"value":break;case"multiple":m=r;default:s.hasOwnProperty(i)||la(a,n,i,null,s,r)}for(t in s)if(i=s[t],r=e[t],s.hasOwnProperty(t)&&(i!=null||r!=null))switch(t){case"value":h=i;break;case"defaultValue":c=i;break;case"multiple":l=i;default:i!==r&&la(a,n,t,i,s,r)}n=c,e=l,s=m,h!=null?Je(a,!!e,h,!1):!!s!=!!e&&(n!=null?Je(a,!!e,n,!0):Je(a,!!e,e?[]:"",!1));return;case"textarea":m=h=null;for(c in e)if(t=e[c],e.hasOwnProperty(c)&&t!=null&&!s.hasOwnProperty(c))switch(c){case"value":break;case"children":break;default:la(a,n,c,null,s,t)}for(l in s)if(t=s[l],i=e[l],s.hasOwnProperty(l)&&(t!=null||i!=null))switch(l){case"value":h=t;break;case"defaultValue":m=t;break;case"children":break;case"dangerouslySetInnerHTML":if(t!=null)throw Error(d(91));break;default:t!==i&&la(a,n,l,t,s,i)}wr(a,h,m);return;case"option":for(var D in e)if(h=e[D],e.hasOwnProperty(D)&&h!=null&&!s.hasOwnProperty(D))switch(D){case"selected":a.selected=!1;break;default:la(a,n,D,null,s,h)}for(r in s)if(h=s[r],m=e[r],s.hasOwnProperty(r)&&h!==m&&(h!=null||m!=null))switch(r){case"selected":a.selected=h&&typeof h!="function"&&typeof h!="symbol";break;default:la(a,n,r,h,s,m)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var w in e)h=e[w],e.hasOwnProperty(w)&&h!=null&&!s.hasOwnProperty(w)&&la(a,n,w,null,s,h);for(f in s)if(h=s[f],m=e[f],s.hasOwnProperty(f)&&h!==m&&(h!=null||m!=null))switch(f){case"children":case"dangerouslySetInnerHTML":if(h!=null)throw Error(d(137,n));break;default:la(a,n,f,h,s,m)}return;default:if(tl(n)){for(var ca in e)h=e[ca],e.hasOwnProperty(ca)&&h!==void 0&&!s.hasOwnProperty(ca)&&Qc(a,n,ca,void 0,s,h);for(v in s)h=s[v],m=e[v],!s.hasOwnProperty(v)||h===m||h===void 0&&m===void 0||Qc(a,n,v,h,s,m);return}}for(var p in e)h=e[p],e.hasOwnProperty(p)&&h!=null&&!s.hasOwnProperty(p)&&la(a,n,p,null,s,h);for(S in s)h=s[S],m=e[S],!s.hasOwnProperty(S)||h===m||h==null&&m==null||la(a,n,S,h,s,m)}function Bp(a){switch(a){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Gf(){if(typeof performance.getEntriesByType=="function"){for(var a=0,n=0,e=performance.getEntriesByType("resource"),s=0;s<e.length;s++){var t=e[s],i=t.transferSize,l=t.initiatorType,c=t.duration;if(i&&c&&Bp(l)){for(l=0,c=t.responseEnd,s+=1;s<e.length;s++){var r=e[s],f=r.startTime;if(f>c)break;var v=r.transferSize,S=r.initiatorType;v&&Bp(S)&&(r=r.responseEnd,l+=v*(r<c?1:(c-f)/(r-f)))}if(--s,n+=8*(i+l)/(t.duration/1e3),a++,10<a)break}}if(0<a)return n/a/1e6}return navigator.connection&&(a=navigator.connection.downlink,typeof a=="number")?a:5}var Vc=null,Xc=null;function Di(a){return a.nodeType===9?a:a.ownerDocument}function Pp(a){switch(a){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Yp(a,n){if(a===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return a===1&&n==="foreignObject"?0:a}function Zc(a,n){return a==="textarea"||a==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Kc=null;function jf(){var a=window.event;return a&&a.type==="popstate"?a===Kc?!1:(Kc=a,!0):(Kc=null,!1)}var Fp=typeof setTimeout=="function"?setTimeout:void 0,Cf=typeof clearTimeout=="function"?clearTimeout:void 0,Qp=typeof Promise=="function"?Promise:void 0,Df=typeof queueMicrotask=="function"?queueMicrotask:typeof Qp<"u"?function(a){return Qp.resolve(null).then(a).catch(Lf)}:Fp;function Lf(a){setTimeout(function(){throw a})}function ve(a){return a==="head"}function Vp(a,n){var e=n,s=0;do{var t=e.nextSibling;if(a.removeChild(e),t&&t.nodeType===8)if(e=t.data,e==="/$"||e==="/&"){if(s===0){a.removeChild(t),Cs(n);return}s--}else if(e==="$"||e==="$?"||e==="$~"||e==="$!"||e==="&")s++;else if(e==="html")ft(a.ownerDocument.documentElement);else if(e==="head"){e=a.ownerDocument.head,ft(e);for(var i=e.firstChild;i;){var l=i.nextSibling,c=i.nodeName;i[Os]||c==="SCRIPT"||c==="STYLE"||c==="LINK"&&i.rel.toLowerCase()==="stylesheet"||e.removeChild(i),i=l}}else e==="body"&&ft(a.ownerDocument.body);e=t}while(e);Cs(n)}function Xp(a,n){var e=a;a=0;do{var s=e.nextSibling;if(e.nodeType===1?n?(e._stashedDisplay=e.style.display,e.style.display="none"):(e.style.display=e._stashedDisplay||"",e.getAttribute("style")===""&&e.removeAttribute("style")):e.nodeType===3&&(n?(e._stashedText=e.nodeValue,e.nodeValue=""):e.nodeValue=e._stashedText||""),s&&s.nodeType===8)if(e=s.data,e==="/$"){if(a===0)break;a--}else e!=="$"&&e!=="$?"&&e!=="$~"&&e!=="$!"||a++;e=s}while(e)}function Jc(a){var n=a.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Jc(e),al(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}a.removeChild(e)}}function xf(a,n,e,s){for(;a.nodeType===1;){var t=e;if(a.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(a.nodeName!=="INPUT"||a.type!=="hidden"))break}else if(s){if(!a[Os])switch(n){case"meta":if(!a.hasAttribute("itemprop"))break;return a;case"link":if(i=a.getAttribute("rel"),i==="stylesheet"&&a.hasAttribute("data-precedence"))break;if(i!==t.rel||a.getAttribute("href")!==(t.href==null||t.href===""?null:t.href)||a.getAttribute("crossorigin")!==(t.crossOrigin==null?null:t.crossOrigin)||a.getAttribute("title")!==(t.title==null?null:t.title))break;return a;case"style":if(a.hasAttribute("data-precedence"))break;return a;case"script":if(i=a.getAttribute("src"),(i!==(t.src==null?null:t.src)||a.getAttribute("type")!==(t.type==null?null:t.type)||a.getAttribute("crossorigin")!==(t.crossOrigin==null?null:t.crossOrigin))&&i&&a.hasAttribute("async")&&!a.hasAttribute("itemprop"))break;return a;default:return a}}else if(n==="input"&&a.type==="hidden"){var i=t.name==null?null:""+t.name;if(t.type==="hidden"&&a.getAttribute("name")===i)return a}else return a;if(a=vn(a.nextSibling),a===null)break}return null}function Mf(a,n,e){if(n==="")return null;for(;a.nodeType!==3;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!e||(a=vn(a.nextSibling),a===null))return null;return a}function Zp(a,n){for(;a.nodeType!==8;)if((a.nodeType!==1||a.nodeName!=="INPUT"||a.type!=="hidden")&&!n||(a=vn(a.nextSibling),a===null))return null;return a}function kc(a){return a.data==="$?"||a.data==="$~"}function Wc(a){return a.data==="$!"||a.data==="$?"&&a.ownerDocument.readyState!=="loading"}function Of(a,n){var e=a.ownerDocument;if(a.data==="$~")a._reactRetry=n;else if(a.data!=="$?"||e.readyState!=="loading")n();else{var s=function(){n(),e.removeEventListener("DOMContentLoaded",s)};e.addEventListener("DOMContentLoaded",s),a._reactRetry=s}}function vn(a){for(;a!=null;a=a.nextSibling){var n=a.nodeType;if(n===1||n===3)break;if(n===8){if(n=a.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return a}var Ic=null;function Kp(a){a=a.nextSibling;for(var n=0;a;){if(a.nodeType===8){var e=a.data;if(e==="/$"||e==="/&"){if(n===0)return vn(a.nextSibling);n--}else e!=="$"&&e!=="$!"&&e!=="$?"&&e!=="$~"&&e!=="&"||n++}a=a.nextSibling}return null}function Jp(a){a=a.previousSibling;for(var n=0;a;){if(a.nodeType===8){var e=a.data;if(e==="$"||e==="$!"||e==="$?"||e==="$~"||e==="&"){if(n===0)return a;n--}else e!=="/$"&&e!=="/&"||n++}a=a.previousSibling}return null}function kp(a,n,e){switch(n=Di(e),a){case"html":if(a=n.documentElement,!a)throw Error(d(452));return a;case"head":if(a=n.head,!a)throw Error(d(453));return a;case"body":if(a=n.body,!a)throw Error(d(454));return a;default:throw Error(d(451))}}function ft(a){for(var n=a.attributes;n.length;)a.removeAttributeNode(n[0]);al(a)}var bn=new Map,Wp=new Set;function Li(a){return typeof a.getRootNode=="function"?a.getRootNode():a.nodeType===9?a:a.ownerDocument}var Jn=G.d;G.d={f:qf,r:Nf,D:wf,C:Rf,L:Uf,m:_f,X:Bf,S:Hf,M:Pf};function qf(){var a=Jn.f(),n=Si();return a||n}function Nf(a){var n=Xe(a);n!==null&&n.tag===5&&n.type==="form"?fu(n):Jn.r(a)}var Ts=typeof document>"u"?null:document;function Ip(a,n,e){var s=Ts;if(s&&typeof n=="string"&&n){var t=un(n);t='link[rel="'+a+'"][href="'+t+'"]',typeof e=="string"&&(t+='[crossorigin="'+e+'"]'),Wp.has(t)||(Wp.add(t),a={rel:a,crossOrigin:e,href:n},s.querySelector(t)===null&&(n=s.createElement("link"),Oa(n,"link",a),ja(n),s.head.appendChild(n)))}}function wf(a){Jn.D(a),Ip("dns-prefetch",a,null)}function Rf(a,n){Jn.C(a,n),Ip("preconnect",a,n)}function Uf(a,n,e){Jn.L(a,n,e);var s=Ts;if(s&&a&&n){var t='link[rel="preload"][as="'+un(n)+'"]';n==="image"&&e&&e.imageSrcSet?(t+='[imagesrcset="'+un(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(t+='[imagesizes="'+un(e.imageSizes)+'"]')):t+='[href="'+un(a)+'"]';var i=t;switch(n){case"style":i=Gs(a);break;case"script":i=js(a)}bn.has(i)||(a=x({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:a,as:n},e),bn.set(i,a),s.querySelector(t)!==null||n==="style"&&s.querySelector(ht(i))||n==="script"&&s.querySelector(mt(i))||(n=s.createElement("link"),Oa(n,"link",a),ja(n),s.head.appendChild(n)))}}function _f(a,n){Jn.m(a,n);var e=Ts;if(e&&a){var s=n&&typeof n.as=="string"?n.as:"script",t='link[rel="modulepreload"][as="'+un(s)+'"][href="'+un(a)+'"]',i=t;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=js(a)}if(!bn.has(i)&&(a=x({rel:"modulepreload",href:a},n),bn.set(i,a),e.querySelector(t)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(mt(i)))return}s=e.createElement("link"),Oa(s,"link",a),ja(s),e.head.appendChild(s)}}}function Hf(a,n,e){Jn.S(a,n,e);var s=Ts;if(s&&a){var t=Ze(s).hoistableStyles,i=Gs(a);n=n||"default";var l=t.get(i);if(!l){var c={loading:0,preload:null};if(l=s.querySelector(ht(i)))c.loading=5;else{a=x({rel:"stylesheet",href:a,"data-precedence":n},e),(e=bn.get(i))&&$c(a,e);var r=l=s.createElement("link");ja(r),Oa(r,"link",a),r._p=new Promise(function(f,v){r.onload=f,r.onerror=v}),r.addEventListener("load",function(){c.loading|=1}),r.addEventListener("error",function(){c.loading|=2}),c.loading|=4,xi(l,n,s)}l={type:"stylesheet",instance:l,count:1,state:c},t.set(i,l)}}}function Bf(a,n){Jn.X(a,n);var e=Ts;if(e&&a){var s=Ze(e).hoistableScripts,t=js(a),i=s.get(t);i||(i=e.querySelector(mt(t)),i||(a=x({src:a,async:!0},n),(n=bn.get(t))&&ar(a,n),i=e.createElement("script"),ja(i),Oa(i,"link",a),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},s.set(t,i))}}function Pf(a,n){Jn.M(a,n);var e=Ts;if(e&&a){var s=Ze(e).hoistableScripts,t=js(a),i=s.get(t);i||(i=e.querySelector(mt(t)),i||(a=x({src:a,async:!0,type:"module"},n),(n=bn.get(t))&&ar(a,n),i=e.createElement("script"),ja(i),Oa(i,"link",a),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},s.set(t,i))}}function $p(a,n,e,s){var t=(t=Q.current)?Li(t):null;if(!t)throw Error(d(446));switch(a){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(n=Gs(e.href),e=Ze(t).hoistableStyles,s=e.get(n),s||(s={type:"style",instance:null,count:0,state:null},e.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){a=Gs(e.href);var i=Ze(t).hoistableStyles,l=i.get(a);if(l||(t=t.ownerDocument||t,l={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(a,l),(i=t.querySelector(ht(a)))&&!i._p&&(l.instance=i,l.state.loading=5),bn.has(a)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},bn.set(a,e),i||Yf(t,a,e,l.state))),n&&s===null)throw Error(d(528,""));return l}if(n&&s!==null)throw Error(d(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=js(e),e=Ze(t).hoistableScripts,s=e.get(n),s||(s={type:"script",instance:null,count:0,state:null},e.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(d(444,a))}}function Gs(a){return'href="'+un(a)+'"'}function ht(a){return'link[rel="stylesheet"]['+a+"]"}function ad(a){return x({},a,{"data-precedence":a.precedence,precedence:null})}function Yf(a,n,e,s){a.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=a.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),Oa(n,"link",e),ja(n),a.head.appendChild(n))}function js(a){return'[src="'+un(a)+'"]'}function mt(a){return"script[async]"+a}function nd(a,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var s=a.querySelector('style[data-href~="'+un(e.href)+'"]');if(s)return n.instance=s,ja(s),s;var t=x({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return s=(a.ownerDocument||a).createElement("style"),ja(s),Oa(s,"style",t),xi(s,e.precedence,a),n.instance=s;case"stylesheet":t=Gs(e.href);var i=a.querySelector(ht(t));if(i)return n.state.loading|=4,n.instance=i,ja(i),i;s=ad(e),(t=bn.get(t))&&$c(s,t),i=(a.ownerDocument||a).createElement("link"),ja(i);var l=i;return l._p=new Promise(function(c,r){l.onload=c,l.onerror=r}),Oa(i,"link",s),n.state.loading|=4,xi(i,e.precedence,a),n.instance=i;case"script":return i=js(e.src),(t=a.querySelector(mt(i)))?(n.instance=t,ja(t),t):(s=e,(t=bn.get(i))&&(s=x({},e),ar(s,t)),a=a.ownerDocument||a,t=a.createElement("script"),ja(t),Oa(t,"link",s),a.head.appendChild(t),n.instance=t);case"void":return null;default:throw Error(d(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,xi(s,e.precedence,a));return n.instance}function xi(a,n,e){for(var s=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),t=s.length?s[s.length-1]:null,i=t,l=0;l<s.length;l++){var c=s[l];if(c.dataset.precedence===n)i=c;else if(i!==t)break}i?i.parentNode.insertBefore(a,i.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(a,n.firstChild))}function $c(a,n){a.crossOrigin==null&&(a.crossOrigin=n.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=n.referrerPolicy),a.title==null&&(a.title=n.title)}function ar(a,n){a.crossOrigin==null&&(a.crossOrigin=n.crossOrigin),a.referrerPolicy==null&&(a.referrerPolicy=n.referrerPolicy),a.integrity==null&&(a.integrity=n.integrity)}var Mi=null;function ed(a,n,e){if(Mi===null){var s=new Map,t=Mi=new Map;t.set(e,s)}else t=Mi,s=t.get(e),s||(s=new Map,t.set(e,s));if(s.has(a))return s;for(s.set(a,null),e=e.getElementsByTagName(a),t=0;t<e.length;t++){var i=e[t];if(!(i[Os]||i[Da]||a==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var l=i.getAttribute(n)||"";l=a+l;var c=s.get(l);c?c.push(i):s.set(l,[i])}}return s}function sd(a,n,e){a=a.ownerDocument||a,a.head.insertBefore(e,n==="title"?a.querySelector("head > title"):null)}function Ff(a,n,e){if(e===1||n.itemProp!=null)return!1;switch(a){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return a=n.disabled,typeof n.precedence=="string"&&a==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function td(a){return!(a.type==="stylesheet"&&(a.state.loading&3)===0)}function Qf(a,n,e,s){if(e.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(e.state.loading&4)===0){if(e.instance===null){var t=Gs(s.href),i=n.querySelector(ht(t));if(i){n=i._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(a.count++,a=Oi.bind(a),n.then(a,a)),e.state.loading|=4,e.instance=i,ja(i);return}i=n.ownerDocument||n,s=ad(s),(t=bn.get(t))&&$c(s,t),i=i.createElement("link"),ja(i);var l=i;l._p=new Promise(function(c,r){l.onload=c,l.onerror=r}),Oa(i,"link",s),e.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(e,n),(n=e.state.preload)&&(e.state.loading&3)===0&&(a.count++,e=Oi.bind(a),n.addEventListener("load",e),n.addEventListener("error",e))}}var nr=0;function Vf(a,n){return a.stylesheets&&a.count===0&&Ni(a,a.stylesheets),0<a.count||0<a.imgCount?function(e){var s=setTimeout(function(){if(a.stylesheets&&Ni(a,a.stylesheets),a.unsuspend){var i=a.unsuspend;a.unsuspend=null,i()}},6e4+n);0<a.imgBytes&&nr===0&&(nr=62500*Gf());var t=setTimeout(function(){if(a.waitingForImages=!1,a.count===0&&(a.stylesheets&&Ni(a,a.stylesheets),a.unsuspend)){var i=a.unsuspend;a.unsuspend=null,i()}},(a.imgBytes>nr?50:800)+n);return a.unsuspend=e,function(){a.unsuspend=null,clearTimeout(s),clearTimeout(t)}}:null}function Oi(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ni(this,this.stylesheets);else if(this.unsuspend){var a=this.unsuspend;this.unsuspend=null,a()}}}var qi=null;function Ni(a,n){a.stylesheets=null,a.unsuspend!==null&&(a.count++,qi=new Map,n.forEach(Xf,a),qi=null,Oi.call(a))}function Xf(a,n){if(!(n.state.loading&4)){var e=qi.get(a);if(e)var s=e.get(null);else{e=new Map,qi.set(a,e);for(var t=a.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<t.length;i++){var l=t[i];(l.nodeName==="LINK"||l.getAttribute("media")!=="not all")&&(e.set(l.dataset.precedence,l),s=l)}s&&e.set(null,s)}t=n.instance,l=t.getAttribute("data-precedence"),i=e.get(l)||s,i===s&&e.set(null,t),e.set(l,t),this.count++,s=Oi.bind(this),t.addEventListener("load",s),t.addEventListener("error",s),i?i.parentNode.insertBefore(t,i.nextSibling):(a=a.nodeType===9?a.head:a,a.insertBefore(t,a.firstChild)),n.state.loading|=4}}var vt={$$typeof:qa,Provider:null,Consumer:null,_currentValue:U,_currentValue2:U,_threadCount:0};function Zf(a,n,e,s,t,i,l,c,r){this.tag=1,this.containerInfo=a,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=ki(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ki(0),this.hiddenUpdates=ki(null),this.identifierPrefix=s,this.onUncaughtError=t,this.onCaughtError=i,this.onRecoverableError=l,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function id(a,n,e,s,t,i,l,c,r,f,v,S){return a=new Zf(a,n,e,l,r,f,v,S,c),n=1,i===!0&&(n|=24),i=nn(3,null,null,n),a.current=i,i.stateNode=a,n=Nl(),n.refCount++,a.pooledCache=n,n.refCount++,i.memoizedState={element:s,isDehydrated:e,cache:n},_l(i),a}function ld(a){return a?(a=ss,a):ss}function cd(a,n,e,s,t,i){t=ld(t),s.context===null?s.context=t:s.pendingContext=t,s=le(n),s.payload={element:e},i=i===void 0?null:i,i!==null&&(s.callback=i),e=ce(a,s,n),e!==null&&(Ka(e,a,n),Js(e,a,n))}function rd(a,n){if(a=a.memoizedState,a!==null&&a.dehydrated!==null){var e=a.retryLane;a.retryLane=e!==0&&e<n?e:n}}function er(a,n){rd(a,n),(a=a.alternate)&&rd(a,n)}function od(a){if(a.tag===13||a.tag===31){var n=xe(a,67108864);n!==null&&Ka(n,a,67108864),er(a,67108864)}}function ud(a){if(a.tag===13||a.tag===31){var n=cn();n=Wi(n);var e=xe(a,n);e!==null&&Ka(e,a,n),er(a,n)}}var wi=!0;function Kf(a,n,e,s){var t=b.T;b.T=null;var i=G.p;try{G.p=2,sr(a,n,e,s)}finally{G.p=i,b.T=t}}function Jf(a,n,e,s){var t=b.T;b.T=null;var i=G.p;try{G.p=8,sr(a,n,e,s)}finally{G.p=i,b.T=t}}function sr(a,n,e,s){if(wi){var t=tr(s);if(t===null)Fc(a,n,s,Ri,e),dd(a,s);else if(Wf(t,a,n,e,s))s.stopPropagation();else if(dd(a,s),n&4&&-1<kf.indexOf(a)){for(;t!==null;){var i=Xe(t);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var l=Ge(i.pendingLanes);if(l!==0){var c=i;for(c.pendingLanes|=2,c.entangledLanes|=2;l;){var r=1<<31-$a(l);c.entanglements[1]|=r,l&=~r}Ln(i),(aa&6)===0&&(bi=Wa()+500,pt(0))}}break;case 31:case 13:c=xe(i,2),c!==null&&Ka(c,i,2),Si(),er(i,2)}if(i=tr(s),i===null&&Fc(a,n,s,Ri,e),i===t)break;t=i}t!==null&&s.stopPropagation()}else Fc(a,n,s,null,e)}}function tr(a){return a=ll(a),ir(a)}var Ri=null;function ir(a){if(Ri=null,a=Ve(a),a!==null){var n=q(a);if(n===null)a=null;else{var e=n.tag;if(e===13){if(a=F(n),a!==null)return a;a=null}else if(e===31){if(a=J(n),a!==null)return a;a=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;a=null}else n!==a&&(a=null)}}return Ri=a,null}function pd(a){switch(a){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Nd()){case br:return 2;case yr:return 8;case Gt:case wd:return 32;case Sr:return 268435456;default:return 32}default:return 32}}var lr=!1,be=null,ye=null,Se=null,bt=new Map,yt=new Map,Ae=[],kf="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function dd(a,n){switch(a){case"focusin":case"focusout":be=null;break;case"dragenter":case"dragleave":ye=null;break;case"mouseover":case"mouseout":Se=null;break;case"pointerover":case"pointerout":bt.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":yt.delete(n.pointerId)}}function St(a,n,e,s,t,i){return a===null||a.nativeEvent!==i?(a={blockedOn:n,domEventName:e,eventSystemFlags:s,nativeEvent:i,targetContainers:[t]},n!==null&&(n=Xe(n),n!==null&&od(n)),a):(a.eventSystemFlags|=s,n=a.targetContainers,t!==null&&n.indexOf(t)===-1&&n.push(t),a)}function Wf(a,n,e,s,t){switch(n){case"focusin":return be=St(be,a,n,e,s,t),!0;case"dragenter":return ye=St(ye,a,n,e,s,t),!0;case"mouseover":return Se=St(Se,a,n,e,s,t),!0;case"pointerover":var i=t.pointerId;return bt.set(i,St(bt.get(i)||null,a,n,e,s,t)),!0;case"gotpointercapture":return i=t.pointerId,yt.set(i,St(yt.get(i)||null,a,n,e,s,t)),!0}return!1}function gd(a){var n=Ve(a.target);if(n!==null){var e=q(n);if(e!==null){if(n=e.tag,n===13){if(n=F(e),n!==null){a.blockedOn=n,jr(a.priority,function(){ud(e)});return}}else if(n===31){if(n=J(e),n!==null){a.blockedOn=n,jr(a.priority,function(){ud(e)});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){a.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}a.blockedOn=null}function Ui(a){if(a.blockedOn!==null)return!1;for(var n=a.targetContainers;0<n.length;){var e=tr(a.nativeEvent);if(e===null){e=a.nativeEvent;var s=new e.constructor(e.type,e);il=s,e.target.dispatchEvent(s),il=null}else return n=Xe(e),n!==null&&od(n),a.blockedOn=e,!1;n.shift()}return!0}function fd(a,n,e){Ui(a)&&e.delete(n)}function If(){lr=!1,be!==null&&Ui(be)&&(be=null),ye!==null&&Ui(ye)&&(ye=null),Se!==null&&Ui(Se)&&(Se=null),bt.forEach(fd),yt.forEach(fd)}function _i(a,n){a.blockedOn===n&&(a.blockedOn=null,lr||(lr=!0,E.unstable_scheduleCallback(E.unstable_NormalPriority,If)))}var Hi=null;function hd(a){Hi!==a&&(Hi=a,E.unstable_scheduleCallback(E.unstable_NormalPriority,function(){Hi===a&&(Hi=null);for(var n=0;n<a.length;n+=3){var e=a[n],s=a[n+1],t=a[n+2];if(typeof s!="function"){if(ir(s||e)===null)continue;break}var i=Xe(e);i!==null&&(a.splice(n,3),n-=3,tc(i,{pending:!0,data:t,method:e.method,action:s},s,t))}}))}function Cs(a){function n(r){return _i(r,a)}be!==null&&_i(be,a),ye!==null&&_i(ye,a),Se!==null&&_i(Se,a),bt.forEach(n),yt.forEach(n);for(var e=0;e<Ae.length;e++){var s=Ae[e];s.blockedOn===a&&(s.blockedOn=null)}for(;0<Ae.length&&(e=Ae[0],e.blockedOn===null);)gd(e),e.blockedOn===null&&Ae.shift();if(e=(a.ownerDocument||a).$$reactFormReplay,e!=null)for(s=0;s<e.length;s+=3){var t=e[s],i=e[s+1],l=t[Ya]||null;if(typeof i=="function")l||hd(e);else if(l){var c=null;if(i&&i.hasAttribute("formAction")){if(t=i,l=i[Ya]||null)c=l.formAction;else if(ir(t)!==null)continue}else c=l.action;typeof c=="function"?e[s+1]=c:(e.splice(s,3),s-=3),hd(e)}}}function md(){function a(i){i.canIntercept&&i.info==="react-transition"&&i.intercept({handler:function(){return new Promise(function(l){return t=l})},focusReset:"manual",scroll:"manual"})}function n(){t!==null&&(t(),t=null),s||setTimeout(e,20)}function e(){if(!s&&!navigation.transition){var i=navigation.currentEntry;i&&i.url!=null&&navigation.navigate(i.url,{state:i.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,t=null;return navigation.addEventListener("navigate",a),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(e,100),function(){s=!0,navigation.removeEventListener("navigate",a),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),t!==null&&(t(),t=null)}}}function cr(a){this._internalRoot=a}Bi.prototype.render=cr.prototype.render=function(a){var n=this._internalRoot;if(n===null)throw Error(d(409));var e=n.current,s=cn();cd(e,s,a,n,null,null)},Bi.prototype.unmount=cr.prototype.unmount=function(){var a=this._internalRoot;if(a!==null){this._internalRoot=null;var n=a.containerInfo;cd(a.current,2,null,a,null,null),Si(),n[Qe]=null}};function Bi(a){this._internalRoot=a}Bi.prototype.unstable_scheduleHydration=function(a){if(a){var n=Gr();a={blockedOn:null,target:a,priority:n};for(var e=0;e<Ae.length&&n!==0&&n<Ae[e].priority;e++);Ae.splice(e,0,a),e===0&&gd(a)}};var vd=O.version;if(vd!=="19.2.8")throw Error(d(527,vd,"19.2.8"));G.findDOMNode=function(a){var n=a._reactInternals;if(n===void 0)throw typeof a.render=="function"?Error(d(188)):(a=Object.keys(a).join(","),Error(d(268,a)));return a=A(n),a=a!==null?Y(a):null,a=a===null?null:a.stateNode,a};var $f={bundleType:0,version:"19.2.8",rendererPackageName:"react-dom",currentDispatcherRef:b,reconcilerVersion:"19.2.8"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pi.isDisabled&&Pi.supportsFiber)try{Ls=Pi.inject($f),Ia=Pi}catch{}}return zt.createRoot=function(a,n){if(!C(a))throw Error(d(299));var e=!1,s="",t=Tu,i=Gu,l=ju;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(t=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),n=id(a,1,!1,null,null,e,s,null,t,i,l,md),a[Qe]=n.current,Yc(a),new cr(n)},zt.hydrateRoot=function(a,n,e){if(!C(a))throw Error(d(299));var s=!1,t="",i=Tu,l=Gu,c=ju,r=null;return e!=null&&(e.unstable_strictMode===!0&&(s=!0),e.identifierPrefix!==void 0&&(t=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(l=e.onCaughtError),e.onRecoverableError!==void 0&&(c=e.onRecoverableError),e.formState!==void 0&&(r=e.formState)),n=id(a,1,!0,n,e??null,s,t,r,i,l,c,md),n.context=ld(null),e=n.current,s=cn(),s=Wi(s),t=le(s),t.callback=null,ce(e,t,s),e=s,n.current.lanes=e,Ms(n,e),Ln(n),a[Qe]=n.current,Yc(a),new Bi(n)},zt.version="19.2.8",zt}var Cd;function oh(){if(Cd)return ur.exports;Cd=1;function E(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(E)}catch(O){console.error(O)}}return E(),ur.exports=rh(),ur.exports}var uh=oh();const Yi=[{code:"ar",nativeName:"العربية",englishName:"Arabic",htmlLang:"ar",dir:"rtl"},{code:"ru",nativeName:"Русский",englishName:"Russian",htmlLang:"ru",dir:"ltr"},{code:"uk",nativeName:"Українська",englishName:"Ukrainian",htmlLang:"uk",dir:"ltr"},{code:"ro",nativeName:"Română",englishName:"Romanian",htmlLang:"ro",dir:"ltr"},{code:"en",nativeName:"English",englishName:"English",htmlLang:"en",dir:"ltr"},{code:"fr",nativeName:"Français",englishName:"French",htmlLang:"fr",dir:"ltr"},{code:"es",nativeName:"Español",englishName:"Spanish",htmlLang:"es",dir:"ltr"},{code:"zh",nativeName:"中文",englishName:"Mandarin",htmlLang:"zh-Hans",dir:"ltr"},{code:"de",nativeName:"Deutsch",englishName:"German",htmlLang:"de",dir:"ltr"}],Ld="en";Yi.map(E=>E.code);function ph(E){return Yi.find(O=>O.code===E)??Yi.find(O=>O.code===Ld)}const hr=[{id:"welcome",num:"—",label:"Welcome"},{id:"quickstart",num:"★",label:"Get started in 60s"},{id:"launch",num:"1",label:"Launch screen"},{id:"signin",num:"2",label:"Signing in & registering"},{id:"language",num:"3",label:"Choosing your language"},{id:"menu",num:"4",label:"Main menu & exiting"},{id:"perfil",num:"5",label:"Perfil — profile"},{id:"editar",num:"6",label:"Editar Perfil"},{id:"categorias",num:"7",label:"Categorias — themes"},{id:"themed-games",num:"8",label:"Themed games"},{id:"scores",num:"9",label:"Classificações — scores"},{id:"sobre",num:"10",label:"Sobre a APP & privacy"},{id:"support",num:"11",label:"Support & contact"},{id:"glossary",num:"A",label:"Glossary"}],Fi=hr.map(E=>E.id),dh=hr.map(({id:E,num:O})=>({id:E,num:O}));function kn(E){return dh.map((O,R)=>({...O,label:E[R]??hr[R].label}))}const gh={en:{languageLabel:"Language",userManual:"User Manual",contents:"☰ Contents",toggleContents:"Toggle contents",tocAriaLabel:"Table of contents",documentTitle:"GoGenius — User Manual",toc:kn(["Welcome","Get started in 60s","Launch screen","Signing in & registering","Choosing your language","Main menu & exiting","Perfil — profile","Editar Perfil","Categorias — themes","Themed games","Classificações — scores","Sobre a APP & privacy","Support & contact","Glossary"])},ar:{languageLabel:"اللغة",userManual:"دليل المستخدم",contents:"☰ المحتويات",toggleContents:"إظهار أو إخفاء المحتويات",tocAriaLabel:"جدول المحتويات",documentTitle:"GoGenius — دليل المستخدم",toc:kn(["مرحباً","ابدأ في 60 ثانية","شاشة الإطلاق","تسجيل الدخول والتسجيل","اختيار لغتك","القائمة الرئيسية والخروج","Perfil — الملف الشخصي","Editar Perfil","Categorias — المواضيع","الألعاب الموضوعية","Classificações — النتائج","Sobre a APP والخصوصية","الدعم والتواصل","المسرد"])},ru:{languageLabel:"Язык",userManual:"Руководство пользователя",contents:"☰ Содержание",toggleContents:"Показать или скрыть содержание",tocAriaLabel:"Оглавление",documentTitle:"GoGenius — Руководство пользователя",toc:kn(["Добро пожаловать","Начните за 60 секунд","Экран запуска","Вход и регистрация","Выбор языка","Главное меню и выход","Perfil — профиль","Editar Perfil","Categorias — темы","Тематические игры","Classificações — результаты","Sobre a APP и конфиденциальность","Поддержка и контакты","Глоссарий"])},uk:{languageLabel:"Мова",userManual:"Посібник користувача",contents:"☰ Зміст",toggleContents:"Показати або сховати зміст",tocAriaLabel:"Зміст",documentTitle:"GoGenius — Посібник користувача",toc:kn(["Ласкаво просимо","Почніть за 60 секунд","Екран запуску","Вхід і реєстрація","Вибір мови","Головне меню і вихід","Perfil — профіль","Editar Perfil","Categorias — теми","Тематичні ігри","Classificações — результати","Sobre a APP і конфіденційність","Підтримка та контакти","Глосарій"])},ro:{languageLabel:"Limbă",userManual:"Manual de utilizare",contents:"☰ Cuprins",toggleContents:"Deschide sau închide cuprinsul",tocAriaLabel:"Cuprins",documentTitle:"GoGenius — Manual de utilizare",toc:kn(["Bine ați venit","Începeți în 60 de secunde","Ecranul de pornire","Autentificare și înregistrare","Alegerea limbii","Meniul principal și ieșirea","Perfil — profil","Editar Perfil","Categorias — teme","Jocuri tematice","Classificações — scoruri","Sobre a APP și confidențialitate","Asistență și contact","Glosar"])},fr:{languageLabel:"Langue",userManual:"Manuel d'utilisation",contents:"☰ Sommaire",toggleContents:"Afficher ou masquer le sommaire",tocAriaLabel:"Table des matières",documentTitle:"GoGenius — Manuel d'utilisation",toc:kn(["Bienvenue","Démarrer en 60 s","Écran de lancement","Connexion et inscription","Choisir votre langue","Menu principal et quitter","Perfil — profil","Editar Perfil","Categorias — thèmes","Jeux thématiques","Classificações — scores","Sobre a APP et confidentialité","Assistance et contact","Glossaire"])},es:{languageLabel:"Idioma",userManual:"Manual de usuario",contents:"☰ Contenido",toggleContents:"Mostrar u ocultar el contenido",tocAriaLabel:"Tabla de contenidos",documentTitle:"GoGenius — Manual de usuario",toc:kn(["Bienvenida","Empieza en 60 s","Pantalla de inicio","Iniciar sesión y registrarse","Elegir tu idioma","Menú principal y salir","Perfil — perfil","Editar Perfil","Categorias — temas","Juegos temáticos","Classificações — puntuaciones","Sobre a APP y privacidad","Soporte y contacto","Glosario"])},zh:{languageLabel:"语言",userManual:"用户手册",contents:"☰ 目录",toggleContents:"显示或隐藏目录",tocAriaLabel:"目录",documentTitle:"GoGenius — 用户手册",toc:kn(["欢迎","60 秒上手","启动界面","登录与注册","选择语言","主菜单与退出","Perfil — 个人资料","Editar Perfil","Categorias — 主题","主题游戏","Classificações — 成绩","Sobre a APP 与隐私","支持与联系","词汇表"])},de:{languageLabel:"Sprache",userManual:"Benutzerhandbuch",contents:"☰ Inhalt",toggleContents:"Inhalt ein- oder ausblenden",tocAriaLabel:"Inhaltsverzeichnis",documentTitle:"GoGenius — Benutzerhandbuch",toc:kn(["Willkommen","In 60 Sekunden starten","Startbildschirm","Anmelden & registrieren","Sprache wählen","Hauptmenü & Beenden","Perfil — Profil","Editar Perfil","Categorias — Themen","Themen-Spiele","Classificações — Ergebnisse","Sobre a APP & Datenschutz","Support & Kontakt","Glossar"])}},xd=Ta.createContext(null);function fh({children:E}){const[O,R]=Ta.useState(Ld),d=Ta.useCallback(J=>{R(J)},[]),C=ph(O),q=gh[O];Ta.useEffect(()=>{document.documentElement.lang=C.htmlLang,document.documentElement.dir=C.dir,document.title=q.documentTitle},[C.dir,C.htmlLang,q.documentTitle]);const F=Ta.useMemo(()=>({language:O,setLanguage:d,ui:q,dir:C.dir}),[O,d,q,C.dir]);return ga.jsx(xd.Provider,{value:F,children:E})}function Et(){const E=Ta.useContext(xd);if(!E)throw new Error("useLanguage must be used within LanguageProvider");return E}function hh(){const{language:E,setLanguage:O,ui:R}=Et();return ga.jsxs("div",{className:"lang-bar",role:"navigation","aria-label":R.languageLabel,children:[ga.jsx("span",{className:"lang-bar-label",id:"lang-bar-label",children:R.languageLabel}),ga.jsx("div",{className:"lang-bar-buttons",role:"group","aria-labelledby":"lang-bar-label",children:Yi.map(d=>{const C=E===d.code;return ga.jsx("button",{type:"button",className:`lang-btn${C?" is-active":""}`,"aria-pressed":C,"aria-label":d.englishName,lang:d.htmlLang,onClick:()=>O(d.code),children:d.nativeName},d.code)})})]})}const mh=`<header class="hero" id="welcome">
        <div class="eyebrow">Ual: Universidade Autónoma de Lisboa Luís de Camões </div>
        <h1>دليل GoGenius</h1>
        <p class="lede">GoGenius هو أول تطبيق مصمم لتعليم <strong>البرتغالية الأوروبية</strong>، خاصةً لمتحدثي تسع لغات رئيسية، ويمكن لأي شخص مهتم بالتعلم استخدامه. من خلال <strong>ألعاب موضوعية</strong> تغطي الاستماع والقراءة والكتابة، يرشدك هذا الدليل عبر كل شاشة وكل زر.</p>

        <div class="call tip">
          <span class="tag">قبل أن تبدأ</span>
          للحصول على أفضل تجربة، وصّل سماعات الرأس أو <strong>سماعات بلوتوث</strong> بهاتفك أو جهازك اللوحي قبل فتح GoGenius. تأكد من تشغيل الصوت عبر تلك السماعات — تعتمد ألعاب كثيرة على الاستماع، والصوت الواضح يساعدك على متابعة التعليمات وأنشطة النطق دون تشتيت.
        </div>
  
        <div class="langstrip" aria-label="اللغات المصدر المدعومة">
          <span class="lang">العربية</span><span class="lang">الروسية</span><span class="lang">الأوكرانية</span>
          <span class="lang">الرومانية</span><span class="lang">الإنجليزية</span><span class="lang">الفرنسية</span>
          <span class="lang">الإسبانية</span><span class="lang">الصينية المندرينية</span><span class="lang">الألمانية</span>
        </div>
        <div class="factbar">
          <div class="fact"><div class="n">14</div><div class="l">ألعاب موضوعية</div></div>
          <div class="fact"><div class="n">A1&rarr;B2</div><div class="l">مستويات المتعلم</div></div>
          <div class="fact"><div class="n">7+</div><div class="l">العمر الموصى به</div></div>
        </div>
        <p class="intro-note" style="margin-top:1.6rem;">صُمم GoGenius للمهاجرين واللاجئين المقيمين في البرتغال، ولمتعلمي البرتغالية في أي مكان، وللمدارس التي تستخدمه كأداة صفّية. يعمل على هواتف وأجهزة لوحية وحواسيب Android (عبر محاكي Android على الحاسوب). تحميل واحد يفتح كل الوحدات — <strong>بدون اشتراك</strong>.</p>
        <p class="intro-note">تم تصميم GoGenius أيضًا لتكون شاملة: تتضمن كل لعبة نسخة مكتوبة من هدفها وتعليمات للمتعلمين الصم وضعاف السمع، ويمكن إعادة تشغيل أي عنصر بلغتك الخاصة أو باللغة البرتغالية الأوروبية كلما احتجت إليه.</p>
        <p class="intro-note">تم إنشاء النموذج التعليمي بواسطة <strong>PhD Sandra Figueiredo</strong></p>
      </header>

      <!-- QUICK START -->
      <section id="quickstart">
        <div class="quickstart">
          <div class="qs-eyebrow">ابدأ · 60 ثانية</div>
          <div class="qs-title">الصعود في دقيقة واحدة</div>
          <ul>
            <li><strong>خمس دقائق يوميا تكفي.</strong> أكمل مهام اليوم في حوالي خمس دقائق - استمر في ذلك ويمكنك الانتقال من A2 إلى B1 في شهرين تقريبًا.</li>
            <li><strong>تعلم معا.</strong> تعمل التمارين بشكل جيد في مجموعة كما تفعل بمفردك.</li>
            <li><strong>مصنوعة للفصل الدراسي.</strong> يمكن للمعلمين تشغيل الألعاب في الفصل وتحويلها إلى اختبار للمجموعة بأكملها.</li>
          </ul>
        </div>
      </section>

      <!-- 1 LAUNCH -->
      <section id="launch">
        <h2><span class="sec-num">01</span>إطلاق الشاشة</h2>
        <p>عند فتح GoGenius، يتم الترحيب بك من خلال شاشة الترحيب — الشعار الموجود فوق شريط &ldquo;hello&rdquo; الدافئ بالعديد من اللغات. بعد لحظة يأخذك إلى اختيار اللغة.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-01.jpg" alt="شاشة ترحيب GoGenius مع الشعار فوق خطوط اللغة الملونة"></div><figcaption>شاشة الترحيب GoGenius.</figcaption></figure>
      </section>

      <!-- 2 SIGN IN -->
      <section id="signin">
        <h2><span class="sec-num">02</span>تسجيل الدخول تسجيل &amp;</h2>
        <p>التالي يأتي <span class="pt">Bem-Vindo!</span> (<em>مرحباً!</em>) شاشة. إذا كان لديك حساب بالفعل، قم بتسجيل الدخول هنا؛ إذا كانت هذه هي المرة الأولى لك، قم بإنشاء واحدة.</p>
        <h3>إذا كان لديك حساب بالفعل</h3>
        <p>أدخل الخاص بك <span class="pt">E-mail</span> و <span class="pt">Password</span>، ثم اضغط على <span class="btn-name">Entrar</span> (تسجيل الدخول). اضغط على <strong>أيقونة العين</strong> للتحقق مما كتبته. هل نسيت كلمة المرور الخاصة بك؟ مقبض <span class="btn-name">Recuperar Password</span> (استعادة كلمة المرور) لإعادة تعيينها عن طريق البريد الإلكتروني.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-02.jpg" alt="شاشة تسجيل الدخول مع حقول البريد الإلكتروني وكلمة المرور وأزرار Entrar وRegistar"></div><figcaption>شاشة تسجيل الدخول — قم بتسجيل الدخول، أو انقر فوق تسجيل لإنشاء حساب.</figcaption></figure>
        <h3>إذا كنت جديدًا – قم بالتسجيل</h3>
        <p>مقبض <span class="btn-name">Registar</span> (تسجيل) لفتح نموذج التسجيل (<span class="pt">Entrar com o E-mail</span>). املأ التفاصيل الخاصة بك وانقر فوق <span class="btn-name">Registar</span> لإنهاء.</p>
        <table class="tbl">
          <thead><tr><th>مجال</th><th>معنى</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Idade</span></td><td>عمر</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>الجنس (القائمة المنسدلة)</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>جنسية</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                المنطقة / المدينة
                <br>
                <span style="color:#666;font-size:0.96em;">
                  من أين يمكنك الوصول إلى التطبيق؟
                </span>
              </td>
            </tr>

            <tr><td><span class="btn-name">E-mail</span></td><td>عنوان البريد الإلكتروني</td></tr>
            <tr><td><span class="btn-name">Password</span></td><td>كلمة المرور</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>تأكيد كلمة المرور</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-03.jpg" alt="نموذج التسجيل مع حقول Idade وSexo وNacionalidade وLocalidade والبريد الإلكتروني وكلمة المرور"></div><figcaption>استمارة التسجيل</figcaption></figure>
        <div class="call note">
          <span class="tag">قم بتأكيد بريدك الإلكتروني</span>
          بعد التسجيل، يرسل GoGenius رسالة <strong>تأكيد البريد الإلكتروني</strong> إلى العنوان الذي أعطيته. افتحه واتبع الرابط لتنشيط حسابك قبل تسجيل الدخول. إذا لم يكن موجودًا في صندوق الوارد الخاص بك خلال بضع دقائق، فتحقق من مجلد الرسائل غير المرغوب فيها أو البريد غير المرغوب فيه.
        </div>
      </section>

      <!-- 3 LANGUAGE -->
      <section id="language">
        <h2><span class="sec-num">03</span>اختيار لغتك</h2>
        <p>اختر اللغة التي تتحدثها بالفعل. تظهر المطالبة باللغتين البرتغالية والإنجليزية - <span class="pt">Escolhe a tua língua</span> / <em>اختر لغتك</em>.</p>
        <p>اضغط على <strong>&lsaquo;</strong> و <strong>&rsaquo;</strong> الأسهم للتنقل بين الأعلام حتى تصل إلى أعلامك، ثم اضغط على <span class="btn-name">Ok</span>. يدعم GoGenius تسع لغات مصدر: الإنجليزية والإسبانية والعربية والماندرين والروسية والرومانية والأوكرانية والألمانية والفرنسية.</p>
        
        <figure class="shot"><div class="phone"><img src="/arabic.png" alt="شاشة اختيار اللغة مع دائرة العلم وزر موافق"></div><figcaption>انتقل إلى العلم الخاص بك باستخدام الأسهم، ثم اضغط على "موافق".</figcaption></figure>
        <p>كل لغة من هذه اللغات التسع هي <strong>لغة الدعم</strong> - فهو موجود لمساعدتك في اتباع التعليمات، بينما يظل كل ما تتعلمه بالفعل باللغة البرتغالية الأوروبية. هذا التركيز هو ما يميز GoGenius: فمعظم تطبيقات تعلم اللغة البرتغالية تقوم بتدريس اللغة البرتغالية <strong>برازيلية</strong> والتي تختلف بشكل ملحوظ في النطق والمفردات والقواعد، والعديد من الألعاب اللغوية ليست مصممة للتدريس الحقيقي على الإطلاق. تم تصميم GoGenius خصيصًا كأداة تعليمية للغة البرتغالية الأوروبية.</p>
        <div class="call note">
          <span class="tag">لماذا تبقى الواجهة باللغة البرتغالية</span>
          يقوم اختيارك بتعيين اللغة المستخدمة للتعليمات والترجمات - ولكن تظل أسماء الأزرار والقوائم باللغة البرتغالية عن قصد. يعد العثور على طريقك عبر الواجهة البرتغالية جزءًا من الانغماس، والكلمات التي تلتقطها من القوائم (<span class="pt">perfil</span>, <span class="pt">categorias</span>, <span class="pt">atualizar</span>) هي الكلمات التي ستستخدمها في الحياة الحقيقية. يمنحك هذا الدليل المعنى الإنجليزي لكل زر أثناء التنقل.
        </div>
      </section>

      <!-- 4 MENU -->
      <section id="menu">
        <h2><span class="sec-num">04</span>الخروج من القائمة الرئيسية &amp;</h2>
        <p>القائمة الرئيسية هي المحور الخاص بك. ثلاثة أشرطة ملونة تفتح كل منها منطقة واحدة:</p>
        <table class="tbl">
          <thead><tr><th>زر</th><th>معنى</th><th>ماذا يفعل</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>حساب تعريفي</td><td>حسابك، وعشرات، ومعلومات التطبيق</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>فئات</td><td>الألعاب ذات الطابع الخاص - حيث تتعلم وتلعب</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>مترجم</td><td>يفتح Google Translate</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-04.jpg" alt="القائمة الرئيسية مع فرق Perfil وCategorias وTradutor"></div><figcaption>القائمة الرئيسية: Perfil، الفئات، Tradutor.</figcaption></figure>
        <div class="call note">
          <span class="tag">ملاحظة على Tradutor</span>
          هذا يفتح <strong>Google Translate</strong>، ويخرجك من GoGenius. استخدم إيماءة الرجوع بجهازك للعودة.
        </div>
        <h3>الخروج من التطبيق</h3>
        <p>اضغط على <strong>أحمر X</strong> في الزاوية اليمنى السفلى. يسأل GoGenius <span class="pt">Deseja sair da GoGenius?</span> (<em>هل تريد مغادرة GoGenius؟</em>). مقبض <span class="btn-name">Sim</span> (نعم) لإغلاق التطبيق، أو <span class="btn-name">Não</span> (لا) بالبقاء.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-05.jpg" alt="قم بالخروج من مربع حوار التأكيد مع مطالبتك بمغادرة GoGenius باستخدام زري Sim وNão"></div><figcaption>تأكيد الخروج: Sim (نعم) أو Não (لا).</figcaption></figure>
      </section>

      <!-- 5 PERFIL -->
      <section id="perfil">
        <h2><span class="sec-num">05</span>بيرفيل - ملفك الشخصي</h2>
        <p>التنصت <span class="pt">Perfil</span> من القائمة الرئيسية تفتح قائمة صغيرة بها ثلاثة اختيارات:</p>
        <table class="tbl">
          <thead><tr><th>خيار</th><th>يفتح</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>قم بتحرير تفاصيل حسابك (انظر القسم التالي)</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>علاماتك والتصنيفات الخاصة بك</td></tr>
            <tr><td><span class="btn-name">Sobre a APP / Políticas de Privacidade</span></td><td>حول سياسة خصوصية التطبيق &amp;</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-06.jpg" alt="قائمة Perfil تعرض خيارات Perfil وClassificações وSobre a APP"></div><figcaption>قائمة Perfil وخياراتها الثلاثة.</figcaption></figure>
      </section>

      <!-- 6 EDITAR PERFIL -->
      <section id="editar">
        <h2><span class="sec-num">06</span>Editar Perfil — تحرير التفاصيل الخاصة بك</h2>
        <p>ال <span class="pt">Editar Perfil</span> الشاشة هي المكان الذي يمكنك من خلاله عرض معلومات حسابك وتغييرها.</p>
        <table class="tbl">
          <thead><tr><th>مجال</th><th>معنى</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Sexo</span></td><td>الجنس (القائمة المنسدلة)</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>عمر</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>جنسية</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>العنوان / الموقع</td></tr>
            <tr><td><span class="btn-name">Password Atual</span></td><td>كلمة المرور الحالية</td></tr>
            <tr><td><span class="btn-name">Password Nova</span></td><td>كلمة المرور الجديدة</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>تأكيد كلمة المرور الجديدة</td></tr>
          </tbody>
        </table>
        <p>لن تحتاج إلى حقول كلمة المرور الثلاثة إلا إذا كنت تغير كلمة المرور الخاصة بك، وإلا اتركها فارغة. اضغط على <strong>أيقونة العين</strong> بجانب حقل كلمة المرور لإظهار أو إخفاء ما كتبته.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-07.jpg" alt="نموذج تحرير الملف الشخصي مع الحقول وأزرار Atualizar وTerminar Sessão وEliminar Perfil"></div><figcaption>نموذج Editar Perfil وأزرار الإجراءات الثلاثة الخاصة به.</figcaption></figure>
        <h3>أزرار الإجراءات</h3>
        <table class="tbl">
          <thead><tr><th>زر</th><th>معنى</th><th>ماذا يفعل</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Atualizar</span></td><td>تحديث</td><td>يحفظ التغييرات التي أجريتها أعلاه</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>تسجيل الخروج</td><td>يقوم بتسجيل خروجك من حسابك</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>حذف الملف الشخصي</td><td>حذف حسابك نهائيًا</td></tr>
          </tbody>
        </table>
        <div class="call warn">
          <span class="tag">Eliminar Perfil دائم</span>
          يؤدي حذف ملف التعريف الخاص بك إلى إزالة حسابك بالإضافة إلى تقدمك ونتائجك المتراكمة. لا يمكن التراجع عن هذا.
        </div>
      </section>

            <!-- 7 CATEGORIAS (THEMES) -->
      <section id="categorias">
        <h2><span class="sec-num">07</span>الفئات - المواضيع</h2>
        <p><span class="pt">Categorias</span> هي قلب GoGenius: الألعاب الـ 14 التي يتكون منها المنهج الدراسي. يأخذ كل موضوع موضوعًا يوميًا ويبني مجموعة من التمارين حوله. تتضمن بعض السمات التي ستجدها، على سبيل المثال لا الحصر، ما يلي:</p>
        <div class="themes">
          <span class="theme">A minha gente <span class="en">· عائلتي</span></span>
          <span class="theme">Onde moro <span class="en">· أين أعيش</span></span>
          <span class="theme">O que visto <span class="en">· ما أرتديه</span></span>
          <span class="theme">Movendo-me <span class="en">· التجول</span></span>
          <span class="theme">Natura <span class="en">· طبيعة</span></span>
          <span class="theme">Eu, Hoje e no Futuro <span class="en">· أنا اليوم &amp; المستقبل</span></span>
        </div>
        <p>مهما كان الموضوع الذي تدخله، يتم تنظيم التعلم حول نفس مجالات المهارات الثلاثة - البنية الحقيقية للتطبيق. يقوم كل منهم بتدريب كفاءة مختلفة ويقدم لك الحلول أثناء تقدمك:</p>
        <div class="skills">
          <div class="skill fone"><div class="name">Fonê</div><div class="role">الفهم الشفهي</div><p><span class="pt">Exercícios de Compreensão Oral</span> - أنشطة الاستماع وعلم الأصوات.</p></div>
          <div class="skill lex"><div class="name">Lex</div><div class="role">قراءة</div><p><span class="pt">Exercícios de Leitura</span> — ممارسة القراءة باللغة البرتغالية الأوروبية، مع الحلول.</p></div>
          <div class="skill graph"><div class="name">Graph</div><div class="role">كتابة</div><p><span class="pt">Exercícios de Escrita</span> - كتابة الأنشطة مع الحلول العملية.</p></div>
        </div>
        <p>ستقابل هذه الأسماء الثلاثة مرة أخرى داخل كل لعبة وعلى لوحة النتائج الخاصة بك، حيث يتم تتبع تقدمك في كل منها (انظر <span class="pt">Classificações</span>). يستعرض القسم التالي موضوعًا كاملاً حتى تتمكن من رؤيته أثناء العمل.</p>
      </section>

      <!-- 8 THEMED GAMES -->
      <section id="themed-games">
        <h2><span class="sec-num">08</span>ألعاب تحت عنوان - تجول</h2>
        <p>يتبع هذا القسم مثالاً للعبة ذات طابع خاص يمكنك اختيارها، <span class="pt">A minha gente</span>، من الرف الدائري إلى التمارين، حتى تتمكن من رؤية كيفية عمل اللعبة فعليًا.</p>
        <h3>1 · تصفح وفتح الموضوع</h3>
        <p>يتم فتح الفئات على شكل دائرة متعرجة من دوائر الفئات. اسحب على طول المسار للتنقل بين السمات واضغط على دائرة لفتح واحدة؛ علامة التبويب التي تنزلق إلى اليمين (هنا، <span class="pt">A minha gente</span>) يعرض المظهر الذي أنت على وشك الدخول إليه. رمزا الجهاز اللوحي الصغيران الموجودان في الزاوية العلوية اليمنى هما مفتاح تبديل اللغة (موضح أدناه)، والرمز الأحمر <strong>علامة استفهام</strong> يفتح الزر فهرسًا لما يفعله كل زر في التطبيق - اجعله في متناول يدك كمرجع.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-08.jpg" alt="الفئات الدائرية لأزرار الفئات الدائرية على طول مسار منحني"></div>
            <figcaption>مكتبة الفئات - اضغط على دائرة لفتح موضوع.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-09.jpg" alt="فهرس الأزرار مفتوح بعلامة الاستفهام الحمراء موضحا Graph و Lex و Fonê والأزرار الأخرى"></div>
            <figcaption>الأحمر ؟ يفتح هذا الفهرس لكل زر.</figcaption>
          </figure>
        </div>
        <p>يعد الفهرس بمثابة وسيلة إيضاح مفيدة: فهو يذكر أنواع التمارين الثلاثة - <span class="pt">Graph</span> (كتابة)، <span class="pt">Lex</span> (القراءة) و <span class="pt">Fonê</span> (الفهم الشفهي) - جنبا إلى جنب <span class="pt">Sair</span> (مخرج)، <span class="pt">Solução</span> (حل)، <span class="pt">Saber mais</span> (مزيد من المعلومات)، <span class="pt">Info</span>، وأيقونة إمكانية الوصول لضعاف السمع، وقوائم اللغتين (<span class="pt">Menu em Português Europeu</span> و <span class="pt">Menu Escolher Outras Línguas</span>).</p>
        <h3>2 · اختر لعبة</h3>
        <p>أغلق الفهرس واضغط على <span class="pt">A minha gente</span> سمة. تظهر قائمة صغيرة بألعاب هذا الموضوع — بالإضافة إلى لعبة تمهيدية <span class="pt">Graph</span>, <span class="pt">Lex</span> و <span class="pt">Fonê</span>، ولكل منها خاصتها <span class="pt">Jogar</span> زر (تشغيل). يمكنك لعبها بأي ترتيب، ولكن من الأفضل أن تبدأ باللعبة <strong>قلب</strong> زر - اللعبة التمهيدية.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-10.jpg" alt="قائمة ألعاب ذات طابع A minha gente مع قلب ودوائر Graph وLex وFonê، كل منها مزود بزر Jogar"></div><figcaption>ألعاب الموضوع - ابدأ بلعبة القلب (المقدمة).</figcaption></figure>
        <h3>3 · داخل اللعبة</h3>
        <p>إليك ما تبدو عليه اللعبة التمهيدية أثناء اللعب. قم بسحب وإسقاط علامات التبويب السفلية على الشخص المقابل (<span class="pt">Pai</span>, <span class="pt">Avô</span>, <span class="pt">Filhos/Irmãos</span>, <span class="pt">Mãe</span>, <span class="pt">Avó</span>) للعمل من خلال مفردات الأسرة. يوجد زران دائريان في الزاوية اليمنى السفلية، ويقوم رمزا الجهاز اللوحي الموجودان في الجزء العلوي الأيمن بتبديل اللغة (انظر الملاحظة أدناه).</p>
        <p>ال <strong>+ زر</strong> يفتح أ <span class="pt">Vocabulário</span> لوحة تسرد كل كلمة سيعلمها النشاط - مرجع مفيد قبل البدء. ال <strong>زر الأذن</strong> يظهر هدف النشاط وتعليماته كما <strong>نص</strong>: إنها ميزة إمكانية الوصول (عنوان <span class="pt">Portador de Deficiência Auditiva</span>، &ldquo;شخص يعاني من ضعف السمع&rdquo;) حتى يتمكن المتعلمون الصم وضعاف السمع من قراءة ما يجب عليهم فعله بالضبط.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-11.jpg" alt="شاشة لعبة A minha gente تحتوي على صور عائلية، وعلامات تبويب أفراد العائلة، وأزرار الزائد والأذن، وأيقونة الكمبيوتر اللوحي بلغتين في أعلى اليمين"></div><figcaption>لعبة قيد التشغيل، مع وجود رمزي اللغة في أعلى اليمين.</figcaption></figure>
        <p>في أي لحظة أثناء نشاط أو لعبة، انظر إلى أسفل وسط الشاشة: سهم صغير <strong>يشير إلى الأعلى</strong> يفتح قائمة سريعة إلى <span class="pt">Perfil</span> و<span class="pt">Categorias</span> و<span class="pt">Tradução</span> أو العودة إلى <span class="pt">Menu</span> الرئيسي — حتى تنتقل بين هذه الأقسام دون البحث في التطبيق.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-23.jpg" alt="القائمة السفلية مفتوحة أثناء اللعب وتعرض اختصارات Perfil وCategorias وTradução وMenu"></div><figcaption>يفتح السهم لأعلى هذه القائمة من أي نشاط أو لعبة.</figcaption></figure>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-12.jpg" alt="لوحة Vocabulário تسرد مفردات العائلة، ويتم فتحها بواسطة زر علامة الجمع"></div>
            <figcaption>قائمة <span class="pt">Vocabulário</span> التي يفتحها زر <span class="pt">+</span>.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-13.jpg" alt="لوحة تعليمات نصية مفتوحة بواسطة زر الأذن، بعنوان Portador de Deficiência Auditiva"></div>
            <figcaption>تعليمات نصية لزر الأذن.</figcaption>
          </figure>
        </div>
        <div class="call note">
          <span class="tag">استمع إليها مرة أخرى - بلغتك أو باللغة البرتغالية</span>
          كل لعبة ثنائية اللغة. في <strong>الزاوية العلوية اليمنى</strong> سترى رمزين لوحيين صغيرين. اضغط على <strong>قرص الكرة الأرضية</strong> (<span class="pt">Menu Escolher Outras Línguas</span>) لسماع العنصر الحالي أو قراءته مرة أخرى بلغتك، أو <strong>قرص يحمل علم البرتغال</strong> (<span class="pt">Menu em Português Europeu</span>) لتبديلها مرة أخرى إلى البرتغالية الأوروبية. انتقل ذهابًا وإيابًا بقدر ما تحتاج إليه - لا يقيدك التطبيق مطلقًا بلغة واحدة.
        </div>
        <h3>4 · Graph، Lex &amp; Fonê</h3>
        <p>بعد اللعبة التمهيدية، تنتقل إلى تمارين المهارات الثلاثة الخاصة بالموضوع — <span class="pt">Graph</span> (كتابة)، <span class="pt">Lex</span> (القراءة) و <span class="pt">Fonê</span> (الفهم الشفهي).</p>

        <p>يركّز <span class="pt">Graph</span> على مهاراتك في <strong>الكتابة</strong>. إليك كيف يعمل في موضوع <span class="pt">A minha gente</span>:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-17.jpg" alt="نشاط كتابة Graph مع مساحة A tua resposta وزر المصباح الأحمر"></div><figcaption><span class="pt">Graph</span> — اضغط على <span class="pt">A tua resposta...</span> لبدء الكتابة.</figcaption></figure>
        <p>مرة أخرى، يتيح لك رمزا الجهاز اللوحي في الزاوية العلوية اليمنى سماع تعليمات النشاط: زر <strong>خريطة العالم</strong> يشغّلها بلغتك، وزر <strong>علم البرتغال</strong> يشغّلها بالبرتغالية.</p>
        <p>بعد سماع التعليمات، اضغط على المنطقة ذات اللون الخوخي حيث يظهر <span class="pt">A tua resposta...</span> («إجابتك...») وابدأ الكتابة. يُنصح بشدة بإضافة لوحة مفاتيح برتغالية على جهازك — على iPhone مثلاً يمكنك تفعيل تخطيط برتغالي للحفاظ على النبرات والقواعد والإملاء الصحيحة.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-18.jpg" alt="حقل إجابة Graph مع لوحة مفاتيح برتغالية مفتوحة"></div>
            <figcaption>لوحة المفاتيح مفتوحة للكتابة</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-19.jpg" alt="Graph مع إجابة مكتوبة بالبرتغالية وعلامة الاختيار الزرقاء للإرسال"></div>
            <figcaption>الإجابة جاهزة — اضغط علامة الاختيار الزرقاء للإرسال.</figcaption>
          </figure>
        </div>
        <p>عندما تنتهي من الكتابة، اضغط على <strong>علامة الاختيار الزرقاء</strong>. ثم قارن إجابتك بالحل: انظر إلى الزاوية السفلية اليمنى واضغط على <strong>المصباح الأحمر</strong>. يظهر لوحة <span class="pt">Solução</span> مع إجابة نموذجية.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-20.jpg" alt="لوحة Solução في Graph مع الإجابة النموذجية وزر Obrigado"></div><figcaption>يفتح المصباح الأحمر <span class="pt">Solução</span> — قارن ثم اضغط <span class="pt">Obrigado</span>.</figcaption></figure>
        <div class="call tip">
          <span class="tag">طابق المعنى لا كل كلمة</span>
          لا تقلق إذا اختلفت إجابتك عن الحل. الأهم أن يتشابكا في المعنى والقواعد والنحو السليمين، وأن ينقلا الرسالة نفسها.
        </div>
        <p><span class="pt">Lex</span> هو تمرين قراءة بالبرتغالية الأوروبية مع دعم مدمج. كما من قبل، يتيح لك رمزا الجهاز اللوحي في أعلى اليمين سماع التعليمات بلغتك الأم (خريطة العالم) أو بالبرتغالية (علم البرتغال).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-21.jpg" alt="نشاط قراءة Lex مع النص البرتغالي وعلامة تبويب Dicionário مغلقة"></div>
            <figcaption>نص القراءة</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-22.jpg" alt="Lex مع Dicionário مفتوح يعرض تعريف كلمة مفتاحية بالبرتغالية"></div>
            <figcaption><span class="pt">Dicionário</span> مفتوح مع شرح كلمة.</figcaption>
          </figure>
        </div>
        <p>يُعطى لك نص قصير لتقرأه وتفهمه. اقرأه <strong>بصوت عالٍ</strong> — فهذا يعزّز المحادثة والنطق وصوت البرتغالية الأوروبية.</p>
        <p>أسفل النص يوجد تبويب برتقالي <span class="pt">Dicionário</span> (قاموس). اضغط عليه لفتح كلمات وعبارات مفتاحية من النص مشروحة بالبرتغالية — مفيد عندما تكون الكلمة جديدة.</p>
        <p><strong>المصباح الأحمر</strong> في الزاوية السفلية اليمنى يشغّل النص بصوت عالٍ بالبرتغالية فور الضغط عليه. استخدمه كنموذج للصوت، ثم تمرّن على القراءة معه.</p>
        <div class="call tip">
          <span class="tag">اقرأ، اسمع، انطق — ثم كرّر</span>
          هدف <span class="pt">Lex</span> هو القراءة والاستماع والنطق بلهجة البرتغالية الأوروبية (PT). تمرّن كثيراً، واقرأ النص دائماً بصوت عالٍ.
        </div>
        <p>يركّز <span class="pt">Fonê</span> على <strong>الفهم الشفهي</strong> — <span class="pt">Exercícios de Compreensão Oral</span>: أنشطة استماع وعلم الأصوات.</p>
        <p>مرة أخرى، يتيح لك رمزا الجهاز اللوحي في أعلى اليمين سماع التعليمات بلغتك الأم (خريطة العالم) أو بالبرتغالية الأوروبية (علم البرتغال).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-24.jpg" alt="شاشة أسئلة Fonê مع زر القرص الأبيض وخيارات غير محددة"></div>
            <figcaption>جاهز للاستماع</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-25.jpg" alt="شاشة أسئلة Fonê أثناء تشغيل المحادثة"></div>
            <figcaption>اضغط القرص الأبيض لبدء المحادثة.</figcaption>
          </figure>
        </div>
        <p>اضغط على <strong>القرص الأبيض</strong> بجانب <span class="pt">Questões</span> لتشغيل المحادثة التي ستستخدمها للإجابة. عند اختياره يصبح القرص رمادياً قليلاً وتبدأ المحادثة.</p>
        <p>بعد الاستماع، أعد تشغيلها <strong>مرتين أو ثلاثاً</strong> حتى تفهمها، ثم حدّد الإجابات الصحيحة (<span class="pt">Assinale a resposta correta</span>).</p>
        <div class="call tip">
          <span class="tag">الأسئلة تبقى بالبرتغالية الأوروبية</span>
          أسئلة التأمل هذه دائماً بالبرتغالية الأوروبية. جهّز Google Translate أو تطبيق الترجمة المفضل — نترجم هذه الوحدة الأولى أدناه، ولاحقاً ستفعل ذلك بنفسك. عادة جيدة. يمكنك أيضاً فتح <span class="pt">Tradução</span> من قائمة السهم في الأسفل.
        </div>
        <p>إليك الأسئلة والخيارات مع الترجمة إلى العربية:</p>
        <table class="tbl">
          <thead><tr><th>البرتغالية</th><th>العربية</th></tr></thead>
          <tbody>

            <tr>
              <td>
                <span class="btn-name">1. O Filipe perguntou ao João se:</span><br>
                · Não ia haver aula de Português.<br>
                · Não ia haver aula de História.<br>
                · Não ia ter teste de História.
              </td>
              <td>
                1. سأل فيليبي جواو إن كان:<br>· لن تكون هناك حصة برتغالية.<br>· لن تكون هناك حصة تاريخ.<br>· لن يكون هناك اختبار تاريخ.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">2. O João vai faltar à aula porque:</span><br>
                · Não lhe apetece ir.<br>
                · Tem de ir à praia.<br>
                · Tem de ir ao dentista.
              </td>
              <td>
                2. سيتغيب جواو عن الحصة لأن:<br>· لا يريد الذهاب.<br>· عليه الذهاب إلى الشاطئ.<br>· عليه الذهاب إلى طبيب الأسنان.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">3. A aula de História:</span><br>
                · Não ia haver no dia seguinte.<br>
                · Foi adiada para a tarde.<br>
                · Foi adiada para a noite.
              </td>
              <td>
                3. حصة التاريخ:<br>· لن تكون في اليوم التالي.<br>· أُجّلت إلى بعد الظهر.<br>· أُجّلت إلى المساء.
              </td>
            </tr>
          </tbody>
        </table>
        <p>لقد وضعنا الإجابات مسبقاً لهذه الوحدة الأولى لمساعدتك:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-26.jpg" alt="Fonê answers selected"></div><figcaption>إجابات نموذجية محددة — اضغط <span class="pt">continuar</span> عندما تكون جاهزاً.</figcaption></figure>
        <ol>
          <li><span class="pt">Não ia haver aula de História.</span> — لن تكون هناك حصة تاريخ.</li>
          <li><span class="pt">Tem de ir ao dentista.</span> — عليه الذهاب إلى طبيب الأسنان.</li>
          <li><span class="pt">Foi adiada para a noite.</span> — أُجّلت إلى المساء.</li>
        </ol>
        <p>كما في <span class="pt">Lex</span>، يعرض تبويب برتقالي <span class="pt">Dicionário</span> المفردات الأساسية. اضغط عليه لفتح التعريفات بالبرتغالية.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-27.jpg" alt="Fonê مع Dicionário مفتوح يعرض تعريف apontamentos"></div>
            <figcaption><span class="pt">Dicionário</span> مفتوح مع شرح كلمة مفتاحية.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-29.jpg" alt="Fonê مع إجابات محددة وDicionário مفتوح"></div>
            <figcaption>إجابات محددة مع فتح <span class="pt">Dicionário</span>.</figcaption>
          </figure>
        </div>
        <p><strong>زر الأذن الأحمر</strong> في أسفل اليمين ميزة وصول: يعرض المحادثة نصاً (بعنوان <span class="pt">Portador de Deficiência Auditiva</span>). إن كانت كلمة أو عبارة غير واضحة، استخدم المترجم أو ملاحظاتك.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-28.jpg" alt="طبقة وصول Fonê مع النص المكتوب للمحادثة"></div><figcaption>يفتح زر الأذن المحادثة المكتوبة — اضغط <span class="pt">Obrigado</span> للإغلاق.</figcaption></figure>
        <p>عندما تنتهي من الأسئلة، اضغط <span class="pt">continuar</span> (متابعة) في الأسفل للانتقال إلى الجزء التالي من <span class="pt">Fonê</span>.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-32.jpg" alt="شاشة Fonê مع إجابات محددة وDicionário مفتوح ورابط continuar"></div><figcaption>اضغط <span class="pt">continuar</span> للانتقال إلى الممارسة الصوتية.</figcaption></figure>
        <p>يشمل <span class="pt">Fonê</span> أيضاً ممارسة صوتية: دوائر كلمات، و<strong>مصباح أحمر</strong> للحل، ونفس زر الأذن للدعم النصي — مثلاً لتهجئة كلمات العائلة.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-30.jpg" alt="شاشة أصوات Fonê مع دوائر Família وPai وMãe وFilho"></div>
            <figcaption>ممارسة صوتية</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-31.jpg" alt="لوحة وصول Fonê تطلب تهجئة الكلمات"></div>
            <figcaption>تعليمات نصية لزر الأذن.</figcaption>
          </figure>
        </div>
        <div class="call tip">
          <span class="tag">استمع أكثر من مرة</span>
          يتحسّن الفهم الشفهي بالتكرار. أعد تشغيل القرص، راجع <span class="pt">Dicionário</span>، واستخدم نص زر الأذن متى احتجت إعادة النظر في الحوار.
        </div>
        <h3>5 · أبعد من هذا الدليل</h3>
        <p>ما اتبعته للتو في <span class="pt">A minha gente</span> ينطبق على أي موضوع أو نشاط في GoGenius، مع اختلافات بسيطة. الأنشطة واضحة إلى حد كبير، ولديك بالفعل أدوات النجاح: تعليمات ثنائية اللغة، وقائمة السهم السفلية، و<span class="pt">Dicionário</span>، والحلول، ونص إمكانية الوصول، و<span class="pt">Tradução</span> عند الحاجة.</p>
        <p>إذا كان شيء في التطبيق غير واضح، فعد إلى هذا الدليل — أو تواصل معنا عبر <a href="#support">Support &amp; contact</a>. نحن هنا لمساعدتك في رحلة تعلّم البرتغالية الأوروبية.</p>
        <div class="call tip">
          <span class="tag"><span class="pt">Boa sorte!</span> · حظاً موفقاً</span>
          استمتع بالألعاب — واستمر في التمرين.
        </div>
      </section>

<!-- 7 CLASSIFICACOES -->
      <section id="scores">
        <h2><span class="sec-num">09</span>Classificações — يسجل تصنيفات &amp;</h2>
        <p>وصلت من خلال <span class="pt">Perfil ▸ Classificações</span>، هذه هي لوحة النتائج الخاصة بك. يسرد كل موضوع في التطبيق. انقر فوق واحدة لتوسيعها ومعرفة ما قمت به.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-14.jpg" alt="قائمة تصنيفات المواضيع مع الرموز"></div>
            <figcaption>قائمة المواضيع في <span class="pt">Classificações</span>.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-15.png" alt="بطاقة موضوعية موسعة تعرض تصنيف النجوم وشارات إكمال Graph وLex وFonê"></div>
            <figcaption>موضوع موسّع مع تقييم بالنجوم وشارات المهارات.</figcaption>
          </figure>
        </div>
        <p>يُظهر كل سمة موسعة ملفًا <strong>تصنيف النجوم</strong> (من أصل خمسة) بالإضافة إلى شارة إكمال لكل من المهارات الثلاث - <span class="pt">Graph</span>, <span class="pt">Lex</span>، و <span class="pt">Fonê</span>. علامة الاختيار الخضراء تعني أنك قد انتهيت من تمارين المهارة الخاصة بالموضوع.</p>
        <div class="call tip">
          <span class="tag">كيف يتم كسب النقاط</span>
          يتم منح النجوم والنقاط فقط عندما تقوم بذلك <strong>أكمل جميع المهام</strong> في اللعبة - لا يتم احتساب الإكمال الجزئي، لأنه يتم التعامل مع اللعبة النهائية كدليل على أنك تعلمت المادة بالفعل. إذا لم تتمكن من الانتهاء في جلسة واحدة، فما عليك سوى تركه واستلامه لاحقًا؛ لم يضيع شيء.
        </div>
      </section>

      <!-- 8 SOBRE -->
      <section id="sobre">
        <h2><span class="sec-num">10</span>Sobre a APP &amp; الخصوصية</h2>
        <p>أيضا تحت <span class="pt">Perfil</span>، ال <span class="pt">Sobre a APP / Políticas de Privacidade</span> تحتوي الشاشة على خلفية عن التطبيق وسياسة الخصوصية الكاملة الخاصة به. اضغط على <strong>البرتغالية</strong> أو <strong>إنجليزي</strong> ضع علامة في الأعلى لتبديل اللغات.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-16.jpg" alt="حول شاشة التطبيق مع تبديل العلم البرتغالي والإنجليزية"></div><figcaption>حول التطبيق، مع تبديل العلم PT / EN.</figcaption></figure>
        <p class="intro-note">
          
          باختصار: يدعم GoGenius التعلم المساعد للغة البرتغالية الأوروبية من خلال القراءة والكتابة والتمارين الصوتية، مدعومًا ببرامج تعليمية بعدة لغات. أثناء اللعب، يتم إنشاء شبكة تصنيف حتى تتمكن من رؤية كفاءتك. التطبيق متاح على Android (وعلى PC عبر المحاكي)، ويقترح فريق البحث جلسات يومية قصيرة مدتها 15-20 دقيقة للحصول على أفضل النتائج.
        </p>
  
        <p>السياسة موجودة أيضًا على الإنترنت على <a href="https://privacidade.grupoautonoma.pt/index.php/politica-de-privacidade-go-genius-en/" target="_blank" rel="noopener">privacidade.grupoautonoma.pt</a>.</p>
      </section>

      <!-- 9 SUPPORT -->
      <section id="support">
        <h2><span class="sec-num">11</span>دعم الاتصال &amp;</h2>
        <div class="cards">
          <div class="card"><h4>دعم التطبيق</h4><p><a href="mailto:gogenius@autonoma.pt">gogenius@autonoma.pt</a></p></div>
          <div class="card"><h4>المطور</h4><p>TOO WILD — SOFTWARE, LDA</p><p><a href="mailto:toowildsoftware@gmail.com">toowildsoftware@gmail.com</a></p><p>+351 923 544 221</p></div>
        </div>
      </section>

      <!-- GLOSSARY -->
      <section id="glossary">
        <h2><span class="sec-num">A</span>قاموس برتغالي سريع</h2>
        <table class="tbl">
          <thead><tr><th>البرتغالية</th><th>إنجليزي</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Bem-Vindo!</span></td><td>مرحباً!</td></tr>
            <tr><td><span class="btn-name">Entrar</span></td><td>تسجيل الدخول</td></tr>
            <tr><td><span class="btn-name">Registar</span></td><td>يسجل</td></tr>
            <tr><td><span class="btn-name">Recuperar Password</span></td><td>استعادة كلمة المرور</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                المنطقة / المدينة
                <br>
                <span style="color:#666;font-size:0.96em;">
                  من أين يمكنك الوصول إلى التطبيق؟
                </span>
              </td>
            </tr>
 
            <tr><td><span class="btn-name">Menu</span></td><td>القائمة الرئيسية</td></tr>
            <tr><td><span class="btn-name">Perfil</span></td><td>حساب تعريفي</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>الفئات (الألعاب)</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>مترجم</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>عشرات / التصنيف العالمي</td></tr>
            <tr><td><span class="btn-name">Editar Perfil</span></td><td>تحرير الملف الشخصي</td></tr>
            <tr><td><span class="btn-name">Sobre a APP</span></td><td>حول التطبيق</td></tr>
            <tr><td><span class="btn-name">Políticas de Privacidade</span></td><td>سياسة الخصوصية</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>الجنس</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>عمر</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>جنسية</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>العنوان / الموقع</td></tr>
            <tr><td><span class="btn-name">Atualizar</span></td><td>تحديث</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>تسجيل الخروج</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>حذف الملف الشخصي</td></tr>
            <tr><td><span class="btn-name">Sim / Não</span></td><td>نعم / لا</td></tr>
          </tbody>
        </table>
        <footer class="doc-foot"><p>يتم دعم GoGenius بواسطة FCT — Fundação para a Ciência e a Tecnologia من خلال الصناديق الوطنية، ومن خلال Centro de Investigação em Psicologia (CIP-UAL).</p></footer>
      </section>`,vh=`<header class="hero" id="welcome">
        <div class="eyebrow">Ual: Universidade Autónoma de Lisboa Luís de Camões </div>
        <h1>Das GoGenius-Handbuch</h1>
        <p class="lede">GoGenius ist die erste App, die speziell zum Erlernen des <strong>europäischen Portugiesisch</strong> entwickelt wurde, insbesondere für Sprecherinnen und Sprecher von neun großen Sprachen, sie kann jedoch von allen Lerninteressierten genutzt werden. Mit <strong>thematischen Spielen</strong> zum Hörverstehen, Lesen und Schreiben führt Sie dieser Leitfaden durch jeden Bildschirm und jede Schaltfläche.</p>

        <div class="call tip">
          <span class="tag">Bevor Sie beginnen</span>
          Für ein optimales Erlebnis schließen Sie Ihre Kopfhörer an oder verbinden Sie <strong>Bluetooth-Kopfhörer</strong> mit Ihrem Smartphone oder Tablet, bevor Sie GoGenius öffnen. Vergewissern Sie sich, dass der Ton über diese Kopfhörer wiedergegeben wird — viele Spiele basieren auf dem Zuhören, und ein klarer Klang hilft Ihnen, den Anweisungen und Ausspracheübungen ohne Ablenkung zu folgen.
        </div>
  
        <div class="langstrip" aria-label="Unterstützte Ausgangssprachen">
          <span class="lang">Arabisch</span><span class="lang">Russisch</span><span class="lang">Ukrainisch</span>
          <span class="lang">Rumänisch</span><span class="lang">Englisch</span><span class="lang">Französisch</span>
          <span class="lang">Spanisch</span><span class="lang">Mandarin</span><span class="lang">Deutsch</span>
        </div>
        <div class="factbar">
          <div class="fact"><div class="n">14</div><div class="l">thematische Spiele</div></div>
          <div class="fact"><div class="n">A1&rarr;B2</div><div class="l">Lernniveaus</div></div>
          <div class="fact"><div class="n">7+</div><div class="l">empfohlenes Alter</div></div>
        </div>
        <p class="intro-note" style="margin-top:1.6rem;">GoGenius richtet sich an Einwanderer und Flüchtlinge in Portugal, Portugiesischlernende überall auf der Welt sowie Schulen, die es als Unterrichtsmittel einsetzen. Die App läuft auf Android-Smartphones, Tablets und Computern (über einen Android-Emulator auf dem PC). Mit einem einzigen Download werden alle Module freigeschaltet — es gibt <strong>kein Abonnement</strong>.</p>
        <p class="intro-note">GoGenius wurde außerdem inklusiv gestaltet: Jedes Spiel enthält eine schriftliche Fassung seines Ziels und seiner Anweisungen für gehörlose und schwerhörige Lernende, und jedes Element kann bei Bedarf in Ihrer eigenen Sprache oder auf europäischem Portugiesisch erneut abgespielt werden.</p>
        <p class="intro-note">Das pädagogische Modell wurde von <strong>PhD Sandra Figueiredo</strong> entwickelt</p>
      </header>

      <!-- QUICK START -->
      <section id="quickstart">
        <div class="quickstart">
          <div class="qs-eyebrow">Erste Schritte · 60 Sekunden</div>
          <div class="qs-title">Einführung in einer Minute</div>
          <ul>
            <li><strong>Fünf Minuten pro Tag genügen.</strong> Erledigen Sie die täglichen Aufgaben in etwa fünf Minuten — wenn Sie dabeibleiben, können Sie in ungefähr zwei Monaten von A2 in Richtung B1 gelangen.</li>
            <li><strong>Gemeinsam lernen.</strong> Die Übungen funktionieren in der Gruppe genauso gut wie allein.</li>
            <li><strong>Für den Unterricht gemacht.</strong> Lehrkräfte können die Spiele im Unterricht einsetzen und daraus ein Quiz für die ganze Gruppe machen.</li>
          </ul>
        </div>
      </section>

      <!-- 1 LAUNCH -->
      <section id="launch">
        <h2><span class="sec-num">01</span>Startbildschirm</h2>
        <p>Wenn Sie GoGenius öffnen, erscheint der Willkommensbildschirm — das Logo über einem warmen Band mit &ldquo;Hallo&rdquo; in vielen Sprachen. Nach einem Moment gelangen Sie zur Sprachauswahl.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-01.jpg" alt="GoGenius-Willkommensbildschirm mit dem Logo über farbigen Sprachstreifen"></div><figcaption>Der GoGenius-Willkommensbildschirm.</figcaption></figure>
      </section>

      <!-- 2 SIGN IN -->
      <section id="signin">
        <h2><span class="sec-num">02</span>Anmelden &amp; registrieren</h2>
        <p>Als Nächstes erscheint der Bildschirm <span class="pt">Bem-Vindo!</span> (<em>Willkommen!</em>). Wenn Sie bereits ein Konto haben, melden Sie sich hier an; wenn Sie GoGenius zum ersten Mal nutzen, erstellen Sie eines.</p>
        <h3>Wenn Sie bereits ein Konto haben</h3>
        <p>Geben Sie Ihre <span class="pt">E-mail</span> und Ihr <span class="pt">Password</span> ein und tippen Sie dann auf <span class="btn-name">Entrar</span> (Anmelden). Tippen Sie auf das <strong>Augensymbol</strong>, um Ihre Eingabe zu prüfen. Passwort vergessen? Tippen Sie auf <span class="btn-name">Recuperar Password</span> (Passwort wiederherstellen), um es per E-Mail zurückzusetzen.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-02.jpg" alt="Anmeldebildschirm mit den Feldern E-mail und Password sowie den Schaltflächen Entrar und Registar"></div><figcaption>Der Anmeldebildschirm — melden Sie sich an oder tippen Sie auf Registar, um ein Konto zu erstellen.</figcaption></figure>
        <h3>Wenn Sie neu sind — registrieren</h3>
        <p>Tippen Sie auf <span class="btn-name">Registar</span> (Registrieren), um das Anmeldeformular (<span class="pt">Entrar com o E-mail</span>) zu öffnen. Tragen Sie Ihre Angaben ein und tippen Sie zum Abschluss auf <span class="btn-name">Registar</span>.</p>
        <table class="tbl">
          <thead><tr><th>Feld</th><th>Bedeutung</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Idade</span></td><td>Alter</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Geschlecht (Auswahlliste)</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Staatsangehörigkeit</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Ort / Stadt
                <br>
                <span style="color:#666;font-size:0.96em;">
                  Von wo aus greifen Sie auf die App zu?
                </span>
              </td>
            </tr>

            <tr><td><span class="btn-name">E-mail</span></td><td>E-Mail-Adresse</td></tr>
            <tr><td><span class="btn-name">Password</span></td><td>Passwort</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Passwort bestätigen</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-03.jpg" alt="Registrierungsformular mit den Feldern Idade, Sexo, Nacionalidade, Localidade, E-mail und Passwort"></div><figcaption>Das Registrierungsformular.</figcaption></figure>
        <div class="call note">
          <span class="tag">Bestätigen Sie Ihre E-Mail-Adresse</span>
          Nach der Registrierung sendet GoGenius eine <strong>Bestätigungs-E-Mail</strong> an die angegebene Adresse. Öffnen Sie sie und folgen Sie dem Link, um Ihr Konto vor der Anmeldung zu aktivieren. Wenn sie nicht innerhalb weniger Minuten in Ihrem Posteingang erscheint, prüfen Sie Ihren Spam- oder Junk-Ordner.
        </div>
      </section>

      <!-- 3 LANGUAGE -->
      <section id="language">
        <h2><span class="sec-num">03</span>Ihre Sprache auswählen</h2>
        <p>Wählen Sie die Sprache, die Sie bereits sprechen. Die Aufforderung erscheint auf Portugiesisch und Englisch — <span class="pt">Escolhe a tua língua</span> / <em>Wählen Sie Ihre Sprache</em>.</p>
        <p>Tippen Sie auf die Pfeile <strong>&lsaquo;</strong> und <strong>&rsaquo;</strong>, um durch die Flaggen zu blättern, bis Ihre erscheint, und tippen Sie dann auf <span class="btn-name">Ok</span>. GoGenius unterstützt neun Ausgangssprachen: Englisch, Spanisch, Arabisch, Mandarin, Russisch, Rumänisch, Ukrainisch, Deutsch und Französisch.</p>
        
        <figure class="shot"><div class="phone"><img src="/german_logo.png" alt="Sprachauswahlbildschirm mit einem Flaggenkarussell und der Schaltfläche Ok"></div><figcaption>Blättern Sie mit den Pfeilen zu Ihrer Flagge und tippen Sie dann auf Ok.</figcaption></figure>
        <p>Jede dieser neun Sprachen ist eine <strong>Unterstützungssprache</strong> — sie hilft Ihnen, die Anweisungen zu verstehen, während alles, was Sie tatsächlich lernen, auf europäischem Portugiesisch bleibt. Dieser Fokus zeichnet GoGenius aus: Die meisten Apps zum Portugiesischlernen vermitteln die <strong>brasilianische</strong> Variante, die sich in Aussprache, Wortschatz und Grammatik deutlich unterscheidet, und viele Sprachspiele sind überhaupt nicht für echten Unterricht konzipiert. GoGenius wurde ausdrücklich als Lernmittel für europäisches Portugiesisch entwickelt.</p>
        <div class="call note">
          <span class="tag">Warum die Benutzeroberfläche auf Portugiesisch bleibt</span>
          Ihre Auswahl legt die Sprache für Anweisungen und Übersetzungen fest — die Schaltflächen und Menünamen bleiben jedoch bewusst auf Portugiesisch. Sich in einer portugiesischen Benutzeroberfläche zurechtzufinden, gehört zum Eintauchen in die Sprache, und die Wörter aus den Menüs (<span class="pt">perfil</span>, <span class="pt">categorias</span>, <span class="pt">atualizar</span>) werden Sie im Alltag verwenden. Dieses Handbuch nennt Ihnen im weiteren Verlauf die deutsche Bedeutung jeder Schaltfläche.
        </div>
      </section>

      <!-- 4 MENU -->
      <section id="menu">
        <h2><span class="sec-num">04</span>Hauptmenü &amp; Beenden</h2>
        <p>Das Hauptmenü ist Ihre zentrale Anlaufstelle. Drei farbige Bereiche öffnen jeweils einen Abschnitt:</p>
        <table class="tbl">
          <thead><tr><th>Schaltfläche</th><th>Bedeutung</th><th>Funktion</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Profil</td><td>Ihr Konto, Ihre Punktzahlen und App-Informationen</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Kategorien</td><td>Die thematischen Spiele — hier lernen und spielen Sie</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Übersetzer</td><td>Öffnet Google Übersetzer</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-04.jpg" alt="Hauptmenü mit den Bereichen Perfil, Categorias und Tradutor"></div><figcaption>Das Hauptmenü: Perfil, Categorias, Tradutor.</figcaption></figure>
        <div class="call note">
          <span class="tag">Hinweis zu Tradutor</span>
          Dadurch wird <strong>Google Übersetzer</strong> geöffnet und GoGenius verlassen. Verwenden Sie die Zurück-Geste Ihres Geräts, um zurückzukehren.
        </div>
        <h3>Die App beenden</h3>
        <p>Tippen Sie auf das <strong>rote X</strong> in der unteren rechten Ecke. GoGenius fragt <span class="pt">Deseja sair da GoGenius?</span> (<em>Möchten Sie GoGenius verlassen?</em>). Tippen Sie auf <span class="btn-name">Sim</span> (Ja), um die App zu schließen, oder auf <span class="btn-name">Não</span> (Nein), um zu bleiben.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-05.jpg" alt="Bestätigungsdialog zum Verlassen von GoGenius mit den Schaltflächen Sim und Não"></div><figcaption>Die Bestätigung zum Beenden: Sim (Ja) oder Não (Nein).</figcaption></figure>
      </section>

      <!-- 5 PERFIL -->
      <section id="perfil">
        <h2><span class="sec-num">05</span>Perfil — Ihr Profil</h2>
        <p>Wenn Sie im Hauptmenü auf <span class="pt">Perfil</span> tippen, öffnet sich ein kleines Menü mit drei Optionen:</p>
        <table class="tbl">
          <thead><tr><th>Option</th><th>Öffnet</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Ihre Kontodaten bearbeiten (siehe nächsten Abschnitt)</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Ihre Punktzahlen und Ranglisten</td></tr>
            <tr><td><span class="btn-name">Sobre a APP / Políticas de Privacidade</span></td><td>Über die App &amp; Datenschutzrichtlinie</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-06.jpg" alt="Menü Perfil mit den Optionen Perfil, Classificações und Sobre a APP"></div><figcaption>Das Menü Perfil und seine drei Optionen.</figcaption></figure>
      </section>

      <!-- 6 EDITAR PERFIL -->
      <section id="editar">
        <h2><span class="sec-num">06</span>Editar Perfil — Ihre Angaben bearbeiten</h2>
        <p>Auf dem Bildschirm <span class="pt">Editar Perfil</span> können Sie Ihre Kontoinformationen einsehen und ändern.</p>
        <table class="tbl">
          <thead><tr><th>Feld</th><th>Bedeutung</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Sexo</span></td><td>Geschlecht (Auswahlliste)</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Alter</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Staatsangehörigkeit</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Adresse / Standort</td></tr>
            <tr><td><span class="btn-name">Password Atual</span></td><td>Aktuelles Passwort</td></tr>
            <tr><td><span class="btn-name">Password Nova</span></td><td>Neues Passwort</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Neues Passwort bestätigen</td></tr>
          </tbody>
        </table>
        <p>Die drei Passwortfelder benötigen Sie nur, wenn Sie Ihr Passwort ändern — lassen Sie sie andernfalls leer. Tippen Sie auf das <strong>Augensymbol</strong> neben einem Passwortfeld, um Ihre Eingabe ein- oder auszublenden.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-07.jpg" alt="Formular Editar Perfil mit Feldern und den Schaltflächen Atualizar, Terminar Sessão und Eliminar Perfil"></div><figcaption>Das Formular Editar Perfil und seine drei Aktionsschaltflächen.</figcaption></figure>
        <h3>Aktionsschaltflächen</h3>
        <table class="tbl">
          <thead><tr><th>Schaltfläche</th><th>Bedeutung</th><th>Funktion</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Aktualisieren</td><td>Speichert die oben vorgenommenen Änderungen</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Abmelden</td><td>Meldet Sie von Ihrem Konto ab</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Profil löschen</td><td>Löscht Ihr Konto dauerhaft</td></tr>
          </tbody>
        </table>
        <div class="call warn">
          <span class="tag">Eliminar Perfil ist endgültig</span>
          Wenn Sie Ihr Profil löschen, werden Ihr Konto sowie Ihr gesamter Fortschritt und Ihre Punktzahlen entfernt. Dies kann nicht rückgängig gemacht werden.
        </div>
      </section>

            <!-- 7 CATEGORIAS (THEMES) -->
      <section id="categorias">
        <h2><span class="sec-num">07</span>Categorias — Themen</h2>
        <p><span class="pt">Categorias</span> ist das Herzstück von GoGenius: die 14 thematischen Spiele, aus denen der Lehrplan besteht. Jedes Thema greift einen Alltagsbereich auf und stellt dazu eine Reihe von Übungen zusammen. Zu den Themen gehören unter anderem:</p>
        <div class="themes">
          <span class="theme">A minha gente <span class="en">· Meine Familie</span></span>
          <span class="theme">Onde moro <span class="en">· Wo ich wohne</span></span>
          <span class="theme">O que visto <span class="en">· Was ich trage</span></span>
          <span class="theme">Movendo-me <span class="en">· Unterwegs sein</span></span>
          <span class="theme">Natura <span class="en">· Natur</span></span>
          <span class="theme">Eu, Hoje e no Futuro <span class="en">· Ich, heute &amp; in der Zukunft</span></span>
        </div>
        <p>Unabhängig vom gewählten Thema ist das Lernen immer nach denselben drei Kompetenzbereichen gegliedert — der eigentlichen Struktur der App. Jeder trainiert eine andere Fähigkeit und liefert Ihnen dabei die Lösungen:</p>
        <div class="skills">
          <div class="skill fone"><div class="name">Fonê</div><div class="role">Hörverstehen</div><p><span class="pt">Exercícios de Compreensão Oral</span> — Hör- und Phonologieübungen.</p></div>
          <div class="skill lex"><div class="name">Lex</div><div class="role">Lesen</div><p><span class="pt">Exercícios de Leitura</span> — Leseübungen auf europäischem Portugiesisch, mit Lösungen.</p></div>
          <div class="skill graph"><div class="name">Graph</div><div class="role">Schreiben</div><p><span class="pt">Exercícios de Escrita</span> — Schreibübungen mit ausgearbeiteten Lösungen.</p></div>
        </div>
        <p>Diese drei Bezeichnungen begegnen Ihnen in jedem Spiel und auf Ihrer Ergebnistafel wieder, auf der Ihr Fortschritt in jedem Bereich erfasst wird (siehe <span class="pt">Classificações</span>). Der nächste Abschnitt führt Sie durch ein vollständiges Thema, damit Sie die Bereiche in Aktion sehen können.</p>
      </section>

      <!-- 8 THEMED GAMES -->
      <section id="themed-games">
        <h2><span class="sec-num">08</span>Thematische Spiele — eine Anleitung</h2>
        <p>Dieser Abschnitt begleitet Sie anhand eines wählbaren Beispielspiels, <span class="pt">A minha gente</span>, vom Karussell bis zu den Übungen, damit Sie sehen, wie ein Spiel tatsächlich funktioniert.</p>
        <h3>1 · Ein Thema durchsuchen und öffnen</h3>
        <p>Categorias öffnet sich als geschwungenes Karussell aus Kategoriekreisen. Wischen Sie entlang des Pfads, um zwischen den Themen zu wechseln, und tippen Sie auf einen Kreis, um ein Thema zu öffnen; die rechts herausgleitende Registerkarte (hier <span class="pt">A minha gente</span>) zeigt, welches Thema Sie gleich betreten. Die beiden kleinen Tablet-Symbole oben rechts dienen zum Sprachwechsel (weiter unten erklärt), und die rote Schaltfläche mit dem <strong>Fragezeichen</strong> öffnet ein Verzeichnis der Funktionen aller Schaltflächen in der App — nutzen Sie es als Nachschlagewerk.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-08.jpg" alt="Categorias-Karussell mit runden Kategorieschaltflächen entlang eines gebogenen Pfads"></div>
            <figcaption>Das Categorias-Karussell — tippen Sie auf einen Kreis, um ein Thema zu öffnen.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-09.jpg" alt="Über das rote Fragezeichen geöffnetes Schaltflächenverzeichnis, das Graph, Lex, Fonê und die anderen Schaltflächen erklärt"></div>
            <figcaption>Das rote ? öffnet dieses Verzeichnis aller Schaltflächen.</figcaption>
          </figure>
        </div>
        <p>Das Verzeichnis ist eine praktische Legende: Es nennt die drei Übungstypen — <span class="pt">Graph</span> (Schreiben), <span class="pt">Lex</span> (Lesen) und <span class="pt">Fonê</span> (Hörverstehen) — sowie <span class="pt">Sair</span> (Beenden), <span class="pt">Solução</span> (Lösung), <span class="pt">Saber mais</span> (weitere Informationen), <span class="pt">Info</span>, das Barrierefreiheitssymbol für Hörbeeinträchtigungen und die beiden Sprachmenüs (<span class="pt">Menu em Português Europeu</span> und <span class="pt">Menu Escolher Outras Línguas</span>).</p>
        <h3>2 · Ein Spiel auswählen</h3>
        <p>Schließen Sie das Verzeichnis und tippen Sie auf das Thema <span class="pt">A minha gente</span>. Ein kleines Menü mit den Spielen dieses Themas erscheint — ein Einführungsspiel sowie <span class="pt">Graph</span>, <span class="pt">Lex</span> und <span class="pt">Fonê</span>, jeweils mit einer eigenen Schaltfläche <span class="pt">Jogar</span> (Spielen). Sie können sie in beliebiger Reihenfolge spielen, beginnen sollten Sie jedoch am besten mit der Schaltfläche mit dem <strong>Herz</strong> — dem Einführungsspiel.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-10.jpg" alt="Menü der thematischen Spiele von A minha gente mit Kreisen für Herz, Graph, Lex und Fonê, jeweils mit einer Jogar-Schaltfläche"></div><figcaption>Die Spiele des Themas — beginnen Sie mit dem Herz-Spiel (Einführung).</figcaption></figure>
        <h3>3 · In einem Spiel</h3>
        <p>So sieht das Einführungsspiel während des Spielens aus. Ziehen Sie die unteren Registerkarten auf die entsprechende Person (<span class="pt">Pai</span>, <span class="pt">Avô</span>, <span class="pt">Filhos/Irmãos</span>, <span class="pt">Mãe</span>, <span class="pt">Avó</span>), um den Familienwortschatz zu üben. Unten rechts befinden sich zwei runde Schaltflächen, und mit den beiden Tablet-Symbolen oben rechts wechseln Sie die Sprache (siehe Hinweis unten).</p>
        <p>Die <strong>Plus-Schaltfläche</strong> öffnet ein <span class="pt">Vocabulário</span>-Fenster mit allen Wörtern, die in der Aktivität vermittelt werden — eine praktische Übersicht vor dem Beginn. Die <strong>Ohr-Schaltfläche</strong> zeigt das Ziel und die Anweisungen der Aktivität als <strong>Text</strong>: Dies ist eine Barrierefreiheitsfunktion (mit der Überschrift <span class="pt">Portador de Deficiência Auditiva</span>, &ldquo;Person mit einer Hörbeeinträchtigung&rdquo;), damit gehörlose und schwerhörige Lernende genau nachlesen können, was zu tun ist.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-11.jpg" alt="Spielbildschirm A minha gente mit Familienporträts, Registerkarten für Familienmitglieder, Plus- und Ohr-Schaltflächen sowie zwei Sprach-Tablet-Symbolen oben rechts"></div><figcaption>Ein laufendes Spiel mit den beiden Sprachsymbolen oben rechts.</figcaption></figure>
        <p>Jederzeit während einer Aktivität oder eines Spiels finden Sie unten in der Bildschirmmitte einen kleinen <strong>nach oben zeigenden Pfeil</strong>. Tippen Sie darauf, um ein Schnellmenü zu öffnen: <span class="pt">Perfil</span>, <span class="pt">Categorias</span>, <span class="pt">Tradução</span> oder zurück zum <span class="pt">Menu</span> — so wechseln Sie zwischen diesen Bereichen, ohne in der App zu suchen.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-23.jpg" alt="Geöffnetes unteres Menü im Spiel mit Perfil, Categorias, Tradução und Menu"></div><figcaption>Der Pfeil nach oben öffnet dieses Menü aus jeder Aktivität oder jedem Spiel.</figcaption></figure>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-12.jpg" alt="Über die Plus-Schaltfläche geöffnetes Vocabulário-Fenster mit Familienwortschatz"></div>
            <figcaption>Die <span class="pt">+</span>-Schaltfläche mit der <span class="pt">Vocabulário</span>-Liste</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-13.jpg" alt="Über die Ohr-Schaltfläche geöffnetes Fenster mit Textanweisungen und der Überschrift Portador de Deficiência Auditiva"></div>
            <figcaption>Die Textanweisungen der Ohr-Schaltfläche.</figcaption>
          </figure>
        </div>
        <div class="call note">
          <span class="tag">Noch einmal anhören — in Ihrer Sprache oder auf Portugiesisch</span>
          Jedes Spiel ist zweisprachig. In der <strong>oberen rechten Ecke</strong> sehen Sie zwei kleine Tablet-Symbole. Tippen Sie auf das <strong>Globus-Tablet</strong> (<span class="pt">Menu Escolher Outras Línguas</span>), um das aktuelle Element erneut in Ihrer eigenen Sprache zu hören oder zu lesen, oder auf das <strong>Tablet mit Portugal-Flagge</strong> (<span class="pt">Menu em Português Europeu</span>), um zurück zum europäischen Portugiesisch zu wechseln. Wechseln Sie so oft wie nötig hin und her — die App legt Sie nie auf eine Sprache fest.
        </div>
        <h3>4 · Graph, Lex &amp; Fonê</h3>
        <p>Nach dem Einführungsspiel folgen die drei Kompetenzübungen des Themas — <span class="pt">Graph</span> (Schreiben), <span class="pt">Lex</span> (Lesen) und <span class="pt">Fonê</span> (Hörverstehen).</p>

        <p><span class="pt">Graph</span> trainiert Ihre <strong>Schreibfähigkeiten</strong>. So funktioniert es im Thema <span class="pt">A minha gente</span>:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-17.jpg" alt="Graph-Schreibübung mit dem Platzhalter A tua resposta und dem roten Glühbirnen-Button"></div><figcaption><span class="pt">Graph</span> — tippen Sie auf <span class="pt">A tua resposta...</span>, um zu schreiben.</figcaption></figure>
        <p>Auch hier lassen die beiden Tablet-Symbole oben rechts die Übungsanweisungen hören: der <strong>Weltkarten</strong>-Button spielt sie in Ihrer Sprache ab, der Button mit der <strong>Portugal-Flagge</strong> auf Portugiesisch.</p>
        <p>Nach den Anweisungen tippen Sie auf den pfirsichfarbenen Bereich mit <span class="pt">A tua resposta...</span> („Ihre Antwort...“) und beginnen zu schreiben. Ein portugiesisches Keyboard auf dem Gerät ist sehr empfehlenswert — auf dem iPhone können Sie z.&nbsp;B. ein portugiesisches Layout aktivieren, damit Akzente, Grammatik und Rechtschreibung stimmen.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-18.jpg" alt="Graph-Antwortfeld mit geöffnetem portugiesischem Keyboard"></div>
            <figcaption>Keyboard zum Tippen</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-19.jpg" alt="Graph mit getippter portugiesischer Antwort und blauem Häkchen zum Absenden"></div>
            <figcaption>Antwort fertig — tippen Sie auf das blaue Häkchen.</figcaption>
          </figure>
        </div>
        <p>Wenn Sie fertig geschrieben haben, tippen Sie auf das <strong>blaue Häkchen</strong>. Vergleichen Sie dann Ihre Antwort mit der Lösung: tippen Sie unten rechts auf die <strong>rote Glühbirne</strong>. Ein <span class="pt">Solução</span>-Bereich mit einer Musterantwort erscheint.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-20.jpg" alt="Graph-Solução-Bereich mit Musterantwort und Obrigado-Button"></div><figcaption>Die rote Glühbirne öffnet <span class="pt">Solução</span> — vergleichen und dann <span class="pt">Obrigado</span> tippen.</figcaption></figure>
        <div class="call tip">
          <span class="tag">Auf den Sinn achten, nicht auf jedes Wort</span>
          Keine Sorge, wenn Ihre Antwort und die Lösung voneinander abweichen. Wichtig ist derselbe Sinn, solide Grammatik und Syntax sowie dieselbe Botschaft.
        </div>
        <p><span class="pt">Lex</span> ist Leseübung in europäischem Portugiesisch — mit eingebauter Hilfe. Wie zuvor lassen die beiden Tablet-Symbole oben rechts die Anweisungen in Ihrer Muttersprache (Weltkarte) oder auf Portugiesisch (Portugal-Flagge) hören.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-21.jpg" alt="Lex-Leseübung mit portugiesischem Text und geschlossenem Dicionário-Tab"></div>
            <figcaption>Der Lesetext</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-22.jpg" alt="Lex mit geöffnetem Dicionário und portugiesischer Stichworterklärung"></div>
            <figcaption><span class="pt">Dicionário</span> geöffnet mit Erklärung.</figcaption>
          </figure>
        </div>
        <p>Sie erhalten einen kurzen Text zum Lesen und Verstehen. Lesen Sie ihn <strong>laut</strong> — das stärkt Gespräch, Aussprache und den Klang des europäischen Portugiesisch.</p>
        <p>Unter dem Text liegt ein oranger Tab <span class="pt">Dicionário</span> (Wörterbuch). Tippen Sie darauf, um Schlüsselwörter und Wendungen aus dem Text auf Portugiesisch erklärt zu sehen — hilfreich bei neuen Begriffen.</p>
        <p>Die <strong>rote Glühbirne</strong> unten rechts spielt den Text sofort auf Portugiesisch vor. Nutzen Sie sie als Hörbeispiel und lesen Sie parallel mit.</p>
        <div class="call tip">
          <span class="tag">Lesen, hören, aussprechen — und üben</span>
          Ziel von <span class="pt">Lex</span> ist Lesen, Hören und Aussprache im europäischen Portugiesisch (PT). Üben Sie oft und lesen Sie den Text immer laut.
        </div>
        <p><span class="pt">Fonê</span> trainiert das <strong>Hörverstehen</strong> — <span class="pt">Exercícios de Compreensão Oral</span>: Hör- und Phonologieübungen.</p>
        <p>Auch hier lassen die beiden Tablet-Symbole oben rechts die Anweisungen in Ihrer Muttersprache (Weltkarte) oder auf europäischem Portugiesisch (Portugal-Flagge) hören.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-24.jpg" alt="Fonê-Fragenbildschirm mit weißem Disk-Button und unbeantworteten Auswahlfragen"></div>
            <figcaption>Bereit zum Zuhören</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-25.jpg" alt="Fonê-Fragenbildschirm während der Konversation abgespielt wird"></div>
            <figcaption>Tippen Sie auf die weiße Disk, um die Konversation zu starten.</figcaption>
          </figure>
        </div>
        <p>Tippen Sie auf die <strong>weiße Disk</strong> neben <span class="pt">Questões</span>, um die Konversation abzuspielen, die Sie für die Fragen brauchen. Nach dem Tippen wird die Disk etwas grau und die Konversation beginnt.</p>
        <p>Hören Sie danach noch <strong>zwei- bis dreimal</strong> zu, bis Sie sie verstehen, und markieren Sie die richtigen Antworten (<span class="pt">Assinale a resposta correta</span>).</p>
        <div class="call tip">
          <span class="tag">Fragen bleiben auf europäischem Portugiesisch</span>
          Diese Reflexionsfragen sind immer auf europäischem Portugiesisch. Halten Sie Google Übersetzer oder Ihre Lieblings-Übersetzer-App bereit — wir übersetzen dieses erste Modul unten, später machen Sie das selbst. Das ist eine gute Gewohnheit. Über das Pfeilmenü unten erreichen Sie auch <span class="pt">Tradução</span>.
        </div>
        <p>Hier sind die Fragen und Optionen mit deutscher Übersetzung:</p>
        <table class="tbl">
          <thead><tr><th>Portugiesisch</th><th>Deutsch</th></tr></thead>
          <tbody>

            <tr>
              <td>
                <span class="btn-name">1. O Filipe perguntou ao João se:</span><br>
                · Não ia haver aula de Português.<br>
                · Não ia haver aula de História.<br>
                · Não ia ter teste de História.
              </td>
              <td>
                1. Filipe fragte João, ob:<br>· Es keinen Portugiesischunterricht geben würde.<br>· Es keinen Geschichtsunterricht geben würde.<br>· Es keinen Geschichtstest geben würde.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">2. O João vai faltar à aula porque:</span><br>
                · Não lhe apetece ir.<br>
                · Tem de ir à praia.<br>
                · Tem de ir ao dentista.
              </td>
              <td>
                2. João fehlt im Unterricht, weil:<br>· Er keine Lust hat zu gehen.<br>· Er an den Strand muss.<br>· Er zum Zahnarzt muss.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">3. A aula de História:</span><br>
                · Não ia haver no dia seguinte.<br>
                · Foi adiada para a tarde.<br>
                · Foi adiada para a noite.
              </td>
              <td>
                3. Der Geschichtsunterricht:<br>· Fände am nächsten Tag nicht statt.<br>· Wurde auf den Nachmittag verschoben.<br>· Wurde auf den Abend verschoben.
              </td>
            </tr>
          </tbody>
        </table>
        <p>Für dieses erste Modul haben wir die Antworten schon markiert, um Ihnen zu helfen:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-26.jpg" alt="Fonê with the correct answers selected for all three questions"></div><figcaption>Beispielantworten markiert — tippen Sie auf <span class="pt">continuar</span>, wenn Sie soweit sind.</figcaption></figure>
        <ol>
          <li><span class="pt">Não ia haver aula de História.</span> — Es würde keinen Geschichtsunterricht geben.</li>
          <li><span class="pt">Tem de ir ao dentista.</span> — Er muss zum Zahnarzt.</li>
          <li><span class="pt">Foi adiada para a noite.</span> — Er wurde auf den Abend verschoben.</li>
        </ol>
        <p>Wie bei <span class="pt">Lex</span> zeigt ein oranger Tab <span class="pt">Dicionário</span> Schlüsselwortschatz. Tippen Sie darauf für Definitionen auf Portugiesisch.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-27.jpg" alt="Fonê mit geöffnetem Dicionário und Definition von apontamentos"></div>
            <figcaption><span class="pt">Dicionário</span> geöffnet mit Erklärung eines Schlüsselworts.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-29.jpg" alt="Fonê mit markierten Antworten und geöffnetem Dicionário"></div>
            <figcaption>Markierte Antworten mit geöffnetem <span class="pt">Dicionário</span>.</figcaption>
          </figure>
        </div>
        <p>Der <strong>rote Ohr-Button</strong> unten rechts ist eine Barrierefreiheitsfunktion: er zeigt die Konversation als Text (Überschrift <span class="pt">Portador de Deficiência Auditiva</span>). Wenn ein Wort oder eine Wendung unklar ist, nutzen Sie Ihren Übersetzer oder Ihre Notizen.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-28.jpg" alt="Fonê-Barrierefreiheits-Overlay mit schriftlicher Transkription"></div><figcaption>Der Ohr-Button öffnet die geschriebene Konversation — tippen Sie auf <span class="pt">Obrigado</span> zum Schließen.</figcaption></figure>
        <p>Wenn Sie die Fragen abgeschlossen haben, tippen Sie unten auf <span class="pt">continuar</span> (weiter), um zum nächsten Teil von <span class="pt">Fonê</span> zu gelangen.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-32.jpg" alt="Fonê-Bildschirm mit markierten Antworten, geöffnetem Dicionário und continuar-Link"></div><figcaption>Tippen Sie auf <span class="pt">continuar</span>, um zur Phonologieübung zu gelangen.</figcaption></figure>
        <p><span class="pt">Fonê</span> enthält auch Phonologie: Wortblasen, eine <strong>rote Glühbirne</strong> für die Lösung und denselben Ohr-Button für Textunterstützung — z.&nbsp;B. zum Buchstabieren von Familienwörtern.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-30.jpg" alt="Fonê-Phonologiebildschirm mit Família-, Pai-, Mãe- und Filho-Kreisen"></div>
            <figcaption>Phonologieübung</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-31.jpg" alt="Fonê-Barrierefreiheitspanel mit Aufforderung, die Wörter zu buchstabieren"></div>
            <figcaption>Textanweisungen des Ohr-Buttons.</figcaption>
          </figure>
        </div>
        <div class="call tip">
          <span class="tag">Mehr als einmal hören</span>
          Hörverstehen verbessert sich durch Wiederholung. Spielen Sie die Disk erneut, prüfen Sie das <span class="pt">Dicionário</span> und nutzen Sie die Ohr-Transkription, wann immer Sie den Dialog noch einmal brauchen.
        </div>
        <h3>5 · Über diesen Rundgang hinaus</h3>
        <p>Was Sie gerade in <span class="pt">A minha gente</span> durchgespielt haben, gilt für jedes Thema und jede Aktivität in GoGenius — mit nur kleinen Abweichungen. Die Übungen sind weitgehend selbsterklärend, und Sie haben bereits alles, was Sie brauchen: zweisprachige Anweisungen, das Pfeilmenü unten, <span class="pt">Dicionário</span>, Lösungen, Barrierefreiheitstext und bei Bedarf <span class="pt">Tradução</span>.</p>
        <p>Wenn etwas in der App unklar ist, kommen Sie zu diesem Handbuch zurück — oder melden Sie sich unter <a href="#support">Support &amp; contact</a>. Wir begleiten Sie gern auf dem Weg zum europäischen Portugiesisch.</p>
        <div class="call tip">
          <span class="tag"><span class="pt">Boa sorte!</span> · Viel Erfolg</span>
          Viel Freude an den Spielen — und weiter üben.
        </div>
      </section>

<!-- 7 CLASSIFICACOES -->
      <section id="scores">
        <h2><span class="sec-num">09</span>Classificações — Punktzahlen &amp; Ranglisten</h2>
        <p>Diese Ergebnistafel erreichen Sie über <span class="pt">Perfil ▸ Classificações</span>. Sie listet jedes Thema der App auf; tippen Sie auf eines, um es zu erweitern und Ihre Leistung anzusehen.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-14.jpg" alt="Classificações-Liste der Themen mit Symbolen"></div>
            <figcaption>Die Themenliste in <span class="pt">Classificações</span>.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-15.png" alt="Erweiterte Themenkarte mit Sternebewertung und Abschlussabzeichen für Graph, Lex und Fonê"></div>
            <figcaption>Ein aufgeklapptes Thema mit Sternebewertung und Skill-Abzeichen.</figcaption>
          </figure>
        </div>
        <p>Jedes erweiterte Thema zeigt eine <strong>Sternebewertung</strong> (von fünf) sowie ein Abschlussabzeichen für jede der drei Kompetenzen — <span class="pt">Graph</span>, <span class="pt">Lex</span> und <span class="pt">Fonê</span>. Ein grünes Häkchen bedeutet, dass Sie die Übungen dieser Kompetenz für das Thema abgeschlossen haben.</p>
        <div class="call tip">
          <span class="tag">So werden Punkte verdient</span>
          Sterne und Punkte werden nur vergeben, wenn Sie <strong>alle Aufgaben</strong> eines Spiels abschließen — ein teilweiser Abschluss zählt nicht, denn ein abgeschlossenes Spiel gilt als Nachweis, dass Sie den Lernstoff tatsächlich gelernt haben. Wenn Sie es nicht in einer Sitzung schaffen, verlassen Sie das Spiel einfach und setzen Sie es später fort; nichts geht verloren.
        </div>
      </section>

      <!-- 8 SOBRE -->
      <section id="sobre">
        <h2><span class="sec-num">10</span>Sobre a APP &amp; Datenschutz</h2>
        <p>Ebenfalls unter <span class="pt">Perfil</span> finden Sie auf dem Bildschirm <span class="pt">Sobre a APP / Políticas de Privacidade</span> Hintergrundinformationen zur App und die vollständige Datenschutzrichtlinie. Tippen Sie oben auf die Flagge für <strong>Portugiesisch</strong> oder <strong>Englisch</strong>, um die Sprache zu wechseln.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-16.jpg" alt="Bildschirm Über die App mit Umschalter zwischen portugiesischer und englischer Flagge"></div><figcaption>Über die App, mit dem PT-/EN-Flaggenumschalter.</figcaption></figure>
        <p class="intro-note">
          
          Kurz gesagt: GoGenius unterstützt das begleitete Erlernen des europäischen Portugiesisch durch Lese-, Schreib- und Phonetikübungen, ergänzt durch Anleitungen in mehreren Sprachen. Während Sie spielen, wird eine Bewertungstabelle erstellt, anhand derer Sie Ihre Sprachkompetenz erkennen können. Die App ist für Android verfügbar (und über einen Emulator auch auf dem PC), und das Forschungsteam empfiehlt für optimale Ergebnisse kurze tägliche Einheiten von 15–20 Minuten.
        </p>
  
        <p>Die Richtlinie ist auch online unter <a href="https://privacidade.grupoautonoma.pt/index.php/politica-de-privacidade-go-genius-en/" target="_blank" rel="noopener">privacidade.grupoautonoma.pt</a> verfügbar.</p>
      </section>

      <!-- 9 SUPPORT -->
      <section id="support">
        <h2><span class="sec-num">11</span>Support &amp; Kontakt</h2>
        <div class="cards">
          <div class="card"><h4>App-Support</h4><p><a href="mailto:gogenius@autonoma.pt">gogenius@autonoma.pt</a></p></div>
          <div class="card"><h4>Entwickler</h4><p>TOO WILD — SOFTWARE, LDA</p><p><a href="mailto:toowildsoftware@gmail.com">toowildsoftware@gmail.com</a></p><p>+351 923 544 221</p></div>
        </div>
      </section>

      <!-- GLOSSARY -->
      <section id="glossary">
        <h2><span class="sec-num">A</span>Kurzes portugiesisches Glossar</h2>
        <table class="tbl">
          <thead><tr><th>Portugiesisch</th><th>Deutsch</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Bem-Vindo!</span></td><td>Willkommen!</td></tr>
            <tr><td><span class="btn-name">Entrar</span></td><td>Anmelden</td></tr>
            <tr><td><span class="btn-name">Registar</span></td><td>Registrieren</td></tr>
            <tr><td><span class="btn-name">Recuperar Password</span></td><td>Passwort wiederherstellen</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Ort / Stadt
                <br>
                <span style="color:#666;font-size:0.96em;">
                  Von wo aus greifen Sie auf die App zu?
                </span>
              </td>
            </tr>
 
            <tr><td><span class="btn-name">Menu</span></td><td>Hauptmenü</td></tr>
            <tr><td><span class="btn-name">Perfil</span></td><td>Profil</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Kategorien (die Spiele)</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Übersetzer</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Punktzahlen / Ranglisten</td></tr>
            <tr><td><span class="btn-name">Editar Perfil</span></td><td>Profil bearbeiten</td></tr>
            <tr><td><span class="btn-name">Sobre a APP</span></td><td>Über die App</td></tr>
            <tr><td><span class="btn-name">Políticas de Privacidade</span></td><td>Datenschutzrichtlinie</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Geschlecht</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Alter</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Staatsangehörigkeit</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Adresse / Standort</td></tr>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Aktualisieren</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Abmelden</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Profil löschen</td></tr>
            <tr><td><span class="btn-name">Sim / Não</span></td><td>Ja / Nein</td></tr>
          </tbody>
        </table>
        <footer class="doc-foot"><p>GoGenius wird von der FCT — Fundação para a Ciência e a Tecnologia aus nationalen Mitteln sowie vom Centro de Investigação em Psicologia (CIP-UAL) unterstützt.</p></footer>
      </section>
`,bh=`<header class="hero" id="welcome">
        <div class="eyebrow">Ual: Universidade Autónoma de Lisboa Luís de Camões </div>
        <h1>The GoGenius Manual</h1>
        <p class="lede">GoGenius is the first app designed to teach <strong>European Portuguese</strong>, especially to speakers of nine major languages, but it can be used by anyone interested in learning. Through <strong>themed games</strong> covering listening, reading, and writing, this guide walks you through every screen and button.</p>

        <div class="call tip">
          <span class="tag">Before you start</span>
          For the best experience, plug in your headphones or connect <strong>Bluetooth headphones</strong> to your phone or tablet before you open GoGenius. Make sure audio is playing through those headphones — many games depend on listening, and clear sound helps you follow prompts and pronunciation activities without distraction.
        </div>
  
        <div class="langstrip" aria-label="Supported source languages">
          <span class="lang">Arabic</span><span class="lang">Russian</span><span class="lang">Ukrainian</span>
          <span class="lang">Romanian</span><span class="lang">English</span><span class="lang">French</span>
          <span class="lang">Spanish</span><span class="lang">Mandarin</span><span class="lang">German</span>
        </div>
        <div class="factbar">
          <div class="fact"><div class="n">14</div><div class="l">themed games</div></div>
          <div class="fact"><div class="n">A1&rarr;B2</div><div class="l">learner levels</div></div>
          <div class="fact"><div class="n">7+</div><div class="l">recommended age</div></div>
        </div>
        <p class="intro-note" style="margin-top:1.6rem;">GoGenius is designed for immigrants and refugees living in Portugal, foreign learners of Portuguese anywhere, and schools using it as a classroom tool. It runs on Android phones, tablets, and iOS devices. A single download unlocks every module — there is <strong> no subscription</strong>.</p>
        <p class="intro-note">GoGenius is also built to be <strong>inclusive</strong>: every game includes a written version of its goal and instructions for deaf and hard-of-hearing learners, and any item can be replayed in your own language or in European Portuguese whenever you need it.</p>
        <p class="intro-note">The educational model was created by <strong>PhD Sandra Figueiredo</strong></p>
      </header>

      <!-- QUICK START -->
      <section id="quickstart">
        <div class="quickstart">
          <div class="qs-eyebrow">Get started · 60 seconds</div>
          <div class="qs-title">Onboarding in a minute</div>
          <ul>
            <li><strong>Five minutes a day is enough.</strong> Complete the day's tasks in about five minutes — keep that up and you can move from A2 toward B1 in roughly two months.</li>
            <li><strong>Learn together.</strong> The exercises work just as well done in a group as on your own.</li>
            <li><strong>Made for the classroom.</strong> Teachers can run the games in class and turn them into a quiz for the whole group.</li>
          </ul>
        </div>
      </section>

      <!-- 1 LAUNCH -->
      <section id="launch">
        <h2><span class="sec-num">01</span>Launch screen</h2>
        <p>When you open GoGenius, you're greeted by the welcome screen — the logo over a warm ribbon of &ldquo;hello&rdquo; in many languages. After a moment it takes you to language selection.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-01.jpg" alt="GoGenius welcome screen with the logo over colourful language stripes"></div><figcaption>The GoGenius welcome screen.</figcaption></figure>
      </section>

      <!-- 2 SIGN IN -->
      <section id="signin">
        <h2><span class="sec-num">02</span>Signing in &amp; registering</h2>
        <p>Next comes the <span class="pt">Bem-Vindo!</span> (<em>Welcome!</em>) screen. If you already have an account, sign in here; if this is your first time, create one.</p>
        <h3>If you already have an account</h3>
        <p>Enter your <span class="pt">E-mail</span> and <span class="pt">Password</span>, then tap <span class="btn-name">Entrar</span> (Log in). Tap the <strong>eye icon</strong> to check what you've typed. Forgotten your password? Tap <span class="btn-name">Recuperar Password</span> (Recover password) to reset it by e-mail.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-02.jpg" alt="Login screen with E-mail and Password fields, Entrar and Registar buttons"></div><figcaption>The login screen — sign in, or tap Registar to create an account.</figcaption></figure>
        <h3>If you're new — register</h3>
        <p>Tap <span class="btn-name">Registar</span> (Register) to open the sign-up form (<span class="pt">Entrar com o E-mail</span>). Fill in your details and tap <span class="btn-name">Registar</span> to finish.</p>
        <table class="tbl">
          <thead><tr><th>Field</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Idade</span></td><td>Age</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Sex (dropdown)</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Nationality</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Locality / town
                <br>
                <span style="color:#666;font-size:0.96em;">
                  Where are you accessing the app from?
                </span>
              </td>
            </tr>

            <tr><td><span class="btn-name">E-mail</span></td><td>E-mail address</td></tr>
            <tr><td><span class="btn-name">Password</span></td><td>Password</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Confirm password</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-03.jpg" alt="Registration form with Idade, Sexo, Nacionalidade, Localidade, E-mail and password fields"></div><figcaption>The registration form.</figcaption></figure>
        <div class="call note">
          <span class="tag">Confirm your e-mail</span>
          After you register, GoGenius sends a <strong>confirmation e-mail</strong> to the address you gave. Open it and follow the link to activate your account before signing in. If it isn't in your inbox within a few minutes, check your spam or junk folder.
        </div>
      </section>

      <!-- 3 LANGUAGE -->
      <section id="language">
        <h2><span class="sec-num">03</span>Choosing your language</h2>
        <p>Pick the language you already speak. The prompt appears in both Portuguese and English — <span class="pt">Escolhe a tua língua</span> / <em>Select your language</em>.</p>
        <p>Tap the <strong>&lsaquo;</strong> and <strong>&rsaquo;</strong> arrows to cycle through the flags until you reach yours, then tap <span class="btn-name">Ok</span>. GoGenius supports nine source languages: English, Spanish, Arabic, Mandarin, Russian, Romanian, Ukrainian, German, and French.</p>
        
        <figure class="shot"><div class="phone"><img src="/gogenius-language-selection.png" alt="Language selection screen with a flag carousel and Ok button"></div><figcaption>Cycle to your flag with the arrows, then tap Ok.</figcaption></figure>
        <p>Each of these nine languages is a <strong>support language</strong> — it's there to help you follow the instructions, while everything you're actually learning stays in European Portuguese. That focus is what sets GoGenius apart: most Portuguese-learning apps teach the <strong>Brazilian</strong> variant, which differs noticeably in pronunciation, vocabulary, and grammar, and many language games aren't built for real teaching at all. GoGenius was designed specifically as an educational tool for European Portuguese.</p>
        <div class="call note">
          <span class="tag">Why the interface stays in Portuguese</span>
          Your choice sets the language used for instructions and translations — but the buttons and menu names stay in Portuguese on purpose. Finding your way around a Portuguese interface is part of the immersion, and the words you pick up from the menus (<span class="pt">perfil</span>, <span class="pt">categorias</span>, <span class="pt">atualizar</span>) are words you'll use in real life. This manual gives you the English meaning of every button as you go.
        </div>
      </section>

      <!-- 4 MENU -->
      <section id="menu">
        <h2><span class="sec-num">04</span>Main menu &amp; exiting</h2>
        <p>The main menu is your hub. Three coloured bands each open one area:</p>
        <table class="tbl">
          <thead><tr><th>Button</th><th>Meaning</th><th>What it does</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Profile</td><td>Your account, scores, and app info</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Categories</td><td>The themed games — where you learn and play</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Translator</td><td>Opens Google Translate</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-04.jpg" alt="Main menu with Perfil, Categorias and Tradutor bands"></div><figcaption>The main menu: Perfil, Categorias, Tradutor.</figcaption></figure>
        <div class="call note">
          <span class="tag">Note on Tradutor</span>
          This opens <strong>Google Translate</strong>, taking you out of GoGenius. Use your device's back gesture to return.
        </div>
        <h3>Exiting the app</h3>
        <p>Tap the <strong>red X</strong> in the lower-right corner. GoGenius asks <span class="pt">Deseja sair da GoGenius?</span> (<em>Do you want to leave GoGenius?</em>). Tap <span class="btn-name">Sim</span> (Yes) to close the app, or <span class="btn-name">Não</span> (No) to stay.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-05.jpg" alt="Exit confirmation dialog asking to leave GoGenius with Sim and Não buttons"></div><figcaption>The exit confirmation: Sim (Yes) or Não (No).</figcaption></figure>
      </section>

      <!-- 5 PERFIL -->
      <section id="perfil">
        <h2><span class="sec-num">05</span>Perfil — your profile</h2>
        <p>Tapping <span class="pt">Perfil</span> from the main menu opens a small menu with three choices:</p>
        <table class="tbl">
          <thead><tr><th>Option</th><th>Opens</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Edit your account details (see next section)</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Your scores and rankings</td></tr>
            <tr><td><span class="btn-name">Sobre a APP / Políticas de Privacidade</span></td><td>About the app &amp; privacy policy</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-06.jpg" alt="Perfil menu showing Perfil, Classificações and Sobre a APP options"></div><figcaption>The Perfil menu and its three options.</figcaption></figure>
      </section>

      <!-- 6 EDITAR PERFIL -->
      <section id="editar">
        <h2><span class="sec-num">06</span>Editar Perfil — editing your details</h2>
        <p>The <span class="pt">Editar Perfil</span> screen is where you view and change your account information.</p>
        <table class="tbl">
          <thead><tr><th>Field</th><th>Meaning</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Sexo</span></td><td>Sex (dropdown)</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Age</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Nationality</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Address / location</td></tr>
            <tr><td><span class="btn-name">Password Atual</span></td><td>Current password</td></tr>
            <tr><td><span class="btn-name">Password Nova</span></td><td>New password</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Confirm new password</td></tr>
          </tbody>
        </table>
        <p>You only need the three password fields if you're changing your password — leave them blank otherwise. Tap the <strong>eye icon</strong> beside a password field to show or hide what you've typed.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-07.jpg" alt="Editar Perfil form with fields and Atualizar, Terminar Sessão, Eliminar Perfil buttons"></div><figcaption>The Editar Perfil form and its three action buttons.</figcaption></figure>
        <h3>Action buttons</h3>
        <table class="tbl">
          <thead><tr><th>Button</th><th>Meaning</th><th>What it does</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Update</td><td>Saves the changes you made above</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Log out</td><td>Signs you out of your account</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Delete profile</td><td>Permanently deletes your account</td></tr>
          </tbody>
        </table>
        <div class="call warn">
          <span class="tag">Eliminar Perfil is permanent</span>
          Deleting your profile removes your account along with your accumulated progress and scores. This cannot be undone.
        </div>
      </section>

            <!-- 7 CATEGORIAS (THEMES) -->
      <section id="categorias">
        <h2><span class="sec-num">07</span>Categorias — themes</h2>
        <p><span class="pt">Categorias</span> is the heart of GoGenius: the 14 themed games that make up the curriculum. Each theme takes an everyday topic and builds a set of exercises around it. Some of the themes you'll find include, but are not limited to:</p>
        <div class="themes">
          <span class="theme">A minha gente <span class="en">· My family</span></span>
          <span class="theme">Onde moro <span class="en">· Where I live</span></span>
          <span class="theme">O que visto <span class="en">· What I wear</span></span>
          <span class="theme">Movendo-me <span class="en">· Getting around</span></span>
          <span class="theme">Natura <span class="en">· Nature</span></span>
          <span class="theme">Eu, Hoje e no Futuro <span class="en">· Me, today &amp; the future</span></span>
        </div>
        <p>Whatever theme you enter, the learning is organised around the same three skill areas — the real structure of the app. Each trains a different competency and hands you the solutions as you go:</p>
        <div class="skills">
          <div class="skill graph"><div class="name">Graph</div><div class="role">Writing</div><p><span class="pt">Exercícios de Escrita</span> — writing activities, with worked solutions.</p></div>
          <div class="skill lex"><div class="name">Lex</div><div class="role">Reading</div><p><span class="pt">Exercícios de Leitura</span> — reading practice in European Portuguese, with solutions.</p></div>
          <div class="skill fone"><div class="name">Fonê</div><div class="role">Oral comprehension</div><p><span class="pt">Exercícios de Compreensão Oral</span> — listening and phonology activities.</p></div>
        </div>
        <p>You'll meet these three names again inside every game and on your scoreboard, where your progress in each is tracked (see <span class="pt">Classificações</span>). The next section walks through a whole theme so you can see them in action.</p>
      </section>

      <!-- 8 THEMED GAMES -->
      <section id="themed-games">
        <h2><span class="sec-num">08</span>Themed games — a walkthrough</h2>
        <p>This section follows an example of a themed game you can choose, <span class="pt">A minha gente</span>, from the carousel to the exercises, so you can see how a game actually works.</p>
        <h3>1 · Browse and open a theme</h3>
        <p>Categorias opens as a winding carousel of category circles. Swipe along the path to move between themes and tap a circle to open one; the tab that slides out on the right (here, <span class="pt">A minha gente</span>) shows which theme you're about to enter. The two small tablet icons in the top-right corner are a language switch (explained further down), and the red <strong>question-mark</strong> button opens an index of what every button in the app does — keep it handy as a reference.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-08.jpg" alt="Categorias carousel of circular category buttons along a curved path"></div><figcaption>The Categorias carousel — tap a circle to open a theme.</figcaption>
          </figure>
          <figure class="shot"><div class="phone"><img src="/images/screenshot-09.jpg" alt="Button index opened by the red question mark, explaining Graph, Lex, Fonê and the other buttons"></div><figcaption>The red ? opens this index of every button.</figcaption></figure>
        <p>The index is a handy legend: it names the three exercise types — <span class="pt">Graph</span> (writing), <span class="pt">Lex</span> (reading) and <span class="pt">Fonê</span> (oral comprehension) — alongside <span class="pt">Sair</span> (exit), <span class="pt">Solução</span> (solution), <span class="pt">Saber mais</span> (more info), <span class="pt">Info</span>, the hearing-impairment accessibility icon, and the two language menus (<span class="pt">Menu em Português Europeu</span> and <span class="pt">Menu Escolher Outras Línguas</span>).</p>
        <h3>2 · Pick a game</h3>
        <p>Close the index and tap the <span class="pt">A minha gente</span> theme. A small menu of that theme's games appears — an introductory game plus <span class="pt">Graph</span>, <span class="pt">Lex</span> and <span class="pt">Fonê</span>, each with its own <span class="pt">Jogar</span> (Play) button. You can play them in any order, but it's best to start with the <strong>heart</strong> button — the introductory game.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-10.jpg" alt="A minha gente themed-games menu with heart, Graph, Lex and Fonê circles, each with a Jogar button"></div><figcaption>The theme's games — start with the heart (intro) game.</figcaption></figure>
        <h3>3 · Inside a game</h3>
        <p>Here's what the introductory game looks like in play. Drag and drop the bottom tabs on the corresponding person (<span class="pt">Pai</span>, <span class="pt">Avô</span>, <span class="pt">Filhos/Irmãos</span>, <span class="pt">Mãe</span>, <span class="pt">Avó</span>) to work through the family vocabulary. Two round buttons sit in the bottom-right corner, and the two tablet icons in the top-right switch the language (see the note below).</p>
        <p>The <strong>+ button</strong> opens a <span class="pt">Vocabulário</span> panel listing every word the activity will teach — a handy reference before you begin. The <strong>ear button</strong> shows the activity's goal and instructions as <strong>text</strong>: it's an accessibility feature (headed <span class="pt">Portador de Deficiência Auditiva</span>, &ldquo;person with a hearing impairment&rdquo;) so deaf and hard-of-hearing learners can read exactly what to do.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-11.jpg" alt="A minha gente game screen with family portraits, family-member tabs, plus and ear buttons, and two language tablet icons top-right"></div><figcaption>A game in play, with the two language icons top-right.</figcaption></figure>
        <p>At any moment during an activity or game, look at the bottom centre of the screen for a small <strong>upward-pointing arrow</strong>. Tap it to open a quick menu that jumps to <span class="pt">Perfil</span>, <span class="pt">Categorias</span>, <span class="pt">Tradução</span>, or back to the main <span class="pt">Menu</span> — so you can move between those sections without hunting through the app.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-23.jpg" alt="In-game bottom menu open showing Perfil, Categorias, Tradução and Menu shortcuts"></div><figcaption>The upward arrow opens this menu from any activity or game.</figcaption></figure>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-12.jpg" alt="Vocabulário panel listing family vocabulary, opened by the plus button"></div>
            <figcaption>The <span class="pt">+</span> button&rsquo;s <span class="pt">Vocabulário</span> list</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-13.jpg" alt="Text-instructions panel opened by the ear button, headed Portador de Deficiência Auditiva"></div>
            <figcaption>The ear button&rsquo;s text instructions.</figcaption>
          </figure>
        </div>
        <div class="call note">
          <span class="tag">Hear it again — in your language or in Portuguese</span>
          Every game is bilingual. In the <strong>top-right corner</strong> you'll see two small tablet icons. Tap the <strong>globe tablet</strong> (<span class="pt">Menu Escolher Outras Línguas</span>) to hear or read the current item again in your own language, or the <strong>Portugal-flag tablet</strong> (<span class="pt">Menu em Português Europeu</span>) to switch it back to European Portuguese. Go back and forth as often as you need — the app never locks you into one language.
        </div>
        <h3>4 · Graph, Lex &amp; Fonê</h3>
        <p>After the introductory game, you move on to the theme's three skill exercises — <span class="pt">Graph</span> (writing), <span class="pt">Lex</span> (reading) and <span class="pt">Fonê</span> (oral comprehension).</p>

        <p><span class="pt">Graph</span> focuses on your <strong>writing</strong> skills. Here's how it works in the <span class="pt">A minha gente</span> theme:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-17.jpg" alt="Graph writing activity with A tua resposta placeholder and red lightbulb button"></div><figcaption><span class="pt">Graph</span> — tap <span class="pt">A tua resposta...</span> to start writing.</figcaption></figure>
        <p>Once again, the two tablet icons in the upper-right corner let you hear the activity instructions: the <strong>world-map</strong> button plays them in your native language, and the <strong>Portugal-flag</strong> button plays them in Portuguese.</p>
        <p>After hearing the instructions, tap the peach area where you see <span class="pt">A tua resposta...</span> (&ldquo;Your answer...&rdquo;) and begin writing. Adding a Portuguese keyboard on your device is strongly recommended — on iPhone, for example, you can enable a Portuguese layout so accents, grammar, and spelling stay correct as you type.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-18.jpg" alt="Graph response field with Portuguese keyboard open"></div>
            <figcaption>Keyboard open to type</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-19.jpg" alt="Graph with a typed Portuguese response and blue checkmark to submit"></div>
            <figcaption>Response ready — tap the blue checkmark to submit.</figcaption>
          </figure>
        </div>
        <p>When you finish writing, tap the <strong>blue checkmark</strong>. Then compare your answer with the solution: look to the lower-right corner and tap the <strong>red lightbulb</strong>. A <span class="pt">Solução</span> panel appears with a model response.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-20.jpg" alt="Graph Solução panel with model answer and Obrigado button"></div><figcaption>The red lightbulb opens <span class="pt">Solução</span> — compare, then tap <span class="pt">Obrigado</span>.</figcaption></figure>
        <div class="call tip">
          <span class="tag">Match the meaning, not every word</span>
          Don&rsquo;t worry if your response and the solution vary. What matters is that they share the same meaning, solid grammar and syntax, and convey the same message.
        </div>
        <p><span class="pt">Lex</span> is <strong>reading</strong> practice in European Portuguese, with support built in. As before, the two tablet icons in the upper-right let you hear the activity instructions in your mother tongue (world map) or in Portuguese (Portugal flag).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-21.jpg" alt="Lex reading activity with Portuguese text prompt and Dicionário tab closed"></div>
            <figcaption>The reading prompt</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-22.jpg" alt="Lex with Dicionário expanded showing a Portuguese keyword definition"></div>
            <figcaption><span class="pt">Dicionário</span> open with a keyword explained.</figcaption>
          </figure>
        </div>
        <p>You are given a short text to read and understand. Read it <strong>out loud</strong> — that strengthens conversational skill, pronunciation, and the sound of European Portuguese.</p>
        <p>Below the prompt is an orange <span class="pt">Dicionário</span> (Dictionary) tab. Tap it to expand key words and phrases from the text, explained in Portuguese — useful when a term is new.</p>
        <p>The <strong>red lightbulb</strong> in the lower-right corner plays the prompt aloud in Portuguese as soon as you tap it. Use it as a model for how the text should sound, then practice reading along.</p>
        <div class="call tip">
          <span class="tag">Read, hear, pronounce — then repeat</span>
          The goal of <span class="pt">Lex</span> is reading, listening, and pronouncing in the European Portuguese. Practice often, and always read the prompt out loud.
        </div>
        <p><span class="pt">Fonê</span> works on <strong>oral comprehension</strong> through listening and phonology activities.</p>
        <p>Once again, the two tablet icons in the upper-right corner let you hear the activity instructions in your native language (world map) or in European Portuguese (Portugal flag).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-24.jpg" alt="Fonê questions screen with white disk play button and unanswered multiple-choice items"></div>
            <figcaption>Ready to listen</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-25.jpg" alt="Fonê questions screen while the conversation audio plays"></div>
            <figcaption>Tap the white disk to start the conversation.</figcaption>
          </figure>
        </div>
        <p>Tap the <strong>white disk</strong> beside <span class="pt">Questões</span> to play the conversation you will use as a reference for the questions below. Once selected, the disk turns a little grey and the conversation begins.</p>
        <p>When you finish listening, play it again <strong>two or three times</strong> until you understand it, then mark the correct answers (<span class="pt">Assinale a resposta correta</span>).</p>
        <div class="call tip">
          <span class="tag">Questions stay in European Portuguese</span>
          These reflection questions are always in European Portuguese. Keep Google Translate or your favourite translator app ready — we translate this first module for you below, but later you&rsquo;ll do that yourself. It&rsquo;s a good habit to build with translator apps or your own notes. You can also open <span class="pt">Tradução</span> from the bottom arrow menu.
        </div>
        <p>Here are the questions and options, with English translations:</p>
        <table class="tbl">
          <thead><tr><th>Portuguese</th><th>English</th></tr></thead>
          <tbody>
            <tr>
              <td>
                <span class="btn-name">1. O Filipe perguntou ao João se:</span><br>
                · Não ia haver aula de Português.<br>
                · Não ia haver aula de História.<br>
                · Não ia ter teste de História.
              </td>
              <td>
                1. Filipe asked João if:<br>
                · There wouldn&rsquo;t be a Portuguese class.<br>
                · There wouldn&rsquo;t be a History class.<br>
                · There wouldn&rsquo;t be a History test.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">2. O João vai faltar à aula porque:</span><br>
                · Não lhe apetece ir.<br>
                · Tem de ir à praia.<br>
                · Tem de ir ao dentista.
              </td>
              <td>
                2. João will miss class because:<br>
                · He doesn&rsquo;t feel like going.<br>
                · He has to go to the beach.<br>
                · He has to go to the dentist.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">3. A aula de História:</span><br>
                · Não ia haver no dia seguinte.<br>
                · Foi adiada para a tarde.<br>
                · Foi adiada para a noite.
              </td>
              <td>
                3. The History class:<br>
                · Wouldn&rsquo;t take place the next day.<br>
                · Was postponed to the afternoon.<br>
                · Was postponed to the evening.
              </td>
            </tr>
          </tbody>
        </table>
        <p>We&rsquo;ve already marked the answers for this first module to help you along:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-26.jpg" alt="Fonê with the correct answers selected for all three questions"></div><figcaption>Sample answers marked — tap <span class="pt">continuar</span> when you&rsquo;re ready.</figcaption></figure>
        <ol>
          <li><span class="pt">Não ia haver aula de História.</span> — There wouldn&rsquo;t be a History class.</li>
          <li><span class="pt">Tem de ir ao dentista.</span> — He has to go to the dentist.</li>
          <li><span class="pt">Foi adiada para a tarde.</span> — It was postponed to the afternoon.</li>
        </ol>
        <p>As in <span class="pt">Lex</span>, an orange <span class="pt">Dicionário</span> tab shows key vocabulary from this section. Tap it to expand definitions in Portuguese.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-29.jpg" alt="Fonê answers selected with Dicionário expanded"></div><figcaption>The <span class="pt">Dicionário</span> tab — key words explained in Portuguese.</figcaption></figure>
        <p>The <strong>red ear button</strong> in the bottom-right corner is an accessibility feature: it shows the conversation as written text (headed <span class="pt">Portador de Deficiência Auditiva</span>). If any word or phrase is unclear, use your translator app or notes.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-28.jpg" alt="Fonê accessibility overlay with the written conversation transcript"></div><figcaption>The ear button opens the written conversation — tap <span class="pt">Obrigado</span> to close.</figcaption></figure>
        <p>When you finish the questions, tap <span class="pt">continuar</span> (continue) at the bottom to move on to the next part of <span class="pt">Fonê</span>.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-32.jpg" alt="Fonê screen with answers selected, Dicionário open, and continuar link"></div><figcaption>Tap <span class="pt">continuar</span> to continue to phonology practice.</figcaption></figure>
        <p><span class="pt">Fonê</span> also includes phonology practice: word bubbles to work through, a <strong>red lightbulb</strong> for the solution, and the same ear button for text support — for example, a prompt to spell family words.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-30.jpg" alt="Fonê phonology screen with Família, Pai, Mãe and Filho word circles"></div>
            <figcaption>Phonology word practice</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-31.jpg" alt="Fonê accessibility panel prompting to spell the words, headed Portador de Deficiência Auditiva"></div>
            <figcaption>The ear button&rsquo;s text instructions.</figcaption>
          </figure>
        </div>
        <div class="call tip">
          <span class="tag">Listen more than once</span>
          Oral comprehension improves with repetition. Replay the disk, check the <span class="pt">Dicionário</span>, and use the ear transcript whenever you need a second look at the dialogue.
        </div>
        <h3>5 · Beyond this walkthrough</h3>
        <p>What you just followed in <span class="pt">A minha gente</span> applies to any theme or activity in GoGenius, with only small variations. The activities are largely self-explanatory, and you already have the tools for success: bilingual instructions, the bottom arrow menu, <span class="pt">Dicionário</span>, solutions, accessibility text, and <span class="pt">Tradução</span> when you need a hand.</p>
        <p>If something in the app is unclear, come back to this manual — or reach out through <a href="#support">Support &amp; contact</a>. We&rsquo;re here to help you on this journey of learning European Portuguese.</p>
        <div class="call tip">
          <span class="tag"><span class="pt">Boa sorte!</span> · Good luck</span>
          Enjoy the games — and keep practicing.
        </div>
      </section>

<!-- 7 CLASSIFICACOES -->
      <section id="scores">
        <h2><span class="sec-num">09</span>Classificações — scores &amp; rankings</h2>
        <p>Reached through <span class="pt">Perfil ▸ Classificações</span>, this is your scoreboard. It lists every theme in the app; tap one to expand it and see how you've done.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-14.jpg" alt="Classificações list of themes with icons"></div>
            <figcaption>The theme list in <span class="pt">Classificações</span>.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-15.png" alt="Expanded theme card showing a star rating and Graph, Lex, Fonê completion badges"></div>
            <figcaption>An expanded theme with star rating and skill badges.</figcaption>
          </figure>
        </div>
        <p>Each expanded theme shows a <strong>star rating</strong> (out of five) plus a completion badge for each of the three skills — <span class="pt">Graph</span>, <span class="pt">Lex</span>, and <span class="pt">Fonê</span>. A green check means you've finished that skill's exercises for the theme.</p>
        <div class="call tip">
          <span class="tag">How points are earned</span>
          Stars and points are awarded only when you <strong>complete all the tasks</strong> in a game — partial completion doesn't count, because a finished game is treated as evidence you've actually learned the material. If you can't finish in one sitting, just leave it and pick it up later; nothing is lost.
        </div>
      </section>

      <!-- 8 SOBRE -->
      <section id="sobre">
        <h2><span class="sec-num">10</span>Sobre a APP &amp; privacy</h2>
        <p>Also under <span class="pt">Perfil</span>, the <span class="pt">Sobre a APP / Políticas de Privacidade</span> screen holds background on the app and its full privacy policy. Tap the <strong>Portuguese</strong> or <strong>English</strong> flag at the top to switch languages.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-16.jpg" alt="About the App screen with Portuguese and English flag toggle"></div><figcaption>About the App, with the PT / EN flag toggle.</figcaption></figure>
        <p class="intro-note">
          
          In short: GoGenius supports assisted learning of European Portuguese through reading, writing, and phonetic exercises, backed by tutorials in several languages. As you play, a classification grid is built so you can see your proficiency. The app is available on Android and iOS, and the research team suggests short daily sessions of 15–20 minutes for best results.
        </p>
  
        <p>The policy is also online at <a href="https://privacidade.grupoautonoma.pt/index.php/politica-de-privacidade-go-genius-en/" target="_blank" rel="noopener">privacidade.grupoautonoma.pt</a>.</p>
      </section>

      <!-- 9 SUPPORT -->
      <section id="support">
        <h2><span class="sec-num">11</span>Support &amp; contact</h2>
        <div class="cards">
          <div class="card"><h4>App support</h4><p><a href="mailto:gogenius@autonoma.pt">gogenius@autonoma.pt</a></p></div>
          <div class="card"><h4>Developer</h4><p>TOO WILD — SOFTWARE, LDA</p><p><a href="mailto:toowildsoftware@gmail.com">toowildsoftware@gmail.com</a></p><p>+351 923 544 221</p></div>
        </div>
      </section>

      <!-- GLOSSARY -->
      <section id="glossary">
        <h2><span class="sec-num">A</span>Quick Portuguese glossary</h2>
        <table class="tbl">
          <thead><tr><th>Portuguese</th><th>English</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Bem-Vindo!</span></td><td>Welcome!</td></tr>
            <tr><td><span class="btn-name">Entrar</span></td><td>Log in</td></tr>
            <tr><td><span class="btn-name">Registar</span></td><td>Register</td></tr>
            <tr><td><span class="btn-name">Recuperar Password</span></td><td>Recover password</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Locality / town
                <br>
                <span style="color:#666;font-size:0.96em;">
                  Where are you accessing the app from?
                </span>
              </td>
            </tr>
 
            <tr><td><span class="btn-name">Menu</span></td><td>Main menu</td></tr>
            <tr><td><span class="btn-name">Perfil</span></td><td>Profile</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Categories (the games)</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Translator</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Scores / Rankings</td></tr>
            <tr><td><span class="btn-name">Editar Perfil</span></td><td>Edit profile</td></tr>
            <tr><td><span class="btn-name">Sobre a APP</span></td><td>About the App</td></tr>
            <tr><td><span class="btn-name">Políticas de Privacidade</span></td><td>Privacy Policy</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Sex</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Age</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Nationality</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Address / Location</td></tr>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Update</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Log out</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Delete profile</td></tr>
            <tr><td><span class="btn-name">Sim / Não</span></td><td>Yes / No</td></tr>
          </tbody>
        </table>
        <footer class="doc-foot"><p>GoGenius is supported by the FCT — Fundação para a Ciência e a Tecnologia through national funds, and by the Centro de Investigação em Psicologia (CIP-UAL).</p></footer>
      </section>`,yh=`<header class="hero" id="welcome">
        <div class="eyebrow">Ual: Universidade Autónoma de Lisboa Luís de Camões </div>
        <h1>El manual de GoGenius</h1>
        <p class="lede">GoGenius es la primera aplicación diseñada para enseñar <strong>portugués europeo</strong>, especialmente a hablantes de nueve idiomas principales, aunque puede utilizarla cualquier persona interesada en aprender. Mediante <strong>juegos temáticos</strong> de comprensión auditiva, lectura y escritura, esta guía le acompaña por todas las pantallas y botones.</p>

        <div class="call tip">
          <span class="tag">Antes de empezar</span>
          Para disfrutar de la mejor experiencia, conecte unos auriculares con cable o unos <strong>auriculares Bluetooth</strong> a su teléfono o tableta antes de abrir GoGenius. Asegúrese de que el audio se reproduce por esos auriculares — muchos juegos dependen de la comprensión auditiva, y un sonido claro ayuda a seguir las indicaciones y las actividades de pronunciación sin distracciones.
        </div>
  
        <div class="langstrip" aria-label="Idiomas de origen compatibles">
          <span class="lang">Árabe</span><span class="lang">Ruso</span><span class="lang">Ucraniano</span>
          <span class="lang">Rumano</span><span class="lang">Inglés</span><span class="lang">Francés</span>
          <span class="lang">Español</span><span class="lang">Mandarín</span><span class="lang">Alemán</span>
        </div>
        <div class="factbar">
          <div class="fact"><div class="n">14</div><div class="l">juegos temáticos</div></div>
          <div class="fact"><div class="n">A1&rarr;B2</div><div class="l">niveles de aprendizaje</div></div>
          <div class="fact"><div class="n">7+</div><div class="l">edad recomendada</div></div>
        </div>
        <p class="intro-note" style="margin-top:1.6rem;">GoGenius está diseñado para inmigrantes y refugiados que viven en Portugal, estudiantes extranjeros de portugués de cualquier lugar y centros educativos que lo utilizan como herramienta para el aula. Funciona en teléfonos y tabletas con Android, así como en dispositivos con iOS. Una sola descarga desbloquea todos los módulos — <strong>no hay suscripción</strong>.</p>
        <p class="intro-note">GoGenius también está diseñado para ser <strong>inclusivo</strong>: todos los juegos incluyen una versión escrita de su objetivo y sus instrucciones para estudiantes sordos y con dificultades auditivas, y cualquier elemento puede volver a reproducirse en su propio idioma o en portugués europeo cuando lo necesite.</p>
        <p class="intro-note">El modelo educativo fue creado por <strong>PhD Sandra Figueiredo</strong>.</p>
      </header>

      <!-- QUICK START -->
      <section id="quickstart">
        <div class="quickstart">
          <div class="qs-eyebrow">Empiece · 60 segundos</div>
          <div class="qs-title">Primeros pasos en un minuto</div>
          <ul>
            <li><strong>Cinco minutos al día son suficientes.</strong> Complete las tareas del día en unos cinco minutos — si mantiene ese ritmo, puede avanzar desde A2 hacia B1 en aproximadamente dos meses.</li>
            <li><strong>Aprendan juntos.</strong> Los ejercicios funcionan igual de bien en grupo que de forma individual.</li>
            <li><strong>Diseñado para el aula.</strong> El profesorado puede utilizar los juegos en clase y convertirlos en un concurso de preguntas para todo el grupo.</li>
          </ul>
        </div>
      </section>

      <!-- 1 LAUNCH -->
      <section id="launch">
        <h2><span class="sec-num">01</span>Pantalla de inicio</h2>
        <p>Al abrir GoGenius, aparece la pantalla de bienvenida — el logotipo sobre una cálida cinta de palabras que significan &ldquo;hola&rdquo; en muchos idiomas. Al cabo de un momento, le lleva a la selección de idioma.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-01.jpg" alt="Pantalla de bienvenida de GoGenius con el logotipo sobre franjas de idiomas de colores"></div><figcaption>La pantalla de bienvenida de GoGenius.</figcaption></figure>
      </section>

      <!-- 2 SIGN IN -->
      <section id="signin">
        <h2><span class="sec-num">02</span>Inicio de sesión &amp; registro</h2>
        <p>A continuación aparece la pantalla <span class="pt">Bem-Vindo!</span> (<em>¡Bienvenido!</em>). Si ya tiene una cuenta, inicie sesión aquí; si es la primera vez que entra, cree una.</p>
        <h3>Si ya tiene una cuenta</h3>
        <p>Introduzca su <span class="pt">E-mail</span> y <span class="pt">Password</span>, y después pulse <span class="btn-name">Entrar</span> (Iniciar sesión). Pulse el <strong>icono del ojo</strong> para comprobar lo que ha escrito. ¿Ha olvidado la contraseña? Pulse <span class="btn-name">Recuperar Password</span> (Recuperar contraseña) para restablecerla por correo electrónico.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-02.jpg" alt="Pantalla de inicio de sesión con los campos E-mail y Password, y los botones Entrar y Registar"></div><figcaption>La pantalla de inicio de sesión — inicie sesión o pulse Registar para crear una cuenta.</figcaption></figure>
        <h3>Si es nuevo — regístrese</h3>
        <p>Pulse <span class="btn-name">Registar</span> (Registrarse) para abrir el formulario de registro (<span class="pt">Entrar com o E-mail</span>). Rellene sus datos y pulse <span class="btn-name">Registar</span> para terminar.</p>
        <table class="tbl">
          <thead><tr><th>Campo</th><th>Significado</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Idade</span></td><td>Edad</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Sexo (lista desplegable)</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Nacionalidad</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Localidad / población
                <br>
                <span style="color:#666;font-size:0.96em;">
                  ¿Desde dónde accede a la aplicación?
                </span>
              </td>
            </tr>

            <tr><td><span class="btn-name">E-mail</span></td><td>Dirección de correo electrónico</td></tr>
            <tr><td><span class="btn-name">Password</span></td><td>Contraseña</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Confirmar contraseña</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-03.jpg" alt="Formulario de registro con los campos Idade, Sexo, Nacionalidade, Localidade, E-mail y contraseña"></div><figcaption>El formulario de registro.</figcaption></figure>
        <div class="call note">
          <span class="tag">Confirme su correo electrónico</span>
          Después de registrarse, GoGenius envía un <strong>correo electrónico de confirmación</strong> a la dirección indicada. Ábralo y siga el enlace para activar su cuenta antes de iniciar sesión. Si no aparece en su bandeja de entrada después de unos minutos, revise la carpeta de spam o correo no deseado.
        </div>
      </section>

      <!-- 3 LANGUAGE -->
      <section id="language">
        <h2><span class="sec-num">03</span>Elección de idioma</h2>
        <p>Elija el idioma que ya habla. La indicación aparece tanto en portugués como en inglés — <span class="pt">Escolhe a tua língua</span> / <em>Seleccione su idioma</em>.</p>
        <p>Pulse las flechas <strong>&lsaquo;</strong> y <strong>&rsaquo;</strong> para recorrer las banderas hasta llegar a la suya y, a continuación, pulse <span class="btn-name">Ok</span>. GoGenius admite nueve idiomas de origen: inglés, español, árabe, mandarín, ruso, rumano, ucraniano, alemán y francés.</p>
        
        <figure class="shot"><div class="phone"><img src="/spanish_logo.png" alt="Pantalla de selección de idioma con un carrusel de banderas y el botón Ok"></div><figcaption>Utilice las flechas para llegar a su bandera y pulse Ok.</figcaption></figure>
        <p>Cada uno de estos nueve idiomas es un <strong>idioma de apoyo</strong> — sirve para ayudarle a seguir las instrucciones, mientras que todo lo que aprende permanece en portugués europeo. Este enfoque es lo que distingue a GoGenius: la mayoría de las aplicaciones para aprender portugués enseñan la variante <strong>brasileña</strong>, que presenta diferencias apreciables de pronunciación, vocabulario y gramática, y muchos juegos de idiomas ni siquiera están creados para enseñar de verdad. GoGenius se diseñó específicamente como herramienta educativa para el portugués europeo.</p>
        <div class="call note">
          <span class="tag">Por qué la interfaz permanece en portugués</span>
          Su elección determina el idioma utilizado para las instrucciones y las traducciones — pero los botones y los nombres de los menús permanecen en portugués de forma intencionada. Aprender a orientarse en una interfaz en portugués forma parte de la inmersión, y las palabras que aprende en los menús (<span class="pt">perfil</span>, <span class="pt">categorias</span>, <span class="pt">atualizar</span>) son palabras que utilizará en la vida real. Este manual le ofrece el significado en español de cada botón a medida que avanza.
        </div>
      </section>

      <!-- 4 MENU -->
      <section id="menu">
        <h2><span class="sec-num">04</span>Menú principal &amp; salida</h2>
        <p>El menú principal es su centro de operaciones. Cada una de las tres franjas de colores abre una sección:</p>
        <table class="tbl">
          <thead><tr><th>Botón</th><th>Significado</th><th>Qué hace</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Perfil</td><td>Su cuenta, puntuaciones e información de la aplicación</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Categorías</td><td>Los juegos temáticos — donde aprende y juega</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Traductor</td><td>Abre Google Translate</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-04.jpg" alt="Menú principal con las franjas Perfil, Categorias y Tradutor"></div><figcaption>El menú principal: Perfil, Categorias, Tradutor.</figcaption></figure>
        <div class="call note">
          <span class="tag">Nota sobre Tradutor</span>
          Esta opción abre <strong>Google Translate</strong>, por lo que saldrá de GoGenius. Utilice el gesto de retroceso de su dispositivo para volver.
        </div>
        <h3>Salir de la aplicación</h3>
        <p>Pulse la <strong>X roja</strong> de la esquina inferior derecha. GoGenius pregunta <span class="pt">Deseja sair da GoGenius?</span> (<em>¿Desea salir de GoGenius?</em>). Pulse <span class="btn-name">Sim</span> (Sí) para cerrar la aplicación o <span class="btn-name">Não</span> (No) para quedarse.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-05.jpg" alt="Cuadro de confirmación que pregunta si desea salir de GoGenius con los botones Sim y Não"></div><figcaption>La confirmación de salida: Sim (Sí) o Não (No).</figcaption></figure>
      </section>

      <!-- 5 PERFIL -->
      <section id="perfil">
        <h2><span class="sec-num">05</span>Perfil — su perfil</h2>
        <p>Al pulsar <span class="pt">Perfil</span> en el menú principal, se abre un pequeño menú con tres opciones:</p>
        <table class="tbl">
          <thead><tr><th>Opción</th><th>Abre</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Editar los datos de su cuenta (consulte la siguiente sección)</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Sus puntuaciones y clasificaciones</td></tr>
            <tr><td><span class="btn-name">Sobre a APP / Políticas de Privacidade</span></td><td>Información sobre la aplicación &amp; política de privacidad</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-06.jpg" alt="Menú Perfil que muestra las opciones Perfil, Classificações y Sobre a APP"></div><figcaption>El menú Perfil y sus tres opciones.</figcaption></figure>
      </section>

      <!-- 6 EDITAR PERFIL -->
      <section id="editar">
        <h2><span class="sec-num">06</span>Editar Perfil — edición de sus datos</h2>
        <p>La pantalla <span class="pt">Editar Perfil</span> es donde puede consultar y modificar la información de su cuenta.</p>
        <table class="tbl">
          <thead><tr><th>Campo</th><th>Significado</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Sexo</span></td><td>Sexo (lista desplegable)</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Edad</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Nacionalidad</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Dirección / ubicación</td></tr>
            <tr><td><span class="btn-name">Password Atual</span></td><td>Contraseña actual</td></tr>
            <tr><td><span class="btn-name">Password Nova</span></td><td>Nueva contraseña</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Confirmar la nueva contraseña</td></tr>
          </tbody>
        </table>
        <p>Solo necesita los tres campos de contraseña si va a cambiarla — de lo contrario, déjelos en blanco. Pulse el <strong>icono del ojo</strong> situado junto a un campo de contraseña para mostrar u ocultar lo que ha escrito.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-07.jpg" alt="Formulario Editar Perfil con campos y los botones Atualizar, Terminar Sessão y Eliminar Perfil"></div><figcaption>El formulario Editar Perfil y sus tres botones de acción.</figcaption></figure>
        <h3>Botones de acción</h3>
        <table class="tbl">
          <thead><tr><th>Botón</th><th>Significado</th><th>Qué hace</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Actualizar</td><td>Guarda los cambios realizados arriba</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Cerrar sesión</td><td>Cierra la sesión de su cuenta</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Eliminar perfil</td><td>Elimina su cuenta de forma permanente</td></tr>
          </tbody>
        </table>
        <div class="call warn">
          <span class="tag">Eliminar Perfil es permanente</span>
          Al eliminar su perfil, se borra su cuenta junto con el progreso y las puntuaciones acumulados. Esta acción no se puede deshacer.
        </div>
      </section>

            <!-- 7 CATEGORIAS (THEMES) -->
      <section id="categorias">
        <h2><span class="sec-num">07</span>Categorias — temas</h2>
        <p><span class="pt">Categorias</span> es el corazón de GoGenius: los 14 juegos temáticos que componen el programa. Cada tema aborda un asunto cotidiano y crea a su alrededor un conjunto de ejercicios. Entre los temas que encontrará se incluyen, entre otros:</p>
        <div class="themes">
          <span class="theme">A minha gente <span class="en">· Mi familia</span></span>
          <span class="theme">Onde moro <span class="en">· Donde vivo</span></span>
          <span class="theme">O que visto <span class="en">· Lo que llevo puesto</span></span>
          <span class="theme">Movendo-me <span class="en">· Desplazamientos</span></span>
          <span class="theme">Natura <span class="en">· Naturaleza</span></span>
          <span class="theme">Eu, Hoje e no Futuro <span class="en">· Yo, hoy &amp; el futuro</span></span>
        </div>
        <p>Sea cual sea el tema al que acceda, el aprendizaje se organiza en torno a las mismas tres áreas de habilidades — la verdadera estructura de la aplicación. Cada una entrena una competencia diferente y le ofrece las soluciones a medida que avanza:</p>
        <div class="skills">
          <div class="skill fone"><div class="name">Fonê</div><div class="role">Comprensión oral</div><p><span class="pt">Exercícios de Compreensão Oral</span> — actividades de comprensión auditiva y fonología.</p></div>
          <div class="skill lex"><div class="name">Lex</div><div class="role">Lectura</div><p><span class="pt">Exercícios de Leitura</span> — práctica de lectura en portugués europeo, con soluciones.</p></div>
          <div class="skill graph"><div class="name">Graph</div><div class="role">Escritura</div><p><span class="pt">Exercícios de Escrita</span> — actividades de escritura, con soluciones explicadas.</p></div>
        </div>
        <p>Volverá a encontrar estos tres nombres dentro de cada juego y en su marcador, donde se registra su progreso en cada uno (consulte <span class="pt">Classificações</span>). La siguiente sección recorre un tema completo para que pueda verlos en acción.</p>
      </section>

      <!-- 8 THEMED GAMES -->
      <section id="themed-games">
        <h2><span class="sec-num">08</span>Juegos temáticos — guía paso a paso</h2>
        <p>Esta sección sigue el ejemplo de un juego temático que puede elegir, <span class="pt">A minha gente</span>, desde el carrusel hasta los ejercicios, para que pueda ver cómo funciona realmente un juego.</p>
        <h3>1 · Explorar y abrir un tema</h3>
        <p>Categorias se abre como un carrusel sinuoso de círculos de categorías. Deslice el dedo por el recorrido para moverse entre los temas y pulse un círculo para abrir uno; la pestaña que se despliega a la derecha (en este caso, <span class="pt">A minha gente</span>) muestra el tema al que está a punto de entrar. Los dos pequeños iconos de tableta de la esquina superior derecha permiten cambiar de idioma (se explican más abajo), y el botón rojo con un <strong>signo de interrogación</strong> abre un índice que explica la función de todos los botones de la aplicación — téngalo a mano como referencia.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-08.jpg" alt="Carrusel Categorias con botones de categorías circulares a lo largo de un recorrido curvo"></div><figcaption>El carrusel Categorias — pulse un círculo para abrir un tema.</figcaption>
          </figure>
          <figure class="shot"><div class="phone"><img src="/images/screenshot-09.jpg" alt="Índice de botones abierto mediante el signo de interrogación rojo, que explica Graph, Lex, Fonê y los demás botones"></div><figcaption>El ? rojo abre este índice de todos los botones.</figcaption></figure>
        <p>El índice es una leyenda práctica: nombra los tres tipos de ejercicios — <span class="pt">Graph</span> (escritura), <span class="pt">Lex</span> (lectura) y <span class="pt">Fonê</span> (comprensión oral) — junto con <span class="pt">Sair</span> (salir), <span class="pt">Solução</span> (solución), <span class="pt">Saber mais</span> (más información), <span class="pt">Info</span>, el icono de accesibilidad para personas con dificultades auditivas y los dos menús de idioma (<span class="pt">Menu em Português Europeu</span> y <span class="pt">Menu Escolher Outras Línguas</span>).</p>
        <h3>2 · Elegir un juego</h3>
        <p>Cierre el índice y pulse el tema <span class="pt">A minha gente</span>. Aparece un pequeño menú con los juegos de ese tema — un juego introductorio, además de <span class="pt">Graph</span>, <span class="pt">Lex</span> y <span class="pt">Fonê</span>, cada uno con su propio botón <span class="pt">Jogar</span> (Jugar). Puede jugarlos en cualquier orden, pero lo mejor es empezar por el botón del <strong>corazón</strong> — el juego introductorio.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-10.jpg" alt="Menú de juegos temáticos A minha gente con círculos de corazón, Graph, Lex y Fonê, cada uno con un botón Jogar"></div><figcaption>Los juegos del tema — empiece por el juego introductorio del corazón.</figcaption></figure>
        <h3>3 · Dentro de un juego</h3>
        <p>Este es el aspecto del juego introductorio mientras juega. Arrastre y suelte las pestañas inferiores sobre la persona correspondiente (<span class="pt">Pai</span>, <span class="pt">Avô</span>, <span class="pt">Filhos/Irmãos</span>, <span class="pt">Mãe</span>, <span class="pt">Avó</span>) para practicar el vocabulario de la familia. Hay dos botones redondos en la esquina inferior derecha, y los dos iconos de tableta de la esquina superior derecha cambian el idioma (consulte la nota de abajo).</p>
        <p>El <strong>botón +</strong> abre un panel de <span class="pt">Vocabulário</span> que enumera todas las palabras que enseñará la actividad — una referencia útil antes de empezar. El <strong>botón de la oreja</strong> muestra el objetivo y las instrucciones de la actividad como <strong>texto</strong>: es una función de accesibilidad (titulada <span class="pt">Portador de Deficiência Auditiva</span>, &ldquo;persona con discapacidad auditiva&rdquo;) para que los estudiantes sordos y con dificultades auditivas puedan leer exactamente qué deben hacer.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-11.jpg" alt="Pantalla del juego A minha gente con retratos familiares, pestañas de miembros de la familia, botones más y oreja, y dos iconos de idioma en forma de tableta arriba a la derecha"></div><figcaption>Una partida en curso, con los dos iconos de idioma arriba a la derecha.</figcaption></figure>
        <p>En cualquier momento durante una actividad o un juego, mire el centro inferior de la pantalla: una pequeña <strong>flecha hacia arriba</strong> abre un menú rápido hacia <span class="pt">Perfil</span>, <span class="pt">Categorias</span>, <span class="pt">Tradução</span> o el <span class="pt">Menu</span> principal — para pasar entre esas secciones sin buscar por la aplicación.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-23.jpg" alt="Menú inferior abierto en el juego con accesos a Perfil, Categorias, Tradução y Menu"></div><figcaption>La flecha hacia arriba abre este menú desde cualquier actividad o juego.</figcaption></figure>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-12.jpg" alt="Panel Vocabulário que enumera vocabulario familiar, abierto mediante el botón más"></div>
            <figcaption>La lista de <span class="pt">Vocabulário</span> del botón <span class="pt">+</span></figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-13.jpg" alt="Panel de instrucciones en texto abierto mediante el botón de la oreja, titulado Portador de Deficiência Auditiva"></div>
            <figcaption>Las instrucciones en texto del botón de la oreja.</figcaption>
          </figure>
        </div>
        <div class="call note">
          <span class="tag">Vuelva a escucharlo — en su idioma o en portugués</span>
          Todos los juegos son bilingües. En la <strong>esquina superior derecha</strong> verá dos pequeños iconos de tableta. Pulse la <strong>tableta con el globo terráqueo</strong> (<span class="pt">Menu Escolher Outras Línguas</span>) para volver a escuchar o leer el elemento actual en su propio idioma, o la <strong>tableta con la bandera de Portugal</strong> (<span class="pt">Menu em Português Europeu</span>) para cambiarlo de nuevo a portugués europeo. Alterne entre ambos tantas veces como necesite — la aplicación nunca le limita a un solo idioma.
        </div>
        <h3>4 · Graph, Lex &amp; Fonê</h3>
        <p>Después del juego introductorio, continuará con los tres ejercicios de habilidades del tema — <span class="pt">Graph</span> (escritura), <span class="pt">Lex</span> (lectura) y <span class="pt">Fonê</span> (comprensión oral).</p>

        <p><span class="pt">Graph</span> se centra en sus habilidades de <strong>escritura</strong>. Así funciona en el tema <span class="pt">A minha gente</span>:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-17.jpg" alt="Actividad de escritura Graph con el espacio A tua resposta y el botón de bombilla roja"></div><figcaption><span class="pt">Graph</span> — pulse <span class="pt">A tua resposta...</span> para empezar a escribir.</figcaption></figure>
        <p>Una vez más, los dos iconos de tableta en la esquina superior derecha le permiten oír las instrucciones: el botón del <strong>mapa del mundo</strong> las reproduce en su idioma, y el botón de la <strong>bandera de Portugal</strong> las reproduce en portugués.</p>
        <p>Tras oír las instrucciones, pulse la zona color melocotón donde aparece <span class="pt">A tua resposta...</span> («Su respuesta...») y empiece a escribir. Se recomienda añadir un teclado portugués en su dispositivo — en iPhone, por ejemplo, puede activar un diseño portugués para mantener correctos los acentos, la gramática y la ortografía.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-18.jpg" alt="Campo de respuesta Graph con teclado portugués abierto"></div>
            <figcaption>Teclado abierto para escribir</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-19.jpg" alt="Graph con una respuesta en portugués y la marca azul para enviar"></div>
            <figcaption>Respuesta lista — pulse la marca azul para enviar.</figcaption>
          </figure>
        </div>
        <p>Cuando termine de escribir, pulse la <strong>marca de verificación azul</strong>. Luego compare su respuesta con la solución: mire la esquina inferior derecha y pulse la <strong>bombilla roja</strong>. Aparece un panel <span class="pt">Solução</span> con una respuesta modelo.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-20.jpg" alt="Panel Solução de Graph con la respuesta modelo y el botón Obrigado"></div><figcaption>La bombilla roja abre <span class="pt">Solução</span> — compare y pulse <span class="pt">Obrigado</span>.</figcaption></figure>
        <div class="call tip">
          <span class="tag">Coincide el sentido, no cada palabra</span>
          No se preocupe si su respuesta y la solución varían. Lo importante es que compartan el mismo significado, una gramática y sintaxis sólidas, y transmitan el mismo mensaje.
        </div>
        <p><span class="pt">Lex</span> es práctica de <strong> lectura </strong> en portugués europeo, con apoyo integrado. Como antes, los dos iconos de tableta en la esquina superior derecha le permiten oír las instrucciones en su lengua materna (mapa del mundo) o en portugués (bandera de Portugal).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-21.jpg" alt="Actividad de lectura Lex con el texto en portugués y la pestaña Dicionário cerrada"></div>
            <figcaption>El texto para leer</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-22.jpg" alt="Lex con Dicionário abierto mostrando la definición de una palabra clave en portugués"></div>
            <figcaption><span class="pt">Dicionário</span> abierto con una palabra explicada.</figcaption>
          </figure>
        </div>
        <p>Se le da un texto breve para leer y comprender. Léalo <strong>en voz alta</strong> — eso refuerza la conversación, la pronunciación y el sonido del portugués europeo.</p>
        <p>Debajo del texto hay una pestaña naranja <span class="pt">Dicionário</span> (Diccionario). Púlsela para desplegar palabras y frases clave del texto, explicadas en portugués — útil cuando un término es nuevo.</p>
        <p>La <strong>bombilla roja</strong> en la esquina inferior derecha reproduce el texto en voz alta en portugués en cuanto la pulsa. Úsela como modelo de cómo debe sonar, y practique leyendo a la vez.</p>
        <div class="call tip">
          <span class="tag">Leer, oír, pronunciar — y repetir</span>
          El objetivo de <span class="pt">Lex</span> es leer, escuchar y pronunciar en el dialecto portugués europeo (PT). Practique a menudo y lea siempre el texto en voz alta.
        </div>
        <p><span class="pt">Fonê</span> trabaja la <strong>comprensión oral</strong> por actividades de escucha y fonología.</p>
        <p>Una vez más, los dos iconos de tableta en la esquina superior derecha le permiten oír las instrucciones en su lengua materna (mapa del mundo) o en portugués europeo (bandera de Portugal).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-24.jpg" alt="Pantalla de preguntas Fonê con el botón disco blanco y opciones sin marcar"></div>
            <figcaption>Listo para escuchar</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-25.jpg" alt="Pantalla de preguntas Fonê mientras suena la conversación"></div>
            <figcaption>Pulse el disco blanco para iniciar la conversación.</figcaption>
          </figure>
        </div>
        <p>Pulse el <strong>disco blanco</strong> junto a <span class="pt">Questões</span> para reproducir la conversación que usará como referencia en las preguntas. Al seleccionarlo, el disco se vuelve un poco gris y comienza la conversación.</p>
        <p>Cuando termine de escuchar, reprodúzcala <strong>dos o tres veces</strong> hasta entenderla y marque las respuestas correctas (<span class="pt">Assinale a resposta correta</span>).</p>
        <div class="call tip">
          <span class="tag">Las preguntas siguen en portugués europeo</span>
          Estas preguntas de reflexión están siempre en portugués europeo. Tenga a mano Google Translate o su traductor favorito — traducimos este primer módulo abajo, pero más adelante lo hará usted. Es un buen hábito. También puede abrir <span class="pt">Tradução</span> desde el menú de la flecha inferior.
        </div>
        <p>Aquí están las preguntas y opciones, con traducciones al español:</p>
        <table class="tbl">
          <thead><tr><th>Portugués</th><th>Español</th></tr></thead>
          <tbody>

            <tr>
              <td>
                <span class="btn-name">1. O Filipe perguntou ao João se:</span><br>
                · Não ia haver aula de Português.<br>
                · Não ia haver aula de História.<br>
                · Não ia ter teste de História.
              </td>
              <td>
                1. Filipe le preguntó a João si:<br>· No iba a haber clase de portugués.<br>· No iba a haber clase de Historia.<br>· No iba a haber examen de Historia.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">2. O João vai faltar à aula porque:</span><br>
                · Não lhe apetece ir.<br>
                · Tem de ir à praia.<br>
                · Tem de ir ao dentista.
              </td>
              <td>
                2. João faltará a clase porque:<br>· No le apetece ir.<br>· Tiene que ir a la playa.<br>· Tiene que ir al dentista.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">3. A aula de História:</span><br>
                · Não ia haver no dia seguinte.<br>
                · Foi adiada para a tarde.<br>
                · Foi adiada para a noite.
              </td>
              <td>
                3. La clase de Historia:<br>· No iba a haber al día siguiente.<br>· Se aplazó a la tarde.<br>· Se aplazó a la noche.
              </td>
            </tr>
          </tbody>
        </table>
        <p>Ya hemos marcado las respuestas de este primer módulo para ayudarle:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-26.jpg" alt="Fonê with the correct answers selected for all three questions"></div><figcaption>Respuestas de ejemplo marcadas — pulse <span class="pt">continuar</span> cuando esté listo.</figcaption></figure>
        <ol>
          <li><span class="pt">Não ia haver aula de História.</span> — No iba a haber clase de Historia.</li>
          <li><span class="pt">Tem de ir ao dentista.</span> — Tiene que ir al dentista.</li>
          <li><span class="pt">Foi adiada para a noite.</span> — Se aplazó a la noche.</li>
        </ol>
        <p>Como en <span class="pt">Lex</span>, una pestaña naranja <span class="pt">Dicionário</span> muestra el vocabulario clave. Púlsela para ver definiciones en portugués.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-27.jpg" alt="Fonê con Dicionário abierto mostrando la definición de apontamentos"></div>
            <figcaption><span class="pt">Dicionário</span> abierto con la definición de una palabra clave.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-29.jpg" alt="Fonê con respuestas marcadas y Dicionário desplegado"></div>
            <figcaption>Respuestas marcadas con <span class="pt">Dicionário</span> desplegado.</figcaption>
          </figure>
        </div>
        <p>El <strong>botón de oreja rojo</strong> abajo a la derecha es una función de accesibilidad: muestra la conversación por escrito (con el título <span class="pt">Portador de Deficiência Auditiva</span>). Si alguna palabra o frase no está clara, use su traductor o sus notas.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-28.jpg" alt="Superposición de accesibilidad Fonê con la transcripción escrita"></div><figcaption>El botón de oreja abre la conversación escrita — pulse <span class="pt">Obrigado</span> para cerrar.</figcaption></figure>
        <p>Cuando termine las preguntas, pulse <span class="pt">continuar</span> (continuar) abajo para pasar a la siguiente parte de <span class="pt">Fonê</span>.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-32.jpg" alt="Pantalla Fonê con respuestas marcadas, Dicionário abierto y enlace continuar"></div><figcaption>Pulse <span class="pt">continuar</span> para pasar a la práctica de fonología.</figcaption></figure>
        <p><span class="pt">Fonê</span> también incluye práctica de fonología: burbujas de palabras, una <strong>bombilla roja</strong> para la solución y el mismo botón de oreja para apoyo textual — por ejemplo, para deletrear palabras de la familia.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-30.jpg" alt="Pantalla de fonología Fonê con círculos Família, Pai, Mãe y Filho"></div>
            <figcaption>Práctica fonológica</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-31.jpg" alt="Panel de accesibilidad Fonê pidiendo deletrear las palabras"></div>
            <figcaption>Instrucciones de texto del botón de oreja.</figcaption>
          </figure>
        </div>
        <div class="call tip">
          <span class="tag">Escuche más de una vez</span>
          La comprensión oral mejora con la repetición. Vuelva a reproducir el disco, consulte el <span class="pt">Dicionário</span> y use la transcripción de la oreja cuando necesite revisar el diálogo.
        </div>
        <h3>5 · Más allá de este recorrido</h3>
        <p>Lo que acaba de seguir en <span class="pt">A minha gente</span> se aplica a cualquier tema o actividad de GoGenius, con pequeñas variaciones. Las actividades son en gran medida autoexplicativas, y ya tiene las herramientas para avanzar: instrucciones bilingües, el menú de la flecha inferior, <span class="pt">Dicionário</span>, soluciones, texto de accesibilidad y <span class="pt">Tradução</span> cuando lo necesite.</p>
        <p>Si algo de la aplicación no está claro, vuelva a este manual — o escríbanos en <a href="#support">Support &amp; contact</a>. Estamos aquí para ayudarle en este camino de aprendizaje del portugués europeo.</p>
        <div class="call tip">
          <span class="tag"><span class="pt">Boa sorte!</span> · Buena suerte</span>
          Disfrute de los juegos — y siga practicando.
        </div>
      </section>

<!-- 7 CLASSIFICACOES -->
      <section id="scores">
        <h2><span class="sec-num">09</span>Classificações — puntuaciones &amp; clasificaciones</h2>
        <p>Se accede mediante <span class="pt">Perfil ▸ Classificações</span> y constituye su marcador. Enumera todos los temas de la aplicación; pulse uno para desplegarlo y ver sus resultados.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-14.jpg" alt="Lista Classificações de temas con iconos"></div>
            <figcaption>La lista de temas en <span class="pt">Classificações</span>.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-15.png" alt="Tarjeta de tema desplegada que muestra una valoración con estrellas y distintivos de finalización de Graph, Lex y Fonê"></div>
            <figcaption>Un tema expandido con valoración por estrellas e insignias de habilidades.</figcaption>
          </figure>
        </div>
        <p>Cada tema desplegado muestra una <strong>valoración con estrellas</strong> (sobre cinco), además de un distintivo de finalización para cada una de las tres habilidades — <span class="pt">Graph</span>, <span class="pt">Lex</span> y <span class="pt">Fonê</span>. Una marca verde indica que ha terminado los ejercicios de esa habilidad para el tema.</p>
        <div class="call tip">
          <span class="tag">Cómo se consiguen puntos</span>
          Las estrellas y los puntos solo se conceden cuando <strong>completa todas las tareas</strong> de un juego — completarlo parcialmente no cuenta, porque un juego terminado se considera una prueba de que realmente ha aprendido el contenido. Si no puede terminar de una vez, solo tiene que salir y retomarlo más tarde; no se pierde nada.
        </div>
      </section>

      <!-- 8 SOBRE -->
      <section id="sobre">
        <h2><span class="sec-num">10</span>Sobre a APP &amp; privacidad</h2>
        <p>También dentro de <span class="pt">Perfil</span>, la pantalla <span class="pt">Sobre a APP / Políticas de Privacidade</span> contiene información sobre la aplicación y su política de privacidad completa. Pulse la bandera <strong>portuguesa</strong> o <strong>inglesa</strong> de la parte superior para cambiar de idioma.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-16.jpg" alt="Pantalla Acerca de la aplicación con selector de banderas portuguesa e inglesa"></div><figcaption>Acerca de la aplicación, con el selector de banderas PT / EN.</figcaption></figure>
        <p class="intro-note">
          
          En resumen: GoGenius facilita el aprendizaje asistido del portugués europeo mediante ejercicios de lectura, escritura y fonética, respaldados por tutoriales en varios idiomas. A medida que juega, se crea una tabla de evaluación para que pueda ver su dominio. La aplicación está disponible en Android y iOS, y el equipo de investigación recomienda sesiones diarias breves de entre 15 y 20 minutos para obtener los mejores resultados.
        </p>
  
        <p>La política también está disponible en línea en <a href="https://privacidade.grupoautonoma.pt/index.php/politica-de-privacidade-go-genius-en/" target="_blank" rel="noopener">privacidade.grupoautonoma.pt</a>.</p>
      </section>

      <!-- 9 SUPPORT -->
      <section id="support">
        <h2><span class="sec-num">11</span>Asistencia &amp; contacto</h2>
        <div class="cards">
          <div class="card"><h4>Asistencia de la aplicación</h4><p><a href="mailto:gogenius@autonoma.pt">gogenius@autonoma.pt</a></p></div>
          <div class="card"><h4>Desarrollador</h4><p>TOO WILD — SOFTWARE, LDA</p><p><a href="mailto:toowildsoftware@gmail.com">toowildsoftware@gmail.com</a></p><p>+351 923 544 221</p></div>
        </div>
      </section>

      <!-- GLOSSARY -->
      <section id="glossary">
        <h2><span class="sec-num">A</span>Glosario rápido de portugués</h2>
        <table class="tbl">
          <thead><tr><th>Portugués</th><th>Español</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Bem-Vindo!</span></td><td>¡Bienvenido!</td></tr>
            <tr><td><span class="btn-name">Entrar</span></td><td>Iniciar sesión</td></tr>
            <tr><td><span class="btn-name">Registar</span></td><td>Registrarse</td></tr>
            <tr><td><span class="btn-name">Recuperar Password</span></td><td>Recuperar contraseña</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Localidad / población
                <br>
                <span style="color:#666;font-size:0.96em;">
                  ¿Desde dónde accede a la aplicación?
                </span>
              </td>
            </tr>
 
            <tr><td><span class="btn-name">Menu</span></td><td>Menú principal</td></tr>
            <tr><td><span class="btn-name">Perfil</span></td><td>Perfil</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Categorías (los juegos)</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Traductor</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Puntuaciones / Clasificaciones</td></tr>
            <tr><td><span class="btn-name">Editar Perfil</span></td><td>Editar perfil</td></tr>
            <tr><td><span class="btn-name">Sobre a APP</span></td><td>Acerca de la aplicación</td></tr>
            <tr><td><span class="btn-name">Políticas de Privacidade</span></td><td>Política de privacidad</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Sexo</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Edad</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Nacionalidad</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Dirección / Ubicación</td></tr>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Actualizar</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Cerrar sesión</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Eliminar perfil</td></tr>
            <tr><td><span class="btn-name">Sim / Não</span></td><td>Sí / No</td></tr>
          </tbody>
        </table>
        <footer class="doc-foot"><p>GoGenius cuenta con el apoyo de la FCT — Fundação para a Ciência e a Tecnologia mediante fondos nacionales, y del Centro de Investigação em Psicologia (CIP-UAL).</p></footer>
      </section>
`,Sh=`<header class="hero" id="welcome">
        <div class="eyebrow">Ual: Universidade Autónoma de Lisboa Luís de Camões </div>
        <h1>Le manuel GoGenius</h1>
        <p class="lede">GoGenius est la première application conçue pour enseigner le <strong>portugais européen</strong>, en particulier aux locuteurs de neuf grandes langues, mais elle peut être utilisée par toute personne souhaitant apprendre. Grâce à des <strong>jeux thématiques</strong> portant sur la compréhension orale, la lecture et l’écriture, ce guide vous présente chaque écran et chaque bouton.</p>

        <div class="call tip">
          <span class="tag">Avant de commencer</span>
          Pour une expérience optimale, branchez vos écouteurs ou connectez un <strong>casque Bluetooth</strong> à votre téléphone ou tablette avant d’ouvrir GoGenius. Vérifiez que le son est bien diffusé par ce casque — de nombreux jeux reposent sur l’écoute, et un son clair vous aide à suivre les consignes et les activités de prononciation sans distraction.
        </div>
  
        <div class="langstrip" aria-label="Langues sources prises en charge">
          <span class="lang">Arabe</span><span class="lang">Russe</span><span class="lang">Ukrainien</span>
          <span class="lang">Roumain</span><span class="lang">Anglais</span><span class="lang">Français</span>
          <span class="lang">Espagnol</span><span class="lang">Mandarin</span><span class="lang">Allemand</span>
        </div>
        <div class="factbar">
          <div class="fact"><div class="n">14</div><div class="l">jeux thématiques</div></div>
          <div class="fact"><div class="n">A1&rarr;B2</div><div class="l">niveaux d’apprentissage</div></div>
          <div class="fact"><div class="n">7+</div><div class="l">âge recommandé</div></div>
        </div>
        <p class="intro-note" style="margin-top:1.6rem;">GoGenius est conçu pour les personnes immigrées et réfugiées vivant au Portugal, les apprenants étrangers du portugais où qu’ils se trouvent, ainsi que les établissements scolaires qui l’utilisent en classe. L’application fonctionne sur les téléphones et tablettes Android, ainsi que sur les ordinateurs (au moyen d’un émulateur Android sur PC). Un seul téléchargement donne accès à tous les modules — il n’y a <strong>aucun abonnement</strong>.</p>
        <p class="intro-note">GoGenius est également conçu pour être inclusif&nbsp;: chaque jeu comprend une version écrite de son objectif et de ses consignes pour les personnes sourdes et malentendantes, et chaque élément peut être réécouté dans votre propre langue ou en portugais européen dès que vous en avez besoin.</p>
        <p class="intro-note">Le modèle pédagogique a été créé par <strong>Sandra Figueiredo, docteure</strong>.</p>
      </header>

      <!-- QUICK START -->
      <section id="quickstart">
        <div class="quickstart">
          <div class="qs-eyebrow">Commencez · 60 secondes</div>
          <div class="qs-title">Premiers pas en une minute</div>
          <ul>
            <li><strong>Cinq minutes par jour suffisent.</strong> Effectuez les tâches quotidiennes en cinq minutes environ — en gardant ce rythme, vous pouvez passer du niveau A2 au niveau B1 en deux mois environ.</li>
            <li><strong>Apprenez ensemble.</strong> Les exercices sont tout aussi efficaces en groupe que seul.</li>
            <li><strong>Conçu pour la classe.</strong> Les enseignants peuvent proposer les jeux en classe et les transformer en quiz pour tout le groupe.</li>
          </ul>
        </div>
      </section>

      <!-- 1 LAUNCH -->
      <section id="launch">
        <h2><span class="sec-num">01</span>Écran de démarrage</h2>
        <p>Lorsque vous ouvrez GoGenius, l’écran d’accueil apparaît — le logo sur un ruban chaleureux de mots signifiant «&nbsp;bonjour&nbsp;» dans de nombreuses langues. Après un instant, vous accédez à la sélection de la langue.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-01.jpg" alt="Écran d’accueil de GoGenius avec le logo sur des bandes colorées représentant différentes langues"></div><figcaption>L’écran d’accueil de GoGenius.</figcaption></figure>
      </section>

      <!-- 2 SIGN IN -->
      <section id="signin">
        <h2><span class="sec-num">02</span>Connexion &amp; inscription</h2>
        <p>Vous arrivez ensuite sur l’écran <span class="pt">Bem-Vindo!</span> (<em>Bienvenue&nbsp;!</em>). Si vous avez déjà un compte, connectez-vous ici&nbsp;; s’il s’agit de votre première visite, créez-en un.</p>
        <h3>Si vous avez déjà un compte</h3>
        <p>Saisissez votre <span class="pt">E-mail</span> et votre <span class="pt">Password</span>, puis appuyez sur <span class="btn-name">Entrar</span> (Se connecter). Appuyez sur l’<strong>icône en forme d’œil</strong> pour vérifier ce que vous avez saisi. Vous avez oublié votre mot de passe&nbsp;? Appuyez sur <span class="btn-name">Recuperar Password</span> (Récupérer le mot de passe) pour le réinitialiser par e-mail.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-02.jpg" alt="Écran de connexion avec les champs E-mail et Password, et les boutons Entrar et Registar"></div><figcaption>L’écran de connexion — connectez-vous ou appuyez sur Registar pour créer un compte.</figcaption></figure>
        <h3>Si vous êtes nouveau — inscrivez-vous</h3>
        <p>Appuyez sur <span class="btn-name">Registar</span> (S’inscrire) pour ouvrir le formulaire d’inscription (<span class="pt">Entrar com o E-mail</span>). Renseignez vos informations, puis appuyez sur <span class="btn-name">Registar</span> pour terminer.</p>
        <table class="tbl">
          <thead><tr><th>Champ</th><th>Signification</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Idade</span></td><td>Âge</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Sexe (liste déroulante)</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Nationalité</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Localité / ville
                <br>
                <span style="color:#666;font-size:0.96em;">
                  Depuis quel endroit accédez-vous à l’application&nbsp;?
                </span>
              </td>
            </tr>

            <tr><td><span class="btn-name">E-mail</span></td><td>Adresse e-mail</td></tr>
            <tr><td><span class="btn-name">Password</span></td><td>Mot de passe</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Confirmer le mot de passe</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-03.jpg" alt="Formulaire d’inscription avec les champs Idade, Sexo, Nacionalidade, Localidade, E-mail et mot de passe"></div><figcaption>Le formulaire d’inscription.</figcaption></figure>
        <div class="call note">
          <span class="tag">Confirmez votre e-mail</span>
          Après votre inscription, GoGenius envoie un <strong>e-mail de confirmation</strong> à l’adresse que vous avez indiquée. Ouvrez-le et suivez le lien pour activer votre compte avant de vous connecter. S’il n’apparaît pas dans votre boîte de réception au bout de quelques minutes, vérifiez votre dossier de courriers indésirables.
        </div>
      </section>

      <!-- 3 LANGUAGE -->
      <section id="language">
        <h2><span class="sec-num">03</span>Choisir votre langue</h2>
        <p>Choisissez la langue que vous parlez déjà. La consigne apparaît en portugais et en anglais — <span class="pt">Escolhe a tua língua</span> / <em>Choisissez votre langue</em>.</p>
        <p>Appuyez sur les flèches <strong>&lsaquo;</strong> et <strong>&rsaquo;</strong> pour faire défiler les drapeaux jusqu’au vôtre, puis appuyez sur <span class="btn-name">Ok</span>. GoGenius prend en charge neuf langues sources&nbsp;: l’anglais, l’espagnol, l’arabe, le mandarin, le russe, le roumain, l’ukrainien, l’allemand et le français.</p>
        
        <figure class="shot"><div class="phone"><img src="/france_logo.png" alt="Écran de sélection de la langue avec un carrousel de drapeaux et le bouton Ok"></div><figcaption>Faites défiler jusqu’à votre drapeau avec les flèches, puis appuyez sur Ok.</figcaption></figure>
        <p>Chacune de ces neuf langues est une <strong>langue d’accompagnement</strong> — elle vous aide à suivre les consignes, tandis que tout ce que vous apprenez reste en portugais européen. Cette priorité distingue GoGenius&nbsp;: la plupart des applications d’apprentissage du portugais enseignent la variante <strong>brésilienne</strong>, qui diffère sensiblement par la prononciation, le vocabulaire et la grammaire, et de nombreux jeux linguistiques ne sont pas du tout conçus pour un véritable enseignement. GoGenius a été spécialement conçu comme outil pédagogique pour le portugais européen.</p>
        <div class="call note">
          <span class="tag">Pourquoi l’interface reste en portugais</span>
          Votre choix définit la langue utilisée pour les consignes et les traductions — mais les boutons et les noms des menus restent volontairement en portugais. Apprendre à se repérer dans une interface en portugais fait partie de l’immersion, et les mots que vous retenez grâce aux menus (<span class="pt">perfil</span>, <span class="pt">categorias</span>, <span class="pt">atualizar</span>) sont des mots que vous utiliserez dans la vie quotidienne. Ce manuel vous donne la signification française de chaque bouton au fil de votre progression.
        </div>
      </section>

      <!-- 4 MENU -->
      <section id="menu">
        <h2><span class="sec-num">04</span>Menu principal &amp; fermeture</h2>
        <p>Le menu principal est votre point de départ. Chacune des trois bandes colorées ouvre une rubrique&nbsp;:</p>
        <table class="tbl">
          <thead><tr><th>Bouton</th><th>Signification</th><th>Fonction</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Profil</td><td>Votre compte, vos scores et les informations sur l’application</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Catégories</td><td>Les jeux thématiques — là où vous apprenez et jouez</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Traducteur</td><td>Ouvre Google Traduction</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-04.jpg" alt="Menu principal avec les bandes Perfil, Categorias et Tradutor"></div><figcaption>Le menu principal: Perfil, Categorias, Tradutor.</figcaption></figure>
        <div class="call note">
          <span class="tag">Remarque sur Tradutor</span>
          Cette option ouvre <strong>Google Traduction</strong> et vous fait quitter GoGenius. Utilisez le geste de retour de votre appareil pour revenir.
        </div>
        <h3>Quitter l’application</h3>
        <p>Appuyez sur la <strong>croix X rouge</strong> dans le coin inférieur droit. GoGenius vous demande <span class="pt">Deseja sair da GoGenius?</span> (<em>Voulez-vous quitter GoGenius&nbsp;?</em>). Appuyez sur <span class="btn-name">Sim</span> (Oui) pour fermer l’application, ou sur <span class="btn-name">Não</span> (Non) pour rester.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-05.jpg" alt="Boîte de dialogue de confirmation demandant de quitter GoGenius avec les boutons Sim et Não"></div><figcaption>La confirmation de fermeture: Sim (Oui) ou Não (Non).</figcaption></figure>
      </section>

      <!-- 5 PERFIL -->
      <section id="perfil">
        <h2><span class="sec-num">05</span>Perfil — votre profil</h2>
        <p>Appuyer sur <span class="pt">Perfil</span> dans le menu principal ouvre un petit menu proposant trois choix&nbsp;:</p>
        <table class="tbl">
          <thead><tr><th>Option</th><th>Ouvre</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Modifier les informations de votre compte (voir la section suivante)</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Vos scores et classements</td></tr>
            <tr><td><span class="btn-name">Sobre a APP / Políticas de Privacidade</span></td><td>À propos de l’application &amp; politique de confidentialité</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-06.jpg" alt="Menu Perfil affichant les options Perfil, Classificações et Sobre a APP"></div><figcaption>Le menu Perfil et ses trois options.</figcaption></figure>
      </section>

      <!-- 6 EDITAR PERFIL -->
      <section id="editar">
        <h2><span class="sec-num">06</span>Editar Perfil — modifier vos informations</h2>
        <p>L’écran <span class="pt">Editar Perfil</span> vous permet de consulter et de modifier les informations de votre compte.</p>
        <table class="tbl">
          <thead><tr><th>Champ</th><th>Signification</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Sexo</span></td><td>Sexe (liste déroulante)</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Âge</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Nationalité</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Adresse / lieu</td></tr>
            <tr><td><span class="btn-name">Password Atual</span></td><td>Mot de passe actuel</td></tr>
            <tr><td><span class="btn-name">Password Nova</span></td><td>Nouveau mot de passe</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Confirmer le nouveau mot de passe</td></tr>
          </tbody>
        </table>
        <p>Vous n’avez besoin des trois champs de mot de passe que si vous souhaitez modifier celui-ci — sinon, laissez-les vides. Appuyez sur l’<strong>icône en forme d’œil</strong> située à côté d’un champ de mot de passe pour afficher ou masquer ce que vous avez saisi.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-07.jpg" alt="Formulaire Editar Perfil avec des champs et les boutons Atualizar, Terminar Sessão et Eliminar Perfil"></div><figcaption>Le formulaire Editar Perfil et ses trois boutons d’action.</figcaption></figure>
        <h3>Boutons d’action</h3>
        <table class="tbl">
          <thead><tr><th>Bouton</th><th>Signification</th><th>Fonction</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Mettre à jour</td><td>Enregistre les modifications effectuées ci-dessus</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Se déconnecter</td><td>Vous déconnecte de votre compte</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Supprimer le profil</td><td>Supprime définitivement votre compte</td></tr>
          </tbody>
        </table>
        <div class="call warn">
          <span class="tag">La suppression avec Eliminar Perfil est définitive</span>
          La suppression de votre profil efface votre compte ainsi que votre progression et vos scores cumulés. Cette action est irréversible.
        </div>
      </section>

            <!-- 7 CATEGORIAS (THEMES) -->
      <section id="categorias">
        <h2><span class="sec-num">07</span>Categorias — thèmes</h2>
        <p><span class="pt">Categorias</span> est au cœur de GoGenius&nbsp;: les 14 jeux thématiques qui constituent le programme. Chaque thème aborde un sujet de la vie quotidienne et propose une série d’exercices autour de celui-ci. Parmi les thèmes disponibles figurent notamment&nbsp;:</p>
        <div class="themes">
          <span class="theme">A minha gente <span class="en">· Ma famille</span></span>
          <span class="theme">Onde moro <span class="en">· Mon lieu de vie</span></span>
          <span class="theme">O que visto <span class="en">· Ce que je porte</span></span>
          <span class="theme">Movendo-me <span class="en">· Mes déplacements</span></span>
          <span class="theme">Natura <span class="en">· Nature</span></span>
          <span class="theme">Eu, Hoje e no Futuro <span class="en">· Moi, aujourd’hui &amp; demain</span></span>
        </div>
        <p>Quel que soit le thème choisi, l’apprentissage s’organise autour des trois mêmes domaines de compétences — la véritable structure de l’application. Chacun développe une compétence différente et vous fournit les solutions au fur et à mesure&nbsp;:</p>
        <div class="skills">
          <div class="skill fone"><div class="name">Fonê</div><div class="role">Compréhension orale</div><p><span class="pt">Exercícios de Compreensão Oral</span> — activités d’écoute et de phonologie.</p></div>
          <div class="skill lex"><div class="name">Lex</div><div class="role">Lecture</div><p><span class="pt">Exercícios de Leitura</span> — exercices de lecture en portugais européen, avec solutions.</p></div>
          <div class="skill graph"><div class="name">Graph</div><div class="role">Écriture</div><p><span class="pt">Exercícios de Escrita</span> — activités d’écriture, avec corrigés détaillés.</p></div>
        </div>
        <p>Vous retrouverez ces trois noms dans chaque jeu ainsi que sur votre tableau des scores, où votre progression dans chaque domaine est suivie (voir <span class="pt">Classificações</span>). La section suivante présente un thème complet afin que vous puissiez les voir en pratique.</p>
      </section>

      <!-- 8 THEMED GAMES -->
      <section id="themed-games">
        <h2><span class="sec-num">08</span>Jeux thématiques — mode d’emploi</h2>
        <p>Cette section suit l’exemple d’un jeu thématique que vous pouvez choisir, <span class="pt">A minha gente</span>, du carrousel jusqu’aux exercices, afin de vous montrer concrètement le fonctionnement d’un jeu.</p>
        <h3>1 · Parcourir et ouvrir un thème</h3>
        <p>Categorias s’ouvre sous la forme d’un carrousel sinueux de cercles représentant les catégories. Balayez le chemin pour passer d’un thème à l’autre et appuyez sur un cercle pour en ouvrir un&nbsp;; l’onglet qui se déploie à droite (ici, <span class="pt">A minha gente</span>) indique le thème que vous êtes sur le point d’ouvrir. Les deux petites icônes en forme de tablette dans le coin supérieur droit permettent de changer de langue (voir les explications plus bas), et le bouton rouge avec un <strong>point d’interrogation</strong> ouvre un index décrivant la fonction de chaque bouton de l’application — gardez-le à portée de main comme référence.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-08.jpg" alt="Carrousel Categorias composé de boutons de catégories circulaires le long d’un chemin courbe"></div>
            <figcaption>Le carrousel Categorias — appuyez sur un cercle pour ouvrir un thème.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-09.jpg" alt="Index des boutons ouvert par le point d’interrogation rouge, expliquant Graph, Lex, Fonê et les autres boutons"></div>
            <figcaption>Le&nbsp;? rouge ouvre cet index de tous les boutons.</figcaption>
          </figure>
        </div>
        <p>L’index constitue une légende pratique&nbsp;: il nomme les trois types d’exercices — <span class="pt">Graph</span> (écriture), <span class="pt">Lex</span> (lecture) et <span class="pt">Fonê</span> (compréhension orale) — ainsi que <span class="pt">Sair</span> (quitter), <span class="pt">Solução</span> (solution), <span class="pt">Saber mais</span> (en savoir plus), <span class="pt">Info</span>, l’icône d’accessibilité pour les personnes malentendantes et les deux menus de langue (<span class="pt">Menu em Português Europeu</span> et <span class="pt">Menu Escolher Outras Línguas</span>).</p>
        <h3>2 · Choisir un jeu</h3>
        <p>Fermez l’index et appuyez sur le thème <span class="pt">A minha gente</span>. Un petit menu présentant les jeux de ce thème apparaît&nbsp;: un jeu d’introduction, puis <span class="pt">Graph</span>, <span class="pt">Lex</span> et <span class="pt">Fonê</span>, chacun avec son propre bouton <span class="pt">Jogar</span> (Jouer). Vous pouvez y jouer dans n’importe quel ordre, mais il est préférable de commencer par le bouton en forme de <strong>cœur</strong> — le jeu d’introduction.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-10.jpg" alt="Menu des jeux thématiques A minha gente avec des cercles cœur, Graph, Lex et Fonê, chacun doté d’un bouton Jogar"></div><figcaption>Les jeux du thème — commencez par le jeu d’introduction représenté par le cœur.</figcaption></figure>
        <h3>3 · À l’intérieur d’un jeu</h3>
        <p>Voici à quoi ressemble le jeu d’introduction pendant une partie. Faites glisser les onglets du bas sur la personne correspondante (<span class="pt">Pai</span>, <span class="pt">Avô</span>, <span class="pt">Filhos/Irmãos</span>, <span class="pt">Mãe</span>, <span class="pt">Avó</span>) afin de travailler le vocabulaire de la famille. Deux boutons ronds se trouvent dans le coin inférieur droit, et les deux icônes en forme de tablette en haut à droite permettent de changer de langue (voir la remarque ci-dessous).</p>
        <p>Le <strong>bouton +</strong> ouvre un panneau <span class="pt">Vocabulário</span> qui répertorie tous les mots enseignés dans l’activité — une référence utile avant de commencer. Le <strong>bouton en forme d’oreille</strong> affiche l’objectif et les consignes de l’activité sous forme de <strong>texte</strong>&nbsp;: il s’agit d’une fonctionnalité d’accessibilité (intitulée <span class="pt">Portador de Deficiência Auditiva</span>, «&nbsp;personne malentendante&nbsp;») permettant aux personnes sourdes et malentendantes de lire précisément ce qu’elles doivent faire.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-11.jpg" alt="Écran du jeu A minha gente avec des portraits de famille, des onglets de membres de la famille, les boutons plus et oreille, et deux icônes de langue en forme de tablette en haut à droite"></div><figcaption>Une partie en cours, avec les deux icônes de langue en haut à droite.</figcaption></figure>
        <p>À tout moment pendant une activité ou un jeu, regardez le bas du centre de l’écran&nbsp;: une petite <strong>flèche pointant vers le haut</strong> ouvre un menu rapide vers <span class="pt">Perfil</span>, <span class="pt">Categorias</span>, <span class="pt">Tradução</span> ou le <span class="pt">Menu</span> principal — pour passer d’une section à l’autre sans chercher dans l’application.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-23.jpg" alt="Menu du bas ouvert en jeu avec les raccourcis Perfil, Categorias, Tradução et Menu"></div><figcaption>La flèche vers le haut ouvre ce menu depuis n’importe quelle activité ou jeu.</figcaption></figure>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-12.jpg" alt="Panneau Vocabulário répertoriant le vocabulaire de la famille, ouvert par le bouton plus"></div>
            <figcaption>La liste <span class="pt">Vocabulário</span> du bouton <span class="pt">+</span></figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-13.jpg" alt="Panneau de consignes écrites ouvert par le bouton en forme d’oreille, intitulé Portador de Deficiência Auditiva"></div>
            <figcaption>Les consignes écrites du bouton en forme d’oreille.</figcaption>
          </figure>
        </div>
        <div class="call note">
          <span class="tag">Réécoutez — dans votre langue ou en portugais</span>
          Chaque jeu est bilingue. Dans le <strong>coin supérieur droit</strong>, vous verrez deux petites icônes en forme de tablette. Appuyez sur la <strong>tablette avec un globe</strong> (<span class="pt">Menu Escolher Outras Línguas</span>) pour réécouter ou relire l’élément actuel dans votre propre langue, ou sur la <strong>tablette avec le drapeau portugais</strong> (<span class="pt">Menu em Português Europeu</span>) pour revenir au portugais européen. Passez de l’une à l’autre aussi souvent que nécessaire — l’application ne vous bloque jamais dans une seule langue.
        </div>
        <h3>4 · Graph, Lex &amp; Fonê</h3>
        <p>Après le jeu d’introduction, vous passez aux trois exercices de compétences du thème — <span class="pt">Graph</span> (écriture), <span class="pt">Lex</span> (lecture) et <span class="pt">Fonê</span> (compréhension orale).</p>

        <p><span class="pt">Graph</span> se concentre sur vos compétences d’<strong>écriture</strong>. Voici comment cela fonctionne dans le thème <span class="pt">A minha gente</span>&nbsp;:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-17.jpg" alt="Activité d’écriture Graph avec l’espace A tua resposta et le bouton ampoule rouge"></div><figcaption><span class="pt">Graph</span> — appuyez sur <span class="pt">A tua resposta...</span> pour commencer à écrire.</figcaption></figure>
        <p>Une fois de plus, les deux icônes tablette en haut à droite vous permettent d’écouter les consignes&nbsp;: le bouton <strong>carte du monde</strong> les lit dans votre langue, et le bouton <strong>drapeau du Portugal</strong> les lit en portugais.</p>
        <p>Après avoir écouté les consignes, appuyez sur la zone pêche où apparaît <span class="pt">A tua resposta...</span> («&nbsp;Votre réponse...&nbsp;») et commencez à écrire. Il est fortement recommandé d’ajouter un clavier portugais sur votre appareil — sur iPhone, par exemple, vous pouvez activer une disposition portugaise pour garder accents, grammaire et orthographe corrects.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-18.jpg" alt="Champ de réponse Graph avec clavier portugais ouvert"></div>
            <figcaption>Clavier ouvert pour taper.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-19.jpg" alt="Graph avec une réponse en portugais et la coche bleue pour valider"></div>
            <figcaption>Réponse prête — appuyez sur la coche bleue pour valider.</figcaption>
          </figure>
        </div>
        <p>Quand vous avez fini d’écrire, appuyez sur la <strong>coche bleue</strong>. Puis comparez votre réponse à la solution&nbsp;: regardez le coin inférieur droit et appuyez sur l’<strong>ampoule rouge</strong>. Un panneau <span class="pt">Solução</span> apparaît avec une réponse modèle.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-20.jpg" alt="Panneau Solução de Graph avec la réponse modèle et le bouton Obrigado"></div><figcaption>L’ampoule rouge ouvre <span class="pt">Solução</span> — comparez, puis appuyez sur <span class="pt">Obrigado</span>.</figcaption></figure>
        <div class="call tip">
          <span class="tag">Retenez le sens, pas chaque mot</span>
          Ne vous inquiétez pas si votre réponse et la solution diffèrent. L’essentiel est qu’elles partagent le même sens, une grammaire et une syntaxe solides, et qu’elles transmettent le même message.
        </div>
        <p><span class="pt">Lex</span> est un exercice de lecture en portugais européen, avec de l’aide intégrée. Comme avant, les deux icônes tablette en haut à droite vous permettent d’écouter les consignes dans votre langue maternelle (carte du monde) ou en portugais (drapeau du Portugal).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-21.jpg" alt="Activité de lecture Lex avec le texte en portugais et l’onglet Dicionário fermé"></div>
            <figcaption>Le texte à lire.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-22.jpg" alt="Lex avec Dicionário ouvert montrant la définition d’un mot-clé en portugais"></div>
            <figcaption><span class="pt">Dicionário</span> ouvert avec un mot expliqué.</figcaption>
          </figure>
        </div>
        <p>Un court texte vous est proposé à lire et à comprendre. Lisez-le <strong>à voix haute</strong> — cela renforce la conversation, la prononciation et le son du portugais européen.</p>
        <p>Sous le texte se trouve un onglet orange <span class="pt">Dicionário</span> (Dictionnaire). Appuyez dessus pour déployer des mots et expressions clés du texte, expliqués en portugais — utile quand un terme est nouveau.</p>
        <p>L’<strong>ampoule rouge</strong> en bas à droite lit le texte à voix haute en portugais dès que vous appuyez. Servez-vous-en comme modèle de son, puis lisez en même temps.</p>
        <div class="call tip">
          <span class="tag">Lire, entendre, prononcer — puis répéter</span>
          L’objectif de <span class="pt">Lex</span> est la lecture, l’écoute et la prononciation en portugais européen (PT). Entraînez-vous souvent, et lisez toujours le texte à voix haute.
        </div>
        <p><span class="pt">Fonê</span> travaille la <strong>compréhension orale</strong> — <span class="pt">Exercícios de Compreensão Oral</span>&nbsp;: activités d’écoute et de phonologie.</p>
        <p>Une fois de plus, les deux icônes tablette en haut à droite permettent d’écouter les consignes dans votre langue maternelle (carte du monde) ou en portugais européen (drapeau du Portugal).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-24.jpg" alt="Écran des questions Fonê avec le bouton disque blanc et les choix non cochés"></div>
            <figcaption>Prêt à écouter.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-25.jpg" alt="Écran des questions Fonê pendant la lecture de la conversation"></div>
            <figcaption>Appuyez sur le disque blanc pour lancer la conversation.</figcaption>
          </figure>
        </div>
        <p>Appuyez sur le <strong>disque blanc</strong> à côté de <span class="pt">Questões</span> pour lire la conversation qui servira de référence aux questions. Une fois sélectionné, le disque devient un peu gris et la conversation commence.</p>
        <p>Quand vous avez fini d’écouter, rejouez-la <strong>deux ou trois fois</strong> jusqu’à bien comprendre, puis cochez les bonnes réponses (<span class="pt">Assinale a resposta correta</span>).</p>
        <div class="call tip">
          <span class="tag">Les questions restent en portugais européen</span>
          Ces questions de réflexion sont toujours en portugais européen. Gardez Google Traduction ou votre appli de traduction préférée sous la main — nous traduisons ce premier module ci-dessous, mais plus tard vous le ferez vous-même. C’est une bonne habitude. Vous pouvez aussi ouvrir <span class="pt">Tradução</span> depuis le menu de la flèche du bas.
        </div>
        <p>Voici les questions et options, avec traductions en français&nbsp;:</p>
        <table class="tbl">
          <thead><tr><th>Portugais</th><th>Français</th></tr></thead>
          <tbody>
            <tr>
              <td>
                <span class="btn-name">1. O Filipe perguntou ao João se:</span><br>
                · Não ia haver aula de Português.<br>
                · Não ia haver aula de História.<br>
                · Não ia ter teste de História.
              </td>
              <td>
                1. Filipe a demandé à João si&nbsp;:<br>
                · Il n’y aurait pas de cours de portugais.<br>
                · Il n’y aurait pas de cours d’histoire.<br>
                · Il n’y aurait pas de contrôle d’histoire.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">2. O João vai faltar à aula porque:</span><br>
                · Não lhe apetece ir.<br>
                · Tem de ir à praia.<br>
                · Tem de ir ao dentista.
              </td>
              <td>
                2. João va manquer le cours parce que&nbsp;:<br>
                · Il n’a pas envie d’y aller.<br>
                · Il doit aller à la plage.<br>
                · Il doit aller chez le dentiste.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">3. A aula de História:</span><br>
                · Não ia haver no dia seguinte.<br>
                · Foi adiada para a tarde.<br>
                · Foi adiada para a noite.
              </td>
              <td>
                3. Le cours d’histoire&nbsp;:<br>
                · N’aurait pas lieu le lendemain.<br>
                · A été reporté à l’après-midi.<br>
                · A été reporté au soir.
              </td>
            </tr>
          </tbody>
        </table>
        <p>Nous avons déjà coché les réponses pour ce premier module pour vous aider&nbsp;:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-26.jpg" alt="Fonê avec les bonnes réponses cochées pour les trois questions"></div><figcaption>Réponses modèles cochées — appuyez sur <span class="pt">continuar</span> quand vous êtes prêt.</figcaption></figure>
        <ol>
          <li><span class="pt">Não ia haver aula de História.</span> — Il n’y aurait pas de cours d’histoire.</li>
          <li><span class="pt">Tem de ir ao dentista.</span> — Il doit aller chez le dentiste.</li>
          <li><span class="pt">Foi adiada para a noite.</span> — Le cours a été reporté au soir.</li>
        </ol>
        <p>Comme dans <span class="pt">Lex</span>, un onglet orange <span class="pt">Dicionário</span> montre le vocabulaire clé. Appuyez pour déployer les définitions en portugais.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-27.jpg" alt="Fonê avec Dicionário ouvert montrant la définition d’apontamentos"></div>
            <figcaption><span class="pt">Dicionário</span> ouvert avec un mot expliqué.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-29.jpg" alt="Fonê avec réponses cochées et Dicionário déployé"></div>
            <figcaption>Réponses cochées avec <span class="pt">Dicionário</span> ouvert.</figcaption>
          </figure>
        </div>
        <p>Le <strong>bouton oreille rouge</strong> en bas à droite est une fonction d’accessibilité&nbsp;: il affiche la conversation à l’écrit (intitulée <span class="pt">Portador de Deficiência Auditiva</span>). Si un mot ou une expression n’est pas clair, utilisez votre traducteur ou vos notes.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-28.jpg" alt="Superposition d’accessibilité Fonê avec la transcription écrite de la conversation"></div><figcaption>Le bouton oreille ouvre la conversation écrite — appuyez sur <span class="pt">Obrigado</span> pour fermer.</figcaption></figure>
        <p>Quand vous avez terminé les questions, appuyez sur <span class="pt">continuar</span> (continuer) en bas pour passer à la suite de <span class="pt">Fonê</span>.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-32.jpg" alt="Écran Fonê avec réponses cochées, Dicionário ouvert et lien continuar"></div><figcaption>Appuyez sur <span class="pt">continuar</span> pour passer à la pratique phonologique.</figcaption></figure>
        <p><span class="pt">Fonê</span> inclut aussi de la phonologie&nbsp;: bulles de mots à travailler, une <strong>ampoule rouge</strong> pour la solution, et le même bouton oreille pour le soutien texte — par exemple pour épeler des mots de la famille.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-30.jpg" alt="Écran de phonologie Fonê avec les cercles Família, Pai, Mãe et Filho"></div>
            <figcaption>Pratique phonologique.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-31.jpg" alt="Panneau d’accessibilité Fonê invitant à épeler les mots, intitulé Portador de Deficiência Auditiva"></div>
            <figcaption>Consignes textuelles du bouton oreille.</figcaption>
          </figure>
        </div>
        <div class="call tip">
          <span class="tag">Écoutez plus d’une fois</span>
          La compréhension orale s’améliore avec la répétition. Rejouez le disque, consultez le <span class="pt">Dicionário</span> et utilisez la transcription du bouton oreille dès que vous avez besoin de revoir le dialogue.
        </div>
        <h3>5 · Au-delà de ce parcours</h3>
        <p>Ce que vous venez de suivre dans <span class="pt">A minha gente</span> s’applique à tout thème ou activité de GoGenius, avec de petites variations. Les activités sont en grande partie explicites, et vous avez déjà les outils pour réussir&nbsp;: consignes bilingues, menu de la flèche du bas, <span class="pt">Dicionário</span>, solutions, texte d’accessibilité et <span class="pt">Tradução</span> au besoin.</p>
        <p>Si quelque chose dans l’application n’est pas clair, revenez à ce manuel — ou contactez-nous via <a href="#support">Support &amp; contact</a>. Nous sommes là pour vous accompagner dans l’apprentissage du portugais européen.</p>
        <div class="call tip">
          <span class="tag"><span class="pt">Boa sorte!</span> · Bonne chance</span>
          Profitez des jeux — et continuez à vous entraîner.
        </div>
      </section>

<!-- 7 CLASSIFICACOES -->
      <section id="scores">
        <h2><span class="sec-num">09</span>Classificações — scores &amp; classements</h2>
        <p>Accessible depuis <span class="pt">Perfil ▸ Classificações</span>, il s’agit de votre tableau des scores. Il répertorie tous les thèmes de l’application&nbsp;; appuyez sur l’un d’eux pour le développer et voir vos résultats.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-14.jpg" alt="Liste Classificações des thèmes avec leurs icônes"></div>
            <figcaption>La liste des thèmes dans <span class="pt">Classificações</span>.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-15.png" alt="Carte de thème développée affichant une note en étoiles et les badges de réussite Graph, Lex et Fonê"></div>
            <figcaption>Un thème développé avec étoiles et badges de compétences.</figcaption>
          </figure>
        </div>
        <p>Chaque thème développé affiche une <strong>note en étoiles</strong> (sur cinq), ainsi qu’un badge de réussite pour chacune des trois compétences — <span class="pt">Graph</span>, <span class="pt">Lex</span> et <span class="pt">Fonê</span>. Une coche verte signifie que vous avez terminé les exercices de cette compétence pour le thème.</p>
        <div class="call tip">
          <span class="tag">Comment gagner des points</span>
          Les étoiles et les points sont attribués uniquement lorsque vous <strong>terminez toutes les tâches</strong> d’un jeu — une réalisation partielle ne compte pas, car un jeu terminé est considéré comme la preuve que vous avez réellement appris le contenu. Si vous ne pouvez pas terminer en une seule fois, quittez simplement le jeu et reprenez-le plus tard&nbsp;; rien n’est perdu.
        </div>
      </section>

      <!-- 8 SOBRE -->
      <section id="sobre">
        <h2><span class="sec-num">10</span>Sobre a APP &amp; confidentialité</h2>
        <p>Également accessible sous <span class="pt">Perfil</span>, l’écran <span class="pt">Sobre a APP / Políticas de Privacidade</span> contient des informations sur l’application et sa politique de confidentialité complète. Appuyez sur le drapeau <strong>portugais</strong> ou <strong>anglais</strong> en haut pour changer de langue.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-16.jpg" alt="Écran À propos de l’application avec le sélecteur de drapeaux portugais et anglais"></div><figcaption>À propos de l’application, avec le sélecteur de drapeaux PT / EN.</figcaption></figure>
        <p class="intro-note">
          
          En résumé&nbsp;: GoGenius facilite l’apprentissage accompagné du portugais européen grâce à des exercices de lecture, d’écriture et de phonétique, complétés par des tutoriels en plusieurs langues. Au fil de vos parties, une grille d’évaluation est créée pour vous permettre de suivre votre niveau. L’application est disponible sur Android (et sur PC au moyen d’un émulateur), et l’équipe de recherche recommande de courtes séances quotidiennes de 15 à 20 minutes pour obtenir les meilleurs résultats.
        </p>
  
        <p>La politique est également disponible en ligne à l’adresse <a href="https://privacidade.grupoautonoma.pt/index.php/politica-de-privacidade-go-genius-en/" target="_blank" rel="noopener">privacidade.grupoautonoma.pt</a>.</p>
      </section>

      <!-- 9 SUPPORT -->
      <section id="support">
        <h2><span class="sec-num">11</span>Assistance &amp; contact</h2>
        <div class="cards">
          <div class="card"><h4>Assistance pour l’application</h4><p><a href="mailto:gogenius@autonoma.pt">gogenius@autonoma.pt</a></p></div>
          <div class="card"><h4>Développeur</h4><p>TOO WILD — SOFTWARE, LDA</p><p><a href="mailto:toowildsoftware@gmail.com">toowildsoftware@gmail.com</a></p><p>+351 923 544 221</p></div>
        </div>
      </section>

      <!-- GLOSSARY -->
      <section id="glossary">
        <h2><span class="sec-num">A</span>Petit glossaire portugais</h2>
        <table class="tbl">
          <thead><tr><th>Portugais</th><th>Français</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Bem-Vindo!</span></td><td>Bienvenue&nbsp;!</td></tr>
            <tr><td><span class="btn-name">Entrar</span></td><td>Se connecter</td></tr>
            <tr><td><span class="btn-name">Registar</span></td><td>S’inscrire</td></tr>
            <tr><td><span class="btn-name">Recuperar Password</span></td><td>Récupérer le mot de passe</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Localité / ville
                <br>
                <span style="color:#666;font-size:0.96em;">
                  Depuis quel endroit accédez-vous à l’application&nbsp;?
                </span>
              </td>
            </tr>
 
            <tr><td><span class="btn-name">Menu</span></td><td>Menu principal</td></tr>
            <tr><td><span class="btn-name">Perfil</span></td><td>Profil</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Catégories (les jeux)</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Traducteur</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Scores / Classements</td></tr>
            <tr><td><span class="btn-name">Editar Perfil</span></td><td>Modifier le profil</td></tr>
            <tr><td><span class="btn-name">Sobre a APP</span></td><td>À propos de l’application</td></tr>
            <tr><td><span class="btn-name">Políticas de Privacidade</span></td><td>Politique de confidentialité</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Sexe</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Âge</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Nationalité</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Adresse / Lieu</td></tr>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Mettre à jour</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Se déconnecter</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Supprimer le profil</td></tr>
            <tr><td><span class="btn-name">Sim / Não</span></td><td>Oui / Non</td></tr>
          </tbody>
        </table>
        <footer class="doc-foot"><p>GoGenius bénéficie du soutien de la FCT — Fundação para a Ciência e a Tecnologia au moyen de fonds nationaux, ainsi que du Centro de Investigação em Psicologia (CIP-UAL).</p></footer>
      </section>
`,Ah=`<header class="hero" id="welcome">
        <div class="eyebrow">Ual: Universidade Autónoma de Lisboa Luís de Camões </div>
        <h1>Manualul GoGenius</h1>
        <p class="lede">GoGenius este prima aplicație concepută pentru predarea <strong>limbii portugheze europene</strong>, în special vorbitorilor a nouă limbi importante, dar poate fi folosită de orice persoană interesată să învețe. Prin <strong>jocuri tematice</strong> care acoperă ascultarea, citirea și scrierea, acest ghid vă prezintă fiecare ecran și buton.</p>

        <div class="call tip">
          <span class="tag">Înainte de a începe</span>
          Pentru cea mai bună experiență, conectați căștile cu fir sau <strong>căștile Bluetooth</strong> la telefon ori tabletă înainte de a deschide GoGenius. Asigurați-vă că sunetul este redat prin acele căști — multe jocuri se bazează pe ascultare, iar sunetul clar vă ajută să urmăriți indicațiile și activitățile de pronunție fără distrageri.
        </div>
  
        <div class="langstrip" aria-label="Limbi sursă acceptate">
          <span class="lang">Arabă</span><span class="lang">Rusă</span><span class="lang">Ucraineană</span>
          <span class="lang">Română</span><span class="lang">Engleză</span><span class="lang">Franceză</span>
          <span class="lang">Spaniolă</span><span class="lang">Mandarină</span><span class="lang">Germană</span>
        </div>
        <div class="factbar">
          <div class="fact"><div class="n">14</div><div class="l">jocuri tematice</div></div>
          <div class="fact"><div class="n">A1&rarr;B2</div><div class="l">niveluri de învățare</div></div>
          <div class="fact"><div class="n">7+</div><div class="l">vârsta recomandată</div></div>
        </div>
        <p class="intro-note" style="margin-top:1.6rem;">GoGenius este concepută pentru imigranții și refugiații care locuiesc în Portugalia, pentru persoanele care învață portugheza oriunde în lume și pentru școlile care o folosesc ca instrument didactic. Funcționează pe telefoane și tablete Android, precum și pe computere (printr-un emulator Android pe PC). O singură descărcare deblochează toate modulele — <strong>nu există abonament</strong>.</p>
        <p class="intro-note">GoGenius este concepută și pentru a fi incluzivă: fiecare joc include o versiune scrisă a obiectivului și a instrucțiunilor sale pentru cursanții surzi și cu deficiențe de auz, iar orice element poate fi redat din nou în limba dumneavoastră sau în portugheza europeană ori de câte ori aveți nevoie.</p>
        <p class="intro-note">Modelul educațional a fost creat de <strong>PhD Sandra Figueiredo</strong></p>
      </header>

      <!-- QUICK START -->
      <section id="quickstart">
        <div class="quickstart">
          <div class="qs-eyebrow">Începeți · 60 de secunde</div>
          <div class="qs-title">Inițiere într-un minut</div>
          <ul>
            <li><strong>Cinci minute pe zi sunt suficiente.</strong> Finalizați sarcinile zilei în aproximativ cinci minute — dacă mențineți ritmul, puteți avansa de la A2 spre B1 în aproximativ două luni.</li>
            <li><strong>Învățați împreună.</strong> Exercițiile funcționează la fel de bine în grup ca și individual.</li>
            <li><strong>Creată pentru sala de clasă.</strong> Profesorii pot folosi jocurile la clasă și le pot transforma într-un test pentru întregul grup.</li>
          </ul>
        </div>
      </section>

      <!-- 1 LAUNCH -->
      <section id="launch">
        <h2><span class="sec-num">01</span>Ecranul de pornire</h2>
        <p>Când deschideți GoGenius, sunteți întâmpinat de ecranul de bun venit — sigla deasupra unei panglici calde cu &ldquo;salut&rdquo; în multe limbi. După câteva clipe, aplicația vă duce la selectarea limbii.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-01.jpg" alt="Ecranul de bun venit GoGenius, cu sigla deasupra unor benzi colorate cu limbi"></div><figcaption>Ecranul de bun venit GoGenius.</figcaption></figure>
      </section>

      <!-- 2 SIGN IN -->
      <section id="signin">
        <h2><span class="sec-num">02</span>Autentificare &amp; înregistrare</h2>
        <p>Urmează ecranul <span class="pt">Bem-Vindo!</span> (<em>Bun venit!</em>). Dacă aveți deja un cont, autentificați-vă aici; dacă este prima dată când folosiți aplicația, creați un cont.</p>
        <h3>Dacă aveți deja un cont</h3>
        <p>Introduceți <span class="pt">E-mail</span> și <span class="pt">Password</span>, apoi apăsați <span class="btn-name">Entrar</span> (Autentificare). Apăsați <strong>pictograma ochi</strong> pentru a verifica ce ați introdus. Ați uitat parola? Apăsați <span class="btn-name">Recuperar Password</span> (Recuperare parolă) pentru a o reseta prin e-mail.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-02.jpg" alt="Ecran de autentificare cu câmpurile E-mail și Password și butoanele Entrar și Registar"></div><figcaption>Ecranul de autentificare — autentificați-vă sau apăsați Registar pentru a crea un cont.</figcaption></figure>
        <h3>Dacă sunteți utilizator nou — înregistrați-vă</h3>
        <p>Apăsați <span class="btn-name">Registar</span> (Înregistrare) pentru a deschide formularul de înscriere (<span class="pt">Entrar com o E-mail</span>). Completați datele și apăsați <span class="btn-name">Registar</span> pentru a încheia.</p>
        <table class="tbl">
          <thead><tr><th>Câmp</th><th>Semnificație</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Idade</span></td><td>Vârstă</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Sex (listă derulantă)</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Naționalitate</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Localitate / oraș
                <br>
                <span style="color:#666;font-size:0.96em;">
                  De unde accesați aplicația?
                </span>
              </td>
            </tr>

            <tr><td><span class="btn-name">E-mail</span></td><td>Adresă de e-mail</td></tr>
            <tr><td><span class="btn-name">Password</span></td><td>Parolă</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Confirmarea parolei</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-03.jpg" alt="Formular de înregistrare cu câmpurile Idade, Sexo, Nacionalidade, Localidade, E-mail și parolă"></div><figcaption>Formularul de înregistrare.</figcaption></figure>
        <div class="call note">
          <span class="tag">Confirmați adresa de e-mail</span>
          După înregistrare, GoGenius trimite un <strong>e-mail de confirmare</strong> la adresa furnizată. Deschideți-l și urmați linkul pentru a vă activa contul înainte de autentificare. Dacă nu apare în căsuța de primire în câteva minute, verificați dosarul spam sau mesaje nedorite.
        </div>
      </section>

      <!-- 3 LANGUAGE -->
      <section id="language">
        <h2><span class="sec-num">03</span>Alegerea limbii</h2>
        <p>Alegeți limba pe care o vorbiți deja. Mesajul apare atât în portugheză, cât și în engleză — <span class="pt">Escolhe a tua língua</span> / <em>Selectați limba</em>.</p>
        <p>Apăsați săgețile <strong>&lsaquo;</strong> și <strong>&rsaquo;</strong> pentru a parcurge steagurile până îl găsiți pe al dumneavoastră, apoi apăsați <span class="btn-name">Ok</span>. GoGenius acceptă nouă limbi sursă: engleză, spaniolă, arabă, mandarină, rusă, română, ucraineană, germană și franceză.</p>
        
        <figure class="shot"><div class="phone"><img src="/romanian.png" alt="Ecran de selectare a limbii cu un carusel de steaguri și butonul Ok"></div><figcaption>Ajungeți la steagul dumneavoastră cu săgețile, apoi apăsați Ok.</figcaption></figure>
        <p>Fiecare dintre aceste nouă limbi este o <strong>limbă de sprijin</strong> — vă ajută să urmăriți instrucțiunile, în timp ce tot ceea ce învățați efectiv rămâne în portugheza europeană. Acest accent diferențiază GoGenius: majoritatea aplicațiilor de învățare a portughezei predau varianta <strong>braziliană</strong>, care diferă vizibil în pronunție, vocabular și gramatică, iar multe jocuri lingvistice nici măcar nu sunt create pentru predare reală. GoGenius a fost concepută special ca instrument educațional pentru portugheza europeană.</p>
        <div class="call note">
          <span class="tag">De ce interfața rămâne în portugheză</span>
          Alegerea dumneavoastră stabilește limba folosită pentru instrucțiuni și traduceri — însă butoanele și denumirile meniurilor rămân intenționat în portugheză. Orientarea într-o interfață portugheză face parte din imersiune, iar cuvintele pe care le învățați din meniuri (<span class="pt">perfil</span>, <span class="pt">categorias</span>, <span class="pt">atualizar</span>) sunt cuvinte pe care le veți folosi în viața reală. Acest manual vă oferă pe parcurs semnificația în română a fiecărui buton.
        </div>
      </section>

      <!-- 4 MENU -->
      <section id="menu">
        <h2><span class="sec-num">04</span>Meniul principal &amp; ieșirea</h2>
        <p>Meniul principal este centrul aplicației. Trei benzi colorate deschid fiecare câte o zonă:</p>
        <table class="tbl">
          <thead><tr><th>Buton</th><th>Semnificație</th><th>Ce face</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Profil</td><td>Contul, punctajele și informațiile despre aplicație</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Categorii</td><td>Jocurile tematice — locul în care învățați și vă jucați</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Traducător</td><td>Deschide Google Traducere</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-04.jpg" alt="Meniul principal cu benzile Perfil, Categorias și Tradutor"></div><figcaption>Meniul principal: Perfil, Categorias, Tradutor.</figcaption></figure>
        <div class="call note">
          <span class="tag">Notă despre Tradutor</span>
          Acesta deschide <strong>Google Traducere</strong>, scoțându-vă din GoGenius. Folosiți gestul Înapoi al dispozitivului pentru a reveni.
        </div>
        <h3>Ieșirea din aplicație</h3>
        <p>Apăsați <strong>X-ul roșu</strong> din colțul din dreapta jos. GoGenius întreabă <span class="pt">Deseja sair da GoGenius?</span> (<em>Doriți să ieșiți din GoGenius?</em>). Apăsați <span class="btn-name">Sim</span> (Da) pentru a închide aplicația sau <span class="btn-name">Não</span> (Nu) pentru a rămâne.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-05.jpg" alt="Dialog de confirmare a ieșirii din GoGenius, cu butoanele Sim și Não"></div><figcaption>Confirmarea ieșirii: Sim (Da) sau Não (Nu).</figcaption></figure>
      </section>

      <!-- 5 PERFIL -->
      <section id="perfil">
        <h2><span class="sec-num">05</span>Perfil — profilul dumneavoastră</h2>
        <p>Dacă apăsați <span class="pt">Perfil</span> în meniul principal, se deschide un meniu mic cu trei opțiuni:</p>
        <table class="tbl">
          <thead><tr><th>Opțiune</th><th>Deschide</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Editarea datelor contului (consultați secțiunea următoare)</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Punctajele și clasamentele dumneavoastră</td></tr>
            <tr><td><span class="btn-name">Sobre a APP / Políticas de Privacidade</span></td><td>Despre aplicație &amp; politica de confidențialitate</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-06.jpg" alt="Meniul Perfil cu opțiunile Perfil, Classificações și Sobre a APP"></div><figcaption>Meniul Perfil și cele trei opțiuni ale sale.</figcaption></figure>
      </section>

      <!-- 6 EDITAR PERFIL -->
      <section id="editar">
        <h2><span class="sec-num">06</span>Editar Perfil — editarea datelor</h2>
        <p>Ecranul <span class="pt">Editar Perfil</span> este locul în care vizualizați și modificați informațiile contului.</p>
        <table class="tbl">
          <thead><tr><th>Câmp</th><th>Semnificație</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Sexo</span></td><td>Sex (listă derulantă)</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Vârstă</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Naționalitate</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Adresă / locație</td></tr>
            <tr><td><span class="btn-name">Password Atual</span></td><td>Parola actuală</td></tr>
            <tr><td><span class="btn-name">Password Nova</span></td><td>Parolă nouă</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Confirmarea parolei noi</td></tr>
          </tbody>
        </table>
        <p>Aveți nevoie de cele trei câmpuri pentru parolă numai dacă vă schimbați parola — în caz contrar, lăsați-le necompletate. Apăsați <strong>pictograma ochi</strong> de lângă un câmp de parolă pentru a afișa sau ascunde ceea ce ați introdus.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-07.jpg" alt="Formularul Editar Perfil cu câmpuri și butoanele Atualizar, Terminar Sessão și Eliminar Perfil"></div><figcaption>Formularul Editar Perfil și cele trei butoane de acțiune.</figcaption></figure>
        <h3>Butoane de acțiune</h3>
        <table class="tbl">
          <thead><tr><th>Buton</th><th>Semnificație</th><th>Ce face</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Actualizare</td><td>Salvează modificările făcute mai sus</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Deconectare</td><td>Vă deconectează de la cont</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Ștergere profil</td><td>Șterge definitiv contul</td></tr>
          </tbody>
        </table>
        <div class="call warn">
          <span class="tag">Eliminar Perfil este definitivă</span>
          Ștergerea profilului elimină contul împreună cu progresul și punctajele acumulate. Această acțiune nu poate fi anulată.
        </div>
      </section>

            <!-- 7 CATEGORIAS (THEMES) -->
      <section id="categorias">
        <h2><span class="sec-num">07</span>Categorias — teme</h2>
        <p><span class="pt">Categorias</span> este nucleul GoGenius: cele 14 jocuri tematice care alcătuiesc programa. Fiecare temă abordează un subiect cotidian și construiește un set de exerciții în jurul acestuia. Printre temele pe care le veți găsi se numără, fără a se limita la:</p>
        <div class="themes">
          <span class="theme">A minha gente <span class="en">· Familia mea</span></span>
          <span class="theme">Onde moro <span class="en">· Unde locuiesc</span></span>
          <span class="theme">O que visto <span class="en">· Cu ce mă îmbrac</span></span>
          <span class="theme">Movendo-me <span class="en">· Deplasarea</span></span>
          <span class="theme">Natura <span class="en">· Natura</span></span>
          <span class="theme">Eu, Hoje e no Futuro <span class="en">· Eu, astăzi &amp; în viitor</span></span>
        </div>
        <p>Indiferent de tema pe care o alegeți, învățarea este organizată în jurul acelorași trei domenii de competență — adevărata structură a aplicației. Fiecare antrenează o competență diferită și vă oferă soluțiile pe parcurs:</p>
        <div class="skills">
          <div class="skill fone"><div class="name">Fonê</div><div class="role">Înțelegere orală</div><p><span class="pt">Exercícios de Compreensão Oral</span> — activități de ascultare și fonologie.</p></div>
          <div class="skill lex"><div class="name">Lex</div><div class="role">Citire</div><p><span class="pt">Exercícios de Leitura</span> — exerciții de citire în portugheza europeană, cu soluții.</p></div>
          <div class="skill graph"><div class="name">Graph</div><div class="role">Scriere</div><p><span class="pt">Exercícios de Escrita</span> — activități de scriere, cu soluții explicate.</p></div>
        </div>
        <p>Veți întâlni din nou aceste trei denumiri în fiecare joc și pe panoul cu punctaje, unde este urmărit progresul pentru fiecare (consultați <span class="pt">Classificações</span>). Secțiunea următoare vă prezintă o temă completă, pentru a le vedea în practică.</p>
      </section>

      <!-- 8 THEMED GAMES -->
      <section id="themed-games">
        <h2><span class="sec-num">08</span>Jocuri tematice — ghid pas cu pas</h2>
        <p>Această secțiune urmărește un exemplu de joc tematic pe care îl puteți alege, <span class="pt">A minha gente</span>, de la carusel până la exerciții, astfel încât să vedeți cum funcționează efectiv un joc.</p>
        <h3>1 · Răsfoiți și deschideți o temă</h3>
        <p>Categorias se deschide ca un carusel sinuos de cercuri cu categorii. Glisați de-a lungul traseului pentru a trece de la o temă la alta și apăsați un cerc pentru a o deschide; fila care glisează din dreapta (aici, <span class="pt">A minha gente</span>) arată tema pe care urmează să o accesați. Cele două pictograme mici în formă de tabletă din colțul din dreapta sus schimbă limba (explicații mai jos), iar butonul roșu cu <strong>semnul întrebării</strong> deschide un index al funcției fiecărui buton din aplicație — păstrați-l la îndemână ca referință.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-08.jpg" alt="Carusel Categorias cu butoane circulare pentru categorii de-a lungul unui traseu curbat"></div>
            <figcaption>Caruselul Categorias — apăsați un cerc pentru a deschide o temă.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-09.jpg" alt="Indexul butoanelor deschis prin semnul întrebării roșu, care explică Graph, Lex, Fonê și celelalte butoane"></div>
            <figcaption>Semnul ? roșu deschide acest index al tuturor butoanelor.</figcaption>
          </figure>
        </div>
        <p>Indexul este o legendă utilă: numește cele trei tipuri de exerciții — <span class="pt">Graph</span> (scriere), <span class="pt">Lex</span> (citire) și <span class="pt">Fonê</span> (înțelegere orală) — alături de <span class="pt">Sair</span> (ieșire), <span class="pt">Solução</span> (soluție), <span class="pt">Saber mais</span> (mai multe informații), <span class="pt">Info</span>, pictograma de accesibilitate pentru deficiențe de auz și cele două meniuri de limbă (<span class="pt">Menu em Português Europeu</span> și <span class="pt">Menu Escolher Outras Línguas</span>).</p>
        <h3>2 · Alegeți un joc</h3>
        <p>Închideți indexul și apăsați tema <span class="pt">A minha gente</span>. Apare un mic meniu cu jocurile temei — un joc introductiv, plus <span class="pt">Graph</span>, <span class="pt">Lex</span> și <span class="pt">Fonê</span>, fiecare cu propriul buton <span class="pt">Jogar</span> (Joacă). Le puteți juca în orice ordine, dar cel mai bine este să începeți cu butonul în formă de <strong>inimă</strong> — jocul introductiv.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-10.jpg" alt="Meniul jocurilor tematice A minha gente cu cercuri pentru inimă, Graph, Lex și Fonê, fiecare având un buton Jogar"></div><figcaption>Jocurile temei — începeți cu jocul inimă (introductiv).</figcaption></figure>
        <h3>3 · În interiorul unui joc</h3>
        <p>Iată cum arată jocul introductiv în timpul utilizării. Glisați și fixați filele de jos pe persoana corespunzătoare (<span class="pt">Pai</span>, <span class="pt">Avô</span>, <span class="pt">Filhos/Irmãos</span>, <span class="pt">Mãe</span>, <span class="pt">Avó</span>) pentru a exersa vocabularul familiei. Două butoane rotunde se află în colțul din dreapta jos, iar cele două pictograme în formă de tabletă din dreapta sus schimbă limba (consultați nota de mai jos).</p>
        <p><strong>Butonul +</strong> deschide un panou <span class="pt">Vocabulário</span> care enumeră toate cuvintele predate în activitate — o referință utilă înainte de a începe. <strong>Butonul ureche</strong> afișează obiectivul și instrucțiunile activității sub formă de <strong>text</strong>: este o funcție de accesibilitate (cu titlul <span class="pt">Portador de Deficiência Auditiva</span>, &ldquo;persoană cu deficiență de auz&rdquo;), astfel încât cursanții surzi și cu deficiențe de auz să poată citi exact ce au de făcut.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-11.jpg" alt="Ecranul jocului A minha gente cu portrete de familie, file pentru membrii familiei, butoanele plus și ureche și două pictograme de limbă în formă de tabletă în dreapta sus"></div><figcaption>Un joc în desfășurare, cu cele două pictograme de limbă în dreapta sus.</figcaption></figure>
        <p>În orice moment din timpul unei activități sau al unui joc, priviți centrul de jos al ecranului: o mică <strong>săgeată îndreptată în sus</strong> deschide un meniu rapid către <span class="pt">Perfil</span>, <span class="pt">Categorias</span>, <span class="pt">Tradução</span> sau înapoi la <span class="pt">Menu</span> — ca să treceți între acele secțiuni fără să căutați prin aplicație.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-23.jpg" alt="Meniul de jos deschis în joc cu scurtături Perfil, Categorias, Tradução și Menu"></div><figcaption>Săgeata în sus deschide acest meniu din orice activitate sau joc.</figcaption></figure>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-12.jpg" alt="Panoul Vocabulário cu vocabularul familiei, deschis prin butonul plus"></div>
            <figcaption>Butonul <span class="pt">+</span> cu lista <span class="pt">Vocabulário</span></figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-13.jpg" alt="Panoul cu instrucțiuni text deschis prin butonul ureche, cu titlul Portador de Deficiência Auditiva"></div>
            <figcaption>Instrucțiunile text ale butonului ureche.</figcaption>
          </figure>
        </div>
        <div class="call note">
          <span class="tag">Ascultați din nou — în limba dumneavoastră sau în portugheză</span>
          Fiecare joc este bilingv. În <strong>colțul din dreapta sus</strong> veți vedea două pictograme mici în formă de tabletă. Apăsați <strong>tableta cu glob</strong> (<span class="pt">Menu Escolher Outras Línguas</span>) pentru a asculta sau citi din nou elementul curent în limba dumneavoastră ori <strong>tableta cu steagul Portugaliei</strong> (<span class="pt">Menu em Português Europeu</span>) pentru a reveni la portugheza europeană. Comutați între ele ori de câte ori aveți nevoie — aplicația nu vă limitează niciodată la o singură limbă.
        </div>
        <h3>4 · Graph, Lex &amp; Fonê</h3>
        <p>După jocul introductiv, treceți la cele trei exerciții de competență ale temei — <span class="pt">Graph</span> (scriere), <span class="pt">Lex</span> (citire) și <span class="pt">Fonê</span> (înțelegere orală).</p>

        <p><span class="pt">Graph</span> se concentrează pe abilitățile de <strong>scriere</strong>. Iată cum funcționează în tema <span class="pt">A minha gente</span>:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-17.jpg" alt="Activitate de scriere Graph cu spațiul A tua resposta și butonul roșu cu bec"></div><figcaption><span class="pt">Graph</span> — apăsați <span class="pt">A tua resposta...</span> pentru a începe să scrieți.</figcaption></figure>
        <p>Din nou, cele două pictograme tabletă din colțul din dreapta sus vă permit să ascultați instrucțiunile: butonul cu <strong>harta lumii</strong> le redă în limba dumneavoastră, iar butonul cu <strong>steagul Portugaliei</strong> le redă în portugheză.</p>
        <p>După ce ați ascultat instrucțiunile, apăsați zona piersicie unde apare <span class="pt">A tua resposta...</span> („Răspunsul tău...”) și începeți să scrieți. Este recomandat să adăugați o tastatură portugheză pe dispozitiv — pe iPhone, de exemplu, puteți activa un aranjament portughez pentru accente, gramatică și ortografie corecte.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-18.jpg" alt="Câmpul de răspuns Graph cu tastatura portugheză deschisă"></div>
            <figcaption>Tastatură deschisă pentru tastare</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-19.jpg" alt="Graph cu un răspuns tipărit în portugheză și bifa albastră pentru trimitere"></div>
            <figcaption>Răspuns gata — apăsați bifa albastră pentru a trimite.</figcaption>
          </figure>
        </div>
        <p>Când ați terminat de scris, apăsați <strong>bifa albastră</strong>. Apoi comparați răspunsul cu soluția: uitați-vă în colțul din dreapta jos și apăsați <strong>becul roșu</strong>. Apare un panou <span class="pt">Solução</span> cu un răspuns model.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-20.jpg" alt="Panoul Solução din Graph cu răspunsul model și butonul Obrigado"></div><figcaption>Becul roșu deschide <span class="pt">Solução</span> — comparați, apoi apăsați <span class="pt">Obrigado</span>.</figcaption></figure>
        <div class="call tip">
          <span class="tag">Potriviți sensul, nu fiecare cuvânt</span>
          Nu vă faceți griji dacă răspunsul și soluția diferă. Important este același sens, o gramatică și o sintaxă solide și același mesaj.
        </div>
        <p><span class="pt">Lex</span> este practică de citire în portugheza europeană, cu sprijin integrat. Ca înainte, cele două pictograme tabletă din dreapta sus vă permit să auziți instrucțiunile în limba maternă (harta lumii) sau în portugheză (steagul Portugaliei).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-21.jpg" alt="Activitate de citire Lex cu textul în portugheză și fila Dicionário închisă"></div>
            <figcaption>Textul de citit</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-22.jpg" alt="Lex cu Dicionário deschis arătând definiția unui cuvânt-cheie în portugheză"></div>
            <figcaption><span class="pt">Dicionário</span> deschis cu un cuvânt explicat.</figcaption>
          </figure>
        </div>
        <p>Vi se dă un text scurt de citit și înțeles. Citiți-l <strong>cu voce tare</strong> — asta întărește conversația, pronunția și sunetul portughezei europene.</p>
        <p>Sub text se află o filă portocalie <span class="pt">Dicionário</span> (Dicționar). Apăsați-o pentru a desfășura cuvinte și expresii cheie din text, explicate în portugheză — util când un termen este nou.</p>
        <p><strong>Becul roșu</strong> din colțul din dreapta jos redă textul cu voce tare în portugheză de îndată ce îl apăsați. Folosiți-l ca model de sunet, apoi citiți odată cu el.</p>
        <div class="call tip">
          <span class="tag">Citiți, auziți, pronunțați — apoi repetați</span>
          Scopul lui <span class="pt">Lex</span> este citirea, ascultarea și pronunția în dialectul portughez european (PT). Exersați des și citiți întotdeauna textul cu voce tare.
        </div>
        <p><span class="pt">Fonê</span> exersează <strong>înțelegerea orală</strong> — <span class="pt">Exercícios de Compreensão Oral</span>: activități de ascultare și fonologie.</p>
        <p>Din nou, cele două pictograme tabletă din dreapta sus vă permit să auziți instrucțiunile în limba maternă (harta lumii) sau în portugheza europeană (steagul Portugaliei).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-24.jpg" alt="Ecranul de întrebări Fonê cu butonul disc alb și opțiuni nebifate"></div>
            <figcaption>Gata de ascultat</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-25.jpg" alt="Ecranul de întrebări Fonê în timpul redării conversației"></div>
            <figcaption>Apăsați discul alb pentru a porni conversația.</figcaption>
          </figure>
        </div>
        <p>Apăsați <strong>discul alb</strong> de lângă <span class="pt">Questões</span> pentru a reda conversația pe care o veți folosi ca referință. Odată selectat, discul devine puțin gri și conversația începe.</p>
        <p>Când ați terminat de ascultat, redați-o din nou de <strong>două sau trei ori</strong> până o înțelegeți, apoi bifați răspunsurile corecte (<span class="pt">Assinale a resposta correta</span>).</p>
        <div class="call tip">
          <span class="tag">Întrebările rămân în portugheza europeană</span>
          Aceste întrebări de reflecție sunt mereu în portugheza europeană. Țineți Google Translate sau aplicația preferată de traducere la îndemână — traducem acest prim modul mai jos, dar mai târziu veți face asta singuri. Este un obicei bun. Puteți deschide și <span class="pt">Tradução</span> din meniul săgeții de jos.
        </div>
        <p>Iată întrebările și opțiunile, cu traduceri în română:</p>
        <table class="tbl">
          <thead><tr><th>Portugheză</th><th>Română</th></tr></thead>
          <tbody>

            <tr>
              <td>
                <span class="btn-name">1. O Filipe perguntou ao João se:</span><br>
                · Não ia haver aula de Português.<br>
                · Não ia haver aula de História.<br>
                · Não ia ter teste de História.
              </td>
              <td>
                1. Filipe l-a întrebat pe João dacă:<br>· Nu urma să fie oră de portugheză.<br>· Nu urma să fie oră de Istorie.<br>· Nu urma să fie test de Istorie.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">2. O João vai faltar à aula porque:</span><br>
                · Não lhe apetece ir.<br>
                · Tem de ir à praia.<br>
                · Tem de ir ao dentista.
              </td>
              <td>
                2. João va lipsi de la oră pentru că:<br>· Nu are chef să meargă.<br>· Trebuie să meargă la plajă.<br>· Trebuie să meargă la dentist.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">3. A aula de História:</span><br>
                · Não ia haver no dia seguinte.<br>
                · Foi adiada para a tarde.<br>
                · Foi adiada para a noite.
              </td>
              <td>
                3. Ora de Istorie:<br>· Nu urma să aibă loc a doua zi.<br>· A fost amânată pentru după-amiază.<br>· A fost amânată pentru seară.
              </td>
            </tr>
          </tbody>
        </table>
        <p>Am bifat deja răspunsurile pentru acest prim modul ca să vă ajutăm:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-26.jpg" alt="Fonê with the correct answers selected for all three questions"></div><figcaption>Răspunsuri model bifate — apăsați <span class="pt">continuar</span> când sunteți gata.</figcaption></figure>
        <ol>
          <li><span class="pt">Não ia haver aula de História.</span> — Nu urma să fie oră de Istorie.</li>
          <li><span class="pt">Tem de ir ao dentista.</span> — Trebuie să meargă la dentist.</li>
          <li><span class="pt">Foi adiada para a noite.</span> — A fost amânată pentru seară.</li>
        </ol>
        <p>Ca în <span class="pt">Lex</span>, o filă portocalie <span class="pt">Dicionário</span> arată vocabularul cheie. Apăsați-o pentru definiții în portugheză.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-27.jpg" alt="Fonê cu Dicionário deschis arătând definiția lui apontamentos"></div>
            <figcaption><span class="pt">Dicionário</span> deschis cu un cuvânt cheie explicat.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-29.jpg" alt="Fonê cu răspunsuri bifate și Dicionário desfășurat"></div>
            <figcaption>Răspunsuri marcate cu <span class="pt">Dicionário</span> deschis.</figcaption>
          </figure>
        </div>
        <p><strong>Butonul ureche roșu</strong> din dreapta jos este o funcție de accesibilitate: arată conversația în scris (intitulată <span class="pt">Portador de Deficiência Auditiva</span>). Dacă un cuvânt sau o expresie nu e clară, folosiți translatorul sau notițele.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-28.jpg" alt="Suprapunere de accesibilitate Fonê cu transcrierea scrisă"></div><figcaption>Butonul ureche deschide conversația scrisă — apăsați <span class="pt">Obrigado</span> pentru a închide.</figcaption></figure>
        <p>Când ați terminat întrebările, apăsați <span class="pt">continuar</span> (continuă) jos pentru a trece la următoarea parte din <span class="pt">Fonê</span>.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-32.jpg" alt="Ecran Fonê cu răspunsuri bifate, Dicionário deschis și link continuar"></div><figcaption>Apăsați <span class="pt">continuar</span> pentru a trece la practica de fonologie.</figcaption></figure>
        <p><span class="pt">Fonê</span> include și practică de fonologie: cercuri cu cuvinte, un <strong>bec roșu</strong> pentru soluție și același buton ureche pentru sprijin text — de exemplu, pentru a scrierea cuvintelor din familie.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-30.jpg" alt="Ecran de fonologie Fonê cu cercurile Família, Pai, Mãe și Filho"></div>
            <figcaption>Practică fonologică</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-31.jpg" alt="Panou de accesibilitate Fonê care cere să scrieți cuvintele"></div>
            <figcaption>Instrucțiunile text ale butonului ureche.</figcaption>
          </figure>
        </div>
        <div class="call tip">
          <span class="tag">Ascultați de mai multe ori</span>
          Înțelegerea orală se îmbunătățește prin repetiție. Redați din nou discul, verificați <span class="pt">Dicionário</span> și folosiți transcrierea urechii când aveți nevoie să revedeți dialogul.
        </div>
        <h3>5 · Dincolo de acest ghid</h3>
        <p>Ce ați urmat acum în <span class="pt">A minha gente</span> se aplică oricărei teme sau activități din GoGenius, cu mici variații. Activitățile sunt în mare parte explicite, iar instrumentele pentru succes le aveți deja: instrucțiuni bilingve, meniul săgeții de jos, <span class="pt">Dicionário</span>, soluții, text de accesibilitate și <span class="pt">Tradução</span> când aveți nevoie.</p>
        <p>Dacă ceva din aplicație nu e clar, reveniți la acest manual — sau contactați-ne la <a href="#support">Support &amp; contact</a>. Suntem aici să vă ajutăm pe drumul învățării portughezei europene.</p>
        <div class="call tip">
          <span class="tag"><span class="pt">Boa sorte!</span> · Succes</span>
          Bucurați-vă de jocuri — și continuați să exersați.
        </div>
      </section>

<!-- 7 CLASSIFICACOES -->
      <section id="scores">
        <h2><span class="sec-num">09</span>Classificações — punctaje &amp; clasamente</h2>
        <p>Accesat prin <span class="pt">Perfil ▸ Classificações</span>, acesta este panoul dumneavoastră cu punctaje. Enumeră fiecare temă din aplicație; apăsați una pentru a o extinde și a vedea rezultatele.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-14.jpg" alt="Lista Classificações cu teme și pictograme"></div>
            <figcaption>Lista temelor din <span class="pt">Classificações</span>.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-15.png" alt="Card de temă extins care afișează un punctaj cu stele și insigne de finalizare Graph, Lex și Fonê"></div>
            <figcaption>O temă extinsă cu stele și insigne de competențe.</figcaption>
          </figure>
        </div>
        <p>Fiecare temă extinsă afișează un <strong>punctaj cu stele</strong> (din cinci), plus o insignă de finalizare pentru fiecare dintre cele trei competențe — <span class="pt">Graph</span>, <span class="pt">Lex</span> și <span class="pt">Fonê</span>. O bifă verde înseamnă că ați finalizat exercițiile acelei competențe pentru tema respectivă.</p>
        <div class="call tip">
          <span class="tag">Cum se obțin punctele</span>
          Stelele și punctele sunt acordate numai când <strong>finalizați toate sarcinile</strong> dintr-un joc — finalizarea parțială nu contează, deoarece un joc terminat este considerat dovada că ați învățat efectiv materialul. Dacă nu puteți termina într-o singură sesiune, ieșiți și reluați mai târziu; nu pierdeți nimic.
        </div>
      </section>

      <!-- 8 SOBRE -->
      <section id="sobre">
        <h2><span class="sec-num">10</span>Sobre a APP &amp; confidențialitate</h2>
        <p>Tot sub <span class="pt">Perfil</span>, ecranul <span class="pt">Sobre a APP / Políticas de Privacidade</span> conține informații despre aplicație și politica sa completă de confidențialitate. Apăsați steagul <strong>portughez</strong> sau <strong>englez</strong> din partea de sus pentru a schimba limba.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-16.jpg" alt="Ecranul Despre aplicație cu comutator între steagul portughez și cel englez"></div><figcaption>Despre aplicație, cu comutatorul de steag PT / EN.</figcaption></figure>
        <p class="intro-note">
          
          Pe scurt: GoGenius sprijină învățarea asistată a portughezei europene prin exerciții de citire, scriere și fonetică, susținute de tutoriale în mai multe limbi. Pe măsură ce vă jucați, se construiește o grilă de clasificare pentru a vă putea vedea nivelul de competență. Aplicația este disponibilă pe Android (și pe PC printr-un emulator), iar echipa de cercetare recomandă sesiuni zilnice scurte de 15–20 de minute pentru cele mai bune rezultate.
        </p>
  
        <p>Politica este disponibilă și online la <a href="https://privacidade.grupoautonoma.pt/index.php/politica-de-privacidade-go-genius-en/" target="_blank" rel="noopener">privacidade.grupoautonoma.pt</a>.</p>
      </section>

      <!-- 9 SUPPORT -->
      <section id="support">
        <h2><span class="sec-num">11</span>Asistență &amp; contact</h2>
        <div class="cards">
          <div class="card"><h4>Asistență pentru aplicație</h4><p><a href="mailto:gogenius@autonoma.pt">gogenius@autonoma.pt</a></p></div>
          <div class="card"><h4>Dezvoltator</h4><p>TOO WILD — SOFTWARE, LDA</p><p><a href="mailto:toowildsoftware@gmail.com">toowildsoftware@gmail.com</a></p><p>+351 923 544 221</p></div>
        </div>
      </section>

      <!-- GLOSSARY -->
      <section id="glossary">
        <h2><span class="sec-num">A</span>Glosar portughez rapid</h2>
        <table class="tbl">
          <thead><tr><th>Portugheză</th><th>Română</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Bem-Vindo!</span></td><td>Bun venit!</td></tr>
            <tr><td><span class="btn-name">Entrar</span></td><td>Autentificare</td></tr>
            <tr><td><span class="btn-name">Registar</span></td><td>Înregistrare</td></tr>
            <tr><td><span class="btn-name">Recuperar Password</span></td><td>Recuperare parolă</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Localitate / oraș
                <br>
                <span style="color:#666;font-size:0.96em;">
                  De unde accesați aplicația?
                </span>
              </td>
            </tr>
 
            <tr><td><span class="btn-name">Menu</span></td><td>Meniu principal</td></tr>
            <tr><td><span class="btn-name">Perfil</span></td><td>Profil</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Categorii (jocurile)</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Traducător</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Punctaje / Clasamente</td></tr>
            <tr><td><span class="btn-name">Editar Perfil</span></td><td>Editare profil</td></tr>
            <tr><td><span class="btn-name">Sobre a APP</span></td><td>Despre aplicație</td></tr>
            <tr><td><span class="btn-name">Políticas de Privacidade</span></td><td>Politica de confidențialitate</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Sex</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Vârstă</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Naționalitate</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Adresă / Locație</td></tr>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Actualizare</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Deconectare</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Ștergere profil</td></tr>
            <tr><td><span class="btn-name">Sim / Não</span></td><td>Da / Nu</td></tr>
          </tbody>
        </table>
        <footer class="doc-foot"><p>GoGenius este susținută de FCT — Fundação para a Ciência e a Tecnologia prin fonduri naționale și de Centro de Investigação em Psicologia (CIP-UAL).</p></footer>
      </section>
`,zh=`<header class="hero" id="welcome">
        <div class="eyebrow">Ual: Universidade Autónoma de Lisboa Luís de Camões </div>
        <h1>Руководство GoGenius</h1>
        <p class="lede">GoGenius — первое приложение, созданное для изучения <strong>европейского португальского языка</strong>, прежде всего носителями девяти основных языков, однако им может пользоваться любой желающий. Это руководство познакомит вас с каждым экраном и каждой кнопкой с помощью <strong>тематических игр</strong>, развивающих навыки аудирования, чтения и письма.</p>

        <div class="call tip">
          <span class="tag">Перед началом</span>
          Для наилучшего результата подключите проводные или <strong>Bluetooth-наушники</strong> к телефону или планшету до запуска GoGenius. Убедитесь, что звук воспроизводится через наушники: многие игры основаны на аудировании, а чистый звук помогает без помех понимать подсказки и выполнять задания на произношение.
        </div>
  
        <div class="langstrip" aria-label="Поддерживаемые исходные языки">
          <span class="lang">Арабский</span><span class="lang">Русский</span><span class="lang">Украинский</span>
          <span class="lang">Румынский</span><span class="lang">Английский</span><span class="lang">Французский</span>
          <span class="lang">Испанский</span><span class="lang">Китайский (мандарин)</span><span class="lang">Немецкий</span>
        </div>
        <div class="factbar">
          <div class="fact"><div class="n">14</div><div class="l">тематических игр</div></div>
          <div class="fact"><div class="n">A1&rarr;B2</div><div class="l">уровни учащихся</div></div>
          <div class="fact"><div class="n">7+</div><div class="l">рекомендуемый возраст</div></div>
        </div>
        <p class="intro-note" style="margin-top:1.6rem;">GoGenius предназначен для иммигрантов и беженцев, живущих в Португалии, для изучающих португальский язык в любой стране, а также для школ, использующих приложение на занятиях. Оно работает на телефонах и планшетах Android, а также на компьютерах (через эмулятор Android на ПК). Одна загрузка открывает доступ ко всем модулям — <strong>подписка не требуется</strong>.</p>
        <p class="intro-note">GoGenius также создан с учётом инклюзивности: в каждой игре есть письменная версия цели и инструкций для глухих и слабослышащих учащихся, а любой элемент можно повторно воспроизвести на вашем языке или на европейском португальском, когда это необходимо.</p>
        <p class="intro-note">Образовательную модель разработала <strong>PhD Sandra Figueiredo</strong></p>
      </header>

      <!-- QUICK START -->
      <section id="quickstart">
        <div class="quickstart">
          <div class="qs-eyebrow">Начало работы · 60 секунд</div>
          <div class="qs-title">Знакомство за минуту</div>
          <ul>
            <li><strong>Достаточно пяти минут в день.</strong> Выполняйте ежедневные задания примерно за пять минут — и при таком темпе приблизительно за два месяца вы сможете продвинуться от A2 к B1.</li>
            <li><strong>Учитесь вместе.</strong> Упражнения одинаково хорошо подходят как для групповой, так и для самостоятельной работы.</li>
            <li><strong>Создано для занятий.</strong> Учителя могут проводить игры на уроке и превращать их в викторину для всей группы.</li>
          </ul>
        </div>
      </section>

      <!-- 1 LAUNCH -->
      <section id="launch">
        <h2><span class="sec-num">01</span>Экран запуска</h2>
        <p>При открытии GoGenius вас встречает экран приветствия — логотип над яркой лентой со словом &ldquo;привет&rdquo; на разных языках. Через мгновение откроется выбор языка.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-01.jpg" alt="Экран приветствия GoGenius с логотипом над цветными полосами с названиями языков"></div><figcaption>Экран приветствия GoGenius.</figcaption></figure>
      </section>

      <!-- 2 SIGN IN -->
      <section id="signin">
        <h2><span class="sec-num">02</span>Вход &amp; регистрация</h2>
        <p>Затем появляется экран <span class="pt">Bem-Vindo!</span> (<em>Добро пожаловать!</em>). Если у вас уже есть учётная запись, войдите здесь; если вы пользуетесь приложением впервые, создайте её.</p>
        <h3>Если у вас уже есть учётная запись</h3>
        <p>Введите <span class="pt">E-mail</span> и <span class="pt">Password</span>, затем нажмите <span class="btn-name">Entrar</span> (Войти). Нажмите <strong>значок глаза</strong>, чтобы проверить введённый текст. Забыли пароль? Нажмите <span class="btn-name">Recuperar Password</span> (Восстановить пароль), чтобы сбросить его по электронной почте.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-02.jpg" alt="Экран входа с полями E-mail и Password, кнопками Entrar и Registar"></div><figcaption>Экран входа — войдите или нажмите Registar, чтобы создать учётную запись.</figcaption></figure>
        <h3>Если вы новый пользователь — зарегистрируйтесь</h3>
        <p>Нажмите <span class="btn-name">Registar</span> (Зарегистрироваться), чтобы открыть форму регистрации (<span class="pt">Entrar com o E-mail</span>). Заполните данные и нажмите <span class="btn-name">Registar</span> для завершения.</p>
        <table class="tbl">
          <thead><tr><th>Поле</th><th>Значение</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Idade</span></td><td>Возраст</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Пол (раскрывающийся список)</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Гражданство</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Населённый пункт / город
                <br>
                <span style="color:#666;font-size:0.96em;">
                  Откуда вы заходите в приложение?
                </span>
              </td>
            </tr>

            <tr><td><span class="btn-name">E-mail</span></td><td>Адрес электронной почты</td></tr>
            <tr><td><span class="btn-name">Password</span></td><td>Пароль</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Подтвердите пароль</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-03.jpg" alt="Форма регистрации с полями Idade, Sexo, Nacionalidade, Localidade, E-mail и пароля"></div><figcaption>Форма регистрации.</figcaption></figure>
        <div class="call note">
          <span class="tag">Подтвердите электронную почту</span>
          После регистрации GoGenius отправит <strong>письмо для подтверждения</strong> на указанный адрес. Откройте его и перейдите по ссылке, чтобы активировать учётную запись до входа. Если письмо не появилось во входящих в течение нескольких минут, проверьте папку со спамом или нежелательной почтой.
        </div>
      </section>

      <!-- 3 LANGUAGE -->
      <section id="language">
        <h2><span class="sec-num">03</span>Выбор языка</h2>
        <p>Выберите язык, которым вы уже владеете. Подсказка отображается на португальском и английском — <span class="pt">Escolhe a tua língua</span> / <em>Выберите свой язык</em>.</p>
        <p>Нажимайте стрелки <strong>&lsaquo;</strong> и <strong>&rsaquo;</strong>, чтобы пролистывать флаги, пока не найдёте нужный, затем нажмите <span class="btn-name">Ok</span>. GoGenius поддерживает девять исходных языков: английский, испанский, арабский, китайский (мандарин), русский, румынский, украинский, немецкий и французский.</p>
        
        <figure class="shot"><div class="phone"><img src="/russian.png" alt="Экран выбора языка с каруселью флагов и кнопкой Ok"></div><figcaption>С помощью стрелок найдите свой флаг, затем нажмите Ok.</figcaption></figure>
        <p>Каждый из этих девяти языков является <strong>языком поддержки</strong>: он помогает понимать инструкции, а весь изучаемый материал остаётся на европейском португальском. Именно это отличает GoGenius: большинство приложений для изучения португальского преподают <strong>бразильский</strong> вариант, который заметно отличается произношением, лексикой и грамматикой, а многие языковые игры вообще не предназначены для настоящего обучения. GoGenius разработан именно как образовательный инструмент для изучения европейского португальского.</p>
        <div class="call note">
          <span class="tag">Почему интерфейс остаётся на португальском</span>
          Ваш выбор определяет язык инструкций и переводов, но названия кнопок и меню намеренно остаются на португальском. Ориентирование в португалоязычном интерфейсе — часть погружения, а слова, которые вы узнаете из меню (<span class="pt">perfil</span>, <span class="pt">categorias</span>, <span class="pt">atualizar</span>), пригодятся вам в реальной жизни. По ходу чтения это руководство объяснит русское значение каждой кнопки.
        </div>
      </section>

      <!-- 4 MENU -->
      <section id="menu">
        <h2><span class="sec-num">04</span>Главное меню &amp; выход</h2>
        <p>Главное меню — ваш центр управления. Три цветные полосы открывают три раздела:</p>
        <table class="tbl">
          <thead><tr><th>Кнопка</th><th>Значение</th><th>Назначение</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Профиль</td><td>Ваша учётная запись, результаты и сведения о приложении</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Категории</td><td>Тематические игры — здесь вы учитесь и играете</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Переводчик</td><td>Открывает Google Translate</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-04.jpg" alt="Главное меню с полосами Perfil, Categorias и Tradutor"></div><figcaption>Главное меню: Perfil, Categorias, Tradutor.</figcaption></figure>
        <div class="call note">
          <span class="tag">Примечание о Tradutor</span>
          Эта кнопка открывает <strong>Google Translate</strong>, выводя вас из GoGenius. Чтобы вернуться, используйте жест возврата на устройстве.
        </div>
        <h3>Выход из приложения</h3>
        <p>Нажмите <strong>красный крестик</strong> в правом нижнем углу. GoGenius спросит: <span class="pt">Deseja sair da GoGenius?</span> (<em>Хотите выйти из GoGenius?</em>). Нажмите <span class="btn-name">Sim</span> (Да), чтобы закрыть приложение, или <span class="btn-name">Não</span> (Нет), чтобы остаться.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-05.jpg" alt="Диалог подтверждения выхода из GoGenius с кнопками Sim и Não"></div><figcaption>Подтверждение выхода: Sim (Да) или Não (Нет).</figcaption></figure>
      </section>

      <!-- 5 PERFIL -->
      <section id="perfil">
        <h2><span class="sec-num">05</span>Perfil — ваш профиль</h2>
        <p>При нажатии <span class="pt">Perfil</span> в главном меню откроется небольшое меню с тремя вариантами:</p>
        <table class="tbl">
          <thead><tr><th>Пункт</th><th>Что открывает</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Редактирование данных учётной записи (см. следующий раздел)</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Ваши баллы и рейтинги</td></tr>
            <tr><td><span class="btn-name">Sobre a APP / Políticas de Privacidade</span></td><td>О приложении &amp; политика конфиденциальности</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-06.jpg" alt="Меню Perfil с пунктами Perfil, Classificações и Sobre a APP"></div><figcaption>Меню Perfil и три его пункта.</figcaption></figure>
      </section>

      <!-- 6 EDITAR PERFIL -->
      <section id="editar">
        <h2><span class="sec-num">06</span>Editar Perfil — редактирование данных</h2>
        <p>На экране <span class="pt">Editar Perfil</span> можно просматривать и изменять сведения своей учётной записи.</p>
        <table class="tbl">
          <thead><tr><th>Поле</th><th>Значение</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Sexo</span></td><td>Пол (раскрывающийся список)</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Возраст</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Гражданство</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Адрес / местоположение</td></tr>
            <tr><td><span class="btn-name">Password Atual</span></td><td>Текущий пароль</td></tr>
            <tr><td><span class="btn-name">Password Nova</span></td><td>Новый пароль</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Подтвердите новый пароль</td></tr>
          </tbody>
        </table>
        <p>Три поля пароля нужны только при его изменении — в остальных случаях оставьте их пустыми. Нажмите <strong>значок глаза</strong> рядом с полем пароля, чтобы показать или скрыть введённый текст.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-07.jpg" alt="Форма Editar Perfil с полями и кнопками Atualizar, Terminar Sessão, Eliminar Perfil"></div><figcaption>Форма Editar Perfil и три кнопки действий.</figcaption></figure>
        <h3>Кнопки действий</h3>
        <table class="tbl">
          <thead><tr><th>Кнопка</th><th>Значение</th><th>Назначение</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Обновить</td><td>Сохраняет внесённые выше изменения</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Выйти</td><td>Выполняет выход из вашей учётной записи</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Удалить профиль</td><td>Безвозвратно удаляет вашу учётную запись</td></tr>
          </tbody>
        </table>
        <div class="call warn">
          <span class="tag">Eliminar Perfil удаляет данные безвозвратно</span>
          При удалении профиля исчезнут ваша учётная запись, весь накопленный прогресс и баллы. Отменить это действие невозможно.
        </div>
      </section>

            <!-- 7 CATEGORIAS (THEMES) -->
      <section id="categorias">
        <h2><span class="sec-num">07</span>Categorias — темы</h2>
        <p><span class="pt">Categorias</span> — сердце GoGenius: 14 тематических игр, составляющих учебную программу. Каждая тема посвящена повседневной ситуации и содержит набор связанных с ней упражнений. Среди доступных тем, помимо прочих:</p>
        <div class="themes">
          <span class="theme">A minha gente <span class="en">· Моя семья</span></span>
          <span class="theme">Onde moro <span class="en">· Где я живу</span></span>
          <span class="theme">O que visto <span class="en">· Что я ношу</span></span>
          <span class="theme">Movendo-me <span class="en">· Передвижение</span></span>
          <span class="theme">Natura <span class="en">· Природа</span></span>
          <span class="theme">Eu, Hoje e no Futuro <span class="en">· Я сегодня &amp; в будущем</span></span>
        </div>
        <p>Независимо от выбранной темы обучение организовано вокруг одних и тех же трёх областей навыков — это основа структуры приложения. Каждая развивает отдельную компетенцию и по ходу работы предлагает решения:</p>
        <div class="skills">
          <div class="skill fone"><div class="name">Fonê</div><div class="role">Понимание устной речи</div><p><span class="pt">Exercícios de Compreensão Oral</span> — задания на аудирование и фонологию.</p></div>
          <div class="skill lex"><div class="name">Lex</div><div class="role">Чтение</div><p><span class="pt">Exercícios de Leitura</span> — практика чтения на европейском португальском с ответами.</p></div>
          <div class="skill graph"><div class="name">Graph</div><div class="role">Письмо</div><p><span class="pt">Exercícios de Escrita</span> — письменные задания с готовыми решениями.</p></div>
        </div>
        <p>Эти три названия встретятся вам в каждой игре и на таблице результатов, где отслеживается прогресс по каждому навыку (см. <span class="pt">Classificações</span>). В следующем разделе подробно разобрана целая тема, чтобы показать их в действии.</p>
      </section>

      <!-- 8 THEMED GAMES -->
      <section id="themed-games">
        <h2><span class="sec-num">08</span>Тематические игры — пошаговый обзор</h2>
        <p>В этом разделе на примере выбранной тематической игры <span class="pt">A minha gente</span> показан весь путь от карусели до упражнений, чтобы вы увидели, как устроена игра.</p>
        <h3>1 · Найдите и откройте тему</h3>
        <p>Раздел Categorias открывается в виде извилистой карусели из кругов категорий. Проведите пальцем вдоль пути для перехода между темами и нажмите круг, чтобы открыть тему; выдвигающаяся справа вкладка (здесь <span class="pt">A minha gente</span>) показывает, какую тему вы собираетесь выбрать. Два маленьких значка планшета в правом верхнем углу переключают язык (подробности ниже), а красная кнопка со <strong>знаком вопроса</strong> открывает справочник по всем кнопкам приложения — держите его под рукой.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-08.jpg" alt="Карусель Categorias с круглыми кнопками категорий вдоль изогнутого пути"></div>
            <figcaption>Карусель Categorias — нажмите круг, чтобы открыть тему.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-09.jpg" alt="Справочник кнопок, открытый красным знаком вопроса, с пояснениями Graph, Lex, Fonê и других кнопок"></div>
            <figcaption>Красный знак ? открывает справочник по всем кнопкам.</figcaption>
          </figure>
        </div>
        <p>Справочник служит удобной легендой: в нём указаны три типа упражнений — <span class="pt">Graph</span> (письмо), <span class="pt">Lex</span> (чтение) и <span class="pt">Fonê</span> (понимание устной речи), а также <span class="pt">Sair</span> (выход), <span class="pt">Solução</span> (решение), <span class="pt">Saber mais</span> (подробнее), <span class="pt">Info</span>, значок специальных возможностей для слабослышащих и два языковых меню (<span class="pt">Menu em Português Europeu</span> и <span class="pt">Menu Escolher Outras Línguas</span>).</p>
        <h3>2 · Выберите игру</h3>
        <p>Закройте справочник и нажмите тему <span class="pt">A minha gente</span>. Появится небольшое меню игр этой темы: вводная игра, а также <span class="pt">Graph</span>, <span class="pt">Lex</span> и <span class="pt">Fonê</span>, каждая со своей кнопкой <span class="pt">Jogar</span> (Играть). Их можно проходить в любом порядке, но лучше начать с кнопки <strong>сердца</strong> — вводной игры.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-10.jpg" alt="Меню тематических игр A minha gente с кругами сердца, Graph, Lex и Fonê, каждый с кнопкой Jogar"></div><figcaption>Игры темы — начните с вводной игры с сердцем.</figcaption></figure>
        <h3>3 · Внутри игры</h3>
        <p>Так выглядит вводная игра в процессе. Перетаскивайте нижние ярлыки на соответствующего человека (<span class="pt">Pai</span>, <span class="pt">Avô</span>, <span class="pt">Filhos/Irmãos</span>, <span class="pt">Mãe</span>, <span class="pt">Avó</span>), изучая лексику по теме семьи. В правом нижнем углу находятся две круглые кнопки, а два значка планшета в правом верхнем углу переключают язык (см. примечание ниже).</p>
        <p><strong>Кнопка +</strong> открывает панель <span class="pt">Vocabulário</span> со списком всех слов, которые изучаются в задании, — это удобная справка перед началом. <strong>Кнопка с ухом</strong> показывает цель и инструкции к заданию в виде <strong>текста</strong>: это функция специальных возможностей (под заголовком <span class="pt">Portador de Deficiência Auditiva</span>, &ldquo;человек с нарушением слуха&rdquo;), позволяющая глухим и слабослышащим учащимся точно прочитать, что нужно делать.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-11.jpg" alt="Экран игры A minha gente с семейными портретами, ярлыками членов семьи, кнопками плюса и уха и двумя значками языка в правом верхнем углу"></div><figcaption>Игра в процессе с двумя значками языка в правом верхнем углу.</figcaption></figure>
        <p>В любой момент во время активности или игры смотрите в нижний центр экрана: маленькая <strong>стрелка вверх</strong> открывает быстрое меню к <span class="pt">Perfil</span>, <span class="pt">Categorias</span>, <span class="pt">Tradução</span> или обратно в основное <span class="pt">Menu</span> — чтобы переходить между этими разделами, не ища их по приложению.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-23.jpg" alt="Открытое нижнее меню в игре с ярлыками Perfil, Categorias, Tradução и Menu"></div><figcaption>Стрелка вверх открывает это меню из любой активности или игры.</figcaption></figure>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-12.jpg" alt="Панель Vocabulário со списком семейной лексики, открытая кнопкой плюса"></div>
            <figcaption>Открываемый кнопкой <span class="pt">+</span> список <span class="pt">Vocabulário</span></figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-13.jpg" alt="Панель текстовых инструкций, открытая кнопкой уха, с заголовком Portador de Deficiência Auditiva"></div>
            <figcaption>Текстовые инструкции, открытые кнопкой с ухом.</figcaption>
          </figure>
        </div>
        <div class="call note">
          <span class="tag">Прослушайте ещё раз — на своём языке или на португальском</span>
          Каждая игра двуязычна. В <strong>правом верхнем углу</strong> находятся два маленьких значка планшета. Нажмите <strong>планшет с глобусом</strong> (<span class="pt">Menu Escolher Outras Línguas</span>), чтобы снова услышать или прочитать текущий элемент на своём языке, либо <strong>планшет с флагом Португалии</strong> (<span class="pt">Menu em Português Europeu</span>), чтобы вернуться к европейскому португальскому. Переключайтесь сколько угодно — приложение никогда не закрепляет только один язык.
        </div>
        <h3>4 · Graph, Lex &amp; Fonê</h3>
        <p>После вводной игры переходите к трём упражнениям темы — <span class="pt">Graph</span> (письмо), <span class="pt">Lex</span> (чтение) и <span class="pt">Fonê</span> (понимание устной речи).</p>

        <p><span class="pt">Graph</span> развивает навыки <strong>письма</strong>. Вот как это работает в теме <span class="pt">A minha gente</span>:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-17.jpg" alt="Письменное задание Graph с полем A tua resposta и красной кнопкой с лампочкой"></div><figcaption><span class="pt">Graph</span> — нажмите <span class="pt">A tua resposta...</span>, чтобы начать писать.</figcaption></figure>
        <p>Снова два значка планшета в правом верхнем углу позволяют услышать инструкции: кнопка с <strong>картой мира</strong> воспроизводит их на вашем языке, а кнопка с <strong>флагом Португалии</strong> — на португальском.</p>
        <p>После инструкций нажмите на персиковую область с текстом <span class="pt">A tua resposta...</span> («Ваш ответ...») и начните писать. Рекомендуется добавить португальскую клавиатуру на устройство — на iPhone, например, можно включить португальскую раскладку, чтобы правильно ставить акценты и следить за грамматикой и орфографией.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-18.jpg" alt="Поле ответа Graph с открытой португальской клавиатурой"></div>
            <figcaption>Клавиатура для ввода</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-19.jpg" alt="Graph с набранным ответом на португальском и синей галочкой для отправки"></div>
            <figcaption>Ответ готов — нажмите синюю галочку.</figcaption>
          </figure>
        </div>
        <p>Когда закончите писать, нажмите <strong>синюю галочку</strong>. Затем сравните ответ с решением: в правом нижнем углу нажмите <strong>красную лампочку</strong>. Откроется панель <span class="pt">Solução</span> с образцовым ответом.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-20.jpg" alt="Панель Solução в Graph с образцовым ответом и кнопкой Obrigado"></div><figcaption>Красная лампочка открывает <span class="pt">Solução</span> — сравните и нажмите <span class="pt">Obrigado</span>.</figcaption></figure>
        <div class="call tip">
          <span class="tag">Важно совпадение смысла, а не каждого слова</span>
          Не переживайте, если ваш ответ и решение отличаются. Главное — тот же смысл, уверенная грамматика и синтаксис и то же сообщение.
        </div>
        <p><span class="pt">Lex</span> — это практика чтения на европейском португальском со встроенной поддержкой. Как и раньше, два значка планшета справа вверху позволяют услышать инструкции на родном языке (карта мира) или на португальском (флаг Португалии).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-21.jpg" alt="Чтение Lex с португальским текстом и свёрнутой вкладкой Dicionário"></div>
            <figcaption>Текст для чтения</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-22.jpg" alt="Lex с открытым Dicionário и объяснением ключевого слова на португальском"></div>
            <figcaption>Открыт <span class="pt">Dicionário</span> с объяснением слова.</figcaption>
          </figure>
        </div>
        <p>Вам дают короткий текст прочитать и понять. Читайте его <strong>вслух</strong> — так развиваются разговор, произношение и звучание европейского португальского.</p>
        <p>Под текстом — оранжевая вкладка <span class="pt">Dicionário</span> (Словарь). Нажмите её, чтобы раскрыть ключевые слова и выражения из текста с объяснениями на португальском — полезно, когда термин новый.</p>
        <p><strong>Красная лампочка</strong> в правом нижнем углу сразу воспроизводит текст вслух на португальском. Используйте её как образец звучания и читайте вместе с записью.</p>
        <div class="call tip">
          <span class="tag">Читать, слышать, произносить — и повторять</span>
          Цель <span class="pt">Lex</span> — чтение, слушание и произношение в европейском португальском (PT). Практикуйтесь часто и всегда читайте текст вслух.
        </div>
        <p><span class="pt">Fonê</span> развивает <strong>понимание устной речи</strong> — <span class="pt">Exercícios de Compreensão Oral</span>: аудирование и фонетика.</p>
        <p>Снова два значка планшета справа вверху позволяют услышать инструкции на родном языке (карта мира) или на европейском португальском (флаг Португалии).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-24.jpg" alt="Экран вопросов Fonê с белой кнопкой-диском и неотмеченными вариантами"></div>
            <figcaption>Готовы слушать</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-25.jpg" alt="Экран вопросов Fonê во время воспроизведения разговора"></div>
            <figcaption>Нажмите белый диск, чтобы начать разговор.</figcaption>
          </figure>
        </div>
        <p>Нажмите <strong>белый диск</strong> рядом с <span class="pt">Questões</span>, чтобы воспроизвести разговор — он понадобится для ответов. После нажатия диск становится чуть серым, и разговор начинается.</p>
        <p>После прослушивания повторите ещё <strong>два-три раза</strong>, пока не поймёте, затем отметьте правильные ответы (<span class="pt">Assinale a resposta correta</span>).</p>
        <div class="call tip">
          <span class="tag">Вопросы остаются на европейском португальском</span>
          Эти вопросы всегда на европейском португальском. Держите Google Переводчик или любимое приложение под рукой — этот первый модуль мы переводим ниже, дальше вы будете делать это сами. Хорошая привычка. Также можно открыть <span class="pt">Tradução</span> из меню со стрелкой внизу.
        </div>
        <p>Вот вопросы и варианты с переводом на русский:</p>
        <table class="tbl">
          <thead><tr><th>Португальский</th><th>Русский</th></tr></thead>
          <tbody>

            <tr>
              <td>
                <span class="btn-name">1. O Filipe perguntou ao João se:</span><br>
                · Não ia haver aula de Português.<br>
                · Não ia haver aula de História.<br>
                · Não ia ter teste de História.
              </td>
              <td>
                1. Филипе спросил Жуана, будет ли:<br>· Не будет урока португальского.<br>· Не будет урока истории.<br>· Не будет теста по истории.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">2. O João vai faltar à aula porque:</span><br>
                · Não lhe apetece ir.<br>
                · Tem de ir à praia.<br>
                · Tem de ir ao dentista.
              </td>
              <td>
                2. Жуан пропустит урок, потому что:<br>· Ему не хочется идти.<br>· Ему нужно на пляж.<br>· Ему нужно к стоматологу.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">3. A aula de História:</span><br>
                · Não ia haver no dia seguinte.<br>
                · Foi adiada para a tarde.<br>
                · Foi adiada para a noite.
              </td>
              <td>
                3. Урок истории:<br>· Не состоится на следующий день.<br>· Перенесён на день.<br>· Перенесён на вечер.
              </td>
            </tr>
          </tbody>
        </table>
        <p>Для этого первого модуля мы уже отметили ответы, чтобы помочь вам:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-26.jpg" alt="Fonê answers selected"></div><figcaption>Отмеченные ответы — нажмите <span class="pt">continuar</span>, когда будете готовы.</figcaption></figure>
        <ol>
          <li><span class="pt">Não ia haver aula de História.</span> — Не будет урока истории.</li>
          <li><span class="pt">Tem de ir ao dentista.</span> — Ему нужно к стоматологу.</li>
          <li><span class="pt">Foi adiada para a noite.</span> — Перенесён на вечер.</li>
        </ol>
        <p>Как в <span class="pt">Lex</span>, оранжевая вкладка <span class="pt">Dicionário</span> показывает ключевую лексику. Нажмите, чтобы раскрыть определения на португальском.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-27.jpg" alt="Fonê с открытым Dicionário и определением apontamentos"></div>
            <figcaption>Открыт <span class="pt">Dicionário</span> с объяснением ключевого слова.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-29.jpg" alt="Fonê с отмеченными ответами и открытым Dicionário"></div>
            <figcaption>Отмеченные ответы с открытым <span class="pt">Dicionário</span>.</figcaption>
          </figure>
        </div>
        <p><strong>Красная кнопка с ухом</strong> справа внизу — доступность: показывает разговор текстом (заголовок <span class="pt">Portador de Deficiência Auditiva</span>). Если слово или фраза непонятны, используйте переводчик или заметки.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-28.jpg" alt="Оверлей доступности Fonê с письменной транскрипцией"></div><figcaption>Кнопка с ухом открывает письменный разговор — нажмите <span class="pt">Obrigado</span>, чтобы закрыть.</figcaption></figure>
        <p>Когда закончите вопросы, нажмите <span class="pt">continuar</span> (продолжить) внизу, чтобы перейти к следующей части <span class="pt">Fonê</span>.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-32.jpg" alt="Экран Fonê с отмеченными ответами, открытым Dicionário и ссылкой continuar"></div><figcaption>Нажмите <span class="pt">continuar</span>, чтобы перейти к фонетической практике.</figcaption></figure>
        <p>В <span class="pt">Fonê</span> есть и фонетика: круги со словами, <strong>красная лампочка</strong> для решения и та же кнопка с ухом для текста — например, чтобы прописать слова семьи.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-30.jpg" alt="Фонетический экран Fonê с кругами Família, Pai, Mãe и Filho"></div>
            <figcaption>Фонетическая практика</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-31.jpg" alt="Панель доступности Fonê с просьбой прописать слова"></div>
            <figcaption>Текстовые инструкции кнопки с ухом.</figcaption>
          </figure>
        </div>
        <div class="call tip">
          <span class="tag">Слушайте больше одного раза</span>
          Понимание на слух улучшается с повторением. Включите диск снова, загляните в <span class="pt">Dicionário</span> и используйте транскрипцию, когда нужно ещё раз увидеть диалог.
        </div>
        <h3>5 · Дальше этого обзора</h3>
        <p>То, что вы прошли в теме <span class="pt">A minha gente</span>, применимо к любой теме или активности в GoGenius — с небольшими отличиями. Задания в целом понятны сами по себе, а нужные инструменты у вас уже есть: двуязычные инструкции, меню со стрелкой внизу, <span class="pt">Dicionário</span>, решения, текст доступности и <span class="pt">Tradução</span> при необходимости.</p>
        <p>Если что-то в приложении непонятно, вернитесь к этому руководству — или напишите нам в разделе <a href="#support">Support &amp; contact</a>. Мы рядом, чтобы помочь вам в изучении европейского португальского.</p>
        <div class="call tip">
          <span class="tag"><span class="pt">Boa sorte!</span> · Удачи</span>
          Наслаждайтесь играми — и продолжайте практиковаться.
        </div>
      </section>

<!-- 7 CLASSIFICACOES -->
      <section id="scores">
        <h2><span class="sec-num">09</span>Classificações — баллы &amp; рейтинги</h2>
        <p>Таблица результатов открывается через <span class="pt">Perfil ▸ Classificações</span>. В ней перечислены все темы приложения; нажмите тему, чтобы развернуть её и увидеть свои результаты.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-14.jpg" alt="Список тем Classificações со значками"></div>
            <figcaption>Список тем в <span class="pt">Classificações</span>.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-15.png" alt="Развёрнутая карточка темы со звёздным рейтингом и значками выполнения Graph, Lex, Fonê"></div>
            <figcaption>Развёрнутая тема со звёздами и значками навыков.</figcaption>
          </figure>
        </div>
        <p>Для каждой развёрнутой темы отображается <strong>звёздный рейтинг</strong> (из пяти), а также значок выполнения для каждого из трёх навыков — <span class="pt">Graph</span>, <span class="pt">Lex</span> и <span class="pt">Fonê</span>. Зелёная галочка означает, что вы выполнили упражнения по этому навыку в данной теме.</p>
        <div class="call tip">
          <span class="tag">Как начисляются баллы</span>
          Звёзды и баллы начисляются только после <strong>выполнения всех заданий</strong> в игре — частичное прохождение не учитывается, поскольку завершённая игра считается подтверждением того, что материал действительно усвоен. Если не удаётся закончить за один раз, просто выйдите и продолжите позже — ничего не потеряется.
        </div>
      </section>

      <!-- 8 SOBRE -->
      <section id="sobre">
        <h2><span class="sec-num">10</span>Sobre a APP &amp; конфиденциальность</h2>
        <p>В разделе <span class="pt">Perfil</span> также доступен экран <span class="pt">Sobre a APP / Políticas de Privacidade</span> со сведениями о приложении и полной политикой конфиденциальности. Нажмите флаг <strong>Португалии</strong> или <strong>Великобритании</strong> вверху, чтобы переключить язык.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-16.jpg" alt="Экран «О приложении» с переключателем флагов португальского и английского языков"></div><figcaption>Сведения о приложении с переключателем флагов PT / EN.</figcaption></figure>
        <p class="intro-note">
          
          Вкратце: GoGenius поддерживает изучение европейского португальского с помощью упражнений на чтение, письмо и фонетику, дополненных инструкциями на нескольких языках. По мере прохождения формируется таблица результатов, позволяющая оценивать уровень владения языком. Приложение доступно на Android (и на ПК через эмулятор), а исследовательская группа рекомендует для лучшего результата заниматься ежедневно по 15–20 минут.
        </p>
  
        <p>Политика также доступна по адресу <a href="https://privacidade.grupoautonoma.pt/index.php/politica-de-privacidade-go-genius-en/" target="_blank" rel="noopener">privacidade.grupoautonoma.pt</a>.</p>
      </section>

      <!-- 9 SUPPORT -->
      <section id="support">
        <h2><span class="sec-num">11</span>Поддержка &amp; контакты</h2>
        <div class="cards">
          <div class="card"><h4>Поддержка приложения</h4><p><a href="mailto:gogenius@autonoma.pt">gogenius@autonoma.pt</a></p></div>
          <div class="card"><h4>Разработчик</h4><p>TOO WILD — SOFTWARE, LDA</p><p><a href="mailto:toowildsoftware@gmail.com">toowildsoftware@gmail.com</a></p><p>+351 923 544 221</p></div>
        </div>
      </section>

      <!-- GLOSSARY -->
      <section id="glossary">
        <h2><span class="sec-num">A</span>Краткий словарь португальского</h2>
        <table class="tbl">
          <thead><tr><th>Португальский</th><th>Русский</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Bem-Vindo!</span></td><td>Добро пожаловать!</td></tr>
            <tr><td><span class="btn-name">Entrar</span></td><td>Войти</td></tr>
            <tr><td><span class="btn-name">Registar</span></td><td>Зарегистрироваться</td></tr>
            <tr><td><span class="btn-name">Recuperar Password</span></td><td>Восстановить пароль</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Населённый пункт / город
                <br>
                <span style="color:#666;font-size:0.96em;">
                  Откуда вы заходите в приложение?
                </span>
              </td>
            </tr>
 
            <tr><td><span class="btn-name">Menu</span></td><td>Главное меню</td></tr>
            <tr><td><span class="btn-name">Perfil</span></td><td>Профиль</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Категории (игры)</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Переводчик</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Баллы / рейтинги</td></tr>
            <tr><td><span class="btn-name">Editar Perfil</span></td><td>Редактировать профиль</td></tr>
            <tr><td><span class="btn-name">Sobre a APP</span></td><td>О приложении</td></tr>
            <tr><td><span class="btn-name">Políticas de Privacidade</span></td><td>Политика конфиденциальности</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Пол</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Возраст</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Гражданство</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Адрес / местоположение</td></tr>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Обновить</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Выйти</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Удалить профиль</td></tr>
            <tr><td><span class="btn-name">Sim / Não</span></td><td>Да / Нет</td></tr>
          </tbody>
        </table>
        <footer class="doc-foot"><p>GoGenius поддерживается FCT — Fundação para a Ciência e a Tecnologia за счёт национальных фондов, а также Centro de Investigação em Psicologia (CIP-UAL).</p></footer>
      </section>
`,Eh=`<header class="hero" id="welcome">
        <div class="eyebrow">Ual: Universidade Autónoma de Lisboa Luís de Camões </div>
        <h1>Посібник GoGenius</h1>
        <p class="lede">GoGenius — перший застосунок, створений для вивчення <strong>європейської португальської мови</strong>, насамперед носіями дев’яти основних мов, однак ним може користуватися кожен охочий. Цей посібник ознайомить вас із кожним екраном і кожною кнопкою за допомогою <strong>тематичних ігор</strong>, що розвивають навички аудіювання, читання та письма.</p>

        <div class="call tip">
          <span class="tag">Перед початком</span>
          Для найкращого результату під’єднайте дротові або <strong>Bluetooth-навушники</strong> до телефона чи планшета до запуску GoGenius. Переконайтеся, що звук відтворюється через навушники: багато ігор ґрунтуються на аудіюванні, а чистий звук допомагає без перешкод розуміти підказки та виконувати завдання на вимову.
        </div>
  
        <div class="langstrip" aria-label="Підтримувані вихідні мови">
          <span class="lang">Арабська</span><span class="lang">Російська</span><span class="lang">Українська</span>
          <span class="lang">Румунська</span><span class="lang">Англійська</span><span class="lang">Французька</span>
          <span class="lang">Іспанська</span><span class="lang">Китайська (мандарин)</span><span class="lang">Німецька</span>
        </div>
        <div class="factbar">
          <div class="fact"><div class="n">14</div><div class="l">тематичних ігор</div></div>
          <div class="fact"><div class="n">A1&rarr;B2</div><div class="l">рівні учнів</div></div>
          <div class="fact"><div class="n">7+</div><div class="l">рекомендований вік</div></div>
        </div>
        <p class="intro-note" style="margin-top:1.6rem;">GoGenius призначено для іммігрантів і біженців, які живуть у Португалії, для тих, хто вивчає португальську мову в будь-якій країні, а також для шкіл, що використовують застосунок на заняттях. Він працює на телефонах і планшетах Android, а також на комп’ютерах (через емулятор Android на ПК). Одне завантаження відкриває доступ до всіх модулів — <strong>передплата не потрібна</strong>.</p>
        <p class="intro-note">GoGenius також створено з урахуванням інклюзивності: у кожній грі є письмова версія мети та інструкцій для глухих і слабочуючих учнів, а будь-який елемент можна повторно відтворити вашою мовою або європейською португальською, коли це потрібно.</p>
        <p class="intro-note">Освітню модель розробила <strong>PhD Sandra Figueiredo</strong></p>
      </header>

      <!-- QUICK START -->
      <section id="quickstart">
        <div class="quickstart">
          <div class="qs-eyebrow">Початок роботи · 60 секунд</div>
          <div class="qs-title">Знайомство за хвилину</div>
          <ul>
            <li><strong>Достатньо п’яти хвилин на день.</strong> Виконуйте щоденні завдання приблизно за п’ять хвилин — і за такого темпу орієнтовно за два місяці ви зможете просунутися від A2 до B1.</li>
            <li><strong>Навчайтеся разом.</strong> Вправи однаково добре підходять як для групової, так і для самостійної роботи.</li>
            <li><strong>Створено для занять.</strong> Учителі можуть проводити ігри на уроці та перетворювати їх на вікторину для всієї групи.</li>
          </ul>
        </div>
      </section>

      <!-- 1 LAUNCH -->
      <section id="launch">
        <h2><span class="sec-num">01</span>Екран запуску</h2>
        <p>Коли ви відкриваєте GoGenius, вас зустрічає екран привітання — логотип над яскравою стрічкою зі словом &ldquo;привіт&rdquo; різними мовами. За мить відкриється вибір мови.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-01.jpg" alt="Екран привітання GoGenius із логотипом над кольоровими смугами з назвами мов"></div><figcaption>Екран привітання GoGenius.</figcaption></figure>
      </section>

      <!-- 2 SIGN IN -->
      <section id="signin">
        <h2><span class="sec-num">02</span>Вхід &amp; реєстрація</h2>
        <p>Далі з’являється екран <span class="pt">Bem-Vindo!</span> (<em>Ласкаво просимо!</em>). Якщо у вас уже є обліковий запис, увійдіть тут; якщо ви користуєтеся застосунком уперше, створіть його.</p>
        <h3>Якщо у вас уже є обліковий запис</h3>
        <p>Введіть <span class="pt">E-mail</span> і <span class="pt">Password</span>, потім натисніть <span class="btn-name">Entrar</span> (Увійти). Натисніть <strong>значок ока</strong>, щоб перевірити введений текст. Забули пароль? Натисніть <span class="btn-name">Recuperar Password</span> (Відновити пароль), щоб скинути його електронною поштою.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-02.jpg" alt="Екран входу з полями E-mail і Password, кнопками Entrar і Registar"></div><figcaption>Екран входу — увійдіть або натисніть Registar, щоб створити обліковий запис.</figcaption></figure>
        <h3>Якщо ви новий користувач — зареєструйтеся</h3>
        <p>Натисніть <span class="btn-name">Registar</span> (Зареєструватися), щоб відкрити форму реєстрації (<span class="pt">Entrar com o E-mail</span>). Заповніть дані й натисніть <span class="btn-name">Registar</span> для завершення.</p>
        <table class="tbl">
          <thead><tr><th>Поле</th><th>Значення</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Idade</span></td><td>Вік</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Стать (розкривний список)</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Громадянство</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Населений пункт / місто
                <br>
                <span style="color:#666;font-size:0.96em;">
                  Звідки ви заходите в застосунок?
                </span>
              </td>
            </tr>

            <tr><td><span class="btn-name">E-mail</span></td><td>Адреса електронної пошти</td></tr>
            <tr><td><span class="btn-name">Password</span></td><td>Пароль</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Підтвердьте пароль</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-03.jpg" alt="Форма реєстрації з полями Idade, Sexo, Nacionalidade, Localidade, E-mail і пароля"></div><figcaption>Форма реєстрації.</figcaption></figure>
        <div class="call note">
          <span class="tag">Підтвердьте електронну пошту</span>
          Після реєстрації GoGenius надішле <strong>лист для підтвердження</strong> на вказану адресу. Відкрийте його та перейдіть за посиланням, щоб активувати обліковий запис до входу. Якщо лист не з’явився у вхідних протягом кількох хвилин, перевірте папку зі спамом або небажаною поштою.
        </div>
      </section>

      <!-- 3 LANGUAGE -->
      <section id="language">
        <h2><span class="sec-num">03</span>Вибір мови</h2>
        <p>Виберіть мову, якою ви вже володієте. Підказка відображається португальською та англійською — <span class="pt">Escolhe a tua língua</span> / <em>Виберіть свою мову</em>.</p>
        <p>Натискайте стрілки <strong>&lsaquo;</strong> і <strong>&rsaquo;</strong>, щоб гортати прапори, доки не знайдете потрібний, а потім натисніть <span class="btn-name">Ok</span>. GoGenius підтримує дев’ять вихідних мов: англійську, іспанську, арабську, китайську (мандарин), російську, румунську, українську, німецьку та французьку.</p>
        
        <figure class="shot"><div class="phone"><img src="/ukranian.png" alt="Екран вибору мови з каруселлю прапорів і кнопкою Ok"></div><figcaption>За допомогою стрілок знайдіть свій прапор, потім натисніть Ok.</figcaption></figure>
        <p>Кожна з цих дев’яти мов є <strong>мовою підтримки</strong>: вона допомагає розуміти інструкції, а весь навчальний матеріал залишається європейською португальською. Саме це вирізняє GoGenius: більшість застосунків для вивчення португальської викладають <strong>бразильський</strong> варіант, який помітно відрізняється вимовою, лексикою та граматикою, а багато мовних ігор узагалі не призначені для справжнього навчання. GoGenius розроблено саме як освітній інструмент для вивчення європейської португальської.</p>
        <div class="call note">
          <span class="tag">Чому інтерфейс залишається португальською</span>
          Ваш вибір визначає мову інструкцій і перекладів, але назви кнопок і меню навмисно залишаються португальською. Орієнтування в португаломовному інтерфейсі — частина занурення, а слова, які ви дізнаєтеся з меню (<span class="pt">perfil</span>, <span class="pt">categorias</span>, <span class="pt">atualizar</span>), знадобляться вам у реальному житті. У процесі читання цей посібник пояснить українське значення кожної кнопки.
        </div>
      </section>

      <!-- 4 MENU -->
      <section id="menu">
        <h2><span class="sec-num">04</span>Головне меню &amp; вихід</h2>
        <p>Головне меню — ваш центр керування. Три кольорові смуги відкривають три розділи:</p>
        <table class="tbl">
          <thead><tr><th>Кнопка</th><th>Значення</th><th>Призначення</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Профіль</td><td>Ваш обліковий запис, результати та відомості про застосунок</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Категорії</td><td>Тематичні ігри — тут ви навчаєтеся та граєте</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Перекладач</td><td>Відкриває Google Translate</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-04.jpg" alt="Головне меню зі смугами Perfil, Categorias і Tradutor"></div><figcaption>Головне меню: Perfil, Categorias, Tradutor.</figcaption></figure>
        <div class="call note">
          <span class="tag">Примітка щодо Tradutor</span>
          Ця кнопка відкриває <strong>Google Translate</strong>, виводячи вас із GoGenius. Щоб повернутися, скористайтеся жестом повернення на пристрої.
        </div>
        <h3>Вихід із застосунку</h3>
        <p>Натисніть <strong>червоний хрестик</strong> у правому нижньому куті. GoGenius запитає: <span class="pt">Deseja sair da GoGenius?</span> (<em>Бажаєте вийти з GoGenius?</em>). Натисніть <span class="btn-name">Sim</span> (Так), щоб закрити застосунок, або <span class="btn-name">Não</span> (Ні), щоб залишитися.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-05.jpg" alt="Діалог підтвердження виходу з GoGenius із кнопками Sim і Não"></div><figcaption>Підтвердження виходу: Sim (Так) або Não (Ні).</figcaption></figure>
      </section>

      <!-- 5 PERFIL -->
      <section id="perfil">
        <h2><span class="sec-num">05</span>Perfil — ваш профіль</h2>
        <p>Після натискання <span class="pt">Perfil</span> у головному меню відкриється невелике меню з трьома варіантами:</p>
        <table class="tbl">
          <thead><tr><th>Пункт</th><th>Що відкриває</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>Редагування даних облікового запису (див. наступний розділ)</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Ваші бали та рейтинги</td></tr>
            <tr><td><span class="btn-name">Sobre a APP / Políticas de Privacidade</span></td><td>Про застосунок &amp; політика конфіденційності</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-06.jpg" alt="Меню Perfil із пунктами Perfil, Classificações і Sobre a APP"></div><figcaption>Меню Perfil і три його пункти.</figcaption></figure>
      </section>

      <!-- 6 EDITAR PERFIL -->
      <section id="editar">
        <h2><span class="sec-num">06</span>Editar Perfil — редагування даних</h2>
        <p>На екрані <span class="pt">Editar Perfil</span> можна переглядати та змінювати відомості свого облікового запису.</p>
        <table class="tbl">
          <thead><tr><th>Поле</th><th>Значення</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Sexo</span></td><td>Стать (розкривний список)</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Вік</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Громадянство</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Адреса / місцезнаходження</td></tr>
            <tr><td><span class="btn-name">Password Atual</span></td><td>Поточний пароль</td></tr>
            <tr><td><span class="btn-name">Password Nova</span></td><td>Новий пароль</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>Підтвердьте новий пароль</td></tr>
          </tbody>
        </table>
        <p>Три поля пароля потрібні лише для його зміни — в інших випадках залиште їх порожніми. Натисніть <strong>значок ока</strong> поруч із полем пароля, щоб показати або приховати введений текст.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-07.jpg" alt="Форма Editar Perfil з полями та кнопками Atualizar, Terminar Sessão, Eliminar Perfil"></div><figcaption>Форма Editar Perfil і три кнопки дій.</figcaption></figure>
        <h3>Кнопки дій</h3>
        <table class="tbl">
          <thead><tr><th>Кнопка</th><th>Значення</th><th>Призначення</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Оновити</td><td>Зберігає внесені вище зміни</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Вийти</td><td>Виконує вихід із вашого облікового запису</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Видалити профіль</td><td>Назавжди видаляє ваш обліковий запис</td></tr>
          </tbody>
        </table>
        <div class="call warn">
          <span class="tag">Eliminar Perfil видаляє дані назавжди</span>
          Після видалення профілю зникнуть ваш обліковий запис, увесь накопичений прогрес і бали. Скасувати цю дію неможливо.
        </div>
      </section>

            <!-- 7 CATEGORIAS (THEMES) -->
      <section id="categorias">
        <h2><span class="sec-num">07</span>Categorias — теми</h2>
        <p><span class="pt">Categorias</span> — серце GoGenius: 14 тематичних ігор, що складають навчальну програму. Кожна тема присвячена повсякденній ситуації та містить набір пов’язаних із нею вправ. Серед доступних тем, окрім інших:</p>
        <div class="themes">
          <span class="theme">A minha gente <span class="en">· Моя сім’я</span></span>
          <span class="theme">Onde moro <span class="en">· Де я живу</span></span>
          <span class="theme">O que visto <span class="en">· Що я ношу</span></span>
          <span class="theme">Movendo-me <span class="en">· Пересування</span></span>
          <span class="theme">Natura <span class="en">· Природа</span></span>
          <span class="theme">Eu, Hoje e no Futuro <span class="en">· Я сьогодні &amp; у майбутньому</span></span>
        </div>
        <p>Незалежно від обраної теми навчання організовано навколо тих самих трьох напрямів навичок — це основа структури застосунку. Кожен розвиває окрему компетенцію та в процесі роботи пропонує розв’язання:</p>
        <div class="skills">
          <div class="skill fone"><div class="name">Fonê</div><div class="role">Розуміння усного мовлення</div><p><span class="pt">Exercícios de Compreensão Oral</span> — завдання на аудіювання та фонологію.</p></div>
          <div class="skill lex"><div class="name">Lex</div><div class="role">Читання</div><p><span class="pt">Exercícios de Leitura</span> — практика читання європейською португальською з відповідями.</p></div>
          <div class="skill graph"><div class="name">Graph</div><div class="role">Письмо</div><p><span class="pt">Exercícios de Escrita</span> — письмові завдання з готовими розв’язаннями.</p></div>
        </div>
        <p>Ці три назви траплятимуться в кожній грі та в таблиці результатів, де відстежується прогрес за кожною навичкою (див. <span class="pt">Classificações</span>). У наступному розділі докладно розглянуто цілу тему, щоб показати їх у дії.</p>
      </section>

      <!-- 8 THEMED GAMES -->
      <section id="themed-games">
        <h2><span class="sec-num">08</span>Тематичні ігри — покроковий огляд</h2>
        <p>У цьому розділі на прикладі вибраної тематичної гри <span class="pt">A minha gente</span> показано весь шлях від каруселі до вправ, щоб ви побачили, як улаштована гра.</p>
        <h3>1 · Знайдіть і відкрийте тему</h3>
        <p>Розділ Categorias відкривається у вигляді звивистої каруселі з кіл категорій. Проведіть пальцем уздовж шляху, щоб переходити між темами, і натисніть коло, щоб відкрити тему; вкладка, що висувається праворуч (тут <span class="pt">A minha gente</span>), показує, яку тему ви збираєтеся вибрати. Два маленькі значки планшета у правому верхньому куті перемикають мову (докладніше нижче), а червона кнопка зі <strong>знаком питання</strong> відкриває довідник щодо всіх кнопок застосунку — тримайте його напохваті.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-08.jpg" alt="Карусель Categorias із круглими кнопками категорій уздовж вигнутого шляху"></div>
            <figcaption>Карусель Categorias — натисніть коло, щоб відкрити тему.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-09.jpg" alt="Довідник кнопок, відкритий червоним знаком питання, з поясненнями Graph, Lex, Fonê та інших кнопок"></div>
            <figcaption>Червоний знак ? відкриває довідник щодо всіх кнопок.</figcaption>
          </figure>
        </div>
        <p>Довідник слугує зручною легендою: у ньому вказано три типи вправ — <span class="pt">Graph</span> (письмо), <span class="pt">Lex</span> (читання) і <span class="pt">Fonê</span> (розуміння усного мовлення), а також <span class="pt">Sair</span> (вихід), <span class="pt">Solução</span> (розв’язання), <span class="pt">Saber mais</span> (докладніше), <span class="pt">Info</span>, значок спеціальних можливостей для слабочуючих і два мовні меню (<span class="pt">Menu em Português Europeu</span> і <span class="pt">Menu Escolher Outras Línguas</span>).</p>
        <h3>2 · Виберіть гру</h3>
        <p>Закрийте довідник і натисніть тему <span class="pt">A minha gente</span>. З’явиться невелике меню ігор цієї теми: вступна гра, а також <span class="pt">Graph</span>, <span class="pt">Lex</span> і <span class="pt">Fonê</span>, кожна зі своєю кнопкою <span class="pt">Jogar</span> (Грати). Їх можна проходити в будь-якому порядку, але краще почати з кнопки <strong>серця</strong> — вступної гри.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-10.jpg" alt="Меню тематичних ігор A minha gente з колами серця, Graph, Lex і Fonê, кожне з кнопкою Jogar"></div><figcaption>Ігри теми — почніть зі вступної гри із серцем.</figcaption></figure>
        <h3>3 · Усередині гри</h3>
        <p>Так виглядає вступна гра в процесі. Перетягуйте нижні ярлики на відповідну людину (<span class="pt">Pai</span>, <span class="pt">Avô</span>, <span class="pt">Filhos/Irmãos</span>, <span class="pt">Mãe</span>, <span class="pt">Avó</span>), вивчаючи лексику на тему сім’ї. У правому нижньому куті розташовано дві круглі кнопки, а два значки планшета у правому верхньому куті перемикають мову (див. примітку нижче).</p>
        <p><strong>Кнопка +</strong> відкриває панель <span class="pt">Vocabulário</span> зі списком усіх слів, що вивчаються в завданні, — це зручна довідка перед початком. <strong>Кнопка з вухом</strong> показує мету та інструкції до завдання у вигляді <strong>тексту</strong>: це функція спеціальних можливостей (під заголовком <span class="pt">Portador de Deficiência Auditiva</span>, &ldquo;людина з порушенням слуху&rdquo;), що дає змогу глухим і слабочуючим учням точно прочитати, що потрібно робити.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-11.jpg" alt="Екран гри A minha gente із сімейними портретами, ярликами членів сім’ї, кнопками плюса та вуха і двома значками мови у правому верхньому куті"></div><figcaption>Гра в процесі з двома значками мови у правому верхньому куті.</figcaption></figure>
        <p>У будь-який момент під час активності чи гри дивіться в нижній центр екрана: маленька <strong>стрілка вгору</strong> відкриває швидке меню до <span class="pt">Perfil</span>, <span class="pt">Categorias</span>, <span class="pt">Tradução</span> або назад до основного <span class="pt">Menu</span> — щоб переходити між цими розділами, не шукаючи їх у застосунку.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-23.jpg" alt="Відкрите нижнє меню в грі з ярликами Perfil, Categorias, Tradução і Menu"></div><figcaption>Стрілка вгору відкриває це меню з будь-якої активності чи гри.</figcaption></figure>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-12.jpg" alt="Панель Vocabulário зі списком сімейної лексики, відкрита кнопкою плюса"></div>
            <figcaption>Відкритий кнопкою <span class="pt">+</span> список <span class="pt">Vocabulário</span></figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-13.jpg" alt="Панель текстових інструкцій, відкрита кнопкою вуха, із заголовком Portador de Deficiência Auditiva"></div>
            <figcaption>Текстові інструкції, відкриті кнопкою з вухом.</figcaption>
          </figure>
        </div>
        <div class="call note">
          <span class="tag">Прослухайте ще раз — своєю мовою або португальською</span>
          Кожна гра двомовна. У <strong>правому верхньому куті</strong> розташовано два маленькі значки планшета. Натисніть <strong>планшет із глобусом</strong> (<span class="pt">Menu Escolher Outras Línguas</span>), щоб знову почути або прочитати поточний елемент своєю мовою, або <strong>планшет із прапором Португалії</strong> (<span class="pt">Menu em Português Europeu</span>), щоб повернутися до європейської португальської. Перемикайтеся скільки завгодно — застосунок ніколи не закріплює лише одну мову.
        </div>
        <h3>4 · Graph, Lex &amp; Fonê</h3>
        <p>Після вступної гри переходьте до трьох вправ теми — <span class="pt">Graph</span> (письмо), <span class="pt">Lex</span> (читання) і <span class="pt">Fonê</span> (розуміння усного мовлення).</p>

        <p><span class="pt">Graph</span> розвиває навички <strong>письма</strong>. Ось як це працює в темі <span class="pt">A minha gente</span>:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-17.jpg" alt="Письмова вправа Graph з полем A tua resposta і червоною кнопкою з лампочкою"></div><figcaption><span class="pt">Graph</span> — натисніть <span class="pt">A tua resposta...</span>, щоб почати писати.</figcaption></figure>
        <p>Знову два значки планшета у правому верхньому куті дають змогу почути інструкції: кнопка з <strong>картою світу</strong> відтворює їх вашою мовою, а кнопка з <strong>прапором Португалії</strong> — португальською.</p>
        <p>Після інструкцій натисніть на персикову ділянку з текстом <span class="pt">A tua resposta...</span> («Ваша відповідь...») і почніть писати. Рекомендується додати португальську клавіатуру на пристрій — на iPhone, наприклад, можна увімкнути португальську розкладку, щоб правильно ставити наголоси та стежити за граматикою й орфографією.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-18.jpg" alt="Поле відповіді Graph з відкритою португальською клавіатурою"></div>
            <figcaption>Клавіатура для введення</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-19.jpg" alt="Graph із набраною відповіддю португальською та синьою галочкою для надсилання"></div>
            <figcaption>Відповідь готова — натисніть синю галочку.</figcaption>
          </figure>
        </div>
        <p>Коли закінчите писати, натисніть <strong>синю галочку</strong>. Потім порівняйте відповідь із розв’язанням: у правому нижньому куті натисніть <strong>червону лампочку</strong>. Відкриється панель <span class="pt">Solução</span> зі зразковою відповіддю.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-20.jpg" alt="Панель Solução у Graph зі зразковою відповіддю та кнопкою Obrigado"></div><figcaption>Червона лампочка відкриває <span class="pt">Solução</span> — порівняйте й натисніть <span class="pt">Obrigado</span>.</figcaption></figure>
        <div class="call tip">
          <span class="tag">Важливий сенс, а не кожне слово</span>
          Не хвилюйтеся, якщо ваша відповідь і розв’язання відрізняються. Головне — той самий сенс, впевнена граматика й синтаксис і те саме повідомлення.
        </div>
        <p><span class="pt">Lex</span> — це практика читання європейською португальською з вбудованою підтримкою. Як і раніше, два значки планшета справа вгорі дають змогу почути інструкції рідною мовою (карта світу) або португальською (прапор Португалії).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-21.jpg" alt="Читання Lex з португальським текстом і згорнутою вкладкою Dicionário"></div>
            <figcaption>Текст для читання</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-22.jpg" alt="Lex з відкритим Dicionário та поясненням ключового слова португальською"></div>
            <figcaption>Відкрито <span class="pt">Dicionário</span> з поясненням слова.</figcaption>
          </figure>
        </div>
        <p>Вам дають короткий текст прочитати й зрозуміти. Читайте його <strong>вголос</strong> — так розвиваються розмова, вимова та звучання європейської португальської.</p>
        <p>Під текстом — помаранчева вкладка <span class="pt">Dicionário</span> (Словник). Натисніть її, щоб розгорнути ключові слова та вирази з тексту з поясненнями португальською — корисно, коли термін новий.</p>
        <p><strong>Червона лампочка</strong> в правому нижньому куті одразу відтворює текст уголос португальською. Використовуйте її як зразок звучання й читайте разом із записом.</p>
        <div class="call tip">
          <span class="tag">Читати, чути, вимовляти — і повторювати</span>
          Мета <span class="pt">Lex</span> — читання, слухання та вимова в європейській португальській (PT). Практикуйтеся часто й завжди читайте текст уголос.
        </div>
        <p><span class="pt">Fonê</span> розвиває <strong>розуміння усного мовлення</strong> — <span class="pt">Exercícios de Compreensão Oral</span>: аудіювання та фонетика.</p>
        <p>Знову два значки планшета справа вгорі дають змогу почути інструкції рідною мовою (карта світу) або європейською португальською (прапор Португалії).</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-24.jpg" alt="Екран запитань Fonê з білою кнопкою-диском і невідміченими варіантами"></div>
            <figcaption>Готові слухати</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-25.jpg" alt="Екран запитань Fonê під час відтворення розмови"></div>
            <figcaption>Натисніть білий диск, щоб почати розмову.</figcaption>
          </figure>
        </div>
        <p>Натисніть <strong>білий диск</strong> поруч із <span class="pt">Questões</span>, щоб відтворити розмову — вона потрібна для відповідей. Після натискання диск стає трохи сірим, і розмова починається.</p>
        <p>Після прослуховування повторіть ще <strong>два-три рази</strong>, доки не зрозумієте, потім позначте правильні відповіді (<span class="pt">Assinale a resposta correta</span>).</p>
        <div class="call tip">
          <span class="tag">Запитання залишаються європейською португальською</span>
          Ці запитання завжди європейською португальською. Тримайте Google Перекладач або улюблену програму під рукою — цей перший модуль ми перекладаємо нижче, далі ви робитимете це самі. Гарна звичка. Також можна відкрити <span class="pt">Tradução</span> з меню зі стрілкою внизу.
        </div>
        <p>Ось запитання й варіанти з перекладом українською:</p>
        <table class="tbl">
          <thead><tr><th>Португальська</th><th>Українська</th></tr></thead>
          <tbody>

            <tr>
              <td>
                <span class="btn-name">1. O Filipe perguntou ao João se:</span><br>
                · Não ia haver aula de Português.<br>
                · Não ia haver aula de História.<br>
                · Não ia ter teste de História.
              </td>
              <td>
                1. Філіпе запитав Жуана, чи:<br>· Не буде уроку португальської.<br>· Не буде уроку історії.<br>· Не буде тесту з історії.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">2. O João vai faltar à aula porque:</span><br>
                · Não lhe apetece ir.<br>
                · Tem de ir à praia.<br>
                · Tem de ir ao dentista.
              </td>
              <td>
                2. Жуан пропустить урок, бо:<br>· Йому не хочеться йти.<br>· Йому треба на пляж.<br>· Йому треба до стоматолога.
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">3. A aula de História:</span><br>
                · Não ia haver no dia seguinte.<br>
                · Foi adiada para a tarde.<br>
                · Foi adiada para a noite.
              </td>
              <td>
                3. Урок історії:<br>· Не відбудеться наступного дня.<br>· Перенесено на день.<br>· Перенесено на вечір.
              </td>
            </tr>
          </tbody>
        </table>
        <p>Для цього першого модуля ми вже позначили відповіді, щоб допомогти вам:</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-26.jpg" alt="Fonê answers selected"></div><figcaption>Позначені відповіді — натисніть <span class="pt">continuar</span>, коли будете готові.</figcaption></figure>
        <ol>
          <li><span class="pt">Não ia haver aula de História.</span> — Не буде уроку історії.</li>
          <li><span class="pt">Tem de ir ao dentista.</span> — Йому треба до стоматолога.</li>
          <li><span class="pt">Foi adiada para a noite.</span> — Перенесено на вечір.</li>
        </ol>
        <p>Як у <span class="pt">Lex</span>, помаранчева вкладка <span class="pt">Dicionário</span> показує ключову лексику. Натисніть, щоб розгорнути визначення португальською.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-27.jpg" alt="Fonê з відкритим Dicionário та визначенням apontamentos"></div>
            <figcaption>Відкрито <span class="pt">Dicionário</span> з поясненням ключового слова.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-29.jpg" alt="Fonê з позначеними відповідями та відкритим Dicionário"></div>
            <figcaption>Позначені відповіді з відкритим <span class="pt">Dicionário</span>.</figcaption>
          </figure>
        </div>
        <p><strong>Червона кнопка з вухом</strong> справа внизу — доступність: показує розмову текстом (заголовок <span class="pt">Portador de Deficiência Auditiva</span>). Якщо слово чи фраза незрозумілі, скористайтеся перекладачем або нотатками.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-28.jpg" alt="Оверлей доступності Fonê з письмовою транскрипцією"></div><figcaption>Кнопка з вухом відкриває письмову розмову — натисніть <span class="pt">Obrigado</span>, щоб закрити.</figcaption></figure>
        <p>Коли закінчите запитання, натисніть <span class="pt">continuar</span> (продовжити) внизу, щоб перейти до наступної частини <span class="pt">Fonê</span>.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-32.jpg" alt="Екран Fonê з позначеними відповідями, відкритим Dicionário і посиланням continuar"></div><figcaption>Натисніть <span class="pt">continuar</span>, щоб перейти до фонетичної практики.</figcaption></figure>
        <p>У <span class="pt">Fonê</span> є й фонетика: кола зі словами, <strong>червона лампочка</strong> для розв’язання та та сама кнопка з вухом для тексту — наприклад, щоб прописати слова родини.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-30.jpg" alt="Фонетичний екран Fonê з колами Família, Pai, Mãe і Filho"></div>
            <figcaption>Фонетична практика</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-31.jpg" alt="Панель доступності Fonê з проханням прописати слова"></div>
            <figcaption>Текстові інструкції кнопки з вухом.</figcaption>
          </figure>
        </div>
        <div class="call tip">
          <span class="tag">Слухайте більше одного разу</span>
          Розуміння на слух покращується з повторенням. Увімкніть диск знову, загляньте в <span class="pt">Dicionário</span> й скористайтеся транскрипцією, коли потрібно ще раз побачити діалог.
        </div>
        <h3>5 · Далі цього огляду</h3>
        <p>Те, що ви щойно пройшли в темі <span class="pt">A minha gente</span>, застосовне до будь-якої теми чи активності в GoGenius — з невеликими відмінностями. Завдання загалом зрозумілі самі по собі, а потрібні інструменти вже є: двомовні інструкції, меню зі стрілкою внизу, <span class="pt">Dicionário</span>, розв’язання, текст доступності та <span class="pt">Tradução</span> за потреби.</p>
        <p>Якщо щось у застосунку незрозуміло, поверніться до цього посібника — або напишіть нам у розділі <a href="#support">Support &amp; contact</a>. Ми поруч, щоб допомогти вам вивчати європейську португальську.</p>
        <div class="call tip">
          <span class="tag"><span class="pt">Boa sorte!</span> · Успіхів</span>
          Насолоджуйтеся іграми — і продовжуйте практикуватися.
        </div>
      </section>

<!-- 7 CLASSIFICACOES -->
      <section id="scores">
        <h2><span class="sec-num">09</span>Classificações — бали &amp; рейтинги</h2>
        <p>Таблиця результатів відкривається через <span class="pt">Perfil ▸ Classificações</span>. У ній перелічено всі теми застосунку; натисніть тему, щоб розгорнути її та переглянути свої результати.</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-14.jpg" alt="Список тем Classificações зі значками"></div>
            <figcaption>Список тем у <span class="pt">Classificações</span>.</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-15.png" alt="Розгорнута картка теми із зірковим рейтингом і значками виконання Graph, Lex, Fonê"></div>
            <figcaption>Розгорнута тема зі зірками та значками навичок.</figcaption>
          </figure>
        </div>
        <p>Для кожної розгорнутої теми відображається <strong>зірковий рейтинг</strong> (із п’яти), а також значок виконання для кожної з трьох навичок — <span class="pt">Graph</span>, <span class="pt">Lex</span> і <span class="pt">Fonê</span>. Зелена позначка означає, що ви виконали вправи з цієї навички в даній темі.</p>
        <div class="call tip">
          <span class="tag">Як нараховуються бали</span>
          Зірки та бали нараховуються лише після <strong>виконання всіх завдань</strong> у грі — часткове проходження не враховується, оскільки завершена гра вважається підтвердженням того, що матеріал справді засвоєно. Якщо не вдається завершити за один раз, просто вийдіть і продовжте пізніше — нічого не втратиться.
        </div>
      </section>

      <!-- 8 SOBRE -->
      <section id="sobre">
        <h2><span class="sec-num">10</span>Sobre a APP &amp; конфіденційність</h2>
        <p>У розділі <span class="pt">Perfil</span> також доступний екран <span class="pt">Sobre a APP / Políticas de Privacidade</span> із відомостями про застосунок і повною політикою конфіденційності. Натисніть прапор <strong>Португалії</strong> або <strong>Великої Британії</strong> вгорі, щоб перемкнути мову.</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-16.jpg" alt="Екран «Про застосунок» із перемикачем прапорів португальської та англійської мов"></div><figcaption>Відомості про застосунок із перемикачем прапорів PT / EN.</figcaption></figure>
        <p class="intro-note">
          
          Стисло: GoGenius підтримує вивчення європейської португальської за допомогою вправ на читання, письмо та фонетику, доповнених інструкціями кількома мовами. У процесі проходження формується таблиця результатів, що дає змогу оцінювати рівень володіння мовою. Застосунок доступний на Android (і на ПК через емулятор), а дослідницька група рекомендує для найкращого результату займатися щодня по 15–20 хвилин.
        </p>
  
        <p>Політика також доступна за адресою <a href="https://privacidade.grupoautonoma.pt/index.php/politica-de-privacidade-go-genius-en/" target="_blank" rel="noopener">privacidade.grupoautonoma.pt</a>.</p>
      </section>

      <!-- 9 SUPPORT -->
      <section id="support">
        <h2><span class="sec-num">11</span>Підтримка &amp; контакти</h2>
        <div class="cards">
          <div class="card"><h4>Підтримка застосунку</h4><p><a href="mailto:gogenius@autonoma.pt">gogenius@autonoma.pt</a></p></div>
          <div class="card"><h4>Розробник</h4><p>TOO WILD — SOFTWARE, LDA</p><p><a href="mailto:toowildsoftware@gmail.com">toowildsoftware@gmail.com</a></p><p>+351 923 544 221</p></div>
        </div>
      </section>

      <!-- GLOSSARY -->
      <section id="glossary">
        <h2><span class="sec-num">A</span>Короткий словник португальської</h2>
        <table class="tbl">
          <thead><tr><th>Португальська</th><th>Українська</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Bem-Vindo!</span></td><td>Ласкаво просимо!</td></tr>
            <tr><td><span class="btn-name">Entrar</span></td><td>Увійти</td></tr>
            <tr><td><span class="btn-name">Registar</span></td><td>Зареєструватися</td></tr>
            <tr><td><span class="btn-name">Recuperar Password</span></td><td>Відновити пароль</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                Населений пункт / місто
                <br>
                <span style="color:#666;font-size:0.96em;">
                  Звідки ви заходите в застосунок?
                </span>
              </td>
            </tr>
 
            <tr><td><span class="btn-name">Menu</span></td><td>Головне меню</td></tr>
            <tr><td><span class="btn-name">Perfil</span></td><td>Профіль</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>Категорії (ігри)</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>Перекладач</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>Бали / рейтинги</td></tr>
            <tr><td><span class="btn-name">Editar Perfil</span></td><td>Редагувати профіль</td></tr>
            <tr><td><span class="btn-name">Sobre a APP</span></td><td>Про застосунок</td></tr>
            <tr><td><span class="btn-name">Políticas de Privacidade</span></td><td>Політика конфіденційності</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>Стать</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>Вік</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>Громадянство</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>Адреса / місцезнаходження</td></tr>
            <tr><td><span class="btn-name">Atualizar</span></td><td>Оновити</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>Вийти</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>Видалити профіль</td></tr>
            <tr><td><span class="btn-name">Sim / Não</span></td><td>Так / Ні</td></tr>
          </tbody>
        </table>
        <footer class="doc-foot"><p>GoGenius підтримується FCT — Fundação para a Ciência e a Tecnologia коштом національних фондів, а також Centro de Investigação em Psicologia (CIP-UAL).</p></footer>
      </section>
`,Th=`<header class="hero" id="welcome">
        <div class="eyebrow">Ual: Universidade Autónoma de Lisboa Luís de Camões </div>
        <h1>GoGenius 手册</h1>
        <p class="lede">GoGenius 是第一款专为教授<strong>欧洲葡萄牙语</strong>而设计的应用，尤其面向九种主要语言的使用者，但任何有兴趣学习的人都可以使用。通过涵盖听力、阅读和写作的<strong>主题游戏</strong>，本指南将带您了解每一个界面和按钮。</p>

        <div class="call tip">
          <span class="tag">开始之前</span>
          为获得最佳体验，请在打开 GoGenius 之前插入耳机或连接<strong>蓝牙耳机</strong>。请确认声音从这些耳机播放——许多游戏依赖听力，清晰的声音能帮助您跟上提示和发音练习而不被打扰。
        </div>
  
        <div class="langstrip" aria-label="支持的源语言">
          <span class="lang">阿拉伯语</span><span class="lang">俄语</span><span class="lang">乌克兰语</span>
          <span class="lang">罗马尼亚语</span><span class="lang">英语</span><span class="lang">法语</span>
          <span class="lang">西班牙语</span><span class="lang">普通话</span><span class="lang">德语</span>
        </div>
        <div class="factbar">
          <div class="fact"><div class="n">14</div><div class="l">主题游戏</div></div>
          <div class="fact"><div class="n">A1&rarr;B2</div><div class="l">学习者水平</div></div>
          <div class="fact"><div class="n">7+</div><div class="l">推荐年龄</div></div>
        </div>
        <p class="intro-note" style="margin-top:1.6rem;">GoGenius 专为居住在葡萄牙的移民和难民、各地的葡萄牙语学习者，以及将其用作课堂工具的学校而设计。可在 Android 手机、平板电脑和电脑上运行（电脑需通过 Android 模拟器）。一次下载即可解锁全部模块——<strong>无需订阅</strong>。</p>
        <p class="intro-note">GoGenius 的设计也具有包容性：每个游戏都包含其目标的书面版本以及针对聋哑和听力障碍学习者的说明，并且任何项目都可以在您需要时以您自己的语言或欧洲葡萄牙语重播。</p>
        <p class="intro-note">该教育模式是由 <strong>PhD Sandra Figueiredo</strong></p>
      </header>

      <!-- QUICK START -->
      <section id="quickstart">
        <div class="quickstart">
          <div class="qs-eyebrow">开始使用 · 60 秒</div>
          <div class="qs-title">一分钟内即可入职</div>
          <ul>
            <li><strong>每天五分钟就足够了。</strong> 在大约五分钟内完成当天的任务 - 坚持下去，您可以在大约两个月内从 A2 升级到 B1。</li>
            <li><strong>一起学习。</strong> 这些练习在小组中完成和单独完成一样有效。</li>
            <li><strong>专为课堂设计。</strong> 教师可以在课堂上运行游戏，并将其转变为针对全组的测验。</li>
          </ul>
        </div>
      </section>

      <!-- 1 LAUNCH -->
      <section id="launch">
        <h2><span class="sec-num">01</span>启动屏幕</h2>
        <p>当您打开 GoGenius 时，您会看到欢迎屏幕 — 温暖的丝带上有多种语言的 &ldquo;hello&rdquo; 徽标。片刻之后，您将进入语言选择。</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-01.jpg" alt="GoGenius 欢迎屏幕，带有彩色语言条纹的徽标"></div><figcaption>GoGenius 欢迎屏幕。</figcaption></figure>
      </section>

      <!-- 2 SIGN IN -->
      <section id="signin">
        <h2><span class="sec-num">02</span>登录 &amp; 注册中</h2>
        <p>接下来是 <span class="pt">Bem-Vindo!</span> (<em>欢迎！</em>） 屏幕。如果您已有帐户，请在此登录；如果这是您第一次，请创建一个。</p>
        <h3>如果您已经有帐户</h3>
        <p>输入您的 <span class="pt">E-mail</span> 和 <span class="pt">Password</span>，然后点击 <span class="btn-name">Entrar</span> （登录）。点击 <strong>眼睛图标</strong>检查您输入的内容。忘记密码？点击 <span class="btn-name">Recuperar Password</span> （恢复密码），通过电子邮件重置密码。</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-02.jpg" alt="带有电子邮件和密码字段、Entrar 和 Registar 按钮的登录屏幕"></div><figcaption>登录屏幕 — 登录或点击注册创建帐户。</figcaption></figure>
        <h3>如果您是新人 – 注册</h3>
        <p>轻敲 <span class="btn-name">Registar</span> （注册）打开注册表单（<span class="pt">Entrar com o E-mail</span>）。填写您的详细信息并点击 <span class="btn-name">Registar</span> 完成。</p>
        <table class="tbl">
          <thead><tr><th>场地</th><th>意义</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Idade</span></td><td>年龄</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>性别（下拉菜单）</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>国籍</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                地区/城镇
                <br>
                <span style="color:#666;font-size:0.96em;">
                  您从哪里访问该应用程序？
                </span>
              </td>
            </tr>

            <tr><td><span class="btn-name">E-mail</span></td><td>电子邮件</td></tr>
            <tr><td><span class="btn-name">Password</span></td><td>密码</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>确认密码</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-03.jpg" alt="包含 Idade、Sexo、Nacionalidade、Localidade、电子邮件和密码字段的注册表"></div><figcaption>登记表。</figcaption></figure>
        <div class="call note">
          <span class="tag">确认您的电子邮件</span>
          注册后，GoGenius 发送一个 <strong>确认电子邮件</strong> 到你给的地址。打开它并按照链接激活您的帐户，然后登录。如果几分钟内它没有出现在您的收件箱中，请检查您的垃圾邮件或垃圾文件夹。
        </div>
      </section>

      <!-- 3 LANGUAGE -->
      <section id="language">
        <h2><span class="sec-num">03</span>选择您的语言</h2>
        <p>选择您已经使用的语言。提示以葡萄牙语和英语显示 — <span class="pt">Escolhe a tua língua</span> / <em>选择您的语言</em>.</p>
        <p>点击 <strong>&lsaquo;</strong> 和 <strong>&rsaquo;</strong> 箭头在标志之间循环，直到到达您的标志，然后点击 <span class="btn-name">Ok</span>。 GoGenius 支持九种源语言：英语、西班牙语、阿拉伯语、普通话、俄语、罗马尼亚语、乌克兰语、德语和法语。</p>
        
        <figure class="shot"><div class="phone"><img src="/chinese_logo.png" alt="带有标志轮播和“确定”按钮的语言选择屏幕"></div><figcaption>使用箭头循环到您的旗帜，然后点击“确定”。</figcaption></figure>
        <p>这九种语言中的每一种都是 <strong>支持语言</strong> — 它可以帮助您遵循说明，而您实际学习的所有内容都保留为欧洲葡萄牙语。这种专注正是 GoGenius 的与众不同之处：大多数葡萄牙语学习应用程序都教授 <strong>巴西人</strong> 变体，在发音、词汇和语法上有明显的不同，而且许多语言游戏根本不是为真正的教学而设计的。 GoGenius 专为欧洲葡萄牙语设计的教育工具。</p>
        <div class="call note">
          <span class="tag">为什么界面保持葡萄牙语</span>
          您的选择设置了说明和翻译所使用的语言 - 但按钮和菜单名称故意保留为葡萄牙语。在葡萄牙语界面中找到自己的方式是沉浸感的一部分，并且您从菜单中选择的单词（<span class="pt">perfil</span>, <span class="pt">categorias</span>, <span class="pt">atualizar</span>) 是您在现实生活中会使用的单词。本手册为您提供每个按钮的英文含义。
        </div>
      </section>

      <!-- 4 MENU -->
      <section id="menu">
        <h2><span class="sec-num">04</span>主菜单 &amp; 退出</h2>
        <p>主菜单是您的中心。三个色带各打开一个区域：</p>
        <table class="tbl">
          <thead><tr><th>按钮</th><th>意义</th><th>它的作用</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>轮廓</td><td>您的帐户、分数和应用信息</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>类别</td><td>主题游戏——您学习和玩耍的地方</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>翻译者</td><td>打开 Google Translate</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-04.jpg" alt="主菜单包含 Perfil、类别和 Tradutor 频段"></div><figcaption>主菜单：Perfil、类别、Tradutor。</figcaption></figure>
        <div class="call note">
          <span class="tag">关于翻译家的说明</span>
          这打开 <strong>Google Translate</strong>，带你走出GoGenius。使用设备的后退手势返回。
        </div>
        <h3>退出应用程序</h3>
        <p>点击 <strong>红X</strong> 在右下角。 GoGenius 询问 <span class="pt">Deseja sair da GoGenius?</span> (<em>您想离开 GoGenius 吗？</em>）。轻敲 <span class="btn-name">Sim</span> （是）关闭应用程序，或者 <span class="btn-name">Não</span> （不）留下来。</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-05.jpg" alt="退出确认对话框，要求使用 Sim 和 Não 按钮离开 GoGenius"></div><figcaption>退出确认：Sim（是）或 Não（否）。</figcaption></figure>
      </section>

      <!-- 5 PERFIL -->
      <section id="perfil">
        <h2><span class="sec-num">05</span>Perfil — 您的个人资料</h2>
        <p>窃听 <span class="pt">Perfil</span> 从主菜单打开一个小菜单，其中包含三个选项：</p>
        <table class="tbl">
          <thead><tr><th>选项</th><th>打开</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Perfil</span></td><td>编辑您的帐户详细信息（请参阅下一部分）</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>你的分数和排名</td></tr>
            <tr><td><span class="btn-name">Sobre a APP / Políticas de Privacidade</span></td><td>关于应用程序&amp;隐私政策</td></tr>
          </tbody>
        </table>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-06.jpg" alt="Perfil 菜单显示 Perfil、Classificações 和 Sobre a APP 选项"></div><figcaption>Perfil 菜单及其三个选项。</figcaption></figure>
      </section>

      <!-- 6 EDITAR PERFIL -->
      <section id="editar">
        <h2><span class="sec-num">06</span>Editar Perfil — 编辑您的详细信息</h2>
        <p>这 <span class="pt">Editar Perfil</span> 屏幕是您查看和更改帐户信息的地方。</p>
        <table class="tbl">
          <thead><tr><th>场地</th><th>意义</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Sexo</span></td><td>性别（下拉菜单）</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>年龄</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>国籍</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>地址/地点</td></tr>
            <tr><td><span class="btn-name">Password Atual</span></td><td>当前密码</td></tr>
            <tr><td><span class="btn-name">Password Nova</span></td><td>新密码</td></tr>
            <tr><td><span class="btn-name">Confirmar Password</span></td><td>确认新密码</td></tr>
          </tbody>
        </table>
        <p>如果您要更改密码，则只需要三个密码字段，否则将其留空。点击 <strong>眼睛图标</strong> 位于密码字段旁边，用于显示或隐藏您输入的内容。</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-07.jpg" alt="Editar Perfil 表单，包含字段和 Atualizar、Terminar Sessão、Eliminar Perfil 按钮"></div><figcaption>Editar Perfil 表单及其三个操作按钮。</figcaption></figure>
        <h3>操作按钮</h3>
        <table class="tbl">
          <thead><tr><th>按钮</th><th>意义</th><th>它的作用</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Atualizar</span></td><td>更新</td><td>保存您上面所做的更改</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>退出</td><td>让您退出帐户</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>删除个人资料</td><td>永久删除您的帐户</td></tr>
          </tbody>
        </table>
        <div class="call warn">
          <span class="tag">Eliminar Perfil 是永久性的</span>
          删除您的个人资料会删除您的帐户以及您的累积进度和分数。此操作无法撤消。
        </div>
      </section>

            <!-- 7 CATEGORIAS (THEMES) -->
      <section id="categorias">
        <h2><span class="sec-num">07</span>类别 — 主题</h2>
        <p><span class="pt">Categorias</span> 是 GoGenius 的核心：构成课程的 14 个主题游戏。每个主题都采用一个日常主题，并围绕它构建一组练习。您会发现的一些主题包括但不限于：</p>
        <div class="themes">
          <span class="theme">A minha gente <span class="en">· 我的家人</span></span>
          <span class="theme">Onde moro <span class="en">· 我住的地方</span></span>
          <span class="theme">O que visto <span class="en">· 我穿什么</span></span>
          <span class="theme">Movendo-me <span class="en">· 出行</span></span>
          <span class="theme">Natura <span class="en">· 自然</span></span>
          <span class="theme">Eu, Hoje e no Futuro <span class="en">· 我，今天&amp;未来</span></span>
        </div>
        <p>无论您输入什么主题，学习都是围绕相同的三个技能领域（应用程序的真实结构）进行的。每个人都会训练不同的能力，并在您进行过程中为您提供解决方案：</p>
        <div class="skills">
          <div class="skill fone"><div class="name">Fonê</div><div class="role">口语理解</div><p><span class="pt">Exercícios de Compreensão Oral</span> — 听力和音系活动。</p></div>
          <div class="skill lex"><div class="name">Lex</div><div class="role">阅读</div><p><span class="pt">Exercícios de Leitura</span> — 欧洲葡萄牙语的阅读练习，并附有解决方案。</p></div>
          <div class="skill graph"><div class="name">Graph</div><div class="role">写作</div><p><span class="pt">Exercícios de Escrita</span> - 写作活动，并提供可行的解决方案。</p></div>
        </div>
        <p>您将在每场比赛中和记分牌上再次遇到这三个名字，其中会跟踪您在每场比赛中的进度（请参阅 <span class="pt">Classificações</span>）。下一节将介绍整个主题，以便您可以看到它们的实际效果。</p>
      </section>

      <!-- 8 THEMED GAMES -->
      <section id="themed-games">
        <h2><span class="sec-num">08</span>主题游戏——演练</h2>
        <p>本节以您可以选择的主题游戏为例， <span class="pt">A minha gente</span>，从轮播到练习，让您可以看到游戏的实际运作方式。</p>
        <h3>1·浏览并打开主题</h3>
        <p>类别以类别圈的蜿蜒旋转木马形式打开。沿着路径滑动即可在主题之间移动，点击圆圈即可打开主题；右侧滑出的选项卡（此处， <span class="pt">A minha gente</span>) 显示您要进入的主题。右上角的两个小平板电脑图标是语言切换（下面进一步解释），红色 <strong>问号</strong> 按钮会打开应用程序中每个按钮功能的索引 - 将其放在手边作为参考。</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-08.jpg" alt="沿着弯曲路径的圆形类别按钮的类别轮播"></div>
            <figcaption>类别轮播 — 点击圆圈即可打开主题。</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-09.jpg" alt="红色问号打开的按钮索引，解释Graph、Lex、Fonê等按钮"></div>
            <figcaption>红色？打开每个按钮的索引。</figcaption>
          </figure>
        </div>
        <p>该指数是一个方便的图例：它命名了三种运动类型 - <span class="pt">Graph</span> （写作）， <span class="pt">Lex</span> （阅读）和 <span class="pt">Fonê</span> （口语理解）——旁边 <span class="pt">Sair</span> （出口）， <span class="pt">Solução</span> （解决方案）， <span class="pt">Saber mais</span> （更多信息）， <span class="pt">Info</span>、听力障碍辅助功能图标和两种语言菜单 (<span class="pt">Menu em Português Europeu</span> 和 <span class="pt">Menu Escolher Outras Línguas</span>).</p>
        <h3>2·选择一个游戏</h3>
        <p>关闭索引并点击 <span class="pt">A minha gente</span> 主题。出现该主题游戏的小菜单 - 介绍性游戏以及 <span class="pt">Graph</span>, <span class="pt">Lex</span> 和 <span class="pt">Fonê</span>，每个都有自己的 <span class="pt">Jogar</span> （播放）按钮。您可以按任何顺序播放它们，但最好从 <strong>心</strong> 按钮 — 介绍性游戏。</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-10.jpg" alt="A minha gente 主题游戏菜单，带有心形、Graph、Lex 和 Fonê 圆圈，每个圆圈都有一个 Jogar 按钮"></div><figcaption>主题游戏——从心（介绍）游戏开始。</figcaption></figure>
        <h3>3 · 游戏内部</h3>
        <p>这是介绍性游戏的实际运行情况。将底部选项卡拖放到相应的人员上（<span class="pt">Pai</span>, <span class="pt">Avô</span>, <span class="pt">Filhos/Irmãos</span>, <span class="pt">Mãe</span>, <span class="pt">Avó</span>）学习家庭词汇。右下角有两个圆形按钮，右上角的两个平板电脑图标可以切换语言（请参阅下面的注释）。</p>
        <p>这 <strong>+ 按钮</strong> 打开一个 <span class="pt">Vocabulário</span> 面板列出了该活动将教的每个单词 - 在开始之前可以作为方便的参考。这 <strong>耳钮</strong> 将活动的目标和说明显示为 <strong>文本</strong>：这是一个辅助功能（标题为 <span class="pt">Portador de Deficiência Auditiva</span>，&ldquo; 有听力障碍的人&rdquo;），因此聋哑和听力障碍学习者可以准确地阅读要做什么。</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-11.jpg" alt="A minha gente 游戏屏幕，右上角有全家福、家庭成员选项卡、加号按钮和耳朵按钮以及两种语言平板电脑图标"></div><figcaption>正在玩游戏，右上角有两种语言图标。</figcaption></figure>
        <p>在任何活动或游戏过程中，请查看屏幕底部中央的小<strong>向上箭头</strong>。点击它可打开快捷菜单，前往 <span class="pt">Perfil</span>、<span class="pt">Categorias</span>、<span class="pt">Tradução</span>，或返回主 <span class="pt">Menu</span>——无需在应用中四处寻找即可切换这些部分。</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-23.jpg" alt="游戏中打开的底部菜单，显示 Perfil、Categorias、Tradução 和 Menu"></div><figcaption>向上箭头可在任何活动或游戏中打开此菜单。</figcaption></figure>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-12.jpg" alt="词汇面板列出了家庭词汇，通过加号按钮打开"></div>
            <figcaption><span class="pt">+</span> 按钮打开的 <span class="pt">Vocabulário</span> 列表。</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-13.jpg" alt="通过耳朵按钮打开的文本说明面板，标题为 Portador de Deficiência Auditiva"></div>
            <figcaption>耳朵按钮的文字说明。</figcaption>
          </figure>
        </div>
        <div class="call note">
          <span class="tag">再听一遍——用您的语言或葡萄牙语</span>
          每个游戏都是双语的。在 <strong>右上角</strong> 您会看到两个小平板电脑图标。点击 <strong>地球平板电脑</strong> (<span class="pt">Menu Escolher Outras Línguas</span>) 以您自己的语言再次听到或阅读当前项目，或者 <strong>葡萄牙国旗平板电脑</strong> (<span class="pt">Menu em Português Europeu</span>）将其切换回欧洲葡萄牙语。您可以根据需要经常来回 - 该应用程序永远不会将您锁定在一种语言上。
        </div>
        <h3>4·Graph、Lex &amp; Fonê</h3>
        <p>介绍性游戏结束后，您将进入主题的三项技能练习 - <span class="pt">Graph</span> （写作）， <span class="pt">Lex</span> （阅读）和 <span class="pt">Fonê</span> （口语理解）。</p>

        <p><span class="pt">Graph</span> 专注于您的<strong>写作</strong>技能。以下是在 <span class="pt">A minha gente</span> 主题中的用法：</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-17.jpg" alt="Graph 写作活动，显示 A tua resposta 占位符和红色灯泡按钮"></div><figcaption><span class="pt">Graph</span> — 点击 <span class="pt">A tua resposta...</span> 开始写作。</figcaption></figure>
        <p>同样，右上角的两个平板电脑图标可让您收听活动说明：<strong>世界地图</strong>按钮用您的母语播放，<strong>葡萄牙国旗</strong>按钮用葡萄牙语播放。</p>
        <p>听完说明后，点击显示 <span class="pt">A tua resposta...</span>（“你的回答...”）的桃色区域开始写作。强烈建议在设备上添加葡萄牙语键盘——例如在 iPhone 上启用葡萄牙语布局，以便正确输入重音并保持语法和拼写正确。</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-18.jpg" alt="Graph 回答框，葡萄牙语键盘已打开"></div>
            <figcaption>打开键盘输入</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-19.jpg" alt="Graph 中已输入葡萄牙语回答，蓝色勾号用于提交"></div>
            <figcaption>回答已就绪 — 点击蓝色勾号提交。</figcaption>
          </figure>
        </div>
        <p>写完后，点击<strong>蓝色勾号</strong>。然后对照解决方案：查看右下角并点击<strong>红色灯泡</strong>。将出现带有示范回答的 <span class="pt">Solução</span> 面板。</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-20.jpg" alt="Graph 的 Solução 面板，含示范回答和 Obrigado 按钮"></div><figcaption>红色灯泡打开 <span class="pt">Solução</span> — 对照后点击 <span class="pt">Obrigado</span>。</figcaption></figure>
        <div class="call tip">
          <span class="tag">重在意思，不必逐字相同</span>
          不必担心您的回答与解决方案有所不同。关键是意思相同、语法与句法扎实，并传达相同的信息。
        </div>
        <p><span class="pt">Lex</span> 是欧洲葡萄牙语的阅读练习，并内置辅助功能。与之前一样，右上角的两个平板电脑图标可让您用母语（世界地图）或葡萄牙语（葡萄牙国旗）收听活动说明。</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-21.jpg" alt="Lex 阅读活动，显示葡萄牙语文本和收起的 Dicionário 选项卡"></div>
            <figcaption>阅读提示文本</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-22.jpg" alt="Lex 中展开的 Dicionário，显示葡萄牙语关键词释义"></div>
            <figcaption>打开的 <span class="pt">Dicionário</span> 与词条释义。</figcaption>
          </figure>
        </div>
        <p>系统会给出一段短文供您阅读理解。请<strong>大声朗读</strong>——这有助于提升会话能力、发音，以及欧洲葡萄牙语的语感。</p>
        <p>文本下方有橙色的 <span class="pt">Dicionário</span>（词典）选项卡。点击可展开文中关键词和短语的葡萄牙语解释——遇到生词时很有用。</p>
        <p>右下角的<strong>红色灯泡</strong>一点击就会用葡萄牙语朗读提示文本。把它当作发音范例，然后跟着练习朗读。</p>
        <div class="call tip">
          <span class="tag">读、听、说——再重复</span>
          <span class="pt">Lex</span> 的目标是练习欧洲葡萄牙语（PT）的阅读、听力与发音。多加练习，并始终大声朗读提示文本。
        </div>
        <p><span class="pt">Fonê</span> 训练<strong>口语理解</strong> — <span class="pt">Exercícios de Compreensão Oral</span>：听力与语音活动。</p>
        <p>同样，右上角的两个平板电脑图标可让您用母语（世界地图）或欧洲葡萄牙语（葡萄牙国旗）收听活动说明。</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-24.jpg" alt="Fonê 问题屏幕，带白色磁盘播放按钮和未作答的选择题"></div>
            <figcaption>准备收听</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-25.jpg" alt="Fonê 问题屏幕，对话音频正在播放"></div>
            <figcaption>点击白色磁盘开始对话。</figcaption>
          </figure>
        </div>
        <p>点击 <span class="pt">Questões</span> 旁的<strong>白色磁盘</strong>，播放回答问题所需的对话。选中后磁盘会略微变灰，对话开始。</p>
        <p>听完后，再播放<strong>两到三遍</strong>直到理解，然后选择正确答案（<span class="pt">Assinale a resposta correta</span>）。</p>
        <div class="call tip">
          <span class="tag">问题始终使用欧洲葡萄牙语</span>
          这些思考题始终是欧洲葡萄牙语。请准备好 Google 翻译或您常用的翻译应用——我们在下方为您翻译了本模块，之后需要您自己翻译。这是培养使用翻译工具或笔记的好习惯。也可从底部箭头菜单打开 <span class="pt">Tradução</span>。
        </div>
        <p>以下是问题与选项的中文翻译：</p>
        <table class="tbl">
          <thead><tr><th>葡萄牙语</th><th>中文</th></tr></thead>
          <tbody>

            <tr>
              <td>
                <span class="btn-name">1. O Filipe perguntou ao João se:</span><br>
                · Não ia haver aula de Português.<br>
                · Não ia haver aula de História.<br>
                · Não ia ter teste de História.
              </td>
              <td>
                1. Filipe 问 João 是否：<br>· 不会有葡萄牙语课。<br>· 不会有历史课。<br>· 不会有历史测验。
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">2. O João vai faltar à aula porque:</span><br>
                · Não lhe apetece ir.<br>
                · Tem de ir à praia.<br>
                · Tem de ir ao dentista.
              </td>
              <td>
                2. João 会缺课，因为：<br>· 他不想去。<br>· 他必须去海滩。<br>· 他必须去看牙医。
              </td>
            </tr>
            <tr>
              <td>
                <span class="btn-name">3. A aula de História:</span><br>
                · Não ia haver no dia seguinte.<br>
                · Foi adiada para a tarde.<br>
                · Foi adiada para a noite.
              </td>
              <td>
                3. 历史课：<br>· 第二天不会上。<br>· 改到了下午。<br>· 改到了晚上。
              </td>
            </tr>
          </tbody>
        </table>
        <p>我们已为本模块标好答案，方便您参考：</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-26.jpg" alt="Fonê answers selected"></div><figcaption>已标出示范答案 — 准备好后点击 <span class="pt">continuar</span>。</figcaption></figure>
        <ol>
          <li><span class="pt">Não ia haver aula de História.</span> — 不会有历史课。</li>
          <li><span class="pt">Tem de ir ao dentista.</span> — 他必须去看牙医。</li>
          <li><span class="pt">Foi adiada para a noite.</span> — 改到了晚上。</li>
        </ol>
        <p>与 <span class="pt">Lex</span> 一样，橙色的 <span class="pt">Dicionário</span> 选项卡显示关键词汇。点击可展开葡萄牙语释义。</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-27.jpg" alt="Fonê 中展开的 Dicionário，显示 apontamentos 的释义"></div>
            <figcaption>打开的 <span class="pt">Dicionário</span>，含关键词释义。</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-29.jpg" alt="Fonê 已选答案并展开 Dicionário"></div>
            <figcaption>已选答案，<span class="pt">Dicionário</span> 已展开。</figcaption>
          </figure>
        </div>
        <p>右下角的<strong>红色耳朵按钮</strong>是无障碍功能：以文字显示对话（标题为 <span class="pt">Portador de Deficiência Auditiva</span>）。若有词语或短语不清楚，请使用翻译应用或笔记。</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-28.jpg" alt="Fonê 无障碍覆盖层，显示书面对话文本"></div><figcaption>耳朵按钮打开书面对话 — 点击 <span class="pt">Obrigado</span> 关闭。</figcaption></figure>
        <p>完成问题后，点击底部的 <span class="pt">continuar</span>（继续），进入 <span class="pt">Fonê</span> 的下一部分。</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-32.jpg" alt="Fonê 屏幕，已选答案、打开的 Dicionário 和 continuar 链接"></div><figcaption>点击 <span class="pt">continuar</span> 进入语音练习。</figcaption></figure>
        <p><span class="pt">Fonê</span> 还包括语音练习：单词圆圈、<strong>红色灯泡</strong>查看答案，以及同一耳朵按钮提供文字支持——例如拼写家庭相关单词。</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-30.jpg" alt="Fonê 语音屏幕，显示 Família、Pai、Mãe 和 Filho 圆圈"></div>
            <figcaption>语音练习</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-31.jpg" alt="Fonê 无障碍面板，提示拼写单词"></div>
            <figcaption>耳朵按钮的文字说明。</figcaption>
          </figure>
        </div>
        <div class="call tip">
          <span class="tag">多听几遍</span>
          口语理解靠重复提升。再次播放磁盘、查看 <span class="pt">Dicionário</span>，需要时用耳朵按钮查看对话文本。
        </div>
        <h3>5 · 不止于本导览</h3>
        <p>您刚在 <span class="pt">A minha gente</span> 中完成的流程，同样适用于 GoGenius 中的任何主题或活动，仅有细微差别。活动大体上可自行理解，而您已具备成功所需的工具：双语说明、底部箭头菜单、<span class="pt">Dicionário</span>、答案、无障碍文本，以及需要时的 <span class="pt">Tradução</span>。</p>
        <p>若应用中有不清楚之处，请回到本手册——或通过 <a href="#support">Support &amp; contact</a> 联系我们。我们乐意陪伴您学习欧洲葡萄牙语。</p>
        <div class="call tip">
          <span class="tag"><span class="pt">Boa sorte!</span> · 祝你好运</span>
          享受游戏——并继续练习。
        </div>
      </section>

<!-- 7 CLASSIFICACOES -->
      <section id="scores">
        <h2><span class="sec-num">09</span>Classificações — 分数 &amp; 排名</h2>
        <p>达到了通过 <span class="pt">Perfil ▸ Classificações</span>，这是你的记分牌。它列出了应用程序中的每个主题；点击其中一个将其展开，看看您的表现如何。</p>
        <div class="shot-group">
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-14.jpg" alt="带有图标的主题分类列表"></div>
            <figcaption><span class="pt">Classificações</span> 中的主题列表。</figcaption>
          </figure>
          <figure class="shot">
            <div class="phone"><img src="/images/screenshot-15.png" alt="显示星级和 Graph、Lex、Fonê 完成徽章的扩展主题卡"></div>
            <figcaption>展开的主题卡片，含星级和技能徽章。</figcaption>
          </figure>
        </div>
        <p>每个扩展主题都显示一个 <strong>星级</strong> （满分五分）加上三项技能中每一项的完成徽章 - <span class="pt">Graph</span>, <span class="pt">Lex</span>， 和 <span class="pt">Fonê</span>。绿色复选标记表示您已完成该主题的技能练习。</p>
        <div class="call tip">
          <span class="tag">如何赚取积分</span>
          仅当您 <strong>完成所有任务</strong> 在游戏中，部分完成不算数，因为完成的游戏被视为您实际上已经学习了该材料的证据。如果你一次无法完成，就先放着，稍后再拿；没有任何损失。
        </div>
      </section>

      <!-- 8 SOBRE -->
      <section id="sobre">
        <h2><span class="sec-num">10</span>查看APP &amp;隐私</h2>
        <p>也在 <span class="pt">Perfil</span>， 这 <span class="pt">Sobre a APP / Políticas de Privacidade</span> 屏幕显示应用程序的背景及其完整的隐私政策。点击 <strong>葡萄牙语</strong> 或者 <strong>英语</strong> 顶部的标志可切换语言。</p>
        <figure class="shot"><div class="phone"><img src="/images/screenshot-16.jpg" alt="关于带有葡萄牙语和英语国旗切换的应用程序屏幕"></div><figcaption>关于应用程序，使用 PT/EN 标志切换。</figcaption></figure>
        <p class="intro-note">
          
          简而言之：GoGenius 支持通过阅读、写作和语音练习辅助学习欧洲葡萄牙语，并有多种语言的教程支持。当您玩游戏时，系统会构建一个分类网格，以便您可以看到自己的熟练程度。该应用程序可在 Android 上使用（以及通过模拟器在 PC 上使用），研究团队建议每天进行 15-20 分钟的简短训练，以获得最佳效果。
        </p>
  
        <p>该政策也可在线查看： <a href="https://privacidade.grupoautonoma.pt/index.php/politica-de-privacidade-go-genius-en/" target="_blank" rel="noopener">privacidade.grupoautonoma.pt</a>.</p>
      </section>

      <!-- 9 SUPPORT -->
      <section id="support">
        <h2><span class="sec-num">11</span>支持&amp;联系方式</h2>
        <div class="cards">
          <div class="card"><h4>应用程序支持</h4><p><a href="mailto:gogenius@autonoma.pt">gogenius@autonoma.pt</a></p></div>
          <div class="card"><h4>开发商</h4><p>TOO WILD — SOFTWARE, LDA</p><p><a href="mailto:toowildsoftware@gmail.com">toowildsoftware@gmail.com</a></p><p>+351 923 544 221</p></div>
        </div>
      </section>

      <!-- GLOSSARY -->
      <section id="glossary">
        <h2><span class="sec-num">A</span>快速葡萄牙语词汇表</h2>
        <table class="tbl">
          <thead><tr><th>葡萄牙语</th><th>英语</th></tr></thead>
          <tbody>
            <tr><td><span class="btn-name">Bem-Vindo!</span></td><td>欢迎！</td></tr>
            <tr><td><span class="btn-name">Entrar</span></td><td>登录</td></tr>
            <tr><td><span class="btn-name">Registar</span></td><td>登记</td></tr>
            <tr><td><span class="btn-name">Recuperar Password</span></td><td>恢复密码</td></tr>
            <tr>
              <td><span class="btn-name">Localidade</span></td>
              <td>
                地区/城镇
                <br>
                <span style="color:#666;font-size:0.96em;">
                  您从哪里访问该应用程序？
                </span>
              </td>
            </tr>
 
            <tr><td><span class="btn-name">Menu</span></td><td>主菜单</td></tr>
            <tr><td><span class="btn-name">Perfil</span></td><td>轮廓</td></tr>
            <tr><td><span class="btn-name">Categorias</span></td><td>类别（游戏）</td></tr>
            <tr><td><span class="btn-name">Tradutor</span></td><td>翻译者</td></tr>
            <tr><td><span class="btn-name">Classificações</span></td><td>分数/排名</td></tr>
            <tr><td><span class="btn-name">Editar Perfil</span></td><td>编辑个人资料</td></tr>
            <tr><td><span class="btn-name">Sobre a APP</span></td><td>关于应用程序</td></tr>
            <tr><td><span class="btn-name">Políticas de Privacidade</span></td><td>隐私政策</td></tr>
            <tr><td><span class="btn-name">Sexo</span></td><td>性别</td></tr>
            <tr><td><span class="btn-name">Idade</span></td><td>年龄</td></tr>
            <tr><td><span class="btn-name">Nacionalidade</span></td><td>国籍</td></tr>
            <tr><td><span class="btn-name">Localização</span></td><td>地址/地点</td></tr>
            <tr><td><span class="btn-name">Atualizar</span></td><td>更新</td></tr>
            <tr><td><span class="btn-name">Terminar Sessão</span></td><td>退出</td></tr>
            <tr><td><span class="btn-name">Eliminar Perfil</span></td><td>删除个人资料</td></tr>
            <tr><td><span class="btn-name">Sim / Não</span></td><td>是/否</td></tr>
          </tbody>
        </table>
        <footer class="doc-foot"><p>GoGenius 由 FCT — Fundação para a Ciência e a Tecnologia 通过国家基金和 Centro de Investigação em Psicologia (CIP-UAL) 提供支持。</p></footer>
      </section>`,Gh={ar:mh,ru:zh,uk:Eh,ro:Ah,en:bh,fr:Sh,es:yh,zh:Th,de:vh};function jh(E){return E.replace(/(src|href)="\/([^"]+)"/g,'$1="/gogenius-manual/$2"').replace(/<table class="tbl">/g,'<div class="tbl-scroll"><table class="tbl">').replace(/<\/table>/g,"</table></div>")}function Ch(){const{language:E}=Et(),O=jh(Gh[E]);return ga.jsx("div",{className:"content-inner",dangerouslySetInnerHTML:{__html:O}},E)}function Dh(E,O){const R=E.getBoundingClientRect().top,d=O.getBoundingClientRect().top-R+E.scrollTop,C=28,q=E.scrollTop+C,F=E.scrollTop+E.clientHeight-C,T=window.matchMedia("(prefers-reduced-motion: reduce)").matches?"auto":"smooth";if(d<q){E.scrollTo({top:Math.max(0,d-C),behavior:T});return}const A=d+O.offsetHeight;A>F&&E.scrollTo({top:A-E.clientHeight+C,behavior:T})}function Lh({activeId:E,navOpen:O,onNavigate:R,onActivate:d}){const{ui:C}=Et(),q=Ta.useRef(null),F=Ta.useRef(!1);Ta.useEffect(()=>{const T=q.current;if(!T)return;const A=O&&!F.current;F.current=O;const Y=()=>{const x=T.querySelector("a.active");x&&Dh(T,x)};if(A){const x=window.setTimeout(Y,260);return()=>window.clearTimeout(x)}if(window.matchMedia("(min-width: 861px)").matches){const x=requestAnimationFrame(Y);return()=>cancelAnimationFrame(x)}},[E,O]);const J=T=>{d(T),R()};return ga.jsxs("aside",{className:"sidebar",id:"sidebar",ref:q,children:[ga.jsxs("a",{className:"brand",href:"#welcome",onClick:()=>J("welcome"),"aria-label":"GoGenius",children:[ga.jsx("img",{className:"brand-mark",src:"/gogenius-manual/gogenius-logo.png",alt:"",width:38,height:38}),ga.jsx("div",{className:"brand-name",children:"GoGenius"})]}),ga.jsx("div",{className:"brand-sub",children:C.userManual}),ga.jsx("nav",{className:"toc",id:"toc","aria-label":C.tocAriaLabel,children:C.toc.map(({id:T,num:A,label:Y})=>{const x=E===T;return ga.jsxs("a",{href:`#${T}`,className:x?"active":void 0,"aria-current":x?"location":void 0,onClick:()=>J(T),children:[ga.jsx("span",{className:"num",children:A}),Y]},T)})})]})}function xh(){return window.matchMedia("(max-width: 860px)").matches?96:88}function Dd(){const E=xh();let O=Fi[0];for(const R of Fi){const d=document.getElementById(R);d&&d.getBoundingClientRect().top<=E&&(O=R)}return O}function Mh(){const[E,O]=Ta.useState("welcome"),{language:R}=Et(),d=Ta.useRef(null),C=Ta.useRef(0),q=Ta.useCallback(J=>{O(T=>T===J?T:J)},[]),F=Ta.useCallback(J=>{d.current=J,q(J),window.clearTimeout(C.current),C.current=window.setTimeout(()=>{d.current=null,q(Dd())},800)},[q]);return Ta.useEffect(()=>{let J=0;const T=()=>{d.current||q(Dd())},A=()=>{cancelAnimationFrame(J),J=requestAnimationFrame(T)},Y=()=>{const ra=window.location.hash.replace(/^#/,"");Fi.includes(ra)?F(ra):T()},x=window.location.hash.replace(/^#/,"");return Fi.includes(x)?q(x):T(),window.addEventListener("scroll",A,{passive:!0}),window.addEventListener("resize",A),window.addEventListener("hashchange",Y),()=>{cancelAnimationFrame(J),window.clearTimeout(C.current),window.removeEventListener("scroll",A),window.removeEventListener("resize",A),window.removeEventListener("hashchange",Y)}},[R,q,F]),{activeId:E,activateSection:F}}function Oh(E,O){Ta.useEffect(()=>(document.body.classList.toggle("nav-open",E),()=>document.body.classList.remove("nav-open")),[E]);const R=Ta.useCallback(()=>O(!1),[O]);return Ta.useEffect(()=>{if(!E)return;const d=q=>{const F=q.target,J=document.getElementById("sidebar"),T=document.getElementById("menuBtn");J!=null&&J.contains(F)||T!=null&&T.contains(F)||O(!1)},C=q=>{q.key==="Escape"&&O(!1)};return document.addEventListener("click",d),document.addEventListener("keydown",C),()=>{document.removeEventListener("click",d),document.removeEventListener("keydown",C)}},[E,O]),{closeNav:R}}function qh(){const[E,O]=Ta.useState(!1),{activeId:R,activateSection:d}=Mh(),{closeNav:C}=Oh(E,O),{ui:q}=Et();return ga.jsxs(ga.Fragment,{children:[ga.jsx("button",{type:"button",className:"menu-btn",id:"menuBtn","aria-label":q.toggleContents,"aria-expanded":E,onClick:()=>O(F=>!F),children:q.contents}),ga.jsxs("div",{className:"shell",children:[ga.jsx(Lh,{activeId:R,navOpen:E,onNavigate:C,onActivate:d}),ga.jsxs("main",{className:"content",children:[ga.jsx(hh,{}),ga.jsx(Ch,{})]})]})]})}uh.createRoot(document.getElementById("root")).render(ga.jsx(Ta.StrictMode,{children:ga.jsx(fh,{children:ga.jsx(qh,{})})}));
