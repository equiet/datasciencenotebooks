import{S as e,i as s,s as t,e as r,t as o,k as n,j as a,c as l,a as c,g as f,d as $,n as i,m as d,b as h,f as g,D as m,o as p,v as u,r as v,w as k,A as b,p as E,q as w,l as x,B as V,u as q,I as j}from"../../chunks/vendor-952e1142.js";import{V as D}from"../../chunks/VendorCard-127d1cfd.js";import{a as I,V as A,b as C}from"../../chunks/VendorGrid-b8e13bd9.js";function y(e,s,t){const r=e.slice();return r[3]=s[t],r}function B(e){let s,t;const r=[e[3]];let o={};for(let n=0;n<r.length;n+=1)o=b(o,r[n]);return s=new C({props:o}),{c(){a(s.$$.fragment)},l(e){d(s.$$.fragment,e)},m(e,r){p(s,e,r),t=!0},p(e,t){const o=2&t?E(r,[w(e[3])]):{};s.$set(o)},i(e){t||(u(s.$$.fragment,e),t=!0)},o(e){v(s.$$.fragment,e),t=!1},d(e){k(s,e)}}}function N(e){let s,t,r,o;const l=[e[0]];let c={};for(let n=0;n<l.length;n+=1)c=b(c,l[n]);s=new C({props:c});let f=e[1],h=[];for(let n=0;n<f.length;n+=1)h[n]=B(y(e,f,n));const m=e=>v(h[e],1,1,(()=>{h[e]=null}));return{c(){a(s.$$.fragment),t=n();for(let e=0;e<h.length;e+=1)h[e].c();r=x()},l(e){d(s.$$.fragment,e),t=i(e);for(let s=0;s<h.length;s+=1)h[s].l(e);r=x()},m(e,n){p(s,e,n),g(e,t,n);for(let s=0;s<h.length;s+=1)h[s].m(e,n);g(e,r,n),o=!0},p(e,t){const o=1&t?E(l,[w(e[0])]):{};if(s.$set(o),2&t){let s;for(f=e[1],s=0;s<f.length;s+=1){const o=y(e,f,s);h[s]?(h[s].p(o,t),u(h[s],1)):(h[s]=B(o),h[s].c(),u(h[s],1),h[s].m(r.parentNode,r))}for(V(),s=f.length;s<h.length;s+=1)m(s);q()}},i(e){if(!o){u(s.$$.fragment,e);for(let e=0;e<f.length;e+=1)u(h[e]);o=!0}},o(e){v(s.$$.fragment,e),h=h.filter(Boolean);for(let s=0;s<h.length;s+=1)v(h[s]);o=!1},d(e){k(s,e),e&&$(t),j(h,e),e&&$(r)}}}function P(e){let s,t,b,E,w,x,V,q,j,C,y,B,P,G,H,S,z,F,J,K,L,M=e[0].name+"",O=e[0].name+"",Q=D.vendors.length-1+"";return F=new I({props:{$$slots:{default:[N]},$$scope:{ctx:e}}}),K=new A({props:{items:e[1]}}),{c(){s=r("div"),t=r("div"),b=r("div"),E=r("h1"),w=o("Alternatives to "),x=o(M),V=n(),q=r("p"),j=o("Explore other notebooks like "),C=o(O),y=o("."),B=n(),P=r("p"),G=o("Comparison with "),H=o(Q),S=o(" other data science notebooks."),z=n(),a(F.$$.fragment),J=n(),a(K.$$.fragment),this.h()},l(e){s=l(e,"DIV",{class:!0});var r=c(s);t=l(r,"DIV",{class:!0});var o=c(t);b=l(o,"DIV",{class:!0});var n=c(b);E=l(n,"H1",{class:!0});var a=c(E);w=f(a,"Alternatives to "),x=f(a,M),a.forEach($),V=i(n),q=l(n,"P",{class:!0});var h=c(q);j=f(h,"Explore other notebooks like "),C=f(h,O),y=f(h,"."),h.forEach($),B=i(n),P=l(n,"P",{class:!0});var g=c(P);G=f(g,"Comparison with "),H=f(g,Q),S=f(g," other data science notebooks."),g.forEach($),n.forEach($),o.forEach($),r.forEach($),z=i(e),d(F.$$.fragment,e),J=i(e),d(K.$$.fragment,e),this.h()},h(){h(E,"class","svelte-12o9qd2"),h(q,"class","svelte-12o9qd2"),h(P,"class","svelte-12o9qd2"),h(b,"class","pure-u-1"),h(t,"class","pure-g"),h(s,"class","header svelte-12o9qd2")},m(e,r){g(e,s,r),m(s,t),m(t,b),m(b,E),m(E,w),m(E,x),m(b,V),m(b,q),m(q,j),m(q,C),m(q,y),m(b,B),m(b,P),m(P,G),m(P,H),m(P,S),g(e,z,r),p(F,e,r),g(e,J,r),p(K,e,r),L=!0},p(e,[s]){const t={};64&s&&(t.$$scope={dirty:s,ctx:e}),F.$set(t)},i(e){L||(u(F.$$.fragment,e),u(K.$$.fragment,e),L=!0)},o(e){v(F.$$.fragment,e),v(K.$$.fragment,e),L=!1},d(e){e&&$(s),e&&$(z),k(F,e),e&&$(J),k(K,e)}}}async function G({page:{params:e}}){const s=e.vendor;return D.vendors.filter((e=>e.slug===s))[0],s?{props:{vendor:s}}:{status:404,error:"Not found."}}function H(e,s,t){let{vendor:r}=s;const o=D.vendors.filter((e=>e.slug===r))[0],n=D.vendors.filter((e=>e.slug!==r));return e.$$set=e=>{"vendor"in e&&t(2,r=e.vendor)},[o,n,r]}export default class extends e{constructor(e){super(),s(this,e,H,P,t,{vendor:2})}}export{G as load};