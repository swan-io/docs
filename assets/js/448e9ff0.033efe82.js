"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79096],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return r?a.createElement(b,d(d({ref:t},s),{},{components:r})):a.createElement(b,d({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,d=new Array(i);d[0]=m;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:n,d[1]=c;for(var l=2;l<i;l++)d[l]=r[l];return a.createElement.apply(null,d)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8049:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>o,toc:()=>m});var a=r(87462),n=r(67294),i=r(3905);const d={id:"received-direct-debit-mandate",title:"receivedDirectDebitMandate",hide_table_of_contents:!1},c=void 0,o={unversionedId:"api-reference/queries/received-direct-debit-mandate",id:"api-reference/queries/received-direct-debit-mandate",title:"receivedDirectDebitMandate",description:"Returns a received direct debit mandate from its id.",source:"@site/docs/api-reference/queries/received-direct-debit-mandate.mdx",sourceDirName:"api-reference/queries",slug:"/api-reference/queries/received-direct-debit-mandate",permalink:"/api-reference/queries/received-direct-debit-mandate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/queries/received-direct-debit-mandate.mdx",tags:[],version:"current",frontMatter:{id:"received-direct-debit-mandate",title:"receivedDirectDebitMandate",hide_table_of_contents:!1}},l={},s=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:e.class},e.text)),m=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>receivedDirectDebitMandate.<b>receivedDirectDebitMandateId</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-receiveddirectdebitmandatebreceiveddirectdebitmandateidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>ReceivedDirectDebitMandate</code> <Badge class="badge badge--secondary" text="interface"/>',id:"receiveddirectdebitmandate-",level:4}],b=e=>{let{dataOpen:t,dataClose:r,children:d,startOpen:c=!1}=e;const[o,l]=(0,n.useState)(c);return(0,i.kt)("details",(0,a.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,i.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},o?t:r),o&&d)},f={Bullet:s,SpecifiedBy:p,Badge:u,toc:m,Details:b},v="wrapper";function y(e){let{components:t,...r}=e;return(0,i.kt)(v,(0,a.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Returns a received direct debit mandate from its id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"receivedDirectDebitMandate(\n  receivedDirectDebitMandateId: ID!\n): ReceivedDirectDebitMandate\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-receiveddirectdebitmandatebreceiveddirectdebitmandateidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"receivedDirectDebitMandate.",(0,i.kt)("b",null,"receivedDirectDebitMandateId"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"receiveddirectdebitmandate-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/received-direct-debit-mandate"},(0,i.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandate"))," ",(0,i.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Interface for Received Direct Debit Mandate")))}y.isMDXComponent=!0}}]);