"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[29409],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var a=n.createContext({}),l=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(a.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,a=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),b=i,f=p["".concat(a,".").concat(b)]||p[b]||s[b]||c;return r?n.createElement(f,d(d({ref:t},u),{},{components:r})):n.createElement(f,d({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,d=new Array(c);d[0]=b;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o[p]="string"==typeof e?e:i,d[1]=o;for(var l=2;l<c;l++)d[l]=r[l];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},30314:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>b,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>d,metadata:()=>a,toc:()=>u});var n=r(83117),i=r(67294),c=r(3905);const d={id:"account-received-direct-debit-order-by-field-input",title:"AccountReceivedDirectDebitOrderByFieldInput",hide_table_of_contents:!1},o=void 0,a={unversionedId:"api/enums/account-received-direct-debit-order-by-field-input",id:"api/enums/account-received-direct-debit-order-by-field-input",title:"AccountReceivedDirectDebitOrderByFieldInput",description:"Field we can use when ordering that can be applied when listing receives direct debit mandate results",source:"@site/docs/api/enums/account-received-direct-debit-order-by-field-input.mdx",sourceDirName:"api/enums",slug:"/api/enums/account-received-direct-debit-order-by-field-input",permalink:"/docs/api/enums/account-received-direct-debit-order-by-field-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/account-received-direct-debit-order-by-field-input.mdx",tags:[],version:"current",frontMatter:{id:"account-received-direct-debit-order-by-field-input",title:"AccountReceivedDirectDebitOrderByFieldInput",hide_table_of_contents:!1}},l={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AccountReceivedDirectDebitOrderByFieldInput.<b>createdAt</b></code>",id:"code-style-fontweight-normal-accountreceiveddirectdebitorderbyfieldinputbcreatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountReceivedDirectDebitOrderByFieldInput.<b>updatedAt</b></code>",id:"code-style-fontweight-normal-accountreceiveddirectdebitorderbyfieldinputbupdatedatbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,c.kt)(i.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,c.kt)(i.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,c.kt)(i.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:p,SpecifiedBy:s,Badge:b},m="wrapper";function y(e){let{components:t,...r}=e;return(0,c.kt)(m,(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Field we can use when ordering that can be applied when listing receives direct debit mandate results"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AccountReceivedDirectDebitOrderByFieldInput {\n  createdAt\n  updatedAt\n}\n")),(0,c.kt)("h3",{id:"values"},"Values"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountreceiveddirectdebitorderbyfieldinputbcreatedatbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountReceivedDirectDebitOrderByFieldInput.",(0,c.kt)("b",null,"createdAt")))),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountreceiveddirectdebitorderbyfieldinputbupdatedatbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountReceivedDirectDebitOrderByFieldInput.",(0,c.kt)("b",null,"updatedAt")))),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/inputs/account-received-direct-debit-order-by-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountReceivedDirectDebitOrderByInput")),"  ",(0,c.kt)(b,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);