"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84084],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},d=Object.keys(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(n=0;n<d.length;n++)r=d[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,d=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||d;return r?n.createElement(m,o(o({ref:t},l),{},{components:r})):n.createElement(m,o({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=r.length,o=new Array(d);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<d;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},41230:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(83117),a=r(67294),d=r(3905);const o={id:"card-product-suspended-rejection",title:"CardProductSuspendedRejection",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/objects/card-product-suspended-rejection",id:"api-reference/objects/card-product-suspended-rejection",title:"CardProductSuspendedRejection",description:"Rejection returned if the card product is suspended.",source:"@site/docs/api-reference/objects/card-product-suspended-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/card-product-suspended-rejection",permalink:"/api-reference/objects/card-product-suspended-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/card-product-suspended-rejection.mdx",tags:[],version:"current",frontMatter:{id:"card-product-suspended-rejection",title:"CardProductSuspendedRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CardProductNotFoundRejection",permalink:"/api-reference/objects/card-product-not-found-rejection"},next:{title:"CardProductUsedRejection",permalink:"/api-reference/objects/card-product-used-rejection"}},s={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CardProductSuspendedRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-cardproductsuspendedrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(a.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:p,SpecifiedBy:u,Badge:f},y="wrapper";function g(e){let{components:t,...r}=e;return(0,d.kt)(y,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Rejection returned if the card product is suspended."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"type CardProductSuspendedRejection implements Rejection {\n  message: String!\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-cardproductsuspendedrejectionbmessagebcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"CardProductSuspendedRejection.",(0,d.kt)("b",null,"message"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"interfaces"},"Interfaces"),(0,d.kt)("h4",{id:"rejection-"},(0,d.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,d.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,d.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-card-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardPayload")),"  ",(0,d.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-cards-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardsPayload")),"  ",(0,d.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-cards-with-group-delivery-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardsWithGroupDeliveryPayload")),"  ",(0,d.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-single-use-virtual-card-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardPayload")),"  ",(0,d.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"}),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"p",href:"/api-reference/unions/add-single-use-virtual-cards-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardsPayload")),"  ",(0,d.kt)(f,{class:"secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);