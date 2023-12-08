"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[21414],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>y});var d=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,d)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,d,o=function(e,t){if(null==e)return{};var a,d,o={},n=Object.keys(e);for(d=0;d<n.length;d++)a=n[d],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(d=0;d<n.length;d++)a=n[d],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=d.createContext({}),i=function(e){var t=d.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=i(e.components);return d.createElement(l.Provider,{value:t},e.children)},b="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return d.createElement(d.Fragment,{},t)}},p=d.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=i(a),p=o,y=b["".concat(l,".").concat(p)]||b[p]||u[p]||n;return a?d.createElement(y,r(r({ref:t},s),{},{components:a})):d.createElement(y,r({ref:t},s))}));function y(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,r=new Array(n);r[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[b]="string"==typeof e?e:o,r[1]=c;for(var i=2;i<n;i++)r[i]=a[i];return d.createElement.apply(null,r)}return d.createElement.apply(null,a)}p.displayName="MDXCreateElement"},42338:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>y,SpecifiedBy:()=>b,assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var d=a(87462),o=a(67294),n=a(3905);const r={id:"add-card-payload",title:"AddCardPayload",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/unions/add-card-payload",id:"api-reference/unions/add-card-payload",title:"AddCardPayload",description:"No description",source:"@site/docs/api-reference/unions/add-card-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/add-card-payload",permalink:"/api-reference/unions/add-card-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/add-card-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-card-payload",title:"AddCardPayload",hide_table_of_contents:!1}},i={},s=()=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),b=e=>(0,n.kt)(o.Fragment,null,"Specification",(0,n.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,n.kt)(o.Fragment,null,(0,n.kt)("span",{className:e.class},e.text)),p=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardPayload.<b>AddCardSuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardpayloadbaddcardsuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardPayload.<b>AccountMembershipNotAllowedRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardpayloadbaccountmembershipnotallowedrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardPayload.<b>BadAccountStatusRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardpayloadbbadaccountstatusrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardPayload.<b>CardProductDisabledRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardpayloadbcardproductdisabledrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardPayload.<b>CardProductSuspendedRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardpayloadbcardproductsuspendedrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardPayload.<b>EnabledCardDesignNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardpayloadbenabledcarddesignnotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardPayload.<b>ForbiddenRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardpayloadbforbiddenrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardPayload.<b>MissingMandatoryFieldRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardpayloadbmissingmandatoryfieldrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardpayloadbvalidationrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],y=e=>{let{dataOpen:t,dataClose:a,children:r,startOpen:c=!1}=e;const[l,i]=(0,o.useState)(c);return(0,n.kt)("details",(0,d.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,n.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&r)},g={Bullet:s,SpecifiedBy:b,Badge:u,toc:p,Details:y},f="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(f,(0,d.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddCardPayload = AddCardSuccessPayload | AccountMembershipNotAllowedRejection | BadAccountStatusRejection | CardProductDisabledRejection | CardProductSuspendedRejection | EnabledCardDesignNotFoundRejection | ForbiddenRejection | MissingMandatoryFieldRejection | ValidationRejection\n")),(0,n.kt)("h3",{id:"possible-types"},"Possible types"),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addcardpayloadbaddcardsuccesspayloadbcode-"},(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/add-card-success-payload"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddCardPayload.",(0,n.kt)("b",null,"AddCardSuccessPayload")))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addcardpayloadbaccountmembershipnotallowedrejectionbcode-"},(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-membership-not-allowed-rejection"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddCardPayload.",(0,n.kt)("b",null,"AccountMembershipNotAllowedRejection")))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rejection returned when the Account Membership is not allowed to use an operation.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addcardpayloadbbadaccountstatusrejectionbcode-"},(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/bad-account-status-rejection"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddCardPayload.",(0,n.kt)("b",null,"BadAccountStatusRejection")))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rejection returned if the status account is not valid")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addcardpayloadbcardproductdisabledrejectionbcode-"},(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/card-product-disabled-rejection"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddCardPayload.",(0,n.kt)("b",null,"CardProductDisabledRejection")))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product is disabled.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addcardpayloadbcardproductsuspendedrejectionbcode-"},(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/card-product-suspended-rejection"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddCardPayload.",(0,n.kt)("b",null,"CardProductSuspendedRejection")))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product is suspended.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addcardpayloadbenabledcarddesignnotfoundrejectionbcode-"},(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/enabled-card-design-not-found-rejection"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddCardPayload.",(0,n.kt)("b",null,"EnabledCardDesignNotFoundRejection")))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product don't have a card design enabled")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addcardpayloadbforbiddenrejectionbcode-"},(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddCardPayload.",(0,n.kt)("b",null,"ForbiddenRejection")))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addcardpayloadbmissingmandatoryfieldrejectionbcode-"},(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/missing-mandatory-field-rejection"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddCardPayload.",(0,n.kt)("b",null,"MissingMandatoryFieldRejection")))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rejection returned when mandatory fields are missing from the call.")),(0,n.kt)("h4",{id:"code-style-fontweight-normal-addcardpayloadbvalidationrejectionbcode-"},(0,n.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,n.kt)("code",{style:{fontWeight:"normal"}},"AddCardPayload.",(0,n.kt)("b",null,"ValidationRejection")))," ",(0,n.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,n.kt)("h3",{id:"returned-by"},"Returned by"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-card"},(0,n.kt)("inlineCode",{parentName:"a"},"addCard")),"  ",(0,n.kt)(u,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);