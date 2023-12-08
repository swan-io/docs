"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[75746],{3905:(e,t,o)=>{o.d(t,{Zo:()=>d,kt:()=>g});var n=o(67294);function l(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){l(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,l=function(e,t){if(null==e)return{};var o,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(l[o]=e[o]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(l[o]=e[o])}return l}var a=n.createContext({}),u=function(e){var t=n.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},d=function(e){var t=u(e.components);return n.createElement(a.Provider,{value:t},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,l=e.mdxType,r=e.originalType,a=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=u(o),m=l,g=s["".concat(a,".").concat(m)]||s[m]||p[m]||r;return o?n.createElement(g,c(c({ref:t},d),{},{components:o})):n.createElement(g,c({ref:t},d))}));function g(e,t){var o=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=o.length,c=new Array(r);c[0]=m;var i={};for(var a in t)hasOwnProperty.call(t,a)&&(i[a]=t[a]);i.originalType=e,i[s]="string"==typeof e?e:l,c[1]=i;for(var u=2;u<r;u++)c[u]=o[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},85700:(e,t,o)=>{o.r(t),o.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>g,SpecifiedBy:()=>s,assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>c,metadata:()=>a,toc:()=>m});var n=o(87462),l=o(67294),r=o(3905);const c={id:"request-supporting-document-collection-review-payload",title:"RequestSupportingDocumentCollectionReviewPayload",hide_table_of_contents:!1},i=void 0,a={unversionedId:"api-reference/unions/request-supporting-document-collection-review-payload",id:"api-reference/unions/request-supporting-document-collection-review-payload",title:"RequestSupportingDocumentCollectionReviewPayload",description:"No description",source:"@site/docs/api-reference/unions/request-supporting-document-collection-review-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/request-supporting-document-collection-review-payload",permalink:"/api-reference/unions/request-supporting-document-collection-review-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/request-supporting-document-collection-review-payload.mdx",tags:[],version:"current",frontMatter:{id:"request-supporting-document-collection-review-payload",title:"RequestSupportingDocumentCollectionReviewPayload",hide_table_of_contents:!1}},u={},d=()=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(l.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(l.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),m=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RequestSupportingDocumentCollectionReviewPayload.<b>RequestSupportingDocumentCollectionReviewSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewpayloadbrequestsupportingdocumentcollectionreviewsuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestSupportingDocumentCollectionReviewPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewpayloadbforbiddenrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestSupportingDocumentCollectionReviewPayload.<b>SupportingDocumentCollectionNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewpayloadbsupportingdocumentcollectionnotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestSupportingDocumentCollectionReviewPayload.<b>SupportingDocumentCollectionStatusNotAllowedRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewpayloadbsupportingdocumentcollectionstatusnotallowedrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestSupportingDocumentCollectionReviewPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewpayloadbvalidationrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],g=e=>{let{dataOpen:t,dataClose:o,children:c,startOpen:i=!1}=e;const[a,u]=(0,l.useState)(i);return(0,r.kt)("details",(0,n.Z)({},a?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},a?t:o),a&&c)},b={Bullet:d,SpecifiedBy:s,Badge:p,toc:m,Details:g},y="wrapper";function f(e){let{components:t,...o}=e;return(0,r.kt)(y,(0,n.Z)({},b,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union RequestSupportingDocumentCollectionReviewPayload = RequestSupportingDocumentCollectionReviewSuccessPayload | ForbiddenRejection | SupportingDocumentCollectionNotFoundRejection | SupportingDocumentCollectionStatusNotAllowedRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewpayloadbrequestsupportingdocumentcollectionreviewsuccesspayloadbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/request-supporting-document-collection-review-success-payload"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RequestSupportingDocumentCollectionReviewPayload.",(0,r.kt)("b",null,"RequestSupportingDocumentCollectionReviewSuccessPayload")))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewpayloadbforbiddenrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RequestSupportingDocumentCollectionReviewPayload.",(0,r.kt)("b",null,"ForbiddenRejection")))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewpayloadbsupportingdocumentcollectionnotfoundrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/supporting-document-collection-not-found-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RequestSupportingDocumentCollectionReviewPayload.",(0,r.kt)("b",null,"SupportingDocumentCollectionNotFoundRejection")))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the supporting document collection was not found")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewpayloadbsupportingdocumentcollectionstatusnotallowedrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/supporting-document-collection-status-not-allowed-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RequestSupportingDocumentCollectionReviewPayload.",(0,r.kt)("b",null,"SupportingDocumentCollectionStatusNotAllowedRejection")))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the status transition is not allowed")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-requestsupportingdocumentcollectionreviewpayloadbvalidationrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"RequestSupportingDocumentCollectionReviewPayload.",(0,r.kt)("b",null,"ValidationRejection")))," ",(0,r.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/request-supporting-document-collection-review"},(0,r.kt)("inlineCode",{parentName:"a"},"requestSupportingDocumentCollectionReview")),"  ",(0,r.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);