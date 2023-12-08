"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[64509],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?d(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},d=Object.keys(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(a=0;a<d.length;a++)n=d[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,d=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=o(n),g=r,f=u["".concat(s,".").concat(g)]||u[g]||p[g]||d;return n?a.createElement(f,l(l({ref:t},c),{},{components:n})):a.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var d=n.length,l=new Array(d);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:r,l[1]=i;for(var o=2;o<d;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},72827:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>p,Bullet:()=>c,Details:()=>f,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>l,metadata:()=>s,toc:()=>g});var a=n(87462),r=n(67294),d=n(3905);const l={id:"add-single-use-virtual-cards-input",title:"AddSingleUseVirtualCardsInput",hide_table_of_contents:!1},i=void 0,s={unversionedId:"api-reference/inputs/add-single-use-virtual-cards-input",id:"api-reference/inputs/add-single-use-virtual-cards-input",title:"AddSingleUseVirtualCardsInput",description:"Input to add a new single-use virtual cards",source:"@site/docs/api-reference/inputs/add-single-use-virtual-cards-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/add-single-use-virtual-cards-input",permalink:"/api-reference/inputs/add-single-use-virtual-cards-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/add-single-use-virtual-cards-input.mdx",tags:[],version:"current",frontMatter:{id:"add-single-use-virtual-cards-input",title:"AddSingleUseVirtualCardsInput",hide_table_of_contents:!1}},o={},c=()=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(r.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,d.kt)(r.Fragment,null,(0,d.kt)("span",{className:e.class},e.text)),g=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddSingleUseVirtualCardsInput.<b>cards</b></code><Bullet /><code>[SingleUseVirtualCardConfigInput!]!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addsingleusevirtualcardsinputbcardsbcodesingleusevirtualcardconfiginput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddSingleUseVirtualCardsInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addsingleusevirtualcardsinputbconsentredirecturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddSingleUseVirtualCardsInput.<b>cardProductId</b></code><Bullet /><code>ID</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addsingleusevirtualcardsinputbcardproductidbcodeid-",level:4},{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:l,startOpen:i=!1}=e;const[s,o]=(0,r.useState)(i);return(0,d.kt)("details",(0,a.Z)({},s?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,d.kt)("summary",{onClick:e=>{e.preventDefault(),o((e=>!e))},style:{listStyle:"none"}},s?t:n),s&&l)},m={Bullet:c,SpecifiedBy:u,Badge:p,toc:g,Details:f},b="wrapper";function y(e){let{components:t,...n}=e;return(0,d.kt)(b,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Input to add a new single-use virtual cards"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddSingleUseVirtualCardsInput {\n  cards: [SingleUseVirtualCardConfigInput!]!\n  consentRedirectUrl: String!\n  cardProductId: ID\n}\n")),(0,d.kt)("h3",{id:"fields"},"Fields"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addsingleusevirtualcardsinputbcardsbcodesingleusevirtualcardconfiginput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddSingleUseVirtualCardsInput.",(0,d.kt)("b",null,"cards"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/inputs/single-use-virtual-card-config-input"},(0,d.kt)("inlineCode",{parentName:"a"},"[SingleUseVirtualCardConfigInput!]!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The configuration of all the cards you want to add")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addsingleusevirtualcardsinputbconsentredirecturlbcodestring--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddSingleUseVirtualCardsInput.",(0,d.kt)("b",null,"consentRedirectUrl"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,d.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addsingleusevirtualcardsinputbcardproductidbcodeid-"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"AddSingleUseVirtualCardsInput.",(0,d.kt)("b",null,"cardProductId"))),(0,d.kt)(c,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,d.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,d.kt)(p,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,d.kt)("blockquote",null,(0,d.kt)("p",{parentName:"blockquote"},"The id of the card product to use to create the new cards.")),(0,d.kt)("h3",{id:"member-of"},"Member Of"),(0,d.kt)("p",null,(0,d.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-single-use-virtual-cards"},(0,d.kt)("inlineCode",{parentName:"a"},"addSingleUseVirtualCards")),"  ",(0,d.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);