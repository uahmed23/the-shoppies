(this.webpackJsonpthe_shoppies=this.webpackJsonpthe_shoppies||[]).push([[0],{63:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(32),s=n.n(a),r=n(10),o=n(18),j=n.n(o),l=n(21),u=n(33),m=n(8),b=n(34),h=n.n(b),d=n(11),O=n.n(d),f=n(1),x=i.a.createContext();function v(e){var t=e.children,n=Object(c.useState)([]),i=Object(m.a)(n,2),a=i[0],s=i[1],r=Object(c.useState)([]),o=Object(m.a)(r,2),b=o[0],d=o[1],v=Object(c.useState)(0),p=Object(m.a)(v,2),g=p[0],N=p[1],S=Object(c.useState)(""),C=Object(m.a)(S,2),k=C[0],I=C[1];function M(){return(M=Object(u.a)(j.a.mark((function e(t,n){var c,i,a;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("http://www.omdbapi.com/?apikey=5209986e&s=".concat(t,"&page=").concat(n,"&type=movie"));case 2:c=e.sent,i=c.data.Search?c.data.Search:[],a=c.data.totalResults?c.data.totalResults:0,N(a),d(i);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(c.useEffect)((function(){O.a.get("nominations")||O.a.set("nominations",[]);var e=O.a.get("nominations");s(e)}),[]),Object(f.jsx)(x.Provider,{value:{nominations:a,addToNominations:function(e){var t=[].concat(Object(l.a)(a),[e]);O.a.set("nominations",t),s((function(t){return[].concat(Object(l.a)(t),[e])}))},removeFromNominations:function(e){var t=a.filter((function(t){return t.imdbID!==e}));O.a.set("nominations",t),s((function(t){return t.filter((function(t){return t.imdbID!==e}))}))},movies:b,totalResults:g,fetchMovies:function(e,t){return M.apply(this,arguments)},searchString:k,setSearchString:I},children:t})}n(63);var p=n(2);var g=function(){var e=Object(c.useContext)(x).nominations.length>0?"ri-star-fill":"ri-star-line";return Object(f.jsx)(f.Fragment,{children:Object(f.jsxs)("header",{children:[Object(f.jsx)(r.b,{to:"/",children:Object(f.jsx)("h2",{children:"The Shoppies"})}),Object(f.jsx)(r.b,{to:"/nominations",children:Object(f.jsxs)("div",{className:"star-page",children:[Object(f.jsx)("h3",{children:"My Nominations"}),Object(f.jsx)("i",{className:"".concat(e," header-star ri-fw ri-2x")})]})})]})})};var N=function(e){var t=e.movie,n=Object(c.useState)(!1),i=Object(m.a)(n,2),a=i[0],s=i[1],r=Object(c.useContext)(x).removeFromNominations,o=a?"ri-delete-bin-fill remove":"ri-delete-bin-line remove";return Object(f.jsx)("main",{className:"nominees",children:Object(f.jsxs)("div",{className:"small image-container",children:[Object(f.jsx)("i",{className:o,onClick:function(){return r(t.imdbID)},onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}}),Object(f.jsxs)("h5",{children:[" ","".concat(t.Title," ( ").concat(t.Year," )")]}),Object(f.jsx)("img",{alt:"".concat(t.Title," ( ").concat(t.Year," )"),src:t.Poster,className:"nominee-img-grid"})]})})};var S=function(){var e=Object(c.useContext)(x).nominations,t=e.map((function(e){return Object(f.jsx)(N,{movie:e},e.imdbID)}));return Object(f.jsxs)("main",{className:"nominee-page",children:[Object(f.jsx)("div",{className:"nomination-page-title",children:Object(f.jsx)("h1",{children:"Nomination List"})}),e?t:null,e.length>0?null:Object(f.jsx)("p",{children:"You have not nominated any movies yet."})]})};var C=function(e){var t=e.movie,n=Object(c.useState)(!1),i=Object(m.a)(n,2),a=i[0],s=i[1],r=Object(c.useContext)(x),o=r.addToNominations,j=r.nominations,l=r.removeFromNominations;return Object(f.jsxs)("div",{className:"big image-container",onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)},children:[Object(f.jsx)("h5",{children:"".concat(t.Title," ( ").concat(t.Year," )")}),Object(f.jsx)("img",{alt:"".concat(t.Title," ( ").concat(t.Year," )"),src:t.Poster,className:"image-grid"}),j.some((function(e){return e.imdbID===t.imdbID}))?Object(f.jsx)("i",{className:"ri-star-fill star",onClick:function(){return l(t.imdbID)}}):a&&j.length<5?Object(f.jsx)("i",{className:"ri-star-line star",onClick:function(){return o(t)}}):a&&j.length>4?Object(f.jsx)("i",{className:"ri-alert-fill full"}):void 0]})},k=n(36),I=n.n(k);var M=function(){var e=Object(c.useContext)(x),t=e.movies,n=e.fetchMovies,i=e.totalResults,a=(e.nominations,e.searchString),s=(e.setSearchString,Object(c.useState)(1)),r=Object(m.a)(s,2),o=r[0],j=r[1],l=(Object(c.useCallback)(I.a.debounce((function(e){return n(e,o)}),500),[]),t.map((function(e,t){return Object(f.jsx)(C,{movie:e},t)})));return console.log(t),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)("div",{className:"pageInfo",children:[Object(f.jsxs)("p",{children:["page ",o," out of ",Math.floor(i/10)+1]}),Object(f.jsx)("a",{href:"#",onClick:function(){o>1&&(n(a,o-1),j((function(e){return e-1})))},className:"previous",children:"\u2039"}),Object(f.jsx)("a",{href:"#",onClick:function(){o<Math.floor(i/10)+1&&(n(a,o+1),j((function(e){return e+1})))},className:"next",children:"\u203a"})]}),Object(f.jsx)("div",{className:"search-container"}),Object(f.jsx)("main",{className:"movies",children:!t||t.length<1?Object(f.jsx)("h3",{children:"   No matching movie title found"}):l})]})};var w=function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)(g,{}),Object(f.jsxs)(p.c,{children:[Object(f.jsx)(p.a,{exact:!0,path:"/",children:Object(f.jsx)(M,{})}),Object(f.jsx)(p.a,{path:"/nominations",children:Object(f.jsx)(S,{})})]})]})};s.a.render(Object(f.jsx)(v,{children:Object(f.jsx)(r.a,{children:Object(f.jsx)(w,{})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.502ab7a6.chunk.js.map