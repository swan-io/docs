"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[48243],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),f=a,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||o;return n?r.createElement(m,s(s({ref:t},p),{},{components:n})):r.createElement(m,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,s[1]=c;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},59747:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(83117),a=n(67294),o=n(3905);const s={id:"partnership-status",title:"PartnershipStatus",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/enums/partnership-status",id:"api-reference/enums/partnership-status",title:"PartnershipStatus",description:"No description",source:"@site/docs/api-reference/enums/partnership-status.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/partnership-status",permalink:"/docs/api-reference/enums/partnership-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/partnership-status.mdx",tags:[],version:"current",frontMatter:{id:"partnership-status",title:"PartnershipStatus",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PartnerCloseAccountReasonType",permalink:"/docs/api-reference/enums/partner-close-account-reason-type"},next:{title:"PaymentAccountType",permalink:"/docs/api-reference/enums/payment-account-type"}},l={},p=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>PartnershipStatus.<b>Accepted</b></code>",id:"code-style-fontweight-normal-partnershipstatusbacceptedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PartnershipStatus.<b>Canceling</b></code>",id:"code-style-fontweight-normal-partnershipstatusbcancelingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>PartnershipStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-partnershipstatusbcanceledbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:u,SpecifiedBy:d,Badge:f},h="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PartnershipStatus {\n  Accepted\n  Canceling\n  Canceled\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-partnershipstatusbacceptedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PartnershipStatus.",(0,o.kt)("b",null,"Accepted")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the partnership is accepted by the account holder for this account")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-partnershipstatusbcancelingbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PartnershipStatus.",(0,o.kt)("b",null,"Canceling")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When you decide to stop the partnership, you have 2 months notice")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-partnershipstatusbcanceledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PartnershipStatus.",(0,o.kt)("b",null,"Canceled")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"When the partnership was canceled by you or the account holder")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/partnership-accepted-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PartnershipAcceptedStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/partnership-canceled-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PartnershipCanceledStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/partnership-canceling-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PartnershipCancelingStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/interfaces/partnership-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PartnershipStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);