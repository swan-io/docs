"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[26282],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var o=n.createContext({}),l=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(o.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),m=l(r),b=i,u=m["".concat(o,".").concat(b)]||m[b]||p[b]||a;return r?n.createElement(u,c(c({ref:t},s),{},{components:r})):n.createElement(u,c({ref:t},s))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,c=new Array(a);c[0]=b;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[m]="string"==typeof e?e:i,c[1]=d;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},56579:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>b,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>l,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>o,toc:()=>s});var n=r(83117),i=r(67294),a=r(3905);const c={id:"received-direct-debit-mandate-scheme",title:"ReceivedDirectDebitMandateScheme",hide_table_of_contents:!1},d=void 0,o={unversionedId:"api-reference/enums/received-direct-debit-mandate-scheme",id:"api-reference/enums/received-direct-debit-mandate-scheme",title:"ReceivedDirectDebitMandateScheme",description:"Received Direct Debit Mandate Scheme",source:"@site/docs/api-reference/enums/received-direct-debit-mandate-scheme.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/received-direct-debit-mandate-scheme",permalink:"/docs/api-reference/enums/received-direct-debit-mandate-scheme",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/received-direct-debit-mandate-scheme.mdx",tags:[],version:"current",frontMatter:{id:"received-direct-debit-mandate-scheme",title:"ReceivedDirectDebitMandateScheme",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ProjectType",permalink:"/docs/api-reference/enums/project-type"},next:{title:"ReceivedDirectDebitMandateStatus",permalink:"/docs/api-reference/enums/received-direct-debit-mandate-status"}},l={},s=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ReceivedDirectDebitMandateScheme.<b>SepaDirectDebitB2b</b></code>",id:"code-style-fontweight-normal-receiveddirectdebitmandateschemebsepadirectdebitb2bbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ReceivedDirectDebitMandateScheme.<b>SepaDirectDebitCore</b></code>",id:"code-style-fontweight-normal-receiveddirectdebitmandateschemebsepadirectdebitcorebcode",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(i.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,a.kt)(i.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:m,SpecifiedBy:p,Badge:b},f="wrapper";function v(e){let{components:t,...r}=e;return(0,a.kt)(f,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Received Direct Debit Mandate Scheme"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ReceivedDirectDebitMandateScheme {\n  SepaDirectDebitB2b\n  SepaDirectDebitCore\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-receiveddirectdebitmandateschemebsepadirectdebitb2bbcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReceivedDirectDebitMandateScheme.",(0,a.kt)("b",null,"SepaDirectDebitB2b")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When the received direct debit mandate can only be used for SEPA B2B direct debit transactions")),(0,a.kt)("h4",{id:"code-style-fontweight-normal-receiveddirectdebitmandateschemebsepadirectdebitcorebcode"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"ReceivedDirectDebitMandateScheme.",(0,a.kt)("b",null,"SepaDirectDebitCore")))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When the received direct debit mandate can only be used for SEPA Core direct debit transactions")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/inputs/account-received-direct-debit-mandate-filters-input"},(0,a.kt)("inlineCode",{parentName:"a"},"AccountReceivedDirectDebitMandateFiltersInput")),"  ",(0,a.kt)(b,{class:"secondary",text:"input",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);