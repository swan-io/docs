"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[77982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=a,b=p["".concat(c,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(b,i(i({ref:t},d),{},{components:n})):r.createElement(b,i({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61278:(e,t,n)=>{n.r(t),n.d(t,{Badge:()=>m,Bullet:()=>p,SpecifiedBy:()=>u,assets:()=>s,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=n(83117),a=n(67294),o=n(3905);const i={id:"restricted-to-input",title:"RestrictedToInput",hide_table_of_contents:!1},l=void 0,c={unversionedId:"api/inputs/restricted-to-input",id:"api/inputs/restricted-to-input",title:"RestrictedToInput",description:"Input when the account membership is restricted to a verified user",source:"@site/docs/api/inputs/restricted-to-input.mdx",sourceDirName:"api/inputs",slug:"/api/inputs/restricted-to-input",permalink:"/docs/api/inputs/restricted-to-input",draft:!1,editUrl:"https://github.com/swan-io/docs/edit/main/docs/docs/api/inputs/restricted-to-input.mdx",tags:[],version:"current",frontMatter:{id:"restricted-to-input",title:"RestrictedToInput",hide_table_of_contents:!1}},s={},d=[{value:"Fields",id:"fields",level:3},{value:'<code style={{ fontWeight: \'normal\' }}>RestrictedToInput.<b>firstName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-restrictedtoinputbfirstnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RestrictedToInput.<b>lastName</b></code><Bullet /><code>String!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-restrictedtoinputblastnamebcodestring--",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RestrictedToInput.<b>birthDate</b></code><Bullet /><code>Date</code> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-restrictedtoinputbbirthdatebcodedate-",level:4},{value:'<code style={{ fontWeight: \'normal\' }}>RestrictedToInput.<b>phoneNumber</b></code><Bullet /><code>PhoneNumber!</code> <Badge class="secondary" text="non-null"/> <Badge class="secondary" text="scalar"/>',id:"code-style-fontweight-normal-restrictedtoinputbphonenumberbcodephonenumber--",level:4},{value:"Member of",id:"member-of",level:3}],p=()=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{style:{fontWeight:"normal",fontSize:".5em",color:"var(--ifm-color-secondary-darkest)"}},"\xa0\u25cf\xa0")),u=e=>(0,o.kt)(a.Fragment,null,"Specification",(0,o.kt)("a",{className:"link",style:{fontSize:"1.5em",paddingLeft:"4px"},target:"_blank",href:e.url,title:"Specified by "+e.url},"\u2398")),m=e=>(0,o.kt)(a.Fragment,null,(0,o.kt)("span",{className:"badge badge--"+e.class},e.text)),b={toc:d,Bullet:p,SpecifiedBy:u,Badge:m},f="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(f,(0,r.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Input when the account membership is restricted to a verified user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"input RestrictedToInput {\n  firstName: String!\n  lastName: String!\n  birthDate: Date\n  phoneNumber: PhoneNumber!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"code-style-fontweight-normal-restrictedtoinputbfirstnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RestrictedToInput.",(0,o.kt)("b",null,"firstName"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account member first name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-restrictedtoinputblastnamebcodestring--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RestrictedToInput.",(0,o.kt)("b",null,"lastName"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account member last name")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-restrictedtoinputbbirthdatebcodedate-"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RestrictedToInput.",(0,o.kt)("b",null,"birthDate"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/date"},(0,o.kt)("inlineCode",{parentName:"a"},"Date"))," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account member birth date")),(0,o.kt)("h4",{id:"code-style-fontweight-normal-restrictedtoinputbphonenumberbcodephonenumber--"},(0,o.kt)("a",{parentName:"h4",href:"#"},(0,o.kt)("code",{style:{fontWeight:"normal"}},"RestrictedToInput.",(0,o.kt)("b",null,"phoneNumber"))),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"h4",href:"/api/scalars/phone-number"},(0,o.kt)("inlineCode",{parentName:"a"},"PhoneNumber!"))," ",(0,o.kt)(m,{class:"secondary",text:"non-null",mdxType:"Badge"})," ",(0,o.kt)(m,{class:"secondary",text:"scalar",mdxType:"Badge"})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Account member phone number")),(0,o.kt)("h3",{id:"member-of"},"Member of"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/api/inputs/add-account-membership-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddAccountMembershipInput")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"}),(0,o.kt)(p,{mdxType:"Bullet"}),(0,o.kt)("a",{parentName:"p",href:"/api/inputs/membership-info-input"},(0,o.kt)("inlineCode",{parentName:"a"},"MembershipInfoInput")),"  ",(0,o.kt)(m,{class:"secondary",text:"input",mdxType:"Badge"})))}h.isMDXComponent=!0}}]);