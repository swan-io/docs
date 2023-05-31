"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[51730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),l=p(n),d=a,y=l["".concat(u,".").concat(d)]||l[d]||m[d]||o;return n?r.createElement(y,c(c({ref:t},i),{},{components:n})):r.createElement(y,c({ref:t},i))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[l]="string"==typeof e?e:a,c[1]=s;for(var p=2;p<o;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45564:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>l,SpecifiedBy:()=>m,assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>i});var r=n(83117),a=n(67294),o=n(3905);const c={id:"request-merchant-payment-products",title:"requestMerchantPaymentProducts",hide_table_of_contents:!1},s=void 0,u={unversionedId:"api-reference/mutations/request-merchant-payment-products",id:"api-reference/mutations/request-merchant-payment-products",title:"requestMerchantPaymentProducts",description:"Request merchant payment products for a merchant profile",source:"@site/docs/api-reference/mutations/request-merchant-payment-products.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/request-merchant-payment-products",permalink:"/api-reference/mutations/request-merchant-payment-products",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/request-merchant-payment-products.mdx",tags:[],version:"current",frontMatter:{id:"request-merchant-payment-products",title:"requestMerchantPaymentProducts",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"requestMerchantPaymentMethods",permalink:"/api-reference/mutations/request-merchant-payment-methods"},next:{title:"requestSupportingDocumentCollectionReview",permalink:"/api-reference/mutations/request-supporting-document-collection-review"}},p={},i=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>requestMerchantPaymentProducts.<b>input</b></code><Bullet /><code>RequestMerchantPaymentProductsInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-requestmerchantpaymentproductsbinputbcoderequestmerchantpaymentproductsinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>RequestMerchantPaymentProductsPayload</code> <Badge class="secondary" text="union"/>',id:"requestmerchantpaymentproductspayload-",level:4}],l=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:l,SpecifiedBy:m,Badge:d},f="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Request merchant payment products for a merchant profile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"requestMerchantPaymentProducts(\n  input: RequestMerchantPaymentProductsInput!\n): RequestMerchantPaymentProductsPayload\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantpaymentproductsbinputbcoderequestmerchantpaymentproductsinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"requestMerchantPaymentProducts.",(0,o.kt)("b",null,"input"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/request-merchant-payment-products-input"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentProductsInput!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"requestmerchantpaymentproductspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/unions/request-merchant-payment-products-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"RequestMerchantPaymentProductsPayload"))," ",(0,o.kt)(d,{class:"secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}h.isMDXComponent=!0}}]);