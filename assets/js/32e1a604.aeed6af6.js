"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[86842],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,u=p["".concat(d,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(u,i(i({ref:t},s),{},{components:r})):n.createElement(u,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82899:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>d,toc:()=>s});var n=r(83117),a=r(67294),o=r(3905);const i={id:"validation-field-error",title:"ValidationFieldError",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/objects/validation-field-error",id:"api-reference/objects/validation-field-error",title:"ValidationFieldError",description:"No description",source:"@site/docs/api-reference/objects/validation-field-error.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/validation-field-error",permalink:"/api-reference/objects/validation-field-error",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/validation-field-error.mdx",tags:[],version:"current",frontMatter:{id:"validation-field-error",title:"ValidationFieldError",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ValidationError",permalink:"/api-reference/objects/validation-error"},next:{title:"ValidationRejection",permalink:"/api-reference/objects/validation-rejection"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationFieldError.<b>code</b></code><Bullet /><code>ValidationFieldErrorCode!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-validationfielderrorbcodebcodevalidationfielderrorcode--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationFieldError.<b>message</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validationfielderrorbmessagebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ValidationFieldError.<b>path</b></code><Bullet /><code>[String!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-validationfielderrorbpathbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:s,Bullet:p,SpecifiedBy:f,Badge:m},y="wrapper";function g(e){let{components:t,...r}=e;return(0,o.kt)(y,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ValidationFieldError {\n  code: ValidationFieldErrorCode!\n  message: String!\n  path: [String!]!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-validationfielderrorbcodebcodevalidationfielderrorcode--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ValidationFieldError.",(0,o.kt)("b",null,"code"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/validation-field-error-code"},(0,o.kt)("inlineCode",{parentName:"a"},"ValidationFieldErrorCode!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-validationfielderrorbmessagebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ValidationFieldError.",(0,o.kt)("b",null,"message"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-validationfielderrorbpathbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ValidationFieldError.",(0,o.kt)("b",null,"path"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/objects/validation-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ValidationRejection")),"  ",(0,o.kt)(m,{class:"secondary",text:"object",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);