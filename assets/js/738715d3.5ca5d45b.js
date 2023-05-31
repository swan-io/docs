"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[76536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||c;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var i=2;i<c;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22164:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=r(83117),a=r(67294),c=r(3905);const o={id:"request-merchant-payment-products-success-payload",title:"RequestMerchantPaymentProductsSuccessPayload",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/objects/request-merchant-payment-products-success-payload",id:"api-reference/objects/request-merchant-payment-products-success-payload",title:"RequestMerchantPaymentProductsSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/request-merchant-payment-products-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/request-merchant-payment-products-success-payload",permalink:"/api-reference/objects/request-merchant-payment-products-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/request-merchant-payment-products-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"request-merchant-payment-products-success-payload",title:"RequestMerchantPaymentProductsSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RequestMerchantPaymentMethodsSuccessPayload",permalink:"/api-reference/objects/request-merchant-payment-methods-success-payload"},next:{title:"RequestSupportingDocumentCollectionReviewSuccessPayload",permalink:"/api-reference/objects/request-supporting-document-collection-review-success-payload"}},i={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantPaymentProductsSuccessPayload.<b>merchantProfile</b></code><Bullet /><code>MerchantProfile</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-requestmerchantpaymentproductssuccesspayloadbmerchantprofilebcodemerchantprofile-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:u,SpecifiedBy:d,Badge:m},f="wrapper";function h(e){let{components:t,...r}=e;return(0,c.kt)(f,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type RequestMerchantPaymentProductsSuccessPayload {\n  merchantProfile: MerchantProfile\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentproductssuccesspayloadbmerchantprofilebcodemerchantprofile-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantPaymentProductsSuccessPayload.",(0,c.kt)("b",null,"merchantProfile"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/merchant-profile"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantProfile"))," ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/request-merchant-payment-products-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentProductsPayload")),"  ",(0,c.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);