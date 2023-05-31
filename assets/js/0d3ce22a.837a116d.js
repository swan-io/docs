"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[56469],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=i,m=u["".concat(o,".").concat(f)]||u[f]||s[f]||a;return r?n.createElement(m,d(d({ref:t},p),{},{components:r})):n.createElement(m,d({ref:t},p))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,d=new Array(a);d[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:i,d[1]=l;for(var c=2;c<a;c++)d[c]=r[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16253:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>d,metadata:()=>o,toc:()=>p});var n=r(83117),i=r(67294),a=r(3905);const d={id:"digital-card-order-by-field-input",title:"DigitalCardOrderByFieldInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/enums/digital-card-order-by-field-input",id:"api-reference/enums/digital-card-order-by-field-input",title:"DigitalCardOrderByFieldInput",description:"Field we can use when ordering that can be applied when listing digital cards",source:"@site/docs/api-reference/enums/digital-card-order-by-field-input.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/digital-card-order-by-field-input",permalink:"/api-reference/enums/digital-card-order-by-field-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/digital-card-order-by-field-input.mdx",tags:[],version:"current",frontMatter:{id:"digital-card-order-by-field-input",title:"DigitalCardOrderByFieldInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CreditTransferMode",permalink:"/api-reference/enums/credit-transfer-mode"},next:{title:"DigitalizationType",permalink:"/api-reference/enums/digitalization-type"}},c={},p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>DigitalCardOrderByFieldInput.<b>id</b></code>",id:"code-style-fontweight-normal-digitalcardorderbyfieldinputbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DigitalCardOrderByFieldInput.<b>createdAt</b></code>",id:"code-style-fontweight-normal-digitalcardorderbyfieldinputbcreatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DigitalCardOrderByFieldInput.<b>updatedAt</b></code>",id:"code-style-fontweight-normal-digitalcardorderbyfieldinputbupdatedatbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:u,SpecifiedBy:s,Badge:f},y="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(y,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Field we can use when ordering that can be applied when listing digital cards"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum DigitalCardOrderByFieldInput {\n  id\n  createdAt\n  updatedAt\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-digitalcardorderbyfieldinputbidbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardOrderByFieldInput.",(0,a.kt)("b",null,"id")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-digitalcardorderbyfieldinputbcreatedatbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardOrderByFieldInput.",(0,a.kt)("b",null,"createdAt")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-digitalcardorderbyfieldinputbupdatedatbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DigitalCardOrderByFieldInput.",(0,a.kt)("b",null,"updatedAt")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/inputs/digital-card-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"DigitalCardOrderByInput")),"  ",(0,a.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);