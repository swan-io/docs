"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[6067],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,u=p["".concat(c,".").concat(f)]||p[f]||m[f]||o;return n?a.createElement(u,l(l({ref:t},d),{},{components:n})):a.createElement(u,l({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},60877:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>m,assets:()=>s,contentTitle:()=>i,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=n(83117),r=n(67294),o=n(3905);const l={id:"pdf-statement",title:"PdfStatement",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api/objects/pdf-statement",id:"api/objects/pdf-statement",title:"PdfStatement",description:"Custom information for a PDF statement",source:"@site/docs/api/objects/pdf-statement.mdx",sourceDirName:"api/objects",slug:"/api/objects/pdf-statement",permalink:"/docs/api/objects/pdf-statement",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/pdf-statement.mdx",tags:[],version:"current",frontMatter:{id:"pdf-statement",title:"PdfStatement",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PdfStatement.<b>type</b></code><Bullet /><code>StatementType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-pdfstatementbtypebcodestatementtype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PdfStatement.<b>url</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pdfstatementburlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PdfStatement.<b>expiresAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-pdfstatementbexpiresatbcodedatetime-",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>StatementInfo</code> <Badge class="secondary" text="interface"/>',id:"statementinfo-",level:4}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),u={toc:d,Bullet:p,SpecifiedBy:m,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Custom information for a PDF statement"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PdfStatement implements StatementInfo {\n  type: StatementType\n  url: String\n  expiresAt: DateTime\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pdfstatementbtypebcodestatementtype-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PdfStatement.",(0,o.kt)("b",null,"type"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/enums/statement-type"},(0,o.kt)("inlineCode",{parentName:"a"},"StatementType"))," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"statement type")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pdfstatementburlbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PdfStatement.",(0,o.kt)("b",null,"url"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"temporary public url on which the file can be accessed")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-pdfstatementbexpiresatbcodedatetime-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"PdfStatement.",(0,o.kt)("b",null,"expiresAt"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"date at which the link will not be useable anymore")),(0,o.kt)("h3",{id:"interfaces"},"Interfaces"),(0,o.kt)("h4",{id:"statementinfo-"},(0,o.kt)("a",{parentName:"h4",href:"/api/interfaces/statement-info"},(0,o.kt)("inlineCode",{parentName:"a"},"StatementInfo"))," ",(0,o.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Custom information for a certain type of statement")))}b.isMDXComponent=!0}}]);