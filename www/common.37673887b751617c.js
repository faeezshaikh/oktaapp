"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8592],{154:(y,f,c)=>{c.d(f,{c:()=>a});var t=c(5960),r=c(9951),d=c(6535);const a=(s,i)=>{let e,n;const g=(l,p,w)=>{if(typeof document>"u")return;const E=document.elementFromPoint(l,p);E&&i(E)?E!==e&&(o(),u(E,w)):o()},u=(l,p)=>{e=l,n||(n=e);const w=e;(0,t.w)(()=>w.classList.add("ion-activated")),p()},o=(l=!1)=>{if(!e)return;const p=e;(0,t.w)(()=>p.classList.remove("ion-activated")),l&&n!==e&&e.click(),e=void 0};return(0,d.createGesture)({el:s,gestureName:"buttonActiveDrag",threshold:0,onStart:l=>g(l.currentX,l.currentY,r.a),onMove:l=>g(l.currentX,l.currentY,r.b),onEnd:()=>{o(!0),(0,r.h)(),n=void 0}})}},1836:(y,f,c)=>{c.d(f,{g:()=>r});var t=c(1848);const r=()=>{if(void 0!==t.w)return t.w.Capacitor}},983:(y,f,c)=>{c.d(f,{c:()=>t,i:()=>r});const t=(d,a,s)=>"function"==typeof s?s(d,a):"string"==typeof s?d[s]===a[s]:Array.isArray(a)?a.includes(d):d===a,r=(d,a,s)=>void 0!==d&&(Array.isArray(d)?d.some(i=>t(i,a,s)):t(d,a,s))},4510:(y,f,c)=>{c.d(f,{g:()=>t});const t=(i,e,n,g,u)=>d(i[1],e[1],n[1],g[1],u).map(o=>r(i[0],e[0],n[0],g[0],o)),r=(i,e,n,g,u)=>u*(3*e*Math.pow(u-1,2)+u*(-3*n*u+3*n+g*u))-i*Math.pow(u-1,3),d=(i,e,n,g,u)=>s((g-=u)-3*(n-=u)+3*(e-=u)-(i-=u),3*n-6*e+3*i,3*e-3*i,i).filter(l=>l>=0&&l<=1),s=(i,e,n,g)=>{if(0===i)return((i,e,n)=>{const g=e*e-4*i*n;return g<0?[]:[(-e+Math.sqrt(g))/(2*i),(-e-Math.sqrt(g))/(2*i)]})(e,n,g);const u=(3*(n/=i)-(e/=i)*e)/3,o=(2*e*e*e-9*e*n+27*(g/=i))/27;if(0===u)return[Math.pow(-o,1/3)];if(0===o)return[Math.sqrt(-u),-Math.sqrt(-u)];const l=Math.pow(o/2,2)+Math.pow(u/3,3);if(0===l)return[Math.pow(o/2,.5)-e/3];if(l>0)return[Math.pow(-o/2+Math.sqrt(l),1/3)-Math.pow(o/2+Math.sqrt(l),1/3)-e/3];const p=Math.sqrt(Math.pow(-u/3,3)),w=Math.acos(-o/(2*Math.sqrt(Math.pow(-u/3,3)))),E=2*Math.pow(p,1/3);return[E*Math.cos(w/3)-e/3,E*Math.cos((w+2*Math.PI)/3)-e/3,E*Math.cos((w+4*Math.PI)/3)-e/3]}},4162:(y,f,c)=>{c.d(f,{i:()=>t});const t=r=>r&&""!==r.dir?"rtl"===r.dir.toLowerCase():"rtl"===document?.dir.toLowerCase()},8434:(y,f,c)=>{c.r(f),c.d(f,{startFocusVisible:()=>a});const t="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],a=s=>{let i=[],e=!0;const n=s?s.shadowRoot:document,g=s||document.body,u=M=>{i.forEach(h=>h.classList.remove(t)),M.forEach(h=>h.classList.add(t)),i=M},o=()=>{e=!1,u([])},l=M=>{e=d.includes(M.key),e||u([])},p=M=>{if(e&&void 0!==M.composedPath){const h=M.composedPath().filter(v=>!!v.classList&&v.classList.contains("ion-focusable"));u(h)}},w=()=>{n.activeElement===g&&u([])};return n.addEventListener("keydown",l),n.addEventListener("focusin",p),n.addEventListener("focusout",w),n.addEventListener("touchstart",o,{passive:!0}),n.addEventListener("mousedown",o),{destroy:()=>{n.removeEventListener("keydown",l),n.removeEventListener("focusin",p),n.removeEventListener("focusout",w),n.removeEventListener("touchstart",o),n.removeEventListener("mousedown",o)},setFocus:u}}},9749:(y,f,c)=>{c.d(f,{c:()=>r});var t=c(512);const r=i=>{const e=i;let n;return{hasLegacyControl:()=>{if(void 0===n){const u=void 0!==e.label||d(e),o=e.hasAttribute("aria-label")||e.hasAttribute("aria-labelledby")&&null===e.shadowRoot,l=(0,t.h)(e);n=!0===e.legacy||!u&&!o&&null!==l}return n}}},d=i=>!!(a.includes(i.tagName)&&null!==i.querySelector('[slot="label"]')||s.includes(i.tagName)&&""!==i.textContent),a=["ION-INPUT","ION-TEXTAREA","ION-SELECT","ION-RANGE"],s=["ION-TOGGLE","ION-CHECKBOX","ION-RADIO"]},9951:(y,f,c)=>{c.d(f,{I:()=>r,a:()=>e,b:()=>n,c:()=>i,d:()=>u,h:()=>g});var t=c(1836),r=function(o){return o.Heavy="HEAVY",o.Medium="MEDIUM",o.Light="LIGHT",o}(r||{});const a={getEngine(){const o=window.TapticEngine;if(o)return o;const l=(0,t.g)();return l?.isPluginAvailable("Haptics")?l.Plugins.Haptics:void 0},available(){if(!this.getEngine())return!1;const l=(0,t.g)();return"web"!==l?.getPlatform()||typeof navigator<"u"&&void 0!==navigator.vibrate},isCordova:()=>void 0!==window.TapticEngine,isCapacitor:()=>void 0!==(0,t.g)(),impact(o){const l=this.getEngine();if(!l)return;const p=this.isCapacitor()?o.style:o.style.toLowerCase();l.impact({style:p})},notification(o){const l=this.getEngine();if(!l)return;const p=this.isCapacitor()?o.type:o.type.toLowerCase();l.notification({type:p})},selection(){const o=this.isCapacitor()?r.Light:"light";this.impact({style:o})},selectionStart(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionStart():o.gestureSelectionStart())},selectionChanged(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionChanged():o.gestureSelectionChanged())},selectionEnd(){const o=this.getEngine();o&&(this.isCapacitor()?o.selectionEnd():o.gestureSelectionEnd())}},s=()=>a.available(),i=()=>{s()&&a.selection()},e=()=>{s()&&a.selectionStart()},n=()=>{s()&&a.selectionChanged()},g=()=>{s()&&a.selectionEnd()},u=o=>{s()&&a.impact(o)}},7946:(y,f,c)=>{c.d(f,{I:()=>i,a:()=>u,b:()=>s,c:()=>p,d:()=>E,f:()=>o,g:()=>g,i:()=>n,p:()=>w,r:()=>M,s:()=>l});var t=c(5861),r=c(512),d=c(2400);const s="ion-content",i=".ion-content-scroll-host",e=`${s}, ${i}`,n=h=>"ION-CONTENT"===h.tagName,g=function(){var h=(0,t.Z)(function*(v){return n(v)?(yield new Promise(m=>(0,r.c)(v,m)),v.getScrollElement()):v});return function(m){return h.apply(this,arguments)}}(),u=h=>h.querySelector(i)||h.querySelector(e),o=h=>h.closest(e),l=(h,v)=>n(h)?h.scrollToTop(v):Promise.resolve(h.scrollTo({top:0,left:0,behavior:v>0?"smooth":"auto"})),p=(h,v,m,O)=>n(h)?h.scrollByPoint(v,m,O):Promise.resolve(h.scrollBy({top:m,left:v,behavior:O>0?"smooth":"auto"})),w=h=>(0,d.b)(h,s),E=h=>{if(n(h)){const m=h.scrollY;return h.scrollY=!1,m}return h.style.setProperty("overflow","hidden"),!0},M=(h,v)=>{n(h)?h.scrollY=v:h.style.removeProperty("overflow")}},5307:(y,f,c)=>{c.d(f,{a:()=>t,b:()=>p,c:()=>e,d:()=>w,e:()=>D,f:()=>i,g:()=>E,h:()=>d,i:()=>r,j:()=>O,k:()=>C,l:()=>n,m:()=>o,n:()=>M,o:()=>u,p:()=>s,q:()=>a,r:()=>m,s:()=>_,t:()=>l,u:()=>h,v:()=>v,w:()=>g});const t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},5917:(y,f,c)=>{c.d(f,{c:()=>a,g:()=>s});var t=c(1848),r=c(512),d=c(2400);const a=(e,n,g)=>{let u,o;if(void 0!==t.w&&"MutationObserver"in t.w){const E=Array.isArray(n)?n:[n];u=new MutationObserver(M=>{for(const h of M)for(const v of h.addedNodes)if(v.nodeType===Node.ELEMENT_NODE&&E.includes(v.slot))return g(),void(0,r.r)(()=>l(v))}),u.observe(e,{childList:!0})}const l=E=>{var M;o&&(o.disconnect(),o=void 0),o=new MutationObserver(h=>{g();for(const v of h)for(const m of v.removedNodes)m.nodeType===Node.ELEMENT_NODE&&m.slot===n&&w()}),o.observe(null!==(M=E.parentElement)&&void 0!==M?M:E,{subtree:!0,childList:!0})},w=()=>{o&&(o.disconnect(),o=void 0)};return{destroy:()=>{u&&(u.disconnect(),u=void 0),w()}}},s=(e,n,g)=>{const u=null==e?0:e.toString().length,o=i(u,n);if(void 0===g)return o;try{return g(u,n)}catch(l){return(0,d.a)("Exception in provided `counterFormatter`.",l),o}},i=(e,n)=>`${e} / ${n}`},6591:(y,f,c)=>{c.r(f),c.d(f,{KEYBOARD_DID_CLOSE:()=>s,KEYBOARD_DID_OPEN:()=>a,copyVisualViewport:()=>C,keyboardDidClose:()=>h,keyboardDidOpen:()=>E,keyboardDidResize:()=>M,resetKeyboardAssist:()=>u,setKeyboardClose:()=>w,setKeyboardOpen:()=>p,startKeyboardAssist:()=>o,trackViewportChanges:()=>O});var t=c(3920);c(1836),c(1848);const a="ionKeyboardDidShow",s="ionKeyboardDidHide";let e={},n={},g=!1;const u=()=>{e={},n={},g=!1},o=_=>{if(t.K.getEngine())l(_);else{if(!_.visualViewport)return;n=C(_.visualViewport),_.visualViewport.onresize=()=>{O(_),E()||M(_)?p(_):h(_)&&w(_)}}},l=_=>{_.addEventListener("keyboardDidShow",D=>p(_,D)),_.addEventListener("keyboardDidHide",()=>w(_))},p=(_,D)=>{v(_,D),g=!0},w=_=>{m(_),g=!1},E=()=>!g&&e.width===n.width&&(e.height-n.height)*n.scale>150,M=_=>g&&!h(_),h=_=>g&&n.height===_.innerHeight,v=(_,D)=>{const T=new CustomEvent(a,{detail:{keyboardHeight:D?D.keyboardHeight:_.innerHeight-n.height}});_.dispatchEvent(T)},m=_=>{const D=new CustomEvent(s);_.dispatchEvent(D)},O=_=>{e=Object.assign({},n),n=C(_.visualViewport)},C=_=>({width:Math.round(_.width),height:Math.round(_.height),offsetTop:_.offsetTop,offsetLeft:_.offsetLeft,pageTop:_.pageTop,pageLeft:_.pageLeft,scale:_.scale})},3920:(y,f,c)=>{c.d(f,{K:()=>a,a:()=>d});var t=c(1836),r=function(s){return s.Unimplemented="UNIMPLEMENTED",s.Unavailable="UNAVAILABLE",s}(r||{}),d=function(s){return s.Body="body",s.Ionic="ionic",s.Native="native",s.None="none",s}(d||{});const a={getEngine(){const s=(0,t.g)();if(s?.isPluginAvailable("Keyboard"))return s.Plugins.Keyboard},getResizeMode(){const s=this.getEngine();return s?.getResizeMode?s.getResizeMode().catch(i=>{if(i.code!==r.Unimplemented)throw i}):Promise.resolve(void 0)}}},9252:(y,f,c)=>{c.d(f,{c:()=>i});var t=c(5861),r=c(1848),d=c(3920);const a=e=>void 0===r.d||e===d.a.None||void 0===e?null:r.d.querySelector("ion-app")??r.d.body,s=e=>{const n=a(e);return null===n?0:n.clientHeight},i=function(){var e=(0,t.Z)(function*(n){let g,u,o,l;const p=function(){var v=(0,t.Z)(function*(){const m=yield d.K.getResizeMode(),O=void 0===m?void 0:m.mode;g=()=>{void 0===l&&(l=s(O)),o=!0,w(o,O)},u=()=>{o=!1,w(o,O)},null==r.w||r.w.addEventListener("keyboardWillShow",g),null==r.w||r.w.addEventListener("keyboardWillHide",u)});return function(){return v.apply(this,arguments)}}(),w=(v,m)=>{n&&n(v,E(m))},E=v=>{if(0===l||l===s(v))return;const m=a(v);return null!==m?new Promise(O=>{const _=new ResizeObserver(()=>{m.clientHeight===l&&(_.disconnect(),O())});_.observe(m)}):void 0};return yield p(),{init:p,destroy:()=>{null==r.w||r.w.removeEventListener("keyboardWillShow",g),null==r.w||r.w.removeEventListener("keyboardWillHide",u),g=u=void 0},isKeyboardVisible:()=>o}});return function(g){return e.apply(this,arguments)}}()},9229:(y,f,c)=>{c.d(f,{c:()=>r});var t=c(5861);const r=()=>{let d;return{lock:function(){var s=(0,t.Z)(function*(){const i=d;let e;return d=new Promise(n=>e=n),void 0!==i&&(yield i),e});return function(){return s.apply(this,arguments)}}()}}},4793:(y,f,c)=>{c.d(f,{c:()=>d});var t=c(1848),r=c(512);const d=(a,s,i)=>{let e;const n=()=>!(void 0===s()||void 0!==a.label||null===i()),u=()=>{const l=s();if(void 0===l)return;if(!n())return void l.style.removeProperty("width");const p=i().scrollWidth;if(0===p&&null===l.offsetParent&&void 0!==t.w&&"IntersectionObserver"in t.w){if(void 0!==e)return;const w=e=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(u(),w.disconnect(),e=void 0)},{threshold:.01,root:a});w.observe(l)}else l.style.setProperty("width",.75*p+"px")};return{calculateNotchWidth:()=>{n()&&(0,r.r)(()=>{u()})},destroy:()=>{e&&(e.disconnect(),e=void 0)}}}},2217:(y,f,c)=>{c.d(f,{S:()=>r});const r={bubbles:{dur:1e3,circles:9,fn:(d,a,s)=>{const i=d*a/s-d+"ms",e=2*Math.PI*a/s;return{r:5,style:{top:32*Math.sin(e)+"%",left:32*Math.cos(e)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(d,a,s)=>{const i=a/s,e=d*i-d+"ms",n=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":e}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,a)=>({r:6,style:{left:32-32*a+"%","animation-delay":-110*a+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,a,s)=>({y1:14,y2:26,style:{transform:`rotate(${360/s*a+(a<s/2?180:-180)}deg)`,"animation-delay":d*a/s-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,a,s)=>({y1:12,y2:20,style:{transform:`rotate(${360/s*a+(a<s/2?180:-180)}deg)`,"animation-delay":d*a/s-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,a,s)=>({y1:17,y2:29,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":d*a/s-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,a,s)=>({y1:12,y2:20,style:{transform:`rotate(${30*a+(a<6?180:-180)}deg)`,"animation-delay":d*a/s-d+"ms"}})}}},3049:(y,f,c)=>{c.r(f),c.d(f,{createSwipeBackGesture:()=>s});var t=c(512),r=c(4162),d=c(6535);c(2019);const s=(i,e,n,g,u)=>{const o=i.ownerDocument.defaultView;let l=(0,r.i)(i);const w=m=>l?-m.deltaX:m.deltaX;return(0,d.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:m=>(l=(0,r.i)(i),(m=>{const{startX:C}=m;return l?C>=o.innerWidth-50:C<=50})(m)&&e()),onStart:n,onMove:m=>{const C=w(m)/o.innerWidth;g(C)},onEnd:m=>{const O=w(m),C=o.innerWidth,_=O/C,D=(m=>l?-m.velocityX:m.velocityX)(m),T=D>=0&&(D>.2||O>C/2),P=(T?1-_:_)*C;let L=0;if(P>5){const b=P/Math.abs(D);L=Math.min(b,540)}u(T,_<=0?.01:(0,t.l)(0,_,.9999),L)}})}},6806:(y,f,c)=>{c.d(f,{w:()=>t});const t=(a,s,i)=>{if(typeof MutationObserver>"u")return;const e=new MutationObserver(n=>{i(r(n,s))});return e.observe(a,{childList:!0,subtree:!0}),e},r=(a,s)=>{let i;return a.forEach(e=>{for(let n=0;n<e.addedNodes.length;n++)i=d(e.addedNodes[n],s)||i}),i},d=(a,s)=>{if(1!==a.nodeType)return;const i=a;return(i.tagName===s.toUpperCase()?[i]:Array.from(i.querySelectorAll(s))).find(n=>n.value===i.value)}},8880:(y,f,c)=>{c.d(f,{H:()=>a});var t=c(6242),r=c(3800),d=c(95);let a=(()=>{class s{constructor(e){this.modalCtrl=e}ngOnInit(){console.log("init card details")}cancel(){return this.modalCtrl.dismiss(null,"cancel")}confirm(){return this.modalCtrl.dismiss(this.name,"confirm")}static#t=this.\u0275fac=function(n){return new(n||s)(t.Y36(r.IN))};static#e=this.\u0275cmp=t.Xpm({type:s,selectors:[["app-card-details"]],decls:13,vars:2,consts:[["slot","start"],["color","medium",3,"click"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["labelPlacement","stacked","label","Enter your name","placeholder","Your name",3,"ngModel","ngModelChange"]],template:function(n,g){1&n&&(t.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-button",1),t.NdJ("click",function(){return g.cancel()}),t._uU(4,"Cancel"),t.qZA()(),t.TgZ(5,"ion-title"),t._uU(6,"Welcome"),t.qZA(),t.TgZ(7,"ion-buttons",2)(8,"ion-button",3),t.NdJ("click",function(){return g.confirm()}),t._uU(9,"Confirm"),t.qZA()()()(),t.TgZ(10,"ion-content",4)(11,"ion-item")(12,"ion-input",5),t.NdJ("ngModelChange",function(o){return g.name=o}),t.qZA()()()),2&n&&(t.xp6(8),t.Q6J("strong",!0),t.xp6(4),t.Q6J("ngModel",g.name))},dependencies:[d.JJ,d.On,r.YG,r.Sm,r.W2,r.Gu,r.pK,r.Ie,r.wd,r.sr,r.j9]})}return s})()},7015:(y,f,c)=>{c.d(f,{u:()=>d});var t=c(6242),r=c(9862);let d=(()=>{class a{constructor(i){this.http=i}getData(){return this.http.get("/assets/iris.json")}getValueMapData(){return this.http.get("/assets/valuestream.json")}static#t=this.\u0275fac=function(e){return new(e||a)(t.LFG(r.eN))};static#e=this.\u0275prov=t.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})()},4325:(y,f,c)=>{c.d(f,{$:()=>i});var t=c(6242),r=c(3800),d=c(6814);function a(e,n){if(1&e&&(t.TgZ(0,"ion-row")(1,"ion-row")(2,"strong"),t._uU(3,"Author: "),t.qZA(),t._uU(4),t.qZA(),t.TgZ(5,"ion-row")(6,"strong"),t._uU(7,"Comment: "),t.qZA(),t._uU(8),t.qZA(),t.TgZ(9,"ion-row"),t._uU(10,"\xa0"),t.qZA()()),2&e){const g=n.$implicit;t.xp6(4),t.hij(" ",g.commentingUser,""),t.xp6(4),t.hij(" ",g.comment,"")}}function s(e,n){if(1&e&&(t.TgZ(0,"tr")(1,"td"),t._uU(2,"Comments"),t.qZA(),t.TgZ(3,"td"),t.YNc(4,a,11,2,"ion-row",6),t.qZA()()),2&e){const g=t.oxw();t.xp6(4),t.Q6J("ngForOf",g.value.comments)}}let i=(()=>{class e{constructor(g){this.modalCtrl=g}ngOnInit(){console.log("Received:",this.value)}cancel(){this.modalCtrl.dismiss()}confirm(){this.modalCtrl.dismiss()}static#t=this.\u0275fac=function(u){return new(u||e)(t.Y36(r.IN))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-modal-details"]],inputs:{value:"value",type:"type"},decls:50,vars:9,consts:[["color","warning"],["slot","end"],[3,"strong","click"],[1,"ion-padding"],["color","medium"],[4,"ngIf"],[4,"ngFor","ngForOf"]],template:function(u,o){1&u&&(t.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-title"),t._uU(3,"L3 - Details"),t.qZA(),t.TgZ(4,"ion-buttons",1)(5,"ion-button",2),t.NdJ("click",function(){return o.confirm()}),t._uU(6,"Close"),t.qZA()()()(),t.TgZ(7,"ion-content",3)(8,"ion-card")(9,"ion-card-header",4)(10,"ion-card-title"),t._uU(11),t.qZA(),t.TgZ(12,"ion-card-subtitle"),t._uU(13),t.qZA()(),t.TgZ(14,"ion-row"),t._uU(15,"\xa0"),t.qZA(),t.TgZ(16,"ion-card-content")(17,"strong"),t._uU(18,"Description:"),t.qZA(),t._uU(19),t.TgZ(20,"ion-row"),t._uU(21,"\xa0"),t.qZA(),t.TgZ(22,"table")(23,"tr")(24,"th"),t._uU(25,"Attribute"),t.qZA(),t.TgZ(26,"th"),t._uU(27,"Value"),t.qZA()(),t.TgZ(28,"tr")(29,"td"),t._uU(30,"CreatedBy"),t.qZA(),t.TgZ(31,"td"),t._uU(32),t.qZA()(),t.TgZ(33,"tr")(34,"td"),t._uU(35,"ModifiedBy"),t.qZA(),t.TgZ(36,"td"),t._uU(37),t.qZA()(),t.TgZ(38,"tr")(39,"td"),t._uU(40,"ModifiedTimestamp"),t.qZA(),t.TgZ(41,"td"),t._uU(42),t.qZA()(),t.TgZ(43,"tr")(44,"td"),t._uU(45,"Status"),t.qZA(),t.TgZ(46,"td"),t._uU(47),t.qZA()(),t.YNc(48,s,5,1,"tr",5),t.qZA()()(),t._UZ(49,"ion-card"),t.qZA()),2&u&&(t.xp6(5),t.Q6J("strong",!0),t.xp6(6),t.Oqu(o.value.name),t.xp6(2),t.hij("Type: ",o.value.type,""),t.xp6(6),t.hij(" ",o.value.description," "),t.xp6(13),t.Oqu(o.value.createdBy),t.xp6(5),t.Oqu(o.value.modifiedBy),t.xp6(5),t.Oqu(o.value.modifiedTimestamp),t.xp6(5),t.Oqu(o.value.status),t.xp6(1),t.Q6J("ngIf",o.value.comments&&o.value.comments.length>0))},dependencies:[d.sg,d.O5,r.YG,r.Sm,r.PM,r.FN,r.Zi,r.tO,r.Dq,r.W2,r.Gu,r.Nd,r.wd,r.sr],styles:["table[_ngcontent-%COMP%]{font-family:arial,sans-serif;border-collapse:collapse;width:100%}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #dddddd;text-align:left;padding:8px}tr[_ngcontent-%COMP%]:nth-child(2n){background-color:#ddd}"]})}return e})()}}]);