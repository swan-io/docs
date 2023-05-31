"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[45019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(n),f=o,y=m["".concat(i,".").concat(f)]||m[f]||p[f]||r;return n?a.createElement(y,l(l({ref:t},d),{},{components:n})):a.createElement(y,l({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[m]="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},56238:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>m,SpecifiedBy:()=>p,assets:()=>s,contentTitle:()=>c,default:()=>b,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(83117),o=n(67294),r=n(3905);const l={id:"company-info",title:"CompanyInfo",hide_table_of_contents:!1},c=void 0,i={unversionedId:"api-reference/objects/company-info",id:"api-reference/objects/company-info",title:"CompanyInfo",description:"Data provided following the search for company information by siren number",source:"@site/docs/api-reference/objects/company-info.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/company-info",permalink:"/api-reference/objects/company-info",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/company-info.mdx",tags:[],version:"current",frontMatter:{id:"company-info",title:"CompanyInfo",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CloseAccountSuccessPayload",permalink:"/api-reference/objects/close-account-success-payload"},next:{title:"CompanyShareholder",permalink:"/api-reference/objects/company-shareholder"}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CompanyInfo.<b>siren</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-companyinfobsirenbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompanyInfo.<b>companyName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-companyinfobcompanynamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompanyInfo.<b>headquarters</b></code><Bullet /><code>Headquarters!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-companyinfobheadquartersbcodeheadquarters--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompanyInfo.<b>vatNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-companyinfobvatnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompanyInfo.<b>taxIdentificationNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-companyinfobtaxidentificationnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CompanyInfo.<b>legalRepresentativePersonalAddress</b></code><Bullet /><code>AddressInformation</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-companyinfoblegalrepresentativepersonaladdressbcodeaddressinformation-",level:4}],m=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:d,Bullet:m,SpecifiedBy:p,Badge:f},u="wrapper";function b(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Data provided following the search for company information by siren number"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type CompanyInfo {\n  siren: String!\n  companyName: String!\n  headquarters: Headquarters!\n  vatNumber: String\n  taxIdentificationNumber: String\n  legalRepresentativePersonalAddress: AddressInformation\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-companyinfobsirenbcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompanyInfo.",(0,r.kt)("b",null,"siren"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-companyinfobcompanynamebcodestring--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompanyInfo.",(0,r.kt)("b",null,"companyName"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-companyinfobheadquartersbcodeheadquarters--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompanyInfo.",(0,r.kt)("b",null,"headquarters"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/headquarters"},(0,r.kt)("inlineCode",{parentName:"a"},"Headquarters!"))," ",(0,r.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-companyinfobvatnumberbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompanyInfo.",(0,r.kt)("b",null,"vatNumber"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-companyinfobtaxidentificationnumberbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompanyInfo.",(0,r.kt)("b",null,"taxIdentificationNumber"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null),(0,r.kt)("h4",{id:"code-style-fontweight-normal-companyinfoblegalrepresentativepersonaladdressbcodeaddressinformation-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"CompanyInfo.",(0,r.kt)("b",null,"legalRepresentativePersonalAddress"))),(0,r.kt)(m,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/objects/address-information"},(0,r.kt)("inlineCode",{parentName:"a"},"AddressInformation"))," ",(0,r.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,r.kt)("blockquote",null))}b.isMDXComponent=!0}}]);