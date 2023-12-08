"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[73953],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(a),y=r,b=m["".concat(i,".").concat(y)]||m[y]||p[y]||d;return a?n.createElement(b,o(o({ref:t},s),{},{components:a})):n.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,o=new Array(d);o[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<d;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},86772:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>m,assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>y});var n=a(87462),r=a(67294),d=a(3905);const o={id:"internal-payment-mandate-creditor",title:"InternalPaymentMandateCreditor",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/objects/internal-payment-mandate-creditor",id:"api-reference/objects/internal-payment-mandate-creditor",title:"InternalPaymentMandateCreditor",description:"No description",source:"@site/docs/api-reference/objects/internal-payment-mandate-creditor.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/internal-payment-mandate-creditor",permalink:"/api-reference/objects/internal-payment-mandate-creditor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/internal-payment-mandate-creditor.mdx",tags:[],version:"current",frontMatter:{id:"internal-payment-mandate-creditor",title:"InternalPaymentMandateCreditor",hide_table_of_contents:!1}},c={},s=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateCreditor.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentmandatecreditorbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateCreditor.<b>identifier</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentmandatecreditorbidentifierbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateCreditor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentmandatecreditorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateCreditor.<b>address</b></code><Bullet /><code>Address!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-internalpaymentmandatecreditorbaddressbcodeaddress--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PaymentMandateCreditor</code> <Badge class="badge badge--secondary" text="interface"/>',id:"paymentmandatecreditor-",level:4},{value:"Member Of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[i,c]=(0,r.useState)(l);return(0,d.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},f={Bullet:s,SpecifiedBy:m,Badge:p,toc:y,Details:b},g="wrapper";function u(e){let{components:t,...a}=e;return(0,d.kt)(g,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type InternalPaymentMandateCreditor implements PaymentMandateCreditor {\n  id: ID!\n  identifier: ID!\n  name: String!\n  address: Address!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatecreditorbidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateCreditor.",(0,d.kt)("b",null,"id"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate creditor UUID")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatecreditorbidentifierbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateCreditor.",(0,d.kt)("b",null,"identifier"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate Creditor Idenfier")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatecreditorbnamebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateCreditor.",(0,d.kt)("b",null,"name"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate creditor name")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatecreditorbaddressbcodeaddress--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateCreditor.",(0,d.kt)("b",null,"address"))),(0,d.kt)(s,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/objects/address"},(0,d.kt)("inlineCode",{parentName:"a"},"Address!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate creditor address")),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"paymentmandatecreditor-"},(0,d.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/payment-mandate-creditor"},(0,d.kt)("inlineCode",{parentName:"a"},"PaymentMandateCreditor"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"member-of"},"Member Of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-payment-direct-debit-mandate"},(0,d.kt)("inlineCode",{parentName:"a"},"InternalPaymentDirectDebitMandate")),"  ",(0,d.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}u.isMDXComponent=!0}}]);