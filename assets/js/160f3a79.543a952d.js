"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[72342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,s=r(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,b=u["".concat(l,".").concat(p)]||u[p]||f[p]||c;return n?a.createElement(b,o(o({ref:t},s),{},{components:n})):a.createElement(b,o({ref:t},s))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=n.length,o=new Array(c);o[0]=p;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[u]="string"==typeof e?e:i,o[1]=r;for(var d=2;d<c;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8179:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(83117),i=n(67294),c=n(3905);const o={id:"direct-debit-account-verification",title:"DirectDebitAccountVerification",hide_table_of_contents:!1},r=void 0,l={unversionedId:"api-reference/objects/direct-debit-account-verification",id:"api-reference/objects/direct-debit-account-verification",title:"DirectDebitAccountVerification",description:"Direct Debit Account Verification",source:"@site/docs/api-reference/objects/direct-debit-account-verification.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/direct-debit-account-verification",permalink:"/api-reference/objects/direct-debit-account-verification",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/direct-debit-account-verification.mdx",tags:[],version:"current",frontMatter:{id:"direct-debit-account-verification",title:"DirectDebitAccountVerification",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DigitalCardSuspendedStatusInfo",permalink:"/api-reference/objects/digital-card-suspended-status-info"},next:{title:"DirectDebitFundingSource",permalink:"/api-reference/objects/direct-debit-funding-source"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitAccountVerification.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-directdebitaccountverificationbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitAccountVerification.<b>iban</b></code><Bullet /><code>IBAN!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-directdebitaccountverificationbibanbcodeiban--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitAccountVerification.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-directdebitaccountverificationbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitAccountVerification.<b>statusInfo</b></code><Bullet /><code>AccountVerificationStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-directdebitaccountverificationbstatusinfobcodeaccountverificationstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitAccountVerification.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-directdebitaccountverificationbupdatedatbcodedatetime--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountVerification</code> <Badge class="secondary" text="interface"/>',id:"accountverification-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,c.kt)(i.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,c.kt)(i.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,c.kt)(i.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:u,SpecifiedBy:f,Badge:p},m="wrapper";function k(e){let{components:t,...n}=e;return(0,c.kt)(m,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Direct Debit Account Verification"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type DirectDebitAccountVerification implements AccountVerification {\n  createdAt: DateTime!\n  iban: IBAN!\n  id: ID!\n  statusInfo: AccountVerificationStatusInfo!\n  updatedAt: DateTime!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-directdebitaccountverificationbcreatedatbcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitAccountVerification.",(0,c.kt)("b",null,"createdAt"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Creation date of the account verification")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-directdebitaccountverificationbibanbcodeiban--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitAccountVerification.",(0,c.kt)("b",null,"iban"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/iban"},(0,c.kt)("inlineCode",{parentName:"a"},"IBAN!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"IBAN of the account to cross check with account holder information")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-directdebitaccountverificationbidbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitAccountVerification.",(0,c.kt)("b",null,"id"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Unique identifier of the Account Verification")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-directdebitaccountverificationbstatusinfobcodeaccountverificationstatusinfo--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitAccountVerification.",(0,c.kt)("b",null,"statusInfo"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/account-verification-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountVerificationStatusInfo!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Account Verification Status Information")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-directdebitaccountverificationbupdatedatbcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitAccountVerification.",(0,c.kt)("b",null,"updatedAt"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Last update date of the account verification")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"accountverification-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/account-verification"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountVerification"))," ",(0,c.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Account Verification")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/direct-debit-funding-source"},(0,c.kt)("inlineCode",{parentName:"a"},"DirectDebitFundingSource")),"  ",(0,c.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);