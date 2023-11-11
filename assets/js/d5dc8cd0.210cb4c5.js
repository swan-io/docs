"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[27501],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||c;return n?a.createElement(y,o(o({ref:t},i),{},{components:n})):a.createElement(y,o({ref:t},i))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<c;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57962:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=n(83117),r=n(67294),c=n(3905);const o={id:"update-account-membership-success-payload",title:"UpdateAccountMembershipSuccessPayload",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/objects/update-account-membership-success-payload",id:"api-reference/objects/update-account-membership-success-payload",title:"UpdateAccountMembershipSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/update-account-membership-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/update-account-membership-success-payload",permalink:"/api-reference/objects/update-account-membership-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/update-account-membership-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-account-membership-success-payload",title:"UpdateAccountMembershipSuccessPayload",hide_table_of_contents:!1}},p={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateAccountMembershipSuccessPayload.<b>consent</b></code><Bullet /><code>Consent!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-updateaccountmembershipsuccesspayloadbconsentbcodeconsent--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],d=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:i,Bullet:d,SpecifiedBy:u,Badge:m},f="wrapper";function b(e){let{components:t,...n}=e;return(0,c.kt)(f,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateAccountMembershipSuccessPayload {\n  consent: Consent!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-updateaccountmembershipsuccesspayloadbconsentbcodeconsent--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"UpdateAccountMembershipSuccessPayload.",(0,c.kt)("b",null,"consent"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent"},(0,c.kt)("inlineCode",{parentName:"a"},"Consent!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/update-account-membership-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"UpdateAccountMembershipPayload")),"  ",(0,c.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);