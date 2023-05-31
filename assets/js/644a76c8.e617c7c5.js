"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50629],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||c;return n?a.createElement(f,r(r({ref:t},i),{},{components:n})):a.createElement(f,r({ref:t},i))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,r=new Array(c);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<c;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51905:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>s,default:()=>k,frontMatter:()=>r,metadata:()=>l,toc:()=>i});var a=n(83117),o=n(67294),c=n(3905);const r={id:"account-status",title:"AccountStatus",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/enums/account-status",id:"api-reference/enums/account-status",title:"AccountStatus",description:"No description",source:"@site/docs/api-reference/enums/account-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/account-status",permalink:"/api-reference/enums/account-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/account-status.mdx",tags:[],version:"current",frontMatter:{id:"account-status",title:"AccountStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountStandingOrderOrderByFieldInput",permalink:"/api-reference/enums/account-standing-order-order-by-field-input"},next:{title:"AccountVerificationStatus",permalink:"/api-reference/enums/account-verification-status"}},u={},i=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AccountStatus.<b>Opened</b></code>",id:"code-style-fontweight-normal-accountstatusbopenedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountStatus.<b>Suspended</b></code>",id:"code-style-fontweight-normal-accountstatusbsuspendedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountStatus.<b>Closing</b></code>",id:"code-style-fontweight-normal-accountstatusbclosingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountStatus.<b>Closed</b></code>",id:"code-style-fontweight-normal-accountstatusbclosedbcode",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:d,SpecifiedBy:p,Badge:m},b="wrapper";function k(e){let{components:t,...n}=e;return(0,c.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AccountStatus {\n  Opened\n  Suspended\n  Closing\n  Closed\n}\n")),(0,c.kt)("h3",{id:"values"},"Values"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountstatusbopenedbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountStatus.",(0,c.kt)("b",null,"Opened")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"When the account is opened")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountstatusbsuspendedbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountStatus.",(0,c.kt)("b",null,"Suspended")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"When the account is suspended")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountstatusbclosingbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountStatus.",(0,c.kt)("b",null,"Closing")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"When the account is currently closing")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-accountstatusbclosedbcode"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AccountStatus.",(0,c.kt)("b",null,"Closed")))),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"When the account is closed")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-closed-status"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountClosedStatus")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-closing-status"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountClosingStatus")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/inputs/account-filter-input"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountFilterInput")),"  ",(0,c.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-opened-status"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountOpenedStatus")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/interfaces/account-status-info"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountStatusInfo")),"  ",(0,c.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"p",href:"/api-reference/objects/account-suspended-status"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountSuspendedStatus")),"  ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);