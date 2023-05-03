"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[87486],{3905:(e,t,i)=>{i.d(t,{Zo:()=>s,kt:()=>b});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function l(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?l(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):l(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)i=l[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},s=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(i),f=a,b=m["".concat(d,".").concat(f)]||m[f]||u[f]||l;return i?n.createElement(b,r(r({ref:t},s),{},{components:i})):n.createElement(b,r({ref:t},s))}));function b(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=i.length,r=new Array(l);r[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o[m]="string"==typeof e?e:a,r[1]=o;for(var c=2;c<l;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},51517:(e,t,i)=>{i.r(t),i.d(t,{Badge:()=>f,Bullet:()=>m,SpecifiedBy:()=>u,assets:()=>c,contentTitle:()=>o,default:()=>y,frontMatter:()=>r,metadata:()=>d,toc:()=>s});var n=i(83117),a=i(67294),l=i(3905);const r={id:"individual-ultimate-beneficial-owner",title:"IndividualUltimateBeneficialOwner",hide_table_of_contents:!1},o=void 0,d={unversionedId:"api-reference/objects/individual-ultimate-beneficial-owner",id:"api-reference/objects/individual-ultimate-beneficial-owner",title:"IndividualUltimateBeneficialOwner",description:"Individual Ultimate Beneficial Owner",source:"@site/docs/api-reference/objects/individual-ultimate-beneficial-owner.mdx",sourceDirName:"api-reference/objects",slug:"/api-reference/objects/individual-ultimate-beneficial-owner",permalink:"/docs/api-reference/objects/individual-ultimate-beneficial-owner",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/objects/individual-ultimate-beneficial-owner.mdx",tags:[],version:"current",frontMatter:{id:"individual-ultimate-beneficial-owner",title:"IndividualUltimateBeneficialOwner",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"IndividualUltimateBeneficialOwnerTypeOther",permalink:"/docs/api-reference/objects/individual-ultimate-beneficial-owner-type-other"},next:{title:"InitiateCreditTransfersSuccessPayload",permalink:"/docs/api-reference/objects/initiate-credit-transfers-success-payload"}},c={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualUltimateBeneficialOwner.<b>firstName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-individualultimatebeneficialownerbfirstnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualUltimateBeneficialOwner.<b>lastName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-individualultimatebeneficialownerblastnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualUltimateBeneficialOwner.<b>birthDate</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-individualultimatebeneficialownerbbirthdatebcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualUltimateBeneficialOwner.<b>birthCity</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-individualultimatebeneficialownerbbirthcitybcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualUltimateBeneficialOwner.<b>birthCityPostalCode</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-individualultimatebeneficialownerbbirthcitypostalcodebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualUltimateBeneficialOwner.<b>birthCountryCode</b></code><Bullet /><code>CCA3</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-individualultimatebeneficialownerbbirthcountrycodebcodecca3-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualUltimateBeneficialOwner.<b>info</b></code><Bullet /><code>IndividualUltimateBeneficialOwnerInfo!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="interface"/>',id:"code-style-fontweight-normal-individualultimatebeneficialownerbinfobcodeindividualultimatebeneficialownerinfo--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualUltimateBeneficialOwner.<b>taxIdentificationNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-individualultimatebeneficialownerbtaxidentificationnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>IndividualUltimateBeneficialOwner.<b>residencyAddress</b></code><Bullet /><code>AddressInformation</code> <Badge class="secondary" text="object"/>',id:"code-style-fontweight-normal-individualultimatebeneficialownerbresidencyaddressbcodeaddressinformation-",level:4},{value:"Member of",id:"member-of",level:3}],m=()=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,l.kt)(a.Fragment,null,"Specification",(0,l.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,l.kt)(a.Fragment,null,(0,l.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:m,SpecifiedBy:u,Badge:f},p="wrapper";function y(e){let{components:t,...i}=e;return(0,l.kt)(p,(0,n.Z)({},b,i,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Individual Ultimate Beneficial Owner\nYou need to describe the natural person (s) who hold, directly or indirectly, more than 25% of the capital or the rights of vote of the reporting company.\nPlease describe the company (s) that owns the company that wishes to open an account, when an individual holds in fine more than 25%"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"type IndividualUltimateBeneficialOwner {\n  firstName: String\n  lastName: String\n  birthDate: DateTime\n  birthCity: String\n  birthCityPostalCode: String\n  birthCountryCode: CCA3\n  info: IndividualUltimateBeneficialOwnerInfo!\n  taxIdentificationNumber: String\n  residencyAddress: AddressInformation\n}\n")),(0,l.kt)("h3",{id:"fields"},"Fields"),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownerbfirstnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwner.",(0,l.kt)("b",null,"firstName"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"individual first name")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownerblastnamebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwner.",(0,l.kt)("b",null,"lastName"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"individual last name")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownerbbirthdatebcodedatetime-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwner.",(0,l.kt)("b",null,"birthDate"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,l.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"individual birth date")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownerbbirthcitybcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwner.",(0,l.kt)("b",null,"birthCity"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"individual birth city")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownerbbirthcitypostalcodebcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwner.",(0,l.kt)("b",null,"birthCityPostalCode"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"individual birth city postal code")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownerbbirthcountrycodebcodecca3-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwner.",(0,l.kt)("b",null,"birthCountryCode"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/cca3"},(0,l.kt)("inlineCode",{parentName:"a"},"CCA3"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"individual birth country code")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownerbinfobcodeindividualultimatebeneficialownerinfo--"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwner.",(0,l.kt)("b",null,"info"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/interfaces/individual-ultimate-beneficial-owner-info"},(0,l.kt)("inlineCode",{parentName:"a"},"IndividualUltimateBeneficialOwnerInfo!"))," ",(0,l.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,l.kt)(f,{class:"secondary",text:"interface",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Information relating to the type of the UBO")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownerbtaxidentificationnumberbcodestring-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwner.",(0,l.kt)("b",null,"taxIdentificationNumber"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,l.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,l.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Individual beneficial owner Tax or Identification Number")),(0,l.kt)("h4",{id:"code-style-fontweight-normal-individualultimatebeneficialownerbresidencyaddressbcodeaddressinformation-"},(0,l.kt)("a",{parentName:"h4",href:"#"},(0,l.kt)("code",{style:{fontWeight:"normal"}},"IndividualUltimateBeneficialOwner.",(0,l.kt)("b",null,"residencyAddress"))),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"h4",href:"/api-reference/objects/address-information"},(0,l.kt)("inlineCode",{parentName:"a"},"AddressInformation"))," ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Individual beneficial owner residency Address")),(0,l.kt)("h3",{id:"member-of"},"Member of"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/account-holder-company-info"},(0,l.kt)("inlineCode",{parentName:"a"},"AccountHolderCompanyInfo")),"  ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"}),(0,l.kt)(m,{mdxType:"Bullet"}),(0,l.kt)("a",{parentName:"p",href:"/api-reference/objects/onboarding-company-account-holder-info"},(0,l.kt)("inlineCode",{parentName:"a"},"OnboardingCompanyAccountHolderInfo")),"  ",(0,l.kt)(f,{class:"secondary",text:"object",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);