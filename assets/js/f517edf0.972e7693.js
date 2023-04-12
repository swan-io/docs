"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[29500],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>y});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=o.createContext({}),i=function(e){var t=o.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=i(e.components);return o.createElement(d.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=i(n),m=a,y=u["".concat(d,".").concat(m)]||u[m]||p[m]||r;return n?o.createElement(y,l(l({ref:t},s),{},{components:n})):o.createElement(y,l({ref:t},s))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=m;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<r;i++)l[i]=n[i];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53227:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var o=n(83117),a=n(67294),r=n(3905);const l={id:"onboard-company-account-holder-input",title:"OnboardCompanyAccountHolderInput",hide_table_of_contents:!1},c=void 0,d={unversionedId:"api/inputs/onboard-company-account-holder-input",id:"api/inputs/onboard-company-account-holder-input",title:"OnboardCompanyAccountHolderInput",description:"Inputs to onboard a new company account holder",source:"@site/docs/api/inputs/onboard-company-account-holder-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/onboard-company-account-holder-input",permalink:"/docs/api/inputs/onboard-company-account-holder-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/onboard-company-account-holder-input.mdx",tags:[],version:"current",frontMatter:{id:"onboard-company-account-holder-input",title:"OnboardCompanyAccountHolderInput",hide_table_of_contents:!1}},i={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>accountName</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbaccountnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>name</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbnamebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>registrationNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbregistrationnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>companyType</b></code><Bullet /><code>CompanyType</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbcompanytypebcodecompanytype-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>businessActivity</b></code><Bullet /><code>BusinessActivity</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbbusinessactivitybcodebusinessactivity-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>businessActivityDescription</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbbusinessactivitydescriptionbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>accountCountry</b></code><Bullet /><code>AccountCountry</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbaccountcountrybcodeaccountcountry-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>monthlyPaymentVolume</b></code><Bullet /><code>MonthlyPaymentVolume</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbmonthlypaymentvolumebcodemonthlypaymentvolume-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>individualUltimateBeneficialOwners</b></code><Bullet /><code>[IndividualUltimateBeneficialOwnerInput!]</code> <Badge class="secondary" text="list"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbindividualultimatebeneficialownersbcodeindividualultimatebeneficialownerinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>residencyAddress</b></code><Bullet /><code>ResidencyAddressInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbresidencyaddressbcoderesidencyaddressinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>email</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbemailbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>language</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputblanguagebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>redirectUrl</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbredirecturlbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>isRegistered</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbisregisteredbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>oAuthRedirectParameters</b></code><Bullet /><code>OAuthRedirectParametersInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputboauthredirectparametersbcodeoauthredirectparametersinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>vatNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbvatnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>taxIdentificationNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbtaxidentificationnumberbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>legalRepresentativePersonalAddress</b></code><Bullet /><code>AddressInformationInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputblegalrepresentativepersonaladdressbcodeaddressinformationinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>OnboardCompanyAccountHolderInput.<b>typeOfRepresentation</b></code><Bullet /><code>TypeOfRepresentation</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbtypeofrepresentationbcodetypeofrepresentation-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,r.kt)(a.Fragment,null,"Specification",(0,r.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,r.kt)(a.Fragment,null,(0,r.kt)("span",{className:"badge badge--"+e.class},e.text)),y={toc:s,Bullet:u,SpecifiedBy:p,Badge:m},b="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(b,(0,o.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Inputs to onboard a new company account holder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"input OnboardCompanyAccountHolderInput {\n  accountName: String\n  name: String\n  registrationNumber: String\n  companyType: CompanyType\n  businessActivity: BusinessActivity\n  businessActivityDescription: String\n  accountCountry: AccountCountry\n  monthlyPaymentVolume: MonthlyPaymentVolume\n  individualUltimateBeneficialOwners: [IndividualUltimateBeneficialOwnerInput!]\n  residencyAddress: ResidencyAddressInput\n  email: String\n  language: String\n  redirectUrl: String\n  isRegistered: Boolean\n  oAuthRedirectParameters: OAuthRedirectParametersInput\n  vatNumber: String\n  taxIdentificationNumber: String\n  legalRepresentativePersonalAddress: AddressInformationInput\n  typeOfRepresentation: TypeOfRepresentation\n}\n")),(0,r.kt)("h3",{id:"fields"},"Fields"),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbaccountnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"accountName"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Account name of the company account holder.\nLength must be from 0 to 100 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbnamebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"name"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Name of the company. Length must be from 0 to 255 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbregistrationnumberbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"registrationNumber"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Registration number of the company (SIRET, ...). Length must be from 0 to 50 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbcompanytypebcodecompanytype-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"companyType"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/company-type"},(0,r.kt)("inlineCode",{parentName:"a"},"CompanyType"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Type of the company (Association ...)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbbusinessactivitybcodebusinessactivity-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"businessActivity"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/business-activity"},(0,r.kt)("inlineCode",{parentName:"a"},"BusinessActivity"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Business activity")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbbusinessactivitydescriptionbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"businessActivityDescription"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Business activity description. Length must be from 0 to 1024 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbaccountcountrybcodeaccountcountry-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"accountCountry"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/account-country"},(0,r.kt)("inlineCode",{parentName:"a"},"AccountCountry"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Country of the account that will be created at the end of the onboarding process")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbmonthlypaymentvolumebcodemonthlypaymentvolume-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"monthlyPaymentVolume"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/monthly-payment-volume"},(0,r.kt)("inlineCode",{parentName:"a"},"MonthlyPaymentVolume"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Estimated monthly payment volume (euro)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbindividualultimatebeneficialownersbcodeindividualultimatebeneficialownerinput--"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"individualUltimateBeneficialOwners"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/individual-ultimate-beneficial-owner-input"},(0,r.kt)("inlineCode",{parentName:"a"},"[IndividualUltimateBeneficialOwnerInput!]"))," ",(0,r.kt)(m,{class:"secondary",text:"list",mdxType:"Badge"})," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ultimate beneficial owner is defined as the natural person (s) who own or control, directly and/or indirectly, the reporting company.")),(0,r.kt)("p",null,"The ultimate beneficial owner is :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"either the natural person (s) who hold, directly or indirectly, more than 25% of the capital or the rights of vote of the reporting company;"),(0,r.kt)("li",{parentName:"ul"},"either the natural person (s) who exercise, by other means, a power of control of the company;",(0,r.kt)("blockquote",{parentName:"li"}))),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbresidencyaddressbcoderesidencyaddressinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"residencyAddress"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/residency-address-input"},(0,r.kt)("inlineCode",{parentName:"a"},"ResidencyAddressInput"))," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Residency address of the head office (Must be in a European country)")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbemailbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"email"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Email of the legal representative. Length must be from 0 to 255 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputblanguagebcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"language"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Language of the onboarding process. Must be compliant with RFC 5646")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbredirecturlbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"redirectUrl"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"URL used to redirect the user at the end of the onboarding process. If ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," the user is redirected to the white label web banking.\nLength must be from 0 to 255 characters")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbisregisteredbcodeboolean-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"isRegistered"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/boolean"},(0,r.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Is company registered at RCS in its country")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputboauthredirectparametersbcodeoauthredirectparametersinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"oAuthRedirectParameters"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/oauth-redirect-parameters-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OAuthRedirectParametersInput"))," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Extra parameters provided by partner")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbvatnumberbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"vatNumber"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"VAT number")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbtaxidentificationnumberbcodestring-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"taxIdentificationNumber"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,r.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,r.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tax Identification Number")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputblegalrepresentativepersonaladdressbcodeaddressinformationinput-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"legalRepresentativePersonalAddress"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/inputs/address-information-input"},(0,r.kt)("inlineCode",{parentName:"a"},"AddressInformationInput"))," ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Legal representative personal address")),(0,r.kt)("h4",{id:"code-style-fontweight-normal-onboardcompanyaccountholderinputbtypeofrepresentationbcodetypeofrepresentation-"},(0,r.kt)("a",{parentName:"h4",href:"#"},(0,r.kt)("code",{style:{fontWeight:"normal"}},"OnboardCompanyAccountHolderInput.",(0,r.kt)("b",null,"typeOfRepresentation"))),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"h4",href:"/api/enums/type-of-representation"},(0,r.kt)("inlineCode",{parentName:"a"},"TypeOfRepresentation"))," ",(0,r.kt)(m,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Type of representation (legal representative or power of attorney)")),(0,r.kt)("h3",{id:"member-of"},"Member of"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/api/inputs/create-capital-deposit-case-input"},(0,r.kt)("inlineCode",{parentName:"a"},"CreateCapitalDepositCaseInput")),"  ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/mutations/onboard-company-account-holder"},(0,r.kt)("inlineCode",{parentName:"a"},"onboardCompanyAccountHolder")),"  ",(0,r.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"}),(0,r.kt)(u,{mdxType:"Bullet"}),(0,r.kt)("a",{parentName:"p",href:"/api/inputs/onboard-company-shareholder-input"},(0,r.kt)("inlineCode",{parentName:"a"},"OnboardCompanyShareholderInput")),"  ",(0,r.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);