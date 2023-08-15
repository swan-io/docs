"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[53897],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),i=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=r,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[d]="string"==typeof e?e:r,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},40653:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>d,SpecifiedBy:()=>s,assets:()=>i,contentTitle:()=>c,default:()=>y,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(83117),r=n(67294),o=n(3905);const l={id:"request-merchant-profile-update-input",title:"RequestMerchantProfileUpdateInput",hide_table_of_contents:!1},c=void 0,p={unversionedId:"api-reference/inputs/request-merchant-profile-update-input",id:"api-reference/inputs/request-merchant-profile-update-input",title:"RequestMerchantProfileUpdateInput",description:"Input to update a Merchant Profile",source:"@site/docs/api-reference/inputs/request-merchant-profile-update-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/request-merchant-profile-update-input",permalink:"/api-reference/inputs/request-merchant-profile-update-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/request-merchant-profile-update-input.mdx",tags:[],version:"current",frontMatter:{id:"request-merchant-profile-update-input",title:"RequestMerchantProfileUpdateInput",hide_table_of_contents:!1}},i={},u=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantProfileUpdateInput.<b>merchantProfileId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbmerchantprofileidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantProfileUpdateInput.<b>merchantName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbmerchantnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantProfileUpdateInput.<b>merchantWebsite</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbmerchantwebsitebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantProfileUpdateInput.<b>productType</b></code><Bullet /><code>ProductType!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbproducttypebcodeproducttype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantProfileUpdateInput.<b>expectedMonthlyPaymentVolume</b></code><Bullet /><code>AmountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbexpectedmonthlypaymentvolumebcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantProfileUpdateInput.<b>expectedAverageBasket</b></code><Bullet /><code>AmountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbexpectedaveragebasketbcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RequestMerchantProfileUpdateInput.<b>merchantLogo</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbmerchantlogobcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],d=()=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,o.kt)(r.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(r.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:u,Bullet:d,SpecifiedBy:s,Badge:m},h="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input to update a Merchant Profile"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input RequestMerchantProfileUpdateInput {\n  merchantProfileId: ID!\n  merchantName: String!\n  merchantWebsite: String\n  productType: ProductType!\n  expectedMonthlyPaymentVolume: AmountInput!\n  expectedAverageBasket: AmountInput!\n  merchantLogo: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbmerchantprofileidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantProfileUpdateInput.",(0,o.kt)("b",null,"merchantProfileId"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"ID of the MerchantProfile to update")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbmerchantnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantProfileUpdateInput.",(0,o.kt)("b",null,"merchantName"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Business name of the merchant, i.e. name that will be displayed on debtors' bank statements")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbmerchantwebsitebcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantProfileUpdateInput.",(0,o.kt)("b",null,"merchantWebsite"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Url of the merchant's website")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbproducttypebcodeproducttype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantProfileUpdateInput.",(0,o.kt)("b",null,"productType"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/product-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ProductType!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Type of product sold. Gifts and donations can be club subscription or collection of donations (for associations), tips collection, contributions for local authorities")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbexpectedmonthlypaymentvolumebcodeamountinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantProfileUpdateInput.",(0,o.kt)("b",null,"expectedMonthlyPaymentVolume"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Expected annual activity volumes for all payment methods.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbexpectedaveragebasketbcodeamountinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantProfileUpdateInput.",(0,o.kt)("b",null,"expectedAverageBasket"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"expected average basket value.")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-requestmerchantprofileupdateinputbmerchantlogobcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RequestMerchantProfileUpdateInput.",(0,o.kt)("b",null,"merchantLogo"))),(0,o.kt)(d,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"base64 encoded merchant's logo")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/request-merchant-profile-update"},(0,o.kt)("inlineCode",{parentName:"a"},"requestMerchantProfileUpdate")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);