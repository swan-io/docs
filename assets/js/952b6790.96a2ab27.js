"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[39160],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>b});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,b=d["".concat(s,".").concat(p)]||d[p]||f[p]||r;return n?o.createElement(b,c(c({ref:t},i),{},{components:n})):o.createElement(b,c({ref:t},i))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,c=new Array(r);c[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var u=2;u<r;u++)c[u]=n[u];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},29020:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,SpecifiedBy:()=>f,assets:()=>u,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var o=n(83117),a=n(67294),r=n(3905);const c={id:"account-holder-enabled-status-info",title:"AccountHolderEnabledStatusInfo",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/objects/account-holder-enabled-status-info",id:"api-reference/objects/account-holder-enabled-status-info",title:"AccountHolderEnabledStatusInfo",description:"Account Holder Enabled Status Information",source:"@site/docs/api-reference/objects/account-holder-enabled-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/account-holder-enabled-status-info",permalink:"/api-reference/objects/account-holder-enabled-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/account-holder-enabled-status-info.mdx",tags:[],version:"current",frontMatter:{id:"account-holder-enabled-status-info",title:"AccountHolderEnabledStatusInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountHolderEdge",permalink:"/api-reference/objects/account-holder-edge"},next:{title:"AccountHolderIndividualInfo",permalink:"/api-reference/objects/account-holder-individual-info"}},u={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AccountHolderEnabledStatusInfo.<b>status</b></code><Bullet /><code>AccountHolderStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-accountholderenabledstatusinfobstatusbcodeaccountholderstatus--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>AccountHolderStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"accountholderstatusinfo-",level:4}],d=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:i,Bullet:d,SpecifiedBy:f,Badge:p},m="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Account Holder Enabled Status Information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type AccountHolderEnabledStatusInfo implements AccountHolderStatusInfo {\n  status: AccountHolderStatus!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-accountholderenabledstatusinfobstatusbcodeaccountholderstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AccountHolderEnabledStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(d,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-holder-status"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolderStatus!"))," ",(0,r.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(p,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Status of the account holder.")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"accountholderstatusinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/account-holder-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountHolderStatusInfo"))," ",(0,r.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account Holder Status Information")))}y.isMDXComponent=!0}}]);