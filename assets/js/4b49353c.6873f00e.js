"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30115],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},m="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(a),p=o,b=m["".concat(i,".").concat(p)]||m[p]||y[p]||r;return a?n.createElement(b,c(c({ref:t},s),{},{components:a})):n.createElement(b,c({ref:t},s))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,c=new Array(r);c[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[m]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<r;d++)c[d]=a[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},22603:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=a(87462),o=a(67294),r=a(3905);const c={id:"create-merchant-payment-link-payload",title:"CreateMerchantPaymentLinkPayload",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/unions/create-merchant-payment-link-payload",id:"api-reference/unions/create-merchant-payment-link-payload",title:"CreateMerchantPaymentLinkPayload",description:"No description",source:"@site/docs/api-reference/unions/create-merchant-payment-link-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/create-merchant-payment-link-payload",permalink:"/api-reference/unions/create-merchant-payment-link-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/create-merchant-payment-link-payload.mdx",tags:[],version:"current",frontMatter:{id:"create-merchant-payment-link-payload",title:"CreateMerchantPaymentLinkPayload",hide_table_of_contents:!1}},d={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkPayload.<b>CreateMerchantPaymentLinkSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbcreatemerchantpaymentlinksuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkPayload.<b>MerchantProfileWrongStatusRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbmerchantprofilewrongstatusrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkPayload.<b>MerchantPaymentMethodNotActiveRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbmerchantpaymentmethodnotactiverejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkPayload.<b>PaymentMethodNotCompatibleRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbpaymentmethodnotcompatiblerejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkPayload.<b>InternalErrorRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbinternalerrorrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbforbiddenrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreateMerchantPaymentLinkPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbvalidationrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:l=!1}=e;const[i,d]=(0,o.useState)(l);return(0,r.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&c)},h={Bullet:s,SpecifiedBy:m,Badge:y,toc:p,Details:b},u="wrapper";function k(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union CreateMerchantPaymentLinkPayload = CreateMerchantPaymentLinkSuccessPayload | MerchantProfileWrongStatusRejection | MerchantPaymentMethodNotActiveRejection | PaymentMethodNotCompatibleRejection | InternalErrorRejection | ForbiddenRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbcreatemerchantpaymentlinksuccesspayloadbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/create-merchant-payment-link-success-payload"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkPayload.",(0,r.kt)("b",null,"CreateMerchantPaymentLinkSuccessPayload")))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbmerchantprofilewrongstatusrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/merchant-profile-wrong-status-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkPayload.",(0,r.kt)("b",null,"MerchantProfileWrongStatusRejection")))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned when the Merchant Profile is not in the expected status")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbmerchantpaymentmethodnotactiverejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/merchant-payment-method-not-active-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkPayload.",(0,r.kt)("b",null,"MerchantPaymentMethodNotActiveRejection")))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned when the Merchant Payment Method is not active")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbpaymentmethodnotcompatiblerejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/payment-method-not-compatible-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkPayload.",(0,r.kt)("b",null,"PaymentMethodNotCompatibleRejection")))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned when a payment method is not compatible for the requested mutation")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbinternalerrorrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/internal-error-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkPayload.",(0,r.kt)("b",null,"InternalErrorRejection")))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbforbiddenrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkPayload.",(0,r.kt)("b",null,"ForbiddenRejection")))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-createmerchantpaymentlinkpayloadbvalidationrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CreateMerchantPaymentLinkPayload.",(0,r.kt)("b",null,"ValidationRejection")))," ",(0,r.kt)(y,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/create-merchant-payment-link"},(0,r.kt)("inlineCode",{parentName:"a"},"createMerchantPaymentLink")),"  ",(0,r.kt)(y,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);