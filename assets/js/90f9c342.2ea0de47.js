"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[49058],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>f});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},b=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=c(t),b=o,f=p["".concat(l,".").concat(b)]||p[b]||s[b]||a;return t?r.createElement(f,i(i({ref:n},u),{},{components:t})):r.createElement(f,i({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=b;var d={};for(var l in n)hasOwnProperty.call(n,l)&&(d[l]=n[l]);d.originalType=e,d[p]="string"==typeof e?e:o,i[1]=d;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},17424:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>b,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>c,contentTitle:()=>d,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(83117),o=t(67294),a=t(3905);const i={id:"onboarding-order-by-field-input",title:"OnboardingOrderByFieldInput",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api-reference/enums/onboarding-order-by-field-input",id:"api-reference/enums/onboarding-order-by-field-input",title:"OnboardingOrderByFieldInput",description:"Field we can use when ordering that can be applied when listing onboardings",source:"@site/docs/api-reference/enums/onboarding-order-by-field-input.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/onboarding-order-by-field-input",permalink:"/docs/api-reference/enums/onboarding-order-by-field-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/onboarding-order-by-field-input.mdx",tags:[],version:"current",frontMatter:{id:"onboarding-order-by-field-input",title:"OnboardingOrderByFieldInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"MonthlyPaymentVolume",permalink:"/docs/api-reference/enums/monthly-payment-volume"},next:{title:"OnboardingState",permalink:"/docs/api-reference/enums/onboarding-state"}},c={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>OnboardingOrderByFieldInput.<b>createdAt</b></code>",id:"code-style-fontweight-normal-onboardingorderbyfieldinputbcreatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OnboardingOrderByFieldInput.<b>updatedAt</b></code>",id:"code-style-fontweight-normal-onboardingorderbyfieldinputbupdatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OnboardingOrderByFieldInput.<b>finalizedAt</b></code>",id:"code-style-fontweight-normal-onboardingorderbyfieldinputbfinalizedatbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:p,SpecifiedBy:s,Badge:b},m="wrapper";function y(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Field we can use when ordering that can be applied when listing onboardings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum OnboardingOrderByFieldInput {\n  createdAt\n  updatedAt\n  finalizedAt\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onboardingorderbyfieldinputbcreatedatbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OnboardingOrderByFieldInput.",(0,a.kt)("b",null,"createdAt")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onboardingorderbyfieldinputbupdatedatbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OnboardingOrderByFieldInput.",(0,a.kt)("b",null,"updatedAt")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onboardingorderbyfieldinputbfinalizedatbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OnboardingOrderByFieldInput.",(0,a.kt)("b",null,"finalizedAt")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/inputs/onboarding-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardingOrderByInput")),"  ",(0,a.kt)(b,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);