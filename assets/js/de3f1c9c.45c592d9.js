"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[96965],{3905:(e,t,a)=>{a.d(t,{Zo:()=>l,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function d(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?d(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):d(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},d=Object.keys(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)a=d[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,d=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||d;return a?r.createElement(f,o(o({ref:t},l),{},{components:a})):r.createElement(f,o({ref:t},l))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var d=a.length,o=new Array(d);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:n,o[1]=i;for(var s=2;s<d;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},55974:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>i,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=a(83117),n=a(67294),d=a(3905);const o={id:"add-cards",title:"addCards",hide_table_of_contents:!1},i=void 0,c={unversionedId:"api-reference/mutations/add-cards",id:"api-reference/mutations/add-cards",title:"addCards",description:"Add several cards",source:"@site/docs/api-reference/mutations/add-cards.mdx",sourceDirName:"api-reference/mutations",slug:"/api-reference/mutations/add-cards",permalink:"/api-reference/mutations/add-cards",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/mutations/add-cards.mdx",tags:[],version:"current",frontMatter:{id:"add-cards",title:"addCards",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"addCardsWithGroupDelivery",permalink:"/api-reference/mutations/add-cards-with-group-delivery"},next:{title:"addDigitalCard",permalink:"/api-reference/mutations/add-digital-card"}},s={},l=[{value:"Arguments",id:"arguments",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>addCards.<b>input</b></code><Bullet /><code>AddCardsInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addcardsbinputbcodeaddcardsinput--",level:4},{value:"Type",id:"type",level:3},{value:'<code>AddCardsPayload</code> <Badge class="secondary" text="union"/>',id:"addcardspayload-",level:4}],p=()=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,d.kt)(n.Fragment,null,"Specification",(0,d.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,d.kt)(n.Fragment,null,(0,d.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:l,Bullet:p,SpecifiedBy:u,Badge:m},y="wrapper";function g(e){let{components:t,...a}=e;return(0,d.kt)(y,(0,r.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"Add several cards"),(0,d.kt)("p",null,"This mutation is restricted to an User access token (",(0,d.kt)("a",{parentName:"p",href:"https://docs.swan.io/api/authentication"},"Learn More"),") and ask the user to consent to this request."),(0,d.kt)("p",null,"The user must have an account membership for this account with the attribute ",(0,d.kt)("inlineCode",{parentName:"p"},"canManageAccountMembership=true"),"."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-graphql"},"addCards(\n  input: AddCardsInput!\n): AddCardsPayload!\n")),(0,d.kt)("h3",{id:"arguments"},"Arguments"),(0,d.kt)("h4",{id:"code-style-fontweight-normal-addcardsbinputbcodeaddcardsinput--"},(0,d.kt)("a",{parentName:"h4",href:"#"},(0,d.kt)("code",{style:{fontWeight:"normal"}},"addCards.",(0,d.kt)("b",null,"input"))),(0,d.kt)(p,{mdxType:"Bullet"}),(0,d.kt)("a",{parentName:"h4",href:"/api-reference/inputs/add-cards-input"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardsInput!"))," ",(0,d.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,d.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,d.kt)("blockquote",null),(0,d.kt)("h3",{id:"type"},"Type"),(0,d.kt)("h4",{id:"addcardspayload-"},(0,d.kt)("a",{parentName:"h4",href:"/api-reference/unions/add-cards-payload"},(0,d.kt)("inlineCode",{parentName:"a"},"AddCardsPayload"))," ",(0,d.kt)(m,{class:"secondary",text:"union",mdxType:"Badge"})),(0,d.kt)("blockquote",null))}g.isMDXComponent=!0}}]);