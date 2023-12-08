"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[25942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),i=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=i(e.components);return o.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,d=m(e,["components","mdxType","originalType","parentName"]),u=i(n),y=a,s=u["".concat(c,".").concat(y)]||u[y]||p[y]||l;return n?o.createElement(s,r(r({ref:t},d),{},{components:n})):o.createElement(s,r({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=y;var m={};for(var c in t)hasOwnProperty.call(t,c)&&(m[c]=t[c]);m.originalType=e,m[u]="string"==typeof e?e:a,r[1]=m;for(var i=2;i<l;i++)r[i]=n[i];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},95564:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>d,Details:()=>s,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>m,default:()=>b,frontMatter:()=>r,metadata:()=>c,toc:()=>y});var o=n(87462),a=n(67294),l=n(3905);const r={id:"monthly-payment-volume",title:"MonthlyPaymentVolume",hide_table_of_contents:!1},m=void 0,c={unversionedId:"api-reference/enums/monthly-payment-volume",id:"api-reference/enums/monthly-payment-volume",title:"MonthlyPaymentVolume",description:"Monthly payment volume.",source:"@site/docs/api-reference/enums/monthly-payment-volume.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/monthly-payment-volume",permalink:"/api-reference/enums/monthly-payment-volume",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/monthly-payment-volume.mdx",tags:[],version:"current",frontMatter:{id:"monthly-payment-volume",title:"MonthlyPaymentVolume",hide_table_of_contents:!1}},i={},d=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:e.class},e.text)),y=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>MonthlyPaymentVolume.<b>Between10000And50000</b></code>",id:"code-style-fontweight-normal-monthlypaymentvolumebbetween10000and50000bcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MonthlyPaymentVolume.<b>Between50000And100000</b></code>",id:"code-style-fontweight-normal-monthlypaymentvolumebbetween50000and100000bcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MonthlyPaymentVolume.<b>LessThan10000</b></code>",id:"code-style-fontweight-normal-monthlypaymentvolumeblessthan10000bcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>MonthlyPaymentVolume.<b>MoreThan100000</b></code>",id:"code-style-fontweight-normal-monthlypaymentvolumebmorethan100000bcode",level:4},{value:"Member Of",id:"member-of",level:3}],s=e=>{let{dataOpen:t,dataClose:n,children:r,startOpen:m=!1}=e;const[c,i]=(0,a.useState)(m);return(0,l.kt)("details",(0,o.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,l.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&r)},f={Bullet:d,SpecifiedBy:u,Badge:p,toc:y,Details:s},h="wrapper";function b(e){let{components:t,...n}=e;return(0,l.kt)(h,(0,o.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Monthly payment volume."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MonthlyPaymentVolume {\n  Between10000And50000\n  Between50000And100000\n  LessThan10000\n  MoreThan100000\n}\n")),(0,l.kt)("h3",{id:"values"},"Values"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-monthlypaymentvolumebbetween10000and50000bcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MonthlyPaymentVolume.",(0,l.kt)("b",null,"Between10000And50000")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-monthlypaymentvolumebbetween50000and100000bcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MonthlyPaymentVolume.",(0,l.kt)("b",null,"Between50000And100000")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-monthlypaymentvolumeblessthan10000bcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MonthlyPaymentVolume.",(0,l.kt)("b",null,"LessThan10000")))),(0,l.kt)("blockquote",null),(0,l.kt)("h4",{id:"code-style-fontweight-normal-monthlypaymentvolumebmorethan100000bcode"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"MonthlyPaymentVolume.",(0,l.kt)("b",null,"MoreThan100000")))),(0,l.kt)("blockquote",null),(0,l.kt)("h3",{id:"member-of"},"Member Of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder-company-info"},(0,l.kt)("inlineCode",{parentName:"a"},"AccountHolderCompanyInfo")),"  ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/inputs/onboard-company-account-holder-input"},(0,l.kt)("inlineCode",{parentName:"a"},"OnboardCompanyAccountHolderInput")),"  ",(0,l.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-company-account-holder-info"},(0,l.kt)("inlineCode",{parentName:"a"},"OnboardingCompanyAccountHolderInfo")),"  ",(0,l.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(d,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/inputs/update-company-onboarding-input"},(0,l.kt)("inlineCode",{parentName:"a"},"UpdateCompanyOnboardingInput")),"  ",(0,l.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);