(this.webpackJsonpnotflix2=this.webpackJsonpnotflix2||[]).push([[0],{30:function(e,t,n){},31:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){},45:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(25),r=n.n(s),i=(n(30),n(31),n(10)),l=n(5),o=n(6),j=n(14),b=n(20);n(46),n(32);b.a.initializeApp({apiKey:"AIzaSyCfG6mSqk3XfHU45RZuepuGEKENX579wQk",authDomain:"notflix-77345.firebaseapp.com",projectId:"notflix-77345",storageBucket:"notflix-77345.appspot.com",messagingSenderId:"811321929444",appId:"1:811321929444:web:de7df211fceb62eaa906f1"});b.a.firestore();var u=b.a.auth(),d=n(1),h=Object(a.createContext)(),m=function(e,t){switch(t.type){case"LOGIN":return Object(j.a)(Object(j.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(j.a)(Object(j.a)({},e),{},{user:null});case"AUTH_IS_READY":return Object(j.a)(Object(j.a)({},e),{},{user:t.payload,authIsReady:!0});default:return e}},p=function(e){var t=e.children,n=Object(a.useReducer)(m,{user:null,authIsReady:!1}),c=Object(o.a)(n,2),s=c[0],r=c[1];return Object(a.useEffect)((function(){var e=u.onAuthStateChanged((function(t){r({type:"AUTH_IS_READY",payload:t}),e()}))}),[]),Object(d.jsx)(h.Provider,{value:Object(j.a)(Object(j.a)({},s),{},{dispatch:r}),children:t})},O=function(){var e=Object(a.useContext)(h);if(!e)throw new Error("useAuthContext must be inside an AuthContextProvider");return e},g=n(13),x=n.n(g),f=n(15),v=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=Object(a.useState)(null),c=Object(o.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)(!1),l=Object(o.a)(i,2),b=l[0],u=l[1],d=Object(a.useState)(null),h=Object(o.a)(d,2),m=h[0],p=h[1],O=Object(a.useState)(null),g=Object(o.a)(O,2),v=g[0],A=g[1],E=function(e){A({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};return Object(a.useEffect)((function(){var n=new AbortController,a=function(){var t=Object(f.a)(x.a.mark((function t(a){var c,s;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return u(!0),t.prev=1,t.next=4,fetch(e,Object(j.a)(Object(j.a)({},a),{},{signal:n.signal}));case 4:if((c=t.sent).ok){t.next=7;break}throw new Error(c.statusText);case 7:return t.next=9,c.json();case 9:s=t.sent,u(!1),r(s),p(null),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(1),"AbortError"===t.t0.name?console.log("the fetch was aborted"):(u(!1),p("Could not fetch the data"));case 18:case"end":return t.stop()}}),t,null,[[1,15]])})));return function(e){return t.apply(this,arguments)}}();return"GET"===t&&a(),"POST"===t&&v&&a(v),function(){n.abort()}}),[e,v,t]),{data:s,isPending:b,error:m,postData:E}};n(36);var A=function(e){var t,n,c=e.fetchUrl,s=v(c),r=s.data,i=s.isPending,l=s.error,j=Object(a.useState)([]),b=Object(o.a)(j,2),u=b[0],h=b[1];return Object(a.useEffect)((function(){r&&h(r.results[Math.floor(Math.random()*r.results.length-1)])}),[r]),Object(d.jsxs)(d.Fragment,{children:[l&&Object(d.jsx)("p",{className:"error",children:l}),i&&Object(d.jsx)("p",{className:"loading",children:"Loading..."}),u&&Object(d.jsxs)("header",{className:"banner",style:{backgroundSize:"cover",backgroundImage:'url("https://image.tmdb.org/t/p/original/'.concat(null===u||void 0===u?void 0:u.backdrop_path,'")'),backgroundPosition:"center center"},children:[Object(d.jsxs)("div",{className:"banner__contents",children:[Object(d.jsx)("h1",{className:"banner__title",children:(null===u||void 0===u?void 0:u.title)||(null===u||void 0===u?void 0:u.name)||(null===u||void 0===u?void 0:u.original_name)}),Object(d.jsxs)("div",{className:"banner__buttons",children:[Object(d.jsx)("button",{className:"banner__button",children:"Play"}),Object(d.jsx)("button",{className:"banner__button",children:"My List"})]}),Object(d.jsx)("h1",{className:"banner__desc",children:(t=null===u||void 0===u?void 0:u.overview,n=150,(null===t||void 0===t?void 0:t.length)>n?t.substr(0,n-1)+"...":t)})]}),Object(d.jsx)("div",{className:"banner--fadeBottom"})]})]})},E=(n(37),n(22)),N=n(23);function _(){var e=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)(!1),b=Object(o.a)(j,2),d=b[0],h=b[1],m=O().dispatch,p=function(){var e=Object(f.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),h(!0),e.prev=2,e.next=5,u.signOut();case 5:m({type:"LOGOUT"}),n||(h(!1),l(null)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),n||(console.log(e.t0.message),l(e.t0),h(!1));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return function(){return c(!0)}}),[]),{logout:p,error:i,isPending:d}}(),t=e.logout,n=O().user,c=Object(a.useState)(!1),s=Object(o.a)(c,2),r=s[0],l=s[1];return Object(a.useEffect)((function(){return window.addEventListener("scroll",(function(){window.scrollY>200?l(!0):l(!1)})),function(){window.removeEventListener("scroll",null)}}),[]),Object(d.jsx)("div",{children:Object(d.jsxs)("nav",{className:"navbar__container ".concat(r&&"nav__black"),children:[Object(d.jsxs)("div",{className:"navbar__left-container",children:[Object(d.jsx)("figure",{className:"logo__wrapper",children:Object(d.jsx)(i.b,{to:"/",className:"logo__anchor",children:Object(d.jsx)("img",{className:"logo__img",src:"https://fontmeme.com/permalink/211127/a952d596ae5f420bb28fd8dda8fbed29.png",alt:"site logo"})})}),Object(d.jsxs)("ul",{className:"navbar__list nav__mobile",children:[Object(d.jsx)("li",{className:"navbar__link",children:Object(d.jsx)(i.b,{to:"/",className:"navbar__link--anchor",children:"Home"})}),Object(d.jsx)("li",{className:"navbar__link",children:Object(d.jsx)(i.b,{to:"/browse/series",className:"navbar__link--anchor",children:"TV Shows"})}),Object(d.jsx)("li",{className:"navbar__link",children:Object(d.jsx)(i.b,{to:"/browse/movies",className:"navbar__link--anchor",children:"Movies"})}),Object(d.jsx)("li",{className:"navbar__link",children:Object(d.jsx)(i.b,{to:"/latest",className:"navbar__link--anchor",children:"New & Popular"})}),Object(d.jsx)("li",{className:"navbar__link",children:Object(d.jsx)(i.b,{to:"/my-list",className:"navbar__link--anchor",children:"My List"})})]})]}),Object(d.jsx)("div",{className:"navbar__right-container",children:Object(d.jsxs)("ul",{className:"navbar__list",children:[Object(d.jsx)("li",{className:"navbar__link",children:Object(d.jsxs)("form",{children:[Object(d.jsx)("input",{type:"search",id:"movie-input",required:!0}),Object(d.jsx)(E.a,{icon:N.b,className:"search--icon icon"})]})}),Object(d.jsx)("li",{className:"navbar__link nav__mobile",children:Object(d.jsx)(i.b,{to:"/",className:"navbar__link--anchor",children:Object(d.jsx)(E.a,{className:"icon",icon:N.a})})}),Object(d.jsx)("li",{className:"navbar__link",children:Object(d.jsx)(i.b,{to:"/",className:"navbar__link--anchor",children:Object(d.jsx)("img",{className:"profile__avatar",src:"data:image/png;base64,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",alt:"profile avatar"})})}),Object(d.jsx)("li",{className:"navbar__link",children:n&&Object(d.jsx)("button",{className:"btn--signout",onClick:t,children:"Sign out"})})]})})]})})}n(42);var w=function(e){var t=e.title,n=e.fetchUrl,a=e.isLargeRow,c=v(n),s=c.data,r=c.isPending,i=c.error;return Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("h2",{children:t}),i&&Object(d.jsx)("p",{className:"error",children:i}),r&&Object(d.jsx)("p",{className:"loading",children:"Loading..."}),s&&Object(d.jsx)("div",{className:"row__posters",children:s.results.map((function(e){return Object(d.jsx)("img",{className:"row__poster ".concat(a&&"row__posterLarge"),src:"".concat("https://image.tmdb.org/t/p/original/").concat(a?e.poster_path:e.backdrop_path),alt:e.name},e.id)}))})]})},C="b9ada3d51be322983b12c0c45e6f4134",I={fetchTrending:"https://api.themoviedb.org/3/trending/all/week?api_key=".concat(C,"&language=en-US"),fetchNetflixOriginals:"https://api.themoviedb.org/3/discover/tv?api_key=".concat(C,"&with_networks=213"),fetchTopRated:"https://api.themoviedb.org/3/movie/top_rated?api_key=".concat(C,"&language=en-US"),fetchActionMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(C,"&with_genres=28"),fetchComedyMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(C,"&with_genres=35"),fetchHorrorMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(C,"&with_genres=27"),fetchRomanceMovies:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(C,"&with_genres=10749"),fetchDocumentaries:"https://api.themoviedb.org/3/discover/movie?api_key=".concat(C,"&with_genres=99")};function k(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(_,{}),Object(d.jsx)(A,{fetchUrl:I.fetchTrending}),Object(d.jsx)(w,{title:"NETFLIX ORIGINALS",fetchUrl:I.fetchNetflixOriginals,isLargeRow:!0}),Object(d.jsx)(w,{title:"Trending",fetchUrl:I.fetchTrending}),Object(d.jsx)(w,{title:"Top Rated",fetchUrl:I.fetchTopRated}),Object(d.jsx)(w,{title:"Action Movies",fetchUrl:I.fetchActionMovies}),Object(d.jsx)(w,{title:"Comedy Movies",fetchUrl:I.fetchComedyMovies}),Object(d.jsx)(w,{title:"Horror Movies",fetchUrl:I.fetchHorrorMovies}),Object(d.jsx)(w,{title:"Romance Movies",fetchUrl:I.fetchRomanceMovies}),Object(d.jsx)(w,{title:"Documentaries",fetchUrl:I.fetchDocumentaries})]})}n(43);function Q(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),l=r[0],j=r[1],b=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)(!1),b=Object(o.a)(j,2),d=b[0],h=b[1],m=O().dispatch,p=function(){var e=Object(f.a)(x.a.mark((function e(t,a){var c;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),h(!0),e.prev=2,e.next=5,u.signInWithEmailAndPassword(t,a);case 5:c=e.sent,m({type:"LOGIN",payload:c.user}),n||(h(!1),l(null)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),n||(console.log(e.t0.message),l(e.t0),h(!1));case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return function(){return c(!0)}}),[]),{login:p,error:i,isPending:d}}(),h=b.login,m=b.error,p=b.isPending;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("img",{className:"logo__img--signup",src:"https://fontmeme.com/permalink/211127/a952d596ae5f420bb28fd8dda8fbed29.png",alt:"site logo"}),Object(d.jsx)("div",{className:"form__container",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),h(n,l)},className:"signup-form",children:[Object(d.jsx)("h2",{className:"form-title",children:"Login"}),Object(d.jsx)("div",{className:"input-group",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{className:"label",children:"Email"}),Object(d.jsx)("input",{className:"input",type:"email",onChange:function(e){return c(e.target.value)},value:n})]})}),Object(d.jsx)("div",{className:"input-group",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{className:"label",children:"Password"}),Object(d.jsx)("input",{className:"input",type:"password",onChange:function(e){return j(e.target.value)},value:l})]})}),!p&&Object(d.jsx)("button",{className:"btn",children:"Login"}),p&&Object(d.jsx)("button",{disabled:!0,className:"btn",children:"loading..."}),Object(d.jsxs)("p",{className:"signup__text",children:["New to Netflix?"," ",Object(d.jsx)(i.b,{to:"/signup",className:"signup",children:Object(d.jsx)("span",{children:"Sign up now"})})]}),m&&Object(d.jsx)("p",{children:m})]})})]})}n(44);function S(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),r=Object(o.a)(s,2),l=r[0],j=r[1],b=Object(a.useState)(""),h=Object(o.a)(b,2),m=h[0],p=h[1],g=function(){var e=Object(a.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),r=Object(o.a)(s,2),i=r[0],l=r[1],j=Object(a.useState)(!1),b=Object(o.a)(j,2),d=b[0],h=b[1],m=O().dispatch,p=function(){var e=Object(f.a)(x.a.mark((function e(t,a,c){var s;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(null),h(!0),e.prev=2,e.next=5,u.createUserWithEmailAndPassword(a,c);case 5:if(s=e.sent){e.next=8;break}throw new Error("Could not complete signup");case 8:return e.next=10,s.user.updateProfile({displayName:t});case 10:m({type:"LOGIN",payload:s.user}),n||(h(!1),l(null)),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),n||(console.log(e.t0.message),l(e.t0),h(!1));case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t,n,a){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return function(){return c(!0)}}),[]),{error:i,isPending:d,signup:p}}(),v=g.signup,A=g.isPending,E=g.error;return Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("img",{className:"logo__img--signup",src:"https://fontmeme.com/permalink/211127/a952d596ae5f420bb28fd8dda8fbed29.png",alt:"site logo"}),Object(d.jsx)("div",{className:"form__container",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),v(m,n,l)},className:"signup-form",children:[Object(d.jsx)("h2",{className:"form-title",children:"Signup"}),Object(d.jsx)("div",{className:"input-group",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{className:"label",children:"Display Name"}),Object(d.jsx)("input",{className:"input",type:"text",onChange:function(e){return p(e.target.value)},value:m})]})}),Object(d.jsx)("div",{className:"input-group",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{className:"label",children:"Email"}),Object(d.jsx)("input",{className:"input",type:"email",onChange:function(e){return c(e.target.value)},value:n})]})}),Object(d.jsx)("div",{className:"input-group",children:Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{className:"label",children:"Password"}),Object(d.jsx)("input",{className:"input",type:"password",onChange:function(e){return j(e.target.value)},value:l,placeholder:"atleast 6 characters"})]})}),!A&&Object(d.jsx)("button",{className:"btn",children:"Signup"}),A&&Object(d.jsx)("button",{className:"btn",disabled:!0,children:"Loading..."}),Object(d.jsxs)("p",{className:"signup__text",children:["Already have an account?"," ",Object(d.jsx)(i.b,{to:"/login",className:"signup",children:Object(d.jsx)("span",{children:"Sign in here"})})]}),E&&Object(d.jsx)("p",{children:E})]})})]})}var B=function(){var e=O(),t=e.authIsReady,n=e.user;return Object(d.jsx)("div",{className:"app",children:t&&Object(d.jsx)(i.a,{children:Object(d.jsxs)(l.d,{children:[n&&Object(d.jsx)(l.b,{path:"/",element:Object(d.jsx)(k,{})}),!n&&Object(d.jsx)(l.b,{path:"/",element:Object(d.jsx)(l.a,{replace:!0,to:"/signup"})}),!n&&Object(d.jsx)(l.b,{path:"/login",element:Object(d.jsx)(Q,{})}),n&&Object(d.jsx)(l.b,{path:"/login",element:Object(d.jsx)(l.a,{replace:!0,to:"/"})}),!n&&Object(d.jsx)(l.b,{path:"/signup",element:Object(d.jsx)(S,{})}),n&&Object(d.jsx)(l.b,{path:"/signup",element:Object(d.jsx)(l.a,{replace:!0,to:"/"})})]})})})};r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(p,{children:Object(d.jsx)(B,{})})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2cf848fc.chunk.js.map