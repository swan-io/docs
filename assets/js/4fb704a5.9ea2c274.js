"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[12743],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},i="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),i=d(n),p=o,m=i["".concat(s,".").concat(p)]||i[p]||f[p]||r;return n?a.createElement(m,c(c({ref:t},u),{},{components:n})):a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[i]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<r;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},30572:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>i,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=n(87462),o=n(67294),r=n(3905);const c={id:"account-holder-canceled-status-info",title:"AccountHolderCanceledStatusInfo",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/objects/account-holder-canceled-status-info",id:"api-reference/objects/account-holder-canceled-status-info",title:"AccountHolderCanceledStatusInfo",description:"Account Holder Canceled Status Information",source:"@site/docs/api-reference/objects/account-holder-canceled-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-holder-canceled-status-info",permalink:"/api-reference/objects/account-holder-canceled-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-holder-canceled-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-holder-canceled-status-info",title:"AccountHolderCanceledStatusInfo",hide_table_of_contents:!1}},d={},u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCanceledStatusInfo.<b>status</b></code><Bullet /><code>AccountHolderStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholdercanceledstatusinfobstatusbcodeaccountholderstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderCanceledStatusInfo.<b>reason</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholdercanceledstatusinfobreasonbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountHolderStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"accountholderstatusinfo-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[s,d]=(0,o.useState)(l);return(0,r.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&c)},b={Bullet:u,SpecifiedBy:i,Badge:f,toc:p,Details:m},g="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Account Holder Canceled Status Information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountHolderCanceledStatusInfo implements AccountHolderStatusInfo {\n  status: AccountHolderStatus!\n  reason: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountholdercanceledstatusinfobstatusbcodeaccountholderstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCanceledStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-holder-status"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolderStatus!"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Status of the account holder.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountholdercanceledstatusinfobreasonbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderCanceledStatusInfo.",(0,r.kt)("b",null,"reason"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Reason why the account holder is suspended.")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"accountholderstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/account-holder-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolderStatusInfo"))," ",(0,r.kt)(f,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account Holder Status Information")))}y.isMDXComponent=!0}}]);