"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[82610],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)n=l[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),d=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},f=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||s[f]||l;return n?i.createElement(m,r(r({ref:t},p),{},{components:n})):i.createElement(m,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,r[1]=o;for(var d=2;d<l;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}f.displayName="MDXCreateElement"},21808:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>o,default:()=>v,frontMatter:()=>r,metadata:()=>c,toc:()=>p});var i=n(83117),a=n(67294),l=n(3905);const r={id:"individual-ultimate-beneficial-owner-type-legal-representative",title:"IndividualUltimateBeneficialOwnerTypeLegalRepresentative",hide_table_of_contents:!1},o=void 0,c={unversionedId:"api/objects/individual-ultimate-beneficial-owner-type-legal-representative",id:"api/objects/individual-ultimate-beneficial-owner-type-legal-representative",title:"IndividualUltimateBeneficialOwnerTypeLegalRepresentative",description:"Individual Ultimate Beneficial Owner Type Legal Representative",source:"@site/docs/api/objects/individual-ultimate-beneficial-owner-type-legal-representative.mdx",sourceDirName:"api/objects",slug:"/api/objects/individual-ultimate-beneficial-owner-type-legal-representative",permalink:"/docs/api/objects/individual-ultimate-beneficial-owner-type-legal-representative",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/individual-ultimate-beneficial-owner-type-legal-representative.mdx",tags:[],version:"current",frontMatter:{id:"individual-ultimate-beneficial-owner-type-legal-representative",title:"IndividualUltimateBeneficialOwnerTypeLegalRepresentative",hide_table_of_contents:!1}},d={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualUltimateBeneficialOwnerTypeLegalRepresentative.<b>type</b></code><Bullet /><code>IndividualUltimateBeneficialOwnerTypeEnum!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-individualultimatebeneficialownertypelegalrepresentativebtypebcodeindividualultimatebeneficialownertypeenum--",level:4},{value:"Interfaces",id:"interfaces",level:3},{value:'<code>IndividualUltimateBeneficialOwnerInfo</code> <Badge class="secondary" text="interface"/>',id:"individualultimatebeneficialownerinfo-",level:4}],u=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:u,SpecifiedBy:s,Badge:f},y="wrapper";function v(e){let{components:t,...n}=e;return(0,l.kt)(y,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Individual Ultimate Beneficial Owner Type Legal Representative"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type IndividualUltimateBeneficialOwnerTypeLegalRepresentative implements IndividualUltimateBeneficialOwnerInfo {\n  type: IndividualUltimateBeneficialOwnerTypeEnum!\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownertypelegalrepresentativebtypebcodeindividualultimatebeneficialownertypeenum--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwnerTypeLegalRepresentative.",(0,l.kt)("b",null,"type"))),(0,l.kt)(u,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api/enums/individual-ultimate-beneficial-owner-type-enum"},(0,l.kt)("inlineCode",{parentName:"a"},"IndividualUltimateBeneficialOwnerTypeEnum!"))," ",(0,l.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Individual type")),(0,l.kt)("h3",{id:"interfaces"},"Interfaces"),(0,l.kt)("h4",{id:"individualultimatebeneficialownerinfo-"},(0,l.kt)("a",{parentName:"h4",href:"/api/interfaces/individual-ultimate-beneficial-owner-info"},(0,l.kt)("inlineCode",{parentName:"a"},"IndividualUltimateBeneficialOwnerInfo"))," ",(0,l.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Define the type of the UBO")))}v.isMDXComponent=!0}}]);