"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[87930],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},d=Object.keys(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)a=d[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,d=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(a),y=r,f=m["".concat(l,".").concat(y)]||m[y]||p[y]||d;return a?n.createElement(f,o(o({ref:t},s),{},{components:a})):n.createElement(f,o({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=a.length,o=new Array(d);o[0]=y;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<d;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},6204:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=a(83117),r=a(67294),d=a(3905);const o={id:"sepapayment-mandate-creditor",title:"SEPAPaymentMandateCreditor",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api/objects/sepapayment-mandate-creditor",id:"api/objects/sepapayment-mandate-creditor",title:"SEPAPaymentMandateCreditor",description:"No description",source:"@site/docs/api/objects/sepapayment-mandate-creditor.mdx",sourceDirName:"api/objects",slug:"/api/objects/sepapayment-mandate-creditor",permalink:"/docs/api/objects/sepapayment-mandate-creditor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/sepapayment-mandate-creditor.mdx",tags:[],version:"current",frontMatter:{id:"sepapayment-mandate-creditor",title:"SEPAPaymentMandateCreditor",hide_table_of_contents:!1}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentMandateCreditor.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentmandatecreditorbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentMandateCreditor.<b>identifier</b></code><Bullet /><code>SepaCreditorIdentifier!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentmandatecreditorbidentifierbcodesepacreditoridentifier--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentMandateCreditor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentmandatecreditorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentMandateCreditor.<b>address</b></code><Bullet /><code>Address!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepapaymentmandatecreditorbaddressbcodeaddress--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PaymentMandateCreditor</code> <Badge class="secondary" text="interface"/>',id:"paymentmandatecreditor-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:m,SpecifiedBy:p,Badge:y},u="wrapper";function b(e){let{components:t,...a}=e;return(0,d.kt)(u,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"No description"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type SEPAPaymentMandateCreditor implements PaymentMandateCreditor {\n  id: ID!\n  identifier: SepaCreditorIdentifier!\n  name: String!\n  address: Address!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandatecreditorbidbcodeid--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateCreditor.",(0,d.kt)("b",null,"id"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,d.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate creditor UUID")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandatecreditorbidentifierbcodesepacreditoridentifier--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateCreditor.",(0,d.kt)("b",null,"identifier"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/sepa-creditor-identifier"},(0,d.kt)("inlineCode",{parentName:"a"},"SepaCreditorIdentifier!"))," ",(0,d.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate Sepa Creditor Idenfier (SCI)")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandatecreditorbnamebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateCreditor.",(0,d.kt)("b",null,"name"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate creditor name")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandatecreditorbaddressbcodeaddress--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateCreditor.",(0,d.kt)("b",null,"address"))),(0,d.kt)(m,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api/objects/address"},(0,d.kt)("inlineCode",{parentName:"a"},"Address!"))," ",(0,d.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate creditor address")),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"paymentmandatecreditor-"},(0,d.kt)("a",{parentName:"h4",href:"/api/interfaces/payment-mandate-creditor"},(0,d.kt)("inlineCode",{parentName:"a"},"PaymentMandateCreditor"))," ",(0,d.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api/objects/sepapayment-direct-debit-mandate"},(0,d.kt)("inlineCode",{parentName:"a"},"SEPAPaymentDirectDebitMandate")),"  ",(0,d.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);