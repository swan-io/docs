"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[53622],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=o.createContext({}),p=function(e){var n=o.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(i.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(t),m=a,h=s["".concat(i,".").concat(m)]||s[m]||u[m]||r;return t?o.createElement(h,l(l({ref:n},c),{},{components:t})):o.createElement(h,l({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=m;var d={};for(var i in n)hasOwnProperty.call(n,i)&&(d[i]=n[i]);d.originalType=e,d[s]="string"==typeof e?e:a,l[1]=d;for(var p=2;p<r;p++)l[p]=t[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73401:(e,n,t)=>{t.r(n),t.d(n,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>d,default:()=>f,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var o=t(83117),a=t(67294),r=t(3905);const l={id:"onboard-company-shareholder-input",title:"OnboardCompanyShareholderInput",hide_table_of_contents:!1},d=void 0,i={unversionedId:"api-reference/inputs/onboard-company-shareholder-input",id:"api-reference/inputs/onboard-company-shareholder-input",title:"OnboardCompanyShareholderInput",description:"Information on the shareholder.",source:"@site/docs/api-reference/inputs/onboard-company-shareholder-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/onboard-company-shareholder-input",permalink:"/docs/api-reference/inputs/onboard-company-shareholder-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/onboard-company-shareholder-input.mdx",tags:[],version:"current",frontMatter:{id:"onboard-company-shareholder-input",title:"OnboardCompanyShareholderInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OnboardCompanyAccountHolderInput",permalink:"/docs/api-reference/inputs/onboard-company-account-holder-input"},next:{title:"OnboardIndividualAccountHolderInput",permalink:"/docs/api-reference/inputs/onboard-individual-account-holder-input"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyShareholderInput.<b>capitalDepositAmount</b></code><Bullet /><code>AmountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-onboardcompanyshareholderinputbcapitaldepositamountbcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyShareholderInput.<b>name</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardcompanyshareholderinputbnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyShareholderInput.<b>onboardingInfo</b></code><Bullet /><code>OnboardCompanyAccountHolderInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-onboardcompanyshareholderinputbonboardinginfobcodeonboardcompanyaccountholderinput--",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),h={toc:c,Bullet:s,SpecifiedBy:u,Badge:m},y="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(y,(0,o.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Information on the shareholder."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input OnboardCompanyShareholderInput {\n  capitalDepositAmount: AmountInput!\n  name: String!\n  onboardingInfo: OnboardCompanyAccountHolderInput!\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyshareholderinputbcapitaldepositamountbcodeamountinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyShareholderInput.",(0,r.kt)("b",null,"capitalDepositAmount"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Amount the shareholder has to deposit.")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyshareholderinputbnamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyShareholderInput.",(0,r.kt)("b",null,"name"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'Name ("D\xe9nomination sociale") of the shareholder.')),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyshareholderinputbonboardinginfobcodeonboardcompanyaccountholderinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyShareholderInput.",(0,r.kt)("b",null,"onboardingInfo"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/onboard-company-account-holder-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardCompanyAccountHolderInput!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Information required for the onboarding of a company shareholder.")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/inputs/create-capital-deposit-case-input"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateCapitalDepositCaseInput")),"  ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}f.isMDXComponent=!0}}]);