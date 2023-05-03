"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[33308],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),d=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=d(e.components);return n.createElement(l.Provider,{value:r},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=d(t),u=a,m=f["".concat(l,".").concat(u)]||f[u]||p[u]||i;return t?n.createElement(m,c(c({ref:r},s),{},{components:t})):n.createElement(m,c({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=u;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o[f]="string"==typeof e?e:a,c[1]=o;for(var d=2;d<i;d++)c[d]=t[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},83252:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>u,Bullet:()=>f,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var n=t(83117),a=t(67294),i=t(3905);const c={id:"internal-credit-transfer-creditor",title:"InternalCreditTransferCreditor",hide_table_of_contents:!1},o=void 0,l={unversionedId:"api-reference/interfaces/internal-credit-transfer-creditor",id:"api-reference/interfaces/internal-credit-transfer-creditor",title:"InternalCreditTransferCreditor",description:"Internal Credit Transfer creditor",source:"@site/docs/api-reference/interfaces/internal-credit-transfer-creditor.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/internal-credit-transfer-creditor",permalink:"/docs/api-reference/interfaces/internal-credit-transfer-creditor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/internal-credit-transfer-creditor.mdx",tags:[],version:"current",frontMatter:{id:"internal-credit-transfer-creditor",title:"InternalCreditTransferCreditor",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"IndividualUltimateBeneficialOwnerInfo",permalink:"/docs/api-reference/interfaces/individual-ultimate-beneficial-owner-info"},next:{title:"InternalCreditTransferDebtor",permalink:"/docs/api-reference/interfaces/internal-credit-transfer-debtor"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InternalCreditTransferCreditor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalcredittransfercreditorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalCreditTransferCreditor.<b>accountNumber</b></code><Bullet /><code>AccountNumber!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalcredittransfercreditorbaccountnumberbcodeaccountnumber--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],f=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:f,SpecifiedBy:p,Badge:u},b="wrapper";function y(e){let{components:r,...t}=e;return(0,i.kt)(b,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Internal Credit Transfer creditor"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface InternalCreditTransferCreditor {\n  name: String!\n  accountNumber: AccountNumber!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-internalcredittransfercreditorbnamebcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InternalCreditTransferCreditor.",(0,i.kt)("b",null,"name"))),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"full name of the Creditor")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-internalcredittransfercreditorbaccountnumberbcodeaccountnumber--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"InternalCreditTransferCreditor.",(0,i.kt)("b",null,"accountNumber"))),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/account-number"},(0,i.kt)("inlineCode",{parentName:"a"},"AccountNumber!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"account number")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-credit-transfer"},(0,i.kt)("inlineCode",{parentName:"a"},"InternalCreditTransfer")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-credit-transfer-in-creditor"},(0,i.kt)("inlineCode",{parentName:"a"},"InternalCreditTransferInCreditor")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,i.kt)(f,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-credit-transfer-out-creditor"},(0,i.kt)("inlineCode",{parentName:"a"},"InternalCreditTransferOutCreditor")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);