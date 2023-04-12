"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[7741],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var n=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,l=e.originalType,d=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=s(a),y=c,b=u["".concat(d,".").concat(y)]||u[y]||p[y]||l;return a?n.createElement(b,r(r({ref:t},i),{},{components:a})):n.createElement(b,r({ref:t},i))}));function b(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=a.length,r=new Array(l);r[0]=y;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[u]="string"==typeof e?e:c,r[1]=o;for(var s=2;s<l;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},8692:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var n=a(83117),c=a(67294),l=a(3905);const r={id:"add-external-account-balance-success-payload",title:"AddExternalAccountBalanceSuccessPayload",hide_table_of_contents:!1},o=void 0,d={unversionedId:"api/objects/add-external-account-balance-success-payload",id:"api/objects/add-external-account-balance-success-payload",title:"AddExternalAccountBalanceSuccessPayload",description:"No description",source:"@site/docs/api/objects/add-external-account-balance-success-payload.mdx",sourceDirName:"api/objects",slug:"/api/objects/add-external-account-balance-success-payload",permalink:"/docs/api/objects/add-external-account-balance-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/add-external-account-balance-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-external-account-balance-success-payload",title:"AddExternalAccountBalanceSuccessPayload",hide_table_of_contents:!1}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddExternalAccountBalanceSuccessPayload.<b>externalAccountBalance</b></code><Bullet /><code>ExternalAccountBalance!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-addexternalaccountbalancesuccesspayloadbexternalaccountbalancebcodeexternalaccountbalance--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,l.kt)(c.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(c.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,l.kt)(c.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:i,Bullet:u,SpecifiedBy:p,Badge:y},m="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(m,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddExternalAccountBalanceSuccessPayload {\n  externalAccountBalance: ExternalAccountBalance!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-addexternalaccountbalancesuccesspayloadbexternalaccountbalancebcodeexternalaccountbalance--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AddExternalAccountBalanceSuccessPayload.",(0,l.kt)("b",null,"externalAccountBalance"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/external-account-balance"},(0,l.kt)("inlineCode",{parentName:"a"},"ExternalAccountBalance!"))," ",(0,l.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The added external balance")),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/unions/add-external-account-balance-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"AddExternalAccountBalancePayload")),"  ",(0,l.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);