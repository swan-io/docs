"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[91234],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),i=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},s=function(e){var t=i(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(a),p=n,m=u["".concat(l,".").concat(p)]||u[p]||b[p]||o;return a?r.createElement(m,d(d({ref:t},s),{},{components:a})):r.createElement(m,d({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,d=new Array(o);d[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:n,d[1]=c;for(var i=2;i<o;i++)d[i]=a[i];return r.createElement.apply(null,d)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},50565:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>b,Bullet:()=>s,Details:()=>m,SpecifiedBy:()=>u,assets:()=>i,contentTitle:()=>c,default:()=>g,frontMatter:()=>d,metadata:()=>l,toc:()=>p});var r=a(87462),n=a(67294),o=a(3905);const d={id:"view-card-numbers-payload",title:"ViewCardNumbersPayload",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/unions/view-card-numbers-payload",id:"api-reference/unions/view-card-numbers-payload",title:"ViewCardNumbersPayload",description:"No description",source:"@site/docs/api-reference/unions/view-card-numbers-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/view-card-numbers-payload",permalink:"/api-reference/unions/view-card-numbers-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/view-card-numbers-payload.mdx",tags:[],version:"current",frontMatter:{id:"view-card-numbers-payload",title:"ViewCardNumbersPayload",hide_table_of_contents:!1}},i={},s=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),b=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:e.class},e.text)),p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ViewCardNumbersPayload.<b>ViewCardNumbersSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-viewcardnumberspayloadbviewcardnumberssuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ViewCardNumbersPayload.<b>UserNotCardHolderRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-viewcardnumberspayloadbusernotcardholderrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ViewCardNumbersPayload.<b>CardNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-viewcardnumberspayloadbcardnotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ViewCardNumbersPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-viewcardnumberspayloadbvalidationrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],m=e=>{let{dataOpen:t,dataClose:a,children:d,startOpen:c=!1}=e;const[l,i]=(0,n.useState)(c);return(0,o.kt)("details",(0,r.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,o.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&d)},y={Bullet:s,SpecifiedBy:u,Badge:b,toc:p,Details:m},f="wrapper";function g(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,r.Z)({},y,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union ViewCardNumbersPayload = ViewCardNumbersSuccessPayload | UserNotCardHolderRejection | CardNotFoundRejection | ValidationRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-viewcardnumberspayloadbviewcardnumberssuccesspayloadbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/view-card-numbers-success-payload"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ViewCardNumbersPayload.",(0,o.kt)("b",null,"ViewCardNumbersSuccessPayload")))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-viewcardnumberspayloadbusernotcardholderrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/user-not-card-holder-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ViewCardNumbersPayload.",(0,o.kt)("b",null,"UserNotCardHolderRejection")))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the User is not the Card Holder")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-viewcardnumberspayloadbcardnotfoundrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/card-not-found-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ViewCardNumbersPayload.",(0,o.kt)("b",null,"CardNotFoundRejection")))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the card was not found or if the user does not have the rights to know that the account exists")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-viewcardnumberspayloadbvalidationrejectionbcode-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ViewCardNumbersPayload.",(0,o.kt)("b",null,"ValidationRejection")))," ",(0,o.kt)(b,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/view-card-numbers"},(0,o.kt)("inlineCode",{parentName:"a"},"viewCardNumbers")),"  ",(0,o.kt)(b,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);