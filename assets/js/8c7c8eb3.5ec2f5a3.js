"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79388],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,y=p["".concat(o,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(y,c(c({ref:t},d),{},{components:n})):r.createElement(y,c({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<i;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},81150:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=n(83117),a=n(67294),i=n(3905);const c={id:"activate-physical-card-input",title:"ActivatePhysicalCardInput",hide_table_of_contents:!1},l=void 0,o={unversionedId:"api-reference/inputs/activate-physical-card-input",id:"api-reference/inputs/activate-physical-card-input",title:"ActivatePhysicalCardInput",description:"No description",source:"@site/docs/api-reference/inputs/activate-physical-card-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/activate-physical-card-input",permalink:"/docs/api-reference/inputs/activate-physical-card-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/activate-physical-card-input.mdx",tags:[],version:"current",frontMatter:{id:"activate-physical-card-input",title:"ActivatePhysicalCardInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AccountStandingOrderOrderByInput",permalink:"/docs/api-reference/inputs/account-standing-order-order-by-input"},next:{title:"AddAccountMembershipInput",permalink:"/docs/api-reference/inputs/add-account-membership-input"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ActivatePhysicalCardInput.<b>identifier</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activatephysicalcardinputbidentifierbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ActivatePhysicalCardInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-activatephysicalcardinputbconsentredirecturlbcodestring--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:p,SpecifiedBy:u,Badge:f},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input ActivatePhysicalCardInput {\n  identifier: String!\n  consentRedirectUrl: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activatephysicalcardinputbidentifierbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivatePhysicalCardInput.",(0,i.kt)("b",null,"identifier"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Unique identifier present on physical card")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-activatephysicalcardinputbconsentredirecturlbcodestring--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"ActivatePhysicalCardInput.",(0,i.kt)("b",null,"consentRedirectUrl"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/mutations/activate-physical-card"},(0,i.kt)("inlineCode",{parentName:"a"},"activatePhysicalCard")),"  ",(0,i.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);