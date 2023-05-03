"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[5263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(n),f=a,b=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(b,i(i({ref:t},c),{},{components:n})):r.createElement(b,i({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},26106:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(83117),a=n(67294),o=n(3905);const i={id:"onboarding-filters-input",title:"OnboardingFiltersInput",hide_table_of_contents:!1},l=void 0,s={unversionedId:"api-reference/inputs/onboarding-filters-input",id:"api-reference/inputs/onboarding-filters-input",title:"OnboardingFiltersInput",description:"Filters that can be applied when listing onboardings",source:"@site/docs/api-reference/inputs/onboarding-filters-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/onboarding-filters-input",permalink:"/docs/api-reference/inputs/onboarding-filters-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/onboarding-filters-input.mdx",tags:[],version:"current",frontMatter:{id:"onboarding-filters-input",title:"OnboardingFiltersInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"OnboardIndividualShareholderInput",permalink:"/docs/api-reference/inputs/onboard-individual-shareholder-input"},next:{title:"OnboardingOrderByInput",permalink:"/docs/api-reference/inputs/onboarding-order-by-input"}},d={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingFiltersInput.<b>types</b></code><Bullet /><code>[AccountHolderType!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingfiltersinputbtypesbcodeaccountholdertype--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingFiltersInput.<b>email</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingfiltersinputbemailbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingFiltersInput.<b>search</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardingfiltersinputbsearchbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardingFiltersInput.<b>status</b></code><Bullet /><code>[OnboardingStatus!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardingfiltersinputbstatusbcodeonboardingstatus--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:c,Bullet:p,SpecifiedBy:u,Badge:f},g="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(g,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Filters that can be applied when listing onboardings"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input OnboardingFiltersInput {\n  types: [AccountHolderType!]\n  email: String\n  search: String\n  status: [OnboardingStatus!]\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardingfiltersinputbtypesbcodeaccountholdertype--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardingFiltersInput.",(0,o.kt)("b",null,"types"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-holder-type"},(0,o.kt)("inlineCode",{parentName:"a"},"[AccountHolderType!]"))," ",(0,o.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Type/Types we want to filter on")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardingfiltersinputbemailbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardingFiltersInput.",(0,o.kt)("b",null,"email"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Email we want to filter on")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardingfiltersinputbsearchbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardingFiltersInput.",(0,o.kt)("b",null,"search"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Searches company name, first name, last name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-onboardingfiltersinputbstatusbcodeonboardingstatus--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"OnboardingFiltersInput.",(0,o.kt)("b",null,"status"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/enums/onboarding-status"},(0,o.kt)("inlineCode",{parentName:"a"},"[OnboardingStatus!]"))," ",(0,o.kt)(f,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,o.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Status we want to filter on")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/queries/onboardings"},(0,o.kt)("inlineCode",{parentName:"a"},"onboardings")),"  ",(0,o.kt)(f,{class:"secondary",text:"query",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);