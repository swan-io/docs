"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[91002],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var d=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);t&&(d=d.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,d)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,d,o=function(e,t){if(null==e)return{};var a,d,o={},r=Object.keys(e);for(d=0;d<r.length;d++)a=r[d],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(d=0;d<r.length;d++)a=r[d],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=d.createContext({}),i=function(e){var t=d.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=i(e.components);return d.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return d.createElement(d.Fragment,{},t)}},y=d.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=i(a),y=o,b=p["".concat(l,".").concat(y)]||p[y]||u[y]||r;return a?d.createElement(b,n(n({ref:t},s),{},{components:a})):d.createElement(b,n({ref:t},s))}));function b(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,n=new Array(r);n[0]=y;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:o,n[1]=c;for(var i=2;i<r;i++)n[i]=a[i];return d.createElement.apply(null,n)}return d.createElement.apply(null,a)}y.displayName="MDXCreateElement"},68002:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>u,Bullet:()=>s,Details:()=>b,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>f,frontMatter:()=>n,metadata:()=>l,toc:()=>y});var d=a(87462),o=a(67294),r=a(3905);const n={id:"add-cards-with-group-delivery-payload",title:"AddCardsWithGroupDeliveryPayload",hide_table_of_contents:!1},c=void 0,l={unversionedId:"api-reference/unions/add-cards-with-group-delivery-payload",id:"api-reference/unions/add-cards-with-group-delivery-payload",title:"AddCardsWithGroupDeliveryPayload",description:"No description",source:"@site/docs/api-reference/unions/add-cards-with-group-delivery-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/add-cards-with-group-delivery-payload",permalink:"/api-reference/unions/add-cards-with-group-delivery-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/add-cards-with-group-delivery-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-cards-with-group-delivery-payload",title:"AddCardsWithGroupDeliveryPayload",hide_table_of_contents:!1}},i={},s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),u=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:e.class},e.text)),y=[{value:"Possible types",id:"possible-types",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsWithGroupDeliveryPayload.<b>AddCardsWithGroupDeliverySuccessPayload</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbaddcardswithgroupdeliverysuccesspayloadbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsWithGroupDeliveryPayload.<b>AddingCardsToDifferentAccountsRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbaddingcardstodifferentaccountsrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsWithGroupDeliveryPayload.<b>BadAccountStatusRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbbadaccountstatusrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsWithGroupDeliveryPayload.<b>TooManyItemsRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbtoomanyitemsrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsWithGroupDeliveryPayload.<b>AccountMembershipNotAllowedRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbaccountmembershipnotallowedrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsWithGroupDeliveryPayload.<b>CardProductSuspendedRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbcardproductsuspendedrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsWithGroupDeliveryPayload.<b>CardProductNotApplicableToPhysicalCardsRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbcardproductnotapplicabletophysicalcardsrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsWithGroupDeliveryPayload.<b>CardProductDisabledRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbcardproductdisabledrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsWithGroupDeliveryPayload.<b>EnabledCardDesignNotFoundRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbenabledcarddesignnotfoundrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsWithGroupDeliveryPayload.<b>MissingMandatoryFieldRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbmissingmandatoryfieldrejectionbcode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddCardsWithGroupDeliveryPayload.<b>ValidationRejection</b></code> <Badge class="badge badge--secondary" text="object"/>',id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbvalidationrejectionbcode-",level:4},{value:"Returned by",id:"returned-by",level:3}],b=e=>{let{dataOpen:t,dataClose:a,children:n,startOpen:c=!1}=e;const[l,i]=(0,o.useState)(c);return(0,r.kt)("details",(0,d.Z)({},l?{open:!0}:{},{className:"details",style:{border:"none",boxShadow:"none",background:"var(--ifm-background-color)"}}),(0,r.kt)("summary",{onClick:e=>{e.preventDefault(),i((e=>!e))},style:{listStyle:"none"}},l?t:a),l&&n)},g={Bullet:s,SpecifiedBy:p,Badge:u,toc:y,Details:b},h="wrapper";function f(e){let{components:t,...a}=e;return(0,r.kt)(h,(0,d.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"union AddCardsWithGroupDeliveryPayload = AddCardsWithGroupDeliverySuccessPayload | AddingCardsToDifferentAccountsRejection | BadAccountStatusRejection | TooManyItemsRejection | AccountMembershipNotAllowedRejection | CardProductSuspendedRejection | CardProductNotApplicableToPhysicalCardsRejection | CardProductDisabledRejection | EnabledCardDesignNotFoundRejection | MissingMandatoryFieldRejection | ValidationRejection\n")),(0,r.kt)("h3",{id:"possible-types"},"Possible types"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbaddcardswithgroupdeliverysuccesspayloadbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/add-cards-with-group-delivery-success-payload"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddCardsWithGroupDeliveryPayload.",(0,r.kt)("b",null,"AddCardsWithGroupDeliverySuccessPayload")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbaddingcardstodifferentaccountsrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/adding-cards-to-different-accounts-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddCardsWithGroupDeliveryPayload.",(0,r.kt)("b",null,"AddingCardsToDifferentAccountsRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the attempting to add cards to different accounts.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbbadaccountstatusrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/bad-account-status-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddCardsWithGroupDeliveryPayload.",(0,r.kt)("b",null,"BadAccountStatusRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the status account is not valid")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbtoomanyitemsrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/too-many-items-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddCardsWithGroupDeliveryPayload.",(0,r.kt)("b",null,"TooManyItemsRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if too many items are given")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbaccountmembershipnotallowedrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/account-membership-not-allowed-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddCardsWithGroupDeliveryPayload.",(0,r.kt)("b",null,"AccountMembershipNotAllowedRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned when the Account Membership is not allowed to use an operation.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbcardproductsuspendedrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/card-product-suspended-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddCardsWithGroupDeliveryPayload.",(0,r.kt)("b",null,"CardProductSuspendedRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product is suspended.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbcardproductnotapplicabletophysicalcardsrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/card-product-not-applicable-to-physical-cards-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddCardsWithGroupDeliveryPayload.",(0,r.kt)("b",null,"CardProductNotApplicableToPhysicalCardsRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product is not applicable to physical card.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbcardproductdisabledrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/card-product-disabled-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddCardsWithGroupDeliveryPayload.",(0,r.kt)("b",null,"CardProductDisabledRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product is disabled.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbenabledcarddesignnotfoundrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/enabled-card-design-not-found-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddCardsWithGroupDeliveryPayload.",(0,r.kt)("b",null,"EnabledCardDesignNotFoundRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if the card product don't have a card design enabled")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbmissingmandatoryfieldrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/missing-mandatory-field-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddCardsWithGroupDeliveryPayload.",(0,r.kt)("b",null,"MissingMandatoryFieldRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned when mandatory fields are missing from the call.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-addcardswithgroupdeliverypayloadbvalidationrejectionbcode-"},(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"AddCardsWithGroupDeliveryPayload.",(0,r.kt)("b",null,"ValidationRejection")))," ",(0,r.kt)(u,{class:"badge badge--secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,r.kt)("h3",{id:"returned-by"},"Returned by"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-cards-with-group-delivery"},(0,r.kt)("inlineCode",{parentName:"a"},"addCardsWithGroupDelivery")),"  ",(0,r.kt)(u,{class:"badge badge--secondary",text:"mutation",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);