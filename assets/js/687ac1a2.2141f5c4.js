"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[45058],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},i="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),i=m(a),u=o,y=i["".concat(d,".").concat(u)]||i[u]||p[u]||r;return a?n.createElement(y,l(l({ref:t},c),{},{components:a})):n.createElement(y,l({ref:t},c))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[i]="string"==typeof e?e:o,l[1]=s;for(var m=2;m<r;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4592:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,SpecifiedBy:()=>p,assets:()=>m,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var n=a(83117),o=a(67294),r=a(3905);const l={id:"payment-mandate-status",title:"PaymentMandateStatus",hide_table_of_contents:!1},s=void 0,d={unversionedId:"api/enums/payment-mandate-status",id:"api/enums/payment-mandate-status",title:"PaymentMandateStatus",description:"Payment Mandate status",source:"@site/docs/api/enums/payment-mandate-status.mdx",sourceDirName:"api/enums",slug:"/api/enums/payment-mandate-status",permalink:"/docs/api/enums/payment-mandate-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/payment-mandate-status.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-status",title:"PaymentMandateStatus",hide_table_of_contents:!1}},m={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMandateStatus.<b>ConsentPending</b></code>",id:"code-style-fontweight-normal-paymentmandatestatusbconsentpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMandateStatus.<b>Enabled</b></code>",id:"code-style-fontweight-normal-paymentmandatestatusbenabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMandateStatus.<b>Rejected</b></code>",id:"code-style-fontweight-normal-paymentmandatestatusbrejectedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PaymentMandateStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-paymentmandatestatusbcanceledbcode",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:i,SpecifiedBy:p,Badge:u},f="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Payment Mandate status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PaymentMandateStatus {\n  ConsentPending\n  Enabled\n  Rejected\n  Canceled\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatestatusbconsentpendingbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateStatus.",(0,r.kt)("b",null,"ConsentPending")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatestatusbenabledbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateStatus.",(0,r.kt)("b",null,"Enabled")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatestatusbrejectedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateStatus.",(0,r.kt)("b",null,"Rejected")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatestatusbcanceledbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateStatus.",(0,r.kt)("b",null,"Canceled")))),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/payment-mandate-canceled-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentMandateCanceledStatusInfo")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/payment-mandate-consent-pending-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentMandateConsentPendingStatusInfo")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/payment-mandate-enabled-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentMandateEnabledStatusInfo")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/payment-mandate-filters-input"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentMandateFiltersInput")),"  ",(0,r.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/payment-mandate-rejected-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentMandateRejectedStatusInfo")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(i,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/payment-mandate-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PaymentMandateStatusInfo")),"  ",(0,r.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);