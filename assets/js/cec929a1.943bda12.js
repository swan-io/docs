"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[24475],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),d=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=d(n),u=r,h=m["".concat(i,".").concat(u)]||m[u]||p[u]||l;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},39725:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>h,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=n(87462),r=n(67294),l=n(3905);const o={id:"create-merchant-payment-link-input",title:"CreateMerchantPaymentLinkInput",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/inputs/create-merchant-payment-link-input",id:"api-reference/inputs/create-merchant-payment-link-input",title:"CreateMerchantPaymentLinkInput",description:"No description",source:"@site/docs/api-reference/inputs/create-merchant-payment-link-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/create-merchant-payment-link-input",permalink:"/api-reference/inputs/create-merchant-payment-link-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/create-merchant-payment-link-input.mdx",tags:[],version:"current",frontMatter:{id:"create-merchant-payment-link-input",title:"CreateMerchantPaymentLinkInput",hide_table_of_contents:!1}},d={},s=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>merchantProfileId</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbmerchantprofileidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>amount</b></code><Bullet /><code>AmountInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbamountbcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>redirectUrl</b></code><Bullet /><code>URL!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbredirecturlbcodeurl--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>cancelRedirectUrl</b></code><Bullet /><code>URL!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbcancelredirecturlbcodeurl--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>billingAddress</b></code><Bullet /><code>AddressInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbbillingaddressbcodeaddressinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>expiresAt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbexpiresatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>requestedExecutionAt</b></code><Bullet /><code>DateTime</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbrequestedexecutionatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>sequence</b></code><Bullet /><code>SequenceType</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbsequencebcodesequencetype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>externalReference</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbexternalreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>reference</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>label</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>language</b></code><Bullet /><code>Language</code> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputblanguagebcodelanguage-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>customer</b></code><Bullet /><code>CustomerInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbcustomerbcodecustomerinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkInput.<b>paymentMethodIds</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbpaymentmethodidsbcodestring--",level:4},{value:"Member Of",id:"member-of",level:3}],h=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:c=!1}=e;const[i,d]=(0,r.useState)(c);return(0,l.kt)("details",(0,a.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:n),i&&o)},y={Bullet:s,SpecifiedBy:m,Badge:p,toc:u,Details:h},k="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreateMerchantPaymentLinkInput {\n  merchantProfileId: ID!\n  amount: AmountInput!\n  redirectUrl: URL!\n  cancelRedirectUrl: URL!\n  billingAddress: AddressInput!\n  expiresAt: DateTime\n  requestedExecutionAt: DateTime\n  sequence: SequenceType\n  externalReference: String\n  reference: String\n  label: String\n  language: Language\n  customer: CustomerInput\n  paymentMethodIds: [String!]\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbmerchantprofileidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"merchantProfileId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The Merchant Profile to link this Payment Link to")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbamountbcodeamountinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"amount"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Amount to be paid to sucessfully complete the payment.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbredirecturlbcodeurl--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"redirectUrl"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/url"},(0,l.kt)("inlineCode",{parentName:"a"},"URL!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Merchant Website URL to redirect the user to when the payment is completed.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbcancelredirecturlbcodeurl--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"cancelRedirectUrl"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/url"},(0,l.kt)("inlineCode",{parentName:"a"},"URL!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"URL to redirect the user to if they cancel their payment")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbbillingaddressbcodeaddressinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"billingAddress"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/inputs/address-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AddressInput!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"billing address information")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbexpiresatbcodedatetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"expiresAt"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The date when the payment link expires.\nIf not specified, the default time will be 24 hours")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbrequestedexecutionatbcodedatetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"requestedExecutionAt"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"A date that reflects the time at which the user asked the transaction to be executed.\nFor card transactions, request execution must occur within 7 days after authorization or the authorization may expire.\nFor SEPA Direct Debit transactions, request execution must occur up to 1 year in the future."),(0,l.kt)("p",{parentName:"blockquote"},"Default value means that the execution will be as soon as possible")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbsequencebcodesequencetype-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"sequence"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/sequence-type"},(0,l.kt)("inlineCode",{parentName:"a"},"SequenceType"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Controls if the payment mandate created from this payment link is for one-time use or can be reused\nThis is applicable for card and SEPA Direct Debit payment methods only.\nIf not specified, the default value is OneOff.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbexternalreferencebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"externalReference"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Any string that you want to be attached to this payment link.\nUsually something to help you reference the link in an external system.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbreferencebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"reference"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Optional field intended to provide a way for you to include a reference number or code.\nThe customer will most likely see this value on their bank statement, though we can't know as every banking platform is different.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputblabelbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"label"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Label of the concerned payment collection, which will be displayed on Swan bank statement\tand on the Swan merchant payment page.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputblanguagebcodelanguage-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"language"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/language"},(0,l.kt)("inlineCode",{parentName:"a"},"Language"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The language used for the payment page.\nDefault is the browser's language, or English if not available.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbcustomerbcodecustomerinput-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"customer"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/inputs/customer-input"},(0,l.kt)("inlineCode",{parentName:"a"},"CustomerInput"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"We will use the information specified here to prefill the payment link fields\ndepending on the payment method the end user chooses.\nKeep in mind that your end customer will be able to edit these fields.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkinputbpaymentmethodidsbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkInput.",(0,l.kt)("b",null,"paymentMethodIds"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"List of payment methods enabled for this payment link.\nIf the array is empty, Swan will allow all the payment methods that are enabled for the merchant profile (except for Check and Internal Direct Debit)\nIf you want to make payment possible via SEPA Direct Debit, the list should be populated either by a SEPA Direct Debit CORE or B2B.")),(0,l.kt)("h3",{id:"member-of"},"Member Of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/mutations/create-merchant-payment-link"},(0,l.kt)("inlineCode",{parentName:"a"},"createMerchantPaymentLink")),"  ",(0,l.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);