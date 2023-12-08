"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[62013],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return r?n.createElement(m,s(s({ref:t},u),{},{components:r})):n.createElement(m,s({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22663:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>u,Details:()=>m,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>l,toc:()=>f});var n=r(87462),a=r(67294),o=r(3905);const s={id:"user",title:"user",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/queries/user",id:"api-reference/queries/user",title:"user",description:"Returns a User",source:"@site/docs/api-reference/queries/user.mdx",sourceDirName:"api-reference/queries",slug:"/api-reference/queries/user",permalink:"/api-reference/queries/user",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/queries/user.mdx",tags:[],version:"current",frontMatter:{id:"user",title:"user",hide_table_of_contents:!1}},c={},u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>user.<b>id</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-userbidbcodestring-",level:4},{value:"Type",id:"type",level:3},{value:'<code>User</code> <Badge class="badge badge--secondary" text="object"/>',id:"user-",level:4}],m=e=>{let{dataOpen:t,dataClose:r,children:s,startOpen:i=!1}=e;const[l,c]=(0,a.useState)(i);return(0,o.kt)("details",(0,n.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),c((e=>!e))},style:{listStyle:"none"}},l?t:r),l&&s)},g={Bullet:u,SpecifiedBy:d,Badge:p,toc:f,Details:m},y="wrapper";function b(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns a User"),(0,o.kt)("p",null,"For a Project access token : it requires a user id and returns the user for the given id\nFor a User access token : returns the signed-in user and all of their data at Swan"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"(",(0,o.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn more on authentication"),")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"user(\n  id: String\n): User\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-userbidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"user.",(0,o.kt)("b",null,"id"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"user-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/user"},(0,o.kt)("inlineCode",{parentName:"a"},"User"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The User is the unique user, natural person, of the Swan app.")))}b.isMDXComponent=!0}}]);