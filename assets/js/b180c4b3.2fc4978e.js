"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[33036],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=i(n),g=a,m=d["".concat(p,".").concat(g)]||d[g]||s[g]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=g;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[d]="string"==typeof e?e:a,l[1]=u;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},22034:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>c,Details:()=>m,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>g});var r=n(87462),a=n(67294),o=n(3905);const l={id:"generate-supporting-document-upload-url",title:"generateSupportingDocumentUploadUrl",hide_table_of_contents:!1},u=void 0,p={unversionedId:"api-reference/mutations/generate-supporting-document-upload-url",id:"api-reference/mutations/generate-supporting-document-upload-url",title:"generateSupportingDocumentUploadUrl",description:"Generate and return a presigned URL to upload a unique file for the supporting document collection",source:"@site/docs/api-reference/mutations/generate-supporting-document-upload-url.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/generate-supporting-document-upload-url",permalink:"/api-reference/mutations/generate-supporting-document-upload-url",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/generate-supporting-document-upload-url.mdx",tags:[],version:"current",frontMatter:{id:"generate-supporting-document-upload-url",title:"generateSupportingDocumentUploadUrl",hide_table_of_contents:!1}},i={},c=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>generateSupportingDocumentUploadUrl.<b>input</b></code><Bullet /><code>GenerateSupportingDocumentUploadUrlInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-generatesupportingdocumentuploadurlbinputbcodegeneratesupportingdocumentuploadurlinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>GenerateSupportingDocumentUploadUrlPayload</code> <Badge class="badge badge--secondary" text="union"/>',id:"generatesupportingdocumentuploadurlpayload-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:u=!1}=e;const[p,i]=(0,a.useState)(u);return(0,o.kt)("details",(0,r.Z)({},p?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},p?t:n),p&&l)},f={Bullet:c,SpecifiedBy:d,Badge:s,toc:g,Details:m},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Generate and return a presigned URL to upload a unique file for the supporting document collection"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This mutation is restricted to a Project access token (",(0,o.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"generateSupportingDocumentUploadUrl(\n  input: GenerateSupportingDocumentUploadUrlInput!\n): GenerateSupportingDocumentUploadUrlPayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-generatesupportingdocumentuploadurlbinputbcodegeneratesupportingdocumentuploadurlinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"generateSupportingDocumentUploadUrl.",(0,o.kt)("b",null,"input"))),(0,o.kt)(c,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/generate-supporting-document-upload-url-input"},(0,o.kt)("inlineCode",{parentName:"a"},"GenerateSupportingDocumentUploadUrlInput!"))," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"generatesupportingdocumentuploadurlpayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/unions/generate-supporting-document-upload-url-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"GenerateSupportingDocumentUploadUrlPayload"))," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}b.isMDXComponent=!0}}]);