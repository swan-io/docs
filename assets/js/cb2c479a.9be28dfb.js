"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[73080],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(a),b=r,y=m["".concat(c,".").concat(b)]||m[b]||p[b]||o;return a?n.createElement(y,d(d({ref:t},i),{},{components:a})):n.createElement(y,d({ref:t},i))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,d=new Array(o);d[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:r,d[1]=l;for(var s=2;s<o;s++)d[s]=a[s];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},53258:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>c,toc:()=>i});var n=a(83117),r=a(67294),o=a(3905);const d={id:"sepapayment-mandate-debtor",title:"SEPAPaymentMandateDebtor",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/objects/sepapayment-mandate-debtor",id:"api-reference/objects/sepapayment-mandate-debtor",title:"SEPAPaymentMandateDebtor",description:"No description",source:"@site/docs/api-reference/objects/sepapayment-mandate-debtor.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/sepapayment-mandate-debtor",permalink:"/api-reference/objects/sepapayment-mandate-debtor",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/sepapayment-mandate-debtor.mdx",tags:[],version:"current",frontMatter:{id:"sepapayment-mandate-debtor",title:"SEPAPaymentMandateDebtor",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SEPAPaymentMandateCreditor",permalink:"/api-reference/objects/sepapayment-mandate-creditor"},next:{title:"SEPAReceivedDirectDebitMandateCreditor",permalink:"/api-reference/objects/separeceived-direct-debit-mandate-creditor"}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentMandateDebtor.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentmandatedebtorbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentMandateDebtor.<b>iban</b></code><Bullet /><code>IBAN!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentmandatedebtorbibanbcodeiban--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentMandateDebtor.<b>email</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentmandatedebtorbemailbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentMandateDebtor.<b>country</b></code><Bullet /><code>CCA3!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepapaymentmandatedebtorbcountrybcodecca3--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAPaymentMandateDebtor.<b>address</b></code><Bullet /><code>Address</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepapaymentmandatedebtorbaddressbcodeaddress-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>PaymentMandateDebtor</code> <Badge class="secondary" text="interface"/>',id:"paymentmandatedebtor-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:m,SpecifiedBy:p,Badge:b},u="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SEPAPaymentMandateDebtor implements PaymentMandateDebtor {\n  name: String!\n  iban: IBAN!\n  email: String!\n  country: CCA3!\n  address: Address\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandatedebtorbnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateDebtor.",(0,o.kt)("b",null,"name"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate debtor name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandatedebtorbibanbcodeiban--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateDebtor.",(0,o.kt)("b",null,"iban"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/iban"},(0,o.kt)("inlineCode",{parentName:"a"},"IBAN!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate debtor IBAN")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandatedebtorbemailbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateDebtor.",(0,o.kt)("b",null,"email"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate debtor e-mail")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandatedebtorbcountrybcodecca3--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateDebtor.",(0,o.kt)("b",null,"country"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/cca3"},(0,o.kt)("inlineCode",{parentName:"a"},"CCA3!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate debtor country")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepapaymentmandatedebtorbaddressbcodeaddress-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPAPaymentMandateDebtor.",(0,o.kt)("b",null,"address"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/address"},(0,o.kt)("inlineCode",{parentName:"a"},"Address"))," ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"SEPA Direct Debit Payment Mandate debtor address. Mandatory for non EEA Countries")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"paymentmandatedebtor-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/payment-mandate-debtor"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentMandateDebtor"))," ",(0,o.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/sepapayment-direct-debit-mandate"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPAPaymentDirectDebitMandate")),"  ",(0,o.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);