"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[72051],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),d=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),f=o,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<a;d++)c[d]=r[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18063:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>i,toc:()=>f});var n=r(87462),o=r(67294),a=r(3905);const c={id:"account-holder",title:"accountHolder",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/queries/account-holder",id:"api-reference/queries/account-holder",title:"accountHolder",description:"Returns an account holder from its id.",source:"@site/docs/api-reference/queries/account-holder.mdx",sourceDirName:"api-reference/queries",slug:"/api-reference/queries/account-holder",permalink:"/api-reference/queries/account-holder",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/queries/account-holder.mdx",tags:[],version:"current",frontMatter:{id:"account-holder",title:"accountHolder",hide_table_of_contents:!1}},d={},s=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),f=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>accountHolder.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountholderbidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AccountHolder</code> <Badge class="badge badge--secondary" text="object"/>',id:"accountholder-",level:4}],m=e=>{let{dataOpen:t,dataClose:r,children:c,startOpen:l=!1}=e;const[i,d]=(0,o.useState)(l);return(0,a.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:r),i&&c)},y={Bullet:s,SpecifiedBy:u,Badge:p,toc:f,Details:m},b="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(b,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Returns an account holder from its id."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"accountHolder(\n  id: ID!\n): AccountHolder\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountholderbidbcodeid--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"accountHolder.",(0,a.kt)("b",null,"id"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"accountholder-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-holder"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountHolder"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The account holder is the person who owns the money stored in the account. The account holder can be one of your customers, whether it is a natural person or a legal person, or quite simply you.")))}g.isMDXComponent=!0}}]);