import{E as V,d as w,j as O,G as J,F as oe,p as M,q as ce,l as ve,D as se,J as pe,P as k,I as fe,C as T,Q as be,R as me,S as he,o as j,e as E,v as xe,x as ge,a as f,n as P,b as z,w as D,h as $,c as Y,t as q,f as G,T as we,i as ye}from"./app.90854336.js";import{u as C,o as y,f as Oe,V as _e,a as Se,P as A,w as ie,t as U,c as ke,R as X,b as g}from"./hidden.bd34e132.js";import{x as Le,a as _,y as Ie,h as Pe,F as Re,c as je,p as Te,O as Ee,l as H}from"./use-outside-click.4a92ef88.js";import{d as Ce,e as Ve}from"./use-controllable.3807efa6.js";function Be(t,l){return t===l}var $e=(t=>(t[t.Open=0]="Open",t[t.Closed=1]="Closed",t))($e||{}),De=(t=>(t[t.Single=0]="Single",t[t.Multi=1]="Multi",t))(De||{}),Ne=(t=>(t[t.Pointer=0]="Pointer",t[t.Other=1]="Other",t))(Ne||{});function Me(t){requestAnimationFrame(()=>requestAnimationFrame(t))}let re=Symbol("ListboxContext");function Q(t){let l=pe(re,null);if(l===null){let a=new Error(`<${t} /> is missing a parent <Listbox /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(a,Q),a}return l}let Ae=V({name:"Listbox",emits:{"update:modelValue":t=>!0},props:{as:{type:[Object,String],default:"template"},disabled:{type:[Boolean],default:!1},by:{type:[String,Function],default:()=>Be},horizontal:{type:[Boolean],default:!1},modelValue:{type:[Object,String,Number,Boolean],default:void 0},defaultValue:{type:[Object,String,Number,Boolean],default:void 0},name:{type:String,optional:!0},multiple:{type:[Boolean],default:!1}},inheritAttrs:!1,setup(t,{slots:l,attrs:a,emit:v}){let e=w(1),i=w(null),d=w(null),o=w(null),s=w([]),c=w(""),n=w(null),r=w(1);function L(u=p=>p){let p=n.value!==null?s.value[n.value]:null,b=Ee(u(s.value.slice()),S=>y(S.dataRef.domRef)),h=p?b.indexOf(p):null;return h===-1&&(h=null),{options:b,activeOptionIndex:h}}let I=O(()=>t.multiple?1:0),[R,m]=Ce(O(()=>t.modelValue),u=>v("update:modelValue",u),O(()=>t.defaultValue)),x={listboxState:e,value:R,mode:I,compare(u,p){if(typeof t.by=="string"){let b=t.by;return(u==null?void 0:u[b])===(p==null?void 0:p[b])}return t.by(u,p)},orientation:O(()=>t.horizontal?"horizontal":"vertical"),labelRef:i,buttonRef:d,optionsRef:o,disabled:O(()=>t.disabled),options:s,searchQuery:c,activeOptionIndex:n,activationTrigger:r,closeListbox(){t.disabled||e.value!==1&&(e.value=1,n.value=null)},openListbox(){t.disabled||e.value!==0&&(e.value=0)},goToOption(u,p,b){if(t.disabled||e.value===1)return;let h=L(),S=Le(u===_.Specific?{focus:_.Specific,id:p}:{focus:u},{resolveItems:()=>h.options,resolveActiveIndex:()=>h.activeOptionIndex,resolveId:B=>B.id,resolveDisabled:B=>B.dataRef.disabled});c.value="",n.value=S,r.value=b!=null?b:1,s.value=h.options},search(u){if(t.disabled||e.value===1)return;let p=c.value!==""?0:1;c.value+=u.toLowerCase();let b=(n.value!==null?s.value.slice(n.value+p).concat(s.value.slice(0,n.value+p)):s.value).find(S=>S.dataRef.textValue.startsWith(c.value)&&!S.dataRef.disabled),h=b?s.value.indexOf(b):-1;h===-1||h===n.value||(n.value=h,r.value=1)},clearSearch(){t.disabled||e.value!==1&&c.value!==""&&(c.value="")},registerOption(u,p){let b=L(h=>[...h,{id:u,dataRef:p}]);s.value=b.options,n.value=b.activeOptionIndex},unregisterOption(u){let p=L(b=>{let h=b.findIndex(S=>S.id===u);return h!==-1&&b.splice(h,1),b});s.value=p.options,n.value=p.activeOptionIndex,r.value=1},select(u){t.disabled||m(C(I.value,{[0]:()=>u,[1]:()=>{let p=k(x.value.value).slice(),b=k(u),h=p.findIndex(S=>x.compare(b,k(S)));return h===-1?p.push(b):p.splice(h,1),p}}))}};return Ie([d,o],(u,p)=>{var b;x.closeListbox(),Pe(p,Re.Loose)||(u.preventDefault(),(b=y(d))==null||b.focus())},O(()=>e.value===0)),fe(re,x),je(O(()=>C(e.value,{[0]:H.Open,[1]:H.Closed}))),()=>{let{name:u,modelValue:p,disabled:b,...h}=t,S={open:e.value===0,disabled:b,value:R.value};return J(oe,[...u!=null&&R.value!=null?Ve({[u]:R.value}).map(([B,de])=>J(Oe,_e({features:Se.Hidden,key:B,as:"input",type:"hidden",hidden:!0,readOnly:!0,name:B,value:de}))):[],A({ourProps:{},theirProps:{...a,...ie(h,["defaultValue","onUpdate:modelValue","horizontal","multiple","by"])},slot:S,slots:l,attrs:a,name:"Listbox"})])}}});V({name:"ListboxLabel",props:{as:{type:[Object,String],default:"label"}},setup(t,{attrs:l,slots:a}){let v=Q("ListboxLabel"),e=`headlessui-listbox-label-${U()}`;function i(){var d;(d=y(v.buttonRef))==null||d.focus({preventScroll:!0})}return()=>{let d={open:v.listboxState.value===0,disabled:v.disabled.value},o={id:e,ref:v.labelRef,onClick:i};return A({ourProps:o,theirProps:t,slot:d,attrs:l,slots:a,name:"ListboxLabel"})}}});let Qe=V({name:"ListboxButton",props:{as:{type:[Object,String],default:"button"}},setup(t,{attrs:l,slots:a,expose:v}){let e=Q("ListboxButton"),i=`headlessui-listbox-button-${U()}`;v({el:e.buttonRef,$el:e.buttonRef});function d(n){switch(n.key){case g.Space:case g.Enter:case g.ArrowDown:n.preventDefault(),e.openListbox(),T(()=>{var r;(r=y(e.optionsRef))==null||r.focus({preventScroll:!0}),e.value.value||e.goToOption(_.First)});break;case g.ArrowUp:n.preventDefault(),e.openListbox(),T(()=>{var r;(r=y(e.optionsRef))==null||r.focus({preventScroll:!0}),e.value.value||e.goToOption(_.Last)});break}}function o(n){switch(n.key){case g.Space:n.preventDefault();break}}function s(n){e.disabled.value||(e.listboxState.value===0?(e.closeListbox(),T(()=>{var r;return(r=y(e.buttonRef))==null?void 0:r.focus({preventScroll:!0})})):(n.preventDefault(),e.openListbox(),Me(()=>{var r;return(r=y(e.optionsRef))==null?void 0:r.focus({preventScroll:!0})})))}let c=ke(O(()=>({as:t.as,type:l.type})),e.buttonRef);return()=>{var n,r;let L={open:e.listboxState.value===0,disabled:e.disabled.value,value:e.value.value},I={ref:e.buttonRef,id:i,type:c.value,"aria-haspopup":!0,"aria-controls":(n=y(e.optionsRef))==null?void 0:n.id,"aria-expanded":e.disabled.value?void 0:e.listboxState.value===0,"aria-labelledby":e.labelRef.value?[(r=y(e.labelRef))==null?void 0:r.id,i].join(" "):void 0,disabled:e.disabled.value===!0?!0:void 0,onKeydown:d,onKeyup:o,onClick:s};return A({ourProps:I,theirProps:t,slot:L,attrs:l,slots:a,name:"ListboxButton"})}}}),Fe=V({name:"ListboxOptions",props:{as:{type:[Object,String],default:"ul"},static:{type:Boolean,default:!1},unmount:{type:Boolean,default:!0}},setup(t,{attrs:l,slots:a,expose:v}){let e=Q("ListboxOptions"),i=`headlessui-listbox-options-${U()}`,d=w(null);v({el:e.optionsRef,$el:e.optionsRef});function o(n){switch(d.value&&clearTimeout(d.value),n.key){case g.Space:if(e.searchQuery.value!=="")return n.preventDefault(),n.stopPropagation(),e.search(n.key);case g.Enter:if(n.preventDefault(),n.stopPropagation(),e.activeOptionIndex.value!==null){let r=e.options.value[e.activeOptionIndex.value];e.select(r.dataRef.value)}e.mode.value===0&&(e.closeListbox(),T(()=>{var r;return(r=y(e.buttonRef))==null?void 0:r.focus({preventScroll:!0})}));break;case C(e.orientation.value,{vertical:g.ArrowDown,horizontal:g.ArrowRight}):return n.preventDefault(),n.stopPropagation(),e.goToOption(_.Next);case C(e.orientation.value,{vertical:g.ArrowUp,horizontal:g.ArrowLeft}):return n.preventDefault(),n.stopPropagation(),e.goToOption(_.Previous);case g.Home:case g.PageUp:return n.preventDefault(),n.stopPropagation(),e.goToOption(_.First);case g.End:case g.PageDown:return n.preventDefault(),n.stopPropagation(),e.goToOption(_.Last);case g.Escape:n.preventDefault(),n.stopPropagation(),e.closeListbox(),T(()=>{var r;return(r=y(e.buttonRef))==null?void 0:r.focus({preventScroll:!0})});break;case g.Tab:n.preventDefault(),n.stopPropagation();break;default:n.key.length===1&&(e.search(n.key),d.value=setTimeout(()=>e.clearSearch(),350));break}}let s=Te(),c=O(()=>s!==null?s.value===H.Open:e.listboxState.value===0);return()=>{var n,r,L,I;let R={open:e.listboxState.value===0},m={"aria-activedescendant":e.activeOptionIndex.value===null||(n=e.options.value[e.activeOptionIndex.value])==null?void 0:n.id,"aria-multiselectable":e.mode.value===1?!0:void 0,"aria-labelledby":(I=(r=y(e.labelRef))==null?void 0:r.id)!=null?I:(L=y(e.buttonRef))==null?void 0:L.id,"aria-orientation":e.orientation.value,id:i,onKeydown:o,role:"listbox",tabIndex:0,ref:e.optionsRef};return A({ourProps:m,theirProps:t,slot:R,attrs:l,slots:a,features:X.RenderStrategy|X.Static,visible:c.value,name:"ListboxOptions"})}}}),ze=V({name:"ListboxOption",props:{as:{type:[Object,String],default:"li"},value:{type:[Object,String,Number,Boolean]},disabled:{type:Boolean,default:!1}},setup(t,{slots:l,attrs:a,expose:v}){let e=Q("ListboxOption"),i=`headlessui-listbox-option-${U()}`,d=w(null);v({el:d,$el:d});let o=O(()=>e.activeOptionIndex.value!==null?e.options.value[e.activeOptionIndex.value].id===i:!1),s=O(()=>C(e.mode.value,{[0]:()=>e.compare(k(e.value.value),k(t.value)),[1]:()=>k(e.value.value).some(m=>e.compare(k(m),k(t.value)))})),c=O(()=>C(e.mode.value,{[1]:()=>{var m;let x=k(e.value.value);return((m=e.options.value.find(u=>x.some(p=>e.compare(k(p),k(u.dataRef.value)))))==null?void 0:m.id)===i},[0]:()=>s.value})),n=O(()=>({disabled:t.disabled,value:t.value,textValue:"",domRef:d}));M(()=>{var m,x;let u=(x=(m=y(d))==null?void 0:m.textContent)==null?void 0:x.toLowerCase().trim();u!==void 0&&(n.value.textValue=u)}),M(()=>e.registerOption(i,n)),ce(()=>e.unregisterOption(i)),M(()=>{ve([e.listboxState,s],()=>{e.listboxState.value===0&&(!s.value||C(e.mode.value,{[1]:()=>{c.value&&e.goToOption(_.Specific,i)},[0]:()=>{e.goToOption(_.Specific,i)}}))},{immediate:!0})}),se(()=>{e.listboxState.value===0&&(!o.value||e.activationTrigger.value!==0&&T(()=>{var m,x;return(x=(m=y(d))==null?void 0:m.scrollIntoView)==null?void 0:x.call(m,{block:"nearest"})}))});function r(m){if(t.disabled)return m.preventDefault();e.select(t.value),e.mode.value===0&&(e.closeListbox(),T(()=>{var x;return(x=y(e.buttonRef))==null?void 0:x.focus({preventScroll:!0})}))}function L(){if(t.disabled)return e.goToOption(_.Nothing);e.goToOption(_.Specific,i)}function I(){t.disabled||o.value||e.goToOption(_.Specific,i,0)}function R(){t.disabled||!o.value||e.goToOption(_.Nothing)}return()=>{let{disabled:m}=t,x={active:o.value,selected:s.value,disabled:m},u={id:i,ref:d,role:"option",tabIndex:m===!0?void 0:-1,"aria-disabled":m===!0?!0:void 0,"aria-selected":s.value,disabled:void 0,onClick:r,onFocus:L,onPointermove:I,onMousemove:I,onPointerleave:R,onMouseleave:R};return A({ourProps:u,theirProps:ie(t,["value","disabled"]),slot:x,attrs:a,slots:l,name:"ListboxOption"})}}});var Z;const F=typeof window<"u";F&&((Z=window==null?void 0:window.navigator)==null?void 0:Z.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Ue(t){return t}function qe(t,l){var a;if(typeof t=="number")return t+l;const v=((a=t.match(/^-?[0-9]+\.?[0-9]*/))==null?void 0:a[0])||"",e=t.slice(v.length),i=parseFloat(v)+l;return Number.isNaN(i)?t:i+e}function Ge(t){return be()?(me(t),!0):!1}function He(t){return typeof t=="function"?O(t):w(t)}function We(t,l=!0){he()?M(t):l?t():T(t)}const ue=F?window:void 0;F&&window.document;F&&window.navigator;F&&window.location;function Ke(t,l=!1){const a=w(),v=()=>a.value=Boolean(t());return v(),We(v,l),a}function N(t,l={}){const{window:a=ue}=l,v=Ke(()=>a&&"matchMedia"in a&&typeof a.matchMedia=="function");let e;const i=w(!1),d=()=>{!e||("removeEventListener"in e?e.removeEventListener("change",o):e.removeListener(o))},o=()=>{!v.value||(d(),e=a.matchMedia(He(t).value),i.value=e.matches,"addEventListener"in e?e.addEventListener("change",o):e.addListener(o))};return se(o),Ge(()=>d()),i}const Je={sm:640,md:768,lg:1024,xl:1280,"2xl":1536};var Ye=Object.defineProperty,ee=Object.getOwnPropertySymbols,Xe=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,te=(t,l,a)=>l in t?Ye(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,et=(t,l)=>{for(var a in l||(l={}))Xe.call(l,a)&&te(t,a,l[a]);if(ee)for(var a of ee(l))Ze.call(l,a)&&te(t,a,l[a]);return t};function tt(t,l={}){function a(o,s){let c=t[o];return s!=null&&(c=qe(c,s)),typeof c=="number"&&(c=`${c}px`),c}const{window:v=ue}=l;function e(o){return v?v.matchMedia(o).matches:!1}const i=o=>N(`(min-width: ${a(o)})`,l),d=Object.keys(t).reduce((o,s)=>(Object.defineProperty(o,s,{get:()=>i(s),enumerable:!0,configurable:!0}),o),{});return et({greater(o){return N(`(min-width: ${a(o,.1)})`,l)},greaterOrEqual:i,smaller(o){return N(`(max-width: ${a(o,-.1)})`,l)},smallerOrEqual(o){return N(`(max-width: ${a(o)})`,l)},between(o,s){return N(`(min-width: ${a(o)}) and (max-width: ${a(s,-.1)})`,l)},isGreater(o){return e(`(min-width: ${a(o,.1)})`)},isGreaterOrEqual(o){return e(`(min-width: ${a(o)})`)},isSmaller(o){return e(`(max-width: ${a(o,-.1)})`)},isSmallerOrEqual(o){return e(`(max-width: ${a(o)})`)},isInBetween(o,s){return e(`(min-width: ${a(o)}) and (max-width: ${a(s,-.1)})`)}},d)}const W=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K="__vueuse_ssr_handlers__";W[K]=W[K]||{};W[K];var ae;(function(t){t.UP="UP",t.RIGHT="RIGHT",t.DOWN="DOWN",t.LEFT="LEFT",t.NONE="NONE"})(ae||(ae={}));var at=Object.defineProperty,le=Object.getOwnPropertySymbols,lt=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable,ne=(t,l,a)=>l in t?at(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a,ot=(t,l)=>{for(var a in l||(l={}))lt.call(l,a)&&ne(t,a,l[a]);if(le)for(var a of le(l))nt.call(l,a)&&ne(t,a,l[a]);return t};const st={easeInSine:[.12,0,.39,0],easeOutSine:[.61,1,.88,1],easeInOutSine:[.37,0,.63,1],easeInQuad:[.11,0,.5,0],easeOutQuad:[.5,1,.89,1],easeInOutQuad:[.45,0,.55,1],easeInCubic:[.32,0,.67,0],easeOutCubic:[.33,1,.68,1],easeInOutCubic:[.65,0,.35,1],easeInQuart:[.5,0,.75,0],easeOutQuart:[.25,1,.5,1],easeInOutQuart:[.76,0,.24,1],easeInQuint:[.64,0,.78,0],easeOutQuint:[.22,1,.36,1],easeInOutQuint:[.83,0,.17,1],easeInExpo:[.7,0,.84,0],easeOutExpo:[.16,1,.3,1],easeInOutExpo:[.87,0,.13,1],easeInCirc:[.55,0,1,.45],easeOutCirc:[0,.55,.45,1],easeInOutCirc:[.85,0,.15,1],easeInBack:[.36,0,.66,-.56],easeOutBack:[.34,1.56,.64,1],easeInOutBack:[.68,-.6,.32,1.6]};ot({linear:Ue},st);const it={class:"overflow-y-scroll rounded-b-xl h-[calc(100vh-60px)] relative"},rt={class:"absolute inset-0 flex items-center rounded-b-xl justify-center bg-gray-200"},ut={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",class:"animate-spin",style:{margin:"auto",background:"none",display:"block","shape-rendering":"auto"},width:"50px",height:"50px",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid"},dt=f("circle",{cx:"50",cy:"50",r:"32","stroke-width":"8",stroke:"#1d0e0b","stroke-dasharray":"50.26548245743669 50.26548245743669",fill:"none","stroke-linecap":"round"},null,-1),ct=[dt],vt=["src"],pt={name:"ScreenShot"},ft=V({...pt,props:{img:null},setup(t){const l=w(!1),a=()=>{l.value=!0,console.log("image loaded")};return(v,e)=>(j(),E("div",it,[xe(f("div",rt,[(j(),E("svg",ut,ct))],512),[[ge,!l.value]]),f("img",{class:"w-full rounded-b-xl",onLoad:a,src:t.img,alt:""},null,40,vt)]))}}),bt={class:"absolute top-0 inset-x-0 bg-white z-10 shadow-md"},mt=f("div",{class:"w-3 h-3 bg-red-400 rounded-full"},null,-1),ht=f("div",{class:"w-3 h-3 bg-amber-300 rounded-full"},null,-1),xt=f("div",{class:"w-3 h-3 bg-green-400 rounded-full"},null,-1),gt=[mt,ht,xt],wt={class:"w-full relative"},yt=["src"],Ot={class:"truncate"},_t={key:0,class:"absolute inset-y-1 right-1 w-7 rounded-md bg-gray-300 animate-ping"},St={key:1,class:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"},kt=f("i",{class:"ri-arrow-down-s-line align-middle text-xl","aria-hidden":"true"},null,-1),Lt=[kt],It=["src"],Pt=f("i",{class:"ri-checkbox-circle-line align-middle text-xl","aria-hidden":"true"},null,-1),Rt=[Pt],jt={class:"text-gray-500 text-xl hidden md:flex flex-row space-x-2 items-center"},Tt=["href"],Et=f("i",{class:"ri-external-link-line"},null,-1),Ct=[Et],Vt=f("i",{class:"ri-computer-line"},null,-1),Bt=[Vt],$t=["disabled"],Dt=f("i",{class:"ri-smartphone-line"},null,-1),Nt=[Dt],Mt={class:"pt-[60px]"},At={name:"Browser"},qt=V({...At,props:{project:Object},setup(t){const l=t;console.log(JSON.parse(JSON.stringify(l.project)));const a=tt(Je),v=w(!0),e=w(l.project.tabs[0]),i=w(a.smallerOrEqual("sm"));M(()=>{setTimeout(()=>{v.value=!1},1e4)});const d=O(()=>e.value.mobile_screen&&i.value?e.value.mobile_screen:e.value.screen);return(o,s)=>(j(),E("div",{class:P(["relative rounded-xl mx-auto",{"max-w-md":i.value}])},[f("div",bt,[f("div",{class:P([{"md:px-6 ":!i.value},"flex p-3 flex-row rounded-t-xl justify-between"])},[f("div",{class:P([{"md:flex":!i.value},"hidden flex-row space-x-2 items-center"])},gt,2),z($(Ae),{as:"div",disabled:!t.project.tabs.length,class:P([[i.value?"grow mr-2":"w-full md:w-1/3"],""]),modelValue:e.value,"onUpdate:modelValue":s[1]||(s[1]=c=>e.value=c)},{default:D(()=>[f("div",wt,[z($(Qe),{class:"bg-black bg-opacity-5 text-gray-600 text-center relative w-full rounded-md shadow-sm pl-3 pr-10 py-2 cursor-pointer focus:outline-none focus:ring-0 sm:text-sm",onClick:s[0]||(s[0]=c=>v.value=!1)},{default:D(()=>[f("div",{class:P(["flex flex-row items-center space-x-2",[i.value?"justify-start":"justify-center"]])},[f("img",{src:t.project.favicon,alt:"",class:"flex-shrink-0 h-4 w-4 rounded-full"},null,8,yt),f("span",Ot,q(t.project.name)+" - "+q(e.value.title),1)],2),v.value&&t.project.tabs.length>1?(j(),E("span",_t)):G("",!0),t.project.tabs.length?(j(),E("span",St,Lt)):G("",!0)]),_:1}),z(we,{"leave-active-class":"transition ease-in duration-100","leave-from-class":"opacity-100","leave-to-class":"opacity-0"},{default:D(()=>[z($(Fe),{class:"absolute z-10 mt-1 w-full bg-gray-100 shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"},{default:D(()=>[(j(!0),E(oe,null,ye(t.project.tabs,c=>(j(),Y($(ze),{as:"template",key:c.id,value:c},{default:D(({active:n,selected:r})=>[f("li",{class:P([n?"text-white bg-indigo-600":"text-gray-900","cursor-default rounded-md select-none relative py-2 pl-3 pr-9"])},[f("div",{class:P(["flex flex-row space-x-2",[r?"font-semibold":"font-normal","block truncate"]])},[f("img",{src:t.project.favicon,alt:"",class:"flex-shrink-0 h-4 w-4 rounded-full"},null,8,It),f("span",null,q(c.title),1)],2),r?(j(),E("span",{key:0,class:P([n?"text-white":"text-indigo-600","absolute inset-y-0 right-0 flex items-center pr-4"])},Rt,2)):G("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["disabled","class","modelValue"]),f("div",jt,[f("a",{class:"p-1 h-9 w-9 active:text-gray-900 hover:bg-gray-200 rounded-md flex items-center justify-center",href:e.value.url,target:"_blank"},Ct,8,Tt),f("button",{onClick:s[2]||(s[2]=c=>i.value=!1),class:P([{"bg-gray-200":!i.value},"p-1 h-9 w-9 active:text-gray-900 hover:bg-gray-200 rounded-md flex items-center justify-center"])},Bt,2),f("button",{disabled:!e.value.mobile_screen,onClick:s[3]||(s[3]=c=>i.value=!0),class:P([{"bg-gray-200":i.value},"p-1 h-9 w-9 active:text-gray-900 hover:bg-gray-300 rounded-md flex items-center justify-center disabled:text-gray-300 disabled:hover:bg-opacity-0"])},Nt,10,$t)])],2)]),f("div",Mt,[(j(),Y(ft,{key:$(d),img:$(d)},null,8,["img"]))])],2))}});export{qt as default};
