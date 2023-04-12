"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[1410],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>b});var n=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,l=e.originalType,d=e.parentName,i=r(e,["components","mdxType","originalType","parentName"]),u=s(a),m=c,b=u["".concat(d,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(b,o(o({ref:t},i),{},{components:a})):n.createElement(b,o({ref:t},i))}));function b(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var l=a.length,o=new Array(l);o[0]=m;var r={};for(var d in t)hasOwnProperty.call(t,d)&&(r[d]=t[d]);r.originalType=e,r[u]="string"==typeof e?e:c,o[1]=r;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},56503:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>r,default:()=>f,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var n=a(83117),c=a(67294),l=a(3905);const o={id:"external-account-balance",title:"ExternalAccountBalance",hide_table_of_contents:!1},r=void 0,d={unversionedId:"api/objects/external-account-balance",id:"api/objects/external-account-balance",title:"ExternalAccountBalance",description:"No description",source:"@site/docs/api/objects/external-account-balance.mdx",sourceDirName:"api/objects",slug:"/api/objects/external-account-balance",permalink:"/docs/api/objects/external-account-balance",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/external-account-balance.mdx",tags:[],version:"current",frontMatter:{id:"external-account-balance",title:"ExternalAccountBalance",hide_table_of_contents:!1}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountBalance.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-externalaccountbalancebidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountBalance.<b>amount</b></code><Bullet /><code>Amount</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-externalaccountbalancebamountbcodeamount-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountBalance.<b>type</b></code><Bullet /><code>ExternalAccountBalanceType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-externalaccountbalancebtypebcodeexternalaccountbalancetype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ExternalAccountBalance.<b>lastChangedAt</b></code><Bullet /><code>DateTime!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-externalaccountbalanceblastchangedatbcodedatetime--",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,l.kt)(c.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(c.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(c.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:i,Bullet:u,SpecifiedBy:p,Badge:m},y="wrapper";function f(e){let{components:t,...a}=e;return(0,l.kt)(y,(0,n.Z)({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"No description"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type ExternalAccountBalance {\n  id: ID!\n  amount: Amount\n  type: ExternalAccountBalanceType!\n  lastChangedAt: DateTime!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-externalaccountbalancebidbcodeid--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountBalance.",(0,l.kt)("b",null,"id"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,l.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Unique identifier of an external balance")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-externalaccountbalancebamountbcodeamount-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountBalance.",(0,l.kt)("b",null,"amount"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/objects/amount"},(0,l.kt)("inlineCode",{parentName:"a"},"Amount"))," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Amount with currency")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-externalaccountbalancebtypebcodeexternalaccountbalancetype--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountBalance.",(0,l.kt)("b",null,"type"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/external-account-balance-type"},(0,l.kt)("inlineCode",{parentName:"a"},"ExternalAccountBalanceType!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Type of Balance")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-externalaccountbalanceblastchangedatbcodedatetime--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ExternalAccountBalance.",(0,l.kt)("b",null,"lastChangedAt"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Last changed Date")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api/objects/add-external-account-balance-success-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"AddExternalAccountBalanceSuccessPayload")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/add-or-update-external-account-balance-success-payload"},(0,l.kt)("inlineCode",{parentName:"a"},"AddOrUpdateExternalAccountBalanceSuccessPayload")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api/objects/external-balance-edge"},(0,l.kt)("inlineCode",{parentName:"a"},"ExternalBalanceEdge")),"  ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);