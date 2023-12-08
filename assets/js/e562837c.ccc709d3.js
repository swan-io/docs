"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[86947],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=o.createContext({}),l=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},b=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(n),b=r,m=u["".concat(d,".").concat(b)]||u[b]||p[b]||a;return n?o.createElement(m,c(c({ref:t},s),{},{components:n})):o.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[u]="string"==typeof e?e:r,c[1]=i;for(var l=2;l<a;l++)c[l]=n[l];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}b.displayName="MDXCreateElement"},57010:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>b});var o=n(87462),r=n(67294),a=n(3905);const c={id:"account-membership-not-ready-to-be-bound-rejection",title:"AccountMembershipNotReadyToBeBoundRejection",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/objects/account-membership-not-ready-to-be-bound-rejection",id:"api-reference/objects/account-membership-not-ready-to-be-bound-rejection",title:"AccountMembershipNotReadyToBeBoundRejection",description:"Rejection returned if invitation has not been sent to user yet",source:"@site/docs/api-reference/objects/account-membership-not-ready-to-be-bound-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-membership-not-ready-to-be-bound-rejection",permalink:"/api-reference/objects/account-membership-not-ready-to-be-bound-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-membership-not-ready-to-be-bound-rejection.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-not-ready-to-be-bound-rejection",title:"AccountMembershipNotReadyToBeBoundRejection",hide_table_of_contents:!1}},l={},s=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipNotReadyToBeBoundRejection.<b>id</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountmembershipnotreadytobeboundrejectionbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipNotReadyToBeBoundRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountmembershipnotreadytobeboundrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],m=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:i=!1}=e;const[d,l]=(0,r.useState)(i);return(0,a.kt)("details",(0,o.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},d?t:n),d&&c)},y={Bullet:s,SpecifiedBy:u,Badge:p,toc:b,Details:m},f="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(f,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Rejection returned if invitation has not been sent to user yet"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountMembershipNotReadyToBeBoundRejection implements Rejection {\n  id: String!\n  message: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipnotreadytobeboundrejectionbidbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipNotReadyToBeBoundRejection.",(0,a.kt)("b",null,"id"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipnotreadytobeboundrejectionbmessagebcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipNotReadyToBeBoundRejection.",(0,a.kt)("b",null,"message"))),(0,a.kt)(s,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"rejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,a.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/unions/bind-account-membership-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"BindAccountMembershipPayload")),"  ",(0,a.kt)(p,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);