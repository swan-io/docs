"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[78112],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=o(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(b,d(d({ref:t},l),{},{components:n})):a.createElement(b,d({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,d=new Array(i);d[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:r,d[1]=c;for(var o=2;o<i;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},77827:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>c,default:()=>y,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var a=n(83117),r=n(67294),i=n(3905);const d={id:"suspend-received-direct-debit-mandate",title:"suspendReceivedDirectDebitMandate",hide_table_of_contents:!1},c=void 0,s={unversionedId:"api-reference/mutations/suspend-received-direct-debit-mandate",id:"api-reference/mutations/suspend-received-direct-debit-mandate",title:"suspendReceivedDirectDebitMandate",description:"Allows to suspend a received direct debit mandate in the Enabled status.",source:"@site/docs/api-reference/mutations/suspend-received-direct-debit-mandate.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/suspend-received-direct-debit-mandate",permalink:"/api-reference/mutations/suspend-received-direct-debit-mandate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/suspend-received-direct-debit-mandate.mdx",tags:[],version:"current",frontMatter:{id:"suspend-received-direct-debit-mandate",title:"suspendReceivedDirectDebitMandate",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"suspendPhysicalCard",permalink:"/api-reference/mutations/suspend-physical-card"},next:{title:"updateAccountHolder",permalink:"/api-reference/mutations/update-account-holder"}},o={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>suspendReceivedDirectDebitMandate.<b>input</b></code><Bullet /><code>SuspendReceivedDirectDebitMandateInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatebinputbcodesuspendreceiveddirectdebitmandateinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>SuspendReceivedDirectDebitMandatePayload</code> <Badge class="secondary" text="union"/>',id:"suspendreceiveddirectdebitmandatepayload-",level:4}],p=()=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,i.kt)(r.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,i.kt)(r.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:l,Bullet:p,SpecifiedBy:u,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,i.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Allows to suspend a received direct debit mandate in the Enabled status."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The user must be able to initiate payments for this account.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"suspendReceivedDirectDebitMandate(\n  input: SuspendReceivedDirectDebitMandateInput!\n): SuspendReceivedDirectDebitMandatePayload!\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatebinputbcodesuspendreceiveddirectdebitmandateinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"suspendReceivedDirectDebitMandate.",(0,i.kt)("b",null,"input"))),(0,i.kt)(p,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/suspend-received-direct-debit-mandate-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SuspendReceivedDirectDebitMandateInput!"))," ",(0,i.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"suspendreceiveddirectdebitmandatepayload-"},(0,i.kt)("a",{parentName:"h4",href:"/api-reference/unions/suspend-received-direct-debit-mandate-payload"},(0,i.kt)("inlineCode",{parentName:"a"},"SuspendReceivedDirectDebitMandatePayload"))," ",(0,i.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Union type returned by the suspendReceivedDirectDebitMandate mutation")))}y.isMDXComponent=!0}}]);