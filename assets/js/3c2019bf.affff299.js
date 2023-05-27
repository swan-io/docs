"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70466],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},i="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=d(e,["components","mdxType","originalType","parentName"]),i=s(n),p=r,u=i["".concat(l,".").concat(p)]||i[p]||h[p]||o;return n?a.createElement(u,c(c({ref:t},m),{},{components:n})):a.createElement(u,c({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[i]="string"==typeof e?e:r,c[1]=d;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6039:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>i,SpecifiedBy:()=>h,assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var a=n(83117),r=n(67294),o=n(3905);const c={id:"merchant-payment-method-status",title:"MerchantPaymentMethodStatus",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api-reference/enums/merchant-payment-method-status",id:"api-reference/enums/merchant-payment-method-status",title:"MerchantPaymentMethodStatus",description:"The different statuses a MerchantPaymentMethod can have",source:"@site/docs/api-reference/enums/merchant-payment-method-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/merchant-payment-method-status",permalink:"/docs/api-reference/enums/merchant-payment-method-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/merchant-payment-method-status.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-method-status",title:"MerchantPaymentMethodStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MerchantCategoryDescription",permalink:"/docs/api-reference/enums/merchant-category-description"},next:{title:"MerchantPaymentMethodType",permalink:"/docs/api-reference/enums/merchant-payment-method-type"}},s={},m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentMethodStatus.<b>PendingReview</b></code>",id:"code-style-fontweight-normal-merchantpaymentmethodstatusbpendingreviewbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentMethodStatus.<b>Enabled</b></code>",id:"code-style-fontweight-normal-merchantpaymentmethodstatusbenabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentMethodStatus.<b>Rejected</b></code>",id:"code-style-fontweight-normal-merchantpaymentmethodstatusbrejectedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentMethodStatus.<b>Disabled</b></code>",id:"code-style-fontweight-normal-merchantpaymentmethodstatusbdisabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentMethodStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-merchantpaymentmethodstatusbcanceledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantPaymentMethodStatus.<b>Suspended</b></code>",id:"code-style-fontweight-normal-merchantpaymentmethodstatusbsuspendedbcode",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),h=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:m,Bullet:i,SpecifiedBy:h,Badge:p},y="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The different statuses a MerchantPaymentMethod can have"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MerchantPaymentMethodStatus {\n  PendingReview\n  Enabled\n  Rejected\n  Disabled\n  Canceled\n  Suspended\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentmethodstatusbpendingreviewbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentMethodStatus.",(0,o.kt)("b",null,"PendingReview")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentmethodstatusbenabledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentMethodStatus.",(0,o.kt)("b",null,"Enabled")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentmethodstatusbrejectedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentMethodStatus.",(0,o.kt)("b",null,"Rejected")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentmethodstatusbdisabledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentMethodStatus.",(0,o.kt)("b",null,"Disabled")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentmethodstatusbcanceledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentMethodStatus.",(0,o.kt)("b",null,"Canceled")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentmethodstatusbsuspendedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentMethodStatus.",(0,o.kt)("b",null,"Suspended")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/canceled-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CanceledMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/disabled-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"DisabledMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/enabled-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"EnabledMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/interfaces/merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/pending-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PendingMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/rejected-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"RejectedMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/suspended-merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"SuspendedMerchantPaymentMethodStatusInfo")),"  ",(0,o.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);