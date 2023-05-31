"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[81743],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),d=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(a),g=r,f=u["".concat(o,".").concat(g)]||u[g]||s[g]||i;return a?n.createElement(f,c(c({ref:t},p),{},{components:a})):n.createElement(f,c({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,c=new Array(i);c[0]=g;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:r,c[1]=l;for(var d=2;d<i;d++)c[d]=a[d];return n.createElement.apply(null,c)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},84728:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>g,Bullet:()=>u,SpecifiedBy:()=>s,assets:()=>d,contentTitle:()=>l,default:()=>y,frontMatter:()=>c,metadata:()=>o,toc:()=>p});var n=a(83117),r=a(67294),i=a(3905);const c={id:"cancel-digital-card",title:"cancelDigitalCard",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/mutations/cancel-digital-card",id:"api-reference/mutations/cancel-digital-card",title:"cancelDigitalCard",description:"Cancel a Digital Card",source:"@site/docs/api-reference/mutations/cancel-digital-card.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/cancel-digital-card",permalink:"/api-reference/mutations/cancel-digital-card",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/cancel-digital-card.mdx",tags:[],version:"current",frontMatter:{id:"cancel-digital-card",title:"cancelDigitalCard",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"cancelConsent",permalink:"/api-reference/mutations/cancel-consent"},next:{title:"cancelFundingSource",permalink:"/api-reference/mutations/cancel-funding-source"}},d={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>cancelDigitalCard.<b>input</b></code><Bullet /><code>CancelDigitalCardInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-canceldigitalcardbinputbcodecanceldigitalcardinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>CancelDigitalCardPayload</code> <Badge class="secondary" text="union"/>',id:"canceldigitalcardpayload-",level:4}],u=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),g=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:u,SpecifiedBy:s,Badge:g},m="wrapper";function y(e){let{components:t,...a}=e;return(0,i.kt)(m,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Cancel a Digital Card"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"cancelDigitalCard(\n  input: CancelDigitalCardInput\n): CancelDigitalCardPayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-canceldigitalcardbinputbcodecanceldigitalcardinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"cancelDigitalCard.",(0,i.kt)("b",null,"input"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/cancel-digital-card-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelDigitalCardInput"))," ",(0,i.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"canceldigitalcardpayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/unions/cancel-digital-card-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"CancelDigitalCardPayload"))," ",(0,i.kt)(g,{class:"secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}y.isMDXComponent=!0}}]);