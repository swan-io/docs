"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20592],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),l=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(u.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),i=l(n),f=r,m=i["".concat(u,".").concat(f)]||i[f]||d[f]||o;return n?a.createElement(m,s(s({ref:t},p),{},{components:n})):a.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[i]="string"==typeof e?e:r,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},66060:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,Details:()=>m,SpecifiedBy:()=>i,assets:()=>l,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>u,toc:()=>f});var a=n(87462),r=n(67294),o=n(3905);const s={id:"suspend-account-reason-input",title:"SuspendAccountReasonInput",hide_table_of_contents:!1},c=void 0,u={unversionedId:"api-reference/inputs/suspend-account-reason-input",id:"api-reference/inputs/suspend-account-reason-input",title:"SuspendAccountReasonInput",description:"Input version",source:"@site/docs/api-reference/inputs/suspend-account-reason-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/suspend-account-reason-input",permalink:"/api-reference/inputs/suspend-account-reason-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/suspend-account-reason-input.mdx",tags:[],version:"current",frontMatter:{id:"suspend-account-reason-input",title:"SuspendAccountReasonInput",hide_table_of_contents:!1}},l={},p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),i=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendAccountReasonInput.<b>type</b></code><Bullet /><code>SuspendAccountReasonType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-suspendaccountreasoninputbtypebcodesuspendaccountreasontype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendAccountReasonInput.<b>message</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-suspendaccountreasoninputbmessagebcodestring-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:c=!1}=e;const[u,l]=(0,r.useState)(c);return(0,o.kt)("details",(0,a.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},u?t:n),u&&s)},y={Bullet:p,SpecifiedBy:i,Badge:d,toc:f,Details:m},g="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input version"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input SuspendAccountReasonInput {\n  type: SuspendAccountReasonType!\n  message: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-suspendaccountreasoninputbtypebcodesuspendaccountreasontype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SuspendAccountReasonInput.",(0,o.kt)("b",null,"type"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/suspend-account-reason-type"},(0,o.kt)("inlineCode",{parentName:"a"},"SuspendAccountReasonType!"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-suspendaccountreasoninputbmessagebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SuspendAccountReasonInput.",(0,o.kt)("b",null,"message"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(d,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}b.isMDXComponent=!0}}]);