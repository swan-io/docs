"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[20656],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>y});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),s=o,y=u["".concat(c,".").concat(s)]||u[s]||f[s]||i;return t?n.createElement(y,a(a({ref:r},p),{},{components:t})):n.createElement(y,a({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=s;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l[u]="string"==typeof e?e:o,a[1]=l;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},28038:(e,r,t)=>{t.r(r),t.d(r,{Badge:()=>s,Bullet:()=>u,SpecifiedBy:()=>f,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=t(83117),o=t(67294),i=t(3905);const a={id:"merchant-profile-order-by-input",title:"MerchantProfileOrderByInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/inputs/merchant-profile-order-by-input",id:"api-reference/inputs/merchant-profile-order-by-input",title:"MerchantProfileOrderByInput",description:"No description",source:"@site/docs/api-reference/inputs/merchant-profile-order-by-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/merchant-profile-order-by-input",permalink:"/api-reference/inputs/merchant-profile-order-by-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/merchant-profile-order-by-input.mdx",tags:[],version:"current",frontMatter:{id:"merchant-profile-order-by-input",title:"MerchantProfileOrderByInput",hide_table_of_contents:!1}},d={},p=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfileOrderByInput.<b>field</b></code><Bullet /><code>MerchantProfileOrderByFieldInput</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-merchantprofileorderbyinputbfieldbcodemerchantprofileorderbyfieldinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>MerchantProfileOrderByInput.<b>direction</b></code><Bullet /><code>OrderByDirection</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-merchantprofileorderbyinputbdirectionbcodeorderbydirection-",level:4}],u=()=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,i.kt)(o.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),s=e=>(0,i.kt)(o.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:p,Bullet:u,SpecifiedBy:f,Badge:s},m="wrapper";function b(e){let{components:r,...t}=e;return(0,i.kt)(m,(0,n.Z)({},y,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input MerchantProfileOrderByInput {\n  field: MerchantProfileOrderByFieldInput\n  direction: OrderByDirection\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-merchantprofileorderbyinputbfieldbcodemerchantprofileorderbyfieldinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfileOrderByInput.",(0,i.kt)("b",null,"field"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/merchant-profile-order-by-field-input"},(0,i.kt)("inlineCode",{parentName:"a"},"MerchantProfileOrderByFieldInput"))," ",(0,i.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h4",{id:"code-style-fontweight-normal-merchantprofileorderbyinputbdirectionbcodeorderbydirection-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"MerchantProfileOrderByInput.",(0,i.kt)("b",null,"direction"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/order-by-direction"},(0,i.kt)("inlineCode",{parentName:"a"},"OrderByDirection"))," ",(0,i.kt)(s,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null))}b.isMDXComponent=!0}}]);