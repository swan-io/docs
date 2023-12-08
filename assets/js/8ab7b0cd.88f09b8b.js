"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[21141],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(a),y=r,f=p["".concat(d,".").concat(y)]||p[y]||u[y]||c;return a?n.createElement(f,o(o({ref:t},i),{},{components:a})):n.createElement(f,o({ref:t},i))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var s=2;s<c;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},66290:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>f,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>d,toc:()=>y});var n=a(87462),r=a(67294),c=a(3905);const o={id:"cancel-card-success-payload",title:"CancelCardSuccessPayload",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/objects/cancel-card-success-payload",id:"api-reference/objects/cancel-card-success-payload",title:"CancelCardSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/cancel-card-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/cancel-card-success-payload",permalink:"/api-reference/objects/cancel-card-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/cancel-card-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"cancel-card-success-payload",title:"CancelCardSuccessPayload",hide_table_of_contents:!1}},s={},i=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CancelCardSuccessPayload.<b>card</b></code><Bullet /><code>Card!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-cancelcardsuccesspayloadbcardbcodecard--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],f=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:l=!1}=e;const[d,s]=(0,r.useState)(l);return(0,c.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),s((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&o)},m={Bullet:i,SpecifiedBy:p,Badge:u,toc:y,Details:f},b="wrapper";function g(e){let{components:t,...a}=e;return(0,c.kt)(b,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type CancelCardSuccessPayload {\n  card: Card!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-cancelcardsuccesspayloadbcardbcodecard--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CancelCardSuccessPayload.",(0,c.kt)("b",null,"card"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/card"},(0,c.kt)("inlineCode",{parentName:"a"},"Card!"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The canceled card ")),(0,c.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/cancel-card-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"CancelCardPayload")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);