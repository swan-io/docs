"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70262],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var o=n.createContext({}),l=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(a),p=d,u=m["".concat(o,".").concat(p)]||m[p]||b[p]||c;return a?n.createElement(u,r(r({ref:t},s),{},{components:a})):n.createElement(u,r({ref:t},s))}));function u(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var c=a.length,r=new Array(c);r[0]=p;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[m]="string"==typeof e?e:d,r[1]=i;for(var l=2;l<c;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},20369:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>m,SpecifiedBy:()=>b,assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=a(83117),d=a(67294),c=a(3905);const r={id:"separeceived-direct-debit-mandate",title:"SEPAReceivedDirectDebitMandate",hide_table_of_contents:!1},i=void 0,o={unversionedId:"api-reference/objects/separeceived-direct-debit-mandate",id:"api-reference/objects/separeceived-direct-debit-mandate",title:"SEPAReceivedDirectDebitMandate",description:"Received direct debit mandate for SEPA",source:"@site/docs/api-reference/objects/separeceived-direct-debit-mandate.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/separeceived-direct-debit-mandate",permalink:"/docs/api-reference/objects/separeceived-direct-debit-mandate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/separeceived-direct-debit-mandate.mdx",tags:[],version:"current",frontMatter:{id:"separeceived-direct-debit-mandate",title:"SEPAReceivedDirectDebitMandate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SEPAReceivedDirectDebitMandateCreditor",permalink:"/docs/api-reference/objects/separeceived-direct-debit-mandate-creditor"},next:{title:"ServerConsentCredentialsNotValidOrOutdatedRejection",permalink:"/docs/api-reference/objects/server-consent-credentials-not-valid-or-outdated-rejection"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>version</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebversionbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>reference</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebreferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>scheme</b></code><Bullet /><code>SEPAReceivedDirectDebitMandateScheme!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebschemebcodesepareceiveddirectdebitmandatescheme--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>sequence</b></code><Bullet /><code>SEPAReceivedDirectDebitMandateSequence!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebsequencebcodesepareceiveddirectdebitmandatesequence--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>creditor</b></code><Bullet /><code>SEPAReceivedDirectDebitMandateCreditor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebcreditorbcodesepareceiveddirectdebitmandatecreditor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>ultimateCreditorName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebultimatecreditornamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>executedAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebexecutedatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>signatureDate</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebsignaturedatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>expiredAt</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebexpiredatbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>statusInfo</b></code><Bullet /><code>ReceivedDirectDebitMandateStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebstatusinfobcodereceiveddirectdebitmandatestatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>account</b></code><Bullet /><code>Account</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebaccountbcodeaccount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>iban</b></code><Bullet /><code>IBAN!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebibanbcodeiban--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.<b>transactions</b></code><Bullet /><code>TransactionConnection</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebtransactionsbcodetransactionconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.transactions.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatetransactionsbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>SEPAReceivedDirectDebitMandate.transactions.<b>filters</b></code><Bullet /><code>TransactionsFiltersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-separeceiveddirectdebitmandatetransactionsbfiltersbcodetransactionsfiltersinput-",level:5},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>ReceivedDirectDebitMandate</code> <Badge class="secondary" text="interface"/>',id:"receiveddirectdebitmandate-",level:4},{value:'<code>SEPADirectDebitMandate</code> <Badge class="secondary" text="interface"/>',id:"sepadirectdebitmandate-",level:4}],m=()=>(0,c.kt)(d.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,c.kt)(d.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,c.kt)(d.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:m,SpecifiedBy:b,Badge:p},k="wrapper";function f(e){let{components:t,...a}=e;return(0,c.kt)(k,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Received direct debit mandate for SEPA"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type SEPAReceivedDirectDebitMandate implements ReceivedDirectDebitMandate, SEPADirectDebitMandate {\n  id: ID!\n  version: String!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  reference: String!\n  scheme: SEPAReceivedDirectDebitMandateScheme!\n  sequence: SEPAReceivedDirectDebitMandateSequence!\n  creditor: SEPAReceivedDirectDebitMandateCreditor!\n  ultimateCreditorName: String\n  executedAt: DateTime\n  signatureDate: Date\n  expiredAt: Date\n  statusInfo: ReceivedDirectDebitMandateStatusInfo!\n  account: Account\n  iban: IBAN!\n  name: String\n  transactions(\n  first: Int! = 50\n  after: String\n  filters: TransactionsFiltersInput\n): TransactionConnection\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebidbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"id"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Unique identifier of the received SEPA direct debit mandate, generated by Swan")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebversionbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"version"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Version of the received SEPA direct debit mandate")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebcreatedatbcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"createdAt"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Creation date of the received SEPA direct debit mandate")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebupdatedatbcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"updatedAt"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Last Update date of the received SEPA direct debit mandate")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebreferencebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"reference"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Received SEPA direct debit Unique Mandate Reference (UMR)")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebschemebcodesepareceiveddirectdebitmandatescheme--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"scheme"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/enums/separeceived-direct-debit-mandate-scheme"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPAReceivedDirectDebitMandateScheme!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Received SEPA direct debit mandate scheme")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebsequencebcodesepareceiveddirectdebitmandatesequence--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"sequence"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/enums/separeceived-direct-debit-mandate-sequence"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPAReceivedDirectDebitMandateSequence!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Received SEPA direct debit mandate sequence")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebcreditorbcodesepareceiveddirectdebitmandatecreditor--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"creditor"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/separeceived-direct-debit-mandate-creditor"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPAReceivedDirectDebitMandateCreditor!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Received SEPA direct debit creditor")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebultimatecreditornamebcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"ultimateCreditorName"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Received SEPA direct debit ultimate creditor name")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebexecutedatbcodedatetime-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"executedAt"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Date of the last SEPA direct debit transaction executed for the concerned received SEPA direct debit mandate")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebsignaturedatebcodedate-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"signatureDate"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,c.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Date of signature of the received SEPA direct debit mandate")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebexpiredatbcodedate-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"expiredAt"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,c.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Expiry date of the received SEPA direct debit mandate, computed automatically (36 months from the executedAt date)")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebstatusinfobcodereceiveddirectdebitmandatestatusinfo--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"statusInfo"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/received-direct-debit-mandate-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandateStatusInfo!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Mandate status information of the received SEPA direct debit mandate")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebaccountbcodeaccount-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"account"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/account"},(0,c.kt)("inlineCode",{parentName:"a"},"Account"))," ",(0,c.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Account of the received SEPA direct debit mandate debtor")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebibanbcodeiban--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"iban"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/iban"},(0,c.kt)("inlineCode",{parentName:"a"},"IBAN!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Iban of the received SEPA direct debit mandate debtor")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebnamebcodestring-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"name"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Mandate name")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatebtransactionsbcodetransactionconnection-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.",(0,c.kt)("b",null,"transactions"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/transaction-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"TransactionConnection"))," ",(0,c.kt)(p,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"List of transactions associated with the SEPA Receive Direct Debit Mandate."),(0,c.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-separeceiveddirectdebitmandatetransactionsbfirstbcodeint--"},(0,c.kt)("a",{parentName:"h5",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.transactions.",(0,c.kt)("b",null,"first"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h5",href:"/api-reference/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,c.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("p",{parentName:"blockquote"},"number of elements in the list (default value 50)")),(0,c.kt)("h5",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatetransactionsbafterbcodestring-"},(0,c.kt)("a",{parentName:"h5",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.transactions.",(0,c.kt)("b",null,"after"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h5",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,c.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"When the list of elements needs to start after a element")),(0,c.kt)("h5",{id:"code-style-fontweight-normal-separeceiveddirectdebitmandatetransactionsbfiltersbcodetransactionsfiltersinput-"},(0,c.kt)("a",{parentName:"h5",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SEPAReceivedDirectDebitMandate.transactions.",(0,c.kt)("b",null,"filters"))),(0,c.kt)(m,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h5",href:"/api-reference/inputs/transactions-filters-input"},(0,c.kt)("inlineCode",{parentName:"a"},"TransactionsFiltersInput"))," ",(0,c.kt)(p,{class:"secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"When the list of elements needs to be filtered")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"receiveddirectdebitmandate-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/received-direct-debit-mandate"},(0,c.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandate"))," ",(0,c.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Interface for Received Direct Debit Mandate")),(0,c.kt)("h4",{id:"sepadirectdebitmandate-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/sepadirect-debit-mandate"},(0,c.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitMandate"))," ",(0,c.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}f.isMDXComponent=!0}}]);