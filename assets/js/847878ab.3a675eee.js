"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[15052],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),l=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(o.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),c=l(n),g=a,m=c["".concat(o,".").concat(g)]||c[g]||p[g]||r;return n?i.createElement(m,d(d({ref:t},s),{},{components:n})):i.createElement(m,d({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,d=new Array(r);d[0]=g;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u[c]="string"==typeof e?e:a,d[1]=u;for(var l=2;l<r;l++)d[l]=n[l];return i.createElement.apply(null,d)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},1640:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>c,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>u,default:()=>h,frontMatter:()=>d,metadata:()=>o,toc:()=>s});var i=n(83117),a=n(67294),r=n(3905);const d={id:"add-funding-limit-settings-change-request-input",title:"AddFundingLimitSettingsChangeRequestInput",hide_table_of_contents:!1},u=void 0,o={unversionedId:"api-reference/inputs/add-funding-limit-settings-change-request-input",id:"api-reference/inputs/add-funding-limit-settings-change-request-input",title:"AddFundingLimitSettingsChangeRequestInput",description:"Inputs to add a new request for funding limit settings change",source:"@site/docs/api-reference/inputs/add-funding-limit-settings-change-request-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/add-funding-limit-settings-change-request-input",permalink:"/api-reference/inputs/add-funding-limit-settings-change-request-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/add-funding-limit-settings-change-request-input.mdx",tags:[],version:"current",frontMatter:{id:"add-funding-limit-settings-change-request-input",title:"AddFundingLimitSettingsChangeRequestInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddExternalAccountInput",permalink:"/api-reference/inputs/add-external-account-input"},next:{title:"AddInternalDirectDebitPaymentMandateInput",permalink:"/api-reference/inputs/add-internal-direct-debit-payment-mandate-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddFundingLimitSettingsChangeRequestInput.<b>instantFundingLimit</b></code><Bullet /><code>FundingLimitAmountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestinputbinstantfundinglimitbcodefundinglimitamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddFundingLimitSettingsChangeRequestInput.<b>fundingLimit</b></code><Bullet /><code>FundingLimitAmountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestinputbfundinglimitbcodefundinglimitamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddFundingLimitSettingsChangeRequestInput.<b>accountHolderId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestinputbaccountholderidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],c=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:c,SpecifiedBy:p,Badge:g},f="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Inputs to add a new request for funding limit settings change"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddFundingLimitSettingsChangeRequestInput {\n  instantFundingLimit: FundingLimitAmountInput!\n  fundingLimit: FundingLimitAmountInput!\n  accountHolderId: ID!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestinputbinstantfundinglimitbcodefundinglimitamountinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddFundingLimitSettingsChangeRequestInput.",(0,r.kt)("b",null,"instantFundingLimit"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/funding-limit-amount-input"},(0,r.kt)("inlineCode",{parentName:"a"},"FundingLimitAmountInput!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Requested amount settings for the instant funding limit")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestinputbfundinglimitbcodefundinglimitamountinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddFundingLimitSettingsChangeRequestInput.",(0,r.kt)("b",null,"fundingLimit"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/funding-limit-amount-input"},(0,r.kt)("inlineCode",{parentName:"a"},"FundingLimitAmountInput!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Requested amount settings for the funding limit")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addfundinglimitsettingschangerequestinputbaccountholderidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddFundingLimitSettingsChangeRequestInput.",(0,r.kt)("b",null,"accountHolderId"))),(0,r.kt)(c,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unique identifier of a given account holder")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-funding-limit-settings-change-request"},(0,r.kt)("inlineCode",{parentName:"a"},"addFundingLimitSettingsChangeRequest")),"  ",(0,r.kt)(g,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);