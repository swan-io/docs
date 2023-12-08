"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[87399],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>b});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),g=i,b=c["".concat(l,".").concat(g)]||c[g]||s[g]||r;return t?a.createElement(b,d(d({ref:n},p),{},{components:t})):a.createElement(b,d({ref:n},p))}));function b(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,d=new Array(r);d[0]=g;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o[c]="string"==typeof e?e:i,d[1]=o;for(var u=2;u<r;u++)d[u]=t[u];return a.createElement.apply(null,d)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},3100:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>s,Bullet:()=>p,Details:()=>b,SpecifiedBy:()=>c,assets:()=>u,contentTitle:()=>o,default:()=>y,frontMatter:()=>d,metadata:()=>l,toc:()=>g});var a=t(87462),i=t(67294),r=t(3905);const d={id:"update-individual-onboarding",title:"updateIndividualOnboarding",hide_table_of_contents:!1},o=void 0,l={unversionedId:"api-reference/mutations/update-individual-onboarding",id:"api-reference/mutations/update-individual-onboarding",title:"updateIndividualOnboarding",description:"Updates an individual onboarding.",source:"@site/docs/api-reference/mutations/update-individual-onboarding.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/update-individual-onboarding",permalink:"/api-reference/mutations/update-individual-onboarding",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/update-individual-onboarding.mdx",tags:[],version:"current",frontMatter:{id:"update-individual-onboarding",title:"updateIndividualOnboarding",hide_table_of_contents:!1}},u={},p=()=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),c=e=>(0,r.kt)(i.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,r.kt)(i.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),g=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>updateIndividualOnboarding.<b>input</b></code><Bullet /><code>UpdateIndividualOnboardingInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-updateindividualonboardingbinputbcodeupdateindividualonboardinginput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>UpdateIndividualOnboardingPayload</code> <Badge class="badge badge--secondary" text="union"/>',id:"updateindividualonboardingpayload-",level:4}],b=e=>{let{dataOpen:n,dataClose:t,children:d,startOpen:o=!1}=e;const[l,u]=(0,i.useState)(o);return(0,r.kt)("details",(0,a.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),u((e=>!e))},style:{listStyle:"none"}},l?n:t),l&&d)},m={Bullet:p,SpecifiedBy:c,Badge:s,toc:g,Details:b},f="wrapper";function y(e){let{components:n,...t}=e;return(0,r.kt)(f,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Updates an individual onboarding."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"This mutation is restricted to a Project access token (",(0,r.kt)("a",{parentName:"em",href:"https://docs.swan.io/api/authentication"},"Learn More"),")")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"updateIndividualOnboarding(\n  input: UpdateIndividualOnboardingInput!\n): UpdateIndividualOnboardingPayload!\n")),(0,r.kt)("h3",{id:"arguments"},"Arguments"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updateindividualonboardingbinputbcodeupdateindividualonboardinginput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"updateIndividualOnboarding.",(0,r.kt)("b",null,"input"))),(0,r.kt)(p,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/update-individual-onboarding-input"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateIndividualOnboardingInput!"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h3",{id:"type"},"Type"),(0,r.kt)("h4",{id:"updateindividualonboardingpayload-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/unions/update-individual-onboarding-payload"},(0,r.kt)("inlineCode",{parentName:"a"},"UpdateIndividualOnboardingPayload"))," ",(0,r.kt)(s,{class:"badge badge--secondary",text:"union",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Possible result types for ",(0,r.kt)("inlineCode",{parentName:"p"},"updateIndividualOnboarding"))))}y.isMDXComponent=!0}}]);