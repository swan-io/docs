"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[88744],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=d(t),u=o,m=f["".concat(l,".").concat(u)]||f[u]||s[u]||a;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[f]="string"==typeof e?e:o,c[1]=i;for(var d=2;d<a;d++)c[d]=t[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},34584:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>f,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>c,metadata:()=>l,toc:()=>p});var r=t(83117),o=t(67294),a=t(3905);const c={id:"onboarding-account-holder-info",title:"OnboardingAccountHolderInfo",hide_table_of_contents:!1},i=void 0,l={unversionedId:"api-reference/interfaces/onboarding-account-holder-info",id:"api-reference/interfaces/onboarding-account-holder-info",title:"OnboardingAccountHolderInfo",description:"The onboarding could be for an Individual or a company",source:"@site/docs/api-reference/interfaces/onboarding-account-holder-info.mdx",sourceDirName:"api-reference/interfaces",slug:"/api-reference/interfaces/onboarding-account-holder-info",permalink:"/api-reference/interfaces/onboarding-account-holder-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/interfaces/onboarding-account-holder-info.mdx",tags:[],version:"current",frontMatter:{id:"onboarding-account-holder-info",title:"OnboardingAccountHolderInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MerchantProfileStatusInfo",permalink:"/api-reference/interfaces/merchant-profile-status-info"},next:{title:"OnboardingStatusInfo",permalink:"/api-reference/interfaces/onboarding-status-info"}},d={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingAccountHolderInfo.<b>type</b></code><Bullet /><code>AccountHolderType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingaccountholderinfobtypebcodeaccountholdertype--",level:4},{value:"Member of",id:"member-of",level:3},{value:"Implemented by",id:"implemented-by",level:3}],f=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:f,SpecifiedBy:s,Badge:u},b="wrapper";function y(e){let{components:n,...t}=e;return(0,a.kt)(b,(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The onboarding could be for an Individual or a company"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"interface OnboardingAccountHolderInfo {\n  type: AccountHolderType!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onboardingaccountholderinfobtypebcodeaccountholdertype--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OnboardingAccountHolderInfo.",(0,a.kt)("b",null,"type"))),(0,a.kt)(f,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-holder-type"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountHolderType!"))," ",(0,a.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Account holder type")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding"},(0,a.kt)("inlineCode",{parentName:"a"},"Onboarding")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(f,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-info"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardingInfo")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-company-account-holder-info"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardingCompanyAccountHolderInfo")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(f,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-individual-account-holder-info"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardingIndividualAccountHolderInfo")),"  ",(0,a.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);