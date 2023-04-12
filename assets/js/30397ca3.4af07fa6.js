"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[31174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(m,l(l({ref:t},d),{},{components:n})):a.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},11770:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(83117),r=n(67294),o=n(3905);const l={id:"merchant-profile-status",title:"MerchantProfileStatus",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api/enums/merchant-profile-status",id:"api/enums/merchant-profile-status",title:"MerchantProfileStatus",description:"Merchant Profile Statuses",source:"@site/docs/api/enums/merchant-profile-status.mdx",sourceDirName:"api/enums",slug:"/api/enums/merchant-profile-status",permalink:"/docs/api/enums/merchant-profile-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/merchant-profile-status.mdx",tags:[],version:"current",frontMatter:{id:"merchant-profile-status",title:"MerchantProfileStatus",hide_table_of_contents:!1}},s={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>MerchantProfileStatus.<b>PendingReview</b></code>",id:"code-style-fontweight-normal-merchantprofilestatusbpendingreviewbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantProfileStatus.<b>Enabled</b></code>",id:"code-style-fontweight-normal-merchantprofilestatusbenabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantProfileStatus.<b>Rejected</b></code>",id:"code-style-fontweight-normal-merchantprofilestatusbrejectedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantProfileStatus.<b>Canceled</b></code>",id:"code-style-fontweight-normal-merchantprofilestatusbcanceledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MerchantProfileStatus.<b>Suspended</b></code>",id:"code-style-fontweight-normal-merchantprofilestatusbsuspendedbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:u,Badge:f},h="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Merchant Profile Statuses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MerchantProfileStatus {\n  PendingReview\n  Enabled\n  Rejected\n  Canceled\n  Suspended\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilestatusbpendingreviewbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfileStatus.",(0,o.kt)("b",null,"PendingReview")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"A Merchant Profile is created in the PendingReview status")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilestatusbenabledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfileStatus.",(0,o.kt)("b",null,"Enabled")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Enabled")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilestatusbrejectedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfileStatus.",(0,o.kt)("b",null,"Rejected")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejected")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilestatusbcanceledbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfileStatus.",(0,o.kt)("b",null,"Canceled")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Canceled")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-merchantprofilestatusbsuspendedbcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfileStatus.",(0,o.kt)("b",null,"Suspended")))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Suspended")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/canceled-merchant-profile-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"CanceledMerchantProfileStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/enabled-merchant-profile-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"EnabledMerchantProfileStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/merchant-profile-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfileFiltersInput")),"  ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/interfaces/merchant-profile-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfileStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/merchant-profile-wrong-status-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"MerchantProfileWrongStatusRejection")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/pending-review-merchant-profile-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PendingReviewMerchantProfileStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/rejected-merchant-profile-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"RejectedMerchantProfileStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/objects/suspended-merchant-profile-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"SuspendedMerchantProfileStatusInfo")),"  ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);