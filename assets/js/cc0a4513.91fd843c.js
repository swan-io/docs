"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[60843],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33379:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>u,SpecifiedBy:()=>m,assets:()=>p,contentTitle:()=>s,default:()=>b,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(83117),a=n(67294),i=n(3905);const l={id:"payment-filters-input",title:"PaymentFiltersInput",hide_table_of_contents:!1},s=void 0,o={unversionedId:"api-reference/inputs/payment-filters-input",id:"api-reference/inputs/payment-filters-input",title:"PaymentFiltersInput",description:"Filters that can be applied when listing payments",source:"@site/docs/api-reference/inputs/payment-filters-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/payment-filters-input",permalink:"/docs/api-reference/inputs/payment-filters-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/payment-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"payment-filters-input",title:"PaymentFiltersInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PartnerCloseAccountReasonInput",permalink:"/docs/api-reference/inputs/partner-close-account-reason-input"},next:{title:"PaymentMandateFiltersInput",permalink:"/docs/api-reference/inputs/payment-mandate-filters-input"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PaymentFiltersInput.<b>status</b></code><Bullet /><code>[PaymentStatus!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-paymentfiltersinputbstatusbcodepaymentstatus--",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),m=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:u,SpecifiedBy:m,Badge:d},y="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Filters that can be applied when listing payments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input PaymentFiltersInput {\n  status: [PaymentStatus!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-paymentfiltersinputbstatusbcodepaymentstatus--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PaymentFiltersInput.",(0,i.kt)("b",null,"status"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/payment-status"},(0,i.kt)("inlineCode",{parentName:"a"},"[PaymentStatus!]"))," ",(0,i.kt)(d,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,i.kt)(d,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/queries/payments"},(0,i.kt)("inlineCode",{parentName:"a"},"payments")),"  ",(0,i.kt)(d,{class:"secondary",text:"query",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);