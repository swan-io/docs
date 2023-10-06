"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[38696],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,y=p["".concat(c,".").concat(u)]||p[u]||f[u]||o;return n?i.createElement(y,a(a({ref:t},s),{},{components:n})):i.createElement(y,a({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d[p]="string"==typeof e?e:r,a[1]=d;for(var l=2;l<o;l++)a[l]=n[l];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57854:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,SpecifiedBy:()=>f,assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var i=n(83117),r=n(67294),o=n(3905);const a={id:"identifications-order-by-input",title:"IdentificationsOrderByInput",hide_table_of_contents:!1},d=void 0,c={unversionedId:"api-reference/inputs/identifications-order-by-input",id:"api-reference/inputs/identifications-order-by-input",title:"IdentificationsOrderByInput",description:"Order that can be applied when listing identifications",source:"@site/docs/api-reference/inputs/identifications-order-by-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/identifications-order-by-input",permalink:"/api-reference/inputs/identifications-order-by-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/identifications-order-by-input.mdx",tags:[],version:"current",frontMatter:{id:"identifications-order-by-input",title:"IdentificationsOrderByInput",hide_table_of_contents:!1}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IdentificationsOrderByInput.<b>field</b></code><Bullet /><code>IdentificationsOrderByField</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-identificationsorderbyinputbfieldbcodeidentificationsorderbyfield-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IdentificationsOrderByInput.<b>direction</b></code><Bullet /><code>OrderByDirection</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-identificationsorderbyinputbdirectionbcodeorderbydirection-",level:4}],p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),f=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:p,SpecifiedBy:f,Badge:u},b="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(b,(0,i.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Order that can be applied when listing identifications"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input IdentificationsOrderByInput {\n  field: IdentificationsOrderByField\n  direction: OrderByDirection\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationsorderbyinputbfieldbcodeidentificationsorderbyfield-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationsOrderByInput.",(0,o.kt)("b",null,"field"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/identifications-order-by-field"},(0,o.kt)("inlineCode",{parentName:"a"},"IdentificationsOrderByField"))," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The field by which the Identification list should be ordered")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-identificationsorderbyinputbdirectionbcodeorderbydirection-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"IdentificationsOrderByInput.",(0,o.kt)("b",null,"direction"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/order-by-direction"},(0,o.kt)("inlineCode",{parentName:"a"},"OrderByDirection"))," ",(0,o.kt)(u,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The order in which the Identification list should be ordered")))}m.isMDXComponent=!0}}]);