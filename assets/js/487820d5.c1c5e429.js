"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[63152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=r,b=u["".concat(l,".").concat(p)]||u[p]||f[p]||o;return n?a.createElement(b,i(i({ref:t},c),{},{components:n})):a.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61425:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(83117),r=n(67294),o=n(3905);const i={id:"onboarding-valid-status-info",title:"OnboardingValidStatusInfo",hide_table_of_contents:!1},s=void 0,l={unversionedId:"api-reference/objects/onboarding-valid-status-info",id:"api-reference/objects/onboarding-valid-status-info",title:"OnboardingValidStatusInfo",description:"StatusInfo when onboarding has all onboarding fields are correctly filled",source:"@site/docs/api-reference/objects/onboarding-valid-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/onboarding-valid-status-info",permalink:"/docs/api-reference/objects/onboarding-valid-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/onboarding-valid-status-info.mdx",tags:[],version:"current",frontMatter:{id:"onboarding-valid-status-info",title:"OnboardingValidStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OnboardingNotCompletedRejection",permalink:"/docs/api-reference/objects/onboarding-not-completed-rejection"},next:{title:"Onboarding",permalink:"/docs/api-reference/objects/onboarding"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingValidStatusInfo.<b>status</b></code><Bullet /><code>OnboardingStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingvalidstatusinfobstatusbcodeonboardingstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>OnboardingStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"onboardingstatusinfo-",level:4}],u=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:c,Bullet:u,SpecifiedBy:f,Badge:p},g="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"StatusInfo when onboarding has all onboarding fields are correctly filled"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type OnboardingValidStatusInfo implements OnboardingStatusInfo {\n  status: OnboardingStatus!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardingvalidstatusinfobstatusbcodeonboardingstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardingValidStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(u,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/onboarding-status"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardingStatus!"))," ",(0,o.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"onboardingstatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/onboarding-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"OnboardingStatusInfo"))," ",(0,o.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Object containing details about onboarding status (valid/invalid and why it is invalid/already finalized)")))}m.isMDXComponent=!0}}]);