"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[47182],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>y});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),m=s(a),u=r,y=m["".concat(d,".").concat(u)]||m[u]||p[u]||o;return a?n.createElement(y,c(c({ref:t},i),{},{components:a})):n.createElement(y,c({ref:t},i))}));function y(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[m]="string"==typeof e?e:r,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},25956:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var n=a(83117),r=a(67294),o=a(3905);const c={id:"merchant-payment-product",title:"MerchantPaymentProduct",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api/interfaces/merchant-payment-product",id:"api/interfaces/merchant-payment-product",title:"MerchantPaymentProduct",description:"Base object for the different Payment Products available",source:"@site/docs/api/interfaces/merchant-payment-product.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/merchant-payment-product",permalink:"/docs/api/interfaces/merchant-payment-product",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/interfaces/merchant-payment-product.mdx",tags:[],version:"current",frontMatter:{id:"merchant-payment-product",title:"MerchantPaymentProduct",hide_table_of_contents:!1}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentProduct.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentproductbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentProduct.<b>type</b></code><Bullet /><code>MerchantPaymentProductType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-merchantpaymentproductbtypebcodemerchantpaymentproducttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentProduct.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentproductbproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentProduct.<b>statusInfo</b></code><Bullet /><code>MerchantPaymentProductStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-merchantpaymentproductbstatusinfobcodemerchantpaymentproductstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentProduct.<b>version</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentproductbversionbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentProduct.<b>updatedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-merchantpaymentproductbupdatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantPaymentProduct.<b>rollingReserve</b></code><Bullet /><code>RollingReserve</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-merchantpaymentproductbrollingreservebcoderollingreserve-",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],m=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:m,SpecifiedBy:p,Badge:u},h="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Base object for the different Payment Products available"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"interface MerchantPaymentProduct {\n  id: ID!\n  type: MerchantPaymentProductType!\n  productId: ID!\n  statusInfo: MerchantPaymentProductStatusInfo!\n  version: Int!\n  updatedAt: Date!\n  rollingReserve: RollingReserve\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProduct.",(0,o.kt)("b",null,"id"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unique identifier tied to every version of a given Merchant Payment Product")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductbtypebcodemerchantpaymentproducttype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProduct.",(0,o.kt)("b",null,"type"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/merchant-payment-product-type"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentProductType!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Merchant Payment Product Type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductbproductidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProduct.",(0,o.kt)("b",null,"productId"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unique identifier for a given merchant Payment Product, identical for every version of a given Merchant Payment Product Type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductbstatusinfobcodemerchantpaymentproductstatusinfo--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProduct.",(0,o.kt)("b",null,"statusInfo"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/merchant-payment-product-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantPaymentProductStatusInfo!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Status of the Merchant Payment Product")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductbversionbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProduct.",(0,o.kt)("b",null,"version"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Version of the Merchant Payment Product")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductbupdatedatbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProduct.",(0,o.kt)("b",null,"updatedAt"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Date at which the Merchant Payment Product was last updated")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantpaymentproductbrollingreservebcoderollingreserve-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantPaymentProduct.",(0,o.kt)("b",null,"rollingReserve"))),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/rolling-reserve"},(0,o.kt)("inlineCode",{parentName:"a"},"RollingReserve"))," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rolling Reserve applicated to the Merchant Payment Product")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/merchant-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfile")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/check-merchant-payment-product"},(0,o.kt)("inlineCode",{parentName:"a"},"CheckMerchantPaymentProduct")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(m,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/internal-direct-debit-merchant-payment-product"},(0,o.kt)("inlineCode",{parentName:"a"},"InternalDirectDebitMerchantPaymentProduct")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);