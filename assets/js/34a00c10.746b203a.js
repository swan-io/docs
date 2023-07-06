"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[41409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=c(n),u=a,f=p["".concat(s,".").concat(u)]||p[u]||d[u]||o;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},42077:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>c,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var r=n(83117),a=n(67294),o=n(3905);const i={id:"statement-period",title:"StatementPeriod",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/enums/statement-period",id:"api-reference/enums/statement-period",title:"StatementPeriod",description:"The different periods of statement",source:"@site/docs/api-reference/enums/statement-period.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/statement-period",permalink:"/api-reference/enums/statement-period",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/statement-period.mdx",tags:[],version:"current",frontMatter:{id:"statement-period",title:"StatementPeriod",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"StandingOrderStatus",permalink:"/api-reference/enums/standing-order-status"},next:{title:"StatementStatus",permalink:"/api-reference/enums/statement-status"}},c={},m=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>StatementPeriod.<b>Monthly</b></code>",id:"code-style-fontweight-normal-statementperiodbmonthlybcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>StatementPeriod.<b>Custom</b></code>",id:"code-style-fontweight-normal-statementperiodbcustombcode",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:m,Bullet:p,SpecifiedBy:d,Badge:u},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The different periods of statement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum StatementPeriod {\n  Monthly\n  Custom\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-statementperiodbmonthlybcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatementPeriod.",(0,o.kt)("b",null,"Monthly")))),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-statementperiodbcustombcode"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"StatementPeriod.",(0,o.kt)("b",null,"Custom")))),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/statement"},(0,o.kt)("inlineCode",{parentName:"a"},"Statement")),"  ",(0,o.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api-reference/inputs/statement-filters-input"},(0,o.kt)("inlineCode",{parentName:"a"},"StatementFiltersInput")),"  ",(0,o.kt)(u,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);