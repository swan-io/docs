"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[26840],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>m});var n=a(67294);function i(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){i(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,i=function(t,e){if(null==t)return{};var a,n,i={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(i[a]=t[a])}return i}var o=n.createContext({}),s=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},c=function(t){var e=s(t.components);return n.createElement(o.Provider,{value:e},t.children)},p="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,i=t.mdxType,r=t.originalType,o=t.parentName,c=d(t,["components","mdxType","originalType","parentName"]),p=s(a),g=i,m=p["".concat(o,".").concat(g)]||p[g]||u[g]||r;return a?n.createElement(m,l(l({ref:e},c),{},{components:a})):n.createElement(m,l({ref:e},c))}));function m(t,e){var a=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=a.length,l=new Array(r);l[0]=g;var d={};for(var o in e)hasOwnProperty.call(e,o)&&(d[o]=e[o]);d.originalType=t,d[p]="string"==typeof t?t:i,l[1]=d;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},88975:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>d,metadata:()=>s,toc:()=>p});var n=a(87462),i=(a(67294),a(3905)),r=a(23941),l=a(89303);const d={title:"Digital cards"},o="Digital cards",s={unversionedId:"topics/cards/digital/index",id:"topics/cards/digital/index",title:"Digital cards",description:"*",source:"@site/docs/topics/cards/digital/index.mdx",sourceDirName:"topics/cards/digital",slug:"/topics/cards/digital/",permalink:"/topics/cards/digital/",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/topics/cards/digital/index.mdx",tags:[],version:"current",frontMatter:{title:"Digital cards"},sidebar:"docSidebar",previous:{title:"Cancel physical cards",permalink:"/topics/cards/physical/guide-cancel"},next:{title:"Add digital cards",permalink:"/topics/cards/digital/guide-add"}},c={},p=[{value:"Certifying your digital card integration",id:"integration",level:2},{value:"Adding cards to digital wallets",id:"wallets",level:2},{value:"Renewing digital cards",id:"auto-renew",level:2},{value:"Digital card statuses",id:"statuses",level:2},{value:"Guides",id:"guides",level:2}],u={toc:p},g="wrapper";function m(t){let{components:e,...d}=t;return(0,i.kt)(g,(0,n.Z)({},u,d,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"digital-cards"},"Digital cards"),(0,i.kt)("hr",null),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Digital cards")," ",(0,i.kt)("em",{parentName:"p"},(0,i.kt)(r.ZP,{mdxType:"DigitalCardsDefinition"}))),(0,i.kt)("hr",null),(0,i.kt)("p",null,"Swan cards are compatible with Apple Pay and Google Pay."),(0,i.kt)("p",null,"If you choose to allow digital cards, your cardholders can add virtual and physical cards to their preferred digital wallet.\nA list of digital cards is available in the ",(0,i.kt)("inlineCode",{parentName:"p"},"cards")," query."),(0,i.kt)("h2",{id:"integration"},"Certifying your digital card integration"),(0,i.kt)("p",null,"You need to certify your digital card integration before your cardholders can use Apple Pay and Google Pay."),(0,i.kt)("p",null,"Send an email to ",(0,i.kt)("a",{parentName:"p",href:"mailto:integration@swan.io"},"integration@swan.io")," specifying that you'd like to activate in-app provisioning for digital payments.\nThe team will help you get started."),(0,i.kt)(l.ZP,{mdxType:"CompleteProvisioningGuide"}),(0,i.kt)("h2",{id:"wallets"},"Adding cards to digital wallets"),(0,i.kt)("p",null,"Only ",(0,i.kt)("a",{parentName:"p",href:"/topics/cards/virtual/#statuses"},"enabled virtual cards")," and ",(0,i.kt)("a",{parentName:"p",href:"/topics/cards/physical/#statuses"},"activated physical cards")," can be digitized.\nVirtual cards are enabled almost immediately, but make sure your cardholders activate their physical cards before trying to digitize them."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Logos for Apple Wallet and Google Pay",src:a(83493).Z,width:"1311",height:"168"})),(0,i.kt)("p",null,"There are multiple ways to ",(0,i.kt)("a",{parentName:"p",href:"/topics/cards/digital/guide-add"},"add cards to a digital wallet"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Your cardholders can do it themselves by entering their virtual or physical card number into the digital wallet."),(0,i.kt)("li",{parentName:"ol"},"Your cardholders can use the Swan App and follow the in-app provisioning process."),(0,i.kt)("li",{parentName:"ol"},"You can initiate the in-app provisioning process through the ",(0,i.kt)("inlineCode",{parentName:"li"},"addDigitalCard")," mutation.")),(0,i.kt)("h2",{id:"auto-renew"},"Renewing digital cards"),(0,i.kt)("p",null,"Swan takes care of updating digital cards with Apple Pay and Google Pay.\nIt's a clear advantage, as this requires no action from you nor your client."),(0,i.kt)("h2",{id:"statuses"},"Digital card statuses"),(0,i.kt)("mermaid",{value:"%%{ init: { 'flowchart': { 'curve': 'linear' } } }%%\nflowchart LR\n    DCA((Digital<br/>card added)) -.-> P[Pending]\n    DCA -.-> CP[ConsentPending]\n    P --\x3e D[Declined]\n    CP -.-> P\n    CP --\x3e CD\n    P --\x3e E[Enabled]\n    E --\x3e CD\n    E <-.-> S[Suspended]\n    S --\x3e CD[Canceled]\n    P --\x3e CD\n    subgraph U[Can use card]\n        E\n    end\n    subgraph F[Final status]\n        CD\n        D\n    end\n    style DCA fill:#D4D3D5,stroke:#514F59\n    style F fill:#fffdf4,stroke:#cca922\n    style U fill:#dfedf2,stroke:#4d8296, stroke-width:3px"}),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Digital card status"),(0,i.kt)("th",{parentName:"tr",align:null},"Explanation"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ConsentPending")),(0,i.kt)("td",{parentName:"tr",align:null},"Request to add a digital card was sent with the ",(0,i.kt)("inlineCode",{parentName:"td"},"addDigitalCard")," mutation and is waiting for the cardholder's consent",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Next steps"),":",(0,i.kt)("ul",null,(0,i.kt)("li",null,"If the cardholder consents, the status moves to ",(0,i.kt)("inlineCode",{parentName:"td"},"Pending")),(0,i.kt)("li",null,"If the cardholder doesn't consent, the status moves to ",(0,i.kt)("inlineCode",{parentName:"td"},"Canceled")),(0,i.kt)("li",null,"If you use the API to cancel the card, the status moves to ",(0,i.kt)("inlineCode",{parentName:"td"},"Canceled"))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Pending")),(0,i.kt)("td",{parentName:"tr",align:null},"Cardholder added the card to their digital Wallet manually, or they provided consent after you added the card with the API",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Next steps"),":",(0,i.kt)("ul",null,(0,i.kt)("li",null,"If the card is added to their Wallet successfully, the status moves to ",(0,i.kt)("inlineCode",{parentName:"td"},"Enabled")),(0,i.kt)("li",null,"If the card is declined during provisioning, the status moves to ",(0,i.kt)("inlineCode",{parentName:"td"},"Declined"))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Enabled")),(0,i.kt)("td",{parentName:"tr",align:null},"Digital card is available for use",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Next steps"),":",(0,i.kt)("ul",null,(0,i.kt)("li",null,"Cards can retain the status ",(0,i.kt)("inlineCode",{parentName:"td"},"Enabled")," indefinitely"),(0,i.kt)("li",null,(0,i.kt)("inlineCode",{parentName:"td"},"Enabled")," cards can also be ",(0,i.kt)("inlineCode",{parentName:"td"},"Suspended")," and ",(0,i.kt)("inlineCode",{parentName:"td"},"Canceled"))))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Suspended")),(0,i.kt)("td",{parentName:"tr",align:null},"Digital card is suspended and not available for use",(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("em",{parentName:"td"},"Cards can be suspended for various reasons, including a request from you or the cardholder, or a Swan action in the case of suspicious activity."),(0,i.kt)("br",null),(0,i.kt)("br",null),(0,i.kt)("strong",{parentName:"td"},"Next steps"),":",(0,i.kt)("ul",null,(0,i.kt)("li",null,"Restore the card's previous status with the API"),(0,i.kt)("li",null,"Cancel the card with the API")))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Canceled")),(0,i.kt)("td",{parentName:"tr",align:null},"Card is canceled, no longer available for use, and can't be reactivated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"Declined")),(0,i.kt)("td",{parentName:"tr",align:null},"Card was declined during the provisioning process")))),(0,i.kt)("h2",{id:"guides"},"Guides"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/topics/cards/digital/guide-add"},"Add digital cards to Apple Pay and Google Pay")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/topics/cards/digital/guide-cancel"},"Cancel a digital card"))))}m.isMDXComponent=!0},89303:(t,e,a)=>{a.d(e,{ZP:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={toc:[]},l="wrapper";function d(t){let{components:e,...a}=t;return(0,i.kt)(l,(0,n.Z)({},r,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{title:"Provisioning guide",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"A complete provisioning guide can't be published on this site due to privacy policies from Google and Apple.\nSwan will provide one after you've certified your digital card integration.")))}d.isMDXComponent=!0},23941:(t,e,a)=>{a.d(e,{ZP:()=>d});var n=a(87462),i=(a(67294),a(3905));const r={toc:[]},l="wrapper";function d(t){let{components:e,...a}=t;return(0,i.kt)(l,(0,n.Z)({},r,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Digital format of a virtual or physical card.\nSwan cards can be digitized and added to Apple Pay and Google Pay."))}d.isMDXComponent=!0},83493:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/cards-digital-wallets-26579b390908c693ed4680fc0197548c.png"}}]);