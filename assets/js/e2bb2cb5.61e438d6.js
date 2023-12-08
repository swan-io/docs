"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30801],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),i=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=i(e.components);return n.createElement(d.Provider,{value:t},e.children)},g="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),g=i(r),u=a,b=g["".concat(d,".").concat(u)]||g[u]||p[u]||o;return r?n.createElement(b,s(s({ref:t},l),{},{components:r})):n.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[g]="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=r[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9970:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>p,Bullet:()=>l,Details:()=>b,SpecifiedBy:()=>g,assets:()=>i,contentTitle:()=>c,default:()=>k,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=r(87462),a=r(67294),o=r(3905);const s={id:"project-card-designs",title:"ProjectCardDesigns",hide_table_of_contents:!1},c=void 0,d={unversionedId:"api-reference/objects/project-card-designs",id:"api-reference/objects/project-card-designs",title:"ProjectCardDesigns",description:"No description",source:"@site/docs/api-reference/objects/project-card-designs.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/project-card-designs",permalink:"/api-reference/objects/project-card-designs",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/project-card-designs.mdx",tags:[],version:"current",frontMatter:{id:"project-card-designs",title:"ProjectCardDesigns",hide_table_of_contents:!1}},i={},l=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),g=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectCardDesigns.<b>id</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectcarddesignsbidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectCardDesigns.<b>issuingProcessorVisualId</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectcarddesignsbissuingprocessorvisualidbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectCardDesigns.<b>specificCardProductCodeForCompanies</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectcarddesignsbspecificcardproductcodeforcompaniesbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectCardDesigns.<b>name</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-projectcarddesignsbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectCardDesigns.<b>cardDesigns</b></code><Bullet /><code>[CardProductDesign!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-projectcarddesignsbcarddesignsbcodecardproductdesign--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ProjectCardDesigns.<b>preProvisioningSUVCardSettings</b></code><Bullet /><code>PreProvisioningSUVCardSettings</code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-projectcarddesignsbpreprovisioningsuvcardsettingsbcodepreprovisioningsuvcardsettings-",level:4}],b=e=>{let{dataOpen:t,dataClose:r,children:s,startOpen:c=!1}=e;const[d,i]=(0,a.useState)(c);return(0,o.kt)("details",(0,n.Z)({},d?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},d?t:r),d&&s)},m={Bullet:l,SpecifiedBy:g,Badge:p,toc:u,Details:b},f="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(f,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ProjectCardDesigns {\n  id: ID!\n  issuingProcessorVisualId: String\n  specificCardProductCodeForCompanies: String\n  name: String\n  cardDesigns: [CardProductDesign!]!\n  preProvisioningSUVCardSettings: PreProvisioningSUVCardSettings\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-projectcarddesignsbidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardDesigns.",(0,o.kt)("b",null,"id"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Unique identifier of a project")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-projectcarddesignsbissuingprocessorvisualidbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardDesigns.",(0,o.kt)("b",null,"issuingProcessorVisualId"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Visual Id from the issuing card processor (Monext)")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-projectcarddesignsbspecificcardproductcodeforcompaniesbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardDesigns.",(0,o.kt)("b",null,"specificCardProductCodeForCompanies"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Specific card product for companies")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-projectcarddesignsbnamebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardDesigns.",(0,o.kt)("b",null,"name"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Project name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-projectcarddesignsbcarddesignsbcodecardproductdesign--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardDesigns.",(0,o.kt)("b",null,"cardDesigns"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/card-product-design"},(0,o.kt)("inlineCode",{parentName:"a"},"[CardProductDesign!]!"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Project card product designs")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-projectcarddesignsbpreprovisioningsuvcardsettingsbcodepreprovisioningsuvcardsettings-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ProjectCardDesigns.",(0,o.kt)("b",null,"preProvisioningSUVCardSettings"))),(0,o.kt)(l,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/pre-provisioning-suvcard-settings"},(0,o.kt)("inlineCode",{parentName:"a"},"PreProvisioningSUVCardSettings"))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Project's pre provisioning suv card settings")))}k.isMDXComponent=!0}}]);