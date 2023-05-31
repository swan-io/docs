"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[15971],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=d(r),u=o,m=p["".concat(l,".").concat(u)]||p[u]||f[u]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=u;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:o,i[1]=a;for(var d=2;d<c;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},82312:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>a,default:()=>j,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(83117),o=r(67294),c=r(3905);const i={id:"project-forbidden-rejection",title:"ProjectForbiddenRejection",hide_table_of_contents:!1},a=void 0,l={unversionedId:"api-reference/objects/project-forbidden-rejection",id:"api-reference/objects/project-forbidden-rejection",title:"ProjectForbiddenRejection",description:"No description",source:"@site/docs/api-reference/objects/project-forbidden-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/project-forbidden-rejection",permalink:"/api-reference/objects/project-forbidden-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/project-forbidden-rejection.mdx",tags:[],version:"current",frontMatter:{id:"project-forbidden-rejection",title:"ProjectForbiddenRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ProjectCardSettings",permalink:"/api-reference/objects/project-card-settings"},next:{title:"ProjectFundingLimitExceededRejection",permalink:"/api-reference/objects/project-funding-limit-exceeded-rejection"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectForbiddenRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectforbiddenrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4}],p=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:f,Badge:u},b="wrapper";function j(e){let{components:t,...r}=e;return(0,c.kt)(b,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProjectForbiddenRejection implements Rejection {\n  message: String!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-projectforbiddenrejectionbmessagebcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ProjectForbiddenRejection.",(0,c.kt)("b",null,"message"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"rejection-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,c.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,c.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}j.isMDXComponent=!0}}]);