"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39607],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},l=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=d(a),m=r,u=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return a?n.createElement(u,c(c({ref:t},l),{},{components:a})):n.createElement(u,c({ref:t},l))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[f]="string"==typeof e?e:r,c[1]=s;for(var d=2;d<o;d++)c[d]=a[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},78812:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>f,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>k,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var n=a(83117),r=a(67294),o=a(3905);const c={id:"sepacredit-transfer-transaction",title:"SEPACreditTransferTransaction",hide_table_of_contents:!1},s=void 0,i={unversionedId:"api-reference/objects/sepacredit-transfer-transaction",id:"api-reference/objects/sepacredit-transfer-transaction",title:"SEPACreditTransferTransaction",description:"Sepa Credit Transfer transaction",source:"@site/docs/api-reference/objects/sepacredit-transfer-transaction.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/sepacredit-transfer-transaction",permalink:"/docs/api-reference/objects/sepacredit-transfer-transaction",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/sepacredit-transfer-transaction.mdx",tags:[],version:"current",frontMatter:{id:"sepacredit-transfer-transaction",title:"SEPACreditTransferTransaction",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SEPACreditTransferOutDebtor",permalink:"/docs/api-reference/objects/sepacredit-transfer-out-debtor"},next:{title:"SEPADirectDebitInCreditor",permalink:"/docs/api-reference/objects/sepadirect-debit-in-creditor"}},d={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>reference</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbreferencebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>paymentMethodIdentifier</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbpaymentmethodidentifierbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>side</b></code><Bullet /><code>TransactionSide!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbsidebcodetransactionside--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>type</b></code><Bullet /><code>TransactionTypeEnum!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbtypebcodetransactiontypeenum--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>amount</b></code><Bullet /><code>Amount!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbamountbcodeamount--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>label</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionblabelbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>statusInfo</b></code><Bullet /><code>TransactionStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbstatusinfobcodetransactionstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>paymentId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbpaymentidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>payment</b></code><Bullet /><code>Payment</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbpaymentbcodepayment-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>counterparty</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbcounterpartybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>bookedBalanceAfter</b></code><Bullet /><code>Amount</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbbookedbalanceafterbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>paymentProduct</b></code><Bullet /><code>PaymentProduct!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbpaymentproductbcodepaymentproduct--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>creditor</b></code><Bullet /><code>SEPACreditTransferCreditor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbcreditorbcodesepacredittransfercreditor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>debtor</b></code><Bullet /><code>SEPACreditTransferDebtor!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbdebtorbcodesepacredittransferdebtor--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>account</b></code><Bullet /><code>Account</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbaccountbcodeaccount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>externalReference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbexternalreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>executionDate</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbexecutiondatebcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>requestedExecutionAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionbrequestedexecutionatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>originTransactionId</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionborigintransactionidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SEPACreditTransferTransaction.<b>originTransaction</b></code><Bullet /><code>Transaction</code> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-sepacredittransfertransactionborigintransactionbcodetransaction-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Transaction</code> <Badge class="secondary" text="interface"/>',id:"transaction-",level:4},{value:"Member of",id:"member-of",level:3}],f=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:l,Bullet:f,SpecifiedBy:p,Badge:m},y="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sepa Credit Transfer transaction"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SEPACreditTransferTransaction implements Transaction {\n  id: ID!\n  reference: String!\n  paymentMethodIdentifier: String!\n  side: TransactionSide!\n  type: TransactionTypeEnum!\n  amount: Amount!\n  label: String!\n  statusInfo: TransactionStatusInfo!\n  paymentId: String\n  payment: Payment\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  counterparty: String!\n  bookedBalanceAfter: Amount\n  paymentProduct: PaymentProduct!\n  creditor: SEPACreditTransferCreditor!\n  debtor: SEPACreditTransferDebtor!\n  account: Account\n  externalReference: String\n  executionDate: DateTime!\n  requestedExecutionAt: DateTime\n  originTransactionId: String\n  originTransaction: Transaction\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"id"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"unique identifier of the transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbreferencebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"reference"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbpaymentmethodidentifierbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"paymentMethodIdentifier"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"payment method identifier used for this transaction. e.g masked PAN or IBAN or accountNumber")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbsidebcodetransactionside--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"side"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/transaction-side"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionSide!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"side (Credit or Debit)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbtypebcodetransactiontypeenum--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"type"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/transaction-type-enum"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionTypeEnum!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbamountbcodeamount--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"amount"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"amount")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionblabelbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"label"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"label")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbstatusinfobcodetransactionstatusinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"statusInfo"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionStatusInfo!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"status information")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbpaymentidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"paymentId"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ID of the payment associated to this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbpaymentbcodepayment-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"payment"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/payment"},(0,o.kt)("inlineCode",{parentName:"a"},"Payment"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"payment associated to this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"created date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbupdatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"updated date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbcounterpartybcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"counterparty"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"name of the counterparty. e.g Merchant name, Creditor name, Beneficiary Name ...")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbbookedbalanceafterbcodeamount-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"bookedBalanceAfter"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/amount"},(0,o.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"booked balance after this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbpaymentproductbcodepaymentproduct--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"paymentProduct"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/payment-product"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentProduct!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"payment product used for this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbcreditorbcodesepacredittransfercreditor--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"creditor"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/sepacredit-transfer-creditor"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferCreditor!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"creditor information")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbdebtorbcodesepacredittransferdebtor--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"debtor"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/sepacredit-transfer-debtor"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferDebtor!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"debtor information")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbaccountbcodeaccount-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"account"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/account"},(0,o.kt)("inlineCode",{parentName:"a"},"Account"))," ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"matching account for the transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbexternalreferencebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"externalReference"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"an arbitrary identifier that was defined by you when you created this transaction.")),(0,o.kt)("p",null,"For example, you can define it in the CreditTransferInput mutation."),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbexecutiondatebcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"executionDate"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"a date that reflects the execution date of a transaction from a user viewpoint. Can be used for sorting transactions.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionbrequestedexecutionatbcodedatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"requestedExecutionAt"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"a date that reflects the time at which the user asked the transaction to be executed")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionborigintransactionidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"originTransactionId"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ID of the origin transaction associated to this transaction")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-sepacredittransfertransactionborigintransactionbcodetransaction-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SEPACreditTransferTransaction.",(0,o.kt)("b",null,"originTransaction"))),(0,o.kt)(f,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction"))," ",(0,o.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"origin transaction associated to this transaction")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"transaction-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction"))," ",(0,o.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Transaction")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/balance"},(0,o.kt)("inlineCode",{parentName:"a"},"Balance")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);