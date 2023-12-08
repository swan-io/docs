"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36840],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=a.createContext({}),s=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=s(n),u=i,f=g["".concat(o,".").concat(u)]||g[u]||p[u]||r;return n?a.createElement(f,d(d({ref:t},c),{},{components:n})):a.createElement(f,d({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,d=new Array(r);d[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[g]="string"==typeof e?e:i,d[1]=l;for(var s=2;s<r;s++)d[s]=n[s];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83318:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>g,assets:()=>s,contentTitle:()=>l,default:()=>k,frontMatter:()=>d,metadata:()=>o,toc:()=>u});var a=n(87462),i=n(67294),r=n(3905);const d={id:"pending-digital-card-status",title:"PendingDigitalCardStatus",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/enums/pending-digital-card-status",id:"api-reference/enums/pending-digital-card-status",title:"PendingDigitalCardStatus",description:"Pending Digital Card Status",source:"@site/docs/api-reference/enums/pending-digital-card-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/pending-digital-card-status",permalink:"/api-reference/enums/pending-digital-card-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/pending-digital-card-status.mdx",tags:[],version:"current",frontMatter:{id:"pending-digital-card-status",title:"PendingDigitalCardStatus",hide_table_of_contents:!1}},s={},c=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PendingDigitalCardStatus.<b>ConsentPending</b></code>",id:"code-style-fontweight-normal-pendingdigitalcardstatusbconsentpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PendingDigitalCardStatus.<b>Pending</b></code>",id:"code-style-fontweight-normal-pendingdigitalcardstatusbpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PendingDigitalCardStatus.<b>Declined</b></code>",id:"code-style-fontweight-normal-pendingdigitalcardstatusbdeclinedbcode",level:4},{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:d,startOpen:l=!1}=e;const[o,s]=(0,i.useState)(l);return(0,r.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},o?t:n),o&&d)},m={Bullet:c,SpecifiedBy:g,Badge:p,toc:u,Details:f},b="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Pending Digital Card Status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PendingDigitalCardStatus {\n  ConsentPending\n  Pending\n  Declined\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pendingdigitalcardstatusbconsentpendingbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PendingDigitalCardStatus.",(0,r.kt)("b",null,"ConsentPending")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the digital card is waiting for the user to finish his consent")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pendingdigitalcardstatusbpendingbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PendingDigitalCardStatus.",(0,r.kt)("b",null,"Pending")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the digital card is pending the end of the digitalization process")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-pendingdigitalcardstatusbdeclinedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PendingDigitalCardStatus.",(0,r.kt)("b",null,"Declined")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the creation of a digital card is declined"),(0,r.kt)("p",{parentName:"blockquote"},"this is a final state")),(0,r.kt)("h3",{id:"member-of"},"Member Of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/digital-card-consent-pending-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"DigitalCardConsentPendingStatusInfo")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/digital-card-declined-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"DigitalCardDeclinedStatusInfo")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/digital-card-pending-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"DigitalCardPendingStatusInfo")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/interfaces/pending-digital-card-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PendingDigitalCardStatusInfo")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);