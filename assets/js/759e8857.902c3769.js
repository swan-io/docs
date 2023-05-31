"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[74398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,b=p["".concat(o,".").concat(m)]||p[m]||f[m]||i;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=m;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[p]="string"==typeof e?e:a,c[1]=d;for(var l=2;l<i;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58651:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>d,default:()=>y,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var n=r(83117),a=r(67294),i=r(3905);const c={id:"sepadirect-debit-mandate",title:"SEPADirectDebitMandate",hide_table_of_contents:!1},d=void 0,o={unversionedId:"api-reference/interfaces/sepadirect-debit-mandate",id:"api-reference/interfaces/sepadirect-debit-mandate",title:"SEPADirectDebitMandate",description:"No description",source:"@site/docs/api-reference/interfaces/sepadirect-debit-mandate.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/sepadirect-debit-mandate",permalink:"/api-reference/interfaces/sepadirect-debit-mandate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/sepadirect-debit-mandate.mdx",tags:[],version:"current",frontMatter:{id:"sepadirect-debit-mandate",title:"SEPADirectDebitMandate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SEPADirectDebitDebtor",permalink:"/api-reference/interfaces/sepadirect-debit-debtor"},next:{title:"StandingOrderStatusInfo",permalink:"/api-reference/interfaces/standing-order-status-info"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPADirectDebitMandate.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepadirectdebitmandatebidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:p,SpecifiedBy:f,Badge:m},u="wrapper";function y(e){let{components:t,...r}=e;return(0,i.kt)(u,(0,n.Z)({},b,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface SEPADirectDebitMandate {\n  id: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-sepadirectdebitmandatebidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"SEPADirectDebitMandate.",(0,i.kt)("b",null,"id"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unique identifier of the received direct debit mandate, generated by Swan")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/sepadirect-debit-transaction"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitTransaction")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/sepapayment-direct-debit-mandate"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPAPaymentDirectDebitMandate")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/separeceived-direct-debit-mandate"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPAReceivedDirectDebitMandate")),"  ",(0,i.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);