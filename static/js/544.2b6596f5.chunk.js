"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[544],{126:function(n,t,e){e.d(t,{e:function(){return i}});var c=e(689),r=e(87),o=e(184),i=function(n){var t=n.moviesRes,e=(0,c.TH)();return(0,o.jsx)("ul",{children:t.map((function(n){var t=n.id,c=n.title;return(0,o.jsx)("li",{children:(0,o.jsx)(r.rU,{to:"/movies/".concat(t),state:{from:e},children:c})},t)}))})}},544:function(n,t,e){e.r(t);var c=e(439),r=e(791),o=e(876),i=e(126),u=e(184);t.default=function(){var n=(0,r.useState)([]),t=(0,c.Z)(n,2),e=t[0],a=t[1];(0,r.useEffect)((function(){(0,o.Df)().then(a)}),[]);var f=e.results;return f?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("h1",{children:"Trending today"}),(0,u.jsx)(i.e,{moviesRes:f})]}):null}},876:function(n,t,e){e.d(t,{Df:function(){return o},M1:function(){return a},TP:function(){return u},V0:function(){return i},tx:function(){return f}});var c="https://api.themoviedb.org/3/",r="479d2ea313055d36744e81dfb1070205";function o(){return fetch("".concat(c,"trending/movie/week?api_key=").concat(r)).then((function(n){return n.json()}))}function i(n){return fetch("".concat(c,"/search/movie?api_key=").concat(r,"&query=").concat(n)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u0424\u0438\u043b\u044c\u043c\u043e\u0432 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ".concat(n," \u043d\u0435\u0442 :(")))}))}function u(n){return fetch("".concat(c,"/movie/").concat(n,"?api_key=").concat(r)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u0424\u0438\u043b\u044c\u043c\u0430 \u0441 ID ".concat(n," \u043d\u0435\u0442 :(")))}))}function a(n){return fetch("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.json()}))}function f(n){return fetch("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(r)).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=544.2b6596f5.chunk.js.map