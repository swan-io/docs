"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30115],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,y=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(y,c(c({ref:t},s),{},{components:n})):a.createElement(y,c({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22603:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>d,contentTitle:()=>i,default:()=>k,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var a=n(83117),r=n(67294),o=n(3905);const c={id:"create-merchant-payment-link-payload",title:"CreateMerchantPaymentLinkPayload",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/unions/create-merchant-payment-link-payload",id:"api-reference/unions/create-merchant-payment-link-payload",title:"CreateMerchantPaymentLinkPayload",description:"No description",source:"@site/docs/api-reference/unions/create-merchant-payment-link-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/create-merchant-payment-link-payload",permalink:"/api-reference/unions/create-merchant-payment-link-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/create-merchant-payment-link-payload.mdx",tags:[],version:"current",frontMatter:{id:"create-merchant-payment-link-payload",title:"CreateMerchantPaymentLinkPayload",hide_table_of_contents:!1}},d={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>CreateMerchantPaymentLinkSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"createmerchantpaymentlinksuccesspayload-",level:4},{value:'<code>MerchantProfileWrongStatusRejection</code> <Badge class="secondary" text="object"/>',id:"merchantprofilewrongstatusrejection-",level:4},{value:'<code>MerchantPaymentMethodNotActiveRejection</code> <Badge class="secondary" text="object"/>',id:"merchantpaymentmethodnotactiverejection-",level:4},{value:'<code>PaymentMethodNotCompatibleRejection</code> <Badge class="secondary" text="object"/>',id:"paymentmethodnotcompatiblerejection-",level:4},{value:'<code>InternalErrorRejection</code> <Badge class="secondary" text="object"/>',id:"internalerrorrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:p,SpecifiedBy:m,Badge:u},h="wrapper";function k(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union CreateMerchantPaymentLinkPayload = CreateMerchantPaymentLinkSuccessPayload | MerchantProfileWrongStatusRejection | MerchantPaymentMethodNotActiveRejection | PaymentMethodNotCompatibleRejection | InternalErrorRejection | ForbiddenRejection | ValidationRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"createmerchantpaymentlinksuccesspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/create-merchant-payment-link-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"CreateMerchantPaymentLinkSuccessPayload"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"merchantprofilewrongstatusrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/merchant-profile-wrong-status-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfileWrongStatusRejection"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the Merchant Profile is not in the expected status")),(0,o.kt)("h4",{id:"merchantpaymentmethodnotactiverejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/merchant-payment-method-not-active-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentMethodNotActiveRejection"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the Merchant Payment Method is not active")),(0,o.kt)("h4",{id:"paymentmethodnotcompatiblerejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/payment-method-not-compatible-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"PaymentMethodNotCompatibleRejection"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when a payment method is not compatible for the requested mutation")),(0,o.kt)("h4",{id:"internalerrorrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/internal-error-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalErrorRejection"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,o.kt)("h4",{id:"forbiddenrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"validationrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/create-merchant-payment-link"},(0,o.kt)("inlineCode",{parentName:"a"},"createMerchantPaymentLink")),"  ",(0,o.kt)(u,{class:"secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);