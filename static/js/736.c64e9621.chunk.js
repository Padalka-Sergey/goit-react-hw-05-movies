"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{736:function(n,t,e){e.r(t),e.d(t,{default:function(){return l}});var c,r,o=e(439),i=e(791),a=e(689),u=e(876),s=e(168),f=e(444),h=f.ZP.section(c||(c=(0,s.Z)(["\n  padding: 0 16px 5px;\n  border-bottom: 1px solid black;\n"])));h.displayName="Section";var p=f.ZP.img(r||(r=(0,s.Z)(["\n  max-width: 180px;\n  height: auto;\n"])));p.displayName="Img";var d=e(184),l=function(){var n=(0,a.UO)().movieId,t=(0,i.useState)(null),e=(0,o.Z)(t,2),c=e[0],r=e[1];if((0,i.useEffect)((function(){(0,u.M1)(n).then(r)}),[n]),!c)return null;var s=c.cast;return(0,d.jsx)(h,{children:(0,d.jsx)("ul",{children:s.map((function(n){var t=n.cast_id,e=n.name,c=n.character,r=n.profile_path,o="https://image.tmdb.org/t/p/w500".concat(r);return(0,d.jsxs)("li",{children:[r&&(0,d.jsx)(p,{src:o,alt:e}),!r&&(0,d.jsx)(p,{src:"https://cdn-icons-png.flaticon.com/512/6813/6813432.png",alt:e}),(0,d.jsx)("p",{children:e}),c&&(0,d.jsxs)("p",{children:["Character: ",c]})]},t)}))})})}},876:function(n,t,e){e.d(t,{Df:function(){return o},M1:function(){return u},TP:function(){return a},V0:function(){return i},tx:function(){return s}});var c="https://api.themoviedb.org/3/",r="479d2ea313055d36744e81dfb1070205";function o(){return fetch("".concat(c,"trending/movie/week?api_key=").concat(r)).then((function(n){return n.json()}))}function i(n){return fetch("".concat(c,"/search/movie?api_key=").concat(r,"&query=").concat(n)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u0424\u0438\u043b\u044c\u043c\u043e\u0432 \u0441 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u0435\u043c ".concat(n," \u043d\u0435\u0442 :(")))}))}function a(n){return fetch("".concat(c,"/movie/").concat(n,"?api_key=").concat(r)).then((function(t){return t.ok?t.json():Promise.reject(new Error("\u0424\u0438\u043b\u044c\u043c\u0430 \u0441 ID ".concat(n," \u043d\u0435\u0442 :(")))}))}function u(n){return fetch("".concat(c,"/movie/").concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.json()}))}function s(n){return fetch("".concat(c,"/movie/").concat(n,"/reviews?api_key=").concat(r)).then((function(n){return n.json()}))}}}]);
//# sourceMappingURL=736.c64e9621.chunk.js.map