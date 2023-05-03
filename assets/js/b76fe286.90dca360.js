"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[43152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>g});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,u=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=i,g=p["".concat(s,".").concat(f)]||p[f]||d[f]||u;return n?r.createElement(g,o(o({ref:t},l),{},{components:n})):r.createElement(g,o({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var u=n.length,o=new Array(u);o[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:i,o[1]=a;for(var c=2;c<u;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7493:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>a,default:()=>y,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(83117),i=n(67294),u=n(3905);const o={id:"funding-source-filters-input",title:"FundingSourceFiltersInput",hide_table_of_contents:!1},a=void 0,s={unversionedId:"api-reference/inputs/funding-source-filters-input",id:"api-reference/inputs/funding-source-filters-input",title:"FundingSourceFiltersInput",description:"Filters that can be applied when listing Funding Sources",source:"@site/docs/api-reference/inputs/funding-source-filters-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/funding-source-filters-input",permalink:"/docs/api-reference/inputs/funding-source-filters-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/funding-source-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"funding-source-filters-input",title:"FundingSourceFiltersInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FundingLimitSettingsChangeRequestOrderByInput",permalink:"/docs/api-reference/inputs/funding-limit-settings-change-request-order-by-input"},next:{title:"FundingSourceOrderByInput",permalink:"/docs/api-reference/inputs/funding-source-order-by-input"}},c={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingSourceFiltersInput.<b>status</b></code><Bullet /><code>[FundingSourceStatus!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-fundingsourcefiltersinputbstatusbcodefundingsourcestatus--",level:4}],p=()=>(0,u.kt)(i.Fragment,null,(0,u.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,u.kt)(i.Fragment,null,"Specification",(0,u.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,u.kt)(i.Fragment,null,(0,u.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:l,Bullet:p,SpecifiedBy:d,Badge:f},m="wrapper";function y(e){let{components:t,...n}=e;return(0,u.kt)(m,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Filters that can be applied when listing Funding Sources"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-graphql"},"input FundingSourceFiltersInput {\n  status: [FundingSourceStatus!]!\n}\n")),(0,u.kt)("h3",{id:"fields"},"Fields"),(0,u.kt)("h4",{id:"code-style-fontweight-normal-fundingsourcefiltersinputbstatusbcodefundingsourcestatus--"},(0,u.kt)("a",{parentName:"h4",href:"#"},(0,u.kt)("code",{style:{fontWeight:"normal"}},"FundingSourceFiltersInput.",(0,u.kt)("b",null,"status"))),(0,u.kt)(p,{mdxType:"Bullet"}),(0,u.kt)("a",{parentName:"h4",href:"/api-reference/enums/funding-source-status"},(0,u.kt)("inlineCode",{parentName:"a"},"[FundingSourceStatus!]!"))," ",(0,u.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,u.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,u.kt)("blockquote",null))}y.isMDXComponent=!0}}]);