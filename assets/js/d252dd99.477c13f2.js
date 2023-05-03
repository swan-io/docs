"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[22495],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),o=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},i=function(e){var t=o(e.components);return r.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,d=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),u=o(a),y=n,f=u["".concat(d,".").concat(y)]||u[y]||p[y]||s;return a?r.createElement(f,l(l({ref:t},i),{},{components:a})):r.createElement(f,l({ref:t},i))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,l=new Array(s);l[0]=y;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[u]="string"==typeof e?e:n,l[1]=c;for(var o=2;o<s;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},53003:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>l,metadata:()=>d,toc:()=>i});var r=a(83117),n=a(67294),s=a(3905);const l={id:"add-single-use-virtual-cards-success-payload",title:"AddSingleUseVirtualCardsSuccessPayload",hide_table_of_contents:!1},c=void 0,d={unversionedId:"api-reference/objects/add-single-use-virtual-cards-success-payload",id:"api-reference/objects/add-single-use-virtual-cards-success-payload",title:"AddSingleUseVirtualCardsSuccessPayload",description:"No description",source:"@site/docs/api-reference/objects/add-single-use-virtual-cards-success-payload.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/add-single-use-virtual-cards-success-payload",permalink:"/docs/api-reference/objects/add-single-use-virtual-cards-success-payload",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/add-single-use-virtual-cards-success-payload.mdx",tags:[],version:"current",frontMatter:{id:"add-single-use-virtual-cards-success-payload",title:"AddSingleUseVirtualCardsSuccessPayload",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"AddSingleUseVirtualCardSuccessForUserPayload",permalink:"/docs/api-reference/objects/add-single-use-virtual-card-success-for-user-payload"},next:{title:"AddVirtualIbanEntrySuccessPayload",permalink:"/docs/api-reference/objects/add-virtual-iban-entry-success-payload"}},o={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddSingleUseVirtualCardsSuccessPayload.<b>cards</b></code><Bullet /><code>[Card!]!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-addsingleusevirtualcardssuccesspayloadbcardsbcodecard--",level:4},{value:"Implemented by",id:"implemented-by",level:3}],u=()=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,s.kt)(n.Fragment,null,"Specification",(0,s.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,s.kt)(n.Fragment,null,(0,s.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:i,Bullet:u,SpecifiedBy:p,Badge:y},m="wrapper";function g(e){let{components:t,...a}=e;return(0,s.kt)(m,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddSingleUseVirtualCardsSuccessPayload {\n  cards: [Card!]!\n}\n")),(0,s.kt)("h3",{id:"fields"},"Fields"),(0,s.kt)("h4",{id:"code-style-fontweight-normal-addsingleusevirtualcardssuccesspayloadbcardsbcodecard--"},(0,s.kt)("a",{parentName:"h4",href:"#"},(0,s.kt)("code",{style:{fontWeight:"normal"}},"AddSingleUseVirtualCardsSuccessPayload.",(0,s.kt)("b",null,"cards"))),(0,s.kt)(u,{mdxType:"Bullet"}),(0,s.kt)("a",{parentName:"h4",href:"/api-reference/objects/card"},(0,s.kt)("inlineCode",{parentName:"a"},"[Card!]!"))," ",(0,s.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,s.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})),(0,s.kt)("blockquote",null,(0,s.kt)("p",{parentName:"blockquote"},"The newly created single use virtual cards")),(0,s.kt)("h3",{id:"implemented-by"},"Implemented by"),(0,s.kt)("p",null,(0,s.kt)("a",{parentName:"p",href:"/api-reference/unions/add-single-use-virtual-cards-payload"},(0,s.kt)("inlineCode",{parentName:"a"},"AddSingleUseVirtualCardsPayload")),"  ",(0,s.kt)(y,{class:"secondary",text:"union",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);