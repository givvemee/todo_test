(this.webpackJsonpreact_toodo=this.webpackJsonpreact_toodo||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),o=c.n(n),s=c(6),i=c.n(s),r=(c(12),c(5)),a=c(3),d=c(0),u=function(e){var t=e.children;return Object(d.jsxs)("div",{className:"templates",children:[Object(d.jsx)("div",{className:"app-title",children:"To dos"}),Object(d.jsx)("div",{className:"content",children:t})]})},j=(c(14),c(15),c(16),c(17),c(2)),l=function(e){var t=e.onInsert,c=Object(n.useState)(""),o=Object(a.a)(c,2),s=o[0],i=o[1],r=Object(n.useCallback)((function(e){i(e.target.value)}),[]),u=Object(n.useCallback)((function(e){t(s),i(""),e.preventDefault()}),[t,s]);return Object(d.jsxs)("form",{className:"insert",onSubmit:u,children:[Object(d.jsx)("input",{placeholder:"enter something to do",onChange:r,value:s}),Object(d.jsx)("button",{type:"submit",children:Object(d.jsx)(j.c,{})})]})},b=c(7),O=c.n(b),h=function(e){var t=e.todo,c=e.removeTodo,n=e.onToggle,o=t.id,s=t.checked,i=t.text;return Object(d.jsxs)("div",{className:"listitem",children:[Object(d.jsxs)("div",{className:O()("checkbox",{checked:s}),onClick:function(){return n(o)},children:[s?Object(d.jsx)(j.a,{}):Object(d.jsx)(j.b,{}),Object(d.jsx)("div",{className:"text",children:i})]}),Object(d.jsx)("div",{className:"remove",onClick:function(){return c(o)},children:Object(d.jsx)(j.d,{})})]})},f=function(e){var t=e.todo,c=e.removeTodo,n=e.onToggle;return Object(d.jsx)("div",{className:"todolist",children:t.map((function(e){return Object(d.jsx)(h,{todo:e,removeTodo:c,onToggle:n},e.id)}))})},x=function(){var e=Object(n.useState)([{id:1,text:"study react",checked:!0},{id:2,text:"study javascript",checked:!0},{id:3,text:"study vue.js",checked:!1}]),t=Object(a.a)(e,2),c=t[0],o=t[1],s=Object(n.useRef)(4),i=Object(n.useCallback)((function(e){var t={id:s.current,text:e,checked:!1};o(c.concat(t)),s.current+=1}),[c]),j=Object(n.useCallback)((function(e){o(c.filter((function(t){return t.id!==e})))}),[c]),b=Object(n.useCallback)((function(e){o(c.map((function(t){return t.id===e?Object(r.a)(Object(r.a)({},t),{},{checked:!t.checked}):t})))}),[c]);return Object(d.jsxs)(u,{children:[Object(d.jsx)(l,{onInsert:i}),Object(d.jsx)(f,{todo:c,removeTodo:j,onToggle:b})]})},v=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;c(e),n(e),o(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),v()}],[[18,1,2]]]);
//# sourceMappingURL=main.0e733120.chunk.js.map