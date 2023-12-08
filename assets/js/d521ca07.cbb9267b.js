"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[24722],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=l(n),p=r,f=m["".concat(s,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(f,c(c({ref:t},d),{},{components:n})):a.createElement(f,c({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},81830:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=n(87462),r=n(67294),i=n(3905);const c={id:"active-merchant-payment-link-status-info",title:"ActiveMerchantPaymentLinkStatusInfo",hide_table_of_contents:!1},o=void 0,s={unversionedId:"api-reference/objects/active-merchant-payment-link-status-info",id:"api-reference/objects/active-merchant-payment-link-status-info",title:"ActiveMerchantPaymentLinkStatusInfo",description:"No description",source:"@site/docs/api-reference/objects/active-merchant-payment-link-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/active-merchant-payment-link-status-info",permalink:"/api-reference/objects/active-merchant-payment-link-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/active-merchant-payment-link-status-info.mdx",tags:[],version:"current",frontMatter:{id:"active-merchant-payment-link-status-info",title:"ActiveMerchantPaymentLinkStatusInfo",hide_table_of_contents:!1}},l={},d=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActiveMerchantPaymentLinkStatusInfo.<b>status</b></code><Bullet /><code>MerchantPaymentLinkStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-activemerchantpaymentlinkstatusinfobstatusbcodemerchantpaymentlinkstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActiveMerchantPaymentLinkStatusInfo.<b>expiresAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-activemerchantpaymentlinkstatusinfobexpiresatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentLinkStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"merchantpaymentlinkstatusinfo-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:o=!1}=e;const[s,l]=(0,r.useState)(o);return(0,i.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&c)},y={Bullet:d,SpecifiedBy:m,Badge:u,toc:p,Details:f},k="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ActiveMerchantPaymentLinkStatusInfo implements MerchantPaymentLinkStatusInfo {\n  status: MerchantPaymentLinkStatus!\n  expiresAt: DateTime!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activemerchantpaymentlinkstatusinfobstatusbcodemerchantpaymentlinkstatus--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActiveMerchantPaymentLinkStatusInfo.",(0,i.kt)("b",null,"status"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-payment-link-status"},(0,i.kt)("inlineCode",{parentName:"a"},"MerchantPaymentLinkStatus!"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activemerchantpaymentlinkstatusinfobexpiresatbcodedatetime--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActiveMerchantPaymentLinkStatusInfo.",(0,i.kt)("b",null,"expiresAt"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The date when the payment link expires.\nThe payment link expires 24 hours after it was created.")),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"merchantpaymentlinkstatusinfo-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-payment-link-status-info"},(0,i.kt)("inlineCode",{parentName:"a"},"MerchantPaymentLinkStatusInfo"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}h.isMDXComponent=!0}}]);