"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[5647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=l(n),g=a,f=p["".concat(c,".").concat(g)]||p[g]||u[g]||o;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=g;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},18797:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>f,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>i,default:()=>b,frontMatter:()=>s,metadata:()=>c,toc:()=>g});var r=n(87462),a=n(67294),o=n(3905);const s={id:"update-user-consent-settings-token-rejection",title:"UpdateUserConsentSettingsTokenRejection",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api-reference/objects/update-user-consent-settings-token-rejection",id:"api-reference/objects/update-user-consent-settings-token-rejection",title:"UpdateUserConsentSettingsTokenRejection",description:"No description",source:"@site/docs/api-reference/objects/update-user-consent-settings-token-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/update-user-consent-settings-token-rejection",permalink:"/api-reference/objects/update-user-consent-settings-token-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/update-user-consent-settings-token-rejection.mdx",tags:[],version:"current",frontMatter:{id:"update-user-consent-settings-token-rejection",title:"UpdateUserConsentSettingsTokenRejection",hide_table_of_contents:!1}},l={},d=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateUserConsentSettingsTokenRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-updateuserconsentsettingstokenrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="badge badge--secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented By",id:"implemented-by",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:i=!1}=e;const[c,l]=(0,a.useState)(i);return(0,o.kt)("details",(0,r.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),l((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&s)},m={Bullet:d,SpecifiedBy:p,Badge:u,toc:g,Details:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateUserConsentSettingsTokenRejection implements Rejection {\n  message: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-updateuserconsentsettingstokenrejectionbmessagebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"UpdateUserConsentSettingsTokenRejection.",(0,o.kt)("b",null,"message"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"rejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/update-user-consent-settings-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateUserConsentSettingsPayload")),"  ",(0,o.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);