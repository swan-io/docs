"use strict";(self.webpackChunk_swan_io_docs=self.webpackChunk_swan_io_docs||[]).push([[67662],{50045:(e,n,t)=>{t.d(n,{P:()=>s,R:()=>i});var r=Object.defineProperty,a=(e,n)=>r(e,"name",{value:n,configurable:!0});class i{constructor(e,n){this.containsPosition=e=>this.start.line===e.line?this.start.character<=e.character:this.end.line===e.line?this.end.character>=e.character:this.start.line<=e.line&&this.end.line>=e.line,this.start=e,this.end=n}setStart(e,n){this.start=new s(e,n)}setEnd(e,n){this.end=new s(e,n)}}a(i,"Range");class s{constructor(e,n){this.lessThanOrEqualTo=e=>this.line<e.line||this.line===e.line&&this.character<=e.character,this.line=e,this.character=n}setLine(e){this.line=e}setCharacter(e){this.character=e}}a(s,"Position")},67662:(e,n,t)=>{t.r(n);var r=t(97480),a=t(52877),i=t(77990),s=t(69538),o=t(93201),c=t(22618),l=t(53274),h=t(25580),u=t(84873),d=t(96300),p=t(34800),f=t(42266),g=t(92767),v=t(24196),m=t(81294),y=t(88081),w=t(5311),P=t(24635),b=t(97359),k=t(16918),E=t(84275),C=t(28087),L=t(15394),Q=t(59361),G=t(50045),R=(t(67294),t(73935),Object.defineProperty),_=(e,n)=>R(e,"name",{value:n,configurable:!0});const x=[a.t,i.q,s.P,o.L,c.y,l.o,h.I,u.J,d.k,p.g,f.L,g.P];function S(e,n,t,r,a){const i=v.i.filter((e=>e!==m.J&&e!==y.i&&(!r||e!==w.a)));t&&Array.prototype.push.apply(i,t),a&&Array.prototype.push.apply(i,x);return(0,P.Gu)(e,n,i).filter((e=>{if(e.message.includes("Unknown directive")&&e.nodes){const n=e.nodes[0];if(n&&n.kind===b.h.DIRECTIVE){const e=n.name.value;if("arguments"===e||"argumentDefinitions"===e)return!1}}return!0}))}_(S,"validateWithCustomRules");const D={["Error"]:1,["Warning"]:2,["Information"]:3,["Hint"]:4},T=_(((e,n)=>{if(!e)throw new Error(n)}),"invariant");function q(e,n=null,t,r,a){var i,s;let o=null,c="";a&&(c="string"==typeof a?a:a.reduce(((e,n)=>e+(0,k.S)(n)+"\n\n"),""));const l=c?`${e}\n\n${c}`:e;try{o=(0,E.Qc)(l)}catch(h){if(h instanceof C.__){const e=V(null!==(s=null===(i=h.locations)||void 0===i?void 0:i[0])&&void 0!==s?s:{line:0,column:0},l);return[{severity:D.Error,message:h.message,source:"GraphQL: Syntax",range:e}]}throw h}return I(o,n,t,r)}function I(e,n=null,t,r){if(!n)return[];const a=S(n,e,t,r).flatMap((e=>O(e,D.Error,"Validation"))),i=(0,P.Gu)(n,e,[L.r]).flatMap((e=>O(e,D.Warning,"Deprecation")));return a.concat(i)}function O(e,n,t){if(!e.nodes)return[];const r=[];return e.nodes.forEach(((a,i)=>{const s="Variable"!==a.kind&&"name"in a&&void 0!==a.name?a.name:"variable"in a&&void 0!==a.variable?a.variable:a;if(s){T(e.locations,"GraphQL validation error requires locations.");const a=e.locations[i],o=A(s),c=a.column+(o.end-o.start);r.push({source:`GraphQL: ${t}`,message:e.message,severity:n,range:new G.R(new G.P(a.line-1,a.column-1),new G.P(a.line-1,c))})}})),r}function V(e,n){const t=(0,Q.o)(),r=t.startState(),a=n.split("\n");T(a.length>=e.line,"Query text must have more lines than where the error happened");let i=null;for(let l=0;l<e.line;l++)for(i=new Q.C(a[l]);!i.eol();){if("invalidchar"===t.token(i,r))break}T(i,"Expected Parser stream to be available.");const s=e.line-1,o=i.getStartOfToken(),c=i.getCurrentPosition();return new G.R(new G.P(s,o),new G.P(s,c))}function A(e){const n=e.loc;return T(n,"Expected ASTNode to have a location."),n}_(q,"getDiagnostics"),_(I,"validateQuery"),_(O,"annotations"),_(V,"getRange"),_(A,"getLocation");const W=["error","warning","information","hint"],$={"GraphQL: Validation":"validation","GraphQL: Deprecation":"deprecation","GraphQL: Syntax":"syntax"};r.C.registerHelper("lint","graphql",((e,n)=>{const{schema:t,validationRules:a,externalFragments:i}=n;return q(e,t,a,void 0,i).map((e=>({message:e.message,severity:e.severity?W[e.severity-1]:W[0],type:e.source?$[e.source]:void 0,from:r.C.Pos(e.range.start.line,e.range.start.character),to:r.C.Pos(e.range.end.line,e.range.end.character)})))}))}}]);