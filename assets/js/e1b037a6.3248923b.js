"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[84094],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},f="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(n),p=i,m=f["".concat(s,".").concat(p)]||f[p]||u[p]||o;return n?a.createElement(m,r(r({ref:t},d),{},{components:n})):a.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},43887:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(87462),i=n(67294),o=n(3905);const r={id:"valid-identification-level-status-info",title:"ValidIdentificationLevelStatusInfo",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/objects/valid-identification-level-status-info",id:"api-reference/objects/valid-identification-level-status-info",title:"ValidIdentificationLevelStatusInfo",description:"Describes a valid identification level for the process associated to this identification, and identification documents can be accessed",source:"@site/docs/api-reference/objects/valid-identification-level-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/valid-identification-level-status-info",permalink:"/api-reference/objects/valid-identification-level-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/valid-identification-level-status-info.mdx",tags:[],version:"current",frontMatter:{id:"valid-identification-level-status-info",title:"ValidIdentificationLevelStatusInfo",hide_table_of_contents:!1}},c={},d=()=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(i.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(i.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ValidIdentificationLevelStatusInfo.<b>status</b></code><Bullet /><code>SwanIdentificationStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-valididentificationlevelstatusinfobstatusbcodeswanidentificationstatus--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:l=!1}=e;const[s,c]=(0,i.useState)(l);return(0,o.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&r)},b={Bullet:d,SpecifiedBy:f,Badge:u,toc:p,Details:m},v="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(v,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Describes a valid identification level for the process associated to this identification, and identification documents can be accessed"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ValidIdentificationLevelStatusInfo {\n  status: SwanIdentificationStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-valididentificationlevelstatusinfobstatusbcodeswanidentificationstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ValidIdentificationLevelStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/swan-identification-status"},(0,o.kt)("inlineCode",{parentName:"a"},"SwanIdentificationStatus!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Always set to ",(0,o.kt)("inlineCode",{parentName:"p"},"Valid"))),(0,o.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/identification-level-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"IdentificationLevelStatusInfo")),"  ",(0,o.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);