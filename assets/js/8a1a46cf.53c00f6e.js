"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79916],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(a),p=r,m=u["".concat(i,".").concat(p)]||u[p]||f[p]||s;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},36201:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(83117),r=a(67294),s=a(3905);const o={id:"released-transaction-status-info",title:"ReleasedTransactionStatusInfo",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/objects/released-transaction-status-info",id:"api-reference/objects/released-transaction-status-info",title:"ReleasedTransactionStatusInfo",description:"Released card transaction status information",source:"@site/docs/api-reference/objects/released-transaction-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/released-transaction-status-info",permalink:"/api-reference/objects/released-transaction-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/released-transaction-status-info.mdx",tags:[],version:"current",frontMatter:{id:"released-transaction-status-info",title:"ReleasedTransactionStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RejectedVerificationStatusInfo",permalink:"/api-reference/objects/rejected-verification-status-info"},next:{title:"ReportExchangeRate",permalink:"/api-reference/objects/report-exchange-rate"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ReleasedTransactionStatusInfo.<b>status</b></code><Bullet /><code>TransactionStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-releasedtransactionstatusinfobstatusbcodetransactionstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReleasedTransactionStatusInfo.<b>releaseDate</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-releasedtransactionstatusinfobreleasedatebcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>TransactionStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"transactionstatusinfo-",level:4}],u=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:f,Badge:p},y="wrapper";function b(e){let{components:t,...a}=e;return(0,s.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Released card transaction status information"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type ReleasedTransactionStatusInfo implements TransactionStatusInfo {\n  status: TransactionStatus!\n  releaseDate: DateTime!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-releasedtransactionstatusinfobstatusbcodetransactionstatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ReleasedTransactionStatusInfo.",(0,s.kt)("b",null,"status"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/enums/transaction-status"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionStatus!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"status of the transaction")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-releasedtransactionstatusinfobreleasedatebcodedatetime--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"ReleasedTransactionStatusInfo.",(0,s.kt)("b",null,"releaseDate"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,s.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,s.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The date when the transaction was released")),(0,s.kt)("h3",{id:"interfaces"},"Interfaces"),(0,s.kt)("h4",{id:"transactionstatusinfo-"},(0,s.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"TransactionStatusInfo"))," ",(0,s.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Transaction Status information")))}b.isMDXComponent=!0}}]);