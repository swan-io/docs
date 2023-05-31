"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[26094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=l(n),f=i,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||a;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,c=new Array(a);c[0]=f;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[u]="string"==typeof e?e:i,c[1]=o;for(var l=2;l<a;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29644:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>o,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=n(83117),i=n(67294),a=n(3905);const c={id:"initiate-credit-transfers-input",title:"InitiateCreditTransfersInput",hide_table_of_contents:!1},o=void 0,s={unversionedId:"api-reference/inputs/initiate-credit-transfers-input",id:"api-reference/inputs/initiate-credit-transfers-input",title:"InitiateCreditTransfersInput",description:"Initiate credit transfers",source:"@site/docs/api-reference/inputs/initiate-credit-transfers-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/initiate-credit-transfers-input",permalink:"/api-reference/inputs/initiate-credit-transfers-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/initiate-credit-transfers-input.mdx",tags:[],version:"current",frontMatter:{id:"initiate-credit-transfers-input",title:"InitiateCreditTransfersInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"IndividualUltimateBeneficialOwnerInput",permalink:"/api-reference/inputs/individual-ultimate-beneficial-owner-input"},next:{title:"InitiateFundingRequestInput",permalink:"/api-reference/inputs/initiate-funding-request-input"}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateCreditTransfersInput.<b>accountNumber</b></code><Bullet /><code>AccountNumber</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiatecredittransfersinputbaccountnumberbcodeaccountnumber-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateCreditTransfersInput.<b>accountId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiatecredittransfersinputbaccountidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateCreditTransfersInput.<b>creditTransfers</b></code><Bullet /><code>[CreditTransferInput!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-initiatecredittransfersinputbcredittransfersbcodecredittransferinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InitiateCreditTransfersInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-initiatecredittransfersinputbconsentredirecturlbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:u,SpecifiedBy:p,Badge:f},b="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Initiate credit transfers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input InitiateCreditTransfersInput {\n  accountNumber: AccountNumber\n  accountId: ID\n  creditTransfers: [CreditTransferInput!]!\n  consentRedirectUrl: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-initiatecredittransfersinputbaccountnumberbcodeaccountnumber-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InitiateCreditTransfersInput.",(0,a.kt)("b",null,"accountNumber"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/account-number"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountNumber"))," ",(0,a.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"account to be debited identified by number")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-initiatecredittransfersinputbaccountidbcodeid-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InitiateCreditTransfersInput.",(0,a.kt)("b",null,"accountId"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,a.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"account id to be debited identified by id")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-initiatecredittransfersinputbcredittransfersbcodecredittransferinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InitiateCreditTransfersInput.",(0,a.kt)("b",null,"creditTransfers"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/inputs/credit-transfer-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[CreditTransferInput!]!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"credit transfers (max 250 records)")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-initiatecredittransfersinputbconsentredirecturlbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"InitiateCreditTransfersInput.",(0,a.kt)("b",null,"consentRedirectUrl"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/mutations/initiate-credit-transfers"},(0,a.kt)("inlineCode",{parentName:"a"},"initiateCreditTransfers")),"  ",(0,a.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);