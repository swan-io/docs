"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[54543],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(n),f=o,k=s["".concat(l,".").concat(f)]||s[f]||m[f]||c;return n?a.createElement(k,r(r({ref:t},p),{},{components:n})):a.createElement(k,r({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[s]="string"==typeof e?e:o,r[1]=i;for(var d=2;d<c;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},28397:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var a=n(83117),o=n(67294),c=n(3905);const r={id:"connection",title:"Connection",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/interfaces/connection",id:"api-reference/interfaces/connection",title:"Connection",description:"Relay Connection type, used to paginate list of element (Learn More)",source:"@site/docs/api-reference/interfaces/connection.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/connection",permalink:"/docs/api-reference/interfaces/connection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/connection.mdx",tags:[],version:"current",frontMatter:{id:"connection",title:"Connection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CompleteDigitalCardStatusInfo",permalink:"/docs/api-reference/interfaces/complete-digital-card-status-info"},next:{title:"DigitalCard",permalink:"/docs/api-reference/interfaces/digital-card"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Connection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-connectionbtotalcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Connection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-connectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Connection.<b>edges</b></code><Bullet /><code>[Edge!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-connectionbedgesbcodeedge--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],s=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),k={toc:p,Bullet:s,SpecifiedBy:m,Badge:f},y="wrapper";function u(e){let{components:t,...n}=e;return(0,c.kt)(y,(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Relay Connection type, used to paginate list of element (",(0,c.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"interface Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [Edge!]!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionbtotalcountbcodeint--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Connection.",(0,c.kt)("b",null,"totalCount"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Total number of element in the list")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionbpageinfobcodepageinfo--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Connection.",(0,c.kt)("b",null,"pageInfo"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/page-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Information about the current, the previous and the next page")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-connectionbedgesbcodeedge--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Connection.",(0,c.kt)("b",null,"edges"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/edge"},(0,c.kt)("inlineCode",{parentName:"a"},"[Edge!]!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Edge list")),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountHolderConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-membership-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountMembershipConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-case-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/card-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"CardConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/consent-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ConsentConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/digital-card-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"DigitalCardConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/external-account-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalAccountConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/external-balance-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalBalanceConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit-settings-change-request-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsChangeRequestConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-source-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingSourceConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/invoice-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"InvoiceConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/merchant-profile-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantProfileConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"OnboardingConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/payment-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"PaymentConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/payment-mandate-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"PaymentMandateConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/received-direct-debit-mandate-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/standing-order-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"StandingOrderConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/statement-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"StatementConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/supporting-document-collection-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/transaction-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"TransactionConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/user-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"UserConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/virtual-ibanentry-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"VirtualIBANEntryConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);