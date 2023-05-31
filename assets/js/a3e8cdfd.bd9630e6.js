"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[48604],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,s=function(e,t){if(null==e)return{};var n,i,s={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=i.createContext({}),d=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return i.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(n),g=s,m=u["".concat(l,".").concat(g)]||u[g]||f[g]||a;return n?i.createElement(m,r(r({ref:t},c),{},{components:n})):i.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,r=new Array(a);r[0]=g;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[u]="string"==typeof e?e:s,r[1]=o;for(var d=2;d<a;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}g.displayName="MDXCreateElement"},89926:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var i=n(83117),s=n(67294),a=n(3905);const r={id:"disabled-funding-limit-settings-status-info",title:"DisabledFundingLimitSettingsStatusInfo",hide_table_of_contents:!1},o=void 0,l={unversionedId:"api-reference/objects/disabled-funding-limit-settings-status-info",id:"api-reference/objects/disabled-funding-limit-settings-status-info",title:"DisabledFundingLimitSettingsStatusInfo",description:"StatusInfo when funding limit settings has been disabled",source:"@site/docs/api-reference/objects/disabled-funding-limit-settings-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/disabled-funding-limit-settings-status-info",permalink:"/api-reference/objects/disabled-funding-limit-settings-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/disabled-funding-limit-settings-status-info.mdx",tags:[],version:"current",frontMatter:{id:"disabled-funding-limit-settings-status-info",title:"DisabledFundingLimitSettingsStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"DisableAccountMembershipSuccessPayload",permalink:"/api-reference/objects/disable-account-membership-success-payload"},next:{title:"DisabledMerchantPaymentMethodStatusInfo",permalink:"/api-reference/objects/disabled-merchant-payment-method-status-info"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>DisabledFundingLimitSettingsStatusInfo.<b>status</b></code><Bullet /><code>FundingLimitSettingsStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-disabledfundinglimitsettingsstatusinfobstatusbcodefundinglimitsettingsstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>DisabledFundingLimitSettingsStatusInfo.<b>reason</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-disabledfundinglimitsettingsstatusinfobreasonbcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FundingLimitSettingsStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"fundinglimitsettingsstatusinfo-",level:4}],u=()=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(s.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,a.kt)(s.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:c,Bullet:u,SpecifiedBy:f,Badge:g},p="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"StatusInfo when funding limit settings has been disabled"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type DisabledFundingLimitSettingsStatusInfo implements FundingLimitSettingsStatusInfo {\n  status: FundingLimitSettingsStatus!\n  reason: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-disabledfundinglimitsettingsstatusinfobstatusbcodefundinglimitsettingsstatus--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DisabledFundingLimitSettingsStatusInfo.",(0,a.kt)("b",null,"status"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/funding-limit-settings-status"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsStatus!"))," ",(0,a.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-disabledfundinglimitsettingsstatusinfobreasonbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"DisabledFundingLimitSettingsStatusInfo.",(0,a.kt)("b",null,"reason"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(g,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(g,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"fundinglimitsettingsstatusinfo-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/funding-limit-settings-status-info"},(0,a.kt)("inlineCode",{parentName:"a"},"FundingLimitSettingsStatusInfo"))," ",(0,a.kt)(g,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Object containing details about funding limit settings status")))}b.isMDXComponent=!0}}]);