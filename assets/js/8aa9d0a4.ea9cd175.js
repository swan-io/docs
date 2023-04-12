"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[51873],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),g=c(n),u=a,f=g["".concat(l,".").concat(u)]||g[u]||p[u]||o;return n?r.createElement(f,d(d({ref:t},s),{},{components:n})):r.createElement(f,d({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[g]="string"==typeof e?e:a,d[1]=i;for(var c=2;c<o;c++)d[c]=n[c];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},40363:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>g,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>i,default:()=>y,frontMatter:()=>d,metadata:()=>l,toc:()=>s});var r=n(83117),a=n(67294),o=n(3905);const d={id:"standing-order-edge",title:"StandingOrderEdge",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api/objects/standing-order-edge",id:"api/objects/standing-order-edge",title:"StandingOrderEdge",description:"Please see the Connection interface",source:"@site/docs/api/objects/standing-order-edge.mdx",sourceDirName:"api/objects",slug:"/api/objects/standing-order-edge",permalink:"/docs/api/objects/standing-order-edge",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/standing-order-edge.mdx",tags:[],version:"current",frontMatter:{id:"standing-order-edge",title:"StandingOrderEdge",hide_table_of_contents:!1}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrderEdge.<b>node</b></code><Bullet /><code>StandingOrder!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-standingorderedgebnodebcodestandingorder--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>StandingOrderEdge.<b>cursor</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-standingorderedgebcursorbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Edge</code> <Badge class="secondary" text="interface"/>',id:"edge-",level:4},{value:"Member of",id:"member-of",level:3}],g=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:g,SpecifiedBy:p,Badge:u},m="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Please see the Connection interface"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type StandingOrderEdge implements Edge {\n  node: StandingOrder!\n  cursor: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderedgebnodebcodestandingorder--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrderEdge.",(0,o.kt)("b",null,"node"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/objects/standing-order"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrder!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderedgebcursorbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrderEdge.",(0,o.kt)("b",null,"cursor"))),(0,o.kt)(g,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"edge-"},(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/edge"},(0,o.kt)("inlineCode",{parentName:"a"},"Edge"))," ",(0,o.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Edge type containing the node and cursor. The node is not defined in the interface because generic is not supported by GraphQL\nbut all implementation contains its own node property according to the paginated type.")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/standing-order-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrderConnection")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);