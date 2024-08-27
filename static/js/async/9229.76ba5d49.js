/*! For license information please see 9229.76ba5d49.js.LICENSE.txt */
"use strict";(self.webpackChunkndzy_antd=self.webpackChunkndzy_antd||[]).push([["9229"],{1103:function(e,t,n){function i(e){var t,n,i=e.statementIndentUnit,r=e.dontAlignCalls,a=e.noIndentKeywords||[],o=e.multiLineStrings,l=e.hooks||{};function s(e){for(var t={},n=e.split(" "),i=0;i<n.length;++i)t[n[i]]=!0;return t}var c=s("accept_on alias always always_comb always_ff always_latch and assert assign assume automatic before begin bind bins binsof bit break buf bufif0 bufif1 byte case casex casez cell chandle checker class clocking cmos config const constraint context continue cover covergroup coverpoint cross deassign default defparam design disable dist do edge else end endcase endchecker endclass endclocking endconfig endfunction endgenerate endgroup endinterface endmodule endpackage endprimitive endprogram endproperty endspecify endsequence endtable endtask enum event eventually expect export extends extern final first_match for force foreach forever fork forkjoin function generate genvar global highz0 highz1 if iff ifnone ignore_bins illegal_bins implements implies import incdir include initial inout input inside instance int integer interconnect interface intersect join join_any join_none large let liblist library local localparam logic longint macromodule matches medium modport module nand negedge nettype new nexttime nmos nor noshowcancelled not notif0 notif1 null or output package packed parameter pmos posedge primitive priority program property protected pull0 pull1 pulldown pullup pulsestyle_ondetect pulsestyle_onevent pure rand randc randcase randsequence rcmos real realtime ref reg reject_on release repeat restrict return rnmos rpmos rtran rtranif0 rtranif1 s_always s_eventually s_nexttime s_until s_until_with scalared sequence shortint shortreal showcancelled signed small soft solve specify specparam static string strong strong0 strong1 struct super supply0 supply1 sync_accept_on sync_reject_on table tagged task this throughout time timeprecision timeunit tran tranif0 tranif1 tri tri0 tri1 triand trior trireg type typedef union unique unique0 unsigned until until_with untyped use uwire var vectored virtual void wait wait_order wand weak weak0 weak1 while wildcard wire with within wor xnor xor"),u=/[\+\-\*\/!~&|^%=?:]/,d=/[\[\]{}()]/,f=/\d[0-9_]*/,p=/\d*\s*'s?d\s*\d[0-9_]*/i,m=/\d*\s*'s?b\s*[xz01][xz01_]*/i,v=/\d*\s*'s?o\s*[xz0-7][xz0-7_]*/i,g=/\d*\s*'s?h\s*[0-9a-fxz?][0-9a-fxz?_]*/i,h=/(\d[\d_]*(\.\d[\d_]*)?E-?[\d_]+)|(\d[\d_]*\.\d[\d_]*)/i,k=/^((\w+)|[)}\]])/,y=/[)}\]]/,w=s("case checker class clocking config function generate interface module package primitive program property specify sequence table task"),b={};for(var _ in w)b[_]="end"+_;for(var x in b.begin="end",b.casex="endcase",b.casez="endcase",b.do="while",b.fork="join;join_any;join_none",b.covergroup="endgroup",a){var _=a[x];b[_]&&(b[_]=void 0)}var z=s("always always_comb always_ff always_latch assert assign assume else export for foreach forever if import initial repeat while");function I(e,i){var r,a=e.peek();if(l[a]&&!1!=(r=l[a](e,i))||l.tokenBase&&!1!=(r=l.tokenBase(e,i)))return r;if(/[,;:\.]/.test(a))return t=e.next(),null;if(d.test(a))return t=e.next(),"bracket";if("`"==a)return(e.next(),e.eatWhile(/[\w\$_]/))?"def":null;if("$"==a)return(e.next(),e.eatWhile(/[\w\$_]/))?"meta":null;if("#"==a)return e.next(),e.eatWhile(/[\d_.]/),"def";if('"'==a)return e.next(),i.tokenize=function(e){return function(t,n){for(var i,r=!1,a=!1;null!=(i=t.next());){if(i==e&&!r){a=!0;break}r=!r&&"\\"==i}return(a||!(r||o))&&(n.tokenize=I),"string"}}(a),i.tokenize(e,i);if("/"==a){if(e.next(),e.eat("*"))return i.tokenize=C,C(e,i);if(e.eat("/"))return e.skipToEnd(),"comment";e.backUp(1)}if(e.match(h)||e.match(p)||e.match(m)||e.match(v)||e.match(g)||e.match(f)||e.match(h))return"number";if(e.eatWhile(u))return"meta";if(e.eatWhile(/[\w\$_]/)){var s=e.current();return c[s]?(b[s]&&(t="newblock"),z[s]&&(t="newstatement"),n=s,"keyword"):"variable"}return e.next(),null}function C(e,t){for(var n,i=!1;n=e.next();){if("/"==n&&i){t.tokenize=I;break}i="*"==n}return"comment"}function S(e,t,n,i,r){this.indented=e,this.column=t,this.type=n,this.align=i,this.prev=r}function j(e,t,n){var i=new S(e.indented,t,n,null,e.context);return e.context=i}function N(e){var t=e.context.type;return(")"==t||"]"==t||"}"==t)&&(e.indented=e.context.indented),e.context=e.context.prev}function $(e,t){if(e==t)return!0;var n=t.split(";");for(var i in n)if(e==n[i])return!0;return!1}return{name:"verilog",startState:function(e){var t={tokenize:null,context:new S(-e,0,"top",!1),indented:0,startOfLine:!0};return l.startState&&l.startState(t),t},token:function(e,i){var r=i.context;if(e.sol()&&(null==r.align&&(r.align=!1),i.indented=e.indentation(),i.startOfLine=!0),l.token){var a=l.token(e,i);if(void 0!==a)return a}if(e.eatSpace())return null;t=null,n=null;var a=(i.tokenize||I)(e,i);if("comment"==a||"meta"==a||"variable"==a)return a;if(null==r.align&&(r.align=!0),t==r.type)N(i);else if(";"==t&&"statement"==r.type||r.type&&$(n,r.type))for(r=N(i);r&&"statement"==r.type;)r=N(i);else if("{"==t)j(i,e.column(),"}");else if("["==t)j(i,e.column(),"]");else if("("==t)j(i,e.column(),")");else if(r&&"endcase"==r.type&&":"==t)j(i,e.column(),"statement");else if("newstatement"==t)j(i,e.column(),"statement");else if("newblock"==t){if("function"==n&&r&&("statement"==r.type||"endgroup"==r.type));else if("task"==n&&r&&"statement"==r.type);else{var o=b[n];j(i,e.column(),o)}}return i.startOfLine=!1,a},indent:function(e,t,n){if(e.tokenize!=I&&null!=e.tokenize)return null;if(l.indent){var a=l.indent(e);if(a>=0)return a}var o=e.context,s=t&&t.charAt(0);"statement"==o.type&&"}"==s&&(o=o.prev);var c=!1,u=t.match(k);if(u&&(c=$(u[0],o.type)),"statement"==o.type)return o.indented+("{"==s?0:i||n.unit);if(y.test(o.type)&&o.align&&!r)return o.column+(c?0:1);if(")"==o.type&&!c)return o.indented+(i||n.unit);else return o.indented+(c?0:n.unit)},languageData:{indentOnInput:function(){var e=[];for(var t in b)if(b[t]){var n=b[t].split(";");for(var i in n)e.push(n[i])}return RegExp("[{}()\\[\\]]|("+e.join("|")+")$")}(),commentTokens:{line:"//",block:{open:"/*",close:"*/"}}}}}n.r(t),n.d(t,{tlv:function(){return u},verilog:function(){return r}});let r=i({});var a={"|":"link",">":"property",$:"variable",$$:"variable","?$":"qualifier","?*":"qualifier","-":"contentSeparator","/":"property","/-":"property","@":"variableName.special","@-":"variableName.special","@++":"variableName.special","@+=":"variableName.special","@+=-":"variableName.special","@--":"variableName.special","@-=":"variableName.special","%+":"tag","%-":"tag","%":"tag",">>":"tag","<<":"tag","<>":"tag","#":"tag","^":"attribute","^^":"attribute","^!":"attribute","*":"variable","**":"variable","\\":"keyword",'"':"comment"},o={"/":"beh-hier",">":"beh-hier","-":"phys-hier","|":"pipe","?":"when","@":"stage","\\":"keyword"},l=/^([~!@#\$%\^&\*-\+=\?\/\\\|'"<>]+)([\d\w_]*)/,s=/^[! ] */,c=/^\/[\/\*]/;let u=i({hooks:{electricInput:!1,token:function(e,t){var n=void 0;if(e.sol()&&!t.tlvInBlockComment){"\\"==e.peek()&&(n="def",e.skipToEnd(),e.string.match(/\\SV/)?t.tlvCodeActive=!1:e.string.match(/\\TLV/)&&(t.tlvCodeActive=!0)),t.tlvCodeActive&&0==e.pos&&0==t.indented&&(m=e.match(s,!1))&&(t.indented=m[0].length);var i=t.indented,r=i/3;if(r<=t.tlvIndentationStyle.length){var u=e.string.length==i,d=3*r;if(d<e.string.length){var f=e.string.slice(d),p=f[0];o[p]&&(m=f.match(l))&&a[m[1]]&&(i+=3,!("\\"==p&&d>0)&&(t.tlvIndentationStyle[r]=o[p],r++))}if(!u)for(;t.tlvIndentationStyle.length>r;)t.tlvIndentationStyle.pop()}t.tlvNextIndent=i}if(t.tlvCodeActive){var m,v=!1;if(void 0!==n);else if(t.tlvInBlockComment)e.match(/^.*?\*\//)?t.tlvInBlockComment=!1:e.skipToEnd(),n="comment";else if((m=e.match(c))&&!t.tlvInBlockComment)"//"==m[0]?e.skipToEnd():t.tlvInBlockComment=!0,n="comment";else if(m=e.match(l)){var g=m[1],h=m[2];a.hasOwnProperty(g)&&(h.length>0||e.eol())?n=a[g]:e.backUp(e.current().length-1)}else e.match(/^\t+/)?n="invalid":e.match(/^[\[\]{}\(\);\:]+/)?n="meta":(m=e.match(/^[mM]4([\+_])?[\w\d_]*/))?n="+"==m[1]?"keyword.special":"keyword":e.match(/^ +/)?e.eol()&&(n="error"):e.match(/^[\w\d_]+/)?n="number":e.next()}else e.match(/^[mM]4([\w\d_]*)/)&&(n="keyword");return n},indent:function(e){return!0==e.tlvCodeActive?e.tlvNextIndent:-1},startState:function(e){e.tlvIndentationStyle=[],e.tlvCodeActive=!0,e.tlvNextIndent=-1,e.tlvInBlockComment=!1}}})}}]);