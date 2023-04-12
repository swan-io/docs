"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41232],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=c(n),f=o,y=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?r.createElement(y,i(i({ref:t},s),{},{components:n})):r.createElement(y,i({ref:t},s))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84867:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(83117),o=n(67294),a=n(3905);const i={id:"type-of-representation",title:"TypeOfRepresentation",hide_table_of_contents:!1},p=void 0,l={unversionedId:"api/enums/type-of-representation",id:"api/enums/type-of-representation",title:"TypeOfRepresentation",description:"Quality of the account holder doing the onboarding",source:"@site/docs/api/enums/type-of-representation.mdx",sourceDirName:"api/enums",slug:"/api/enums/type-of-representation",permalink:"/docs/api/enums/type-of-representation",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/type-of-representation.mdx",tags:[],version:"current",frontMatter:{id:"type-of-representation",title:"TypeOfRepresentation",hide_table_of_contents:!1}},c={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>TypeOfRepresentation.<b>LegalRepresentative</b></code>",id:"code-style-fontweight-normal-typeofrepresentationblegalrepresentativebcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>TypeOfRepresentation.<b>PowerOfAttorney</b></code>",id:"code-style-fontweight-normal-typeofrepresentationbpowerofattorneybcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:u,SpecifiedBy:d,Badge:f},m="wrapper";function b(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Quality of the account holder doing the onboarding"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum TypeOfRepresentation {\n  LegalRepresentative\n  PowerOfAttorney\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-typeofrepresentationblegalrepresentativebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TypeOfRepresentation.",(0,a.kt)("b",null,"LegalRepresentative")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The account holder is the legal representative")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-typeofrepresentationbpowerofattorneybcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"TypeOfRepresentation.",(0,a.kt)("b",null,"PowerOfAttorney")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The account holder has a power of attorney")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/inputs/onboard-company-account-holder-input"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardCompanyAccountHolderInput")),"  ",(0,a.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api/objects/onboarding-company-account-holder-info"},(0,a.kt)("inlineCode",{parentName:"a"},"OnboardingCompanyAccountHolderInfo")),"  ",(0,a.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"p",href:"/api/inputs/update-company-onboarding-input"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateCompanyOnboardingInput")),"  ",(0,a.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);