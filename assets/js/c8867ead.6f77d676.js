"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[38626],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>y});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=p(r),f=n,y=s["".concat(d,".").concat(f)]||s[f]||u[f]||i;return r?a.createElement(y,o(o({ref:t},c),{},{components:r})):a.createElement(y,o({ref:t},c))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},82205:(e,t,r)=>{r.r(t),r.d(t,{Badge:()=>f,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var a=r(83117),n=r(67294),i=r(3905);const o={id:"capital-deposit-case-order-by-field-input",title:"CapitalDepositCaseOrderByFieldInput",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api-reference/enums/capital-deposit-case-order-by-field-input",id:"api-reference/enums/capital-deposit-case-order-by-field-input",title:"CapitalDepositCaseOrderByFieldInput",description:"Field we can use when ordering that can be applied when listing capital deposit cases",source:"@site/docs/api-reference/enums/capital-deposit-case-order-by-field-input.mdx",sourceDirName:"api-reference/enums",slug:"/api-reference/enums/capital-deposit-case-order-by-field-input",permalink:"/api-reference/enums/capital-deposit-case-order-by-field-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/enums/capital-deposit-case-order-by-field-input.mdx",tags:[],version:"current",frontMatter:{id:"capital-deposit-case-order-by-field-input",title:"CapitalDepositCaseOrderByFieldInput",hide_table_of_contents:!1}},p={},c=[{value:"Values",id:"values",level:3},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositCaseOrderByFieldInput.<b>id</b></code>",id:"code-style-fontweight-normal-capitaldepositcaseorderbyfieldinputbidbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositCaseOrderByFieldInput.<b>createdAt</b></code>",id:"code-style-fontweight-normal-capitaldepositcaseorderbyfieldinputbcreatedatbcode",level:4},{value:"<code style={{ fontWeight: 'normal' }}>CapitalDepositCaseOrderByFieldInput.<b>updatedAt</b></code>",id:"code-style-fontweight-normal-capitaldepositcaseorderbyfieldinputbupdatedatbcode",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(n.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(n.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:s,SpecifiedBy:u,Badge:f},m="wrapper";function b(e){let{components:t,...r}=e;return(0,i.kt)(m,(0,a.Z)({},y,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Field we can use when ordering that can be applied when listing capital deposit cases"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum CapitalDepositCaseOrderByFieldInput {\n  id\n  createdAt\n  updatedAt\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcaseorderbyfieldinputbidbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseOrderByFieldInput.",(0,i.kt)("b",null,"id")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcaseorderbyfieldinputbcreatedatbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseOrderByFieldInput.",(0,i.kt)("b",null,"createdAt")))),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-capitaldepositcaseorderbyfieldinputbupdatedatbcode"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CapitalDepositCaseOrderByFieldInput.",(0,i.kt)("b",null,"updatedAt")))),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/inputs/capital-deposit-case-order-by-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CapitalDepositCaseOrderByInput")),"  ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);