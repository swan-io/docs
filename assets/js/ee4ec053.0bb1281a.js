"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79029],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>g});var n=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function c(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?c(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):c(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},c=Object.keys(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)o=c[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var r=n.createContext({}),p=function(e){var t=n.useContext(r),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(r.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,c=e.originalType,r=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(o),m=l,g=s["".concat(r,".").concat(m)]||s[m]||d[m]||c;return o?n.createElement(g,a(a({ref:t},u),{},{components:o})):n.createElement(g,a({ref:t},u))}));function g(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=o.length,a=new Array(c);a[0]=m;var i={};for(var r in t)hasOwnProperty.call(t,r)&&(i[r]=t[r]);i.originalType=e,i[s]="string"==typeof e?e:l,a[1]=i;for(var p=2;p<c;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},1247:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>d,assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>a,metadata:()=>r,toc:()=>u});var n=o(83117),l=o(67294),c=o(3905);const a={id:"supporting-document-collection-status",title:"SupportingDocumentCollectionStatus",hide_table_of_contents:!1},i=void 0,r={unversionedId:"api/enums/supporting-document-collection-status",id:"api/enums/supporting-document-collection-status",title:"SupportingDocumentCollectionStatus",description:"Verification status of a supporting document collection",source:"@site/docs/api/enums/supporting-document-collection-status.mdx",sourceDirName:"api/enums",slug:"/api/enums/supporting-document-collection-status",permalink:"/docs/api/enums/supporting-document-collection-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/supporting-document-collection-status.mdx",tags:[],version:"current",frontMatter:{id:"supporting-document-collection-status",title:"SupportingDocumentCollectionStatus",hide_table_of_contents:!1}},p={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentCollectionStatus.<b>WaitingForDocument</b></code>",id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbwaitingfordocumentbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentCollectionStatus.<b>PendingReview</b></code>",id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbpendingreviewbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentCollectionStatus.<b>Approved</b></code>",id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbapprovedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentCollectionStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbcanceledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>SupportingDocumentCollectionStatus.<b>Rejected</b></code>",id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbrejectedbcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,c.kt)(l.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,c.kt)(l.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(l.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:u,Bullet:s,SpecifiedBy:d,Badge:m},f="wrapper";function k(e){let{components:t,...o}=e;return(0,c.kt)(f,(0,n.Z)({},g,o,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Verification status of a supporting document collection"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SupportingDocumentCollectionStatus {\n  WaitingForDocument\n  PendingReview\n  Approved\n  Canceled\n  Rejected\n}\n")),(0,c.kt)("h3",{id:"values"},"Values"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbwaitingfordocumentbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatus.",(0,c.kt)("b",null,"WaitingForDocument")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"When the supporting document collection is created and on going")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbpendingreviewbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatus.",(0,c.kt)("b",null,"PendingReview")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"When the supporting document collection is completed and in compliance review")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbapprovedbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatus.",(0,c.kt)("b",null,"Approved")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"When the supporting document collection is approved. Final status")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbcanceledbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatus.",(0,c.kt)("b",null,"Canceled")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"When the supporting document collection is canceled. Final status")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-supportingdocumentcollectionstatusbrejectedbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SupportingDocumentCollectionStatus.",(0,c.kt)("b",null,"Rejected")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"When the supporting document collection is rejected. Final status")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-collection-approved-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionApprovedStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-collection-canceled-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionCanceledStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-collection-pending-review-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionPendingReviewStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-collection-rejected-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionRejectedStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-collection-status-does-not-allow-deletion-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusDoesNotAllowDeletionRejection")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-collection-status-does-not-allow-update-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusDoesNotAllowUpdateRejection")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/interfaces/supporting-document-collection-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-collection-status-not-allowed-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionStatusNotAllowedRejection")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-collection-waiting-for-document-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentCollectionWaitingForDocumentStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/supporting-document-upload-not-allowed-rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"SupportingDocumentUploadNotAllowedRejection")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);