"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[61787],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(r),u=a,m=d["".concat(o,".").concat(u)]||d[u]||f[u]||i;return r?n.createElement(m,c(c({ref:t},p),{},{components:r})):n.createElement(m,c({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},26596:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=r(83117),a=r(67294),i=r(3905);const c={id:"certificate",title:"Certificate",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/inputs/certificate",id:"api-reference/inputs/certificate",title:"Certificate",description:"Certificate",source:"@site/docs/api-reference/inputs/certificate.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/certificate",permalink:"/api-reference/inputs/certificate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/certificate.mdx",tags:[],version:"current",frontMatter:{id:"certificate",title:"Certificate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CardOrderByInput",permalink:"/api-reference/inputs/card-order-by-input"},next:{title:"CheckPaymentCollectionInput",permalink:"/api-reference/inputs/check-payment-collection-input"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>Certificate.<b>key</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-certificatebkeybcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>Certificate.<b>value</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-certificatebvaluebcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:f,Badge:u},y="wrapper";function g(e){let{components:t,...r}=e;return(0,i.kt)(y,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Certificate"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input Certificate {\n  key: String!\n  value: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-certificatebkeybcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"Certificate.",(0,i.kt)("b",null,"key"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"CertificateType")),(0,i.kt)("p",null,"Can be either LEAF or INTERMEDIATE"),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-certificatebvaluebcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"Certificate.",(0,i.kt)("b",null,"value"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Base64 value of the certificate")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/inputs/signature-data"},(0,i.kt)("inlineCode",{parentName:"a"},"SignatureData")),"  ",(0,i.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);