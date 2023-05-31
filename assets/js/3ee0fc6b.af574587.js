"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[97984],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),i=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(a),y=r,f=p["".concat(s,".").concat(y)]||p[y]||m[y]||o;return a?n.createElement(f,l(l({ref:t},d),{},{components:a})):n.createElement(f,l({ref:t},d))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=a[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},63766:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var n=a(83117),r=a(67294),o=a(3905);const l={id:"payment",title:"Payment",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api-reference/objects/payment",id:"api-reference/objects/payment",title:"Payment",description:"A Payment represents a set of transactions linked to the same payment act.",source:"@site/docs/api-reference/objects/payment.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/payment",permalink:"/api-reference/objects/payment",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/payment.mdx",tags:[],version:"current",frontMatter:{id:"payment",title:"Payment",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentRejected",permalink:"/api-reference/objects/payment-rejected"},next:{title:"PdfStatement",permalink:"/api-reference/objects/pdf-statement"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Payment.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Payment.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Payment.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymentbupdatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Payment.<b>statusInfo</b></code><Bullet /><code>PaymentStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-paymentbstatusinfobcodepaymentstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Payment.<b>transactions</b></code><Bullet /><code>TransactionConnection</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-paymentbtransactionsbcodetransactionconnection-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Payment.transactions.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-paymenttransactionsbafterbcodestring-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Payment.transactions.<b>filters</b></code><Bullet /><code>TransactionsFiltersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-paymenttransactionsbfiltersbcodetransactionsfiltersinput-",level:5},{value:'<code style={{ fontWeight: \'normal\' }}>Payment.<b>standingOrder</b></code><Bullet /><code>StandingOrder</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-paymentbstandingorderbcodestandingorder-",level:4},{value:"Returned by",id:"returned-by",level:3},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:d,Bullet:p,SpecifiedBy:m,Badge:y},u="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A Payment represents a set of transactions linked to the same payment act."),(0,o.kt)("p",null,"This payment act can be initiated:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"either from a user"),(0,o.kt)("li",{parentName:"ul"},"either from a merchant"),(0,o.kt)("li",{parentName:"ul"},"either from you"),(0,o.kt)("li",{parentName:"ul"},"either from Swan")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Payment {\n  id: ID!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n  statusInfo: PaymentStatusInfo!\n  transactions(\n  first: Int! = 50\n  after: String\n  filters: TransactionsFiltersInput\n): TransactionConnection\n  standingOrder: StandingOrder\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Payment.",(0,o.kt)("b",null,"id"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentbcreatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Payment.",(0,o.kt)("b",null,"createdAt"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"created date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentbupdatedatbcodedatetime--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Payment.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"updated date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentbstatusinfobcodepaymentstatusinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Payment.",(0,o.kt)("b",null,"statusInfo"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/payment-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentStatusInfo!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"status information")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentbtransactionsbcodetransactionconnection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Payment.",(0,o.kt)("b",null,"transactions"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/transaction-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionConnection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"list of transactions associated to this payment"),(0,o.kt)("h5",{parentName:"blockquote",id:"code-style-fontweight-normal-paymenttransactionsbfirstbcodeint--"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Payment.transactions.",(0,o.kt)("b",null,"first"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api-reference/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("p",{parentName:"blockquote"},"number of elements in the list (default value 50)")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-paymenttransactionsbafterbcodestring-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Payment.transactions.",(0,o.kt)("b",null,"after"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to start after a element")),(0,o.kt)("h5",{id:"code-style-fontweight-normal-paymenttransactionsbfiltersbcodetransactionsfiltersinput-"},(0,o.kt)("a",{parentName:"h5",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Payment.transactions.",(0,o.kt)("b",null,"filters"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h5",href:"/api-reference/inputs/transactions-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"TransactionsFiltersInput"))," ",(0,o.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the list of elements needs to be filtered")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-paymentbstandingorderbcodestandingorder-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"Payment.",(0,o.kt)("b",null,"standingOrder"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/standing-order"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrder"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"standing order that has initiated this payment")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/queries/payment"},(0,o.kt)("inlineCode",{parentName:"a"},"payment")),"  ",(0,o.kt)(y,{class:"secondary",text:"query",mdxType:"Badge"})),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/card-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"CardTransaction")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/check-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckTransaction")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/fee-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"FeeTransaction")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/initiate-credit-transfers-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"InitiateCreditTransfersSuccessPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/initiate-funding-request-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"InitiateFundingRequestSuccessPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/initiate-merchant-payment-collection-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"InitiateMerchantPaymentCollectionSuccessPayload")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-credit-transfer"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalCreditTransfer")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/internal-direct-debit-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitTransaction")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/payment-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentEdge")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/sepacredit-transfer-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPACreditTransferTransaction")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/sepadirect-debit-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"SEPADirectDebitTransaction")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/interfaces/transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"Transaction")),"  ",(0,o.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);