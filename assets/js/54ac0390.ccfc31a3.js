"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[32066],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),u=r,f=p["".concat(l,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},34449:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),r=n(67294),i=n(3905);const o={id:"expired-merchant-payment-link-status-info",title:"ExpiredMerchantPaymentLinkStatusInfo",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/objects/expired-merchant-payment-link-status-info",id:"api-reference/objects/expired-merchant-payment-link-status-info",title:"ExpiredMerchantPaymentLinkStatusInfo",description:"No description",source:"@site/docs/api-reference/objects/expired-merchant-payment-link-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/expired-merchant-payment-link-status-info",permalink:"/api-reference/objects/expired-merchant-payment-link-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/expired-merchant-payment-link-status-info.mdx",tags:[],version:"current",frontMatter:{id:"expired-merchant-payment-link-status-info",title:"ExpiredMerchantPaymentLinkStatusInfo",hide_table_of_contents:!1}},c={},d=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ExpiredMerchantPaymentLinkStatusInfo.<b>status</b></code><Bullet /><code>MerchantPaymentLinkStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-expiredmerchantpaymentlinkstatusinfobstatusbcodemerchantpaymentlinkstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExpiredMerchantPaymentLinkStatusInfo.<b>expiredAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-expiredmerchantpaymentlinkstatusinfobexpiredatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentLinkStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"merchantpaymentlinkstatusinfo-",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:s=!1}=e;const[l,c]=(0,r.useState)(s);return(0,i.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&o)},y={Bullet:d,SpecifiedBy:p,Badge:m,toc:u,Details:f},k="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type ExpiredMerchantPaymentLinkStatusInfo implements MerchantPaymentLinkStatusInfo {\n  status: MerchantPaymentLinkStatus!\n  expiredAt: DateTime!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-expiredmerchantpaymentlinkstatusinfobstatusbcodemerchantpaymentlinkstatus--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ExpiredMerchantPaymentLinkStatusInfo.",(0,i.kt)("b",null,"status"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-payment-link-status"},(0,i.kt)("inlineCode",{parentName:"a"},"MerchantPaymentLinkStatus!"))," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-expiredmerchantpaymentlinkstatusinfobexpiredatbcodedatetime--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ExpiredMerchantPaymentLinkStatusInfo.",(0,i.kt)("b",null,"expiredAt"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The date when the payment link expired.\nThe payment link expires 24 hours after it was created.")),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"merchantpaymentlinkstatusinfo-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-payment-link-status-info"},(0,i.kt)("inlineCode",{parentName:"a"},"MerchantPaymentLinkStatusInfo"))," ",(0,i.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}h.isMDXComponent=!0}}]);