"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[96298],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>m});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),s=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=s(e.components);return o.createElement(i.Provider,{value:n},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(t),u=a,m=p["".concat(i,".").concat(u)]||p[u]||f[u]||r;return t?o.createElement(m,c(c({ref:n},d),{},{components:t})):o.createElement(m,c({ref:n},d))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<r;s++)c[s]=t[s];return o.createElement.apply(null,c)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},88264:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var o=t(83117),a=t(67294),r=t(3905);const c={id:"consent-connection",title:"ConsentConnection",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/objects/consent-connection",id:"api-reference/objects/consent-connection",title:"ConsentConnection",description:"Implements the Relay Connection interface, used to paginate list of element (Learn More)",source:"@site/docs/api-reference/objects/consent-connection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/consent-connection",permalink:"/docs/api-reference/objects/consent-connection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/consent-connection.mdx",tags:[],version:"current",frontMatter:{id:"consent-connection",title:"ConsentConnection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CompleteDigitalCard",permalink:"/docs/api-reference/objects/complete-digital-card"},next:{title:"ConsentEdge",permalink:"/docs/api-reference/objects/consent-edge"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ConsentConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-consentconnectionbtotalcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConsentConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-consentconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ConsentConnection.<b>edges</b></code><Bullet /><code>[ConsentEdge!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-consentconnectionbedgesbcodeconsentedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="secondary" text="interface"/>',id:"connection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:f,Badge:u},g="wrapper";function y(e){let{components:n,...t}=e;return(0,r.kt)(g,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Implements the Relay Connection interface, used to paginate list of element (",(0,r.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type ConsentConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [ConsentEdge!]!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-consentconnectionbtotalcountbcodeint--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ConsentConnection.",(0,r.kt)("b",null,"totalCount"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,r.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Total number of element in the list")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-consentconnectionbpageinfobcodepageinfo--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ConsentConnection.",(0,r.kt)("b",null,"pageInfo"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/page-info"},(0,r.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Information about the current, the previous and the next page")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-consentconnectionbedgesbcodeconsentedge--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"ConsentConnection.",(0,r.kt)("b",null,"edges"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent-edge"},(0,r.kt)("inlineCode",{parentName:"a"},"[ConsentEdge!]!"))," ",(0,r.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"ConsentEdge list")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"connection-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/connection"},(0,r.kt)("inlineCode",{parentName:"a"},"Connection"))," ",(0,r.kt)(u,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Relay Connection type, used to paginate list of element (",(0,r.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/queries/consents"},(0,r.kt)("inlineCode",{parentName:"a"},"consents")),"  ",(0,r.kt)(u,{class:"secondary",text:"query",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);