"use strict";(self.webpackChunkndzy_antd=self.webpackChunkndzy_antd||[]).push([["5384"],{6206:function(e,t,n){n.r(t),n.d(t,{go:function(){return k},goLanguage:function(){return y},localCompletionSource:function(){return m},snippets:function(){return c}});var a=n(9399),l=n(3015),o=n(3582),r=n(1171);let c=[(0,o.Gn)("func ${name}(${params}) ${type} {\n	${}\n}",{label:"func",detail:"declaration",type:"keyword"}),(0,o.Gn)("func (${receiver}) ${name}(${params}) ${type} {\n	${}\n}",{label:"func",detail:"method declaration",type:"keyword"}),(0,o.Gn)("var ${name} = ${value}",{label:"var",detail:"declaration",type:"keyword"}),(0,o.Gn)("type ${name} ${type}",{label:"type",detail:"declaration",type:"keyword"}),(0,o.Gn)("const ${name} = ${value}",{label:"const",detail:"declaration",type:"keyword"}),(0,o.Gn)("type ${name} = ${type}",{label:"type",detail:"alias declaration",type:"keyword"}),(0,o.Gn)("for ${init}; ${test}; ${update} {\n	${}\n}",{label:"for",detail:"loop",type:"keyword"}),(0,o.Gn)("for ${i} := range ${value} {\n	${}\n}",{label:"for",detail:"range",type:"keyword"}),(0,o.Gn)("select {\n	${}\n}",{label:"select",detail:"statement",type:"keyword"}),(0,o.Gn)("case ${}:\n${}",{label:"case",type:"keyword"}),(0,o.Gn)("switch ${} {\n	${}\n}",{label:"switch",detail:"statement",type:"keyword"}),(0,o.Gn)("switch ${}.(${type}) {\n	${}\n}",{label:"switch",detail:"type statement",type:"keyword"}),(0,o.Gn)("if ${} {\n	${}\n}",{label:"if",detail:"block",type:"keyword"}),(0,o.Gn)("if ${} {\n	${}\n} else {\n	${}\n}",{label:"if",detail:"/ else block",type:"keyword"}),(0,o.Gn)('import ${name} "${module}"\n${}',{label:"import",detail:"declaration",type:"keyword"})],i=new r.hr,p=new Set(["SourceFile","Block","FunctionDecl","MethodDecl","FunctionLiteral","ForStatement","SwitchStatement","TypeSwitchStatement","IfStatement"]);function s(e,t){return(n,a)=>{e:for(let l=n.node.firstChild,o=0,r=null;;){for(;!l;){if(!o)break e;o--,l=r.nextSibling,r=r.parent}t&&l.name==t||"SpecList"==l.name?(o++,r=l,l=l.firstChild):("DefName"==l.name&&a(l,e),l=l.nextSibling)}return!0}}let f={FunctionDecl:s("function"),VarDecl:s("var","VarSpec"),ConstDecl:s("constant","ConstSpec"),TypeDecl:s("type","TypeSpec"),ImportDecl:s("constant","ImportSpec"),Parameter:s("var"),__proto__:null},u=/^[\w$\xa1-\uffff][\w$\d\xa1-\uffff]*$/,d=["String","LineComment","BlockComment","DefName","LabelName","FieldName",".","?."],m=e=>{let t=(0,l.qz)(e.state).resolveInner(e.pos,-1);if(d.indexOf(t.name)>-1)return null;let n="VariableName"==t.name||t.to-t.from<20&&u.test(e.state.sliceDoc(t.from,t.to));if(!n&&!e.explicit)return null;let a=[];for(let n=t;n;n=n.parent)p.has(n.name)&&(a=a.concat(function e(t,n){let a=i.get(n);if(a)return a;let l=[],o=!0;function c(e,n){let a=t.sliceString(e.from,e.to);l.push({label:a,type:n})}return n.cursor(r.vj.IncludeAnonymous).iterate(n=>{if(o)o=!1;else if(n.name){let e=f[n.name];if(e&&e(n,c)||p.has(n.name))return!1}else if(n.to-n.from>8192){for(let a of e(t,n.node))l.push(a);return!1}}),i.set(n,l),l}(e.state.doc,n)));return{options:a,from:n?t.from:e.pos,validFor:u}},y=l.qp.define({name:"go",parser:a.E.configure({props:[l.uj.add({IfStatement:(0,l.tC)({except:/^\s*({|else\b)/}),LabeledStatement:l.ze,"SwitchBlock SelectBlock":e=>{let t=e.textAfter,n=/^\s*\}/.test(t),a=/^\s*(case|default)\b/.test(t);return e.baseIndent+(n||a?0:e.unit)},Block:(0,l.vw)({closing:"}"}),BlockComment:()=>null,Statement:(0,l.tC)({except:/^{/})}),l.x0.add({"Block SwitchBlock SelectBlock LiteralValue InterfaceType StructType SpecList":l.Dv,BlockComment:e=>({from:e.from+2,to:e.to-2})})]}),languageData:{closeBrackets:{brackets:["(","[","{","'",'"',"`"]},commentTokens:{line:"//",block:{open:"/*",close:"*/"}},indentOnInput:/^\s*(?:case\b|default\b|\})$/}}),$="interface struct chan map package go return break continue goto fallthrough else defer range true false nil".split(" ").map(e=>({label:e,type:"keyword"}));function k(){let e=c.concat($);return new l.ri(y,[y.data.of({autocomplete:(0,o.eC)(d,(0,o.Mb)(e))}),y.data.of({autocomplete:m})])}}}]);