(this.webpackJsonp007_react_redux_blog=this.webpackJsonp007_react_redux_blog||[]).push([[0],{32:function(e,t,n){e.exports=n(60)},60:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(7),s=n.n(c),u=n(6),o=n(3),i=n(29),l=n(31),p=Object(o.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_POSTS":return t.payload;default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_USER":return[].concat(Object(l.a)(e),[t.payload]);default:return e}}}),d=n(8),f=n(9),m=n(11),h=n(10),v=n(12),b=n(5),y=n.n(b),O=n(13),j=n(17),E=n.n(j),w=n(30),x=n.n(w).a.create({baseURL:"http://jsonplaceholder.typicode.com/",headers:{"Content-Type":"application/x-www-form-urlencoded"}}),g=function(){return function(){var e=Object(O.a)(y.a.mark((function e(t){var n;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get("/posts");case 2:n=e.sent,t({type:"FETCH_POSTS",payload:n.data});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(O.a)(y.a.mark((function t(n){var r;return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.get("/users/".concat(e));case 2:r=t.sent,n({type:"FETCH_USER",payload:r.data});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){var e=this.props.user;return e?a.a.createElement("div",{className:"header"},e.name):null}}]),t}(a.a.Component),C=Object(u.b)((function(e,t){return{user:e.users.find((function(e){return e.id===t.userId}))}}))(_),N=function(e){function t(){return Object(d.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(f.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchPostsAndUsers()}},{key:"renderList",value:function(){return this.props.posts.map((function(e){return a.a.createElement("div",{className:"item",key:e.id},a.a.createElement("i",{className:"large middle aligned icon user"}),a.a.createElement("div",{className:"content"},a.a.createElement("div",{className:"description"},a.a.createElement("h2",null,e.title),a.a.createElement("p",null,e.body)),a.a.createElement(C,{userId:e.userId})))}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"ui relaxed divided list"},this.renderList())}}]),t}(a.a.Component),S=Object(u.b)((function(e){return{posts:e.posts}}),{fetchPostsAndUsers:function(){return function(){var e=Object(O.a)(y.a.mark((function e(t,n){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(g());case 2:E.a.chain(E.a.map(n().posts)).map("userId").uniq().forEach((function(e){return t(k(e))})).value();case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}})(N),T=function(){return a.a.createElement("div",{className:"ui container"},a.a.createElement(S,null))},U=Object(o.d)(p,Object(o.a)(i.a));s.a.render(a.a.createElement(u.a,{store:U},a.a.createElement(T,null)),document.querySelector("#root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.9ac5f46f.chunk.js.map