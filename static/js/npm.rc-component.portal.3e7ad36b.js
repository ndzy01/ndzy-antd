"use strict";(self.webpackChunkndzy_antd=self.webpackChunkndzy_antd||[]).push([["8277"],{7174:function(n,e,t){t.d(e,{Z:()=>w});var r=t("5002"),u=t("7294"),o=t("3935"),c=t("243");t("334");var i=t("2550"),a=u.createContext(null),l=t("8477"),d=t("8410"),f=[],v=t("4958"),s=t("4204"),h="rc-util-locker-".concat(Date.now()),m=0,Z=!1,y=function(n){return!1!==n&&((0,c.Z)()&&n?"string"==typeof n?document.querySelector(n):"function"==typeof n?n():n:null)},p=u.forwardRef(function(n,e){var t,p,w,b,E=n.open,g=n.autoLock,C=n.getContainer,k=n.debug,S=n.autoDestroy,x=void 0===S||S,H=n.children,L=u.useState(E),_=(0,r.Z)(L,2),j=_[0],q=_[1],z=j||E;u.useEffect(function(){(x||E)&&q(E)},[E,x]);var D=u.useState(function(){return y(C)}),P=(0,r.Z)(D,2),R=P[0],W=P[1];u.useEffect(function(){var n=y(C);W(null!=n?n:null)});var Y=function(n,e){var t=u.useState(function(){if(!(0,c.Z)())return null;var n=document.createElement("div");return n}),o=(0,r.Z)(t,1)[0],i=u.useRef(!1),v=u.useContext(a),s=u.useState(f),h=(0,r.Z)(s,2),m=h[0],Z=h[1],y=v||(i.current?void 0:function(n){Z(function(e){return[n].concat((0,l.Z)(e))})});function p(){!o.parentElement&&document.body.appendChild(o),i.current=!0}function w(){var n;null===(n=o.parentElement)||void 0===n||n.removeChild(o),i.current=!1}return(0,d.Z)(function(){return n?v?v(p):p():w(),w},[n]),(0,d.Z)(function(){m.length&&(m.forEach(function(n){return n()}),Z(f))},[m]),[o,y]}(z&&!R,0),A=(0,r.Z)(Y,2),B=A[0],F=A[1],G=null!=R?R:B;t=!!(g&&E&&(0,c.Z)()&&(G===B||G===document.body)),p=u.useState(function(){return m+=1,"".concat(h,"_").concat(m)}),w=(0,r.Z)(p,1)[0],(0,d.Z)(function(){if(t){var n=(0,s.o)(document.body).width,e=document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth;(0,v.hq)("\nhtml body {\n  overflow-y: hidden;\n  ".concat(e?"width: calc(100% - ".concat(n,"px);"):"","\n}"),w)}else(0,v.jL)(w);return function(){(0,v.jL)(w)}},[t,w]);var I=null;H&&(0,i.Yr)(H)&&e&&(I=H.ref);var J=(0,i.x1)(I,e);if(!z||!(0,c.Z)()||void 0===R)return null;var K=!1===G||Z,M=H;return e&&(M=u.cloneElement(H,{ref:J})),u.createElement(a.Provider,{value:F},K?M:(0,o.createPortal)(M,G))});let w=p}}]);