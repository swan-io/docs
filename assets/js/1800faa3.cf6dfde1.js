"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[88135],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||c;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6482:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=r(87462),a=r(67294),c=r(3905);const o={id:"currency",title:"Currency",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/scalars/currency",id:"api-reference/scalars/currency",title:"Currency",description:"currency code alpha 3 (ISO 4217)",source:"@site/docs/api-reference/scalars/currency.mdx",sourceDirName:"api-reference/scalars",slug:"/api-reference/scalars/currency",permalink:"/api-reference/scalars/currency",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/scalars/currency.mdx",tags:[],version:"current",frontMatter:{id:"currency",title:"Currency",hide_table_of_contents:!1}},p={},s=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),m=[{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:r,children:o,startOpen:l=!1}=e;const[i,p]=(0,a.useState)(l);return(0,c.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&o)},y={Bullet:s,SpecifiedBy:d,Badge:u,toc:m,Details:f},b="wrapper";function g(e){let{components:t,...r}=e;return(0,c.kt)(b,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"currency code alpha 3 (ISO 4217)"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Currency\n")),(0,c.kt)("h3",{id:"member-of"},"Member Of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account"},(0,c.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-external-account-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AddExternalAccountInput")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/amount"},(0,c.kt)("inlineCode",{parentName:"a"},"Amount")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/amount-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AmountInput")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/card"},(0,c.kt)("inlineCode",{parentName:"a"},"Card")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/external-account"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalAccount")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/international-beneficiary-input"},(0,c.kt)("inlineCode",{parentName:"a"},"InternationalBeneficiaryInput")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/international-credit-transfer-out-creditor"},(0,c.kt)("inlineCode",{parentName:"a"},"InternationalCreditTransferOutCreditor")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/report-exchange-rate"},(0,c.kt)("inlineCode",{parentName:"a"},"ReportExchangeRate")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);