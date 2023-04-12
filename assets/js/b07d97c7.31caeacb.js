"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[83321],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),c=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},p=function(t){var e=c(t.components);return n.createElement(l.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,i=t.originalType,l=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),s=c(a),g=r,m=s["".concat(l,".").concat(g)]||s[g]||u[g]||i;return a?n.createElement(m,d(d({ref:e},p),{},{components:a})):n.createElement(m,d({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=a.length,d=new Array(i);d[0]=g;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o[s]="string"==typeof t?t:r,d[1]=o;for(var c=2;c<i;c++)d[c]=a[c];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},31489:(t,e,a)=>{a.r(e),a.d(e,{Badge:()=>g,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var n=a(83117),r=a(67294),i=a(3905);const d={id:"add-digital-card",title:"addDigitalCard",hide_table_of_contents:!1},o=void 0,l={unversionedId:"api/mutations/add-digital-card",id:"api/mutations/add-digital-card",title:"addDigitalCard",description:"Add a Digital Card to push to ApplePay or GooglePay",source:"@site/docs/api/mutations/add-digital-card.mdx",sourceDirName:"api/mutations",slug:"/api/mutations/add-digital-card",permalink:"/docs/api/mutations/add-digital-card",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/mutations/add-digital-card.mdx",tags:[],version:"current",frontMatter:{id:"add-digital-card",title:"addDigitalCard",hide_table_of_contents:!1}},c={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addDigitalCard.<b>input</b></code><Bullet /><code>AddDigitalCardInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-adddigitalcardbinputbcodeadddigitalcardinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddDigitalCardPayload</code> <Badge class="secondary" text="union"/>',id:"adddigitalcardpayload-",level:4}],s=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=t=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:t.url,title:"Specified by "+t.url},"\u2398")),g=t=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+t.class},t.text)),m={toc:p,Bullet:s,SpecifiedBy:u,Badge:g},f="wrapper";function y(t){let{components:e,...a}=t;return(0,i.kt)(f,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Add a Digital Card to push to ApplePay or GooglePay"),(0,i.kt)("p",null,"This mutation is restricted to an User access token (",(0,i.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request."),(0,i.kt)("p",null,"The user must be the card holder"),(0,i.kt)("p",null,"A digital card will only be valid for 1 hour after consent validation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"addDigitalCard(\n  input: AddDigitalCardInput\n): AddDigitalCardPayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-adddigitalcardbinputbcodeadddigitalcardinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"addDigitalCard.",(0,i.kt)("b",null,"input"))),(0,i.kt)(s,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api/inputs/add-digital-card-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AddDigitalCardInput"))," ",(0,i.kt)(g,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"adddigitalcardpayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api/unions/add-digital-card-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"AddDigitalCardPayload"))," ",(0,i.kt)(g,{class:"secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Payload returned on mutation completion")))}y.isMDXComponent=!0}}]);