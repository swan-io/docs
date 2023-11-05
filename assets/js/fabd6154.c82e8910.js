"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[49885],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=i(r),u=a,y=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return r?n.createElement(y,c(c({ref:t},d),{},{components:r})):n.createElement(y,c({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,c[1]=s;for(var i=2;i<o;i++)c[i]=r[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44415:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(83117),a=r(67294),o=r(3905);const c={id:"request-merchant-payment-methods-success-payload",title:"RequestMerchantPaymentMethodsSuccessPayload",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/objects/request-merchant-payment-methods-success-payload",id:"api-reference/objects/request-merchant-payment-methods-success-payload",title:"RequestMerchantPaymentMethodsSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/request-merchant-payment-methods-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/request-merchant-payment-methods-success-payload",permalink:"/api-reference/objects/request-merchant-payment-methods-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/request-merchant-payment-methods-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"request-merchant-payment-methods-success-payload",title:"RequestMerchantPaymentMethodsSuccessPayload",hide_table_of_contents:!1}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantPaymentMethodsSuccessPayload.<b>merchantProfile</b></code><Bullet /><code>MerchantProfile</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-requestmerchantpaymentmethodssuccesspayloadbmerchantprofilebcodemerchantprofile-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:m,Badge:u},f="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type RequestMerchantPaymentMethodsSuccessPayload {\n  merchantProfile: MerchantProfile\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentmethodssuccesspayloadbmerchantprofilebcodemerchantprofile-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantPaymentMethodsSuccessPayload.",(0,o.kt)("b",null,"merchantProfile"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/merchant-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfile"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/request-merchant-payment-methods-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentMethodsPayload")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);