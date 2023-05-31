"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[65134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,y=d["".concat(l,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(y,o(o({ref:t},s),{},{components:n})):r.createElement(y,o({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},12180:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>d,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(83117),a=n(67294),i=n(3905);const o={id:"physical-card-config-input",title:"PhysicalCardConfigInput",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/inputs/physical-card-config-input",id:"api-reference/inputs/physical-card-config-input",title:"PhysicalCardConfigInput",description:"No description",source:"@site/docs/api-reference/inputs/physical-card-config-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/physical-card-config-input",permalink:"/api-reference/inputs/physical-card-config-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/physical-card-config-input.mdx",tags:[],version:"current",frontMatter:{id:"physical-card-config-input",title:"PhysicalCardConfigInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"PaymentOrderByInput",permalink:"/api-reference/inputs/payment-order-by-input"},next:{title:"PhysicalCardCustomOptionsForGroupDeliveryInput",permalink:"/api-reference/inputs/physical-card-custom-options-for-group-delivery-input"}},p={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardConfigInput.<b>deliveryAddress</b></code><Bullet /><code>CompleteAddressInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-physicalcardconfiginputbdeliveryaddressbcodecompleteaddressinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>PhysicalCardConfigInput.<b>physicalCardCustomOptions</b></code><Bullet /><code>PhysicalCardCustomOptionsInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-physicalcardconfiginputbphysicalcardcustomoptionsbcodephysicalcardcustomoptionsinput-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:d,SpecifiedBy:u,Badge:f},m="wrapper";function h(e){let{components:t,...n}=e;return(0,i.kt)(m,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input PhysicalCardConfigInput {\n  deliveryAddress: CompleteAddressInput!\n  physicalCardCustomOptions: PhysicalCardCustomOptionsInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-physicalcardconfiginputbdeliveryaddressbcodecompleteaddressinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardConfigInput.",(0,i.kt)("b",null,"deliveryAddress"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/complete-address-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CompleteAddressInput!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"address to deliver the physical card")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-physicalcardconfiginputbphysicalcardcustomoptionsbcodephysicalcardcustomoptionsinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"PhysicalCardConfigInput.",(0,i.kt)("b",null,"physicalCardCustomOptions"))),(0,i.kt)(d,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/physical-card-custom-options-input"},(0,i.kt)("inlineCode",{parentName:"a"},"PhysicalCardCustomOptionsInput"))," ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Custom options to use for physical cards.")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/inputs/card-config-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CardConfigInput")),"  ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);