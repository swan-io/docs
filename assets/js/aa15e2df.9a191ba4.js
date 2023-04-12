"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[72455],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,b=p["".concat(i,".").concat(d)]||p[d]||m[d]||r;return n?a.createElement(b,s(s({ref:t},u),{},{components:n})):a.createElement(b,s({ref:t},u))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89993:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var a=n(83117),o=n(67294),r=n(3905);const s={id:"account-membership-status",title:"AccountMembershipStatus",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api/enums/account-membership-status",id:"api/enums/account-membership-status",title:"AccountMembershipStatus",description:"AccountMembership enabled",source:"@site/docs/api/enums/account-membership-status.mdx",sourceDirName:"api/enums",slug:"/api/enums/account-membership-status",permalink:"/docs/api/enums/account-membership-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/account-membership-status.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-status",title:"AccountMembershipStatus",hide_table_of_contents:!1}},l={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>AccountMembershipStatus.<b>ConsentPending</b></code>",id:"code-style-fontweight-normal-accountmembershipstatusbconsentpendingbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountMembershipStatus.<b>InvitationSent</b></code>",id:"code-style-fontweight-normal-accountmembershipstatusbinvitationsentbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountMembershipStatus.<b>BindingUserError</b></code>",id:"code-style-fontweight-normal-accountmembershipstatusbbindingusererrorbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountMembershipStatus.<b>Enabled</b></code>",id:"code-style-fontweight-normal-accountmembershipstatusbenabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountMembershipStatus.<b>Suspended</b></code>",id:"code-style-fontweight-normal-accountmembershipstatusbsuspendedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>AccountMembershipStatus.<b>Disabled</b></code>",id:"code-style-fontweight-normal-accountmembershipstatusbdisabledbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:u,Bullet:p,SpecifiedBy:m,Badge:d},h="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(h,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"AccountMembership enabled"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AccountMembershipStatus {\n  ConsentPending\n  InvitationSent\n  BindingUserError\n  Enabled\n  Suspended\n  Disabled\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipstatusbconsentpendingbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipStatus.",(0,r.kt)("b",null,"ConsentPending")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the consent to invite the account membership is pending")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipstatusbinvitationsentbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipStatus.",(0,r.kt)("b",null,"InvitationSent")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the account membership is invited")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipstatusbbindingusererrorbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipStatus.",(0,r.kt)("b",null,"BindingUserError")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the user binded with errors to the account membership")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipstatusbenabledbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipStatus.",(0,r.kt)("b",null,"Enabled")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the account membership is enabled")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipstatusbsuspendedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipStatus.",(0,r.kt)("b",null,"Suspended")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the account membership is suspended")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipstatusbdisabledbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipStatus.",(0,r.kt)("b",null,"Disabled")))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"when the account membership is disabled")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/objects/account-membership-binding-user-error-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipBindingUserErrorStatusInfo")),"  ",(0,r.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/account-membership-consent-pending-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipConsentPendingStatusInfo")),"  ",(0,r.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/account-membership-disabled-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipDisabledStatusInfo")),"  ",(0,r.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/account-membership-enabled-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipEnabledStatusInfo")),"  ",(0,r.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/account-membership-invitation-sent-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipInvitationSentStatusInfo")),"  ",(0,r.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/account-memberships-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipsFilterInput")),"  ",(0,r.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/interfaces/account-membership-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatusInfo")),"  ",(0,r.kt)(d,{class:"secondary",text:"interface",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/objects/account-membership-suspended-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountMembershipSuspendedStatusInfo")),"  ",(0,r.kt)(d,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/memberships-filter-input"},(0,r.kt)("inlineCode",{parentName:"a"},"MembershipsFilterInput")),"  ",(0,r.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);