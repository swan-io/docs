"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[53378],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},27695:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>k,frontMatter:()=>o,metadata:()=>d,toc:()=>m});var n=a(87462),r=a(67294),l=a(3905);const o={id:"complete-digital-card-status",title:"CompleteDigitalCardStatus",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/enums/complete-digital-card-status",id:"api-reference/enums/complete-digital-card-status",title:"CompleteDigitalCardStatus",description:"Complete Digital Card Status",source:"@site/docs/api-reference/enums/complete-digital-card-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/complete-digital-card-status",permalink:"/api-reference/enums/complete-digital-card-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/complete-digital-card-status.mdx",tags:[],version:"current",frontMatter:{id:"complete-digital-card-status",title:"CompleteDigitalCardStatus",hide_table_of_contents:!1}},c={},s=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CompleteDigitalCardStatus.<b>Enabled</b></code>",id:"code-style-fontweight-normal-completedigitalcardstatusbenabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompleteDigitalCardStatus.<b>Suspended</b></code>",id:"code-style-fontweight-normal-completedigitalcardstatusbsuspendedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompleteDigitalCardStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-completedigitalcardstatusbcanceledbcode",level:4},{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:i=!1}=e;const[d,c]=(0,r.useState)(i);return(0,l.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&o)},g={Bullet:s,SpecifiedBy:p,Badge:u,toc:m,Details:f},b="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(b,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Complete Digital Card Status"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CompleteDigitalCardStatus {\n  Enabled\n  Suspended\n  Canceled\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardstatusbenabledbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCardStatus.",(0,l.kt)("b",null,"Enabled")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"when the digital card is enabled")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardstatusbsuspendedbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCardStatus.",(0,l.kt)("b",null,"Suspended")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"when the digital card is suspended"),(0,l.kt)("p",{parentName:"blockquote"},"the transactions will be blocked")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-completedigitalcardstatusbcanceledbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CompleteDigitalCardStatus.",(0,l.kt)("b",null,"Canceled")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"when the digital card is canceled"),(0,l.kt)("p",{parentName:"blockquote"},"this is a final state")),(0,l.kt)("h3",{id:"member-of"},"Member Of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/interfaces/complete-digital-card-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"CompleteDigitalCardStatusInfo")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/digital-card-canceled-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"DigitalCardCanceledStatusInfo")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/digital-card-enabled-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"DigitalCardEnabledStatusInfo")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/digital-card-suspended-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"DigitalCardSuspendedStatusInfo")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);