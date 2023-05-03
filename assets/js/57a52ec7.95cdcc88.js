"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[37501],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>p});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),i=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=i(a),b=r,p=m["".concat(c,".").concat(b)]||m[b]||y[b]||l;return a?n.createElement(p,d(d({ref:t},s),{},{components:a})):n.createElement(p,d({ref:t},s))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,d=new Array(l);d[0]=b;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[m]="string"==typeof e?e:r,d[1]=o;for(var i=2;i<l;i++)d[i]=a[i];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},10575:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>m,SpecifiedBy:()=>y,assets:()=>i,contentTitle:()=>o,default:()=>k,frontMatter:()=>d,metadata:()=>c,toc:()=>s});var n=a(83117),r=a(67294),l=a(3905);const d={id:"internal-payment-direct-debit-mandate",title:"InternalPaymentDirectDebitMandate",hide_table_of_contents:!1},o=void 0,c={unversionedId:"api-reference/objects/internal-payment-direct-debit-mandate",id:"api-reference/objects/internal-payment-direct-debit-mandate",title:"InternalPaymentDirectDebitMandate",description:"Payment direct debit mandate for Internal",source:"@site/docs/api-reference/objects/internal-payment-direct-debit-mandate.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/internal-payment-direct-debit-mandate",permalink:"/docs/api-reference/objects/internal-payment-direct-debit-mandate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/internal-payment-direct-debit-mandate.mdx",tags:[],version:"current",frontMatter:{id:"internal-payment-direct-debit-mandate",title:"InternalPaymentDirectDebitMandate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InternalErrorRejection",permalink:"/docs/api-reference/objects/internal-error-rejection"},next:{title:"InternalPaymentMandateCreditor",permalink:"/docs/api-reference/objects/internal-payment-mandate-creditor"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>reference</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebreferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>scheme</b></code><Bullet /><code>InternalPaymentMandateScheme!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebschemebcodeinternalpaymentmandatescheme--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>statusInfo</b></code><Bullet /><code>PaymentMandateStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebstatusinfobcodepaymentmandatestatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>sequence</b></code><Bullet /><code>InternalPaymentMandateSequence!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebsequencebcodeinternalpaymentmandatesequence--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>mandateDocumentUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebmandatedocumenturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>debtor</b></code><Bullet /><code>InternalPaymentMandateDebtor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebdebtorbcodeinternalpaymentmandatedebtor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>ultimateCreditorName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebultimatecreditornamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>creditor</b></code><Bullet /><code>InternalPaymentMandateCreditor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebcreditorbcodeinternalpaymentmandatecreditor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>signatureDate</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebsignaturedatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>executedAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebexecutedatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>expiredAt</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebexpiredatbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>accountHolder</b></code><Bullet /><code>AccountHolder!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebaccountholderbcodeaccountholder--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>language</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandateblanguagebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.<b>transactions</b></code><Bullet /><code>TransactionConnection</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebtransactionsbcodetransactionconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.transactions.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatetransactionsbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>InternalPaymentDirectDebitMandate.transactions.<b>filters</b></code><Bullet /><code>TransactionsFiltersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatetransactionsbfiltersbcodetransactionsfiltersinput-",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>InternalDirectDebitMandate</code> <Badge class="secondary" text="interface"/>',id:"internaldirectdebitmandate-",level:4},{value:'<code>PaymentDirectDebitMandate</code> <Badge class="secondary" text="interface"/>',id:"paymentdirectdebitmandate-",level:4},{value:'<code>PaymentMandate</code> <Badge class="secondary" text="interface"/>',id:"paymentmandate-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),y=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:s,Bullet:m,SpecifiedBy:y,Badge:b},u="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Payment direct debit mandate for Internal"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type InternalPaymentDirectDebitMandate implements InternalDirectDebitMandate, PaymentDirectDebitMandate, PaymentMandate {\n  id: ID!\n  reference: String!\n  scheme: InternalPaymentMandateScheme!\n  statusInfo: PaymentMandateStatusInfo!\n  sequence: InternalPaymentMandateSequence!\n  mandateDocumentUrl: String!\n  debtor: InternalPaymentMandateDebtor!\n  ultimateCreditorName: String\n  creditor: InternalPaymentMandateCreditor!\n  signatureDate: Date\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  executedAt: DateTime\n  expiredAt: Date\n  accountHolder: AccountHolder!\n  language: String!\n  transactions(\n  first: Int! = 50\n  after: String\n  filters: TransactionsFiltersInput\n): TransactionConnection\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"id"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unique identifier of the Internal Direct Debit Payment Mandate")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebreferencebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"reference"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unique reference of the Internal Direct Debit Payment Mandate")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebschemebcodeinternalpaymentmandatescheme--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"scheme"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/internal-payment-mandate-scheme"},(0,l.kt)("inlineCode",{parentName:"a"},"InternalPaymentMandateScheme!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate scheme")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebstatusinfobcodepaymentmandatestatusinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"statusInfo"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/payment-mandate-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"PaymentMandateStatusInfo!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate status information")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebsequencebcodeinternalpaymentmandatesequence--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"sequence"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/internal-payment-mandate-sequence"},(0,l.kt)("inlineCode",{parentName:"a"},"InternalPaymentMandateSequence!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate sequence")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebmandatedocumenturlbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"mandateDocumentUrl"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate PDF document URL")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebdebtorbcodeinternalpaymentmandatedebtor--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"debtor"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/objects/internal-payment-mandate-debtor"},(0,l.kt)("inlineCode",{parentName:"a"},"InternalPaymentMandateDebtor!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate debtor information")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebultimatecreditornamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"ultimateCreditorName"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Internal direct debit ultimate creditor name")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebcreditorbcodeinternalpaymentmandatecreditor--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"creditor"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/objects/internal-payment-mandate-creditor"},(0,l.kt)("inlineCode",{parentName:"a"},"InternalPaymentMandateCreditor!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Internal Direct Debit Payment Mandate creditor information")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebsignaturedatebcodedate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"signatureDate"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Signature date of the Internal Direct Debit Payment Mandate")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Creation date of the Internal Direct Debit Payment Mandate")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebupdatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Last Update date of the Internal Direct Debit Payment Mandate")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebexecutedatbcodedatetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"executedAt"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Date of the the last transaction executed for the concerned Internal Direct Debit Payment Mandate")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebexpiredatbcodedate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"expiredAt"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Expiry date of the Internal Direct Debit Payment Mandate")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebaccountholderbcodeaccountholder--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"accountHolder"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-holder"},(0,l.kt)("inlineCode",{parentName:"a"},"AccountHolder!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Account Holder information")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandateblanguagebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"language"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Language that will be used to produce the mandate PDF document")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatebtransactionsbcodetransactionconnection-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.",(0,l.kt)("b",null,"transactions"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/objects/transaction-connection"},(0,l.kt)("inlineCode",{parentName:"a"},"TransactionConnection"))," ",(0,l.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of transactions associated with the Internal Payment Direct Debit Mandate."),(0,l.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatetransactionsbfirstbcodeint--"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.transactions.",(0,l.kt)("b",null,"first"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/api-reference/scalars/int"},(0,l.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,l.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("p",{parentName:"blockquote"},"number of elements in the list (default value 50)")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatetransactionsbafterbcodestring-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.transactions.",(0,l.kt)("b",null,"after"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the list of elements needs to start after a element")),(0,l.kt)("h5",{id:"code-style-fontweight-normal-internalpaymentdirectdebitmandatetransactionsbfiltersbcodetransactionsfiltersinput-"},(0,l.kt)("a",{parentName:"h5",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"InternalPaymentDirectDebitMandate.transactions.",(0,l.kt)("b",null,"filters"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h5",href:"/api-reference/inputs/transactions-filters-input"},(0,l.kt)("inlineCode",{parentName:"a"},"TransactionsFiltersInput"))," ",(0,l.kt)(b,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"When the list of elements needs to be filtered")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"internaldirectdebitmandate-"},(0,l.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/internal-direct-debit-mandate"},(0,l.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitMandate"))," ",(0,l.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"paymentdirectdebitmandate-"},(0,l.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/payment-direct-debit-mandate"},(0,l.kt)("inlineCode",{parentName:"a"},"PaymentDirectDebitMandate"))," ",(0,l.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"paymentmandate-"},(0,l.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/payment-mandate"},(0,l.kt)("inlineCode",{parentName:"a"},"PaymentMandate"))," ",(0,l.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/add-internal-direct-debit-payment-mandate-success-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"AddInternalDirectDebitPaymentMandateSuccessPayload")),"  ",(0,l.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);