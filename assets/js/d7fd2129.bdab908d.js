"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[30058],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var n=a(67294);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,c=function(e,t){if(null==e)return{};var a,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var d=n.createContext({}),l=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=l(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,c=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(a),y=c,h=p["".concat(d,".").concat(y)]||p[y]||u[y]||o;return a?n.createElement(h,r(r({ref:t},s),{},{components:a})):n.createElement(h,r({ref:t},s))}));function h(e,t){var a=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=a.length,r=new Array(o);r[0]=y;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:c,r[1]=i;for(var l=2;l<o;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},56036:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>i,default:()=>k,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var n=a(83117),c=a(67294),o=a(3905);const r={id:"activate-physical-card-payload",title:"ActivatePhysicalCardPayload",hide_table_of_contents:!1},i=void 0,d={unversionedId:"api-reference/unions/activate-physical-card-payload",id:"api-reference/unions/activate-physical-card-payload",title:"ActivatePhysicalCardPayload",description:"No description",source:"@site/docs/api-reference/unions/activate-physical-card-payload.mdx",sourceDirName:"api-reference/unions",slug:"/api-reference/unions/activate-physical-card-payload",permalink:"/docs/api-reference/unions/activate-physical-card-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/unions/activate-physical-card-payload.mdx",tags:[],version:"current",frontMatter:{id:"activate-physical-card-payload",title:"ActivatePhysicalCardPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"WalletToken",permalink:"/docs/api-reference/scalars/wallet-token"},next:{title:"AddAccountMembershipPayload",permalink:"/docs/api-reference/unions/add-account-membership-payload"}},l={},s=[{value:"Possible types",id:"possible-types",level:3},{value:'<code>ActivatePhysicalCardSuccessPayload</code> <Badge class="secondary" text="object"/>',id:"activatephysicalcardsuccesspayload-",level:4},{value:'<code>BadAccountStatusRejection</code> <Badge class="secondary" text="object"/>',id:"badaccountstatusrejection-",level:4},{value:'<code>PhysicalCardNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"physicalcardnotfoundrejection-",level:4},{value:'<code>PhysicalCardWrongStatusRejection</code> <Badge class="secondary" text="object"/>',id:"physicalcardwrongstatusrejection-",level:4},{value:'<code>CannotActivatePhysicalCardRejection</code> <Badge class="secondary" text="object"/>',id:"cannotactivatephysicalcardrejection-",level:4},{value:'<code>ForbiddenRejection</code> <Badge class="secondary" text="object"/>',id:"forbiddenrejection-",level:4},{value:'<code>CardNotFoundRejection</code> <Badge class="secondary" text="object"/>',id:"cardnotfoundrejection-",level:4},{value:'<code>UserNotCardHolderRejection</code> <Badge class="secondary" text="object"/>',id:"usernotcardholderrejection-",level:4},{value:'<code>ValidationRejection</code> <Badge class="secondary" text="object"/>',id:"validationrejection-",level:4},{value:"Returned by",id:"returned-by",level:3}],p=()=>(0,o.kt)(c.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(c.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(c.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:s,Bullet:p,SpecifiedBy:u,Badge:y},f="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"union ActivatePhysicalCardPayload = ActivatePhysicalCardSuccessPayload | BadAccountStatusRejection | PhysicalCardNotFoundRejection | PhysicalCardWrongStatusRejection | CannotActivatePhysicalCardRejection | ForbiddenRejection | CardNotFoundRejection | UserNotCardHolderRejection | ValidationRejection\n")),(0,o.kt)("h3",{id:"possible-types"},"Possible types"),(0,o.kt)("h4",{id:"activatephysicalcardsuccesspayload-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/activate-physical-card-success-payload"},(0,o.kt)("inlineCode",{parentName:"a"},"ActivatePhysicalCardSuccessPayload"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"badaccountstatusrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/bad-account-status-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"BadAccountStatusRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the status account is not valid")),(0,o.kt)("h4",{id:"physicalcardnotfoundrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/physical-card-not-found-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"PhysicalCardNotFoundRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the Physical Card does not exist")),(0,o.kt)("h4",{id:"physicalcardwrongstatusrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/physical-card-wrong-status-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"PhysicalCardWrongStatusRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the Physical Card is not the expected status")),(0,o.kt)("h4",{id:"cannotactivatephysicalcardrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/cannot-activate-physical-card-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"CannotActivatePhysicalCardRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the Physical Card cannot be activated")),(0,o.kt)("h4",{id:"forbiddenrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/forbidden-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ForbiddenRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"cardnotfoundrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/card-not-found-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"CardNotFoundRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if the card was not found or if the user does not have the rights to know that the account exists")),(0,o.kt)("h4",{id:"usernotcardholderrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/user-not-card-holder-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"UserNotCardHolderRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned when the User is not the Card Holder")),(0,o.kt)("h4",{id:"validationrejection-"},(0,o.kt)("a",{parentName:"h4",href:"/api-reference/objects/validation-rejection"},(0,o.kt)("inlineCode",{parentName:"a"},"ValidationRejection"))," ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Rejection returned if an input contains invalid data")),(0,o.kt)("h3",{id:"returned-by"},"Returned by"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/activate-physical-card"},(0,o.kt)("inlineCode",{parentName:"a"},"activatePhysicalCard")),"  ",(0,o.kt)(y,{class:"secondary",text:"mutation",mdxType:"Badge"})))}k.isMDXComponent=!0}}]);