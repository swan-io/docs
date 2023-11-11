"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[95043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>b});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),o=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=o(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=o(n),m=r,b=p["".concat(s,".").concat(m)]||p[m]||u[m]||c;return n?a.createElement(b,d(d({ref:t},l),{},{components:n})):a.createElement(b,d({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,d=new Array(c);d[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,d[1]=i;for(var o=2;o<c;o++)d[o]=n[o];return a.createElement.apply(null,d)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},23284:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>o,contentTitle:()=>i,default:()=>y,frontMatter:()=>d,metadata:()=>s,toc:()=>l});var a=n(83117),r=n(67294),c=n(3905);const d={id:"suspend-received-direct-debit-mandate-success-payload",title:"SuspendReceivedDirectDebitMandateSuccessPayload",hide_table_of_contents:!1},i=void 0,s={unversionedId:"api-reference/objects/suspend-received-direct-debit-mandate-success-payload",id:"api-reference/objects/suspend-received-direct-debit-mandate-success-payload",title:"SuspendReceivedDirectDebitMandateSuccessPayload",description:"Return type in case of a successful response of the suspendReceivedDirectDebitMandate mutation",source:"@site/docs/api-reference/objects/suspend-received-direct-debit-mandate-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/suspend-received-direct-debit-mandate-success-payload",permalink:"/api-reference/objects/suspend-received-direct-debit-mandate-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/suspend-received-direct-debit-mandate-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"suspend-received-direct-debit-mandate-success-payload",title:"SuspendReceivedDirectDebitMandateSuccessPayload",hide_table_of_contents:!1}},o={},l=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>SuspendReceivedDirectDebitMandateSuccessPayload.<b>receivedDirectDebitMandate</b></code><Bullet /><code>ReceivedDirectDebitMandate!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatesuccesspayloadbreceiveddirectdebitmandatebcodereceiveddirectdebitmandate--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],p=()=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,c.kt)(r.Fragment,null,"Specification",(0,c.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,c.kt)(r.Fragment,null,(0,c.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:l,Bullet:p,SpecifiedBy:u,Badge:m},f="wrapper";function y(e){let{components:t,...n}=e;return(0,c.kt)(f,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"Return type in case of a successful response of the suspendReceivedDirectDebitMandate mutation"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type SuspendReceivedDirectDebitMandateSuccessPayload {\n  receivedDirectDebitMandate: ReceivedDirectDebitMandate!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"code-style-fontweight-normal-suspendreceiveddirectdebitmandatesuccesspayloadbreceiveddirectdebitmandatebcodereceiveddirectdebitmandate--"},(0,c.kt)("a",{parentName:"h4",href:"#"},(0,c.kt)("code",{style:{fontWeight:"normal"}},"SuspendReceivedDirectDebitMandateSuccessPayload.",(0,c.kt)("b",null,"receivedDirectDebitMandate"))),(0,c.kt)(p,{mdxType:"Bullet"}),(0,c.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/received-direct-debit-mandate"},(0,c.kt)("inlineCode",{parentName:"a"},"ReceivedDirectDebitMandate!"))," ",(0,c.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,c.kt)(m,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,c.kt)("blockquote",null,(0,c.kt)("p",{parentName:"blockquote"},"the received direct debit mandate is suspended")),(0,c.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,c.kt)("p",null,(0,c.kt)("a",{parentName:"p",href:"/api-reference/unions/suspend-received-direct-debit-mandate-payload"},(0,c.kt)("inlineCode",{parentName:"a"},"SuspendReceivedDirectDebitMandatePayload")),"  ",(0,c.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);