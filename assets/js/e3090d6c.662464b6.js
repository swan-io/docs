"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[37419],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>b});var a=n(67294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},s=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,c=e.mdxType,o=e.originalType,i=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),p=l(n),m=c,b=p["".concat(i,".").concat(m)]||p[m]||u[m]||o;return n?a.createElement(b,r(r({ref:t},s),{},{components:n})):a.createElement(b,r({ref:t},s))}));function b(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=n.length,r=new Array(o);r[0]=m;var d={};for(var i in t)hasOwnProperty.call(t,i)&&(d[i]=t[i]);d.originalType=e,d[p]="string"==typeof e?e:c,r[1]=d;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61239:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>l,contentTitle:()=>d,default:()=>y,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var a=n(83117),c=n(67294),o=n(3905);const r={id:"add-account-membership-input",title:"AddAccountMembershipInput",hide_table_of_contents:!1},d=void 0,i={unversionedId:"api-reference/inputs/add-account-membership-input",id:"api-reference/inputs/add-account-membership-input",title:"AddAccountMembershipInput",description:"Inputs to add a new account membership",source:"@site/docs/api-reference/inputs/add-account-membership-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/add-account-membership-input",permalink:"/api-reference/inputs/add-account-membership-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/add-account-membership-input.mdx",tags:[],version:"current",frontMatter:{id:"add-account-membership-input",title:"AddAccountMembershipInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"ActivatePhysicalCardInput",permalink:"/api-reference/inputs/activate-physical-card-input"},next:{title:"AddAccountMembershipsInput",permalink:"/api-reference/inputs/add-account-memberships-input"}},l={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>accountId</b></code><Bullet /><code>ID!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbaccountidbcodeid--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>email</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbemailbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>restrictedTo</b></code><Bullet /><code>RestrictedToInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbrestrictedtobcoderestrictedtoinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>canViewAccount</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbcanviewaccountbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>canManageBeneficiaries</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbcanmanagebeneficiariesbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>canInitiatePayments</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbcaninitiatepaymentsbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>canManageAccountMembership</b></code><Bullet /><code>Boolean!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbcanmanageaccountmembershipbcodeboolean--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>consentRedirectUrl</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbconsentredirecturlbcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>residencyAddress</b></code><Bullet /><code>ResidencyAddressInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbresidencyaddressbcoderesidencyaddressinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>AddAccountMembershipInput.<b>taxIdentificationNumber</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-addaccountmembershipinputbtaxidentificationnumberbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(c.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(c.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(c.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:s,Bullet:p,SpecifiedBy:u,Badge:m},h="wrapper";function y(e){let{components:t,...n}=e;return(0,o.kt)(h,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Inputs to add a new account membership"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input AddAccountMembershipInput {\n  accountId: ID!\n  email: String!\n  restrictedTo: RestrictedToInput!\n  canViewAccount: Boolean!\n  canManageBeneficiaries: Boolean!\n  canInitiatePayments: Boolean!\n  canManageAccountMembership: Boolean!\n  consentRedirectUrl: String!\n  residencyAddress: ResidencyAddressInput\n  taxIdentificationNumber: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbaccountidbcodeid--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,o.kt)("b",null,"accountId"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"unique identifier of a given account")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbemailbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,o.kt)("b",null,"email"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"email")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbrestrictedtobcoderestrictedtoinput--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,o.kt)("b",null,"restrictedTo"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/restricted-to-input"},(0,o.kt)("inlineCode",{parentName:"a"},"RestrictedToInput!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"restricted to a user if necessary")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbcanviewaccountbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,o.kt)("b",null,"canViewAccount"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can view account balances and transactions history")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbcanmanagebeneficiariesbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,o.kt)("b",null,"canManageBeneficiaries"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can add or canceled beneficiaries")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbcaninitiatepaymentsbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,o.kt)("b",null,"canInitiatePayments"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can initiate payments")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbcanmanageaccountmembershipbcodeboolean--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,o.kt)("b",null,"canManageAccountMembership"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"true")," if this account membership can invite, update, suspend or resume account membership")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbconsentredirecturlbcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,o.kt)("b",null,"consentRedirectUrl"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"URL the user is redirected to after consent has been given")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbresidencyaddressbcoderesidencyaddressinput-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,o.kt)("b",null,"residencyAddress"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/inputs/residency-address-input"},(0,o.kt)("inlineCode",{parentName:"a"},"ResidencyAddressInput"))," ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Residency address of the member to be added")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-addaccountmembershipinputbtaxidentificationnumberbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"AddAccountMembershipInput.",(0,o.kt)("b",null,"taxIdentificationNumber"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tax Identification Number of the user added")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api-reference/mutations/add-account-membership"},(0,o.kt)("inlineCode",{parentName:"a"},"addAccountMembership")),"  ",(0,o.kt)(m,{class:"secondary",text:"mutation",mdxType:"Badge"})))}y.isMDXComponent=!0}}]);