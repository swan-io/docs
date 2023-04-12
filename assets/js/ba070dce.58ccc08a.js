"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[92945],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),l=u(n),m=r,y=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return n?o.createElement(y,c(c({ref:t},i),{},{components:n})):o.createElement(y,c({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[l]="string"==typeof e?e:r,c[1]=p;for(var u=2;u<a;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58744:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>l,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>p,default:()=>f,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var o=n(83117),r=n(67294),a=n(3905);const c={id:"update-supporting-document-success-payload",title:"UpdateSupportingDocumentSuccessPayload",hide_table_of_contents:!1},p=void 0,s={unversionedId:"api/objects/update-supporting-document-success-payload",id:"api/objects/update-supporting-document-success-payload",title:"UpdateSupportingDocumentSuccessPayload",description:"No description",source:"@site/docs/api/objects/update-supporting-document-success-payload.mdx",sourceDirName:"api/objects",slug:"/api/objects/update-supporting-document-success-payload",permalink:"/docs/api/objects/update-supporting-document-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/update-supporting-document-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-supporting-document-success-payload",title:"UpdateSupportingDocumentSuccessPayload",hide_table_of_contents:!1}},u={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateSupportingDocumentSuccessPayload.<b>supportingDocument</b></code><Bullet /><code>SupportingDocument!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-updatesupportingdocumentsuccesspayloadbsupportingdocumentbcodesupportingdocument--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],l=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:l,SpecifiedBy:d,Badge:m},g="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateSupportingDocumentSuccessPayload {\n  supportingDocument: SupportingDocument!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-updatesupportingdocumentsuccesspayloadbsupportingdocumentbcodesupportingdocument--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"UpdateSupportingDocumentSuccessPayload.",(0,a.kt)("b",null,"supportingDocument"))),(0,a.kt)(l,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/objects/supporting-document"},(0,a.kt)("inlineCode",{parentName:"a"},"SupportingDocument!"))," ",(0,a.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/unions/update-supporting-document-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateSupportingDocumentPayload")),"  ",(0,a.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);