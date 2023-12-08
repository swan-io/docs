"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[10638],{3905:(e,a,t)=>{t.d(a,{Zo:()=>i,kt:()=>m});var r=t(67294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=r.createContext({}),d=function(e){var a=r.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},i=function(e){var a=d(e.components);return r.createElement(o.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},y=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=d(t),y=n,m=p["".concat(o,".").concat(y)]||p[y]||u[y]||c;return t?r.createElement(m,s(s({ref:a},i),{},{components:t})):r.createElement(m,s({ref:a},i))}));function m(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var c=t.length,s=new Array(c);s[0]=y;var l={};for(var o in a)hasOwnProperty.call(a,o)&&(l[o]=a[o]);l.originalType=e,l[p]="string"==typeof e?e:n,s[1]=l;for(var d=2;d<c;d++)s[d]=t[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}y.displayName="MDXCreateElement"},1729:(e,a,t)=>{t.r(a),t.d(a,{Badge:()=>u,Bullet:()=>i,Details:()=>m,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>y});var r=t(87462),n=t(67294),c=t(3905);const s={id:"resume-physical-card-success-payload",title:"ResumePhysicalCardSuccessPayload",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/objects/resume-physical-card-success-payload",id:"api-reference/objects/resume-physical-card-success-payload",title:"ResumePhysicalCardSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/resume-physical-card-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/resume-physical-card-success-payload",permalink:"/api-reference/objects/resume-physical-card-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/resume-physical-card-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"resume-physical-card-success-payload",title:"ResumePhysicalCardSuccessPayload",hide_table_of_contents:!1}},d={},i=()=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,c.kt)(n.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,c.kt)(n.Fragment,null,(0,c.kt)("span",{className:e.class},e.text)),y=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ResumePhysicalCardSuccessPayload.<b>physicalCard</b></code><Bullet /><code>PhysicalCard!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-resumephysicalcardsuccesspayloadbphysicalcardbcodephysicalcard--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResumePhysicalCardSuccessPayload.<b>consent</b></code><Bullet /><code>Consent!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-resumephysicalcardsuccesspayloadbconsentbcodeconsent--",level:4},{value:"Implemented By",id:"implemented-by",level:3}],m=e=>{let{dataOpen:a,dataClose:t,children:s,startOpen:l=!1}=e;const[o,d]=(0,n.useState)(l);return(0,c.kt)("details",(0,r.Z)({},o?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,c.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},o?a:t),o&&s)},b={Bullet:i,SpecifiedBy:p,Badge:u,toc:y,Details:m},f="wrapper";function h(e){let{components:a,...t}=e;return(0,c.kt)(f,(0,r.Z)({},b,t,{components:a,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type ResumePhysicalCardSuccessPayload {\n  physicalCard: PhysicalCard!\n  consent: Consent!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-resumephysicalcardsuccesspayloadbphysicalcardbcodephysicalcard--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ResumePhysicalCardSuccessPayload.",(0,c.kt)("b",null,"physicalCard"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/physical-card"},(0,c.kt)("inlineCode",{parentName:"a"},"PhysicalCard!"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The physicalCard to resume")),(0,c.kt)("h4",{id:"code-style-fontweight-normal-resumephysicalcardsuccesspayloadbconsentbcodeconsent--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"ResumePhysicalCardSuccessPayload.",(0,c.kt)("b",null,"consent"))),(0,c.kt)(i,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent"},(0,c.kt)("inlineCode",{parentName:"a"},"Consent!"))," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"The consent required to resume a physical card")),(0,c.kt)("h3",{id:"implemented-by"},"Implemented By"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/resume-physical-card-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"ResumePhysicalCardPayload")),"  ",(0,c.kt)(u,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);