"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),i=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=i(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||a;return n?r.createElement(m,s(s({ref:t},d),{},{components:n})):r.createElement(m,s({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,s[1]=c;for(var i=2;i<a;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84652:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>d,Details:()=>m,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>s,metadata:()=>l,toc:()=>f});var r=n(87462),o=n(67294),a=n(3905);const s={id:"consents",title:"consents",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/queries/consents",id:"api-reference/queries/consents",title:"consents",description:"Return the list of consents",source:"@site/docs/api-reference/queries/consents.mdx",sourceDirName:"api-reference/queries",slug:"/api-reference/queries/consents",permalink:"/api-reference/queries/consents",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/queries/consents.mdx",tags:[],version:"current",frontMatter:{id:"consents",title:"consents",hide_table_of_contents:!1}},i={},d=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:e.class},e.text)),f=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>consents.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-consentsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>consents.<b>after</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-consentsbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>consents.<b>filters</b></code><Bullet /><code>ConsentsFiltersInput</code> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-consentsbfiltersbcodeconsentsfiltersinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ConsentConnection</code> <Badge class="badge badge--secondary" text="object"/>',id:"consentconnection-",level:4}],m=e=>{let{dataOpen:t,dataClose:n,children:s,startOpen:c=!1}=e;const[l,i]=(0,o.useState)(c);return(0,a.kt)("details",(0,r.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,a.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?t:n),l&&s)},g={Bullet:d,SpecifiedBy:p,Badge:u,toc:f,Details:m},b="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(b,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Return the list of consents"),(0,a.kt)("p",null,"For a User access token : return the list of consents for the signed-in user\nFor a Project access token : return the list of consents for the project. This list can be filtered by userId"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"(",(0,a.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn more on authentication"),")")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"consents(\n  first: Int! = 50\n  after: String\n  filters: ConsentsFiltersInput\n): ConsentConnection!\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-consentsbfirstbcodeint--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"consents.",(0,a.kt)("b",null,"first"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-consentsbafterbcodestring-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"consents.",(0,a.kt)("b",null,"after"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-consentsbfiltersbcodeconsentsfiltersinput-"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"consents.",(0,a.kt)("b",null,"filters"))),(0,a.kt)(d,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/inputs/consents-filters-input"},(0,a.kt)("inlineCode",{parentName:"a"},"ConsentsFiltersInput"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"consentconnection-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent-connection"},(0,a.kt)("inlineCode",{parentName:"a"},"ConsentConnection"))," ",(0,a.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Implements the Relay Connection interface, used to paginate list of element (",(0,a.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")))}y.isMDXComponent=!0}}]);