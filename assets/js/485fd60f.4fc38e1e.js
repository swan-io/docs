"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[94445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(n),f=a,m=u["".concat(c,".").concat(f)]||u[f]||p[f]||i;return n?r.createElement(m,o(o({ref:t},s),{},{components:n})):r.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},71324:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>f,Bullet:()=>u,SpecifiedBy:()=>p,assets:()=>d,contentTitle:()=>l,default:()=>b,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(83117),a=n(67294),i=n(3905);const o={id:"credit-transfer-input",title:"CreditTransferInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api-reference/inputs/credit-transfer-input",id:"api-reference/inputs/credit-transfer-input",title:"CreditTransferInput",description:"Credit transfer",source:"@site/docs/api-reference/inputs/credit-transfer-input.mdx",sourceDirName:"api-reference/inputs",slug:"/api-reference/inputs/credit-transfer-input",permalink:"/api-reference/inputs/credit-transfer-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api-reference/inputs/credit-transfer-input.mdx",tags:[],version:"current",frontMatter:{id:"credit-transfer-input",title:"CreditTransferInput",hide_table_of_contents:!1},sidebar:"schemaSidebar",previous:{title:"CreateMultiConsentInput",permalink:"/api-reference/inputs/create-multi-consent-input"},next:{title:"DeleteSupportingDocumentInput",permalink:"/api-reference/inputs/delete-supporting-document-input"}},d={},s=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>CreditTransferInput.<b>beneficiaryId</b></code><Bullet /><code>ID</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-credittransferinputbbeneficiaryidbcodeid-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreditTransferInput.<b>swanAccountBeneficiary</b></code><Bullet /><code>SwanAccountBeneficiaryInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-credittransferinputbswanaccountbeneficiarybcodeswanaccountbeneficiaryinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreditTransferInput.<b>sepaBeneficiary</b></code><Bullet /><code>SepaBeneficiaryInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-credittransferinputbsepabeneficiarybcodesepabeneficiaryinput-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreditTransferInput.<b>amount</b></code><Bullet /><code>AmountInput!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-credittransferinputbamountbcodeamountinput--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreditTransferInput.<b>reference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-credittransferinputbreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreditTransferInput.<b>label</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-credittransferinputblabelbcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreditTransferInput.<b>requestedExecutionAt</b></code><Bullet /><code>DateTime</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-credittransferinputbrequestedexecutionatbcodedatetime-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreditTransferInput.<b>externalReference</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-credittransferinputbexternalreferencebcodestring-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreditTransferInput.<b>isInstant</b></code><Bullet /><code>Boolean</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-credittransferinputbisinstantbcodeboolean-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreditTransferInput.<b>mode</b></code><Bullet /><code>CreditTransferMode</code> <Badge class="secondary" text="enum"/>',id:"code-style-fontweight-normal-credittransferinputbmodebcodecredittransfermode-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>CreditTransferInput.<b>internationalBeneficiary</b></code><Bullet /><code>InternationalBeneficiaryInput</code> <Badge class="secondary" text="input"/>',id:"code-style-fontweight-normal-credittransferinputbinternationalbeneficiarybcodeinternationalbeneficiaryinput-",level:4},{value:"Member of",id:"member-of",level:3}],u=()=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),p=e=>(0,i.kt)(a.Fragment,null,"Specification",(0,i.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),f=e=>(0,i.kt)(a.Fragment,null,(0,i.kt)("span",{className:"badge badge--"+e.class},e.text)),m={toc:s,Bullet:u,SpecifiedBy:p,Badge:f},y="wrapper";function b(e){let{components:t,...n}=e;return(0,i.kt)(y,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Credit transfer"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"input CreditTransferInput {\n  beneficiaryId: ID\n  swanAccountBeneficiary: SwanAccountBeneficiaryInput\n  sepaBeneficiary: SepaBeneficiaryInput\n  amount: AmountInput!\n  reference: String\n  label: String\n  requestedExecutionAt: DateTime\n  externalReference: String\n  isInstant: Boolean\n  mode: CreditTransferMode\n  internationalBeneficiary: InternationalBeneficiaryInput\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"code-style-fontweight-normal-credittransferinputbbeneficiaryidbcodeid-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreditTransferInput.",(0,i.kt)("b",null,"beneficiaryId"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"if the transfer will credit a beneficiary already created")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-credittransferinputbswanaccountbeneficiarybcodeswanaccountbeneficiaryinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreditTransferInput.",(0,i.kt)("b",null,"swanAccountBeneficiary"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/swan-account-beneficiary-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SwanAccountBeneficiaryInput"))," ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"if the transfer will credit a new swan account beneficiary")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-credittransferinputbsepabeneficiarybcodesepabeneficiaryinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreditTransferInput.",(0,i.kt)("b",null,"sepaBeneficiary"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/sepa-beneficiary-input"},(0,i.kt)("inlineCode",{parentName:"a"},"SepaBeneficiaryInput"))," ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"if the transfer will credit a new SEPA beneficiary")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-credittransferinputbamountbcodeamountinput--"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreditTransferInput.",(0,i.kt)("b",null,"amount"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/amount-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AmountInput!"))," ",(0,i.kt)(f,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"amount of the transfer")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-credittransferinputbreferencebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreditTransferInput.",(0,i.kt)("b",null,"reference"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"reference assigned by the initiating party, to unambiguously identify the transaction. This reference is passed on, unchanged, throughout the entire end-to-end chain. (regex ","[A-Za-z0-9(","\\","-)(","\\","_)(","\\","?)(","\\",".)(","\\","+),' ]","{","1,35","}",")")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-credittransferinputblabelbcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreditTransferInput.",(0,i.kt)("b",null,"label"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"label (max 140 characters)")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-credittransferinputbrequestedexecutionatbcodedatetime-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreditTransferInput.",(0,i.kt)("b",null,"requestedExecutionAt"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"requested date at which the credit transfer will try to be executed, if ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," the credit transfer is executed right away")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-credittransferinputbexternalreferencebcodestring-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreditTransferInput.",(0,i.kt)("b",null,"externalReference"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"an arbitrary identifier that you can define to easily identify this transaction later")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-credittransferinputbisinstantbcodeboolean-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreditTransferInput.",(0,i.kt)("b",null,"isInstant"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean"))," ",(0,i.kt)(f,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"DEPRECATED"),"\nif the transfer will execute as instant")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-credittransferinputbmodebcodecredittransfermode-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreditTransferInput.",(0,i.kt)("b",null,"mode"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/enums/credit-transfer-mode"},(0,i.kt)("inlineCode",{parentName:"a"},"CreditTransferMode"))," ",(0,i.kt)(f,{class:"secondary",text:"enum",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"if the transfer will execute as instant and fallbacked to a regular one if an error happend during the instant transfer")),(0,i.kt)("h4",{id:"code-style-fontweight-normal-credittransferinputbinternationalbeneficiarybcodeinternationalbeneficiaryinput-"},(0,i.kt)("a",{parentName:"h4",href:"#"},(0,i.kt)("code",{style:{fontWeight:"normal"}},"CreditTransferInput.",(0,i.kt)("b",null,"internationalBeneficiary"))),(0,i.kt)(u,{mdxType:"Bullet"}),(0,i.kt)("a",{parentName:"h4",href:"/api-reference/inputs/international-beneficiary-input"},(0,i.kt)("inlineCode",{parentName:"a"},"InternationalBeneficiaryInput"))," ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"COMING SOON"),"\nif the transfer will credit a new international beneficiary")),(0,i.kt)("h3",{id:"member-of"},"Member of"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api-reference/inputs/initiate-credit-transfers-input"},(0,i.kt)("inlineCode",{parentName:"a"},"InitiateCreditTransfersInput")),"  ",(0,i.kt)(f,{class:"secondary",text:"input",mdxType:"Badge"})))}b.isMDXComponent=!0}}]);