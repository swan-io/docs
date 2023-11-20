"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[75993],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),y=c,u=m["".concat(i,".").concat(y)]||m[y]||d[y]||o;return n?a.createElement(u,r(r({ref:t},p),{},{components:n})):a.createElement(u,r({ref:t},p))}));function u(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,r=new Array(o);r[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:c,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},45633:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>b,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var a=n(83117),c=n(67294),o=n(3905);const r={id:"initiate-merchant-payment-collection-success-payload",title:"InitiateMerchantPaymentCollectionSuccessPayload",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/objects/initiate-merchant-payment-collection-success-payload",id:"api-reference/objects/initiate-merchant-payment-collection-success-payload",title:"InitiateMerchantPaymentCollectionSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/initiate-merchant-payment-collection-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/initiate-merchant-payment-collection-success-payload",permalink:"/api-reference/objects/initiate-merchant-payment-collection-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/initiate-merchant-payment-collection-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"initiate-merchant-payment-collection-success-payload",title:"InitiateMerchantPaymentCollectionSuccessPayload",hide_table_of_contents:!1}},s={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateMerchantPaymentCollectionSuccessPayload.<b>merchantPaymentCollection</b></code><Bullet /><code>Payment!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-initiatemerchantpaymentcollectionsuccesspayloadbmerchantpaymentcollectionbcodepayment--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],m=()=>(0,o.kt)(c.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(c.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(c.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:p,Bullet:m,SpecifiedBy:d,Badge:y},f="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type InitiateMerchantPaymentCollectionSuccessPayload {\n  merchantPaymentCollection: Payment!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-initiatemerchantpaymentcollectionsuccesspayloadbmerchantpaymentcollectionbcodepayment--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InitiateMerchantPaymentCollectionSuccessPayload.",(0,o.kt)("b",null,"merchantPaymentCollection"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/payment"},(0,o.kt)("inlineCode",{parentName:"a"},"Payment!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/initiate-merchant-payment-collection-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"InitiateMerchantPaymentCollectionPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);