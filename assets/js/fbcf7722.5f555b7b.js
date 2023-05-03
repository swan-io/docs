"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[74799],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var o=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var r=o.createContext({}),i=function(e){var t=o.useContext(r),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=i(e.components);return o.createElement(r.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,r=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=i(a),m=n,f=p["".concat(r,".").concat(m)]||p[m]||u[m]||l;return a?o.createElement(f,c(c({ref:t},s),{},{components:a})):o.createElement(f,c({ref:t},s))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=m;var d={};for(var r in t)hasOwnProperty.call(t,r)&&(d[r]=t[r]);d.originalType=e,d[p]="string"==typeof e?e:n,c[1]=d;for(var i=2;i<l;i++)c[i]=a[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,a)}m.displayName="MDXCreateElement"},76067:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>d,default:()=>k,frontMatter:()=>c,metadata:()=>r,toc:()=>s});var o=a(83117),n=a(67294),l=a(3905);const c={id:"capital-deposit-document",title:"CapitalDepositDocument",hide_table_of_contents:!1},d=void 0,r={unversionedId:"api-reference/objects/capital-deposit-document",id:"api-reference/objects/capital-deposit-document",title:"CapitalDepositDocument",description:"Document provided for a capital deposit case.",source:"@site/docs/api-reference/objects/capital-deposit-document.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/capital-deposit-document",permalink:"/docs/api-reference/objects/capital-deposit-document",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/capital-deposit-document.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-document",title:"CapitalDepositDocument",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CapitalDepositDocumentCanNotBeUploaded",permalink:"/docs/api-reference/objects/capital-deposit-document-can-not-be-uploaded"},next:{title:"CardCanNotBeDigitalizedRejection",permalink:"/docs/api-reference/objects/card-can-not-be-digitalized-rejection"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositDocument.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositdocumentbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositDocument.<b>type</b></code><Bullet /><code>CapitalDepositDocumentType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-capitaldepositdocumentbtypebcodecapitaldepositdocumenttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositDocument.<b>downloadUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositdocumentbdownloadurlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositDocument.<b>uploadedAt</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositdocumentbuploadedatbcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositDocument.<b>status</b></code><Bullet /><code>CapitalDepositDocumentStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-capitaldepositdocumentbstatusbcodecapitaldepositdocumentstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositDocument.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositdocumentbcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositDocument.<b>updatedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositdocumentbupdatedatbcodedatetime--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(n.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(n.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:u,Badge:m},y="wrapper";function k(e){let{components:t,...a}=e;return(0,l.kt)(y,(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Document provided for a capital deposit case."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type CapitalDepositDocument {\n  id: String!\n  type: CapitalDepositDocumentType!\n  downloadUrl: String\n  uploadedAt: Date\n  status: CapitalDepositDocumentStatus!\n  createdAt: DateTime!\n  updatedAt: DateTime!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentbidbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocument.",(0,l.kt)("b",null,"id"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unique identifier of a document.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentbtypebcodecapitaldepositdocumenttype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocument.",(0,l.kt)("b",null,"type"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/capital-deposit-document-type"},(0,l.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentType!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Type of the document.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentbdownloadurlbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocument.",(0,l.kt)("b",null,"downloadUrl"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Url to download the document, null if it has not already been uploaded.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentbuploadedatbcodedate-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocument.",(0,l.kt)("b",null,"uploadedAt"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,l.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Date when the last version of the document has been uploaded.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentbstatusbcodecapitaldepositdocumentstatus--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocument.",(0,l.kt)("b",null,"status"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/capital-deposit-document-status"},(0,l.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentStatus!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Status of the document.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentbcreatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocument.",(0,l.kt)("b",null,"createdAt"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Created date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentbupdatedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocument.",(0,l.kt)("b",null,"updatedAt"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Updated date")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-case"},(0,l.kt)("inlineCode",{parentName:"a"},"CapitalDepositCase")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/shareholder"},(0,l.kt)("inlineCode",{parentName:"a"},"Shareholder")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);