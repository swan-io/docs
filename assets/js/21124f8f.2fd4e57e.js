"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[5810],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=i(n),b=r,y=m["".concat(c,".").concat(b)]||m[b]||p[b]||o;return n?a.createElement(y,l(l({ref:t},s),{},{components:n})):a.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=b;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[m]="string"==typeof e?e:r,l[1]=d;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},49946:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=n(83117),r=n(67294),o=n(3905);const l={id:"internal-payment-mandate-debtor",title:"InternalPaymentMandateDebtor",hide_table_of_contents:!1},d=void 0,c={unversionedId:"api-reference/objects/internal-payment-mandate-debtor",id:"api-reference/objects/internal-payment-mandate-debtor",title:"InternalPaymentMandateDebtor",description:"No description",source:"@site/docs/api-reference/objects/internal-payment-mandate-debtor.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/internal-payment-mandate-debtor",permalink:"/api-reference/objects/internal-payment-mandate-debtor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/internal-payment-mandate-debtor.mdx",tags:[],version:"current",frontMatter:{id:"internal-payment-mandate-debtor",title:"InternalPaymentMandateDebtor",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InternalPaymentMandateCreditor",permalink:"/api-reference/objects/internal-payment-mandate-creditor"},next:{title:"InternalReceivedDirectDebitMandateCreditor",permalink:"/api-reference/objects/internal-received-direct-debit-mandate-creditor"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateDebtor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentmandatedebtorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateDebtor.<b>email</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentmandatedebtorbemailbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateDebtor.<b>country</b></code><Bullet /><code>CCA3!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentmandatedebtorbcountrybcodecca3--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateDebtor.<b>address</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internalpaymentmandatedebtorbaddressbcodeaddress-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentMandateDebtor.<b>accountId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentmandatedebtorbaccountidbcodeid-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PaymentMandateDebtor</code> <Badge class="secondary" text="interface"/>',id:"paymentmandatedebtor-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:m,SpecifiedBy:p,Badge:b},u="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type InternalPaymentMandateDebtor implements PaymentMandateDebtor {\n  name: String!\n  email: String!\n  country: CCA3!\n  address: Address\n  accountId: ID\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatedebtorbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateDebtor.",(0,o.kt)("b",null,"name"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate debtor name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatedebtorbemailbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateDebtor.",(0,o.kt)("b",null,"email"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate debtor e-mail")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatedebtorbcountrybcodecca3--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateDebtor.",(0,o.kt)("b",null,"country"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/cca3"},(0,o.kt)("inlineCode",{parentName:"a"},"CCA3!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate debtor country")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatedebtorbaddressbcodeaddress-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateDebtor.",(0,o.kt)("b",null,"address"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate debtor address. Mandatory for non EEA Countries")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentmandatedebtorbaccountidbcodeid-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentMandateDebtor.",(0,o.kt)("b",null,"accountId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate debtor address. Mandatory for non EEA Countries")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"paymentmandatedebtor-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/payment-mandate-debtor"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentMandateDebtor"))," ",(0,o.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-payment-direct-debit-mandate"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalPaymentDirectDebitMandate")),"  ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);