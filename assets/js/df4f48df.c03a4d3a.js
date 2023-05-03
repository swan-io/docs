"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[21661],{3905:(e,n,o)=>{o.d(n,{Zo:()=>s,kt:()=>y});var t=o(67294);function a(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,t)}return o}function c(e){for(var n=1;n<arguments.length;n++){var o=null!=arguments[n]?arguments[n]:{};n%2?r(Object(o),!0).forEach((function(n){a(e,n,o[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(o,n))}))}return e}function d(e,n){if(null==e)return{};var o,t,a=function(e,n){if(null==e)return{};var o,t,a={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||(a[o]=e[o]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],n.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var l=t.createContext({}),i=function(e){var n=t.useContext(l),o=n;return e&&(o="function"==typeof e?e(n):c(c({},n),e)),o},s=function(e){var n=i(e.components);return t.createElement(l.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},b=t.forwardRef((function(e,n){var o=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=i(o),b=a,y=u["".concat(l,".").concat(b)]||u[b]||p[b]||r;return o?t.createElement(y,c(c({ref:n},s),{},{components:o})):t.createElement(y,c({ref:n},s))}));function y(e,n){var o=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=o.length,c=new Array(r);c[0]=b;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[u]="string"==typeof e?e:a,c[1]=d;for(var i=2;i<r;i++)c[i]=o[i];return t.createElement.apply(null,c)}return t.createElement.apply(null,o)}b.displayName="MDXCreateElement"},42244:(e,n,o)=>{o.r(n),o.d(n,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>d,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>s});var t=o(83117),a=o(67294),r=o(3905);const c={id:"onboard-individual-account-holder-success-payload",title:"OnboardIndividualAccountHolderSuccessPayload",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api-reference/objects/onboard-individual-account-holder-success-payload",id:"api-reference/objects/onboard-individual-account-holder-success-payload",title:"OnboardIndividualAccountHolderSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/onboard-individual-account-holder-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/onboard-individual-account-holder-success-payload",permalink:"/docs/api-reference/objects/onboard-individual-account-holder-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/onboard-individual-account-holder-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"onboard-individual-account-holder-success-payload",title:"OnboardIndividualAccountHolderSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OnboardCompanyAccountHolderSuccessPayload",permalink:"/docs/api-reference/objects/onboard-company-account-holder-success-payload"},next:{title:"OnboardingCompanyAccountHolderInfo",permalink:"/docs/api-reference/objects/onboarding-company-account-holder-info"}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardIndividualAccountHolderSuccessPayload.<b>onboarding</b></code><Bullet /><code>Onboarding!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-onboardindividualaccountholdersuccesspayloadbonboardingbcodeonboarding--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:u,SpecifiedBy:p,Badge:b},f="wrapper";function m(e){let{components:n,...o}=e;return(0,r.kt)(f,(0,t.Z)({},y,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type OnboardIndividualAccountHolderSuccessPayload {\n  onboarding: Onboarding!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardindividualaccountholdersuccesspayloadbonboardingbcodeonboarding--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardIndividualAccountHolderSuccessPayload.",(0,r.kt)("b",null,"onboarding"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/onboarding"},(0,r.kt)("inlineCode",{parentName:"a"},"Onboarding!"))," ",(0,r.kt)(b,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/onboard-individual-account-holder-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardIndividualAccountHolderPayload")),"  ",(0,r.kt)(b,{class:"secondary",text:"union",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);