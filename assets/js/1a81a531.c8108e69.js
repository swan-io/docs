"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[70852],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,u=p["".concat(l,".").concat(b)]||p[b]||m[b]||o;return n?a.createElement(u,c(c({ref:t},d),{},{components:n})):a.createElement(u,c({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},38090:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var a=n(83117),r=n(67294),o=n(3905);const c={id:"account-membership-cannot-be-disabled-rejection",title:"AccountMembershipCannotBeDisabledRejection",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api/objects/account-membership-cannot-be-disabled-rejection",id:"api/objects/account-membership-cannot-be-disabled-rejection",title:"AccountMembershipCannotBeDisabledRejection",description:"No description",source:"@site/docs/api/objects/account-membership-cannot-be-disabled-rejection.mdx",sourceDirName:"api/objects",slug:"/api/objects/account-membership-cannot-be-disabled-rejection",permalink:"/docs/api/objects/account-membership-cannot-be-disabled-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/account-membership-cannot-be-disabled-rejection.mdx",tags:[],version:"current",frontMatter:{id:"account-membership-cannot-be-disabled-rejection",title:"AccountMembershipCannotBeDisabledRejection",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipCannotBeDisabledRejection.<b>accountMembershipId</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountmembershipcannotbedisabledrejectionbaccountmembershipidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AccountMembershipCannotBeDisabledRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-accountmembershipcannotbedisabledrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:d,Bullet:p,SpecifiedBy:m,Badge:b},f="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountMembershipCannotBeDisabledRejection implements Rejection {\n  accountMembershipId: String!\n  message: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipcannotbedisabledrejectionbaccountmembershipidbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipCannotBeDisabledRejection.",(0,o.kt)("b",null,"accountMembershipId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-accountmembershipcannotbedisabledrejectionbmessagebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AccountMembershipCannotBeDisabledRejection.",(0,o.kt)("b",null,"message"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(b,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"rejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,o.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/unions/disable-account-membership-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"DisableAccountMembershipPayload")),"  ",(0,o.kt)(b,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);