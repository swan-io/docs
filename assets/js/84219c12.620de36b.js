"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25808],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=c(n),s=o,f=p["".concat(l,".").concat(s)]||p[s]||b[s]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:o,i[1]=d;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},64495:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>p,SpecifiedBy:()=>b,assets:()=>c,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(83117),o=n(67294),a=n(3905);const i={id:"onboarding-order-by-field-input",title:"OnboardingOrderByFieldInput",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api/enums/onboarding-order-by-field-input",id:"api/enums/onboarding-order-by-field-input",title:"OnboardingOrderByFieldInput",description:"Field we can use when ordering that can be applied when listing onboardings",source:"@site/docs/api/enums/onboarding-order-by-field-input.mdx",sourceDirName:"api/enums",slug:"/api/enums/onboarding-order-by-field-input",permalink:"/docs/api/enums/onboarding-order-by-field-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/onboarding-order-by-field-input.mdx",tags:[],version:"current",frontMatter:{id:"onboarding-order-by-field-input",title:"OnboardingOrderByFieldInput",hide_table_of_contents:!1}},c={},u=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>OnboardingOrderByFieldInput.<b>createdAt</b></code>",id:"code-style-fontweight-normal-onboardingorderbyfieldinputbcreatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OnboardingOrderByFieldInput.<b>updatedAt</b></code>",id:"code-style-fontweight-normal-onboardingorderbyfieldinputbupdatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>OnboardingOrderByFieldInput.<b>finalizedAt</b></code>",id:"code-style-fontweight-normal-onboardingorderbyfieldinputbfinalizedatbcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:p,SpecifiedBy:b,Badge:s},y="wrapper";function g(e){let{components:t,...n}=e;return(0,a.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Field we can use when ordering that can be applied when listing onboardings"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum OnboardingOrderByFieldInput {\n  createdAt\n  updatedAt\n  finalizedAt\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onboardingorderbyfieldinputbcreatedatbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OnboardingOrderByFieldInput.",(0,a.kt)("b",null,"createdAt")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onboardingorderbyfieldinputbupdatedatbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OnboardingOrderByFieldInput.",(0,a.kt)("b",null,"updatedAt")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-onboardingorderbyfieldinputbfinalizedatbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"OnboardingOrderByFieldInput.",(0,a.kt)("b",null,"finalizedAt")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/inputs/onboarding-order-by-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardingOrderByInput")),"  ",(0,a.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);