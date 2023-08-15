"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[54317],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=s(a),y=r,f=d["".concat(o,".").concat(y)]||d[y]||u[y]||c;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,l=new Array(c);l[0]=y;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var s=2;s<c;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},89171:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(83117),r=a(67294),c=a(3905);const l={id:"cancel-physical-card",title:"cancelPhysicalCard",hide_table_of_contents:!1},i=void 0,o={unversionedId:"api-reference/mutations/cancel-physical-card",id:"api-reference/mutations/cancel-physical-card",title:"cancelPhysicalCard",description:"Cancel a Physical Card.",source:"@site/docs/api-reference/mutations/cancel-physical-card.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/cancel-physical-card",permalink:"/api-reference/mutations/cancel-physical-card",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/cancel-physical-card.mdx",tags:[],version:"current",frontMatter:{id:"cancel-physical-card",title:"cancelPhysicalCard",hide_table_of_contents:!1}},s={},p=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>cancelPhysicalCard.<b>input</b></code><Bullet /><code>CancelPhysicalCardInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-cancelphysicalcardbinputbcodecancelphysicalcardinput-",level:4},{value:"Type",id:"type",level:3},{value:'<code>CancelPhysicalCardPayload</code> <Badge class="secondary" text="union"/>',id:"cancelphysicalcardpayload-",level:4}],d=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:p,Bullet:d,SpecifiedBy:u,Badge:y},m="wrapper";function h(e){let{components:t,...a}=e;return(0,c.kt)(m,(0,n.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Cancel a Physical Card."),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"cancelPhysicalCard(\n  input: CancelPhysicalCardInput\n): CancelPhysicalCardPayload!\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-cancelphysicalcardbinputbcodecancelphysicalcardinput-"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"cancelPhysicalCard.",(0,c.kt)("b",null,"input"))),(0,c.kt)(d,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/inputs/cancel-physical-card-input"},(0,c.kt)("inlineCode",{parentName:"a"},"CancelPhysicalCardInput"))," ",(0,c.kt)(y,{class:"secondary",text:"input",mdxType:"Badge"})),(0,c.kt)("blockquote",null),(0,c.kt)("h3",{id:"type"},"Type"),(0,c.kt)("h4",{id:"cancelphysicalcardpayload-"},(0,c.kt)("a",{parentName:"h4",href:"/api-reference/unions/cancel-physical-card-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"CancelPhysicalCardPayload"))," ",(0,c.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})),(0,c.kt)("blockquote",null))}h.isMDXComponent=!0}}]);