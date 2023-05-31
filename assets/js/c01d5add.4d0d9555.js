"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[83593],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),s=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=s(n),u=o,m=d["".concat(l,".").concat(u)]||d[u]||f[u]||c;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=n.length,i=new Array(c);i[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:o,i[1]=r;for(var s=2;s<c;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83028:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>r,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(83117),o=n(67294),c=n(3905);const i={id:"capital-deposit-case-connection",title:"CapitalDepositCaseConnection",hide_table_of_contents:!1},r=void 0,l={unversionedId:"api-reference/objects/capital-deposit-case-connection",id:"api-reference/objects/capital-deposit-case-connection",title:"CapitalDepositCaseConnection",description:"Implements the Relay Connection interface, used to paginate list of elements (Learn More)",source:"@site/docs/api-reference/objects/capital-deposit-case-connection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/capital-deposit-case-connection",permalink:"/api-reference/objects/capital-deposit-case-connection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/capital-deposit-case-connection.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-case-connection",title:"CapitalDepositCaseConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CannotActivatePhysicalCardRejection",permalink:"/api-reference/objects/cannot-activate-physical-card-rejection"},next:{title:"CapitalDepositCaseEdge",permalink:"/api-reference/objects/capital-deposit-case-edge"}},s={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositcaseconnectionbtotalcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-capitaldepositcaseconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CapitalDepositCaseConnection.<b>edges</b></code><Bullet /><code>[CapitalDepositCaseEdge!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-capitaldepositcaseconnectionbedgesbcodecapitaldepositcaseedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="secondary" text="interface"/>',id:"connection-",level:4},{value:"Returned by",id:"returned-by",level:3}],d=()=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,c.kt)(o.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(o.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:f,Badge:u},g="wrapper";function y(e){let{components:t,...n}=e;return(0,c.kt)(g,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Implements the Relay Connection interface, used to paginate list of elements (",(0,c.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type CapitalDepositCaseConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [CapitalDepositCaseEdge!]!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcaseconnectionbtotalcountbcodeint--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseConnection.",(0,c.kt)("b",null,"totalCount"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Total number of element in the list")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcaseconnectionbpageinfobcodepageinfo--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseConnection.",(0,c.kt)("b",null,"pageInfo"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/page-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Information about the current, the previous and the next page")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcaseconnectionbedgesbcodecapitaldepositcaseedge--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseConnection.",(0,c.kt)("b",null,"edges"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/capital-deposit-case-edge"},(0,c.kt)("inlineCode",{parentName:"a"},"[CapitalDepositCaseEdge!]!"))," ",(0,c.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"CapitalDepositCaseEdge list")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"connection-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/connection"},(0,c.kt)("inlineCode",{parentName:"a"},"Connection"))," ",(0,c.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Relay Connection type, used to paginate list of element (",(0,c.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")),(0,c.kt)("h3",{id:"returned-by"},"Returned by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/queries/capital-deposit-cases"},(0,c.kt)("inlineCode",{parentName:"a"},"capitalDepositCases")),"  ",(0,c.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);