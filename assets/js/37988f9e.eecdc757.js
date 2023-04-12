"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20593],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),s=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(a),f=n,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return a?r.createElement(m,o(o({ref:t},p),{},{components:a})):r.createElement(m,o({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},31712:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(83117),n=a(67294),i=a(3905);const o={id:"capital-deposit-case",title:"capitalDepositCase",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api/queries/capital-deposit-case",id:"api/queries/capital-deposit-case",title:"capitalDepositCase",description:"Return the capital deposit case for the provided id.",source:"@site/docs/api/queries/capital-deposit-case.mdx",sourceDirName:"api/queries",slug:"/api/queries/capital-deposit-case",permalink:"/docs/api/queries/capital-deposit-case",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/queries/capital-deposit-case.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-case",title:"capitalDepositCase",hide_table_of_contents:!1}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>capitalDepositCase.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-capitaldepositcasebidbcodeid--",level:4},{value:"Type",id:"type",level:3},{value:'<code>CapitalDepositCase</code> <Badge class="secondary" text="object"/>',id:"capitaldepositcase-",level:4}],d=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:d,SpecifiedBy:u,Badge:f},y="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(y,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Return the capital deposit case for the provided id."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"capitalDepositCase(\n  id: ID!\n): CapitalDepositCase\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcasebidbcodeid--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"capitalDepositCase.",(0,i.kt)("b",null,"id"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"capitaldepositcase-"},(0,i.kt)("a",{parentName:"h4",href:"/api/objects/capital-deposit-case"},(0,i.kt)("inlineCode",{parentName:"a"},"CapitalDepositCase"))," ",(0,i.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Capital deposit case for a company.")))}g.isMDXComponent=!0}}]);