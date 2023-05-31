"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[14842],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return n?i.createElement(f,o(o({ref:t},c),{},{components:n})):i.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[m]="string"==typeof e?e:r,o[1]=u;for(var p=2;p<a;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},20239:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>d,Bullet:()=>m,SpecifiedBy:()=>s,assets:()=>p,contentTitle:()=>u,default:()=>y,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(83117),r=n(67294),a=n(3905);const o={id:"funding-limit-amount-input",title:"FundingLimitAmountInput",hide_table_of_contents:!1},u=void 0,l={unversionedId:"api-reference/inputs/funding-limit-amount-input",id:"api-reference/inputs/funding-limit-amount-input",title:"FundingLimitAmountInput",description:"Funding Limit Amount Input",source:"@site/docs/api-reference/inputs/funding-limit-amount-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/funding-limit-amount-input",permalink:"/api-reference/inputs/funding-limit-amount-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/funding-limit-amount-input.mdx",tags:[],version:"current",frontMatter:{id:"funding-limit-amount-input",title:"FundingLimitAmountInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"FinalizeOnboardingInput",permalink:"/api-reference/inputs/finalize-onboarding-input"},next:{title:"FundingLimitSettingsChangeRequestFiltersInput",permalink:"/api-reference/inputs/funding-limit-settings-change-request-filters-input"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>FundingLimitAmountInput.<b>amount</b></code><Bullet /><code>AmountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-fundinglimitamountinputbamountbcodeamountinput--",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),s=e=>(0,a.kt)(r.Fragment,null,"Specification",(0,a.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),d=e=>(0,a.kt)(r.Fragment,null,(0,a.kt)("span",{className:"badge badge--"+e.class},e.text)),f={toc:c,Bullet:m,SpecifiedBy:s,Badge:d},g="wrapper";function y(e){let{components:t,...n}=e;return(0,a.kt)(g,(0,i.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Funding Limit Amount Input"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"input FundingLimitAmountInput {\n  amount: AmountInput!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"code-style-fontweight-normal-fundinglimitamountinputbamountbcodeamountinput--"},(0,a.kt)("a",{parentName:"h4",href:"#"},(0,a.kt)("code",{style:{fontWeight:"normal"}},"FundingLimitAmountInput.",(0,a.kt)("b",null,"amount"))),(0,a.kt)(m,{mdxType:"Bullet"}),(0,a.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,a.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,a.kt)(d,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The amount settings")),(0,a.kt)("h3",{id:"member-of"},"Member of"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api-reference/inputs/add-funding-limit-settings-change-request-input"},(0,a.kt)("inlineCode",{parentName:"a"},"AddFundingLimitSettingsChangeRequestInput")),"  ",(0,a.kt)(d,{class:"secondary",text:"input",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);