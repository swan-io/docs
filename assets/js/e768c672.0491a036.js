"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[92167],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),y=r,f=p["".concat(i,".").concat(y)]||p[y]||m[y]||o;return n?a.createElement(f,c(c({ref:t},s),{},{components:n})):a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var d=2;d<o;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},90659:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>s});var a=n(83117),r=n(67294),o=n(3905);const c={id:"payment-mandate-reference-already-used-rejection",title:"PaymentMandateReferenceAlreadyUsedRejection",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api/objects/payment-mandate-reference-already-used-rejection",id:"api/objects/payment-mandate-reference-already-used-rejection",title:"PaymentMandateReferenceAlreadyUsedRejection",description:"Rejection returned when a payment mandate reference is already for a creditor",source:"@site/docs/api/objects/payment-mandate-reference-already-used-rejection.mdx",sourceDirName:"api/objects",slug:"/api/objects/payment-mandate-reference-already-used-rejection",permalink:"/docs/api/objects/payment-mandate-reference-already-used-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/payment-mandate-reference-already-used-rejection.mdx",tags:[],version:"current",frontMatter:{id:"payment-mandate-reference-already-used-rejection",title:"PaymentMandateReferenceAlreadyUsedRejection",hide_table_of_contents:!1}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentMandateReferenceAlreadyUsedRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentmandatereferencealreadyusedrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:m,Badge:y},u="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Rejection returned when a payment mandate reference is already for a creditor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaymentMandateReferenceAlreadyUsedRejection implements Rejection {\n  message: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentmandatereferencealreadyusedrejectionbmessagebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PaymentMandateReferenceAlreadyUsedRejection.",(0,o.kt)("b",null,"message"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"rejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,o.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/unions/add-internal-direct-debit-payment-mandate-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddInternalDirectDebitPaymentMandatePayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);