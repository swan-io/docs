"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[89563],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),o=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=o(e.components);return i.createElement(u.Provider,{value:t},e.children)},d="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(n),p=r,f=d["".concat(u,".").concat(p)]||d[p]||g[p]||s;return n?i.createElement(f,a(a({ref:t},c),{},{components:n})):i.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var o=2;o<s;o++)a[o]=n[o];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13645:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>g,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>d,assets:()=>o,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var i=n(87462),r=n(67294),s=n(3905);const a={id:"funding-limit-settings-change-request-filters-input",title:"FundingLimitSettingsChangeRequestFiltersInput",hide_table_of_contents:!1},l=void 0,u={unversionedId:"api-reference/inputs/funding-limit-settings-change-request-filters-input",id:"api-reference/inputs/funding-limit-settings-change-request-filters-input",title:"FundingLimitSettingsChangeRequestFiltersInput",description:"Filters that can be applied when listing funding limit settings change requests",source:"@site/docs/api-reference/inputs/funding-limit-settings-change-request-filters-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/funding-limit-settings-change-request-filters-input",permalink:"/api-reference/inputs/funding-limit-settings-change-request-filters-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/funding-limit-settings-change-request-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit-settings-change-request-filters-input",title:"FundingLimitSettingsChangeRequestFiltersInput",hide_table_of_contents:!1}},o={},c=()=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,s.kt)(r.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,s.kt)(r.Fragment,null,(0,s.kt)("span",{className:e.class},e.text)),p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimitSettingsChangeRequestFiltersInput.<b>id</b></code><Bullet /><code>[String!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-fundinglimitsettingschangerequestfiltersinputbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimitSettingsChangeRequestFiltersInput.<b>status</b></code><Bullet /><code>[FundingLimitSettingsChangeRequestStatus!]</code> <Badge class="badge badge--secondary" text="list"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-fundinglimitsettingschangerequestfiltersinputbstatusbcodefundinglimitsettingschangerequeststatus--",level:4}],f=e=>{let{dataOpen:t,dataClose:n,children:a,startOpen:l=!1}=e;const[u,o]=(0,r.useState)(l);return(0,s.kt)("details",(0,i.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,s.kt)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"}},u?t:n),u&&a)},m={Bullet:c,SpecifiedBy:d,Badge:g,toc:p,Details:f},h="wrapper";function b(e){let{components:t,...n}=e;return(0,s.kt)(h,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Filters that can be applied when listing funding limit settings change requests"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"input FundingLimitSettingsChangeRequestFiltersInput {\n  id: [String!]\n  status: [FundingLimitSettingsChangeRequestStatus!]\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingschangerequestfiltersinputbidbcodestring--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsChangeRequestFiltersInput.",(0,s.kt)("b",null,"id"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"[String!]"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The ids of the funding limit settings change requests")),(0,s.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitsettingschangerequestfiltersinputbstatusbcodefundinglimitsettingschangerequeststatus--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitSettingsChangeRequestFiltersInput.",(0,s.kt)("b",null,"status"))),(0,s.kt)(c,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/enums/funding-limit-settings-change-request-status"},(0,s.kt)("inlineCode",{parentName:"a"},"[FundingLimitSettingsChangeRequestStatus!]"))," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"list",mdxType:"Badge"})," ",(0,s.kt)(g,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Status we want to filter on")))}b.isMDXComponent=!0}}]);