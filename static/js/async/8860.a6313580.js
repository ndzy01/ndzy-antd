"use strict";(self.webpackChunkndzy_antd=self.webpackChunkndzy_antd||[]).push([["8860"],{7406:function(O,T,E){function e(O){for(var T={},E=O.split(" "),e=0;e<E.length;++e)T[E[e]]=!0;return T}E.r(T),E.d(T,{pig:function(){return C}});var I="ABS ACOS ARITY ASIN ATAN AVG BAGSIZE BINSTORAGE BLOOM BUILDBLOOM CBRT CEIL CONCAT COR COS COSH COUNT COUNT_STAR COV CONSTANTSIZE CUBEDIMENSIONS DIFF DISTINCT DOUBLEABS DOUBLEAVG DOUBLEBASE DOUBLEMAX DOUBLEMIN DOUBLEROUND DOUBLESUM EXP FLOOR FLOATABS FLOATAVG FLOATMAX FLOATMIN FLOATROUND FLOATSUM GENERICINVOKER INDEXOF INTABS INTAVG INTMAX INTMIN INTSUM INVOKEFORDOUBLE INVOKEFORFLOAT INVOKEFORINT INVOKEFORLONG INVOKEFORSTRING INVOKER ISEMPTY JSONLOADER JSONMETADATA JSONSTORAGE LAST_INDEX_OF LCFIRST LOG LOG10 LOWER LONGABS LONGAVG LONGMAX LONGMIN LONGSUM MAX MIN MAPSIZE MONITOREDUDF NONDETERMINISTIC OUTPUTSCHEMA  PIGSTORAGE PIGSTREAMING RANDOM REGEX_EXTRACT REGEX_EXTRACT_ALL REPLACE ROUND SIN SINH SIZE SQRT STRSPLIT SUBSTRING SUM STRINGCONCAT STRINGMAX STRINGMIN STRINGSIZE TAN TANH TOBAG TOKENIZE TOMAP TOP TOTUPLE TRIM TEXTLOADER TUPLESIZE UCFIRST UPPER UTF8STORAGECONVERTER ",N="VOID IMPORT RETURNS DEFINE LOAD FILTER FOREACH ORDER CUBE DISTINCT COGROUP JOIN CROSS UNION SPLIT INTO IF OTHERWISE ALL AS BY USING INNER OUTER ONSCHEMA PARALLEL PARTITION GROUP AND OR NOT GENERATE FLATTEN ASC DESC IS STREAM THROUGH STORE MAPREDUCE SHIP CACHE INPUT OUTPUT STDERROR STDIN STDOUT LIMIT SAMPLE LEFT RIGHT FULL EQ GT LT GTE LTE NEQ MATCHES TRUE FALSE DUMP",A="BOOLEAN INT LONG FLOAT DOUBLE CHARARRAY BYTEARRAY BAG TUPLE MAP ",t=e(I),R=e(N),S=e(A),r=/[*+\-%<>=&?:\/!|]/;function n(O,T,E){return T.tokenize=E,E(O,T)}function L(O,T){for(var E,e=!1;E=O.next();){if("/"==E&&e){T.tokenize=U;break}e="*"==E}return"comment"}function U(O,T){var E,e=O.next();if('"'==e||"'"==e){;return n(O,T,(E=e,function(O,T){for(var e,I=!1,N=!1;null!=(e=O.next());){if(e==E&&!I){N=!0;break}I=!I&&"\\"==e}return(N||!I)&&(T.tokenize=U),"error"}))}if(/[\[\]{}\(\),;\.]/.test(e))return null;if(/\d/.test(e))return O.eatWhile(/[\w\.]/),"number";else if("/"==e)return O.eat("*")?n(O,T,L):(O.eatWhile(r),"operator");else if("-"==e)return O.eat("-")?(O.skipToEnd(),"comment"):(O.eatWhile(r),"operator");else if(r.test(e))return O.eatWhile(r),"operator";else return(O.eatWhile(/[\w\$_]/),R&&R.propertyIsEnumerable(O.current().toUpperCase())&&!O.eat(")")&&!O.eat("."))?"keyword":t&&t.propertyIsEnumerable(O.current().toUpperCase())?"builtin":S&&S.propertyIsEnumerable(O.current().toUpperCase())?"type":"variable"}let C={name:"pig",startState:function(){return{tokenize:U,startOfLine:!0}},token:function(O,T){return O.eatSpace()?null:T.tokenize(O,T)},languageData:{autocomplete:(I+A+N).split(" ")}}}}]);