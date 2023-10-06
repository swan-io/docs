"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[68584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(s,".").concat(u)]||p[u]||f[u]||o;return n?i.createElement(m,c(c({ref:t},l),{},{components:n})):i.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[p]="string"==typeof e?e:r,c[1]=a;for(var d=2;d<o;d++)c[d]=n[d];return i.createElement.apply(null,c)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},10527:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>a,default:()=>v,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var i=n(83117),r=n(67294),o=n(3905);const c={id:"identification-pvidprocess-info",title:"IdentificationPVIDProcessInfo",hide_table_of_contents:!1},a=void 0,s={unversionedId:"api-reference/objects/identification-pvidprocess-info",id:"api-reference/objects/identification-pvidprocess-info",title:"IdentificationPVIDProcessInfo",description:"The identification process associated to the PVID/Remote Identity Verification Service level",source:"@site/docs/api-reference/objects/identification-pvidprocess-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/identification-pvidprocess-info",permalink:"/api-reference/objects/identification-pvidprocess-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/identification-pvidprocess-info.mdx",tags:[],version:"current",frontMatter:{id:"identification-pvidprocess-info",title:"IdentificationPVIDProcessInfo",hide_table_of_contents:!1}},d={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IdentificationPVIDProcessInfo.<b>provider</b></code><Bullet /><code>IdentificationPVIDProcessProvider!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-identificationpvidprocessinfobproviderbcodeidentificationpvidprocessprovider--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:l,Bullet:p,SpecifiedBy:f,Badge:u},y="wrapper";function v(e){let{components:t,...n}=e;return(0,o.kt)(y,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The identification process associated to the PVID/Remote Identity Verification Service level"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type IdentificationPVIDProcessInfo {\n  provider: IdentificationPVIDProcessProvider!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationpvidprocessinfobproviderbcodeidentificationpvidprocessprovider--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationPVIDProcessInfo.",(0,o.kt)("b",null,"provider"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/identification-pvidprocess-provider"},(0,o.kt)("inlineCode",{parentName:"a"},"IdentificationPVIDProcessProvider!"))," ",(0,o.kt)(u,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/unions/identification-process-info"},(0,o.kt)("inlineCode",{parentName:"a"},"IdentificationProcessInfo")),"  ",(0,o.kt)(u,{class:"secondary",text:"union",mdxType:"Badge"})))}v.isMDXComponent=!0}}]);