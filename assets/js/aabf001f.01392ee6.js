"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[67040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),y=a,m=u["".concat(i,".").concat(y)]||u[y]||p[y]||o;return n?r.createElement(m,c(c({ref:t},l),{},{components:n})):r.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=y;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[u]="string"==typeof e?e:a,c[1]=s;for(var d=2;d<o;d++)c[d]=n[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},58532:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>b,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var r=n(83117),a=n(67294),o=n(3905);const c={id:"request-merchant-payment-products-payload",title:"RequestMerchantPaymentProductsPayload",hide_table_of_contents:!1},s=void 0,i={unversionedId:"api-reference/unions/request-merchant-payment-products-payload",id:"api-reference/unions/request-merchant-payment-products-payload",title:"RequestMerchantPaymentProductsPayload",description:"No description",source:"@site/docs/api-reference/unions/request-merchant-payment-products-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/request-merchant-payment-products-payload",permalink:"/docs/api-reference/unions/request-merchant-payment-products-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/request-merchant-payment-products-payload.mdx",tags:[],version:"current",frontMatter:{id:"request-merchant-payment-products-payload",title:"RequestMerchantPaymentProductsPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"RequestMerchantPaymentMethodsPayload",permalink:"/docs/api-reference/unions/request-merchant-payment-methods-payload"},next:{title:"RequestSupportingDocumentCollectionReviewPayload",permalink:"/docs/api-reference/unions/request-supporting-document-collection-review-payload"}},d={},l=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>RequestMerchantPaymentProductsSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"requestmerchantpaymentproductssuccesspayload-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>NotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"notfoundrejection-",level:4},{value:'<code>InternalErrorRejection</code> <Badge class="secondary" text="object"/>',id:"internalerrorrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:u,SpecifiedBy:p,Badge:y},f="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union RequestMerchantPaymentProductsPayload = RequestMerchantPaymentProductsSuccessPayload | ForbiddenRejection | NotFoundRejection | InternalErrorRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"requestmerchantpaymentproductssuccesspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/request-merchant-payment-products-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentProductsSuccessPayload"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"forbiddenrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"notfoundrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/not-found-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"NotFoundRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the entity was not found or if the user does not have the rights to know that the account exists")),(0,o.kt)("h4",{id:"internalerrorrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/internal-error-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalErrorRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned on unexpected server error")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/request-merchant-payment-products"},(0,o.kt)("inlineCode",{parentName:"a"},"requestMerchantPaymentProducts")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);