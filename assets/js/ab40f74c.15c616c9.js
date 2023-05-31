"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[98365],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=d(n),f=i,m=c["".concat(u,".").concat(f)]||c[f]||p[f]||r;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[c]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},61598:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>c,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>u,toc:()=>s});var a=n(83117),i=n(67294),r=n(3905);const o={id:"initiate-funding-request-input",title:"InitiateFundingRequestInput",hide_table_of_contents:!1},l=void 0,u={unversionedId:"api-reference/inputs/initiate-funding-request-input",id:"api-reference/inputs/initiate-funding-request-input",title:"InitiateFundingRequestInput",description:"Input to initiate a funding request",source:"@site/docs/api-reference/inputs/initiate-funding-request-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/initiate-funding-request-input",permalink:"/api-reference/inputs/initiate-funding-request-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/initiate-funding-request-input.mdx",tags:[],version:"current",frontMatter:{id:"initiate-funding-request-input",title:"InitiateFundingRequestInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InitiateCreditTransfersInput",permalink:"/api-reference/inputs/initiate-credit-transfers-input"},next:{title:"InitiateMerchantPaymentCollectionInput",permalink:"/api-reference/inputs/initiate-merchant-payment-collection-input"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateFundingRequestInput.<b>fundingSourceId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiatefundingrequestinputbfundingsourceidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateFundingRequestInput.<b>amount</b></code><Bullet /><code>AmountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-initiatefundingrequestinputbamountbcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateFundingRequestInput.<b>reference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiatefundingrequestinputbreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateFundingRequestInput.<b>label</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiatefundingrequestinputblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateFundingRequestInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiatefundingrequestinputbconsentredirecturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateFundingRequestInput.<b>requestedExecutionAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiatefundingrequestinputbrequestedexecutionatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateFundingRequestInput.<b>isInstant</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiatefundingrequestinputbisinstantbcodeboolean-",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:c,SpecifiedBy:p,Badge:f},g="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Input to initiate a funding request"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input InitiateFundingRequestInput {\n  fundingSourceId: ID!\n  amount: AmountInput!\n  reference: String\n  label: String\n  consentRedirectUrl: String!\n  requestedExecutionAt: DateTime\n  isInstant: Boolean\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-initiatefundingrequestinputbfundingsourceidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"InitiateFundingRequestInput.",(0,r.kt)("b",null,"fundingSourceId"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ID of the funding source to be used to fund the concerned account")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-initiatefundingrequestinputbamountbcodeamountinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"InitiateFundingRequestInput.",(0,r.kt)("b",null,"amount"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Amount of the requested funding, i.e. amount that will credit the concerned Swan account and debit the external funding source.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-initiatefundingrequestinputbreferencebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"InitiateFundingRequestInput.",(0,r.kt)("b",null,"reference"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Reference of the funding request that will be shown on the account holder statement and on the debtor account used.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-initiatefundingrequestinputblabelbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"InitiateFundingRequestInput.",(0,r.kt)("b",null,"label"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Label of the funding request that will be shown on the account holder statement and on the debtor account used\nAlways starts with 'Partner Name' truncated at 19 characters followed by a space.\nIf empty, default label is \"Partner Name - Account Holder Name\".")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-initiatefundingrequestinputbconsentredirecturlbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"InitiateFundingRequestInput.",(0,r.kt)("b",null,"consentRedirectUrl"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Url to which the authorized account member must be redirected once the consent has been finalized.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-initiatefundingrequestinputbrequestedexecutionatbcodedatetime-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"InitiateFundingRequestInput.",(0,r.kt)("b",null,"requestedExecutionAt"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,r.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the funding request should be executed. If ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", it will be executed as soon as possible.\nIt is not possible to define this value when the option ",(0,r.kt)("inlineCode",{parentName:"p"},"isInstant")," is set to true.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-initiatefundingrequestinputbisinstantbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"InitiateFundingRequestInput.",(0,r.kt)("b",null,"isInstant"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("em",{parentName:"p"},"SOON TO BE DEPRECATED"),"\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," the funds should be available immediately. If ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),", the funds will be available\nafter the resolution of the credit transaction.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/initiate-funding-request"},(0,r.kt)("inlineCode",{parentName:"a"},"initiateFundingRequest")),"  ",(0,r.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);