"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[29473],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=r,b=p["".concat(l,".").concat(m)]||p[m]||u[m]||c;return n?a.createElement(b,o(o({ref:t},i),{},{components:n})):a.createElement(b,o({ref:t},i))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var d=2;d<c;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37523:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>i,Details:()=>b,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>m});var a=n(87462),r=n(67294),c=n(3905);const o={id:"add-account-membership-success-payload",title:"AddAccountMembershipSuccessPayload",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/objects/add-account-membership-success-payload",id:"api-reference/objects/add-account-membership-success-payload",title:"AddAccountMembershipSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/add-account-membership-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/add-account-membership-success-payload",permalink:"/api-reference/objects/add-account-membership-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/add-account-membership-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-account-membership-success-payload",title:"AddAccountMembershipSuccessPayload",hide_table_of_contents:!1}},d={},i=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipSuccessPayload.<b>accountMembership</b></code><Bullet /><code>AccountMembership!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addaccountmembershipsuccesspayloadbaccountmembershipbcodeaccountmembership--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:o,startOpen:s=!1}=e;const[l,d]=(0,r.useState)(s);return(0,c.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&o)},y={Bullet:i,SpecifiedBy:p,Badge:u,toc:m,Details:b},f="wrapper";function h(e){let{components:t,...n}=e;return(0,c.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddAccountMembershipSuccessPayload {\n  accountMembership: AccountMembership!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipsuccesspayloadbaccountmembershipbcodeaccountmembership--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipSuccessPayload.",(0,c.kt)("b",null,"accountMembership"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-membership"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountMembership!"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/add-account-membership-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipPayload")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);