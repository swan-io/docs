"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[14142],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),i=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=i(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=i(n),u=a,y=p["".concat(d,".").concat(u)]||p[u]||m[u]||c;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23690:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var r=n(83117),a=n(67294),c=n(3905);const o={id:"internal-direct-debit-merchant-payment-product",title:"InternalDirectDebitMerchantPaymentProduct",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/objects/internal-direct-debit-merchant-payment-product",id:"api-reference/objects/internal-direct-debit-merchant-payment-product",title:"InternalDirectDebitMerchantPaymentProduct",description:"InternalDirectDebitMerchantPaymentProduct",source:"@site/docs/api-reference/objects/internal-direct-debit-merchant-payment-product.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/internal-direct-debit-merchant-payment-product",permalink:"/docs/api-reference/objects/internal-direct-debit-merchant-payment-product",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/internal-direct-debit-merchant-payment-product.mdx",tags:[],version:"current",frontMatter:{id:"internal-direct-debit-merchant-payment-product",title:"InternalDirectDebitMerchantPaymentProduct",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"InternalDirectDebitDebtor",permalink:"/docs/api-reference/objects/internal-direct-debit-debtor"},next:{title:"InternalDirectDebitTransaction",permalink:"/docs/api-reference/objects/internal-direct-debit-transaction"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitMerchantPaymentProduct.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitMerchantPaymentProduct.<b>type</b></code><Bullet /><code>MerchantPaymentProductType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbtypebcodemerchantpaymentproducttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitMerchantPaymentProduct.<b>productId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbproductidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitMerchantPaymentProduct.<b>statusInfo</b></code><Bullet /><code>MerchantPaymentProductStatusInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbstatusinfobcodemerchantpaymentproductstatusinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitMerchantPaymentProduct.<b>version</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbversionbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitMerchantPaymentProduct.<b>updatedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbupdatedatbcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>InternalDirectDebitMerchantPaymentProduct.<b>rollingReserve</b></code><Bullet /><code>RollingReserve</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbrollingreservebcoderollingreserve-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>MerchantPaymentProduct</code> <Badge class="secondary" text="interface"/>',id:"merchantpaymentproduct-",level:4}],p=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:p,SpecifiedBy:m,Badge:u},h="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(h,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"InternalDirectDebitMerchantPaymentProduct"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type InternalDirectDebitMerchantPaymentProduct implements MerchantPaymentProduct {\n  id: ID!\n  type: MerchantPaymentProductType!\n  productId: ID!\n  statusInfo: MerchantPaymentProductStatusInfo!\n  version: Int!\n  updatedAt: Date!\n  rollingReserve: RollingReserve\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbidbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitMerchantPaymentProduct.",(0,c.kt)("b",null,"id"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Unique identifier tied to every version of a given Merchant Payment Product")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbtypebcodemerchantpaymentproducttype--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitMerchantPaymentProduct.",(0,c.kt)("b",null,"type"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-payment-product-type"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantPaymentProductType!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The Merchant Payment Product Type")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbproductidbcodeid--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitMerchantPaymentProduct.",(0,c.kt)("b",null,"productId"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,c.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Unique identifier for a given merchant Payment Product, identical for every version of a given Merchant Payment Product Type")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbstatusinfobcodemerchantpaymentproductstatusinfo--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitMerchantPaymentProduct.",(0,c.kt)("b",null,"statusInfo"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-payment-product-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantPaymentProductStatusInfo!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Status of the Merchant Payment Product")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbversionbcodeint--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitMerchantPaymentProduct.",(0,c.kt)("b",null,"version"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Version of the Merchant Payment Product")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbupdatedatbcodedate--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitMerchantPaymentProduct.",(0,c.kt)("b",null,"updatedAt"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,c.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Date at which the Merchant Payment Product was last updated")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-internaldirectdebitmerchantpaymentproductbrollingreservebcoderollingreserve-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"InternalDirectDebitMerchantPaymentProduct.",(0,c.kt)("b",null,"rollingReserve"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/rolling-reserve"},(0,c.kt)("inlineCode",{parentName:"a"},"RollingReserve"))," ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Rolling Reserve applicated to the Merchant Payment Product")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"merchantpaymentproduct-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/merchant-payment-product"},(0,c.kt)("inlineCode",{parentName:"a"},"MerchantPaymentProduct"))," ",(0,c.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Base object for the different Payment Products available")))}b.isMDXComponent=!0}}]);