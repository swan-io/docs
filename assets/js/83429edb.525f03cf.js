"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[53218],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=d(a),u=r,y=s["".concat(i,".").concat(u)]||s[u]||m[u]||c;return a?n.createElement(y,o(o({ref:t},p),{},{components:a})):n.createElement(y,o({ref:t},p))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[s]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<c;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},70781:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(83117),r=a(67294),c=a(3905);const o={id:"amount",title:"Amount",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/objects/amount",id:"api-reference/objects/amount",title:"Amount",description:"Amount with its currency",source:"@site/docs/api-reference/objects/amount.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/amount",permalink:"/api-reference/objects/amount",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/amount.mdx",tags:[],version:"current",frontMatter:{id:"amount",title:"Amount",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AlreadyValidPhysicalCardRejection",permalink:"/api-reference/objects/already-valid-physical-card-rejection"},next:{title:"ApplePayNotAllowedForProjectRejection",permalink:"/api-reference/objects/apple-pay-not-allowed-for-project-rejection"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Amount.<b>currency</b></code><Bullet /><code>Currency!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-amountbcurrencybcodecurrency--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Amount.<b>value</b></code><Bullet /><code>AmountValue!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-amountbvaluebcodeamountvalue--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:s,SpecifiedBy:m,Badge:u},f="wrapper";function k(e){let{components:t,...a}=e;return(0,c.kt)(f,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Amount with its currency"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type Amount {\n  currency: Currency!\n  value: AmountValue!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-amountbcurrencybcodecurrency--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Amount.",(0,c.kt)("b",null,"currency"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/currency"},(0,c.kt)("inlineCode",{parentName:"a"},"Currency!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"currency")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-amountbvaluebcodeamountvalue--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"Amount.",(0,c.kt)("b",null,"value"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/amount-value"},(0,c.kt)("inlineCode",{parentName:"a"},"AmountValue!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"value of the amount")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-balances"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountBalances")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-case"},(0,c.kt)("inlineCode",{parentName:"a"},"CapitalDepositCase")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/card-transaction"},(0,c.kt)("inlineCode",{parentName:"a"},"CardTransaction")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/check-transaction"},(0,c.kt)("inlineCode",{parentName:"a"},"CheckTransaction")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/external-account-balance"},(0,c.kt)("inlineCode",{parentName:"a"},"ExternalAccountBalance")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/fee-transaction"},(0,c.kt)("inlineCode",{parentName:"a"},"FeeTransaction")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingLimit")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/funding-limit-amount"},(0,c.kt)("inlineCode",{parentName:"a"},"FundingLimitAmount")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/instant-funding-limit"},(0,c.kt)("inlineCode",{parentName:"a"},"InstantFundingLimit")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-credit-transfer"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalCreditTransfer")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-transaction"},(0,c.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitTransaction")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/invoice"},(0,c.kt)("inlineCode",{parentName:"a"},"Invoice")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/merchant-profile"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantProfile")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/physical-card"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCard")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/sepacredit-transfer-transaction"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferTransaction")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/sepadirect-debit-transaction"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitTransaction")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/shareholder"},(0,c.kt)("inlineCode",{parentName:"a"},"Shareholder")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/spending"},(0,c.kt)("inlineCode",{parentName:"a"},"Spending")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/spending-limit"},(0,c.kt)("inlineCode",{parentName:"a"},"SpendingLimit")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/standing-order"},(0,c.kt)("inlineCode",{parentName:"a"},"StandingOrder")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/statement"},(0,c.kt)("inlineCode",{parentName:"a"},"Statement")),"  ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/transaction"},(0,c.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,c.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);