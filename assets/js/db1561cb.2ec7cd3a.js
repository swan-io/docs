"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[49939],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>p});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,p=u["".concat(c,".").concat(m)]||u[m]||g[m]||r;return n?i.createElement(p,o(o({ref:t},d),{},{components:n})):i.createElement(p,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},97027:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>g,assets:()=>l,contentTitle:()=>s,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(83117),a=n(67294),r=n(3905);const o={id:"funding-limit-settings-change-request-bad-amount-rejection",title:"FundingLimitSettingsChangeRequestBadAmountRejection",hide_table_of_contents:!1},s=void 0,c={unversionedId:"api/objects/funding-limit-settings-change-request-bad-amount-rejection",id:"api/objects/funding-limit-settings-change-request-bad-amount-rejection",title:"FundingLimitSettingsChangeRequestBadAmountRejection",description:"Funding Limit Settings Change Request Bad Amount Rejection",source:"@site/docs/api/objects/funding-limit-settings-change-request-bad-amount-rejection.mdx",sourceDirName:"api/objects",slug:"/api/objects/funding-limit-settings-change-request-bad-amount-rejection",permalink:"/docs/api/objects/funding-limit-settings-change-request-bad-amount-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/funding-limit-settings-change-request-bad-amount-rejection.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit-settings-change-request-bad-amount-rejection",title:"FundingLimitSettingsChangeRequestBadAmountRejection",hide_table_of_contents:!1}},l={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimitSettingsChangeRequestBadAmountRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fundinglimitsettingschangerequestbadamountrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:d,Bullet:u,SpecifiedBy:g,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Funding Limit Settings Change Request Bad Amount Rejection"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type FundingLimitSettingsChangeRequestBadAmountRejection implements Rejection {\n  message: String!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingschangerequestbadamountrejectionbmessagebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsChangeRequestBadAmountRejection.",(0,r.kt)("b",null,"message"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"rejection-"},(0,r.kt)("a",{parentName:"h4",href:"/api/interfaces/rejection"},(0,r.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,r.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/unions/add-funding-limit-settings-change-request-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddFundingLimitSettingsChangeRequestPayload")),"  ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);