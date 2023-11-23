"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[57316],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(n),p=r,f=m["".concat(i,".").concat(p)]||m[p]||u[p]||c;return n?a.createElement(f,l(l({ref:t},d),{},{components:n})):a.createElement(f,l({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[m]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<c;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},51011:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>o,default:()=>k,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(83117),r=n(67294),c=n(3905);const l={id:"canceled-merchant-payment-link-status-info",title:"CanceledMerchantPaymentLinkStatusInfo",hide_table_of_contents:!1},o=void 0,i={unversionedId:"api-reference/objects/canceled-merchant-payment-link-status-info",id:"api-reference/objects/canceled-merchant-payment-link-status-info",title:"CanceledMerchantPaymentLinkStatusInfo",description:"No description",source:"@site/docs/api-reference/objects/canceled-merchant-payment-link-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/canceled-merchant-payment-link-status-info",permalink:"/api-reference/objects/canceled-merchant-payment-link-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/canceled-merchant-payment-link-status-info.mdx",tags:[],version:"current",frontMatter:{id:"canceled-merchant-payment-link-status-info",title:"CanceledMerchantPaymentLinkStatusInfo",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CanceledMerchantPaymentLinkStatusInfo.<b>status</b></code><Bullet /><code>MerchantPaymentLinkStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-canceledmerchantpaymentlinkstatusinfobstatusbcodemerchantpaymentlinkstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CanceledMerchantPaymentLinkStatusInfo.<b>canceledAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-canceledmerchantpaymentlinkstatusinfobcanceledatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentLinkStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"merchantpaymentlinkstatusinfo-",level:4}],m=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:m,SpecifiedBy:u,Badge:p},y="wrapper";function k(e){let{components:t,...n}=e;return(0,c.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type CanceledMerchantPaymentLinkStatusInfo implements MerchantPaymentLinkStatusInfo {\n  status: MerchantPaymentLinkStatus!\n  canceledAt: DateTime!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-canceledmerchantpaymentlinkstatusinfobstatusbcodemerchantpaymentlinkstatus--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CanceledMerchantPaymentLinkStatusInfo.",(0,c.kt)("b",null,"status"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-payment-link-status"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantPaymentLinkStatus!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-canceledmerchantpaymentlinkstatusinfobcanceledatbcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CanceledMerchantPaymentLinkStatusInfo.",(0,c.kt)("b",null,"canceledAt"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The date at which the customer canceled the payment.")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"merchantpaymentlinkstatusinfo-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-payment-link-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantPaymentLinkStatusInfo"))," ",(0,c.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}k.isMDXComponent=!0}}]);