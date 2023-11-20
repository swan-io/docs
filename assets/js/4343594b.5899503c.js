"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[75730],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),i=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,u=r(e,["components","mdxType","originalType","parentName"]),d=i(n),f=o,p=d["".concat(s,".").concat(f)]||d[f]||m[f]||c;return n?a.createElement(p,l(l({ref:t},u),{},{components:n})):a.createElement(p,l({ref:t},u))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,l=new Array(c);l[0]=f;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[d]="string"==typeof e?e:o,l[1]=r;for(var i=2;i<c;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},32799:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>m,assets:()=>i,contentTitle:()=>r,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var a=n(83117),o=n(67294),c=n(3905);const l={id:"legal-document-upcoming-status-info",title:"LegalDocumentUpcomingStatusInfo",hide_table_of_contents:!1},r=void 0,s={unversionedId:"api-reference/objects/legal-document-upcoming-status-info",id:"api-reference/objects/legal-document-upcoming-status-info",title:"LegalDocumentUpcomingStatusInfo",description:"No description",source:"@site/docs/api-reference/objects/legal-document-upcoming-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/legal-document-upcoming-status-info",permalink:"/api-reference/objects/legal-document-upcoming-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/legal-document-upcoming-status-info.mdx",tags:[],version:"current",frontMatter:{id:"legal-document-upcoming-status-info",title:"LegalDocumentUpcomingStatusInfo",hide_table_of_contents:!1}},i={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocumentUpcomingStatusInfo.<b>status</b></code><Bullet /><code>LegalDocumentStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-legaldocumentupcomingstatusinfobstatusbcodelegaldocumentstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocumentUpcomingStatusInfo.<b>createdAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-legaldocumentupcomingstatusinfobcreatedatbcodedatetime--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>LegalDocumentUpcomingStatusInfo.<b>effectiveDate</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-legaldocumentupcomingstatusinfobeffectivedatebcodedatetime-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>LegalDocumentStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"legaldocumentstatusinfo-",level:4}],d=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:u,Bullet:d,SpecifiedBy:m,Badge:f},g="wrapper";function y(e){let{components:t,...n}=e;return(0,c.kt)(g,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type LegalDocumentUpcomingStatusInfo implements LegalDocumentStatusInfo {\n  status: LegalDocumentStatus!\n  createdAt: DateTime!\n  effectiveDate: DateTime\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentupcomingstatusinfobstatusbcodelegaldocumentstatus--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"LegalDocumentUpcomingStatusInfo.",(0,c.kt)("b",null,"status"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/enums/legal-document-status"},(0,c.kt)("inlineCode",{parentName:"a"},"LegalDocumentStatus!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"LegalDocument status (always Upcoming for type LegalDocumentUpcomingStatusInfo)")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentupcomingstatusinfobcreatedatbcodedatetime--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"LegalDocumentUpcomingStatusInfo.",(0,c.kt)("b",null,"createdAt"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Creation date")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-legaldocumentupcomingstatusinfobeffectivedatebcodedatetime-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"LegalDocumentUpcomingStatusInfo.",(0,c.kt)("b",null,"effectiveDate"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,c.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,c.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Date when the LegalDocument will be activated")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"legaldocumentstatusinfo-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/legal-document-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"LegalDocumentStatusInfo"))," ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}y.isMDXComponent=!0}}]);