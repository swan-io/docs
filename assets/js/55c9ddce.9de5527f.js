"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[57698],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(t),u=a,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||i;return t?n.createElement(m,o(o({ref:r},p),{},{components:t})):n.createElement(m,o({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},82519:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=t(83117),a=t(67294),i=t(3905);const o={id:"sepa-creditor-identifier",title:"SepaCreditorIdentifier",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/scalars/sepa-creditor-identifier",id:"api-reference/scalars/sepa-creditor-identifier",title:"SepaCreditorIdentifier",description:"SEPA Creditor Identifier",source:"@site/docs/api-reference/scalars/sepa-creditor-identifier.mdx",sourceDirName:"api-reference/scalars",slug:"/api-reference/scalars/sepa-creditor-identifier",permalink:"/api-reference/scalars/sepa-creditor-identifier",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/scalars/sepa-creditor-identifier.mdx",tags:[],version:"current",frontMatter:{id:"sepa-creditor-identifier",title:"SepaCreditorIdentifier",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PIN",permalink:"/api-reference/scalars/pin"},next:{title:"SepaReference",permalink:"/api-reference/scalars/sepa-reference"}},s={},p=[{value:"Member of",id:"member-of",level:3}],d=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:f,Badge:u},y="wrapper";function b(e){let{components:r,...t}=e;return(0,i.kt)(y,(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"SEPA Creditor Identifier\nformat :\n1 \u2013 2: ISO Country Code\n3 \u2013 4: Check Digit\n5 \u2013 7: Creditor Business Code \u2013 you (Creditor) choose this. The default is ZZZ\n8 - 35: Creditor National Identifier \u2013 a consecutive number that will be assigned by country\nexample:\nFR11ABC123456"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar SepaCreditorIdentifier\n")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/objects/sepapayment-mandate-creditor"},(0,i.kt)("inlineCode",{parentName:"a"},"SEPAPaymentMandateCreditor")),"  ",(0,i.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);