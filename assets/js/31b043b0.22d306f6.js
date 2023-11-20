"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[50996],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,m=p["".concat(c,".").concat(f)]||p[f]||s[f]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7717:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(83117),a=n(67294),i=n(3905);const o={id:"add-virtual-iban-input",title:"AddVirtualIbanInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/inputs/add-virtual-iban-input",id:"api-reference/inputs/add-virtual-iban-input",title:"AddVirtualIbanInput",description:"Input to Add a Virtual IBAN",source:"@site/docs/api-reference/inputs/add-virtual-iban-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/add-virtual-iban-input",permalink:"/api-reference/inputs/add-virtual-iban-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/add-virtual-iban-input.mdx",tags:[],version:"current",frontMatter:{id:"add-virtual-iban-input",title:"AddVirtualIbanInput",hide_table_of_contents:!1}},d={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddVirtualIbanInput.<b>accountId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addvirtualibaninputbaccountidbcodeid--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:p,SpecifiedBy:s,Badge:f},b="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(b,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Input to Add a Virtual IBAN"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddVirtualIbanInput {\n  accountId: ID!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-addvirtualibaninputbaccountidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"AddVirtualIbanInput.",(0,i.kt)("b",null,"accountId"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unique identifier of a given account")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-virtual-iban-entry"},(0,i.kt)("inlineCode",{parentName:"a"},"addVirtualIbanEntry")),"  ",(0,i.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);