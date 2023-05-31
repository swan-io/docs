"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[56373],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,f=m["".concat(i,".").concat(u)]||m[u]||p[u]||o;return n?a.createElement(f,c(c({ref:t},l),{},{components:n})):a.createElement(f,c({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,c[1]=s;for(var d=2;d<o;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45629:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var a=n(83117),r=n(67294),o=n(3905);const c={id:"pending-merchant-payment-method-status-info",title:"PendingMerchantPaymentMethodStatusInfo",hide_table_of_contents:!1},s=void 0,i={unversionedId:"api-reference/objects/pending-merchant-payment-method-status-info",id:"api-reference/objects/pending-merchant-payment-method-status-info",title:"PendingMerchantPaymentMethodStatusInfo",description:"PendingMerchantPaymentMethodStatusInfo",source:"@site/docs/api-reference/objects/pending-merchant-payment-method-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/pending-merchant-payment-method-status-info",permalink:"/api-reference/objects/pending-merchant-payment-method-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/pending-merchant-payment-method-status-info.mdx",tags:[],version:"current",frontMatter:{id:"pending-merchant-payment-method-status-info",title:"PendingMerchantPaymentMethodStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PendingFundingSourceStatusInfo",permalink:"/api-reference/objects/pending-funding-source-status-info"},next:{title:"PendingMerchantPaymentProductStatusInfo",permalink:"/api-reference/objects/pending-merchant-payment-product-status-info"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PendingMerchantPaymentMethodStatusInfo.<b>status</b></code><Bullet /><code>MerchantPaymentMethodStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-pendingmerchantpaymentmethodstatusinfobstatusbcodemerchantpaymentmethodstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentMethodStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"merchantpaymentmethodstatusinfo-",level:4}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:m,SpecifiedBy:p,Badge:u},h="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"PendingMerchantPaymentMethodStatusInfo"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PendingMerchantPaymentMethodStatusInfo implements MerchantPaymentMethodStatusInfo {\n  status: MerchantPaymentMethodStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pendingmerchantpaymentmethodstatusinfobstatusbcodemerchantpaymentmethodstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PendingMerchantPaymentMethodStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-payment-method-status"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodStatus!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"merchantpaymentmethodstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-payment-method-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodStatusInfo"))," ",(0,o.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The payment method status information")))}y.isMDXComponent=!0}}]);