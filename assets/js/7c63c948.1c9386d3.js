"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[47844],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),d=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=o,m=u["".concat(i,".").concat(f)]||u[f]||p[f]||c;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,a=new Array(c);a[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<c;d++)a[d]=n[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26813:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(83117),o=n(67294),c=n(3905);const a={id:"account-edge",title:"AccountEdge",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/objects/account-edge",id:"api-reference/objects/account-edge",title:"AccountEdge",description:"Implements the Relay Edge interface",source:"@site/docs/api-reference/objects/account-edge.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-edge",permalink:"/api-reference/objects/account-edge",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-edge.mdx",tags:[],version:"current",frontMatter:{id:"account-edge",title:"AccountEdge",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountConnection",permalink:"/api-reference/objects/account-connection"},next:{title:"AccountHolderCanceledStatusInfo",permalink:"/api-reference/objects/account-holder-canceled-status-info"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountEdge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountedgebcursorbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountEdge.<b>node</b></code><Bullet /><code>Account!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-accountedgebnodebcodeaccount--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="secondary" text="interface"/>',id:"edge-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:p,Badge:f},g="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Implements the Relay Edge interface"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountEdge implements Edge {\n  cursor: String!\n  node: Account!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountedgebcursorbcodestring--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountEdge.",(0,c.kt)("b",null,"cursor"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Opaque identifier pointing to this node in the pagination mechanism")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountedgebnodebcodeaccount--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountEdge.",(0,c.kt)("b",null,"node"))),(0,c.kt)(u,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/account"},(0,c.kt)("inlineCode",{parentName:"a"},"Account!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The account")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"edge-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/edge"},(0,c.kt)("inlineCode",{parentName:"a"},"Edge"))," ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type.")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-connection"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountConnection")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);