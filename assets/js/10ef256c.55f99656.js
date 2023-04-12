"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[40053],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),s=c(r),y=l,m=s["".concat(p,".").concat(y)]||s[y]||u[y]||a;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,o=new Array(a);o[0]=y;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:l,o[1]=i;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},82788:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>y,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var n=r(83117),l=r(67294),a=r(3905);const o={id:"wallet-provider-type",title:"WalletProviderType",hide_table_of_contents:!1},i=void 0,p={unversionedId:"api/enums/wallet-provider-type",id:"api/enums/wallet-provider-type",title:"WalletProviderType",description:"Wallet Provider",source:"@site/docs/api/enums/wallet-provider-type.mdx",sourceDirName:"api/enums",slug:"/api/enums/wallet-provider-type",permalink:"/docs/api/enums/wallet-provider-type",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/wallet-provider-type.mdx",tags:[],version:"current",frontMatter:{id:"wallet-provider-type",title:"WalletProviderType",hide_table_of_contents:!1}},c={},d=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>WalletProviderType.<b>ApplePay</b></code>",id:"code-style-fontweight-normal-walletprovidertypebapplepaybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>WalletProviderType.<b>GooglePay</b></code>",id:"code-style-fontweight-normal-walletprovidertypebgooglepaybcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,a.kt)(l.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,a.kt)(l.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:s,SpecifiedBy:u,Badge:y},f="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wallet Provider"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum WalletProviderType {\n  ApplePay\n  GooglePay\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-walletprovidertypebapplepaybcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"WalletProviderType.",(0,a.kt)("b",null,"ApplePay")))),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-walletprovidertypebgooglepaybcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"WalletProviderType.",(0,a.kt)("b",null,"GooglePay")))),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/inputs/add-digital-card-input"},(0,a.kt)("inlineCode",{parentName:"a"},"AddDigitalCardInput")),"  ",(0,a.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);