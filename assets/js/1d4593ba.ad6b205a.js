"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[6753],{3905:(e,t,a)=>{a.d(t,{Zo:()=>b,kt:()=>p});var n=a(67294);function d(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){d(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,d=function(e,t){if(null==e)return{};var a,n,d={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(d[a]=e[a]);return d}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(d[a]=e[a])}return d}var l=n.createContext({}),i=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},b=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,d=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=i(a),m=d,p=s["".concat(l,".").concat(m)]||s[m]||y[m]||o;return a?n.createElement(p,r(r({ref:t},b),{},{components:a})):n.createElement(p,r({ref:t},b))}));function p(e,t){var a=arguments,d=t&&t.mdxType;if("string"==typeof e||d){var o=a.length,r=new Array(o);r[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:d,r[1]=c;for(var i=2;i<o;i++)r[i]=a[i];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},36154:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>b,Details:()=>p,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>m});var n=a(87462),d=a(67294),o=a(3905);const r={id:"add-internal-direct-debit-payment-mandate-payload",title:"AddInternalDirectDebitPaymentMandatePayload",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/unions/add-internal-direct-debit-payment-mandate-payload",id:"api-reference/unions/add-internal-direct-debit-payment-mandate-payload",title:"AddInternalDirectDebitPaymentMandatePayload",description:"Union type return by the addInternalDirectDebitPaymentMandate mutation",source:"@site/docs/api-reference/unions/add-internal-direct-debit-payment-mandate-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/add-internal-direct-debit-payment-mandate-payload",permalink:"/api-reference/unions/add-internal-direct-debit-payment-mandate-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/add-internal-direct-debit-payment-mandate-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-internal-direct-debit-payment-mandate-payload",title:"AddInternalDirectDebitPaymentMandatePayload",hide_table_of_contents:!1}},i={},b=()=>(0,o.kt)(d.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(d.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(d.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandatePayload.<b>AddInternalDirectDebitPaymentMandateSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbaddinternaldirectdebitpaymentmandatesuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandatePayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbforbiddenrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandatePayload.<b>NotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbnotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandatePayload.<b>DebtorAccountNotAllowedRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbdebtoraccountnotallowedrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandatePayload.<b>DebtorAccountClosedRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbdebtoraccountclosedrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandatePayload.<b>SchemeWrongRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbschemewrongrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandatePayload.<b>PaymentMandateReferenceAlreadyUsedRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbpaymentmandatereferencealreadyusedrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddInternalDirectDebitPaymentMandatePayload.<b>InternalErrorRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbinternalerrorrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:c=!1}=e;const[l,i]=(0,d.useState)(c);return(0,o.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&r)},u={Bullet:b,SpecifiedBy:s,Badge:y,toc:m,Details:p},f="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Union type return by the addInternalDirectDebitPaymentMandate mutation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddInternalDirectDebitPaymentMandatePayload = AddInternalDirectDebitPaymentMandateSuccessPayload | ForbiddenRejection | NotFoundRejection | DebtorAccountNotAllowedRejection | DebtorAccountClosedRejection | SchemeWrongRejection | PaymentMandateReferenceAlreadyUsedRejection | InternalErrorRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbaddinternaldirectdebitpaymentmandatesuccesspayloadbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/add-internal-direct-debit-payment-mandate-success-payload"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandatePayload.",(0,o.kt)("b",null,"AddInternalDirectDebitPaymentMandateSuccessPayload")))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Return type in case of a successful response of the addInternalDirectDebitPaymentMandate mutation")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbforbiddenrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandatePayload.",(0,o.kt)("b",null,"ForbiddenRejection")))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbnotfoundrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/not-found-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandatePayload.",(0,o.kt)("b",null,"NotFoundRejection")))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the entity was not found or if the user does not have the rights to know that the account exists")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbdebtoraccountnotallowedrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/debtor-account-not-allowed-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandatePayload.",(0,o.kt)("b",null,"DebtorAccountNotAllowedRejection")))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the Debtor does not belong to the same project as the creditor")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbdebtoraccountclosedrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/debtor-account-closed-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandatePayload.",(0,o.kt)("b",null,"DebtorAccountClosedRejection")))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the Debtor is closed")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbschemewrongrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/scheme-wrong-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandatePayload.",(0,o.kt)("b",null,"SchemeWrongRejection")))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when adding a B2B mandate with an Individual debtor")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbpaymentmandatereferencealreadyusedrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/payment-mandate-reference-already-used-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandatePayload.",(0,o.kt)("b",null,"PaymentMandateReferenceAlreadyUsedRejection")))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the payment mandate reference is already used for the same creditor")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addinternaldirectdebitpaymentmandatepayloadbinternalerrorrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/internal-error-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddInternalDirectDebitPaymentMandatePayload.",(0,o.kt)("b",null,"InternalErrorRejection")))," ",(0,o.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-internal-direct-debit-payment-mandate"},(0,o.kt)("inlineCode",{parentName:"a"},"addInternalDirectDebitPaymentMandate")),"  ",(0,o.kt)(y,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);