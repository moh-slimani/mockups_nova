import{d as b,I as L,j as h,E as k,p as N,q as I,h as x,J as P,G as C,F as f,o as m,e as _,a as l,t as w,c as R,w as S,f as q,b as U,n as E,g as z,L as A}from"./app.9b2638ad.js";import{t as $,P as j,c as J,f as Y,V as Q,a as W,w as X,b as V}from"./hidden.64be6c1d.js";import{P as Z,S as Ce}from"./description.3389a893.js";import{d as ee,p as te}from"./use-controllable.648c1dd4.js";let D=Symbol("LabelContext");function O(){let e=P(D,null);if(e===null){let a=new Error("You used a <Label /> component, but it is not inside a parent.");throw Error.captureStackTrace&&Error.captureStackTrace(a,O),a}return e}function le({slot:e={},name:a="Label",props:n={}}={}){let t=b([]);function r(s){return t.value.push(s),()=>{let d=t.value.indexOf(s);d!==-1&&t.value.splice(d,1)}}return L(D,{register:r,slot:e,name:a,props:n}),h(()=>t.value.length>0?t.value.join(" "):void 0)}let Ee=k({name:"Label",props:{as:{type:[Object,String],default:"label"},passive:{type:[Boolean],default:!1}},setup(e,{slots:a,attrs:n}){let t=O(),r=`headlessui-label-${$()}`;return N(()=>I(t.register(r))),()=>{let{name:s="Label",slot:d={},props:i={}}=t,{passive:v,...c}=e,p={...Object.entries(i).reduce((u,[g,y])=>Object.assign(u,{[g]:x(y)}),{}),id:r};return v&&(delete p.onClick,delete c.onClick),j({ourProps:p,theirProps:c,slot:d,attrs:n,slots:a,name:s})}}}),T=Symbol("GroupContext");k({name:"SwitchGroup",props:{as:{type:[Object,String],default:"template"}},setup(e,{slots:a,attrs:n}){let t=b(null),r=le({name:"SwitchLabel",props:{onClick(){!t.value||(t.value.click(),t.value.focus({preventScroll:!0}))}}}),s=Z({name:"SwitchDescription"});return L(T,{switchRef:t,labelledby:r,describedby:s}),()=>j({theirProps:e,ourProps:{},slot:{},slots:a,attrs:n,name:"SwitchGroup"})}});let ae=k({name:"Switch",emits:{"update:modelValue":e=>!0},props:{as:{type:[Object,String],default:"button"},modelValue:{type:Boolean,default:void 0},defaultChecked:{type:Boolean,default:!1},name:{type:String,optional:!0},value:{type:String,optional:!0}},inheritAttrs:!1,setup(e,{emit:a,attrs:n,slots:t,expose:r}){let s=P(T,null),d=`headlessui-switch-${$()}`,[i,v]=ee(h(()=>e.modelValue),o=>a("update:modelValue",o),h(()=>e.defaultChecked));function c(){v(!i.value)}let p=b(null),u=s===null?p:s.switchRef,g=J(h(()=>({as:e.as,type:n.type})),u);r({el:u,$el:u});function y(o){o.preventDefault(),c()}function B(o){o.key===V.Space?(o.preventDefault(),c()):o.key===V.Enter&&te(o.currentTarget)}function F(o){o.preventDefault()}return()=>{let{name:o,value:M,...H}=e,G={checked:i.value},K={id:d,ref:u,role:"switch",type:g.value,tabIndex:0,"aria-checked":i.value,"aria-labelledby":s==null?void 0:s.labelledby.value,"aria-describedby":s==null?void 0:s.describedby.value,onClick:y,onKeyup:B,onKeypress:F};return C(f,[o!=null&&i.value!=null?C(Y,Q({features:W.Hidden,as:"input",type:"checkbox",hidden:!0,readOnly:!0,checked:i.value,name:o,value:M})):null,j({ourProps:K,theirProps:{...n,...X(H,["modelValue","defaultChecked"])},slot:G,attrs:n,slots:t,name:"Switch"})])}}});const se={class:"flex flex-row bg-[#DFE1E5] rounded-lg p-4 items-center space-x-2 shadow-md"},oe=["src"],ne={class:""},re=l("div",{class:"grow"},null,-1),ie={class:"space-x-2"},de=l("span",null,"Minimal",-1),ue=l("span",{class:"sr-only"},"Enable notifications",-1),ce=["innerHTML"],pe={class:"bg-[#DFE1E5] rounded-lg p-4 shadow-md"},me=l("h3",{class:"font-bold mb-4"},"Code",-1),he={class:"overflow-x-auto bg-gray-800 rounded-lg text-white p-4"},fe=["textContent"],be=["innerHTML"],ve={class:"bg-[#DFE1E5] rounded-lg p-4 shadow-md"},ge=l("h3",{class:"font-bold mb-4"},"Code",-1),ye={class:"overflow-x-auto bg-gray-800 rounded-lg text-white p-4"},_e=["textContent"],we={name:"ProjectItem",props:{project:{}}},Ve=Object.assign(we,{setup(e){const a=b(!1);return(n,t)=>(m(),_(f,null,[l("div",se,[l("img",{src:e.project.favicon,alt:"",class:"h-[18px] w-[18px]"},null,8,oe),l("h3",ne,w(e.project.name),1),n.$page.props.user?(m(),R(x(A),{key:0,href:n.route("projects.show",{project:e.project.id,_query:{minimal:a.value}}),target:"_blank",class:"text-sm text-gray-700 dark:text-gray-500 underline"},{default:S(()=>[z(" view in Full screen ")]),_:1},8,["href"])):q("",!0),re,l("div",ie,[de,U(x(ae),{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=r=>a.value=r),class:E([a.value?"bg-blue-600":"bg-gray-400","relative inline-flex h-6 w-11 items-center rounded-full"])},{default:S(()=>[ue,l("span",{class:E([a.value?"translate-x-6":"translate-x-1","inline-block h-4 w-4 transform rounded-full bg-white transition"])},null,2)]),_:1},8,["modelValue","class"])])]),a.value?(m(),_(f,{key:0},[l("div",{innerHTML:e.project.embedded_code_minimal},null,8,ce),l("div",pe,[me,l("div",he,[l("code",{class:"prose-invert whitespace-pre max-w-full",textContent:w(e.project.embedded_code_minimal)},null,8,fe)])])],64)):(m(),_(f,{key:1},[l("div",{innerHTML:e.project.embedded_code},null,8,be),l("div",ve,[ge,l("div",ye,[l("code",{class:"prose-invert whitespace-pre max-w-full",textContent:w(e.project.embedded_code)},null,8,_e)])])],64))],64))}});export{Ve as default};