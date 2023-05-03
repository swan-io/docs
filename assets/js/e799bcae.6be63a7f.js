"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[10638],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,c=function(e,t){if(null==e)return{};var a,r,c={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var l=r.createContext({}),i=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,c=e.mdxType,n=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=i(a),y=c,m=p["".concat(l,".").concat(y)]||p[y]||u[y]||n;return a?r.createElement(m,s(s({ref:t},d),{},{components:a})):r.createElement(m,s({ref:t},d))}));function m(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var n=a.length,s=new Array(n);s[0]=y;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[p]="string"==typeof e?e:c,s[1]=o;for(var i=2;i<n;i++)s[i]=a[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},1729:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=a(83117),c=a(67294),n=a(3905);const s={id:"resume-physical-card-success-payload",title:"ResumePhysicalCardSuccessPayload",hide_table_of_contents:!1},o=void 0,l={unversionedId:"api-reference/objects/resume-physical-card-success-payload",id:"api-reference/objects/resume-physical-card-success-payload",title:"ResumePhysicalCardSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/resume-physical-card-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/resume-physical-card-success-payload",permalink:"/docs/api-reference/objects/resume-physical-card-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/resume-physical-card-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"resume-physical-card-success-payload",title:"ResumePhysicalCardSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ResumeAccountMembershipSuccessPayload",permalink:"/docs/api-reference/objects/resume-account-membership-success-payload"},next:{title:"RollingReserve",permalink:"/docs/api-reference/objects/rolling-reserve"}},i={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ResumePhysicalCardSuccessPayload.<b>physicalCard</b></code><Bullet /><code>PhysicalCard!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-resumephysicalcardsuccesspayloadbphysicalcardbcodephysicalcard--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ResumePhysicalCardSuccessPayload.<b>consent</b></code><Bullet /><code>Consent!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-resumephysicalcardsuccesspayloadbconsentbcodeconsent--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,n.kt)(c.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,n.kt)(c.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,n.kt)(c.Fragment,null,(0,n.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:d,Bullet:p,SpecifiedBy:u,Badge:y},f="wrapper";function h(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"type ResumePhysicalCardSuccessPayload {\n  physicalCard: PhysicalCard!\n  consent: Consent!\n}\n")),(0,n.kt)("h3",{id:"fields"},"Fields"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-resumephysicalcardsuccesspayloadbphysicalcardbcodephysicalcard--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ResumePhysicalCardSuccessPayload.",(0,n.kt)("b",null,"physicalCard"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/physical-card"},(0,n.kt)("inlineCode",{parentName:"a"},"PhysicalCard!"))," ",(0,n.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The physicalCard to resume")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-resumephysicalcardsuccesspayloadbconsentbcodeconsent--"},(0,n.kt)("a",{parentName:"h4",href:"#"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"ResumePhysicalCardSuccessPayload.",(0,n.kt)("b",null,"consent"))),(0,n.kt)(p,{mdxType:"Bullet"}),(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/consent"},(0,n.kt)("inlineCode",{parentName:"a"},"Consent!"))," ",(0,n.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,n.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The consent required to resume a physical card")),(0,n.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api-reference/unions/resume-physical-card-payload"},(0,n.kt)("inlineCode",{parentName:"a"},"ResumePhysicalCardPayload")),"  ",(0,n.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);