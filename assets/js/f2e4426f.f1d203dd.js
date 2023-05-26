"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[78520],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,y=m["".concat(l,".").concat(p)]||m[p]||i[p]||c;return n?a.createElement(y,o(o({ref:t},u),{},{components:n})):a.createElement(y,o({ref:t},u))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[m]="string"==typeof e?e:r,o[1]=d;for(var s=2;s<c;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60969:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>i,assets:()=>s,contentTitle:()=>d,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(83117),r=n(67294),c=n(3905);const o={id:"merchant-payment-product-status",title:"MerchantPaymentProductStatus",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api-reference/enums/merchant-payment-product-status",id:"api-reference/enums/merchant-payment-product-status",title:"MerchantPaymentProductStatus",description:"The different statuses a MerchantPaymentProduct can have",source:"@site/docs/api-reference/enums/merchant-payment-product-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/merchant-payment-product-status",permalink:"/docs/api-reference/enums/merchant-payment-product-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/merchant-payment-product-status.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-product-status",title:"MerchantPaymentProductStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MerchantCategoryDescription",permalink:"/docs/api-reference/enums/merchant-category-description"},next:{title:"MerchantPaymentProductType",permalink:"/docs/api-reference/enums/merchant-payment-product-type"}},s={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentProductStatus.<b>PendingReview</b></code>",id:"code-style-fontweight-normal-merchantpaymentproductstatusbpendingreviewbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentProductStatus.<b>Enabled</b></code>",id:"code-style-fontweight-normal-merchantpaymentproductstatusbenabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentProductStatus.<b>Rejected</b></code>",id:"code-style-fontweight-normal-merchantpaymentproductstatusbrejectedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentProductStatus.<b>Disabled</b></code>",id:"code-style-fontweight-normal-merchantpaymentproductstatusbdisabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentProductStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-merchantpaymentproductstatusbcanceledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentProductStatus.<b>Suspended</b></code>",id:"code-style-fontweight-normal-merchantpaymentproductstatusbsuspendedbcode",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:m,SpecifiedBy:i,Badge:p},f="wrapper";function h(e){let{components:t,...n}=e;return(0,c.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"The different statuses a MerchantPaymentProduct can have"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MerchantPaymentProductStatus {\n  PendingReview\n  Enabled\n  Rejected\n  Disabled\n  Canceled\n  Suspended\n}\n")),(0,c.kt)("h3",{id:"values"},"Values"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusbpendingreviewbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatus.",(0,c.kt)("b",null,"PendingReview")))),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusbenabledbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatus.",(0,c.kt)("b",null,"Enabled")))),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusbrejectedbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatus.",(0,c.kt)("b",null,"Rejected")))),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusbdisabledbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatus.",(0,c.kt)("b",null,"Disabled")))),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusbcanceledbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatus.",(0,c.kt)("b",null,"Canceled")))),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductstatusbsuspendedbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProductStatus.",(0,c.kt)("b",null,"Suspended")))),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/canceled-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"CanceledMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/disabled-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"DisabledMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/enabled-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"EnabledMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/pending-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PendingMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/rejected-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"RejectedMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/suspended-merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"SuspendedMerchantPaymentProductStatusInfo")),"  ",(0,c.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);