"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[1969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=l(n),p=o,m=s["".concat(d,".").concat(p)]||s[p]||f[p]||a;return n?r.createElement(m,c(c({ref:t},u),{},{components:n})):r.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=p;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},86310:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var r=n(83117),o=n(67294),a=n(3905);const c={id:"refund-rejection-code",title:"RefundRejectionCode",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/enums/refund-rejection-code",id:"api-reference/enums/refund-rejection-code",title:"RefundRejectionCode",description:"Reason code that explains why we can't refund the transactions",source:"@site/docs/api-reference/enums/refund-rejection-code.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/refund-rejection-code",permalink:"/api-reference/enums/refund-rejection-code",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/refund-rejection-code.mdx",tags:[],version:"current",frontMatter:{id:"refund-rejection-code",title:"RefundRejectionCode",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ReceivedDirectDebitMandateStatus",permalink:"/api-reference/enums/received-direct-debit-mandate-status"},next:{title:"RejectedFundingSourceReason",permalink:"/api-reference/enums/rejected-funding-source-reason"}},l={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>RefundRejectionCode.<b>TransactionNotFound</b></code>",id:"code-style-fontweight-normal-refundrejectioncodebtransactionnotfoundbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>RefundRejectionCode.<b>TransactionNonRefundable</b></code>",id:"code-style-fontweight-normal-refundrejectioncodebtransactionnonrefundablebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>RefundRejectionCode.<b>ServerError</b></code>",id:"code-style-fontweight-normal-refundrejectioncodebservererrorbcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:s,SpecifiedBy:f,Badge:p},b="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Reason code that explains why we can't refund the transactions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum RefundRejectionCode {\n  TransactionNotFound\n  TransactionNonRefundable\n  ServerError\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-refundrejectioncodebtransactionnotfoundbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RefundRejectionCode.",(0,a.kt)("b",null,"TransactionNotFound")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The transaction couldn't be found or the user doesn't have the 'canInitiatePayment' rights on the account")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-refundrejectioncodebtransactionnonrefundablebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RefundRejectionCode.",(0,a.kt)("b",null,"TransactionNonRefundable")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The transaction status is not Booked")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-refundrejectioncodebservererrorbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"RefundRejectionCode.",(0,a.kt)("b",null,"ServerError")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Error server")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/refund-rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"RefundRejection")),"  ",(0,a.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);