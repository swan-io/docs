"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[61427],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),d=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},s=function(e){var t=d(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),y=n,b=u["".concat(i,".").concat(y)]||u[y]||p[y]||o;return a?r.createElement(b,c(c({ref:t},s),{},{components:a})):r.createElement(b,c({ref:t},s))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[u]="string"==typeof e?e:n,c[1]=l;for(var d=2;d<o;d++)c[d]=a[d];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},66449:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>p,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>i,toc:()=>y});var r=a(87462),n=a(67294),o=a(3905);const c={id:"view-physical-card-numbers-payload",title:"ViewPhysicalCardNumbersPayload",hide_table_of_contents:!1},l=void 0,i={unversionedId:"api-reference/unions/view-physical-card-numbers-payload",id:"api-reference/unions/view-physical-card-numbers-payload",title:"ViewPhysicalCardNumbersPayload",description:"No description",source:"@site/docs/api-reference/unions/view-physical-card-numbers-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/view-physical-card-numbers-payload",permalink:"/api-reference/unions/view-physical-card-numbers-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/view-physical-card-numbers-payload.mdx",tags:[],version:"current",frontMatter:{id:"view-physical-card-numbers-payload",title:"ViewPhysicalCardNumbersPayload",hide_table_of_contents:!1}},d={},s=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),p=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),y=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ViewPhysicalCardNumbersPayload.<b>ViewPhysicalCardNumbersSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-viewphysicalcardnumberspayloadbviewphysicalcardnumberssuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ViewPhysicalCardNumbersPayload.<b>UserNotCardHolderRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-viewphysicalcardnumberspayloadbusernotcardholderrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ViewPhysicalCardNumbersPayload.<b>CardNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-viewphysicalcardnumberspayloadbcardnotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ViewPhysicalCardNumbersPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-viewphysicalcardnumberspayloadbvalidationrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:c,startOpen:l=!1}=e;const[i,d]=(0,n.useState)(l);return(0,o.kt)("details",(0,r.Z)({},i?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),d((e=>!e))},style:{listStyle:"none"}},i?t:a),i&&c)},m={Bullet:s,SpecifiedBy:u,Badge:p,toc:y,Details:b},h="wrapper";function f(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union ViewPhysicalCardNumbersPayload = ViewPhysicalCardNumbersSuccessPayload | UserNotCardHolderRejection | CardNotFoundRejection | ValidationRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-viewphysicalcardnumberspayloadbviewphysicalcardnumberssuccesspayloadbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/view-physical-card-numbers-success-payload"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ViewPhysicalCardNumbersPayload.",(0,o.kt)("b",null,"ViewPhysicalCardNumbersSuccessPayload")))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-viewphysicalcardnumberspayloadbusernotcardholderrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/user-not-card-holder-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ViewPhysicalCardNumbersPayload.",(0,o.kt)("b",null,"UserNotCardHolderRejection")))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the User is not the Card Holder")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-viewphysicalcardnumberspayloadbcardnotfoundrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/card-not-found-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ViewPhysicalCardNumbersPayload.",(0,o.kt)("b",null,"CardNotFoundRejection")))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the card was not found or if the user does not have the rights to know that the account exists")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-viewphysicalcardnumberspayloadbvalidationrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ViewPhysicalCardNumbersPayload.",(0,o.kt)("b",null,"ValidationRejection")))," ",(0,o.kt)(p,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/view-physical-card-numbers"},(0,o.kt)("inlineCode",{parentName:"a"},"viewPhysicalCardNumbers")),"  ",(0,o.kt)(p,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);