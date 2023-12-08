"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[17709],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),u=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=u(a),f=r,m=p["".concat(d,".").concat(f)]||p[f]||s[f]||o;return a?n.createElement(m,c(c({ref:t},i),{},{components:a})):n.createElement(m,c({ref:t},i))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,c=new Array(o);c[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var u=2;u<o;u++)c[u]=a[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},52288:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>s,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>p,assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>d,toc:()=>f});var n=a(87462),r=a(67294),o=a(3905);const c={id:"add-or-update-external-account-balance",title:"addOrUpdateExternalAccountBalance",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/mutations/add-or-update-external-account-balance",id:"api-reference/mutations/add-or-update-external-account-balance",title:"addOrUpdateExternalAccountBalance",description:"Add an external balance to an external account.",source:"@site/docs/api-reference/mutations/add-or-update-external-account-balance.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/add-or-update-external-account-balance",permalink:"/api-reference/mutations/add-or-update-external-account-balance",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/add-or-update-external-account-balance.mdx",tags:[],version:"current",frontMatter:{id:"add-or-update-external-account-balance",title:"addOrUpdateExternalAccountBalance",hide_table_of_contents:!1}},u={},i=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),f=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addOrUpdateExternalAccountBalance.<b>input</b></code><Bullet /><code>AddOrUpdateExternalAccountBalanceInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addorupdateexternalaccountbalancebinputbcodeaddorupdateexternalaccountbalanceinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddOrUpdateExternalAccountBalancePayload</code> <Badge class="badge badge--secondary" text="union"/>',id:"addorupdateexternalaccountbalancepayload-",level:4}],m=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:l=!1}=e;const[d,u]=(0,r.useState)(l);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},d?t:a),d&&c)},b={Bullet:i,SpecifiedBy:p,Badge:s,toc:f,Details:m},y="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(y,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Add an external balance to an external account.\nIf a balance already exist for the day, the balance amount will be updated."),(0,o.kt)("p",null,"This mutation is restricted to a Project access token (",(0,o.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"addOrUpdateExternalAccountBalance(\n  input: AddOrUpdateExternalAccountBalanceInput!\n): AddOrUpdateExternalAccountBalancePayload!\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addorupdateexternalaccountbalancebinputbcodeaddorupdateexternalaccountbalanceinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"addOrUpdateExternalAccountBalance.",(0,o.kt)("b",null,"input"))),(0,o.kt)(i,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/add-or-update-external-account-balance-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddOrUpdateExternalAccountBalanceInput!"))," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"addorupdateexternalaccountbalancepayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/unions/add-or-update-external-account-balance-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"AddOrUpdateExternalAccountBalancePayload"))," ",(0,o.kt)(s,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,o.kt)("blockquote",null))}g.isMDXComponent=!0}}]);