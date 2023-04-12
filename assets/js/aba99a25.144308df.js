"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[62960],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(n),y=s,g=d["".concat(c,".").concat(y)]||d[y]||u[y]||r;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=y;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:s,o[1]=i;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},74875:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>y,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var a=n(83117),s=n(67294),r=n(3905);const o={id:"update-user-consent-settings-payload",title:"UpdateUserConsentSettingsPayload",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api/unions/update-user-consent-settings-payload",id:"api/unions/update-user-consent-settings-payload",title:"UpdateUserConsentSettingsPayload",description:"No description",source:"@site/docs/api/unions/update-user-consent-settings-payload.mdx",sourceDirName:"api/unions",slug:"/api/unions/update-user-consent-settings-payload",permalink:"/docs/api/unions/update-user-consent-settings-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/unions/update-user-consent-settings-payload.mdx",tags:[],version:"current",frontMatter:{id:"update-user-consent-settings-payload",title:"UpdateUserConsentSettingsPayload",hide_table_of_contents:!1}},l={},p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>UpdateUserConsentSettingsSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"updateuserconsentsettingssuccesspayload-",level:4},{value:'<code>UpdateUserConsentSettingsTokenRejection</code> <Badge class="secondary" text="object"/>',id:"updateuserconsentsettingstokenrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],d=()=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(s.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(s.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:p,Bullet:d,SpecifiedBy:u,Badge:y},f="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union UpdateUserConsentSettingsPayload = UpdateUserConsentSettingsSuccessPayload | UpdateUserConsentSettingsTokenRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"updateuserconsentsettingssuccesspayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/update-user-consent-settings-success-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateUserConsentSettingsSuccessPayload"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"updateuserconsentsettingstokenrejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/objects/update-user-consent-settings-token-rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateUserConsentSettingsTokenRejection"))," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/mutations/update-user-consent-settings"},(0,r.kt)("inlineCode",{parentName:"a"},"updateUserConsentSettings")),"  ",(0,r.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);