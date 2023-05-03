"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[37897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,g=u["".concat(i,".").concat(m)]||u[m]||s[m]||a;return n?o.createElement(g,l(l({ref:t},d),{},{components:n})):o.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},26418:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var o=n(83117),r=n(67294),a=n(3905);const l={id:"supporting-document-upload-not-allowed-rejection",title:"SupportingDocumentUploadNotAllowedRejection",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/objects/supporting-document-upload-not-allowed-rejection",id:"api-reference/objects/supporting-document-upload-not-allowed-rejection",title:"SupportingDocumentUploadNotAllowedRejection",description:"Rejection returned if the supporting document collection cannot receive supporting documents anymore",source:"@site/docs/api-reference/objects/supporting-document-upload-not-allowed-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/supporting-document-upload-not-allowed-rejection",permalink:"/docs/api-reference/objects/supporting-document-upload-not-allowed-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/supporting-document-upload-not-allowed-rejection.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-upload-not-allowed-rejection",title:"SupportingDocumentUploadNotAllowedRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentUploadInfo",permalink:"/docs/api-reference/objects/supporting-document-upload-info"},next:{title:"SupportingDocumentUploadedStatusInfo",permalink:"/docs/api-reference/objects/supporting-document-uploaded-status-info"}},p={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentUploadNotAllowedRejection.<b>supportingDocumentCollectionStatus</b></code><Bullet /><code>SupportingDocumentCollectionStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentuploadnotallowedrejectionbsupportingdocumentcollectionstatusbcodesupportingdocumentcollectionstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentUploadNotAllowedRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-supportingdocumentuploadnotallowedrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:u,SpecifiedBy:s,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rejection returned if the supporting document collection cannot receive supporting documents anymore"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentUploadNotAllowedRejection implements Rejection {\n  supportingDocumentCollectionStatus: SupportingDocumentCollectionStatus!\n  message: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentuploadnotallowedrejectionbsupportingdocumentcollectionstatusbcodesupportingdocumentcollectionstatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentUploadNotAllowedRejection.",(0,a.kt)("b",null,"supportingDocumentCollectionStatus"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/supporting-document-collection-status"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatus!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentuploadnotallowedrejectionbmessagebcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentUploadNotAllowedRejection.",(0,a.kt)("b",null,"message"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"rejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,a.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/unions/generate-supporting-document-upload-url-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"GenerateSupportingDocumentUploadUrlPayload")),"  ",(0,a.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);