"use strict";(self.webpackChunkndzy_antd=self.webpackChunkndzy_antd||[]).push([["8318"],{6312:function(t,e,n){var r;function u(t,e){return r=e,t}function a(t,e){var n,u,i,s=t.next();if("<"==s&&t.eat("!")){if(t.eatWhile(/[\-]/))return e.tokenize=l,l(t,e);if(t.eatWhile(/[\w]/))return r="doindent","keyword"}else if("<"==s&&t.eat("?"))return e.tokenize=function(t,e){return function(n,r){for(;!n.eol();){if(n.match(e)){r.tokenize=a;break}n.next()}return t}}("meta","?>"),r=s,"meta";else if("#"==s&&t.eatWhile(/[\w]/))return r="tag","atom";else if("|"==s)return r="separator","keyword";else if(s.match(/[\(\)\[\]\-\.,\+\?>]/)){;return n=null,r=s,null}else if(s.match(/[\[\]]/))return r=s,"rule";else if('"'==s||"'"==s)return e.tokenize=function(t){return function(e,n){for(var u,l=!1;null!=(u=e.next());){if(u==t&&!l){n.tokenize=a;break}l=!l&&"\\"==u}return r="tag","string"}}(s),e.tokenize(t,e);else if(t.eatWhile(/[a-zA-Z\?\+\d]/)){var c=t.current();return null!==c.substr(c.length-1,c.length).match(/\?|\+/)&&t.backUp(1),r="tag","tag"}else{;if("%"==s||"*"==s)return r="number","number";return t.eatWhile(/[\w\\\-_%.{,]/),u=null,i=null,r=null,null}}function l(t,e){for(var n,u=0;null!=(n=t.next());){if(u>=2&&">"==n){e.tokenize=a;break}u="-"==n?u+1:0}return r="comment","comment"}n.r(e),n.d(e,{dtd:function(){return i}});let i={name:"dtd",startState:function(){return{tokenize:a,baseIndent:0,stack:[]}},token:function(t,e){if(t.eatSpace())return null;var n=e.tokenize(t,e),u=e.stack[e.stack.length-1];return"["==t.current()||"doindent"===r||"["==r?e.stack.push("rule"):"endtag"===r?e.stack[e.stack.length-1]="endtag":"]"==t.current()||"]"==r||">"==r&&"rule"==u?e.stack.pop():"["==r&&e.stack.push("["),n},indent:function(t,e,n){var u=t.stack.length;return"]"===e.charAt(0)?u--:">"===e.substr(e.length-1,e.length)&&("<"===e.substr(0,1)||"doindent"==r&&e.length>1||("doindent"==r?u--:">"==r&&e.length>1||"tag"==r&&">"!==e||("tag"==r&&"rule"==t.stack[t.stack.length-1]?u--:"tag"==r?u++:">"===e&&"rule"==t.stack[t.stack.length-1]&&">"===r?u--:">"===e&&"rule"==t.stack[t.stack.length-1]||("<"!==e.substr(0,1)&&">"===e.substr(0,1)?u-=1:">"===e||(u-=1)))),(null==r||"]"==r)&&u--),t.baseIndent+u*n.unit},languageData:{indentOnInput:/^\s*[\]>]$/}}}}]);