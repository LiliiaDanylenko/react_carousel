(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{10:function(t,e,n){},12:function(t,e,n){"use strict";n.r(e);var i=n(4),a=n.n(i),c=n(2),s=n(1),r=(n(9),n(10),n(0)),l=function(t){var e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,l=t.animationDuration,u=t.infinite,m=Object(s.useState)(0),o=Object(c.a)(m,2),b=o[0],p=o[1];return Object(r.jsxs)("div",{className:"Carousel",children:[Object(r.jsx)("ul",{className:"Carousel__list",style:{width:"".concat(a*i,"px")},children:e.map((function(t){var e=t.match(/(\d+)/),n=parseInt(e[0],10);return Object(r.jsx)("li",{style:{transform:"translateX(".concat(-a*b,"px)"),transition:"transform ".concat(l,"ms")},children:Object(r.jsx)("img",{src:t,alt:n.toString(),style:{width:"".concat(a,"px")}})},n)}))}),Object(r.jsxs)("div",{children:[Object(r.jsx)("button",{type:"button",className:"Carousel__button",disabled:0===b&&!u,onClick:function(){return p(u&&0===b?e.length-i:function(t){return t-n>=0?t-n:0})},children:"Prev"}),Object(r.jsx)("button",{type:"button",className:"Carousel__button","data-cy":"next",disabled:b===e.length-i&&!u,onClick:function(){return u&&b===e.length-i?p(0):p((function(t){return t+n<=e.length-i?t+n:e.length-i}))},children:"Next"})]})]})},u=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],m=function(){var t=Object(s.useState)(3),e=Object(c.a)(t,2),n=e[0],i=e[1],a=Object(s.useState)(3),m=Object(c.a)(a,2),o=m[0],b=m[1],p=Object(s.useState)(130),j=Object(c.a)(p,2),g=j[0],h=j[1],d=Object(s.useState)(1e3),O=Object(c.a)(d,2),x=O[0],f=O[1],_=Object(s.useState)(!1),v=Object(c.a)(_,2),S=v[0],y=v[1];return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(u.length," images")}),Object(r.jsx)(l,{images:u,step:n,frameSize:o,itemWidth:g,animationDuration:x,infinite:S}),Object(r.jsxs)("form",{className:"App__form",children:[Object(r.jsxs)("label",{htmlFor:"itemWidth",children:["Item Width:",Object(r.jsx)("input",{className:"App__input",type:"number",name:"itemWidth",id:"itemWidth",min:60,max:250,value:g,onChange:function(t){h(+t.target.value)}})]}),Object(r.jsxs)("label",{htmlFor:"frameSize",children:["Frame Size:",Object(r.jsx)("input",{className:"App__input",type:"number",name:"frameSize",id:"frameSize",min:1,max:10,value:o,onChange:function(t){b(+t.target.value)}})]}),Object(r.jsxs)("label",{htmlFor:"step",children:["Step:",Object(r.jsx)("input",{className:"App__input",type:"number",name:"step",id:"step",min:1,max:9,value:n,onChange:function(t){i(+t.target.value)}})]}),Object(r.jsxs)("label",{htmlFor:"animationDuration",children:["Animation Duration:",Object(r.jsx)("input",{className:"App__input",type:"number",name:"animationDuration",id:"animationDuration",min:300,max:5e3,step:100,value:x,onChange:function(t){f(+t.target.value)}})]}),Object(r.jsx)("button",{type:"button",className:"App__button",onClick:function(){y(!S)},children:S?"Disable infinite scrolling":"Enable infinite scrolling"})]})]})};a.a.render(Object(r.jsx)(m,{}),document.getElementById("root"))},9:function(t,e,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.f64a28b8.chunk.js.map