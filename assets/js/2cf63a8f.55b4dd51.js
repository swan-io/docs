"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[7815],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),d=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(i.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},g=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=d(n),g=r,m=s["".concat(i,".").concat(g)]||s[g]||u[g]||c;return n?o.createElement(m,l(l({ref:t},p),{},{components:n})):o.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=g;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[s]="string"==typeof e?e:r,l[1]=a;for(var d=2;d<c;d++)l[d]=n[d];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}g.displayName="MDXCreateElement"},90282:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>a,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var o=n(83117),r=n(67294),c=n(3905);const l={id:"supporting-document-collection-edge",title:"SupportingDocumentCollectionEdge",hide_table_of_contents:!1},a=void 0,i={unversionedId:"api/objects/supporting-document-collection-edge",id:"api/objects/supporting-document-collection-edge",title:"SupportingDocumentCollectionEdge",description:"Implements the Relay Edge interface",source:"@site/docs/api/objects/supporting-document-collection-edge.mdx",sourceDirName:"api/objects",slug:"/api/objects/supporting-document-collection-edge",permalink:"/docs/api/objects/supporting-document-collection-edge",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/supporting-document-collection-edge.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-edge",title:"SupportingDocumentCollectionEdge",hide_table_of_contents:!1}},d={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionEdge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionedgebcursorbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionEdge.<b>node</b></code><Bullet /><code>SupportingDocumentCollection!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionedgebnodebcodesupportingdocumentcollection--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="secondary" text="interface"/>',id:"edge-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:s,SpecifiedBy:u,Badge:g},f="wrapper";function y(e){let{components:t,...n}=e;return(0,c.kt)(f,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Implements the Relay Edge interface"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentCollectionEdge implements Edge {\n  cursor: String!\n  node: SupportingDocumentCollection!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionedgebcursorbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionEdge.",(0,c.kt)("b",null,"cursor"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Opaque identifier pointing to this node in the pagination mechanism")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionedgebnodebcodesupportingdocumentcollection--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionEdge.",(0,c.kt)("b",null,"node"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/supporting-document-collection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollection!"))," ",(0,c.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The supporting document collection")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"edge-"},(0,c.kt)("a",{parentName:"h4",href:"/api/interfaces/edge"},(0,c.kt)("inlineCode",{parentName:"a"},"Edge"))," ",(0,c.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type.")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-collection-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionConnection")),"  ",(0,c.kt)(g,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);