"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[93630],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>g});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},o=Object.keys(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(s=0;s<o.length;s++)n=o[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=s.createContext({}),c=function(e){var t=s.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=c(e.components);return s.createElement(d.Provider,{value:t},e.children)},l="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},f=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),l=c(n),f=a,g=l["".concat(d,".").concat(f)]||l[f]||p[f]||o;return n?s.createElement(g,r(r({ref:t},i),{},{components:n})):s.createElement(g,r({ref:t},i))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=f;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u[l]="string"==typeof e?e:a,r[1]=u;for(var c=2;c<o;c++)r[c]=n[c];return s.createElement.apply(null,r)}return s.createElement.apply(null,n)}f.displayName="MDXCreateElement"},35599:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>l,SpecifiedBy:()=>p,assets:()=>c,contentTitle:()=>u,default:()=>y,frontMatter:()=>r,metadata:()=>d,toc:()=>i});var s=n(83117),a=n(67294),o=n(3905);const r={id:"suspended-funding-source-status-info",title:"SuspendedFundingSourceStatusInfo",hide_table_of_contents:!1},u=void 0,d={unversionedId:"api/objects/suspended-funding-source-status-info",id:"api/objects/suspended-funding-source-status-info",title:"SuspendedFundingSourceStatusInfo",description:"Funding Source Suspended status information",source:"@site/docs/api/objects/suspended-funding-source-status-info.mdx",sourceDirName:"api/objects",slug:"/api/objects/suspended-funding-source-status-info",permalink:"/docs/api/objects/suspended-funding-source-status-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/suspended-funding-source-status-info.mdx",tags:[],version:"current",frontMatter:{id:"suspended-funding-source-status-info",title:"SuspendedFundingSourceStatusInfo",hide_table_of_contents:!1}},c={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendedFundingSourceStatusInfo.<b>status</b></code><Bullet /><code>FundingSourceStatus!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-suspendedfundingsourcestatusinfobstatusbcodefundingsourcestatus--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendedFundingSourceStatusInfo.<b>suspendedAt</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-suspendedfundingsourcestatusinfobsuspendedatbcodedate--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>FundingSourceStatusInfo</code> <Badge class="secondary" text="interface"/>',id:"fundingsourcestatusinfo-",level:4}],l=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:i,Bullet:l,SpecifiedBy:p,Badge:f},m="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,s.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Funding Source Suspended status information"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SuspendedFundingSourceStatusInfo implements FundingSourceStatusInfo {\n  status: FundingSourceStatus!\n  suspendedAt: Date!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-suspendedfundingsourcestatusinfobstatusbcodefundingsourcestatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SuspendedFundingSourceStatusInfo.",(0,o.kt)("b",null,"status"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/funding-source-status"},(0,o.kt)("inlineCode",{parentName:"a"},"FundingSourceStatus!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Funding Source Suspended status")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-suspendedfundingsourcestatusinfobsuspendedatbcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"SuspendedFundingSourceStatusInfo.",(0,o.kt)("b",null,"suspendedAt"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Date at which the funding source was suspended")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"fundingsourcestatusinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/funding-source-status-info"},(0,o.kt)("inlineCode",{parentName:"a"},"FundingSourceStatusInfo"))," ",(0,o.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Funding Source status information")))}y.isMDXComponent=!0}}]);