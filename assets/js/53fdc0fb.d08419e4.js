"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[58903],{3905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>g});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},i=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=s(a),y=n,g=p["".concat(d,".").concat(y)]||p[y]||u[y]||o;return a?r.createElement(g,c(c({ref:t},i),{},{components:a})):r.createElement(g,c({ref:t},i))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=y;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}y.displayName="MDXCreateElement"},4761:(e,t,a)=>{a.r(t),a.d(t,{Badge:()=>y,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>d,toc:()=>i});var r=a(83117),n=a(67294),o=a(3905);const c={id:"report-exchange-rate",title:"ReportExchangeRate",hide_table_of_contents:!1},l=void 0,d={unversionedId:"api/objects/report-exchange-rate",id:"api/objects/report-exchange-rate",title:"ReportExchangeRate",description:"here is the exchange rate detail",source:"@site/docs/api/objects/report-exchange-rate.mdx",sourceDirName:"api/objects",slug:"/api/objects/report-exchange-rate",permalink:"/docs/api/objects/report-exchange-rate",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/objects/report-exchange-rate.mdx",tags:[],version:"current",frontMatter:{id:"report-exchange-rate",title:"ReportExchangeRate",hide_table_of_contents:!1}},s={},i=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>ReportExchangeRate.<b>sourceCurrency</b></code><Bullet /><code>Currency!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-reportexchangeratebsourcecurrencybcodecurrency--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReportExchangeRate.<b>exchangeRate</b></code><Bullet /><code>Float!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-reportexchangeratebexchangeratebcodefloat--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReportExchangeRate.<b>unitCurrency</b></code><Bullet /><code>Currency!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-reportexchangeratebunitcurrencybcodecurrency--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReportExchangeRate.<b>targetCurrency</b></code><Bullet /><code>Currency!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-reportexchangeratebtargetcurrencybcodecurrency--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReportExchangeRate.<b>quotationDate</b></code><Bullet /><code>Date!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-reportexchangeratebquotationdatebcodedate--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>ReportExchangeRate.<b>contractIdentification</b></code><Bullet /><code>String</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-reportexchangeratebcontractidentificationbcodestring-",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(n.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),y=e=>(0,o.kt)(n.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),g={toc:i,Bullet:p,SpecifiedBy:u,Badge:y},h="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,r.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"here is the exchange rate detail"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ReportExchangeRate {\n  sourceCurrency: Currency!\n  exchangeRate: Float!\n  unitCurrency: Currency!\n  targetCurrency: Currency!\n  quotationDate: Date!\n  contractIdentification: String\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-reportexchangeratebsourcecurrencybcodecurrency--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ReportExchangeRate.",(0,o.kt)("b",null,"sourceCurrency"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/currency"},(0,o.kt)("inlineCode",{parentName:"a"},"Currency!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-reportexchangeratebexchangeratebcodefloat--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ReportExchangeRate.",(0,o.kt)("b",null,"exchangeRate"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/float"},(0,o.kt)("inlineCode",{parentName:"a"},"Float!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-reportexchangeratebunitcurrencybcodecurrency--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ReportExchangeRate.",(0,o.kt)("b",null,"unitCurrency"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/currency"},(0,o.kt)("inlineCode",{parentName:"a"},"Currency!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-reportexchangeratebtargetcurrencybcodecurrency--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ReportExchangeRate.",(0,o.kt)("b",null,"targetCurrency"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/currency"},(0,o.kt)("inlineCode",{parentName:"a"},"Currency!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-reportexchangeratebquotationdatebcodedate--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ReportExchangeRate.",(0,o.kt)("b",null,"quotationDate"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date!"))," ",(0,o.kt)(y,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h4",{id:"code-style-fontweight-normal-reportexchangeratebcontractidentificationbcodestring-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"ReportExchangeRate.",(0,o.kt)("b",null,"contractIdentification"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String"))," ",(0,o.kt)(y,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/objects/card-transaction"},(0,o.kt)("inlineCode",{parentName:"a"},"CardTransaction")),"  ",(0,o.kt)(y,{class:"secondary",text:"object",mdxType:"Badge"})))}m.isMDXComponent=!0}}]);