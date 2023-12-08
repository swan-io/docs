"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[29336],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),i=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return o.createElement(d.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=i(n),u=r,y=s["".concat(d,".").concat(u)]||s[u]||m[u]||a;return n?o.createElement(y,c(c({ref:t},p),{},{components:n})):o.createElement(y,c({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},18768:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,Details:()=>y,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>l,default:()=>k,frontMatter:()=>c,metadata:()=>d,toc:()=>u});var o=n(87462),r=n(67294),a=n(3905);const c={id:"document-type",title:"DocumentType",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/enums/document-type",id:"api-reference/enums/document-type",title:"DocumentType",description:"The type of the document",source:"@site/docs/api-reference/enums/document-type.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/document-type",permalink:"/api-reference/enums/document-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/document-type.mdx",tags:[],version:"current",frontMatter:{id:"document-type",title:"DocumentType",hide_table_of_contents:!1}},i={},p=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>DocumentType.<b>IdCard</b></code>",id:"code-style-fontweight-normal-documenttypebidcardbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DocumentType.<b>Passport</b></code>",id:"code-style-fontweight-normal-documenttypebpassportbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DocumentType.<b>ResidencePermit</b></code>",id:"code-style-fontweight-normal-documenttypebresidencepermitbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DocumentType.<b>DriversLicense</b></code>",id:"code-style-fontweight-normal-documenttypebdriverslicensebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DocumentType.<b>Face</b></code>",id:"code-style-fontweight-normal-documenttypebfacebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>DocumentType.<b>Report</b></code>",id:"code-style-fontweight-normal-documenttypebreportbcode",level:4},{value:"Member Of",id:"member-of",level:3}],y=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:l=!1}=e;const[d,i]=(0,r.useState)(l);return(0,a.kt)("details",(0,o.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&c)},f={Bullet:p,SpecifiedBy:s,Badge:m,toc:u,Details:y},b="wrapper";function k(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The type of the document"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum DocumentType {\n  IdCard\n  Passport\n  ResidencePermit\n  DriversLicense\n  Face\n  Report\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-documenttypebidcardbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DocumentType.",(0,a.kt)("b",null,"IdCard")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-documenttypebpassportbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DocumentType.",(0,a.kt)("b",null,"Passport")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-documenttypebresidencepermitbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DocumentType.",(0,a.kt)("b",null,"ResidencePermit")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-documenttypebdriverslicensebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DocumentType.",(0,a.kt)("b",null,"DriversLicense")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-documenttypebfacebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DocumentType.",(0,a.kt)("b",null,"Face")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-documenttypebreportbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DocumentType.",(0,a.kt)("b",null,"Report")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member Of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/drivers-license-document"},(0,a.kt)("inlineCode",{parentName:"a"},"DriversLicenseDocument")),"  ",(0,a.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/face-photo-document"},(0,a.kt)("inlineCode",{parentName:"a"},"FacePhotoDocument")),"  ",(0,a.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/id-card-document"},(0,a.kt)("inlineCode",{parentName:"a"},"IdCardDocument")),"  ",(0,a.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/passport-document"},(0,a.kt)("inlineCode",{parentName:"a"},"PassportDocument")),"  ",(0,a.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/report-document"},(0,a.kt)("inlineCode",{parentName:"a"},"ReportDocument")),"  ",(0,a.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/residence-permit-document"},(0,a.kt)("inlineCode",{parentName:"a"},"ResidencePermitDocument")),"  ",(0,a.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);