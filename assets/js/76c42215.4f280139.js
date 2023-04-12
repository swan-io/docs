"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[47514],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var i=n(67294);function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,i,s=function(t,e){if(null==t)return{};var n,i,s={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(s[n]=t[n]);return s}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(s[n]=t[n])}return s}var r=i.createContext({}),d=function(t){var e=i.useContext(r),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return i.createElement(r.Provider,{value:e},t.children)},c="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},g=i.forwardRef((function(t,e){var n=t.components,s=t.mdxType,a=t.originalType,r=t.parentName,u=l(t,["components","mdxType","originalType","parentName"]),c=d(n),g=s,m=c["".concat(r,".").concat(g)]||c[g]||f[g]||a;return n?i.createElement(m,o(o({ref:e},u),{},{components:n})):i.createElement(m,o({ref:e},u))}));function m(t,e){var n=arguments,s=e&&e.mdxType;if("string"==typeof t||s){var a=n.length,o=new Array(a);o[0]=g;var l={};for(var r in e)hasOwnProperty.call(e,r)&&(l[r]=e[r]);l.originalType=t,l[c]="string"==typeof t?t:s,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},20999:(t,e,n)=>{n.r(e),n.d(e,{Badge:()=>g,Bullet:()=>c,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var i=n(83117),s=n(67294),a=n(3905);const o={id:"disabled-funding-limit-settings-status-info",title:"DisabledFundingLimitSettingsStatusInfo",hide_table_of_contents:!1},l=void 0,r={unversionedId:"api/objects/disabled-funding-limit-settings-status-info",id:"api/objects/disabled-funding-limit-settings-status-info",title:"DisabledFundingLimitSettingsStatusInfo",description:"StatusInfo when funding limit settings has been disabled",source:"@site/docs/api/objects/disabled-funding-limit-settings-status-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/disabled-funding-limit-settings-status-info",permalink:"/docs/api/objects/disabled-funding-limit-settings-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/disabled-funding-limit-settings-status-info.mdx",tags:[],version:"current",frontMatter:{id:"disabled-funding-limit-settings-status-info",title:"DisabledFundingLimitSettingsStatusInfo",hide_table_of_contents:!1}},d={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DisabledFundingLimitSettingsStatusInfo.<b>status</b></code><Bullet /><code>FundingLimitSettingsStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-disabledfundinglimitsettingsstatusinfobstatusbcodefundinglimitsettingsstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DisabledFundingLimitSettingsStatusInfo.<b>reason</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-disabledfundinglimitsettingsstatusinfobreasonbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FundingLimitSettingsStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"fundinglimitsettingsstatusinfo-",level:4}],c=()=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=t=>(0,a.kt)(s.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),g=t=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+t.class},t.text)),m={toc:u,Bullet:c,SpecifiedBy:f,Badge:g},p="wrapper";function b(t){let{components:e,...n}=t;return(0,a.kt)(p,(0,i.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"StatusInfo when funding limit settings has been disabled"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type DisabledFundingLimitSettingsStatusInfo implements FundingLimitSettingsStatusInfo {\n  status: FundingLimitSettingsStatus!\n  reason: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-disabledfundinglimitsettingsstatusinfobstatusbcodefundinglimitsettingsstatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DisabledFundingLimitSettingsStatusInfo.",(0,a.kt)("b",null,"status"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/enums/funding-limit-settings-status"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsStatus!"))," ",(0,a.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-disabledfundinglimitsettingsstatusinfobreasonbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DisabledFundingLimitSettingsStatusInfo.",(0,a.kt)("b",null,"reason"))),(0,a.kt)(c,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"fundinglimitsettingsstatusinfo-"},(0,a.kt)("a",{parentName:"h4",href:"/api/interfaces/funding-limit-settings-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsStatusInfo"))," ",(0,a.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Object containing details about funding limit settings status")))}b.isMDXComponent=!0}}]);