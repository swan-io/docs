"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79702],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>f});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=a.createContext({}),d=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},i=function(e){var t=d(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,u=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=o,f=p["".concat(u,".").concat(m)]||p[m]||s[m]||r;return n?a.createElement(f,c(c({ref:t},i),{},{components:n})):a.createElement(f,c({ref:t},i))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,c=new Array(r);c[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var d=2;d<r;d++)c[d]=n[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},27121:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>i});var a=n(83117),o=n(67294),r=n(3905);const c={id:"update-account-holder",title:"updateAccountHolder",hide_table_of_contents:!1},l=void 0,u={unversionedId:"api/mutations/update-account-holder",id:"api/mutations/update-account-holder",title:"updateAccountHolder",description:"No description",source:"@site/docs/api/mutations/update-account-holder.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/update-account-holder",permalink:"/docs/api/mutations/update-account-holder",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/mutations/update-account-holder.mdx",tags:[],version:"current",frontMatter:{id:"update-account-holder",title:"updateAccountHolder",hide_table_of_contents:!1}},d={},i=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateAccountHolder.<b>input</b></code><Bullet /><code>UpdateAccountHolderInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updateaccountholderbinputbcodeupdateaccountholderinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateAccountHolderPayload</code> <Badge class="secondary" text="union"/>',id:"updateaccountholderpayload-",level:4}],p=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:p,SpecifiedBy:s,Badge:m},y="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"updateAccountHolder(\n  input: UpdateAccountHolderInput!\n): UpdateAccountHolderPayload!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateaccountholderbinputbcodeupdateaccountholderinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"updateAccountHolder.",(0,r.kt)("b",null,"input"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/update-account-holder-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateAccountHolderInput!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"updateaccountholderpayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api/unions/update-account-holder-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateAccountHolderPayload"))," ",(0,r.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}h.isMDXComponent=!0}}]);