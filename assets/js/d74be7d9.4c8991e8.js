"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[79162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),i=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=i(n),m=r,f=s["".concat(c,".").concat(m)]||s[m]||u[m]||o;return n?a.createElement(f,d(d({ref:t},p),{},{components:n})):a.createElement(f,d({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,d=new Array(o);d[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:r,d[1]=l;for(var i=2;i<o;i++)d[i]=n[i];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5034:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>u,Bullet:()=>p,Details:()=>f,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>m});var a=n(87462),r=n(67294),o=n(3905);const d={id:"add-merchant-profile-input",title:"AddMerchantProfileInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/inputs/add-merchant-profile-input",id:"api-reference/inputs/add-merchant-profile-input",title:"AddMerchantProfileInput",description:"Input to add a Merchant Profile",source:"@site/docs/api-reference/inputs/add-merchant-profile-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/add-merchant-profile-input",permalink:"/api-reference/inputs/add-merchant-profile-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/add-merchant-profile-input.mdx",tags:[],version:"current",frontMatter:{id:"add-merchant-profile-input",title:"AddMerchantProfileInput",hide_table_of_contents:!1}},i={},p=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),m=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddMerchantProfileInput.<b>accountId</b></code><Bullet /><code>ID!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addmerchantprofileinputbaccountidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddMerchantProfileInput.<b>merchantName</b></code><Bullet /><code>String!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addmerchantprofileinputbmerchantnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddMerchantProfileInput.<b>merchantWebsite</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addmerchantprofileinputbmerchantwebsitebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddMerchantProfileInput.<b>merchantLogo</b></code><Bullet /><code>String</code> <Badge class="badge badge--secondary" text="scalar"/>',id:"code-style-fontweight-normal-addmerchantprofileinputbmerchantlogobcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddMerchantProfileInput.<b>productType</b></code><Bullet /><code>ProductType!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="enum"/>',id:"code-style-fontweight-normal-addmerchantprofileinputbproducttypebcodeproducttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddMerchantProfileInput.<b>expectedMonthlyPaymentVolume</b></code><Bullet /><code>AmountInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addmerchantprofileinputbexpectedmonthlypaymentvolumebcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddMerchantProfileInput.<b>expectedAverageBasket</b></code><Bullet /><code>AmountInput!</code> <Badge class="badge badge--secondary" text="non-null"/> <Badge class="badge badge--secondary" text="input"/>',id:"code-style-fontweight-normal-addmerchantprofileinputbexpectedaveragebasketbcodeamountinput--",level:4},{value:"Member Of",id:"member-of",level:3}],f=e=>{let{dataOpen:t,dataClose:n,children:d,startOpen:l=!1}=e;const[c,i]=(0,r.useState)(l);return(0,o.kt)("details",(0,a.Z)({},c?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},c?t:n),c&&d)},b={Bullet:p,SpecifiedBy:s,Badge:u,toc:m,Details:f},g="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input to add a Merchant Profile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddMerchantProfileInput {\n  accountId: ID!\n  merchantName: String!\n  merchantWebsite: String\n  merchantLogo: String\n  productType: ProductType!\n  expectedMonthlyPaymentVolume: AmountInput!\n  expectedAverageBasket: AmountInput!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addmerchantprofileinputbaccountidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddMerchantProfileInput.",(0,o.kt)("b",null,"accountId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ID of the Swan account which the merchantProfile is associated to")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addmerchantprofileinputbmerchantnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddMerchantProfileInput.",(0,o.kt)("b",null,"merchantName"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Business name of the merchant, i.e. name that will be displayed on debtors' bank statements")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addmerchantprofileinputbmerchantwebsitebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddMerchantProfileInput.",(0,o.kt)("b",null,"merchantWebsite"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Url of the merchant's website")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addmerchantprofileinputbmerchantlogobcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddMerchantProfileInput.",(0,o.kt)("b",null,"merchantLogo"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"base64 encoded merchant's logo")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addmerchantprofileinputbproducttypebcodeproducttype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddMerchantProfileInput.",(0,o.kt)("b",null,"productType"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/product-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductType!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Type of product sold. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addmerchantprofileinputbexpectedmonthlypaymentvolumebcodeamountinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddMerchantProfileInput.",(0,o.kt)("b",null,"expectedMonthlyPaymentVolume"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Expected annual activity volumes for all payment methods.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addmerchantprofileinputbexpectedaveragebasketbcodeamountinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddMerchantProfileInput.",(0,o.kt)("b",null,"expectedAverageBasket"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(u,{class:"badge badge--secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"expected average basket value.")),(0,o.kt)("h3",{id:"member-of"},"Member Of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-merchant-profile"},(0,o.kt)("inlineCode",{parentName:"a"},"addMerchantProfile")),"  ",(0,o.kt)(u,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);