"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[31636],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,y=s["".concat(p,".").concat(f)]||s[f]||u[f]||l;return r?n.createElement(y,o(o({ref:t},d),{},{components:r})):n.createElement(y,o({ref:t},d))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6119:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=r(83117),a=r(67294),l=r(3905);const o={id:"wallet-provider-type",title:"WalletProviderType",hide_table_of_contents:!1},i=void 0,p={unversionedId:"api-reference/enums/wallet-provider-type",id:"api-reference/enums/wallet-provider-type",title:"WalletProviderType",description:"Wallet Provider",source:"@site/docs/api-reference/enums/wallet-provider-type.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/wallet-provider-type",permalink:"/docs/api-reference/enums/wallet-provider-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/wallet-provider-type.mdx",tags:[],version:"current",frontMatter:{id:"wallet-provider-type",title:"WalletProviderType",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"VerificationStatus",permalink:"/docs/api-reference/enums/verification-status"},next:{title:"AccountFilterInput",permalink:"/docs/api-reference/inputs/account-filter-input"}},c={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>WalletProviderType.<b>ApplePay</b></code>",id:"code-style-fontweight-normal-walletprovidertypebapplepaybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>WalletProviderType.<b>GooglePay</b></code>",id:"code-style-fontweight-normal-walletprovidertypebgooglepaybcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:s,SpecifiedBy:u,Badge:f},m="wrapper";function v(e){let{components:t,...r}=e;return(0,l.kt)(m,(0,n.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Wallet Provider"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum WalletProviderType {\n  ApplePay\n  GooglePay\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-walletprovidertypebapplepaybcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"WalletProviderType.",(0,l.kt)("b",null,"ApplePay")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-walletprovidertypebgooglepaybcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"WalletProviderType.",(0,l.kt)("b",null,"GooglePay")))),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-digital-card-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AddDigitalCardInput")),"  ",(0,l.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);