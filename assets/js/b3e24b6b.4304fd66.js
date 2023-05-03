"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79792],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=o.createContext({}),s=function(e){var t=o.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return o.createElement(a.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,m=p["".concat(a,".").concat(f)]||p[f]||d[f]||r;return n?o.createElement(m,c(c({ref:t},u),{},{components:n})):o.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,c=new Array(r);c[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l[p]="string"==typeof e?e:i,c[1]=l;for(var s=2;s<r;s++)c[s]=n[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},74546:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>a,toc:()=>u});var o=n(83117),i=n(67294),r=n(3905);const c={id:"supporting-document-collection-pending-review-status-info",title:"SupportingDocumentCollectionPendingReviewStatusInfo",hide_table_of_contents:!1},l=void 0,a={unversionedId:"api-reference/objects/supporting-document-collection-pending-review-status-info",id:"api-reference/objects/supporting-document-collection-pending-review-status-info",title:"SupportingDocumentCollectionPendingReviewStatusInfo",description:"Supporting document collection with PendingReview status",source:"@site/docs/api-reference/objects/supporting-document-collection-pending-review-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/supporting-document-collection-pending-review-status-info",permalink:"/docs/api-reference/objects/supporting-document-collection-pending-review-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/supporting-document-collection-pending-review-status-info.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-pending-review-status-info",title:"SupportingDocumentCollectionPendingReviewStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"SupportingDocumentCollectionNotFoundRejection",permalink:"/docs/api-reference/objects/supporting-document-collection-not-found-rejection"},next:{title:"SupportingDocumentCollectionRejectedStatusInfo",permalink:"/docs/api-reference/objects/supporting-document-collection-rejected-status-info"}},s={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SupportingDocumentCollectionPendingReviewStatusInfo.<b>status</b></code><Bullet /><code>SupportingDocumentCollectionStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-supportingdocumentcollectionpendingreviewstatusinfobstatusbcodesupportingdocumentcollectionstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>SupportingDocumentCollectionStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"supportingdocumentcollectionstatusinfo-",level:4}],p=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:p,SpecifiedBy:d,Badge:f},g="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Supporting document collection with PendingReview status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportingDocumentCollectionPendingReviewStatusInfo implements SupportingDocumentCollectionStatusInfo {\n  status: SupportingDocumentCollectionStatus!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionpendingreviewstatusinfobstatusbcodesupportingdocumentcollectionstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionPendingReviewStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/supporting-document-collection-status"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatus!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When the supporting document collection is completed and in compliance review")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"supportingdocumentcollectionstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/supporting-document-collection-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusInfo"))," ",(0,r.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}y.isMDXComponent=!0}}]);