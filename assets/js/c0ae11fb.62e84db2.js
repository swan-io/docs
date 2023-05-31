"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[8719],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=d(r),p=o,m=u["".concat(l,".").concat(p)]||u[p]||f[p]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},43014:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=r(83117),o=r(67294),a=r(3905);const c={id:"fee-out-creditor",title:"FeeOutCreditor",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/objects/fee-out-creditor",id:"api-reference/objects/fee-out-creditor",title:"FeeOutCreditor",description:"Fee creditor for Outgoing transaction",source:"@site/docs/api-reference/objects/fee-out-creditor.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/fee-out-creditor",permalink:"/api-reference/objects/fee-out-creditor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/fee-out-creditor.mdx",tags:[],version:"current",frontMatter:{id:"fee-out-creditor",title:"FeeOutCreditor",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FeeInDebtor",permalink:"/api-reference/objects/fee-in-debtor"},next:{title:"FeeOutDebtor",permalink:"/api-reference/objects/fee-out-debtor"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FeeOutCreditor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-feeoutcreditorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FeeOutCreditor.<b>accountNumber</b></code><Bullet /><code>AccountNumber!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-feeoutcreditorbaccountnumberbcodeaccountnumber--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FeeCreditor</code> <Badge class="secondary" text="interface"/>',id:"feecreditor-",level:4}],u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:f,Badge:p},b="wrapper";function y(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Fee creditor for Outgoing transaction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type FeeOutCreditor implements FeeCreditor {\n  name: String!\n  accountNumber: AccountNumber!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-feeoutcreditorbnamebcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"FeeOutCreditor.",(0,a.kt)("b",null,"name"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"full name of the creditor")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-feeoutcreditorbaccountnumberbcodeaccountnumber--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"FeeOutCreditor.",(0,a.kt)("b",null,"accountNumber"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/account-number"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountNumber!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"account number")),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"feecreditor-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/fee-creditor"},(0,a.kt)("inlineCode",{parentName:"a"},"FeeCreditor"))," ",(0,a.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Fee creditor")))}y.isMDXComponent=!0}}]);