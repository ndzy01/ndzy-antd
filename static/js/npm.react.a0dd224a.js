/*! For license information please see npm.react.a0dd224a.js.LICENSE.txt */
"use strict";(self.webpackChunkndzy_antd=self.webpackChunkndzy_antd||[]).push([["707"],{5251:function(e,t,r){var n=r(7294),o=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function i(e,t,r){var n,u={},i=null,s=null;for(n in void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),void 0!==t.ref&&(s=t.ref),t)a.call(t,n)&&!f.hasOwnProperty(n)&&(u[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===u[n]&&(u[n]=t[n]);return{$$typeof:o,type:e,key:i,ref:s,props:u,_owner:c.current}}t.Fragment=u,t.jsx=i,t.jsxs=i},2408:function(e,t){var r=Symbol.for("react.element"),n=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),f=Symbol.for("react.context"),i=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),l=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),y=Symbol.iterator,d={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,h={};function m(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}function v(){}function b(e,t,r){this.props=e,this.context=t,this.refs=h,this.updater=r||d}m.prototype.isReactComponent={},m.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},m.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=m.prototype;var S=b.prototype=new v;S.constructor=b,_(S,m.prototype),S.isPureReactComponent=!0;var E=Array.isArray,k=Object.prototype.hasOwnProperty,w={current:null},R={key:!0,ref:!0,__self:!0,__source:!0};function $(e,t,n){var o,u={},a=null,c=null;if(null!=t)for(o in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,o)&&!R.hasOwnProperty(o)&&(u[o]=t[o]);var f=arguments.length-2;if(1===f)u.children=n;else if(1<f){for(var i=Array(f),s=0;s<f;s++)i[s]=arguments[s+2];u.children=i}if(e&&e.defaultProps)for(o in f=e.defaultProps)void 0===u[o]&&(u[o]=f[o]);return{$$typeof:r,type:e,key:a,ref:c,props:u,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var O=/\/+/g;function j(e,t){var r,n;return"object"==typeof e&&null!==e&&null!=e.key?(r=""+e.key,n={"=":"=0",":":"=2"},"$"+r.replace(/[=:]/g,function(e){return n[e]})):t.toString(36)}function g(e,t,o){if(null==e)return e;var u=[],a=0;return!function e(t,o,u,a,c){var f,i,s,l=typeof t;("undefined"===l||"boolean"===l)&&(t=null);var p=!1;if(null===t)p=!0;else switch(l){case"string":case"number":p=!0;break;case"object":switch(t.$$typeof){case r:case n:p=!0}}if(p){;return c=c(p=t),t=""===a?"."+j(p,0):a,E(c)?(u="",null!=t&&(u=t.replace(O,"$&/")+"/"),e(c,o,u,"",function(e){return e})):null!=c&&(C(c)&&(f=c,i=u+(!c.key||p&&p.key===c.key?"":(""+c.key).replace(O,"$&/")+"/")+t,c={$$typeof:r,type:f.type,key:i,ref:f.ref,props:f.props,_owner:f._owner}),o.push(c)),1}if(p=0,a=""===a?".":a+":",E(t))for(var d=0;d<t.length;d++){var _=a+j(l=t[d],d);p+=e(l,o,u,_,c)}else{;if("function"==typeof(_=null===(s=t)||"object"!=typeof s?null:"function"==typeof(s=y&&s[y]||s["@@iterator"])?s:null))for(t=_.call(t),d=0;!(l=t.next()).done;)_=a+j(l=l.value,d++),p+=e(l,o,u,_,c);else if("object"===l)throw Error("Objects are not valid as a React child (found: "+("[object Object]"===(o=String(t))?"object with keys {"+Object.keys(t).join(", ")+"}":o)+"). If you meant to render a collection of children, use an array instead.")}return p}(e,u,"","",function(e){return t.call(o,e,a++)}),u}function P(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){(0===e._status||-1===e._status)&&(e._status=1,e._result=t)},function(t){(0===e._status||-1===e._status)&&(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var x={current:null},I={transition:null};function T(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:g,forEach:function(e,t,r){g(e,function(){t.apply(this,arguments)},r)},count:function(e){var t=0;return g(e,function(){t++}),t},toArray:function(e){return g(e,function(e){return e})||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=m,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=u,t.Suspense=s,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED={ReactCurrentDispatcher:x,ReactCurrentBatchConfig:I,ReactCurrentOwner:w},t.act=T,t.cloneElement=function(e,t,n){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=_({},e.props),u=e.key,a=e.ref,c=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,c=w.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var f=e.type.defaultProps;for(i in t)k.call(t,i)&&!R.hasOwnProperty(i)&&(o[i]=void 0===t[i]&&void 0!==f?f[i]:t[i])}var i=arguments.length-2;if(1===i)o.children=n;else if(1<i){f=Array(i);for(var s=0;s<i;s++)f[s]=arguments[s+2];o.children=f}return{$$typeof:r,type:e.type,key:u,ref:a,props:o,_owner:c}},t.createContext=function(e){return(e={$$typeof:f,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:c,_context:e},e.Consumer=e},t.createElement=$,t.createFactory=function(e){var t=$.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:i,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:l,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=I.transition;I.transition={};try{e()}finally{I.transition=t}},t.unstable_act=T,t.useCallback=function(e,t){return x.current.useCallback(e,t)},t.useContext=function(e){return x.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return x.current.useDeferredValue(e)},t.useEffect=function(e,t){return x.current.useEffect(e,t)},t.useId=function(){return x.current.useId()},t.useImperativeHandle=function(e,t,r){return x.current.useImperativeHandle(e,t,r)},t.useInsertionEffect=function(e,t){return x.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return x.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return x.current.useMemo(e,t)},t.useReducer=function(e,t,r){return x.current.useReducer(e,t,r)},t.useRef=function(e){return x.current.useRef(e)},t.useState=function(e){return x.current.useState(e)},t.useSyncExternalStore=function(e,t,r){return x.current.useSyncExternalStore(e,t,r)},t.useTransition=function(){return x.current.useTransition()},t.version="18.3.1"},7294:function(e,t,r){e.exports=r(2408)},5893:function(e,t,r){e.exports=r(5251)}}]);