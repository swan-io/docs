"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[87872],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),s=d(n),f=r,m=s["".concat(l,".").concat(f)]||s[f]||p[f]||o;return n?i.createElement(m,c(c({ref:t},u),{},{components:n})):i.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[s]="string"==typeof e?e:r,c[1]=a;for(var d=2;d<o;d++)c[d]=n[d];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},86243:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>a,default:()=>b,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var i=n(83117),r=n(67294),o=n(3905);const c={id:"user-identification-document-type",title:"UserIdentificationDocumentType",hide_table_of_contents:!1},a=void 0,l={unversionedId:"api-reference/enums/user-identification-document-type",id:"api-reference/enums/user-identification-document-type",title:"UserIdentificationDocumentType",description:"No description",source:"@site/docs/api-reference/enums/user-identification-document-type.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/user-identification-document-type",permalink:"/docs/api-reference/enums/user-identification-document-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/user-identification-document-type.mdx",tags:[],version:"current",frontMatter:{id:"user-identification-document-type",title:"UserIdentificationDocumentType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UltimateBeneficialOwnerType",permalink:"/docs/api-reference/enums/ultimate-beneficial-owner-type"},next:{title:"UserOrderByFieldInput",permalink:"/docs/api-reference/enums/user-order-by-field-input"}},d={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>UserIdentificationDocumentType.<b>ID</b></code>",id:"code-style-fontweight-normal-useridentificationdocumenttypebidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserIdentificationDocumentType.<b>PASSPORT</b></code>",id:"code-style-fontweight-normal-useridentificationdocumenttypebpassportbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserIdentificationDocumentType.<b>DRIVER_LICENCE</b></code>",id:"code-style-fontweight-normal-useridentificationdocumenttypebdriver_licencebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>UserIdentificationDocumentType.<b>RESIDENT_PERMIT</b></code>",id:"code-style-fontweight-normal-useridentificationdocumenttypebresident_permitbcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:s,SpecifiedBy:p,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum UserIdentificationDocumentType {\n  ID\n  PASSPORT\n  DRIVER_LICENCE\n  RESIDENT_PERMIT\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-useridentificationdocumenttypebidbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserIdentificationDocumentType.",(0,o.kt)("b",null,"ID")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-useridentificationdocumenttypebpassportbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserIdentificationDocumentType.",(0,o.kt)("b",null,"PASSPORT")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-useridentificationdocumenttypebdriver_licencebcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserIdentificationDocumentType.",(0,o.kt)("b",null,"DRIVER_LICENCE")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-useridentificationdocumenttypebresident_permitbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UserIdentificationDocumentType.",(0,o.kt)("b",null,"RESIDENT_PERMIT")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/user-identification-document"},(0,o.kt)("inlineCode",{parentName:"a"},"UserIdentificationDocument")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);