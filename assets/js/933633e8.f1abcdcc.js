"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[3459],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=l(n),p=r,g=u["".concat(c,".").concat(p)]||u[p]||f[p]||o;return n?a.createElement(g,s(s({ref:t},d),{},{components:n})):a.createElement(g,s({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},33106:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=n(87462),r=n(67294),o=n(3905);const s={id:"pending-transaction-status-info",title:"PendingTransactionStatusInfo",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api-reference/objects/pending-transaction-status-info",id:"api-reference/objects/pending-transaction-status-info",title:"PendingTransactionStatusInfo",description:"Pending transaction status information",source:"@site/docs/api-reference/objects/pending-transaction-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/pending-transaction-status-info",permalink:"/api-reference/objects/pending-transaction-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/pending-transaction-status-info.mdx",tags:[],version:"current",frontMatter:{id:"pending-transaction-status-info",title:"PendingTransactionStatusInfo",hide_table_of_contents:!1}},l={},d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PendingTransactionStatusInfo.<b>status</b></code><Bullet /><code>TransactionStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-pendingtransactionstatusinfobstatusbcodetransactionstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PendingTransactionStatusInfo.<b>pendingEndDate</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-pendingtransactionstatusinfobpendingenddatebcodedatetime-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>TransactionStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"transactionstatusinfo-",level:4}],g=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:i=!1}=e;const[c,l]=(0,r.useState)(i);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&s)},m={Bullet:d,SpecifiedBy:u,Badge:f,toc:p,Details:g},b="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Pending transaction status information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PendingTransactionStatusInfo implements TransactionStatusInfo {\n  status: TransactionStatus!\n  pendingEndDate: DateTime\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pendingtransactionstatusinfobstatusbcodetransactionstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PendingTransactionStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/transaction-status"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionStatus!"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"status of the transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pendingtransactionstatusinfobpendingenddatebcodedatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PendingTransactionStatusInfo.",(0,o.kt)("b",null,"pendingEndDate"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The date when the pending amount of this transaction is released on the available balance of this account if not booked")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"transactionstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionStatusInfo"))," ",(0,o.kt)(f,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Transaction Status information")))}y.isMDXComponent=!0}}]);