"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25453],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?l(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):l(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function r(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)o=l[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=s(o),m=a,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return o?n.createElement(g,c(c({ref:t},u),{},{components:o})):n.createElement(g,c({ref:t},u))}));function g(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=o.length,c=new Array(l);c[0]=m;var r={};for(var i in t)hasOwnProperty.call(t,i)&&(r[i]=t[i]);r.originalType=e,r[d]="string"==typeof e?e:a,c[1]=r;for(var s=2;s<l;s++)c[s]=o[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},24240:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>g,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>m});var n=o(87462),a=o(67294),l=o(3905);const c={id:"supporting-document-collection-status-does-not-allow-update-rejection",title:"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection",hide_table_of_contents:!1},r=void 0,i={unversionedId:"api-reference/objects/supporting-document-collection-status-does-not-allow-update-rejection",id:"api-reference/objects/supporting-document-collection-status-does-not-allow-update-rejection",title:"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection",description:"Rejection returned if supporting document cannot be updated because its supporting document collection status is not WaitingForDocument",source:"@site/docs/api-reference/objects/supporting-document-collection-status-does-not-allow-update-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/supporting-document-collection-status-does-not-allow-update-rejection",permalink:"/api-reference/objects/supporting-document-collection-status-does-not-allow-update-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/supporting-document-collection-status-does-not-allow-update-rejection.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-status-does-not-allow-update-rejection",title:"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection",hide_table_of_contents:!1}},s={},u=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionstatusdoesnotallowupdaterejectionbmessagebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection.<b>supportingDocumentCollectionStatus</b></code><Bullet /><code>SupportingDocumentCollectionStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionstatusdoesnotallowupdaterejectionbsupportingdocumentcollectionstatusbcodesupportingdocumentcollectionstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection.<b>supportingDocumentCollection</b></code><Bullet /><code>SupportingDocumentCollection!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionstatusdoesnotallowupdaterejectionbsupportingdocumentcollectionbcodesupportingdocumentcollection--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],g=e=>{let{dataOpen:t,dataClose:o,children:c,startOpen:r=!1}=e;const[i,s]=(0,a.useState)(r);return(0,l.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},i?t:o),i&&c)},b={Bullet:u,SpecifiedBy:d,Badge:p,toc:m,Details:g},f="wrapper";function y(e){let{components:t,...o}=e;return(0,l.kt)(f,(0,n.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Rejection returned if supporting document cannot be updated because its supporting document collection status is not WaitingForDocument"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection implements Rejection {\n  message: String!\n  supportingDocumentCollectionStatus: SupportingDocumentCollectionStatus!\n  supportingDocumentCollection: SupportingDocumentCollection!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusdoesnotallowupdaterejectionbmessagebcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection.",(0,l.kt)("b",null,"message"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusdoesnotallowupdaterejectionbsupportingdocumentcollectionstatusbcodesupportingdocumentcollectionstatus--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection.",(0,l.kt)("b",null,"supportingDocumentCollectionStatus"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/supporting-document-collection-status"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatus!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusdoesnotallowupdaterejectionbsupportingdocumentcollectionbcodesupportingdocumentcollection--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection.",(0,l.kt)("b",null,"supportingDocumentCollection"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/objects/supporting-document-collection"},(0,l.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollection!"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"rejection-"},(0,l.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,l.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,l.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/unions/update-supporting-document-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"UpdateSupportingDocumentPayload")),"  ",(0,l.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);