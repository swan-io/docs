"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[38574],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(n),p=o,g=u["".concat(l,".").concat(p)]||u[p]||f[p]||r;return n?a.createElement(g,c(c({ref:t},d),{},{components:n})):a.createElement(g,c({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<r;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},66243:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var a=n(87462),o=n(67294),r=n(3905);const c={id:"transaction-not-found-rejection",title:"TransactionNotFoundRejection",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/objects/transaction-not-found-rejection",id:"api-reference/objects/transaction-not-found-rejection",title:"TransactionNotFoundRejection",description:"Rejection returned if the transaction was not found",source:"@site/docs/api-reference/objects/transaction-not-found-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/transaction-not-found-rejection",permalink:"/api-reference/objects/transaction-not-found-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/transaction-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"transaction-not-found-rejection",title:"TransactionNotFoundRejection",hide_table_of_contents:!1}},s={},d=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionNotFoundRejection.<b>transactionId</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionnotfoundrejectionbtransactionidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>TransactionNotFoundRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-transactionnotfoundrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary" text="interface"/>',id:"rejection-",level:4}],g=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:i=!1}=e;const[l,s]=(0,o.useState)(i);return(0,r.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&c)},m={Bullet:d,SpecifiedBy:u,Badge:f,toc:p,Details:g},b="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Rejection returned if the transaction was not found"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type TransactionNotFoundRejection implements Rejection {\n  transactionId: ID!\n  message: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionnotfoundrejectionbtransactionidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionNotFoundRejection.",(0,r.kt)("b",null,"transactionId"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-transactionnotfoundrejectionbmessagebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"TransactionNotFoundRejection.",(0,r.kt)("b",null,"message"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"rejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}y.isMDXComponent=!0}}]);