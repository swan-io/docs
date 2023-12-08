"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[45661],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=d(a),f=r,u=p["".concat(l,".").concat(f)]||p[f]||y[f]||c;return a?n.createElement(u,i(i({ref:t},s),{},{components:a})):n.createElement(u,i({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,i=new Array(c);i[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:r,i[1]=o;for(var d=2;d<c;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},59189:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>s,Details:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>f});var n=a(87462),r=a(67294),c=a(3905);const i={id:"cannot-activate-physical-card-rejection",title:"CannotActivatePhysicalCardRejection",hide_table_of_contents:!1},o=void 0,l={unversionedId:"api-reference/objects/cannot-activate-physical-card-rejection",id:"api-reference/objects/cannot-activate-physical-card-rejection",title:"CannotActivatePhysicalCardRejection",description:"Rejection returned when the Physical Card cannot be activated",source:"@site/docs/api-reference/objects/cannot-activate-physical-card-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/cannot-activate-physical-card-rejection",permalink:"/api-reference/objects/cannot-activate-physical-card-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/cannot-activate-physical-card-rejection.mdx",tags:[],version:"current",frontMatter:{id:"cannot-activate-physical-card-rejection",title:"CannotActivatePhysicalCardRejection",hide_table_of_contents:!1}},d={},s=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CannotActivatePhysicalCardRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cannotactivatephysicalcardrejectionbmessagebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CannotActivatePhysicalCardRejection.<b>identifier</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-cannotactivatephysicalcardrejectionbidentifierbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],u=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:o=!1}=e;const[l,d]=(0,r.useState)(o);return(0,c.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&i)},g={Bullet:s,SpecifiedBy:p,Badge:y,toc:f,Details:u},m="wrapper";function b(e){let{components:t,...a}=e;return(0,c.kt)(m,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Rejection returned when the Physical Card cannot be activated"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type CannotActivatePhysicalCardRejection implements Rejection {\n  message: String!\n  identifier: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-cannotactivatephysicalcardrejectionbmessagebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CannotActivatePhysicalCardRejection.",(0,c.kt)("b",null,"message"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h4",{id:"code-style-fontweight-normal-cannotactivatephysicalcardrejectionbidentifierbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CannotActivatePhysicalCardRejection.",(0,c.kt)("b",null,"identifier"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"rejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,c.kt)(y,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/activate-physical-card-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"ActivatePhysicalCardPayload")),"  ",(0,c.kt)(y,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);