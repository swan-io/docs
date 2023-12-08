"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[86616],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),i=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=i(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=i(n),m=r,b=p["".concat(u,".").concat(m)]||p[m]||s[m]||l;return n?a.createElement(b,c(c({ref:t},d),{},{components:n})):a.createElement(b,c({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,c=new Array(l);c[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:r,c[1]=o;for(var i=2;i<l;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},51519:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>d,Details:()=>b,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>o,default:()=>g,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var a=n(87462),r=n(67294),l=n(3905);const c={id:"external-account-balance-input",title:"ExternalAccountBalanceInput",hide_table_of_contents:!1},o=void 0,u={unversionedId:"api-reference/inputs/external-account-balance-input",id:"api-reference/inputs/external-account-balance-input",title:"ExternalAccountBalanceInput",description:"No description",source:"@site/docs/api-reference/inputs/external-account-balance-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/external-account-balance-input",permalink:"/api-reference/inputs/external-account-balance-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/external-account-balance-input.mdx",tags:[],version:"current",frontMatter:{id:"external-account-balance-input",title:"ExternalAccountBalanceInput",hide_table_of_contents:!1}},i={},d=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountBalanceInput.<b>amount</b></code><Bullet /><code>AmountInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-externalaccountbalanceinputbamountbcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountBalanceInput.<b>type</b></code><Bullet /><code>ExternalAccountBalanceType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-externalaccountbalanceinputbtypebcodeexternalaccountbalancetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountBalanceInput.<b>lastChangedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-externalaccountbalanceinputblastchangedatbcodedatetime--",level:4},{value:"Member Of",id:"member-of",level:3}],b=e=>{let{dataOpen:t,dataClose:n,children:c,startOpen:o=!1}=e;const[u,i]=(0,r.useState)(o);return(0,l.kt)("details",(0,a.Z)({},u?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},u?t:n),u&&c)},f={Bullet:d,SpecifiedBy:p,Badge:s,toc:m,Details:b},y="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"input ExternalAccountBalanceInput {\n  amount: AmountInput!\n  type: ExternalAccountBalanceType!\n  lastChangedAt: DateTime!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-externalaccountbalanceinputbamountbcodeamountinput--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountBalanceInput.",(0,l.kt)("b",null,"amount"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,l.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Amount with currency")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-externalaccountbalanceinputbtypebcodeexternalaccountbalancetype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountBalanceInput.",(0,l.kt)("b",null,"type"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/enums/external-account-balance-type"},(0,l.kt)("inlineCode",{parentName:"a"},"ExternalAccountBalanceType!"))," ",(0,l.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(s,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Type of Balance")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-externalaccountbalanceinputblastchangedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountBalanceInput.",(0,l.kt)("b",null,"lastChangedAt"))),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(s,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Last changed Date")),(0,l.kt)("h3",{id:"member-of"},"Member Of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-external-account-input"},(0,l.kt)("inlineCode",{parentName:"a"},"AddExternalAccountInput")),"  ",(0,l.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);