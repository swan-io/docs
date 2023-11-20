"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[19682],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),i=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=i(e.components);return o.createElement(p.Provider,{value:t},e.children)},y="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},s=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),y=i(n),s=a,u=y["".concat(p,".").concat(s)]||y[s]||d[s]||r;return n?o.createElement(u,l(l({ref:t},m),{},{components:n})):o.createElement(u,l({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[y]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}s.displayName="MDXCreateElement"},92877:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>y,SpecifiedBy:()=>d,assets:()=>i,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var o=n(83117),a=n(67294),r=n(3905);const l={id:"company-type",title:"CompanyType",hide_table_of_contents:!1},c=void 0,p={unversionedId:"api-reference/enums/company-type",id:"api-reference/enums/company-type",title:"CompanyType",description:"Type of company.",source:"@site/docs/api-reference/enums/company-type.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/company-type",permalink:"/api-reference/enums/company-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/company-type.mdx",tags:[],version:"current",frontMatter:{id:"company-type",title:"CompanyType",hide_table_of_contents:!1}},i={},m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CompanyType.<b>Association</b></code>",id:"code-style-fontweight-normal-companytypebassociationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyType.<b>Company</b></code>",id:"code-style-fontweight-normal-companytypebcompanybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyType.<b>HomeOwnerAssociation</b></code>",id:"code-style-fontweight-normal-companytypebhomeownerassociationbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyType.<b>Other</b></code>",id:"code-style-fontweight-normal-companytypebotherbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CompanyType.<b>SelfEmployed</b></code>",id:"code-style-fontweight-normal-companytypebselfemployedbcode",level:4},{value:"Member of",id:"member-of",level:3}],y=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:m,Bullet:y,SpecifiedBy:d,Badge:s},f="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(f,(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Type of company."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CompanyType {\n  Association\n  Company\n  HomeOwnerAssociation\n  Other\n  SelfEmployed\n}\n")),(0,r.kt)("h3",{id:"values"},"Values"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-companytypebassociationbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompanyType.",(0,r.kt)("b",null,"Association")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-companytypebcompanybcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompanyType.",(0,r.kt)("b",null,"Company")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-companytypebhomeownerassociationbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompanyType.",(0,r.kt)("b",null,"HomeOwnerAssociation")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-companytypebotherbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompanyType.",(0,r.kt)("b",null,"Other")))),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-companytypebselfemployedbcode"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompanyType.",(0,r.kt)("b",null,"SelfEmployed")))),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder-company-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolderCompanyInfo")),"  ",(0,r.kt)(s,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/inputs/onboard-company-account-holder-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardCompanyAccountHolderInput")),"  ",(0,r.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-company-account-holder-info"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardingCompanyAccountHolderInfo")),"  ",(0,r.kt)(s,{class:"secondary",text:"object",mdxType:"Badge"}),(0,r.kt)(y,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api-reference/inputs/update-company-onboarding-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateCompanyOnboardingInput")),"  ",(0,r.kt)(s,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);