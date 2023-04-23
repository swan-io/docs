"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30692],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(n),y=r,u=m["".concat(d,".").concat(y)]||m[y]||p[y]||i;return n?a.createElement(u,o(o({ref:t},s),{},{components:n})):a.createElement(u,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=y;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[m]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},74139:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>c,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(83117),r=n(67294),i=n(3905);const o={id:"identity-already-bind-to-account-membership-rejection",title:"IdentityAlreadyBindToAccountMembershipRejection",hide_table_of_contents:!1},c=void 0,d={unversionedId:"api/objects/identity-already-bind-to-account-membership-rejection",id:"api/objects/identity-already-bind-to-account-membership-rejection",title:"IdentityAlreadyBindToAccountMembershipRejection",description:"Rejection returned if identity and the account memberships are already bind",source:"@site/docs/api/objects/identity-already-bind-to-account-membership-rejection.mdx",sourceDirName:"api/objects",slug:"/api/objects/identity-already-bind-to-account-membership-rejection",permalink:"/docs/api/objects/identity-already-bind-to-account-membership-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/identity-already-bind-to-account-membership-rejection.mdx",tags:[],version:"current",frontMatter:{id:"identity-already-bind-to-account-membership-rejection",title:"IdentityAlreadyBindToAccountMembershipRejection",hide_table_of_contents:!1}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IdentityAlreadyBindToAccountMembershipRejection.<b>accountId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-identityalreadybindtoaccountmembershiprejectionbaccountidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IdentityAlreadyBindToAccountMembershipRejection.<b>identityId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-identityalreadybindtoaccountmembershiprejectionbidentityidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IdentityAlreadyBindToAccountMembershipRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-identityalreadybindtoaccountmembershiprejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],m=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:m,SpecifiedBy:p,Badge:y},b="wrapper";function f(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Rejection returned if identity and the account memberships are already bind"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type IdentityAlreadyBindToAccountMembershipRejection implements Rejection {\n  accountId: String!\n  identityId: String!\n  message: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-identityalreadybindtoaccountmembershiprejectionbaccountidbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IdentityAlreadyBindToAccountMembershipRejection.",(0,i.kt)("b",null,"accountId"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-identityalreadybindtoaccountmembershiprejectionbidentityidbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IdentityAlreadyBindToAccountMembershipRejection.",(0,i.kt)("b",null,"identityId"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-identityalreadybindtoaccountmembershiprejectionbmessagebcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"IdentityAlreadyBindToAccountMembershipRejection.",(0,i.kt)("b",null,"message"))),(0,i.kt)(m,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"interfaces"},"Interfaces"),(0,i.kt)("h4",{id:"rejection-"},(0,i.kt)("a",{parentName:"h4",href:"/api/interfaces/rejection"},(0,i.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,i.kt)(y,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/unions/bind-account-membership-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"BindAccountMembershipPayload")),"  ",(0,i.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);