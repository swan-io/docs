"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[89183],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(a),b=r,m=u["".concat(i,".").concat(b)]||u[b]||p[b]||s;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<s;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},66951:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>b});var n=a(87462),r=a(67294),s=a(3905);const o={id:"account-membership-disabled-status-info",title:"AccountMembershipDisabledStatusInfo",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/objects/account-membership-disabled-status-info",id:"api-reference/objects/account-membership-disabled-status-info",title:"AccountMembershipDisabledStatusInfo",description:"when the account membership is disabled",source:"@site/docs/api-reference/objects/account-membership-disabled-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-membership-disabled-status-info",permalink:"/api-reference/objects/account-membership-disabled-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-membership-disabled-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-disabled-status-info",title:"AccountMembershipDisabledStatusInfo",hide_table_of_contents:!1}},l={},d=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),b=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipDisabledStatusInfo.<b>status</b></code><Bullet /><code>AccountMembershipStatus!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-accountmembershipdisabledstatusinfobstatusbcodeaccountmembershipstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipDisabledStatusInfo.<b>reason</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountmembershipdisabledstatusinfobreasonbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountMembershipStatusInfo</code> <Badge class="badge badge--secondary" text="interface"/>',id:"accountmembershipstatusinfo-",level:4}],m=e=>{let{dataOpen:t,dataClose:a,children:o,startOpen:c=!1}=e;const[i,l]=(0,r.useState)(c);return(0,s.kt)("details",(0,n.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&o)},f={Bullet:d,SpecifiedBy:u,Badge:p,toc:b,Details:m},h="wrapper";function g(e){let{components:t,...a}=e;return(0,s.kt)(h,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"when the account membership is disabled"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountMembershipDisabledStatusInfo implements AccountMembershipStatusInfo {\n  status: AccountMembershipStatus!\n  reason: String!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipdisabledstatusinfobstatusbcodeaccountmembershipstatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipDisabledStatusInfo.",(0,s.kt)("b",null,"status"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-membership-status"},(0,s.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatus!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"AccountMembership status (always Disabled for type AccountMembershipDisabledStatusInfo)")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipdisabledstatusinfobreasonbcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipDisabledStatusInfo.",(0,s.kt)("b",null,"reason"))),(0,s.kt)(d,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"reason why the account membership is disabled")),(0,s.kt)("h3",{id:"interfaces"},"Interfaces"),(0,s.kt)("h4",{id:"accountmembershipstatusinfo-"},(0,s.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/account-membership-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"AccountMembershipStatusInfo"))," ",(0,s.kt)(p,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"here are the different account membership status:")))}g.isMDXComponent=!0}}]);