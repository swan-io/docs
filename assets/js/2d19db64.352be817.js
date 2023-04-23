"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30699],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=c(a),f=s,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=a.length,i=new Array(o);i[0]=f;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r[d]="string"==typeof e?e:s,i[1]=r;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},10151:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>r,default:()=>b,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(83117),s=a(67294),o=a(3905);const i={id:"capital-deposit-cases",title:"capitalDepositCases",hide_table_of_contents:!1},r=void 0,l={unversionedId:"api/queries/capital-deposit-cases",id:"api/queries/capital-deposit-cases",title:"capitalDepositCases",description:"Returns the list of capital deposit cases.",source:"@site/docs/api/queries/capital-deposit-cases.mdx",sourceDirName:"api/queries",slug:"/api/queries/capital-deposit-cases",permalink:"/docs/api/queries/capital-deposit-cases",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/queries/capital-deposit-cases.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-cases",title:"capitalDepositCases",hide_table_of_contents:!1}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>capitalDepositCases.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositcasesbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>capitalDepositCases.<b>before</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositcasesbbeforebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>capitalDepositCases.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositcasesbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>capitalDepositCases.<b>filters</b></code><Bullet /><code>CapitalDepositCaseFiltersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-capitaldepositcasesbfiltersbcodecapitaldepositcasefiltersinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>capitalDepositCases.<b>orderBy</b></code><Bullet /><code>CapitalDepositCaseOrderByInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-capitaldepositcasesborderbybcodecapitaldepositcaseorderbyinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>CapitalDepositCaseConnection</code> <Badge class="secondary" text="object"/>',id:"capitaldepositcaseconnection-",level:4}],d=()=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(s.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(s.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:u,Badge:f},y="wrapper";function b(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns the list of capital deposit cases."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"This query is restricted to a Project access token (",(0,o.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),")")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"capitalDepositCases(\n  first: Int! = 50\n  before: String\n  after: String\n  filters: CapitalDepositCaseFiltersInput\n  orderBy: CapitalDepositCaseOrderByInput\n): CapitalDepositCaseConnection!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasesbfirstbcodeint--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"capitalDepositCases.",(0,o.kt)("b",null,"first"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,o.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasesbbeforebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"capitalDepositCases.",(0,o.kt)("b",null,"before"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasesbafterbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"capitalDepositCases.",(0,o.kt)("b",null,"after"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasesbfiltersbcodecapitaldepositcasefiltersinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"capitalDepositCases.",(0,o.kt)("b",null,"filters"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/capital-deposit-case-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseFiltersInput"))," ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasesborderbybcodecapitaldepositcaseorderbyinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"capitalDepositCases.",(0,o.kt)("b",null,"orderBy"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/inputs/capital-deposit-case-order-by-input"},(0,o.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseOrderByInput"))," ",(0,o.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"capitaldepositcaseconnection-"},(0,o.kt)("a",{parentName:"h4",href:"/api/objects/capital-deposit-case-connection"},(0,o.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseConnection"))," ",(0,o.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Implements the Relay Connection interface, used to paginate list of elements (",(0,o.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")))}b.isMDXComponent=!0}}]);