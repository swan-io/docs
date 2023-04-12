"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[2314],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(a),m=n,y=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return a?r.createElement(y,s(s({ref:t},u),{},{components:a})):r.createElement(y,s({ref:t},u))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},13106:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>d,assets:()=>l,contentTitle:()=>o,default:()=>f,frontMatter:()=>s,metadata:()=>c,toc:()=>u});var r=a(83117),n=a(67294),i=a(3905);const s={id:"resume-physical-card",title:"resumePhysicalCard",hide_table_of_contents:!1},o=void 0,c={unversionedId:"api/mutations/resume-physical-card",id:"api/mutations/resume-physical-card",title:"resumePhysicalCard",description:"Resume a Physical Card.",source:"@site/docs/api/mutations/resume-physical-card.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/resume-physical-card",permalink:"/docs/api/mutations/resume-physical-card",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/mutations/resume-physical-card.mdx",tags:[],version:"current",frontMatter:{id:"resume-physical-card",title:"resumePhysicalCard",hide_table_of_contents:!1}},l={},u=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>resumePhysicalCard.<b>input</b></code><Bullet /><code>ResumePhysicalCardInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-resumephysicalcardbinputbcoderesumephysicalcardinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>ResumePhysicalCardPayload</code> <Badge class="secondary" text="union"/>',id:"resumephysicalcardpayload-",level:4}],p=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),d=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:u,Bullet:p,SpecifiedBy:d,Badge:m},h="wrapper";function f(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Resume a Physical Card."),(0,i.kt)("p",null,"This mutation is restricted to an User access token (",(0,i.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request."),(0,i.kt)("p",null,"The user must have the account membership for this card"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"resumePhysicalCard(\n  input: ResumePhysicalCardInput\n): ResumePhysicalCardPayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-resumephysicalcardbinputbcoderesumephysicalcardinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"resumePhysicalCard.",(0,i.kt)("b",null,"input"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/inputs/resume-physical-card-input"},(0,i.kt)("inlineCode",{parentName:"a"},"ResumePhysicalCardInput"))," ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"resumephysicalcardpayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api/unions/resume-physical-card-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"ResumePhysicalCardPayload"))," ",(0,i.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}f.isMDXComponent=!0}}]);