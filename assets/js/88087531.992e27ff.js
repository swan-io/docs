"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[48216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>y});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,y=u["".concat(l,".").concat(d)]||u[d]||s[d]||r;return n?a.createElement(y,o(o({ref:t},m),{},{components:n})):a.createElement(y,o({ref:t},m))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:i,o[1]=c;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94963:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(83117),i=n(67294),r=n(3905);const o={id:"initiate-merchant-payment-collection",title:"initiateMerchantPaymentCollection",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/mutations/initiate-merchant-payment-collection",id:"api-reference/mutations/initiate-merchant-payment-collection",title:"initiateMerchantPaymentCollection",description:"No description",source:"@site/docs/api-reference/mutations/initiate-merchant-payment-collection.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/initiate-merchant-payment-collection",permalink:"/api-reference/mutations/initiate-merchant-payment-collection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/initiate-merchant-payment-collection.mdx",tags:[],version:"current",frontMatter:{id:"initiate-merchant-payment-collection",title:"initiateMerchantPaymentCollection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"initiateFundingRequest",permalink:"/api-reference/mutations/initiate-funding-request"},next:{title:"onboardCompanyAccountHolder",permalink:"/api-reference/mutations/onboard-company-account-holder"}},p={},m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>initiateMerchantPaymentCollection.<b>input</b></code><Bullet /><code>InitiateMerchantPaymentCollectionInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-initiatemerchantpaymentcollectionbinputbcodeinitiatemerchantpaymentcollectioninput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>InitiateMerchantPaymentCollectionPayload</code> <Badge class="secondary" text="union"/>',id:"initiatemerchantpaymentcollectionpayload-",level:4}],u=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:m,Bullet:u,SpecifiedBy:s,Badge:d},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"initiateMerchantPaymentCollection(\n  input: InitiateMerchantPaymentCollectionInput!\n): InitiateMerchantPaymentCollectionPayload\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-initiatemerchantpaymentcollectionbinputbcodeinitiatemerchantpaymentcollectioninput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"initiateMerchantPaymentCollection.",(0,r.kt)("b",null,"input"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/initiate-merchant-payment-collection-input"},(0,r.kt)("inlineCode",{parentName:"a"},"InitiateMerchantPaymentCollectionInput!"))," ",(0,r.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"initiatemerchantpaymentcollectionpayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/unions/initiate-merchant-payment-collection-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"InitiateMerchantPaymentCollectionPayload"))," ",(0,r.kt)(d,{class:"secondary",text:"union",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}h.isMDXComponent=!0}}]);