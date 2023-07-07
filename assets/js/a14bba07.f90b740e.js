"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30010],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||s;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=n.length,a=new Array(s);a[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:o,a[1]=c;for(var l=2;l<s;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84652:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var r=n(83117),o=n(67294),s=n(3905);const a={id:"consents",title:"consents",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/queries/consents",id:"api-reference/queries/consents",title:"consents",description:"Return the list of consents",source:"@site/docs/api-reference/queries/consents.mdx",sourceDirName:"api-reference/queries",slug:"/api-reference/queries/consents",permalink:"/api-reference/queries/consents",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/queries/consents.mdx",tags:[],version:"current",frontMatter:{id:"consents",title:"consents",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"consent",permalink:"/api-reference/queries/consent"},next:{title:"fundingLimitSettingsChangeRequest",permalink:"/api-reference/queries/funding-limit-settings-change-request"}},l={},d=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>consents.<b>first</b></code><Bullet /><code>Int!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-consentsbfirstbcodeint--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>consents.<b>after</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-consentsbafterbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>consents.<b>filters</b></code><Bullet /><code>ConsentsFiltersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-consentsbfiltersbcodeconsentsfiltersinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ConsentConnection</code> <Badge class="secondary" text="object"/>',id:"consentconnection-",level:4}],p=()=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,s.kt)(o.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,s.kt)(o.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:u,Badge:f},y="wrapper";function g(e){let{components:t,...n}=e;return(0,s.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Return the list of consents"),(0,s.kt)("p",null,"For a User access token : return the list of consents for the signed-in user\nFor a Project access token : return the list of consents for the project. This list can be filtered by userId"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(",(0,s.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn more on authentication"),")")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"consents(\n  first: Int! = 50\n  after: String\n  filters: ConsentsFiltersInput\n): ConsentConnection!\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-consentsbfirstbcodeint--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"consents.",(0,s.kt)("b",null,"first"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/scalars/int"},(0,s.kt)("inlineCode",{parentName:"a"},"Int!"))," ",(0,s.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-consentsbafterbcodestring-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"consents.",(0,s.kt)("b",null,"after"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,s.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,s.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h4",{id:"code-style-fontweight-normal-consentsbfiltersbcodeconsentsfiltersinput-"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"consents.",(0,s.kt)("b",null,"filters"))),(0,s.kt)(p,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/inputs/consents-filters-input"},(0,s.kt)("inlineCode",{parentName:"a"},"ConsentsFiltersInput"))," ",(0,s.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,s.kt)("blockquote",null),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"consentconnection-"},(0,s.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent-connection"},(0,s.kt)("inlineCode",{parentName:"a"},"ConsentConnection"))," ",(0,s.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"Implements the Relay Connection interface, used to paginate list of element (",(0,s.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/pagination"},"Learn More"),")")))}g.isMDXComponent=!0}}]);