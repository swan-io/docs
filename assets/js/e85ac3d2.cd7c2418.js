"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[59260],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,d=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=a,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||d;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var d=n.length,o=new Array(d);o[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var l=2;l<d;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2432:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>c,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(83117),a=n(67294),d=n(3905);const o={id:"add-cards-input",title:"AddCardsInput",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/inputs/add-cards-input",id:"api-reference/inputs/add-cards-input",title:"AddCardsInput",description:"Input to add a new cards",source:"@site/docs/api-reference/inputs/add-cards-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/add-cards-input",permalink:"/docs/api-reference/inputs/add-cards-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/add-cards-input.mdx",tags:[],version:"current",frontMatter:{id:"add-cards-input",title:"AddCardsInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddCardInput",permalink:"/docs/api-reference/inputs/add-card-input"},next:{title:"AddCardsWithGroupDeliveryInput",permalink:"/docs/api-reference/inputs/add-cards-with-group-delivery-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsInput.<b>cards</b></code><Bullet /><code>[CardConfigInput!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addcardsinputbcardsbcodecardconfiginput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addcardsinputbconsentredirecturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsInput.<b>cardProductId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addcardsinputbcardproductidbcodeid-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(a.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,d.kt)(a.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:p,SpecifiedBy:u,Badge:f},y="wrapper";function g(e){let{components:t,...n}=e;return(0,d.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Input to add a new cards"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddCardsInput {\n  cards: [CardConfigInput!]!\n  consentRedirectUrl: String!\n  cardProductId: ID\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addcardsinputbcardsbcodecardconfiginput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddCardsInput.",(0,d.kt)("b",null,"cards"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/inputs/card-config-input"},(0,d.kt)("inlineCode",{parentName:"a"},"[CardConfigInput!]!"))," ",(0,d.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"the configuration of all the cards you want to add")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addcardsinputbconsentredirecturlbcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddCardsInput.",(0,d.kt)("b",null,"consentRedirectUrl"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addcardsinputbcardproductidbcodeid-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddCardsInput.",(0,d.kt)("b",null,"cardProductId"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,d.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The id of the card product to use to create the new cards.")),(0,d.kt)("h3",{id:"member-of"},"Member of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-cards"},(0,d.kt)("inlineCode",{parentName:"a"},"addCards")),"  ",(0,d.kt)(f,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);