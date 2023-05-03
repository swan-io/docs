"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[78107],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),b=o,p=u["".concat(s,".").concat(b)]||u[b]||f[b]||r;return n?a.createElement(p,i(i({ref:t},c),{},{components:n})):a.createElement(p,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},47867:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(83117),o=n(67294),r=n(3905);const i={id:"onboarding-invalid-status-info",title:"OnboardingInvalidStatusInfo",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/objects/onboarding-invalid-status-info",id:"api-reference/objects/onboarding-invalid-status-info",title:"OnboardingInvalidStatusInfo",description:"StatusInfo when onboarding has still at least one incorrect field",source:"@site/docs/api-reference/objects/onboarding-invalid-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/onboarding-invalid-status-info",permalink:"/docs/api-reference/objects/onboarding-invalid-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/onboarding-invalid-status-info.mdx",tags:[],version:"current",frontMatter:{id:"onboarding-invalid-status-info",title:"OnboardingInvalidStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OnboardingInfo",permalink:"/docs/api-reference/objects/onboarding-info"},next:{title:"OnboardingNotCompletedRejection",permalink:"/docs/api-reference/objects/onboarding-not-completed-rejection"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInvalidStatusInfo.<b>status</b></code><Bullet /><code>OnboardingStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardinginvalidstatusinfobstatusbcodeonboardingstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingInvalidStatusInfo.<b>errors</b></code><Bullet /><code>[ValidationError!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-onboardinginvalidstatusinfoberrorsbcodevalidationerror--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>OnboardingStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"onboardingstatusinfo-",level:4}],u=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),p={toc:c,Bullet:u,SpecifiedBy:f,Badge:b},g="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(g,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"StatusInfo when onboarding has still at least one incorrect field"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type OnboardingInvalidStatusInfo implements OnboardingStatusInfo {\n  status: OnboardingStatus!\n  errors: [ValidationError!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginvalidstatusinfobstatusbcodeonboardingstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInvalidStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/onboarding-status"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingStatus!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardinginvalidstatusinfoberrorsbcodevalidationerror--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardingInvalidStatusInfo.",(0,r.kt)("b",null,"errors"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-error"},(0,r.kt)("inlineCode",{parentName:"a"},"[ValidationError!]!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"onboardingstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/onboarding-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingStatusInfo"))," ",(0,r.kt)(b,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Object containing details about onboarding status (valid/invalid and why it is invalid/already finalized)")))}m.isMDXComponent=!0}}]);