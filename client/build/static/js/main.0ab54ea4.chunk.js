(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,s){"use strict";s.r(t);var a=s(2),c=s(29),n=s.n(c),r=s(104),i=s(17),o=s(57),j=s.n(o).a.create({baseURL:"https://post-app-task.herokuapp.com/api",responseType:"json"}),l=function(e){var t=e.queryKey;return j.get("/user/".concat(t[1],"/posts"))},u=function(e){return j.post("/post",e)},d=function(e){var t=e.id,s=e.data;return j.patch("/post/".concat(t),s)},m=s(20),b=s.n(m),O=s(13),h=s(10),p=s(31),f=s(11);var x=s(0);function v(){var e=Object(a.useState)(""),t=Object(i.a)(e,2),s=t[0],c=t[1],n="61a2641458c1d4456e460861",r=function(e,t){var s=Object(f.useQueryClient)(),a=Object(f.useMutation)(t,{onMutate:function(){var t=Object(p.a)(b.a.mark((function t(a){var c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.cancelQueries(e);case 2:return c=s.getQueryData(e),s.setQueryData(e,(function(e){var t=Object(h.a)({},e);return t.data.data=[a].concat(Object(O.a)(t.data.data)),console.log("clone",t),t})),t.abrupt("return",{previousData:c});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onError:function(t,a,c){s.setQueryData(e,c.previousData)},onSuccess:function(){},onSettled:function(){s.invalidateQueries(e)}});return a}(["posts",n],u);return Object(x.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),s){var t={_id:Math.floor(100*Math.random()),title:s,content:"",createdAt:(new Date).toISOString(),like:[],comment:[],user:n,userData:{firstName:"Waheed",lastName:"Ahmad"}};r.mutate(t),c("")}},className:"addPost",children:[Object(x.jsxs)("div",{className:"head",children:[Object(x.jsx)("div",{className:"circle",children:Object(x.jsx)("img",{src:"/assets/images/profile.jpeg",alt:"profile"})}),Object(x.jsx)("h1",{children:"What is on your mind ?"})]}),Object(x.jsx)("input",{type:"text",className:"messageInput",value:s,placeholder:"Start writing from here ...",onChange:function(e){return c(e.target.value)},autoFocus:!0}),Object(x.jsxs)("div",{className:"footer",children:[Object(x.jsxs)("button",{type:"button",className:"photoBtn",children:[Object(x.jsx)("img",{src:"/assets/images/pictureIcon.png",alt:"icon"}),Object(x.jsx)("span",{children:"Photo/Video"})]}),Object(x.jsx)("button",{disabled:""===s,className:"postBtn",type:"submit",children:"Post it"})]})]})}var g=s(103),N=s(105);function k(e){var t=e._id,s=e.like,c=e.createdAt,n=e.message,r=e.updatePost,o=e.commentData,j=e.userId,l=e.postId,u=e.name;console.log(u);var d=Object(a.useState)(!1),m=Object(i.a)(d,2),b=m[0],h=m[1],p=Object(a.useState)(n||""),f=Object(i.a)(p,2),v=f[0],k=f[1],y=s.includes(j);return Object(x.jsxs)("div",{className:"flexCenter commentSec",children:[Object(x.jsx)("img",{className:"profile",src:"/assets/images/profile.jpeg",alt:"profile"}),Object(x.jsxs)("div",{className:"message",children:[Object(x.jsxs)("div",{className:"flexBetweenCenter",children:[Object(x.jsx)("h3",{children:u}),Object(x.jsxs)("p",{children:[Object(g.a)(new Date,Object(N.a)(c))," ago"]})]}),Object(x.jsx)("h5",{children:"Professional-Student"}),b?Object(x.jsx)("form",{onSubmit:function(){if(v){var e=o.filter((function(e){return e._id===t&&(e.message=v),e}));r.mutate({id:l,data:{comment:e}}),h(!1)}},children:Object(x.jsx)("input",{className:"editInput",type:"text",value:v,onChange:function(e){return k(e.target.value)},autoFocus:!0})}):Object(x.jsx)("h4",{children:n}),Object(x.jsxs)("div",{className:"flexCenter commentActions",children:[Object(x.jsxs)("div",{className:"item",children:[s.length," Likes"]}),Object(x.jsxs)("button",{onClick:function(){var e=o.filter((function(e){return e._id===t&&(e.like=y?e.like.filter((function(e){return e!=j})):[].concat(Object(O.a)(e.like),[j])),e}));r.mutate({id:l,data:{comment:e}})},children:[Object(x.jsx)("img",{src:y?"/assets/images/heart-like.svg":"/assets/images/heart.svg",alt:"heart"}),Object(x.jsx)("span",{children:"Like"})]}),Object(x.jsxs)("button",{onClick:function(){return h((function(e){return!e}))},children:[Object(x.jsx)("img",{src:"/assets/images/edit.svg",alt:"edit"}),Object(x.jsx)("span",{children:"Edit"})]}),Object(x.jsxs)("button",{onClick:function(){var e=o.filter((function(e){return e._id!==t}));r.mutate({id:l,data:{comment:e}})},children:[Object(x.jsx)("img",{src:"/assets/images/trash.svg",alt:"trash"}),Object(x.jsx)("span",{children:"Delete"})]})]})]})]})}function y(e){var t=e.view,s=e.commentData,c=e.userId,n=e.updatePost,r=e.postId,o=e.name,j=Object(a.useState)(""),l=Object(i.a)(j,2),u=l[0],d=l[1];return Object(x.jsxs)("div",{className:t?"comment show":"comment",children:[Object(x.jsxs)("form",{onSubmit:function(e){if(e.preventDefault(),u){var t={message:u,_id:Math.floor(100*Math.random()),createdAt:(new Date).toISOString(),like:[]};n.mutate({id:r,data:{comment:[].concat(Object(O.a)(s),[t])}}),d("")}},className:"addComment",children:[Object(x.jsx)("img",{className:"profile",src:"/assets/images/profile.jpeg",alt:"profile"}),Object(x.jsx)("input",{type:"text",placeholder:"Add a comment",value:u,onChange:function(e){return d(e.target.value)},autoFocus:!0})]}),s.length>0&&s.map((function(e){return Object(x.jsx)(k,Object(h.a)(Object(h.a)({},e),{},{updatePost:n,userId:c,postId:r,commentData:s,name:o}))}))]})}function D(e){var t=e.title,s=e.like,c=e.comment,n=e.createdAt,r=e.userId,o=e.userData,j=e._id,l=Object(a.useState)(!1),u=Object(i.a)(l,2),m=u[0],v=u[1],k=s.includes(r),D=o.firstName,C=o.lastName,S="".concat(D," ").concat(C),w=function(e,t){var s=Object(f.useQueryClient)(),a=Object(f.useMutation)(t,{onMutate:function(){var t=Object(p.a)(b.a.mark((function t(a){var c,n,r;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a.id,n=a.data,t.next=3,s.cancelQueries(e);case 3:return r=s.getQueryData(e),s.setQueryData(e,(function(e){var t=Object(h.a)({},e),s=t.data.data.reduce((function(e,t){return t._id===c&&(t=Object(h.a)(Object(h.a)({},t),n)),[].concat(Object(O.a)(e),[t])}),[]);return console.log(s,"updated"),t.data.data=s,t})),t.abrupt("return",{previousData:r});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),onError:function(t,a,c){s.setQueryData(e,c.previousData)},onSuccess:function(){},onSettled:function(){s.invalidateQueries(e)}});return a}(["posts",r],d);return Object(x.jsxs)("div",{className:"post",children:[Object(x.jsxs)("div",{className:"content",children:[Object(x.jsxs)("div",{className:"head",children:[Object(x.jsxs)("div",{className:"profile",children:[Object(x.jsx)("img",{src:"/assets/images/profile.jpeg",alt:"profile",className:"cover"}),Object(x.jsxs)("div",{className:"right",children:[Object(x.jsx)("h3",{children:S}),Object(x.jsxs)("div",{className:"flexCenter",children:[Object(x.jsx)("img",{src:"/assets/images/marker.svg"}),Object(x.jsx)("span",{children:"OH , USA"})]}),Object(x.jsxs)("p",{children:[Object(g.a)(new Date,Object(N.a)(n))," ago"]})]})]}),Object(x.jsx)("img",{src:"/assets/images/moreIcon.svg",alt:"moreIcon",className:"pointer"})]}),Object(x.jsx)("h1",{children:t}),Object(x.jsxs)("div",{className:"counter",children:[Object(x.jsxs)("h5",{children:[s.length," Likes"]}),Object(x.jsx)("span",{children:"."}),Object(x.jsxs)("h5",{children:[c.length," comments"]})]})]}),Object(x.jsxs)("div",{className:"footer",children:[Object(x.jsxs)("div",{className:"action",children:[Object(x.jsxs)("div",{onClick:function(){var e={id:j,data:{like:k?s.filter((function(e){return e!=r})):[].concat(Object(O.a)(s),[r])}};w.mutate(e)},className:"flexCenter",children:[Object(x.jsx)("img",{src:k?"/assets/images/heart-like.svg":"/assets/images/heart.svg",alt:"heart"}),Object(x.jsx)("span",{children:"Like"})]}),Object(x.jsxs)("div",{onClick:function(){return v((function(e){return!e}))},className:"flexCenter",children:[Object(x.jsx)("img",{src:"/assets/images/comment.svg",alt:"heart"}),Object(x.jsx)("span",{children:"Comment"})]})]}),Object(x.jsx)(y,{view:m,commentData:c,userId:r,updatePost:w,postId:j,name:S})]})]})}function C(e){var t=e.height,s=void 0===t?"70vh":t;return Object(x.jsx)("div",{className:"loader",style:{height:s},children:Object(x.jsxs)("div",{className:"sk-chase",children:[Object(x.jsx)("div",{className:"sk-chase-dot"}),Object(x.jsx)("div",{className:"sk-chase-dot"}),Object(x.jsx)("div",{className:"sk-chase-dot"}),Object(x.jsx)("div",{className:"sk-chase-dot"}),Object(x.jsx)("div",{className:"sk-chase-dot"}),Object(x.jsx)("div",{className:"sk-chase-dot"})]})})}function S(){var e,t="61a2641458c1d4456e460861",s=Object(f.useQuery)(["posts",t],l),a=s.data,c=s.isLoading,n=null===a||void 0===a||null===(e=a.data)||void 0===e?void 0:e.data;return Object(x.jsxs)("section",{className:"postWrapper",children:[c&&Object(x.jsx)(C,{}),c||n.map((function(e){return Object(x.jsx)(D,Object(h.a)(Object(h.a)({},e),{},{userId:t}),null===e||void 0===e?void 0:e._id)}))]})}s(90);function w(){return Object(x.jsxs)("div",{className:"landingPageWrapper",children:[Object(x.jsx)(v,{}),Object(x.jsx)(S,{})]})}function I(){return Object(x.jsx)(r.c,{children:Object(x.jsx)(r.a,{path:"/",component:w})})}function Q(){var e=Object(r.d)().pathname;return Object(a.useEffect)((function(){window.scrollTo(0,0)}),[e]),null}var P=function(){return Object(x.jsxs)("div",{className:"app",children:[Object(x.jsx)(Q,{}),Object(x.jsx)(I,{})]})},_=s(15),A=Object(_.a)(),M=(s(99),new f.QueryClient);M.setDefaultOptions({refetchOnWindowFocus:!1,refetchOnReconnect:!1,retry:!1,staleTime:6e3}),n.a.render(Object(x.jsx)(r.b,{forceRefresh:!0,history:A,children:Object(x.jsx)(f.QueryClientProvider,{client:M,children:Object(x.jsx)(P,{})})}),document.getElementById("root"))},90:function(e,t,s){},99:function(e,t,s){}},[[100,1,2]]]);
//# sourceMappingURL=main.0ab54ea4.chunk.js.map