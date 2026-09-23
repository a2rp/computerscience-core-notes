(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))m(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const g of p.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&m(g)}).observe(document,{childList:!0,subtree:!0});function l(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function m(u){if(u.ep)return;u.ep=!0;const p=l(u);fetch(u.href,p)}})();function uf(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Os={exports:{}},ao={},Fs={exports:{}},ne={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu;function pf(){if(iu)return ne;iu=1;var i=Symbol.for("react.element"),c=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),m=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),g=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),q=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),B=Symbol.iterator;function J(v){return v===null||typeof v!="object"?null:(v=B&&v[B]||v["@@iterator"],typeof v=="function"?v:null)}var se={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},K=Object.assign,W={};function Q(v,N,Z){this.props=v,this.context=N,this.refs=W,this.updater=Z||se}Q.prototype.isReactComponent={},Q.prototype.setState=function(v,N){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,N,"setState")},Q.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function he(){}he.prototype=Q.prototype;function de(v,N,Z){this.props=v,this.context=N,this.refs=W,this.updater=Z||se}var re=de.prototype=new he;re.constructor=de,K(re,Q.prototype),re.isPureReactComponent=!0;var L=Array.isArray,X=Object.prototype.hasOwnProperty,U={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function _(v,N,Z){var ee,ae={},oe=null,ue=null;if(N!=null)for(ee in N.ref!==void 0&&(ue=N.ref),N.key!==void 0&&(oe=""+N.key),N)X.call(N,ee)&&!I.hasOwnProperty(ee)&&(ae[ee]=N[ee]);var le=arguments.length-2;if(le===1)ae.children=Z;else if(1<le){for(var xe=Array(le),Ce=0;Ce<le;Ce++)xe[Ce]=arguments[Ce+2];ae.children=xe}if(v&&v.defaultProps)for(ee in le=v.defaultProps,le)ae[ee]===void 0&&(ae[ee]=le[ee]);return{$$typeof:i,type:v,key:oe,ref:ue,props:ae,_owner:U.current}}function ve(v,N){return{$$typeof:i,type:v.type,key:N,ref:v.ref,props:v.props,_owner:v._owner}}function Le(v){return typeof v=="object"&&v!==null&&v.$$typeof===i}function ie(v){var N={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(Z){return N[Z]})}var Pe=/\/+/g;function Ne(v,N){return typeof v=="object"&&v!==null&&v.key!=null?ie(""+v.key):N.toString(36)}function Ve(v,N,Z,ee,ae){var oe=typeof v;(oe==="undefined"||oe==="boolean")&&(v=null);var ue=!1;if(v===null)ue=!0;else switch(oe){case"string":case"number":ue=!0;break;case"object":switch(v.$$typeof){case i:case c:ue=!0}}if(ue)return ue=v,ae=ae(ue),v=ee===""?"."+Ne(ue,0):ee,L(ae)?(Z="",v!=null&&(Z=v.replace(Pe,"$&/")+"/"),Ve(ae,N,Z,"",function(Ce){return Ce})):ae!=null&&(Le(ae)&&(ae=ve(ae,Z+(!ae.key||ue&&ue.key===ae.key?"":(""+ae.key).replace(Pe,"$&/")+"/")+v)),N.push(ae)),1;if(ue=0,ee=ee===""?".":ee+":",L(v))for(var le=0;le<v.length;le++){oe=v[le];var xe=ee+Ne(oe,le);ue+=Ve(oe,N,Z,xe,ae)}else if(xe=J(v),typeof xe=="function")for(v=xe.call(v),le=0;!(oe=v.next()).done;)oe=oe.value,xe=ee+Ne(oe,le++),ue+=Ve(oe,N,Z,xe,ae);else if(oe==="object")throw N=String(v),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return ue}function Xe(v,N,Z){if(v==null)return v;var ee=[],ae=0;return Ve(v,ee,"","",function(oe){return N.call(Z,oe,ae++)}),ee}function Ye(v){if(v._status===-1){var N=v._result;N=N(),N.then(function(Z){(v._status===0||v._status===-1)&&(v._status=1,v._result=Z)},function(Z){(v._status===0||v._status===-1)&&(v._status=2,v._result=Z)}),v._status===-1&&(v._status=0,v._result=N)}if(v._status===1)return v._result.default;throw v._result}var ye={current:null},P={transition:null},F={ReactCurrentDispatcher:ye,ReactCurrentBatchConfig:P,ReactCurrentOwner:U};function z(){throw Error("act(...) is not supported in production builds of React.")}return ne.Children={map:Xe,forEach:function(v,N,Z){Xe(v,function(){N.apply(this,arguments)},Z)},count:function(v){var N=0;return Xe(v,function(){N++}),N},toArray:function(v){return Xe(v,function(N){return N})||[]},only:function(v){if(!Le(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},ne.Component=Q,ne.Fragment=l,ne.Profiler=u,ne.PureComponent=de,ne.StrictMode=m,ne.Suspense=k,ne.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,ne.act=z,ne.cloneElement=function(v,N,Z){if(v==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+v+".");var ee=K({},v.props),ae=v.key,oe=v.ref,ue=v._owner;if(N!=null){if(N.ref!==void 0&&(oe=N.ref,ue=U.current),N.key!==void 0&&(ae=""+N.key),v.type&&v.type.defaultProps)var le=v.type.defaultProps;for(xe in N)X.call(N,xe)&&!I.hasOwnProperty(xe)&&(ee[xe]=N[xe]===void 0&&le!==void 0?le[xe]:N[xe])}var xe=arguments.length-2;if(xe===1)ee.children=Z;else if(1<xe){le=Array(xe);for(var Ce=0;Ce<xe;Ce++)le[Ce]=arguments[Ce+2];ee.children=le}return{$$typeof:i,type:v.type,key:ae,ref:oe,props:ee,_owner:ue}},ne.createContext=function(v){return v={$$typeof:g,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},v.Provider={$$typeof:p,_context:v},v.Consumer=v},ne.createElement=_,ne.createFactory=function(v){var N=_.bind(null,v);return N.type=v,N},ne.createRef=function(){return{current:null}},ne.forwardRef=function(v){return{$$typeof:j,render:v}},ne.isValidElement=Le,ne.lazy=function(v){return{$$typeof:Y,_payload:{_status:-1,_result:v},_init:Ye}},ne.memo=function(v,N){return{$$typeof:q,type:v,compare:N===void 0?null:N}},ne.startTransition=function(v){var N=P.transition;P.transition={};try{v()}finally{P.transition=N}},ne.unstable_act=z,ne.useCallback=function(v,N){return ye.current.useCallback(v,N)},ne.useContext=function(v){return ye.current.useContext(v)},ne.useDebugValue=function(){},ne.useDeferredValue=function(v){return ye.current.useDeferredValue(v)},ne.useEffect=function(v,N){return ye.current.useEffect(v,N)},ne.useId=function(){return ye.current.useId()},ne.useImperativeHandle=function(v,N,Z){return ye.current.useImperativeHandle(v,N,Z)},ne.useInsertionEffect=function(v,N){return ye.current.useInsertionEffect(v,N)},ne.useLayoutEffect=function(v,N){return ye.current.useLayoutEffect(v,N)},ne.useMemo=function(v,N){return ye.current.useMemo(v,N)},ne.useReducer=function(v,N,Z){return ye.current.useReducer(v,N,Z)},ne.useRef=function(v){return ye.current.useRef(v)},ne.useState=function(v){return ye.current.useState(v)},ne.useSyncExternalStore=function(v,N,Z){return ye.current.useSyncExternalStore(v,N,Z)},ne.useTransition=function(){return ye.current.useTransition()},ne.version="18.3.1",ne}var au;function rl(){return au||(au=1,Fs.exports=pf()),Fs.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var su;function mf(){if(su)return ao;su=1;var i=rl(),c=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,u=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function g(j,k,q){var Y,B={},J=null,se=null;q!==void 0&&(J=""+q),k.key!==void 0&&(J=""+k.key),k.ref!==void 0&&(se=k.ref);for(Y in k)m.call(k,Y)&&!p.hasOwnProperty(Y)&&(B[Y]=k[Y]);if(j&&j.defaultProps)for(Y in k=j.defaultProps,k)B[Y]===void 0&&(B[Y]=k[Y]);return{$$typeof:c,type:j,key:J,ref:se,props:B,_owner:u.current}}return ao.Fragment=l,ao.jsx=g,ao.jsxs=g,ao}var lu;function ff(){return lu||(lu=1,Os.exports=mf()),Os.exports}var o=ff(),ji={},Bs={exports:{}},it={},Ws={exports:{}},Us={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cu;function hf(){return cu||(cu=1,(function(i){function c(P,F){var z=P.length;P.push(F);e:for(;0<z;){var v=z-1>>>1,N=P[v];if(0<u(N,F))P[v]=F,P[z]=N,z=v;else break e}}function l(P){return P.length===0?null:P[0]}function m(P){if(P.length===0)return null;var F=P[0],z=P.pop();if(z!==F){P[0]=z;e:for(var v=0,N=P.length,Z=N>>>1;v<Z;){var ee=2*(v+1)-1,ae=P[ee],oe=ee+1,ue=P[oe];if(0>u(ae,z))oe<N&&0>u(ue,ae)?(P[v]=ue,P[oe]=z,v=oe):(P[v]=ae,P[ee]=z,v=ee);else if(oe<N&&0>u(ue,z))P[v]=ue,P[oe]=z,v=oe;else break e}}return F}function u(P,F){var z=P.sortIndex-F.sortIndex;return z!==0?z:P.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;i.unstable_now=function(){return p.now()}}else{var g=Date,j=g.now();i.unstable_now=function(){return g.now()-j}}var k=[],q=[],Y=1,B=null,J=3,se=!1,K=!1,W=!1,Q=typeof setTimeout=="function"?setTimeout:null,he=typeof clearTimeout=="function"?clearTimeout:null,de=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function re(P){for(var F=l(q);F!==null;){if(F.callback===null)m(q);else if(F.startTime<=P)m(q),F.sortIndex=F.expirationTime,c(k,F);else break;F=l(q)}}function L(P){if(W=!1,re(P),!K)if(l(k)!==null)K=!0,Ye(X);else{var F=l(q);F!==null&&ye(L,F.startTime-P)}}function X(P,F){K=!1,W&&(W=!1,he(_),_=-1),se=!0;var z=J;try{for(re(F),B=l(k);B!==null&&(!(B.expirationTime>F)||P&&!ie());){var v=B.callback;if(typeof v=="function"){B.callback=null,J=B.priorityLevel;var N=v(B.expirationTime<=F);F=i.unstable_now(),typeof N=="function"?B.callback=N:B===l(k)&&m(k),re(F)}else m(k);B=l(k)}if(B!==null)var Z=!0;else{var ee=l(q);ee!==null&&ye(L,ee.startTime-F),Z=!1}return Z}finally{B=null,J=z,se=!1}}var U=!1,I=null,_=-1,ve=5,Le=-1;function ie(){return!(i.unstable_now()-Le<ve)}function Pe(){if(I!==null){var P=i.unstable_now();Le=P;var F=!0;try{F=I(!0,P)}finally{F?Ne():(U=!1,I=null)}}else U=!1}var Ne;if(typeof de=="function")Ne=function(){de(Pe)};else if(typeof MessageChannel!="undefined"){var Ve=new MessageChannel,Xe=Ve.port2;Ve.port1.onmessage=Pe,Ne=function(){Xe.postMessage(null)}}else Ne=function(){Q(Pe,0)};function Ye(P){I=P,U||(U=!0,Ne())}function ye(P,F){_=Q(function(){P(i.unstable_now())},F)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(P){P.callback=null},i.unstable_continueExecution=function(){K||se||(K=!0,Ye(X))},i.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):ve=0<P?Math.floor(1e3/P):5},i.unstable_getCurrentPriorityLevel=function(){return J},i.unstable_getFirstCallbackNode=function(){return l(k)},i.unstable_next=function(P){switch(J){case 1:case 2:case 3:var F=3;break;default:F=J}var z=J;J=F;try{return P()}finally{J=z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(P,F){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var z=J;J=P;try{return F()}finally{J=z}},i.unstable_scheduleCallback=function(P,F,z){var v=i.unstable_now();switch(typeof z=="object"&&z!==null?(z=z.delay,z=typeof z=="number"&&0<z?v+z:v):z=v,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=z+N,P={id:Y++,callback:F,priorityLevel:P,startTime:z,expirationTime:N,sortIndex:-1},z>v?(P.sortIndex=z,c(q,P),l(k)===null&&P===l(q)&&(W?(he(_),_=-1):W=!0,ye(L,z-v))):(P.sortIndex=N,c(k,P),K||se||(K=!0,Ye(X))),P},i.unstable_shouldYield=ie,i.unstable_wrapCallback=function(P){var F=J;return function(){var z=J;J=F;try{return P.apply(this,arguments)}finally{J=z}}}})(Us)),Us}var du;function xf(){return du||(du=1,Ws.exports=hf()),Ws.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var uu;function gf(){if(uu)return it;uu=1;var i=rl(),c=xf();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m=new Set,u={};function p(e,t){g(e,t),g(e+"Capture",t)}function g(e,t){for(u[e]=t,e=0;e<t.length;e++)m.add(t[e])}var j=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),k=Object.prototype.hasOwnProperty,q=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Y={},B={};function J(e){return k.call(B,e)?!0:k.call(Y,e)?!1:q.test(e)?B[e]=!0:(Y[e]=!0,!1)}function se(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function K(e,t,r,n){if(t===null||typeof t=="undefined"||se(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function W(e,t,r,n,a,s,d){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=a,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=d}var Q={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Q[e]=new W(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Q[t]=new W(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){Q[e]=new W(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Q[e]=new W(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Q[e]=new W(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){Q[e]=new W(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){Q[e]=new W(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){Q[e]=new W(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){Q[e]=new W(e,5,!1,e.toLowerCase(),null,!1,!1)});var he=/[\-:]([a-z])/g;function de(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(he,de);Q[t]=new W(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(he,de);Q[t]=new W(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(he,de);Q[t]=new W(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){Q[e]=new W(e,1,!1,e.toLowerCase(),null,!1,!1)}),Q.xlinkHref=new W("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){Q[e]=new W(e,1,!1,e.toLowerCase(),null,!0,!0)});function re(e,t,r,n){var a=Q.hasOwnProperty(t)?Q[t]:null;(a!==null?a.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(K(t,r,a,n)&&(r=null),n||a===null?J(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):a.mustUseProperty?e[a.propertyName]=r===null?a.type===3?!1:"":r:(t=a.attributeName,n=a.attributeNamespace,r===null?e.removeAttribute(t):(a=a.type,r=a===3||a===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var L=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,X=Symbol.for("react.element"),U=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),_=Symbol.for("react.strict_mode"),ve=Symbol.for("react.profiler"),Le=Symbol.for("react.provider"),ie=Symbol.for("react.context"),Pe=Symbol.for("react.forward_ref"),Ne=Symbol.for("react.suspense"),Ve=Symbol.for("react.suspense_list"),Xe=Symbol.for("react.memo"),Ye=Symbol.for("react.lazy"),ye=Symbol.for("react.offscreen"),P=Symbol.iterator;function F(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var z=Object.assign,v;function N(e){if(v===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);v=t&&t[1]||""}return`
`+v+e}var Z=!1;function ee(e,t){if(!e||Z)return"";Z=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var n=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){n=w}e.call(t.prototype)}else{try{throw Error()}catch(w){n=w}e()}}catch(w){if(w&&n&&typeof w.stack=="string"){for(var a=w.stack.split(`
`),s=n.stack.split(`
`),d=a.length-1,f=s.length-1;1<=d&&0<=f&&a[d]!==s[f];)f--;for(;1<=d&&0<=f;d--,f--)if(a[d]!==s[f]){if(d!==1||f!==1)do if(d--,f--,0>f||a[d]!==s[f]){var h=`
`+a[d].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=d&&0<=f);break}}}finally{Z=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?N(e):""}function ae(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=ee(e.type,!1),e;case 11:return e=ee(e.type.render,!1),e;case 1:return e=ee(e.type,!0),e;default:return""}}function oe(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case I:return"Fragment";case U:return"Portal";case ve:return"Profiler";case _:return"StrictMode";case Ne:return"Suspense";case Ve:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case ie:return(e.displayName||"Context")+".Consumer";case Le:return(e._context.displayName||"Context")+".Provider";case Pe:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Xe:return t=e.displayName||null,t!==null?t:oe(e.type)||"Memo";case Ye:t=e._payload,e=e._init;try{return oe(e(t))}catch{}}return null}function ue(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return oe(t);case 8:return t===_?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function le(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function xe(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Ce(e){var t=xe(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var a=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(d){n=""+d,s.call(this,d)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(d){n=""+d},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Zt(e){e._valueTracker||(e._valueTracker=Ce(e))}function wr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=xe(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function jt(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Vi(e,t){var r=t.checked;return z({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function pl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=le(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ml(e,t){t=t.checked,t!=null&&re(e,"checked",t,!1)}function Yi(e,t){ml(e,t);var r=le(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Qi(e,t.type,r):t.hasOwnProperty("defaultValue")&&Qi(e,t.type,le(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function fl(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Qi(e,t,r){(t!=="number"||jt(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var wn=Array.isArray;function Br(e,t,r,n){if(e=e.options,t){t={};for(var a=0;a<r.length;a++)t["$"+r[a]]=!0;for(r=0;r<e.length;r++)a=t.hasOwnProperty("$"+e[r].value),e[r].selected!==a&&(e[r].selected=a),a&&n&&(e[r].defaultSelected=!0)}else{for(r=""+le(r),t=null,a=0;a<e.length;a++){if(e[a].value===r){e[a].selected=!0,n&&(e[a].defaultSelected=!0);return}t!==null||e[a].disabled||(t=e[a])}t!==null&&(t.selected=!0)}}function $i(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return z({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function hl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(wn(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:le(r)}}function xl(e,t){var r=le(t.value),n=le(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function gl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function vl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qi(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?vl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,yl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,a){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,a)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function kn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var jn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},fp=["Webkit","ms","Moz","O"];Object.keys(jn).forEach(function(e){fp.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),jn[t]=jn[e]})});function bl(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||jn.hasOwnProperty(e)&&jn[e]?(""+t).trim():t+"px"}function wl(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,a=bl(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,a):e[r]=a}}var hp=z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ki(e,t){if(t){if(hp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Xi(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ji=null;function Zi(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ea=null,Wr=null,Ur=null;function kl(e){if(e=Vn(e)){if(typeof ea!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Oo(t),ea(e.stateNode,e.type,t))}}function jl(e){Wr?Ur?Ur.push(e):Ur=[e]:Wr=e}function Nl(){if(Wr){var e=Wr,t=Ur;if(Ur=Wr=null,kl(e),t)for(e=0;e<t.length;e++)kl(t[e])}}function Sl(e,t){return e(t)}function Cl(){}var ta=!1;function Tl(e,t,r){if(ta)return e(t,r);ta=!0;try{return Sl(e,t,r)}finally{ta=!1,(Wr!==null||Ur!==null)&&(Cl(),Nl())}}function Nn(e,t){var r=e.stateNode;if(r===null)return null;var n=Oo(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var ra=!1;if(j)try{var Sn={};Object.defineProperty(Sn,"passive",{get:function(){ra=!0}}),window.addEventListener("test",Sn,Sn),window.removeEventListener("test",Sn,Sn)}catch{ra=!1}function xp(e,t,r,n,a,s,d,f,h){var w=Array.prototype.slice.call(arguments,3);try{t.apply(r,w)}catch(C){this.onError(C)}}var Cn=!1,xo=null,go=!1,na=null,gp={onError:function(e){Cn=!0,xo=e}};function vp(e,t,r,n,a,s,d,f,h){Cn=!1,xo=null,xp.apply(gp,arguments)}function yp(e,t,r,n,a,s,d,f,h){if(vp.apply(this,arguments),Cn){if(Cn){var w=xo;Cn=!1,xo=null}else throw Error(l(198));go||(go=!0,na=w)}}function kr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function El(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Pl(e){if(kr(e)!==e)throw Error(l(188))}function bp(e){var t=e.alternate;if(!t){if(t=kr(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,n=t;;){var a=r.return;if(a===null)break;var s=a.alternate;if(s===null){if(n=a.return,n!==null){r=n;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===r)return Pl(a),e;if(s===n)return Pl(a),t;s=s.sibling}throw Error(l(188))}if(r.return!==n.return)r=a,n=s;else{for(var d=!1,f=a.child;f;){if(f===r){d=!0,r=a,n=s;break}if(f===n){d=!0,n=a,r=s;break}f=f.sibling}if(!d){for(f=s.child;f;){if(f===r){d=!0,r=s,n=a;break}if(f===n){d=!0,n=s,r=a;break}f=f.sibling}if(!d)throw Error(l(189))}}if(r.alternate!==n)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function Il(e){return e=bp(e),e!==null?Ll(e):null}function Ll(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Ll(e);if(t!==null)return t;e=e.sibling}return null}var zl=c.unstable_scheduleCallback,Ml=c.unstable_cancelCallback,wp=c.unstable_shouldYield,kp=c.unstable_requestPaint,ze=c.unstable_now,jp=c.unstable_getCurrentPriorityLevel,oa=c.unstable_ImmediatePriority,Al=c.unstable_UserBlockingPriority,vo=c.unstable_NormalPriority,Np=c.unstable_LowPriority,Rl=c.unstable_IdlePriority,yo=null,At=null;function Sp(e){if(At&&typeof At.onCommitFiberRoot=="function")try{At.onCommitFiberRoot(yo,e,void 0,(e.current.flags&128)===128)}catch{}}var Nt=Math.clz32?Math.clz32:Ep,Cp=Math.log,Tp=Math.LN2;function Ep(e){return e>>>=0,e===0?32:31-(Cp(e)/Tp|0)|0}var bo=64,wo=4194304;function Tn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ko(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,a=e.suspendedLanes,s=e.pingedLanes,d=r&268435455;if(d!==0){var f=d&~a;f!==0?n=Tn(f):(s&=d,s!==0&&(n=Tn(s)))}else d=r&~a,d!==0?n=Tn(d):s!==0&&(n=Tn(s));if(n===0)return 0;if(t!==0&&t!==n&&(t&a)===0&&(a=n&-n,s=t&-t,a>=s||a===16&&(s&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-Nt(t),a=1<<r,n|=e[r],t&=~a;return n}function Pp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ip(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,a=e.expirationTimes,s=e.pendingLanes;0<s;){var d=31-Nt(s),f=1<<d,h=a[d];h===-1?((f&r)===0||(f&n)!==0)&&(a[d]=Pp(f,t)):h<=t&&(e.expiredLanes|=f),s&=~f}}function ia(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Dl(){var e=bo;return bo<<=1,(bo&4194240)===0&&(bo=64),e}function aa(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function En(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Nt(t),e[t]=r}function Lp(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var a=31-Nt(r),s=1<<a;t[a]=0,n[a]=-1,e[a]=-1,r&=~s}}function sa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-Nt(r),a=1<<n;a&t|e[n]&t&&(e[n]|=t),r&=~a}}var ge=0;function _l(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Ol,la,Fl,Bl,Wl,ca=!1,jo=[],er=null,tr=null,rr=null,Pn=new Map,In=new Map,nr=[],zp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ul(e,t){switch(e){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Pn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":In.delete(t.pointerId)}}function Ln(e,t,r,n,a,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[a]},t!==null&&(t=Vn(t),t!==null&&la(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,a!==null&&t.indexOf(a)===-1&&t.push(a),e)}function Mp(e,t,r,n,a){switch(t){case"focusin":return er=Ln(er,e,t,r,n,a),!0;case"dragenter":return tr=Ln(tr,e,t,r,n,a),!0;case"mouseover":return rr=Ln(rr,e,t,r,n,a),!0;case"pointerover":var s=a.pointerId;return Pn.set(s,Ln(Pn.get(s)||null,e,t,r,n,a)),!0;case"gotpointercapture":return s=a.pointerId,In.set(s,Ln(In.get(s)||null,e,t,r,n,a)),!0}return!1}function Gl(e){var t=jr(e.target);if(t!==null){var r=kr(t);if(r!==null){if(t=r.tag,t===13){if(t=El(r),t!==null){e.blockedOn=t,Wl(e.priority,function(){Fl(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=ua(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Ji=n,r.target.dispatchEvent(n),Ji=null}else return t=Vn(r),t!==null&&la(t),e.blockedOn=r,!1;t.shift()}return!0}function Hl(e,t,r){No(e)&&r.delete(t)}function Ap(){ca=!1,er!==null&&No(er)&&(er=null),tr!==null&&No(tr)&&(tr=null),rr!==null&&No(rr)&&(rr=null),Pn.forEach(Hl),In.forEach(Hl)}function zn(e,t){e.blockedOn===t&&(e.blockedOn=null,ca||(ca=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,Ap)))}function Mn(e){function t(a){return zn(a,e)}if(0<jo.length){zn(jo[0],e);for(var r=1;r<jo.length;r++){var n=jo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(er!==null&&zn(er,e),tr!==null&&zn(tr,e),rr!==null&&zn(rr,e),Pn.forEach(t),In.forEach(t),r=0;r<nr.length;r++)n=nr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<nr.length&&(r=nr[0],r.blockedOn===null);)Gl(r),r.blockedOn===null&&nr.shift()}var Gr=L.ReactCurrentBatchConfig,So=!0;function Rp(e,t,r,n){var a=ge,s=Gr.transition;Gr.transition=null;try{ge=1,da(e,t,r,n)}finally{ge=a,Gr.transition=s}}function Dp(e,t,r,n){var a=ge,s=Gr.transition;Gr.transition=null;try{ge=4,da(e,t,r,n)}finally{ge=a,Gr.transition=s}}function da(e,t,r,n){if(So){var a=ua(e,t,r,n);if(a===null)Ea(e,t,n,Co,r),Ul(e,n);else if(Mp(a,e,t,r,n))n.stopPropagation();else if(Ul(e,n),t&4&&-1<zp.indexOf(e)){for(;a!==null;){var s=Vn(a);if(s!==null&&Ol(s),s=ua(e,t,r,n),s===null&&Ea(e,t,n,Co,r),s===a)break;a=s}a!==null&&n.stopPropagation()}else Ea(e,t,n,null,r)}}var Co=null;function ua(e,t,r,n){if(Co=null,e=Zi(n),e=jr(e),e!==null)if(t=kr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=El(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Co=e,null}function Vl(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jp()){case oa:return 1;case Al:return 4;case vo:case Np:return 16;case Rl:return 536870912;default:return 16}default:return 16}}var or=null,pa=null,To=null;function Yl(){if(To)return To;var e,t=pa,r=t.length,n,a="value"in or?or.value:or.textContent,s=a.length;for(e=0;e<r&&t[e]===a[e];e++);var d=r-e;for(n=1;n<=d&&t[r-n]===a[s-n];n++);return To=a.slice(e,1<n?1-n:void 0)}function Eo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Po(){return!0}function Ql(){return!1}function lt(e){function t(r,n,a,s,d){this._reactName=r,this._targetInst=a,this.type=n,this.nativeEvent=s,this.target=d,this.currentTarget=null;for(var f in e)e.hasOwnProperty(f)&&(r=e[f],this[f]=r?r(s):s[f]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Po:Ql,this.isPropagationStopped=Ql,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=Po)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=Po)},persist:function(){},isPersistent:Po}),t}var Hr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ma=lt(Hr),An=z({},Hr,{view:0,detail:0}),_p=lt(An),fa,ha,Rn,Io=z({},An,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ga,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Rn&&(Rn&&e.type==="mousemove"?(fa=e.screenX-Rn.screenX,ha=e.screenY-Rn.screenY):ha=fa=0,Rn=e),fa)},movementY:function(e){return"movementY"in e?e.movementY:ha}}),$l=lt(Io),Op=z({},Io,{dataTransfer:0}),Fp=lt(Op),Bp=z({},An,{relatedTarget:0}),xa=lt(Bp),Wp=z({},Hr,{animationName:0,elapsedTime:0,pseudoElement:0}),Up=lt(Wp),Gp=z({},Hr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Hp=lt(Gp),Vp=z({},Hr,{data:0}),ql=lt(Vp),Yp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Qp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$p={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$p[e])?!!t[e]:!1}function ga(){return qp}var Kp=z({},An,{key:function(e){if(e.key){var t=Yp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Eo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Qp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ga,charCode:function(e){return e.type==="keypress"?Eo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Eo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Xp=lt(Kp),Jp=z({},Io,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kl=lt(Jp),Zp=z({},An,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ga}),em=lt(Zp),tm=z({},Hr,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=lt(tm),nm=z({},Io,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),om=lt(nm),im=[9,13,27,32],va=j&&"CompositionEvent"in window,Dn=null;j&&"documentMode"in document&&(Dn=document.documentMode);var am=j&&"TextEvent"in window&&!Dn,Xl=j&&(!va||Dn&&8<Dn&&11>=Dn),Jl=" ",Zl=!1;function ec(e,t){switch(e){case"keyup":return im.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function tc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Vr=!1;function sm(e,t){switch(e){case"compositionend":return tc(t);case"keypress":return t.which!==32?null:(Zl=!0,Jl);case"textInput":return e=t.data,e===Jl&&Zl?null:e;default:return null}}function lm(e,t){if(Vr)return e==="compositionend"||!va&&ec(e,t)?(e=Yl(),To=pa=or=null,Vr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Xl&&t.locale!=="ko"?null:t.data;default:return null}}var cm={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rc(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cm[e.type]:t==="textarea"}function nc(e,t,r,n){jl(n),t=Ro(t,"onChange"),0<t.length&&(r=new ma("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var _n=null,On=null;function dm(e){wc(e,0)}function Lo(e){var t=Kr(e);if(wr(t))return e}function um(e,t){if(e==="change")return t}var oc=!1;if(j){var ya;if(j){var ba="oninput"in document;if(!ba){var ic=document.createElement("div");ic.setAttribute("oninput","return;"),ba=typeof ic.oninput=="function"}ya=ba}else ya=!1;oc=ya&&(!document.documentMode||9<document.documentMode)}function ac(){_n&&(_n.detachEvent("onpropertychange",sc),On=_n=null)}function sc(e){if(e.propertyName==="value"&&Lo(On)){var t=[];nc(t,On,e,Zi(e)),Tl(dm,t)}}function pm(e,t,r){e==="focusin"?(ac(),_n=t,On=r,_n.attachEvent("onpropertychange",sc)):e==="focusout"&&ac()}function mm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Lo(On)}function fm(e,t){if(e==="click")return Lo(t)}function hm(e,t){if(e==="input"||e==="change")return Lo(t)}function xm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var St=typeof Object.is=="function"?Object.is:xm;function Fn(e,t){if(St(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var a=r[n];if(!k.call(t,a)||!St(e[a],t[a]))return!1}return!0}function lc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cc(e,t){var r=lc(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=lc(r)}}function dc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?dc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function uc(){for(var e=window,t=jt();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=jt(e.document)}return t}function wa(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function gm(e){var t=uc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&dc(r.ownerDocument.documentElement,r)){if(n!==null&&wa(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var a=r.textContent.length,s=Math.min(n.start,a);n=n.end===void 0?s:Math.min(n.end,a),!e.extend&&s>n&&(a=n,n=s,s=a),a=cc(r,s);var d=cc(r,n);a&&d&&(e.rangeCount!==1||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==d.node||e.focusOffset!==d.offset)&&(t=t.createRange(),t.setStart(a.node,a.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(d.node,d.offset)):(t.setEnd(d.node,d.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var vm=j&&"documentMode"in document&&11>=document.documentMode,Yr=null,ka=null,Bn=null,ja=!1;function pc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ja||Yr==null||Yr!==jt(n)||(n=Yr,"selectionStart"in n&&wa(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Bn&&Fn(Bn,n)||(Bn=n,n=Ro(ka,"onSelect"),0<n.length&&(t=new ma("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Yr)))}function zo(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Qr={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},Na={},mc={};j&&(mc=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function Mo(e){if(Na[e])return Na[e];if(!Qr[e])return e;var t=Qr[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in mc)return Na[e]=t[r];return e}var fc=Mo("animationend"),hc=Mo("animationiteration"),xc=Mo("animationstart"),gc=Mo("transitionend"),vc=new Map,yc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(e,t){vc.set(e,t),p(t,[e])}for(var Sa=0;Sa<yc.length;Sa++){var Ca=yc[Sa],ym=Ca.toLowerCase(),bm=Ca[0].toUpperCase()+Ca.slice(1);ir(ym,"on"+bm)}ir(fc,"onAnimationEnd"),ir(hc,"onAnimationIteration"),ir(xc,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(gc,"onTransitionEnd"),g("onMouseEnter",["mouseout","mouseover"]),g("onMouseLeave",["mouseout","mouseover"]),g("onPointerEnter",["pointerout","pointerover"]),g("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),wm=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wn));function bc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,yp(n,t,void 0,e),e.currentTarget=null}function wc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],a=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var d=n.length-1;0<=d;d--){var f=n[d],h=f.instance,w=f.currentTarget;if(f=f.listener,h!==s&&a.isPropagationStopped())break e;bc(a,f,w),s=h}else for(d=0;d<n.length;d++){if(f=n[d],h=f.instance,w=f.currentTarget,f=f.listener,h!==s&&a.isPropagationStopped())break e;bc(a,f,w),s=h}}}if(go)throw e=na,go=!1,na=null,e}function we(e,t){var r=t[Aa];r===void 0&&(r=t[Aa]=new Set);var n=e+"__bubble";r.has(n)||(kc(t,e,2,!1),r.add(n))}function Ta(e,t,r){var n=0;t&&(n|=4),kc(r,e,n,t)}var Ao="_reactListening"+Math.random().toString(36).slice(2);function Un(e){if(!e[Ao]){e[Ao]=!0,m.forEach(function(r){r!=="selectionchange"&&(wm.has(r)||Ta(r,!1,e),Ta(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ao]||(t[Ao]=!0,Ta("selectionchange",!1,t))}}function kc(e,t,r,n){switch(Vl(t)){case 1:var a=Rp;break;case 4:a=Dp;break;default:a=da}r=a.bind(null,t,r,e),a=void 0,!ra||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(a=!0),n?a!==void 0?e.addEventListener(t,r,{capture:!0,passive:a}):e.addEventListener(t,r,!0):a!==void 0?e.addEventListener(t,r,{passive:a}):e.addEventListener(t,r,!1)}function Ea(e,t,r,n,a){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var d=n.tag;if(d===3||d===4){var f=n.stateNode.containerInfo;if(f===a||f.nodeType===8&&f.parentNode===a)break;if(d===4)for(d=n.return;d!==null;){var h=d.tag;if((h===3||h===4)&&(h=d.stateNode.containerInfo,h===a||h.nodeType===8&&h.parentNode===a))return;d=d.return}for(;f!==null;){if(d=jr(f),d===null)return;if(h=d.tag,h===5||h===6){n=s=d;continue e}f=f.parentNode}}n=n.return}Tl(function(){var w=s,C=Zi(r),T=[];e:{var S=vc.get(e);if(S!==void 0){var M=ma,R=e;switch(e){case"keypress":if(Eo(r)===0)break e;case"keydown":case"keyup":M=Xp;break;case"focusin":R="focus",M=xa;break;case"focusout":R="blur",M=xa;break;case"beforeblur":case"afterblur":M=xa;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":M=$l;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":M=Fp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":M=em;break;case fc:case hc:case xc:M=Up;break;case gc:M=rm;break;case"scroll":M=_p;break;case"wheel":M=om;break;case"copy":case"cut":case"paste":M=Hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":M=Kl}var D=(t&4)!==0,Me=!D&&e==="scroll",y=D?S!==null?S+"Capture":null:S;D=[];for(var x=w,b;x!==null;){b=x;var E=b.stateNode;if(b.tag===5&&E!==null&&(b=E,y!==null&&(E=Nn(x,y),E!=null&&D.push(Gn(x,E,b)))),Me)break;x=x.return}0<D.length&&(S=new M(S,R,null,r,C),T.push({event:S,listeners:D}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",M=e==="mouseout"||e==="pointerout",S&&r!==Ji&&(R=r.relatedTarget||r.fromElement)&&(jr(R)||R[Bt]))break e;if((M||S)&&(S=C.window===C?C:(S=C.ownerDocument)?S.defaultView||S.parentWindow:window,M?(R=r.relatedTarget||r.toElement,M=w,R=R?jr(R):null,R!==null&&(Me=kr(R),R!==Me||R.tag!==5&&R.tag!==6)&&(R=null)):(M=null,R=w),M!==R)){if(D=$l,E="onMouseLeave",y="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(D=Kl,E="onPointerLeave",y="onPointerEnter",x="pointer"),Me=M==null?S:Kr(M),b=R==null?S:Kr(R),S=new D(E,x+"leave",M,r,C),S.target=Me,S.relatedTarget=b,E=null,jr(C)===w&&(D=new D(y,x+"enter",R,r,C),D.target=b,D.relatedTarget=Me,E=D),Me=E,M&&R)t:{for(D=M,y=R,x=0,b=D;b;b=$r(b))x++;for(b=0,E=y;E;E=$r(E))b++;for(;0<x-b;)D=$r(D),x--;for(;0<b-x;)y=$r(y),b--;for(;x--;){if(D===y||y!==null&&D===y.alternate)break t;D=$r(D),y=$r(y)}D=null}else D=null;M!==null&&jc(T,S,M,D,!1),R!==null&&Me!==null&&jc(T,Me,R,D,!0)}}e:{if(S=w?Kr(w):window,M=S.nodeName&&S.nodeName.toLowerCase(),M==="select"||M==="input"&&S.type==="file")var O=um;else if(rc(S))if(oc)O=hm;else{O=mm;var G=pm}else(M=S.nodeName)&&M.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(O=fm);if(O&&(O=O(e,w))){nc(T,O,r,C);break e}G&&G(e,S,w),e==="focusout"&&(G=S._wrapperState)&&G.controlled&&S.type==="number"&&Qi(S,"number",S.value)}switch(G=w?Kr(w):window,e){case"focusin":(rc(G)||G.contentEditable==="true")&&(Yr=G,ka=w,Bn=null);break;case"focusout":Bn=ka=Yr=null;break;case"mousedown":ja=!0;break;case"contextmenu":case"mouseup":case"dragend":ja=!1,pc(T,r,C);break;case"selectionchange":if(vm)break;case"keydown":case"keyup":pc(T,r,C)}var H;if(va)e:{switch(e){case"compositionstart":var $="onCompositionStart";break e;case"compositionend":$="onCompositionEnd";break e;case"compositionupdate":$="onCompositionUpdate";break e}$=void 0}else Vr?ec(e,r)&&($="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&($="onCompositionStart");$&&(Xl&&r.locale!=="ko"&&(Vr||$!=="onCompositionStart"?$==="onCompositionEnd"&&Vr&&(H=Yl()):(or=C,pa="value"in or?or.value:or.textContent,Vr=!0)),G=Ro(w,$),0<G.length&&($=new ql($,e,null,r,C),T.push({event:$,listeners:G}),H?$.data=H:(H=tc(r),H!==null&&($.data=H)))),(H=am?sm(e,r):lm(e,r))&&(w=Ro(w,"onBeforeInput"),0<w.length&&(C=new ql("onBeforeInput","beforeinput",null,r,C),T.push({event:C,listeners:w}),C.data=H))}wc(T,t)})}function Gn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Ro(e,t){for(var r=t+"Capture",n=[];e!==null;){var a=e,s=a.stateNode;a.tag===5&&s!==null&&(a=s,s=Nn(e,r),s!=null&&n.unshift(Gn(e,s,a)),s=Nn(e,t),s!=null&&n.push(Gn(e,s,a))),e=e.return}return n}function $r(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function jc(e,t,r,n,a){for(var s=t._reactName,d=[];r!==null&&r!==n;){var f=r,h=f.alternate,w=f.stateNode;if(h!==null&&h===n)break;f.tag===5&&w!==null&&(f=w,a?(h=Nn(r,s),h!=null&&d.unshift(Gn(r,h,f))):a||(h=Nn(r,s),h!=null&&d.push(Gn(r,h,f)))),r=r.return}d.length!==0&&e.push({event:t,listeners:d})}var km=/\r\n?/g,jm=/\u0000|\uFFFD/g;function Nc(e){return(typeof e=="string"?e:""+e).replace(km,`
`).replace(jm,"")}function Do(e,t,r){if(t=Nc(t),Nc(e)!==t&&r)throw Error(l(425))}function _o(){}var Pa=null,Ia=null;function La(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var za=typeof setTimeout=="function"?setTimeout:void 0,Nm=typeof clearTimeout=="function"?clearTimeout:void 0,Sc=typeof Promise=="function"?Promise:void 0,Sm=typeof queueMicrotask=="function"?queueMicrotask:typeof Sc!="undefined"?function(e){return Sc.resolve(null).then(e).catch(Cm)}:za;function Cm(e){setTimeout(function(){throw e})}function Ma(e,t){var r=t,n=0;do{var a=r.nextSibling;if(e.removeChild(r),a&&a.nodeType===8)if(r=a.data,r==="/$"){if(n===0){e.removeChild(a),Mn(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=a}while(r);Mn(t)}function ar(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Cc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var qr=Math.random().toString(36).slice(2),Rt="__reactFiber$"+qr,Hn="__reactProps$"+qr,Bt="__reactContainer$"+qr,Aa="__reactEvents$"+qr,Tm="__reactListeners$"+qr,Em="__reactHandles$"+qr;function jr(e){var t=e[Rt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Bt]||r[Rt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=Cc(e);e!==null;){if(r=e[Rt])return r;e=Cc(e)}return t}e=r,r=e.parentNode}return null}function Vn(e){return e=e[Rt]||e[Bt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Kr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Oo(e){return e[Hn]||null}var Ra=[],Xr=-1;function sr(e){return{current:e}}function ke(e){0>Xr||(e.current=Ra[Xr],Ra[Xr]=null,Xr--)}function be(e,t){Xr++,Ra[Xr]=e.current,e.current=t}var lr={},Qe=sr(lr),et=sr(!1),Nr=lr;function Jr(e,t){var r=e.type.contextTypes;if(!r)return lr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var a={},s;for(s in r)a[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=a),a}function tt(e){return e=e.childContextTypes,e!=null}function Fo(){ke(et),ke(Qe)}function Tc(e,t,r){if(Qe.current!==lr)throw Error(l(168));be(Qe,t),be(et,r)}function Ec(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var a in n)if(!(a in t))throw Error(l(108,ue(e)||"Unknown",a));return z({},r,n)}function Bo(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||lr,Nr=Qe.current,be(Qe,e),be(et,et.current),!0}function Pc(e,t,r){var n=e.stateNode;if(!n)throw Error(l(169));r?(e=Ec(e,t,Nr),n.__reactInternalMemoizedMergedChildContext=e,ke(et),ke(Qe),be(Qe,e)):ke(et),be(et,r)}var Wt=null,Wo=!1,Da=!1;function Ic(e){Wt===null?Wt=[e]:Wt.push(e)}function Pm(e){Wo=!0,Ic(e)}function cr(){if(!Da&&Wt!==null){Da=!0;var e=0,t=ge;try{var r=Wt;for(ge=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Wt=null,Wo=!1}catch(a){throw Wt!==null&&(Wt=Wt.slice(e+1)),zl(oa,cr),a}finally{ge=t,Da=!1}}return null}var Zr=[],en=0,Uo=null,Go=0,ft=[],ht=0,Sr=null,Ut=1,Gt="";function Cr(e,t){Zr[en++]=Go,Zr[en++]=Uo,Uo=e,Go=t}function Lc(e,t,r){ft[ht++]=Ut,ft[ht++]=Gt,ft[ht++]=Sr,Sr=e;var n=Ut;e=Gt;var a=32-Nt(n)-1;n&=~(1<<a),r+=1;var s=32-Nt(t)+a;if(30<s){var d=a-a%5;s=(n&(1<<d)-1).toString(32),n>>=d,a-=d,Ut=1<<32-Nt(t)+a|r<<a|n,Gt=s+e}else Ut=1<<s|r<<a|n,Gt=e}function _a(e){e.return!==null&&(Cr(e,1),Lc(e,1,0))}function Oa(e){for(;e===Uo;)Uo=Zr[--en],Zr[en]=null,Go=Zr[--en],Zr[en]=null;for(;e===Sr;)Sr=ft[--ht],ft[ht]=null,Gt=ft[--ht],ft[ht]=null,Ut=ft[--ht],ft[ht]=null}var ct=null,dt=null,Se=!1,Ct=null;function zc(e,t){var r=yt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Mc(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,ct=e,dt=ar(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,ct=e,dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=Sr!==null?{id:Ut,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=yt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,ct=e,dt=null,!0):!1;default:return!1}}function Fa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(Se){var t=dt;if(t){var r=t;if(!Mc(e,t)){if(Fa(e))throw Error(l(418));t=ar(r.nextSibling);var n=ct;t&&Mc(e,t)?zc(n,r):(e.flags=e.flags&-4097|2,Se=!1,ct=e)}}else{if(Fa(e))throw Error(l(418));e.flags=e.flags&-4097|2,Se=!1,ct=e}}}function Ac(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;ct=e}function Ho(e){if(e!==ct)return!1;if(!Se)return Ac(e),Se=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!La(e.type,e.memoizedProps)),t&&(t=dt)){if(Fa(e))throw Rc(),Error(l(418));for(;t;)zc(e,t),t=ar(t.nextSibling)}if(Ac(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){dt=ar(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}dt=null}}else dt=ct?ar(e.stateNode.nextSibling):null;return!0}function Rc(){for(var e=dt;e;)e=ar(e.nextSibling)}function tn(){dt=ct=null,Se=!1}function Wa(e){Ct===null?Ct=[e]:Ct.push(e)}var Im=L.ReactCurrentBatchConfig;function Yn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var n=r.stateNode}if(!n)throw Error(l(147,e));var a=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(d){var f=a.refs;d===null?delete f[s]:f[s]=d},t._stringRef=s,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function Vo(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Dc(e){var t=e._init;return t(e._payload)}function _c(e){function t(y,x){if(e){var b=y.deletions;b===null?(y.deletions=[x],y.flags|=16):b.push(x)}}function r(y,x){if(!e)return null;for(;x!==null;)t(y,x),x=x.sibling;return null}function n(y,x){for(y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function a(y,x){return y=gr(y,x),y.index=0,y.sibling=null,y}function s(y,x,b){return y.index=b,e?(b=y.alternate,b!==null?(b=b.index,b<x?(y.flags|=2,x):b):(y.flags|=2,x)):(y.flags|=1048576,x)}function d(y){return e&&y.alternate===null&&(y.flags|=2),y}function f(y,x,b,E){return x===null||x.tag!==6?(x=zs(b,y.mode,E),x.return=y,x):(x=a(x,b),x.return=y,x)}function h(y,x,b,E){var O=b.type;return O===I?C(y,x,b.props.children,E,b.key):x!==null&&(x.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ye&&Dc(O)===x.type)?(E=a(x,b.props),E.ref=Yn(y,x,b),E.return=y,E):(E=hi(b.type,b.key,b.props,null,y.mode,E),E.ref=Yn(y,x,b),E.return=y,E)}function w(y,x,b,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=Ms(b,y.mode,E),x.return=y,x):(x=a(x,b.children||[]),x.return=y,x)}function C(y,x,b,E,O){return x===null||x.tag!==7?(x=Ar(b,y.mode,E,O),x.return=y,x):(x=a(x,b),x.return=y,x)}function T(y,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=zs(""+x,y.mode,b),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case X:return b=hi(x.type,x.key,x.props,null,y.mode,b),b.ref=Yn(y,null,x),b.return=y,b;case U:return x=Ms(x,y.mode,b),x.return=y,x;case Ye:var E=x._init;return T(y,E(x._payload),b)}if(wn(x)||F(x))return x=Ar(x,y.mode,b,null),x.return=y,x;Vo(y,x)}return null}function S(y,x,b,E){var O=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return O!==null?null:f(y,x,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case X:return b.key===O?h(y,x,b,E):null;case U:return b.key===O?w(y,x,b,E):null;case Ye:return O=b._init,S(y,x,O(b._payload),E)}if(wn(b)||F(b))return O!==null?null:C(y,x,b,E,null);Vo(y,b)}return null}function M(y,x,b,E,O){if(typeof E=="string"&&E!==""||typeof E=="number")return y=y.get(b)||null,f(x,y,""+E,O);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case X:return y=y.get(E.key===null?b:E.key)||null,h(x,y,E,O);case U:return y=y.get(E.key===null?b:E.key)||null,w(x,y,E,O);case Ye:var G=E._init;return M(y,x,b,G(E._payload),O)}if(wn(E)||F(E))return y=y.get(b)||null,C(x,y,E,O,null);Vo(x,E)}return null}function R(y,x,b,E){for(var O=null,G=null,H=x,$=x=0,Ue=null;H!==null&&$<b.length;$++){H.index>$?(Ue=H,H=null):Ue=H.sibling;var me=S(y,H,b[$],E);if(me===null){H===null&&(H=Ue);break}e&&H&&me.alternate===null&&t(y,H),x=s(me,x,$),G===null?O=me:G.sibling=me,G=me,H=Ue}if($===b.length)return r(y,H),Se&&Cr(y,$),O;if(H===null){for(;$<b.length;$++)H=T(y,b[$],E),H!==null&&(x=s(H,x,$),G===null?O=H:G.sibling=H,G=H);return Se&&Cr(y,$),O}for(H=n(y,H);$<b.length;$++)Ue=M(H,y,$,b[$],E),Ue!==null&&(e&&Ue.alternate!==null&&H.delete(Ue.key===null?$:Ue.key),x=s(Ue,x,$),G===null?O=Ue:G.sibling=Ue,G=Ue);return e&&H.forEach(function(vr){return t(y,vr)}),Se&&Cr(y,$),O}function D(y,x,b,E){var O=F(b);if(typeof O!="function")throw Error(l(150));if(b=O.call(b),b==null)throw Error(l(151));for(var G=O=null,H=x,$=x=0,Ue=null,me=b.next();H!==null&&!me.done;$++,me=b.next()){H.index>$?(Ue=H,H=null):Ue=H.sibling;var vr=S(y,H,me.value,E);if(vr===null){H===null&&(H=Ue);break}e&&H&&vr.alternate===null&&t(y,H),x=s(vr,x,$),G===null?O=vr:G.sibling=vr,G=vr,H=Ue}if(me.done)return r(y,H),Se&&Cr(y,$),O;if(H===null){for(;!me.done;$++,me=b.next())me=T(y,me.value,E),me!==null&&(x=s(me,x,$),G===null?O=me:G.sibling=me,G=me);return Se&&Cr(y,$),O}for(H=n(y,H);!me.done;$++,me=b.next())me=M(H,y,$,me.value,E),me!==null&&(e&&me.alternate!==null&&H.delete(me.key===null?$:me.key),x=s(me,x,$),G===null?O=me:G.sibling=me,G=me);return e&&H.forEach(function(df){return t(y,df)}),Se&&Cr(y,$),O}function Me(y,x,b,E){if(typeof b=="object"&&b!==null&&b.type===I&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case X:e:{for(var O=b.key,G=x;G!==null;){if(G.key===O){if(O=b.type,O===I){if(G.tag===7){r(y,G.sibling),x=a(G,b.props.children),x.return=y,y=x;break e}}else if(G.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ye&&Dc(O)===G.type){r(y,G.sibling),x=a(G,b.props),x.ref=Yn(y,G,b),x.return=y,y=x;break e}r(y,G);break}else t(y,G);G=G.sibling}b.type===I?(x=Ar(b.props.children,y.mode,E,b.key),x.return=y,y=x):(E=hi(b.type,b.key,b.props,null,y.mode,E),E.ref=Yn(y,x,b),E.return=y,y=E)}return d(y);case U:e:{for(G=b.key;x!==null;){if(x.key===G)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){r(y,x.sibling),x=a(x,b.children||[]),x.return=y,y=x;break e}else{r(y,x);break}else t(y,x);x=x.sibling}x=Ms(b,y.mode,E),x.return=y,y=x}return d(y);case Ye:return G=b._init,Me(y,x,G(b._payload),E)}if(wn(b))return R(y,x,b,E);if(F(b))return D(y,x,b,E);Vo(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(r(y,x.sibling),x=a(x,b),x.return=y,y=x):(r(y,x),x=zs(b,y.mode,E),x.return=y,y=x),d(y)):r(y,x)}return Me}var rn=_c(!0),Oc=_c(!1),Yo=sr(null),Qo=null,nn=null,Ua=null;function Ga(){Ua=nn=Qo=null}function Ha(e){var t=Yo.current;ke(Yo),e._currentValue=t}function Va(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function on(e,t){Qo=e,Ua=nn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(rt=!0),e.firstContext=null)}function xt(e){var t=e._currentValue;if(Ua!==e)if(e={context:e,memoizedValue:t,next:null},nn===null){if(Qo===null)throw Error(l(308));nn=e,Qo.dependencies={lanes:0,firstContext:e}}else nn=nn.next=e;return t}var Tr=null;function Ya(e){Tr===null?Tr=[e]:Tr.push(e)}function Fc(e,t,r,n){var a=t.interleaved;return a===null?(r.next=r,Ya(t)):(r.next=a.next,a.next=r),t.interleaved=r,Ht(e,n)}function Ht(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var dr=!1;function Qa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Vt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ur(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(pe&2)!==0){var a=n.pending;return a===null?t.next=t:(t.next=a.next,a.next=t),n.pending=t,Ht(e,r)}return a=n.interleaved,a===null?(t.next=t,Ya(n)):(t.next=a.next,a.next=t),n.interleaved=t,Ht(e,r)}function $o(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,sa(e,r)}}function Wc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var a=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var d={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?a=s=d:s=s.next=d,r=r.next}while(r!==null);s===null?a=s=t:s=s.next=t}else a=s=t;r={baseState:n.baseState,firstBaseUpdate:a,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function qo(e,t,r,n){var a=e.updateQueue;dr=!1;var s=a.firstBaseUpdate,d=a.lastBaseUpdate,f=a.shared.pending;if(f!==null){a.shared.pending=null;var h=f,w=h.next;h.next=null,d===null?s=w:d.next=w,d=h;var C=e.alternate;C!==null&&(C=C.updateQueue,f=C.lastBaseUpdate,f!==d&&(f===null?C.firstBaseUpdate=w:f.next=w,C.lastBaseUpdate=h))}if(s!==null){var T=a.baseState;d=0,C=w=h=null,f=s;do{var S=f.lane,M=f.eventTime;if((n&S)===S){C!==null&&(C=C.next={eventTime:M,lane:0,tag:f.tag,payload:f.payload,callback:f.callback,next:null});e:{var R=e,D=f;switch(S=t,M=r,D.tag){case 1:if(R=D.payload,typeof R=="function"){T=R.call(M,T,S);break e}T=R;break e;case 3:R.flags=R.flags&-65537|128;case 0:if(R=D.payload,S=typeof R=="function"?R.call(M,T,S):R,S==null)break e;T=z({},T,S);break e;case 2:dr=!0}}f.callback!==null&&f.lane!==0&&(e.flags|=64,S=a.effects,S===null?a.effects=[f]:S.push(f))}else M={eventTime:M,lane:S,tag:f.tag,payload:f.payload,callback:f.callback,next:null},C===null?(w=C=M,h=T):C=C.next=M,d|=S;if(f=f.next,f===null){if(f=a.shared.pending,f===null)break;S=f,f=S.next,S.next=null,a.lastBaseUpdate=S,a.shared.pending=null}}while(!0);if(C===null&&(h=T),a.baseState=h,a.firstBaseUpdate=w,a.lastBaseUpdate=C,t=a.shared.interleaved,t!==null){a=t;do d|=a.lane,a=a.next;while(a!==t)}else s===null&&(a.shared.lanes=0);Ir|=d,e.lanes=d,e.memoizedState=T}}function Uc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],a=n.callback;if(a!==null){if(n.callback=null,n=r,typeof a!="function")throw Error(l(191,a));a.call(n)}}}var Qn={},Dt=sr(Qn),$n=sr(Qn),qn=sr(Qn);function Er(e){if(e===Qn)throw Error(l(174));return e}function $a(e,t){switch(be(qn,t),be($n,e),be(Dt,Qn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:qi(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=qi(t,e)}ke(Dt),be(Dt,t)}function an(){ke(Dt),ke($n),ke(qn)}function Gc(e){Er(qn.current);var t=Er(Dt.current),r=qi(t,e.type);t!==r&&(be($n,e),be(Dt,r))}function qa(e){$n.current===e&&(ke(Dt),ke($n))}var Te=sr(0);function Ko(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ka=[];function Xa(){for(var e=0;e<Ka.length;e++)Ka[e]._workInProgressVersionPrimary=null;Ka.length=0}var Xo=L.ReactCurrentDispatcher,Ja=L.ReactCurrentBatchConfig,Pr=0,Ee=null,_e=null,Be=null,Jo=!1,Kn=!1,Xn=0,Lm=0;function $e(){throw Error(l(321))}function Za(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!St(e[r],t[r]))return!1;return!0}function es(e,t,r,n,a,s){if(Pr=s,Ee=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Xo.current=e===null||e.memoizedState===null?Rm:Dm,e=r(n,a),Kn){s=0;do{if(Kn=!1,Xn=0,25<=s)throw Error(l(301));s+=1,Be=_e=null,t.updateQueue=null,Xo.current=_m,e=r(n,a)}while(Kn)}if(Xo.current=ti,t=_e!==null&&_e.next!==null,Pr=0,Be=_e=Ee=null,Jo=!1,t)throw Error(l(300));return e}function ts(){var e=Xn!==0;return Xn=0,e}function _t(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Be===null?Ee.memoizedState=Be=e:Be=Be.next=e,Be}function gt(){if(_e===null){var e=Ee.alternate;e=e!==null?e.memoizedState:null}else e=_e.next;var t=Be===null?Ee.memoizedState:Be.next;if(t!==null)Be=t,_e=e;else{if(e===null)throw Error(l(310));_e=e,e={memoizedState:_e.memoizedState,baseState:_e.baseState,baseQueue:_e.baseQueue,queue:_e.queue,next:null},Be===null?Ee.memoizedState=Be=e:Be=Be.next=e}return Be}function Jn(e,t){return typeof t=="function"?t(e):t}function rs(e){var t=gt(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var n=_e,a=n.baseQueue,s=r.pending;if(s!==null){if(a!==null){var d=a.next;a.next=s.next,s.next=d}n.baseQueue=a=s,r.pending=null}if(a!==null){s=a.next,n=n.baseState;var f=d=null,h=null,w=s;do{var C=w.lane;if((Pr&C)===C)h!==null&&(h=h.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),n=w.hasEagerState?w.eagerState:e(n,w.action);else{var T={lane:C,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};h===null?(f=h=T,d=n):h=h.next=T,Ee.lanes|=C,Ir|=C}w=w.next}while(w!==null&&w!==s);h===null?d=n:h.next=f,St(n,t.memoizedState)||(rt=!0),t.memoizedState=n,t.baseState=d,t.baseQueue=h,r.lastRenderedState=n}if(e=r.interleaved,e!==null){a=e;do s=a.lane,Ee.lanes|=s,Ir|=s,a=a.next;while(a!==e)}else a===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function ns(e){var t=gt(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var n=r.dispatch,a=r.pending,s=t.memoizedState;if(a!==null){r.pending=null;var d=a=a.next;do s=e(s,d.action),d=d.next;while(d!==a);St(s,t.memoizedState)||(rt=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function Hc(){}function Vc(e,t){var r=Ee,n=gt(),a=t(),s=!St(n.memoizedState,a);if(s&&(n.memoizedState=a,rt=!0),n=n.queue,os($c.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||Be!==null&&Be.memoizedState.tag&1){if(r.flags|=2048,Zn(9,Qc.bind(null,r,n,a,t),void 0,null),We===null)throw Error(l(349));(Pr&30)!==0||Yc(r,t,a)}return a}function Yc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Qc(e,t,r,n){t.value=r,t.getSnapshot=n,qc(t)&&Kc(e)}function $c(e,t,r){return r(function(){qc(t)&&Kc(e)})}function qc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!St(e,r)}catch{return!0}}function Kc(e){var t=Ht(e,1);t!==null&&It(t,e,1,-1)}function Xc(e){var t=_t();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Jn,lastRenderedState:e},t.queue=e,e=e.dispatch=Am.bind(null,Ee,e),[t.memoizedState,e]}function Zn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=Ee.updateQueue,t===null?(t={lastEffect:null,stores:null},Ee.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function Jc(){return gt().memoizedState}function Zo(e,t,r,n){var a=_t();Ee.flags|=e,a.memoizedState=Zn(1|t,r,void 0,n===void 0?null:n)}function ei(e,t,r,n){var a=gt();n=n===void 0?null:n;var s=void 0;if(_e!==null){var d=_e.memoizedState;if(s=d.destroy,n!==null&&Za(n,d.deps)){a.memoizedState=Zn(t,r,s,n);return}}Ee.flags|=e,a.memoizedState=Zn(1|t,r,s,n)}function Zc(e,t){return Zo(8390656,8,e,t)}function os(e,t){return ei(2048,8,e,t)}function ed(e,t){return ei(4,2,e,t)}function td(e,t){return ei(4,4,e,t)}function rd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function nd(e,t,r){return r=r!=null?r.concat([e]):null,ei(4,4,rd.bind(null,t,e),r)}function is(){}function od(e,t){var r=gt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Za(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function id(e,t){var r=gt();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Za(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function ad(e,t,r){return(Pr&21)===0?(e.baseState&&(e.baseState=!1,rt=!0),e.memoizedState=r):(St(r,t)||(r=Dl(),Ee.lanes|=r,Ir|=r,e.baseState=!0),t)}function zm(e,t){var r=ge;ge=r!==0&&4>r?r:4,e(!0);var n=Ja.transition;Ja.transition={};try{e(!1),t()}finally{ge=r,Ja.transition=n}}function sd(){return gt().memoizedState}function Mm(e,t,r){var n=hr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},ld(e))cd(t,r);else if(r=Fc(e,t,r,n),r!==null){var a=Ze();It(r,e,n,a),dd(r,t,n)}}function Am(e,t,r){var n=hr(e),a={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(ld(e))cd(t,a);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var d=t.lastRenderedState,f=s(d,r);if(a.hasEagerState=!0,a.eagerState=f,St(f,d)){var h=t.interleaved;h===null?(a.next=a,Ya(t)):(a.next=h.next,h.next=a),t.interleaved=a;return}}catch{}finally{}r=Fc(e,t,a,n),r!==null&&(a=Ze(),It(r,e,n,a),dd(r,t,n))}}function ld(e){var t=e.alternate;return e===Ee||t!==null&&t===Ee}function cd(e,t){Kn=Jo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function dd(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,sa(e,r)}}var ti={readContext:xt,useCallback:$e,useContext:$e,useEffect:$e,useImperativeHandle:$e,useInsertionEffect:$e,useLayoutEffect:$e,useMemo:$e,useReducer:$e,useRef:$e,useState:$e,useDebugValue:$e,useDeferredValue:$e,useTransition:$e,useMutableSource:$e,useSyncExternalStore:$e,useId:$e,unstable_isNewReconciler:!1},Rm={readContext:xt,useCallback:function(e,t){return _t().memoizedState=[e,t===void 0?null:t],e},useContext:xt,useEffect:Zc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,Zo(4194308,4,rd.bind(null,t,e),r)},useLayoutEffect:function(e,t){return Zo(4194308,4,e,t)},useInsertionEffect:function(e,t){return Zo(4,2,e,t)},useMemo:function(e,t){var r=_t();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=_t();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Mm.bind(null,Ee,e),[n.memoizedState,e]},useRef:function(e){var t=_t();return e={current:e},t.memoizedState=e},useState:Xc,useDebugValue:is,useDeferredValue:function(e){return _t().memoizedState=e},useTransition:function(){var e=Xc(!1),t=e[0];return e=zm.bind(null,e[1]),_t().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=Ee,a=_t();if(Se){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),We===null)throw Error(l(349));(Pr&30)!==0||Yc(n,t,r)}a.memoizedState=r;var s={value:r,getSnapshot:t};return a.queue=s,Zc($c.bind(null,n,s,e),[e]),n.flags|=2048,Zn(9,Qc.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=_t(),t=We.identifierPrefix;if(Se){var r=Gt,n=Ut;r=(n&~(1<<32-Nt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=Xn++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Lm++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Dm={readContext:xt,useCallback:od,useContext:xt,useEffect:os,useImperativeHandle:nd,useInsertionEffect:ed,useLayoutEffect:td,useMemo:id,useReducer:rs,useRef:Jc,useState:function(){return rs(Jn)},useDebugValue:is,useDeferredValue:function(e){var t=gt();return ad(t,_e.memoizedState,e)},useTransition:function(){var e=rs(Jn)[0],t=gt().memoizedState;return[e,t]},useMutableSource:Hc,useSyncExternalStore:Vc,useId:sd,unstable_isNewReconciler:!1},_m={readContext:xt,useCallback:od,useContext:xt,useEffect:os,useImperativeHandle:nd,useInsertionEffect:ed,useLayoutEffect:td,useMemo:id,useReducer:ns,useRef:Jc,useState:function(){return ns(Jn)},useDebugValue:is,useDeferredValue:function(e){var t=gt();return _e===null?t.memoizedState=e:ad(t,_e.memoizedState,e)},useTransition:function(){var e=ns(Jn)[0],t=gt().memoizedState;return[e,t]},useMutableSource:Hc,useSyncExternalStore:Vc,useId:sd,unstable_isNewReconciler:!1};function Tt(e,t){if(e&&e.defaultProps){t=z({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function as(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:z({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var ri={isMounted:function(e){return(e=e._reactInternals)?kr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Ze(),a=hr(e),s=Vt(n,a);s.payload=t,r!=null&&(s.callback=r),t=ur(e,s,a),t!==null&&(It(t,e,a,n),$o(t,e,a))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Ze(),a=hr(e),s=Vt(n,a);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=ur(e,s,a),t!==null&&(It(t,e,a,n),$o(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Ze(),n=hr(e),a=Vt(r,n);a.tag=2,t!=null&&(a.callback=t),t=ur(e,a,n),t!==null&&(It(t,e,n,r),$o(t,e,n))}};function ud(e,t,r,n,a,s,d){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,d):t.prototype&&t.prototype.isPureReactComponent?!Fn(r,n)||!Fn(a,s):!0}function pd(e,t,r){var n=!1,a=lr,s=t.contextType;return typeof s=="object"&&s!==null?s=xt(s):(a=tt(t)?Nr:Qe.current,n=t.contextTypes,s=(n=n!=null)?Jr(e,a):lr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ri,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=s),t}function md(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&ri.enqueueReplaceState(t,t.state,null)}function ss(e,t,r,n){var a=e.stateNode;a.props=r,a.state=e.memoizedState,a.refs={},Qa(e);var s=t.contextType;typeof s=="object"&&s!==null?a.context=xt(s):(s=tt(t)?Nr:Qe.current,a.context=Jr(e,s)),a.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(as(e,t,s,r),a.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof a.getSnapshotBeforeUpdate=="function"||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(t=a.state,typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount(),t!==a.state&&ri.enqueueReplaceState(a,a.state,null),qo(e,r,a,n),a.state=e.memoizedState),typeof a.componentDidMount=="function"&&(e.flags|=4194308)}function sn(e,t){try{var r="",n=t;do r+=ae(n),n=n.return;while(n);var a=r}catch(s){a=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:a,digest:null}}function ls(e,t,r){return{value:e,source:null,stack:r!=null?r:null,digest:t!=null?t:null}}function cs(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Om=typeof WeakMap=="function"?WeakMap:Map;function fd(e,t,r){r=Vt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){ci||(ci=!0,Ns=n),cs(e,t)},r}function hd(e,t,r){r=Vt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var a=t.value;r.payload=function(){return n(a)},r.callback=function(){cs(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){cs(e,t),typeof n!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var d=t.stack;this.componentDidCatch(t.value,{componentStack:d!==null?d:""})}),r}function xd(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Om;var a=new Set;n.set(t,a)}else a=n.get(t),a===void 0&&(a=new Set,n.set(t,a));a.has(r)||(a.add(r),e=Jm.bind(null,e,t,r),t.then(e,e))}function gd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function vd(e,t,r,n,a){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Vt(-1,1),t.tag=2,ur(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var Fm=L.ReactCurrentOwner,rt=!1;function Je(e,t,r,n){t.child=e===null?Oc(t,null,r,n):rn(t,e.child,r,n)}function yd(e,t,r,n,a){r=r.render;var s=t.ref;return on(t,a),n=es(e,t,r,n,s,a),r=ts(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Yt(e,t,a)):(Se&&r&&_a(t),t.flags|=1,Je(e,t,n,a),t.child)}function bd(e,t,r,n,a){if(e===null){var s=r.type;return typeof s=="function"&&!Ls(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,wd(e,t,s,n,a)):(e=hi(r.type,null,n,t,t.mode,a),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&a)===0){var d=s.memoizedProps;if(r=r.compare,r=r!==null?r:Fn,r(d,n)&&e.ref===t.ref)return Yt(e,t,a)}return t.flags|=1,e=gr(s,n),e.ref=t.ref,e.return=t,t.child=e}function wd(e,t,r,n,a){if(e!==null){var s=e.memoizedProps;if(Fn(s,n)&&e.ref===t.ref)if(rt=!1,t.pendingProps=n=s,(e.lanes&a)!==0)(e.flags&131072)!==0&&(rt=!0);else return t.lanes=e.lanes,Yt(e,t,a)}return ds(e,t,r,n,a)}function kd(e,t,r){var n=t.pendingProps,a=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},be(cn,ut),ut|=r;else{if((r&1073741824)===0)return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,be(cn,ut),ut|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,be(cn,ut),ut|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,be(cn,ut),ut|=n;return Je(e,t,a,r),t.child}function jd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function ds(e,t,r,n,a){var s=tt(r)?Nr:Qe.current;return s=Jr(t,s),on(t,a),r=es(e,t,r,n,s,a),n=ts(),e!==null&&!rt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Yt(e,t,a)):(Se&&n&&_a(t),t.flags|=1,Je(e,t,r,a),t.child)}function Nd(e,t,r,n,a){if(tt(r)){var s=!0;Bo(t)}else s=!1;if(on(t,a),t.stateNode===null)oi(e,t),pd(t,r,n),ss(t,r,n,a),n=!0;else if(e===null){var d=t.stateNode,f=t.memoizedProps;d.props=f;var h=d.context,w=r.contextType;typeof w=="object"&&w!==null?w=xt(w):(w=tt(r)?Nr:Qe.current,w=Jr(t,w));var C=r.getDerivedStateFromProps,T=typeof C=="function"||typeof d.getSnapshotBeforeUpdate=="function";T||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(f!==n||h!==w)&&md(t,d,n,w),dr=!1;var S=t.memoizedState;d.state=S,qo(t,n,d,a),h=t.memoizedState,f!==n||S!==h||et.current||dr?(typeof C=="function"&&(as(t,r,C,n),h=t.memoizedState),(f=dr||ud(t,r,f,n,S,h,w))?(T||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(t.flags|=4194308)):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=h),d.props=n,d.state=h,d.context=w,n=f):(typeof d.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{d=t.stateNode,Bc(e,t),f=t.memoizedProps,w=t.type===t.elementType?f:Tt(t.type,f),d.props=w,T=t.pendingProps,S=d.context,h=r.contextType,typeof h=="object"&&h!==null?h=xt(h):(h=tt(r)?Nr:Qe.current,h=Jr(t,h));var M=r.getDerivedStateFromProps;(C=typeof M=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(f!==T||S!==h)&&md(t,d,n,h),dr=!1,S=t.memoizedState,d.state=S,qo(t,n,d,a);var R=t.memoizedState;f!==T||S!==R||et.current||dr?(typeof M=="function"&&(as(t,r,M,n),R=t.memoizedState),(w=dr||ud(t,r,w,n,S,R,h)||!1)?(C||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(n,R,h),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(n,R,h)),typeof d.componentDidUpdate=="function"&&(t.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof d.componentDidUpdate!="function"||f===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=R),d.props=n,d.state=R,d.context=h,n=w):(typeof d.componentDidUpdate!="function"||f===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||f===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),n=!1)}return us(e,t,r,n,s,a)}function us(e,t,r,n,a,s){jd(e,t);var d=(t.flags&128)!==0;if(!n&&!d)return a&&Pc(t,r,!1),Yt(e,t,s);n=t.stateNode,Fm.current=t;var f=d&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&d?(t.child=rn(t,e.child,null,s),t.child=rn(t,null,f,s)):Je(e,t,f,s),t.memoizedState=n.state,a&&Pc(t,r,!0),t.child}function Sd(e){var t=e.stateNode;t.pendingContext?Tc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Tc(e,t.context,!1),$a(e,t.containerInfo)}function Cd(e,t,r,n,a){return tn(),Wa(a),t.flags|=256,Je(e,t,r,n),t.child}var ps={dehydrated:null,treeContext:null,retryLane:0};function ms(e){return{baseLanes:e,cachePool:null,transitions:null}}function Td(e,t,r){var n=t.pendingProps,a=Te.current,s=!1,d=(t.flags&128)!==0,f;if((f=d)||(f=e!==null&&e.memoizedState===null?!1:(a&2)!==0),f?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(a|=1),be(Te,a&1),e===null)return Ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(d=n.children,e=n.fallback,s?(n=t.mode,s=t.child,d={mode:"hidden",children:d},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=d):s=xi(d,n,0,null),e=Ar(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ms(r),t.memoizedState=ps,e):fs(t,d));if(a=e.memoizedState,a!==null&&(f=a.dehydrated,f!==null))return Bm(e,t,d,n,f,a,r);if(s){s=n.fallback,d=t.mode,a=e.child,f=a.sibling;var h={mode:"hidden",children:n.children};return(d&1)===0&&t.child!==a?(n=t.child,n.childLanes=0,n.pendingProps=h,t.deletions=null):(n=gr(a,h),n.subtreeFlags=a.subtreeFlags&14680064),f!==null?s=gr(f,s):(s=Ar(s,d,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,d=e.child.memoizedState,d=d===null?ms(r):{baseLanes:d.baseLanes|r,cachePool:null,transitions:d.transitions},s.memoizedState=d,s.childLanes=e.childLanes&~r,t.memoizedState=ps,n}return s=e.child,e=s.sibling,n=gr(s,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function fs(e,t){return t=xi({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function ni(e,t,r,n){return n!==null&&Wa(n),rn(t,e.child,null,r),e=fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Bm(e,t,r,n,a,s,d){if(r)return t.flags&256?(t.flags&=-257,n=ls(Error(l(422))),ni(e,t,d,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,a=t.mode,n=xi({mode:"visible",children:n.children},a,0,null),s=Ar(s,a,d,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,(t.mode&1)!==0&&rn(t,e.child,null,d),t.child.memoizedState=ms(d),t.memoizedState=ps,s);if((t.mode&1)===0)return ni(e,t,d,null);if(a.data==="$!"){if(n=a.nextSibling&&a.nextSibling.dataset,n)var f=n.dgst;return n=f,s=Error(l(419)),n=ls(s,n,void 0),ni(e,t,d,n)}if(f=(d&e.childLanes)!==0,rt||f){if(n=We,n!==null){switch(d&-d){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}a=(a&(n.suspendedLanes|d))!==0?0:a,a!==0&&a!==s.retryLane&&(s.retryLane=a,Ht(e,a),It(n,e,a,-1))}return Is(),n=ls(Error(l(421))),ni(e,t,d,n)}return a.data==="$?"?(t.flags|=128,t.child=e.child,t=Zm.bind(null,e),a._reactRetry=t,null):(e=s.treeContext,dt=ar(a.nextSibling),ct=t,Se=!0,Ct=null,e!==null&&(ft[ht++]=Ut,ft[ht++]=Gt,ft[ht++]=Sr,Ut=e.id,Gt=e.overflow,Sr=t),t=fs(t,n.children),t.flags|=4096,t)}function Ed(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Va(e.return,t,r)}function hs(e,t,r,n,a){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:a}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=a)}function Pd(e,t,r){var n=t.pendingProps,a=n.revealOrder,s=n.tail;if(Je(e,t,n.children,r),n=Te.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Ed(e,r,t);else if(e.tag===19)Ed(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(be(Te,n),(t.mode&1)===0)t.memoizedState=null;else switch(a){case"forwards":for(r=t.child,a=null;r!==null;)e=r.alternate,e!==null&&Ko(e)===null&&(a=r),r=r.sibling;r=a,r===null?(a=t.child,t.child=null):(a=r.sibling,r.sibling=null),hs(t,!1,a,r,s);break;case"backwards":for(r=null,a=t.child,t.child=null;a!==null;){if(e=a.alternate,e!==null&&Ko(e)===null){t.child=a;break}e=a.sibling,a.sibling=r,r=a,a=e}hs(t,!0,r,null,s);break;case"together":hs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function oi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Yt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Ir|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=gr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=gr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Wm(e,t,r){switch(t.tag){case 3:Sd(t),tn();break;case 5:Gc(t);break;case 1:tt(t.type)&&Bo(t);break;case 4:$a(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,a=t.memoizedProps.value;be(Yo,n._currentValue),n._currentValue=a;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(be(Te,Te.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Td(e,t,r):(be(Te,Te.current&1),e=Yt(e,t,r),e!==null?e.sibling:null);be(Te,Te.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Pd(e,t,r);t.flags|=128}if(a=t.memoizedState,a!==null&&(a.rendering=null,a.tail=null,a.lastEffect=null),be(Te,Te.current),n)break;return null;case 22:case 23:return t.lanes=0,kd(e,t,r)}return Yt(e,t,r)}var Id,xs,Ld,zd;Id=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},xs=function(){},Ld=function(e,t,r,n){var a=e.memoizedProps;if(a!==n){e=t.stateNode,Er(Dt.current);var s=null;switch(r){case"input":a=Vi(e,a),n=Vi(e,n),s=[];break;case"select":a=z({},a,{value:void 0}),n=z({},n,{value:void 0}),s=[];break;case"textarea":a=$i(e,a),n=$i(e,n),s=[];break;default:typeof a.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=_o)}Ki(r,n);var d;r=null;for(w in a)if(!n.hasOwnProperty(w)&&a.hasOwnProperty(w)&&a[w]!=null)if(w==="style"){var f=a[w];for(d in f)f.hasOwnProperty(d)&&(r||(r={}),r[d]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(u.hasOwnProperty(w)?s||(s=[]):(s=s||[]).push(w,null));for(w in n){var h=n[w];if(f=a!=null?a[w]:void 0,n.hasOwnProperty(w)&&h!==f&&(h!=null||f!=null))if(w==="style")if(f){for(d in f)!f.hasOwnProperty(d)||h&&h.hasOwnProperty(d)||(r||(r={}),r[d]="");for(d in h)h.hasOwnProperty(d)&&f[d]!==h[d]&&(r||(r={}),r[d]=h[d])}else r||(s||(s=[]),s.push(w,r)),r=h;else w==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,f=f?f.__html:void 0,h!=null&&f!==h&&(s=s||[]).push(w,h)):w==="children"?typeof h!="string"&&typeof h!="number"||(s=s||[]).push(w,""+h):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(u.hasOwnProperty(w)?(h!=null&&w==="onScroll"&&we("scroll",e),s||f===h||(s=[])):(s=s||[]).push(w,h))}r&&(s=s||[]).push("style",r);var w=s;(t.updateQueue=w)&&(t.flags|=4)}},zd=function(e,t,r,n){r!==n&&(t.flags|=4)};function eo(e,t){if(!Se)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function qe(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags&14680064,n|=a.flags&14680064,a.return=e,a=a.sibling;else for(a=e.child;a!==null;)r|=a.lanes|a.childLanes,n|=a.subtreeFlags,n|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Um(e,t,r){var n=t.pendingProps;switch(Oa(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qe(t),null;case 1:return tt(t.type)&&Fo(),qe(t),null;case 3:return n=t.stateNode,an(),ke(et),ke(Qe),Xa(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ho(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ct!==null&&(Ts(Ct),Ct=null))),xs(e,t),qe(t),null;case 5:qa(t);var a=Er(qn.current);if(r=t.type,e!==null&&t.stateNode!=null)Ld(e,t,r,n,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(l(166));return qe(t),null}if(e=Er(Dt.current),Ho(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[Rt]=t,n[Hn]=s,e=(t.mode&1)!==0,r){case"dialog":we("cancel",n),we("close",n);break;case"iframe":case"object":case"embed":we("load",n);break;case"video":case"audio":for(a=0;a<Wn.length;a++)we(Wn[a],n);break;case"source":we("error",n);break;case"img":case"image":case"link":we("error",n),we("load",n);break;case"details":we("toggle",n);break;case"input":pl(n,s),we("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},we("invalid",n);break;case"textarea":hl(n,s),we("invalid",n)}Ki(r,s),a=null;for(var d in s)if(s.hasOwnProperty(d)){var f=s[d];d==="children"?typeof f=="string"?n.textContent!==f&&(s.suppressHydrationWarning!==!0&&Do(n.textContent,f,e),a=["children",f]):typeof f=="number"&&n.textContent!==""+f&&(s.suppressHydrationWarning!==!0&&Do(n.textContent,f,e),a=["children",""+f]):u.hasOwnProperty(d)&&f!=null&&d==="onScroll"&&we("scroll",n)}switch(r){case"input":Zt(n),fl(n,s,!0);break;case"textarea":Zt(n),gl(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=_o)}n=a,t.updateQueue=n,n!==null&&(t.flags|=4)}else{d=a.nodeType===9?a:a.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=vl(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=d.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=d.createElement(r,{is:n.is}):(e=d.createElement(r),r==="select"&&(d=e,n.multiple?d.multiple=!0:n.size&&(d.size=n.size))):e=d.createElementNS(e,r),e[Rt]=t,e[Hn]=n,Id(e,t,!1,!1),t.stateNode=e;e:{switch(d=Xi(r,n),r){case"dialog":we("cancel",e),we("close",e),a=n;break;case"iframe":case"object":case"embed":we("load",e),a=n;break;case"video":case"audio":for(a=0;a<Wn.length;a++)we(Wn[a],e);a=n;break;case"source":we("error",e),a=n;break;case"img":case"image":case"link":we("error",e),we("load",e),a=n;break;case"details":we("toggle",e),a=n;break;case"input":pl(e,n),a=Vi(e,n),we("invalid",e);break;case"option":a=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},a=z({},n,{value:void 0}),we("invalid",e);break;case"textarea":hl(e,n),a=$i(e,n),we("invalid",e);break;default:a=n}Ki(r,a),f=a;for(s in f)if(f.hasOwnProperty(s)){var h=f[s];s==="style"?wl(e,h):s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&yl(e,h)):s==="children"?typeof h=="string"?(r!=="textarea"||h!=="")&&kn(e,h):typeof h=="number"&&kn(e,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(u.hasOwnProperty(s)?h!=null&&s==="onScroll"&&we("scroll",e):h!=null&&re(e,s,h,d))}switch(r){case"input":Zt(e),fl(e,n,!1);break;case"textarea":Zt(e),gl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+le(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Br(e,!!n.multiple,s,!1):n.defaultValue!=null&&Br(e,!!n.multiple,n.defaultValue,!0);break;default:typeof a.onClick=="function"&&(e.onclick=_o)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return qe(t),null;case 6:if(e&&t.stateNode!=null)zd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(l(166));if(r=Er(qn.current),Er(Dt.current),Ho(t)){if(n=t.stateNode,r=t.memoizedProps,n[Rt]=t,(s=n.nodeValue!==r)&&(e=ct,e!==null))switch(e.tag){case 3:Do(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Do(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Rt]=t,t.stateNode=n}return qe(t),null;case 13:if(ke(Te),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Se&&dt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Rc(),tn(),t.flags|=98560,s=!1;else if(s=Ho(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Rt]=t}else tn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;qe(t),s=!1}else Ct!==null&&(Ts(Ct),Ct=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(Te.current&1)!==0?Oe===0&&(Oe=3):Is())),t.updateQueue!==null&&(t.flags|=4),qe(t),null);case 4:return an(),xs(e,t),e===null&&Un(t.stateNode.containerInfo),qe(t),null;case 10:return Ha(t.type._context),qe(t),null;case 17:return tt(t.type)&&Fo(),qe(t),null;case 19:if(ke(Te),s=t.memoizedState,s===null)return qe(t),null;if(n=(t.flags&128)!==0,d=s.rendering,d===null)if(n)eo(s,!1);else{if(Oe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(d=Ko(e),d!==null){for(t.flags|=128,eo(s,!1),n=d.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,d=s.alternate,d===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=d.childLanes,s.lanes=d.lanes,s.child=d.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=d.memoizedProps,s.memoizedState=d.memoizedState,s.updateQueue=d.updateQueue,s.type=d.type,e=d.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return be(Te,Te.current&1|2),t.child}e=e.sibling}s.tail!==null&&ze()>dn&&(t.flags|=128,n=!0,eo(s,!1),t.lanes=4194304)}else{if(!n)if(e=Ko(d),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),eo(s,!0),s.tail===null&&s.tailMode==="hidden"&&!d.alternate&&!Se)return qe(t),null}else 2*ze()-s.renderingStartTime>dn&&r!==1073741824&&(t.flags|=128,n=!0,eo(s,!1),t.lanes=4194304);s.isBackwards?(d.sibling=t.child,t.child=d):(r=s.last,r!==null?r.sibling=d:t.child=d,s.last=d)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=ze(),t.sibling=null,r=Te.current,be(Te,n?r&1|2:r&1),t):(qe(t),null);case 22:case 23:return Ps(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(ut&1073741824)!==0&&(qe(t),t.subtreeFlags&6&&(t.flags|=8192)):qe(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Gm(e,t){switch(Oa(t),t.tag){case 1:return tt(t.type)&&Fo(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return an(),ke(et),ke(Qe),Xa(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return qa(t),null;case 13:if(ke(Te),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));tn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ke(Te),null;case 4:return an(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return Ps(),null;case 24:return null;default:return null}}var ii=!1,Ke=!1,Hm=typeof WeakSet=="function"?WeakSet:Set,A=null;function ln(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ie(e,t,n)}else r.current=null}function gs(e,t,r){try{r()}catch(n){Ie(e,t,n)}}var Md=!1;function Vm(e,t){if(Pa=So,e=uc(),wa(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var a=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var d=0,f=-1,h=-1,w=0,C=0,T=e,S=null;t:for(;;){for(var M;T!==r||a!==0&&T.nodeType!==3||(f=d+a),T!==s||n!==0&&T.nodeType!==3||(h=d+n),T.nodeType===3&&(d+=T.nodeValue.length),(M=T.firstChild)!==null;)S=T,T=M;for(;;){if(T===e)break t;if(S===r&&++w===a&&(f=d),S===s&&++C===n&&(h=d),(M=T.nextSibling)!==null)break;T=S,S=T.parentNode}T=M}r=f===-1||h===-1?null:{start:f,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(Ia={focusedElem:e,selectionRange:r},So=!1,A=t;A!==null;)if(t=A,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,A=e;else for(;A!==null;){t=A;try{var R=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(R!==null){var D=R.memoizedProps,Me=R.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?D:Tt(t.type,D),Me);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(E){Ie(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,A=e;break}A=t.return}return R=Md,Md=!1,R}function to(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var a=n=n.next;do{if((a.tag&e)===e){var s=a.destroy;a.destroy=void 0,s!==void 0&&gs(t,r,s)}a=a.next}while(a!==n)}}function ai(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function vs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ad(e){var t=e.alternate;t!==null&&(e.alternate=null,Ad(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Rt],delete t[Hn],delete t[Aa],delete t[Tm],delete t[Em])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rd(e){return e.tag===5||e.tag===3||e.tag===4}function Dd(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ys(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=_o));else if(n!==4&&(e=e.child,e!==null))for(ys(e,t,r),e=e.sibling;e!==null;)ys(e,t,r),e=e.sibling}function bs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(bs(e,t,r),e=e.sibling;e!==null;)bs(e,t,r),e=e.sibling}var Ge=null,Et=!1;function pr(e,t,r){for(r=r.child;r!==null;)_d(e,t,r),r=r.sibling}function _d(e,t,r){if(At&&typeof At.onCommitFiberUnmount=="function")try{At.onCommitFiberUnmount(yo,r)}catch{}switch(r.tag){case 5:Ke||ln(r,t);case 6:var n=Ge,a=Et;Ge=null,pr(e,t,r),Ge=n,Et=a,Ge!==null&&(Et?(e=Ge,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Ge.removeChild(r.stateNode));break;case 18:Ge!==null&&(Et?(e=Ge,r=r.stateNode,e.nodeType===8?Ma(e.parentNode,r):e.nodeType===1&&Ma(e,r),Mn(e)):Ma(Ge,r.stateNode));break;case 4:n=Ge,a=Et,Ge=r.stateNode.containerInfo,Et=!0,pr(e,t,r),Ge=n,Et=a;break;case 0:case 11:case 14:case 15:if(!Ke&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){a=n=n.next;do{var s=a,d=s.destroy;s=s.tag,d!==void 0&&((s&2)!==0||(s&4)!==0)&&gs(r,t,d),a=a.next}while(a!==n)}pr(e,t,r);break;case 1:if(!Ke&&(ln(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(f){Ie(r,t,f)}pr(e,t,r);break;case 21:pr(e,t,r);break;case 22:r.mode&1?(Ke=(n=Ke)||r.memoizedState!==null,pr(e,t,r),Ke=n):pr(e,t,r);break;default:pr(e,t,r)}}function Od(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Hm),t.forEach(function(n){var a=ef.bind(null,e,n);r.has(n)||(r.add(n),n.then(a,a))})}}function Pt(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var a=r[n];try{var s=e,d=t,f=d;e:for(;f!==null;){switch(f.tag){case 5:Ge=f.stateNode,Et=!1;break e;case 3:Ge=f.stateNode.containerInfo,Et=!0;break e;case 4:Ge=f.stateNode.containerInfo,Et=!0;break e}f=f.return}if(Ge===null)throw Error(l(160));_d(s,d,a),Ge=null,Et=!1;var h=a.alternate;h!==null&&(h.return=null),a.return=null}catch(w){Ie(a,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Fd(t,e),t=t.sibling}function Fd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Pt(t,e),Ot(e),n&4){try{to(3,e,e.return),ai(3,e)}catch(D){Ie(e,e.return,D)}try{to(5,e,e.return)}catch(D){Ie(e,e.return,D)}}break;case 1:Pt(t,e),Ot(e),n&512&&r!==null&&ln(r,r.return);break;case 5:if(Pt(t,e),Ot(e),n&512&&r!==null&&ln(r,r.return),e.flags&32){var a=e.stateNode;try{kn(a,"")}catch(D){Ie(e,e.return,D)}}if(n&4&&(a=e.stateNode,a!=null)){var s=e.memoizedProps,d=r!==null?r.memoizedProps:s,f=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{f==="input"&&s.type==="radio"&&s.name!=null&&ml(a,s),Xi(f,d);var w=Xi(f,s);for(d=0;d<h.length;d+=2){var C=h[d],T=h[d+1];C==="style"?wl(a,T):C==="dangerouslySetInnerHTML"?yl(a,T):C==="children"?kn(a,T):re(a,C,T,w)}switch(f){case"input":Yi(a,s);break;case"textarea":xl(a,s);break;case"select":var S=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!s.multiple;var M=s.value;M!=null?Br(a,!!s.multiple,M,!1):S!==!!s.multiple&&(s.defaultValue!=null?Br(a,!!s.multiple,s.defaultValue,!0):Br(a,!!s.multiple,s.multiple?[]:"",!1))}a[Hn]=s}catch(D){Ie(e,e.return,D)}}break;case 6:if(Pt(t,e),Ot(e),n&4){if(e.stateNode===null)throw Error(l(162));a=e.stateNode,s=e.memoizedProps;try{a.nodeValue=s}catch(D){Ie(e,e.return,D)}}break;case 3:if(Pt(t,e),Ot(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{Mn(t.containerInfo)}catch(D){Ie(e,e.return,D)}break;case 4:Pt(t,e),Ot(e);break;case 13:Pt(t,e),Ot(e),a=e.child,a.flags&8192&&(s=a.memoizedState!==null,a.stateNode.isHidden=s,!s||a.alternate!==null&&a.alternate.memoizedState!==null||(js=ze())),n&4&&Od(e);break;case 22:if(C=r!==null&&r.memoizedState!==null,e.mode&1?(Ke=(w=Ke)||C,Pt(t,e),Ke=w):Pt(t,e),Ot(e),n&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!C&&(e.mode&1)!==0)for(A=e,C=e.child;C!==null;){for(T=A=C;A!==null;){switch(S=A,M=S.child,S.tag){case 0:case 11:case 14:case 15:to(4,S,S.return);break;case 1:ln(S,S.return);var R=S.stateNode;if(typeof R.componentWillUnmount=="function"){n=S,r=S.return;try{t=n,R.props=t.memoizedProps,R.state=t.memoizedState,R.componentWillUnmount()}catch(D){Ie(n,r,D)}}break;case 5:ln(S,S.return);break;case 22:if(S.memoizedState!==null){Ud(T);continue}}M!==null?(M.return=S,A=M):Ud(T)}C=C.sibling}e:for(C=null,T=e;;){if(T.tag===5){if(C===null){C=T;try{a=T.stateNode,w?(s=a.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(f=T.stateNode,h=T.memoizedProps.style,d=h!=null&&h.hasOwnProperty("display")?h.display:null,f.style.display=bl("display",d))}catch(D){Ie(e,e.return,D)}}}else if(T.tag===6){if(C===null)try{T.stateNode.nodeValue=w?"":T.memoizedProps}catch(D){Ie(e,e.return,D)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===e)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===e)break e;for(;T.sibling===null;){if(T.return===null||T.return===e)break e;C===T&&(C=null),T=T.return}C===T&&(C=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:Pt(t,e),Ot(e),n&4&&Od(e);break;case 21:break;default:Pt(t,e),Ot(e)}}function Ot(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(Rd(r)){var n=r;break e}r=r.return}throw Error(l(160))}switch(n.tag){case 5:var a=n.stateNode;n.flags&32&&(kn(a,""),n.flags&=-33);var s=Dd(e);bs(e,s,a);break;case 3:case 4:var d=n.stateNode.containerInfo,f=Dd(e);ys(e,f,d);break;default:throw Error(l(161))}}catch(h){Ie(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ym(e,t,r){A=e,Bd(e)}function Bd(e,t,r){for(var n=(e.mode&1)!==0;A!==null;){var a=A,s=a.child;if(a.tag===22&&n){var d=a.memoizedState!==null||ii;if(!d){var f=a.alternate,h=f!==null&&f.memoizedState!==null||Ke;f=ii;var w=Ke;if(ii=d,(Ke=h)&&!w)for(A=a;A!==null;)d=A,h=d.child,d.tag===22&&d.memoizedState!==null?Gd(a):h!==null?(h.return=d,A=h):Gd(a);for(;s!==null;)A=s,Bd(s),s=s.sibling;A=a,ii=f,Ke=w}Wd(e)}else(a.subtreeFlags&8772)!==0&&s!==null?(s.return=a,A=s):Wd(e)}}function Wd(e){for(;A!==null;){var t=A;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ke||ai(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ke)if(r===null)n.componentDidMount();else{var a=t.elementType===t.type?r.memoizedProps:Tt(t.type,r.memoizedProps);n.componentDidUpdate(a,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Uc(t,s,n);break;case 3:var d=t.updateQueue;if(d!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Uc(t,d,r)}break;case 5:var f=t.stateNode;if(r===null&&t.flags&4){r=f;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&r.focus();break;case"img":h.src&&(r.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var C=w.memoizedState;if(C!==null){var T=C.dehydrated;T!==null&&Mn(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ke||t.flags&512&&vs(t)}catch(S){Ie(t,t.return,S)}}if(t===e){A=null;break}if(r=t.sibling,r!==null){r.return=t.return,A=r;break}A=t.return}}function Ud(e){for(;A!==null;){var t=A;if(t===e){A=null;break}var r=t.sibling;if(r!==null){r.return=t.return,A=r;break}A=t.return}}function Gd(e){for(;A!==null;){var t=A;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ai(4,t)}catch(h){Ie(t,r,h)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var a=t.return;try{n.componentDidMount()}catch(h){Ie(t,a,h)}}var s=t.return;try{vs(t)}catch(h){Ie(t,s,h)}break;case 5:var d=t.return;try{vs(t)}catch(h){Ie(t,d,h)}}}catch(h){Ie(t,t.return,h)}if(t===e){A=null;break}var f=t.sibling;if(f!==null){f.return=t.return,A=f;break}A=t.return}}var Qm=Math.ceil,si=L.ReactCurrentDispatcher,ws=L.ReactCurrentOwner,vt=L.ReactCurrentBatchConfig,pe=0,We=null,Re=null,He=0,ut=0,cn=sr(0),Oe=0,ro=null,Ir=0,li=0,ks=0,no=null,nt=null,js=0,dn=1/0,Qt=null,ci=!1,Ns=null,mr=null,di=!1,fr=null,ui=0,oo=0,Ss=null,pi=-1,mi=0;function Ze(){return(pe&6)!==0?ze():pi!==-1?pi:pi=ze()}function hr(e){return(e.mode&1)===0?1:(pe&2)!==0&&He!==0?He&-He:Im.transition!==null?(mi===0&&(mi=Dl()),mi):(e=ge,e!==0||(e=window.event,e=e===void 0?16:Vl(e.type)),e)}function It(e,t,r,n){if(50<oo)throw oo=0,Ss=null,Error(l(185));En(e,r,n),((pe&2)===0||e!==We)&&(e===We&&((pe&2)===0&&(li|=r),Oe===4&&xr(e,He)),ot(e,n),r===1&&pe===0&&(t.mode&1)===0&&(dn=ze()+500,Wo&&cr()))}function ot(e,t){var r=e.callbackNode;Ip(e,t);var n=ko(e,e===We?He:0);if(n===0)r!==null&&Ml(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Ml(r),t===1)e.tag===0?Pm(Vd.bind(null,e)):Ic(Vd.bind(null,e)),Sm(function(){(pe&6)===0&&cr()}),r=null;else{switch(_l(n)){case 1:r=oa;break;case 4:r=Al;break;case 16:r=vo;break;case 536870912:r=Rl;break;default:r=vo}r=Zd(r,Hd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Hd(e,t){if(pi=-1,mi=0,(pe&6)!==0)throw Error(l(327));var r=e.callbackNode;if(un()&&e.callbackNode!==r)return null;var n=ko(e,e===We?He:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=fi(e,n);else{t=n;var a=pe;pe|=2;var s=Qd();(We!==e||He!==t)&&(Qt=null,dn=ze()+500,zr(e,t));do try{Km();break}catch(f){Yd(e,f)}while(!0);Ga(),si.current=s,pe=a,Re!==null?t=0:(We=null,He=0,t=Oe)}if(t!==0){if(t===2&&(a=ia(e),a!==0&&(n=a,t=Cs(e,a))),t===1)throw r=ro,zr(e,0),xr(e,n),ot(e,ze()),r;if(t===6)xr(e,n);else{if(a=e.current.alternate,(n&30)===0&&!$m(a)&&(t=fi(e,n),t===2&&(s=ia(e),s!==0&&(n=s,t=Cs(e,s))),t===1))throw r=ro,zr(e,0),xr(e,n),ot(e,ze()),r;switch(e.finishedWork=a,e.finishedLanes=n,t){case 0:case 1:throw Error(l(345));case 2:Mr(e,nt,Qt);break;case 3:if(xr(e,n),(n&130023424)===n&&(t=js+500-ze(),10<t)){if(ko(e,0)!==0)break;if(a=e.suspendedLanes,(a&n)!==n){Ze(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=za(Mr.bind(null,e,nt,Qt),t);break}Mr(e,nt,Qt);break;case 4:if(xr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,a=-1;0<n;){var d=31-Nt(n);s=1<<d,d=t[d],d>a&&(a=d),n&=~s}if(n=a,n=ze()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Qm(n/1960))-n,10<n){e.timeoutHandle=za(Mr.bind(null,e,nt,Qt),n);break}Mr(e,nt,Qt);break;case 5:Mr(e,nt,Qt);break;default:throw Error(l(329))}}}return ot(e,ze()),e.callbackNode===r?Hd.bind(null,e):null}function Cs(e,t){var r=no;return e.current.memoizedState.isDehydrated&&(zr(e,t).flags|=256),e=fi(e,t),e!==2&&(t=nt,nt=r,t!==null&&Ts(t)),e}function Ts(e){nt===null?nt=e:nt.push.apply(nt,e)}function $m(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var a=r[n],s=a.getSnapshot;a=a.value;try{if(!St(s(),a))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xr(e,t){for(t&=~ks,t&=~li,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-Nt(t),n=1<<r;e[r]=-1,t&=~n}}function Vd(e){if((pe&6)!==0)throw Error(l(327));un();var t=ko(e,0);if((t&1)===0)return ot(e,ze()),null;var r=fi(e,t);if(e.tag!==0&&r===2){var n=ia(e);n!==0&&(t=n,r=Cs(e,n))}if(r===1)throw r=ro,zr(e,0),xr(e,t),ot(e,ze()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Mr(e,nt,Qt),ot(e,ze()),null}function Es(e,t){var r=pe;pe|=1;try{return e(t)}finally{pe=r,pe===0&&(dn=ze()+500,Wo&&cr())}}function Lr(e){fr!==null&&fr.tag===0&&(pe&6)===0&&un();var t=pe;pe|=1;var r=vt.transition,n=ge;try{if(vt.transition=null,ge=1,e)return e()}finally{ge=n,vt.transition=r,pe=t,(pe&6)===0&&cr()}}function Ps(){ut=cn.current,ke(cn)}function zr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,Nm(r)),Re!==null)for(r=Re.return;r!==null;){var n=r;switch(Oa(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Fo();break;case 3:an(),ke(et),ke(Qe),Xa();break;case 5:qa(n);break;case 4:an();break;case 13:ke(Te);break;case 19:ke(Te);break;case 10:Ha(n.type._context);break;case 22:case 23:Ps()}r=r.return}if(We=e,Re=e=gr(e.current,null),He=ut=t,Oe=0,ro=null,ks=li=Ir=0,nt=no=null,Tr!==null){for(t=0;t<Tr.length;t++)if(r=Tr[t],n=r.interleaved,n!==null){r.interleaved=null;var a=n.next,s=r.pending;if(s!==null){var d=s.next;s.next=a,n.next=d}r.pending=n}Tr=null}return e}function Yd(e,t){do{var r=Re;try{if(Ga(),Xo.current=ti,Jo){for(var n=Ee.memoizedState;n!==null;){var a=n.queue;a!==null&&(a.pending=null),n=n.next}Jo=!1}if(Pr=0,Be=_e=Ee=null,Kn=!1,Xn=0,ws.current=null,r===null||r.return===null){Oe=1,ro=t,Re=null;break}e:{var s=e,d=r.return,f=r,h=t;if(t=He,f.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var w=h,C=f,T=C.tag;if((C.mode&1)===0&&(T===0||T===11||T===15)){var S=C.alternate;S?(C.updateQueue=S.updateQueue,C.memoizedState=S.memoizedState,C.lanes=S.lanes):(C.updateQueue=null,C.memoizedState=null)}var M=gd(d);if(M!==null){M.flags&=-257,vd(M,d,f,s,t),M.mode&1&&xd(s,w,t),t=M,h=w;var R=t.updateQueue;if(R===null){var D=new Set;D.add(h),t.updateQueue=D}else R.add(h);break e}else{if((t&1)===0){xd(s,w,t),Is();break e}h=Error(l(426))}}else if(Se&&f.mode&1){var Me=gd(d);if(Me!==null){(Me.flags&65536)===0&&(Me.flags|=256),vd(Me,d,f,s,t),Wa(sn(h,f));break e}}s=h=sn(h,f),Oe!==4&&(Oe=2),no===null?no=[s]:no.push(s),s=d;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=fd(s,h,t);Wc(s,y);break e;case 1:f=h;var x=s.type,b=s.stateNode;if((s.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(mr===null||!mr.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t;var E=hd(s,f,t);Wc(s,E);break e}}s=s.return}while(s!==null)}qd(r)}catch(O){t=O,Re===r&&r!==null&&(Re=r=r.return);continue}break}while(!0)}function Qd(){var e=si.current;return si.current=ti,e===null?ti:e}function Is(){(Oe===0||Oe===3||Oe===2)&&(Oe=4),We===null||(Ir&268435455)===0&&(li&268435455)===0||xr(We,He)}function fi(e,t){var r=pe;pe|=2;var n=Qd();(We!==e||He!==t)&&(Qt=null,zr(e,t));do try{qm();break}catch(a){Yd(e,a)}while(!0);if(Ga(),pe=r,si.current=n,Re!==null)throw Error(l(261));return We=null,He=0,Oe}function qm(){for(;Re!==null;)$d(Re)}function Km(){for(;Re!==null&&!wp();)$d(Re)}function $d(e){var t=Jd(e.alternate,e,ut);e.memoizedProps=e.pendingProps,t===null?qd(e):Re=t,ws.current=null}function qd(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Um(r,t,ut),r!==null){Re=r;return}}else{if(r=Gm(r,t),r!==null){r.flags&=32767,Re=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Oe=6,Re=null;return}}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Oe===0&&(Oe=5)}function Mr(e,t,r){var n=ge,a=vt.transition;try{vt.transition=null,ge=1,Xm(e,t,r,n)}finally{vt.transition=a,ge=n}return null}function Xm(e,t,r,n){do un();while(fr!==null);if((pe&6)!==0)throw Error(l(327));r=e.finishedWork;var a=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Lp(e,s),e===We&&(Re=We=null,He=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||di||(di=!0,Zd(vo,function(){return un(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=vt.transition,vt.transition=null;var d=ge;ge=1;var f=pe;pe|=4,ws.current=null,Vm(e,r),Fd(r,e),gm(Ia),So=!!Pa,Ia=Pa=null,e.current=r,Ym(r),kp(),pe=f,ge=d,vt.transition=s}else e.current=r;if(di&&(di=!1,fr=e,ui=a),s=e.pendingLanes,s===0&&(mr=null),Sp(r.stateNode),ot(e,ze()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)a=t[r],n(a.value,{componentStack:a.stack,digest:a.digest});if(ci)throw ci=!1,e=Ns,Ns=null,e;return(ui&1)!==0&&e.tag!==0&&un(),s=e.pendingLanes,(s&1)!==0?e===Ss?oo++:(oo=0,Ss=e):oo=0,cr(),null}function un(){if(fr!==null){var e=_l(ui),t=vt.transition,r=ge;try{if(vt.transition=null,ge=16>e?16:e,fr===null)var n=!1;else{if(e=fr,fr=null,ui=0,(pe&6)!==0)throw Error(l(331));var a=pe;for(pe|=4,A=e.current;A!==null;){var s=A,d=s.child;if((A.flags&16)!==0){var f=s.deletions;if(f!==null){for(var h=0;h<f.length;h++){var w=f[h];for(A=w;A!==null;){var C=A;switch(C.tag){case 0:case 11:case 15:to(8,C,s)}var T=C.child;if(T!==null)T.return=C,A=T;else for(;A!==null;){C=A;var S=C.sibling,M=C.return;if(Ad(C),C===w){A=null;break}if(S!==null){S.return=M,A=S;break}A=M}}}var R=s.alternate;if(R!==null){var D=R.child;if(D!==null){R.child=null;do{var Me=D.sibling;D.sibling=null,D=Me}while(D!==null)}}A=s}}if((s.subtreeFlags&2064)!==0&&d!==null)d.return=s,A=d;else e:for(;A!==null;){if(s=A,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:to(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,A=y;break e}A=s.return}}var x=e.current;for(A=x;A!==null;){d=A;var b=d.child;if((d.subtreeFlags&2064)!==0&&b!==null)b.return=d,A=b;else e:for(d=x;A!==null;){if(f=A,(f.flags&2048)!==0)try{switch(f.tag){case 0:case 11:case 15:ai(9,f)}}catch(O){Ie(f,f.return,O)}if(f===d){A=null;break e}var E=f.sibling;if(E!==null){E.return=f.return,A=E;break e}A=f.return}}if(pe=a,cr(),At&&typeof At.onPostCommitFiberRoot=="function")try{At.onPostCommitFiberRoot(yo,e)}catch{}n=!0}return n}finally{ge=r,vt.transition=t}}return!1}function Kd(e,t,r){t=sn(r,t),t=fd(e,t,1),e=ur(e,t,1),t=Ze(),e!==null&&(En(e,1,t),ot(e,t))}function Ie(e,t,r){if(e.tag===3)Kd(e,e,r);else for(;t!==null;){if(t.tag===3){Kd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(mr===null||!mr.has(n))){e=sn(r,e),e=hd(t,e,1),t=ur(t,e,1),e=Ze(),t!==null&&(En(t,1,e),ot(t,e));break}}t=t.return}}function Jm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Ze(),e.pingedLanes|=e.suspendedLanes&r,We===e&&(He&r)===r&&(Oe===4||Oe===3&&(He&130023424)===He&&500>ze()-js?zr(e,0):ks|=r),ot(e,t)}function Xd(e,t){t===0&&((e.mode&1)===0?t=1:(t=wo,wo<<=1,(wo&130023424)===0&&(wo=4194304)));var r=Ze();e=Ht(e,t),e!==null&&(En(e,t,r),ot(e,r))}function Zm(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),Xd(e,r)}function ef(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,a=e.memoizedState;a!==null&&(r=a.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(l(314))}n!==null&&n.delete(t),Xd(e,r)}var Jd;Jd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)rt=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return rt=!1,Wm(e,t,r);rt=(e.flags&131072)!==0}else rt=!1,Se&&(t.flags&1048576)!==0&&Lc(t,Go,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;oi(e,t),e=t.pendingProps;var a=Jr(t,Qe.current);on(t,r),a=es(null,t,n,e,a,r);var s=ts();return t.flags|=1,typeof a=="object"&&a!==null&&typeof a.render=="function"&&a.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(n)?(s=!0,Bo(t)):s=!1,t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,Qa(t),a.updater=ri,t.stateNode=a,a._reactInternals=t,ss(t,n,e,r),t=us(null,t,n,!0,s,r)):(t.tag=0,Se&&s&&_a(t),Je(null,t,a,r),t=t.child),t;case 16:n=t.elementType;e:{switch(oi(e,t),e=t.pendingProps,a=n._init,n=a(n._payload),t.type=n,a=t.tag=rf(n),e=Tt(n,e),a){case 0:t=ds(null,t,n,e,r);break e;case 1:t=Nd(null,t,n,e,r);break e;case 11:t=yd(null,t,n,e,r);break e;case 14:t=bd(null,t,n,Tt(n.type,e),r);break e}throw Error(l(306,n,""))}return t;case 0:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tt(n,a),ds(e,t,n,a,r);case 1:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tt(n,a),Nd(e,t,n,a,r);case 3:e:{if(Sd(t),e===null)throw Error(l(387));n=t.pendingProps,s=t.memoizedState,a=s.element,Bc(e,t),qo(t,n,null,r);var d=t.memoizedState;if(n=d.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:d.cache,pendingSuspenseBoundaries:d.pendingSuspenseBoundaries,transitions:d.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){a=sn(Error(l(423)),t),t=Cd(e,t,n,r,a);break e}else if(n!==a){a=sn(Error(l(424)),t),t=Cd(e,t,n,r,a);break e}else for(dt=ar(t.stateNode.containerInfo.firstChild),ct=t,Se=!0,Ct=null,r=Oc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(tn(),n===a){t=Yt(e,t,r);break e}Je(e,t,n,r)}t=t.child}return t;case 5:return Gc(t),e===null&&Ba(t),n=t.type,a=t.pendingProps,s=e!==null?e.memoizedProps:null,d=a.children,La(n,a)?d=null:s!==null&&La(n,s)&&(t.flags|=32),jd(e,t),Je(e,t,d,r),t.child;case 6:return e===null&&Ba(t),null;case 13:return Td(e,t,r);case 4:return $a(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=rn(t,null,n,r):Je(e,t,n,r),t.child;case 11:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tt(n,a),yd(e,t,n,a,r);case 7:return Je(e,t,t.pendingProps,r),t.child;case 8:return Je(e,t,t.pendingProps.children,r),t.child;case 12:return Je(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,a=t.pendingProps,s=t.memoizedProps,d=a.value,be(Yo,n._currentValue),n._currentValue=d,s!==null)if(St(s.value,d)){if(s.children===a.children&&!et.current){t=Yt(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var f=s.dependencies;if(f!==null){d=s.child;for(var h=f.firstContext;h!==null;){if(h.context===n){if(s.tag===1){h=Vt(-1,r&-r),h.tag=2;var w=s.updateQueue;if(w!==null){w=w.shared;var C=w.pending;C===null?h.next=h:(h.next=C.next,C.next=h),w.pending=h}}s.lanes|=r,h=s.alternate,h!==null&&(h.lanes|=r),Va(s.return,r,t),f.lanes|=r;break}h=h.next}}else if(s.tag===10)d=s.type===t.type?null:s.child;else if(s.tag===18){if(d=s.return,d===null)throw Error(l(341));d.lanes|=r,f=d.alternate,f!==null&&(f.lanes|=r),Va(d,r,t),d=s.sibling}else d=s.child;if(d!==null)d.return=s;else for(d=s;d!==null;){if(d===t){d=null;break}if(s=d.sibling,s!==null){s.return=d.return,d=s;break}d=d.return}s=d}Je(e,t,a.children,r),t=t.child}return t;case 9:return a=t.type,n=t.pendingProps.children,on(t,r),a=xt(a),n=n(a),t.flags|=1,Je(e,t,n,r),t.child;case 14:return n=t.type,a=Tt(n,t.pendingProps),a=Tt(n.type,a),bd(e,t,n,a,r);case 15:return wd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,a=t.pendingProps,a=t.elementType===n?a:Tt(n,a),oi(e,t),t.tag=1,tt(n)?(e=!0,Bo(t)):e=!1,on(t,r),pd(t,n,a),ss(t,n,a,r),us(null,t,n,!0,e,r);case 19:return Pd(e,t,r);case 22:return kd(e,t,r)}throw Error(l(156,t.tag))};function Zd(e,t){return zl(e,t)}function tf(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function yt(e,t,r,n){return new tf(e,t,r,n)}function Ls(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rf(e){if(typeof e=="function")return Ls(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Pe)return 11;if(e===Xe)return 14}return 2}function gr(e,t){var r=e.alternate;return r===null?(r=yt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function hi(e,t,r,n,a,s){var d=2;if(n=e,typeof e=="function")Ls(e)&&(d=1);else if(typeof e=="string")d=5;else e:switch(e){case I:return Ar(r.children,a,s,t);case _:d=8,a|=8;break;case ve:return e=yt(12,r,t,a|2),e.elementType=ve,e.lanes=s,e;case Ne:return e=yt(13,r,t,a),e.elementType=Ne,e.lanes=s,e;case Ve:return e=yt(19,r,t,a),e.elementType=Ve,e.lanes=s,e;case ye:return xi(r,a,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:d=10;break e;case ie:d=9;break e;case Pe:d=11;break e;case Xe:d=14;break e;case Ye:d=16,n=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=yt(d,r,t,a),t.elementType=e,t.type=n,t.lanes=s,t}function Ar(e,t,r,n){return e=yt(7,e,n,t),e.lanes=r,e}function xi(e,t,r,n){return e=yt(22,e,n,t),e.elementType=ye,e.lanes=r,e.stateNode={isHidden:!1},e}function zs(e,t,r){return e=yt(6,e,null,t),e.lanes=r,e}function Ms(e,t,r){return t=yt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function nf(e,t,r,n,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=aa(0),this.expirationTimes=aa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=aa(0),this.identifierPrefix=n,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function As(e,t,r,n,a,s,d,f,h){return e=new nf(e,t,r,f,h),t===1?(t=1,s===!0&&(t|=8)):t=0,s=yt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qa(s),e}function of(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function eu(e){if(!e)return lr;e=e._reactInternals;e:{if(kr(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(tt(r))return Ec(e,r,t)}return t}function tu(e,t,r,n,a,s,d,f,h){return e=As(r,n,!0,e,a,s,d,f,h),e.context=eu(null),r=e.current,n=Ze(),a=hr(r),s=Vt(n,a),s.callback=t!=null?t:null,ur(r,s,a),e.current.lanes=a,En(e,a,n),ot(e,n),e}function gi(e,t,r,n){var a=t.current,s=Ze(),d=hr(a);return r=eu(r),t.context===null?t.context=r:t.pendingContext=r,t=Vt(s,d),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=ur(a,t,d),e!==null&&(It(e,a,d,s),$o(e,a,d)),d}function vi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function ru(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function Rs(e,t){ru(e,t),(e=e.alternate)&&ru(e,t)}function af(){return null}var nu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Ds(e){this._internalRoot=e}yi.prototype.render=Ds.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));gi(e,t,null,null)},yi.prototype.unmount=Ds.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Lr(function(){gi(null,e,null,null)}),t[Bt]=null}};function yi(e){this._internalRoot=e}yi.prototype.unstable_scheduleHydration=function(e){if(e){var t=Bl();e={blockedOn:null,target:e,priority:t};for(var r=0;r<nr.length&&t!==0&&t<nr[r].priority;r++);nr.splice(r,0,e),r===0&&Gl(e)}};function _s(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function bi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ou(){}function sf(e,t,r,n,a){if(a){if(typeof n=="function"){var s=n;n=function(){var w=vi(d);s.call(w)}}var d=tu(t,n,e,0,null,!1,!1,"",ou);return e._reactRootContainer=d,e[Bt]=d.current,Un(e.nodeType===8?e.parentNode:e),Lr(),d}for(;a=e.lastChild;)e.removeChild(a);if(typeof n=="function"){var f=n;n=function(){var w=vi(h);f.call(w)}}var h=As(e,0,!1,null,null,!1,!1,"",ou);return e._reactRootContainer=h,e[Bt]=h.current,Un(e.nodeType===8?e.parentNode:e),Lr(function(){gi(t,h,r,n)}),h}function wi(e,t,r,n,a){var s=r._reactRootContainer;if(s){var d=s;if(typeof a=="function"){var f=a;a=function(){var h=vi(d);f.call(h)}}gi(t,d,e,a)}else d=sf(r,t,e,a,n);return vi(d)}Ol=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Tn(t.pendingLanes);r!==0&&(sa(t,r|1),ot(t,ze()),(pe&6)===0&&(dn=ze()+500,cr()))}break;case 13:Lr(function(){var n=Ht(e,1);if(n!==null){var a=Ze();It(n,e,1,a)}}),Rs(e,1)}},la=function(e){if(e.tag===13){var t=Ht(e,134217728);if(t!==null){var r=Ze();It(t,e,134217728,r)}Rs(e,134217728)}},Fl=function(e){if(e.tag===13){var t=hr(e),r=Ht(e,t);if(r!==null){var n=Ze();It(r,e,t,n)}Rs(e,t)}},Bl=function(){return ge},Wl=function(e,t){var r=ge;try{return ge=e,t()}finally{ge=r}},ea=function(e,t,r){switch(t){case"input":if(Yi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var a=Oo(n);if(!a)throw Error(l(90));wr(n),Yi(n,a)}}}break;case"textarea":xl(e,r);break;case"select":t=r.value,t!=null&&Br(e,!!r.multiple,t,!1)}},Sl=Es,Cl=Lr;var lf={usingClientEntryPoint:!1,Events:[Vn,Kr,Oo,jl,Nl,Es]},io={findFiberByHostInstance:jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cf={bundleType:io.bundleType,version:io.version,rendererPackageName:io.rendererPackageName,rendererConfig:io.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:L.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Il(e),e===null?null:e.stateNode},findFiberByHostInstance:io.findFiberByHostInstance||af,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ki=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ki.isDisabled&&ki.supportsFiber)try{yo=ki.inject(cf),At=ki}catch{}}return it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=lf,it.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!_s(t))throw Error(l(200));return of(e,t,null,r)},it.createRoot=function(e,t){if(!_s(e))throw Error(l(299));var r=!1,n="",a=nu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=As(e,1,!1,null,null,r,!1,n,a),e[Bt]=t.current,Un(e.nodeType===8?e.parentNode:e),new Ds(t)},it.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Il(t),e=e===null?null:e.stateNode,e},it.flushSync=function(e){return Lr(e)},it.hydrate=function(e,t,r){if(!bi(t))throw Error(l(200));return wi(null,e,t,!0,r)},it.hydrateRoot=function(e,t,r){if(!_s(e))throw Error(l(405));var n=r!=null&&r.hydratedSources||null,a=!1,s="",d=nu;if(r!=null&&(r.unstable_strictMode===!0&&(a=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(d=r.onRecoverableError)),t=tu(t,null,e,1,r!=null?r:null,a,!1,s,d),e[Bt]=t.current,Un(e),n)for(e=0;e<n.length;e++)r=n[e],a=r._getVersion,a=a(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,a]:t.mutableSourceEagerHydrationData.push(r,a);return new yi(t)},it.render=function(e,t,r){if(!bi(t))throw Error(l(200));return wi(null,e,t,!1,r)},it.unmountComponentAtNode=function(e){if(!bi(e))throw Error(l(40));return e._reactRootContainer?(Lr(function(){wi(null,null,e,!1,function(){e._reactRootContainer=null,e[Bt]=null})}),!0):!1},it.unstable_batchedUpdates=Es,it.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!bi(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return wi(e,t,r,!1,n)},it.version="18.3.1-next-f1338f8080-20240426",it}var pu;function vf(){if(pu)return Bs.exports;pu=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(c){console.error(c)}}return i(),Bs.exports=gf(),Bs.exports}var mu;function yf(){if(mu)return ji;mu=1;var i=vf();return ji.createRoot=i.createRoot,ji.hydrateRoot=i.hydrateRoot,ji}var bf=yf(),ce=rl();const mt=uf(ce);var Du={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},fu=mt.createContext&&mt.createContext(Du),wf=["attr","size","title"];function kf(i,c){if(i==null)return{};var l=jf(i,c),m,u;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);for(u=0;u<p.length;u++)m=p[u],!(c.indexOf(m)>=0)&&Object.prototype.propertyIsEnumerable.call(i,m)&&(l[m]=i[m])}return l}function jf(i,c){if(i==null)return{};var l={};for(var m in i)if(Object.prototype.hasOwnProperty.call(i,m)){if(c.indexOf(m)>=0)continue;l[m]=i[m]}return l}function Pi(){return Pi=Object.assign?Object.assign.bind():function(i){for(var c=1;c<arguments.length;c++){var l=arguments[c];for(var m in l)Object.prototype.hasOwnProperty.call(l,m)&&(i[m]=l[m])}return i},Pi.apply(this,arguments)}function hu(i,c){var l=Object.keys(i);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(i);c&&(m=m.filter(function(u){return Object.getOwnPropertyDescriptor(i,u).enumerable})),l.push.apply(l,m)}return l}function Ii(i){for(var c=1;c<arguments.length;c++){var l=arguments[c]!=null?arguments[c]:{};c%2?hu(Object(l),!0).forEach(function(m){Nf(i,m,l[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(l)):hu(Object(l)).forEach(function(m){Object.defineProperty(i,m,Object.getOwnPropertyDescriptor(l,m))})}return i}function Nf(i,c,l){return c=Sf(c),c in i?Object.defineProperty(i,c,{value:l,enumerable:!0,configurable:!0,writable:!0}):i[c]=l,i}function Sf(i){var c=Cf(i,"string");return typeof c=="symbol"?c:c+""}function Cf(i,c){if(typeof i!="object"||!i)return i;var l=i[Symbol.toPrimitive];if(l!==void 0){var m=l.call(i,c);if(typeof m!="object")return m;throw new TypeError("@@toPrimitive must return a primitive value.")}return(c==="string"?String:Number)(i)}function _u(i){return i&&i.map((c,l)=>mt.createElement(c.tag,Ii({key:l},c.attr),_u(c.child)))}function V(i){return c=>mt.createElement(Tf,Pi({attr:Ii({},i.attr)},c),_u(i.child))}function Tf(i){var c=l=>{var{attr:m,size:u,title:p}=i,g=kf(i,wf),j=u||l.size||"1em",k;return l.className&&(k=l.className),i.className&&(k=(k?k+" ":"")+i.className),mt.createElement("svg",Pi({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,m,g,{className:k,style:Ii(Ii({color:i.color||l.color},l.style),i.style),height:j,width:j,xmlns:"http://www.w3.org/2000/svg"}),p&&mt.createElement("title",null,p),i.children)};return fu!==void 0?mt.createElement(fu.Consumer,null,l=>c(l)):c(Du)}function Jt(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(i)}function nl(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(i)}function Ef(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(i)}function Pf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(i)}function Li(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(i)}function Ri(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(i)}function wt(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"7 13 12 18 17 13"},child:[]},{tag:"polyline",attr:{points:"7 6 12 11 17 6"},child:[]}]})(i)}function kt(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 11 12 6 7 11"},child:[]},{tag:"polyline",attr:{points:"17 18 12 13 7 18"},child:[]}]})(i)}function Di(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(i)}function Ou(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"},child:[]}]})(i)}function _i(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(i)}function If(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(i)}function Kt(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(i)}function mn(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(i)}function Lf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(i)}function zf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(i)}function Fu(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(i)}function Bu(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(i)}function Wu(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M13 6h3a2 2 0 0 1 2 2v7"},child:[]},{tag:"line",attr:{x1:"6",y1:"9",x2:"6",y2:"21"},child:[]}]})(i)}function Mf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(i)}function fn(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(i)}function ol(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(i)}function Uu(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(i)}function Af(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(i)}function Rf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(i)}function Df(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 16 12 14 15 10 15 8 12 2 12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]}]})(i)}function st(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(i)}function _f(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(i)}function Mt(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(i)}function Of(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(i)}function yn(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(i)}function Ff(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(i)}function Bf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(i)}function Wf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"10 8 16 12 10 16 10 8"},child:[]}]})(i)}function Uf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(i)}function il(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(i)}function Gf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(i)}function Hf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(i)}function Vf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(i)}function Ft(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(i)}function Oi(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(i)}function Yf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(i)}function Qf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(i)}function $f(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(i)}function qf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(i)}function Fi(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(i)}function Kf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(i)}function Xf(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(i)}function Gu(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12.55a11 11 0 0 1 14.08 0"},child:[]},{tag:"path",attr:{d:"M1.42 9a16 16 0 0 1 21.16 0"},child:[]},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"},child:[]}]})(i)}function Xt(i){return V({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(i)}var at=function(){return at=Object.assign||function(c){for(var l,m=1,u=arguments.length;m<u;m++){l=arguments[m];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(c[p]=l[p])}return c},at.apply(this,arguments)};function zi(i,c,l){if(l||arguments.length===2)for(var m=0,u=c.length,p;m<u;m++)(p||!(m in c))&&(p||(p=Array.prototype.slice.call(c,0,m)),p[m]=c[m]);return i.concat(p||Array.prototype.slice.call(c))}var je="-ms-",co="-moz-",fe="-webkit-",Hu="comm",Bi="rule",al="decl",Jf="@import",Zf="@namespace",Vu="@keyframes",eh="@layer",Yu=Math.abs,sl=String.fromCharCode,qs=Object.assign;function th(i,c){return Fe(i,0)^45?(((c<<2^Fe(i,0))<<2^Fe(i,1))<<2^Fe(i,2))<<2^Fe(i,3):0}function Qu(i){return i.trim()}function $t(i,c){return(i=c.exec(i))?i[0]:i}function te(i,c,l){return i.replace(c,l)}function Ni(i,c,l){return i.indexOf(c,l)}function Fe(i,c){return i.charCodeAt(c)|0}function Fr(i,c,l){return i.slice(c,l)}function Lt(i){return i.length}function $u(i){return i.length}function so(i,c){return c.push(i),i}function rh(i,c){return i.map(c).join("")}function xu(i,c){return i.filter(function(l){return!$t(l,c)})}var Wi=1,hn=1,qu=0,bt=0,De=0,bn="";function Ui(i,c,l,m,u,p,g,j){return{value:i,root:c,parent:l,type:m,props:u,children:p,line:Wi,column:hn,length:g,return:"",siblings:j}}function yr(i,c){return qs(Ui("",null,null,"",null,null,0,i.siblings),i,{length:-i.length},c)}function pn(i){for(;i.root;)i=yr(i.root,{children:[i]});so(i,i.siblings)}function nh(){return De}function oh(){return De=bt>0?Fe(bn,--bt):0,hn--,De===10&&(hn=1,Wi--),De}function zt(){return De=bt<qu?Fe(bn,bt++):0,hn++,De===10&&(hn=1,Wi++),De}function br(){return Fe(bn,bt)}function Si(){return bt}function Gi(i,c){return Fr(bn,i,c)}function po(i){switch(i){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ih(i){return Wi=hn=1,qu=Lt(bn=i),bt=0,[]}function ah(i){return bn="",i}function Gs(i){return Qu(Gi(bt-1,Ks(i===91?i+2:i===40?i+1:i)))}function sh(i){for(;(De=br())&&De<33;)zt();return po(i)>2||po(De)>3?"":" "}function lh(i,c){for(;--c&&zt()&&!(De<48||De>102||De>57&&De<65||De>70&&De<97););return Gi(i,Si()+(c<6&&br()==32&&zt()==32))}function Ks(i){for(;zt();)switch(De){case i:return bt;case 34:case 39:i!==34&&i!==39&&Ks(De);break;case 40:i===41&&Ks(i);break;case 92:zt();break}return bt}function ch(i,c){for(;zt()&&i+De!==57;)if(i+De===84&&br()===47)break;return"/*"+Gi(c,bt-1)+"*"+sl(i===47?i:zt())}function dh(i){for(;!po(br());)zt();return Gi(i,bt)}function uh(i){return ah(Ci("",null,null,null,[""],i=ih(i),0,[0],i))}function Ci(i,c,l,m,u,p,g,j,k){for(var q=0,Y=0,B=g,J=0,se=0,K=0,W=1,Q=1,he=1,de=0,re="",L=u,X=p,U=m,I=re;Q;)switch(K=de,de=zt()){case 40:if(K!=108&&Fe(I,B-1)==58){Ni(I+=te(Gs(de),"&","&\f"),"&\f",Yu(q?j[q-1]:0))!=-1&&(he=-1);break}case 34:case 39:case 91:I+=Gs(de);break;case 9:case 10:case 13:case 32:I+=sh(K);break;case 92:I+=lh(Si()-1,7);continue;case 47:switch(br()){case 42:case 47:so(ph(ch(zt(),Si()),c,l,k),k),(po(K||1)==5||po(br()||1)==5)&&Lt(I)&&Fr(I,-1,void 0)!==" "&&(I+=" ");break;default:I+="/"}break;case 123*W:j[q++]=Lt(I)*he;case 125*W:case 59:case 0:switch(de){case 0:case 125:Q=0;case 59+Y:he==-1&&(I=te(I,/\f/g,"")),se>0&&(Lt(I)-B||W===0&&K===47)&&so(se>32?vu(I+";",m,l,B-1,k):vu(te(I," ","")+";",m,l,B-2,k),k);break;case 59:I+=";";default:if(so(U=gu(I,c,l,q,Y,u,j,re,L=[],X=[],B,p),p),de===123)if(Y===0)Ci(I,c,U,U,L,p,B,j,X);else{switch(J){case 99:if(Fe(I,3)===110)break;case 108:if(Fe(I,2)===97)break;default:Y=0;case 100:case 109:case 115:}Y?Ci(i,U,U,m&&so(gu(i,U,U,0,0,u,j,re,u,L=[],B,X),X),u,X,B,j,m?L:X):Ci(I,U,U,U,[""],X,0,j,X)}}q=Y=se=0,W=he=1,re=I="",B=g;break;case 58:B=1+Lt(I),se=K;default:if(W<1){if(de==123)--W;else if(de==125&&W++==0&&oh()==125)continue}switch(I+=sl(de),de*W){case 38:he=Y>0?1:(I+="\f",-1);break;case 44:j[q++]=(Lt(I)-1)*he,he=1;break;case 64:br()===45&&(I+=Gs(zt())),J=br(),Y=B=Lt(re=I+=dh(Si())),de++;break;case 45:K===45&&Lt(I)==2&&(W=0)}}return p}function gu(i,c,l,m,u,p,g,j,k,q,Y,B){for(var J=u-1,se=u===0?p:[""],K=$u(se),W=0,Q=0,he=0;W<m;++W)for(var de=0,re=Fr(i,J+1,J=Yu(Q=g[W])),L=i;de<K;++de)(L=Qu(Q>0?se[de]+" "+re:te(re,/&\f/g,se[de])))&&(k[he++]=L);return Ui(i,c,l,u===0?Bi:j,k,q,Y,B)}function ph(i,c,l,m){return Ui(i,c,l,Hu,sl(nh()),Fr(i,2,-2),0,m)}function vu(i,c,l,m,u){return Ui(i,c,l,al,Fr(i,0,m),Fr(i,m+1,-1),m,u)}function Ku(i,c,l){switch(th(i,c)){case 5103:return fe+"print-"+i+i;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return fe+i+i;case 4855:return fe+i.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+i;case 4789:return co+i+i;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+i+co+i+je+i+i;case 5936:switch(Fe(i,c+11)){case 114:return fe+i+je+te(i,/[svh]\w+-[tblr]{2}/,"tb")+i;case 108:return fe+i+je+te(i,/[svh]\w+-[tblr]{2}/,"tb-rl")+i;case 45:return fe+i+je+te(i,/[svh]\w+-[tblr]{2}/,"lr")+i}case 6828:case 4268:case 2903:return fe+i+je+i+i;case 6165:return fe+i+je+"flex-"+i+i;case 5187:return fe+i+te(i,/(\w+).+(:[^]+)/,fe+"box-$1$2"+je+"flex-$1$2")+i;case 5443:return fe+i+je+"flex-item-"+te(i,/flex-|-self/g,"")+($t(i,/flex-|baseline/)?"":je+"grid-row-"+te(i,/flex-|-self/g,""))+i;case 4675:return fe+i+je+"flex-line-pack"+te(i,/align-content|flex-|-self/g,"")+i;case 5548:return fe+i+je+te(i,"shrink","negative")+i;case 5292:return fe+i+je+te(i,"basis","preferred-size")+i;case 6060:return fe+"box-"+te(i,"-grow","")+fe+i+je+te(i,"grow","positive")+i;case 4554:return fe+te(i,/([^-])(transform)/g,"$1"+fe+"$2")+i;case 6187:return te(te(te(i,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),i,"")+i;case 5495:case 3959:return te(i,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return te(te(i,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+je+"flex-pack:$3"),/space-between/,"justify")+fe+i+i;case 4200:if(!$t(i,/flex-|baseline/))return je+"grid-column-align"+Fr(i,c)+i;break;case 2592:case 3360:return je+te(i,"template-","")+i;case 4384:case 3616:return l&&l.some(function(m,u){return c=u,$t(m.props,/grid-\w+-end/)})?~Ni(i+(l=l[c].value),"span",0)?i:je+te(i,"-start","")+i+je+"grid-row-span:"+(~Ni(l,"span",0)?$t(l,/\d+/):+$t(l,/\d+/)-+$t(i,/\d+/))+";":je+te(i,"-start","")+i;case 4896:case 4128:return l&&l.some(function(m){return $t(m.props,/grid-\w+-start/)})?i:je+te(te(i,"-end","-span"),"span ","")+i;case 4095:case 3583:case 4068:case 2532:return te(i,/(.+)-inline(.+)/,fe+"$1$2")+i;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Lt(i)-1-c>6)switch(Fe(i,c+1)){case 109:if(Fe(i,c+4)!==45)break;case 102:return te(i,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+co+(Fe(i,c+3)==108?"$3":"$2-$3"))+i;case 115:return~Ni(i,"stretch",0)?Ku(te(i,"stretch","fill-available"),c,l)+i:i}break;case 5152:case 5920:return te(i,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(m,u,p,g,j,k,q){return je+u+":"+p+q+(g?je+u+"-span:"+(j?k:+k-+p)+q:"")+i});case 4949:if(Fe(i,c+6)===121)return te(i,":",":"+fe)+i;break;case 6444:switch(Fe(i,Fe(i,14)===45?18:11)){case 120:return te(i,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(Fe(i,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+je+"$2box$3")+i;case 100:return te(i,":",":"+je)+i}break;case 5719:case 2647:case 2135:case 3927:case 2391:return te(i,"scroll-","scroll-snap-")+i}return i}function Mi(i,c){for(var l="",m=0;m<i.length;m++)l+=c(i[m],m,i,c)||"";return l}function mh(i,c,l,m){switch(i.type){case eh:if(i.children.length)break;case Jf:case Zf:case al:return i.return=i.return||i.value;case Hu:return"";case Vu:return i.return=i.value+"{"+Mi(i.children,m)+"}";case Bi:if(!Lt(i.value=i.props.join(",")))return""}return Lt(l=Mi(i.children,m))?i.return=i.value+"{"+l+"}":""}function fh(i){var c=$u(i);return function(l,m,u,p){for(var g="",j=0;j<c;j++)g+=i[j](l,m,u,p)||"";return g}}function hh(i){return function(c){c.root||(c=c.return)&&i(c)}}function xh(i,c,l,m){if(i.length>-1&&!i.return)switch(i.type){case al:i.return=Ku(i.value,i.length,l);return;case Vu:return Mi([yr(i,{value:te(i.value,"@","@"+fe)})],m);case Bi:if(i.length)return rh(l=i.props,function(u){switch($t(u,m=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":pn(yr(i,{props:[te(u,/:(read-\w+)/,":"+co+"$1")]})),pn(yr(i,{props:[u]})),qs(i,{props:xu(l,m)});break;case"::placeholder":pn(yr(i,{props:[te(u,/:(plac\w+)/,":"+fe+"input-$1")]})),pn(yr(i,{props:[te(u,/:(plac\w+)/,":"+co+"$1")]})),pn(yr(i,{props:[te(u,/:(plac\w+)/,je+"input-$1")]})),pn(yr(i,{props:[u]})),qs(i,{props:xu(l,m)});break}return""})}}var gh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pt={},xn=typeof process!="undefined"&&pt!==void 0&&(pt.REACT_APP_SC_ATTR||pt.SC_ATTR)||"data-styled",Xu="active",Ju="data-styled-version",Hi="6.3.10",ll=`/*!sc*/
`,uo=typeof window!="undefined"&&typeof document!="undefined",vh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&pt!==void 0&&pt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&pt.REACT_APP_SC_DISABLE_SPEEDY!==""?pt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&pt.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&pt!==void 0&&pt.SC_DISABLE_SPEEDY!==void 0&&pt.SC_DISABLE_SPEEDY!==""&&pt.SC_DISABLE_SPEEDY!=="false"&&pt.SC_DISABLE_SPEEDY);function fo(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(i," for more information.").concat(c.length>0?" Args: ".concat(c.join(", ")):""))}var Ti=new Map,Ai=new Map,Ei=1,lo=function(i){if(Ti.has(i))return Ti.get(i);for(;Ai.has(Ei);)Ei++;var c=Ei++;return Ti.set(i,c),Ai.set(c,i),c},yh=function(i,c){Ei=c+1,Ti.set(i,c),Ai.set(c,i)},cl=Object.freeze([]),gn=Object.freeze({});function bh(i,c,l){return l===void 0&&(l=gn),i.theme!==l.theme&&i.theme||c||l.theme}var Zu=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),wh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,kh=/(^-|-$)/g;function yu(i){return i.replace(wh,"-").replace(kh,"")}var jh=/(a)(d)/gi,bu=function(i){return String.fromCharCode(i+(i>25?39:97))};function Xs(i){var c,l="";for(c=Math.abs(i);c>52;c=c/52|0)l=bu(c%52)+l;return(bu(c%52)+l).replace(jh,"$1-$2")}var Hs,Rr=function(i,c){for(var l=c.length;l;)i=33*i^c.charCodeAt(--l);return i},ep=function(i){return Rr(5381,i)};function Nh(i){return Xs(ep(i)>>>0)}function Sh(i){return i.displayName||i.name||"Component"}function Vs(i){return typeof i=="string"&&!0}var tp=typeof Symbol=="function"&&Symbol.for,rp=tp?Symbol.for("react.memo"):60115,Ch=tp?Symbol.for("react.forward_ref"):60112,Th={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Eh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},np={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Ph=((Hs={})[Ch]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hs[rp]=np,Hs);function wu(i){return("type"in(c=i)&&c.type.$$typeof)===rp?np:"$$typeof"in i?Ph[i.$$typeof]:Th;var c}var Ih=Object.defineProperty,Lh=Object.getOwnPropertyNames,ku=Object.getOwnPropertySymbols,zh=Object.getOwnPropertyDescriptor,Mh=Object.getPrototypeOf,ju=Object.prototype;function op(i,c,l){if(typeof c!="string"){if(ju){var m=Mh(c);m&&m!==ju&&op(i,m,l)}var u=Lh(c);ku&&(u=u.concat(ku(c)));for(var p=wu(i),g=wu(c),j=0;j<u.length;++j){var k=u[j];if(!(k in Eh||l&&l[k]||g&&k in g||p&&k in p)){var q=zh(c,k);try{Ih(i,k,q)}catch{}}}}return i}function vn(i){return typeof i=="function"}function dl(i){return typeof i=="object"&&"styledComponentId"in i}function _r(i,c){return i&&c?"".concat(i," ").concat(c):i||c||""}function Nu(i,c){return i.join("")}function mo(i){return i!==null&&typeof i=="object"&&i.constructor.name===Object.name&&!("props"in i&&i.$$typeof)}function Js(i,c,l){if(l===void 0&&(l=!1),!l&&!mo(i)&&!Array.isArray(i))return c;if(Array.isArray(c))for(var m=0;m<c.length;m++)i[m]=Js(i[m],c[m]);else if(mo(c))for(var m in c)i[m]=Js(i[m],c[m]);return i}function ul(i,c){Object.defineProperty(i,"toString",{value:c})}var Ah=(function(){function i(c){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=c,this._cGroup=0,this._cIndex=0}return i.prototype.indexOfGroup=function(c){if(c===this._cGroup)return this._cIndex;var l=this._cIndex;if(c>this._cGroup)for(var m=this._cGroup;m<c;m++)l+=this.groupSizes[m];else for(m=this._cGroup-1;m>=c;m--)l-=this.groupSizes[m];return this._cGroup=c,this._cIndex=l,l},i.prototype.insertRules=function(c,l){if(c>=this.groupSizes.length){for(var m=this.groupSizes,u=m.length,p=u;c>=p;)if((p<<=1)<0)throw fo(16,"".concat(c));this.groupSizes=new Uint32Array(p),this.groupSizes.set(m),this.length=p;for(var g=u;g<p;g++)this.groupSizes[g]=0}for(var j=this.indexOfGroup(c+1),k=0,q=(g=0,l.length);g<q;g++)this.tag.insertRule(j,l[g])&&(this.groupSizes[c]++,j++,k++);k>0&&this._cGroup>c&&(this._cIndex+=k)},i.prototype.clearGroup=function(c){if(c<this.length){var l=this.groupSizes[c],m=this.indexOfGroup(c),u=m+l;this.groupSizes[c]=0;for(var p=m;p<u;p++)this.tag.deleteRule(m);l>0&&this._cGroup>c&&(this._cIndex-=l)}},i.prototype.getGroup=function(c){var l="";if(c>=this.length||this.groupSizes[c]===0)return l;for(var m=this.groupSizes[c],u=this.indexOfGroup(c),p=u+m,g=u;g<p;g++)l+=this.tag.getRule(g)+ll;return l},i})(),Rh="style[".concat(xn,"][").concat(Ju,'="').concat(Hi,'"]'),Dh=new RegExp("^".concat(xn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Su=function(i){return typeof ShadowRoot!="undefined"&&i instanceof ShadowRoot||"host"in i&&i.nodeType===11},Zs=function(i){if(!i)return document;if(Su(i))return i;if("getRootNode"in i){var c=i.getRootNode();if(Su(c))return c}return document},_h=function(i,c,l){for(var m,u=l.split(","),p=0,g=u.length;p<g;p++)(m=u[p])&&i.registerName(c,m)},Oh=function(i,c){for(var l,m=((l=c.textContent)!==null&&l!==void 0?l:"").split(ll),u=[],p=0,g=m.length;p<g;p++){var j=m[p].trim();if(j){var k=j.match(Dh);if(k){var q=0|parseInt(k[1],10),Y=k[2];q!==0&&(yh(Y,q),_h(i,Y,k[3]),i.getTag().insertRules(q,u)),u.length=0}else u.push(j)}}},Ys=function(i){for(var c=Zs(i.options.target).querySelectorAll(Rh),l=0,m=c.length;l<m;l++){var u=c[l];u&&u.getAttribute(xn)!==Xu&&(Oh(i,u),u.parentNode&&u.parentNode.removeChild(u))}};function Fh(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var ip=function(i){var c=document.head,l=i||c,m=document.createElement("style"),u=(function(j){var k=Array.from(j.querySelectorAll("style[".concat(xn,"]")));return k[k.length-1]})(l),p=u!==void 0?u.nextSibling:null;m.setAttribute(xn,Xu),m.setAttribute(Ju,Hi);var g=Fh();return g&&m.setAttribute("nonce",g),l.insertBefore(m,p),m},Bh=(function(){function i(c){this.element=ip(c),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){var m;if(l.sheet)return l.sheet;for(var u=(m=l.getRootNode().styleSheets)!==null&&m!==void 0?m:document.styleSheets,p=0,g=u.length;p<g;p++){var j=u[p];if(j.ownerNode===l)return j}throw fo(17)})(this.element),this.length=0}return i.prototype.insertRule=function(c,l){try{return this.sheet.insertRule(l,c),this.length++,!0}catch{return!1}},i.prototype.deleteRule=function(c){this.sheet.deleteRule(c),this.length--},i.prototype.getRule=function(c){var l=this.sheet.cssRules[c];return l&&l.cssText?l.cssText:""},i})(),Wh=(function(){function i(c){this.element=ip(c),this.nodes=this.element.childNodes,this.length=0}return i.prototype.insertRule=function(c,l){if(c<=this.length&&c>=0){var m=document.createTextNode(l);return this.element.insertBefore(m,this.nodes[c]||null),this.length++,!0}return!1},i.prototype.deleteRule=function(c){this.element.removeChild(this.nodes[c]),this.length--},i.prototype.getRule=function(c){return c<this.length?this.nodes[c].textContent:""},i})(),Uh=(function(){function i(c){this.rules=[],this.length=0}return i.prototype.insertRule=function(c,l){return c<=this.length&&(c===this.length?this.rules.push(l):this.rules.splice(c,0,l),this.length++,!0)},i.prototype.deleteRule=function(c){this.rules.splice(c,1),this.length--},i.prototype.getRule=function(c){return c<this.length?this.rules[c]:""},i})(),Cu=uo,Gh={isServer:!uo,useCSSOMInjection:!vh},ap=(function(){function i(c,l,m){c===void 0&&(c=gn),l===void 0&&(l={});var u=this;this.options=at(at({},Gh),c),this.gs=l,this.names=new Map(m),this.server=!!c.isServer,!this.server&&uo&&Cu&&(Cu=!1,Ys(this)),ul(this,function(){return(function(p){for(var g=p.getTag(),j=g.length,k="",q=function(B){var J=(function(he){return Ai.get(he)})(B);if(J===void 0)return"continue";var se=p.names.get(J);if(se===void 0||!se.size)return"continue";var K=g.getGroup(B);if(K.length===0)return"continue";var W=xn+".g"+B+'[id="'+J+'"]',Q="";se.forEach(function(he){he.length>0&&(Q+=he+",")}),k+=K+W+'{content:"'+Q+'"}'+ll},Y=0;Y<j;Y++)q(Y);return k})(u)})}return i.registerId=function(c){return lo(c)},i.prototype.rehydrate=function(){!this.server&&uo&&Ys(this)},i.prototype.reconstructWithOptions=function(c,l){l===void 0&&(l=!0);var m=new i(at(at({},this.options),c),this.gs,l&&this.names||void 0);return!this.server&&uo&&c.target!==this.options.target&&Zs(this.options.target)!==Zs(c.target)&&Ys(m),m},i.prototype.allocateGSInstance=function(c){return this.gs[c]=(this.gs[c]||0)+1},i.prototype.getTag=function(){return this.tag||(this.tag=(c=(function(l){var m=l.useCSSOMInjection,u=l.target;return l.isServer?new Uh(u):m?new Bh(u):new Wh(u)})(this.options),new Ah(c)));var c},i.prototype.hasNameForId=function(c,l){var m,u;return(u=(m=this.names.get(c))===null||m===void 0?void 0:m.has(l))!==null&&u!==void 0&&u},i.prototype.registerName=function(c,l){lo(c);var m=this.names.get(c);m?m.add(l):this.names.set(c,new Set([l]))},i.prototype.insertRules=function(c,l,m){this.registerName(c,l),this.getTag().insertRules(lo(c),m)},i.prototype.clearNames=function(c){this.names.has(c)&&this.names.get(c).clear()},i.prototype.clearRules=function(c){this.getTag().clearGroup(lo(c)),this.clearNames(c)},i.prototype.clearTag=function(){this.tag=void 0},i})(),Hh=/&/g,qt=47,Dr=42;function Tu(i){if(i.indexOf("}")===-1)return!1;for(var c=i.length,l=0,m=0,u=!1,p=0;p<c;p++){var g=i.charCodeAt(p);if(m!==0||u||g!==qt||i.charCodeAt(p+1)!==Dr)if(u)g===Dr&&i.charCodeAt(p+1)===qt&&(u=!1,p++);else if(g!==34&&g!==39||p!==0&&i.charCodeAt(p-1)===92){if(m===0){if(g===123)l++;else if(g===125&&--l<0)return!0}}else m===0?m=g:m===g&&(m=0);else u=!0,p++}return l!==0||m!==0}function sp(i,c){return i.map(function(l){return l.type==="rule"&&(l.value="".concat(c," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(c," ")),l.props=l.props.map(function(m){return"".concat(c," ").concat(m)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=sp(l.children,c)),l})}function Vh(i){var c,l,m,u=gn,p=u.options,g=p===void 0?gn:p,j=u.plugins,k=j===void 0?cl:j,q=function(K,W,Q){return Q.startsWith(l)&&Q.endsWith(l)&&Q.replaceAll(l,"").length>0?".".concat(c):K},Y=k.slice();Y.push(function(K){K.type===Bi&&K.value.includes("&")&&(m||(m=new RegExp("\\".concat(l,"\\b"),"g")),K.props[0]=K.props[0].replace(Hh,l).replace(m,q))}),g.prefix&&Y.push(xh),Y.push(mh);var B=[],J=fh(Y.concat(hh(function(K){return B.push(K)}))),se=function(K,W,Q,he){W===void 0&&(W=""),Q===void 0&&(Q=""),he===void 0&&(he="&"),c=he,l=W,m=void 0;var de=(function(L){if(!Tu(L))return L;for(var X=L.length,U="",I=0,_=0,ve=0,Le=!1,ie=0;ie<X;ie++){var Pe=L.charCodeAt(ie);if(ve!==0||Le||Pe!==qt||L.charCodeAt(ie+1)!==Dr)if(Le)Pe===Dr&&L.charCodeAt(ie+1)===qt&&(Le=!1,ie++);else if(Pe!==34&&Pe!==39||ie!==0&&L.charCodeAt(ie-1)===92){if(ve===0)if(Pe===123)_++;else if(Pe===125){if(--_<0){for(var Ne=ie+1;Ne<X;){var Ve=L.charCodeAt(Ne);if(Ve===59||Ve===10)break;Ne++}Ne<X&&L.charCodeAt(Ne)===59&&Ne++,_=0,ie=Ne-1,I=Ne;continue}_===0&&(U+=L.substring(I,ie+1),I=ie+1)}else Pe===59&&_===0&&(U+=L.substring(I,ie+1),I=ie+1)}else ve===0?ve=Pe:ve===Pe&&(ve=0);else Le=!0,ie++}if(I<X){var Xe=L.substring(I);Tu(Xe)||(U+=Xe)}return U})((function(L){if(L.indexOf("//")===-1)return L;for(var X=L.length,U=[],I=0,_=0,ve=0,Le=0;_<X;){var ie=L.charCodeAt(_);if(ie!==34&&ie!==39||_!==0&&L.charCodeAt(_-1)===92)if(ve===0)if(ie===qt&&_+1<X&&L.charCodeAt(_+1)===Dr){for(_+=2;_+1<X&&(L.charCodeAt(_)!==Dr||L.charCodeAt(_+1)!==qt);)_++;_+=2}else if(ie===40&&_>=3&&(32|L.charCodeAt(_-1))==108&&(32|L.charCodeAt(_-2))==114&&(32|L.charCodeAt(_-3))==117)Le=1,_++;else if(Le>0)ie===41?Le--:ie===40&&Le++,_++;else if(ie===Dr&&_+1<X&&L.charCodeAt(_+1)===qt)_>I&&U.push(L.substring(I,_)),I=_+=2;else if(ie===qt&&_+1<X&&L.charCodeAt(_+1)===qt){for(_>I&&U.push(L.substring(I,_));_<X&&L.charCodeAt(_)!==10;)_++;I=_}else _++;else _++;else ve===0?ve=ie:ve===ie&&(ve=0),_++}return I===0?L:(I<X&&U.push(L.substring(I)),U.join(""))})(K)),re=uh(Q||W?"".concat(Q," ").concat(W," { ").concat(de," }"):de);return g.namespace&&(re=sp(re,g.namespace)),B=[],Mi(re,J),B};return se.hash=k.length?k.reduce(function(K,W){return W.name||fo(15),Rr(K,W.name)},5381).toString():"",se}var Yh=new ap,el=Vh(),lp=mt.createContext({shouldForwardProp:void 0,styleSheet:Yh,stylis:el});lp.Consumer;mt.createContext(void 0);function Eu(){return mt.useContext(lp)}var Qh=(function(){function i(c,l){var m=this;this.inject=function(u,p){p===void 0&&(p=el);var g=m.name+p.hash;u.hasNameForId(m.id,g)||u.insertRules(m.id,g,p(m.rules,g,"@keyframes"))},this.name=c,this.id="sc-keyframes-".concat(c),this.rules=l,ul(this,function(){throw fo(12,String(m.name))})}return i.prototype.getName=function(c){return c===void 0&&(c=el),this.name+c.hash},i})();function $h(i,c){return c==null||typeof c=="boolean"||c===""?"":typeof c!="number"||c===0||i in gh||i.startsWith("--")?String(c).trim():"".concat(c,"px")}var qh=function(i){return i>="A"&&i<="Z"};function Pu(i){for(var c="",l=0;l<i.length;l++){var m=i[l];if(l===1&&m==="-"&&i[0]==="-")return i;qh(m)?c+="-"+m.toLowerCase():c+=m}return c.startsWith("ms-")?"-"+c:c}var cp=function(i){return i==null||i===!1||i===""},dp=function(i){var c=[];for(var l in i){var m=i[l];i.hasOwnProperty(l)&&!cp(m)&&(Array.isArray(m)&&m.isCss||vn(m)?c.push("".concat(Pu(l),":"),m,";"):mo(m)?c.push.apply(c,zi(zi(["".concat(l," {")],dp(m),!1),["}"],!1)):c.push("".concat(Pu(l),": ").concat($h(l,m),";")))}return c};function Or(i,c,l,m,u){if(u===void 0&&(u=[]),typeof i=="string")return i&&u.push(i),u;if(cp(i))return u;if(dl(i))return u.push(".".concat(i.styledComponentId)),u;if(vn(i)){if(!vn(g=i)||g.prototype&&g.prototype.isReactComponent||!c)return u.push(i),u;var p=i(c);return Or(p,c,l,m,u)}var g;if(i instanceof Qh)return l?(i.inject(l,m),u.push(i.getName(m))):u.push(i),u;if(mo(i)){for(var j=dp(i),k=0;k<j.length;k++)u.push(j[k]);return u}if(!Array.isArray(i))return u.push(i.toString()),u;for(k=0;k<i.length;k++)Or(i[k],c,l,m,u);return u}function Kh(i){for(var c=0;c<i.length;c+=1){var l=i[c];if(vn(l)&&!dl(l))return!1}return!0}var Xh=ep(Hi),Jh=(function(){function i(c,l,m){this.rules=c,this.staticRulesId="",this.isStatic=(m===void 0||m.isStatic)&&Kh(c),this.componentId=l,this.baseHash=Rr(Xh,l),this.baseStyle=m,ap.registerId(l)}return i.prototype.generateAndInjectStyles=function(c,l,m){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(c,l,m).className:"";if(this.isStatic&&!m.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))u=_r(u,this.staticRulesId);else{var p=Nu(Or(this.rules,c,l,m)),g=Xs(Rr(this.baseHash,p)>>>0);if(!l.hasNameForId(this.componentId,g)){var j=m(p,".".concat(g),void 0,this.componentId);l.insertRules(this.componentId,g,j)}u=_r(u,g),this.staticRulesId=g}else{for(var k=Rr(this.baseHash,m.hash),q="",Y=0;Y<this.rules.length;Y++){var B=this.rules[Y];if(typeof B=="string")q+=B;else if(B){var J=Nu(Or(B,c,l,m));k=Rr(Rr(k,String(Y)),J),q+=J}}if(q){var se=Xs(k>>>0);if(!l.hasNameForId(this.componentId,se)){var K=m(q,".".concat(se),void 0,this.componentId);l.insertRules(this.componentId,se,K)}u=_r(u,se)}}return{className:u,css:typeof window=="undefined"?l.getTag().getGroup(lo(this.componentId)):""}},i})(),up=mt.createContext(void 0);up.Consumer;var Qs={};function Zh(i,c,l){var m=dl(i),u=i,p=!Vs(i),g=c.attrs,j=g===void 0?cl:g,k=c.componentId,q=k===void 0?(function(L,X){var U=typeof L!="string"?"sc":yu(L);Qs[U]=(Qs[U]||0)+1;var I="".concat(U,"-").concat(Nh(Hi+U+Qs[U]));return X?"".concat(X,"-").concat(I):I})(c.displayName,c.parentComponentId):k,Y=c.displayName,B=Y===void 0?(function(L){return Vs(L)?"styled.".concat(L):"Styled(".concat(Sh(L),")")})(i):Y,J=c.displayName&&c.componentId?"".concat(yu(c.displayName),"-").concat(c.componentId):c.componentId||q,se=m&&u.attrs?u.attrs.concat(j).filter(Boolean):j,K=c.shouldForwardProp;if(m&&u.shouldForwardProp){var W=u.shouldForwardProp;if(c.shouldForwardProp){var Q=c.shouldForwardProp;K=function(L,X){return W(L,X)&&Q(L,X)}}else K=W}var he=new Jh(l,J,m?u.componentStyle:void 0);function de(L,X){return(function(U,I,_){var ve=U.attrs,Le=U.componentStyle,ie=U.defaultProps,Pe=U.foldedComponentIds,Ne=U.styledComponentId,Ve=U.target,Xe=mt.useContext(up),Ye=Eu(),ye=U.shouldForwardProp||Ye.shouldForwardProp,P=bh(I,Xe,ie)||gn,F=(function(oe,ue,le){for(var xe,Ce=at(at({},ue),{className:void 0,theme:le}),Zt=0;Zt<oe.length;Zt+=1){var wr=vn(xe=oe[Zt])?xe(Ce):xe;for(var jt in wr)jt==="className"?Ce.className=_r(Ce.className,wr[jt]):jt==="style"?Ce.style=at(at({},Ce.style),wr[jt]):Ce[jt]=wr[jt]}return"className"in ue&&typeof ue.className=="string"&&(Ce.className=_r(Ce.className,ue.className)),Ce})(ve,I,P),z=F.as||Ve,v={};for(var N in F)F[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&F.theme===P||(N==="forwardedAs"?v.as=F.forwardedAs:ye&&!ye(N,z)||(v[N]=F[N]));var Z=(function(oe,ue){var le=Eu(),xe=oe.generateAndInjectStyles(ue,le.styleSheet,le.stylis);return xe})(Le,F),ee=Z.className,ae=_r(Pe,Ne);return ee&&(ae+=" "+ee),F.className&&(ae+=" "+F.className),v[Vs(z)&&!Zu.has(z)?"class":"className"]=ae,_&&(v.ref=_),ce.createElement(z,v)})(re,L,X)}de.displayName=B;var re=mt.forwardRef(de);return re.attrs=se,re.componentStyle=he,re.displayName=B,re.shouldForwardProp=K,re.foldedComponentIds=m?_r(u.foldedComponentIds,u.styledComponentId):"",re.styledComponentId=J,re.target=m?u.target:i,Object.defineProperty(re,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(L){this._foldedDefaultProps=m?(function(X){for(var U=[],I=1;I<arguments.length;I++)U[I-1]=arguments[I];for(var _=0,ve=U;_<ve.length;_++)Js(X,ve[_],!0);return X})({},u.defaultProps,L):L}}),ul(re,function(){return".".concat(re.styledComponentId)}),p&&op(re,i,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),re}function Iu(i,c){for(var l=[i[0]],m=0,u=c.length;m<u;m+=1)l.push(c[m],i[m+1]);return l}var Lu=function(i){return Object.assign(i,{isCss:!0})};function ex(i){for(var c=[],l=1;l<arguments.length;l++)c[l-1]=arguments[l];if(vn(i)||mo(i))return Lu(Or(Iu(cl,zi([i],c,!0))));var m=i;return c.length===0&&m.length===1&&typeof m[0]=="string"?Or(m):Lu(Or(Iu(m,c)))}function tl(i,c,l){if(l===void 0&&(l=gn),!c)throw fo(1,c);var m=function(u){for(var p=[],g=1;g<arguments.length;g++)p[g-1]=arguments[g];return i(c,l,ex.apply(void 0,zi([u],p,!1)))};return m.attrs=function(u){return tl(i,c,at(at({},l),{attrs:Array.prototype.concat(l.attrs,u).filter(Boolean)}))},m.withConfig=function(u){return tl(i,c,at(at({},l),u))},m}var pp=function(i){return tl(Zh,i)},Ae=pp;Zu.forEach(function(i){Ae[i]=pp(i)});const $s={Wrapper:Ae.div`height: 100vh; overflow: hidden; display: flex; flex-direction: column;`,Header:Ae.header`height: 60px; flex-shrink: 0;`,Main:Ae.main`
        flex: 1; overflow-y: auto; position: relative;
        .workspaceLayout { min-height: 100%; max-width: 1440px; margin: auto; display: grid; grid-template-columns: 260px minmax(0, 1fr); gap: 28px; padding: 18px 22px 42px; }
        .sideMenu { position: sticky; top: 18px; align-self: start; height: calc(100vh - 60px - 36px); max-height: calc(100vh - 60px - 36px); box-sizing: border-box; overflow-y: auto; padding: 16px 10px; border: 1px solid var(--color-border); border-radius: 16px; background: var(--color-surface); }
        .menuLabel { margin: 0 10px 12px; color: var(--color-text-muted); font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .sideMenu nav { display: grid; gap: 5px; }
        .sideMenu button { width: 100%; padding: 10px 12px; border: 1px solid transparent; border-radius: 10px; background: transparent; color: var(--color-text-secondary); text-align: left; cursor: pointer; font: inherit; }
        .sideMenu button:hover, .sideMenu button.active { background: var(--color-primary); border-color: var(--color-primary); color: #07111f; }
        .contentWrapper { min-width: 0; padding: 4px 0; }
        .contentWrapper .topicBody { max-height: 12000px; }
        .scrollTopButton { position: fixed; right: 24px; bottom: 24px; z-index: 10; width: 42px; height: 42px; display: grid; place-items: center; border: 1px solid var(--color-border); border-radius: 50%; background: var(--color-surface); color: var(--color-text-primary); cursor: pointer; box-shadow: 0 8px 20px var(--color-shadow); }
        .scrollTopButton:hover { background: var(--color-primary); color: #07111f; }
        .footerWrapper { flex-shrink: 0; }
        @media (max-width: 820px) { .workspaceLayout { grid-template-columns: 1fr; padding: 14px; } .sideMenu { position: static; height: auto; max-height: none; } .sideMenu nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .scrollTopButton { right: 16px; bottom: 16px; } }
    `},zu={Wrapper:Ae.header`
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        border-bottom: 1px solid var(--color-border);
        background: var(--color-bg);
        position: sticky;
        top: 0;
        z-index: 50;
        height: 60px;
    `,Main:Ae.div`
        width: 100%;
        display: flex;
        align-items: center;

        .logoNameThemeToggleWrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            width: 100%;
        }

        .logoNameWrapper {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .logoWrapper {
            height: 50px;
            width: 50px;
            border-radius: 10px;
            background: #000;
            border: 1px solid var(--color-border);
            position: relative;
            overflow: hidden;
            flex: 0 0 auto;
            padding: 5px;

            .logo {
                height: 100%;
                width: 100%;
                object-fit: contain;
                display: block;
                opacity: 0;
                transition: opacity 180ms ease;
            }

            .logo.loaded {
                opacity: 1;
            }

            .logoSkeleton {
                position: absolute;
                inset: 0;
                background: var(--color-surface-2);
                opacity: 0.75;
            }
        }

        .nameWrapper {
            display: flex;
            flex-direction: column;
            gap: 2px;
            min-width: 0;

            .title {
                color: var(--color-text-primary);
                font-weight: 800;
                letter-spacing: 0.2px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .subTitle {
                color: var(--color-text-muted);
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            @media (width < 520px) {
                .subTitle {
                    display: none;
                }
            }

            @media (width < 420px) {
                display: none;
            }
        }

        .themeToggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease;

            .icon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .label {
                font-size: 13px;
                font-weight: 700;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }

            @media (width < 420px) {
                .label {
                    display: none;
                }
            }
        }
    `},Mu="app-theme",tx="/computerscience-core-notes/logo.png",rx=()=>{const[i,c]=ce.useState(!1),[l,m]=ce.useState("dark");ce.useEffect(()=>{const g=localStorage.getItem(Mu);if(g==="light"||g==="dark"){m(g);return}const j=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches;m(j?"light":"dark")},[]),ce.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem(Mu,l)},[l]);const u=ce.useMemo(()=>l==="light"?"dark":"light",[l]),p=()=>{m(u)};return o.jsx(zu.Wrapper,{children:o.jsx(zu.Main,{children:o.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[o.jsxs("div",{className:"logoNameWrapper",children:[o.jsxs("div",{className:"logoWrapper",children:[!i&&o.jsx("div",{className:"logoSkeleton"}),o.jsx("img",{className:i?"logo loaded":"logo",src:tx,alt:"computerscience-core-notes",onLoad:()=>c(!0),loading:"eager",decoding:"async"})]}),o.jsxs("div",{className:"nameWrapper",children:[o.jsx("div",{className:"title",children:"computerscience-core-notes"}),o.jsx("div",{className:"subTitle",children:"At-a-glance computer science revision"})]})]}),o.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:p,"aria-label":`Switch to ${u} theme`,title:`Switch to ${u}`,children:[o.jsx("span",{className:"icon",children:l==="light"?o.jsx(Bf,{}):o.jsx($f,{})}),o.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})};function nx(i){return V({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(i)}function ox(i){return V({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(i)}const ix={Wrapper:Ae.footer`
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 12px;
        padding: 16px 0 4px;
        border-top: 1px solid var(--color-border);
        font-size: 12px;
        color: var(--color-text-muted);

        .copyright {
            line-height: 1.6;
        }

        .copyright a {
            color: var(--color-text-secondary);
            font-weight: 600;
        }

        .copyright a:hover {
            color: var(--color-text-primary);
        }

        .links {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex-wrap: wrap;
            gap: 7px;
        }

        .links a {
            display: inline-grid;
            place-items: center;
            width: 30px;
            height: 30px;
            border: 1px solid var(--color-border);
            border-radius: 9px;
            color: var(--color-text-secondary);
            transition:
                color 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease;
        }

        .links a:hover {
            color: var(--color-primary);
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 14%, transparent);
        }

        .links svg {
            width: 15px;
            height: 15px;
        }

        @media (width < 600px) {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;

            .links {
                justify-content: flex-start;
            }
        }
    `},ax=[{label:"Portfolio",href:"https://www.ashishranjan.net/",icon:fn},{label:"GitHub",href:"https://github.com/a2rp",icon:Mf},{label:"CodePen",href:"https://codepen.io/ash1198",icon:nx},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:Of},{label:"Facebook",href:"https://www.facebook.com/theash.ashish/",icon:zf},{label:"YouTube",href:"https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",icon:ox},{label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:Ff},{label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:Rf},{label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:If},{label:"Patreon",href:"https://www.patreon.com/a2rp",icon:Qf}],sx=()=>o.jsxs(ix.Wrapper,{children:[o.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," All rights reserved. By"," ",o.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),o.jsx("nav",{className:"links","aria-label":"Social and support links",children:ax.map(({label:i,href:c,icon:l})=>o.jsx("a",{href:c,target:c.startsWith("mailto:")?void 0:"_blank",rel:c.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":i,title:i,children:o.jsx(l,{"aria-hidden":"true"})},i))})]}),Au={Wrapper:Ae.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 22px 16px 10px;
        background: var(--color-bg);
    `,Container:Ae.div`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        border: 1px solid var(--color-border);
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );
        border-radius: 18px;
        padding: 16px;
        box-shadow: 0 18px 45px var(--color-shadow);

        .top {
            padding: 12px 12px 6px;
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                transparent
            );
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-primary) 22%,
                    var(--color-border)
                );
            margin-bottom: 12px;
        }

        .badgeRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.2px;

            svg {
                font-size: 14px;
                color: var(--color-text-primary);
            }
        }

        .badge.ghost {
            background: transparent;
            border: 1px dashed var(--color-border-light);
            color: var(--color-text-muted);

            svg {
                color: var(--color-text-secondary);
            }
        }

        .title {
            font-size: 22px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            margin-bottom: 6px;
        }

        .sub {
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-size: 13px;
            max-width: 980px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 12px;
            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease,
                background 160ms ease;
        }

        .card:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: var(--color-surface-2);
            box-shadow: 0 16px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .icon {
            height: 38px;
            width: 38px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                var(--color-surface)
            );
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .headText {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .chip {
            font-size: 12px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-code-bg);
            color: var(--color-text-secondary);
            transition:
                transform 140ms ease,
                border-color 140ms ease,
                background 140ms ease;
        }

        .chip:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-code-bg)
            );
            border-color: var(--color-border-light);
        }

        .callout {
            margin-top: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            padding: 12px;
        }

        .callHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .callIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);

            svg {
                font-size: 16px;
            }
        }

        .callTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .callList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
                line-height: 1.65;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 9px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        @media (width < 980px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `},mp=()=>o.jsx(Au.Wrapper,{id:"about-computer-science",children:o.jsxs(Au.Container,{children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"badgeRow",children:[o.jsxs("span",{className:"badge",children:[o.jsx(Jt,{}),"Core Notes"]}),o.jsxs("span",{className:"badge ghost",children:[o.jsx(Mt,{}),"At-a-glance revision"]})]}),o.jsx("h2",{className:"title",children:"Computer Science"}),o.jsx("p",{className:"sub",children:"Computer Science is not just writing programs. It is the study of how computation works across layers - hardware, OS, networks, databases, distributed systems, and scalable architectures."})]}),o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("span",{className:"icon",children:o.jsx(Kt,{})}),o.jsxs("div",{className:"headText",children:[o.jsx("div",{className:"cardTitle",children:"System-level thinking"}),o.jsx("div",{className:"cardMini",children:"Mental models over memorization"})]})]}),o.jsx("p",{className:"p",children:"These notes focus on how systems behave in real life. Scheduling, memory, concurrency, I/O and the trade-offs that decide performance and safety."}),o.jsxs("div",{className:"chips",children:[o.jsx("span",{className:"chip",children:"Processes"}),o.jsx("span",{className:"chip",children:"Threads"}),o.jsx("span",{className:"chip",children:"Scheduling"}),o.jsx("span",{className:"chip",children:"Memory"}),o.jsx("span",{className:"chip",children:"Deadlocks"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("span",{className:"icon",children:o.jsx(fn,{})}),o.jsxs("div",{className:"headText",children:[o.jsx("div",{className:"cardTitle",children:"Data moving across networks"}),o.jsx("div",{className:"cardMini",children:"Protocols and latency intuition"})]})]}),o.jsx("p",{className:"p",children:"Understand how packets move, why TCP behaves the way it does, what DNS really does, and how latency and bandwidth impact system design decisions."}),o.jsxs("div",{className:"chips",children:[o.jsx("span",{className:"chip",children:"OSI"}),o.jsx("span",{className:"chip",children:"TCP"}),o.jsx("span",{className:"chip",children:"UDP"}),o.jsx("span",{className:"chip",children:"HTTP"}),o.jsx("span",{className:"chip",children:"DNS"}),o.jsx("span",{className:"chip",children:"TLS"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("span",{className:"icon",children:o.jsx(mn,{})}),o.jsxs("div",{className:"headText",children:[o.jsx("div",{className:"cardTitle",children:"Databases and correctness"}),o.jsx("div",{className:"cardMini",children:"Transactions, indexing, consistency"})]})]}),o.jsx("p",{className:"p",children:"Learn how data is stored and retrieved efficiently. Indexes, normalization, transactions, isolation levels, and why ACID is not just theory."}),o.jsxs("div",{className:"chips",children:[o.jsx("span",{className:"chip",children:"SQL"}),o.jsx("span",{className:"chip",children:"Joins"}),o.jsx("span",{className:"chip",children:"Indexes"}),o.jsx("span",{className:"chip",children:"ACID"}),o.jsx("span",{className:"chip",children:"Locks"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("span",{className:"icon",children:o.jsx(Ou,{})}),o.jsxs("div",{className:"headText",children:[o.jsx("div",{className:"cardTitle",children:"Scale and architecture"}),o.jsx("div",{className:"cardMini",children:"Reliability under real load"})]})]}),o.jsx("p",{className:"p",children:"System design is about trade-offs. Caching, replication, sharding, queues, load balancing and choosing the simplest architecture that meets the requirements."}),o.jsxs("div",{className:"chips",children:[o.jsx("span",{className:"chip",children:"Caching"}),o.jsx("span",{className:"chip",children:"Sharding"}),o.jsx("span",{className:"chip",children:"Queues"}),o.jsx("span",{className:"chip",children:"CDN"}),o.jsx("span",{className:"chip",children:"LB"})]})]})]}),o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"callHead",children:[o.jsx("span",{className:"callIcon",children:o.jsx(Ft,{})}),o.jsx("div",{className:"callTitle",children:"What you get from this project"})]}),o.jsxs("ul",{className:"callList",children:[o.jsx("li",{children:"Interview-ready revision with clean structure and fast scanning"}),o.jsx("li",{children:"Strong mental models for debugging and performance thinking"}),o.jsx("li",{children:"Clear trade-offs: latency vs throughput, safety vs speed, isolation vs sharing"}),o.jsx("li",{children:"Practical system intuition for real-world software engineering"})]})]})]})}),lx={Wrapper:Ae.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-primary) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 8000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .miniTable {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .miniTitle {
            padding: 10px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 13px;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .v {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 980px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 120px 1fr;
            }
        }

        @media (width < 520px) {
            .sub {
                display: none;
            }
        }
    `},cx=()=>{const[i,c]=ce.useState(!1),l=ce.useMemo(()=>[{id:"os-fundamentals",icon:o.jsx(Mt,{}),title:"Fundamentals",atGlance:["OS is the manager between hardware and apps.","Kernel runs with full privileges, user space runs with limited privileges.","System calls are the official door from user programs to kernel services."],content:[{h:"What is an OS",p:["An Operating System (OS) is the core software that manages hardware and provides services to programs.","It controls CPU time, memory, storage, devices, and keeps programs isolated and secure."],example:{title:"Example",lines:["When you open Chrome, the OS creates a process, gives it memory, schedules CPU time, and lets it read files and use the network safely."]}},{h:"OS goals and types",p:["Common goals are performance, fairness, security, and stability.","Types include batch OS, time-sharing OS, real-time OS, distributed OS, and mobile OS."],example:{title:"Quick intuition",lines:["Real-time OS cares about deadlines.","Time-sharing OS cares about responsive multi-user experience."]}},{h:"Kernel vs User space",p:["Kernel space has full control over the machine and can run privileged instructions.","User space is where normal apps run with restrictions to prevent crashes from taking down the whole system."],example:{title:"Example",lines:["A buggy game can crash, but your OS should stay alive because the game runs in user space."]}},{h:"Monolithic vs Microkernel",p:["Monolithic kernel keeps most services (drivers, filesystem, networking) inside the kernel for speed.","Microkernel keeps the kernel small and moves many services to user space for better isolation."],example:{title:"Trade-off",lines:["Monolithic is often faster.","Microkernel can be safer and easier to isolate faults."]}},{h:"System calls",p:["System calls are APIs provided by the OS to request services like file access, process creation, network operations, and memory allocation.","They switch execution from user mode to kernel mode safely."],example:{title:"Example",lines:["open() - open a file","read() - read from file","fork() - create a new process (Unix-like)"]}}]},{id:"os-process-management",icon:o.jsx(Wu,{}),title:"Process Management",atGlance:["Process is a running program with its own memory and state.","Context switch is when CPU stops one process and starts another.","Scheduling decides who gets CPU next."],content:[{h:"Process vs Program",p:["A program is a passive file on disk (like an .exe).","A process is an active execution of that program with its own memory, CPU registers, and resources."],example:{title:"Example",lines:["You can open the same program twice. That creates two processes."]}},{h:"Process states",p:["Typical states are new, ready, running, waiting (blocked), and terminated.","Ready means it can run but is waiting for CPU.","Waiting means it is paused for I/O or some event."],example:{title:"Example",lines:["When an app is downloading a file, it may be waiting for network I/O."]}},{h:"PCB structure",p:["PCB (Process Control Block) stores everything the OS needs to manage a process.","It usually includes PID, state, registers, program counter, scheduling info, memory mappings, and open files."],example:{title:"Mental model",lines:["PCB is like the OS notebook page for each process."]}},{h:"Context switching",p:["Context switch saves the current process state (registers, program counter) and loads another process state.","It has overhead, so too many switches reduce performance."],example:{title:"Example",lines:["Round Robin uses frequent switches to keep UI responsive, but switching too often wastes CPU time."]}},{h:"Scheduling algorithms",p:["Scheduling decides the order and duration processes get CPU.","Different algorithms optimize different goals like fairness, throughput, or response time."],example:{title:"Real-world note",lines:["Time-sharing systems often use Round Robin-like ideas for responsiveness."]}}],subList:{title:"Common scheduling algorithms",items:[{k:"FCFS",v:"First Come First Serve. Simple. Can cause convoy effect where short jobs wait behind long jobs."},{k:"SJF",v:"Shortest Job First. Minimizes average waiting time. Needs job length estimate."},{k:"Round Robin",v:"Each process gets a time slice (quantum). Fair and responsive."},{k:"Priority",v:"Higher priority runs first. Risk of starvation for low priority tasks."},{k:"Multilevel queue",v:"Separate queues for different task types (system, interactive, batch). Each queue may have its own algorithm."}]}},{id:"os-threads",icon:o.jsx(Oi,{}),title:"Threads",atGlance:["Thread is a lightweight execution path inside a process.","Threads share process memory, so they are faster to switch but need synchronization.","User threads are managed by libraries, kernel threads are managed by OS."],content:[{h:"Process vs Thread",p:["A process has its own address space and resources.","Threads inside a process share memory and resources, but each thread has its own stack and registers."],example:{title:"Example",lines:["A browser process may have threads for UI, network, and rendering working at the same time."]}},{h:"User vs Kernel threads",p:["User-level threads are created and managed in user space, often faster to create.","Kernel-level threads are known to the OS scheduler and can run truly in parallel on multiple CPU cores."],example:{title:"Quick intuition",lines:["Kernel threads are more powerful for real parallelism.","User threads can be lighter but depend on runtime support."]}},{h:"Multithreading models",p:["Many-to-one, one-to-one, many-to-many are classic models.","Modern systems commonly use one-to-one or many-to-many depending on runtime and OS."],example:{title:"Example",lines:["Some language runtimes map many lightweight tasks onto a smaller pool of OS threads."]}},{h:"Thread synchronization",p:["Because threads share memory, they can corrupt shared data if they write at the same time.","Synchronization tools (mutex, semaphore) protect shared resources and enforce safe ordering."],example:{title:"Example",lines:["Two threads updating the same counter must lock or use atomic operations to avoid wrong values."]}}]},{id:"os-metrics",icon:o.jsx(Jt,{}),title:"CPU Scheduling Metrics",atGlance:["These metrics tell you whether scheduling is fair and responsive.","Response time matters for interactive apps.","Throughput matters for batch workloads."],content:[],subList:{title:"Metrics",items:[{k:"Turnaround time",v:"Total time from submission to completion."},{k:"Waiting time",v:"Total time spent waiting in ready queue."},{k:"Response time",v:"Time until the first response, important for UI and interactive tasks."},{k:"Throughput",v:"Number of processes completed per unit time."}]}},{id:"os-sync",icon:o.jsx(yn,{}),title:"Synchronization",atGlance:["Race conditions happen when timing changes the result.","Critical section is the part that must not be executed by multiple threads at once.","Mutex and semaphores are common protection tools."],content:[{h:"Race condition",p:["Race condition occurs when multiple threads access shared data and the final result depends on who runs first.","It can produce random bugs that disappear when you add logs or debugging."],example:{title:"Example",lines:["Two threads read balance = 100, both add 10, both write 110. Correct answer should be 120."]}},{h:"Critical section",p:["Critical section is the code region that reads or writes shared data.","Only one thread should enter at a time to maintain correctness."],example:{title:"Example",lines:["Updating a shared queue, shared counter, or shared cache entry is a critical section."]}},{h:"Mutex",p:["Mutex is a lock that allows only one thread to enter a critical section.","Lock before entering, unlock after leaving."],example:{title:"Example",lines:["Thread A locks, updates shared map, unlocks. Thread B waits until unlock."]}},{h:"Semaphore",p:["Semaphore is a counter-based synchronization tool.","Binary semaphore acts like a mutex. Counting semaphore allows N threads to enter (like limited resources)."],example:{title:"Example",lines:["A connection pool of size 10 can be protected by a counting semaphore of 10."]}}],callout:{icon:o.jsx(st,{}),title:"Deadlock snapshot",lines:["Deadlock is when two or more threads wait forever because each holds a resource the other needs.","Typical case is Thread A holds Lock 1 and waits for Lock 2, while Thread B holds Lock 2 and waits for Lock 1."]}},{id:"os-deadlock",icon:o.jsx(Xt,{}),title:"Deadlock",atGlance:["Deadlock needs 4 conditions. Break one to prevent it.","Avoidance is proactive, detection is reactive.","Banker’s Algorithm is a classic avoidance idea."],content:[],subList:{title:"Deadlock essentials",items:[{k:"Necessary conditions",v:"Mutual exclusion, hold and wait, no preemption, circular wait."},{k:"Detection",v:"System checks for cycles and stuck waits, then recovers by killing or rolling back processes."},{k:"Prevention",v:"Design system to break at least one necessary condition, like ordering locks to avoid circular wait."},{k:"Avoidance",v:"Decide at runtime if granting a resource keeps system in a safe state."},{k:"Banker’s Algorithm",v:"Classic avoidance approach. Only grant if resources remain enough for all processes to eventually finish."}]}},{id:"os-memory",icon:o.jsx(mn,{}),title:"Memory Management",atGlance:["OS must give each process an isolated view of memory.","Virtual memory makes it look like you have more memory than RAM.","Paging and page replacement decide how memory is used efficiently."],content:[{h:"Logical vs Physical address",p:["Logical (virtual) address is what the process uses.","Physical address is the real RAM address.","OS and hardware translate logical to physical using page tables."],example:{title:"Example",lines:["Two processes can both use address 0x1000, but they map to different physical locations."]}},{h:"Paging",p:["Memory is divided into fixed-size pages and frames.","Paging reduces external fragmentation and simplifies allocation."],example:{title:"Example",lines:["Process pages can be placed into any free frames in RAM."]}},{h:"Segmentation",p:["Memory is divided by logical segments like code, stack, heap.","Segmentation matches program structure but can suffer from external fragmentation."],example:{title:"Quick compare",lines:["Paging is fixed-size blocks.","Segmentation is variable-size blocks based on meaning."]}},{h:"Virtual memory",p:["Virtual memory uses disk as an extension of RAM.","Only needed parts stay in RAM, rest can remain on disk until accessed."],example:{title:"Example",lines:["Opening many apps works because inactive pages can be moved out of RAM."]}},{h:"Page replacement algorithms",p:["When RAM is full and a new page is needed, OS must pick a page to evict.","Good eviction choices reduce page faults and improve performance."],example:{title:"Example",lines:["If you keep evicting pages you need soon, system becomes slow and can start thrashing."]}}],subList:{title:"Page replacement",items:[{k:"FIFO",v:"Evict the oldest loaded page. Simple but not always smart."},{k:"LRU",v:"Evict the least recently used page. Often performs better but needs tracking."},{k:"Optimal",v:"Evict the page not needed for the longest time in future. Best in theory, not possible to implement perfectly."}]}},{id:"os-file-systems",icon:o.jsx(Uu,{}),title:"File Systems and Disk Scheduling",atGlance:["File system organizes files and directories on storage.","Allocation method affects performance and fragmentation.","Disk scheduling reduces head movement and improves throughput."],content:[{h:"File allocation methods",p:["Contiguous allocation is simple and fast but can fragment.","Linked allocation reduces fragmentation but can be slower for random access.","Indexed allocation uses an index block for fast random access."],example:{title:"Example",lines:["Video files often benefit from contiguous allocation style because sequential reads are common."]}},{h:"Directory structures",p:["Directories map names to file metadata locations.","Common structures include single-level, two-level, tree, and DAG-like structures."],example:{title:"Example",lines:["A typical OS uses a tree structure: /home/user/docs."]}}],subList:{title:"Disk scheduling",items:[{k:"SCAN",v:"Disk head moves like an elevator, serving requests in one direction then reverses."},{k:"C-SCAN",v:"Like SCAN but returns to start without serving on the way back, gives more uniform wait times."}]}}],[]),m=()=>c(u=>!u);return o.jsxs(lx.Wrapper,{id:"operating-systems",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Kt,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Operating Systems"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for OS fundamentals - processes, threads, scheduling, synchronization, memory, file systems, and disk scheduling."})]})]}),o.jsxs("button",{type:"button",className:i?"toggleBtn open":"toggleBtn",onClick:m,"aria-expanded":i,"aria-controls":"os-content",title:i?"Collapse OS notes":"Expand OS notes",children:[o.jsx("span",{className:"btnIcon",children:i?o.jsx(kt,{}):o.jsx(wt,{})}),o.jsx("span",{className:"btnText",children:i?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"os-content",className:i?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Di,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan the "At a glance" bullets first. Then read examples for real understanding.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,g)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},g))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(st,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Always explain OS topics using trade-offs like performance vs safety, throughput vs latency, and isolation vs sharing."})]})]})]})},dx={Wrapper:Ae.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-accent) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-accent) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 9000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 1060px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        @media (width < 520px) {
            .sub {
                display: none;
            }
        }
    `},ux=()=>{const[i,c]=ce.useState(!1),l=ce.useMemo(()=>[{id:"cn-basics",icon:o.jsx(Mt,{}),title:"Basics",atGlance:["Networks connect devices so they can share data and resources.","OSI is a conceptual 7-layer model, TCP/IP is the practical internet stack.","Encapsulation is wrapping data with headers as it moves down the stack."],content:[{h:"Network types",p:["LAN is a small local network like home or office.","WAN connects larger areas and usually involves ISPs.","PAN is personal area network like Bluetooth devices.","MAN covers a city-scale network (less common in daily dev talk)."],example:{title:"Example",lines:["Your phone and laptop connected via WiFi at home is LAN.","Your home router to the internet is WAN."]}},{h:"OSI model",p:["OSI has 7 layers. It is mainly used to understand and debug networking.","Layers from bottom to top are Physical, Data Link, Network, Transport, Session, Presentation, Application."],example:{title:"Debug mindset",lines:["No internet? Check cable/WiFi (Physical), then IP (Network), then DNS/HTTP (Application)."]}},{h:"TCP/IP model",p:["TCP/IP is the real-world model used on the internet.","Common mapping is Link, Internet, Transport, Application.","OSI is more detailed, TCP/IP is more practical."],example:{title:"Quick mapping",lines:["OSI Network layer roughly maps to TCP/IP Internet layer (IP)."]}},{h:"Encapsulation",p:["Encapsulation means each layer adds its own header around the data.","When sending, data goes down the layers and gets wrapped.","When receiving, headers are removed layer by layer (decapsulation)."],example:{title:"Example",lines:["HTTP data is wrapped inside TCP segment, inside IP packet, inside Ethernet frame."]}}]},{id:"cn-physical",icon:o.jsx(Uu,{}),title:"Physical Layer",atGlance:["Physical layer is about bits over a medium, not IPs or ports.","Bandwidth is how much data can flow, latency is how long it takes to arrive.","Wired is stable, wireless is convenient but noisy."],content:[{h:"Transmission media",p:["Twisted pair (Ethernet) is common for short-distance wiring.","Fiber optic is fast and long-distance with low interference.","Wireless uses radio signals and is affected by interference and obstacles."],example:{title:"Example",lines:["Fiber is used for backbone links, Ethernet for office wiring, WiFi for last meter mobility."]}},{h:"Bandwidth vs Latency",p:["Bandwidth is the maximum data rate (like width of a highway).","Latency is the time delay for a packet to travel (like travel time).","High bandwidth does not guarantee low latency."],example:{title:"Simple intuition",lines:["Downloading a big file needs bandwidth.","Gaming and calls need low latency and stable jitter."]}}]},{id:"cn-datalink",icon:o.jsx(Li,{}),title:"Data Link Layer",atGlance:["Data Link handles local delivery on the same network segment.","MAC addresses identify devices on a local link.","Switches forward frames using MAC tables."],content:[{h:"MAC addressing",p:["MAC address is a hardware-like identifier used inside a local network.","It is used for delivering frames within the same LAN."],example:{title:"Example",lines:["When your laptop sends data to your router on WiFi, it uses MAC addresses at this layer."]}},{h:"ARP",p:["ARP resolves IP address to MAC address on a local network.","If you know the target IP, you still need the MAC to send the frame locally."],example:{title:"Example",lines:["Your laptop wants to reach 192.168.1.1 so it asks 'Who has 192.168.1.1?' and learns the router MAC."]}},{h:"Switching",p:["Switches operate at Data Link layer and forward frames based on destination MAC.","They learn which MAC is on which port by observing traffic (MAC table)."],example:{title:"Why switches help",lines:["A hub broadcasts everywhere, a switch forwards only to the right port, reducing noise."]}}]},{id:"cn-network-layer",icon:o.jsx(Oi,{}),title:"Network Layer",atGlance:["Network layer is about IP addressing and routing between networks.","Subnetting splits a network into smaller networks.","Routers move packets between networks."],content:[{h:"IP addressing",p:["IP address identifies a host on a network and helps route packets across networks.","IPv4 is 32-bit, IPv6 is 128-bit for a much larger address space."],example:{title:"Example",lines:["Your laptop has a private IP like 192.168.x.x inside home network.","Your router has a public IP assigned by ISP for the internet side."]}},{h:"Subnetting",p:["Subnetting divides a large network into smaller ranges using a subnet mask or CIDR prefix.","It helps manage routing, security boundaries, and IP allocation."],example:{title:"Example",lines:["192.168.1.0/24 means 256 addresses in that subnet (0 to 255)."]}},{h:"Routing algorithms",p:["Routing decides the path packets take from source network to destination network.","Common ideas include distance vector and link state routing."],example:{title:"Quick intuition",lines:["Routers maintain tables so they know which next hop leads closer to a network."]}},{h:"ICMP",p:["ICMP is used for network diagnostics and control messages.","Ping uses ICMP echo request and echo reply to test reachability."],example:{title:"Example",lines:["If ping fails, you might have routing, firewall, or connectivity issues."]}}]},{id:"cn-transport",icon:o.jsx(Jt,{}),title:"Transport Layer",atGlance:["Transport is end-to-end communication between applications.","TCP is reliable and ordered, UDP is fast and lightweight.","Ports identify which app should receive the data."],content:[{h:"TCP vs UDP",p:["TCP provides reliable delivery with ordering, retransmissions, and congestion control.","UDP sends packets without guarantees, but with low overhead and lower latency."],example:{title:"Example",lines:["TCP is used for web browsing and file downloads.","UDP is common for live streaming, VoIP, and gaming."]}},{h:"3-way handshake",p:["TCP connection starts with SYN, SYN-ACK, ACK.","This establishes initial sequence numbers and confirms both sides are ready."],example:{title:"Example",lines:["Client says 'SYN' (I want to connect).","Server says 'SYN-ACK' (ok and I also want to connect).","Client says 'ACK' (confirmed)."]}},{h:"Congestion control",p:["Congestion control prevents the network from being overloaded.","TCP adjusts sending rate based on packet loss and RTT changes."],example:{title:"Intuition",lines:["If too many packets drop, TCP slows down to avoid collapse."]}},{h:"Flow control",p:["Flow control ensures sender does not overwhelm the receiver.","TCP uses sliding window so receiver can say how much it can handle."],example:{title:"Example",lines:["A slow device can advertise a smaller receive window to reduce incoming rate."]}}]},{id:"cn-application",icon:o.jsx(fn,{}),title:"Application Layer",atGlance:["This is where real app protocols live like HTTP and DNS.","HTTPS is HTTP plus TLS encryption and identity verification.","DNS turns human names into IP addresses."],content:[{h:"HTTP",p:["HTTP is the web protocol for request and response.","Common methods are GET, POST, PUT, DELETE."],example:{title:"Example",lines:["Browser sends GET /products. Server returns HTML or JSON response."]}},{h:"HTTPS",p:["HTTPS is HTTP over TLS, meaning data is encrypted and protected from tampering.","It also verifies the server identity using certificates."],example:{title:"Example",lines:["Without HTTPS, someone on the same WiFi can sniff or modify traffic."]}},{h:"DNS",p:["DNS resolves domain names into IP addresses.","Your device asks a resolver, which may ask root, TLD, and authoritative servers."],example:{title:"Example",lines:["google.com becomes an IP address so your device knows where to send packets."]}},{h:"FTP",p:["FTP is an older protocol for transferring files.","It is often replaced by SFTP and HTTPS-based upload for security."],example:{title:"Example",lines:["FTP without encryption can expose credentials and file contents."]}},{h:"SMTP",p:["SMTP is used to send emails between mail servers.","Receiving is often done via IMAP or POP3, but sending is SMTP."],example:{title:"Example",lines:["Your app sends email through SMTP provider or an email API built on top of SMTP."]}}]},{id:"cn-advanced",icon:o.jsx(Ft,{}),title:"Advanced",atGlance:["NAT allows many private devices to share one public IP.","Load balancing spreads traffic across servers for reliability and scaling.","CDN puts content closer to users to reduce latency."],content:[{h:"NAT",p:["NAT translates private IP addresses to a public IP for internet access.","This is why many devices at home can share one ISP connection."],example:{title:"Example",lines:["Laptop 192.168.1.10 and phone 192.168.1.11 both appear as the same public IP to the internet."]}},{h:"Load balancing",p:["A load balancer distributes incoming traffic across multiple servers.","It improves availability, helps scaling, and can do health checks."],example:{title:"Example",lines:["If one server fails, load balancer routes traffic to healthy servers."]}},{h:"CDN",p:["CDN caches static content like images, CSS, JS at edge locations near users.","This reduces latency and decreases load on your origin server."],example:{title:"Example",lines:["Your website images load faster in different countries using CDN edge caches."]}},{h:"Network security basics",p:["Use HTTPS, secure DNS settings when possible, and avoid exposing services directly.","Firewalls restrict traffic, VPN encrypts tunnels, and segmentation limits blast radius."],example:{title:"Example",lines:["Closing unused ports and using least privilege reduces attack surface."]}}],callout:{icon:o.jsx(st,{}),title:"Practical debugging order",lines:["Check connectivity (WiFi, cable) then IP and gateway then DNS then HTTP.","Many 'internet down' issues are actually DNS issues."]}}],[]),m=()=>c(u=>!u);return o.jsxs(dx.Wrapper,{id:"computer-networks",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Gu,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Computer Networks"}),o.jsx("p",{className:"sub",children:"At-a-glance revision for OSI layers, TCP/IP, routing, transport, and web protocols with beginner examples."})]})]}),o.jsxs("button",{type:"button",className:i?"toggleBtn open":"toggleBtn",onClick:m,"aria-expanded":i,"aria-controls":"cn-content",title:i?"Collapse Network notes":"Expand Network notes",children:[o.jsx("span",{className:"btnIcon",children:i?o.jsx(kt,{}):o.jsx(wt,{})}),o.jsx("span",{className:"btnText",children:i?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"cn-content",className:i?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Kt,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:"Think in layers. When something fails, locate the layer before guessing the fix."})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,g)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},g))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,g)=>o.jsx("li",{children:p},g))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Xt,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Always explain network problems with a layer-based approach and mention trade-offs like latency vs throughput and reliability vs speed."})]})]})]})},px={Wrapper:Ae.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-primary) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 9000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .exampleBox {
            margin-top: 10px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
        }

        .exbTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exbList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .miniTable {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .miniTitle {
            padding: 10px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 13px;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .v {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 1100px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 140px 1fr;
            }
        }

        @media (width < 560px) {
            .sub {
                display: none;
            }

            .row {
                grid-template-columns: 120px 1fr;
            }
        }
    `},mx=()=>{const[i,c]=ce.useState(!1),l=ce.useMemo(()=>[{id:"dbms-fundamentals",icon:o.jsx(mn,{}),title:"Fundamentals",atGlance:["DBMS stores data safely and lets you query it efficiently.","A database is the data, DBMS is the software managing it.","ACID makes transactions reliable even with failures."],content:[{h:"What is DBMS",p:["DBMS stands for Database Management System. It is software that stores data, organizes it, and provides a safe way to read and write it.","It handles data consistency, security, backup, concurrency, and performance so apps do not reinvent these problems."],example:{title:"Example",lines:["A shopping app uses a DBMS to store users, products, orders, and payments.","DBMS ensures two users can place orders at the same time without corrupting stock counts."]}},{h:"Types of databases",p:["Databases can be relational or non-relational depending on how they store and query data.","Each type is good for certain workloads and trade-offs."],example:{title:"Common types",lines:["Relational (SQL): tables, strict schema, strong consistency","Document: JSON-like documents, flexible schema","Key-Value: fast lookups by key","Columnar: analytics and reporting","Graph: relationships and traversals"]}},{h:"ACID properties",p:["ACID describes reliability rules for transactions.","Transactions are groups of operations that should behave like one unit of work."],example:{title:"ACID in one line each",lines:["Atomicity: all-or-nothing","Consistency: rules remain true","Isolation: transactions do not break each other","Durability: committed data survives crashes"]}}]},{id:"dbms-data-models",icon:o.jsx(Mt,{}),title:"Data Models",atGlance:["Relational model stores data in tables with rows and columns.","ER model is a design tool to plan tables and relationships.","Modeling decides clarity and future flexibility."],content:[{h:"Relational model",p:["Data is stored in relations (tables). Rows are records, columns are attributes.","Relationships are represented using keys and constraints."],example:{title:"Example",lines:["Users(id, name)","Orders(id, userId, total)","Orders.userId references Users.id"]}},{h:"ER model",p:["ER model stands for Entity-Relationship model.","It is used during design to map entities, attributes, and relationships before writing SQL tables."],example:{title:"Example",lines:["Entity: Student","Entity: Course","Relationship: Student enrolls in Course"]}}]},{id:"dbms-sql",icon:o.jsx(_i,{}),title:"SQL",atGlance:["DDL defines structure, DML manipulates data.","Joins combine rows from multiple tables.","Indexes speed reads but cost extra writes and storage."],content:[],subList:{title:"SQL essentials",items:[{k:"DDL",v:"Data Definition Language. Used to create or change schema. Example: CREATE, ALTER, DROP."},{k:"DML",v:"Data Manipulation Language. Used to read and modify data. Example: SELECT, INSERT, UPDATE, DELETE."},{k:"Joins",v:"Combine rows across tables using a condition. Common: INNER, LEFT, RIGHT, FULL (DB dependent)."},{k:"Indexes",v:"Extra data structure to speed up reads. Great for WHERE and JOIN keys."},{k:"Constraints",v:"Rules to keep data valid. Examples: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK."}]},callout:{icon:o.jsx(st,{}),title:"Beginner join intuition",lines:["INNER JOIN returns only matches.","LEFT JOIN returns all left rows and matches from right, missing becomes NULL.","Most real bugs come from wrong join key or missing indexes on join columns."]}},{id:"dbms-normalization",icon:o.jsx(ol,{}),title:"Normalization",atGlance:["Normalization reduces redundancy and update bugs.","It splits tables so one fact lives in one place.","BCNF is a stronger form of 3NF."],content:[],subList:{title:"Normal forms",items:[{k:"1NF",v:"Atomic values. No repeating groups. Each cell holds a single value."},{k:"2NF",v:"No partial dependency on a composite key. Every non-key depends on full key."},{k:"3NF",v:"No transitive dependency. Non-key should not depend on another non-key."},{k:"BCNF",v:"For every dependency X -> Y, X should be a super key. Stronger than 3NF."}]},exampleBox:{title:"Quick example",lines:["Bad: Orders(orderId, userName, userPhone, total)","Better: Users(userId, name, phone) and Orders(orderId, userId, total)","Now updating phone happens in one place only."]}},{id:"dbms-transactions",icon:o.jsx(il,{}),title:"Transactions",atGlance:["Isolation decides how much transactions can see each other.","Locking prevents conflicts but can reduce concurrency.","Deadlocks happen when locks form a cycle."],content:[],subList:{title:"Transaction building blocks",items:[{k:"Isolation levels",v:"Rules for visibility between transactions. Lower isolation is faster but can show anomalies."},{k:"Locking",v:"Shared locks for reads, exclusive locks for writes. Used to protect data correctness."},{k:"Deadlock",v:"Two transactions each wait for a lock held by the other. DB detects and aborts one."}]},callout:{icon:o.jsx(yn,{}),title:"Practical deadlock reduction",lines:["Lock rows in a consistent order in all code paths.","Keep transactions short, do not hold locks while calling external services.","Use proper indexes so queries lock fewer rows."]}},{id:"dbms-indexing",icon:o.jsx(Fu,{}),title:"Indexing",atGlance:["Indexes trade storage and write cost for faster reads.","B Tree and B+ Tree handle range queries well.","Hash indexing is great for exact match lookups."],content:[],subList:{title:"Index types",items:[{k:"B Tree",v:"Balanced tree. Good general-purpose index structure. Supports range queries."},{k:"B+ Tree",v:"Leaf nodes contain sorted data pointers and are linked. Very efficient for range scans."},{k:"Hash indexing",v:"Fast equality lookups like key = value. Not ideal for range queries like BETWEEN."}]},exampleBox:{title:"Index intuition",lines:["WHERE email = 'x' benefits from hash or B+ tree.","WHERE createdAt BETWEEN ... benefits strongly from B+ tree.","Too many indexes make writes slower because DB must update all indexes on insert or update."]}},{id:"dbms-query-optimization",icon:o.jsx(Fi,{}),title:"Query Optimization",atGlance:["DB chooses a plan to execute SQL efficiently.","Execution plan shows how DB will scan, join, and filter.","Cost estimation picks the cheapest plan based on stats."],content:[],subList:{title:"Optimization basics",items:[{k:"Execution plan",v:"Step-by-step strategy DB uses. Examples: index scan, full table scan, hash join, nested loop."},{k:"Cost estimation",v:"DB guesses runtime cost using table size, indexes, and statistics to choose the best plan."}]},callout:{icon:o.jsx(Jt,{}),title:"Beginner debugging steps",lines:["Check if WHERE and JOIN columns are indexed.","Avoid SELECT * in heavy queries.","Look for full table scans on big tables.","Reduce rows early using filters before joins."]}}],[]),m=()=>c(u=>!u);return o.jsxs(px.Wrapper,{id:"dbms",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(mn,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"DBMS"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for DBMS fundamentals - models, SQL, normalization, transactions, indexing, and optimization."})]})]}),o.jsxs("button",{type:"button",className:i?"toggleBtn open":"toggleBtn",onClick:m,"aria-expanded":i,"aria-controls":"dbms-content",title:i?"Collapse DBMS notes":"Expand DBMS notes",children:[o.jsx("span",{className:"btnIcon",children:i?o.jsx(kt,{}):o.jsx(wt,{})}),o.jsx("span",{className:"btnText",children:i?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"dbms-content",className:i?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Oi,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Start with "At a glance", then read examples. This is designed for quick revision before interviews.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision and beginner intuition"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,g)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},g))}),u.exampleBox&&o.jsxs("div",{className:"exampleBox",children:[o.jsx("div",{className:"exbTitle",children:u.exampleBox.title}),o.jsx("ul",{className:"exbList",children:u.exampleBox.lines.map((p,g)=>o.jsx("li",{className:"mono",children:p},g))})]}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Ft,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Always connect DBMS answers to trade-offs like consistency vs availability, indexes vs write cost, and isolation vs performance."})]})]})]})},fx={Wrapper:Ae.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-primary) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 9000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .miniTable {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .miniTitle {
            padding: 10px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 13px;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .v {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .miniTip {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            padding: 10px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        .miniTipIcon {
            font-size: 16px;
            color: var(--color-text-primary);
            flex: 0 0 auto;
            margin-top: 2px;
        }

        .miniTipText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 980px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 120px 1fr;
            }
        }

        @media (width < 520px) {
            .sub {
                display: none;
            }
        }
    `},hx=()=>{const[i,c]=ce.useState(!1),l=ce.useMemo(()=>[{id:"sd-basics",icon:o.jsx(Fi,{}),title:"Basics",atGlance:["Scalability is about handling growth smoothly.","Availability is about being up when users need you.","Reliability is about doing correct work consistently.","CAP theorem explains trade-offs in distributed systems."],content:[{h:"Scalability",p:["Scalability means your system can handle more load by adding resources without breaking.","Two common types are vertical scaling (bigger machine) and horizontal scaling (more machines).","A scalable design avoids single bottlenecks and supports adding capacity gradually."],example:{title:"Example",lines:["If traffic doubles, you can add 2 more app servers behind a load balancer.","If a single database is the bottleneck, you may add read replicas or shard the data."]}},{h:"Availability",p:["Availability means the system is reachable and usable when needed.","High availability uses redundancy so if one part fails, another takes over.","Downtime can come from deployments, crashes, network issues, or bad configuration."],example:{title:"Example",lines:["Two app servers in different zones. If one zone goes down, users still get responses.","Health checks remove unhealthy servers automatically."]}},{h:"Reliability",p:["Reliability means the system works correctly over time and produces correct results.","A system can be available but not reliable if it returns wrong data or loses requests.","Reliability comes from good testing, safe deployments, retries with limits, idempotency, and strong observability."],example:{title:"Example",lines:["Payment API returns success only after the transaction is confirmed and recorded safely.","Using idempotency keys prevents double charging if clients retry."]}},{h:"CAP theorem",p:["CAP says a distributed system cannot guarantee Consistency, Availability, and Partition tolerance at the same time.","Partition tolerance means the system continues operating even if network splits happen.","In real distributed systems, partitions can happen, so the main trade-off becomes Consistency vs Availability during partition."],example:{title:"Quick intuition",lines:["CP system: prefers correctness, may reject or delay requests during partition.","AP system: prefers staying available, may serve slightly stale data during partition."]}}]},{id:"sd-architecture",icon:o.jsx(Mt,{}),title:"Architecture",atGlance:["Monolith is simpler to start, microservices scale teams and domains.","Client-server is the baseline for most apps.","Load balancer spreads traffic, reverse proxy protects and routes traffic."],content:[{h:"Monolith vs Microservices",p:["Monolith is one codebase and usually one deployable unit. It is easier to build and debug early.","Microservices split the system into smaller services. Each service owns a domain and can be deployed independently.","Microservices add complexity: network calls, distributed tracing, deployment coordination, and versioning."],example:{title:"Example",lines:["Monolith: ecommerce app in one backend.","Microservices: auth service, catalog service, orders service, payments service."]}},{h:"Client-server",p:["Client is the app that requests data, server is the app that processes requests and returns responses.","Clients can be web, mobile, desktop, or other services.","APIs define how clients talk to servers. HTTP with JSON is common."],example:{title:"Example",lines:["Browser requests /products, server returns product list as JSON."]}},{h:"Load balancer",p:["A load balancer distributes incoming requests across multiple servers.","It improves availability and scalability by avoiding a single overloaded server.","It also performs health checks and can stop sending traffic to unhealthy instances."],example:{title:"Example",lines:["Round robin sends each request to the next server.","Least connections sends to the server with fewer active connections."]}},{h:"Reverse proxy",p:["A reverse proxy sits in front of your servers and routes requests to the correct backend.","It can handle SSL termination, caching, compression, security headers, and rate limiting.","It hides internal server structure from the public internet."],example:{title:"Example",lines:["Reverse proxy routes /api to backend and / to frontend static site.","It can block suspicious traffic before it reaches your app servers."]}}]},{id:"sd-db-scaling",icon:o.jsx(mn,{}),title:"Database Scaling",atGlance:["Replication improves read capacity and availability.","Sharding splits data across databases to scale writes and storage.","Partitioning splits data inside a database to manage large tables."],content:[{h:"Replication",p:["Replication copies data from a primary database to one or more replicas.","Read replicas increase read throughput and can help during failover.","Replication can be synchronous (stronger consistency, slower writes) or asynchronous (faster, can be slightly stale)."],example:{title:"Example",lines:["Primary handles writes, replicas handle reads for product browsing.","During failover, a replica can be promoted to primary."]}},{h:"Sharding",p:["Sharding splits data across multiple databases so each shard stores only a subset of data.","It helps when a single database cannot handle write load or storage size.","Sharding requires a shard key, like userId, to decide where data lives."],example:{title:"Example",lines:["Users with userId 0-1M in shard A, 1M-2M in shard B.","Orders are routed to shard based on customerId."]}},{h:"Partitioning",p:["Partitioning splits a large table into smaller parts within the same database.","It improves query performance and maintenance by scanning smaller partitions.","Common strategies are range partitioning by date and hash partitioning by id."],example:{title:"Example",lines:["Logs table partitioned by month so queries for last 7 days scan only current partition."]}}]},{id:"sd-caching",icon:o.jsx(Xt,{}),title:"Caching",atGlance:["Caching reduces latency and database load.","Redis is a common in-memory cache and data structure store.","Eviction decides what to remove when cache is full."],content:[{h:"Redis basics",p:["Redis is an in-memory key-value store often used for caching, sessions, rate limiting, queues, and leaderboards.","It is fast because data lives in memory, but you must handle eviction and persistence settings carefully.","Common cache pattern is cache-aside: check cache first, fallback to DB, then fill cache."],example:{title:"Example",lines:["Read product details: key = product:123, value = JSON of product.","Cache-aside: if miss, fetch from DB, set in Redis with TTL."]}},{h:"Cache eviction strategies",p:["Eviction strategy decides what to remove when cache is full.","LRU removes least recently used items.","LFU removes least frequently used items.","TTL based eviction removes expired items first and keeps fresh data."],example:{title:"Example",lines:["Trending products stay in cache due to frequent access.","Old rarely accessed product entries get evicted."]}}],subList:{title:"Common caching patterns",items:[{k:"Cache-aside",v:"App checks cache, on miss reads DB and writes to cache. Simple and common."},{k:"Write-through",v:"Writes go to cache and DB together. Cache stays consistent but writes are slower."},{k:"Write-back",v:"Writes go to cache first, DB later. Faster but risk of data loss if cache fails."}]}},{id:"sd-messaging",icon:o.jsx(Df,{}),title:"Messaging",atGlance:["Queues decouple services and smooth traffic spikes.","Event-driven systems react to events instead of direct calls.","Messaging improves reliability using retries and dead letter queues."],content:[{h:"Message queues",p:["Message queues store tasks so producers and consumers can work independently.","They help handle spikes by buffering work and processing at a stable rate.","Queues improve reliability by allowing retries and tracking failed messages."],example:{title:"Example",lines:["Order placed sends a message to queue, worker processes inventory update.","Email sending runs asynchronously so user request stays fast."]}},{h:"Event driven architecture",p:["In event-driven architecture, services publish events and other services subscribe to react.","Events represent facts like 'OrderCreated' or 'PaymentSucceeded'.","This reduces tight coupling but requires good event schemas and observability."],example:{title:"Example",lines:["Orders service emits OrderCreated event.","Analytics service consumes it and updates dashboards."]}}],callout:{icon:o.jsx(st,{}),title:"Queue terms that interviewers like",lines:["At least once delivery means messages can be delivered more than once, consumers must be idempotent.","Dead letter queue stores messages that fail repeatedly.","Backpressure means slowing producers when consumers cannot keep up."]}},{id:"sd-patterns",icon:o.jsx(Yf,{}),title:"Design Patterns",atGlance:["Rate limiter protects your system from abuse and spikes.","API gateway is the front door for microservices.","Circuit breaker prevents cascading failures."],content:[{h:"Rate limiter",p:["Rate limiting controls how many requests a client can make in a time window.","It protects against abuse and prevents one client from taking all resources.","Common algorithms include token bucket and leaky bucket."],example:{title:"Example",lines:["Limit login attempts to 5 per minute per IP.","Allow 100 requests per minute per userId for public API."]}},{h:"API gateway",p:["API gateway is a single entry point for client requests in microservices.","It can handle routing, authentication, rate limiting, caching, and request aggregation.","It keeps clients simple because they call one endpoint instead of many services."],example:{title:"Example",lines:["Mobile app calls gateway, gateway calls user service and orders service and combines response."]}},{h:"Circuit breaker",p:["Circuit breaker stops calling a failing service for a short time to prevent overload.","It has states: closed (normal), open (blocked), half-open (test requests).","This prevents cascading failure where one broken service takes down the entire system."],example:{title:"Example",lines:["If payment service is failing, circuit opens and app returns a friendly error quickly instead of hanging."]}}],subList:{title:"Practical usage notes",items:[{k:"Rate limiter",v:"Use at edge like reverse proxy or gateway. Store counters in Redis."},{k:"API gateway",v:"Good for authentication and routing. Avoid too much business logic inside gateway."},{k:"Circuit breaker",v:"Pair with timeouts and retries. Unlimited retries can kill systems."}]}}],[]),m=()=>c(u=>!u);return o.jsxs(fx.Wrapper,{id:"system-design",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(ol,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"System Design"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for scalability, reliability, databases, caching, messaging, and architecture patterns."})]})]}),o.jsxs("button",{type:"button",className:i?"toggleBtn open":"toggleBtn",onClick:m,"aria-expanded":i,"aria-controls":"system-design-content",title:i?"Collapse system design notes":"Expand system design notes",children:[o.jsx("span",{className:"btnIcon",children:i?o.jsx(kt,{}):o.jsx(wt,{})}),o.jsx("span",{className:"btnText",children:i?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"system-design-content",className:i?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Di,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan "At a glance" first, then read examples. In interviews, always explain trade-offs.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Beginner notes with short examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,g)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},g))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]}),o.jsxs("div",{className:"miniTip",children:[o.jsx(Ft,{className:"miniTipIcon"}),o.jsx("div",{className:"miniTipText",children:"Practical tip: always add timeouts, retries with limits, and monitoring."})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Ri,{})}),o.jsx("div",{className:"footerText",children:"Interview tip: describe system design using components like load balancer, cache, queue, database, and then explain bottlenecks and trade-offs."})]})]})]})},xx={Wrapper:Ae.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-primary) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 9000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .miniTable {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .miniTitle {
            padding: 10px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 13px;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .v {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 980px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 120px 1fr;
            }
        }

        @media (width < 520px) {
            .sub {
                display: none;
            }
        }
    `},gx=()=>{const[i,c]=ce.useState(!1),l=ce.useMemo(()=>[{id:"se-sdlc",icon:o.jsx(il,{}),title:"SDLC models",atGlance:["SDLC is the step-by-step process to build and maintain software.","Different models fit different risk levels and project clarity.","Pick model based on uncertainty, compliance needs, and speed."],content:[{h:"What is SDLC",p:["SDLC stands for Software Development Life Cycle.","It describes how a product moves from idea to development, testing, release, and maintenance.","A clear SDLC reduces chaos and makes delivery predictable."],example:{title:"Typical phases",lines:["Requirements - What problem to solve","Design - How to solve it","Implementation - Build it","Testing - Verify it","Deployment - Release it","Maintenance - Fix and improve"]}},{h:"Common SDLC models",p:["Waterfall: linear phases. Good when requirements are stable and compliance-heavy.","Iterative: build in repeated cycles, learn, improve.","Incremental: deliver feature chunks over time.","Spiral: iterative with strong risk analysis each cycle."],example:{title:"When to use",lines:["Waterfall - government or compliance projects with fixed scope","Iterative - product development with changing requirements","Spiral - high risk systems like safety or financial systems"]}}],subList:{title:"Model quick compare",items:[{k:"Waterfall",v:"Simple planning, slower feedback, expensive changes later."},{k:"Iterative",v:"Fast feedback, improves over cycles, needs good planning discipline."},{k:"Incremental",v:"Ship in parts, reduces risk, requires solid integration strategy."},{k:"Spiral",v:"Risk-first approach, good for complex systems, heavier process."}]}},{id:"se-agile",icon:o.jsx(Fi,{}),title:"Agile",atGlance:["Agile is a mindset for fast feedback and continuous improvement.","Deliver small increments, learn from users, and adapt quickly.","Works best when requirements evolve and teams collaborate closely."],content:[{h:"Agile basics",p:["Agile focuses on short cycles, frequent delivery, and reacting to change instead of rigid long-term plans.","Agile is not just meetings. It is about measurable delivery and feedback loops."],example:{title:"Example",lines:["Instead of planning 6 months and launching once, ship every 1 to 2 weeks and improve using real user feedback."]}},{h:"Key Agile ideas",p:["Small batches: deliver small features quickly.","Transparency: everyone knows progress and blockers.","Continuous improvement: regularly improve process and code."],example:{title:"Quick mental model",lines:["Agile is like steering a bike with frequent small corrections, not like steering a ship with one huge turn."]}}]},{id:"se-scrum",icon:o.jsx(Xf,{}),title:"Scrum",atGlance:["Scrum is a popular Agile framework with sprints and roles.","Sprints are short fixed-time cycles with a clear goal.","Daily sync keeps blockers visible and progress real."],content:[{h:"Scrum roles",p:["Product Owner: owns priority and product direction.","Scrum Master: removes blockers and protects process.","Development Team: builds and delivers increment."],example:{title:"Simple example",lines:["PO says: build login first.","Team estimates and commits to sprint goal.","Scrum Master helps remove dependency or delay."]}},{h:"Scrum events",p:["Sprint planning: choose work for sprint.","Daily scrum: short daily sync.","Sprint review: demo what is done.","Sprint retrospective: improve the process."],example:{title:"Why it works",lines:["Because it forces regular delivery and honest reflection."]}}],subList:{title:"Scrum terms",items:[{k:"Sprint",v:"Fixed time box, often 1 to 2 weeks, focused delivery window."},{k:"Backlog",v:"Ordered list of work items."},{k:"Increment",v:"Potentially shippable output at sprint end."},{k:"Definition of Done",v:"Clear checklist for when work is considered complete."}]}},{id:"se-version-control",icon:o.jsx(Fu,{}),title:"Version control",atGlance:["Version control tracks changes and enables safe collaboration.","Branches allow parallel work without breaking main line.","Good commit history reduces debugging pain later."],content:[{h:"Why version control matters",p:["It keeps a history of changes, so you can roll back mistakes and understand what changed.","It supports collaboration by merging work from multiple people safely."],example:{title:"Example",lines:["A bug appears today. You use git blame and commit history to find the exact change that caused it."]}},{h:"Branching and merging basics",p:["Branch is an isolated line of development.","Merge combines changes from branches.","Pull request is a review step before merging."],example:{title:"Healthy workflow",lines:["main stays stable","feature branch for each task","PR review before merge"]}}]},{id:"se-testing",icon:o.jsx(Ri,{}),title:"Testing types",atGlance:["Testing reduces risk and increases confidence in changes.","Different tests catch different failures at different cost.","Aim for fast feedback with unit tests, plus coverage with integration tests."],content:[{h:"Testing overview",p:["Testing verifies expected behavior and prevents regressions.","A good test strategy balances speed, coverage, and maintainability."],example:{title:"Key idea",lines:["Unit tests are fast and cheap.","End-to-end tests are slow and expensive but catch real user flows."]}}],subList:{title:"Common testing types",items:[{k:"Unit testing",v:"Test a small function or module in isolation."},{k:"Integration testing",v:"Test multiple modules together like API + DB."},{k:"End-to-end testing",v:"Test full user flow like login -> checkout."},{k:"Regression testing",v:"Ensure old features still work after changes."},{k:"Smoke testing",v:"Quick check that the app starts and core paths work."},{k:"Performance testing",v:"Measure speed, throughput, latency under load."},{k:"Security testing",v:"Check vulnerabilities like injection and auth flaws."}]}},{id:"se-cicd",icon:o.jsx(Wf,{}),title:"CI/CD basics",atGlance:["CI means automatically building and testing changes.","CD means automatically delivering changes to environments.","Automation reduces human mistakes and speeds delivery."],content:[{h:"CI and CD",p:["Continuous Integration means every push triggers build and tests.","Continuous Delivery means changes are always ready to deploy.","Continuous Deployment means changes go live automatically after passing checks."],example:{title:"Example pipeline",lines:["push to repo","run lint + tests","build","deploy to staging","optional approval","deploy to production"]}},{h:"Why CI/CD matters",p:["It catches bugs early, reduces integration problems, and speeds release cycles.","It also enforces consistent checks across the team."],example:{title:"Real-world win",lines:["Without CI, bugs pile up and integration becomes painful near release time."]}}]},{id:"se-code-reviews",icon:o.jsx(Ft,{}),title:"Code reviews",atGlance:["Code reviews improve quality and reduce bugs.","They are also knowledge sharing and consistency enforcement.","Best reviews focus on correctness, readability, and maintainability."],content:[{h:"What to check in a review",p:["Correctness: does it do what it claims.","Edge cases: nulls, errors, retries, timeouts.","Readability: naming, structure, clear intent.","Security: input validation, auth checks.","Performance: avoid accidental O(n^2) and unnecessary calls."],example:{title:"Example comment style",lines:["Instead of saying 'wrong', say 'this can fail when input is empty, add a guard'."]}},{h:"Review anti-patterns",p:["Only style nitpicks and ignoring logic issues.","Huge PRs that are impossible to review properly.","Personal attacks or unclear feedback."],example:{title:"Healthy practice",lines:["Small PRs, clear descriptions, and objective feedback."]}}]},{id:"se-documentation",icon:o.jsx(Pf,{}),title:"Documentation",atGlance:["Docs reduce onboarding time and prevent repeated mistakes.","Good docs explain why, not just what.","Keep docs close to code and update them with changes."],content:[{h:"What to document",p:["Setup steps, environment variables, and run commands.","Architecture overview and key decisions.","API contracts and error handling rules.","Deployment steps and rollback strategy."],example:{title:"Example docs",lines:["README for quick start","ADR for decision logs","API docs for endpoints and payloads"]}},{h:"Common doc mistakes",p:["Docs that go stale because they are not maintained.","Docs that are too long but still miss critical info.","Docs that explain commands but not the reasoning."],example:{title:"Rule",lines:["If docs do not match reality, developers stop trusting them."]}}]},{id:"se-technical-debt",icon:o.jsx(nl,{}),title:"Technical debt",atGlance:["Tech debt is future cost caused by shortcuts today.","Not all debt is bad if it is planned and paid back.","Uncontrolled debt slows development and increases bugs."],content:[{h:"What is technical debt",p:["Technical debt is the long-term cost of quick fixes, messy architecture, missing tests, or rushed decisions.","It usually shows up as slower delivery, higher bug rate, and fear of changing code."],example:{title:"Example",lines:["Hardcoding values to ship quickly works today, but later every change becomes risky and slow."]}},{h:"How to manage it",p:["Track debt like a backlog item, not like a hidden problem.","Refactor in small steps, with tests.","Set a rule: every sprint allocate time to pay debt."],example:{title:"Simple tactic",lines:["When you touch a messy file, improve one small part while keeping behavior same."]}}],callout:{icon:o.jsx(st,{}),title:"Quick warning signs",lines:["Developers avoid touching certain files.","Build times and deploy times keep increasing.","Small changes break unrelated features.","Same bugs keep coming back."]}}],[]),m=()=>c(u=>!u);return o.jsxs(xx.Wrapper,{id:"software-engineering",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(qf,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Software Engineering"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for SDLC, Agile, Scrum, Git workflows, testing, CI/CD, reviews, docs, and technical debt."})]})]}),o.jsxs("button",{type:"button",className:i?"toggleBtn open":"toggleBtn",onClick:m,"aria-expanded":i,"aria-controls":"se-content",title:i?"Collapse Software Engineering notes":"Expand Software Engineering notes",children:[o.jsx("span",{className:"btnIcon",children:i?o.jsx(kt,{}):o.jsx(wt,{})}),o.jsx("span",{className:"btnText",children:i?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"se-content",className:i?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Di,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan the "At a glance" bullets first. Use examples to lock the idea into memory.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,g)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},g))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Lf,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Talk like an engineer. Mention trade-offs like speed vs safety, quality vs time, and automation vs manual risk."})]})]})]})},vx={Wrapper:Ae.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-primary) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 8000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .miniTable {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .miniTitle {
            padding: 10px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 13px;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .v {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 980px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 120px 1fr;
            }
        }

        @media (width < 520px) {
            .sub {
                display: none;
            }
        }
    `},yx=()=>{const[i,c]=ce.useState(!1),l=ce.useMemo(()=>[{id:"cd-phases",icon:o.jsx(Mt,{}),title:"Compiler Phases",atGlance:["Compiler converts source code into machine code step by step.","Each phase produces output for the next phase.","Errors are found at different phases like syntax vs semantics."],content:[{h:"What is a compiler",p:["A compiler is a program that translates high-level source code into a lower-level form like assembly or machine code.","It also checks errors and tries to optimize code for better performance."],example:{title:"Example",lines:["C or C++ code is compiled into an executable.","Java is compiled into bytecode that runs on the JVM."]}},{h:"Lexical analysis",p:["Lexical analysis breaks the source code into tokens like keywords, identifiers, numbers, and operators.","This phase removes whitespace and comments and produces a token stream for the parser."],example:{title:"Example tokenization",lines:["Code: int x = 10;","Tokens: [int] [identifier:x] [=] [number:10] [;]"]}},{h:"Syntax analysis and parsing",p:["Syntax analysis checks whether the token sequence follows grammar rules.","Parsing builds a parse tree or syntax tree that represents the structure of the program."],example:{title:"Example",lines:["Code: x = 10 + 2","Parser checks that assignment and expression rules are valid."]}},{h:"Semantic analysis",p:["Semantic analysis checks meaning, not just grammar.","It checks types, variable declarations, scope rules, and function argument matching."],example:{title:"Example semantic errors",lines:["int x = 'hello' - type mismatch","y = 5 - y not declared"]}},{h:"Intermediate code generation",p:["Compiler converts the syntax tree into an intermediate representation (IR).","IR is easier to optimize and can be reused for different target machines."],example:{title:"Example IR idea",lines:["Expression: a = b + c","IR: t1 = b + c, a = t1"]}},{h:"Optimization",p:["Optimization improves performance or reduces memory without changing program output.","It can remove dead code, reduce redundant calculations, and simplify expressions."],example:{title:"Example optimization",lines:["x = 2 * 8 can become x = 16","Repeated: (a + b) used many times can be computed once"]}},{h:"Code generation",p:["Final phase converts IR into target code like assembly or machine instructions.","It includes register allocation and instruction selection."],example:{title:"Example output",lines:["IR becomes assembly instructions like MOV, ADD, JMP","Then assembler turns it into machine code bytes"]}}]},{id:"cd-parsing",icon:o.jsx(Bu,{}),title:"Parsing Types",atGlance:["LL parsing is top-down. It predicts productions from left to right.","LR parsing is bottom-up. It reduces input into grammar rules.","LR is more powerful than LL for many grammars."],content:[{h:"Parsing in simple words",p:["Parsing is the process of taking tokens and building structure.","The parser tries to match token sequences to grammar rules so the compiler understands code."],example:{title:"Beginner mental model",lines:["Tokens are like words.","Grammar is like sentence rules.","Parser checks if the sentence is valid and builds a tree."]}}],subList:{title:"Common parser families",items:[{k:"LL parser",v:"Top-down parsing. Reads input Left to right and produces Leftmost derivation. Often easier to implement but less powerful."},{k:"LR parser",v:"Bottom-up parsing. Reads input Left to right and produces Rightmost derivation in reverse. More powerful and common in real compilers."}]},callout:{icon:o.jsx(st,{}),title:"Quick intuition",lines:["LL tries to expand rules to match input.","LR tries to reduce input back into rules.","If grammar is complex, LR usually handles it better."]}},{id:"cd-automata",icon:o.jsx(Jt,{}),title:"Automata Basics",atGlance:["Automata are machines that recognize patterns.","Lexer often uses automata to recognize tokens.","DFA is deterministic, NFA is nondeterministic."],content:[{h:"Why automata matters in compilers",p:["Lexical analysis needs a fast way to recognize patterns like identifiers, numbers, and keywords.","Regular expressions define token patterns, and automata can implement them efficiently."],example:{title:"Example",lines:["Identifier pattern: letter followed by letters or digits","Number pattern: digits with optional decimal part"]}}],subList:{title:"DFA vs NFA",items:[{k:"NFA",v:"Nondeterministic Finite Automaton. Can have multiple possible next states for the same input. Easier to build from regex."},{k:"DFA",v:"Deterministic Finite Automaton. Only one next state per input. Faster to run. NFA can be converted to DFA."}]},callout:{icon:o.jsx(Xt,{}),title:"Common interview note",lines:["Regex to NFA is straightforward.","NFA to DFA uses subset construction.","DFA is usually preferred for fast tokenizing."]}},{id:"cd-mini-map",icon:o.jsx(Vf,{}),title:"At a Glance Map",atGlance:["Lexer turns text into tokens.","Parser turns tokens into a tree.","Semantic phase checks meaning and types."],content:[],subList:{title:"One-line flow",items:[{k:"Lexical",v:"Characters to tokens"},{k:"Parsing",v:"Tokens to parse tree or AST"},{k:"Semantic",v:"AST plus symbol table checks"},{k:"IR",v:"AST to intermediate code"},{k:"Optimize",v:"IR improvements"},{k:"Generate",v:"IR to assembly or machine code"}]}}],[]),m=()=>c(u=>!u);return o.jsxs(vx.Wrapper,{id:"compiler-design",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(_i,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Compiler Design"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for compiler phases, parsing, and automata used in lexing."})]})]}),o.jsxs("button",{type:"button",className:i?"toggleBtn open":"toggleBtn",onClick:m,"aria-expanded":i,"aria-controls":"cd-content",title:i?"Collapse compiler notes":"Expand compiler notes",children:[o.jsx("span",{className:"btnIcon",children:i?o.jsx(kt,{}):o.jsx(wt,{})}),o.jsx("span",{className:"btnText",children:i?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"cd-content",className:i?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Kt,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan "At a glance" first. Then read examples to connect grammar and automata ideas to real code behavior.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,g)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},g))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Gf,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Explain the pipeline with one small example and show where each error type is caught: lexical, syntax, semantic."})]})]})]})},bx={Wrapper:Ae.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-primary) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 9000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 980px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        @media (width < 520px) {
            .sub {
                display: none;
            }
        }
    `},wx=()=>{const[i,c]=ce.useState(!1),l=ce.useMemo(()=>[{id:"ds-models",icon:o.jsx(fn,{}),title:"Distributed models",atGlance:["Distributed system means multiple machines working together as one system.","Main pain is failures and network delays, not just code.","Design is about trade-offs: consistency, availability, latency."],content:[{h:"What is a distributed model",p:["A distributed model describes how components communicate and coordinate when they are running on different machines.","Unlike single-machine programs, distributed systems must handle partial failures, slow networks, and out-of-order messages."],example:{title:"Example",lines:["A chat app uses multiple servers: one for authentication, one for messaging, one for storage. They coordinate over the network."]}},{h:"Common models",p:["Client-server is the most common model where clients request and servers respond.","Peer-to-peer systems allow nodes to act as both client and server.","Microservices is a distributed model where each service owns a small responsibility and communicates via APIs or events."],example:{title:"Quick intuition",lines:["Client-server is simpler.","Peer-to-peer can scale but is harder to coordinate.","Microservices improve isolation but increase coordination complexity."]}},{h:"Why distributed is hard",p:["Network is unreliable: packets can be lost, delayed, duplicated, or arrive out of order.","You cannot assume all machines share the same clock or fail at the same time.","Some nodes may be alive but unreachable, creating split-brain situations."],example:{title:"Classic headache",lines:["A service times out and retries, but the original request actually succeeded, causing duplicate operations."]}}]},{id:"ds-rpc",icon:o.jsx(Wu,{}),title:"RPC",atGlance:["RPC makes a remote call look like a local function call.","Failures are normal: timeouts and retries must be designed carefully.","Idempotency is your best friend for safe retries."],content:[{h:"What is RPC",p:["RPC (Remote Procedure Call) lets a program call a function on another machine as if it was local.","Under the hood it does serialization, networking, and deserialization."],example:{title:"Example",lines:["orderService.createOrder(userId, items) calls a remote service over the network."]}},{h:"Timeouts and retries",p:["Timeout does not mean failure, it means you did not get a response in time.","Retries can cause duplicate work if the server actually processed the request."],example:{title:"Safe retry example",lines:["Use an idempotency key like orderId so repeating the same request does not create multiple orders."]}},{h:"At-least-once vs at-most-once",p:["At-least-once delivery means retries happen and duplicates are possible.","At-most-once delivery tries to avoid duplicates but can drop requests if not careful.","Exactly-once is extremely hard and usually simulated with idempotency and deduplication."],example:{title:"Mental model",lines:["In distributed systems, you usually choose between occasional duplicates or occasional drops, then build safety around it."]}}]},{id:"ds-consensus",icon:o.jsx(Ri,{}),title:"Consensus algorithms",atGlance:["Consensus means nodes agree on one value, even with failures.","Used for leader election and replicated logs.","Raft is easier to understand, Paxos is more theoretical."],content:[{h:"What is consensus",p:["Consensus algorithms help a group of machines agree on a single decision like who is leader or what the next log entry is.","This is critical when nodes can fail or messages can be delayed."],example:{title:"Example",lines:["A database cluster needs one leader to accept writes. Consensus elects that leader."]}},{h:"When you need consensus",p:["Leader election: choose one leader among many nodes.","Replicated state machine: keep multiple copies of data in sync using a shared log of operations.","Coordination services: configuration, locks, membership."],example:{title:"Real-world systems",lines:["ZooKeeper and etcd use consensus-like mechanisms for coordination."]}}]},{id:"ds-2pc",icon:o.jsx(il,{}),title:"Two phase commit",atGlance:["2PC coordinates a transaction across multiple services or databases.","Phase 1 asks if everyone can commit, Phase 2 commits or aborts.","Main downside is blocking if coordinator fails."],content:[{h:"What is Two Phase Commit",p:["Two Phase Commit (2PC) is a protocol to make multiple participants commit a transaction together.","It is used when one logical operation touches multiple databases or services and you want all-or-nothing behavior."],example:{title:"Example",lines:["Transfer money: debit account service and credit another service must both commit or both rollback."]}},{h:"How it works",p:["Phase 1 (prepare): coordinator asks participants to prepare and vote yes or no.","Phase 2 (commit): if all vote yes, coordinator tells everyone to commit, else abort."],example:{title:"Simple flow",lines:["Coordinator -> prepare","Participants -> yes/no","Coordinator -> commit/abort"]}},{h:"Why it can block",p:["If coordinator crashes after participants prepared, they may be stuck waiting.","This makes 2PC a blocking protocol and less ideal under failures."],example:{title:"Practical note",lines:["Modern systems often prefer sagas and compensating actions instead of strict 2PC across services."]}}]},{id:"ds-paxos",icon:o.jsx(Mt,{}),title:"Paxos",atGlance:["Paxos is a family of consensus algorithms.","It is correct but hard to implement and explain.","Often learned for theory, not written from scratch in apps."],content:[{h:"What is Paxos",p:["Paxos is a consensus protocol that ensures safety even with failures and message delays.","It uses roles like proposer, acceptor, and learner to agree on values."],example:{title:"Beginner intuition",lines:["Nodes propose values, acceptors choose one based on rules that prevent conflicting decisions."]}},{h:"Why Paxos is famous",p:["It proved that consensus can be achieved safely in unreliable networks under certain assumptions.","Many practical systems are inspired by Paxos or use simplified variants."],example:{title:"Practical reality",lines:["You usually use existing libraries or systems rather than implementing Paxos directly."]}}]},{id:"ds-raft",icon:o.jsx(Kt,{}),title:"Raft",atGlance:["Raft is designed to be understandable and practical.","It uses leader-based replication with a replicated log.","Main parts: leader election, log replication, safety."],content:[{h:"What is Raft",p:["Raft is a consensus algorithm that keeps multiple nodes consistent by using a single leader.","The leader replicates a log of operations to followers."],example:{title:"Example",lines:["A config store like etcd can use Raft so all nodes agree on the same configuration changes."]}},{h:"Leader election",p:["Nodes start as followers. If they do not hear from a leader, they become candidates.","Candidates ask for votes. Majority vote wins and becomes leader."],example:{title:"Key idea",lines:["Majority quorum prevents split-brain decisions."]}},{h:"Log replication",p:["Clients send writes to leader. Leader appends to its log and replicates to followers.","Once a majority confirms, the entry is committed and applied."],example:{title:"Why it works",lines:["Majority confirmation ensures the committed history survives node failures."]}}]},{id:"ds-consistency",icon:o.jsx(Jt,{}),title:"Consistency models",atGlance:["Consistency is about what values reads can return in a distributed system.","Strong consistency feels like a single database.","Weaker models allow stale reads but reduce latency and improve availability."],content:[{h:"Strong consistency",p:["After a write completes, all reads return the latest value.","Often needs coordination like consensus or synchronous replication."],example:{title:"Example",lines:["Bank balance reads should usually be strongly consistent to avoid showing wrong money."]}},{h:"Eventual consistency",p:["If no new updates happen, all replicas will eventually converge to the same value.","Reads can be stale for a short time, but system stays available under partitions."],example:{title:"Example",lines:["Social media like counts can be eventually consistent because slight delay is acceptable."]}},{h:"Trade-off mindset",p:["Strong consistency often increases latency because nodes must coordinate.","Eventual consistency improves availability and speed but needs conflict handling."],example:{title:"Rule of thumb",lines:["Money and security need stronger consistency.","Analytics and feeds can accept eventual consistency."]}}]},{id:"ds-locking",icon:o.jsx(yn,{}),title:"Distributed locking",atGlance:["Distributed lock coordinates access to a shared resource across machines.","Hard because locks can get stuck if node crashes.","Leases and timeouts help prevent permanent locks."],content:[{h:"What is a distributed lock",p:["A distributed lock ensures only one node performs a critical operation at a time, across a cluster.","This is useful for leader-only jobs, scheduled tasks, or preventing double processing."],example:{title:"Example",lines:["Only one worker should run daily billing job even if 5 instances are running."]}},{h:"Why it is tricky",p:["If a node holding the lock crashes, the lock can remain stuck unless there is a timeout or lease.","Network partitions can cause two nodes to think they have the lock if design is weak."],example:{title:"Classic failure",lines:["Node A acquires lock, network splits, Node B also acquires lock and both process same job."]}},{h:"Leases and fencing tokens",p:["Lease means lock expires after time unless renewed.","Fencing token is a monotonically increasing number that prevents old lock holders from making writes."],example:{title:"Simple safety idea",lines:["Resource only accepts operations with the newest token, so stale nodes cannot damage data."]}}],callout:{icon:o.jsx(nl,{}),title:"Locking is expensive",lines:["Prefer designs that avoid distributed locks when possible.","If you must lock, use proven systems like etcd or ZooKeeper and design for failure."]}}],[]),m=()=>c(u=>!u);return o.jsxs(bx.Wrapper,{id:"distributed-systems",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(fn,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Distributed Systems"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for distributed models, RPC, consensus, 2PC, Paxos, Raft, consistency, and distributed locking."})]})]}),o.jsxs("button",{type:"button",className:i?"toggleBtn open":"toggleBtn",onClick:m,"aria-expanded":i,"aria-controls":"ds-content",title:i?"Collapse Distributed Systems notes":"Expand Distributed Systems notes",children:[o.jsx("span",{className:"btnIcon",children:i?o.jsx(kt,{}):o.jsx(wt,{})}),o.jsx("span",{className:"btnText",children:i?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"ds-content",className:i?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(st,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan "At a glance" first. Then read examples. Distributed systems are mostly about failure cases and trade-offs.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,g)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},g))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,g)=>o.jsx("li",{children:p},g))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Xt,{})}),o.jsx("div",{className:"footerText",children:'Interview tip - Always mention network failures, timeouts, retries, and trade-offs. In distributed systems, "works on my machine" is a joke, not a plan.'})]})]})]})},kx={Wrapper:Ae.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-primary) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 8000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 980px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        @media (width < 520px) {
            .sub {
                display: none;
            }
        }
    `},jx=()=>{const[i,c]=ce.useState(!1),l=ce.useMemo(()=>[{id:"pc-parallel-vs-concurrent",icon:o.jsx(Bu,{}),title:"Parallel vs Concurrent",atGlance:["Concurrency is about dealing with many things at once.","Parallelism is about doing many things at the same time.","You can have concurrency without parallelism on a single core."],content:[{h:"Parallelism",p:["Parallelism means tasks literally run at the same time using multiple CPU cores or GPUs.","Goal is to reduce total time by splitting work into parts that can execute simultaneously."],example:{title:"Example",lines:["Rendering 4K video by splitting frames across multiple cores.","Processing a large array by dividing it into chunks and computing each chunk on different cores."]}},{h:"Concurrency",p:["Concurrency means making progress on multiple tasks by switching between them.","Even on one CPU core, OS can switch tasks quickly so the system feels like it runs many tasks together."],example:{title:"Example",lines:["A browser handling UI events while also downloading data.","Node.js event loop doing many I/O tasks by switching callbacks."]}},{h:"Key difference (memory intuition)",p:["Concurrency is about structure and coordination.","Parallelism is about hardware speedup.","Parallelism usually introduces shared data issues, so synchronization matters."],example:{title:"Quick check",lines:["Single core - can be concurrent, cannot be truly parallel.","Multi core - can be both concurrent and parallel."]}}]},{id:"pc-amdahl",icon:o.jsx(Jt,{}),title:"Amdahl's Law",atGlance:["Speedup is limited by the serial part you cannot parallelize.","Even 1000 cores cannot fix a big serial bottleneck.","Optimize the serial part first for real gains."],content:[{h:"What it says",p:["Amdahl's Law states that the maximum speedup of a program from parallelization is limited by the fraction that must run sequentially.","If a fraction of your code is serial, that part becomes the ceiling on speedup."],example:{title:"Beginner formula intuition",lines:["If 10% is serial, best possible speedup is about 10x, even with infinite processors.","If 30% is serial, best possible speedup is about 3.33x."]}},{h:"Why it matters",p:["Parallel optimization only helps the parallel portion.","Real systems often have serial bottlenecks like I/O, locks, or a single-threaded coordinator."],example:{title:"Real-world example",lines:["A database query might be parallel, but final aggregation or locking can be serial and limit speed."]}},{h:"Practical takeaway",p:["Measure before adding threads.","Reduce serial work, reduce lock contention, batch I/O, and avoid unnecessary synchronization."],example:{title:"Checklist",lines:["Reduce critical sections.","Avoid a single global lock.","Use chunked processing to reduce coordination overhead."]}}],callout:{icon:o.jsx(st,{}),title:"Mental model",lines:["Parallelism is not magic.","If your program spends time waiting on one slow step, more cores just wait faster."]}},{id:"pc-simd",icon:o.jsx(ol,{}),title:"SIMD",atGlance:["SIMD means one instruction processes multiple data items.","Great for arrays, vectors, images, and signal processing.","It is parallelism inside the CPU itself."],content:[{h:"What is SIMD",p:["SIMD stands for Single Instruction Multiple Data.","CPU executes one instruction that applies to a vector of data values at once."],example:{title:"Example",lines:["Add 8 integers in one CPU instruction using vector registers.","Apply the same brightness change to many pixels in one step."]}},{h:"Where it shines",p:["SIMD is strongest when the same operation repeats across large data sets.","Common in image filters, audio processing, machine learning inference, and physics simulations."],example:{title:"Quick intuition",lines:["Loops over arrays can sometimes be auto-vectorized by compilers."]}},{h:"Limitations",p:["SIMD does not help much when logic is branch-heavy or each element needs different work.","Memory alignment and data layout matter for best performance."],example:{title:"Example",lines:["If each element has different if-else decisions, SIMD lanes become inefficient."]}}]},{id:"pc-multithreading",icon:o.jsx(Mt,{}),title:"Multithreading",atGlance:["Multiple threads run inside one process.","Threads share memory so coordination and locking matter.","Too many threads can slow things down due to context switching and contention."],content:[{h:"What multithreading gives",p:["Threads can run in parallel on multiple CPU cores.","Threads can also overlap work like computation plus I/O to improve responsiveness."],example:{title:"Example",lines:["UI thread stays responsive while a worker thread loads data.","A server handles many requests using a thread pool."]}},{h:"Costs and risks",p:["Shared memory can cause race conditions if not protected.","Locks can cause contention and reduce speedup.","Context switching has overhead, especially with too many active threads."],example:{title:"Example",lines:["A single global mutex can make 16 threads behave like 1 thread."]}},{h:"Beginner tips",p:["Prefer a fixed-size thread pool instead of creating unlimited threads.","Keep critical sections small.","Batch work into chunks to reduce synchronization overhead."],example:{title:"Rule of thumb",lines:["If CPU-bound, keep threads near number of cores.","If I/O-bound, you can have more, but still avoid extreme counts."]}}]},{id:"pc-gpu-basics",icon:o.jsx(Kt,{}),title:"GPU Basics",atGlance:["GPU is built for massive parallel work on many small tasks.","Best for data-parallel workloads like vectors, matrices, images.","GPU has high throughput but higher latency and transfer overhead."],content:[{h:"CPU vs GPU mindset",p:["CPU has few powerful cores optimized for low-latency, complex control flow.","GPU has many smaller cores optimized for throughput and doing the same operation across lots of data."],example:{title:"Example",lines:["CPU is like a few expert workers.","GPU is like thousands of fast workers doing the same simple task."]}},{h:"Where GPU helps most",p:["Matrix multiplication, image processing, physics simulation, deep learning training and inference.","Anything that can be expressed as the same operation over big arrays is a good match."],example:{title:"Example",lines:["Multiply two large matrices for ML workloads.","Apply blur filter to an image across millions of pixels."]}},{h:"GPU overhead and limitations",p:["Moving data from CPU memory to GPU memory costs time.","Branch-heavy code performs poorly on GPUs.","Small jobs may be faster on CPU because GPU setup overhead dominates."],example:{title:"Quick intuition",lines:["GPU is worth it when the workload is large and repetitive."]}}],callout:{icon:o.jsx(Xt,{}),title:"Interview edge",lines:["When talking about GPU, always mention trade-off.","High throughput, but transfer overhead and branch divergence can reduce gains."]}}],[]),m=()=>c(u=>!u);return o.jsxs(kx.Wrapper,{id:"parallel-computing",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Li,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Parallel Computing"}),o.jsx("p",{className:"sub",children:"At-a-glance revision for parallelism, speedup limits, SIMD, multithreading, and GPU basics."})]})]}),o.jsxs("button",{type:"button",className:i?"toggleBtn open":"toggleBtn",onClick:m,"aria-expanded":i,"aria-controls":"pc-content",title:i?"Collapse Parallel Computing notes":"Expand Parallel Computing notes",children:[o.jsx("span",{className:"btnIcon",children:i?o.jsx(kt,{}):o.jsx(wt,{})}),o.jsx("span",{className:"btnText",children:i?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"pc-content",className:i?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Kt,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Start with "At a glance" bullets, then read examples to build intuition.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,g)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},g))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,g)=>o.jsx("li",{children:p},g))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(st,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Always mention speedup limits and overheads like synchronization, communication, and data transfer when discussing parallel performance."})]})]})]})},Nx={Wrapper:Ae.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-primary) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 9000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .miniTable {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .miniTitle {
            padding: 10px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 13px;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .v {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 1100px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }

        @media (width < 520px) {
            .sub {
                display: none;
            }
        }
    `},Sx=()=>{const[i,c]=ce.useState(!1),l=ce.useMemo(()=>[{id:"toc-automata",icon:o.jsx(Oi,{}),title:"Automata",atGlance:["Automata are abstract machines that read input symbols and change states.","Finite Automata are used for pattern matching and tokenization.","Different automata have different power: DFA < NFA < PDA < TM."],content:[{h:"What is an automaton",p:["An automaton is a mathematical model of a machine that processes input step by step.","It has states and rules for moving between states based on input symbols.","It helps us formally define what problems a machine can solve."],example:{title:"Example",lines:["A simple login validator can be seen as a state machine: start -> reading -> valid or invalid."]}},{h:"Finite Automata (DFA and NFA)",p:["DFA (Deterministic Finite Automaton) has exactly one transition for each input symbol from a state.","NFA (Non-deterministic Finite Automaton) can have multiple possible transitions for the same symbol.","DFA and NFA accept the same class of languages called regular languages."],example:{title:"Quick intuition",lines:["NFA is easier to design.","DFA is easier to execute directly.","Compilers usually convert NFA to DFA internally."]}}],subList:{title:"Common automata types",items:[{k:"DFA",v:"Deterministic, one path only. Used for fast matching."},{k:"NFA",v:"Non-deterministic, multiple paths. Same power as DFA."},{k:"PDA",v:"Pushdown Automaton with a stack. Used for CFG languages."},{k:"TM",v:"Turing Machine. Most powerful classical model."}]}},{id:"toc-regex",icon:o.jsx(Af,{}),title:"Regular expressions",atGlance:["Regex describes regular languages.","Regex is equivalent in power to DFA and NFA.","Used heavily in lexers, search, validation, and parsing preparation."],content:[{h:"What regex is",p:["Regular expressions are patterns that describe sets of strings.","They are not just a programming feature. They come from formal language theory.","Regex patterns can be converted to automata, and automata can be converted back to regex."],example:{title:"Example patterns",lines:["a* means empty or many a","(ab)* means repeating ab blocks","a|b means either a or b","a.b means a then any char then b (programming regex style)"]}},{h:"Where regex fits in real systems",p:["Lexical analysis in compilers uses regex to define tokens like identifiers and numbers.","Search tools, log filters, and input validators use regex for quick matching.","Regex cannot match nested structures properly, that requires CFG."],example:{title:"Limitation example",lines:["Matching balanced parentheses is not regular, so pure regex cannot do it correctly."]}}]},{id:"toc-cfg",icon:o.jsx(_i,{}),title:"Context free grammar",atGlance:["CFG describes languages with nested structure.","Used for programming language syntax, parsers, and compilers.","CFG is more powerful than regex because it can represent recursion."],content:[{h:"What CFG is",p:["A Context Free Grammar is a set of rules that generate strings by expanding non-terminals.","It is called context free because a rule can be applied regardless of surrounding symbols.","CFG is the foundation for parsing and syntax checking."],example:{title:"Mini CFG example",lines:["E -> E + E | E * E | (E) | id","This generates arithmetic expressions like id+id*id."]}},{h:"PDA connection",p:["CFG languages are accepted by Pushdown Automata (PDA).","The stack helps handle nesting like parentheses and function calls."],example:{title:"Example",lines:["Balanced parentheses can be recognized using a stack, push on '(' and pop on ')'."]}}],subList:{title:"Key CFG terms",items:[{k:"Terminal",v:"Actual symbols that appear in output string."},{k:"Non-terminal",v:"Variables like E, S used for expansions."},{k:"Production",v:"Rules like S -> aSb | ab."},{k:"Parse tree",v:"Tree showing grammar expansions for a string."}]}},{id:"toc-tm",icon:o.jsx(Kt,{}),title:"Turing machine",atGlance:["Turing Machine is a mathematical model of a general-purpose computer.","Has an infinite tape, a head, and a state machine controller.","Used to define what it means for a problem to be computable."],content:[{h:"Core idea",p:["A Turing Machine reads and writes symbols on a tape and moves left or right.","It can simulate any algorithm, given enough time and tape space.","This model is used to define the limits of computation."],example:{title:"Mental model",lines:["Tape = memory","Head = pointer that reads and writes","State machine = program logic"]}},{h:"Why TM matters",p:["It helps answer: can a machine solve this problem at all, even with infinite time.","This separates computable problems from non-computable problems."],example:{title:"Example",lines:["Halting problem is not computable, no TM can solve it for all programs."]}}]},{id:"toc-decidability",icon:o.jsx(Xt,{}),title:"Decidability",atGlance:["Decidable means there exists an algorithm that always halts with yes or no.","Undecidable means no algorithm can solve it for all inputs.","Halting problem is the classic undecidable example."],content:[{h:"Decidable problems",p:["A problem is decidable if some Turing Machine halts on every input and answers correctly.","If it always finishes, we say the language is recursive."],example:{title:"Example",lines:["Checking if a number is even is decidable, algorithm halts quickly."]}},{h:"Undecidable problems",p:["A problem is undecidable if no algorithm exists that always halts and answers correctly for every input.","These are not problems of speed, they are problems of possibility."],example:{title:"Classic example",lines:["Halting problem: given a program and input, decide whether it stops or runs forever."]}}],callout:{icon:o.jsx(st,{}),title:"Key difference",lines:["Decidable means always halts with correct yes or no.","Recognizable means may loop forever on some inputs but halts on accepted ones."]}},{id:"toc-pnp",icon:o.jsx(Jt,{}),title:"P vs NP",atGlance:["P problems are solvable fast.","NP problems have solutions verifiable fast.","Big open question: Is P equal to NP."],content:[{h:"What is P",p:["P is the set of decision problems solvable in polynomial time, like O(n), O(n^2), O(n^3).","These are considered efficiently solvable."],example:{title:"Example",lines:["Shortest path in a graph can be solved in polynomial time."]}},{h:"What is NP",p:["NP is the set of decision problems where a proposed solution can be verified in polynomial time.","Important point: NP does not mean not polynomial. It means verifiable fast."],example:{title:"Example",lines:["Given a Sudoku solution, checking it is correct is fast, but finding it may be hard."]}},{h:"NP-complete intuition",p:["NP-complete problems are the hardest problems in NP.","If you solve one NP-complete problem in polynomial time, you can solve all NP problems in polynomial time."],example:{title:"Example",lines:["SAT is NP-complete. Many problems reduce to SAT."]}}],subList:{title:"Fast revision table",items:[{k:"P",v:"Solve fast (polynomial time)."},{k:"NP",v:"Verify fast (polynomial time)."},{k:"NP-complete",v:"Hardest in NP, all NP problems reduce to these."},{k:"NP-hard",v:"At least as hard as NP-complete, may not be in NP."}]}}],[]),m=()=>c(u=>!u);return o.jsxs(Nx.Wrapper,{id:"theory-of-computation",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Mt,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Theory of Computation"}),o.jsx("p",{className:"sub",children:"Automata, regex, CFG, Turing machine, decidability, and P vs NP - structured for quick revision."})]})]}),o.jsxs("button",{type:"button",className:i?"toggleBtn open":"toggleBtn",onClick:m,"aria-expanded":i,"aria-controls":"toc-content",title:i?"Collapse ToC notes":"Expand ToC notes",children:[o.jsx("span",{className:"btnIcon",children:i?o.jsx(kt,{}):o.jsx(wt,{})}),o.jsx("span",{className:"btnText",children:i?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"toc-content",className:i?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(st,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Start with "At a glance". Then read examples to lock the mental model.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"At-a-glance summary and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,g)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},g))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Xt,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Explain power levels using the ladder: regex and DFA handle regular patterns, CFG handles nested structures, Turing machine defines full computability."})]})]})]})},Cx={Wrapper:Ae.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-primary) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 8000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .miniTable {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .miniTitle {
            padding: 10px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 13px;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .v {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 980px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 140px 1fr;
            }
        }

        @media (width < 520px) {
            .sub {
                display: none;
            }
        }
    `},Tx=()=>{const[i,c]=ce.useState(!1),l=ce.useMemo(()=>[{id:"crypto-symmetric",icon:o.jsx(_f,{}),title:"Symmetric encryption",atGlance:["Same secret key is used to encrypt and decrypt.","Very fast, best for large data like files and streams.","Key sharing is the main problem - you must deliver the secret safely."],content:[{h:"What it is",p:["Symmetric encryption uses one shared secret key for both encryption and decryption.","If both sides have the same key, they can protect data from eavesdroppers."],example:{title:"Example",lines:["You encrypt a file with key K.","Anyone with key K can decrypt it.","If K leaks, security is gone."]}},{h:"Where it is used",p:["Disk encryption, backups, secure messaging payloads, VPN data channels, HTTPS session data.","In TLS, symmetric keys are used after a secure handshake because symmetric encryption is fast."],example:{title:"Practical intuition",lines:["Symmetric is like one locker key shared by two people. Fast and simple, but you must hand over the key safely."]}},{h:"Important idea - key distribution",p:["The hardest part is sharing the secret key without attackers seeing it.","That is why we combine symmetric encryption with asymmetric encryption in modern systems."],example:{title:"Real-world pattern",lines:["Asymmetric is used to exchange a symmetric session key.","Then symmetric is used for the actual data."]}}],subList:{title:"Common terms",items:[{k:"Block cipher",v:"Encrypts fixed-size blocks. Example: AES. Often used with a mode like GCM."},{k:"Stream cipher",v:"Encrypts data as a stream. Useful for continuous data."},{k:"Nonce / IV",v:"Random or unique value used to make encryption safe even for repeated messages."}]}},{id:"crypto-asymmetric",icon:o.jsx(yn,{}),title:"Asymmetric encryption",atGlance:["Uses a public key and a private key.","Public key can be shared openly, private key must stay secret.","Great for key exchange and identity, slower than symmetric encryption."],content:[{h:"What it is",p:["Asymmetric encryption uses a pair of keys: public and private.","Data encrypted with the public key can be decrypted only with the matching private key."],example:{title:"Example",lines:["You publish your public key on your website.","People encrypt secrets for you using that public key.","Only you can decrypt them using your private key."]}},{h:"Why it matters",p:["It solves the key distribution problem for symmetric encryption.","It also enables identity and trust mechanisms using digital signatures."],example:{title:"Practical intuition",lines:["Asymmetric is like a mailbox slot: anyone can drop a letter in, only the owner can open it."]}},{h:"Where it is used",p:["TLS handshakes, secure key exchange, encrypting small secrets, signing software updates, SSH authentication.","It is usually not used to encrypt large files directly because it is slower."],example:{title:"Common real use",lines:["Asymmetric sets up trust and exchanges keys.","Symmetric does the heavy lifting for bulk data."]}}],subList:{title:"Common terms",items:[{k:"Public key",v:"Shared key used to encrypt or verify signatures."},{k:"Private key",v:"Secret key used to decrypt or create signatures."},{k:"Key exchange",v:"Process to establish a shared secret securely over an insecure network."}]}},{id:"crypto-hashing",icon:o.jsx(Uf,{}),title:"Hashing",atGlance:["Hashing is one-way, not reversible.","Same input produces the same output, but you cannot go backward.","Used for integrity checks and password storage (with salt)."],content:[{h:"What it is",p:["A hash function converts input data into a fixed-size output (hash or digest).","Good cryptographic hashes are fast to compute but extremely hard to reverse or collide."],example:{title:"Example",lines:["hash('hello') = some digest","hash('hello') will always produce the same digest","hash('Hello') produces a different digest"]}},{h:"Integrity checks",p:["If you download a file, you can compare its hash with the expected hash to detect tampering.","Even a 1-bit change creates a very different hash (avalanche effect)."],example:{title:"Example",lines:["Vendor posts SHA-256 hash of an installer.","You compute SHA-256 locally and compare.","If it matches, file is likely intact."]}},{h:"Password storage basics",p:["Passwords should not be encrypted and stored.","Instead store a slow hash of the password with a unique salt.","Salt prevents attackers from using precomputed tables."],example:{title:"Example",lines:["Store: salt + hash(salt + password)","On login: compute again and compare hashes"]}}],subList:{title:"Key properties",items:[{k:"One-way",v:"You cannot reverse a hash to get the original input."},{k:"Collision resistance",v:"Hard to find two different inputs with the same hash."},{k:"Avalanche effect",v:"Small input change causes huge output change."}]}},{id:"crypto-signatures",icon:o.jsx(Ri,{}),title:"Digital signatures",atGlance:["Proves who created a message and that it was not altered.","Uses private key to sign, public key to verify.","Gives authenticity and integrity, not secrecy."],content:[{h:"What it is",p:["A digital signature is created using a private key and verified using a public key.","It proves the sender owned the private key and the message was not modified."],example:{title:"Example",lines:["Sender signs the hash of a message with private key.","Receiver verifies signature using sender's public key."]}},{h:"What it gives you",p:["Integrity - message not changed.","Authenticity - message came from holder of private key.","Non-repudiation concept - signer cannot easily deny signing later."],example:{title:"Practical intuition",lines:["Signature is like a tamper-proof seal plus identity stamp."]}},{h:"Common uses",p:["Signed software updates, package registries, document signing, certificates, blockchain transactions.","TLS uses server certificates and signatures to prove server identity."],example:{title:"Example",lines:["When you install a package, signature verification helps ensure it was published by the real author."]}}],subList:{title:"Remember this",items:[{k:"Sign",v:"Private key signs."},{k:"Verify",v:"Public key verifies."},{k:"Not encryption",v:"Signature does not hide data. It proves integrity and identity."}]}},{id:"crypto-tls",icon:o.jsx(fn,{}),title:"TLS basics",atGlance:["TLS secures network communication like HTTPS.","Handshake sets up identity and shared keys.","After handshake, fast symmetric encryption protects data."],content:[{h:"What TLS does",p:["TLS provides privacy, integrity, and server authenticity for network traffic.","It prevents attackers from reading or modifying data in transit."],example:{title:"Example",lines:["HTTPS is HTTP running inside a TLS tunnel."]}},{h:"High-level handshake flow",p:["Client connects and asks server to prove identity.","Server sends certificate containing its public key.","Client verifies certificate using trusted CAs.","Client and server establish a shared session key.","All application data after this uses symmetric encryption."],example:{title:"Mental model",lines:["Handshake is about trust and key setup.","Session is about fast encrypted data transfer."]}},{h:"What can go wrong",p:["If certificate validation is skipped, attackers can do man-in-the-middle attacks.","Bad random number generation can weaken security.","Outdated TLS versions can have known vulnerabilities."],example:{title:"Developer tip",lines:["Never disable TLS verification in production code."]}}],callout:{icon:o.jsx(Ft,{}),title:"TLS gives you",lines:["Confidentiality - attackers cannot read your data.","Integrity - attackers cannot silently modify your data.","Authenticity - you can verify you are talking to the right server."]}},{id:"crypto-pki",icon:o.jsx(Mt,{}),title:"Public key infrastructure",atGlance:["PKI is the system that makes public keys trustworthy.","Certificates bind identity to a public key.","Certificate Authorities (CAs) act as trusted issuers."],content:[{h:"What PKI is",p:["PKI is a set of rules, roles, and processes to create, manage, and verify digital certificates.","It answers the question: how do you know this public key really belongs to this website or person?"],example:{title:"Example",lines:["A certificate says: this public key belongs to example.com and is signed by a trusted CA."]}},{h:"Certificates",p:["A certificate contains the public key and identity details like domain name.","It is signed by a CA so clients can verify it using the CA public key that is already trusted."],example:{title:"Mental model",lines:["Certificate is an ID card for a public key."]}},{h:"Trust chain",p:["Browsers and operating systems ship with a list of trusted root CAs.","A website certificate is verified by walking a chain up to a trusted root."],example:{title:"Example",lines:["Server cert -> intermediate cert -> root cert (trusted)."]}}],subList:{title:"Key PKI terms",items:[{k:"CA",v:"Certificate Authority. Issues certificates and signs them."},{k:"Certificate",v:"Binds identity to a public key, signed by CA."},{k:"Trust store",v:"List of trusted root CA certificates in OS/browser."}]}}],[]),m=()=>c(u=>!u);return o.jsxs(Cx.Wrapper,{id:"cryptography",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Ft,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Cryptography"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for encryption, hashing, signatures, TLS, and PKI."})]})]}),o.jsxs("button",{type:"button",className:i?"toggleBtn open":"toggleBtn",onClick:m,"aria-expanded":i,"aria-controls":"crypto-content",title:i?"Collapse cryptography notes":"Expand cryptography notes",children:[o.jsx("span",{className:"btnIcon",children:i?o.jsx(kt,{}):o.jsx(wt,{})}),o.jsx("span",{className:"btnText",children:i?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"crypto-content",className:i?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Jt,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan the "At a glance" bullets first. Then read examples to build real intuition.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,g)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},g))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(st,{})}),o.jsx("div",{className:"footerText",children:"Revision tip - Always separate goals: confidentiality (hide data), integrity (detect changes), authenticity (prove identity). TLS combines all three using encryption, hashing, and certificates."})]})]})]})},Ex={Wrapper:Ae.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-primary) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 8000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .miniTable {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .miniTitle {
            padding: 10px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 13px;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .v {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 980px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 140px 1fr;
            }
        }

        @media (width < 520px) {
            .sub {
                display: none;
            }
        }
    `},Px=()=>{const[i,c]=ce.useState(!1),l=ce.useMemo(()=>[{id:"owasp",icon:o.jsx(nl,{}),title:"OWASP Top 10",atGlance:["OWASP Top 10 lists the most critical web security risks.","It is updated periodically based on real-world vulnerability data.","Understanding it makes you interview-ready and production-aware."],content:[{h:"What is OWASP",p:["OWASP stands for Open Worldwide Application Security Project.","It is a global community that publishes security standards and best practices."],example:{title:"Common categories",lines:["Broken access control","Cryptographic failures","Injection attacks","Security misconfiguration","Vulnerable components"]}}]},{id:"xss",icon:o.jsx(_i,{}),title:"XSS - Cross Site Scripting",atGlance:["XSS allows attackers to inject malicious scripts into web pages.","Happens when user input is rendered without proper escaping.","Main types are Stored, Reflected, and DOM-based."],content:[{h:"How XSS works",p:["If a web app inserts user input directly into HTML without sanitizing it, an attacker can inject JavaScript.","The browser executes it as if it came from the trusted website."],example:{title:"Example",lines:["User submits: <script>alert('Hacked')<\/script>","If not escaped, the script runs in other users' browsers."]}},{h:"Prevention",p:["Escape output before rendering.","Use frameworks that auto-sanitize.","Implement Content Security Policy."]}]},{id:"csrf",icon:o.jsx(yn,{}),title:"CSRF - Cross Site Request Forgery",atGlance:["CSRF tricks users into performing unwanted actions.","Relies on authenticated sessions.","Uses hidden forms or malicious links."],content:[{h:"How CSRF works",p:["If a user is logged into a bank site and visits a malicious site, that site can send a forged request to the bank.","Because cookies are automatically included, the bank thinks the request is valid."],example:{title:"Example",lines:["Hidden form auto-submits transfer request.","Bank processes it because user session is valid."]}},{h:"Prevention",p:["Use CSRF tokens.","SameSite cookies.","Double-submit cookie strategy."]}]},{id:"sql-injection",icon:o.jsx(mn,{}),title:"SQL Injection",atGlance:["SQL Injection occurs when input is concatenated into SQL queries.","Allows attackers to read, modify, or delete database data.","Parameterized queries prevent this."],content:[{h:"How it happens",p:["If user input is directly inserted into a query string, attacker can manipulate SQL logic."],example:{title:"Example",lines:["Input: ' OR 1=1 --","Query becomes always true, returning all users."]}},{h:"Prevention",p:["Use prepared statements.","Use ORM frameworks safely.","Validate and sanitize inputs."]}]},{id:"auth-flaws",icon:o.jsx(Kf,{}),title:"Authentication Flaws",atGlance:["Weak passwords and poor session management cause breaches.","Broken authentication exposes user accounts.","Multi-factor authentication improves security."],content:[{h:"Common flaws",p:["Weak password policies.","Session IDs not rotated.","No rate limiting on login attempts."],example:{title:"Example",lines:["Brute force attack tries many passwords.","Without rate limiting, attacker eventually succeeds."]}},{h:"Prevention",p:["Hash passwords with bcrypt or Argon2.","Enable MFA.","Implement account lockout and rate limiting."]}]},{id:"secure-coding",icon:o.jsx(Ft,{}),title:"Secure Coding",atGlance:["Security should be built into code from day one.","Validate input, sanitize output.","Follow least privilege principle."],content:[{h:"Best practices",p:["Never trust user input.","Use HTTPS everywhere.","Keep dependencies updated.","Apply principle of least privilege."],example:{title:"Mental model",lines:["Assume attackers will try to break your app.","Design defensively."]}}]},{id:"network-attacks",icon:o.jsx(Gu,{}),title:"Network Attacks",atGlance:["Attackers exploit network weaknesses.","Includes MITM, DDoS, and packet sniffing.","Encryption and monitoring reduce risk."],content:[{h:"Common attacks",p:["Man-in-the-Middle intercepts communication.","DDoS overwhelms servers with traffic.","Packet sniffing captures unencrypted data."],example:{title:"Example",lines:["Public WiFi without HTTPS allows traffic inspection."]}},{h:"Prevention",p:["Use TLS encryption.","Deploy firewalls.","Use intrusion detection systems."]}]}],[]);return o.jsxs(Ex.Wrapper,{id:"cyber-security",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Ft,{})}),o.jsxs("div",{children:[o.jsx("h2",{className:"title",children:"Cyber Security"}),o.jsx("p",{className:"sub",children:"At-a-glance revision for web security, secure coding, authentication, and network threats."})]})]}),o.jsxs("button",{className:i?"toggleBtn open":"toggleBtn",onClick:()=>c(m=>!m),children:[i?o.jsx(kt,{}):o.jsx(wt,{}),i?"Collapse":"Expand"]})]}),o.jsx("div",{className:i?"content open":"content",children:o.jsx("div",{className:"grid",children:l.map(m=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:m.icon}),o.jsx("div",{className:"cardTitle",children:m.title})]}),o.jsx("ul",{className:"atGlance",children:m.atGlance.map((u,p)=>o.jsx("li",{children:u},p))}),m.content.map((u,p)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:u.h}),u.p.map((g,j)=>o.jsx("p",{children:g},j)),u.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:u.example.title}),o.jsx("ul",{children:u.example.lines.map((g,j)=>o.jsx("li",{children:g},j))})]})]},p))]},m.id))})})]})},Ix={Wrapper:Ae.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-primary) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 9000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .miniTable {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .miniTitle {
            padding: 10px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 13px;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 160px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .v {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 1040px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 150px 1fr;
            }
        }

        @media (width < 520px) {
            .sub {
                display: none;
            }
        }
    `},Lx=()=>{const[i,c]=ce.useState(!1),l=ce.useMemo(()=>[{id:"cloud-iaas",icon:o.jsx(Hf,{}),title:"IaaS",atGlance:["Infrastructure as a Service gives you virtual machines, networking, and storage.","You manage OS, runtime, patches, and your app.","Good when you need control and custom setups."],content:[{h:"What it means",p:["IaaS provides the raw building blocks like compute (VMs), storage, and networks.","You choose OS, install software, configure security, and deploy your application."],example:{title:"Example",lines:["You rent a VM, install Ubuntu, set up Nginx, deploy Node app, and manage updates yourself."]}},{h:"When to use",p:["Use IaaS when you need full control over the server environment.","Useful for custom networking, legacy systems, or special performance tuning."],example:{title:"Quick trade-off",lines:["More control - more responsibility for maintenance and security."]}}],subList:{title:"You manage vs provider manages",items:[{k:"You manage",v:"OS, patches, runtime, app code, configs, monitoring setup"},{k:"Provider manages",v:"Physical servers, virtualization layer, data center, base networking"}]}},{id:"cloud-paas",icon:o.jsx(Mt,{}),title:"PaaS",atGlance:["Platform as a Service gives you a managed runtime to deploy apps faster.","You focus on code and app config, platform handles servers and OS.","Great for rapid development and standard web apps."],content:[{h:"What it means",p:["PaaS provides a platform where you deploy code and the platform handles OS, runtime, scaling basics, and infrastructure.","You configure environment variables, deployment settings, and app resources."],example:{title:"Example",lines:["You push your app, platform builds and runs it, handles HTTPS, restarts, and basic scaling."]}},{h:"When to use",p:["Use PaaS when you want faster deployment without managing servers.","Best for APIs, web apps, and standard workloads."],example:{title:"Quick trade-off",lines:["Less server control - faster shipping and easier ops."]}}],subList:{title:"You manage vs provider manages",items:[{k:"You manage",v:"App code, app settings, env variables, database usage patterns"},{k:"Provider manages",v:"OS, runtime, patching, underlying infra, typical autoscaling hooks"}]}},{id:"cloud-saas",icon:o.jsx(Li,{}),title:"SaaS",atGlance:["Software as a Service is a ready product delivered over the internet.","You just use it, provider manages everything.","Best when you need a tool, not a platform."],content:[{h:"What it means",p:["SaaS is a complete application delivered to users.","You do not manage infrastructure or runtime. You only configure usage and permissions."],example:{title:"Example",lines:["Email service, project management tools, analytics dashboards, CRM systems."]}},{h:"When to use",p:["Use SaaS when you need a business capability quickly.","It saves time and reduces engineering overhead for non-core problems."],example:{title:"Quick trade-off",lines:["Fast adoption - less customization and less control."]}}],subList:{title:"You manage vs provider manages",items:[{k:"You manage",v:"Users, roles, permissions, configuration and workflows"},{k:"Provider manages",v:"Everything else including app, updates, infra, security controls"}]}},{id:"cloud-virtualization",icon:o.jsx(Kt,{}),title:"Virtualization",atGlance:["Virtualization lets one physical machine run many virtual machines.","Hypervisor creates isolated VMs with their own OS.","Foundation of most IaaS systems."],content:[{h:"Core idea",p:["A hypervisor slices CPU, memory, and storage to create multiple VMs.","Each VM runs its own OS and behaves like a real machine."],example:{title:"Example",lines:["One physical server runs 20 VMs, each hosting different applications."]}},{h:"Why it matters",p:["Improves hardware utilization and isolation.","Allows flexible provisioning, snapshots, and migration of workloads."],example:{title:"Mental model",lines:["VM is a full computer inside your computer."]}}]},{id:"cloud-containers",icon:o.jsx(Li,{}),title:"Containers",atGlance:["Containers package app plus dependencies into a single unit.","They share the host OS kernel, so they are lighter than VMs.","Great for portability and consistent deployments."],content:[{h:"Core idea",p:["Containers isolate apps using OS-level features while sharing the same kernel.","They start fast and consume fewer resources than VMs."],example:{title:"Example",lines:["Docker image contains Node app, dependencies, and config. Runs the same on laptop and cloud."]}},{h:"Containers vs VMs",p:["VM includes full OS. Container shares OS kernel.","VM isolation is stronger, container is lighter and faster."],example:{title:"Quick compare",lines:["VM - heavier, strong isolation","Container - lighter, faster startup"]}}],subList:{title:"Why containers are loved",items:[{k:"Portability",v:"Same image runs everywhere"},{k:"Consistency",v:"Dev, staging, production behave similarly"},{k:"Speed",v:"Fast startup and efficient resource usage"}]}},{id:"cloud-serverless",icon:o.jsx(Xt,{}),title:"Serverless",atGlance:["You deploy functions, cloud runs them on demand.","You do not manage servers, scaling happens automatically.","Best for event-driven tasks and APIs with bursts."],content:[{h:"Core idea",p:["Serverless means you write function code and the provider handles execution, scaling, and infrastructure.","Billing is often based on usage, not always-on servers."],example:{title:"Example",lines:["An API endpoint runs as a function. It wakes up when called and scales when traffic increases."]}},{h:"Trade-offs",p:["Cold start can add latency when the function is idle.","You must design for stateless behavior and external state storage."],example:{title:"Quick trade-off",lines:["Low ops - watch out for cold start and limits."]}}]},{id:"cloud-scaling",icon:o.jsx(Fi,{}),title:"Scaling strategies",atGlance:["Scale up means bigger machine. Scale out means more machines.","Autoscaling reacts to metrics like CPU, memory, request rate.","Caching and queues help handle spikes safely."],content:[{h:"Vertical scaling (scale up)",p:["Increase resources of a single machine like CPU or RAM.","Simple but has limits and can require downtime."],example:{title:"Example",lines:["Upgrade server from 2 CPU to 8 CPU when load grows."]}},{h:"Horizontal scaling (scale out)",p:["Add more instances and distribute load using a load balancer.","More reliable and scalable for big traffic."],example:{title:"Example",lines:["Run 10 app instances behind a load balancer instead of 1 huge server."]}},{h:"Support tools",p:["Caching reduces repeated work and database load.","Queues smooth traffic spikes by buffering jobs.","CDNs speed up content delivery for global users."],example:{title:"Example",lines:["Use cache for product list, queue for sending emails, CDN for images."]}}],subList:{title:"Scaling checklist",items:[{k:"Stateless services",v:"Store sessions in shared storage or tokens"},{k:"Health checks",v:"Load balancer removes unhealthy instances"},{k:"Rate limiting",v:"Protect against abuse and sudden spikes"}]}},{id:"cloud-security",icon:o.jsx(Ft,{}),title:"Cloud security",atGlance:["Security is shared responsibility between you and provider.","Identity and access control is the first line of defense.","Encryption + monitoring reduce risk and blast radius."],content:[{h:"Shared responsibility model",p:["Provider secures the physical data center and core cloud services.","You secure your data, identity access, configurations, and app-level security."],example:{title:"Example",lines:["If your storage bucket is public by mistake, that is on you, not the provider."]}},{h:"Identity and access management",p:["Use least privilege. Give minimal permissions required for each role.","Use separate environments, rotate keys, and avoid long-lived secrets in code."],example:{title:"Example",lines:["Backend service account can read one bucket only, not full admin access."]}},{h:"Encryption and monitoring",p:["Encrypt data at rest and in transit.","Enable logs and alerts for unusual access patterns.","Use network segmentation and firewall rules to reduce exposure."],example:{title:"Example",lines:["TLS for API traffic, encryption for database storage, alerts for failed logins."]}}],subList:{title:"Common security checks",items:[{k:"Public access",v:"Ensure storage and databases are not publicly exposed"},{k:"Secrets",v:"Use secret manager, do not hardcode keys"},{k:"Network rules",v:"Restrict inbound traffic to only required ports"},{k:"Backups",v:"Enable backups and test recovery"}]},callout:{icon:o.jsx(yn,{}),title:"Practical mindset",lines:["Assume misconfigurations will happen.","Reduce blast radius using least privilege and network segmentation.","Detect fast with logs and alerts."]}}],[]),m=()=>c(u=>!u);return o.jsxs(Ix.Wrapper,{id:"cloud-computing",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Ou,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Cloud Computing"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for cloud models, deployment styles, scaling, and security basics."})]})]}),o.jsxs("button",{type:"button",className:i?"toggleBtn open":"toggleBtn",onClick:m,"aria-expanded":i,"aria-controls":"cloud-content",title:i?"Collapse Cloud notes":"Expand Cloud notes",children:[o.jsx("span",{className:"btnIcon",children:i?o.jsx(kt,{}):o.jsx(wt,{})}),o.jsx("span",{className:"btnText",children:i?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"cloud-content",className:i?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Di,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan the "At a glance" bullets first. Then read examples for real understanding.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,g)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},g))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,g)=>o.jsx("li",{children:p},g))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(st,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Always explain cloud choices using trade-offs like control vs convenience, cost vs performance, and security vs speed."})]})]})]})},Ru=[["about","Overview",mp],["os","Operating Systems",cx],["networks","Computer Networks",ux],["dbms","DBMS",mx],["design","System Design",hx],["software","Software Engineering",gx],["compiler","Compiler Design",yx],["distributed","Distributed Systems",wx],["parallel","Parallel Computing",jx],["theory","Theory of Computation",Sx],["crypto","Cryptography",Tx],["security","Cyber Security",Px],["cloud","Cloud Computing",Lx]],zx=()=>{var u;const[i,c]=ce.useState("about"),l=ce.useRef(null),m=((u=Ru.find(([p])=>p===i))==null?void 0:u[2])||mp;return ce.useEffect(()=>{var p;(p=l.current)==null||p.scrollTo({top:0,behavior:"auto"}),requestAnimationFrame(()=>{var g,j;return(j=(g=l.current)==null?void 0:g.querySelector('[aria-expanded="false"]'))==null?void 0:j.click()})},[i]),o.jsxs($s.Wrapper,{children:[o.jsx($s.Header,{children:o.jsx(rx,{})}),o.jsxs($s.Main,{ref:l,children:[o.jsxs("div",{className:"workspaceLayout",children:[o.jsxs("aside",{className:"sideMenu","aria-label":"Computer science topics",children:[o.jsx("p",{className:"menuLabel",children:"Study guide"}),o.jsx("nav",{children:Ru.map(([p,g])=>o.jsx("button",{type:"button",className:i===p?"active":"",onClick:()=>c(p),children:g},p))})]}),o.jsx("section",{className:"contentWrapper","aria-live":"polite",children:o.jsx(m,{})})]}),o.jsx("button",{type:"button",className:"scrollTopButton","aria-label":"Scroll content to top",title:"Scroll to top",onClick:()=>{var p;return(p=l.current)==null?void 0:p.scrollTo({top:0,behavior:"smooth"})},children:o.jsx(Ef,{})}),o.jsx("div",{className:"footerWrapper",children:o.jsx(sx,{})})]})]})};bf.createRoot(document.getElementById("root")).render(o.jsx(o.Fragment,{children:o.jsx(zx,{})}));
