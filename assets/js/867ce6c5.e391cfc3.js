"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[66560],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=i(n),f=r,p=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?a.createElement(p,d(d({ref:t},s),{},{components:n})):a.createElement(p,d({ref:t},s))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:r,d[1]=l;for(var i=2;i<o;i++)d[i]=n[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},92751:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,Details:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>l,default:()=>y,frontMatter:()=>d,metadata:()=>c,toc:()=>f});var a=n(87462),r=n(67294),o=n(3905);const d={id:"id-card-document-file",title:"IdCardDocumentFile",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/objects/id-card-document-file",id:"api-reference/objects/id-card-document-file",title:"IdCardDocumentFile",description:"The file associated to the ID card document",source:"@site/docs/api-reference/objects/id-card-document-file.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/id-card-document-file",permalink:"/api-reference/objects/id-card-document-file",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/id-card-document-file.mdx",tags:[],version:"current",frontMatter:{id:"id-card-document-file",title:"IdCardDocumentFile",hide_table_of_contents:!1}},i={},s=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IdCardDocumentFile.<b>downloadUrl</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-idcarddocumentfilebdownloadurlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IdCardDocumentFile.<b>side</b></code><Bullet /><code>DocumentFileSide!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-idcarddocumentfilebsidebcodedocumentfileside--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>DocumentFile</code> <Badge class="badge badge--secondary" text="interface"/>',id:"documentfile-",level:4},{value:"Member Of",id:"member-of",level:3}],p=e=>{let{dataOpen:t,dataClose:n,children:d,startOpen:l=!1}=e;const[c,i]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&d)},b={Bullet:s,SpecifiedBy:u,Badge:m,toc:f,Details:p},g="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The file associated to the ID card document"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type IdCardDocumentFile implements DocumentFile {\n  downloadUrl: String!\n  side: DocumentFileSide!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-idcarddocumentfilebdownloadurlbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdCardDocumentFile.",(0,o.kt)("b",null,"downloadUrl"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The file's temporary download url")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-idcarddocumentfilebsidebcodedocumentfileside--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdCardDocumentFile.",(0,o.kt)("b",null,"side"))),(0,o.kt)(s,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/document-file-side"},(0,o.kt)("inlineCode",{parentName:"a"},"DocumentFileSide!"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"From which side the ID card's picture was taken")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"documentfile-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/document-file"},(0,o.kt)("inlineCode",{parentName:"a"},"DocumentFile"))," ",(0,o.kt)(m,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Retrieved document extracted from the identity verification")),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/id-card-document"},(0,o.kt)("inlineCode",{parentName:"a"},"IdCardDocument")),"  ",(0,o.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);