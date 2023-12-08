"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[18443],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),s=p(n),d=r,y=s["".concat(l,".").concat(d)]||s[d]||u[d]||c;return n?a.createElement(y,o(o({ref:t},m),{},{components:n})):a.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<c;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35018:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>m,Details:()=>y,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=n(87462),r=n(67294),c=n(3905);const o={id:"create-merchant-payment-link",title:"createMerchantPaymentLink",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/mutations/create-merchant-payment-link",id:"api-reference/mutations/create-merchant-payment-link",title:"createMerchantPaymentLink",description:"Create a unique URL for a merchant to collect payment from a customer",source:"@site/docs/api-reference/mutations/create-merchant-payment-link.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/create-merchant-payment-link",permalink:"/api-reference/mutations/create-merchant-payment-link",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/create-merchant-payment-link.mdx",tags:[],version:"current",frontMatter:{id:"create-merchant-payment-link",title:"createMerchantPaymentLink",hide_table_of_contents:!1}},p={},m=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createMerchantPaymentLink.<b>input</b></code><Bullet /><code>CreateMerchantPaymentLinkInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkbinputbcodecreatemerchantpaymentlinkinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateMerchantPaymentLinkPayload</code> <Badge class="badge badge--secondary" text="union"/>',id:"createmerchantpaymentlinkpayload-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:i=!1}=e;const[l,p]=(0,r.useState)(i);return(0,c.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),p((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&o)},f={Bullet:m,SpecifiedBy:s,Badge:u,toc:d,Details:y},k="wrapper";function h(e){let{components:t,...n}=e;return(0,c.kt)(k,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Create a unique URL for a merchant to collect payment from a customer"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"createMerchantPaymentLink(\n  input: CreateMerchantPaymentLinkInput!\n): CreateMerchantPaymentLinkPayload!\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkbinputbcodecreatemerchantpaymentlinkinput--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"createMerchantPaymentLink.",(0,c.kt)("b",null,"input"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/inputs/create-merchant-payment-link-input"},(0,c.kt)("inlineCode",{parentName:"a"},"CreateMerchantPaymentLinkInput!"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"type"},"Type"),(0,c.kt)("h4",{id:"createmerchantpaymentlinkpayload-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/unions/create-merchant-payment-link-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"CreateMerchantPaymentLinkPayload"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}h.isMDXComponent=!0}}]);