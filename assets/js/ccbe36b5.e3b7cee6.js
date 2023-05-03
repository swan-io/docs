"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84589],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),i=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=i(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(r),u=n,m=p["".concat(d,".").concat(u)]||p[u]||f[u]||c;return r?a.createElement(m,o(o({ref:t},s),{},{components:r})):a.createElement(m,o({ref:t},s))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,o[1]=l;for(var i=2;i<c;i++)o[i]=r[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44590:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=r(83117),n=r(67294),c=r(3905);const o={id:"add-merchant-profile-success-payload",title:"AddMerchantProfileSuccessPayload",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/objects/add-merchant-profile-success-payload",id:"api-reference/objects/add-merchant-profile-success-payload",title:"AddMerchantProfileSuccessPayload",description:"Add Merchant Profile Success Payload",source:"@site/docs/api-reference/objects/add-merchant-profile-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/add-merchant-profile-success-payload",permalink:"/docs/api-reference/objects/add-merchant-profile-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/add-merchant-profile-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-merchant-profile-success-payload",title:"AddMerchantProfileSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddInternalDirectDebitPaymentMandateSuccessPayload",permalink:"/docs/api-reference/objects/add-internal-direct-debit-payment-mandate-success-payload"},next:{title:"AddOrUpdateExternalAccountBalanceSuccessPayload",permalink:"/docs/api-reference/objects/add-or-update-external-account-balance-success-payload"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddMerchantProfileSuccessPayload.<b>merchantProfile</b></code><Bullet /><code>MerchantProfile!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-addmerchantprofilesuccesspayloadbmerchantprofilebcodemerchantprofile--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,c.kt)(n.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:f,Badge:u},y="wrapper";function h(e){let{components:t,...r}=e;return(0,c.kt)(y,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Add Merchant Profile Success Payload"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddMerchantProfileSuccessPayload {\n  merchantProfile: MerchantProfile!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addmerchantprofilesuccesspayloadbmerchantprofilebcodemerchantprofile--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddMerchantProfileSuccessPayload.",(0,c.kt)("b",null,"merchantProfile"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/merchant-profile"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantProfile!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Merchant Profile")),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/add-merchant-profile-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"AddMerchantProfilePayload")),"  ",(0,c.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);