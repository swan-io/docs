"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[52137],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>g});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=d(t),p=o,g=u["".concat(l,".").concat(p)]||u[p]||f[p]||a;return t?r.createElement(g,i(i({ref:n},s),{},{components:t})):r.createElement(g,i({ref:n},s))}));function g(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=p;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},56252:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>p,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>c,default:()=>y,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=t(83117),o=t(67294),a=t(3905);const i={id:"funding-source-not-found-rejection",title:"FundingSourceNotFoundRejection",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/objects/funding-source-not-found-rejection",id:"api-reference/objects/funding-source-not-found-rejection",title:"FundingSourceNotFoundRejection",description:"No description",source:"@site/docs/api-reference/objects/funding-source-not-found-rejection.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/funding-source-not-found-rejection",permalink:"/docs/api-reference/objects/funding-source-not-found-rejection",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/funding-source-not-found-rejection.mdx",tags:[],version:"current",frontMatter:{id:"funding-source-not-found-rejection",title:"FundingSourceNotFoundRejection",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FundingSourceEdge",permalink:"/docs/api-reference/objects/funding-source-edge"},next:{title:"FundingSourceWrongStatusRejection",permalink:"/docs/api-reference/objects/funding-source-wrong-status-rejection"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingSourceNotFoundRejection.<b>id</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fundingsourcenotfoundrejectionbidbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>FundingSourceNotFoundRejection.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-fundingsourcenotfoundrejectionbmessagebcodestring--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>Rejection</code> <Badge class="secondary" text="interface"/>',id:"rejection-",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,a.kt)(o.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,a.kt)(o.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:s,Bullet:u,SpecifiedBy:f,Badge:p},m="wrapper";function y(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type FundingSourceNotFoundRejection implements Rejection {\n  id: String!\n  message: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-fundingsourcenotfoundrejectionbidbcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"FundingSourceNotFoundRejection.",(0,a.kt)("b",null,"id"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h4",{id:"code-style-fontweight-normal-fundingsourcenotfoundrejectionbmessagebcodestring--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"FundingSourceNotFoundRejection.",(0,a.kt)("b",null,"message"))),(0,a.kt)(u,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,a.kt)(p,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(p,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"interfaces"},"Interfaces"),(0,a.kt)("h4",{id:"rejection-"},(0,a.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/rejection"},(0,a.kt)("inlineCode",{parentName:"a"},"Rejection"))," ",(0,a.kt)(p,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,a.kt)("blockquote",null),(0,a.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/unions/initiate-funding-request-payload"},(0,a.kt)("inlineCode",{parentName:"a"},"InitiateFundingRequestPayload")),"  ",(0,a.kt)(p,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);