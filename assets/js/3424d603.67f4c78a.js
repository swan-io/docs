"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[71181],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(f,o(o({ref:t},p),{},{components:a})):n.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},6251:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var n=a(83117),r=a(67294),i=a(3905);const o={id:"create-capital-deposit-case",title:"createCapitalDepositCase",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api-reference/mutations/create-capital-deposit-case",id:"api-reference/mutations/create-capital-deposit-case",title:"createCapitalDepositCase",description:"Create a capital deposit case.",source:"@site/docs/api-reference/mutations/create-capital-deposit-case.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/create-capital-deposit-case",permalink:"/api-reference/mutations/create-capital-deposit-case",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/create-capital-deposit-case.mdx",tags:[],version:"current",frontMatter:{id:"create-capital-deposit-case",title:"createCapitalDepositCase",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"closeAccount",permalink:"/api-reference/mutations/close-account"},next:{title:"createMultiConsent",permalink:"/api-reference/mutations/create-multi-consent"}},l={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>createCapitalDepositCase.<b>input</b></code><Bullet /><code>CreateCapitalDepositCaseInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-createcapitaldepositcasebinputbcodecreatecapitaldepositcaseinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CreateCapitalDepositCasePayload</code> <Badge class="secondary" text="union"/>',id:"createcapitaldepositcasepayload-",level:4}],d=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:d,SpecifiedBy:u,Badge:m},y="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Create a capital deposit case."),(0,i.kt)("p",null,"This mutation is restricted to an Project access token (",(0,i.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),")."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"createCapitalDepositCase(\n  input: CreateCapitalDepositCaseInput!\n): CreateCapitalDepositCasePayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-createcapitaldepositcasebinputbcodecreatecapitaldepositcaseinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"createCapitalDepositCase.",(0,i.kt)("b",null,"input"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/create-capital-deposit-case-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateCapitalDepositCaseInput!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"createcapitaldepositcasepayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/unions/create-capital-deposit-case-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"CreateCapitalDepositCasePayload"))," ",(0,i.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}g.isMDXComponent=!0}}]);