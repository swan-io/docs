"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[19621],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,m=p["".concat(l,".").concat(u)]||p[u]||f[u]||a;return n?r.createElement(m,c(c({ref:t},d),{},{components:n})):r.createElement(m,c({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42653:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var r=n(83117),o=n(67294),a=n(3905);const c={id:"project-not-found",title:"ProjectNotFound",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/objects/project-not-found",id:"api-reference/objects/project-not-found",title:"ProjectNotFound",description:"No description",source:"@site/docs/api-reference/objects/project-not-found.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/project-not-found",permalink:"/docs/api-reference/objects/project-not-found",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/project-not-found.mdx",tags:[],version:"current",frontMatter:{id:"project-not-found",title:"ProjectNotFound",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ProjectNotFoundRejection",permalink:"/docs/api-reference/objects/project-not-found-rejection"},next:{title:"ProjectSettingsForbiddenError",permalink:"/docs/api-reference/objects/project-settings-forbidden-error"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectNotFound.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectnotfoundbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4}],p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:f,Badge:u},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProjectNotFound implements Rejection {\n  message: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-projectnotfoundbmessagebcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ProjectNotFound.",(0,a.kt)("b",null,"message"))),(0,a.kt)(p,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"rejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,a.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null))}y.isMDXComponent=!0}}]);