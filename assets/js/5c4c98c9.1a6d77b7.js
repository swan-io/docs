"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[45716],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),f=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=f(e.components);return i.createElement(s.Provider,{value:t},e.children)},l="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=f(n),u=o,m=l["".concat(s,".").concat(u)]||l[u]||d[u]||r;return n?i.createElement(m,a(a({ref:t},p),{},{components:n})):i.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,a=new Array(r);a[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var f=2;f<r;f++)a[f]=n[f];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},96267:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>l,SpecifiedBy:()=>d,assets:()=>f,contentTitle:()=>c,default:()=>y,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(83117),o=n(67294),r=n(3905);const a={id:"identification-process-info",title:"IdentificationProcessInfo",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api-reference/unions/identification-process-info",id:"api-reference/unions/identification-process-info",title:"IdentificationProcessInfo",description:"Union representing the process that was used for this identification",source:"@site/docs/api-reference/unions/identification-process-info.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/identification-process-info",permalink:"/api-reference/unions/identification-process-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/identification-process-info.mdx",tags:[],version:"current",frontMatter:{id:"identification-process-info",title:"IdentificationProcessInfo",hide_table_of_contents:!1}},f={},p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>IdentificationExpertProcessInfo</code> <Badge class="secondary" text="object"/>',id:"identificationexpertprocessinfo-",level:4},{value:'<code>IdentificationExpertWithQESProcessInfo</code> <Badge class="secondary" text="object"/>',id:"identificationexpertwithqesprocessinfo-",level:4},{value:'<code>IdentificationPVIDProcessInfo</code> <Badge class="secondary" text="object"/>',id:"identificationpvidprocessinfo-",level:4},{value:"Member of",id:"member-of",level:3}],l=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:p,Bullet:l,SpecifiedBy:d,Badge:u},b="wrapper";function y(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Union representing the process that was used for this identification"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union IdentificationProcessInfo = IdentificationExpertProcessInfo | IdentificationExpertWithQESProcessInfo | IdentificationPVIDProcessInfo\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"identificationexpertprocessinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/identification-expert-process-info"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationExpertProcessInfo"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The identification process associated to the expert level")),(0,r.kt)("h4",{id:"identificationexpertwithqesprocessinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/identification-expert-with-qesprocess-info"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationExpertWithQESProcessInfo"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The identification process associated to the Qualified Electronic Signature level")),(0,r.kt)("h4",{id:"identificationpvidprocessinfo-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/identification-pvidprocess-info"},(0,r.kt)("inlineCode",{parentName:"a"},"IdentificationPVIDProcessInfo"))," ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The identification process associated to the PVID/Remote Identity Verification Service level")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/objects/identification"},(0,r.kt)("inlineCode",{parentName:"a"},"Identification")),"  ",(0,r.kt)(u,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);