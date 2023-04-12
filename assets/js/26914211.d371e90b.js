"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[32719],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,o=function(t,e){if(null==t)return{};var n,a,o={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=a.createContext({}),l=function(t){var e=a.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},u=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var n=t.components,o=t.mdxType,r=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||r;return n?a.createElement(m,s(s({ref:e},u),{},{components:n})):a.createElement(m,s({ref:e},u))}));function m(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var r=n.length,s=new Array(r);s[0]=f;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[p]="string"==typeof t?t:o,s[1]=i;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},57495:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var a=n(83117),o=n(67294),r=n(3905);const s={id:"upcoming-transaction-status-info",title:"UpcomingTransactionStatusInfo",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api/objects/upcoming-transaction-status-info",id:"api/objects/upcoming-transaction-status-info",title:"UpcomingTransactionStatusInfo",description:"Upcoming transaction status information",source:"@site/docs/api/objects/upcoming-transaction-status-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/upcoming-transaction-status-info",permalink:"/docs/api/objects/upcoming-transaction-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/upcoming-transaction-status-info.mdx",tags:[],version:"current",frontMatter:{id:"upcoming-transaction-status-info",title:"UpcomingTransactionStatusInfo",hide_table_of_contents:!1}},l={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpcomingTransactionStatusInfo.<b>status</b></code><Bullet /><code>TransactionStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-upcomingtransactionstatusinfobstatusbcodetransactionstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpcomingTransactionStatusInfo.<b>executionDate</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-upcomingtransactionstatusinfobexecutiondatebcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>TransactionStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"transactionstatusinfo-",level:4}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=t=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),f=t=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+t.class},t.text)),m={toc:u,Bullet:p,SpecifiedBy:d,Badge:f},g="wrapper";function y(t){let{components:e,...n}=t;return(0,r.kt)(g,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Upcoming transaction status information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpcomingTransactionStatusInfo implements TransactionStatusInfo {\n  status: TransactionStatus!\n  executionDate: DateTime!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-upcomingtransactionstatusinfobstatusbcodetransactionstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpcomingTransactionStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/transaction-status"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionStatus!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"status of the transaction")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-upcomingtransactionstatusinfobexecutiondatebcodedatetime--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpcomingTransactionStatusInfo.",(0,r.kt)("b",null,"executionDate"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The date when the transaction will be executed")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"transactionstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api/interfaces/transaction-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionStatusInfo"))," ",(0,r.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Transaction Status information")))}y.isMDXComponent=!0}}]);