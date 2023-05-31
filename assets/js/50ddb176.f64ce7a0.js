"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[71292],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(d,".").concat(b)]||u[b]||f[b]||i;return n?a.createElement(m,c(c({ref:t},s),{},{components:n})):a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=b;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:r,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},5571:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>s});var a=n(83117),r=n(67294),i=n(3905);const c={id:"direct-debit-funding-source",title:"DirectDebitFundingSource",hide_table_of_contents:!1},o=void 0,d={unversionedId:"api-reference/objects/direct-debit-funding-source",id:"api-reference/objects/direct-debit-funding-source",title:"DirectDebitFundingSource",description:"Funding Source with Direct Debit Mandate",source:"@site/docs/api-reference/objects/direct-debit-funding-source.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/direct-debit-funding-source",permalink:"/api-reference/objects/direct-debit-funding-source",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/direct-debit-funding-source.mdx",tags:[],version:"current",frontMatter:{id:"direct-debit-funding-source",title:"DirectDebitFundingSource",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DirectDebitAccountVerification",permalink:"/api-reference/objects/direct-debit-account-verification"},next:{title:"DisableAccountMembershipSuccessPayload",permalink:"/api-reference/objects/disable-account-membership-success-payload"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitFundingSource.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-directdebitfundingsourcebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitFundingSource.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-directdebitfundingsourcebnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitFundingSource.<b>statusInfo</b></code><Bullet /><code>FundingSourceStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-directdebitfundingsourcebstatusinfobcodefundingsourcestatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitFundingSource.<b>iban</b></code><Bullet /><code>IBAN!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-directdebitfundingsourcebibanbcodeiban--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitFundingSource.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-directdebitfundingsourcebcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitFundingSource.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-directdebitfundingsourcebupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitFundingSource.<b>accountVerification</b></code><Bullet /><code>DirectDebitAccountVerification!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-directdebitfundingsourcebaccountverificationbcodedirectdebitaccountverification--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DirectDebitFundingSource.<b>paymentMandate</b></code><Bullet /><code>PaymentDirectDebitMandate!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-directdebitfundingsourcebpaymentmandatebcodepaymentdirectdebitmandate--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FundingSource</code> <Badge class="secondary" text="interface"/>',id:"fundingsource-",level:4}],u=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:f,Badge:b},p="wrapper";function g(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Funding Source with Direct Debit Mandate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type DirectDebitFundingSource implements FundingSource {\n  id: ID!\n  name: String\n  statusInfo: FundingSourceStatusInfo!\n  iban: IBAN!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  accountVerification: DirectDebitAccountVerification!\n  paymentMandate: PaymentDirectDebitMandate!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-directdebitfundingsourcebidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitFundingSource.",(0,i.kt)("b",null,"id"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"ID of the Funding Source")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-directdebitfundingsourcebnamebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitFundingSource.",(0,i.kt)("b",null,"name"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Name of the Funding Source")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-directdebitfundingsourcebstatusinfobcodefundingsourcestatusinfo--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitFundingSource.",(0,i.kt)("b",null,"statusInfo"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/funding-source-status-info"},(0,i.kt)("inlineCode",{parentName:"a"},"FundingSourceStatusInfo!"))," ",(0,i.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Funding Source status information")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-directdebitfundingsourcebibanbcodeiban--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitFundingSource.",(0,i.kt)("b",null,"iban"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/iban"},(0,i.kt)("inlineCode",{parentName:"a"},"IBAN!"))," ",(0,i.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"IBAN to use in the direct debit transaction that will be triggered when funding the account.\nMoney will be debited from this IBAN when an ",(0,i.kt)("inlineCode",{parentName:"p"},"initiateFundingRequest")," is done using this funding source")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-directdebitfundingsourcebcreatedatbcodedatetime--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitFundingSource.",(0,i.kt)("b",null,"createdAt"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,i.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Created date")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-directdebitfundingsourcebupdatedatbcodedatetime--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitFundingSource.",(0,i.kt)("b",null,"updatedAt"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,i.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Last updated date")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-directdebitfundingsourcebaccountverificationbcodedirectdebitaccountverification--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitFundingSource.",(0,i.kt)("b",null,"accountVerification"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/objects/direct-debit-account-verification"},(0,i.kt)("inlineCode",{parentName:"a"},"DirectDebitAccountVerification!"))," ",(0,i.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Can be queried to check the status of the account verification for this funding source.\nIf the account verification is PendingVerification, you should ask your account holder to wire some money from his external account to any swan account")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-directdebitfundingsourcebpaymentmandatebcodepaymentdirectdebitmandate--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"DirectDebitFundingSource.",(0,i.kt)("b",null,"paymentMandate"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/payment-direct-debit-mandate"},(0,i.kt)("inlineCode",{parentName:"a"},"PaymentDirectDebitMandate!"))," ",(0,i.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Can be queried to check the status of payment payment Mandate.\nIf the payment mandate is ConsentPending, you should confirm it to enable this funding source")),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"fundingsource-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/funding-source"},(0,i.kt)("inlineCode",{parentName:"a"},"FundingSource"))," ",(0,i.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Funding Source")))}g.isMDXComponent=!0}}]);