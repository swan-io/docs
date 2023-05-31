"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39805],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(s,".").concat(f)]||u[f]||p[f]||o;return n?r.createElement(m,d(d({ref:t},c),{},{components:n})):r.createElement(m,d({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,d=new Array(o);d[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,d[1]=i;for(var l=2;l<o;l++)d[l]=n[l];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},49210:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>d,metadata:()=>s,toc:()=>c});var r=n(83117),a=n(67294),o=n(3905);const d={id:"standing-order-status",title:"StandingOrderStatus",hide_table_of_contents:!1},i=void 0,s={unversionedId:"api-reference/enums/standing-order-status",id:"api-reference/enums/standing-order-status",title:"StandingOrderStatus",description:"No description",source:"@site/docs/api-reference/enums/standing-order-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/standing-order-status",permalink:"/api-reference/enums/standing-order-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/standing-order-status.mdx",tags:[],version:"current",frontMatter:{id:"standing-order-status",title:"StandingOrderStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StandingOrderPeriod",permalink:"/api-reference/enums/standing-order-period"},next:{title:"StatementPeriod",permalink:"/api-reference/enums/statement-period"}},l={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>StandingOrderStatus.<b>ConsentPending</b></code>",id:"code-style-fontweight-normal-standingorderstatusbconsentpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StandingOrderStatus.<b>Enabled</b></code>",id:"code-style-fontweight-normal-standingorderstatusbenabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StandingOrderStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-standingorderstatusbcanceledbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:u,SpecifiedBy:p,Badge:f},g="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum StandingOrderStatus {\n  ConsentPending\n  Enabled\n  Canceled\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderstatusbconsentpendingbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrderStatus.",(0,o.kt)("b",null,"ConsentPending")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderstatusbenabledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrderStatus.",(0,o.kt)("b",null,"Enabled")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-standingorderstatusbcanceledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StandingOrderStatus.",(0,o.kt)("b",null,"Canceled")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/inputs/account-standing-order-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountStandingOrderFiltersInput")),"  ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/standing-order-canceled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrderCanceledStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/standing-order-consent-pending-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrderConsentPendingStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/standing-order-enabled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrderEnabledStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/interfaces/standing-order-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"StandingOrderStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);