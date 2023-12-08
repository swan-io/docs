"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[97607],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>f});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(a),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||l;return a?n.createElement(f,i(i({ref:t},d),{},{components:a})):n.createElement(f,i({ref:t},d))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,i=new Array(l);i[0]=m;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[p]="string"==typeof e?e:o,i[1]=r;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},63490:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>r,default:()=>y,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(87462),o=a(67294),l=a(3905);const i={id:"capital-deposit-document-status",title:"CapitalDepositDocumentStatus",hide_table_of_contents:!1},r=void 0,s={unversionedId:"api-reference/enums/capital-deposit-document-status",id:"api-reference/enums/capital-deposit-document-status",title:"CapitalDepositDocumentStatus",description:"Status of the Capital Deposit Case",source:"@site/docs/api-reference/enums/capital-deposit-document-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/capital-deposit-document-status",permalink:"/api-reference/enums/capital-deposit-document-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/capital-deposit-document-status.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-document-status",title:"CapitalDepositDocumentStatus",hide_table_of_contents:!1}},c={},d=()=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(o.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,l.kt)(o.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositDocumentStatus.<b>Pending</b></code>",id:"code-style-fontweight-normal-capitaldepositdocumentstatusbpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositDocumentStatus.<b>Uploaded</b></code>",id:"code-style-fontweight-normal-capitaldepositdocumentstatusbuploadedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositDocumentStatus.<b>Validated</b></code>",id:"code-style-fontweight-normal-capitaldepositdocumentstatusbvalidatedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositDocumentStatus.<b>Refused</b></code>",id:"code-style-fontweight-normal-capitaldepositdocumentstatusbrefusedbcode",level:4},{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:i,startOpen:r=!1}=e;const[s,c]=(0,o.useState)(r);return(0,l.kt)("details",(0,n.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:a),s&&i)},b={Bullet:d,SpecifiedBy:p,Badge:u,toc:m,Details:f},k="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(k,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Status of the Capital Deposit Case"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CapitalDepositDocumentStatus {\n  Pending\n  Uploaded\n  Validated\n  Refused\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentstatusbpendingbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocumentStatus.",(0,l.kt)("b",null,"Pending")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Document is not uploaded yet.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentstatusbuploadedbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocumentStatus.",(0,l.kt)("b",null,"Uploaded")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Document has been uploaded but not verified by Swan yet.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentstatusbvalidatedbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocumentStatus.",(0,l.kt)("b",null,"Validated")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Document has been uploaded and verified by Swan.")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositdocumentstatusbrefusedbcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositDocumentStatus.",(0,l.kt)("b",null,"Refused")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Document has been refused by Swan, it must be uploaded again.")),(0,l.kt)("h3",{id:"member-of"},"Member Of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-document"},(0,l.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocument")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-document-pending-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentPendingStatusInfo")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-document-refused-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentRefusedStatusInfo")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/interfaces/capital-deposit-document-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentStatusInfo")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-document-uploaded-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentUploadedStatusInfo")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/capital-deposit-document-validated-status-info"},(0,l.kt)("inlineCode",{parentName:"a"},"CapitalDepositDocumentValidatedStatusInfo")),"  ",(0,l.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);