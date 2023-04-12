"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36400],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var o=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,o,i=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var l=o.createContext({}),u=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):c(c({},e),t)),n},s=function(t){var e=u(t.components);return o.createElement(l.Provider,{value:e},t.children)},p="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,l=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),p=u(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||r;return n?o.createElement(f,c(c({ref:e},s),{},{components:n})):o.createElement(f,c({ref:e},s))}));function f(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,c=new Array(r);c[0]=m;var a={};for(var l in e)hasOwnProperty.call(e,l)&&(a[l]=e[l]);a.originalType=t,a[p]="string"==typeof t?t:i,c[1]=a;for(var u=2;u<r;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},72231:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>a,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var o=n(83117),i=n(67294),r=n(3905);const c={id:"supporting-document-collection-waiting-for-document-status-info",title:"SupportingDocumentCollectionWaitingForDocumentStatusInfo",hide_table_of_contents:!1},a=void 0,l={unversionedId:"api/objects/supporting-document-collection-waiting-for-document-status-info",id:"api/objects/supporting-document-collection-waiting-for-document-status-info",title:"SupportingDocumentCollectionWaitingForDocumentStatusInfo",description:"Supporting document collection with WaitingForUpload status",source:"@site/docs/api/objects/supporting-document-collection-waiting-for-document-status-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/supporting-document-collection-waiting-for-document-status-info",permalink:"/docs/api/objects/supporting-document-collection-waiting-for-document-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/supporting-document-collection-waiting-for-document-status-info.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-waiting-for-document-status-info",title:"SupportingDocumentCollectionWaitingForDocumentStatusInfo",hide_table_of_contents:!1}},u={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionWaitingForDocumentStatusInfo.<b>status</b></code><Bullet /><code>SupportingDocumentCollectionStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionwaitingfordocumentstatusinfobstatusbcodesupportingdocumentcollectionstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SupportingDocumentCollectionStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"supportingdocumentcollectionstatusinfo-",level:4}],p=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=t=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+t.class},t.text)),f={toc:s,Bullet:p,SpecifiedBy:d,Badge:m},g="wrapper";function y(t){let{components:e,...n}=t;return(0,r.kt)(g,(0,o.Z)({},f,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Supporting document collection with WaitingForUpload status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentCollectionWaitingForDocumentStatusInfo implements SupportingDocumentCollectionStatusInfo {\n  status: SupportingDocumentCollectionStatus!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionwaitingfordocumentstatusinfobstatusbcodesupportingdocumentcollectionstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionWaitingForDocumentStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/supporting-document-collection-status"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatus!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the Supporting Document Collection is created")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"supportingdocumentcollectionstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api/interfaces/supporting-document-collection-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusInfo"))," ",(0,r.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}y.isMDXComponent=!0}}]);