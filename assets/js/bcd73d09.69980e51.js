"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[32792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},p=Object.keys(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(o=0;o<p.length;o++)n=p[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,c=e.parentName,i=a(e,["components","mdxType","originalType","parentName"]),l=s(n),d=r,g=l["".concat(c,".").concat(d)]||l[d]||m[d]||p;return n?o.createElement(g,u(u({ref:t},i),{},{components:n})):o.createElement(g,u({ref:t},i))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,u=new Array(p);u[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[l]="string"==typeof e?e:r,u[1]=a;for(var s=2;s<p;s++)u[s]=n[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25897:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>l,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>a,default:()=>y,frontMatter:()=>u,metadata:()=>c,toc:()=>i});var o=n(83117),r=n(67294),p=n(3905);const u={id:"supporting-document-purpose",title:"SupportingDocumentPurpose",hide_table_of_contents:!1},a=void 0,c={unversionedId:"api/objects/supporting-document-purpose",id:"api/objects/supporting-document-purpose",title:"SupportingDocumentPurpose",description:"Details of a supporting document purpose",source:"@site/docs/api/objects/supporting-document-purpose.mdx",sourceDirName:"api/objects",slug:"/api/objects/supporting-document-purpose",permalink:"/docs/api/objects/supporting-document-purpose",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/supporting-document-purpose.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-purpose",title:"SupportingDocumentPurpose",hide_table_of_contents:!1}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentPurpose.<b>name</b></code><Bullet /><code>SupportingDocumentPurposeEnum!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentpurposebnamebcodesupportingdocumentpurposeenum--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentPurpose.<b>acceptableSupportingDocumentTypes</b></code><Bullet /><code>[SupportingDocumentType!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentpurposebacceptablesupportingdocumenttypesbcodesupportingdocumenttype--",level:4},{value:"Member of",id:"member-of",level:3}],l=()=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,p.kt)(r.Fragment,null,"Specification",(0,p.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,p.kt)(r.Fragment,null,(0,p.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:i,Bullet:l,SpecifiedBy:m,Badge:d},f="wrapper";function y(e){let{components:t,...n}=e;return(0,p.kt)(f,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"Details of a supporting document purpose"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentPurpose {\n  name: SupportingDocumentPurposeEnum!\n  acceptableSupportingDocumentTypes: [SupportingDocumentType!]!\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentpurposebnamebcodesupportingdocumentpurposeenum--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentPurpose.",(0,p.kt)("b",null,"name"))),(0,p.kt)(l,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/api/enums/supporting-document-purpose-enum"},(0,p.kt)("inlineCode",{parentName:"a"},"SupportingDocumentPurposeEnum!"))," ",(0,p.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(d,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Technical name of the purpose")),(0,p.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentpurposebacceptablesupportingdocumenttypesbcodesupportingdocumenttype--"},(0,p.kt)("a",{parentName:"h4",href:"#"},(0,p.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentPurpose.",(0,p.kt)("b",null,"acceptableSupportingDocumentTypes"))),(0,p.kt)(l,{mdxType:"Bullet"}),(0,p.kt)("a",{parentName:"h4",href:"/api/enums/supporting-document-type"},(0,p.kt)("inlineCode",{parentName:"a"},"[SupportingDocumentType!]!"))," ",(0,p.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,p.kt)(d,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"Corresponding supporting document types accepted for this supporting document purpose")),(0,p.kt)("h3",{id:"member-of"},"Member of"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-collection"},(0,p.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollection")),"  ",(0,p.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);