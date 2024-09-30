"use strict";(self.webpackChunkndzy_antd=self.webpackChunkndzy_antd||[]).push([["916"],{6240:function(t,e,i){i.d(e,{z:function(){return p}});let s="object"==typeof performance&&performance&&"function"==typeof performance.now?performance:Date,h=new Set,a="object"==typeof process&&process?process:{},r=(t,e,i,s)=>{"function"==typeof a.emitWarning?a.emitWarning(t,e,i,s):console.error(`[${i}] ${e}: ${t}`)},o=globalThis.AbortController,l=globalThis.AbortSignal;if(void 0===o){l=class{onabort;_onabort=[];reason;aborted=!1;addEventListener(t,e){this._onabort.push(e)}},o=class{constructor(){e()}signal=new l;abort(t){if(!this.signal.aborted){for(let e of(this.signal.reason=t,this.signal.aborted=!0,this.signal._onabort))e(t);this.signal.onabort?.(t)}}};let t=a.env?.LRU_CACHE_IGNORE_AC_WARNING!=="1",e=()=>{t&&(t=!1,r("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.","NO_ABORT_CONTROLLER","ENOTSUP",e))}}let n=t=>!h.has(t);Symbol("type");let d=t=>t&&t===Math.floor(t)&&t>0&&isFinite(t),c=t=>d(t)?t<=256?Uint8Array:t<=65536?Uint16Array:t<=0x100000000?Uint32Array:t<=Number.MAX_SAFE_INTEGER?u:null:null;class u extends Array{constructor(t){super(t),this.fill(0)}}class f{heap;length;static #t=!1;static create(t){let e=c(t);if(!e)return[];f.#t=!0;let i=new f(t,e);return f.#t=!1,i}constructor(t,e){if(!f.#t)throw TypeError("instantiate Stack using Stack.create(n)");this.heap=new e(t),this.length=0}push(t){this.heap[this.length++]=t}pop(){return this.heap[--this.length]}}class p{#e;#i;#s;#h;#a;#r;ttl;ttlResolution;ttlAutopurge;updateAgeOnGet;updateAgeOnHas;allowStale;noDisposeOnSet;noUpdateTTL;maxEntrySize;sizeCalculation;noDeleteOnFetchRejection;noDeleteOnStaleGet;allowStaleOnFetchAbort;allowStaleOnFetchRejection;ignoreFetchAbort;#o;#l;#n;#d;#c;#u;#f;#p;#g;#v;#m;#y;#S;#z;#L;#_;#k;static unsafeExposeInternals(t){return{starts:t.#S,ttls:t.#z,sizes:t.#y,keyMap:t.#n,keyList:t.#d,valList:t.#c,next:t.#u,prev:t.#f,get head(){return t.#p},get tail(){return t.#g},free:t.#v,isBackgroundFetch:e=>t.#x(e),backgroundFetch:(e,i,s,h)=>t.#F(e,i,s,h),moveToTail:e=>t.#T(e),indexes:e=>t.#A(e),rindexes:e=>t.#b(e),isStale:e=>t.#w(e)}}get max(){return this.#e}get maxSize(){return this.#i}get calculatedSize(){return this.#l}get size(){return this.#o}get fetchMethod(){return this.#a}get memoMethod(){return this.#r}get dispose(){return this.#s}get disposeAfter(){return this.#h}constructor(t){let{max:e=0,ttl:i,ttlResolution:s=1,ttlAutopurge:a,updateAgeOnGet:o,updateAgeOnHas:l,allowStale:u,dispose:g,disposeAfter:v,noDisposeOnSet:m,noUpdateTTL:y,maxSize:S=0,maxEntrySize:z=0,sizeCalculation:L,fetchMethod:_,memoMethod:k,noDeleteOnFetchRejection:x,noDeleteOnStaleGet:F,allowStaleOnFetchRejection:T,allowStaleOnFetchAbort:A,ignoreFetchAbort:b}=t;if(0!==e&&!d(e))throw TypeError("max option must be a nonnegative integer");let w=e?c(e):Array;if(!w)throw Error("invalid max value: "+e);if(this.#e=e,this.#i=S,this.maxEntrySize=z||this.#i,this.sizeCalculation=L,this.sizeCalculation){if(!this.#i&&!this.maxEntrySize)throw TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");if("function"!=typeof this.sizeCalculation)throw TypeError("sizeCalculation set to non-function")}if(void 0!==k&&"function"!=typeof k)throw TypeError("memoMethod must be a function if defined");if(this.#r=k,void 0!==_&&"function"!=typeof _)throw TypeError("fetchMethod must be a function if specified");if(this.#a=_,this.#_=!!_,this.#n=new Map,this.#d=Array(e).fill(void 0),this.#c=Array(e).fill(void 0),this.#u=new w(e),this.#f=new w(e),this.#p=0,this.#g=0,this.#v=f.create(e),this.#o=0,this.#l=0,"function"==typeof g&&(this.#s=g),"function"==typeof v?(this.#h=v,this.#m=[]):(this.#h=void 0,this.#m=void 0),this.#L=!!this.#s,this.#k=!!this.#h,this.noDisposeOnSet=!!m,this.noUpdateTTL=!!y,this.noDeleteOnFetchRejection=!!x,this.allowStaleOnFetchRejection=!!T,this.allowStaleOnFetchAbort=!!A,this.ignoreFetchAbort=!!b,0!==this.maxEntrySize){if(0!==this.#i&&!d(this.#i))throw TypeError("maxSize must be a positive integer if specified");if(!d(this.maxEntrySize))throw TypeError("maxEntrySize must be a positive integer if specified");this.#E()}if(this.allowStale=!!u,this.noDeleteOnStaleGet=!!F,this.updateAgeOnGet=!!o,this.updateAgeOnHas=!!l,this.ttlResolution=d(s)||0===s?s:1,this.ttlAutopurge=!!a,this.ttl=i||0,this.ttl){if(!d(this.ttl))throw TypeError("ttl must be a positive integer if specified");this.#M()}if(0===this.#e&&0===this.ttl&&0===this.#i)throw TypeError("At least one of max, maxSize, or ttl is required");if(!this.ttlAutopurge&&!this.#e&&!this.#i){let t="LRU_CACHE_UNBOUNDED";if(n(t)){h.add(t);r("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.","UnboundedCacheWarning",t,p)}}}getRemainingTTL(t){return this.#n.has(t)?1/0:0}#M(){let t=new u(this.#e),e=new u(this.#e);this.#z=t,this.#S=e,this.#D=(i,h,a=s.now())=>{if(e[i]=0!==h?a:0,t[i]=h,0!==h&&this.ttlAutopurge){let t=setTimeout(()=>{this.#w(i)&&this.#O(this.#d[i],"expire")},h+1);t.unref&&t.unref()}},this.#C=i=>{e[i]=0!==t[i]?s.now():0},this.#W=(s,a)=>{if(t[a]){let r=t[a],o=e[a];if(!r||!o)return;s.ttl=r,s.start=o,s.now=i||h();let l=s.now-o;s.remainingTTL=r-l}};let i=0,h=()=>{let t=s.now();if(this.ttlResolution>0){i=t;let e=setTimeout(()=>i=0,this.ttlResolution);e.unref&&e.unref()}return t};this.getRemainingTTL=s=>{let a=this.#n.get(s);if(void 0===a)return 0;let r=t[a],o=e[a];return r&&o?r-((i||h())-o):1/0},this.#w=s=>{let a=e[s],r=t[s];return!!r&&!!a&&(i||h())-a>r}}#C=()=>{};#W=()=>{};#D=()=>{};#w=()=>!1;#E(){let t=new u(this.#e);this.#l=0,this.#y=t,this.#I=e=>{this.#l-=t[e],t[e]=0},this.#R=(t,e,i,s)=>{if(this.#x(e))return 0;if(!d(i)){if(s){if("function"!=typeof s)throw TypeError("sizeCalculation must be a function");if(!d(i=s(e,t)))throw TypeError("sizeCalculation return invalid (expect positive integer)")}else throw TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.")}return i},this.#B=(e,i,s)=>{if(t[e]=i,this.#i){let i=this.#i-t[e];for(;this.#l>i;)this.#U(!0)}this.#l+=t[e],s&&(s.entrySize=i,s.totalCalculatedSize=this.#l)}}#I=t=>{};#B=(t,e,i)=>{};#R=(t,e,i,s)=>{if(i||s)throw TypeError("cannot set size without setting maxSize or maxEntrySize on cache");return 0};*#A({allowStale:t=this.allowStale}={}){if(this.#o)for(let e=this.#g;this.#G(e);){;if((t||!this.#w(e))&&(yield e),e===this.#p)break;e=this.#f[e]}}*#b({allowStale:t=this.allowStale}={}){if(this.#o)for(let e=this.#p;this.#G(e);){;if((t||!this.#w(e))&&(yield e),e===this.#g)break;e=this.#u[e]}}#G(t){return void 0!==t&&this.#n.get(this.#d[t])===t}*entries(){for(let t of this.#A())void 0!==this.#c[t]&&void 0!==this.#d[t]&&!this.#x(this.#c[t])&&(yield[this.#d[t],this.#c[t]])}*rentries(){for(let t of this.#b())void 0!==this.#c[t]&&void 0!==this.#d[t]&&!this.#x(this.#c[t])&&(yield[this.#d[t],this.#c[t]])}*keys(){for(let t of this.#A()){let e=this.#d[t];void 0!==e&&!this.#x(this.#c[t])&&(yield e)}}*rkeys(){for(let t of this.#b()){let e=this.#d[t];void 0!==e&&!this.#x(this.#c[t])&&(yield e)}}*values(){for(let t of this.#A())void 0!==this.#c[t]&&!this.#x(this.#c[t])&&(yield this.#c[t])}*rvalues(){for(let t of this.#b())void 0!==this.#c[t]&&!this.#x(this.#c[t])&&(yield this.#c[t])}[Symbol.iterator](){return this.entries()}[Symbol.toStringTag]="LRUCache";find(t,e={}){for(let i of this.#A()){let s=this.#c[i],h=this.#x(s)?s.__staleWhileFetching:s;if(void 0!==h&&t(h,this.#d[i],this))return this.get(this.#d[i],e)}}forEach(t,e=this){for(let i of this.#A()){let s=this.#c[i],h=this.#x(s)?s.__staleWhileFetching:s;void 0!==h&&t.call(e,h,this.#d[i],this)}}rforEach(t,e=this){for(let i of this.#b()){let s=this.#c[i],h=this.#x(s)?s.__staleWhileFetching:s;void 0!==h&&t.call(e,h,this.#d[i],this)}}purgeStale(){let t=!1;for(let e of this.#b({allowStale:!0}))this.#w(e)&&(this.#O(this.#d[e],"expire"),t=!0);return t}info(t){let e=this.#n.get(t);if(void 0===e)return;let i=this.#c[e],h=this.#x(i)?i.__staleWhileFetching:i;if(void 0===h)return;let a={value:h};if(this.#z&&this.#S){let t=this.#z[e],i=this.#S[e];if(t&&i){let e=t-(s.now()-i);a.ttl=e,a.start=Date.now()}}return this.#y&&(a.size=this.#y[e]),a}dump(){let t=[];for(let e of this.#A({allowStale:!0})){let i=this.#d[e],h=this.#c[e],a=this.#x(h)?h.__staleWhileFetching:h;if(void 0===a||void 0===i)continue;let r={value:a};if(this.#z&&this.#S){r.ttl=this.#z[e];let t=s.now()-this.#S[e];r.start=Math.floor(Date.now()-t)}this.#y&&(r.size=this.#y[e]),t.unshift([i,r])}return t}load(t){for(let[e,i]of(this.clear(),t)){if(i.start){let t=Date.now()-i.start;i.start=s.now()-t}this.set(e,i.value,i)}}set(t,e,i={}){if(void 0===e)return this.delete(t),this;let{ttl:s=this.ttl,start:h,noDisposeOnSet:a=this.noDisposeOnSet,sizeCalculation:r=this.sizeCalculation,status:o}=i,{noUpdateTTL:l=this.noUpdateTTL}=i,n=this.#R(t,e,i.size||0,r);if(this.maxEntrySize&&n>this.maxEntrySize)return o&&(o.set="miss",o.maxEntrySizeExceeded=!0),this.#O(t,"set"),this;let d=0===this.#o?void 0:this.#n.get(t);if(void 0===d)d=0===this.#o?this.#g:0!==this.#v.length?this.#v.pop():this.#o===this.#e?this.#U(!1):this.#o,this.#d[d]=t,this.#c[d]=e,this.#n.set(t,d),this.#u[this.#g]=d,this.#f[d]=this.#g,this.#g=d,this.#o++,this.#B(d,n,o),o&&(o.set="add"),l=!1;else{this.#T(d);let i=this.#c[d];if(e!==i){if(this.#_&&this.#x(i)){i.__abortController.abort(Error("replaced"));let{__staleWhileFetching:e}=i;void 0!==e&&!a&&(this.#L&&this.#s?.(e,t,"set"),this.#k&&this.#m?.push([e,t,"set"]))}else!a&&(this.#L&&this.#s?.(i,t,"set"),this.#k&&this.#m?.push([i,t,"set"]));if(this.#I(d),this.#B(d,n,o),this.#c[d]=e,o){o.set="replace";let t=i&&this.#x(i)?i.__staleWhileFetching:i;void 0!==t&&(o.oldValue=t)}}else o&&(o.set="update")}if(0!==s&&!this.#z&&this.#M(),this.#z&&(!l&&this.#D(d,s,h),o&&this.#W(o,d)),!a&&this.#k&&this.#m){let t;let e=this.#m;for(;t=e?.shift();)this.#h?.(...t)}return this}pop(){try{for(;this.#o;){let t=this.#c[this.#p];if(this.#U(!0),this.#x(t)){if(t.__staleWhileFetching)return t.__staleWhileFetching}else if(void 0!==t)return t}}finally{if(this.#k&&this.#m){let t;let e=this.#m;for(;t=e?.shift();)this.#h?.(...t)}}}#U(t){let e=this.#p,i=this.#d[e],s=this.#c[e];return this.#_&&this.#x(s)?s.__abortController.abort(Error("evicted")):(this.#L||this.#k)&&(this.#L&&this.#s?.(s,i,"evict"),this.#k&&this.#m?.push([s,i,"evict"])),this.#I(e),t&&(this.#d[e]=void 0,this.#c[e]=void 0,this.#v.push(e)),1===this.#o?(this.#p=this.#g=0,this.#v.length=0):this.#p=this.#u[e],this.#n.delete(i),this.#o--,e}has(t,e={}){let{updateAgeOnHas:i=this.updateAgeOnHas,status:s}=e,h=this.#n.get(t);if(void 0!==h){let t=this.#c[h];if(this.#x(t)&&void 0===t.__staleWhileFetching)return!1;if(!this.#w(h))return i&&this.#C(h),s&&(s.has="hit",this.#W(s,h)),!0;s&&(s.has="stale",this.#W(s,h))}else s&&(s.has="miss");return!1}peek(t,e={}){let{allowStale:i=this.allowStale}=e,s=this.#n.get(t);if(void 0===s||!i&&this.#w(s))return;let h=this.#c[s];return this.#x(h)?h.__staleWhileFetching:h}#F(t,e,i,s){let h=void 0===e?void 0:this.#c[e];if(this.#x(h))return h;let a=new o,{signal:r}=i;r?.addEventListener("abort",()=>a.abort(r.reason),{signal:a.signal});let l={signal:a.signal,options:i,context:s},n=(s,h=!1)=>{let{aborted:r}=a.signal,o=i.ignoreFetchAbort&&void 0!==s;return(i.status&&(r&&!h?(i.status.fetchAborted=!0,i.status.fetchError=a.signal.reason,o&&(i.status.fetchAbortIgnored=!0)):i.status.fetchResolved=!0),!r||o||h)?(this.#c[e]===c&&(void 0===s?c.__staleWhileFetching?this.#c[e]=c.__staleWhileFetching:this.#O(t,"fetch"):(i.status&&(i.status.fetchUpdated=!0),this.set(t,s,l.options))),s):d(a.signal.reason)},d=s=>{let{aborted:h}=a.signal,r=h&&i.allowStaleOnFetchAbort,o=r||i.allowStaleOnFetchRejection,l=o||i.noDeleteOnFetchRejection;if(this.#c[e]===c&&(l&&void 0!==c.__staleWhileFetching?!r&&(this.#c[e]=c.__staleWhileFetching):this.#O(t,"fetch")),o)return i.status&&void 0!==c.__staleWhileFetching&&(i.status.returnedStale=!0),c.__staleWhileFetching;if(c.__returned===c)throw s};i.status&&(i.status.fetchDispatched=!0);let c=new Promise((e,s)=>{let r=this.#a?.(t,h,l);r&&r instanceof Promise&&r.then(t=>e(void 0===t?void 0:t),s),a.signal.addEventListener("abort",()=>{(!i.ignoreFetchAbort||i.allowStaleOnFetchAbort)&&(e(void 0),i.allowStaleOnFetchAbort&&(e=t=>n(t,!0)))})}).then(n,t=>(i.status&&(i.status.fetchRejected=!0,i.status.fetchError=t),d(t))),u=Object.assign(c,{__abortController:a,__staleWhileFetching:h,__returned:void 0});return void 0===e?(this.set(t,u,{...l.options,status:void 0}),e=this.#n.get(t)):this.#c[e]=u,u}#x(t){return!!this.#_&&!!t&&t instanceof Promise&&t.hasOwnProperty("__staleWhileFetching")&&t.__abortController instanceof o}async fetch(t,e={}){let{allowStale:i=this.allowStale,updateAgeOnGet:s=this.updateAgeOnGet,noDeleteOnStaleGet:h=this.noDeleteOnStaleGet,ttl:a=this.ttl,noDisposeOnSet:r=this.noDisposeOnSet,size:o=0,sizeCalculation:l=this.sizeCalculation,noUpdateTTL:n=this.noUpdateTTL,noDeleteOnFetchRejection:d=this.noDeleteOnFetchRejection,allowStaleOnFetchRejection:c=this.allowStaleOnFetchRejection,ignoreFetchAbort:u=this.ignoreFetchAbort,allowStaleOnFetchAbort:f=this.allowStaleOnFetchAbort,context:p,forceRefresh:g=!1,status:v,signal:m}=e;if(!this.#_)return v&&(v.fetch="get"),this.get(t,{allowStale:i,updateAgeOnGet:s,noDeleteOnStaleGet:h,status:v});let y={allowStale:i,updateAgeOnGet:s,noDeleteOnStaleGet:h,ttl:a,noDisposeOnSet:r,size:o,sizeCalculation:l,noUpdateTTL:n,noDeleteOnFetchRejection:d,allowStaleOnFetchRejection:c,allowStaleOnFetchAbort:f,ignoreFetchAbort:u,status:v,signal:m},S=this.#n.get(t);if(void 0===S){v&&(v.fetch="miss");let e=this.#F(t,S,y,p);return e.__returned=e}{let e=this.#c[S];if(this.#x(e)){let t=i&&void 0!==e.__staleWhileFetching;return v&&(v.fetch="inflight",t&&(v.returnedStale=!0)),t?e.__staleWhileFetching:e.__returned=e}let h=this.#w(S);if(!g&&!h)return v&&(v.fetch="hit"),this.#T(S),s&&this.#C(S),v&&this.#W(v,S),e;let a=this.#F(t,S,y,p),r=void 0!==a.__staleWhileFetching&&i;return v&&(v.fetch=h?"stale":"refresh",r&&h&&(v.returnedStale=!0)),r?a.__staleWhileFetching:a.__returned=a}}async forceFetch(t,e={}){let i=await this.fetch(t,e);if(void 0===i)throw Error("fetch() returned undefined");return i}memo(t,e={}){let i=this.#r;if(!i)throw Error("no memoMethod provided to constructor");let{context:s,forceRefresh:h,...a}=e,r=this.get(t,a);if(!h&&void 0!==r)return r;let o=i(t,r,{options:a,context:s});return this.set(t,o,a),o}get(t,e={}){let{allowStale:i=this.allowStale,updateAgeOnGet:s=this.updateAgeOnGet,noDeleteOnStaleGet:h=this.noDeleteOnStaleGet,status:a}=e,r=this.#n.get(t);if(void 0!==r){let e=this.#c[r],o=this.#x(e);if(a&&this.#W(a,r),this.#w(r))return(a&&(a.get="stale"),o)?(a&&i&&void 0!==e.__staleWhileFetching&&(a.returnedStale=!0),i?e.__staleWhileFetching:void 0):(!h&&this.#O(t,"expire"),a&&i&&(a.returnedStale=!0),i?e:void 0);return(a&&(a.get="hit"),o)?e.__staleWhileFetching:(this.#T(r),s&&this.#C(r),e)}a&&(a.get="miss")}#N(t,e){this.#f[e]=t,this.#u[t]=e}#T(t){t!==this.#g&&(t===this.#p?this.#p=this.#u[t]:this.#N(this.#f[t],this.#u[t]),this.#N(this.#g,t),this.#g=t)}delete(t){return this.#O(t,"delete")}#O(t,e){let i=!1;if(0!==this.#o){let s=this.#n.get(t);if(void 0!==s){if(i=!0,1===this.#o)this.#j(e);else{this.#I(s);let i=this.#c[s];if(this.#x(i)?i.__abortController.abort(Error("deleted")):(this.#L||this.#k)&&(this.#L&&this.#s?.(i,t,e),this.#k&&this.#m?.push([i,t,e])),this.#n.delete(t),this.#d[s]=void 0,this.#c[s]=void 0,s===this.#g)this.#g=this.#f[s];else if(s===this.#p)this.#p=this.#u[s];else{let t=this.#f[s];this.#u[t]=this.#u[s];let e=this.#u[s];this.#f[e]=this.#f[s]}this.#o--,this.#v.push(s)}}}if(this.#k&&this.#m?.length){let t;let e=this.#m;for(;t=e?.shift();)this.#h?.(...t)}return i}clear(){return this.#j("delete")}#j(t){for(let e of this.#b({allowStale:!0})){let i=this.#c[e];if(this.#x(i))i.__abortController.abort(Error("deleted"));else{let s=this.#d[e];this.#L&&this.#s?.(i,s,t),this.#k&&this.#m?.push([i,s,t])}}if(this.#n.clear(),this.#c.fill(void 0),this.#d.fill(void 0),this.#z&&this.#S&&(this.#z.fill(0),this.#S.fill(0)),this.#y&&this.#y.fill(0),this.#p=0,this.#g=0,this.#v.length=0,this.#l=0,this.#o=0,this.#k&&this.#m){let t;let e=this.#m;for(;t=e?.shift();)this.#h?.(...t)}}}}}]);