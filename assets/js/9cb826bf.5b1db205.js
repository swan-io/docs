"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43989],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var n=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,r=e.originalType,d=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=s(a),y=c,f=u["".concat(d,".").concat(y)]||u[y]||p[y]||r;return a?n.createElement(f,l(l({ref:t},i),{},{components:a})):n.createElement(f,l({ref:t},i))}));function f(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var r=a.length,l=new Array(r);l[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:c,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},43755:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var n=a(83117),c=a(67294),r=a(3905);const l={id:"add-external-account-balance-success-payload",title:"AddExternalAccountBalanceSuccessPayload",hide_table_of_contents:!1},o=void 0,d={unversionedId:"api-reference/objects/add-external-account-balance-success-payload",id:"api-reference/objects/add-external-account-balance-success-payload",title:"AddExternalAccountBalanceSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/add-external-account-balance-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/add-external-account-balance-success-payload",permalink:"/api-reference/objects/add-external-account-balance-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/add-external-account-balance-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-external-account-balance-success-payload",title:"AddExternalAccountBalanceSuccessPayload",hide_table_of_contents:!1}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountBalanceSuccessPayload.<b>externalAccountBalance</b></code><Bullet /><code>ExternalAccountBalance!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-addexternalaccountbalancesuccesspayloadbexternalaccountbalancebcodeexternalaccountbalance--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,r.kt)(c.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(c.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,r.kt)(c.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:u,SpecifiedBy:p,Badge:y},b="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(b,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddExternalAccountBalanceSuccessPayload {\n  externalAccountBalance: ExternalAccountBalance!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountbalancesuccesspayloadbexternalaccountbalancebcodeexternalaccountbalance--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountBalanceSuccessPayload.",(0,r.kt)("b",null,"externalAccountBalance"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/external-account-balance"},(0,r.kt)("inlineCode",{parentName:"a"},"ExternalAccountBalance!"))," ",(0,r.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The added external balance")),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/add-external-account-balance-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"AddExternalAccountBalancePayload")),"  ",(0,r.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);