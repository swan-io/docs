"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[21322],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,y=s["".concat(l,".").concat(m)]||s[m]||u[m]||r;return n?a.createElement(y,i(i({ref:t},c),{},{components:n})):a.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[s]="string"==typeof e?e:o,i[1]=d;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},11695:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>s,SpecifiedBy:()=>u,assets:()=>p,contentTitle:()=>d,default:()=>g,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(83117),o=n(67294),r=n(3905);const i={id:"update-company-onboarding-input",title:"UpdateCompanyOnboardingInput",hide_table_of_contents:!1},d=void 0,l={unversionedId:"api-reference/inputs/update-company-onboarding-input",id:"api-reference/inputs/update-company-onboarding-input",title:"UpdateCompanyOnboardingInput",description:"No description",source:"@site/docs/api-reference/inputs/update-company-onboarding-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/update-company-onboarding-input",permalink:"/docs/api-reference/inputs/update-company-onboarding-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/update-company-onboarding-input.mdx",tags:[],version:"current",frontMatter:{id:"update-company-onboarding-input",title:"UpdateCompanyOnboardingInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"UpdateCardInput",permalink:"/docs/api-reference/inputs/update-card-input"},next:{title:"UpdateIndividualOnboardingInput",permalink:"/docs/api-reference/inputs/update-individual-onboarding-input"}},p={},c=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>accountName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbaccountnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>accountCountry</b></code><Bullet /><code>AccountCountry</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbaccountcountrybcodeaccountcountry-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>registrationNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbregistrationnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>companyType</b></code><Bullet /><code>CompanyType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbcompanytypebcodecompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>businessActivity</b></code><Bullet /><code>BusinessActivity</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbbusinessactivitybcodebusinessactivity-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>businessActivityDescription</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbbusinessactivitydescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>monthlyPaymentVolume</b></code><Bullet /><code>MonthlyPaymentVolume</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbmonthlypaymentvolumebcodemonthlypaymentvolume-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>individualUltimateBeneficialOwners</b></code><Bullet /><code>[IndividualUltimateBeneficialOwnerInput!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbindividualultimatebeneficialownersbcodeindividualultimatebeneficialownerinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>residencyAddress</b></code><Bullet /><code>ResidencyAddressInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbresidencyaddressbcoderesidencyaddressinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>email</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbemailbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>language</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputblanguagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>isRegistered</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbisregisteredbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>onboardingId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbonboardingidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>vatNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbvatnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>taxIdentificationNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbtaxidentificationnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>legalRepresentativePersonalAddress</b></code><Bullet /><code>AddressInformationInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputblegalrepresentativepersonaladdressbcodeaddressinformationinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>UpdateCompanyOnboardingInput.<b>typeOfRepresentation</b></code><Bullet /><code>TypeOfRepresentation</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-updatecompanyonboardinginputbtypeofrepresentationbcodetypeofrepresentation-",level:4},{value:"Member of",id:"member-of",level:3}],s=()=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,r.kt)(o.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(o.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:c,Bullet:s,SpecifiedBy:u,Badge:m},b="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"No description"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input UpdateCompanyOnboardingInput {\n  accountName: String\n  accountCountry: AccountCountry\n  name: String\n  registrationNumber: String\n  companyType: CompanyType\n  businessActivity: BusinessActivity\n  businessActivityDescription: String\n  monthlyPaymentVolume: MonthlyPaymentVolume\n  individualUltimateBeneficialOwners: [IndividualUltimateBeneficialOwnerInput!]\n  residencyAddress: ResidencyAddressInput\n  email: String\n  language: String\n  isRegistered: Boolean\n  onboardingId: ID!\n  vatNumber: String\n  taxIdentificationNumber: String\n  legalRepresentativePersonalAddress: AddressInformationInput\n  typeOfRepresentation: TypeOfRepresentation\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbaccountnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"accountName"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account name of the company account holder. Length must be from 0 to 100 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbaccountcountrybcodeaccountcountry-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"accountCountry"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/account-country"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountCountry"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Country of the account that will be created at the end of the onboarding process")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"name"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Name of the company. Length must be from 0 to 255 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbregistrationnumberbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"registrationNumber"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Registration number of the company (SIRET, ...). Length must be from 0 to 50 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbcompanytypebcodecompanytype-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"companyType"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/company-type"},(0,r.kt)("inlineCode",{parentName:"a"},"CompanyType"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Type of the company (Association ...)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbbusinessactivitybcodebusinessactivity-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"businessActivity"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/business-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"BusinessActivity"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Business activity")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbbusinessactivitydescriptionbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"businessActivityDescription"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Business activity description. Length must be from 0 to 1024 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbmonthlypaymentvolumebcodemonthlypaymentvolume-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"monthlyPaymentVolume"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/monthly-payment-volume"},(0,r.kt)("inlineCode",{parentName:"a"},"MonthlyPaymentVolume"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estimated monthly payment volume (euro)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbindividualultimatebeneficialownersbcodeindividualultimatebeneficialownerinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"individualUltimateBeneficialOwners"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/individual-ultimate-beneficial-owner-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[IndividualUltimateBeneficialOwnerInput!]"))," ",(0,r.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ultimate beneficial owner is defined as the natural person (s) who own or control, directly and/or indirectly, the reporting company.")),(0,r.kt)("p",null,"The ultimate beneficial owner is :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"either the natural person (s) who hold, directly or indirectly, more than 25% of the capital or the rights of vote of the reporting company;"),(0,r.kt)("li",{parentName:"ul"},"either the natural person (s) who exercise, by other means, a power of control of the company;",(0,r.kt)("blockquote",{parentName:"li"}))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbresidencyaddressbcoderesidencyaddressinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"residencyAddress"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/residency-address-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ResidencyAddressInput"))," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Residency address of the head office (Must be in a European country)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbemailbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"email"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Email of the legal representative. Length must be from 0 to 255 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputblanguagebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"language"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Language of the onboarding process. Must be compliant with RFC 5646")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbisregisteredbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"isRegistered"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Is company registered at RCS in its country")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbonboardingidbcodeid--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"onboardingId"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,r.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,r.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Id of onboarding to be updated. Must be a valid UUID v4. Required")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbvatnumberbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"vatNumber"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"VAT number")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbtaxidentificationnumberbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"taxIdentificationNumber"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tax Identification Number")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputblegalrepresentativepersonaladdressbcodeaddressinformationinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"legalRepresentativePersonalAddress"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/inputs/address-information-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AddressInformationInput"))," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Legal representative personal address")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-updatecompanyonboardinginputbtypeofrepresentationbcodetypeofrepresentation-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"UpdateCompanyOnboardingInput.",(0,r.kt)("b",null,"typeOfRepresentation"))),(0,r.kt)(s,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api-reference/enums/type-of-representation"},(0,r.kt)("inlineCode",{parentName:"a"},"TypeOfRepresentation"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Type of representation (legal representative or power of attorney)")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api-reference/mutations/update-company-onboarding"},(0,r.kt)("inlineCode",{parentName:"a"},"updateCompanyOnboarding")),"  ",(0,r.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}g.isMDXComponent=!0}}]);