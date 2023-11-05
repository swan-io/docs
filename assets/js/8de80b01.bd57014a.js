"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[40350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=c(n),u=a,m=f["".concat(s,".").concat(u)]||f[u]||p[u]||r;return n?i.createElement(m,o(o({ref:t},d),{},{components:n})):i.createElement(m,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71299:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>f,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>l,default:()=>v,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var i=n(83117),a=n(67294),r=n(3905);const o={id:"expired-identification-level-status-info",title:"ExpiredIdentificationLevelStatusInfo",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/objects/expired-identification-level-status-info",id:"api-reference/objects/expired-identification-level-status-info",title:"ExpiredIdentificationLevelStatusInfo",description:"Describes an identification level for the process associated to this identification that has expired and is no longer considered valid",source:"@site/docs/api-reference/objects/expired-identification-level-status-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/expired-identification-level-status-info",permalink:"/api-reference/objects/expired-identification-level-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/expired-identification-level-status-info.mdx",tags:[],version:"current",frontMatter:{id:"expired-identification-level-status-info",title:"ExpiredIdentificationLevelStatusInfo",hide_table_of_contents:!1}},c={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ExpiredIdentificationLevelStatusInfo.<b>status</b></code><Bullet /><code>IdentificationLevelStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-expiredidentificationlevelstatusinfobstatusbcodeidentificationlevelstatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExpiredIdentificationLevelStatusInfo.<b>expiredAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-expiredidentificationlevelstatusinfobexpiredatbcodedate--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],f=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:f,SpecifiedBy:p,Badge:u},y="wrapper";function v(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Describes an identification level for the process associated to this identification that has expired and is no longer considered valid"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ExpiredIdentificationLevelStatusInfo {\n  status: IdentificationLevelStatus!\n  expiredAt: Date!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-expiredidentificationlevelstatusinfobstatusbcodeidentificationlevelstatus--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ExpiredIdentificationLevelStatusInfo.",(0,r.kt)("b",null,"status"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/identification-level-status"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationLevelStatus!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Always set to ",(0,r.kt)("inlineCode",{parentName:"p"},"Expired"))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-expiredidentificationlevelstatusinfobexpiredatbcodedate--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ExpiredIdentificationLevelStatusInfo.",(0,r.kt)("b",null,"expiredAt"))),(0,r.kt)(f,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date"},(0,r.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"When this identification level expired")),(0,r.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/unions/identification-level-status-info"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationLevelStatusInfo")),"  ",(0,r.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);