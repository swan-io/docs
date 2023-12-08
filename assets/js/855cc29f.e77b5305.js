"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[68317],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>b});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),i=d(a),u=o,b=i["".concat(c,".").concat(u)]||i[u]||m[u]||r;return a?n.createElement(b,s(s({ref:t},p),{},{components:a})):n.createElement(b,s({ref:t},p))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[i]="string"==typeof e?e:o,s[1]=l;for(var d=2;d<r;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8449:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>i,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var n=a(87462),o=a(67294),r=a(3905);const s={id:"passport-document",title:"PassportDocument",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/objects/passport-document",id:"api-reference/objects/passport-document",title:"PassportDocument",description:"The document corresponding to a passport",source:"@site/docs/api-reference/objects/passport-document.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/passport-document",permalink:"/api-reference/objects/passport-document",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/passport-document.mdx",tags:[],version:"current",frontMatter:{id:"passport-document",title:"PassportDocument",hide_table_of_contents:!1}},d={},p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PassportDocument.<b>id</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passportdocumentbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassportDocument.<b>type</b></code><Bullet /><code>DocumentType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-passportdocumentbtypebcodedocumenttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassportDocument.<b>issueDate</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passportdocumentbissuedatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassportDocument.<b>expiryDate</b></code><Bullet /><code>Date</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passportdocumentbexpirydatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassportDocument.<b>mrz</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passportdocumentbmrzbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassportDocument.<b>number</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-passportdocumentbnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PassportDocument.<b>files</b></code><Bullet /><code>[PassportDocumentFile!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-passportdocumentbfilesbcodepassportdocumentfile--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:s,startOpen:l=!1}=e;const[c,d]=(0,o.useState)(l);return(0,r.kt)("details",(0,n.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},c?t:a),c&&s)},g={Bullet:p,SpecifiedBy:i,Badge:m,toc:u,Details:b},f="wrapper";function y(e){let{components:t,...a}=e;return(0,r.kt)(f,(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The document corresponding to a passport"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type PassportDocument {\n  id: String!\n  type: DocumentType!\n  issueDate: Date\n  expiryDate: Date\n  mrz: String\n  number: String\n  files: [PassportDocumentFile!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passportdocumentbidbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassportDocument.",(0,r.kt)("b",null,"id"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Unique identifier of the passport document")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passportdocumentbtypebcodedocumenttype--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassportDocument.",(0,r.kt)("b",null,"type"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/document-type"},(0,r.kt)("inlineCode",{parentName:"a"},"DocumentType!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The type of the document")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passportdocumentbissuedatebcodedate-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassportDocument.",(0,r.kt)("b",null,"issueDate"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The date at which the passport was issued")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passportdocumentbexpirydatebcodedate-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassportDocument.",(0,r.kt)("b",null,"expiryDate"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The date at which the passport expires")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passportdocumentbmrzbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassportDocument.",(0,r.kt)("b",null,"mrz"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Machine-readable zone code of the passport")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passportdocumentbnumberbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassportDocument.",(0,r.kt)("b",null,"number"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Number of the passport")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-passportdocumentbfilesbcodepassportdocumentfile--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"PassportDocument.",(0,r.kt)("b",null,"files"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/passport-document-file"},(0,r.kt)("inlineCode",{parentName:"a"},"[PassportDocumentFile!]!"))," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"List of the associated files")),(0,r.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/identification-document"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationDocument")),"  ",(0,r.kt)(m,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);