"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84101],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=i(n),p=r,y=m["".concat(l,".").concat(p)]||m[p]||u[p]||o;return n?a.createElement(y,s(s({ref:t},d),{},{components:n})):a.createElement(y,s({ref:t},d))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[m]="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1246:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>y,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(87462),r=n(67294),o=n(3905);const s={id:"request-merchant-payment-methods",title:"requestMerchantPaymentMethods",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/mutations/request-merchant-payment-methods",id:"api-reference/mutations/request-merchant-payment-methods",title:"requestMerchantPaymentMethods",description:"Request merchant payment methods for a merchant profile",source:"@site/docs/api-reference/mutations/request-merchant-payment-methods.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/request-merchant-payment-methods",permalink:"/api-reference/mutations/request-merchant-payment-methods",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/request-merchant-payment-methods.mdx",tags:[],version:"current",frontMatter:{id:"request-merchant-payment-methods",title:"requestMerchantPaymentMethods",hide_table_of_contents:!1}},i={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>requestMerchantPaymentMethods.<b>input</b></code><Bullet /><code>RequestMerchantPaymentMethodsInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-requestmerchantpaymentmethodsbinputbcoderequestmerchantpaymentmethodsinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>RequestMerchantPaymentMethodsPayload</code> <Badge class="badge badge--secondary" text="union"/>',id:"requestmerchantpaymentmethodspayload-",level:4}],y=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:c=!1}=e;const[l,i]=(0,r.useState)(c);return(0,o.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&s)},h={Bullet:d,SpecifiedBy:m,Badge:u,toc:p,Details:y},f="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Request merchant payment methods for a merchant profile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"requestMerchantPaymentMethods(\n  input: RequestMerchantPaymentMethodsInput!\n): RequestMerchantPaymentMethodsPayload\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentmethodsbinputbcoderequestmerchantpaymentmethodsinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"requestMerchantPaymentMethods.",(0,o.kt)("b",null,"input"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/request-merchant-payment-methods-input"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentMethodsInput!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"requestmerchantpaymentmethodspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/unions/request-merchant-payment-methods-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentMethodsPayload"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}g.isMDXComponent=!0}}]);