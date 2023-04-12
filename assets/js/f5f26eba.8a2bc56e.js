"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[63473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,f=p["".concat(s,".").concat(u)]||p[u]||m[u]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40499:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var a=n(83117),r=n(67294),i=n(3905);const o={id:"transaction-side",title:"TransactionSide",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api/enums/transaction-side",id:"api/enums/transaction-side",title:"TransactionSide",description:"Transaction side",source:"@site/docs/api/enums/transaction-side.mdx",sourceDirName:"api/enums",slug:"/api/enums/transaction-side",permalink:"/docs/api/enums/transaction-side",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/transaction-side.mdx",tags:[],version:"current",frontMatter:{id:"transaction-side",title:"TransactionSide",hide_table_of_contents:!1}},l={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>TransactionSide.<b>Debit</b></code>",id:"code-style-fontweight-normal-transactionsidebdebitbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransactionSide.<b>Credit</b></code>",id:"code-style-fontweight-normal-transactionsidebcreditbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:m,Badge:u},b="wrapper";function k(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Transaction side"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum TransactionSide {\n  Debit\n  Credit\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-transactionsidebdebitbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TransactionSide.",(0,i.kt)("b",null,"Debit")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"when the transaction debit the account")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-transactionsidebcreditbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"TransactionSide.",(0,i.kt)("b",null,"Credit")))),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"when the transaction credit the account")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/objects/card-transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"CardTransaction")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/check-transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"CheckTransaction")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/fee-transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"FeeTransaction")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/internal-credit-transfer"},(0,i.kt)("inlineCode",{parentName:"a"},"InternalCreditTransfer")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/internal-direct-debit-transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitTransaction")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/sepacredit-transfer-transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferTransaction")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/objects/sepadirect-debit-transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitTransaction")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api/interfaces/transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,i.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);