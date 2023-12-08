"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[83153],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=d(a),g=r,f=p["".concat(o,".").concat(g)]||p[g]||u[g]||c;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=g;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<c;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},88681:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>f,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>g});var n=a(87462),r=a(67294),c=a(3905);const l={id:"cancel-digital-card-success-payload",title:"CancelDigitalCardSuccessPayload",hide_table_of_contents:!1},i=void 0,o={unversionedId:"api-reference/objects/cancel-digital-card-success-payload",id:"api-reference/objects/cancel-digital-card-success-payload",title:"CancelDigitalCardSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/cancel-digital-card-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/cancel-digital-card-success-payload",permalink:"/api-reference/objects/cancel-digital-card-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/cancel-digital-card-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-digital-card-success-payload",title:"CancelDigitalCardSuccessPayload",hide_table_of_contents:!1}},d={},s=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelDigitalCardSuccessPayload.<b>digitalCard</b></code><Bullet /><code>DigitalCard!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="interface"/>',id:"code-style-fontweight-normal-canceldigitalcardsuccesspayloadbdigitalcardbcodedigitalcard--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:l,startOpen:i=!1}=e;const[o,d]=(0,r.useState)(i);return(0,c.kt)("details",(0,n.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},o?t:a),o&&l)},y={Bullet:s,SpecifiedBy:p,Badge:u,toc:g,Details:f},m="wrapper";function b(e){let{components:t,...a}=e;return(0,c.kt)(m,(0,n.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type CancelDigitalCardSuccessPayload {\n  digitalCard: DigitalCard!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-canceldigitalcardsuccesspayloadbdigitalcardbcodedigitalcard--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CancelDigitalCardSuccessPayload.",(0,c.kt)("b",null,"digitalCard"))),(0,c.kt)(s,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/digital-card"},(0,c.kt)("inlineCode",{parentName:"a"},"DigitalCard!"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The canceled digital card")),(0,c.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/cancel-digital-card-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"CancelDigitalCardPayload")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);