"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[736],{2736:function(e,t,r){r.r(t);var n=r(5861),a=r(9439),c=r(4687),u=r.n(c),s=r(2791),i=r(7689),o=r(9073),f=r(1207),p=r(184);t.default=function(){var e=(0,i.UO)().movieId,t=(0,s.useState)([]),r=(0,a.Z)(t,2),c=r[0],v=r[1];return(0,s.useEffect)((function(){(0,n.Z)(u().mark((function t(){var r,n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,f.np)(e);case 3:r=t.sent,n=r.results,v(n),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),o.Am.error("".concat(t.t0.message,". Movies loading failed, please try again"));case 11:case"end":return t.stop()}}),t,null,[[0,8]])})))()}),[e]),(0,p.jsxs)("div",{className:"ml-5",children:[(0,p.jsx)("h2",{className:"font-bold mt-3 text-xl mb-3",children:"Reviews"}),c.length>0?(0,p.jsx)("ul",{children:c.map((function(e){var t=e.author,r=e.content,n=e.id;return(0,p.jsxs)("li",{className:"mb-3",children:[(0,p.jsxs)("h3",{className:"font-bold",children:["Author: ",t]}),(0,p.jsx)("p",{children:r})]},n)}))}):(0,p.jsx)("p",{className:"mt-5 mb-5",children:"We dont have any reviews for this movie"})]})}},1207:function(e,t,r){r.d(t,{AR:function(){return s},Ai:function(){return i},Me:function(){return f},jC:function(){return o},np:function(){return p}});var n=r(5861),a=r(4687),c=r.n(a),u=r(1243);u.Z.defaults.baseURL="https://api.themoviedb.org/3",u.Z.defaults.params={api_key:"11546a486a09144867cb90a93b48d542"};var s=function(){var e=(0,n.Z)(c().mark((function e(){var t,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/trending/movie/day");case 2:return t=e.sent,r=t.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/search/movie?&query=".concat(t));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/credits?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.Z.get("/movie/".concat(t,"/reviews?"));case 2:return r=e.sent,n=r.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=736.5786918a.chunk.js.map