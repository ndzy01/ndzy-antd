"use strict";(self.webpackChunkndzy_antd=self.webpackChunkndzy_antd||[]).push([["8385"],{4949:function(e,t,O){O.r(t),O.d(t,{completeFromSchema:()=>C,xmlLanguage:()=>w,xml:()=>x,autoCloseTags:()=>X});var n=O("80"),a=O("6644");let l=null,r=null,o=0;function s(e,t){var O,n;let a=e.pos+t;if(r==e&&o==a)return l;for(;9==(O=e.peek(t))||10==O||13==O||32==O;)t++;let s="";for(;;){;let O=e.peek(t);if(!(45==(n=O)||46==n||58==n||n>=65&&n<=90||95==n||n>=97&&n<=122||n>=161))break;s+=String.fromCharCode(O),t++}return r=e,o=a,l=s||null}function i(e,t){this.name=e,this.parent=t,this.hash=t?t.hash:0;for(let t=0;t<e.length;t++)this.hash+=(this.hash<<4)+e.charCodeAt(t)+(e.charCodeAt(t)<<8)}let y=new n.IK({start:null,shift:(e,t,O,n)=>1==t?new i(s(n,1)||"",e):e,reduce:(e,t)=>11==t&&e?e.parent:e,reuse(e,t,O,n){let a=t.type.id;return 1==a||13==a?new i(s(n,1)||"",e):e},hash:e=>e?e.hash:0,strict:!1}),p=new n.Jq((e,t)=>{if(60==e.next){if(e.advance(),47==e.next){e.advance();let O=s(e,0);if(!O)return e.acceptToken(5);if(t.context&&O==t.context.name)return e.acceptToken(2);for(let n=t.context;n;n=n.parent)if(n.name==O)return e.acceptToken(3,-2);e.acceptToken(4)}else if(33!=e.next&&63!=e.next)return e.acceptToken(1)}},{contextual:!0});function c(e,t){return new n.Jq(O=>{let n=0,a=t.charCodeAt(0);e:for(;!(O.next<0);O.advance(),n++)if(O.next==a){for(let e=1;e<t.length;e++)if(O.peek(e)!=t.charCodeAt(e))continue e;break}n&&O.acceptToken(e)})}let $=c(35,"--\x3e"),g=c(36,"?>"),u=c(37,"]]>"),S=(0,a.Gv)({Text:a.pJ.content,"StartTag StartCloseTag EndTag SelfCloseEndTag":a.pJ.angleBracket,TagName:a.pJ.tagName,"MismatchedCloseTag/TagName":[a.pJ.tagName,a.pJ.invalid],AttributeName:a.pJ.attributeName,AttributeValue:a.pJ.attributeValue,Is:a.pJ.definitionOperator,"EntityReference CharacterReference":a.pJ.character,Comment:a.pJ.blockComment,ProcessingInst:a.pJ.processingInstruction,DoctypeDecl:a.pJ.documentMeta,Cdata:a.pJ.special(a.pJ.string)}),m=n.WQ.deserialize({version:14,states:",SOQOaOOOrOxO'#CfOzOpO'#CiO!tOaO'#CgOOOP'#Cg'#CgO!{OrO'#CrO#TOtO'#CsO#]OpO'#CtOOOP'#DS'#DSOOOP'#Cv'#CvQQOaOOOOOW'#Cw'#CwO#eOxO,59QOOOP,59Q,59QOOOO'#Cx'#CxO#mOpO,59TO#uO!bO,59TOOOP'#C{'#C{O$TOaO,59RO$[OpO'#CoOOOP,59R,59ROOOQ'#C|'#C|O$dOrO,59^OOOP,59^,59^OOOS'#C}'#C}O$lOtO,59_OOOP,59_,59_O$tOpO,59`O$|OpO,59`OOOP-E6t-E6tOOOW-E6u-E6uOOOP1G.l1G.lOOOO-E6v-E6vO%UO!bO1G.oO%UO!bO1G.oO%dOpO'#CkO%lO!bO'#CyO%zO!bO1G.oOOOP1G.o1G.oOOOP1G.w1G.wOOOP-E6y-E6yOOOP1G.m1G.mO&VOpO,59ZO&_OpO,59ZOOOQ-E6z-E6zOOOP1G.x1G.xOOOS-E6{-E6{OOOP1G.y1G.yO&gOpO1G.zO&gOpO1G.zOOOP1G.z1G.zO&oO!bO7+$ZO&}O!bO7+$ZOOOP7+$Z7+$ZOOOP7+$c7+$cO'YOpO,59VO'bOpO,59VO'jO!bO,59eOOOO-E6w-E6wO'xOpO1G.uO'xOpO1G.uOOOP1G.u1G.uO(QOpO7+$fOOOP7+$f7+$fO(YO!bO<<GuOOOP<<Gu<<GuOOOP<<G}<<G}O'bOpO1G.qO'bOpO1G.qO(eO#tO'#CnOOOO1G.q1G.qO(sOpO7+$aOOOP7+$a7+$aOOOP<<HQ<<HQOOOPAN=aAN=aOOOPAN=iAN=iO'bOpO7+$]OOOO7+$]7+$]OOOO'#Cz'#CzO({O#tO,59YOOOO,59Y,59YOOOP<<G{<<G{OOOO<<Gw<<GwOOOO-E6x-E6xOOOO1G.t1G.t",stateData:")Z~OPQOSVOTWOVWOWWOXWOiXOxPO}TO!PUO~OuZOw]O~O^`Oy^O~OPQOQcOSVOTWOVWOWWOXWOxPO}TO!PUO~ORdO~P!SOseO|gO~OthO!OjO~O^lOy^O~OuZOwoO~O^qOy^O~O[vO`sOdwOy^O~ORyO~P!SO^{Oy^O~OseO|}O~OthO!O!PO~O^!QOy^O~O[!SOy^O~O[!VO`sOd!WOy^O~Oa!YOy^O~Oy^O[mX`mXdmX~O[!VO`sOd!WO~O^!]Oy^O~O[!_Oy^O~O[!aOy^O~O[!cO`sOd!dOy^O~O[!cO`sOd!dO~Oa!eOy^O~Oy^Oz!gO~Oy^O[ma`madma~O[!jOy^O~O[!kOy^O~O[!lO`sOd!mO~OW!pOX!pOz!rO{!pO~O[!sOy^O~OW!pOX!pOz!vO{!pO~O",goto:"%[wPPPPPPPPPPxxP!OP!UPP!_!iP!oxxxP!u!{#R$Z$j$p$v$|PPPP%SXWORYbXRORYb_t`qru!T!U!bQ!h!YS!o!e!fR!t!nQdRRybXSORYbQYORmYQ[PRn[Q_QQkVjp_krz!R!T!X!Z!^!`!f!i!nQr`QzcQ!RlQ!TqQ!XsQ!ZtQ!^{Q!`!QQ!f!YQ!i!]R!n!eQu`S!UqrU![u!U!bR!b!TQ!q!gR!u!qQbRRxbQfTR|fQiUR!OiSXOYTaRb",nodeNames:"⚠ StartTag StartCloseTag MissingCloseTag StartCloseTag StartCloseTag Document Text EntityReference CharacterReference Cdata Element EndTag OpenTag TagName Attribute AttributeName Is AttributeValue CloseTag SelfCloseEndTag SelfClosingTag Comment ProcessingInst MismatchedCloseTag DoctypeDecl",maxTerm:47,context:y,nodeProps:[["closedBy",1,"SelfCloseEndTag EndTag",13,"CloseTag MissingCloseTag"],["openedBy",12,"StartTag StartCloseTag",19,"OpenTag",20,"StartTag"],["isolate",-6,13,18,19,21,22,24,""]],propSources:[S],skippedNodes:[0],repeatNodeCount:8,tokenData:"Jy~R!XOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs'ssv$nvw(Zw}$n}!O,^!O!P$n!P!Q.m!Q![$n![!]0V!]!^$n!^!_3h!_!`El!`!aF_!a!bGQ!b!c$n!c!}0V!}#P$n#P#QHj#Q#R$n#R#S0V#S#T$n#T#o0V#o%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U$n4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$nX$uWVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nP%dTVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_P%vP;=`<%l%_W&OT{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yW&bP;=`<%l%yX&hP;=`<%l$n_&t_VP{WyUOX$nXY&kYZ&kZ]$n]^&k^p$npq&kqr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ'zTzYVPOv%_w!^%_!_;'S%_;'S;=`%s<%lO%_~(^ast)c![!]*g!c!}*g#R#S*g#T#o*g%W%o*g%p&a*g&b1p*g4U4d*g4e$IS*g$I`$Ib*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~)fQ!Q![)l#l#m)z~)oQ!Q![)l!]!^)u~)zOX~~)}R!Q![*W!c!i*W#T#Z*W~*ZS!Q![*W!]!^)u!c!i*W#T#Z*W~*jg}!O*g!O!P*g!Q![*g![!]*g!]!^,R!c!}*g#R#S*g#T#o*g$}%O*g%W%o*g%p&a*g&b1p*g1p4U*g4U4d*g4e$IS*g$I`$Ib*g$Je$Jg*g$Kh%#t*g&/x&Et*g&FV;'S*g;'S;:j,W?&r?Ah*g?BY?Mn*g~,WOW~~,ZP;=`<%l*gZ,eYVP{WOr$nrs%_sv$nw}$n}!O-T!O!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZ-[YVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a-z!a;'S$n;'S;=`&e<%lO$nZ.TW|QVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n].tYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!a/d!a;'S$n;'S;=`&e<%lO$n]/mWdSVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_0b!O`S^QVP{WOr$nrs%_sv$nw}$n}!O0V!O!P0V!P!Q$n!Q![0V![!]0V!]!^$n!^!_%y!_!c$n!c!}0V!}#R$n#R#S0V#S#T$n#T#o0V#o$}$n$}%O0V%O%W$n%W%o0V%o%p$n%p&a0V&a&b$n&b1p0V1p4U0V4U4d0V4d4e$n4e$IS0V$IS$I`$n$I`$Ib0V$Ib$Je$n$Je$Jg0V$Jg$Kh$n$Kh%#t0V%#t&/x$n&/x&Et0V&Et&FV$n&FV;'S0V;'S;:j3b;:j;=`&e<%l?&r$n?&r?Ah0V?Ah?BY$n?BY?Mn0V?MnO$n_3eP;=`<%l0VX3mW{WOq%yqr4Vsv%yw!a%y!a!bEU!b;'S%y;'S;=`&_<%lO%yX4[]{WOr%ysv%yw}%y}!O5T!O!f%y!f!g6V!g!}%y!}#O;f#O#W%y#W#XAr#X;'S%y;'S;=`&_<%lO%yX5YV{WOr%ysv%yw}%y}!O5o!O;'S%y;'S;=`&_<%lO%yX5vT}P{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX6[V{WOr%ysv%yw!q%y!q!r6q!r;'S%y;'S;=`&_<%lO%yX6vV{WOr%ysv%yw!e%y!e!f7]!f;'S%y;'S;=`&_<%lO%yX7bV{WOr%ysv%yw!v%y!v!w7w!w;'S%y;'S;=`&_<%lO%yX7|V{WOr%ysv%yw!{%y!{!|8c!|;'S%y;'S;=`&_<%lO%yX8hV{WOr%ysv%yw!r%y!r!s8}!s;'S%y;'S;=`&_<%lO%yX9SV{WOr%ysv%yw!g%y!g!h9i!h;'S%y;'S;=`&_<%lO%yX9nX{WOr9irs:Zsv9ivw:Zw!`9i!`!a:x!a;'S9i;'S;=`;`<%lO9iP:^TO!`:Z!`!a:m!a;'S:Z;'S;=`:r<%lO:ZP:rOiPP:uP;=`<%l:ZX;PTiP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yX;cP;=`<%l9iX;kX{WOr%ysv%yw!e%y!e!f<W!f#V%y#V#W?f#W;'S%y;'S;=`&_<%lO%yX<]V{WOr%ysv%yw!f%y!f!g<r!g;'S%y;'S;=`&_<%lO%yX<wV{WOr%ysv%yw!c%y!c!d=^!d;'S%y;'S;=`&_<%lO%yX=cV{WOr%ysv%yw!v%y!v!w=x!w;'S%y;'S;=`&_<%lO%yX=}V{WOr%ysv%yw!c%y!c!d>d!d;'S%y;'S;=`&_<%lO%yX>iV{WOr%ysv%yw!}%y!}#O?O#O;'S%y;'S;=`&_<%lO%yX?VT{WxPOr%ysv%yw;'S%y;'S;=`&_<%lO%yX?kV{WOr%ysv%yw#W%y#W#X@Q#X;'S%y;'S;=`&_<%lO%yX@VV{WOr%ysv%yw#T%y#T#U@l#U;'S%y;'S;=`&_<%lO%yX@qV{WOr%ysv%yw#h%y#h#iAW#i;'S%y;'S;=`&_<%lO%yXA]V{WOr%ysv%yw#T%y#T#U>d#U;'S%y;'S;=`&_<%lO%yXAwV{WOr%ysv%yw#c%y#c#dB^#d;'S%y;'S;=`&_<%lO%yXBcV{WOr%ysv%yw#V%y#V#WBx#W;'S%y;'S;=`&_<%lO%yXB}V{WOr%ysv%yw#h%y#h#iCd#i;'S%y;'S;=`&_<%lO%yXCiV{WOr%ysv%yw#m%y#m#nDO#n;'S%y;'S;=`&_<%lO%yXDTV{WOr%ysv%yw#d%y#d#eDj#e;'S%y;'S;=`&_<%lO%yXDoV{WOr%ysv%yw#X%y#X#Y9i#Y;'S%y;'S;=`&_<%lO%yXE]T!PP{WOr%ysv%yw;'S%y;'S;=`&_<%lO%yZEuWaQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n_FhW[UVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZGXYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aGw!a;'S$n;'S;=`&e<%lO$nZHQW!OQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$nZHqYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_#P$n#P#QIa#Q;'S$n;'S;=`&e<%lO$nZIhYVP{WOr$nrs%_sv$nw!^$n!^!_%y!_!`$n!`!aJW!a;'S$n;'S;=`&e<%lO$nZJaWwQVP{WOr$nrs%_sv$nw!^$n!^!_%y!_;'S$n;'S;=`&e<%lO$n",tokenizers:[p,$,g,u,0,1,2,3],topRules:{Document:[0,6]},tokenPrec:0});var f=O("3015"),d=O("9348"),h=O("4547");function T(e,t){let O=t&&t.getChild("TagName");return O?e.sliceString(O.from,O.to):""}function V(e,t){let O=t&&t.firstChild;return O&&"OpenTag"==O.name?T(e,O):""}function v(e){for(let t=e&&e.parent;t;t=t.parent)if("Element"==t.name)return t;return null}class P{constructor(e,t,O){this.attrs=t,this.attrValues=O,this.children=[],this.name=e.name,this.completion=Object.assign(Object.assign({type:"type"},e.completion||{}),{label:this.name}),this.openCompletion=Object.assign(Object.assign({},this.completion),{label:"<"+this.name}),this.closeCompletion=Object.assign(Object.assign({},this.completion),{label:"</"+this.name+">",boost:2}),this.closeNameCompletion=Object.assign(Object.assign({},this.completion),{label:this.name+">"}),this.text=e.textContent?e.textContent.map(e=>({label:e,type:"text"})):[]}}let _=/^[:\-\.\w\u00b7-\uffff]*$/;function W(e){return Object.assign(Object.assign({type:"property"},e.completion||{}),{label:e.name})}function b(e){return"string"==typeof e?{label:`"${e}"`,type:"constant"}:/^"/.test(e.label)?e:Object.assign(Object.assign({},e),{label:`"${e.label}"`})}function C(e,t){let O=[],n=[],a=Object.create(null);for(let e of t){let t=W(e);O.push(t),e.global&&n.push(t),e.values&&(a[e.name]=e.values.map(b))}let l=[],r=[],o=Object.create(null);for(let t of e){let e=n,s=a;t.attributes&&(e=e.concat(t.attributes.map(e=>"string"==typeof e?O.find(t=>t.label==e)||{label:e,type:"property"}:(e.values&&(s==a&&(s=Object.create(s)),s[e.name]=e.values.map(b)),W(e)))));let i=new P(t,e,s);o[i.name]=i,l.push(i),t.top&&r.push(i)}!r.length&&(r=l);for(let t=0;t<l.length;t++){let O=e[t],n=l[t];if(O.children)for(let e of O.children)o[e]&&n.children.push(o[e]);else n.children=l}return e=>{var t,O,s,i;let{doc:y}=e.state,p=function(e,t){var O;let n=(0,f.qz)(e).resolveInner(t,-1),a=null;for(let e=n;!a&&e.parent;e=e.parent)("OpenTag"==e.name||"CloseTag"==e.name||"SelfClosingTag"==e.name||"MismatchedCloseTag"==e.name)&&(a=e);if(a&&(a.to>t||a.lastChild.type.isError)){let e=a.parent;if("TagName"==n.name)return"CloseTag"==a.name||"MismatchedCloseTag"==a.name?{type:"closeTag",from:n.from,context:e}:{type:"openTag",from:n.from,context:v(e)};if("AttributeName"==n.name)return{type:"attrName",from:n.from,context:a};if("AttributeValue"==n.name)return{type:"attrValue",from:n.from,context:a};let O=n==a||"Attribute"==n.name?n.childBefore(t):n;return(null==O?void 0:O.name)=="StartTag"?{type:"openTag",from:t,context:v(e)}:(null==O?void 0:O.name)=="StartCloseTag"&&O.to<=t?{type:"closeTag",from:t,context:e}:(null==O?void 0:O.name)=="Is"?{type:"attrValue",from:t,context:a}:O?{type:"attrName",from:t,context:a}:null}if("StartCloseTag"==n.name)return{type:"closeTag",from:t,context:n.parent};for(;n.parent&&n.to==t&&!(null===(O=n.lastChild)||void 0===O?void 0:O.type.isError);)n=n.parent;return"Element"==n.name||"Text"==n.name||"Document"==n.name?{type:"tag",from:t,context:"Element"==n.name?n:v(n)}:null}(e.state,e.pos);if(!p||"tag"==p.type&&!e.explicit)return null;let{type:c,from:$,context:g}=p;if("openTag"==c){let e=r,t=V(y,g);if(t){let O=o[t];e=(null==O?void 0:O.children)||l}return{from:$,options:e.map(e=>e.completion),validFor:_}}if("closeTag"==c){let O=V(y,g);return O?{from:$,to:e.pos+(">"==y.sliceString(e.pos,e.pos+1)?1:0),options:[(null===(t=o[O])||void 0===t?void 0:t.closeNameCompletion)||{label:O+">",type:"type"}],validFor:_}:null}if("attrName"==c){let e=o[T(y,g)];return{from:$,options:(null==e?void 0:e.attrs)||n,validFor:_}}else if("attrValue"==c){;let t,n;let l=(O=y,s=g,i=$,(n=(t=s&&s.getChildren("Attribute").find(e=>e.from<=i&&e.to>=i))&&t.getChild("AttributeName"))?O.sliceString(n.from,n.to):"");if(!l)return null;let r=o[T(y,g)],p=((null==r?void 0:r.attrValues)||a)[l];return p&&p.length?{from:$,to:e.pos+('"'==y.sliceString(e.pos,e.pos+1)?1:0),options:p,validFor:/^"[^"]*"?$/}:null}else{if("tag"!=c)return null;let t=V(y,g),O=o[t],n=[],a=g&&g.lastChild;t&&(!a||"CloseTag"!=a.name||T(y,a)!=t)&&n.push(O?O.closeCompletion:{label:"</"+t+">",type:"type",boost:2});let s=n.concat(((null==O?void 0:O.children)||(g?l:r)).map(e=>e.openCompletion));if(g&&(null==O?void 0:O.text.length)){let t=g.firstChild;t.to>e.pos-20&&!/\S/.test(e.state.sliceDoc(t.to,e.pos))&&(s=s.concat(O.text))}return{from:$,options:s,validFor:/^<\/?[:\-\.\w\u00b7-\uffff]*$/}}}}let w=f.qp.define({name:"xml",parser:m.configure({props:[f.uj.add({Element(e){let t=/^\s*<\//.test(e.textAfter);return e.lineIndent(e.node.from)+(t?0:e.unit)},"OpenTag CloseTag SelfClosingTag":e=>e.column(e.node.from)+e.unit}),f.x0.add({Element(e){let t=e.firstChild,O=e.lastChild;return t&&"OpenTag"==t.name?{from:t.to,to:"CloseTag"==O.name?O.from:e.to}:null}}),f.a0.add({"OpenTag CloseTag":e=>e.getChild("TagName")})]}),languageData:{commentTokens:{block:{open:"\x3c!--",close:"--\x3e"}},indentOnInput:/^\s*<\/$/}});function x(e={}){let t=[w.data.of({autocomplete:C(e.elements||[],e.attributes||[])})];return!1!==e.autoCloseTags&&t.push(X),new f.ri(w,t)}function Q(e,t,O=e.length){if(!t)return"";let n=t.firstChild,a=n&&n.getChild("TagName");return a?e.sliceString(a.from,Math.min(a.to,O)):""}let X=h.tk.inputHandler.of((e,t,O,n,a)=>{if(e.composing||e.state.readOnly||t!=O||">"!=n&&"/"!=n||!w.isActiveAt(e.state,t,-1))return!1;let l=a(),{state:r}=l,o=r.changeByRange(e=>{var t,O,a;let{head:l}=e,o=r.doc.sliceString(l-1,l)==n,s=(0,f.qz)(r).resolveInner(l,-1),i;if(o&&">"==n&&"EndTag"==s.name){let n=s.parent;if((null===(O=null===(t=n.parent)||void 0===t?void 0:t.lastChild)||void 0===O?void 0:O.name)!="CloseTag"&&(i=Q(r.doc,n.parent,l))){let t=l+(">"===r.doc.sliceString(l,l+1)?1:0);return{range:e,changes:{from:l,to:t,insert:`</${i}>`}}}}else if(o&&"/"==n&&"StartCloseTag"==s.name){let e=s.parent;if(s.from==l-2&&(null===(a=e.lastChild)||void 0===a?void 0:a.name)!="CloseTag"&&(i=Q(r.doc,e,l))){let e=l+(">"===r.doc.sliceString(l,l+1)?1:0),t=`${i}>`;return{range:d.jT.cursor(l+t.length,-1),changes:{from:l,to:e,insert:t}}}}return{range:e}});return!o.changes.empty&&(e.dispatch([l,r.update(o,{userEvent:"input.complete",scrollIntoView:!0})]),!0)})}}]);