(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(2),c=a(6),o=a(1),l=(a(14),a(8)),u=a.n(l),d=a(0),m=function(e){var t=e.user;return Object(d.jsx)("a",{className:"UserInfo",href:"mailto:".concat(t.email),children:t.name})},j=function(e){var t=e.todo;return Object(d.jsxs)("article",{"data-id":t.id,className:u()("TodoInfo",{"TodoInfo--completed":t.completed}),children:[Object(d.jsx)("h2",{className:"TodoInfo__title",children:t.title}),t.user&&Object(d.jsx)(m,{user:t.user})]})},b=function(e){var t=e.todos;return Object(d.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(d.jsx)(j,{todo:e})}))})},h=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];function O(e){return h.find((function(t){return t.id===e}))||null}var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){return Object(c.a)(Object(c.a)({},e),{},{user:O(e.userId)})})),p=f.map((function(e){return e.id})).sort((function(e,t){return e-t}))[f.length-1],x=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(0),c=Object(s.a)(i,2),l=c[0],u=c[1],m=Object(o.useState)(f),j=Object(s.a)(m,2),x=j[0],v=j[1],S=Object(o.useState)(p),y=Object(s.a)(S,2),g=y[0],N=y[1],I=Object(o.useState)(!1),C=Object(s.a)(I,2),_=C[0],k=C[1],D=Object(o.useState)(!1),T=Object(s.a)(D,2),w=T[0],B=T[1];return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Add todo form"}),Object(d.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){if(null===e||void 0===e||e.preventDefault(),""===a.trim()||0===l)return""===a.trim()&&k(!0),void(0===l&&B(!0));N((function(e){return e+1}));var t={id:g+1,title:a,completed:!1,userId:l,user:O(l)};v((function(e){return[].concat(Object(r.a)(e),[t])})),n(""),u(0),k(!1),B(!1)},children:[Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"title",children:"Title: "}),Object(d.jsx)("input",{type:"text","data-cy":"titleInput",id:"title",placeholder:"Enter a title",value:a,onChange:function(e){n(e.target.value),""!==e.target.value.trim()&&k(!1)}}),_&&Object(d.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(d.jsxs)("div",{className:"field",children:[Object(d.jsx)("label",{htmlFor:"user",children:"User: "}),Object(d.jsxs)("select",{"data-cy":"userSelect",id:"user",value:l,onChange:function(e){u(+e.target.value),0!==+e.target.value&&B(!1)},children:[Object(d.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),h.map((function(e){return Object(d.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),w&&Object(d.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(d.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(d.jsx)(b,{todos:x})]})};i.a.render(Object(d.jsx)(x,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.2a9346d3.chunk.js.map