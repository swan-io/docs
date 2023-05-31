"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[95827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},s=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=d(n),s=a,m=p["".concat(c,".").concat(s)]||p[s]||f[s]||r;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=s;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}s.displayName="MDXCreateElement"},68275:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>s,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var i=n(83117),a=n(67294),r=n(3905);const l={id:"individual-ultimate-beneficial-owner-type-other",title:"IndividualUltimateBeneficialOwnerTypeOther",hide_table_of_contents:!1},o=void 0,c={unversionedId:"api-reference/objects/individual-ultimate-beneficial-owner-type-other",id:"api-reference/objects/individual-ultimate-beneficial-owner-type-other",title:"IndividualUltimateBeneficialOwnerTypeOther",description:"Individual Ultimate Beneficial Owner Type Other",source:"@site/docs/api-reference/objects/individual-ultimate-beneficial-owner-type-other.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/individual-ultimate-beneficial-owner-type-other",permalink:"/api-reference/objects/individual-ultimate-beneficial-owner-type-other",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/individual-ultimate-beneficial-owner-type-other.mdx",tags:[],version:"current",frontMatter:{id:"individual-ultimate-beneficial-owner-type-other",title:"IndividualUltimateBeneficialOwnerTypeOther",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"IndividualUltimateBeneficialOwnerTypeLegalRepresentative",permalink:"/api-reference/objects/individual-ultimate-beneficial-owner-type-legal-representative"},next:{title:"IndividualUltimateBeneficialOwner",permalink:"/api-reference/objects/individual-ultimate-beneficial-owner"}},d={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualUltimateBeneficialOwnerTypeOther.<b>type</b></code><Bullet /><code>IndividualUltimateBeneficialOwnerTypeEnum!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-individualultimatebeneficialownertypeotherbtypebcodeindividualultimatebeneficialownertypeenum--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>IndividualUltimateBeneficialOwnerInfo</code> <Badge class="secondary" text="interface"/>',id:"individualultimatebeneficialownerinfo-",level:4}],p=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:u,Bullet:p,SpecifiedBy:f,Badge:s},y="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(y,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Individual Ultimate Beneficial Owner Type Other"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type IndividualUltimateBeneficialOwnerTypeOther implements IndividualUltimateBeneficialOwnerInfo {\n  type: IndividualUltimateBeneficialOwnerTypeEnum!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownertypeotherbtypebcodeindividualultimatebeneficialownertypeenum--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwnerTypeOther.",(0,r.kt)("b",null,"type"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/individual-ultimate-beneficial-owner-type-enum"},(0,r.kt)("inlineCode",{parentName:"a"},"IndividualUltimateBeneficialOwnerTypeEnum!"))," ",(0,r.kt)(s,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Individual type")),(0,r.kt)("h3",{id:"interfaces"},"Interfaces"),(0,r.kt)("h4",{id:"individualultimatebeneficialownerinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/individual-ultimate-beneficial-owner-info"},(0,r.kt)("inlineCode",{parentName:"a"},"IndividualUltimateBeneficialOwnerInfo"))," ",(0,r.kt)(s,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Define the type of the UBO")))}b.isMDXComponent=!0}}]);