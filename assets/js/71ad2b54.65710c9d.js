"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30479],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},c=Object.keys(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(o=0;o<c.length;o++)n=c[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),s=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},f=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||c;return n?o.createElement(m,r(r({ref:t},d),{},{components:n})):o.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,r=new Array(c);r[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[p]="string"==typeof e?e:a,r[1]=l;for(var s=2;s<c;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24064:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var o=n(83117),a=n(67294),c=n(3905);const r={id:"external-account-connection",title:"ExternalAccountConnection",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api/objects/external-account-connection",id:"api/objects/external-account-connection",title:"ExternalAccountConnection",description:"Implements the Relay Connection interface, used to paginate the list of element (Learn More)",source:"@site/docs/api/objects/external-account-connection.mdx",sourceDirName:"api/objects",slug:"/api/objects/external-account-connection",permalink:"/docs/api/objects/external-account-connection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/external-account-connection.mdx",tags:[],version:"current",frontMatter:{id:"external-account-connection",title:"ExternalAccountConnection",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountConnection.<b>totalCount</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-externalaccountconnectionbtotalcountbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountConnection.<b>pageInfo</b></code><Bullet /><code>PageInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-externalaccountconnectionbpageinfobcodepageinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountConnection.<b>edges</b></code><Bullet /><code>[ExternalAccountEdge!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-externalaccountconnectionbedgesbcodeexternalaccountedge--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Connection</code> <Badge class="secondary" text="interface"/>',id:"connection-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(a.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,c.kt)(a.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:u,Badge:f},g="wrapper";function y(e){let{components:t,...n}=e;return(0,c.kt)(g,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Implements the Relay Connection interface, used to paginate the list of element (",(0,c.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type ExternalAccountConnection implements Connection {\n  totalCount: Int!\n  pageInfo: PageInfo!\n  edges: [ExternalAccountEdge!]!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-externalaccountconnectionbtotalcountbcodeint--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountConnection.",(0,c.kt)("b",null,"totalCount"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/scalars/int"},(0,c.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Total number of elements in the list")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-externalaccountconnectionbpageinfobcodepageinfo--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountConnection.",(0,c.kt)("b",null,"pageInfo"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/page-info"},(0,c.kt)("inlineCode",{parentName:"a"},"PageInfo!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Information about the current, the previous and the next page")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-externalaccountconnectionbedgesbcodeexternalaccountedge--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountConnection.",(0,c.kt)("b",null,"edges"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api/objects/external-account-edge"},(0,c.kt)("inlineCode",{parentName:"a"},"[ExternalAccountEdge!]!"))," ",(0,c.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"ExternalAccountEdge list")),(0,c.kt)("h3",{id:"interfaces"},"Interfaces"),(0,c.kt)("h4",{id:"connection-"},(0,c.kt)("a",{parentName:"h4",href:"/api/interfaces/connection"},(0,c.kt)("inlineCode",{parentName:"a"},"Connection"))," ",(0,c.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"Relay Connection type, used to paginate list of element (",(0,c.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")),(0,c.kt)("h3",{id:"member-of"},"Member of"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api/objects/account-holder"},(0,c.kt)("inlineCode",{parentName:"a"},"AccountHolder")),"  ",(0,c.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);