"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[86124],{3905:(t,e,a)=>{a.d(e,{Zo:()=>d,kt:()=>f});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var i=n.createContext({}),l=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},d=function(t){var e=l(t.components);return n.createElement(i.Provider,{value:e},t.children)},u="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,r=t.originalType,i=t.parentName,d=c(t,["components","mdxType","originalType","parentName"]),u=l(a),m=o,f=u["".concat(i,".").concat(m)]||u[m]||p[m]||r;return a?n.createElement(f,s(s({ref:e},d),{},{components:a})):n.createElement(f,s({ref:e},d))}));function f(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=a.length,s=new Array(r);s[0]=m;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c[u]="string"==typeof t?t:o,s[1]=c;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15544:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var n=a(83117),o=a(67294),r=a(3905);const s={id:"transaction-status",title:"TransactionStatus",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api/enums/transaction-status",id:"api/enums/transaction-status",title:"TransactionStatus",description:"Transaction status",source:"@site/docs/api/enums/transaction-status.mdx",sourceDirName:"api/enums",slug:"/api/enums/transaction-status",permalink:"/docs/api/enums/transaction-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/transaction-status.mdx",tags:[],version:"current",frontMatter:{id:"transaction-status",title:"TransactionStatus",hide_table_of_contents:!1}},l={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>TransactionStatus.<b>Booked</b></code>",id:"code-style-fontweight-normal-transactionstatusbbookedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransactionStatus.<b>Rejected</b></code>",id:"code-style-fontweight-normal-transactionstatusbrejectedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransactionStatus.<b>Pending</b></code>",id:"code-style-fontweight-normal-transactionstatusbpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransactionStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-transactionstatusbcanceledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransactionStatus.<b>Upcoming</b></code>",id:"code-style-fontweight-normal-transactionstatusbupcomingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TransactionStatus.<b>Released</b></code>",id:"code-style-fontweight-normal-transactionstatusbreleasedbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=t=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+t.class},t.text)),f={toc:d,Bullet:u,SpecifiedBy:p,Badge:m},b="wrapper";function k(t){let{components:e,...a}=t;return(0,r.kt)(b,(0,n.Z)({},f,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Transaction status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum TransactionStatus {\n  Booked\n  Rejected\n  Pending\n  Canceled\n  Upcoming\n  Released\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionstatusbbookedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionStatus.",(0,r.kt)("b",null,"Booked")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the transaction is posted to the Swan book and impact the booked balance")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionstatusbrejectedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionStatus.",(0,r.kt)("b",null,"Rejected")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the transaction is rejected")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionstatusbpendingbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionStatus.",(0,r.kt)("b",null,"Pending")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the transaction is pending and the amount impact the available balance")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionstatusbcanceledbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionStatus.",(0,r.kt)("b",null,"Canceled")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when a pending transaction is canceled and the amount is released on the available balance")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionstatusbupcomingbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionStatus.",(0,r.kt)("b",null,"Upcoming")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the transaction is upcoming (scheduled credit transfer, direct debit ...)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionstatusbreleasedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionStatus.",(0,r.kt)("b",null,"Released")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when a card authorization is released after X days or fully consumed by X debits")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/booked-transaction-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"BookedTransactionStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/canceled-transaction-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"CanceledTransactionStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/pending-transaction-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PendingTransactionStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/rejected-transaction-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"RejectedTransactionStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/released-transaction-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"ReleasedTransactionStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/transactions-filters-input"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionsFiltersInput")),"  ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/transaction-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/upcoming-transaction-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"UpcomingTransactionStatusInfo")),"  ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);