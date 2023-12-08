"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[36776],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),u=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(d.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,k=c["".concat(d,".").concat(m)]||c[m]||s[m]||r;return n?o.createElement(k,l(l({ref:t},p),{},{components:n})):o.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},45889:(e,t,n)=>{n.d(t,{ZP:()=>i});var o=n(87462),a=(n(67294),n(3905));const r={toc:[]},l="wrapper";function i(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,o.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A collection of documents (think of a folder) containing documents gathered for a specific reason, such as onboarding.\nSwan collects these documents according to local regulations."))}i.isMDXComponent=!0},27440:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var o=n(87462),a=(n(67294),n(3905)),r=n(45889);const l={title:"Supporting document collection"},i="Supporting document collection",d={unversionedId:"topics/onboarding/documents/index",id:"topics/onboarding/documents/index",title:"Supporting document collection",description:"*",source:"@site/docs/topics/onboarding/documents/index.mdx",sourceDirName:"topics/onboarding/documents",slug:"/topics/onboarding/documents/",permalink:"/topics/onboarding/documents/",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/onboarding/documents/index.mdx",tags:[],version:"current",frontMatter:{title:"Supporting document collection"},sidebar:"docSidebar",previous:{title:"Update a company onboarding",permalink:"/topics/onboarding/company/guide-update-onboarding"},next:{title:"Get a list of required documents",permalink:"/topics/onboarding/documents/guide-list-documents"}},u={},p=[{value:"Options for collecting documents",id:"collect-documents",level:2},{value:"Collection statuses",id:"collection-statuses",level:2},{value:"Document statuses",id:"document-statuses",level:2},{value:"Document purposes and types",id:"document-purposes-types",level:2},{value:"Webhooks",id:"webhooks",level:2},{value:"Guides",id:"guides",level:2}],c={toc:p},s="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(s,(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"supporting-document-collection"},"Supporting document collection"),(0,a.kt)("hr",null),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Supporting document collection")," ",(0,a.kt)("em",{parentName:"p"},(0,a.kt)(r.ZP,{mdxType:"SupportingDocumentCollectionDefinition"}))),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Swan is sometimes required to collect documents to ",(0,a.kt)("strong",{parentName:"p"},"verify onboarding details"),".\nEach ",(0,a.kt)("strong",{parentName:"p"},"document")," is uploaded individually into a ",(0,a.kt)("strong",{parentName:"p"},"collection"),".\nAfter all required documents are uploaded, Swan ",(0,a.kt)("strong",{parentName:"p"},"reviews the collection"),"."),(0,a.kt)("h2",{id:"collect-documents"},"Options for collecting documents"),(0,a.kt)("p",null,"There are two primary options to collect required supporting documents:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Use the API.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"No emails are exchanged."),(0,a.kt)("li",{parentName:"ol"},"You'll know every time a document is needed with webhook notifications."),(0,a.kt)("li",{parentName:"ol"},"You communicate with your end users to gather the required documents."),(0,a.kt)("li",{parentName:"ol"},"Choose the API or the Dashboard for most actions, including uploading documents."))),(0,a.kt)("li",{parentName:"ol"},"Swan communicates directly with you or your end users.",(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"You or your end user receives an email."),(0,a.kt)("li",{parentName:"ol"},"You or your end user uploads the document through Web Banking."),(0,a.kt)("li",{parentName:"ol"},"You'll be able to see the document after the upload."),(0,a.kt)("li",{parentName:"ol"},"There is no trace of your documents in the API if you use the email option.")))),(0,a.kt)("admonition",{title:"Recommendation",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Swan recommends ",(0,a.kt)("strong",{parentName:"p"},"using the API")," to manage documents and collections.")),(0,a.kt)("h2",{id:"collection-statuses"},"Collection statuses"),(0,a.kt)("p",null,"Each ",(0,a.kt)("strong",{parentName:"p"},"collection")," runs through the following statuses.\nThis process starts after an onboarding is created."),(0,a.kt)("mermaid",{value:"%%{ init: { 'flowchart': { 'curve': 'linear' } } }%%\nflowchart LR\n    CO((Collection<br/>created)) -.-> W[WaitingForDocument]\n    W -.-> PR[PendingReview]\n    PR -.-> W\n    PR --\x3e A[Approved]\n    PR --\x3e RJ[Rejected]\n    PR --\x3e C[Canceled]\n    subgraph F[Final status]\n        A\n        RJ\n        C\n    end\n    style CO fill:#D4D3D5,stroke:#514F59\n    style F fill:#fffdf4,stroke:#cca922"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Collection status"),(0,a.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Waiting for document")),(0,a.kt)("td",{parentName:"tr",align:null},"Onboarding is created and ready for documents, or documents were submitted but Swan is requesting additional documents",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Next step"),": moves to ",(0,a.kt)("inlineCode",{parentName:"td"},"Pending review")," after onboarding is finalized")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Pending review")),(0,a.kt)("td",{parentName:"tr",align:null},"Onboarding is finalized and you requested a document review",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Next step"),": Can move to ",(0,a.kt)("inlineCode",{parentName:"td"},"Approved"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Rejected"),", or ",(0,a.kt)("inlineCode",{parentName:"td"},"Canceled")," depending on partner actions and Swan decisions (or, if documents are insufficient \u2192 ",(0,a.kt)("inlineCode",{parentName:"td"},"Waiting for document"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Approved")),(0,a.kt)("td",{parentName:"tr",align:null},"Swan approved supporting document collection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Rejected")),(0,a.kt)("td",{parentName:"tr",align:null},"Swan rejected supporting document collection")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Canceled")),(0,a.kt)("td",{parentName:"tr",align:null},"Swan canceled supporting document collection (this could also be at the partner's request)")))),(0,a.kt)("h2",{id:"document-statuses"},"Document statuses"),(0,a.kt)("p",null,"Supporting document collections are empty when created.\nYou need to add documents to these collections as requested.\nFor each required document, you'll create a document within the collection."),(0,a.kt)("p",null,"Each ",(0,a.kt)("strong",{parentName:"p"},"document")," added to a collection runs through the following statuses."),(0,a.kt)("mermaid",{value:"%%{ init: { 'flowchart': { 'curve': 'linear' } } }%%\nflowchart LR\n    DO((Document<br/>created)) -.-> W[WaitingForUpload]\n    W --\x3e NU[NotUploaded]\n    W -.-> U[Uploaded]\n    U --\x3e V[Validated]\n    U --\x3e RF[Refused]\n    U --\x3e D[Deleted]\n    subgraph F[Final status]\n        V\n        RF\n        D\n        NU\n    end\n    style DO fill:#D4D3D5,stroke:#514F59\n    style F fill:#fffdf4,stroke:#cca922"}),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Document status"),(0,a.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Waiting for upload")),(0,a.kt)("td",{parentName:"tr",align:null},"URL to upload the document has been generated",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Next step"),":",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",null,"If the document is uploaded \u2192 ",(0,a.kt)("inlineCode",{parentName:"td"},"Uploaded")),(0,a.kt)("li",null,"If onboarding is finalized before the document is uploaded \u2192 ",(0,a.kt)("inlineCode",{parentName:"td"},"Not uploaded"))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Uploaded")),(0,a.kt)("td",{parentName:"tr",align:null},"Document is uploaded",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)("strong",{parentName:"td"},"Next step"),":",(0,a.kt)("br",null),(0,a.kt)("ul",null,(0,a.kt)("li",null,"If a review is completed on the uploaded document \u2192 Status moves to ",(0,a.kt)("inlineCode",{parentName:"td"},"Validated"),", ",(0,a.kt)("inlineCode",{parentName:"td"},"Refused"),", or ",(0,a.kt)("inlineCode",{parentName:"td"},"Deleted")," depending on Partner actions and Swan decisions"),(0,a.kt)("li",null,"If onboarding is finalized before the uploaded document is reviewed \u2192 ",(0,a.kt)("inlineCode",{parentName:"td"},"Not uploaded"))))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Validated")),(0,a.kt)("td",{parentName:"tr",align:null},"Swan approved the document")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Refused")),(0,a.kt)("td",{parentName:"tr",align:null},"Swan refused the document")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Deleted")),(0,a.kt)("td",{parentName:"tr",align:null},"Swan or the partner deleted the document")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"Not uploaded")),(0,a.kt)("td",{parentName:"tr",align:null},"URL was generated but collection was closed before a document was uploaded")))),(0,a.kt)("h2",{id:"document-purposes-types"},"Document purposes and types"),(0,a.kt)("p",null,"For all supporting documents, there is a high-level ",(0,a.kt)("strong",{parentName:"p"},"purpose")," and a more specific ",(0,a.kt)("strong",{parentName:"p"},"type")," (",(0,a.kt)("inlineCode",{parentName:"p"},"supportingDocumentPurpose")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"supportingDocumentType"),").\nBoth purpose and type can be exposed in the onboarding success payload."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Common purposes")," (not exhaustive):"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CompanyRegistration")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SignedStatus")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ProofOfAddress")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ProofOfIncome")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Other"))),(0,a.kt)("h2",{id:"webhooks"},"Webhooks"),(0,a.kt)("p",null,"There are two webhooks associated with supporting documents:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SupportingDocumentCollection.Created")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"SupportingDocumentCollection.Updated"))),(0,a.kt)("h2",{id:"guides"},"Guides"),(0,a.kt)("p",null,"Use the following guides to manage required documents for the onboarding process."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/topics/onboarding/documents/guide-add-document-webhooks"},"Add document webhooks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/topics/onboarding/documents/guide-list-documents"},"Get a list of required documents")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/topics/onboarding/documents/guide-upload-document"},"Upload a document")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/topics/onboarding/documents/guide-retrieve-info"},"Retrieve information about a collection or document")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/topics/onboarding/documents/guide-request-collection-review"},"Request a collection review")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/topics/onboarding/documents/guide-delete-document"},"Delete a document")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/topics/onboarding/documents/sandbox"},"Sandbox"))))}m.isMDXComponent=!0}}]);