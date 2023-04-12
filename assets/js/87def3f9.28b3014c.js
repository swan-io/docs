"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[9318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||c;return n?a.createElement(m,r(r({ref:t},u),{},{components:n})):a.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:o,r[1]=s;for(var i=2;i<c;i++)r[i]=n[i];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},43624:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>s,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var a=n(83117),o=n(67294),c=n(3905);const r={id:"account-status-info",title:"AccountStatusInfo",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api/interfaces/account-status-info",id:"api/interfaces/account-status-info",title:"AccountStatusInfo",description:"No description",source:"@site/docs/api/interfaces/account-status-info.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/account-status-info",permalink:"/docs/api/interfaces/account-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/interfaces/account-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-status-info",title:"AccountStatusInfo",hide_table_of_contents:!1}},i={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountStatusInfo.<b>status</b></code><Bullet /><code>AccountStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountstatusinfobstatusbcodeaccountstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:p,SpecifiedBy:d,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(y,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"interface AccountStatusInfo {\n  status: AccountStatus!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountstatusinfobstatusbcodeaccountstatus--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountStatusInfo.",(0,c.kt)("b",null,"status"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/enums/account-status"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountStatus!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Account status")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/account"},(0,c.kt)("inlineCode",{parentName:"a"},"Account")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/account-closed-status"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountClosedStatus")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/account-closing-status"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountClosingStatus")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/account-opened-status"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountOpenedStatus")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api/objects/account-suspended-status"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountSuspendedStatus")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);