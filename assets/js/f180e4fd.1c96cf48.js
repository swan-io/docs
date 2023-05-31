"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[2203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(n),f=a,m=s["".concat(d,".").concat(f)]||s[f]||u[f]||l;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26324:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>i,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var r=n(83117),a=n(67294),l=n(3905);const o={id:"allow-sdd-input",title:"AllowSddInput",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/inputs/allow-sdd-input",id:"api-reference/inputs/allow-sdd-input",title:"AllowSddInput",description:"Input to Allow SDD",source:"@site/docs/api-reference/inputs/allow-sdd-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/allow-sdd-input",permalink:"/api-reference/inputs/allow-sdd-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/allow-sdd-input.mdx",tags:[],version:"current",frontMatter:{id:"allow-sdd-input",title:"AllowSddInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddressInput",permalink:"/api-reference/inputs/address-input"},next:{title:"AllowSddVirtualIbanEntryInput",permalink:"/api-reference/inputs/allow-sdd-virtual-iban-entry-input"}},c={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AllowSddInput.<b>accountId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-allowsddinputbaccountidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:s,SpecifiedBy:u,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Input to Allow SDD"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input AllowSddInput {\n  accountId: ID!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-allowsddinputbaccountidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"AllowSddInput.",(0,l.kt)("b",null,"accountId"))),(0,l.kt)(s,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"unique identifier of a given account")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/mutations/allow-sdd"},(0,l.kt)("inlineCode",{parentName:"a"},"allowSdd")),"  ",(0,l.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);