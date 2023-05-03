"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25056],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),f=n,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return r?a.createElement(y,o(o({ref:t},s),{},{components:r})):a.createElement(y,o({ref:t},s))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[d]="string"==typeof e?e:n,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},84909:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>p,default:()=>b,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=r(83117),n=r(67294),i=r(3905);const o={id:"capital-deposit-case-order-by-input",title:"CapitalDepositCaseOrderByInput",hide_table_of_contents:!1},p=void 0,l={unversionedId:"api-reference/inputs/capital-deposit-case-order-by-input",id:"api-reference/inputs/capital-deposit-case-order-by-input",title:"CapitalDepositCaseOrderByInput",description:"Order that can be applied when listing capital deposit cases",source:"@site/docs/api-reference/inputs/capital-deposit-case-order-by-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/capital-deposit-case-order-by-input",permalink:"/docs/api-reference/inputs/capital-deposit-case-order-by-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/capital-deposit-case-order-by-input.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-case-order-by-input",title:"CapitalDepositCaseOrderByInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CapitalDepositCaseFiltersInput",permalink:"/docs/api-reference/inputs/capital-deposit-case-filters-input"},next:{title:"CardConfigInput",permalink:"/docs/api-reference/inputs/card-config-input"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseOrderByInput.<b>field</b></code><Bullet /><code>CapitalDepositCaseOrderByFieldInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-capitaldepositcaseorderbyinputbfieldbcodecapitaldepositcaseorderbyfieldinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseOrderByInput.<b>direction</b></code><Bullet /><code>OrderByDirection</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-capitaldepositcaseorderbyinputbdirectionbcodeorderbydirection-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:d,SpecifiedBy:u,Badge:f},m="wrapper";function b(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Order that can be applied when listing capital deposit cases"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input CapitalDepositCaseOrderByInput {\n  field: CapitalDepositCaseOrderByFieldInput\n  direction: OrderByDirection\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcaseorderbyinputbfieldbcodecapitaldepositcaseorderbyfieldinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseOrderByInput.",(0,i.kt)("b",null,"field"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/capital-deposit-case-order-by-field-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseOrderByFieldInput"))," ",(0,i.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcaseorderbyinputbdirectionbcodeorderbydirection-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseOrderByInput.",(0,i.kt)("b",null,"direction"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/order-by-direction"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderByDirection"))," ",(0,i.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/queries/capital-deposit-cases"},(0,i.kt)("inlineCode",{parentName:"a"},"capitalDepositCases")),"  ",(0,i.kt)(f,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);