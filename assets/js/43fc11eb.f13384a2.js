"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[38266],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,f=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?a.createElement(f,c(c({ref:t},u),{},{components:n})):a.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:r,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78167:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>u});var a=n(83117),r=n(67294),o=n(3905);const c={id:"account-membership-enabled-status-info",title:"AccountMembershipEnabledStatusInfo",hide_table_of_contents:!1},s=void 0,i={unversionedId:"api-reference/objects/account-membership-enabled-status-info",id:"api-reference/objects/account-membership-enabled-status-info",title:"AccountMembershipEnabledStatusInfo",description:"when the account membership is enabled",source:"@site/docs/api-reference/objects/account-membership-enabled-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-membership-enabled-status-info",permalink:"/api-reference/objects/account-membership-enabled-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-membership-enabled-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-enabled-status-info",title:"AccountMembershipEnabledStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountMembershipEdge",permalink:"/api-reference/objects/account-membership-edge"},next:{title:"AccountMembershipInvitationSentStatusInfo",permalink:"/api-reference/objects/account-membership-invitation-sent-status-info"}},l={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipEnabledStatusInfo.<b>status</b></code><Bullet /><code>AccountMembershipStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountmembershipenabledstatusinfobstatusbcodeaccountmembershipstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountMembershipStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"accountmembershipstatusinfo-",level:4}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:p,SpecifiedBy:m,Badge:d},b="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"when the account membership is enabled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountMembershipEnabledStatusInfo implements AccountMembershipStatusInfo {\n  status: AccountMembershipStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipenabledstatusinfobstatusbcodeaccountmembershipstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipEnabledStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-membership-status"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatus!"))," ",(0,o.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(d,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"AccountMembership status (always Enabled for type AccountMembershipEnabledStatusInfo)")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"accountmembershipstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/account-membership-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatusInfo"))," ",(0,o.kt)(d,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"here are the different account membership status:")))}h.isMDXComponent=!0}}]);