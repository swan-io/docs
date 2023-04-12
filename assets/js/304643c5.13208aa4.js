"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[97187],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},i="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),i=u(n),m=o,f=i["".concat(p,".").concat(m)]||i[m]||d[m]||a;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[i]="string"==typeof e?e:o,s[1]=c;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},19298:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>i,SpecifiedBy:()=>d,assets:()=>u,contentTitle:()=>c,default:()=>b,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var r=n(83117),o=n(67294),a=n(3905);const s={id:"suspend-account-reason-type",title:"SuspendAccountReasonType",hide_table_of_contents:!1},c=void 0,p={unversionedId:"api/enums/suspend-account-reason-type",id:"api/enums/suspend-account-reason-type",title:"SuspendAccountReasonType",description:"Specific type for suspend account action",source:"@site/docs/api/enums/suspend-account-reason-type.mdx",sourceDirName:"api/enums",slug:"/api/enums/suspend-account-reason-type",permalink:"/docs/api/enums/suspend-account-reason-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/suspend-account-reason-type.mdx",tags:[],version:"current",frontMatter:{id:"suspend-account-reason-type",title:"SuspendAccountReasonType",hide_table_of_contents:!1}},u={},l=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>SuspendAccountReasonType.<b>SuspendRequested</b></code>",id:"code-style-fontweight-normal-suspendaccountreasontypebsuspendrequestedbcode",level:4},{value:"Member of",id:"member-of",level:3}],i=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:i,SpecifiedBy:d,Badge:m},y="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Specific type for suspend account action"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SuspendAccountReasonType {\n  SuspendRequested\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-suspendaccountreasontypebsuspendrequestedbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"SuspendAccountReasonType.",(0,a.kt)("b",null,"SuspendRequested")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Simple suspend request")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/objects/suspend-account-reason"},(0,a.kt)("inlineCode",{parentName:"a"},"SuspendAccountReason")),"  ",(0,a.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(i,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api/inputs/suspend-account-reason-input"},(0,a.kt)("inlineCode",{parentName:"a"},"SuspendAccountReasonInput")),"  ",(0,a.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);