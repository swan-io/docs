"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[31474],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},b="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),b=d(a),m=r,u=b["".concat(c,".").concat(m)]||b[m]||p[m]||l;return a?n.createElement(u,o(o({ref:t},s),{},{components:a})):n.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[b]="string"==typeof e?e:r,o[1]=i;for(var d=2;d<l;d++)o[d]=a[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},68889:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>b,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(83117),r=a(67294),l=a(3905);const o={id:"valid-iban",title:"ValidIban",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api-reference/objects/valid-iban",id:"api-reference/objects/valid-iban",title:"ValidIban",description:"Information extracted from a valid IBAN",source:"@site/docs/api-reference/objects/valid-iban.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/valid-iban",permalink:"/docs/api-reference/objects/valid-iban",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/valid-iban.mdx",tags:[],version:"current",frontMatter:{id:"valid-iban",title:"ValidIban",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"User",permalink:"/docs/api-reference/objects/user"},next:{title:"ValidationError",permalink:"/docs/api-reference/objects/validation-error"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ValidIban.<b>iban</b></code><Bullet /><code>IBAN!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validibanbibanbcodeiban--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidIban.<b>accountNumber</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validibanbaccountnumberbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidIban.<b>checksum</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validibanbchecksumbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidIban.<b>bank</b></code><Bullet /><code>Bank!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-validibanbbankbcodebank--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidIban.<b>reachability</b></code><Bullet /><code>Reachability!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-validibanbreachabilitybcodereachability--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],b=()=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,l.kt)(r.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,l.kt)(r.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:b,SpecifiedBy:p,Badge:m},f="wrapper";function y(e){let{components:t,...a}=e;return(0,l.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Information extracted from a valid IBAN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type ValidIban {\n  iban: IBAN!\n  accountNumber: String!\n  checksum: String!\n  bank: Bank!\n  reachability: Reachability!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-validibanbibanbcodeiban--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ValidIban.",(0,l.kt)("b",null,"iban"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/iban"},(0,l.kt)("inlineCode",{parentName:"a"},"IBAN!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Iban from input")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-validibanbaccountnumberbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ValidIban.",(0,l.kt)("b",null,"accountNumber"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Account Number extracted from the IBAN")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-validibanbchecksumbcodestring--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ValidIban.",(0,l.kt)("b",null,"checksum"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Checksum extracted from the IBAN")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-validibanbbankbcodebank--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ValidIban.",(0,l.kt)("b",null,"bank"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/objects/bank"},(0,l.kt)("inlineCode",{parentName:"a"},"Bank!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Bank that owns this IBAN")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-validibanbreachabilitybcodereachability--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"ValidIban.",(0,l.kt)("b",null,"reachability"))),(0,l.kt)(b,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/objects/reachability"},(0,l.kt)("inlineCode",{parentName:"a"},"Reachability!"))," ",(0,l.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Reachability of this IBAN over different payment methods")),(0,l.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/unions/iban-validation-result"},(0,l.kt)("inlineCode",{parentName:"a"},"IbanValidationResult")),"  ",(0,l.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);