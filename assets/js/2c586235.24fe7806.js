"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[44909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),c=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(d,".").concat(m)]||p[m]||u[m]||l;return n?a.createElement(f,o(o({ref:t},s),{},{components:n})):a.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},66656:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(83117),r=n(67294),l=n(3905);const o={id:"allow-sdd",title:"allowSdd",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/mutations/allow-sdd",id:"api-reference/mutations/allow-sdd",title:"allowSdd",description:"Allows to receive Sepa Direct Debit on an account.",source:"@site/docs/api-reference/mutations/allow-sdd.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/allow-sdd",permalink:"/api-reference/mutations/allow-sdd",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/allow-sdd.mdx",tags:[],version:"current",frontMatter:{id:"allow-sdd",title:"allowSdd",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"allowSddVirtualIbanEntry",permalink:"/api-reference/mutations/allow-sdd-virtual-iban-entry"},next:{title:"bindAccountMembership",permalink:"/api-reference/mutations/bind-account-membership"}},c={},s=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>allowSdd.<b>input</b></code><Bullet /><code>AllowSddInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-allowsddbinputbcodeallowsddinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AllowSddPayload</code> <Badge class="secondary" text="union"/>',id:"allowsddpayload-",level:4}],p=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:s,Bullet:p,SpecifiedBy:u,Badge:m},y="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Allows to receive Sepa Direct Debit on an account."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"allowSdd(\n  input: AllowSddInput!\n): AllowSddPayload!\n")),(0,l.kt)("h3",{id:"arguments"},"Arguments"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-allowsddbinputbcodeallowsddinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"allowSdd.",(0,l.kt)("b",null,"input"))),(0,l.kt)(p,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/inputs/allow-sdd-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AllowSddInput!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"type"},"Type"),(0,l.kt)("h4",{id:"allowsddpayload-"},(0,l.kt)("a",{parentName:"h4",href:"/api-reference/unions/allow-sdd-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"AllowSddPayload"))," ",(0,l.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,l.kt)("blockquote",null))}b.isMDXComponent=!0}}]);