"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),u=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",i={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=a,g=s["".concat(p,".").concat(m)]||s[m]||i[m]||r;return n?o.createElement(g,l(l({ref:t},d),{},{components:n})):o.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23633:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>i,assets:()=>u,contentTitle:()=>c,default:()=>f,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var o=n(83117),a=n(67294),r=n(3905);const l={id:"generate-supporting-document-upload-url-success-payload",title:"GenerateSupportingDocumentUploadUrlSuccessPayload",hide_table_of_contents:!1},c=void 0,p={unversionedId:"api/objects/generate-supporting-document-upload-url-success-payload",id:"api/objects/generate-supporting-document-upload-url-success-payload",title:"GenerateSupportingDocumentUploadUrlSuccessPayload",description:"No description",source:"@site/docs/api/objects/generate-supporting-document-upload-url-success-payload.mdx",sourceDirName:"api/objects",slug:"/api/objects/generate-supporting-document-upload-url-success-payload",permalink:"/docs/api/objects/generate-supporting-document-upload-url-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/generate-supporting-document-upload-url-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"generate-supporting-document-upload-url-success-payload",title:"GenerateSupportingDocumentUploadUrlSuccessPayload",hide_table_of_contents:!1}},u={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>GenerateSupportingDocumentUploadUrlSuccessPayload.<b>supportingDocumentId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-generatesupportingdocumentuploadurlsuccesspayloadbsupportingdocumentidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>GenerateSupportingDocumentUploadUrlSuccessPayload.<b>upload</b></code><Bullet /><code>SupportingDocumentUploadInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-generatesupportingdocumentuploadurlsuccesspayloadbuploadbcodesupportingdocumentuploadinfo--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],s=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:d,Bullet:s,SpecifiedBy:i,Badge:m},y="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type GenerateSupportingDocumentUploadUrlSuccessPayload {\n  supportingDocumentId: String!\n  upload: SupportingDocumentUploadInfo!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-generatesupportingdocumentuploadurlsuccesspayloadbsupportingdocumentidbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GenerateSupportingDocumentUploadUrlSuccessPayload.",(0,r.kt)("b",null,"supportingDocumentId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Id of the supporting document created for this uploadUrl")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-generatesupportingdocumentuploadurlsuccesspayloadbuploadbcodesupportingdocumentuploadinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"GenerateSupportingDocumentUploadUrlSuccessPayload.",(0,r.kt)("b",null,"upload"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/objects/supporting-document-upload-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentUploadInfo!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Info to upload the document : url and fields to add along file in form (POST)")),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/unions/generate-supporting-document-upload-url-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"GenerateSupportingDocumentUploadUrlPayload")),"  ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);