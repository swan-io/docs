"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[46724],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=d(r),b=o,m=u["".concat(s,".").concat(b)]||u[b]||p[b]||n;return r?a.createElement(m,c(c({ref:t},i),{},{components:r})):a.createElement(m,c({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,c=new Array(n);c[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<n;d++)c[d]=r[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},24889:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>b,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>k,frontMatter:()=>c,metadata:()=>s,toc:()=>i});var a=r(83117),o=r(67294),n=r(3905);const c={id:"project-card-status",title:"ProjectCardStatus",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api/enums/project-card-status",id:"api/enums/project-card-status",title:"ProjectCardStatus",description:"Card Status",source:"@site/docs/api/enums/project-card-status.mdx",sourceDirName:"api/enums",slug:"/api/enums/project-card-status",permalink:"/docs/api/enums/project-card-status",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/enums/project-card-status.mdx",tags:[],version:"current",frontMatter:{id:"project-card-status",title:"ProjectCardStatus",hide_table_of_contents:!1}},d={},i=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>ProjectCardStatus.<b>Initiated</b></code>",id:"code-style-fontweight-normal-projectcardstatusbinitiatedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectCardStatus.<b>Enabled</b></code>",id:"code-style-fontweight-normal-projectcardstatusbenabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectCardStatus.<b>Disabled</b></code>",id:"code-style-fontweight-normal-projectcardstatusbdisabledbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectCardStatus.<b>ToReview</b></code>",id:"code-style-fontweight-normal-projectcardstatusbtoreviewbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectCardStatus.<b>Suspended</b></code>",id:"code-style-fontweight-normal-projectcardstatusbsuspendedbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>ProjectCardStatus.<b>Rejected</b></code>",id:"code-style-fontweight-normal-projectcardstatusbrejectedbcode",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:i,Bullet:u,SpecifiedBy:p,Badge:b},f="wrapper";function k(e){let{components:t,...r}=e;return(0,n.kt)(f,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Card Status"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ProjectCardStatus {\n  Initiated\n  Enabled\n  Disabled\n  ToReview\n  Suspended\n  Rejected\n}\n")),(0,n.kt)("h3",{id:"values"},"Values"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-projectcardstatusbinitiatedbcode"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardStatus.",(0,n.kt)("b",null,"Initiated")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"when project's card settings are Initiated")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-projectcardstatusbenabledbcode"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardStatus.",(0,n.kt)("b",null,"Enabled")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"when project's card settings are Enabled")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-projectcardstatusbdisabledbcode"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardStatus.",(0,n.kt)("b",null,"Disabled")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"when project's card settings are Disabled")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-projectcardstatusbtoreviewbcode"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardStatus.",(0,n.kt)("b",null,"ToReview")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"when project's card settings are ToReview")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-projectcardstatusbsuspendedbcode"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardStatus.",(0,n.kt)("b",null,"Suspended")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"when project's card settings are Suspended")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-projectcardstatusbrejectedbcode"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardStatus.",(0,n.kt)("b",null,"Rejected")))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"when project's card settings are Rejected")),(0,n.kt)("h3",{id:"member-of"},"Member of"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api/objects/card-settings"},(0,n.kt)("inlineCode",{parentName:"a"},"CardSettings")),"  ",(0,n.kt)(b,{class:"secondary",text:"object",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);