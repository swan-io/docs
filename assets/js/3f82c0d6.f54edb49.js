"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[66307],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>p});var i=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function s(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function r(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?s(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,a=function(t,e){if(null==t)return{};var n,i,a={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=i.createContext({}),u=function(t){var e=i.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):r(r({},e),t)),n},d=function(t){var e=u(t.components);return i.createElement(l.Provider,{value:e},t.children)},c="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,a=t.mdxType,s=t.originalType,l=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),c=u(n),m=a,p=c["".concat(l,".").concat(m)]||c[m]||f[m]||s;return n?i.createElement(p,r(r({ref:e},d),{},{components:n})):i.createElement(p,r({ref:e},d))}));function p(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var s=n.length,r=new Array(s);r[0]=m;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[c]="string"==typeof t?t:a,r[1]=o;for(var u=2;u<s;u++)r[u]=n[u];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},83672:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>m,Bullet:()=>c,SpecifiedBy:()=>f,assets:()=>u,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(83117),a=n(67294),s=n(3905);const r={id:"funding-limit-settings-status-info",title:"FundingLimitSettingsStatusInfo",hide_table_of_contents:!1},o=void 0,l={unversionedId:"api/interfaces/funding-limit-settings-status-info",id:"api/interfaces/funding-limit-settings-status-info",title:"FundingLimitSettingsStatusInfo",description:"Object containing details about funding limit settings status",source:"@site/docs/api/interfaces/funding-limit-settings-status-info.mdx",sourceDirName:"api/interfaces",slug:"/api/interfaces/funding-limit-settings-status-info",permalink:"/docs/api/interfaces/funding-limit-settings-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/interfaces/funding-limit-settings-status-info.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit-settings-status-info",title:"FundingLimitSettingsStatusInfo",hide_table_of_contents:!1}},u={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimitSettingsStatusInfo.<b>status</b></code><Bullet /><code>FundingLimitSettingsStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-fundinglimitsettingsstatusinfobstatusbcodefundinglimitsettingsstatus--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],c=()=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=t=>(0,s.kt)(a.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),m=t=>(0,s.kt)(a.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+t.class},t.text)),p={toc:d,Bullet:c,SpecifiedBy:f,Badge:m},g="wrapper";function b(t){let{components:e,...n}=t;return(0,s.kt)(g,(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Object containing details about funding limit settings status"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"interface FundingLimitSettingsStatusInfo {\n  status: FundingLimitSettingsStatus!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingsstatusinfobstatusbcodefundinglimitsettingsstatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsStatusInfo.",(0,s.kt)("b",null,"status"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api/enums/funding-limit-settings-status"},(0,s.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsStatus!"))," ",(0,s.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Current funding limit settings.")),(0,s.kt)("h3",{id:"member-of"},"Member of"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api/objects/funding-limit-settings"},(0,s.kt)("inlineCode",{parentName:"a"},"FundingLimitSettings")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api/objects/disabled-funding-limit-settings-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"DisabledFundingLimitSettingsStatusInfo")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/enabled-funding-limit-settings-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"EnabledFundingLimitSettingsStatusInfo")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"p",href:"/api/objects/suspended-funding-limit-settings-status-info"},(0,s.kt)("inlineCode",{parentName:"a"},"SuspendedFundingLimitSettingsStatusInfo")),"  ",(0,s.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);