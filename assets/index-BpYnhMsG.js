(function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))f(u);new MutationObserver(u=>{for(const p of u)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&f(v)}).observe(document,{childList:!0,subtree:!0});function l(u){const p={};return u.integrity&&(p.integrity=u.integrity),u.referrerPolicy&&(p.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?p.credentials="include":u.crossOrigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function f(u){if(u.ep)return;u.ep=!0;const p=l(u);fetch(u.href,p)}})();function lf(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}var _s={exports:{}},no={},Os={exports:{}},te={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ru;function cf(){if(ru)return te;ru=1;var a=Symbol.for("react.element"),d=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),p=Symbol.for("react.provider"),v=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),Y=Symbol.for("react.memo"),G=Symbol.for("react.lazy"),_=Symbol.iterator;function O(g){return g===null||typeof g!="object"?null:(g=_&&g[_]||g["@@iterator"],typeof g=="function"?g:null)}var Q={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ne=Object.assign,V={};function K(g,N,q){this.props=g,this.context=N,this.refs=V,this.updater=q||Q}K.prototype.isReactComponent={},K.prototype.setState=function(g,N){if(typeof g!="object"&&typeof g!="function"&&g!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,g,N,"setState")},K.prototype.forceUpdate=function(g){this.updater.enqueueForceUpdate(this,g,"forceUpdate")};function me(){}me.prototype=K.prototype;function se(g,N,q){this.props=g,this.context=N,this.refs=V,this.updater=q||Q}var oe=se.prototype=new me;oe.constructor=se,ne(oe,K.prototype),oe.isPureReactComponent=!0;var Z=Array.isArray,ue=Object.prototype.hasOwnProperty,$={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function Ie(g,N,q){var X,re={},ee=null,pe=null;if(N!=null)for(X in N.ref!==void 0&&(pe=N.ref),N.key!==void 0&&(ee=""+N.key),N)ue.call(N,X)&&!U.hasOwnProperty(X)&&(re[X]=N[X]);var ie=arguments.length-2;if(ie===1)re.children=q;else if(1<ie){for(var ce=Array(ie),_e=0;_e<ie;_e++)ce[_e]=arguments[_e+2];re.children=ce}if(g&&g.defaultProps)for(X in ie=g.defaultProps,ie)re[X]===void 0&&(re[X]=ie[X]);return{$$typeof:a,type:g,key:ee,ref:pe,props:re,_owner:$.current}}function rt(g,N){return{$$typeof:a,type:g.type,key:N,ref:g.ref,props:g.props,_owner:g._owner}}function wt(g){return typeof g=="object"&&g!==null&&g.$$typeof===a}function Bt(g){var N={"=":"=0",":":"=2"};return"$"+g.replace(/[=:]/g,function(q){return N[q]})}var ct=/\/+/g;function Ve(g,N){return typeof g=="object"&&g!==null&&g.key!=null?Bt(""+g.key):N.toString(36)}function nt(g,N,q,X,re){var ee=typeof g;(ee==="undefined"||ee==="boolean")&&(g=null);var pe=!1;if(g===null)pe=!0;else switch(ee){case"string":case"number":pe=!0;break;case"object":switch(g.$$typeof){case a:case d:pe=!0}}if(pe)return pe=g,re=re(pe),g=X===""?"."+Ve(pe,0):X,Z(re)?(q="",g!=null&&(q=g.replace(ct,"$&/")+"/"),nt(re,N,q,"",function(_e){return _e})):re!=null&&(wt(re)&&(re=rt(re,q+(!re.key||pe&&pe.key===re.key?"":(""+re.key).replace(ct,"$&/")+"/")+g)),N.push(re)),1;if(pe=0,X=X===""?".":X+":",Z(g))for(var ie=0;ie<g.length;ie++){ee=g[ie];var ce=X+Ve(ee,ie);pe+=nt(ee,N,q,ce,re)}else if(ce=O(g),typeof ce=="function")for(g=ce.call(g),ie=0;!(ee=g.next()).done;)ee=ee.value,ce=X+Ve(ee,ie++),pe+=nt(ee,N,q,ce,re);else if(ee==="object")throw N=String(g),Error("Objects are not valid as a React child (found: "+(N==="[object Object]"?"object with keys {"+Object.keys(g).join(", ")+"}":N)+"). If you meant to render a collection of children, use an array instead.");return pe}function dt(g,N,q){if(g==null)return g;var X=[],re=0;return nt(g,X,"","",function(ee){return N.call(q,ee,re++)}),X}function Fe(g){if(g._status===-1){var N=g._result;N=N(),N.then(function(q){(g._status===0||g._status===-1)&&(g._status=1,g._result=q)},function(q){(g._status===0||g._status===-1)&&(g._status=2,g._result=q)}),g._status===-1&&(g._status=0,g._result=N)}if(g._status===1)return g._result.default;throw g._result}var xe={current:null},P={transition:null},D={ReactCurrentDispatcher:xe,ReactCurrentBatchConfig:P,ReactCurrentOwner:$};function I(){throw Error("act(...) is not supported in production builds of React.")}return te.Children={map:dt,forEach:function(g,N,q){dt(g,function(){N.apply(this,arguments)},q)},count:function(g){var N=0;return dt(g,function(){N++}),N},toArray:function(g){return dt(g,function(N){return N})||[]},only:function(g){if(!wt(g))throw Error("React.Children.only expected to receive a single React element child.");return g}},te.Component=K,te.Fragment=l,te.Profiler=u,te.PureComponent=se,te.StrictMode=f,te.Suspense=k,te.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=D,te.act=I,te.cloneElement=function(g,N,q){if(g==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+g+".");var X=ne({},g.props),re=g.key,ee=g.ref,pe=g._owner;if(N!=null){if(N.ref!==void 0&&(ee=N.ref,pe=$.current),N.key!==void 0&&(re=""+N.key),g.type&&g.type.defaultProps)var ie=g.type.defaultProps;for(ce in N)ue.call(N,ce)&&!U.hasOwnProperty(ce)&&(X[ce]=N[ce]===void 0&&ie!==void 0?ie[ce]:N[ce])}var ce=arguments.length-2;if(ce===1)X.children=q;else if(1<ce){ie=Array(ce);for(var _e=0;_e<ce;_e++)ie[_e]=arguments[_e+2];X.children=ie}return{$$typeof:a,type:g.type,key:re,ref:ee,props:X,_owner:pe}},te.createContext=function(g){return g={$$typeof:v,_currentValue:g,_currentValue2:g,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},g.Provider={$$typeof:p,_context:g},g.Consumer=g},te.createElement=Ie,te.createFactory=function(g){var N=Ie.bind(null,g);return N.type=g,N},te.createRef=function(){return{current:null}},te.forwardRef=function(g){return{$$typeof:j,render:g}},te.isValidElement=wt,te.lazy=function(g){return{$$typeof:G,_payload:{_status:-1,_result:g},_init:Fe}},te.memo=function(g,N){return{$$typeof:Y,type:g,compare:N===void 0?null:N}},te.startTransition=function(g){var N=P.transition;P.transition={};try{g()}finally{P.transition=N}},te.unstable_act=I,te.useCallback=function(g,N){return xe.current.useCallback(g,N)},te.useContext=function(g){return xe.current.useContext(g)},te.useDebugValue=function(){},te.useDeferredValue=function(g){return xe.current.useDeferredValue(g)},te.useEffect=function(g,N){return xe.current.useEffect(g,N)},te.useId=function(){return xe.current.useId()},te.useImperativeHandle=function(g,N,q){return xe.current.useImperativeHandle(g,N,q)},te.useInsertionEffect=function(g,N){return xe.current.useInsertionEffect(g,N)},te.useLayoutEffect=function(g,N){return xe.current.useLayoutEffect(g,N)},te.useMemo=function(g,N){return xe.current.useMemo(g,N)},te.useReducer=function(g,N,q){return xe.current.useReducer(g,N,q)},te.useRef=function(g){return xe.current.useRef(g)},te.useState=function(g){return xe.current.useState(g)},te.useSyncExternalStore=function(g,N,q){return xe.current.useSyncExternalStore(g,N,q)},te.useTransition=function(){return xe.current.useTransition()},te.version="18.3.1",te}var nu;function el(){return nu||(nu=1,Os.exports=cf()),Os.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ou;function df(){if(ou)return no;ou=1;var a=el(),d=Symbol.for("react.element"),l=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,u=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function v(j,k,Y){var G,_={},O=null,Q=null;Y!==void 0&&(O=""+Y),k.key!==void 0&&(O=""+k.key),k.ref!==void 0&&(Q=k.ref);for(G in k)f.call(k,G)&&!p.hasOwnProperty(G)&&(_[G]=k[G]);if(j&&j.defaultProps)for(G in k=j.defaultProps,k)_[G]===void 0&&(_[G]=k[G]);return{$$typeof:d,type:j,key:O,ref:Q,props:_,_owner:u.current}}return no.Fragment=l,no.jsx=v,no.jsxs=v,no}var iu;function uf(){return iu||(iu=1,_s.exports=df()),_s.exports}var o=uf(),vi={},Bs={exports:{}},Ze={},Fs={exports:{}},Ws={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var au;function pf(){return au||(au=1,(function(a){function d(P,D){var I=P.length;P.push(D);e:for(;0<I;){var g=I-1>>>1,N=P[g];if(0<u(N,D))P[g]=D,P[I]=N,I=g;else break e}}function l(P){return P.length===0?null:P[0]}function f(P){if(P.length===0)return null;var D=P[0],I=P.pop();if(I!==D){P[0]=I;e:for(var g=0,N=P.length,q=N>>>1;g<q;){var X=2*(g+1)-1,re=P[X],ee=X+1,pe=P[ee];if(0>u(re,I))ee<N&&0>u(pe,re)?(P[g]=pe,P[ee]=I,g=ee):(P[g]=re,P[X]=I,g=X);else if(ee<N&&0>u(pe,I))P[g]=pe,P[ee]=I,g=ee;else break e}}return D}function u(P,D){var I=P.sortIndex-D.sortIndex;return I!==0?I:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var p=performance;a.unstable_now=function(){return p.now()}}else{var v=Date,j=v.now();a.unstable_now=function(){return v.now()-j}}var k=[],Y=[],G=1,_=null,O=3,Q=!1,ne=!1,V=!1,K=typeof setTimeout=="function"?setTimeout:null,me=typeof clearTimeout=="function"?clearTimeout:null,se=typeof setImmediate!="undefined"?setImmediate:null;typeof navigator!="undefined"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function oe(P){for(var D=l(Y);D!==null;){if(D.callback===null)f(Y);else if(D.startTime<=P)f(Y),D.sortIndex=D.expirationTime,d(k,D);else break;D=l(Y)}}function Z(P){if(V=!1,oe(P),!ne)if(l(k)!==null)ne=!0,Fe(ue);else{var D=l(Y);D!==null&&xe(Z,D.startTime-P)}}function ue(P,D){ne=!1,V&&(V=!1,me(Ie),Ie=-1),Q=!0;var I=O;try{for(oe(D),_=l(k);_!==null&&(!(_.expirationTime>D)||P&&!Bt());){var g=_.callback;if(typeof g=="function"){_.callback=null,O=_.priorityLevel;var N=g(_.expirationTime<=D);D=a.unstable_now(),typeof N=="function"?_.callback=N:_===l(k)&&f(k),oe(D)}else f(k);_=l(k)}if(_!==null)var q=!0;else{var X=l(Y);X!==null&&xe(Z,X.startTime-D),q=!1}return q}finally{_=null,O=I,Q=!1}}var $=!1,U=null,Ie=-1,rt=5,wt=-1;function Bt(){return!(a.unstable_now()-wt<rt)}function ct(){if(U!==null){var P=a.unstable_now();wt=P;var D=!0;try{D=U(!0,P)}finally{D?Ve():($=!1,U=null)}}else $=!1}var Ve;if(typeof se=="function")Ve=function(){se(ct)};else if(typeof MessageChannel!="undefined"){var nt=new MessageChannel,dt=nt.port2;nt.port1.onmessage=ct,Ve=function(){dt.postMessage(null)}}else Ve=function(){K(ct,0)};function Fe(P){U=P,$||($=!0,Ve())}function xe(P,D){Ie=K(function(){P(a.unstable_now())},D)}a.unstable_IdlePriority=5,a.unstable_ImmediatePriority=1,a.unstable_LowPriority=4,a.unstable_NormalPriority=3,a.unstable_Profiling=null,a.unstable_UserBlockingPriority=2,a.unstable_cancelCallback=function(P){P.callback=null},a.unstable_continueExecution=function(){ne||Q||(ne=!0,Fe(ue))},a.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):rt=0<P?Math.floor(1e3/P):5},a.unstable_getCurrentPriorityLevel=function(){return O},a.unstable_getFirstCallbackNode=function(){return l(k)},a.unstable_next=function(P){switch(O){case 1:case 2:case 3:var D=3;break;default:D=O}var I=O;O=D;try{return P()}finally{O=I}},a.unstable_pauseExecution=function(){},a.unstable_requestPaint=function(){},a.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var I=O;O=P;try{return D()}finally{O=I}},a.unstable_scheduleCallback=function(P,D,I){var g=a.unstable_now();switch(typeof I=="object"&&I!==null?(I=I.delay,I=typeof I=="number"&&0<I?g+I:g):I=g,P){case 1:var N=-1;break;case 2:N=250;break;case 5:N=1073741823;break;case 4:N=1e4;break;default:N=5e3}return N=I+N,P={id:G++,callback:D,priorityLevel:P,startTime:I,expirationTime:N,sortIndex:-1},I>g?(P.sortIndex=I,d(Y,P),l(k)===null&&P===l(Y)&&(V?(me(Ie),Ie=-1):V=!0,xe(Z,I-g))):(P.sortIndex=N,d(k,P),ne||Q||(ne=!0,Fe(ue))),P},a.unstable_shouldYield=Bt,a.unstable_wrapCallback=function(P){var D=O;return function(){var I=O;O=D;try{return P.apply(this,arguments)}finally{O=I}}}})(Ws)),Ws}var su;function mf(){return su||(su=1,Fs.exports=pf()),Fs.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lu;function ff(){if(lu)return Ze;lu=1;var a=el(),d=mf();function l(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,r=1;r<arguments.length;r++)t+="&args[]="+encodeURIComponent(arguments[r]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var f=new Set,u={};function p(e,t){v(e,t),v(e+"Capture",t)}function v(e,t){for(u[e]=t,e=0;e<t.length;e++)f.add(t[e])}var j=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),k=Object.prototype.hasOwnProperty,Y=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,G={},_={};function O(e){return k.call(_,e)?!0:k.call(G,e)?!1:Y.test(e)?_[e]=!0:(G[e]=!0,!1)}function Q(e,t,r,n){if(r!==null&&r.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return n?!1:r!==null?!r.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function ne(e,t,r,n){if(t===null||typeof t=="undefined"||Q(e,t,r,n))return!0;if(n)return!1;if(r!==null)switch(r.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function V(e,t,r,n,i,s,c){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=n,this.attributeNamespace=i,this.mustUseProperty=r,this.propertyName=e,this.type=t,this.sanitizeURL=s,this.removeEmptyString=c}var K={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){K[e]=new V(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];K[t]=new V(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){K[e]=new V(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){K[e]=new V(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){K[e]=new V(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){K[e]=new V(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){K[e]=new V(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){K[e]=new V(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){K[e]=new V(e,5,!1,e.toLowerCase(),null,!1,!1)});var me=/[\-:]([a-z])/g;function se(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(me,se);K[t]=new V(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(me,se);K[t]=new V(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(me,se);K[t]=new V(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){K[e]=new V(e,1,!1,e.toLowerCase(),null,!1,!1)}),K.xlinkHref=new V("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){K[e]=new V(e,1,!1,e.toLowerCase(),null,!0,!0)});function oe(e,t,r,n){var i=K.hasOwnProperty(t)?K[t]:null;(i!==null?i.type!==0:n||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(ne(t,r,i,n)&&(r=null),n||i===null?O(t)&&(r===null?e.removeAttribute(t):e.setAttribute(t,""+r)):i.mustUseProperty?e[i.propertyName]=r===null?i.type===3?!1:"":r:(t=i.attributeName,n=i.attributeNamespace,r===null?e.removeAttribute(t):(i=i.type,r=i===3||i===4&&r===!0?"":""+r,n?e.setAttributeNS(n,t,r):e.setAttribute(t,r))))}var Z=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ue=Symbol.for("react.element"),$=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),Ie=Symbol.for("react.strict_mode"),rt=Symbol.for("react.profiler"),wt=Symbol.for("react.provider"),Bt=Symbol.for("react.context"),ct=Symbol.for("react.forward_ref"),Ve=Symbol.for("react.suspense"),nt=Symbol.for("react.suspense_list"),dt=Symbol.for("react.memo"),Fe=Symbol.for("react.lazy"),xe=Symbol.for("react.offscreen"),P=Symbol.iterator;function D(e){return e===null||typeof e!="object"?null:(e=P&&e[P]||e["@@iterator"],typeof e=="function"?e:null)}var I=Object.assign,g;function N(e){if(g===void 0)try{throw Error()}catch(r){var t=r.stack.trim().match(/\n( *(at )?)/);g=t&&t[1]||""}return`
`+g+e}var q=!1;function X(e,t){if(!e||q)return"";q=!0;var r=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(w){var n=w}Reflect.construct(e,[],t)}else{try{t.call()}catch(w){n=w}e.call(t.prototype)}else{try{throw Error()}catch(w){n=w}e()}}catch(w){if(w&&n&&typeof w.stack=="string"){for(var i=w.stack.split(`
`),s=n.stack.split(`
`),c=i.length-1,m=s.length-1;1<=c&&0<=m&&i[c]!==s[m];)m--;for(;1<=c&&0<=m;c--,m--)if(i[c]!==s[m]){if(c!==1||m!==1)do if(c--,m--,0>m||i[c]!==s[m]){var h=`
`+i[c].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),h}while(1<=c&&0<=m);break}}}finally{q=!1,Error.prepareStackTrace=r}return(e=e?e.displayName||e.name:"")?N(e):""}function re(e){switch(e.tag){case 5:return N(e.type);case 16:return N("Lazy");case 13:return N("Suspense");case 19:return N("SuspenseList");case 0:case 2:case 15:return e=X(e.type,!1),e;case 11:return e=X(e.type.render,!1),e;case 1:return e=X(e.type,!0),e;default:return""}}function ee(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case U:return"Fragment";case $:return"Portal";case rt:return"Profiler";case Ie:return"StrictMode";case Ve:return"Suspense";case nt:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Bt:return(e.displayName||"Context")+".Consumer";case wt:return(e._context.displayName||"Context")+".Provider";case ct:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case dt:return t=e.displayName||null,t!==null?t:ee(e.type)||"Memo";case Fe:t=e._payload,e=e._init;try{return ee(e(t))}catch{}}return null}function pe(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ee(t);case 8:return t===Ie?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ie(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ce(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function _e(e){var t=ce(e)?"checked":"value",r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),n=""+e[t];if(!e.hasOwnProperty(t)&&typeof r!="undefined"&&typeof r.get=="function"&&typeof r.set=="function"){var i=r.get,s=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(c){n=""+c,s.call(this,c)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(c){n=""+c},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Ft(e){e._valueTracker||(e._valueTracker=_e(e))}function kt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var r=t.getValue(),n="";return e&&(n=ce(e)?e.checked?"true":"false":e.value),e=n,e!==r?(t.setValue(e),!0):!1}function lo(e){if(e=e||(typeof document!="undefined"?document:void 0),typeof e=="undefined")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gi(e,t){var r=t.checked;return I({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:r!=null?r:e._wrapperState.initialChecked})}function cl(e,t){var r=t.defaultValue==null?"":t.defaultValue,n=t.checked!=null?t.checked:t.defaultChecked;r=ie(t.value!=null?t.value:r),e._wrapperState={initialChecked:n,initialValue:r,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function dl(e,t){t=t.checked,t!=null&&oe(e,"checked",t,!1)}function Vi(e,t){dl(e,t);var r=ie(t.value),n=t.type;if(r!=null)n==="number"?(r===0&&e.value===""||e.value!=r)&&(e.value=""+r):e.value!==""+r&&(e.value=""+r);else if(n==="submit"||n==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yi(e,t.type,r):t.hasOwnProperty("defaultValue")&&Yi(e,t.type,ie(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ul(e,t,r){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var n=t.type;if(!(n!=="submit"&&n!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,r||t===e.value||(e.value=t),e.defaultValue=t}r=e.name,r!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,r!==""&&(e.name=r)}function Yi(e,t,r){(t!=="number"||lo(e.ownerDocument)!==e)&&(r==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+r&&(e.defaultValue=""+r))}var vn=Array.isArray;function Rr(e,t,r,n){if(e=e.options,t){t={};for(var i=0;i<r.length;i++)t["$"+r[i]]=!0;for(r=0;r<e.length;r++)i=t.hasOwnProperty("$"+e[r].value),e[r].selected!==i&&(e[r].selected=i),i&&n&&(e[r].defaultSelected=!0)}else{for(r=""+ie(r),t=null,i=0;i<e.length;i++){if(e[i].value===r){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function Qi(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(l(91));return I({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function pl(e,t){var r=t.value;if(r==null){if(r=t.children,t=t.defaultValue,r!=null){if(t!=null)throw Error(l(92));if(vn(r)){if(1<r.length)throw Error(l(93));r=r[0]}t=r}t==null&&(t=""),r=t}e._wrapperState={initialValue:ie(r)}}function ml(e,t){var r=ie(t.value),n=ie(t.defaultValue);r!=null&&(r=""+r,r!==e.value&&(e.value=r),t.defaultValue==null&&e.defaultValue!==r&&(e.defaultValue=r)),n!=null&&(e.defaultValue=""+n)}function fl(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function hl(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $i(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?hl(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var co,xl=(function(e){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(t,r,n,i){MSApp.execUnsafeLocalFunction(function(){return e(t,r,n,i)})}:e})(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(co=co||document.createElement("div"),co.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=co.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yn(e,t){if(t){var r=e.firstChild;if(r&&r===e.lastChild&&r.nodeType===3){r.nodeValue=t;return}}e.textContent=t}var bn={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},up=["Webkit","ms","Moz","O"];Object.keys(bn).forEach(function(e){up.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),bn[t]=bn[e]})});function gl(e,t,r){return t==null||typeof t=="boolean"||t===""?"":r||typeof t!="number"||t===0||bn.hasOwnProperty(e)&&bn[e]?(""+t).trim():t+"px"}function vl(e,t){e=e.style;for(var r in t)if(t.hasOwnProperty(r)){var n=r.indexOf("--")===0,i=gl(r,t[r],n);r==="float"&&(r="cssFloat"),n?e.setProperty(r,i):e[r]=i}}var pp=I({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qi(e,t){if(t){if(pp[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(l(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(l(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(l(61))}if(t.style!=null&&typeof t.style!="object")throw Error(l(62))}}function Ki(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xi=null;function Ji(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Zi=null,Dr=null,_r=null;function yl(e){if(e=Un(e)){if(typeof Zi!="function")throw Error(l(280));var t=e.stateNode;t&&(t=Mo(t),Zi(e.stateNode,e.type,t))}}function bl(e){Dr?_r?_r.push(e):_r=[e]:Dr=e}function wl(){if(Dr){var e=Dr,t=_r;if(_r=Dr=null,yl(e),t)for(e=0;e<t.length;e++)yl(t[e])}}function kl(e,t){return e(t)}function jl(){}var ea=!1;function Nl(e,t,r){if(ea)return e(t,r);ea=!0;try{return kl(e,t,r)}finally{ea=!1,(Dr!==null||_r!==null)&&(jl(),wl())}}function wn(e,t){var r=e.stateNode;if(r===null)return null;var n=Mo(r);if(n===null)return null;r=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(r&&typeof r!="function")throw Error(l(231,t,typeof r));return r}var ta=!1;if(j)try{var kn={};Object.defineProperty(kn,"passive",{get:function(){ta=!0}}),window.addEventListener("test",kn,kn),window.removeEventListener("test",kn,kn)}catch{ta=!1}function mp(e,t,r,n,i,s,c,m,h){var w=Array.prototype.slice.call(arguments,3);try{t.apply(r,w)}catch(C){this.onError(C)}}var jn=!1,uo=null,po=!1,ra=null,fp={onError:function(e){jn=!0,uo=e}};function hp(e,t,r,n,i,s,c,m,h){jn=!1,uo=null,mp.apply(fp,arguments)}function xp(e,t,r,n,i,s,c,m,h){if(hp.apply(this,arguments),jn){if(jn){var w=uo;jn=!1,uo=null}else throw Error(l(198));po||(po=!0,ra=w)}}function yr(e){var t=e,r=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(r=t.return),e=t.return;while(e)}return t.tag===3?r:null}function Sl(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Cl(e){if(yr(e)!==e)throw Error(l(188))}function gp(e){var t=e.alternate;if(!t){if(t=yr(e),t===null)throw Error(l(188));return t!==e?null:e}for(var r=e,n=t;;){var i=r.return;if(i===null)break;var s=i.alternate;if(s===null){if(n=i.return,n!==null){r=n;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===r)return Cl(i),e;if(s===n)return Cl(i),t;s=s.sibling}throw Error(l(188))}if(r.return!==n.return)r=i,n=s;else{for(var c=!1,m=i.child;m;){if(m===r){c=!0,r=i,n=s;break}if(m===n){c=!0,n=i,r=s;break}m=m.sibling}if(!c){for(m=s.child;m;){if(m===r){c=!0,r=s,n=i;break}if(m===n){c=!0,n=s,r=i;break}m=m.sibling}if(!c)throw Error(l(189))}}if(r.alternate!==n)throw Error(l(190))}if(r.tag!==3)throw Error(l(188));return r.stateNode.current===r?e:t}function Tl(e){return e=gp(e),e!==null?El(e):null}function El(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=El(e);if(t!==null)return t;e=e.sibling}return null}var Pl=d.unstable_scheduleCallback,Il=d.unstable_cancelCallback,vp=d.unstable_shouldYield,yp=d.unstable_requestPaint,Se=d.unstable_now,bp=d.unstable_getCurrentPriorityLevel,na=d.unstable_ImmediatePriority,Ll=d.unstable_UserBlockingPriority,mo=d.unstable_NormalPriority,wp=d.unstable_LowPriority,zl=d.unstable_IdlePriority,fo=null,zt=null;function kp(e){if(zt&&typeof zt.onCommitFiberRoot=="function")try{zt.onCommitFiberRoot(fo,e,void 0,(e.current.flags&128)===128)}catch{}}var jt=Math.clz32?Math.clz32:Sp,jp=Math.log,Np=Math.LN2;function Sp(e){return e>>>=0,e===0?32:31-(jp(e)/Np|0)|0}var ho=64,xo=4194304;function Nn(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function go(e,t){var r=e.pendingLanes;if(r===0)return 0;var n=0,i=e.suspendedLanes,s=e.pingedLanes,c=r&268435455;if(c!==0){var m=c&~i;m!==0?n=Nn(m):(s&=c,s!==0&&(n=Nn(s)))}else c=r&~i,c!==0?n=Nn(c):s!==0&&(n=Nn(s));if(n===0)return 0;if(t!==0&&t!==n&&(t&i)===0&&(i=n&-n,s=t&-t,i>=s||i===16&&(s&4194240)!==0))return t;if((n&4)!==0&&(n|=r&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=n;0<t;)r=31-jt(t),i=1<<r,n|=e[r],t&=~i;return n}function Cp(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Tp(e,t){for(var r=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,s=e.pendingLanes;0<s;){var c=31-jt(s),m=1<<c,h=i[c];h===-1?((m&r)===0||(m&n)!==0)&&(i[c]=Cp(m,t)):h<=t&&(e.expiredLanes|=m),s&=~m}}function oa(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Ml(){var e=ho;return ho<<=1,(ho&4194240)===0&&(ho=64),e}function ia(e){for(var t=[],r=0;31>r;r++)t.push(e);return t}function Sn(e,t,r){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-jt(t),e[t]=r}function Ep(e,t){var r=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var n=e.eventTimes;for(e=e.expirationTimes;0<r;){var i=31-jt(r),s=1<<i;t[i]=0,n[i]=-1,e[i]=-1,r&=~s}}function aa(e,t){var r=e.entangledLanes|=t;for(e=e.entanglements;r;){var n=31-jt(r),i=1<<n;i&t|e[n]&t&&(e[n]|=t),r&=~i}}var he=0;function Al(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Rl,sa,Dl,_l,Ol,la=!1,vo=[],Zt=null,er=null,tr=null,Cn=new Map,Tn=new Map,rr=[],Pp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Bl(e,t){switch(e){case"focusin":case"focusout":Zt=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Cn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Tn.delete(t.pointerId)}}function En(e,t,r,n,i,s){return e===null||e.nativeEvent!==s?(e={blockedOn:t,domEventName:r,eventSystemFlags:n,nativeEvent:s,targetContainers:[i]},t!==null&&(t=Un(t),t!==null&&sa(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Ip(e,t,r,n,i){switch(t){case"focusin":return Zt=En(Zt,e,t,r,n,i),!0;case"dragenter":return er=En(er,e,t,r,n,i),!0;case"mouseover":return tr=En(tr,e,t,r,n,i),!0;case"pointerover":var s=i.pointerId;return Cn.set(s,En(Cn.get(s)||null,e,t,r,n,i)),!0;case"gotpointercapture":return s=i.pointerId,Tn.set(s,En(Tn.get(s)||null,e,t,r,n,i)),!0}return!1}function Fl(e){var t=br(e.target);if(t!==null){var r=yr(t);if(r!==null){if(t=r.tag,t===13){if(t=Sl(r),t!==null){e.blockedOn=t,Ol(e.priority,function(){Dl(r)});return}}else if(t===3&&r.stateNode.current.memoizedState.isDehydrated){e.blockedOn=r.tag===3?r.stateNode.containerInfo:null;return}}}e.blockedOn=null}function yo(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var r=da(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(r===null){r=e.nativeEvent;var n=new r.constructor(r.type,r);Xi=n,r.target.dispatchEvent(n),Xi=null}else return t=Un(r),t!==null&&sa(t),e.blockedOn=r,!1;t.shift()}return!0}function Wl(e,t,r){yo(e)&&r.delete(t)}function Lp(){la=!1,Zt!==null&&yo(Zt)&&(Zt=null),er!==null&&yo(er)&&(er=null),tr!==null&&yo(tr)&&(tr=null),Cn.forEach(Wl),Tn.forEach(Wl)}function Pn(e,t){e.blockedOn===t&&(e.blockedOn=null,la||(la=!0,d.unstable_scheduleCallback(d.unstable_NormalPriority,Lp)))}function In(e){function t(i){return Pn(i,e)}if(0<vo.length){Pn(vo[0],e);for(var r=1;r<vo.length;r++){var n=vo[r];n.blockedOn===e&&(n.blockedOn=null)}}for(Zt!==null&&Pn(Zt,e),er!==null&&Pn(er,e),tr!==null&&Pn(tr,e),Cn.forEach(t),Tn.forEach(t),r=0;r<rr.length;r++)n=rr[r],n.blockedOn===e&&(n.blockedOn=null);for(;0<rr.length&&(r=rr[0],r.blockedOn===null);)Fl(r),r.blockedOn===null&&rr.shift()}var Or=Z.ReactCurrentBatchConfig,bo=!0;function zp(e,t,r,n){var i=he,s=Or.transition;Or.transition=null;try{he=1,ca(e,t,r,n)}finally{he=i,Or.transition=s}}function Mp(e,t,r,n){var i=he,s=Or.transition;Or.transition=null;try{he=4,ca(e,t,r,n)}finally{he=i,Or.transition=s}}function ca(e,t,r,n){if(bo){var i=da(e,t,r,n);if(i===null)Ta(e,t,n,wo,r),Bl(e,n);else if(Ip(i,e,t,r,n))n.stopPropagation();else if(Bl(e,n),t&4&&-1<Pp.indexOf(e)){for(;i!==null;){var s=Un(i);if(s!==null&&Rl(s),s=da(e,t,r,n),s===null&&Ta(e,t,n,wo,r),s===i)break;i=s}i!==null&&n.stopPropagation()}else Ta(e,t,n,null,r)}}var wo=null;function da(e,t,r,n){if(wo=null,e=Ji(n),e=br(e),e!==null)if(t=yr(e),t===null)e=null;else if(r=t.tag,r===13){if(e=Sl(t),e!==null)return e;e=null}else if(r===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return wo=e,null}function Ul(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(bp()){case na:return 1;case Ll:return 4;case mo:case wp:return 16;case zl:return 536870912;default:return 16}default:return 16}}var nr=null,ua=null,ko=null;function Hl(){if(ko)return ko;var e,t=ua,r=t.length,n,i="value"in nr?nr.value:nr.textContent,s=i.length;for(e=0;e<r&&t[e]===i[e];e++);var c=r-e;for(n=1;n<=c&&t[r-n]===i[s-n];n++);return ko=i.slice(e,1<n?1-n:void 0)}function jo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function No(){return!0}function Gl(){return!1}function ot(e){function t(r,n,i,s,c){this._reactName=r,this._targetInst=i,this.type=n,this.nativeEvent=s,this.target=c,this.currentTarget=null;for(var m in e)e.hasOwnProperty(m)&&(r=e[m],this[m]=r?r(s):s[m]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?No:Gl,this.isPropagationStopped=Gl,this}return I(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var r=this.nativeEvent;r&&(r.preventDefault?r.preventDefault():typeof r.returnValue!="unknown"&&(r.returnValue=!1),this.isDefaultPrevented=No)},stopPropagation:function(){var r=this.nativeEvent;r&&(r.stopPropagation?r.stopPropagation():typeof r.cancelBubble!="unknown"&&(r.cancelBubble=!0),this.isPropagationStopped=No)},persist:function(){},isPersistent:No}),t}var Br={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},pa=ot(Br),Ln=I({},Br,{view:0,detail:0}),Ap=ot(Ln),ma,fa,zn,So=I({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xa,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==zn&&(zn&&e.type==="mousemove"?(ma=e.screenX-zn.screenX,fa=e.screenY-zn.screenY):fa=ma=0,zn=e),ma)},movementY:function(e){return"movementY"in e?e.movementY:fa}}),Vl=ot(So),Rp=I({},So,{dataTransfer:0}),Dp=ot(Rp),_p=I({},Ln,{relatedTarget:0}),ha=ot(_p),Op=I({},Br,{animationName:0,elapsedTime:0,pseudoElement:0}),Bp=ot(Op),Fp=I({},Br,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wp=ot(Fp),Up=I({},Br,{data:0}),Yl=ot(Up),Hp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Gp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Vp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Vp[e])?!!t[e]:!1}function xa(){return Yp}var Qp=I({},Ln,{key:function(e){if(e.key){var t=Hp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=jo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Gp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xa,charCode:function(e){return e.type==="keypress"?jo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?jo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),$p=ot(Qp),qp=I({},So,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ql=ot(qp),Kp=I({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xa}),Xp=ot(Kp),Jp=I({},Br,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zp=ot(Jp),em=I({},So,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),tm=ot(em),rm=[9,13,27,32],ga=j&&"CompositionEvent"in window,Mn=null;j&&"documentMode"in document&&(Mn=document.documentMode);var nm=j&&"TextEvent"in window&&!Mn,$l=j&&(!ga||Mn&&8<Mn&&11>=Mn),ql=" ",Kl=!1;function Xl(e,t){switch(e){case"keyup":return rm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Jl(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fr=!1;function om(e,t){switch(e){case"compositionend":return Jl(t);case"keypress":return t.which!==32?null:(Kl=!0,ql);case"textInput":return e=t.data,e===ql&&Kl?null:e;default:return null}}function im(e,t){if(Fr)return e==="compositionend"||!ga&&Xl(e,t)?(e=Hl(),ko=ua=nr=null,Fr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $l&&t.locale!=="ko"?null:t.data;default:return null}}var am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zl(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!am[e.type]:t==="textarea"}function ec(e,t,r,n){bl(n),t=Io(t,"onChange"),0<t.length&&(r=new pa("onChange","change",null,r,n),e.push({event:r,listeners:t}))}var An=null,Rn=null;function sm(e){vc(e,0)}function Co(e){var t=Vr(e);if(kt(t))return e}function lm(e,t){if(e==="change")return t}var tc=!1;if(j){var va;if(j){var ya="oninput"in document;if(!ya){var rc=document.createElement("div");rc.setAttribute("oninput","return;"),ya=typeof rc.oninput=="function"}va=ya}else va=!1;tc=va&&(!document.documentMode||9<document.documentMode)}function nc(){An&&(An.detachEvent("onpropertychange",oc),Rn=An=null)}function oc(e){if(e.propertyName==="value"&&Co(Rn)){var t=[];ec(t,Rn,e,Ji(e)),Nl(sm,t)}}function cm(e,t,r){e==="focusin"?(nc(),An=t,Rn=r,An.attachEvent("onpropertychange",oc)):e==="focusout"&&nc()}function dm(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Co(Rn)}function um(e,t){if(e==="click")return Co(t)}function pm(e,t){if(e==="input"||e==="change")return Co(t)}function mm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Nt=typeof Object.is=="function"?Object.is:mm;function Dn(e,t){if(Nt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(n=0;n<r.length;n++){var i=r[n];if(!k.call(t,i)||!Nt(e[i],t[i]))return!1}return!0}function ic(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ac(e,t){var r=ic(e);e=0;for(var n;r;){if(r.nodeType===3){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ic(r)}}function sc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?sc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function lc(){for(var e=window,t=lo();t instanceof e.HTMLIFrameElement;){try{var r=typeof t.contentWindow.location.href=="string"}catch{r=!1}if(r)e=t.contentWindow;else break;t=lo(e.document)}return t}function ba(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function fm(e){var t=lc(),r=e.focusedElem,n=e.selectionRange;if(t!==r&&r&&r.ownerDocument&&sc(r.ownerDocument.documentElement,r)){if(n!==null&&ba(r)){if(t=n.start,e=n.end,e===void 0&&(e=t),"selectionStart"in r)r.selectionStart=t,r.selectionEnd=Math.min(e,r.value.length);else if(e=(t=r.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=r.textContent.length,s=Math.min(n.start,i);n=n.end===void 0?s:Math.min(n.end,i),!e.extend&&s>n&&(i=n,n=s,s=i),i=ac(r,s);var c=ac(r,n);i&&c&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==c.node||e.focusOffset!==c.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),s>n?(e.addRange(t),e.extend(c.node,c.offset)):(t.setEnd(c.node,c.offset),e.addRange(t)))}}for(t=[],e=r;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof r.focus=="function"&&r.focus(),r=0;r<t.length;r++)e=t[r],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var hm=j&&"documentMode"in document&&11>=document.documentMode,Wr=null,wa=null,_n=null,ka=!1;function cc(e,t,r){var n=r.window===r?r.document:r.nodeType===9?r:r.ownerDocument;ka||Wr==null||Wr!==lo(n)||(n=Wr,"selectionStart"in n&&ba(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),_n&&Dn(_n,n)||(_n=n,n=Io(wa,"onSelect"),0<n.length&&(t=new pa("onSelect","select",null,t,r),e.push({event:t,listeners:n}),t.target=Wr)))}function To(e,t){var r={};return r[e.toLowerCase()]=t.toLowerCase(),r["Webkit"+e]="webkit"+t,r["Moz"+e]="moz"+t,r}var Ur={animationend:To("Animation","AnimationEnd"),animationiteration:To("Animation","AnimationIteration"),animationstart:To("Animation","AnimationStart"),transitionend:To("Transition","TransitionEnd")},ja={},dc={};j&&(dc=document.createElement("div").style,"AnimationEvent"in window||(delete Ur.animationend.animation,delete Ur.animationiteration.animation,delete Ur.animationstart.animation),"TransitionEvent"in window||delete Ur.transitionend.transition);function Eo(e){if(ja[e])return ja[e];if(!Ur[e])return e;var t=Ur[e],r;for(r in t)if(t.hasOwnProperty(r)&&r in dc)return ja[e]=t[r];return e}var uc=Eo("animationend"),pc=Eo("animationiteration"),mc=Eo("animationstart"),fc=Eo("transitionend"),hc=new Map,xc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(e,t){hc.set(e,t),p(t,[e])}for(var Na=0;Na<xc.length;Na++){var Sa=xc[Na],xm=Sa.toLowerCase(),gm=Sa[0].toUpperCase()+Sa.slice(1);or(xm,"on"+gm)}or(uc,"onAnimationEnd"),or(pc,"onAnimationIteration"),or(mc,"onAnimationStart"),or("dblclick","onDoubleClick"),or("focusin","onFocus"),or("focusout","onBlur"),or(fc,"onTransitionEnd"),v("onMouseEnter",["mouseout","mouseover"]),v("onMouseLeave",["mouseout","mouseover"]),v("onPointerEnter",["pointerout","pointerover"]),v("onPointerLeave",["pointerout","pointerover"]),p("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),p("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),p("onBeforeInput",["compositionend","keypress","textInput","paste"]),p("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),p("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var On="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vm=new Set("cancel close invalid load scroll toggle".split(" ").concat(On));function gc(e,t,r){var n=e.type||"unknown-event";e.currentTarget=r,xp(n,t,void 0,e),e.currentTarget=null}function vc(e,t){t=(t&4)!==0;for(var r=0;r<e.length;r++){var n=e[r],i=n.event;n=n.listeners;e:{var s=void 0;if(t)for(var c=n.length-1;0<=c;c--){var m=n[c],h=m.instance,w=m.currentTarget;if(m=m.listener,h!==s&&i.isPropagationStopped())break e;gc(i,m,w),s=h}else for(c=0;c<n.length;c++){if(m=n[c],h=m.instance,w=m.currentTarget,m=m.listener,h!==s&&i.isPropagationStopped())break e;gc(i,m,w),s=h}}}if(po)throw e=ra,po=!1,ra=null,e}function ve(e,t){var r=t[Ma];r===void 0&&(r=t[Ma]=new Set);var n=e+"__bubble";r.has(n)||(yc(t,e,2,!1),r.add(n))}function Ca(e,t,r){var n=0;t&&(n|=4),yc(r,e,n,t)}var Po="_reactListening"+Math.random().toString(36).slice(2);function Bn(e){if(!e[Po]){e[Po]=!0,f.forEach(function(r){r!=="selectionchange"&&(vm.has(r)||Ca(r,!1,e),Ca(r,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Po]||(t[Po]=!0,Ca("selectionchange",!1,t))}}function yc(e,t,r,n){switch(Ul(t)){case 1:var i=zp;break;case 4:i=Mp;break;default:i=ca}r=i.bind(null,t,r,e),i=void 0,!ta||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,r,{capture:!0,passive:i}):e.addEventListener(t,r,!0):i!==void 0?e.addEventListener(t,r,{passive:i}):e.addEventListener(t,r,!1)}function Ta(e,t,r,n,i){var s=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var c=n.tag;if(c===3||c===4){var m=n.stateNode.containerInfo;if(m===i||m.nodeType===8&&m.parentNode===i)break;if(c===4)for(c=n.return;c!==null;){var h=c.tag;if((h===3||h===4)&&(h=c.stateNode.containerInfo,h===i||h.nodeType===8&&h.parentNode===i))return;c=c.return}for(;m!==null;){if(c=br(m),c===null)return;if(h=c.tag,h===5||h===6){n=s=c;continue e}m=m.parentNode}}n=n.return}Nl(function(){var w=s,C=Ji(r),T=[];e:{var S=hc.get(e);if(S!==void 0){var L=pa,M=e;switch(e){case"keypress":if(jo(r)===0)break e;case"keydown":case"keyup":L=$p;break;case"focusin":M="focus",L=ha;break;case"focusout":M="blur",L=ha;break;case"beforeblur":case"afterblur":L=ha;break;case"click":if(r.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":L=Vl;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":L=Dp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":L=Xp;break;case uc:case pc:case mc:L=Bp;break;case fc:L=Zp;break;case"scroll":L=Ap;break;case"wheel":L=tm;break;case"copy":case"cut":case"paste":L=Wp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":L=Ql}var A=(t&4)!==0,Ce=!A&&e==="scroll",y=A?S!==null?S+"Capture":null:S;A=[];for(var x=w,b;x!==null;){b=x;var E=b.stateNode;if(b.tag===5&&E!==null&&(b=E,y!==null&&(E=wn(x,y),E!=null&&A.push(Fn(x,E,b)))),Ce)break;x=x.return}0<A.length&&(S=new L(S,M,null,r,C),T.push({event:S,listeners:A}))}}if((t&7)===0){e:{if(S=e==="mouseover"||e==="pointerover",L=e==="mouseout"||e==="pointerout",S&&r!==Xi&&(M=r.relatedTarget||r.fromElement)&&(br(M)||M[Wt]))break e;if((L||S)&&(S=C.window===C?C:(S=C.ownerDocument)?S.defaultView||S.parentWindow:window,L?(M=r.relatedTarget||r.toElement,L=w,M=M?br(M):null,M!==null&&(Ce=yr(M),M!==Ce||M.tag!==5&&M.tag!==6)&&(M=null)):(L=null,M=w),L!==M)){if(A=Vl,E="onMouseLeave",y="onMouseEnter",x="mouse",(e==="pointerout"||e==="pointerover")&&(A=Ql,E="onPointerLeave",y="onPointerEnter",x="pointer"),Ce=L==null?S:Vr(L),b=M==null?S:Vr(M),S=new A(E,x+"leave",L,r,C),S.target=Ce,S.relatedTarget=b,E=null,br(C)===w&&(A=new A(y,x+"enter",M,r,C),A.target=b,A.relatedTarget=Ce,E=A),Ce=E,L&&M)t:{for(A=L,y=M,x=0,b=A;b;b=Hr(b))x++;for(b=0,E=y;E;E=Hr(E))b++;for(;0<x-b;)A=Hr(A),x--;for(;0<b-x;)y=Hr(y),b--;for(;x--;){if(A===y||y!==null&&A===y.alternate)break t;A=Hr(A),y=Hr(y)}A=null}else A=null;L!==null&&bc(T,S,L,A,!1),M!==null&&Ce!==null&&bc(T,Ce,M,A,!0)}}e:{if(S=w?Vr(w):window,L=S.nodeName&&S.nodeName.toLowerCase(),L==="select"||L==="input"&&S.type==="file")var R=lm;else if(Zl(S))if(tc)R=pm;else{R=dm;var B=cm}else(L=S.nodeName)&&L.toLowerCase()==="input"&&(S.type==="checkbox"||S.type==="radio")&&(R=um);if(R&&(R=R(e,w))){ec(T,R,r,C);break e}B&&B(e,S,w),e==="focusout"&&(B=S._wrapperState)&&B.controlled&&S.type==="number"&&Yi(S,"number",S.value)}switch(B=w?Vr(w):window,e){case"focusin":(Zl(B)||B.contentEditable==="true")&&(Wr=B,wa=w,_n=null);break;case"focusout":_n=wa=Wr=null;break;case"mousedown":ka=!0;break;case"contextmenu":case"mouseup":case"dragend":ka=!1,cc(T,r,C);break;case"selectionchange":if(hm)break;case"keydown":case"keyup":cc(T,r,C)}var F;if(ga)e:{switch(e){case"compositionstart":var H="onCompositionStart";break e;case"compositionend":H="onCompositionEnd";break e;case"compositionupdate":H="onCompositionUpdate";break e}H=void 0}else Fr?Xl(e,r)&&(H="onCompositionEnd"):e==="keydown"&&r.keyCode===229&&(H="onCompositionStart");H&&($l&&r.locale!=="ko"&&(Fr||H!=="onCompositionStart"?H==="onCompositionEnd"&&Fr&&(F=Hl()):(nr=C,ua="value"in nr?nr.value:nr.textContent,Fr=!0)),B=Io(w,H),0<B.length&&(H=new Yl(H,e,null,r,C),T.push({event:H,listeners:B}),F?H.data=F:(F=Jl(r),F!==null&&(H.data=F)))),(F=nm?om(e,r):im(e,r))&&(w=Io(w,"onBeforeInput"),0<w.length&&(C=new Yl("onBeforeInput","beforeinput",null,r,C),T.push({event:C,listeners:w}),C.data=F))}vc(T,t)})}function Fn(e,t,r){return{instance:e,listener:t,currentTarget:r}}function Io(e,t){for(var r=t+"Capture",n=[];e!==null;){var i=e,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=wn(e,r),s!=null&&n.unshift(Fn(e,s,i)),s=wn(e,t),s!=null&&n.push(Fn(e,s,i))),e=e.return}return n}function Hr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function bc(e,t,r,n,i){for(var s=t._reactName,c=[];r!==null&&r!==n;){var m=r,h=m.alternate,w=m.stateNode;if(h!==null&&h===n)break;m.tag===5&&w!==null&&(m=w,i?(h=wn(r,s),h!=null&&c.unshift(Fn(r,h,m))):i||(h=wn(r,s),h!=null&&c.push(Fn(r,h,m)))),r=r.return}c.length!==0&&e.push({event:t,listeners:c})}var ym=/\r\n?/g,bm=/\u0000|\uFFFD/g;function wc(e){return(typeof e=="string"?e:""+e).replace(ym,`
`).replace(bm,"")}function Lo(e,t,r){if(t=wc(t),wc(e)!==t&&r)throw Error(l(425))}function zo(){}var Ea=null,Pa=null;function Ia(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var La=typeof setTimeout=="function"?setTimeout:void 0,wm=typeof clearTimeout=="function"?clearTimeout:void 0,kc=typeof Promise=="function"?Promise:void 0,km=typeof queueMicrotask=="function"?queueMicrotask:typeof kc!="undefined"?function(e){return kc.resolve(null).then(e).catch(jm)}:La;function jm(e){setTimeout(function(){throw e})}function za(e,t){var r=t,n=0;do{var i=r.nextSibling;if(e.removeChild(r),i&&i.nodeType===8)if(r=i.data,r==="/$"){if(n===0){e.removeChild(i),In(t);return}n--}else r!=="$"&&r!=="$?"&&r!=="$!"||n++;r=i}while(r);In(t)}function ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function jc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="$"||r==="$!"||r==="$?"){if(t===0)return e;t--}else r==="/$"&&t++}e=e.previousSibling}return null}var Gr=Math.random().toString(36).slice(2),Mt="__reactFiber$"+Gr,Wn="__reactProps$"+Gr,Wt="__reactContainer$"+Gr,Ma="__reactEvents$"+Gr,Nm="__reactListeners$"+Gr,Sm="__reactHandles$"+Gr;function br(e){var t=e[Mt];if(t)return t;for(var r=e.parentNode;r;){if(t=r[Wt]||r[Mt]){if(r=t.alternate,t.child!==null||r!==null&&r.child!==null)for(e=jc(e);e!==null;){if(r=e[Mt])return r;e=jc(e)}return t}e=r,r=e.parentNode}return null}function Un(e){return e=e[Mt]||e[Wt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Vr(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(l(33))}function Mo(e){return e[Wn]||null}var Aa=[],Yr=-1;function ar(e){return{current:e}}function ye(e){0>Yr||(e.current=Aa[Yr],Aa[Yr]=null,Yr--)}function ge(e,t){Yr++,Aa[Yr]=e.current,e.current=t}var sr={},We=ar(sr),$e=ar(!1),wr=sr;function Qr(e,t){var r=e.type.contextTypes;if(!r)return sr;var n=e.stateNode;if(n&&n.__reactInternalMemoizedUnmaskedChildContext===t)return n.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in r)i[s]=t[s];return n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function qe(e){return e=e.childContextTypes,e!=null}function Ao(){ye($e),ye(We)}function Nc(e,t,r){if(We.current!==sr)throw Error(l(168));ge(We,t),ge($e,r)}function Sc(e,t,r){var n=e.stateNode;if(t=t.childContextTypes,typeof n.getChildContext!="function")return r;n=n.getChildContext();for(var i in n)if(!(i in t))throw Error(l(108,pe(e)||"Unknown",i));return I({},r,n)}function Ro(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||sr,wr=We.current,ge(We,e),ge($e,$e.current),!0}function Cc(e,t,r){var n=e.stateNode;if(!n)throw Error(l(169));r?(e=Sc(e,t,wr),n.__reactInternalMemoizedMergedChildContext=e,ye($e),ye(We),ge(We,e)):ye($e),ge($e,r)}var Ut=null,Do=!1,Ra=!1;function Tc(e){Ut===null?Ut=[e]:Ut.push(e)}function Cm(e){Do=!0,Tc(e)}function lr(){if(!Ra&&Ut!==null){Ra=!0;var e=0,t=he;try{var r=Ut;for(he=1;e<r.length;e++){var n=r[e];do n=n(!0);while(n!==null)}Ut=null,Do=!1}catch(i){throw Ut!==null&&(Ut=Ut.slice(e+1)),Pl(na,lr),i}finally{he=t,Ra=!1}}return null}var $r=[],qr=0,_o=null,Oo=0,ut=[],pt=0,kr=null,Ht=1,Gt="";function jr(e,t){$r[qr++]=Oo,$r[qr++]=_o,_o=e,Oo=t}function Ec(e,t,r){ut[pt++]=Ht,ut[pt++]=Gt,ut[pt++]=kr,kr=e;var n=Ht;e=Gt;var i=32-jt(n)-1;n&=~(1<<i),r+=1;var s=32-jt(t)+i;if(30<s){var c=i-i%5;s=(n&(1<<c)-1).toString(32),n>>=c,i-=c,Ht=1<<32-jt(t)+i|r<<i|n,Gt=s+e}else Ht=1<<s|r<<i|n,Gt=e}function Da(e){e.return!==null&&(jr(e,1),Ec(e,1,0))}function _a(e){for(;e===_o;)_o=$r[--qr],$r[qr]=null,Oo=$r[--qr],$r[qr]=null;for(;e===kr;)kr=ut[--pt],ut[pt]=null,Gt=ut[--pt],ut[pt]=null,Ht=ut[--pt],ut[pt]=null}var it=null,at=null,we=!1,St=null;function Pc(e,t){var r=xt(5,null,null,0);r.elementType="DELETED",r.stateNode=t,r.return=e,t=e.deletions,t===null?(e.deletions=[r],e.flags|=16):t.push(r)}function Ic(e,t){switch(e.tag){case 5:var r=e.type;return t=t.nodeType!==1||r.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,it=e,at=ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,it=e,at=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(r=kr!==null?{id:Ht,overflow:Gt}:null,e.memoizedState={dehydrated:t,treeContext:r,retryLane:1073741824},r=xt(18,null,null,0),r.stateNode=t,r.return=e,e.child=r,it=e,at=null,!0):!1;default:return!1}}function Oa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Ba(e){if(we){var t=at;if(t){var r=t;if(!Ic(e,t)){if(Oa(e))throw Error(l(418));t=ir(r.nextSibling);var n=it;t&&Ic(e,t)?Pc(n,r):(e.flags=e.flags&-4097|2,we=!1,it=e)}}else{if(Oa(e))throw Error(l(418));e.flags=e.flags&-4097|2,we=!1,it=e}}}function Lc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;it=e}function Bo(e){if(e!==it)return!1;if(!we)return Lc(e),we=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ia(e.type,e.memoizedProps)),t&&(t=at)){if(Oa(e))throw zc(),Error(l(418));for(;t;)Pc(e,t),t=ir(t.nextSibling)}if(Lc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(l(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var r=e.data;if(r==="/$"){if(t===0){at=ir(e.nextSibling);break e}t--}else r!=="$"&&r!=="$!"&&r!=="$?"||t++}e=e.nextSibling}at=null}}else at=it?ir(e.stateNode.nextSibling):null;return!0}function zc(){for(var e=at;e;)e=ir(e.nextSibling)}function Kr(){at=it=null,we=!1}function Fa(e){St===null?St=[e]:St.push(e)}var Tm=Z.ReactCurrentBatchConfig;function Hn(e,t,r){if(e=r.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(r._owner){if(r=r._owner,r){if(r.tag!==1)throw Error(l(309));var n=r.stateNode}if(!n)throw Error(l(147,e));var i=n,s=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===s?t.ref:(t=function(c){var m=i.refs;c===null?delete m[s]:m[s]=c},t._stringRef=s,t)}if(typeof e!="string")throw Error(l(284));if(!r._owner)throw Error(l(290,e))}return e}function Fo(e,t){throw e=Object.prototype.toString.call(t),Error(l(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Mc(e){var t=e._init;return t(e._payload)}function Ac(e){function t(y,x){if(e){var b=y.deletions;b===null?(y.deletions=[x],y.flags|=16):b.push(x)}}function r(y,x){if(!e)return null;for(;x!==null;)t(y,x),x=x.sibling;return null}function n(y,x){for(y=new Map;x!==null;)x.key!==null?y.set(x.key,x):y.set(x.index,x),x=x.sibling;return y}function i(y,x){return y=xr(y,x),y.index=0,y.sibling=null,y}function s(y,x,b){return y.index=b,e?(b=y.alternate,b!==null?(b=b.index,b<x?(y.flags|=2,x):b):(y.flags|=2,x)):(y.flags|=1048576,x)}function c(y){return e&&y.alternate===null&&(y.flags|=2),y}function m(y,x,b,E){return x===null||x.tag!==6?(x=Ls(b,y.mode,E),x.return=y,x):(x=i(x,b),x.return=y,x)}function h(y,x,b,E){var R=b.type;return R===U?C(y,x,b.props.children,E,b.key):x!==null&&(x.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fe&&Mc(R)===x.type)?(E=i(x,b.props),E.ref=Hn(y,x,b),E.return=y,E):(E=di(b.type,b.key,b.props,null,y.mode,E),E.ref=Hn(y,x,b),E.return=y,E)}function w(y,x,b,E){return x===null||x.tag!==4||x.stateNode.containerInfo!==b.containerInfo||x.stateNode.implementation!==b.implementation?(x=zs(b,y.mode,E),x.return=y,x):(x=i(x,b.children||[]),x.return=y,x)}function C(y,x,b,E,R){return x===null||x.tag!==7?(x=Lr(b,y.mode,E,R),x.return=y,x):(x=i(x,b),x.return=y,x)}function T(y,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return x=Ls(""+x,y.mode,b),x.return=y,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ue:return b=di(x.type,x.key,x.props,null,y.mode,b),b.ref=Hn(y,null,x),b.return=y,b;case $:return x=zs(x,y.mode,b),x.return=y,x;case Fe:var E=x._init;return T(y,E(x._payload),b)}if(vn(x)||D(x))return x=Lr(x,y.mode,b,null),x.return=y,x;Fo(y,x)}return null}function S(y,x,b,E){var R=x!==null?x.key:null;if(typeof b=="string"&&b!==""||typeof b=="number")return R!==null?null:m(y,x,""+b,E);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case ue:return b.key===R?h(y,x,b,E):null;case $:return b.key===R?w(y,x,b,E):null;case Fe:return R=b._init,S(y,x,R(b._payload),E)}if(vn(b)||D(b))return R!==null?null:C(y,x,b,E,null);Fo(y,b)}return null}function L(y,x,b,E,R){if(typeof E=="string"&&E!==""||typeof E=="number")return y=y.get(b)||null,m(x,y,""+E,R);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case ue:return y=y.get(E.key===null?b:E.key)||null,h(x,y,E,R);case $:return y=y.get(E.key===null?b:E.key)||null,w(x,y,E,R);case Fe:var B=E._init;return L(y,x,b,B(E._payload),R)}if(vn(E)||D(E))return y=y.get(b)||null,C(x,y,E,R,null);Fo(x,E)}return null}function M(y,x,b,E){for(var R=null,B=null,F=x,H=x=0,Re=null;F!==null&&H<b.length;H++){F.index>H?(Re=F,F=null):Re=F.sibling;var de=S(y,F,b[H],E);if(de===null){F===null&&(F=Re);break}e&&F&&de.alternate===null&&t(y,F),x=s(de,x,H),B===null?R=de:B.sibling=de,B=de,F=Re}if(H===b.length)return r(y,F),we&&jr(y,H),R;if(F===null){for(;H<b.length;H++)F=T(y,b[H],E),F!==null&&(x=s(F,x,H),B===null?R=F:B.sibling=F,B=F);return we&&jr(y,H),R}for(F=n(y,F);H<b.length;H++)Re=L(F,y,H,b[H],E),Re!==null&&(e&&Re.alternate!==null&&F.delete(Re.key===null?H:Re.key),x=s(Re,x,H),B===null?R=Re:B.sibling=Re,B=Re);return e&&F.forEach(function(gr){return t(y,gr)}),we&&jr(y,H),R}function A(y,x,b,E){var R=D(b);if(typeof R!="function")throw Error(l(150));if(b=R.call(b),b==null)throw Error(l(151));for(var B=R=null,F=x,H=x=0,Re=null,de=b.next();F!==null&&!de.done;H++,de=b.next()){F.index>H?(Re=F,F=null):Re=F.sibling;var gr=S(y,F,de.value,E);if(gr===null){F===null&&(F=Re);break}e&&F&&gr.alternate===null&&t(y,F),x=s(gr,x,H),B===null?R=gr:B.sibling=gr,B=gr,F=Re}if(de.done)return r(y,F),we&&jr(y,H),R;if(F===null){for(;!de.done;H++,de=b.next())de=T(y,de.value,E),de!==null&&(x=s(de,x,H),B===null?R=de:B.sibling=de,B=de);return we&&jr(y,H),R}for(F=n(y,F);!de.done;H++,de=b.next())de=L(F,y,H,de.value,E),de!==null&&(e&&de.alternate!==null&&F.delete(de.key===null?H:de.key),x=s(de,x,H),B===null?R=de:B.sibling=de,B=de);return e&&F.forEach(function(sf){return t(y,sf)}),we&&jr(y,H),R}function Ce(y,x,b,E){if(typeof b=="object"&&b!==null&&b.type===U&&b.key===null&&(b=b.props.children),typeof b=="object"&&b!==null){switch(b.$$typeof){case ue:e:{for(var R=b.key,B=x;B!==null;){if(B.key===R){if(R=b.type,R===U){if(B.tag===7){r(y,B.sibling),x=i(B,b.props.children),x.return=y,y=x;break e}}else if(B.elementType===R||typeof R=="object"&&R!==null&&R.$$typeof===Fe&&Mc(R)===B.type){r(y,B.sibling),x=i(B,b.props),x.ref=Hn(y,B,b),x.return=y,y=x;break e}r(y,B);break}else t(y,B);B=B.sibling}b.type===U?(x=Lr(b.props.children,y.mode,E,b.key),x.return=y,y=x):(E=di(b.type,b.key,b.props,null,y.mode,E),E.ref=Hn(y,x,b),E.return=y,y=E)}return c(y);case $:e:{for(B=b.key;x!==null;){if(x.key===B)if(x.tag===4&&x.stateNode.containerInfo===b.containerInfo&&x.stateNode.implementation===b.implementation){r(y,x.sibling),x=i(x,b.children||[]),x.return=y,y=x;break e}else{r(y,x);break}else t(y,x);x=x.sibling}x=zs(b,y.mode,E),x.return=y,y=x}return c(y);case Fe:return B=b._init,Ce(y,x,B(b._payload),E)}if(vn(b))return M(y,x,b,E);if(D(b))return A(y,x,b,E);Fo(y,b)}return typeof b=="string"&&b!==""||typeof b=="number"?(b=""+b,x!==null&&x.tag===6?(r(y,x.sibling),x=i(x,b),x.return=y,y=x):(r(y,x),x=Ls(b,y.mode,E),x.return=y,y=x),c(y)):r(y,x)}return Ce}var Xr=Ac(!0),Rc=Ac(!1),Wo=ar(null),Uo=null,Jr=null,Wa=null;function Ua(){Wa=Jr=Uo=null}function Ha(e){var t=Wo.current;ye(Wo),e._currentValue=t}function Ga(e,t,r){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===r)break;e=e.return}}function Zr(e,t){Uo=e,Wa=Jr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Ke=!0),e.firstContext=null)}function mt(e){var t=e._currentValue;if(Wa!==e)if(e={context:e,memoizedValue:t,next:null},Jr===null){if(Uo===null)throw Error(l(308));Jr=e,Uo.dependencies={lanes:0,firstContext:e}}else Jr=Jr.next=e;return t}var Nr=null;function Va(e){Nr===null?Nr=[e]:Nr.push(e)}function Dc(e,t,r,n){var i=t.interleaved;return i===null?(r.next=r,Va(t)):(r.next=i.next,i.next=r),t.interleaved=r,Vt(e,n)}function Vt(e,t){e.lanes|=t;var r=e.alternate;for(r!==null&&(r.lanes|=t),r=e,e=e.return;e!==null;)e.childLanes|=t,r=e.alternate,r!==null&&(r.childLanes|=t),r=e,e=e.return;return r.tag===3?r.stateNode:null}var cr=!1;function Ya(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function _c(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Yt(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dr(e,t,r){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(le&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,Vt(e,r)}return i=n.interleaved,i===null?(t.next=t,Va(n)):(t.next=i.next,i.next=t),n.interleaved=t,Vt(e,r)}function Ho(e,t,r){if(t=t.updateQueue,t!==null&&(t=t.shared,(r&4194240)!==0)){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,aa(e,r)}}function Oc(e,t){var r=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,r===n)){var i=null,s=null;if(r=r.firstBaseUpdate,r!==null){do{var c={eventTime:r.eventTime,lane:r.lane,tag:r.tag,payload:r.payload,callback:r.callback,next:null};s===null?i=s=c:s=s.next=c,r=r.next}while(r!==null);s===null?i=s=t:s=s.next=t}else i=s=t;r={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:n.shared,effects:n.effects},e.updateQueue=r;return}e=r.lastBaseUpdate,e===null?r.firstBaseUpdate=t:e.next=t,r.lastBaseUpdate=t}function Go(e,t,r,n){var i=e.updateQueue;cr=!1;var s=i.firstBaseUpdate,c=i.lastBaseUpdate,m=i.shared.pending;if(m!==null){i.shared.pending=null;var h=m,w=h.next;h.next=null,c===null?s=w:c.next=w,c=h;var C=e.alternate;C!==null&&(C=C.updateQueue,m=C.lastBaseUpdate,m!==c&&(m===null?C.firstBaseUpdate=w:m.next=w,C.lastBaseUpdate=h))}if(s!==null){var T=i.baseState;c=0,C=w=h=null,m=s;do{var S=m.lane,L=m.eventTime;if((n&S)===S){C!==null&&(C=C.next={eventTime:L,lane:0,tag:m.tag,payload:m.payload,callback:m.callback,next:null});e:{var M=e,A=m;switch(S=t,L=r,A.tag){case 1:if(M=A.payload,typeof M=="function"){T=M.call(L,T,S);break e}T=M;break e;case 3:M.flags=M.flags&-65537|128;case 0:if(M=A.payload,S=typeof M=="function"?M.call(L,T,S):M,S==null)break e;T=I({},T,S);break e;case 2:cr=!0}}m.callback!==null&&m.lane!==0&&(e.flags|=64,S=i.effects,S===null?i.effects=[m]:S.push(m))}else L={eventTime:L,lane:S,tag:m.tag,payload:m.payload,callback:m.callback,next:null},C===null?(w=C=L,h=T):C=C.next=L,c|=S;if(m=m.next,m===null){if(m=i.shared.pending,m===null)break;S=m,m=S.next,S.next=null,i.lastBaseUpdate=S,i.shared.pending=null}}while(!0);if(C===null&&(h=T),i.baseState=h,i.firstBaseUpdate=w,i.lastBaseUpdate=C,t=i.shared.interleaved,t!==null){i=t;do c|=i.lane,i=i.next;while(i!==t)}else s===null&&(i.shared.lanes=0);Tr|=c,e.lanes=c,e.memoizedState=T}}function Bc(e,t,r){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var n=e[t],i=n.callback;if(i!==null){if(n.callback=null,n=r,typeof i!="function")throw Error(l(191,i));i.call(n)}}}var Gn={},At=ar(Gn),Vn=ar(Gn),Yn=ar(Gn);function Sr(e){if(e===Gn)throw Error(l(174));return e}function Qa(e,t){switch(ge(Yn,t),ge(Vn,e),ge(At,Gn),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:$i(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=$i(t,e)}ye(At),ge(At,t)}function en(){ye(At),ye(Vn),ye(Yn)}function Fc(e){Sr(Yn.current);var t=Sr(At.current),r=$i(t,e.type);t!==r&&(ge(Vn,e),ge(At,r))}function $a(e){Vn.current===e&&(ye(At),ye(Vn))}var ke=ar(0);function Vo(e){for(var t=e;t!==null;){if(t.tag===13){var r=t.memoizedState;if(r!==null&&(r=r.dehydrated,r===null||r.data==="$?"||r.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var qa=[];function Ka(){for(var e=0;e<qa.length;e++)qa[e]._workInProgressVersionPrimary=null;qa.length=0}var Yo=Z.ReactCurrentDispatcher,Xa=Z.ReactCurrentBatchConfig,Cr=0,je=null,Le=null,Me=null,Qo=!1,Qn=!1,$n=0,Em=0;function Ue(){throw Error(l(321))}function Ja(e,t){if(t===null)return!1;for(var r=0;r<t.length&&r<e.length;r++)if(!Nt(e[r],t[r]))return!1;return!0}function Za(e,t,r,n,i,s){if(Cr=s,je=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Yo.current=e===null||e.memoizedState===null?zm:Mm,e=r(n,i),Qn){s=0;do{if(Qn=!1,$n=0,25<=s)throw Error(l(301));s+=1,Me=Le=null,t.updateQueue=null,Yo.current=Am,e=r(n,i)}while(Qn)}if(Yo.current=Ko,t=Le!==null&&Le.next!==null,Cr=0,Me=Le=je=null,Qo=!1,t)throw Error(l(300));return e}function es(){var e=$n!==0;return $n=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Me===null?je.memoizedState=Me=e:Me=Me.next=e,Me}function ft(){if(Le===null){var e=je.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var t=Me===null?je.memoizedState:Me.next;if(t!==null)Me=t,Le=e;else{if(e===null)throw Error(l(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Me===null?je.memoizedState=Me=e:Me=Me.next=e}return Me}function qn(e,t){return typeof t=="function"?t(e):t}function ts(e){var t=ft(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var n=Le,i=n.baseQueue,s=r.pending;if(s!==null){if(i!==null){var c=i.next;i.next=s.next,s.next=c}n.baseQueue=i=s,r.pending=null}if(i!==null){s=i.next,n=n.baseState;var m=c=null,h=null,w=s;do{var C=w.lane;if((Cr&C)===C)h!==null&&(h=h.next={lane:0,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null}),n=w.hasEagerState?w.eagerState:e(n,w.action);else{var T={lane:C,action:w.action,hasEagerState:w.hasEagerState,eagerState:w.eagerState,next:null};h===null?(m=h=T,c=n):h=h.next=T,je.lanes|=C,Tr|=C}w=w.next}while(w!==null&&w!==s);h===null?c=n:h.next=m,Nt(n,t.memoizedState)||(Ke=!0),t.memoizedState=n,t.baseState=c,t.baseQueue=h,r.lastRenderedState=n}if(e=r.interleaved,e!==null){i=e;do s=i.lane,je.lanes|=s,Tr|=s,i=i.next;while(i!==e)}else i===null&&(r.lanes=0);return[t.memoizedState,r.dispatch]}function rs(e){var t=ft(),r=t.queue;if(r===null)throw Error(l(311));r.lastRenderedReducer=e;var n=r.dispatch,i=r.pending,s=t.memoizedState;if(i!==null){r.pending=null;var c=i=i.next;do s=e(s,c.action),c=c.next;while(c!==i);Nt(s,t.memoizedState)||(Ke=!0),t.memoizedState=s,t.baseQueue===null&&(t.baseState=s),r.lastRenderedState=s}return[s,n]}function Wc(){}function Uc(e,t){var r=je,n=ft(),i=t(),s=!Nt(n.memoizedState,i);if(s&&(n.memoizedState=i,Ke=!0),n=n.queue,ns(Vc.bind(null,r,n,e),[e]),n.getSnapshot!==t||s||Me!==null&&Me.memoizedState.tag&1){if(r.flags|=2048,Kn(9,Gc.bind(null,r,n,i,t),void 0,null),Ae===null)throw Error(l(349));(Cr&30)!==0||Hc(r,t,i)}return i}function Hc(e,t,r){e.flags|=16384,e={getSnapshot:t,value:r},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.stores=[e]):(r=t.stores,r===null?t.stores=[e]:r.push(e))}function Gc(e,t,r,n){t.value=r,t.getSnapshot=n,Yc(t)&&Qc(e)}function Vc(e,t,r){return r(function(){Yc(t)&&Qc(e)})}function Yc(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!Nt(e,r)}catch{return!0}}function Qc(e){var t=Vt(e,1);t!==null&&Pt(t,e,1,-1)}function $c(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:qn,lastRenderedState:e},t.queue=e,e=e.dispatch=Lm.bind(null,je,e),[t.memoizedState,e]}function Kn(e,t,r,n){return e={tag:e,create:t,destroy:r,deps:n,next:null},t=je.updateQueue,t===null?(t={lastEffect:null,stores:null},je.updateQueue=t,t.lastEffect=e.next=e):(r=t.lastEffect,r===null?t.lastEffect=e.next=e:(n=r.next,r.next=e,e.next=n,t.lastEffect=e)),e}function qc(){return ft().memoizedState}function $o(e,t,r,n){var i=Rt();je.flags|=e,i.memoizedState=Kn(1|t,r,void 0,n===void 0?null:n)}function qo(e,t,r,n){var i=ft();n=n===void 0?null:n;var s=void 0;if(Le!==null){var c=Le.memoizedState;if(s=c.destroy,n!==null&&Ja(n,c.deps)){i.memoizedState=Kn(t,r,s,n);return}}je.flags|=e,i.memoizedState=Kn(1|t,r,s,n)}function Kc(e,t){return $o(8390656,8,e,t)}function ns(e,t){return qo(2048,8,e,t)}function Xc(e,t){return qo(4,2,e,t)}function Jc(e,t){return qo(4,4,e,t)}function Zc(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ed(e,t,r){return r=r!=null?r.concat([e]):null,qo(4,4,Zc.bind(null,t,e),r)}function os(){}function td(e,t){var r=ft();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ja(t,n[1])?n[0]:(r.memoizedState=[e,t],e)}function rd(e,t){var r=ft();t=t===void 0?null:t;var n=r.memoizedState;return n!==null&&t!==null&&Ja(t,n[1])?n[0]:(e=e(),r.memoizedState=[e,t],e)}function nd(e,t,r){return(Cr&21)===0?(e.baseState&&(e.baseState=!1,Ke=!0),e.memoizedState=r):(Nt(r,t)||(r=Ml(),je.lanes|=r,Tr|=r,e.baseState=!0),t)}function Pm(e,t){var r=he;he=r!==0&&4>r?r:4,e(!0);var n=Xa.transition;Xa.transition={};try{e(!1),t()}finally{he=r,Xa.transition=n}}function od(){return ft().memoizedState}function Im(e,t,r){var n=fr(e);if(r={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null},id(e))ad(t,r);else if(r=Dc(e,t,r,n),r!==null){var i=Qe();Pt(r,e,n,i),sd(r,t,n)}}function Lm(e,t,r){var n=fr(e),i={lane:n,action:r,hasEagerState:!1,eagerState:null,next:null};if(id(e))ad(t,i);else{var s=e.alternate;if(e.lanes===0&&(s===null||s.lanes===0)&&(s=t.lastRenderedReducer,s!==null))try{var c=t.lastRenderedState,m=s(c,r);if(i.hasEagerState=!0,i.eagerState=m,Nt(m,c)){var h=t.interleaved;h===null?(i.next=i,Va(t)):(i.next=h.next,h.next=i),t.interleaved=i;return}}catch{}finally{}r=Dc(e,t,i,n),r!==null&&(i=Qe(),Pt(r,e,n,i),sd(r,t,n))}}function id(e){var t=e.alternate;return e===je||t!==null&&t===je}function ad(e,t){Qn=Qo=!0;var r=e.pending;r===null?t.next=t:(t.next=r.next,r.next=t),e.pending=t}function sd(e,t,r){if((r&4194240)!==0){var n=t.lanes;n&=e.pendingLanes,r|=n,t.lanes=r,aa(e,r)}}var Ko={readContext:mt,useCallback:Ue,useContext:Ue,useEffect:Ue,useImperativeHandle:Ue,useInsertionEffect:Ue,useLayoutEffect:Ue,useMemo:Ue,useReducer:Ue,useRef:Ue,useState:Ue,useDebugValue:Ue,useDeferredValue:Ue,useTransition:Ue,useMutableSource:Ue,useSyncExternalStore:Ue,useId:Ue,unstable_isNewReconciler:!1},zm={readContext:mt,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:mt,useEffect:Kc,useImperativeHandle:function(e,t,r){return r=r!=null?r.concat([e]):null,$o(4194308,4,Zc.bind(null,t,e),r)},useLayoutEffect:function(e,t){return $o(4194308,4,e,t)},useInsertionEffect:function(e,t){return $o(4,2,e,t)},useMemo:function(e,t){var r=Rt();return t=t===void 0?null:t,e=e(),r.memoizedState=[e,t],e},useReducer:function(e,t,r){var n=Rt();return t=r!==void 0?r(t):t,n.memoizedState=n.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},n.queue=e,e=e.dispatch=Im.bind(null,je,e),[n.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:$c,useDebugValue:os,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=$c(!1),t=e[0];return e=Pm.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,r){var n=je,i=Rt();if(we){if(r===void 0)throw Error(l(407));r=r()}else{if(r=t(),Ae===null)throw Error(l(349));(Cr&30)!==0||Hc(n,t,r)}i.memoizedState=r;var s={value:r,getSnapshot:t};return i.queue=s,Kc(Vc.bind(null,n,s,e),[e]),n.flags|=2048,Kn(9,Gc.bind(null,n,s,r,t),void 0,null),r},useId:function(){var e=Rt(),t=Ae.identifierPrefix;if(we){var r=Gt,n=Ht;r=(n&~(1<<32-jt(n)-1)).toString(32)+r,t=":"+t+"R"+r,r=$n++,0<r&&(t+="H"+r.toString(32)),t+=":"}else r=Em++,t=":"+t+"r"+r.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Mm={readContext:mt,useCallback:td,useContext:mt,useEffect:ns,useImperativeHandle:ed,useInsertionEffect:Xc,useLayoutEffect:Jc,useMemo:rd,useReducer:ts,useRef:qc,useState:function(){return ts(qn)},useDebugValue:os,useDeferredValue:function(e){var t=ft();return nd(t,Le.memoizedState,e)},useTransition:function(){var e=ts(qn)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Wc,useSyncExternalStore:Uc,useId:od,unstable_isNewReconciler:!1},Am={readContext:mt,useCallback:td,useContext:mt,useEffect:ns,useImperativeHandle:ed,useInsertionEffect:Xc,useLayoutEffect:Jc,useMemo:rd,useReducer:rs,useRef:qc,useState:function(){return rs(qn)},useDebugValue:os,useDeferredValue:function(e){var t=ft();return Le===null?t.memoizedState=e:nd(t,Le.memoizedState,e)},useTransition:function(){var e=rs(qn)[0],t=ft().memoizedState;return[e,t]},useMutableSource:Wc,useSyncExternalStore:Uc,useId:od,unstable_isNewReconciler:!1};function Ct(e,t){if(e&&e.defaultProps){t=I({},t),e=e.defaultProps;for(var r in e)t[r]===void 0&&(t[r]=e[r]);return t}return t}function is(e,t,r,n){t=e.memoizedState,r=r(n,t),r=r==null?t:I({},t,r),e.memoizedState=r,e.lanes===0&&(e.updateQueue.baseState=r)}var Xo={isMounted:function(e){return(e=e._reactInternals)?yr(e)===e:!1},enqueueSetState:function(e,t,r){e=e._reactInternals;var n=Qe(),i=fr(e),s=Yt(n,i);s.payload=t,r!=null&&(s.callback=r),t=dr(e,s,i),t!==null&&(Pt(t,e,i,n),Ho(t,e,i))},enqueueReplaceState:function(e,t,r){e=e._reactInternals;var n=Qe(),i=fr(e),s=Yt(n,i);s.tag=1,s.payload=t,r!=null&&(s.callback=r),t=dr(e,s,i),t!==null&&(Pt(t,e,i,n),Ho(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var r=Qe(),n=fr(e),i=Yt(r,n);i.tag=2,t!=null&&(i.callback=t),t=dr(e,i,n),t!==null&&(Pt(t,e,n,r),Ho(t,e,n))}};function ld(e,t,r,n,i,s,c){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,s,c):t.prototype&&t.prototype.isPureReactComponent?!Dn(r,n)||!Dn(i,s):!0}function cd(e,t,r){var n=!1,i=sr,s=t.contextType;return typeof s=="object"&&s!==null?s=mt(s):(i=qe(t)?wr:We.current,n=t.contextTypes,s=(n=n!=null)?Qr(e,i):sr),t=new t(r,s),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Xo,e.stateNode=t,t._reactInternals=e,n&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=s),t}function dd(e,t,r,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(r,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(r,n),t.state!==e&&Xo.enqueueReplaceState(t,t.state,null)}function as(e,t,r,n){var i=e.stateNode;i.props=r,i.state=e.memoizedState,i.refs={},Ya(e);var s=t.contextType;typeof s=="object"&&s!==null?i.context=mt(s):(s=qe(t)?wr:We.current,i.context=Qr(e,s)),i.state=e.memoizedState,s=t.getDerivedStateFromProps,typeof s=="function"&&(is(e,t,s,r),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Xo.enqueueReplaceState(i,i.state,null),Go(e,r,i,n),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function tn(e,t){try{var r="",n=t;do r+=re(n),n=n.return;while(n);var i=r}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:e,source:t,stack:i,digest:null}}function ss(e,t,r){return{value:e,source:null,stack:r!=null?r:null,digest:t!=null?t:null}}function ls(e,t){try{console.error(t.value)}catch(r){setTimeout(function(){throw r})}}var Rm=typeof WeakMap=="function"?WeakMap:Map;function ud(e,t,r){r=Yt(-1,r),r.tag=3,r.payload={element:null};var n=t.value;return r.callback=function(){oi||(oi=!0,js=n),ls(e,t)},r}function pd(e,t,r){r=Yt(-1,r),r.tag=3;var n=e.type.getDerivedStateFromError;if(typeof n=="function"){var i=t.value;r.payload=function(){return n(i)},r.callback=function(){ls(e,t)}}var s=e.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(r.callback=function(){ls(e,t),typeof n!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var c=t.stack;this.componentDidCatch(t.value,{componentStack:c!==null?c:""})}),r}function md(e,t,r){var n=e.pingCache;if(n===null){n=e.pingCache=new Rm;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(r)||(i.add(r),e=qm.bind(null,e,t,r),t.then(e,e))}function fd(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function hd(e,t,r,n,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,r.flags|=131072,r.flags&=-52805,r.tag===1&&(r.alternate===null?r.tag=17:(t=Yt(-1,1),t.tag=2,dr(r,t,1))),r.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var Dm=Z.ReactCurrentOwner,Ke=!1;function Ye(e,t,r,n){t.child=e===null?Rc(t,null,r,n):Xr(t,e.child,r,n)}function xd(e,t,r,n,i){r=r.render;var s=t.ref;return Zr(t,i),n=Za(e,t,r,n,s,i),r=es(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(we&&r&&Da(t),t.flags|=1,Ye(e,t,n,i),t.child)}function gd(e,t,r,n,i){if(e===null){var s=r.type;return typeof s=="function"&&!Is(s)&&s.defaultProps===void 0&&r.compare===null&&r.defaultProps===void 0?(t.tag=15,t.type=s,vd(e,t,s,n,i)):(e=di(r.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(s=e.child,(e.lanes&i)===0){var c=s.memoizedProps;if(r=r.compare,r=r!==null?r:Dn,r(c,n)&&e.ref===t.ref)return Qt(e,t,i)}return t.flags|=1,e=xr(s,n),e.ref=t.ref,e.return=t,t.child=e}function vd(e,t,r,n,i){if(e!==null){var s=e.memoizedProps;if(Dn(s,n)&&e.ref===t.ref)if(Ke=!1,t.pendingProps=n=s,(e.lanes&i)!==0)(e.flags&131072)!==0&&(Ke=!0);else return t.lanes=e.lanes,Qt(e,t,i)}return cs(e,t,r,n,i)}function yd(e,t,r){var n=t.pendingProps,i=n.children,s=e!==null?e.memoizedState:null;if(n.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ge(nn,st),st|=r;else{if((r&1073741824)===0)return e=s!==null?s.baseLanes|r:r,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ge(nn,st),st|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},n=s!==null?s.baseLanes:r,ge(nn,st),st|=n}else s!==null?(n=s.baseLanes|r,t.memoizedState=null):n=r,ge(nn,st),st|=n;return Ye(e,t,i,r),t.child}function bd(e,t){var r=t.ref;(e===null&&r!==null||e!==null&&e.ref!==r)&&(t.flags|=512,t.flags|=2097152)}function cs(e,t,r,n,i){var s=qe(r)?wr:We.current;return s=Qr(t,s),Zr(t,i),r=Za(e,t,r,n,s,i),n=es(),e!==null&&!Ke?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Qt(e,t,i)):(we&&n&&Da(t),t.flags|=1,Ye(e,t,r,i),t.child)}function wd(e,t,r,n,i){if(qe(r)){var s=!0;Ro(t)}else s=!1;if(Zr(t,i),t.stateNode===null)Zo(e,t),cd(t,r,n),as(t,r,n,i),n=!0;else if(e===null){var c=t.stateNode,m=t.memoizedProps;c.props=m;var h=c.context,w=r.contextType;typeof w=="object"&&w!==null?w=mt(w):(w=qe(r)?wr:We.current,w=Qr(t,w));var C=r.getDerivedStateFromProps,T=typeof C=="function"||typeof c.getSnapshotBeforeUpdate=="function";T||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==n||h!==w)&&dd(t,c,n,w),cr=!1;var S=t.memoizedState;c.state=S,Go(t,n,c,i),h=t.memoizedState,m!==n||S!==h||$e.current||cr?(typeof C=="function"&&(is(t,r,C,n),h=t.memoizedState),(m=cr||ld(t,r,m,n,S,h,w))?(T||typeof c.UNSAFE_componentWillMount!="function"&&typeof c.componentWillMount!="function"||(typeof c.componentWillMount=="function"&&c.componentWillMount(),typeof c.UNSAFE_componentWillMount=="function"&&c.UNSAFE_componentWillMount()),typeof c.componentDidMount=="function"&&(t.flags|=4194308)):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=h),c.props=n,c.state=h,c.context=w,n=m):(typeof c.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{c=t.stateNode,_c(e,t),m=t.memoizedProps,w=t.type===t.elementType?m:Ct(t.type,m),c.props=w,T=t.pendingProps,S=c.context,h=r.contextType,typeof h=="object"&&h!==null?h=mt(h):(h=qe(r)?wr:We.current,h=Qr(t,h));var L=r.getDerivedStateFromProps;(C=typeof L=="function"||typeof c.getSnapshotBeforeUpdate=="function")||typeof c.UNSAFE_componentWillReceiveProps!="function"&&typeof c.componentWillReceiveProps!="function"||(m!==T||S!==h)&&dd(t,c,n,h),cr=!1,S=t.memoizedState,c.state=S,Go(t,n,c,i);var M=t.memoizedState;m!==T||S!==M||$e.current||cr?(typeof L=="function"&&(is(t,r,L,n),M=t.memoizedState),(w=cr||ld(t,r,w,n,S,M,h)||!1)?(C||typeof c.UNSAFE_componentWillUpdate!="function"&&typeof c.componentWillUpdate!="function"||(typeof c.componentWillUpdate=="function"&&c.componentWillUpdate(n,M,h),typeof c.UNSAFE_componentWillUpdate=="function"&&c.UNSAFE_componentWillUpdate(n,M,h)),typeof c.componentDidUpdate=="function"&&(t.flags|=4),typeof c.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=M),c.props=n,c.state=M,c.context=h,n=w):(typeof c.componentDidUpdate!="function"||m===e.memoizedProps&&S===e.memoizedState||(t.flags|=4),typeof c.getSnapshotBeforeUpdate!="function"||m===e.memoizedProps&&S===e.memoizedState||(t.flags|=1024),n=!1)}return ds(e,t,r,n,s,i)}function ds(e,t,r,n,i,s){bd(e,t);var c=(t.flags&128)!==0;if(!n&&!c)return i&&Cc(t,r,!1),Qt(e,t,s);n=t.stateNode,Dm.current=t;var m=c&&typeof r.getDerivedStateFromError!="function"?null:n.render();return t.flags|=1,e!==null&&c?(t.child=Xr(t,e.child,null,s),t.child=Xr(t,null,m,s)):Ye(e,t,m,s),t.memoizedState=n.state,i&&Cc(t,r,!0),t.child}function kd(e){var t=e.stateNode;t.pendingContext?Nc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Nc(e,t.context,!1),Qa(e,t.containerInfo)}function jd(e,t,r,n,i){return Kr(),Fa(i),t.flags|=256,Ye(e,t,r,n),t.child}var us={dehydrated:null,treeContext:null,retryLane:0};function ps(e){return{baseLanes:e,cachePool:null,transitions:null}}function Nd(e,t,r){var n=t.pendingProps,i=ke.current,s=!1,c=(t.flags&128)!==0,m;if((m=c)||(m=e!==null&&e.memoizedState===null?!1:(i&2)!==0),m?(s=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),ge(ke,i&1),e===null)return Ba(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(c=n.children,e=n.fallback,s?(n=t.mode,s=t.child,c={mode:"hidden",children:c},(n&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=c):s=ui(c,n,0,null),e=Lr(e,n,r,null),s.return=t,e.return=t,s.sibling=e,t.child=s,t.child.memoizedState=ps(r),t.memoizedState=us,e):ms(t,c));if(i=e.memoizedState,i!==null&&(m=i.dehydrated,m!==null))return _m(e,t,c,n,m,i,r);if(s){s=n.fallback,c=t.mode,i=e.child,m=i.sibling;var h={mode:"hidden",children:n.children};return(c&1)===0&&t.child!==i?(n=t.child,n.childLanes=0,n.pendingProps=h,t.deletions=null):(n=xr(i,h),n.subtreeFlags=i.subtreeFlags&14680064),m!==null?s=xr(m,s):(s=Lr(s,c,r,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,n=s,s=t.child,c=e.child.memoizedState,c=c===null?ps(r):{baseLanes:c.baseLanes|r,cachePool:null,transitions:c.transitions},s.memoizedState=c,s.childLanes=e.childLanes&~r,t.memoizedState=us,n}return s=e.child,e=s.sibling,n=xr(s,{mode:"visible",children:n.children}),(t.mode&1)===0&&(n.lanes=r),n.return=t,n.sibling=null,e!==null&&(r=t.deletions,r===null?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n}function ms(e,t){return t=ui({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Jo(e,t,r,n){return n!==null&&Fa(n),Xr(t,e.child,null,r),e=ms(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _m(e,t,r,n,i,s,c){if(r)return t.flags&256?(t.flags&=-257,n=ss(Error(l(422))),Jo(e,t,c,n)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(s=n.fallback,i=t.mode,n=ui({mode:"visible",children:n.children},i,0,null),s=Lr(s,i,c,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,(t.mode&1)!==0&&Xr(t,e.child,null,c),t.child.memoizedState=ps(c),t.memoizedState=us,s);if((t.mode&1)===0)return Jo(e,t,c,null);if(i.data==="$!"){if(n=i.nextSibling&&i.nextSibling.dataset,n)var m=n.dgst;return n=m,s=Error(l(419)),n=ss(s,n,void 0),Jo(e,t,c,n)}if(m=(c&e.childLanes)!==0,Ke||m){if(n=Ae,n!==null){switch(c&-c){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(n.suspendedLanes|c))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Vt(e,i),Pt(n,e,i,-1))}return Ps(),n=ss(Error(l(421))),Jo(e,t,c,n)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=Km.bind(null,e),i._reactRetry=t,null):(e=s.treeContext,at=ir(i.nextSibling),it=t,we=!0,St=null,e!==null&&(ut[pt++]=Ht,ut[pt++]=Gt,ut[pt++]=kr,Ht=e.id,Gt=e.overflow,kr=t),t=ms(t,n.children),t.flags|=4096,t)}function Sd(e,t,r){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ga(e.return,t,r)}function fs(e,t,r,n,i){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:r,tailMode:i}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=r,s.tailMode=i)}function Cd(e,t,r){var n=t.pendingProps,i=n.revealOrder,s=n.tail;if(Ye(e,t,n.children,r),n=ke.current,(n&2)!==0)n=n&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Sd(e,r,t);else if(e.tag===19)Sd(e,r,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}n&=1}if(ge(ke,n),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(r=t.child,i=null;r!==null;)e=r.alternate,e!==null&&Vo(e)===null&&(i=r),r=r.sibling;r=i,r===null?(i=t.child,t.child=null):(i=r.sibling,r.sibling=null),fs(t,!1,i,r,s);break;case"backwards":for(r=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Vo(e)===null){t.child=i;break}e=i.sibling,i.sibling=r,r=i,i=e}fs(t,!0,r,null,s);break;case"together":fs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Zo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Qt(e,t,r){if(e!==null&&(t.dependencies=e.dependencies),Tr|=t.lanes,(r&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(l(153));if(t.child!==null){for(e=t.child,r=xr(e,e.pendingProps),t.child=r,r.return=t;e.sibling!==null;)e=e.sibling,r=r.sibling=xr(e,e.pendingProps),r.return=t;r.sibling=null}return t.child}function Om(e,t,r){switch(t.tag){case 3:kd(t),Kr();break;case 5:Fc(t);break;case 1:qe(t.type)&&Ro(t);break;case 4:Qa(t,t.stateNode.containerInfo);break;case 10:var n=t.type._context,i=t.memoizedProps.value;ge(Wo,n._currentValue),n._currentValue=i;break;case 13:if(n=t.memoizedState,n!==null)return n.dehydrated!==null?(ge(ke,ke.current&1),t.flags|=128,null):(r&t.child.childLanes)!==0?Nd(e,t,r):(ge(ke,ke.current&1),e=Qt(e,t,r),e!==null?e.sibling:null);ge(ke,ke.current&1);break;case 19:if(n=(r&t.childLanes)!==0,(e.flags&128)!==0){if(n)return Cd(e,t,r);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ge(ke,ke.current),n)break;return null;case 22:case 23:return t.lanes=0,yd(e,t,r)}return Qt(e,t,r)}var Td,hs,Ed,Pd;Td=function(e,t){for(var r=t.child;r!==null;){if(r.tag===5||r.tag===6)e.appendChild(r.stateNode);else if(r.tag!==4&&r.child!==null){r.child.return=r,r=r.child;continue}if(r===t)break;for(;r.sibling===null;){if(r.return===null||r.return===t)return;r=r.return}r.sibling.return=r.return,r=r.sibling}},hs=function(){},Ed=function(e,t,r,n){var i=e.memoizedProps;if(i!==n){e=t.stateNode,Sr(At.current);var s=null;switch(r){case"input":i=Gi(e,i),n=Gi(e,n),s=[];break;case"select":i=I({},i,{value:void 0}),n=I({},n,{value:void 0}),s=[];break;case"textarea":i=Qi(e,i),n=Qi(e,n),s=[];break;default:typeof i.onClick!="function"&&typeof n.onClick=="function"&&(e.onclick=zo)}qi(r,n);var c;r=null;for(w in i)if(!n.hasOwnProperty(w)&&i.hasOwnProperty(w)&&i[w]!=null)if(w==="style"){var m=i[w];for(c in m)m.hasOwnProperty(c)&&(r||(r={}),r[c]="")}else w!=="dangerouslySetInnerHTML"&&w!=="children"&&w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(u.hasOwnProperty(w)?s||(s=[]):(s=s||[]).push(w,null));for(w in n){var h=n[w];if(m=i!=null?i[w]:void 0,n.hasOwnProperty(w)&&h!==m&&(h!=null||m!=null))if(w==="style")if(m){for(c in m)!m.hasOwnProperty(c)||h&&h.hasOwnProperty(c)||(r||(r={}),r[c]="");for(c in h)h.hasOwnProperty(c)&&m[c]!==h[c]&&(r||(r={}),r[c]=h[c])}else r||(s||(s=[]),s.push(w,r)),r=h;else w==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,m=m?m.__html:void 0,h!=null&&m!==h&&(s=s||[]).push(w,h)):w==="children"?typeof h!="string"&&typeof h!="number"||(s=s||[]).push(w,""+h):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&(u.hasOwnProperty(w)?(h!=null&&w==="onScroll"&&ve("scroll",e),s||m===h||(s=[])):(s=s||[]).push(w,h))}r&&(s=s||[]).push("style",r);var w=s;(t.updateQueue=w)&&(t.flags|=4)}},Pd=function(e,t,r,n){r!==n&&(t.flags|=4)};function Xn(e,t){if(!we)switch(e.tailMode){case"hidden":t=e.tail;for(var r=null;t!==null;)t.alternate!==null&&(r=t),t=t.sibling;r===null?e.tail=null:r.sibling=null;break;case"collapsed":r=e.tail;for(var n=null;r!==null;)r.alternate!==null&&(n=r),r=r.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function He(e){var t=e.alternate!==null&&e.alternate.child===e.child,r=0,n=0;if(t)for(var i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags&14680064,n|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)r|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=r,t}function Bm(e,t,r){var n=t.pendingProps;switch(_a(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return He(t),null;case 1:return qe(t.type)&&Ao(),He(t),null;case 3:return n=t.stateNode,en(),ye($e),ye(We),Ka(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Bo(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,St!==null&&(Cs(St),St=null))),hs(e,t),He(t),null;case 5:$a(t);var i=Sr(Yn.current);if(r=t.type,e!==null&&t.stateNode!=null)Ed(e,t,r,n,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!n){if(t.stateNode===null)throw Error(l(166));return He(t),null}if(e=Sr(At.current),Bo(t)){n=t.stateNode,r=t.type;var s=t.memoizedProps;switch(n[Mt]=t,n[Wn]=s,e=(t.mode&1)!==0,r){case"dialog":ve("cancel",n),ve("close",n);break;case"iframe":case"object":case"embed":ve("load",n);break;case"video":case"audio":for(i=0;i<On.length;i++)ve(On[i],n);break;case"source":ve("error",n);break;case"img":case"image":case"link":ve("error",n),ve("load",n);break;case"details":ve("toggle",n);break;case"input":cl(n,s),ve("invalid",n);break;case"select":n._wrapperState={wasMultiple:!!s.multiple},ve("invalid",n);break;case"textarea":pl(n,s),ve("invalid",n)}qi(r,s),i=null;for(var c in s)if(s.hasOwnProperty(c)){var m=s[c];c==="children"?typeof m=="string"?n.textContent!==m&&(s.suppressHydrationWarning!==!0&&Lo(n.textContent,m,e),i=["children",m]):typeof m=="number"&&n.textContent!==""+m&&(s.suppressHydrationWarning!==!0&&Lo(n.textContent,m,e),i=["children",""+m]):u.hasOwnProperty(c)&&m!=null&&c==="onScroll"&&ve("scroll",n)}switch(r){case"input":Ft(n),ul(n,s,!0);break;case"textarea":Ft(n),fl(n);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(n.onclick=zo)}n=i,t.updateQueue=n,n!==null&&(t.flags|=4)}else{c=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=hl(r)),e==="http://www.w3.org/1999/xhtml"?r==="script"?(e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof n.is=="string"?e=c.createElement(r,{is:n.is}):(e=c.createElement(r),r==="select"&&(c=e,n.multiple?c.multiple=!0:n.size&&(c.size=n.size))):e=c.createElementNS(e,r),e[Mt]=t,e[Wn]=n,Td(e,t,!1,!1),t.stateNode=e;e:{switch(c=Ki(r,n),r){case"dialog":ve("cancel",e),ve("close",e),i=n;break;case"iframe":case"object":case"embed":ve("load",e),i=n;break;case"video":case"audio":for(i=0;i<On.length;i++)ve(On[i],e);i=n;break;case"source":ve("error",e),i=n;break;case"img":case"image":case"link":ve("error",e),ve("load",e),i=n;break;case"details":ve("toggle",e),i=n;break;case"input":cl(e,n),i=Gi(e,n),ve("invalid",e);break;case"option":i=n;break;case"select":e._wrapperState={wasMultiple:!!n.multiple},i=I({},n,{value:void 0}),ve("invalid",e);break;case"textarea":pl(e,n),i=Qi(e,n),ve("invalid",e);break;default:i=n}qi(r,i),m=i;for(s in m)if(m.hasOwnProperty(s)){var h=m[s];s==="style"?vl(e,h):s==="dangerouslySetInnerHTML"?(h=h?h.__html:void 0,h!=null&&xl(e,h)):s==="children"?typeof h=="string"?(r!=="textarea"||h!=="")&&yn(e,h):typeof h=="number"&&yn(e,""+h):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(u.hasOwnProperty(s)?h!=null&&s==="onScroll"&&ve("scroll",e):h!=null&&oe(e,s,h,c))}switch(r){case"input":Ft(e),ul(e,n,!1);break;case"textarea":Ft(e),fl(e);break;case"option":n.value!=null&&e.setAttribute("value",""+ie(n.value));break;case"select":e.multiple=!!n.multiple,s=n.value,s!=null?Rr(e,!!n.multiple,s,!1):n.defaultValue!=null&&Rr(e,!!n.multiple,n.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=zo)}switch(r){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}}n&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return He(t),null;case 6:if(e&&t.stateNode!=null)Pd(e,t,e.memoizedProps,n);else{if(typeof n!="string"&&t.stateNode===null)throw Error(l(166));if(r=Sr(Yn.current),Sr(At.current),Bo(t)){if(n=t.stateNode,r=t.memoizedProps,n[Mt]=t,(s=n.nodeValue!==r)&&(e=it,e!==null))switch(e.tag){case 3:Lo(n.nodeValue,r,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Lo(n.nodeValue,r,(e.mode&1)!==0)}s&&(t.flags|=4)}else n=(r.nodeType===9?r:r.ownerDocument).createTextNode(n),n[Mt]=t,t.stateNode=n}return He(t),null;case 13:if(ye(ke),n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(we&&at!==null&&(t.mode&1)!==0&&(t.flags&128)===0)zc(),Kr(),t.flags|=98560,s=!1;else if(s=Bo(t),n!==null&&n.dehydrated!==null){if(e===null){if(!s)throw Error(l(318));if(s=t.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(l(317));s[Mt]=t}else Kr(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;He(t),s=!1}else St!==null&&(Cs(St),St=null),s=!0;if(!s)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=r,t):(n=n!==null,n!==(e!==null&&e.memoizedState!==null)&&n&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(ke.current&1)!==0?ze===0&&(ze=3):Ps())),t.updateQueue!==null&&(t.flags|=4),He(t),null);case 4:return en(),hs(e,t),e===null&&Bn(t.stateNode.containerInfo),He(t),null;case 10:return Ha(t.type._context),He(t),null;case 17:return qe(t.type)&&Ao(),He(t),null;case 19:if(ye(ke),s=t.memoizedState,s===null)return He(t),null;if(n=(t.flags&128)!==0,c=s.rendering,c===null)if(n)Xn(s,!1);else{if(ze!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(c=Vo(e),c!==null){for(t.flags|=128,Xn(s,!1),n=c.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),t.subtreeFlags=0,n=r,r=t.child;r!==null;)s=r,e=n,s.flags&=14680066,c=s.alternate,c===null?(s.childLanes=0,s.lanes=e,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=c.childLanes,s.lanes=c.lanes,s.child=c.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=c.memoizedProps,s.memoizedState=c.memoizedState,s.updateQueue=c.updateQueue,s.type=c.type,e=c.dependencies,s.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),r=r.sibling;return ge(ke,ke.current&1|2),t.child}e=e.sibling}s.tail!==null&&Se()>on&&(t.flags|=128,n=!0,Xn(s,!1),t.lanes=4194304)}else{if(!n)if(e=Vo(c),e!==null){if(t.flags|=128,n=!0,r=e.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),Xn(s,!0),s.tail===null&&s.tailMode==="hidden"&&!c.alternate&&!we)return He(t),null}else 2*Se()-s.renderingStartTime>on&&r!==1073741824&&(t.flags|=128,n=!0,Xn(s,!1),t.lanes=4194304);s.isBackwards?(c.sibling=t.child,t.child=c):(r=s.last,r!==null?r.sibling=c:t.child=c,s.last=c)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=Se(),t.sibling=null,r=ke.current,ge(ke,n?r&1|2:r&1),t):(He(t),null);case 22:case 23:return Es(),n=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==n&&(t.flags|=8192),n&&(t.mode&1)!==0?(st&1073741824)!==0&&(He(t),t.subtreeFlags&6&&(t.flags|=8192)):He(t),null;case 24:return null;case 25:return null}throw Error(l(156,t.tag))}function Fm(e,t){switch(_a(t),t.tag){case 1:return qe(t.type)&&Ao(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return en(),ye($e),ye(We),Ka(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return $a(t),null;case 13:if(ye(ke),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(l(340));Kr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ye(ke),null;case 4:return en(),null;case 10:return Ha(t.type._context),null;case 22:case 23:return Es(),null;case 24:return null;default:return null}}var ei=!1,Ge=!1,Wm=typeof WeakSet=="function"?WeakSet:Set,z=null;function rn(e,t){var r=e.ref;if(r!==null)if(typeof r=="function")try{r(null)}catch(n){Ne(e,t,n)}else r.current=null}function xs(e,t,r){try{r()}catch(n){Ne(e,t,n)}}var Id=!1;function Um(e,t){if(Ea=bo,e=lc(),ba(e)){if("selectionStart"in e)var r={start:e.selectionStart,end:e.selectionEnd};else e:{r=(r=e.ownerDocument)&&r.defaultView||window;var n=r.getSelection&&r.getSelection();if(n&&n.rangeCount!==0){r=n.anchorNode;var i=n.anchorOffset,s=n.focusNode;n=n.focusOffset;try{r.nodeType,s.nodeType}catch{r=null;break e}var c=0,m=-1,h=-1,w=0,C=0,T=e,S=null;t:for(;;){for(var L;T!==r||i!==0&&T.nodeType!==3||(m=c+i),T!==s||n!==0&&T.nodeType!==3||(h=c+n),T.nodeType===3&&(c+=T.nodeValue.length),(L=T.firstChild)!==null;)S=T,T=L;for(;;){if(T===e)break t;if(S===r&&++w===i&&(m=c),S===s&&++C===n&&(h=c),(L=T.nextSibling)!==null)break;T=S,S=T.parentNode}T=L}r=m===-1||h===-1?null:{start:m,end:h}}else r=null}r=r||{start:0,end:0}}else r=null;for(Pa={focusedElem:e,selectionRange:r},bo=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var M=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(M!==null){var A=M.memoizedProps,Ce=M.memoizedState,y=t.stateNode,x=y.getSnapshotBeforeUpdate(t.elementType===t.type?A:Ct(t.type,A),Ce);y.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var b=t.stateNode.containerInfo;b.nodeType===1?b.textContent="":b.nodeType===9&&b.documentElement&&b.removeChild(b.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(l(163))}}catch(E){Ne(t,t.return,E)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return M=Id,Id=!1,M}function Jn(e,t,r){var n=t.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var i=n=n.next;do{if((i.tag&e)===e){var s=i.destroy;i.destroy=void 0,s!==void 0&&xs(t,r,s)}i=i.next}while(i!==n)}}function ti(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var r=t=t.next;do{if((r.tag&e)===e){var n=r.create;r.destroy=n()}r=r.next}while(r!==t)}}function gs(e){var t=e.ref;if(t!==null){var r=e.stateNode;switch(e.tag){case 5:e=r;break;default:e=r}typeof t=="function"?t(e):t.current=e}}function Ld(e){var t=e.alternate;t!==null&&(e.alternate=null,Ld(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Mt],delete t[Wn],delete t[Ma],delete t[Nm],delete t[Sm])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function zd(e){return e.tag===5||e.tag===3||e.tag===4}function Md(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||zd(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function vs(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.nodeType===8?r.parentNode.insertBefore(e,t):r.insertBefore(e,t):(r.nodeType===8?(t=r.parentNode,t.insertBefore(e,r)):(t=r,t.appendChild(e)),r=r._reactRootContainer,r!=null||t.onclick!==null||(t.onclick=zo));else if(n!==4&&(e=e.child,e!==null))for(vs(e,t,r),e=e.sibling;e!==null;)vs(e,t,r),e=e.sibling}function ys(e,t,r){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?r.insertBefore(e,t):r.appendChild(e);else if(n!==4&&(e=e.child,e!==null))for(ys(e,t,r),e=e.sibling;e!==null;)ys(e,t,r),e=e.sibling}var Oe=null,Tt=!1;function ur(e,t,r){for(r=r.child;r!==null;)Ad(e,t,r),r=r.sibling}function Ad(e,t,r){if(zt&&typeof zt.onCommitFiberUnmount=="function")try{zt.onCommitFiberUnmount(fo,r)}catch{}switch(r.tag){case 5:Ge||rn(r,t);case 6:var n=Oe,i=Tt;Oe=null,ur(e,t,r),Oe=n,Tt=i,Oe!==null&&(Tt?(e=Oe,r=r.stateNode,e.nodeType===8?e.parentNode.removeChild(r):e.removeChild(r)):Oe.removeChild(r.stateNode));break;case 18:Oe!==null&&(Tt?(e=Oe,r=r.stateNode,e.nodeType===8?za(e.parentNode,r):e.nodeType===1&&za(e,r),In(e)):za(Oe,r.stateNode));break;case 4:n=Oe,i=Tt,Oe=r.stateNode.containerInfo,Tt=!0,ur(e,t,r),Oe=n,Tt=i;break;case 0:case 11:case 14:case 15:if(!Ge&&(n=r.updateQueue,n!==null&&(n=n.lastEffect,n!==null))){i=n=n.next;do{var s=i,c=s.destroy;s=s.tag,c!==void 0&&((s&2)!==0||(s&4)!==0)&&xs(r,t,c),i=i.next}while(i!==n)}ur(e,t,r);break;case 1:if(!Ge&&(rn(r,t),n=r.stateNode,typeof n.componentWillUnmount=="function"))try{n.props=r.memoizedProps,n.state=r.memoizedState,n.componentWillUnmount()}catch(m){Ne(r,t,m)}ur(e,t,r);break;case 21:ur(e,t,r);break;case 22:r.mode&1?(Ge=(n=Ge)||r.memoizedState!==null,ur(e,t,r),Ge=n):ur(e,t,r);break;default:ur(e,t,r)}}function Rd(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var r=e.stateNode;r===null&&(r=e.stateNode=new Wm),t.forEach(function(n){var i=Xm.bind(null,e,n);r.has(n)||(r.add(n),n.then(i,i))})}}function Et(e,t){var r=t.deletions;if(r!==null)for(var n=0;n<r.length;n++){var i=r[n];try{var s=e,c=t,m=c;e:for(;m!==null;){switch(m.tag){case 5:Oe=m.stateNode,Tt=!1;break e;case 3:Oe=m.stateNode.containerInfo,Tt=!0;break e;case 4:Oe=m.stateNode.containerInfo,Tt=!0;break e}m=m.return}if(Oe===null)throw Error(l(160));Ad(s,c,i),Oe=null,Tt=!1;var h=i.alternate;h!==null&&(h.return=null),i.return=null}catch(w){Ne(i,t,w)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Dd(t,e),t=t.sibling}function Dd(e,t){var r=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Et(t,e),Dt(e),n&4){try{Jn(3,e,e.return),ti(3,e)}catch(A){Ne(e,e.return,A)}try{Jn(5,e,e.return)}catch(A){Ne(e,e.return,A)}}break;case 1:Et(t,e),Dt(e),n&512&&r!==null&&rn(r,r.return);break;case 5:if(Et(t,e),Dt(e),n&512&&r!==null&&rn(r,r.return),e.flags&32){var i=e.stateNode;try{yn(i,"")}catch(A){Ne(e,e.return,A)}}if(n&4&&(i=e.stateNode,i!=null)){var s=e.memoizedProps,c=r!==null?r.memoizedProps:s,m=e.type,h=e.updateQueue;if(e.updateQueue=null,h!==null)try{m==="input"&&s.type==="radio"&&s.name!=null&&dl(i,s),Ki(m,c);var w=Ki(m,s);for(c=0;c<h.length;c+=2){var C=h[c],T=h[c+1];C==="style"?vl(i,T):C==="dangerouslySetInnerHTML"?xl(i,T):C==="children"?yn(i,T):oe(i,C,T,w)}switch(m){case"input":Vi(i,s);break;case"textarea":ml(i,s);break;case"select":var S=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var L=s.value;L!=null?Rr(i,!!s.multiple,L,!1):S!==!!s.multiple&&(s.defaultValue!=null?Rr(i,!!s.multiple,s.defaultValue,!0):Rr(i,!!s.multiple,s.multiple?[]:"",!1))}i[Wn]=s}catch(A){Ne(e,e.return,A)}}break;case 6:if(Et(t,e),Dt(e),n&4){if(e.stateNode===null)throw Error(l(162));i=e.stateNode,s=e.memoizedProps;try{i.nodeValue=s}catch(A){Ne(e,e.return,A)}}break;case 3:if(Et(t,e),Dt(e),n&4&&r!==null&&r.memoizedState.isDehydrated)try{In(t.containerInfo)}catch(A){Ne(e,e.return,A)}break;case 4:Et(t,e),Dt(e);break;case 13:Et(t,e),Dt(e),i=e.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ks=Se())),n&4&&Rd(e);break;case 22:if(C=r!==null&&r.memoizedState!==null,e.mode&1?(Ge=(w=Ge)||C,Et(t,e),Ge=w):Et(t,e),Dt(e),n&8192){if(w=e.memoizedState!==null,(e.stateNode.isHidden=w)&&!C&&(e.mode&1)!==0)for(z=e,C=e.child;C!==null;){for(T=z=C;z!==null;){switch(S=z,L=S.child,S.tag){case 0:case 11:case 14:case 15:Jn(4,S,S.return);break;case 1:rn(S,S.return);var M=S.stateNode;if(typeof M.componentWillUnmount=="function"){n=S,r=S.return;try{t=n,M.props=t.memoizedProps,M.state=t.memoizedState,M.componentWillUnmount()}catch(A){Ne(n,r,A)}}break;case 5:rn(S,S.return);break;case 22:if(S.memoizedState!==null){Bd(T);continue}}L!==null?(L.return=S,z=L):Bd(T)}C=C.sibling}e:for(C=null,T=e;;){if(T.tag===5){if(C===null){C=T;try{i=T.stateNode,w?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(m=T.stateNode,h=T.memoizedProps.style,c=h!=null&&h.hasOwnProperty("display")?h.display:null,m.style.display=gl("display",c))}catch(A){Ne(e,e.return,A)}}}else if(T.tag===6){if(C===null)try{T.stateNode.nodeValue=w?"":T.memoizedProps}catch(A){Ne(e,e.return,A)}}else if((T.tag!==22&&T.tag!==23||T.memoizedState===null||T===e)&&T.child!==null){T.child.return=T,T=T.child;continue}if(T===e)break e;for(;T.sibling===null;){if(T.return===null||T.return===e)break e;C===T&&(C=null),T=T.return}C===T&&(C=null),T.sibling.return=T.return,T=T.sibling}}break;case 19:Et(t,e),Dt(e),n&4&&Rd(e);break;case 21:break;default:Et(t,e),Dt(e)}}function Dt(e){var t=e.flags;if(t&2){try{e:{for(var r=e.return;r!==null;){if(zd(r)){var n=r;break e}r=r.return}throw Error(l(160))}switch(n.tag){case 5:var i=n.stateNode;n.flags&32&&(yn(i,""),n.flags&=-33);var s=Md(e);ys(e,s,i);break;case 3:case 4:var c=n.stateNode.containerInfo,m=Md(e);vs(e,m,c);break;default:throw Error(l(161))}}catch(h){Ne(e,e.return,h)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Hm(e,t,r){z=e,_d(e)}function _d(e,t,r){for(var n=(e.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&n){var c=i.memoizedState!==null||ei;if(!c){var m=i.alternate,h=m!==null&&m.memoizedState!==null||Ge;m=ei;var w=Ge;if(ei=c,(Ge=h)&&!w)for(z=i;z!==null;)c=z,h=c.child,c.tag===22&&c.memoizedState!==null?Fd(i):h!==null?(h.return=c,z=h):Fd(i);for(;s!==null;)z=s,_d(s),s=s.sibling;z=i,ei=m,Ge=w}Od(e)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,z=s):Od(e)}}function Od(e){for(;z!==null;){var t=z;if((t.flags&8772)!==0){var r=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Ge||ti(5,t);break;case 1:var n=t.stateNode;if(t.flags&4&&!Ge)if(r===null)n.componentDidMount();else{var i=t.elementType===t.type?r.memoizedProps:Ct(t.type,r.memoizedProps);n.componentDidUpdate(i,r.memoizedState,n.__reactInternalSnapshotBeforeUpdate)}var s=t.updateQueue;s!==null&&Bc(t,s,n);break;case 3:var c=t.updateQueue;if(c!==null){if(r=null,t.child!==null)switch(t.child.tag){case 5:r=t.child.stateNode;break;case 1:r=t.child.stateNode}Bc(t,c,r)}break;case 5:var m=t.stateNode;if(r===null&&t.flags&4){r=m;var h=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":h.autoFocus&&r.focus();break;case"img":h.src&&(r.src=h.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var w=t.alternate;if(w!==null){var C=w.memoizedState;if(C!==null){var T=C.dehydrated;T!==null&&In(T)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(l(163))}Ge||t.flags&512&&gs(t)}catch(S){Ne(t,t.return,S)}}if(t===e){z=null;break}if(r=t.sibling,r!==null){r.return=t.return,z=r;break}z=t.return}}function Bd(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var r=t.sibling;if(r!==null){r.return=t.return,z=r;break}z=t.return}}function Fd(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var r=t.return;try{ti(4,t)}catch(h){Ne(t,r,h)}break;case 1:var n=t.stateNode;if(typeof n.componentDidMount=="function"){var i=t.return;try{n.componentDidMount()}catch(h){Ne(t,i,h)}}var s=t.return;try{gs(t)}catch(h){Ne(t,s,h)}break;case 5:var c=t.return;try{gs(t)}catch(h){Ne(t,c,h)}}}catch(h){Ne(t,t.return,h)}if(t===e){z=null;break}var m=t.sibling;if(m!==null){m.return=t.return,z=m;break}z=t.return}}var Gm=Math.ceil,ri=Z.ReactCurrentDispatcher,bs=Z.ReactCurrentOwner,ht=Z.ReactCurrentBatchConfig,le=0,Ae=null,Ee=null,Be=0,st=0,nn=ar(0),ze=0,Zn=null,Tr=0,ni=0,ws=0,eo=null,Xe=null,ks=0,on=1/0,$t=null,oi=!1,js=null,pr=null,ii=!1,mr=null,ai=0,to=0,Ns=null,si=-1,li=0;function Qe(){return(le&6)!==0?Se():si!==-1?si:si=Se()}function fr(e){return(e.mode&1)===0?1:(le&2)!==0&&Be!==0?Be&-Be:Tm.transition!==null?(li===0&&(li=Ml()),li):(e=he,e!==0||(e=window.event,e=e===void 0?16:Ul(e.type)),e)}function Pt(e,t,r,n){if(50<to)throw to=0,Ns=null,Error(l(185));Sn(e,r,n),((le&2)===0||e!==Ae)&&(e===Ae&&((le&2)===0&&(ni|=r),ze===4&&hr(e,Be)),Je(e,n),r===1&&le===0&&(t.mode&1)===0&&(on=Se()+500,Do&&lr()))}function Je(e,t){var r=e.callbackNode;Tp(e,t);var n=go(e,e===Ae?Be:0);if(n===0)r!==null&&Il(r),e.callbackNode=null,e.callbackPriority=0;else if(t=n&-n,e.callbackPriority!==t){if(r!=null&&Il(r),t===1)e.tag===0?Cm(Ud.bind(null,e)):Tc(Ud.bind(null,e)),km(function(){(le&6)===0&&lr()}),r=null;else{switch(Al(n)){case 1:r=na;break;case 4:r=Ll;break;case 16:r=mo;break;case 536870912:r=zl;break;default:r=mo}r=Kd(r,Wd.bind(null,e))}e.callbackPriority=t,e.callbackNode=r}}function Wd(e,t){if(si=-1,li=0,(le&6)!==0)throw Error(l(327));var r=e.callbackNode;if(an()&&e.callbackNode!==r)return null;var n=go(e,e===Ae?Be:0);if(n===0)return null;if((n&30)!==0||(n&e.expiredLanes)!==0||t)t=ci(e,n);else{t=n;var i=le;le|=2;var s=Gd();(Ae!==e||Be!==t)&&($t=null,on=Se()+500,Pr(e,t));do try{Qm();break}catch(m){Hd(e,m)}while(!0);Ua(),ri.current=s,le=i,Ee!==null?t=0:(Ae=null,Be=0,t=ze)}if(t!==0){if(t===2&&(i=oa(e),i!==0&&(n=i,t=Ss(e,i))),t===1)throw r=Zn,Pr(e,0),hr(e,n),Je(e,Se()),r;if(t===6)hr(e,n);else{if(i=e.current.alternate,(n&30)===0&&!Vm(i)&&(t=ci(e,n),t===2&&(s=oa(e),s!==0&&(n=s,t=Ss(e,s))),t===1))throw r=Zn,Pr(e,0),hr(e,n),Je(e,Se()),r;switch(e.finishedWork=i,e.finishedLanes=n,t){case 0:case 1:throw Error(l(345));case 2:Ir(e,Xe,$t);break;case 3:if(hr(e,n),(n&130023424)===n&&(t=ks+500-Se(),10<t)){if(go(e,0)!==0)break;if(i=e.suspendedLanes,(i&n)!==n){Qe(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=La(Ir.bind(null,e,Xe,$t),t);break}Ir(e,Xe,$t);break;case 4:if(hr(e,n),(n&4194240)===n)break;for(t=e.eventTimes,i=-1;0<n;){var c=31-jt(n);s=1<<c,c=t[c],c>i&&(i=c),n&=~s}if(n=i,n=Se()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Gm(n/1960))-n,10<n){e.timeoutHandle=La(Ir.bind(null,e,Xe,$t),n);break}Ir(e,Xe,$t);break;case 5:Ir(e,Xe,$t);break;default:throw Error(l(329))}}}return Je(e,Se()),e.callbackNode===r?Wd.bind(null,e):null}function Ss(e,t){var r=eo;return e.current.memoizedState.isDehydrated&&(Pr(e,t).flags|=256),e=ci(e,t),e!==2&&(t=Xe,Xe=r,t!==null&&Cs(t)),e}function Cs(e){Xe===null?Xe=e:Xe.push.apply(Xe,e)}function Vm(e){for(var t=e;;){if(t.flags&16384){var r=t.updateQueue;if(r!==null&&(r=r.stores,r!==null))for(var n=0;n<r.length;n++){var i=r[n],s=i.getSnapshot;i=i.value;try{if(!Nt(s(),i))return!1}catch{return!1}}}if(r=t.child,t.subtreeFlags&16384&&r!==null)r.return=t,t=r;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function hr(e,t){for(t&=~ws,t&=~ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var r=31-jt(t),n=1<<r;e[r]=-1,t&=~n}}function Ud(e){if((le&6)!==0)throw Error(l(327));an();var t=go(e,0);if((t&1)===0)return Je(e,Se()),null;var r=ci(e,t);if(e.tag!==0&&r===2){var n=oa(e);n!==0&&(t=n,r=Ss(e,n))}if(r===1)throw r=Zn,Pr(e,0),hr(e,t),Je(e,Se()),r;if(r===6)throw Error(l(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Ir(e,Xe,$t),Je(e,Se()),null}function Ts(e,t){var r=le;le|=1;try{return e(t)}finally{le=r,le===0&&(on=Se()+500,Do&&lr())}}function Er(e){mr!==null&&mr.tag===0&&(le&6)===0&&an();var t=le;le|=1;var r=ht.transition,n=he;try{if(ht.transition=null,he=1,e)return e()}finally{he=n,ht.transition=r,le=t,(le&6)===0&&lr()}}function Es(){st=nn.current,ye(nn)}function Pr(e,t){e.finishedWork=null,e.finishedLanes=0;var r=e.timeoutHandle;if(r!==-1&&(e.timeoutHandle=-1,wm(r)),Ee!==null)for(r=Ee.return;r!==null;){var n=r;switch(_a(n),n.tag){case 1:n=n.type.childContextTypes,n!=null&&Ao();break;case 3:en(),ye($e),ye(We),Ka();break;case 5:$a(n);break;case 4:en();break;case 13:ye(ke);break;case 19:ye(ke);break;case 10:Ha(n.type._context);break;case 22:case 23:Es()}r=r.return}if(Ae=e,Ee=e=xr(e.current,null),Be=st=t,ze=0,Zn=null,ws=ni=Tr=0,Xe=eo=null,Nr!==null){for(t=0;t<Nr.length;t++)if(r=Nr[t],n=r.interleaved,n!==null){r.interleaved=null;var i=n.next,s=r.pending;if(s!==null){var c=s.next;s.next=i,n.next=c}r.pending=n}Nr=null}return e}function Hd(e,t){do{var r=Ee;try{if(Ua(),Yo.current=Ko,Qo){for(var n=je.memoizedState;n!==null;){var i=n.queue;i!==null&&(i.pending=null),n=n.next}Qo=!1}if(Cr=0,Me=Le=je=null,Qn=!1,$n=0,bs.current=null,r===null||r.return===null){ze=1,Zn=t,Ee=null;break}e:{var s=e,c=r.return,m=r,h=t;if(t=Be,m.flags|=32768,h!==null&&typeof h=="object"&&typeof h.then=="function"){var w=h,C=m,T=C.tag;if((C.mode&1)===0&&(T===0||T===11||T===15)){var S=C.alternate;S?(C.updateQueue=S.updateQueue,C.memoizedState=S.memoizedState,C.lanes=S.lanes):(C.updateQueue=null,C.memoizedState=null)}var L=fd(c);if(L!==null){L.flags&=-257,hd(L,c,m,s,t),L.mode&1&&md(s,w,t),t=L,h=w;var M=t.updateQueue;if(M===null){var A=new Set;A.add(h),t.updateQueue=A}else M.add(h);break e}else{if((t&1)===0){md(s,w,t),Ps();break e}h=Error(l(426))}}else if(we&&m.mode&1){var Ce=fd(c);if(Ce!==null){(Ce.flags&65536)===0&&(Ce.flags|=256),hd(Ce,c,m,s,t),Fa(tn(h,m));break e}}s=h=tn(h,m),ze!==4&&(ze=2),eo===null?eo=[s]:eo.push(s),s=c;do{switch(s.tag){case 3:s.flags|=65536,t&=-t,s.lanes|=t;var y=ud(s,h,t);Oc(s,y);break e;case 1:m=h;var x=s.type,b=s.stateNode;if((s.flags&128)===0&&(typeof x.getDerivedStateFromError=="function"||b!==null&&typeof b.componentDidCatch=="function"&&(pr===null||!pr.has(b)))){s.flags|=65536,t&=-t,s.lanes|=t;var E=pd(s,m,t);Oc(s,E);break e}}s=s.return}while(s!==null)}Yd(r)}catch(R){t=R,Ee===r&&r!==null&&(Ee=r=r.return);continue}break}while(!0)}function Gd(){var e=ri.current;return ri.current=Ko,e===null?Ko:e}function Ps(){(ze===0||ze===3||ze===2)&&(ze=4),Ae===null||(Tr&268435455)===0&&(ni&268435455)===0||hr(Ae,Be)}function ci(e,t){var r=le;le|=2;var n=Gd();(Ae!==e||Be!==t)&&($t=null,Pr(e,t));do try{Ym();break}catch(i){Hd(e,i)}while(!0);if(Ua(),le=r,ri.current=n,Ee!==null)throw Error(l(261));return Ae=null,Be=0,ze}function Ym(){for(;Ee!==null;)Vd(Ee)}function Qm(){for(;Ee!==null&&!vp();)Vd(Ee)}function Vd(e){var t=qd(e.alternate,e,st);e.memoizedProps=e.pendingProps,t===null?Yd(e):Ee=t,bs.current=null}function Yd(e){var t=e;do{var r=t.alternate;if(e=t.return,(t.flags&32768)===0){if(r=Bm(r,t,st),r!==null){Ee=r;return}}else{if(r=Fm(r,t),r!==null){r.flags&=32767,Ee=r;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{ze=6,Ee=null;return}}if(t=t.sibling,t!==null){Ee=t;return}Ee=t=e}while(t!==null);ze===0&&(ze=5)}function Ir(e,t,r){var n=he,i=ht.transition;try{ht.transition=null,he=1,$m(e,t,r,n)}finally{ht.transition=i,he=n}return null}function $m(e,t,r,n){do an();while(mr!==null);if((le&6)!==0)throw Error(l(327));r=e.finishedWork;var i=e.finishedLanes;if(r===null)return null;if(e.finishedWork=null,e.finishedLanes=0,r===e.current)throw Error(l(177));e.callbackNode=null,e.callbackPriority=0;var s=r.lanes|r.childLanes;if(Ep(e,s),e===Ae&&(Ee=Ae=null,Be=0),(r.subtreeFlags&2064)===0&&(r.flags&2064)===0||ii||(ii=!0,Kd(mo,function(){return an(),null})),s=(r.flags&15990)!==0,(r.subtreeFlags&15990)!==0||s){s=ht.transition,ht.transition=null;var c=he;he=1;var m=le;le|=4,bs.current=null,Um(e,r),Dd(r,e),fm(Pa),bo=!!Ea,Pa=Ea=null,e.current=r,Hm(r),yp(),le=m,he=c,ht.transition=s}else e.current=r;if(ii&&(ii=!1,mr=e,ai=i),s=e.pendingLanes,s===0&&(pr=null),kp(r.stateNode),Je(e,Se()),t!==null)for(n=e.onRecoverableError,r=0;r<t.length;r++)i=t[r],n(i.value,{componentStack:i.stack,digest:i.digest});if(oi)throw oi=!1,e=js,js=null,e;return(ai&1)!==0&&e.tag!==0&&an(),s=e.pendingLanes,(s&1)!==0?e===Ns?to++:(to=0,Ns=e):to=0,lr(),null}function an(){if(mr!==null){var e=Al(ai),t=ht.transition,r=he;try{if(ht.transition=null,he=16>e?16:e,mr===null)var n=!1;else{if(e=mr,mr=null,ai=0,(le&6)!==0)throw Error(l(331));var i=le;for(le|=4,z=e.current;z!==null;){var s=z,c=s.child;if((z.flags&16)!==0){var m=s.deletions;if(m!==null){for(var h=0;h<m.length;h++){var w=m[h];for(z=w;z!==null;){var C=z;switch(C.tag){case 0:case 11:case 15:Jn(8,C,s)}var T=C.child;if(T!==null)T.return=C,z=T;else for(;z!==null;){C=z;var S=C.sibling,L=C.return;if(Ld(C),C===w){z=null;break}if(S!==null){S.return=L,z=S;break}z=L}}}var M=s.alternate;if(M!==null){var A=M.child;if(A!==null){M.child=null;do{var Ce=A.sibling;A.sibling=null,A=Ce}while(A!==null)}}z=s}}if((s.subtreeFlags&2064)!==0&&c!==null)c.return=s,z=c;else e:for(;z!==null;){if(s=z,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:Jn(9,s,s.return)}var y=s.sibling;if(y!==null){y.return=s.return,z=y;break e}z=s.return}}var x=e.current;for(z=x;z!==null;){c=z;var b=c.child;if((c.subtreeFlags&2064)!==0&&b!==null)b.return=c,z=b;else e:for(c=x;z!==null;){if(m=z,(m.flags&2048)!==0)try{switch(m.tag){case 0:case 11:case 15:ti(9,m)}}catch(R){Ne(m,m.return,R)}if(m===c){z=null;break e}var E=m.sibling;if(E!==null){E.return=m.return,z=E;break e}z=m.return}}if(le=i,lr(),zt&&typeof zt.onPostCommitFiberRoot=="function")try{zt.onPostCommitFiberRoot(fo,e)}catch{}n=!0}return n}finally{he=r,ht.transition=t}}return!1}function Qd(e,t,r){t=tn(r,t),t=ud(e,t,1),e=dr(e,t,1),t=Qe(),e!==null&&(Sn(e,1,t),Je(e,t))}function Ne(e,t,r){if(e.tag===3)Qd(e,e,r);else for(;t!==null;){if(t.tag===3){Qd(t,e,r);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(pr===null||!pr.has(n))){e=tn(r,e),e=pd(t,e,1),t=dr(t,e,1),e=Qe(),t!==null&&(Sn(t,1,e),Je(t,e));break}}t=t.return}}function qm(e,t,r){var n=e.pingCache;n!==null&&n.delete(t),t=Qe(),e.pingedLanes|=e.suspendedLanes&r,Ae===e&&(Be&r)===r&&(ze===4||ze===3&&(Be&130023424)===Be&&500>Se()-ks?Pr(e,0):ws|=r),Je(e,t)}function $d(e,t){t===0&&((e.mode&1)===0?t=1:(t=xo,xo<<=1,(xo&130023424)===0&&(xo=4194304)));var r=Qe();e=Vt(e,t),e!==null&&(Sn(e,t,r),Je(e,r))}function Km(e){var t=e.memoizedState,r=0;t!==null&&(r=t.retryLane),$d(e,r)}function Xm(e,t){var r=0;switch(e.tag){case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(r=i.retryLane);break;case 19:n=e.stateNode;break;default:throw Error(l(314))}n!==null&&n.delete(t),$d(e,r)}var qd;qd=function(e,t,r){if(e!==null)if(e.memoizedProps!==t.pendingProps||$e.current)Ke=!0;else{if((e.lanes&r)===0&&(t.flags&128)===0)return Ke=!1,Om(e,t,r);Ke=(e.flags&131072)!==0}else Ke=!1,we&&(t.flags&1048576)!==0&&Ec(t,Oo,t.index);switch(t.lanes=0,t.tag){case 2:var n=t.type;Zo(e,t),e=t.pendingProps;var i=Qr(t,We.current);Zr(t,r),i=Za(null,t,n,e,i,r);var s=es();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,qe(n)?(s=!0,Ro(t)):s=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Ya(t),i.updater=Xo,t.stateNode=i,i._reactInternals=t,as(t,n,e,r),t=ds(null,t,n,!0,s,r)):(t.tag=0,we&&s&&Da(t),Ye(null,t,i,r),t=t.child),t;case 16:n=t.elementType;e:{switch(Zo(e,t),e=t.pendingProps,i=n._init,n=i(n._payload),t.type=n,i=t.tag=Zm(n),e=Ct(n,e),i){case 0:t=cs(null,t,n,e,r);break e;case 1:t=wd(null,t,n,e,r);break e;case 11:t=xd(null,t,n,e,r);break e;case 14:t=gd(null,t,n,Ct(n.type,e),r);break e}throw Error(l(306,n,""))}return t;case 0:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),cs(e,t,n,i,r);case 1:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),wd(e,t,n,i,r);case 3:e:{if(kd(t),e===null)throw Error(l(387));n=t.pendingProps,s=t.memoizedState,i=s.element,_c(e,t),Go(t,n,null,r);var c=t.memoizedState;if(n=c.element,s.isDehydrated)if(s={element:n,isDehydrated:!1,cache:c.cache,pendingSuspenseBoundaries:c.pendingSuspenseBoundaries,transitions:c.transitions},t.updateQueue.baseState=s,t.memoizedState=s,t.flags&256){i=tn(Error(l(423)),t),t=jd(e,t,n,r,i);break e}else if(n!==i){i=tn(Error(l(424)),t),t=jd(e,t,n,r,i);break e}else for(at=ir(t.stateNode.containerInfo.firstChild),it=t,we=!0,St=null,r=Rc(t,null,n,r),t.child=r;r;)r.flags=r.flags&-3|4096,r=r.sibling;else{if(Kr(),n===i){t=Qt(e,t,r);break e}Ye(e,t,n,r)}t=t.child}return t;case 5:return Fc(t),e===null&&Ba(t),n=t.type,i=t.pendingProps,s=e!==null?e.memoizedProps:null,c=i.children,Ia(n,i)?c=null:s!==null&&Ia(n,s)&&(t.flags|=32),bd(e,t),Ye(e,t,c,r),t.child;case 6:return e===null&&Ba(t),null;case 13:return Nd(e,t,r);case 4:return Qa(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Xr(t,null,n,r):Ye(e,t,n,r),t.child;case 11:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),xd(e,t,n,i,r);case 7:return Ye(e,t,t.pendingProps,r),t.child;case 8:return Ye(e,t,t.pendingProps.children,r),t.child;case 12:return Ye(e,t,t.pendingProps.children,r),t.child;case 10:e:{if(n=t.type._context,i=t.pendingProps,s=t.memoizedProps,c=i.value,ge(Wo,n._currentValue),n._currentValue=c,s!==null)if(Nt(s.value,c)){if(s.children===i.children&&!$e.current){t=Qt(e,t,r);break e}}else for(s=t.child,s!==null&&(s.return=t);s!==null;){var m=s.dependencies;if(m!==null){c=s.child;for(var h=m.firstContext;h!==null;){if(h.context===n){if(s.tag===1){h=Yt(-1,r&-r),h.tag=2;var w=s.updateQueue;if(w!==null){w=w.shared;var C=w.pending;C===null?h.next=h:(h.next=C.next,C.next=h),w.pending=h}}s.lanes|=r,h=s.alternate,h!==null&&(h.lanes|=r),Ga(s.return,r,t),m.lanes|=r;break}h=h.next}}else if(s.tag===10)c=s.type===t.type?null:s.child;else if(s.tag===18){if(c=s.return,c===null)throw Error(l(341));c.lanes|=r,m=c.alternate,m!==null&&(m.lanes|=r),Ga(c,r,t),c=s.sibling}else c=s.child;if(c!==null)c.return=s;else for(c=s;c!==null;){if(c===t){c=null;break}if(s=c.sibling,s!==null){s.return=c.return,c=s;break}c=c.return}s=c}Ye(e,t,i.children,r),t=t.child}return t;case 9:return i=t.type,n=t.pendingProps.children,Zr(t,r),i=mt(i),n=n(i),t.flags|=1,Ye(e,t,n,r),t.child;case 14:return n=t.type,i=Ct(n,t.pendingProps),i=Ct(n.type,i),gd(e,t,n,i,r);case 15:return vd(e,t,t.type,t.pendingProps,r);case 17:return n=t.type,i=t.pendingProps,i=t.elementType===n?i:Ct(n,i),Zo(e,t),t.tag=1,qe(n)?(e=!0,Ro(t)):e=!1,Zr(t,r),cd(t,n,i),as(t,n,i,r),ds(null,t,n,!0,e,r);case 19:return Cd(e,t,r);case 22:return yd(e,t,r)}throw Error(l(156,t.tag))};function Kd(e,t){return Pl(e,t)}function Jm(e,t,r,n){this.tag=e,this.key=r,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xt(e,t,r,n){return new Jm(e,t,r,n)}function Is(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Zm(e){if(typeof e=="function")return Is(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ct)return 11;if(e===dt)return 14}return 2}function xr(e,t){var r=e.alternate;return r===null?(r=xt(e.tag,t,e.key,e.mode),r.elementType=e.elementType,r.type=e.type,r.stateNode=e.stateNode,r.alternate=e,e.alternate=r):(r.pendingProps=t,r.type=e.type,r.flags=0,r.subtreeFlags=0,r.deletions=null),r.flags=e.flags&14680064,r.childLanes=e.childLanes,r.lanes=e.lanes,r.child=e.child,r.memoizedProps=e.memoizedProps,r.memoizedState=e.memoizedState,r.updateQueue=e.updateQueue,t=e.dependencies,r.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},r.sibling=e.sibling,r.index=e.index,r.ref=e.ref,r}function di(e,t,r,n,i,s){var c=2;if(n=e,typeof e=="function")Is(e)&&(c=1);else if(typeof e=="string")c=5;else e:switch(e){case U:return Lr(r.children,i,s,t);case Ie:c=8,i|=8;break;case rt:return e=xt(12,r,t,i|2),e.elementType=rt,e.lanes=s,e;case Ve:return e=xt(13,r,t,i),e.elementType=Ve,e.lanes=s,e;case nt:return e=xt(19,r,t,i),e.elementType=nt,e.lanes=s,e;case xe:return ui(r,i,s,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case wt:c=10;break e;case Bt:c=9;break e;case ct:c=11;break e;case dt:c=14;break e;case Fe:c=16,n=null;break e}throw Error(l(130,e==null?e:typeof e,""))}return t=xt(c,r,t,i),t.elementType=e,t.type=n,t.lanes=s,t}function Lr(e,t,r,n){return e=xt(7,e,n,t),e.lanes=r,e}function ui(e,t,r,n){return e=xt(22,e,n,t),e.elementType=xe,e.lanes=r,e.stateNode={isHidden:!1},e}function Ls(e,t,r){return e=xt(6,e,null,t),e.lanes=r,e}function zs(e,t,r){return t=xt(4,e.children!==null?e.children:[],e.key,t),t.lanes=r,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ef(e,t,r,n,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=ia(0),this.expirationTimes=ia(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=ia(0),this.identifierPrefix=n,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Ms(e,t,r,n,i,s,c,m,h){return e=new ef(e,t,r,m,h),t===1?(t=1,s===!0&&(t|=8)):t=0,s=xt(3,null,null,t),e.current=s,s.stateNode=e,s.memoizedState={element:n,isDehydrated:r,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ya(s),e}function tf(e,t,r){var n=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:$,key:n==null?null:""+n,children:e,containerInfo:t,implementation:r}}function Xd(e){if(!e)return sr;e=e._reactInternals;e:{if(yr(e)!==e||e.tag!==1)throw Error(l(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(qe(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(l(171))}if(e.tag===1){var r=e.type;if(qe(r))return Sc(e,r,t)}return t}function Jd(e,t,r,n,i,s,c,m,h){return e=Ms(r,n,!0,e,i,s,c,m,h),e.context=Xd(null),r=e.current,n=Qe(),i=fr(r),s=Yt(n,i),s.callback=t!=null?t:null,dr(r,s,i),e.current.lanes=i,Sn(e,i,n),Je(e,n),e}function pi(e,t,r,n){var i=t.current,s=Qe(),c=fr(i);return r=Xd(r),t.context===null?t.context=r:t.pendingContext=r,t=Yt(s,c),t.payload={element:e},n=n===void 0?null:n,n!==null&&(t.callback=n),e=dr(i,t,c),e!==null&&(Pt(e,i,c,s),Ho(e,i,c)),c}function mi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Zd(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var r=e.retryLane;e.retryLane=r!==0&&r<t?r:t}}function As(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function rf(){return null}var eu=typeof reportError=="function"?reportError:function(e){console.error(e)};function Rs(e){this._internalRoot=e}fi.prototype.render=Rs.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(l(409));pi(e,t,null,null)},fi.prototype.unmount=Rs.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Er(function(){pi(null,e,null,null)}),t[Wt]=null}};function fi(e){this._internalRoot=e}fi.prototype.unstable_scheduleHydration=function(e){if(e){var t=_l();e={blockedOn:null,target:e,priority:t};for(var r=0;r<rr.length&&t!==0&&t<rr[r].priority;r++);rr.splice(r,0,e),r===0&&Fl(e)}};function Ds(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function hi(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function tu(){}function nf(e,t,r,n,i){if(i){if(typeof n=="function"){var s=n;n=function(){var w=mi(c);s.call(w)}}var c=Jd(t,n,e,0,null,!1,!1,"",tu);return e._reactRootContainer=c,e[Wt]=c.current,Bn(e.nodeType===8?e.parentNode:e),Er(),c}for(;i=e.lastChild;)e.removeChild(i);if(typeof n=="function"){var m=n;n=function(){var w=mi(h);m.call(w)}}var h=Ms(e,0,!1,null,null,!1,!1,"",tu);return e._reactRootContainer=h,e[Wt]=h.current,Bn(e.nodeType===8?e.parentNode:e),Er(function(){pi(t,h,r,n)}),h}function xi(e,t,r,n,i){var s=r._reactRootContainer;if(s){var c=s;if(typeof i=="function"){var m=i;i=function(){var h=mi(c);m.call(h)}}pi(t,c,e,i)}else c=nf(r,t,e,i,n);return mi(c)}Rl=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var r=Nn(t.pendingLanes);r!==0&&(aa(t,r|1),Je(t,Se()),(le&6)===0&&(on=Se()+500,lr()))}break;case 13:Er(function(){var n=Vt(e,1);if(n!==null){var i=Qe();Pt(n,e,1,i)}}),As(e,1)}},sa=function(e){if(e.tag===13){var t=Vt(e,134217728);if(t!==null){var r=Qe();Pt(t,e,134217728,r)}As(e,134217728)}},Dl=function(e){if(e.tag===13){var t=fr(e),r=Vt(e,t);if(r!==null){var n=Qe();Pt(r,e,t,n)}As(e,t)}},_l=function(){return he},Ol=function(e,t){var r=he;try{return he=e,t()}finally{he=r}},Zi=function(e,t,r){switch(t){case"input":if(Vi(e,r),t=r.name,r.type==="radio"&&t!=null){for(r=e;r.parentNode;)r=r.parentNode;for(r=r.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<r.length;t++){var n=r[t];if(n!==e&&n.form===e.form){var i=Mo(n);if(!i)throw Error(l(90));kt(n),Vi(n,i)}}}break;case"textarea":ml(e,r);break;case"select":t=r.value,t!=null&&Rr(e,!!r.multiple,t,!1)}},kl=Ts,jl=Er;var of={usingClientEntryPoint:!1,Events:[Un,Vr,Mo,bl,wl,Ts]},ro={findFiberByHostInstance:br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},af={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Z.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Tl(e),e===null?null:e.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||rf,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gi.isDisabled&&gi.supportsFiber)try{fo=gi.inject(af),zt=gi}catch{}}return Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=of,Ze.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ds(t))throw Error(l(200));return tf(e,t,null,r)},Ze.createRoot=function(e,t){if(!Ds(e))throw Error(l(299));var r=!1,n="",i=eu;return t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Ms(e,1,!1,null,null,r,!1,n,i),e[Wt]=t.current,Bn(e.nodeType===8?e.parentNode:e),new Rs(t)},Ze.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(l(188)):(e=Object.keys(e).join(","),Error(l(268,e)));return e=Tl(t),e=e===null?null:e.stateNode,e},Ze.flushSync=function(e){return Er(e)},Ze.hydrate=function(e,t,r){if(!hi(t))throw Error(l(200));return xi(null,e,t,!0,r)},Ze.hydrateRoot=function(e,t,r){if(!Ds(e))throw Error(l(405));var n=r!=null&&r.hydratedSources||null,i=!1,s="",c=eu;if(r!=null&&(r.unstable_strictMode===!0&&(i=!0),r.identifierPrefix!==void 0&&(s=r.identifierPrefix),r.onRecoverableError!==void 0&&(c=r.onRecoverableError)),t=Jd(t,null,e,1,r!=null?r:null,i,!1,s,c),e[Wt]=t.current,Bn(e),n)for(e=0;e<n.length;e++)r=n[e],i=r._getVersion,i=i(r._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[r,i]:t.mutableSourceEagerHydrationData.push(r,i);return new fi(t)},Ze.render=function(e,t,r){if(!hi(t))throw Error(l(200));return xi(null,e,t,!1,r)},Ze.unmountComponentAtNode=function(e){if(!hi(e))throw Error(l(40));return e._reactRootContainer?(Er(function(){xi(null,null,e,!1,function(){e._reactRootContainer=null,e[Wt]=null})}),!0):!1},Ze.unstable_batchedUpdates=Ts,Ze.unstable_renderSubtreeIntoContainer=function(e,t,r,n){if(!hi(r))throw Error(l(200));if(e==null||e._reactInternals===void 0)throw Error(l(38));return xi(e,t,r,!1,n)},Ze.version="18.3.1-next-f1338f8080-20240426",Ze}var cu;function hf(){if(cu)return Bs.exports;cu=1;function a(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a)}catch(d){console.error(d)}}return a(),Bs.exports=ff(),Bs.exports}var du;function xf(){if(du)return vi;du=1;var a=hf();return vi.createRoot=a.createRoot,vi.hydrateRoot=a.hydrateRoot,vi}var gf=xf(),ae=el();const gt=lf(ae);var zu={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},uu=gt.createContext&&gt.createContext(zu),vf=["attr","size","title"];function yf(a,d){if(a==null)return{};var l=bf(a,d),f,u;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(a);for(u=0;u<p.length;u++)f=p[u],!(d.indexOf(f)>=0)&&Object.prototype.propertyIsEnumerable.call(a,f)&&(l[f]=a[f])}return l}function bf(a,d){if(a==null)return{};var l={};for(var f in a)if(Object.prototype.hasOwnProperty.call(a,f)){if(d.indexOf(f)>=0)continue;l[f]=a[f]}return l}function Ci(){return Ci=Object.assign?Object.assign.bind():function(a){for(var d=1;d<arguments.length;d++){var l=arguments[d];for(var f in l)Object.prototype.hasOwnProperty.call(l,f)&&(a[f]=l[f])}return a},Ci.apply(this,arguments)}function pu(a,d){var l=Object.keys(a);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);d&&(f=f.filter(function(u){return Object.getOwnPropertyDescriptor(a,u).enumerable})),l.push.apply(l,f)}return l}function Ti(a){for(var d=1;d<arguments.length;d++){var l=arguments[d]!=null?arguments[d]:{};d%2?pu(Object(l),!0).forEach(function(f){wf(a,f,l[f])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(l)):pu(Object(l)).forEach(function(f){Object.defineProperty(a,f,Object.getOwnPropertyDescriptor(l,f))})}return a}function wf(a,d,l){return d=kf(d),d in a?Object.defineProperty(a,d,{value:l,enumerable:!0,configurable:!0,writable:!0}):a[d]=l,a}function kf(a){var d=jf(a,"string");return typeof d=="symbol"?d:d+""}function jf(a,d){if(typeof a!="object"||!a)return a;var l=a[Symbol.toPrimitive];if(l!==void 0){var f=l.call(a,d);if(typeof f!="object")return f;throw new TypeError("@@toPrimitive must return a primitive value.")}return(d==="string"?String:Number)(a)}function Mu(a){return a&&a.map((d,l)=>gt.createElement(d.tag,Ti({key:l},d.attr),Mu(d.child)))}function W(a){return d=>gt.createElement(Nf,Ci({attr:Ti({},a.attr)},d),Mu(a.child))}function Nf(a){var d=l=>{var{attr:f,size:u,title:p}=a,v=yf(a,vf),j=u||l.size||"1em",k;return l.className&&(k=l.className),a.className&&(k=(k?k+" ":"")+a.className),gt.createElement("svg",Ci({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},l.attr,f,v,{className:k,style:Ti(Ti({color:a.color||l.color},l.style),a.style),height:j,width:j,xmlns:"http://www.w3.org/2000/svg"}),p&&gt.createElement("title",null,p),a.children)};return uu!==void 0?gt.createElement(uu.Consumer,null,l=>d(l)):d(zu)}function Jt(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 18 12 15 21 9 3 6 12 2 12"},child:[]}]})(a)}function tl(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"},child:[]},{tag:"line",attr:{x1:"12",y1:"9",x2:"12",y2:"13"},child:[]},{tag:"line",attr:{x1:"12",y1:"17",x2:"12.01",y2:"17"},child:[]}]})(a)}function Sf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"19",x2:"12",y2:"5"},child:[]},{tag:"polyline",attr:{points:"5 12 12 5 19 12"},child:[]}]})(a)}function Cf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"},child:[]},{tag:"path",attr:{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"},child:[]}]})(a)}function Ei(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"},child:[]},{tag:"polyline",attr:{points:"3.27 6.96 12 12.01 20.73 6.96"},child:[]},{tag:"line",attr:{x1:"12",y1:"22.08",x2:"12",y2:"12"},child:[]}]})(a)}function Mi(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14"},child:[]},{tag:"polyline",attr:{points:"22 4 12 14.01 9 11.01"},child:[]}]})(a)}function yt(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"7 13 12 18 17 13"},child:[]},{tag:"polyline",attr:{points:"7 6 12 11 17 6"},child:[]}]})(a)}function bt(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 11 12 6 7 11"},child:[]},{tag:"polyline",attr:{points:"17 18 12 13 7 18"},child:[]}]})(a)}function Ai(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polyline",attr:{points:"12 6 12 12 16 14"},child:[]}]})(a)}function Au(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"},child:[]}]})(a)}function Ri(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 18 22 12 16 6"},child:[]},{tag:"polyline",attr:{points:"8 6 2 12 8 18"},child:[]}]})(a)}function Tf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 8h1a4 4 0 0 1 0 8h-1"},child:[]},{tag:"path",attr:{d:"M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"},child:[]},{tag:"line",attr:{x1:"6",y1:"1",x2:"6",y2:"4"},child:[]},{tag:"line",attr:{x1:"10",y1:"1",x2:"10",y2:"4"},child:[]},{tag:"line",attr:{x1:"14",y1:"1",x2:"14",y2:"4"},child:[]}]})(a)}function Kt(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"4",y:"4",width:"16",height:"16",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"9",y:"9",width:"6",height:"6"},child:[]},{tag:"line",attr:{x1:"9",y1:"1",x2:"9",y2:"4"},child:[]},{tag:"line",attr:{x1:"15",y1:"1",x2:"15",y2:"4"},child:[]},{tag:"line",attr:{x1:"9",y1:"20",x2:"9",y2:"23"},child:[]},{tag:"line",attr:{x1:"15",y1:"20",x2:"15",y2:"23"},child:[]},{tag:"line",attr:{x1:"20",y1:"9",x2:"23",y2:"9"},child:[]},{tag:"line",attr:{x1:"20",y1:"14",x2:"23",y2:"14"},child:[]},{tag:"line",attr:{x1:"1",y1:"9",x2:"4",y2:"9"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"4",y2:"14"},child:[]}]})(a)}function cn(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"ellipse",attr:{cx:"12",cy:"5",rx:"9",ry:"3"},child:[]},{tag:"path",attr:{d:"M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"},child:[]},{tag:"path",attr:{d:"M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"},child:[]}]})(a)}function Ef(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 20h9"},child:[]},{tag:"path",attr:{d:"M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"},child:[]}]})(a)}function Pf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"},child:[]}]})(a)}function Ru(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"6",y1:"3",x2:"6",y2:"15"},child:[]},{tag:"circle",attr:{cx:"18",cy:"6",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"18",r:"3"},child:[]},{tag:"path",attr:{d:"M18 9a9 9 0 0 1-9 9"},child:[]}]})(a)}function Du(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M6 21V9a9 9 0 0 0 9 9"},child:[]}]})(a)}function _u(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"18",cy:"18",r:"3"},child:[]},{tag:"circle",attr:{cx:"6",cy:"6",r:"3"},child:[]},{tag:"path",attr:{d:"M13 6h3a2 2 0 0 1 2 2v7"},child:[]},{tag:"line",attr:{x1:"6",y1:"9",x2:"6",y2:"21"},child:[]}]})(a)}function If(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"},child:[]}]})(a)}function dn(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"2",y1:"12",x2:"22",y2:"12"},child:[]},{tag:"path",attr:{d:"M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"},child:[]}]})(a)}function rl(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"3",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"14",y:"14",width:"7",height:"7"},child:[]},{tag:"rect",attr:{x:"3",y:"14",width:"7",height:"7"},child:[]}]})(a)}function Ou(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"22",y1:"12",x2:"2",y2:"12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]},{tag:"line",attr:{x1:"6",y1:"16",x2:"6.01",y2:"16"},child:[]},{tag:"line",attr:{x1:"10",y1:"16",x2:"10.01",y2:"16"},child:[]}]})(a)}function Lf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"9",x2:"20",y2:"9"},child:[]},{tag:"line",attr:{x1:"4",y1:"15",x2:"20",y2:"15"},child:[]},{tag:"line",attr:{x1:"10",y1:"3",x2:"8",y2:"21"},child:[]},{tag:"line",attr:{x1:"16",y1:"3",x2:"14",y2:"21"},child:[]}]})(a)}function zf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"},child:[]}]})(a)}function Mf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"22 12 16 12 14 15 10 15 8 12 2 12"},child:[]},{tag:"path",attr:{d:"M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"},child:[]}]})(a)}function tt(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"line",attr:{x1:"12",y1:"16",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12.01",y2:"8"},child:[]}]})(a)}function Af(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"},child:[]}]})(a)}function Lt(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 2 7 12 12 22 7 12 2"},child:[]},{tag:"polyline",attr:{points:"2 17 12 22 22 17"},child:[]},{tag:"polyline",attr:{points:"2 12 12 17 22 12"},child:[]}]})(a)}function Rf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"},child:[]},{tag:"rect",attr:{x:"2",y:"9",width:"4",height:"12"},child:[]},{tag:"circle",attr:{cx:"4",cy:"4",r:"2"},child:[]}]})(a)}function xn(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"3",y:"11",width:"18",height:"11",rx:"2",ry:"2"},child:[]},{tag:"path",attr:{d:"M7 11V7a5 5 0 0 1 10 0v4"},child:[]}]})(a)}function Df(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"},child:[]},{tag:"polyline",attr:{points:"22,6 12,13 2,6"},child:[]}]})(a)}function _f(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"},child:[]}]})(a)}function Of(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"10"},child:[]},{tag:"polygon",attr:{points:"10 8 16 12 10 16 10 8"},child:[]}]})(a)}function Bf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 4 23 10 17 10"},child:[]},{tag:"polyline",attr:{points:"1 20 1 14 7 14"},child:[]},{tag:"path",attr:{d:"M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"},child:[]}]})(a)}function nl(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"17 1 21 5 17 9"},child:[]},{tag:"path",attr:{d:"M3 11V9a4 4 0 0 1 4-4h14"},child:[]},{tag:"polyline",attr:{points:"7 23 3 19 7 15"},child:[]},{tag:"path",attr:{d:"M21 13v2a4 4 0 0 1-4 4H3"},child:[]}]})(a)}function Ff(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"11",cy:"11",r:"8"},child:[]},{tag:"line",attr:{x1:"21",y1:"21",x2:"16.65",y2:"16.65"},child:[]}]})(a)}function Wf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"rect",attr:{x:"2",y:"2",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"rect",attr:{x:"2",y:"14",width:"20",height:"8",rx:"2",ry:"2"},child:[]},{tag:"line",attr:{x1:"6",y1:"6",x2:"6.01",y2:"6"},child:[]},{tag:"line",attr:{x1:"6",y1:"18",x2:"6.01",y2:"18"},child:[]}]})(a)}function Uf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"3"},child:[]},{tag:"path",attr:{d:"M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"},child:[]}]})(a)}function Ot(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"},child:[]}]})(a)}function Di(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"16 3 21 3 21 8"},child:[]},{tag:"line",attr:{x1:"4",y1:"20",x2:"21",y2:"3"},child:[]},{tag:"polyline",attr:{points:"21 16 21 21 16 21"},child:[]},{tag:"line",attr:{x1:"15",y1:"15",x2:"21",y2:"21"},child:[]},{tag:"line",attr:{x1:"4",y1:"4",x2:"9",y2:"9"},child:[]}]})(a)}function Hf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"4",y1:"21",x2:"4",y2:"14"},child:[]},{tag:"line",attr:{x1:"4",y1:"10",x2:"4",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"12"},child:[]},{tag:"line",attr:{x1:"12",y1:"8",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"20",y1:"21",x2:"20",y2:"16"},child:[]},{tag:"line",attr:{x1:"20",y1:"12",x2:"20",y2:"3"},child:[]},{tag:"line",attr:{x1:"1",y1:"14",x2:"7",y2:"14"},child:[]},{tag:"line",attr:{x1:"9",y1:"8",x2:"15",y2:"8"},child:[]},{tag:"line",attr:{x1:"17",y1:"16",x2:"23",y2:"16"},child:[]}]})(a)}function Gf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"},child:[]}]})(a)}function Vf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"circle",attr:{cx:"12",cy:"12",r:"5"},child:[]},{tag:"line",attr:{x1:"12",y1:"1",x2:"12",y2:"3"},child:[]},{tag:"line",attr:{x1:"12",y1:"21",x2:"12",y2:"23"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"4.22",x2:"5.64",y2:"5.64"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"18.36",x2:"19.78",y2:"19.78"},child:[]},{tag:"line",attr:{x1:"1",y1:"12",x2:"3",y2:"12"},child:[]},{tag:"line",attr:{x1:"21",y1:"12",x2:"23",y2:"12"},child:[]},{tag:"line",attr:{x1:"4.22",y1:"19.78",x2:"5.64",y2:"18.36"},child:[]},{tag:"line",attr:{x1:"18.36",y1:"5.64",x2:"19.78",y2:"4.22"},child:[]}]})(a)}function Yf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"},child:[]}]})(a)}function _i(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polyline",attr:{points:"23 6 13.5 15.5 8.5 10.5 1 18"},child:[]},{tag:"polyline",attr:{points:"17 6 23 6 23 12"},child:[]}]})(a)}function Qf(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"8.5",cy:"7",r:"4"},child:[]},{tag:"polyline",attr:{points:"17 11 19 13 23 9"},child:[]}]})(a)}function $f(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"},child:[]},{tag:"circle",attr:{cx:"9",cy:"7",r:"4"},child:[]},{tag:"path",attr:{d:"M23 21v-2a4 4 0 0 0-3-3.87"},child:[]},{tag:"path",attr:{d:"M16 3.13a4 4 0 0 1 0 7.75"},child:[]}]})(a)}function Bu(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M5 12.55a11 11 0 0 1 14.08 0"},child:[]},{tag:"path",attr:{d:"M1.42 9a16 16 0 0 1 21.16 0"},child:[]},{tag:"path",attr:{d:"M8.53 16.11a6 6 0 0 1 6.95 0"},child:[]},{tag:"line",attr:{x1:"12",y1:"20",x2:"12.01",y2:"20"},child:[]}]})(a)}function Xt(a){return W({attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2"},child:[]}]})(a)}var et=function(){return et=Object.assign||function(d){for(var l,f=1,u=arguments.length;f<u;f++){l=arguments[f];for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&(d[p]=l[p])}return d},et.apply(this,arguments)};function Pi(a,d,l){if(l||arguments.length===2)for(var f=0,u=d.length,p;f<u;f++)(p||!(f in d))&&(p||(p=Array.prototype.slice.call(d,0,f)),p[f]=d[f]);return a.concat(p||Array.prototype.slice.call(d))}var be="-ms-",io="-moz-",fe="-webkit-",Fu="comm",Oi="rule",ol="decl",qf="@import",Wu="@keyframes",Kf="@layer",Uu=Math.abs,il=String.fromCharCode,Qs=Object.assign;function Xf(a,d){return De(a,0)^45?(((d<<2^De(a,0))<<2^De(a,1))<<2^De(a,2))<<2^De(a,3):0}function Hu(a){return a.trim()}function qt(a,d){return(a=d.exec(a))?a[0]:a}function J(a,d,l){return a.replace(d,l)}function wi(a,d,l){return a.indexOf(d,l)}function De(a,d){return a.charCodeAt(d)|0}function un(a,d,l){return a.slice(d,l)}function _t(a){return a.length}function Gu(a){return a.length}function oo(a,d){return d.push(a),a}function Jf(a,d){return a.map(d).join("")}function mu(a,d){return a.filter(function(l){return!qt(l,d)})}var Bi=1,pn=1,Vu=0,vt=0,Pe=0,gn="";function Fi(a,d,l,f,u,p,v,j){return{value:a,root:d,parent:l,type:f,props:u,children:p,line:Bi,column:pn,length:v,return:"",siblings:j}}function vr(a,d){return Qs(Fi("",null,null,"",null,null,0,a.siblings),a,{length:-a.length},d)}function sn(a){for(;a.root;)a=vr(a.root,{children:[a]});oo(a,a.siblings)}function Zf(){return Pe}function eh(){return Pe=vt>0?De(gn,--vt):0,pn--,Pe===10&&(pn=1,Bi--),Pe}function It(){return Pe=vt<Vu?De(gn,vt++):0,pn++,Pe===10&&(pn=1,Bi++),Pe}function Mr(){return De(gn,vt)}function ki(){return vt}function Wi(a,d){return un(gn,a,d)}function $s(a){switch(a){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function th(a){return Bi=pn=1,Vu=_t(gn=a),vt=0,[]}function rh(a){return gn="",a}function Us(a){return Hu(Wi(vt-1,qs(a===91?a+2:a===40?a+1:a)))}function nh(a){for(;(Pe=Mr())&&Pe<33;)It();return $s(a)>2||$s(Pe)>3?"":" "}function oh(a,d){for(;--d&&It()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return Wi(a,ki()+(d<6&&Mr()==32&&It()==32))}function qs(a){for(;It();)switch(Pe){case a:return vt;case 34:case 39:a!==34&&a!==39&&qs(Pe);break;case 40:a===41&&qs(a);break;case 92:It();break}return vt}function ih(a,d){for(;It()&&a+Pe!==57;)if(a+Pe===84&&Mr()===47)break;return"/*"+Wi(d,vt-1)+"*"+il(a===47?a:It())}function ah(a){for(;!$s(Mr());)It();return Wi(a,vt)}function sh(a){return rh(ji("",null,null,null,[""],a=th(a),0,[0],a))}function ji(a,d,l,f,u,p,v,j,k){for(var Y=0,G=0,_=v,O=0,Q=0,ne=0,V=1,K=1,me=1,se=0,oe="",Z=u,ue=p,$=f,U=oe;K;)switch(ne=se,se=It()){case 40:if(ne!=108&&De(U,_-1)==58){wi(U+=J(Us(se),"&","&\f"),"&\f",Uu(Y?j[Y-1]:0))!=-1&&(me=-1);break}case 34:case 39:case 91:U+=Us(se);break;case 9:case 10:case 13:case 32:U+=nh(ne);break;case 92:U+=oh(ki()-1,7);continue;case 47:switch(Mr()){case 42:case 47:oo(lh(ih(It(),ki()),d,l,k),k);break;default:U+="/"}break;case 123*V:j[Y++]=_t(U)*me;case 125*V:case 59:case 0:switch(se){case 0:case 125:K=0;case 59+G:me==-1&&(U=J(U,/\f/g,"")),Q>0&&_t(U)-_&&oo(Q>32?hu(U+";",f,l,_-1,k):hu(J(U," ","")+";",f,l,_-2,k),k);break;case 59:U+=";";default:if(oo($=fu(U,d,l,Y,G,u,j,oe,Z=[],ue=[],_,p),p),se===123)if(G===0)ji(U,d,$,$,Z,p,_,j,ue);else switch(O===99&&De(U,3)===110?100:O){case 100:case 108:case 109:case 115:ji(a,$,$,f&&oo(fu(a,$,$,0,0,u,j,oe,u,Z=[],_,ue),ue),u,ue,_,j,f?Z:ue);break;default:ji(U,$,$,$,[""],ue,0,j,ue)}}Y=G=Q=0,V=me=1,oe=U="",_=v;break;case 58:_=1+_t(U),Q=ne;default:if(V<1){if(se==123)--V;else if(se==125&&V++==0&&eh()==125)continue}switch(U+=il(se),se*V){case 38:me=G>0?1:(U+="\f",-1);break;case 44:j[Y++]=(_t(U)-1)*me,me=1;break;case 64:Mr()===45&&(U+=Us(It())),O=Mr(),G=_=_t(oe=U+=ah(ki())),se++;break;case 45:ne===45&&_t(U)==2&&(V=0)}}return p}function fu(a,d,l,f,u,p,v,j,k,Y,G,_){for(var O=u-1,Q=u===0?p:[""],ne=Gu(Q),V=0,K=0,me=0;V<f;++V)for(var se=0,oe=un(a,O+1,O=Uu(K=v[V])),Z=a;se<ne;++se)(Z=Hu(K>0?Q[se]+" "+oe:J(oe,/&\f/g,Q[se])))&&(k[me++]=Z);return Fi(a,d,l,u===0?Oi:j,k,Y,G,_)}function lh(a,d,l,f){return Fi(a,d,l,Fu,il(Zf()),un(a,2,-2),0,f)}function hu(a,d,l,f,u){return Fi(a,d,l,ol,un(a,0,f),un(a,f+1,-1),f,u)}function Yu(a,d,l){switch(Xf(a,d)){case 5103:return fe+"print-"+a+a;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return fe+a+a;case 4789:return io+a+a;case 5349:case 4246:case 4810:case 6968:case 2756:return fe+a+io+a+be+a+a;case 5936:switch(De(a,d+11)){case 114:return fe+a+be+J(a,/[svh]\w+-[tblr]{2}/,"tb")+a;case 108:return fe+a+be+J(a,/[svh]\w+-[tblr]{2}/,"tb-rl")+a;case 45:return fe+a+be+J(a,/[svh]\w+-[tblr]{2}/,"lr")+a}case 6828:case 4268:case 2903:return fe+a+be+a+a;case 6165:return fe+a+be+"flex-"+a+a;case 5187:return fe+a+J(a,/(\w+).+(:[^]+)/,fe+"box-$1$2"+be+"flex-$1$2")+a;case 5443:return fe+a+be+"flex-item-"+J(a,/flex-|-self/g,"")+(qt(a,/flex-|baseline/)?"":be+"grid-row-"+J(a,/flex-|-self/g,""))+a;case 4675:return fe+a+be+"flex-line-pack"+J(a,/align-content|flex-|-self/g,"")+a;case 5548:return fe+a+be+J(a,"shrink","negative")+a;case 5292:return fe+a+be+J(a,"basis","preferred-size")+a;case 6060:return fe+"box-"+J(a,"-grow","")+fe+a+be+J(a,"grow","positive")+a;case 4554:return fe+J(a,/([^-])(transform)/g,"$1"+fe+"$2")+a;case 6187:return J(J(J(a,/(zoom-|grab)/,fe+"$1"),/(image-set)/,fe+"$1"),a,"")+a;case 5495:case 3959:return J(a,/(image-set\([^]*)/,fe+"$1$`$1");case 4968:return J(J(a,/(.+:)(flex-)?(.*)/,fe+"box-pack:$3"+be+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+fe+a+a;case 4200:if(!qt(a,/flex-|baseline/))return be+"grid-column-align"+un(a,d)+a;break;case 2592:case 3360:return be+J(a,"template-","")+a;case 4384:case 3616:return l&&l.some(function(f,u){return d=u,qt(f.props,/grid-\w+-end/)})?~wi(a+(l=l[d].value),"span",0)?a:be+J(a,"-start","")+a+be+"grid-row-span:"+(~wi(l,"span",0)?qt(l,/\d+/):+qt(l,/\d+/)-+qt(a,/\d+/))+";":be+J(a,"-start","")+a;case 4896:case 4128:return l&&l.some(function(f){return qt(f.props,/grid-\w+-start/)})?a:be+J(J(a,"-end","-span"),"span ","")+a;case 4095:case 3583:case 4068:case 2532:return J(a,/(.+)-inline(.+)/,fe+"$1$2")+a;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(a)-1-d>6)switch(De(a,d+1)){case 109:if(De(a,d+4)!==45)break;case 102:return J(a,/(.+:)(.+)-([^]+)/,"$1"+fe+"$2-$3$1"+io+(De(a,d+3)==108?"$3":"$2-$3"))+a;case 115:return~wi(a,"stretch",0)?Yu(J(a,"stretch","fill-available"),d,l)+a:a}break;case 5152:case 5920:return J(a,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(f,u,p,v,j,k,Y){return be+u+":"+p+Y+(v?be+u+"-span:"+(j?k:+k-+p)+Y:"")+a});case 4949:if(De(a,d+6)===121)return J(a,":",":"+fe)+a;break;case 6444:switch(De(a,De(a,14)===45?18:11)){case 120:return J(a,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+fe+(De(a,14)===45?"inline-":"")+"box$3$1"+fe+"$2$3$1"+be+"$2box$3")+a;case 100:return J(a,":",":"+be)+a}break;case 5719:case 2647:case 2135:case 3927:case 2391:return J(a,"scroll-","scroll-snap-")+a}return a}function Ii(a,d){for(var l="",f=0;f<a.length;f++)l+=d(a[f],f,a,d)||"";return l}function ch(a,d,l,f){switch(a.type){case Kf:if(a.children.length)break;case qf:case ol:return a.return=a.return||a.value;case Fu:return"";case Wu:return a.return=a.value+"{"+Ii(a.children,f)+"}";case Oi:if(!_t(a.value=a.props.join(",")))return""}return _t(l=Ii(a.children,f))?a.return=a.value+"{"+l+"}":""}function dh(a){var d=Gu(a);return function(l,f,u,p){for(var v="",j=0;j<d;j++)v+=a[j](l,f,u,p)||"";return v}}function uh(a){return function(d){d.root||(d=d.return)&&a(d)}}function ph(a,d,l,f){if(a.length>-1&&!a.return)switch(a.type){case ol:a.return=Yu(a.value,a.length,l);return;case Wu:return Ii([vr(a,{value:J(a.value,"@","@"+fe)})],f);case Oi:if(a.length)return Jf(l=a.props,function(u){switch(qt(u,f=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":sn(vr(a,{props:[J(u,/:(read-\w+)/,":"+io+"$1")]})),sn(vr(a,{props:[u]})),Qs(a,{props:mu(l,f)});break;case"::placeholder":sn(vr(a,{props:[J(u,/:(plac\w+)/,":"+fe+"input-$1")]})),sn(vr(a,{props:[J(u,/:(plac\w+)/,":"+io+"$1")]})),sn(vr(a,{props:[J(u,/:(plac\w+)/,be+"input-$1")]})),sn(vr(a,{props:[u]})),Qs(a,{props:mu(l,f)});break}return""})}}var mh={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},lt={},mn=typeof process!="undefined"&&lt!==void 0&&(lt.REACT_APP_SC_ATTR||lt.SC_ATTR)||"data-styled",Qu="active",$u="data-styled-version",Ui="6.1.18",al=`/*!sc*/
`,Li=typeof window!="undefined"&&typeof document!="undefined",fh=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process!="undefined"&&lt!==void 0&&lt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&lt.REACT_APP_SC_DISABLE_SPEEDY!==""?lt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&lt.REACT_APP_SC_DISABLE_SPEEDY:typeof process!="undefined"&&lt!==void 0&&lt.SC_DISABLE_SPEEDY!==void 0&&lt.SC_DISABLE_SPEEDY!==""&&lt.SC_DISABLE_SPEEDY!=="false"&&lt.SC_DISABLE_SPEEDY),Hi=Object.freeze([]),fn=Object.freeze({});function hh(a,d,l){return l===void 0&&(l=fn),a.theme!==l.theme&&a.theme||d||l.theme}var qu=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),xh=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,gh=/(^-|-$)/g;function xu(a){return a.replace(xh,"-").replace(gh,"")}var vh=/(a)(d)/gi,yi=52,gu=function(a){return String.fromCharCode(a+(a>25?39:97))};function Ks(a){var d,l="";for(d=Math.abs(a);d>yi;d=d/yi|0)l=gu(d%yi)+l;return(gu(d%yi)+l).replace(vh,"$1-$2")}var Hs,Ku=5381,ln=function(a,d){for(var l=d.length;l;)a=33*a^d.charCodeAt(--l);return a},Xu=function(a){return ln(Ku,a)};function yh(a){return Ks(Xu(a)>>>0)}function bh(a){return a.displayName||a.name||"Component"}function Gs(a){return typeof a=="string"&&!0}var Ju=typeof Symbol=="function"&&Symbol.for,Zu=Ju?Symbol.for("react.memo"):60115,wh=Ju?Symbol.for("react.forward_ref"):60112,kh={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},jh={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ep={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Nh=((Hs={})[wh]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Hs[Zu]=ep,Hs);function vu(a){return("type"in(d=a)&&d.type.$$typeof)===Zu?ep:"$$typeof"in a?Nh[a.$$typeof]:kh;var d}var Sh=Object.defineProperty,Ch=Object.getOwnPropertyNames,yu=Object.getOwnPropertySymbols,Th=Object.getOwnPropertyDescriptor,Eh=Object.getPrototypeOf,bu=Object.prototype;function tp(a,d,l){if(typeof d!="string"){if(bu){var f=Eh(d);f&&f!==bu&&tp(a,f,l)}var u=Ch(d);yu&&(u=u.concat(yu(d)));for(var p=vu(a),v=vu(d),j=0;j<u.length;++j){var k=u[j];if(!(k in jh||l&&l[k]||v&&k in v||p&&k in p)){var Y=Th(d,k);try{Sh(a,k,Y)}catch{}}}}return a}function hn(a){return typeof a=="function"}function sl(a){return typeof a=="object"&&"styledComponentId"in a}function zr(a,d){return a&&d?"".concat(a," ").concat(d):a||d||""}function wu(a,d){if(a.length===0)return"";for(var l=a[0],f=1;f<a.length;f++)l+=a[f];return l}function ao(a){return a!==null&&typeof a=="object"&&a.constructor.name===Object.name&&!("props"in a&&a.$$typeof)}function Xs(a,d,l){if(l===void 0&&(l=!1),!l&&!ao(a)&&!Array.isArray(a))return d;if(Array.isArray(d))for(var f=0;f<d.length;f++)a[f]=Xs(a[f],d[f]);else if(ao(d))for(var f in d)a[f]=Xs(a[f],d[f]);return a}function ll(a,d){Object.defineProperty(a,"toString",{value:d})}function so(a){for(var d=[],l=1;l<arguments.length;l++)d[l-1]=arguments[l];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a," for more information.").concat(d.length>0?" Args: ".concat(d.join(", ")):""))}var Ph=(function(){function a(d){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=d}return a.prototype.indexOfGroup=function(d){for(var l=0,f=0;f<d;f++)l+=this.groupSizes[f];return l},a.prototype.insertRules=function(d,l){if(d>=this.groupSizes.length){for(var f=this.groupSizes,u=f.length,p=u;d>=p;)if((p<<=1)<0)throw so(16,"".concat(d));this.groupSizes=new Uint32Array(p),this.groupSizes.set(f),this.length=p;for(var v=u;v<p;v++)this.groupSizes[v]=0}for(var j=this.indexOfGroup(d+1),k=(v=0,l.length);v<k;v++)this.tag.insertRule(j,l[v])&&(this.groupSizes[d]++,j++)},a.prototype.clearGroup=function(d){if(d<this.length){var l=this.groupSizes[d],f=this.indexOfGroup(d),u=f+l;this.groupSizes[d]=0;for(var p=f;p<u;p++)this.tag.deleteRule(f)}},a.prototype.getGroup=function(d){var l="";if(d>=this.length||this.groupSizes[d]===0)return l;for(var f=this.groupSizes[d],u=this.indexOfGroup(d),p=u+f,v=u;v<p;v++)l+="".concat(this.tag.getRule(v)).concat(al);return l},a})(),Ni=new Map,zi=new Map,Si=1,bi=function(a){if(Ni.has(a))return Ni.get(a);for(;zi.has(Si);)Si++;var d=Si++;return Ni.set(a,d),zi.set(d,a),d},Ih=function(a,d){Si=d+1,Ni.set(a,d),zi.set(d,a)},Lh="style[".concat(mn,"][").concat($u,'="').concat(Ui,'"]'),zh=new RegExp("^".concat(mn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),Mh=function(a,d,l){for(var f,u=l.split(","),p=0,v=u.length;p<v;p++)(f=u[p])&&a.registerName(d,f)},Ah=function(a,d){for(var l,f=((l=d.textContent)!==null&&l!==void 0?l:"").split(al),u=[],p=0,v=f.length;p<v;p++){var j=f[p].trim();if(j){var k=j.match(zh);if(k){var Y=0|parseInt(k[1],10),G=k[2];Y!==0&&(Ih(G,Y),Mh(a,G,k[3]),a.getTag().insertRules(Y,u)),u.length=0}else u.push(j)}}},ku=function(a){for(var d=document.querySelectorAll(Lh),l=0,f=d.length;l<f;l++){var u=d[l];u&&u.getAttribute(mn)!==Qu&&(Ah(a,u),u.parentNode&&u.parentNode.removeChild(u))}};function Rh(){return typeof __webpack_nonce__!="undefined"?__webpack_nonce__:null}var rp=function(a){var d=document.head,l=a||d,f=document.createElement("style"),u=(function(j){var k=Array.from(j.querySelectorAll("style[".concat(mn,"]")));return k[k.length-1]})(l),p=u!==void 0?u.nextSibling:null;f.setAttribute(mn,Qu),f.setAttribute($u,Ui);var v=Rh();return v&&f.setAttribute("nonce",v),l.insertBefore(f,p),f},Dh=(function(){function a(d){this.element=rp(d),this.element.appendChild(document.createTextNode("")),this.sheet=(function(l){if(l.sheet)return l.sheet;for(var f=document.styleSheets,u=0,p=f.length;u<p;u++){var v=f[u];if(v.ownerNode===l)return v}throw so(17)})(this.element),this.length=0}return a.prototype.insertRule=function(d,l){try{return this.sheet.insertRule(l,d),this.length++,!0}catch{return!1}},a.prototype.deleteRule=function(d){this.sheet.deleteRule(d),this.length--},a.prototype.getRule=function(d){var l=this.sheet.cssRules[d];return l&&l.cssText?l.cssText:""},a})(),_h=(function(){function a(d){this.element=rp(d),this.nodes=this.element.childNodes,this.length=0}return a.prototype.insertRule=function(d,l){if(d<=this.length&&d>=0){var f=document.createTextNode(l);return this.element.insertBefore(f,this.nodes[d]||null),this.length++,!0}return!1},a.prototype.deleteRule=function(d){this.element.removeChild(this.nodes[d]),this.length--},a.prototype.getRule=function(d){return d<this.length?this.nodes[d].textContent:""},a})(),Oh=(function(){function a(d){this.rules=[],this.length=0}return a.prototype.insertRule=function(d,l){return d<=this.length&&(this.rules.splice(d,0,l),this.length++,!0)},a.prototype.deleteRule=function(d){this.rules.splice(d,1),this.length--},a.prototype.getRule=function(d){return d<this.length?this.rules[d]:""},a})(),ju=Li,Bh={isServer:!Li,useCSSOMInjection:!fh},np=(function(){function a(d,l,f){d===void 0&&(d=fn),l===void 0&&(l={});var u=this;this.options=et(et({},Bh),d),this.gs=l,this.names=new Map(f),this.server=!!d.isServer,!this.server&&Li&&ju&&(ju=!1,ku(this)),ll(this,function(){return(function(p){for(var v=p.getTag(),j=v.length,k="",Y=function(_){var O=(function(me){return zi.get(me)})(_);if(O===void 0)return"continue";var Q=p.names.get(O),ne=v.getGroup(_);if(Q===void 0||!Q.size||ne.length===0)return"continue";var V="".concat(mn,".g").concat(_,'[id="').concat(O,'"]'),K="";Q!==void 0&&Q.forEach(function(me){me.length>0&&(K+="".concat(me,","))}),k+="".concat(ne).concat(V,'{content:"').concat(K,'"}').concat(al)},G=0;G<j;G++)Y(G);return k})(u)})}return a.registerId=function(d){return bi(d)},a.prototype.rehydrate=function(){!this.server&&Li&&ku(this)},a.prototype.reconstructWithOptions=function(d,l){return l===void 0&&(l=!0),new a(et(et({},this.options),d),this.gs,l&&this.names||void 0)},a.prototype.allocateGSInstance=function(d){return this.gs[d]=(this.gs[d]||0)+1},a.prototype.getTag=function(){return this.tag||(this.tag=(d=(function(l){var f=l.useCSSOMInjection,u=l.target;return l.isServer?new Oh(u):f?new Dh(u):new _h(u)})(this.options),new Ph(d)));var d},a.prototype.hasNameForId=function(d,l){return this.names.has(d)&&this.names.get(d).has(l)},a.prototype.registerName=function(d,l){if(bi(d),this.names.has(d))this.names.get(d).add(l);else{var f=new Set;f.add(l),this.names.set(d,f)}},a.prototype.insertRules=function(d,l,f){this.registerName(d,l),this.getTag().insertRules(bi(d),f)},a.prototype.clearNames=function(d){this.names.has(d)&&this.names.get(d).clear()},a.prototype.clearRules=function(d){this.getTag().clearGroup(bi(d)),this.clearNames(d)},a.prototype.clearTag=function(){this.tag=void 0},a})(),Fh=/&/g,Wh=/^\s*\/\/.*$/gm;function op(a,d){return a.map(function(l){return l.type==="rule"&&(l.value="".concat(d," ").concat(l.value),l.value=l.value.replaceAll(",",",".concat(d," ")),l.props=l.props.map(function(f){return"".concat(d," ").concat(f)})),Array.isArray(l.children)&&l.type!=="@keyframes"&&(l.children=op(l.children,d)),l})}function Uh(a){var d,l,f,u=fn,p=u.options,v=p===void 0?fn:p,j=u.plugins,k=j===void 0?Hi:j,Y=function(O,Q,ne){return ne.startsWith(l)&&ne.endsWith(l)&&ne.replaceAll(l,"").length>0?".".concat(d):O},G=k.slice();G.push(function(O){O.type===Oi&&O.value.includes("&")&&(O.props[0]=O.props[0].replace(Fh,l).replace(f,Y))}),v.prefix&&G.push(ph),G.push(ch);var _=function(O,Q,ne,V){Q===void 0&&(Q=""),ne===void 0&&(ne=""),V===void 0&&(V="&"),d=V,l=Q,f=new RegExp("\\".concat(l,"\\b"),"g");var K=O.replace(Wh,""),me=sh(ne||Q?"".concat(ne," ").concat(Q," { ").concat(K," }"):K);v.namespace&&(me=op(me,v.namespace));var se=[];return Ii(me,dh(G.concat(uh(function(oe){return se.push(oe)})))),se};return _.hash=k.length?k.reduce(function(O,Q){return Q.name||so(15),ln(O,Q.name)},Ku).toString():"",_}var Hh=new np,Js=Uh(),ip=gt.createContext({shouldForwardProp:void 0,styleSheet:Hh,stylis:Js});ip.Consumer;gt.createContext(void 0);function Nu(){return ae.useContext(ip)}var Gh=(function(){function a(d,l){var f=this;this.inject=function(u,p){p===void 0&&(p=Js);var v=f.name+p.hash;u.hasNameForId(f.id,v)||u.insertRules(f.id,v,p(f.rules,v,"@keyframes"))},this.name=d,this.id="sc-keyframes-".concat(d),this.rules=l,ll(this,function(){throw so(12,String(f.name))})}return a.prototype.getName=function(d){return d===void 0&&(d=Js),this.name+d.hash},a})(),Vh=function(a){return a>="A"&&a<="Z"};function Su(a){for(var d="",l=0;l<a.length;l++){var f=a[l];if(l===1&&f==="-"&&a[0]==="-")return a;Vh(f)?d+="-"+f.toLowerCase():d+=f}return d.startsWith("ms-")?"-"+d:d}var ap=function(a){return a==null||a===!1||a===""},sp=function(a){var d,l,f=[];for(var u in a){var p=a[u];a.hasOwnProperty(u)&&!ap(p)&&(Array.isArray(p)&&p.isCss||hn(p)?f.push("".concat(Su(u),":"),p,";"):ao(p)?f.push.apply(f,Pi(Pi(["".concat(u," {")],sp(p),!1),["}"],!1)):f.push("".concat(Su(u),": ").concat((d=u,(l=p)==null||typeof l=="boolean"||l===""?"":typeof l!="number"||l===0||d in mh||d.startsWith("--")?String(l).trim():"".concat(l,"px")),";")))}return f};function Ar(a,d,l,f){if(ap(a))return[];if(sl(a))return[".".concat(a.styledComponentId)];if(hn(a)){if(!hn(p=a)||p.prototype&&p.prototype.isReactComponent||!d)return[a];var u=a(d);return Ar(u,d,l,f)}var p;return a instanceof Gh?l?(a.inject(l,f),[a.getName(f)]):[a]:ao(a)?sp(a):Array.isArray(a)?Array.prototype.concat.apply(Hi,a.map(function(v){return Ar(v,d,l,f)})):[a.toString()]}function Yh(a){for(var d=0;d<a.length;d+=1){var l=a[d];if(hn(l)&&!sl(l))return!1}return!0}var Qh=Xu(Ui),$h=(function(){function a(d,l,f){this.rules=d,this.staticRulesId="",this.isStatic=(f===void 0||f.isStatic)&&Yh(d),this.componentId=l,this.baseHash=ln(Qh,l),this.baseStyle=f,np.registerId(l)}return a.prototype.generateAndInjectStyles=function(d,l,f){var u=this.baseStyle?this.baseStyle.generateAndInjectStyles(d,l,f):"";if(this.isStatic&&!f.hash)if(this.staticRulesId&&l.hasNameForId(this.componentId,this.staticRulesId))u=zr(u,this.staticRulesId);else{var p=wu(Ar(this.rules,d,l,f)),v=Ks(ln(this.baseHash,p)>>>0);if(!l.hasNameForId(this.componentId,v)){var j=f(p,".".concat(v),void 0,this.componentId);l.insertRules(this.componentId,v,j)}u=zr(u,v),this.staticRulesId=v}else{for(var k=ln(this.baseHash,f.hash),Y="",G=0;G<this.rules.length;G++){var _=this.rules[G];if(typeof _=="string")Y+=_;else if(_){var O=wu(Ar(_,d,l,f));k=ln(k,O+G),Y+=O}}if(Y){var Q=Ks(k>>>0);l.hasNameForId(this.componentId,Q)||l.insertRules(this.componentId,Q,f(Y,".".concat(Q),void 0,this.componentId)),u=zr(u,Q)}}return u},a})(),lp=gt.createContext(void 0);lp.Consumer;var Vs={};function qh(a,d,l){var f=sl(a),u=a,p=!Gs(a),v=d.attrs,j=v===void 0?Hi:v,k=d.componentId,Y=k===void 0?(function(Z,ue){var $=typeof Z!="string"?"sc":xu(Z);Vs[$]=(Vs[$]||0)+1;var U="".concat($,"-").concat(yh(Ui+$+Vs[$]));return ue?"".concat(ue,"-").concat(U):U})(d.displayName,d.parentComponentId):k,G=d.displayName,_=G===void 0?(function(Z){return Gs(Z)?"styled.".concat(Z):"Styled(".concat(bh(Z),")")})(a):G,O=d.displayName&&d.componentId?"".concat(xu(d.displayName),"-").concat(d.componentId):d.componentId||Y,Q=f&&u.attrs?u.attrs.concat(j).filter(Boolean):j,ne=d.shouldForwardProp;if(f&&u.shouldForwardProp){var V=u.shouldForwardProp;if(d.shouldForwardProp){var K=d.shouldForwardProp;ne=function(Z,ue){return V(Z,ue)&&K(Z,ue)}}else ne=V}var me=new $h(l,O,f?u.componentStyle:void 0);function se(Z,ue){return(function($,U,Ie){var rt=$.attrs,wt=$.componentStyle,Bt=$.defaultProps,ct=$.foldedComponentIds,Ve=$.styledComponentId,nt=$.target,dt=gt.useContext(lp),Fe=Nu(),xe=$.shouldForwardProp||Fe.shouldForwardProp,P=hh(U,dt,Bt)||fn,D=(function(re,ee,pe){for(var ie,ce=et(et({},ee),{className:void 0,theme:pe}),_e=0;_e<re.length;_e+=1){var Ft=hn(ie=re[_e])?ie(ce):ie;for(var kt in Ft)ce[kt]=kt==="className"?zr(ce[kt],Ft[kt]):kt==="style"?et(et({},ce[kt]),Ft[kt]):Ft[kt]}return ee.className&&(ce.className=zr(ce.className,ee.className)),ce})(rt,U,P),I=D.as||nt,g={};for(var N in D)D[N]===void 0||N[0]==="$"||N==="as"||N==="theme"&&D.theme===P||(N==="forwardedAs"?g.as=D.forwardedAs:xe&&!xe(N,I)||(g[N]=D[N]));var q=(function(re,ee){var pe=Nu(),ie=re.generateAndInjectStyles(ee,pe.styleSheet,pe.stylis);return ie})(wt,D),X=zr(ct,Ve);return q&&(X+=" "+q),D.className&&(X+=" "+D.className),g[Gs(I)&&!qu.has(I)?"class":"className"]=X,Ie&&(g.ref=Ie),ae.createElement(I,g)})(oe,Z,ue)}se.displayName=_;var oe=gt.forwardRef(se);return oe.attrs=Q,oe.componentStyle=me,oe.displayName=_,oe.shouldForwardProp=ne,oe.foldedComponentIds=f?zr(u.foldedComponentIds,u.styledComponentId):"",oe.styledComponentId=O,oe.target=f?u.target:a,Object.defineProperty(oe,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(Z){this._foldedDefaultProps=f?(function(ue){for(var $=[],U=1;U<arguments.length;U++)$[U-1]=arguments[U];for(var Ie=0,rt=$;Ie<rt.length;Ie++)Xs(ue,rt[Ie],!0);return ue})({},u.defaultProps,Z):Z}}),ll(oe,function(){return".".concat(oe.styledComponentId)}),p&&tp(oe,a,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),oe}function Cu(a,d){for(var l=[a[0]],f=0,u=d.length;f<u;f+=1)l.push(d[f],a[f+1]);return l}var Tu=function(a){return Object.assign(a,{isCss:!0})};function Kh(a){for(var d=[],l=1;l<arguments.length;l++)d[l-1]=arguments[l];if(hn(a)||ao(a))return Tu(Ar(Cu(Hi,Pi([a],d,!0))));var f=a;return d.length===0&&f.length===1&&typeof f[0]=="string"?Ar(f):Tu(Ar(Cu(f,d)))}function Zs(a,d,l){if(l===void 0&&(l=fn),!d)throw so(1,d);var f=function(u){for(var p=[],v=1;v<arguments.length;v++)p[v-1]=arguments[v];return a(d,l,Kh.apply(void 0,Pi([u],p,!1)))};return f.attrs=function(u){return Zs(a,d,et(et({},l),{attrs:Array.prototype.concat(l.attrs,u).filter(Boolean)}))},f.withConfig=function(u){return Zs(a,d,et(et({},l),u))},f}var cp=function(a){return Zs(qh,a)},Te=cp;qu.forEach(function(a){Te[a]=cp(a)});const Ys={Wrapper:Te.div`height: 100vh; overflow: hidden; display: flex; flex-direction: column;`,Header:Te.header`height: 60px; flex-shrink: 0;`,Main:Te.main`
        flex: 1; overflow-y: auto; position: relative;
        .workspaceLayout { min-height: 100%; max-width: 1440px; margin: auto; display: grid; grid-template-columns: 260px minmax(0, 1fr); gap: 28px; padding: 18px 22px 42px; }
        .sideMenu { position: sticky; top: 18px; align-self: start; height: calc(100vh - 60px - 36px); max-height: calc(100vh - 60px - 36px); box-sizing: border-box; overflow-y: auto; padding: 16px 10px; border: 1px solid var(--color-border); border-radius: 16px; background: var(--color-surface); }
        .menuLabel { margin: 0 10px 12px; color: var(--color-text-muted); font-size: 11px; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; }
        .sideMenu nav { display: grid; gap: 5px; }
        .sideMenu button { width: 100%; padding: 10px 12px; border: 1px solid transparent; border-radius: 10px; background: transparent; color: var(--color-text-secondary); text-align: left; cursor: pointer; font: inherit; }
        .sideMenu button:hover, .sideMenu button.active { background: var(--color-primary); border-color: var(--color-primary); color: #111111; }
        .contentWrapper { min-width: 0; padding: 4px 0; }
        .contentWrapper .topicBody { max-height: 12000px; }
        .scrollTopButton { position: fixed; right: 24px; bottom: 24px; z-index: 10; width: 42px; height: 42px; display: grid; place-items: center; border: 1px solid var(--color-border); border-radius: 50%; background: var(--color-surface); color: var(--color-text-primary); cursor: pointer; box-shadow: 0 8px 20px var(--color-shadow); }
        .scrollTopButton:hover { background: var(--color-primary); color: #111111; }
        .footerWrapper { flex-shrink: 0; }
        @media (max-width: 820px) { .workspaceLayout { grid-template-columns: 1fr; padding: 14px; } .sideMenu { position: static; height: auto; max-height: none; } .sideMenu nav { grid-template-columns: repeat(2, minmax(0, 1fr)); } .scrollTopButton { right: 16px; bottom: 16px; } }
    `},Eu={Wrapper:Te.header`
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
    `,Main:Te.div`
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
    `},Pu="app-theme",Xh="/computerscience-core-notes/logo.png",Jh=()=>{const[a,d]=ae.useState(!1),[l,f]=ae.useState("dark");ae.useEffect(()=>{const v=localStorage.getItem(Pu);if(v==="light"||v==="dark"){f(v);return}const j=window.matchMedia&&window.matchMedia("(prefers-color-scheme: light)").matches;f(j?"light":"dark")},[]),ae.useEffect(()=>{l==="light"?document.documentElement.setAttribute("data-theme","light"):document.documentElement.removeAttribute("data-theme"),localStorage.setItem(Pu,l)},[l]);const u=ae.useMemo(()=>l==="light"?"dark":"light",[l]),p=()=>{f(u)};return o.jsx(Eu.Wrapper,{children:o.jsx(Eu.Main,{children:o.jsxs("div",{className:"logoNameThemeToggleWrapper",children:[o.jsxs("div",{className:"logoNameWrapper",children:[o.jsxs("div",{className:"logoWrapper",children:[!a&&o.jsx("div",{className:"logoSkeleton"}),o.jsx("img",{className:a?"logo loaded":"logo",src:Xh,alt:"computerscience-core-notes",onLoad:()=>d(!0),loading:"eager",decoding:"async"})]}),o.jsxs("div",{className:"nameWrapper",children:[o.jsx("div",{className:"title",children:"computerscience-core-notes"}),o.jsx("div",{className:"subTitle",children:"At-a-glance computer science revision"})]})]}),o.jsxs("button",{type:"button",className:"themeToggleBtn",onClick:p,"aria-label":`Switch to ${u} theme`,title:`Switch to ${u}`,children:[o.jsx("span",{className:"icon",children:l==="light"?o.jsx(_f,{}):o.jsx(Vf,{})}),o.jsx("span",{className:"label",children:l==="light"?"Light":"Dark"})]})]})})})};function Zh(a){return W({attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.285 159.704l-234-156c-7.987-4.915-16.511-4.96-24.571 0l-234 156C3.714 163.703 0 170.847 0 177.989v155.999c0 7.143 3.714 14.286 9.715 18.286l234 156.022c7.987 4.915 16.511 4.96 24.571 0l234-156.022c6-3.999 9.715-11.143 9.715-18.286V177.989c-.001-7.142-3.715-14.286-9.716-18.285zM278 63.131l172.286 114.858-76.857 51.429L278 165.703V63.131zm-44 0v102.572l-95.429 63.715-76.857-51.429L234 63.131zM44 219.132l55.143 36.857L44 292.846v-73.714zm190 229.715L61.714 333.989l76.857-51.429L234 346.275v102.572zm22-140.858l-77.715-52 77.715-52 77.715 52-77.715 52zm22 140.858V346.275l95.429-63.715 76.857 51.429L278 448.847zm190-156.001l-55.143-36.857L468 219.132v73.714z"},child:[]}]})(a)}function ex(a){return W({attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"},child:[]}]})(a)}const tx={Wrapper:Te.footer`
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
    `},rx=[{label:"Portfolio",href:"https://www.ashishranjan.net/",icon:dn},{label:"GitHub",href:"https://github.com/a2rp",icon:If},{label:"CodePen",href:"https://codepen.io/ash1198",icon:Zh},{label:"LinkedIn",href:"https://www.linkedin.com/in/aashishranjan",icon:Rf},{label:"Facebook",href:"https://www.facebook.com/theash.ashish/",icon:Pf},{label:"YouTube",href:"https://www.youtube.com/@ashishranjan-ashz?sub_confirmation=1",icon:ex},{label:"Email",href:"mailto:ash.ranjan09@gmail.com",icon:Df},{label:"Support",href:"https://a2rp-donation-page.netlify.app/",icon:zf},{label:"Buy Me a Coffee",href:"https://buymeacoffee.com/a2rp",icon:Tf},{label:"Patreon",href:"https://www.patreon.com/a2rp",icon:Gf}],nx=()=>o.jsxs(tx.Wrapper,{children:[o.jsxs("div",{className:"copyright",children:["© ",new Date().getFullYear()," All rights reserved. By"," ",o.jsx("a",{href:"https://www.ashishranjan.net",target:"_blank",rel:"noopener noreferrer",children:"Ashish Ranjan"})]}),o.jsx("nav",{className:"links","aria-label":"Social and support links",children:rx.map(({label:a,href:d,icon:l})=>o.jsx("a",{href:d,target:d.startsWith("mailto:")?void 0:"_blank",rel:d.startsWith("mailto:")?void 0:"noopener noreferrer","aria-label":a,title:a,children:o.jsx(l,{"aria-hidden":"true"})},a))})]}),Iu={Wrapper:Te.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 22px 16px 10px;
        background: var(--color-bg);
    `,Container:Te.div`
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
    `},dp=()=>o.jsx(Iu.Wrapper,{id:"about-computer-science",children:o.jsxs(Iu.Container,{children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"badgeRow",children:[o.jsxs("span",{className:"badge",children:[o.jsx(Jt,{}),"Core Notes"]}),o.jsxs("span",{className:"badge ghost",children:[o.jsx(Lt,{}),"At-a-glance revision"]})]}),o.jsx("h2",{className:"title",children:"Computer Science"}),o.jsx("p",{className:"sub",children:"Computer Science is not just writing programs. It is the study of how computation works across layers - hardware, OS, networks, databases, distributed systems, and scalable architectures."})]}),o.jsxs("div",{className:"grid",children:[o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("span",{className:"icon",children:o.jsx(Kt,{})}),o.jsxs("div",{className:"headText",children:[o.jsx("div",{className:"cardTitle",children:"System-level thinking"}),o.jsx("div",{className:"cardMini",children:"Mental models over memorization"})]})]}),o.jsx("p",{className:"p",children:"These notes focus on how systems behave in real life. Scheduling, memory, concurrency, I/O and the trade-offs that decide performance and safety."}),o.jsxs("div",{className:"chips",children:[o.jsx("span",{className:"chip",children:"Processes"}),o.jsx("span",{className:"chip",children:"Threads"}),o.jsx("span",{className:"chip",children:"Scheduling"}),o.jsx("span",{className:"chip",children:"Memory"}),o.jsx("span",{className:"chip",children:"Deadlocks"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("span",{className:"icon",children:o.jsx(dn,{})}),o.jsxs("div",{className:"headText",children:[o.jsx("div",{className:"cardTitle",children:"Data moving across networks"}),o.jsx("div",{className:"cardMini",children:"Protocols and latency intuition"})]})]}),o.jsx("p",{className:"p",children:"Understand how packets move, why TCP behaves the way it does, what DNS really does, and how latency and bandwidth impact system design decisions."}),o.jsxs("div",{className:"chips",children:[o.jsx("span",{className:"chip",children:"OSI"}),o.jsx("span",{className:"chip",children:"TCP"}),o.jsx("span",{className:"chip",children:"UDP"}),o.jsx("span",{className:"chip",children:"HTTP"}),o.jsx("span",{className:"chip",children:"DNS"}),o.jsx("span",{className:"chip",children:"TLS"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("span",{className:"icon",children:o.jsx(cn,{})}),o.jsxs("div",{className:"headText",children:[o.jsx("div",{className:"cardTitle",children:"Databases and correctness"}),o.jsx("div",{className:"cardMini",children:"Transactions, indexing, consistency"})]})]}),o.jsx("p",{className:"p",children:"Learn how data is stored and retrieved efficiently. Indexes, normalization, transactions, isolation levels, and why ACID is not just theory."}),o.jsxs("div",{className:"chips",children:[o.jsx("span",{className:"chip",children:"SQL"}),o.jsx("span",{className:"chip",children:"Joins"}),o.jsx("span",{className:"chip",children:"Indexes"}),o.jsx("span",{className:"chip",children:"ACID"}),o.jsx("span",{className:"chip",children:"Locks"})]})]}),o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("span",{className:"icon",children:o.jsx(Au,{})}),o.jsxs("div",{className:"headText",children:[o.jsx("div",{className:"cardTitle",children:"Scale and architecture"}),o.jsx("div",{className:"cardMini",children:"Reliability under real load"})]})]}),o.jsx("p",{className:"p",children:"System design is about trade-offs. Caching, replication, sharding, queues, load balancing and choosing the simplest architecture that meets the requirements."}),o.jsxs("div",{className:"chips",children:[o.jsx("span",{className:"chip",children:"Caching"}),o.jsx("span",{className:"chip",children:"Sharding"}),o.jsx("span",{className:"chip",children:"Queues"}),o.jsx("span",{className:"chip",children:"CDN"}),o.jsx("span",{className:"chip",children:"LB"})]})]})]}),o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"callHead",children:[o.jsx("span",{className:"callIcon",children:o.jsx(Ot,{})}),o.jsx("div",{className:"callTitle",children:"What you get from this project"})]}),o.jsxs("ul",{className:"callList",children:[o.jsx("li",{children:"Interview-ready revision with clean structure and fast scanning"}),o.jsx("li",{children:"Strong mental models for debugging and performance thinking"}),o.jsx("li",{children:"Clear trade-offs: latency vs throughput, safety vs speed, isolation vs sharing"}),o.jsx("li",{children:"Practical system intuition for real-world software engineering"})]})]})]})}),ox={Wrapper:Te.section`
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
    `},ix=()=>{const[a,d]=ae.useState(!1),l=ae.useMemo(()=>[{id:"os-fundamentals",icon:o.jsx(Lt,{}),title:"Fundamentals",atGlance:["OS is the manager between hardware and apps.","Kernel runs with full privileges, user space runs with limited privileges.","System calls are the official door from user programs to kernel services."],content:[{h:"What is an OS",p:["An Operating System (OS) is the core software that manages hardware and provides services to programs.","It controls CPU time, memory, storage, devices, and keeps programs isolated and secure."],example:{title:"Example",lines:["When you open Chrome, the OS creates a process, gives it memory, schedules CPU time, and lets it read files and use the network safely."]}},{h:"OS goals and types",p:["Common goals are performance, fairness, security, and stability.","Types include batch OS, time-sharing OS, real-time OS, distributed OS, and mobile OS."],example:{title:"Quick intuition",lines:["Real-time OS cares about deadlines.","Time-sharing OS cares about responsive multi-user experience."]}},{h:"Kernel vs User space",p:["Kernel space has full control over the machine and can run privileged instructions.","User space is where normal apps run with restrictions to prevent crashes from taking down the whole system."],example:{title:"Example",lines:["A buggy game can crash, but your OS should stay alive because the game runs in user space."]}},{h:"Monolithic vs Microkernel",p:["Monolithic kernel keeps most services (drivers, filesystem, networking) inside the kernel for speed.","Microkernel keeps the kernel small and moves many services to user space for better isolation."],example:{title:"Trade-off",lines:["Monolithic is often faster.","Microkernel can be safer and easier to isolate faults."]}},{h:"System calls",p:["System calls are APIs provided by the OS to request services like file access, process creation, network operations, and memory allocation.","They switch execution from user mode to kernel mode safely."],example:{title:"Example",lines:["open() - open a file","read() - read from file","fork() - create a new process (Unix-like)"]}}]},{id:"os-process-management",icon:o.jsx(_u,{}),title:"Process Management",atGlance:["Process is a running program with its own memory and state.","Context switch is when CPU stops one process and starts another.","Scheduling decides who gets CPU next."],content:[{h:"Process vs Program",p:["A program is a passive file on disk (like an .exe).","A process is an active execution of that program with its own memory, CPU registers, and resources."],example:{title:"Example",lines:["You can open the same program twice. That creates two processes."]}},{h:"Process states",p:["Typical states are new, ready, running, waiting (blocked), and terminated.","Ready means it can run but is waiting for CPU.","Waiting means it is paused for I/O or some event."],example:{title:"Example",lines:["When an app is downloading a file, it may be waiting for network I/O."]}},{h:"PCB structure",p:["PCB (Process Control Block) stores everything the OS needs to manage a process.","It usually includes PID, state, registers, program counter, scheduling info, memory mappings, and open files."],example:{title:"Mental model",lines:["PCB is like the OS notebook page for each process."]}},{h:"Context switching",p:["Context switch saves the current process state (registers, program counter) and loads another process state.","It has overhead, so too many switches reduce performance."],example:{title:"Example",lines:["Round Robin uses frequent switches to keep UI responsive, but switching too often wastes CPU time."]}},{h:"Scheduling algorithms",p:["Scheduling decides the order and duration processes get CPU.","Different algorithms optimize different goals like fairness, throughput, or response time."],example:{title:"Real-world note",lines:["Time-sharing systems often use Round Robin-like ideas for responsiveness."]}}],subList:{title:"Common scheduling algorithms",items:[{k:"FCFS",v:"First Come First Serve. Simple. Can cause convoy effect where short jobs wait behind long jobs."},{k:"SJF",v:"Shortest Job First. Minimizes average waiting time. Needs job length estimate."},{k:"Round Robin",v:"Each process gets a time slice (quantum). Fair and responsive."},{k:"Priority",v:"Higher priority runs first. Risk of starvation for low priority tasks."},{k:"Multilevel queue",v:"Separate queues for different task types (system, interactive, batch). Each queue may have its own algorithm."}]}},{id:"os-threads",icon:o.jsx(Di,{}),title:"Threads",atGlance:["Thread is a lightweight execution path inside a process.","Threads share process memory, so they are faster to switch but need synchronization.","User threads are managed by libraries, kernel threads are managed by OS."],content:[{h:"Process vs Thread",p:["A process has its own address space and resources.","Threads inside a process share memory and resources, but each thread has its own stack and registers."],example:{title:"Example",lines:["A browser process may have threads for UI, network, and rendering working at the same time."]}},{h:"User vs Kernel threads",p:["User-level threads are created and managed in user space, often faster to create.","Kernel-level threads are known to the OS scheduler and can run truly in parallel on multiple CPU cores."],example:{title:"Quick intuition",lines:["Kernel threads are more powerful for real parallelism.","User threads can be lighter but depend on runtime support."]}},{h:"Multithreading models",p:["Many-to-one, one-to-one, many-to-many are classic models.","Modern systems commonly use one-to-one or many-to-many depending on runtime and OS."],example:{title:"Example",lines:["Some language runtimes map many lightweight tasks onto a smaller pool of OS threads."]}},{h:"Thread synchronization",p:["Because threads share memory, they can corrupt shared data if they write at the same time.","Synchronization tools (mutex, semaphore) protect shared resources and enforce safe ordering."],example:{title:"Example",lines:["Two threads updating the same counter must lock or use atomic operations to avoid wrong values."]}}]},{id:"os-metrics",icon:o.jsx(Jt,{}),title:"CPU Scheduling Metrics",atGlance:["These metrics tell you whether scheduling is fair and responsive.","Response time matters for interactive apps.","Throughput matters for batch workloads."],content:[],subList:{title:"Metrics",items:[{k:"Turnaround time",v:"Total time from submission to completion."},{k:"Waiting time",v:"Total time spent waiting in ready queue."},{k:"Response time",v:"Time until the first response, important for UI and interactive tasks."},{k:"Throughput",v:"Number of processes completed per unit time."}]}},{id:"os-sync",icon:o.jsx(xn,{}),title:"Synchronization",atGlance:["Race conditions happen when timing changes the result.","Critical section is the part that must not be executed by multiple threads at once.","Mutex and semaphores are common protection tools."],content:[{h:"Race condition",p:["Race condition occurs when multiple threads access shared data and the final result depends on who runs first.","It can produce random bugs that disappear when you add logs or debugging."],example:{title:"Example",lines:["Two threads read balance = 100, both add 10, both write 110. Correct answer should be 120."]}},{h:"Critical section",p:["Critical section is the code region that reads or writes shared data.","Only one thread should enter at a time to maintain correctness."],example:{title:"Example",lines:["Updating a shared queue, shared counter, or shared cache entry is a critical section."]}},{h:"Mutex",p:["Mutex is a lock that allows only one thread to enter a critical section.","Lock before entering, unlock after leaving."],example:{title:"Example",lines:["Thread A locks, updates shared map, unlocks. Thread B waits until unlock."]}},{h:"Semaphore",p:["Semaphore is a counter-based synchronization tool.","Binary semaphore acts like a mutex. Counting semaphore allows N threads to enter (like limited resources)."],example:{title:"Example",lines:["A connection pool of size 10 can be protected by a counting semaphore of 10."]}}],callout:{icon:o.jsx(tt,{}),title:"Deadlock snapshot",lines:["Deadlock is when two or more threads wait forever because each holds a resource the other needs.","Typical case is Thread A holds Lock 1 and waits for Lock 2, while Thread B holds Lock 2 and waits for Lock 1."]}},{id:"os-deadlock",icon:o.jsx(Xt,{}),title:"Deadlock",atGlance:["Deadlock needs 4 conditions. Break one to prevent it.","Avoidance is proactive, detection is reactive.","Banker’s Algorithm is a classic avoidance idea."],content:[],subList:{title:"Deadlock essentials",items:[{k:"Necessary conditions",v:"Mutual exclusion, hold and wait, no preemption, circular wait."},{k:"Detection",v:"System checks for cycles and stuck waits, then recovers by killing or rolling back processes."},{k:"Prevention",v:"Design system to break at least one necessary condition, like ordering locks to avoid circular wait."},{k:"Avoidance",v:"Decide at runtime if granting a resource keeps system in a safe state."},{k:"Banker’s Algorithm",v:"Classic avoidance approach. Only grant if resources remain enough for all processes to eventually finish."}]}},{id:"os-memory",icon:o.jsx(cn,{}),title:"Memory Management",atGlance:["OS must give each process an isolated view of memory.","Virtual memory makes it look like you have more memory than RAM.","Paging and page replacement decide how memory is used efficiently."],content:[{h:"Logical vs Physical address",p:["Logical (virtual) address is what the process uses.","Physical address is the real RAM address.","OS and hardware translate logical to physical using page tables."],example:{title:"Example",lines:["Two processes can both use address 0x1000, but they map to different physical locations."]}},{h:"Paging",p:["Memory is divided into fixed-size pages and frames.","Paging reduces external fragmentation and simplifies allocation."],example:{title:"Example",lines:["Process pages can be placed into any free frames in RAM."]}},{h:"Segmentation",p:["Memory is divided by logical segments like code, stack, heap.","Segmentation matches program structure but can suffer from external fragmentation."],example:{title:"Quick compare",lines:["Paging is fixed-size blocks.","Segmentation is variable-size blocks based on meaning."]}},{h:"Virtual memory",p:["Virtual memory uses disk as an extension of RAM.","Only needed parts stay in RAM, rest can remain on disk until accessed."],example:{title:"Example",lines:["Opening many apps works because inactive pages can be moved out of RAM."]}},{h:"Page replacement algorithms",p:["When RAM is full and a new page is needed, OS must pick a page to evict.","Good eviction choices reduce page faults and improve performance."],example:{title:"Example",lines:["If you keep evicting pages you need soon, system becomes slow and can start thrashing."]}}],subList:{title:"Page replacement",items:[{k:"FIFO",v:"Evict the oldest loaded page. Simple but not always smart."},{k:"LRU",v:"Evict the least recently used page. Often performs better but needs tracking."},{k:"Optimal",v:"Evict the page not needed for the longest time in future. Best in theory, not possible to implement perfectly."}]}},{id:"os-file-systems",icon:o.jsx(Ou,{}),title:"File Systems and Disk Scheduling",atGlance:["File system organizes files and directories on storage.","Allocation method affects performance and fragmentation.","Disk scheduling reduces head movement and improves throughput."],content:[{h:"File allocation methods",p:["Contiguous allocation is simple and fast but can fragment.","Linked allocation reduces fragmentation but can be slower for random access.","Indexed allocation uses an index block for fast random access."],example:{title:"Example",lines:["Video files often benefit from contiguous allocation style because sequential reads are common."]}},{h:"Directory structures",p:["Directories map names to file metadata locations.","Common structures include single-level, two-level, tree, and DAG-like structures."],example:{title:"Example",lines:["A typical OS uses a tree structure: /home/user/docs."]}}],subList:{title:"Disk scheduling",items:[{k:"SCAN",v:"Disk head moves like an elevator, serving requests in one direction then reverses."},{k:"C-SCAN",v:"Like SCAN but returns to start without serving on the way back, gives more uniform wait times."}]}}],[]),f=()=>d(u=>!u);return o.jsxs(ox.Wrapper,{id:"operating-systems",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Kt,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Operating Systems"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for OS fundamentals - processes, threads, scheduling, synchronization, memory, file systems, and disk scheduling."})]})]}),o.jsxs("button",{type:"button",className:a?"toggleBtn open":"toggleBtn",onClick:f,"aria-expanded":a,"aria-controls":"os-content",title:a?"Collapse OS notes":"Expand OS notes",children:[o.jsx("span",{className:"btnIcon",children:a?o.jsx(bt,{}):o.jsx(yt,{})}),o.jsx("span",{className:"btnText",children:a?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"os-content",className:a?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Ai,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan the "At a glance" bullets first. Then read examples for real understanding.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,v)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},v))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(tt,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Always explain OS topics using trade-offs like performance vs safety, throughput vs latency, and isolation vs sharing."})]})]})]})},ax={Wrapper:Te.section`
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
    `},sx=()=>{const[a,d]=ae.useState(!1),l=ae.useMemo(()=>[{id:"cn-basics",icon:o.jsx(Lt,{}),title:"Basics",atGlance:["Networks connect devices so they can share data and resources.","OSI is a conceptual 7-layer model, TCP/IP is the practical internet stack.","Encapsulation is wrapping data with headers as it moves down the stack."],content:[{h:"Network types",p:["LAN is a small local network like home or office.","WAN connects larger areas and usually involves ISPs.","PAN is personal area network like Bluetooth devices.","MAN covers a city-scale network (less common in daily dev talk)."],example:{title:"Example",lines:["Your phone and laptop connected via WiFi at home is LAN.","Your home router to the internet is WAN."]}},{h:"OSI model",p:["OSI has 7 layers. It is mainly used to understand and debug networking.","Layers from bottom to top are Physical, Data Link, Network, Transport, Session, Presentation, Application."],example:{title:"Debug mindset",lines:["No internet? Check cable/WiFi (Physical), then IP (Network), then DNS/HTTP (Application)."]}},{h:"TCP/IP model",p:["TCP/IP is the real-world model used on the internet.","Common mapping is Link, Internet, Transport, Application.","OSI is more detailed, TCP/IP is more practical."],example:{title:"Quick mapping",lines:["OSI Network layer roughly maps to TCP/IP Internet layer (IP)."]}},{h:"Encapsulation",p:["Encapsulation means each layer adds its own header around the data.","When sending, data goes down the layers and gets wrapped.","When receiving, headers are removed layer by layer (decapsulation)."],example:{title:"Example",lines:["HTTP data is wrapped inside TCP segment, inside IP packet, inside Ethernet frame."]}}]},{id:"cn-physical",icon:o.jsx(Ou,{}),title:"Physical Layer",atGlance:["Physical layer is about bits over a medium, not IPs or ports.","Bandwidth is how much data can flow, latency is how long it takes to arrive.","Wired is stable, wireless is convenient but noisy."],content:[{h:"Transmission media",p:["Twisted pair (Ethernet) is common for short-distance wiring.","Fiber optic is fast and long-distance with low interference.","Wireless uses radio signals and is affected by interference and obstacles."],example:{title:"Example",lines:["Fiber is used for backbone links, Ethernet for office wiring, WiFi for last meter mobility."]}},{h:"Bandwidth vs Latency",p:["Bandwidth is the maximum data rate (like width of a highway).","Latency is the time delay for a packet to travel (like travel time).","High bandwidth does not guarantee low latency."],example:{title:"Simple intuition",lines:["Downloading a big file needs bandwidth.","Gaming and calls need low latency and stable jitter."]}}]},{id:"cn-datalink",icon:o.jsx(Ei,{}),title:"Data Link Layer",atGlance:["Data Link handles local delivery on the same network segment.","MAC addresses identify devices on a local link.","Switches forward frames using MAC tables."],content:[{h:"MAC addressing",p:["MAC address is a hardware-like identifier used inside a local network.","It is used for delivering frames within the same LAN."],example:{title:"Example",lines:["When your laptop sends data to your router on WiFi, it uses MAC addresses at this layer."]}},{h:"ARP",p:["ARP resolves IP address to MAC address on a local network.","If you know the target IP, you still need the MAC to send the frame locally."],example:{title:"Example",lines:["Your laptop wants to reach 192.168.1.1 so it asks 'Who has 192.168.1.1?' and learns the router MAC."]}},{h:"Switching",p:["Switches operate at Data Link layer and forward frames based on destination MAC.","They learn which MAC is on which port by observing traffic (MAC table)."],example:{title:"Why switches help",lines:["A hub broadcasts everywhere, a switch forwards only to the right port, reducing noise."]}}]},{id:"cn-network-layer",icon:o.jsx(Di,{}),title:"Network Layer",atGlance:["Network layer is about IP addressing and routing between networks.","Subnetting splits a network into smaller networks.","Routers move packets between networks."],content:[{h:"IP addressing",p:["IP address identifies a host on a network and helps route packets across networks.","IPv4 is 32-bit, IPv6 is 128-bit for a much larger address space."],example:{title:"Example",lines:["Your laptop has a private IP like 192.168.x.x inside home network.","Your router has a public IP assigned by ISP for the internet side."]}},{h:"Subnetting",p:["Subnetting divides a large network into smaller ranges using a subnet mask or CIDR prefix.","It helps manage routing, security boundaries, and IP allocation."],example:{title:"Example",lines:["192.168.1.0/24 means 256 addresses in that subnet (0 to 255)."]}},{h:"Routing algorithms",p:["Routing decides the path packets take from source network to destination network.","Common ideas include distance vector and link state routing."],example:{title:"Quick intuition",lines:["Routers maintain tables so they know which next hop leads closer to a network."]}},{h:"ICMP",p:["ICMP is used for network diagnostics and control messages.","Ping uses ICMP echo request and echo reply to test reachability."],example:{title:"Example",lines:["If ping fails, you might have routing, firewall, or connectivity issues."]}}]},{id:"cn-transport",icon:o.jsx(Jt,{}),title:"Transport Layer",atGlance:["Transport is end-to-end communication between applications.","TCP is reliable and ordered, UDP is fast and lightweight.","Ports identify which app should receive the data."],content:[{h:"TCP vs UDP",p:["TCP provides reliable delivery with ordering, retransmissions, and congestion control.","UDP sends packets without guarantees, but with low overhead and lower latency."],example:{title:"Example",lines:["TCP is used for web browsing and file downloads.","UDP is common for live streaming, VoIP, and gaming."]}},{h:"3-way handshake",p:["TCP connection starts with SYN, SYN-ACK, ACK.","This establishes initial sequence numbers and confirms both sides are ready."],example:{title:"Example",lines:["Client says 'SYN' (I want to connect).","Server says 'SYN-ACK' (ok and I also want to connect).","Client says 'ACK' (confirmed)."]}},{h:"Congestion control",p:["Congestion control prevents the network from being overloaded.","TCP adjusts sending rate based on packet loss and RTT changes."],example:{title:"Intuition",lines:["If too many packets drop, TCP slows down to avoid collapse."]}},{h:"Flow control",p:["Flow control ensures sender does not overwhelm the receiver.","TCP uses sliding window so receiver can say how much it can handle."],example:{title:"Example",lines:["A slow device can advertise a smaller receive window to reduce incoming rate."]}}]},{id:"cn-application",icon:o.jsx(dn,{}),title:"Application Layer",atGlance:["This is where real app protocols live like HTTP and DNS.","HTTPS is HTTP plus TLS encryption and identity verification.","DNS turns human names into IP addresses."],content:[{h:"HTTP",p:["HTTP is the web protocol for request and response.","Common methods are GET, POST, PUT, DELETE."],example:{title:"Example",lines:["Browser sends GET /products. Server returns HTML or JSON response."]}},{h:"HTTPS",p:["HTTPS is HTTP over TLS, meaning data is encrypted and protected from tampering.","It also verifies the server identity using certificates."],example:{title:"Example",lines:["Without HTTPS, someone on the same WiFi can sniff or modify traffic."]}},{h:"DNS",p:["DNS resolves domain names into IP addresses.","Your device asks a resolver, which may ask root, TLD, and authoritative servers."],example:{title:"Example",lines:["google.com becomes an IP address so your device knows where to send packets."]}},{h:"FTP",p:["FTP is an older protocol for transferring files.","It is often replaced by SFTP and HTTPS-based upload for security."],example:{title:"Example",lines:["FTP without encryption can expose credentials and file contents."]}},{h:"SMTP",p:["SMTP is used to send emails between mail servers.","Receiving is often done via IMAP or POP3, but sending is SMTP."],example:{title:"Example",lines:["Your app sends email through SMTP provider or an email API built on top of SMTP."]}}]},{id:"cn-advanced",icon:o.jsx(Ot,{}),title:"Advanced",atGlance:["NAT allows many private devices to share one public IP.","Load balancing spreads traffic across servers for reliability and scaling.","CDN puts content closer to users to reduce latency."],content:[{h:"NAT",p:["NAT translates private IP addresses to a public IP for internet access.","This is why many devices at home can share one ISP connection."],example:{title:"Example",lines:["Laptop 192.168.1.10 and phone 192.168.1.11 both appear as the same public IP to the internet."]}},{h:"Load balancing",p:["A load balancer distributes incoming traffic across multiple servers.","It improves availability, helps scaling, and can do health checks."],example:{title:"Example",lines:["If one server fails, load balancer routes traffic to healthy servers."]}},{h:"CDN",p:["CDN caches static content like images, CSS, JS at edge locations near users.","This reduces latency and decreases load on your origin server."],example:{title:"Example",lines:["Your website images load faster in different countries using CDN edge caches."]}},{h:"Network security basics",p:["Use HTTPS, secure DNS settings when possible, and avoid exposing services directly.","Firewalls restrict traffic, VPN encrypts tunnels, and segmentation limits blast radius."],example:{title:"Example",lines:["Closing unused ports and using least privilege reduces attack surface."]}}],callout:{icon:o.jsx(tt,{}),title:"Practical debugging order",lines:["Check connectivity (WiFi, cable) then IP and gateway then DNS then HTTP.","Many 'internet down' issues are actually DNS issues."]}}],[]),f=()=>d(u=>!u);return o.jsxs(ax.Wrapper,{id:"computer-networks",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Bu,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Computer Networks"}),o.jsx("p",{className:"sub",children:"At-a-glance revision for OSI layers, TCP/IP, routing, transport, and web protocols with beginner examples."})]})]}),o.jsxs("button",{type:"button",className:a?"toggleBtn open":"toggleBtn",onClick:f,"aria-expanded":a,"aria-controls":"cn-content",title:a?"Collapse Network notes":"Expand Network notes",children:[o.jsx("span",{className:"btnIcon",children:a?o.jsx(bt,{}):o.jsx(yt,{})}),o.jsx("span",{className:"btnText",children:a?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"cn-content",className:a?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Kt,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:"Think in layers. When something fails, locate the layer before guessing the fix."})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,v)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},v))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,v)=>o.jsx("li",{children:p},v))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Xt,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Always explain network problems with a layer-based approach and mention trade-offs like latency vs throughput and reliability vs speed."})]})]})]})},lx={Wrapper:Te.section`
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
    `},cx=()=>{const[a,d]=ae.useState(!1),l=ae.useMemo(()=>[{id:"dbms-fundamentals",icon:o.jsx(cn,{}),title:"Fundamentals",atGlance:["DBMS stores data safely and lets you query it efficiently.","A database is the data, DBMS is the software managing it.","ACID makes transactions reliable even with failures."],content:[{h:"What is DBMS",p:["DBMS stands for Database Management System. It is software that stores data, organizes it, and provides a safe way to read and write it.","It handles data consistency, security, backup, concurrency, and performance so apps do not reinvent these problems."],example:{title:"Example",lines:["A shopping app uses a DBMS to store users, products, orders, and payments.","DBMS ensures two users can place orders at the same time without corrupting stock counts."]}},{h:"Types of databases",p:["Databases can be relational or non-relational depending on how they store and query data.","Each type is good for certain workloads and trade-offs."],example:{title:"Common types",lines:["Relational (SQL): tables, strict schema, strong consistency","Document: JSON-like documents, flexible schema","Key-Value: fast lookups by key","Columnar: analytics and reporting","Graph: relationships and traversals"]}},{h:"ACID properties",p:["ACID describes reliability rules for transactions.","Transactions are groups of operations that should behave like one unit of work."],example:{title:"ACID in one line each",lines:["Atomicity: all-or-nothing","Consistency: rules remain true","Isolation: transactions do not break each other","Durability: committed data survives crashes"]}}]},{id:"dbms-data-models",icon:o.jsx(Lt,{}),title:"Data Models",atGlance:["Relational model stores data in tables with rows and columns.","ER model is a design tool to plan tables and relationships.","Modeling decides clarity and future flexibility."],content:[{h:"Relational model",p:["Data is stored in relations (tables). Rows are records, columns are attributes.","Relationships are represented using keys and constraints."],example:{title:"Example",lines:["Users(id, name)","Orders(id, userId, total)","Orders.userId references Users.id"]}},{h:"ER model",p:["ER model stands for Entity-Relationship model.","It is used during design to map entities, attributes, and relationships before writing SQL tables."],example:{title:"Example",lines:["Entity: Student","Entity: Course","Relationship: Student enrolls in Course"]}}]},{id:"dbms-sql",icon:o.jsx(Ri,{}),title:"SQL",atGlance:["DDL defines structure, DML manipulates data.","Joins combine rows from multiple tables.","Indexes speed reads but cost extra writes and storage."],content:[],subList:{title:"SQL essentials",items:[{k:"DDL",v:"Data Definition Language. Used to create or change schema. Example: CREATE, ALTER, DROP."},{k:"DML",v:"Data Manipulation Language. Used to read and modify data. Example: SELECT, INSERT, UPDATE, DELETE."},{k:"Joins",v:"Combine rows across tables using a condition. Common: INNER, LEFT, RIGHT, FULL (DB dependent)."},{k:"Indexes",v:"Extra data structure to speed up reads. Great for WHERE and JOIN keys."},{k:"Constraints",v:"Rules to keep data valid. Examples: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK."}]},callout:{icon:o.jsx(tt,{}),title:"Beginner join intuition",lines:["INNER JOIN returns only matches.","LEFT JOIN returns all left rows and matches from right, missing becomes NULL.","Most real bugs come from wrong join key or missing indexes on join columns."]}},{id:"dbms-normalization",icon:o.jsx(rl,{}),title:"Normalization",atGlance:["Normalization reduces redundancy and update bugs.","It splits tables so one fact lives in one place.","BCNF is a stronger form of 3NF."],content:[],subList:{title:"Normal forms",items:[{k:"1NF",v:"Atomic values. No repeating groups. Each cell holds a single value."},{k:"2NF",v:"No partial dependency on a composite key. Every non-key depends on full key."},{k:"3NF",v:"No transitive dependency. Non-key should not depend on another non-key."},{k:"BCNF",v:"For every dependency X -> Y, X should be a super key. Stronger than 3NF."}]},exampleBox:{title:"Quick example",lines:["Bad: Orders(orderId, userName, userPhone, total)","Better: Users(userId, name, phone) and Orders(orderId, userId, total)","Now updating phone happens in one place only."]}},{id:"dbms-transactions",icon:o.jsx(nl,{}),title:"Transactions",atGlance:["Isolation decides how much transactions can see each other.","Locking prevents conflicts but can reduce concurrency.","Deadlocks happen when locks form a cycle."],content:[],subList:{title:"Transaction building blocks",items:[{k:"Isolation levels",v:"Rules for visibility between transactions. Lower isolation is faster but can show anomalies."},{k:"Locking",v:"Shared locks for reads, exclusive locks for writes. Used to protect data correctness."},{k:"Deadlock",v:"Two transactions each wait for a lock held by the other. DB detects and aborts one."}]},callout:{icon:o.jsx(xn,{}),title:"Practical deadlock reduction",lines:["Lock rows in a consistent order in all code paths.","Keep transactions short, do not hold locks while calling external services.","Use proper indexes so queries lock fewer rows."]}},{id:"dbms-indexing",icon:o.jsx(Ru,{}),title:"Indexing",atGlance:["Indexes trade storage and write cost for faster reads.","B Tree and B+ Tree handle range queries well.","Hash indexing is great for exact match lookups."],content:[],subList:{title:"Index types",items:[{k:"B Tree",v:"Balanced tree. Good general-purpose index structure. Supports range queries."},{k:"B+ Tree",v:"Leaf nodes contain sorted data pointers and are linked. Very efficient for range scans."},{k:"Hash indexing",v:"Fast equality lookups like key = value. Not ideal for range queries like BETWEEN."}]},exampleBox:{title:"Index intuition",lines:["WHERE email = 'x' benefits from hash or B+ tree.","WHERE createdAt BETWEEN ... benefits strongly from B+ tree.","Too many indexes make writes slower because DB must update all indexes on insert or update."]}},{id:"dbms-query-optimization",icon:o.jsx(_i,{}),title:"Query Optimization",atGlance:["DB chooses a plan to execute SQL efficiently.","Execution plan shows how DB will scan, join, and filter.","Cost estimation picks the cheapest plan based on stats."],content:[],subList:{title:"Optimization basics",items:[{k:"Execution plan",v:"Step-by-step strategy DB uses. Examples: index scan, full table scan, hash join, nested loop."},{k:"Cost estimation",v:"DB guesses runtime cost using table size, indexes, and statistics to choose the best plan."}]},callout:{icon:o.jsx(Jt,{}),title:"Beginner debugging steps",lines:["Check if WHERE and JOIN columns are indexed.","Avoid SELECT * in heavy queries.","Look for full table scans on big tables.","Reduce rows early using filters before joins."]}}],[]),f=()=>d(u=>!u);return o.jsxs(lx.Wrapper,{id:"dbms",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(cn,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"DBMS"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for DBMS fundamentals - models, SQL, normalization, transactions, indexing, and optimization."})]})]}),o.jsxs("button",{type:"button",className:a?"toggleBtn open":"toggleBtn",onClick:f,"aria-expanded":a,"aria-controls":"dbms-content",title:a?"Collapse DBMS notes":"Expand DBMS notes",children:[o.jsx("span",{className:"btnIcon",children:a?o.jsx(bt,{}):o.jsx(yt,{})}),o.jsx("span",{className:"btnText",children:a?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"dbms-content",className:a?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Di,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Start with "At a glance", then read examples. This is designed for quick revision before interviews.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision and beginner intuition"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,v)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},v))}),u.exampleBox&&o.jsxs("div",{className:"exampleBox",children:[o.jsx("div",{className:"exbTitle",children:u.exampleBox.title}),o.jsx("ul",{className:"exbList",children:u.exampleBox.lines.map((p,v)=>o.jsx("li",{className:"mono",children:p},v))})]}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Ot,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Always connect DBMS answers to trade-offs like consistency vs availability, indexes vs write cost, and isolation vs performance."})]})]})]})},dx={Wrapper:Te.section`
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
    `},ux=()=>{const[a,d]=ae.useState(!1),l=ae.useMemo(()=>[{id:"sd-basics",icon:o.jsx(_i,{}),title:"Basics",atGlance:["Scalability is about handling growth smoothly.","Availability is about being up when users need you.","Reliability is about doing correct work consistently.","CAP theorem explains trade-offs in distributed systems."],content:[{h:"Scalability",p:["Scalability means your system can handle more load by adding resources without breaking.","Two common types are vertical scaling (bigger machine) and horizontal scaling (more machines).","A scalable design avoids single bottlenecks and supports adding capacity gradually."],example:{title:"Example",lines:["If traffic doubles, you can add 2 more app servers behind a load balancer.","If a single database is the bottleneck, you may add read replicas or shard the data."]}},{h:"Availability",p:["Availability means the system is reachable and usable when needed.","High availability uses redundancy so if one part fails, another takes over.","Downtime can come from deployments, crashes, network issues, or bad configuration."],example:{title:"Example",lines:["Two app servers in different zones. If one zone goes down, users still get responses.","Health checks remove unhealthy servers automatically."]}},{h:"Reliability",p:["Reliability means the system works correctly over time and produces correct results.","A system can be available but not reliable if it returns wrong data or loses requests.","Reliability comes from good testing, safe deployments, retries with limits, idempotency, and strong observability."],example:{title:"Example",lines:["Payment API returns success only after the transaction is confirmed and recorded safely.","Using idempotency keys prevents double charging if clients retry."]}},{h:"CAP theorem",p:["CAP says a distributed system cannot guarantee Consistency, Availability, and Partition tolerance at the same time.","Partition tolerance means the system continues operating even if network splits happen.","In real distributed systems, partitions can happen, so the main trade-off becomes Consistency vs Availability during partition."],example:{title:"Quick intuition",lines:["CP system: prefers correctness, may reject or delay requests during partition.","AP system: prefers staying available, may serve slightly stale data during partition."]}}]},{id:"sd-architecture",icon:o.jsx(Lt,{}),title:"Architecture",atGlance:["Monolith is simpler to start, microservices scale teams and domains.","Client-server is the baseline for most apps.","Load balancer spreads traffic, reverse proxy protects and routes traffic."],content:[{h:"Monolith vs Microservices",p:["Monolith is one codebase and usually one deployable unit. It is easier to build and debug early.","Microservices split the system into smaller services. Each service owns a domain and can be deployed independently.","Microservices add complexity: network calls, distributed tracing, deployment coordination, and versioning."],example:{title:"Example",lines:["Monolith: ecommerce app in one backend.","Microservices: auth service, catalog service, orders service, payments service."]}},{h:"Client-server",p:["Client is the app that requests data, server is the app that processes requests and returns responses.","Clients can be web, mobile, desktop, or other services.","APIs define how clients talk to servers. HTTP with JSON is common."],example:{title:"Example",lines:["Browser requests /products, server returns product list as JSON."]}},{h:"Load balancer",p:["A load balancer distributes incoming requests across multiple servers.","It improves availability and scalability by avoiding a single overloaded server.","It also performs health checks and can stop sending traffic to unhealthy instances."],example:{title:"Example",lines:["Round robin sends each request to the next server.","Least connections sends to the server with fewer active connections."]}},{h:"Reverse proxy",p:["A reverse proxy sits in front of your servers and routes requests to the correct backend.","It can handle SSL termination, caching, compression, security headers, and rate limiting.","It hides internal server structure from the public internet."],example:{title:"Example",lines:["Reverse proxy routes /api to backend and / to frontend static site.","It can block suspicious traffic before it reaches your app servers."]}}]},{id:"sd-db-scaling",icon:o.jsx(cn,{}),title:"Database Scaling",atGlance:["Replication improves read capacity and availability.","Sharding splits data across databases to scale writes and storage.","Partitioning splits data inside a database to manage large tables."],content:[{h:"Replication",p:["Replication copies data from a primary database to one or more replicas.","Read replicas increase read throughput and can help during failover.","Replication can be synchronous (stronger consistency, slower writes) or asynchronous (faster, can be slightly stale)."],example:{title:"Example",lines:["Primary handles writes, replicas handle reads for product browsing.","During failover, a replica can be promoted to primary."]}},{h:"Sharding",p:["Sharding splits data across multiple databases so each shard stores only a subset of data.","It helps when a single database cannot handle write load or storage size.","Sharding requires a shard key, like userId, to decide where data lives."],example:{title:"Example",lines:["Users with userId 0-1M in shard A, 1M-2M in shard B.","Orders are routed to shard based on customerId."]}},{h:"Partitioning",p:["Partitioning splits a large table into smaller parts within the same database.","It improves query performance and maintenance by scanning smaller partitions.","Common strategies are range partitioning by date and hash partitioning by id."],example:{title:"Example",lines:["Logs table partitioned by month so queries for last 7 days scan only current partition."]}}]},{id:"sd-caching",icon:o.jsx(Xt,{}),title:"Caching",atGlance:["Caching reduces latency and database load.","Redis is a common in-memory cache and data structure store.","Eviction decides what to remove when cache is full."],content:[{h:"Redis basics",p:["Redis is an in-memory key-value store often used for caching, sessions, rate limiting, queues, and leaderboards.","It is fast because data lives in memory, but you must handle eviction and persistence settings carefully.","Common cache pattern is cache-aside: check cache first, fallback to DB, then fill cache."],example:{title:"Example",lines:["Read product details: key = product:123, value = JSON of product.","Cache-aside: if miss, fetch from DB, set in Redis with TTL."]}},{h:"Cache eviction strategies",p:["Eviction strategy decides what to remove when cache is full.","LRU removes least recently used items.","LFU removes least frequently used items.","TTL based eviction removes expired items first and keeps fresh data."],example:{title:"Example",lines:["Trending products stay in cache due to frequent access.","Old rarely accessed product entries get evicted."]}}],subList:{title:"Common caching patterns",items:[{k:"Cache-aside",v:"App checks cache, on miss reads DB and writes to cache. Simple and common."},{k:"Write-through",v:"Writes go to cache and DB together. Cache stays consistent but writes are slower."},{k:"Write-back",v:"Writes go to cache first, DB later. Faster but risk of data loss if cache fails."}]}},{id:"sd-messaging",icon:o.jsx(Mf,{}),title:"Messaging",atGlance:["Queues decouple services and smooth traffic spikes.","Event-driven systems react to events instead of direct calls.","Messaging improves reliability using retries and dead letter queues."],content:[{h:"Message queues",p:["Message queues store tasks so producers and consumers can work independently.","They help handle spikes by buffering work and processing at a stable rate.","Queues improve reliability by allowing retries and tracking failed messages."],example:{title:"Example",lines:["Order placed sends a message to queue, worker processes inventory update.","Email sending runs asynchronously so user request stays fast."]}},{h:"Event driven architecture",p:["In event-driven architecture, services publish events and other services subscribe to react.","Events represent facts like 'OrderCreated' or 'PaymentSucceeded'.","This reduces tight coupling but requires good event schemas and observability."],example:{title:"Example",lines:["Orders service emits OrderCreated event.","Analytics service consumes it and updates dashboards."]}}],callout:{icon:o.jsx(tt,{}),title:"Queue terms that interviewers like",lines:["At least once delivery means messages can be delivered more than once, consumers must be idempotent.","Dead letter queue stores messages that fail repeatedly.","Backpressure means slowing producers when consumers cannot keep up."]}},{id:"sd-patterns",icon:o.jsx(Hf,{}),title:"Design Patterns",atGlance:["Rate limiter protects your system from abuse and spikes.","API gateway is the front door for microservices.","Circuit breaker prevents cascading failures."],content:[{h:"Rate limiter",p:["Rate limiting controls how many requests a client can make in a time window.","It protects against abuse and prevents one client from taking all resources.","Common algorithms include token bucket and leaky bucket."],example:{title:"Example",lines:["Limit login attempts to 5 per minute per IP.","Allow 100 requests per minute per userId for public API."]}},{h:"API gateway",p:["API gateway is a single entry point for client requests in microservices.","It can handle routing, authentication, rate limiting, caching, and request aggregation.","It keeps clients simple because they call one endpoint instead of many services."],example:{title:"Example",lines:["Mobile app calls gateway, gateway calls user service and orders service and combines response."]}},{h:"Circuit breaker",p:["Circuit breaker stops calling a failing service for a short time to prevent overload.","It has states: closed (normal), open (blocked), half-open (test requests).","This prevents cascading failure where one broken service takes down the entire system."],example:{title:"Example",lines:["If payment service is failing, circuit opens and app returns a friendly error quickly instead of hanging."]}}],subList:{title:"Practical usage notes",items:[{k:"Rate limiter",v:"Use at edge like reverse proxy or gateway. Store counters in Redis."},{k:"API gateway",v:"Good for authentication and routing. Avoid too much business logic inside gateway."},{k:"Circuit breaker",v:"Pair with timeouts and retries. Unlimited retries can kill systems."}]}}],[]),f=()=>d(u=>!u);return o.jsxs(dx.Wrapper,{id:"system-design",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(rl,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"System Design"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for scalability, reliability, databases, caching, messaging, and architecture patterns."})]})]}),o.jsxs("button",{type:"button",className:a?"toggleBtn open":"toggleBtn",onClick:f,"aria-expanded":a,"aria-controls":"system-design-content",title:a?"Collapse system design notes":"Expand system design notes",children:[o.jsx("span",{className:"btnIcon",children:a?o.jsx(bt,{}):o.jsx(yt,{})}),o.jsx("span",{className:"btnText",children:a?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"system-design-content",className:a?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Ai,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan "At a glance" first, then read examples. In interviews, always explain trade-offs.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Beginner notes with short examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,v)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},v))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]}),o.jsxs("div",{className:"miniTip",children:[o.jsx(Ot,{className:"miniTipIcon"}),o.jsx("div",{className:"miniTipText",children:"Practical tip: always add timeouts, retries with limits, and monitoring."})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Mi,{})}),o.jsx("div",{className:"footerText",children:"Interview tip: describe system design using components like load balancer, cache, queue, database, and then explain bottlenecks and trade-offs."})]})]})]})},px={Wrapper:Te.section`
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
    `},mx=()=>{const[a,d]=ae.useState(!1),l=ae.useMemo(()=>[{id:"se-sdlc",icon:o.jsx(nl,{}),title:"SDLC models",atGlance:["SDLC is the step-by-step process to build and maintain software.","Different models fit different risk levels and project clarity.","Pick model based on uncertainty, compliance needs, and speed."],content:[{h:"What is SDLC",p:["SDLC stands for Software Development Life Cycle.","It describes how a product moves from idea to development, testing, release, and maintenance.","A clear SDLC reduces chaos and makes delivery predictable."],example:{title:"Typical phases",lines:["Requirements - What problem to solve","Design - How to solve it","Implementation - Build it","Testing - Verify it","Deployment - Release it","Maintenance - Fix and improve"]}},{h:"Common SDLC models",p:["Waterfall: linear phases. Good when requirements are stable and compliance-heavy.","Iterative: build in repeated cycles, learn, improve.","Incremental: deliver feature chunks over time.","Spiral: iterative with strong risk analysis each cycle."],example:{title:"When to use",lines:["Waterfall - government or compliance projects with fixed scope","Iterative - product development with changing requirements","Spiral - high risk systems like safety or financial systems"]}}],subList:{title:"Model quick compare",items:[{k:"Waterfall",v:"Simple planning, slower feedback, expensive changes later."},{k:"Iterative",v:"Fast feedback, improves over cycles, needs good planning discipline."},{k:"Incremental",v:"Ship in parts, reduces risk, requires solid integration strategy."},{k:"Spiral",v:"Risk-first approach, good for complex systems, heavier process."}]}},{id:"se-agile",icon:o.jsx(_i,{}),title:"Agile",atGlance:["Agile is a mindset for fast feedback and continuous improvement.","Deliver small increments, learn from users, and adapt quickly.","Works best when requirements evolve and teams collaborate closely."],content:[{h:"Agile basics",p:["Agile focuses on short cycles, frequent delivery, and reacting to change instead of rigid long-term plans.","Agile is not just meetings. It is about measurable delivery and feedback loops."],example:{title:"Example",lines:["Instead of planning 6 months and launching once, ship every 1 to 2 weeks and improve using real user feedback."]}},{h:"Key Agile ideas",p:["Small batches: deliver small features quickly.","Transparency: everyone knows progress and blockers.","Continuous improvement: regularly improve process and code."],example:{title:"Quick mental model",lines:["Agile is like steering a bike with frequent small corrections, not like steering a ship with one huge turn."]}}]},{id:"se-scrum",icon:o.jsx($f,{}),title:"Scrum",atGlance:["Scrum is a popular Agile framework with sprints and roles.","Sprints are short fixed-time cycles with a clear goal.","Daily sync keeps blockers visible and progress real."],content:[{h:"Scrum roles",p:["Product Owner: owns priority and product direction.","Scrum Master: removes blockers and protects process.","Development Team: builds and delivers increment."],example:{title:"Simple example",lines:["PO says: build login first.","Team estimates and commits to sprint goal.","Scrum Master helps remove dependency or delay."]}},{h:"Scrum events",p:["Sprint planning: choose work for sprint.","Daily scrum: short daily sync.","Sprint review: demo what is done.","Sprint retrospective: improve the process."],example:{title:"Why it works",lines:["Because it forces regular delivery and honest reflection."]}}],subList:{title:"Scrum terms",items:[{k:"Sprint",v:"Fixed time box, often 1 to 2 weeks, focused delivery window."},{k:"Backlog",v:"Ordered list of work items."},{k:"Increment",v:"Potentially shippable output at sprint end."},{k:"Definition of Done",v:"Clear checklist for when work is considered complete."}]}},{id:"se-version-control",icon:o.jsx(Ru,{}),title:"Version control",atGlance:["Version control tracks changes and enables safe collaboration.","Branches allow parallel work without breaking main line.","Good commit history reduces debugging pain later."],content:[{h:"Why version control matters",p:["It keeps a history of changes, so you can roll back mistakes and understand what changed.","It supports collaboration by merging work from multiple people safely."],example:{title:"Example",lines:["A bug appears today. You use git blame and commit history to find the exact change that caused it."]}},{h:"Branching and merging basics",p:["Branch is an isolated line of development.","Merge combines changes from branches.","Pull request is a review step before merging."],example:{title:"Healthy workflow",lines:["main stays stable","feature branch for each task","PR review before merge"]}}]},{id:"se-testing",icon:o.jsx(Mi,{}),title:"Testing types",atGlance:["Testing reduces risk and increases confidence in changes.","Different tests catch different failures at different cost.","Aim for fast feedback with unit tests, plus coverage with integration tests."],content:[{h:"Testing overview",p:["Testing verifies expected behavior and prevents regressions.","A good test strategy balances speed, coverage, and maintainability."],example:{title:"Key idea",lines:["Unit tests are fast and cheap.","End-to-end tests are slow and expensive but catch real user flows."]}}],subList:{title:"Common testing types",items:[{k:"Unit testing",v:"Test a small function or module in isolation."},{k:"Integration testing",v:"Test multiple modules together like API + DB."},{k:"End-to-end testing",v:"Test full user flow like login -> checkout."},{k:"Regression testing",v:"Ensure old features still work after changes."},{k:"Smoke testing",v:"Quick check that the app starts and core paths work."},{k:"Performance testing",v:"Measure speed, throughput, latency under load."},{k:"Security testing",v:"Check vulnerabilities like injection and auth flaws."}]}},{id:"se-cicd",icon:o.jsx(Of,{}),title:"CI/CD basics",atGlance:["CI means automatically building and testing changes.","CD means automatically delivering changes to environments.","Automation reduces human mistakes and speeds delivery."],content:[{h:"CI and CD",p:["Continuous Integration means every push triggers build and tests.","Continuous Delivery means changes are always ready to deploy.","Continuous Deployment means changes go live automatically after passing checks."],example:{title:"Example pipeline",lines:["push to repo","run lint + tests","build","deploy to staging","optional approval","deploy to production"]}},{h:"Why CI/CD matters",p:["It catches bugs early, reduces integration problems, and speeds release cycles.","It also enforces consistent checks across the team."],example:{title:"Real-world win",lines:["Without CI, bugs pile up and integration becomes painful near release time."]}}]},{id:"se-code-reviews",icon:o.jsx(Ot,{}),title:"Code reviews",atGlance:["Code reviews improve quality and reduce bugs.","They are also knowledge sharing and consistency enforcement.","Best reviews focus on correctness, readability, and maintainability."],content:[{h:"What to check in a review",p:["Correctness: does it do what it claims.","Edge cases: nulls, errors, retries, timeouts.","Readability: naming, structure, clear intent.","Security: input validation, auth checks.","Performance: avoid accidental O(n^2) and unnecessary calls."],example:{title:"Example comment style",lines:["Instead of saying 'wrong', say 'this can fail when input is empty, add a guard'."]}},{h:"Review anti-patterns",p:["Only style nitpicks and ignoring logic issues.","Huge PRs that are impossible to review properly.","Personal attacks or unclear feedback."],example:{title:"Healthy practice",lines:["Small PRs, clear descriptions, and objective feedback."]}}]},{id:"se-documentation",icon:o.jsx(Cf,{}),title:"Documentation",atGlance:["Docs reduce onboarding time and prevent repeated mistakes.","Good docs explain why, not just what.","Keep docs close to code and update them with changes."],content:[{h:"What to document",p:["Setup steps, environment variables, and run commands.","Architecture overview and key decisions.","API contracts and error handling rules.","Deployment steps and rollback strategy."],example:{title:"Example docs",lines:["README for quick start","ADR for decision logs","API docs for endpoints and payloads"]}},{h:"Common doc mistakes",p:["Docs that go stale because they are not maintained.","Docs that are too long but still miss critical info.","Docs that explain commands but not the reasoning."],example:{title:"Rule",lines:["If docs do not match reality, developers stop trusting them."]}}]},{id:"se-technical-debt",icon:o.jsx(tl,{}),title:"Technical debt",atGlance:["Tech debt is future cost caused by shortcuts today.","Not all debt is bad if it is planned and paid back.","Uncontrolled debt slows development and increases bugs."],content:[{h:"What is technical debt",p:["Technical debt is the long-term cost of quick fixes, messy architecture, missing tests, or rushed decisions.","It usually shows up as slower delivery, higher bug rate, and fear of changing code."],example:{title:"Example",lines:["Hardcoding values to ship quickly works today, but later every change becomes risky and slow."]}},{h:"How to manage it",p:["Track debt like a backlog item, not like a hidden problem.","Refactor in small steps, with tests.","Set a rule: every sprint allocate time to pay debt."],example:{title:"Simple tactic",lines:["When you touch a messy file, improve one small part while keeping behavior same."]}}],callout:{icon:o.jsx(tt,{}),title:"Quick warning signs",lines:["Developers avoid touching certain files.","Build times and deploy times keep increasing.","Small changes break unrelated features.","Same bugs keep coming back."]}}],[]),f=()=>d(u=>!u);return o.jsxs(px.Wrapper,{id:"software-engineering",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Yf,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Software Engineering"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for SDLC, Agile, Scrum, Git workflows, testing, CI/CD, reviews, docs, and technical debt."})]})]}),o.jsxs("button",{type:"button",className:a?"toggleBtn open":"toggleBtn",onClick:f,"aria-expanded":a,"aria-controls":"se-content",title:a?"Collapse Software Engineering notes":"Expand Software Engineering notes",children:[o.jsx("span",{className:"btnIcon",children:a?o.jsx(bt,{}):o.jsx(yt,{})}),o.jsx("span",{className:"btnText",children:a?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"se-content",className:a?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Ai,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan the "At a glance" bullets first. Use examples to lock the idea into memory.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,v)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},v))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Ef,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Talk like an engineer. Mention trade-offs like speed vs safety, quality vs time, and automation vs manual risk."})]})]})]})},fx={Wrapper:Te.section`
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
    `},hx=()=>{const[a,d]=ae.useState(!1),l=ae.useMemo(()=>[{id:"cd-phases",icon:o.jsx(Lt,{}),title:"Compiler Phases",atGlance:["Compiler converts source code into machine code step by step.","Each phase produces output for the next phase.","Errors are found at different phases like syntax vs semantics."],content:[{h:"What is a compiler",p:["A compiler is a program that translates high-level source code into a lower-level form like assembly or machine code.","It also checks errors and tries to optimize code for better performance."],example:{title:"Example",lines:["C or C++ code is compiled into an executable.","Java is compiled into bytecode that runs on the JVM."]}},{h:"Lexical analysis",p:["Lexical analysis breaks the source code into tokens like keywords, identifiers, numbers, and operators.","This phase removes whitespace and comments and produces a token stream for the parser."],example:{title:"Example tokenization",lines:["Code: int x = 10;","Tokens: [int] [identifier:x] [=] [number:10] [;]"]}},{h:"Syntax analysis and parsing",p:["Syntax analysis checks whether the token sequence follows grammar rules.","Parsing builds a parse tree or syntax tree that represents the structure of the program."],example:{title:"Example",lines:["Code: x = 10 + 2","Parser checks that assignment and expression rules are valid."]}},{h:"Semantic analysis",p:["Semantic analysis checks meaning, not just grammar.","It checks types, variable declarations, scope rules, and function argument matching."],example:{title:"Example semantic errors",lines:["int x = 'hello' - type mismatch","y = 5 - y not declared"]}},{h:"Intermediate code generation",p:["Compiler converts the syntax tree into an intermediate representation (IR).","IR is easier to optimize and can be reused for different target machines."],example:{title:"Example IR idea",lines:["Expression: a = b + c","IR: t1 = b + c, a = t1"]}},{h:"Optimization",p:["Optimization improves performance or reduces memory without changing program output.","It can remove dead code, reduce redundant calculations, and simplify expressions."],example:{title:"Example optimization",lines:["x = 2 * 8 can become x = 16","Repeated: (a + b) used many times can be computed once"]}},{h:"Code generation",p:["Final phase converts IR into target code like assembly or machine instructions.","It includes register allocation and instruction selection."],example:{title:"Example output",lines:["IR becomes assembly instructions like MOV, ADD, JMP","Then assembler turns it into machine code bytes"]}}]},{id:"cd-parsing",icon:o.jsx(Du,{}),title:"Parsing Types",atGlance:["LL parsing is top-down. It predicts productions from left to right.","LR parsing is bottom-up. It reduces input into grammar rules.","LR is more powerful than LL for many grammars."],content:[{h:"Parsing in simple words",p:["Parsing is the process of taking tokens and building structure.","The parser tries to match token sequences to grammar rules so the compiler understands code."],example:{title:"Beginner mental model",lines:["Tokens are like words.","Grammar is like sentence rules.","Parser checks if the sentence is valid and builds a tree."]}}],subList:{title:"Common parser families",items:[{k:"LL parser",v:"Top-down parsing. Reads input Left to right and produces Leftmost derivation. Often easier to implement but less powerful."},{k:"LR parser",v:"Bottom-up parsing. Reads input Left to right and produces Rightmost derivation in reverse. More powerful and common in real compilers."}]},callout:{icon:o.jsx(tt,{}),title:"Quick intuition",lines:["LL tries to expand rules to match input.","LR tries to reduce input back into rules.","If grammar is complex, LR usually handles it better."]}},{id:"cd-automata",icon:o.jsx(Jt,{}),title:"Automata Basics",atGlance:["Automata are machines that recognize patterns.","Lexer often uses automata to recognize tokens.","DFA is deterministic, NFA is nondeterministic."],content:[{h:"Why automata matters in compilers",p:["Lexical analysis needs a fast way to recognize patterns like identifiers, numbers, and keywords.","Regular expressions define token patterns, and automata can implement them efficiently."],example:{title:"Example",lines:["Identifier pattern: letter followed by letters or digits","Number pattern: digits with optional decimal part"]}}],subList:{title:"DFA vs NFA",items:[{k:"NFA",v:"Nondeterministic Finite Automaton. Can have multiple possible next states for the same input. Easier to build from regex."},{k:"DFA",v:"Deterministic Finite Automaton. Only one next state per input. Faster to run. NFA can be converted to DFA."}]},callout:{icon:o.jsx(Xt,{}),title:"Common interview note",lines:["Regex to NFA is straightforward.","NFA to DFA uses subset construction.","DFA is usually preferred for fast tokenizing."]}},{id:"cd-mini-map",icon:o.jsx(Uf,{}),title:"At a Glance Map",atGlance:["Lexer turns text into tokens.","Parser turns tokens into a tree.","Semantic phase checks meaning and types."],content:[],subList:{title:"One-line flow",items:[{k:"Lexical",v:"Characters to tokens"},{k:"Parsing",v:"Tokens to parse tree or AST"},{k:"Semantic",v:"AST plus symbol table checks"},{k:"IR",v:"AST to intermediate code"},{k:"Optimize",v:"IR improvements"},{k:"Generate",v:"IR to assembly or machine code"}]}}],[]),f=()=>d(u=>!u);return o.jsxs(fx.Wrapper,{id:"compiler-design",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Ri,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Compiler Design"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for compiler phases, parsing, and automata used in lexing."})]})]}),o.jsxs("button",{type:"button",className:a?"toggleBtn open":"toggleBtn",onClick:f,"aria-expanded":a,"aria-controls":"cd-content",title:a?"Collapse compiler notes":"Expand compiler notes",children:[o.jsx("span",{className:"btnIcon",children:a?o.jsx(bt,{}):o.jsx(yt,{})}),o.jsx("span",{className:"btnText",children:a?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"cd-content",className:a?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Kt,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan "At a glance" first. Then read examples to connect grammar and automata ideas to real code behavior.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,v)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},v))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Ff,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Explain the pipeline with one small example and show where each error type is caught: lexical, syntax, semantic."})]})]})]})},xx={Wrapper:Te.section`
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
    `},gx=()=>{const[a,d]=ae.useState(!1),l=ae.useMemo(()=>[{id:"ds-models",icon:o.jsx(dn,{}),title:"Distributed models",atGlance:["Distributed system means multiple machines working together as one system.","Main pain is failures and network delays, not just code.","Design is about trade-offs: consistency, availability, latency."],content:[{h:"What is a distributed model",p:["A distributed model describes how components communicate and coordinate when they are running on different machines.","Unlike single-machine programs, distributed systems must handle partial failures, slow networks, and out-of-order messages."],example:{title:"Example",lines:["A chat app uses multiple servers: one for authentication, one for messaging, one for storage. They coordinate over the network."]}},{h:"Common models",p:["Client-server is the most common model where clients request and servers respond.","Peer-to-peer systems allow nodes to act as both client and server.","Microservices is a distributed model where each service owns a small responsibility and communicates via APIs or events."],example:{title:"Quick intuition",lines:["Client-server is simpler.","Peer-to-peer can scale but is harder to coordinate.","Microservices improve isolation but increase coordination complexity."]}},{h:"Why distributed is hard",p:["Network is unreliable: packets can be lost, delayed, duplicated, or arrive out of order.","You cannot assume all machines share the same clock or fail at the same time.","Some nodes may be alive but unreachable, creating split-brain situations."],example:{title:"Classic headache",lines:["A service times out and retries, but the original request actually succeeded, causing duplicate operations."]}}]},{id:"ds-rpc",icon:o.jsx(_u,{}),title:"RPC",atGlance:["RPC makes a remote call look like a local function call.","Failures are normal: timeouts and retries must be designed carefully.","Idempotency is your best friend for safe retries."],content:[{h:"What is RPC",p:["RPC (Remote Procedure Call) lets a program call a function on another machine as if it was local.","Under the hood it does serialization, networking, and deserialization."],example:{title:"Example",lines:["orderService.createOrder(userId, items) calls a remote service over the network."]}},{h:"Timeouts and retries",p:["Timeout does not mean failure, it means you did not get a response in time.","Retries can cause duplicate work if the server actually processed the request."],example:{title:"Safe retry example",lines:["Use an idempotency key like orderId so repeating the same request does not create multiple orders."]}},{h:"At-least-once vs at-most-once",p:["At-least-once delivery means retries happen and duplicates are possible.","At-most-once delivery tries to avoid duplicates but can drop requests if not careful.","Exactly-once is extremely hard and usually simulated with idempotency and deduplication."],example:{title:"Mental model",lines:["In distributed systems, you usually choose between occasional duplicates or occasional drops, then build safety around it."]}}]},{id:"ds-consensus",icon:o.jsx(Mi,{}),title:"Consensus algorithms",atGlance:["Consensus means nodes agree on one value, even with failures.","Used for leader election and replicated logs.","Raft is easier to understand, Paxos is more theoretical."],content:[{h:"What is consensus",p:["Consensus algorithms help a group of machines agree on a single decision like who is leader or what the next log entry is.","This is critical when nodes can fail or messages can be delayed."],example:{title:"Example",lines:["A database cluster needs one leader to accept writes. Consensus elects that leader."]}},{h:"When you need consensus",p:["Leader election: choose one leader among many nodes.","Replicated state machine: keep multiple copies of data in sync using a shared log of operations.","Coordination services: configuration, locks, membership."],example:{title:"Real-world systems",lines:["ZooKeeper and etcd use consensus-like mechanisms for coordination."]}}]},{id:"ds-2pc",icon:o.jsx(nl,{}),title:"Two phase commit",atGlance:["2PC coordinates a transaction across multiple services or databases.","Phase 1 asks if everyone can commit, Phase 2 commits or aborts.","Main downside is blocking if coordinator fails."],content:[{h:"What is Two Phase Commit",p:["Two Phase Commit (2PC) is a protocol to make multiple participants commit a transaction together.","It is used when one logical operation touches multiple databases or services and you want all-or-nothing behavior."],example:{title:"Example",lines:["Transfer money: debit account service and credit another service must both commit or both rollback."]}},{h:"How it works",p:["Phase 1 (prepare): coordinator asks participants to prepare and vote yes or no.","Phase 2 (commit): if all vote yes, coordinator tells everyone to commit, else abort."],example:{title:"Simple flow",lines:["Coordinator -> prepare","Participants -> yes/no","Coordinator -> commit/abort"]}},{h:"Why it can block",p:["If coordinator crashes after participants prepared, they may be stuck waiting.","This makes 2PC a blocking protocol and less ideal under failures."],example:{title:"Practical note",lines:["Modern systems often prefer sagas and compensating actions instead of strict 2PC across services."]}}]},{id:"ds-paxos",icon:o.jsx(Lt,{}),title:"Paxos",atGlance:["Paxos is a family of consensus algorithms.","It is correct but hard to implement and explain.","Often learned for theory, not written from scratch in apps."],content:[{h:"What is Paxos",p:["Paxos is a consensus protocol that ensures safety even with failures and message delays.","It uses roles like proposer, acceptor, and learner to agree on values."],example:{title:"Beginner intuition",lines:["Nodes propose values, acceptors choose one based on rules that prevent conflicting decisions."]}},{h:"Why Paxos is famous",p:["It proved that consensus can be achieved safely in unreliable networks under certain assumptions.","Many practical systems are inspired by Paxos or use simplified variants."],example:{title:"Practical reality",lines:["You usually use existing libraries or systems rather than implementing Paxos directly."]}}]},{id:"ds-raft",icon:o.jsx(Kt,{}),title:"Raft",atGlance:["Raft is designed to be understandable and practical.","It uses leader-based replication with a replicated log.","Main parts: leader election, log replication, safety."],content:[{h:"What is Raft",p:["Raft is a consensus algorithm that keeps multiple nodes consistent by using a single leader.","The leader replicates a log of operations to followers."],example:{title:"Example",lines:["A config store like etcd can use Raft so all nodes agree on the same configuration changes."]}},{h:"Leader election",p:["Nodes start as followers. If they do not hear from a leader, they become candidates.","Candidates ask for votes. Majority vote wins and becomes leader."],example:{title:"Key idea",lines:["Majority quorum prevents split-brain decisions."]}},{h:"Log replication",p:["Clients send writes to leader. Leader appends to its log and replicates to followers.","Once a majority confirms, the entry is committed and applied."],example:{title:"Why it works",lines:["Majority confirmation ensures the committed history survives node failures."]}}]},{id:"ds-consistency",icon:o.jsx(Jt,{}),title:"Consistency models",atGlance:["Consistency is about what values reads can return in a distributed system.","Strong consistency feels like a single database.","Weaker models allow stale reads but reduce latency and improve availability."],content:[{h:"Strong consistency",p:["After a write completes, all reads return the latest value.","Often needs coordination like consensus or synchronous replication."],example:{title:"Example",lines:["Bank balance reads should usually be strongly consistent to avoid showing wrong money."]}},{h:"Eventual consistency",p:["If no new updates happen, all replicas will eventually converge to the same value.","Reads can be stale for a short time, but system stays available under partitions."],example:{title:"Example",lines:["Social media like counts can be eventually consistent because slight delay is acceptable."]}},{h:"Trade-off mindset",p:["Strong consistency often increases latency because nodes must coordinate.","Eventual consistency improves availability and speed but needs conflict handling."],example:{title:"Rule of thumb",lines:["Money and security need stronger consistency.","Analytics and feeds can accept eventual consistency."]}}]},{id:"ds-locking",icon:o.jsx(xn,{}),title:"Distributed locking",atGlance:["Distributed lock coordinates access to a shared resource across machines.","Hard because locks can get stuck if node crashes.","Leases and timeouts help prevent permanent locks."],content:[{h:"What is a distributed lock",p:["A distributed lock ensures only one node performs a critical operation at a time, across a cluster.","This is useful for leader-only jobs, scheduled tasks, or preventing double processing."],example:{title:"Example",lines:["Only one worker should run daily billing job even if 5 instances are running."]}},{h:"Why it is tricky",p:["If a node holding the lock crashes, the lock can remain stuck unless there is a timeout or lease.","Network partitions can cause two nodes to think they have the lock if design is weak."],example:{title:"Classic failure",lines:["Node A acquires lock, network splits, Node B also acquires lock and both process same job."]}},{h:"Leases and fencing tokens",p:["Lease means lock expires after time unless renewed.","Fencing token is a monotonically increasing number that prevents old lock holders from making writes."],example:{title:"Simple safety idea",lines:["Resource only accepts operations with the newest token, so stale nodes cannot damage data."]}}],callout:{icon:o.jsx(tl,{}),title:"Locking is expensive",lines:["Prefer designs that avoid distributed locks when possible.","If you must lock, use proven systems like etcd or ZooKeeper and design for failure."]}}],[]),f=()=>d(u=>!u);return o.jsxs(xx.Wrapper,{id:"distributed-systems",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(dn,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Distributed Systems"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for distributed models, RPC, consensus, 2PC, Paxos, Raft, consistency, and distributed locking."})]})]}),o.jsxs("button",{type:"button",className:a?"toggleBtn open":"toggleBtn",onClick:f,"aria-expanded":a,"aria-controls":"ds-content",title:a?"Collapse Distributed Systems notes":"Expand Distributed Systems notes",children:[o.jsx("span",{className:"btnIcon",children:a?o.jsx(bt,{}):o.jsx(yt,{})}),o.jsx("span",{className:"btnText",children:a?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"ds-content",className:a?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(tt,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan "At a glance" first. Then read examples. Distributed systems are mostly about failure cases and trade-offs.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,v)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},v))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,v)=>o.jsx("li",{children:p},v))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Xt,{})}),o.jsx("div",{className:"footerText",children:'Interview tip - Always mention network failures, timeouts, retries, and trade-offs. In distributed systems, "works on my machine" is a joke, not a plan.'})]})]})]})},vx={Wrapper:Te.section`
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
    `},yx=()=>{const[a,d]=ae.useState(!1),l=ae.useMemo(()=>[{id:"pc-parallel-vs-concurrent",icon:o.jsx(Du,{}),title:"Parallel vs Concurrent",atGlance:["Concurrency is about dealing with many things at once.","Parallelism is about doing many things at the same time.","You can have concurrency without parallelism on a single core."],content:[{h:"Parallelism",p:["Parallelism means tasks literally run at the same time using multiple CPU cores or GPUs.","Goal is to reduce total time by splitting work into parts that can execute simultaneously."],example:{title:"Example",lines:["Rendering 4K video by splitting frames across multiple cores.","Processing a large array by dividing it into chunks and computing each chunk on different cores."]}},{h:"Concurrency",p:["Concurrency means making progress on multiple tasks by switching between them.","Even on one CPU core, OS can switch tasks quickly so the system feels like it runs many tasks together."],example:{title:"Example",lines:["A browser handling UI events while also downloading data.","Node.js event loop doing many I/O tasks by switching callbacks."]}},{h:"Key difference (memory intuition)",p:["Concurrency is about structure and coordination.","Parallelism is about hardware speedup.","Parallelism usually introduces shared data issues, so synchronization matters."],example:{title:"Quick check",lines:["Single core - can be concurrent, cannot be truly parallel.","Multi core - can be both concurrent and parallel."]}}]},{id:"pc-amdahl",icon:o.jsx(Jt,{}),title:"Amdahl's Law",atGlance:["Speedup is limited by the serial part you cannot parallelize.","Even 1000 cores cannot fix a big serial bottleneck.","Optimize the serial part first for real gains."],content:[{h:"What it says",p:["Amdahl's Law states that the maximum speedup of a program from parallelization is limited by the fraction that must run sequentially.","If a fraction of your code is serial, that part becomes the ceiling on speedup."],example:{title:"Beginner formula intuition",lines:["If 10% is serial, best possible speedup is about 10x, even with infinite processors.","If 30% is serial, best possible speedup is about 3.33x."]}},{h:"Why it matters",p:["Parallel optimization only helps the parallel portion.","Real systems often have serial bottlenecks like I/O, locks, or a single-threaded coordinator."],example:{title:"Real-world example",lines:["A database query might be parallel, but final aggregation or locking can be serial and limit speed."]}},{h:"Practical takeaway",p:["Measure before adding threads.","Reduce serial work, reduce lock contention, batch I/O, and avoid unnecessary synchronization."],example:{title:"Checklist",lines:["Reduce critical sections.","Avoid a single global lock.","Use chunked processing to reduce coordination overhead."]}}],callout:{icon:o.jsx(tt,{}),title:"Mental model",lines:["Parallelism is not magic.","If your program spends time waiting on one slow step, more cores just wait faster."]}},{id:"pc-simd",icon:o.jsx(rl,{}),title:"SIMD",atGlance:["SIMD means one instruction processes multiple data items.","Great for arrays, vectors, images, and signal processing.","It is parallelism inside the CPU itself."],content:[{h:"What is SIMD",p:["SIMD stands for Single Instruction Multiple Data.","CPU executes one instruction that applies to a vector of data values at once."],example:{title:"Example",lines:["Add 8 integers in one CPU instruction using vector registers.","Apply the same brightness change to many pixels in one step."]}},{h:"Where it shines",p:["SIMD is strongest when the same operation repeats across large data sets.","Common in image filters, audio processing, machine learning inference, and physics simulations."],example:{title:"Quick intuition",lines:["Loops over arrays can sometimes be auto-vectorized by compilers."]}},{h:"Limitations",p:["SIMD does not help much when logic is branch-heavy or each element needs different work.","Memory alignment and data layout matter for best performance."],example:{title:"Example",lines:["If each element has different if-else decisions, SIMD lanes become inefficient."]}}]},{id:"pc-multithreading",icon:o.jsx(Lt,{}),title:"Multithreading",atGlance:["Multiple threads run inside one process.","Threads share memory so coordination and locking matter.","Too many threads can slow things down due to context switching and contention."],content:[{h:"What multithreading gives",p:["Threads can run in parallel on multiple CPU cores.","Threads can also overlap work like computation plus I/O to improve responsiveness."],example:{title:"Example",lines:["UI thread stays responsive while a worker thread loads data.","A server handles many requests using a thread pool."]}},{h:"Costs and risks",p:["Shared memory can cause race conditions if not protected.","Locks can cause contention and reduce speedup.","Context switching has overhead, especially with too many active threads."],example:{title:"Example",lines:["A single global mutex can make 16 threads behave like 1 thread."]}},{h:"Beginner tips",p:["Prefer a fixed-size thread pool instead of creating unlimited threads.","Keep critical sections small.","Batch work into chunks to reduce synchronization overhead."],example:{title:"Rule of thumb",lines:["If CPU-bound, keep threads near number of cores.","If I/O-bound, you can have more, but still avoid extreme counts."]}}]},{id:"pc-gpu-basics",icon:o.jsx(Kt,{}),title:"GPU Basics",atGlance:["GPU is built for massive parallel work on many small tasks.","Best for data-parallel workloads like vectors, matrices, images.","GPU has high throughput but higher latency and transfer overhead."],content:[{h:"CPU vs GPU mindset",p:["CPU has few powerful cores optimized for low-latency, complex control flow.","GPU has many smaller cores optimized for throughput and doing the same operation across lots of data."],example:{title:"Example",lines:["CPU is like a few expert workers.","GPU is like thousands of fast workers doing the same simple task."]}},{h:"Where GPU helps most",p:["Matrix multiplication, image processing, physics simulation, deep learning training and inference.","Anything that can be expressed as the same operation over big arrays is a good match."],example:{title:"Example",lines:["Multiply two large matrices for ML workloads.","Apply blur filter to an image across millions of pixels."]}},{h:"GPU overhead and limitations",p:["Moving data from CPU memory to GPU memory costs time.","Branch-heavy code performs poorly on GPUs.","Small jobs may be faster on CPU because GPU setup overhead dominates."],example:{title:"Quick intuition",lines:["GPU is worth it when the workload is large and repetitive."]}}],callout:{icon:o.jsx(Xt,{}),title:"Interview edge",lines:["When talking about GPU, always mention trade-off.","High throughput, but transfer overhead and branch divergence can reduce gains."]}}],[]),f=()=>d(u=>!u);return o.jsxs(vx.Wrapper,{id:"parallel-computing",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Ei,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Parallel Computing"}),o.jsx("p",{className:"sub",children:"At-a-glance revision for parallelism, speedup limits, SIMD, multithreading, and GPU basics."})]})]}),o.jsxs("button",{type:"button",className:a?"toggleBtn open":"toggleBtn",onClick:f,"aria-expanded":a,"aria-controls":"pc-content",title:a?"Collapse Parallel Computing notes":"Expand Parallel Computing notes",children:[o.jsx("span",{className:"btnIcon",children:a?o.jsx(bt,{}):o.jsx(yt,{})}),o.jsx("span",{className:"btnText",children:a?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"pc-content",className:a?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Kt,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Start with "At a glance" bullets, then read examples to build intuition.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,v)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},v))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,v)=>o.jsx("li",{children:p},v))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(tt,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Always mention speedup limits and overheads like synchronization, communication, and data transfer when discussing parallel performance."})]})]})]})},bx={Wrapper:Te.section`
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
    `},wx=()=>{const[a,d]=ae.useState(!1),l=ae.useMemo(()=>[{id:"toc-automata",icon:o.jsx(Di,{}),title:"Automata",atGlance:["Automata are abstract machines that read input symbols and change states.","Finite Automata are used for pattern matching and tokenization.","Different automata have different power: DFA < NFA < PDA < TM."],content:[{h:"What is an automaton",p:["An automaton is a mathematical model of a machine that processes input step by step.","It has states and rules for moving between states based on input symbols.","It helps us formally define what problems a machine can solve."],example:{title:"Example",lines:["A simple login validator can be seen as a state machine: start -> reading -> valid or invalid."]}},{h:"Finite Automata (DFA and NFA)",p:["DFA (Deterministic Finite Automaton) has exactly one transition for each input symbol from a state.","NFA (Non-deterministic Finite Automaton) can have multiple possible transitions for the same symbol.","DFA and NFA accept the same class of languages called regular languages."],example:{title:"Quick intuition",lines:["NFA is easier to design.","DFA is easier to execute directly.","Compilers usually convert NFA to DFA internally."]}}],subList:{title:"Common automata types",items:[{k:"DFA",v:"Deterministic, one path only. Used for fast matching."},{k:"NFA",v:"Non-deterministic, multiple paths. Same power as DFA."},{k:"PDA",v:"Pushdown Automaton with a stack. Used for CFG languages."},{k:"TM",v:"Turing Machine. Most powerful classical model."}]}},{id:"toc-regex",icon:o.jsx(Lf,{}),title:"Regular expressions",atGlance:["Regex describes regular languages.","Regex is equivalent in power to DFA and NFA.","Used heavily in lexers, search, validation, and parsing preparation."],content:[{h:"What regex is",p:["Regular expressions are patterns that describe sets of strings.","They are not just a programming feature. They come from formal language theory.","Regex patterns can be converted to automata, and automata can be converted back to regex."],example:{title:"Example patterns",lines:["a* means empty or many a","(ab)* means repeating ab blocks","a|b means either a or b","a.b means a then any char then b (programming regex style)"]}},{h:"Where regex fits in real systems",p:["Lexical analysis in compilers uses regex to define tokens like identifiers and numbers.","Search tools, log filters, and input validators use regex for quick matching.","Regex cannot match nested structures properly, that requires CFG."],example:{title:"Limitation example",lines:["Matching balanced parentheses is not regular, so pure regex cannot do it correctly."]}}]},{id:"toc-cfg",icon:o.jsx(Ri,{}),title:"Context free grammar",atGlance:["CFG describes languages with nested structure.","Used for programming language syntax, parsers, and compilers.","CFG is more powerful than regex because it can represent recursion."],content:[{h:"What CFG is",p:["A Context Free Grammar is a set of rules that generate strings by expanding non-terminals.","It is called context free because a rule can be applied regardless of surrounding symbols.","CFG is the foundation for parsing and syntax checking."],example:{title:"Mini CFG example",lines:["E -> E + E | E * E | (E) | id","This generates arithmetic expressions like id+id*id."]}},{h:"PDA connection",p:["CFG languages are accepted by Pushdown Automata (PDA).","The stack helps handle nesting like parentheses and function calls."],example:{title:"Example",lines:["Balanced parentheses can be recognized using a stack, push on '(' and pop on ')'."]}}],subList:{title:"Key CFG terms",items:[{k:"Terminal",v:"Actual symbols that appear in output string."},{k:"Non-terminal",v:"Variables like E, S used for expansions."},{k:"Production",v:"Rules like S -> aSb | ab."},{k:"Parse tree",v:"Tree showing grammar expansions for a string."}]}},{id:"toc-tm",icon:o.jsx(Kt,{}),title:"Turing machine",atGlance:["Turing Machine is a mathematical model of a general-purpose computer.","Has an infinite tape, a head, and a state machine controller.","Used to define what it means for a problem to be computable."],content:[{h:"Core idea",p:["A Turing Machine reads and writes symbols on a tape and moves left or right.","It can simulate any algorithm, given enough time and tape space.","This model is used to define the limits of computation."],example:{title:"Mental model",lines:["Tape = memory","Head = pointer that reads and writes","State machine = program logic"]}},{h:"Why TM matters",p:["It helps answer: can a machine solve this problem at all, even with infinite time.","This separates computable problems from non-computable problems."],example:{title:"Example",lines:["Halting problem is not computable, no TM can solve it for all programs."]}}]},{id:"toc-decidability",icon:o.jsx(Xt,{}),title:"Decidability",atGlance:["Decidable means there exists an algorithm that always halts with yes or no.","Undecidable means no algorithm can solve it for all inputs.","Halting problem is the classic undecidable example."],content:[{h:"Decidable problems",p:["A problem is decidable if some Turing Machine halts on every input and answers correctly.","If it always finishes, we say the language is recursive."],example:{title:"Example",lines:["Checking if a number is even is decidable, algorithm halts quickly."]}},{h:"Undecidable problems",p:["A problem is undecidable if no algorithm exists that always halts and answers correctly for every input.","These are not problems of speed, they are problems of possibility."],example:{title:"Classic example",lines:["Halting problem: given a program and input, decide whether it stops or runs forever."]}}],callout:{icon:o.jsx(tt,{}),title:"Key difference",lines:["Decidable means always halts with correct yes or no.","Recognizable means may loop forever on some inputs but halts on accepted ones."]}},{id:"toc-pnp",icon:o.jsx(Jt,{}),title:"P vs NP",atGlance:["P problems are solvable fast.","NP problems have solutions verifiable fast.","Big open question: Is P equal to NP."],content:[{h:"What is P",p:["P is the set of decision problems solvable in polynomial time, like O(n), O(n^2), O(n^3).","These are considered efficiently solvable."],example:{title:"Example",lines:["Shortest path in a graph can be solved in polynomial time."]}},{h:"What is NP",p:["NP is the set of decision problems where a proposed solution can be verified in polynomial time.","Important point: NP does not mean not polynomial. It means verifiable fast."],example:{title:"Example",lines:["Given a Sudoku solution, checking it is correct is fast, but finding it may be hard."]}},{h:"NP-complete intuition",p:["NP-complete problems are the hardest problems in NP.","If you solve one NP-complete problem in polynomial time, you can solve all NP problems in polynomial time."],example:{title:"Example",lines:["SAT is NP-complete. Many problems reduce to SAT."]}}],subList:{title:"Fast revision table",items:[{k:"P",v:"Solve fast (polynomial time)."},{k:"NP",v:"Verify fast (polynomial time)."},{k:"NP-complete",v:"Hardest in NP, all NP problems reduce to these."},{k:"NP-hard",v:"At least as hard as NP-complete, may not be in NP."}]}}],[]),f=()=>d(u=>!u);return o.jsxs(bx.Wrapper,{id:"theory-of-computation",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Lt,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Theory of Computation"}),o.jsx("p",{className:"sub",children:"Automata, regex, CFG, Turing machine, decidability, and P vs NP - structured for quick revision."})]})]}),o.jsxs("button",{type:"button",className:a?"toggleBtn open":"toggleBtn",onClick:f,"aria-expanded":a,"aria-controls":"toc-content",title:a?"Collapse ToC notes":"Expand ToC notes",children:[o.jsx("span",{className:"btnIcon",children:a?o.jsx(bt,{}):o.jsx(yt,{})}),o.jsx("span",{className:"btnText",children:a?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"toc-content",className:a?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(tt,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Start with "At a glance". Then read examples to lock the mental model.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"At-a-glance summary and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,v)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},v))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(Xt,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Explain power levels using the ladder: regex and DFA handle regular patterns, CFG handles nested structures, Turing machine defines full computability."})]})]})]})},kx={Wrapper:Te.section`
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
    `},jx=()=>{const[a,d]=ae.useState(!1),l=ae.useMemo(()=>[{id:"crypto-symmetric",icon:o.jsx(Af,{}),title:"Symmetric encryption",atGlance:["Same secret key is used to encrypt and decrypt.","Very fast, best for large data like files and streams.","Key sharing is the main problem - you must deliver the secret safely."],content:[{h:"What it is",p:["Symmetric encryption uses one shared secret key for both encryption and decryption.","If both sides have the same key, they can protect data from eavesdroppers."],example:{title:"Example",lines:["You encrypt a file with key K.","Anyone with key K can decrypt it.","If K leaks, security is gone."]}},{h:"Where it is used",p:["Disk encryption, backups, secure messaging payloads, VPN data channels, HTTPS session data.","In TLS, symmetric keys are used after a secure handshake because symmetric encryption is fast."],example:{title:"Practical intuition",lines:["Symmetric is like one locker key shared by two people. Fast and simple, but you must hand over the key safely."]}},{h:"Important idea - key distribution",p:["The hardest part is sharing the secret key without attackers seeing it.","That is why we combine symmetric encryption with asymmetric encryption in modern systems."],example:{title:"Real-world pattern",lines:["Asymmetric is used to exchange a symmetric session key.","Then symmetric is used for the actual data."]}}],subList:{title:"Common terms",items:[{k:"Block cipher",v:"Encrypts fixed-size blocks. Example: AES. Often used with a mode like GCM."},{k:"Stream cipher",v:"Encrypts data as a stream. Useful for continuous data."},{k:"Nonce / IV",v:"Random or unique value used to make encryption safe even for repeated messages."}]}},{id:"crypto-asymmetric",icon:o.jsx(xn,{}),title:"Asymmetric encryption",atGlance:["Uses a public key and a private key.","Public key can be shared openly, private key must stay secret.","Great for key exchange and identity, slower than symmetric encryption."],content:[{h:"What it is",p:["Asymmetric encryption uses a pair of keys: public and private.","Data encrypted with the public key can be decrypted only with the matching private key."],example:{title:"Example",lines:["You publish your public key on your website.","People encrypt secrets for you using that public key.","Only you can decrypt them using your private key."]}},{h:"Why it matters",p:["It solves the key distribution problem for symmetric encryption.","It also enables identity and trust mechanisms using digital signatures."],example:{title:"Practical intuition",lines:["Asymmetric is like a mailbox slot: anyone can drop a letter in, only the owner can open it."]}},{h:"Where it is used",p:["TLS handshakes, secure key exchange, encrypting small secrets, signing software updates, SSH authentication.","It is usually not used to encrypt large files directly because it is slower."],example:{title:"Common real use",lines:["Asymmetric sets up trust and exchanges keys.","Symmetric does the heavy lifting for bulk data."]}}],subList:{title:"Common terms",items:[{k:"Public key",v:"Shared key used to encrypt or verify signatures."},{k:"Private key",v:"Secret key used to decrypt or create signatures."},{k:"Key exchange",v:"Process to establish a shared secret securely over an insecure network."}]}},{id:"crypto-hashing",icon:o.jsx(Bf,{}),title:"Hashing",atGlance:["Hashing is one-way, not reversible.","Same input produces the same output, but you cannot go backward.","Used for integrity checks and password storage (with salt)."],content:[{h:"What it is",p:["A hash function converts input data into a fixed-size output (hash or digest).","Good cryptographic hashes are fast to compute but extremely hard to reverse or collide."],example:{title:"Example",lines:["hash('hello') = some digest","hash('hello') will always produce the same digest","hash('Hello') produces a different digest"]}},{h:"Integrity checks",p:["If you download a file, you can compare its hash with the expected hash to detect tampering.","Even a 1-bit change creates a very different hash (avalanche effect)."],example:{title:"Example",lines:["Vendor posts SHA-256 hash of an installer.","You compute SHA-256 locally and compare.","If it matches, file is likely intact."]}},{h:"Password storage basics",p:["Passwords should not be encrypted and stored.","Instead store a slow hash of the password with a unique salt.","Salt prevents attackers from using precomputed tables."],example:{title:"Example",lines:["Store: salt + hash(salt + password)","On login: compute again and compare hashes"]}}],subList:{title:"Key properties",items:[{k:"One-way",v:"You cannot reverse a hash to get the original input."},{k:"Collision resistance",v:"Hard to find two different inputs with the same hash."},{k:"Avalanche effect",v:"Small input change causes huge output change."}]}},{id:"crypto-signatures",icon:o.jsx(Mi,{}),title:"Digital signatures",atGlance:["Proves who created a message and that it was not altered.","Uses private key to sign, public key to verify.","Gives authenticity and integrity, not secrecy."],content:[{h:"What it is",p:["A digital signature is created using a private key and verified using a public key.","It proves the sender owned the private key and the message was not modified."],example:{title:"Example",lines:["Sender signs the hash of a message with private key.","Receiver verifies signature using sender's public key."]}},{h:"What it gives you",p:["Integrity - message not changed.","Authenticity - message came from holder of private key.","Non-repudiation concept - signer cannot easily deny signing later."],example:{title:"Practical intuition",lines:["Signature is like a tamper-proof seal plus identity stamp."]}},{h:"Common uses",p:["Signed software updates, package registries, document signing, certificates, blockchain transactions.","TLS uses server certificates and signatures to prove server identity."],example:{title:"Example",lines:["When you install a package, signature verification helps ensure it was published by the real author."]}}],subList:{title:"Remember this",items:[{k:"Sign",v:"Private key signs."},{k:"Verify",v:"Public key verifies."},{k:"Not encryption",v:"Signature does not hide data. It proves integrity and identity."}]}},{id:"crypto-tls",icon:o.jsx(dn,{}),title:"TLS basics",atGlance:["TLS secures network communication like HTTPS.","Handshake sets up identity and shared keys.","After handshake, fast symmetric encryption protects data."],content:[{h:"What TLS does",p:["TLS provides privacy, integrity, and server authenticity for network traffic.","It prevents attackers from reading or modifying data in transit."],example:{title:"Example",lines:["HTTPS is HTTP running inside a TLS tunnel."]}},{h:"High-level handshake flow",p:["Client connects and asks server to prove identity.","Server sends certificate containing its public key.","Client verifies certificate using trusted CAs.","Client and server establish a shared session key.","All application data after this uses symmetric encryption."],example:{title:"Mental model",lines:["Handshake is about trust and key setup.","Session is about fast encrypted data transfer."]}},{h:"What can go wrong",p:["If certificate validation is skipped, attackers can do man-in-the-middle attacks.","Bad random number generation can weaken security.","Outdated TLS versions can have known vulnerabilities."],example:{title:"Developer tip",lines:["Never disable TLS verification in production code."]}}],callout:{icon:o.jsx(Ot,{}),title:"TLS gives you",lines:["Confidentiality - attackers cannot read your data.","Integrity - attackers cannot silently modify your data.","Authenticity - you can verify you are talking to the right server."]}},{id:"crypto-pki",icon:o.jsx(Lt,{}),title:"Public key infrastructure",atGlance:["PKI is the system that makes public keys trustworthy.","Certificates bind identity to a public key.","Certificate Authorities (CAs) act as trusted issuers."],content:[{h:"What PKI is",p:["PKI is a set of rules, roles, and processes to create, manage, and verify digital certificates.","It answers the question: how do you know this public key really belongs to this website or person?"],example:{title:"Example",lines:["A certificate says: this public key belongs to example.com and is signed by a trusted CA."]}},{h:"Certificates",p:["A certificate contains the public key and identity details like domain name.","It is signed by a CA so clients can verify it using the CA public key that is already trusted."],example:{title:"Mental model",lines:["Certificate is an ID card for a public key."]}},{h:"Trust chain",p:["Browsers and operating systems ship with a list of trusted root CAs.","A website certificate is verified by walking a chain up to a trusted root."],example:{title:"Example",lines:["Server cert -> intermediate cert -> root cert (trusted)."]}}],subList:{title:"Key PKI terms",items:[{k:"CA",v:"Certificate Authority. Issues certificates and signs them."},{k:"Certificate",v:"Binds identity to a public key, signed by CA."},{k:"Trust store",v:"List of trusted root CA certificates in OS/browser."}]}}],[]),f=()=>d(u=>!u);return o.jsxs(kx.Wrapper,{id:"cryptography",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Ot,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Cryptography"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for encryption, hashing, signatures, TLS, and PKI."})]})]}),o.jsxs("button",{type:"button",className:a?"toggleBtn open":"toggleBtn",onClick:f,"aria-expanded":a,"aria-controls":"crypto-content",title:a?"Collapse cryptography notes":"Expand cryptography notes",children:[o.jsx("span",{className:"btnIcon",children:a?o.jsx(bt,{}):o.jsx(yt,{})}),o.jsx("span",{className:"btnText",children:a?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"crypto-content",className:a?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Jt,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan the "At a glance" bullets first. Then read examples to build real intuition.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,v)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},v))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(tt,{})}),o.jsx("div",{className:"footerText",children:"Revision tip - Always separate goals: confidentiality (hide data), integrity (detect changes), authenticity (prove identity). TLS combines all three using encryption, hashing, and certificates."})]})]})]})},Nx={Wrapper:Te.section`
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
    `},Sx=()=>{const[a,d]=ae.useState(!1),l=ae.useMemo(()=>[{id:"owasp",icon:o.jsx(tl,{}),title:"OWASP Top 10",atGlance:["OWASP Top 10 lists the most critical web security risks.","It is updated periodically based on real-world vulnerability data.","Understanding it makes you interview-ready and production-aware."],content:[{h:"What is OWASP",p:["OWASP stands for Open Worldwide Application Security Project.","It is a global community that publishes security standards and best practices."],example:{title:"Common categories",lines:["Broken access control","Cryptographic failures","Injection attacks","Security misconfiguration","Vulnerable components"]}}]},{id:"xss",icon:o.jsx(Ri,{}),title:"XSS - Cross Site Scripting",atGlance:["XSS allows attackers to inject malicious scripts into web pages.","Happens when user input is rendered without proper escaping.","Main types are Stored, Reflected, and DOM-based."],content:[{h:"How XSS works",p:["If a web app inserts user input directly into HTML without sanitizing it, an attacker can inject JavaScript.","The browser executes it as if it came from the trusted website."],example:{title:"Example",lines:["User submits: <script>alert('Hacked')<\/script>","If not escaped, the script runs in other users' browsers."]}},{h:"Prevention",p:["Escape output before rendering.","Use frameworks that auto-sanitize.","Implement Content Security Policy."]}]},{id:"csrf",icon:o.jsx(xn,{}),title:"CSRF - Cross Site Request Forgery",atGlance:["CSRF tricks users into performing unwanted actions.","Relies on authenticated sessions.","Uses hidden forms or malicious links."],content:[{h:"How CSRF works",p:["If a user is logged into a bank site and visits a malicious site, that site can send a forged request to the bank.","Because cookies are automatically included, the bank thinks the request is valid."],example:{title:"Example",lines:["Hidden form auto-submits transfer request.","Bank processes it because user session is valid."]}},{h:"Prevention",p:["Use CSRF tokens.","SameSite cookies.","Double-submit cookie strategy."]}]},{id:"sql-injection",icon:o.jsx(cn,{}),title:"SQL Injection",atGlance:["SQL Injection occurs when input is concatenated into SQL queries.","Allows attackers to read, modify, or delete database data.","Parameterized queries prevent this."],content:[{h:"How it happens",p:["If user input is directly inserted into a query string, attacker can manipulate SQL logic."],example:{title:"Example",lines:["Input: ' OR 1=1 --","Query becomes always true, returning all users."]}},{h:"Prevention",p:["Use prepared statements.","Use ORM frameworks safely.","Validate and sanitize inputs."]}]},{id:"auth-flaws",icon:o.jsx(Qf,{}),title:"Authentication Flaws",atGlance:["Weak passwords and poor session management cause breaches.","Broken authentication exposes user accounts.","Multi-factor authentication improves security."],content:[{h:"Common flaws",p:["Weak password policies.","Session IDs not rotated.","No rate limiting on login attempts."],example:{title:"Example",lines:["Brute force attack tries many passwords.","Without rate limiting, attacker eventually succeeds."]}},{h:"Prevention",p:["Hash passwords with bcrypt or Argon2.","Enable MFA.","Implement account lockout and rate limiting."]}]},{id:"secure-coding",icon:o.jsx(Ot,{}),title:"Secure Coding",atGlance:["Security should be built into code from day one.","Validate input, sanitize output.","Follow least privilege principle."],content:[{h:"Best practices",p:["Never trust user input.","Use HTTPS everywhere.","Keep dependencies updated.","Apply principle of least privilege."],example:{title:"Mental model",lines:["Assume attackers will try to break your app.","Design defensively."]}}]},{id:"network-attacks",icon:o.jsx(Bu,{}),title:"Network Attacks",atGlance:["Attackers exploit network weaknesses.","Includes MITM, DDoS, and packet sniffing.","Encryption and monitoring reduce risk."],content:[{h:"Common attacks",p:["Man-in-the-Middle intercepts communication.","DDoS overwhelms servers with traffic.","Packet sniffing captures unencrypted data."],example:{title:"Example",lines:["Public WiFi without HTTPS allows traffic inspection."]}},{h:"Prevention",p:["Use TLS encryption.","Deploy firewalls.","Use intrusion detection systems."]}]}],[]);return o.jsxs(Nx.Wrapper,{id:"cyber-security",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Ot,{})}),o.jsxs("div",{children:[o.jsx("h2",{className:"title",children:"Cyber Security"}),o.jsx("p",{className:"sub",children:"At-a-glance revision for web security, secure coding, authentication, and network threats."})]})]}),o.jsxs("button",{className:a?"toggleBtn open":"toggleBtn",onClick:()=>d(f=>!f),children:[a?o.jsx(bt,{}):o.jsx(yt,{}),a?"Collapse":"Expand"]})]}),o.jsx("div",{className:a?"content open":"content",children:o.jsx("div",{className:"grid",children:l.map(f=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:f.icon}),o.jsx("div",{className:"cardTitle",children:f.title})]}),o.jsx("ul",{className:"atGlance",children:f.atGlance.map((u,p)=>o.jsx("li",{children:u},p))}),f.content.map((u,p)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:u.h}),u.p.map((v,j)=>o.jsx("p",{children:v},j)),u.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:u.example.title}),o.jsx("ul",{children:u.example.lines.map((v,j)=>o.jsx("li",{children:v},j))})]})]},p))]},f.id))})})]})},Cx={Wrapper:Te.section`
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
    `},Tx=()=>{const[a,d]=ae.useState(!1),l=ae.useMemo(()=>[{id:"cloud-iaas",icon:o.jsx(Wf,{}),title:"IaaS",atGlance:["Infrastructure as a Service gives you virtual machines, networking, and storage.","You manage OS, runtime, patches, and your app.","Good when you need control and custom setups."],content:[{h:"What it means",p:["IaaS provides the raw building blocks like compute (VMs), storage, and networks.","You choose OS, install software, configure security, and deploy your application."],example:{title:"Example",lines:["You rent a VM, install Ubuntu, set up Nginx, deploy Node app, and manage updates yourself."]}},{h:"When to use",p:["Use IaaS when you need full control over the server environment.","Useful for custom networking, legacy systems, or special performance tuning."],example:{title:"Quick trade-off",lines:["More control - more responsibility for maintenance and security."]}}],subList:{title:"You manage vs provider manages",items:[{k:"You manage",v:"OS, patches, runtime, app code, configs, monitoring setup"},{k:"Provider manages",v:"Physical servers, virtualization layer, data center, base networking"}]}},{id:"cloud-paas",icon:o.jsx(Lt,{}),title:"PaaS",atGlance:["Platform as a Service gives you a managed runtime to deploy apps faster.","You focus on code and app config, platform handles servers and OS.","Great for rapid development and standard web apps."],content:[{h:"What it means",p:["PaaS provides a platform where you deploy code and the platform handles OS, runtime, scaling basics, and infrastructure.","You configure environment variables, deployment settings, and app resources."],example:{title:"Example",lines:["You push your app, platform builds and runs it, handles HTTPS, restarts, and basic scaling."]}},{h:"When to use",p:["Use PaaS when you want faster deployment without managing servers.","Best for APIs, web apps, and standard workloads."],example:{title:"Quick trade-off",lines:["Less server control - faster shipping and easier ops."]}}],subList:{title:"You manage vs provider manages",items:[{k:"You manage",v:"App code, app settings, env variables, database usage patterns"},{k:"Provider manages",v:"OS, runtime, patching, underlying infra, typical autoscaling hooks"}]}},{id:"cloud-saas",icon:o.jsx(Ei,{}),title:"SaaS",atGlance:["Software as a Service is a ready product delivered over the internet.","You just use it, provider manages everything.","Best when you need a tool, not a platform."],content:[{h:"What it means",p:["SaaS is a complete application delivered to users.","You do not manage infrastructure or runtime. You only configure usage and permissions."],example:{title:"Example",lines:["Email service, project management tools, analytics dashboards, CRM systems."]}},{h:"When to use",p:["Use SaaS when you need a business capability quickly.","It saves time and reduces engineering overhead for non-core problems."],example:{title:"Quick trade-off",lines:["Fast adoption - less customization and less control."]}}],subList:{title:"You manage vs provider manages",items:[{k:"You manage",v:"Users, roles, permissions, configuration and workflows"},{k:"Provider manages",v:"Everything else including app, updates, infra, security controls"}]}},{id:"cloud-virtualization",icon:o.jsx(Kt,{}),title:"Virtualization",atGlance:["Virtualization lets one physical machine run many virtual machines.","Hypervisor creates isolated VMs with their own OS.","Foundation of most IaaS systems."],content:[{h:"Core idea",p:["A hypervisor slices CPU, memory, and storage to create multiple VMs.","Each VM runs its own OS and behaves like a real machine."],example:{title:"Example",lines:["One physical server runs 20 VMs, each hosting different applications."]}},{h:"Why it matters",p:["Improves hardware utilization and isolation.","Allows flexible provisioning, snapshots, and migration of workloads."],example:{title:"Mental model",lines:["VM is a full computer inside your computer."]}}]},{id:"cloud-containers",icon:o.jsx(Ei,{}),title:"Containers",atGlance:["Containers package app plus dependencies into a single unit.","They share the host OS kernel, so they are lighter than VMs.","Great for portability and consistent deployments."],content:[{h:"Core idea",p:["Containers isolate apps using OS-level features while sharing the same kernel.","They start fast and consume fewer resources than VMs."],example:{title:"Example",lines:["Docker image contains Node app, dependencies, and config. Runs the same on laptop and cloud."]}},{h:"Containers vs VMs",p:["VM includes full OS. Container shares OS kernel.","VM isolation is stronger, container is lighter and faster."],example:{title:"Quick compare",lines:["VM - heavier, strong isolation","Container - lighter, faster startup"]}}],subList:{title:"Why containers are loved",items:[{k:"Portability",v:"Same image runs everywhere"},{k:"Consistency",v:"Dev, staging, production behave similarly"},{k:"Speed",v:"Fast startup and efficient resource usage"}]}},{id:"cloud-serverless",icon:o.jsx(Xt,{}),title:"Serverless",atGlance:["You deploy functions, cloud runs them on demand.","You do not manage servers, scaling happens automatically.","Best for event-driven tasks and APIs with bursts."],content:[{h:"Core idea",p:["Serverless means you write function code and the provider handles execution, scaling, and infrastructure.","Billing is often based on usage, not always-on servers."],example:{title:"Example",lines:["An API endpoint runs as a function. It wakes up when called and scales when traffic increases."]}},{h:"Trade-offs",p:["Cold start can add latency when the function is idle.","You must design for stateless behavior and external state storage."],example:{title:"Quick trade-off",lines:["Low ops - watch out for cold start and limits."]}}]},{id:"cloud-scaling",icon:o.jsx(_i,{}),title:"Scaling strategies",atGlance:["Scale up means bigger machine. Scale out means more machines.","Autoscaling reacts to metrics like CPU, memory, request rate.","Caching and queues help handle spikes safely."],content:[{h:"Vertical scaling (scale up)",p:["Increase resources of a single machine like CPU or RAM.","Simple but has limits and can require downtime."],example:{title:"Example",lines:["Upgrade server from 2 CPU to 8 CPU when load grows."]}},{h:"Horizontal scaling (scale out)",p:["Add more instances and distribute load using a load balancer.","More reliable and scalable for big traffic."],example:{title:"Example",lines:["Run 10 app instances behind a load balancer instead of 1 huge server."]}},{h:"Support tools",p:["Caching reduces repeated work and database load.","Queues smooth traffic spikes by buffering jobs.","CDNs speed up content delivery for global users."],example:{title:"Example",lines:["Use cache for product list, queue for sending emails, CDN for images."]}}],subList:{title:"Scaling checklist",items:[{k:"Stateless services",v:"Store sessions in shared storage or tokens"},{k:"Health checks",v:"Load balancer removes unhealthy instances"},{k:"Rate limiting",v:"Protect against abuse and sudden spikes"}]}},{id:"cloud-security",icon:o.jsx(Ot,{}),title:"Cloud security",atGlance:["Security is shared responsibility between you and provider.","Identity and access control is the first line of defense.","Encryption + monitoring reduce risk and blast radius."],content:[{h:"Shared responsibility model",p:["Provider secures the physical data center and core cloud services.","You secure your data, identity access, configurations, and app-level security."],example:{title:"Example",lines:["If your storage bucket is public by mistake, that is on you, not the provider."]}},{h:"Identity and access management",p:["Use least privilege. Give minimal permissions required for each role.","Use separate environments, rotate keys, and avoid long-lived secrets in code."],example:{title:"Example",lines:["Backend service account can read one bucket only, not full admin access."]}},{h:"Encryption and monitoring",p:["Encrypt data at rest and in transit.","Enable logs and alerts for unusual access patterns.","Use network segmentation and firewall rules to reduce exposure."],example:{title:"Example",lines:["TLS for API traffic, encryption for database storage, alerts for failed logins."]}}],subList:{title:"Common security checks",items:[{k:"Public access",v:"Ensure storage and databases are not publicly exposed"},{k:"Secrets",v:"Use secret manager, do not hardcode keys"},{k:"Network rules",v:"Restrict inbound traffic to only required ports"},{k:"Backups",v:"Enable backups and test recovery"}]},callout:{icon:o.jsx(xn,{}),title:"Practical mindset",lines:["Assume misconfigurations will happen.","Reduce blast radius using least privilege and network segmentation.","Detect fast with logs and alerts."]}}],[]),f=()=>d(u=>!u);return o.jsxs(Cx.Wrapper,{id:"cloud-computing",children:[o.jsxs("div",{className:"top",children:[o.jsxs("div",{className:"titleRow",children:[o.jsx("div",{className:"titleIcon",children:o.jsx(Au,{})}),o.jsxs("div",{className:"titleText",children:[o.jsx("h2",{className:"title",children:"Cloud Computing"}),o.jsx("p",{className:"sub",children:"At-a-glance revision notes for cloud models, deployment styles, scaling, and security basics."})]})]}),o.jsxs("button",{type:"button",className:a?"toggleBtn open":"toggleBtn",onClick:f,"aria-expanded":a,"aria-controls":"cloud-content",title:a?"Collapse Cloud notes":"Expand Cloud notes",children:[o.jsx("span",{className:"btnIcon",children:a?o.jsx(bt,{}):o.jsx(yt,{})}),o.jsx("span",{className:"btnText",children:a?"Collapse":"Expand"})]})]}),o.jsxs("div",{id:"cloud-content",className:a?"content open":"content",children:[o.jsxs("div",{className:"hintBar",children:[o.jsx(Ai,{className:"hintIcon"}),o.jsx("div",{className:"hintText",children:'Scan the "At a glance" bullets first. Then read examples for real understanding.'})]}),o.jsx("div",{className:"grid",children:l.map(u=>o.jsxs("div",{className:"card",children:[o.jsxs("div",{className:"cardHead",children:[o.jsx("div",{className:"cardIcon",children:u.icon}),o.jsxs("div",{className:"cardTitleWrap",children:[o.jsx("div",{className:"cardTitle",children:u.title}),o.jsx("div",{className:"cardMini",children:"Quick revision points and beginner examples"})]})]}),o.jsxs("div",{className:"atGlance",children:[o.jsx("div",{className:"atTitle",children:"At a glance"}),o.jsx("ul",{className:"bullets",children:u.atGlance.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.content&&u.content.length>0&&o.jsx("div",{className:"details",children:u.content.map((p,v)=>o.jsxs("div",{className:"block",children:[o.jsx("div",{className:"blockTitle",children:p.h}),o.jsx("div",{className:"blockBody",children:p.p.map((j,k)=>o.jsx("p",{className:"p",children:j},k))}),p.example&&o.jsxs("div",{className:"example",children:[o.jsx("div",{className:"exTitle",children:p.example.title}),o.jsx("ul",{className:"exList",children:p.example.lines.map((j,k)=>o.jsx("li",{className:"mono",children:j},k))})]})]},v))}),u.callout&&o.jsxs("div",{className:"callout",children:[o.jsxs("div",{className:"calloutHead",children:[o.jsx("span",{className:"calloutIcon",children:u.callout.icon}),o.jsx("span",{className:"calloutTitle",children:u.callout.title})]}),o.jsx("ul",{className:"calloutList",children:u.callout.lines.map((p,v)=>o.jsx("li",{children:p},v))})]}),u.subList&&o.jsxs("div",{className:"miniTable",children:[o.jsx("div",{className:"miniTitle",children:u.subList.title}),o.jsx("div",{className:"rows",children:u.subList.items.map(p=>o.jsxs("div",{className:"row",children:[o.jsx("div",{className:"k mono",children:p.k}),o.jsx("div",{className:"v",children:p.v})]},p.k))})]})]},u.id))}),o.jsxs("div",{className:"footerNote",children:[o.jsx("div",{className:"footerIcon",children:o.jsx(tt,{})}),o.jsx("div",{className:"footerText",children:"Interview tip - Always explain cloud choices using trade-offs like control vs convenience, cost vs performance, and security vs speed."})]})]})]})},Lu=[["about","Overview",dp],["os","Operating Systems",ix],["networks","Computer Networks",sx],["dbms","DBMS",cx],["design","System Design",ux],["software","Software Engineering",mx],["compiler","Compiler Design",hx],["distributed","Distributed Systems",gx],["parallel","Parallel Computing",yx],["theory","Theory of Computation",wx],["crypto","Cryptography",jx],["security","Cyber Security",Sx],["cloud","Cloud Computing",Tx]],Ex=()=>{var u;const[a,d]=ae.useState("about"),l=ae.useRef(null),f=((u=Lu.find(([p])=>p===a))==null?void 0:u[2])||dp;return ae.useEffect(()=>{var p;(p=l.current)==null||p.scrollTo({top:0,behavior:"auto"}),requestAnimationFrame(()=>{var v,j;return(j=(v=l.current)==null?void 0:v.querySelector('[aria-expanded="false"]'))==null?void 0:j.click()})},[a]),o.jsxs(Ys.Wrapper,{children:[o.jsx(Ys.Header,{children:o.jsx(Jh,{})}),o.jsxs(Ys.Main,{ref:l,children:[o.jsxs("div",{className:"workspaceLayout",children:[o.jsxs("aside",{className:"sideMenu","aria-label":"Computer science topics",children:[o.jsx("p",{className:"menuLabel",children:"Study guide"}),o.jsx("nav",{children:Lu.map(([p,v])=>o.jsx("button",{type:"button",className:a===p?"active":"",onClick:()=>d(p),children:v},p))})]}),o.jsx("section",{className:"contentWrapper","aria-live":"polite",children:o.jsx(f,{})})]}),o.jsx("button",{type:"button",className:"scrollTopButton","aria-label":"Scroll content to top",title:"Scroll to top",onClick:()=>{var p;return(p=l.current)==null?void 0:p.scrollTo({top:0,behavior:"smooth"})},children:o.jsx(Sf,{})}),o.jsx("div",{className:"footerWrapper",children:o.jsx(nx,{})})]})]})};gf.createRoot(document.getElementById("root")).render(o.jsx(o.Fragment,{children:o.jsx(Ex,{})}));
