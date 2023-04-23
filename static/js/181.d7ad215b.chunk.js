"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[181],{9760:function(e,r,t){var n=t(8457),a=t(7317),s=t(184);r.Z=function(){return(0,s.jsxs)(n.Z,{severity:"error",children:[(0,s.jsx)(a.Z,{children:"Error"}),"Something went wrong \u2014 ",(0,s.jsx)("strong",{children:"check it out!"})]})}},5271:function(e,r,t){var n=t(4554),a=t(1614),s=t(184);r.Z=function(e){var r=e.children;return(0,s.jsx)(n.Z,{component:"section",sx:{py:"40px"},children:(0,s.jsx)(a.Z,{maxWidth:"lg",children:r})})}},7181:function(e,r,t){t.r(r),t.d(r,{default:function(){return h}});var n=t(1087),a=t(7689),s=t(1213),c=t(5861),i=t(9439),o=t(4687),u=t.n(o),l=t(2791),x=t(1207),d=t(3804),p=t(6151),f=t(9760),v=t(5271),m=t(184),h=function(){var e,r,t=function(){var e=(0,l.useState)({}),r=(0,i.Z)(e,2),t=r[0],n=r[1],s=(0,l.useState)(!1),o=(0,i.Z)(s,2),d=o[0],p=o[1],f=(0,a.UO)().movieId,v=(0,a.TH)();return(0,l.useEffect)((function(){(0,c.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,x.jC)(f);case 3:r=e.sent,n(r),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),p(!0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))()}),[f]),{movie:t,location:v,isError:d}}(),o=t.movie,h=t.location,j=t.isError,g=null!==(e=null===(r=h.state)||void 0===r?void 0:r.from)&&void 0!==e?e:d.Z.HOME,w=o.poster_path,Z=o.title,b=o.genres,k=o.overview,y=o.release_date,_=o.vote_average;return j?(0,m.jsx)(f.Z,{}):(0,m.jsxs)(v.Z,{children:[(0,m.jsxs)(p.Z,{component:n.rU,to:g,variant:"contained",color:"primary",sx:{display:"inline-flex",alignItems:"center",gap:"5px"},children:[(0,m.jsx)(s.A65,{}),"Go Back"]}),w&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"ml-3 mt-3 flex",children:[(0,m.jsx)("div",{children:(0,m.jsx)("img",{src:"http://image.tmdb.org/t/p/w500"+w,alt:Z})}),(0,m.jsxs)("div",{className:"flex flex-col gap-8 ml-5 last:max-w-[60%]",children:[(0,m.jsx)("h2",{className:"font-bold text-2xl",children:Z}),(0,m.jsxs)("p",{className:"text-xl",children:["Release Date: ",y]}),(0,m.jsxs)("p",{className:"text-xl",children:[" IMDb: ",_.toFixed(2)]}),(0,m.jsxs)("p",{className:"text-xl",children:["Genres: ",b.map((function(e){return e.name})).join(", ")]}),(0,m.jsxs)("p",{className:"text-xl",children:["Overview: ",k]})]})]}),(0,m.jsxs)("div",{className:"border-b border-t border-black mt-2 mb-10",children:[(0,m.jsx)("p",{className:"ml-5 mt-1 mb-1 font-bold text-xl",children:"Additional information"}),(0,m.jsxs)("ul",{children:[(0,m.jsx)("li",{children:(0,m.jsx)(n.rU,{to:"cast",className:"ml-5 hover:text-green-800 focus:text-green-800 text-xl",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(n.rU,{to:"reviews",className:"ml-5 hover:text-green-800 focus:text-green-800 text-xl",children:"Reviews"})})]})]})]}),(0,m.jsx)(a.j3,{})]})}},1207:function(e,r,t){t.d(r,{AR:function(){return i},Ai:function(){return o},Me:function(){return l},jC:function(){return u},np:function(){return x}});var n=t(5861),a=t(4687),s=t.n(a),c=t(1243);c.Z.defaults.baseURL="https://api.themoviedb.org/3",c.Z.defaults.params={api_key:"11546a486a09144867cb90a93b48d542"};var i=function(){var e=(0,n.Z)(s().mark((function e(){var r,t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/trending/movie/day");case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/search/movie?&query=".concat(r));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),u=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"?"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/credits?"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),x=function(){var e=(0,n.Z)(s().mark((function e(r){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("/movie/".concat(r,"/reviews?"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=181.d7ad215b.chunk.js.map