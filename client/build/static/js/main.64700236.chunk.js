(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{26:function(e,a,t){e.exports=t(61)},31:function(e,a,t){},32:function(e,a,t){},51:function(e,a,t){},57:function(e,a,t){},58:function(e,a,t){},59:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(24),c=t.n(r),s=t(4),m=t(3),o=t(1),i=t(16);t(31);var u=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};t(32);var E=function({children:e}){return l.a.createElement("div",{style:{height:300,clear:"both",paddingTop:120,textAlign:"center"},className:"jumbotron"},e)},d=t(9),g=t.n(d),b={getFlashcards:function(){return g.a.get("/api/flashcards")},getBook:function(e){return g.a.get("/api/books/"+e)},deleteBook:function(e){return g.a.delete("/api/books/"+e)},translate:function(e){return g.a.post("/api/translate/translate",e)},login:function(e){return g.a.post("/api/user/login",e)},logout:function(e){return g.a.get("/api/user/logout",e)},signUp:function(e){return g.a.post("/api/user/signup",e)},getUser:function(){return g.a.get("/api/user/user-data")}};function p({fluid:e,children:a}){return l.a.createElement("div",{className:"container".concat(e?"-fluid":"")},a)}function f({fluid:e,children:a}){return l.a.createElement("div",{className:"row".concat(e?"-fluid":"")},a)}function h({size:e,children:a}){return l.a.createElement("div",{className:e.split(" ").map(e=>"col-"+e).join(" ")},a)}t(51);function v({children:e}){return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},e))}function N({children:e}){return l.a.createElement("li",{className:"list-group-item"},e)}function O(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function j(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:10},className:"btn btn-success"}),e.children)}var y=function(){var e=Object(n.useState)([]),a=Object(s.a)(e,2),t=a[0],r=(a[1],Object(n.useState)({})),c=Object(s.a)(r,2),o=c[0],d=c[1],g=Object(n.useState)([]),y=Object(s.a)(g,2),x=y[0],w=y[1];return Object(n.useEffect)(()=>{},[]),l.a.createElement(p,{fluid:!0},l.a.createElement(f,null,l.a.createElement(h,{size:"md-6"},l.a.createElement(E,null,l.a.createElement("h1",null,"Translate anything from English to French")),l.a.createElement("form",null,l.a.createElement(O,{onChange:function(e){var a=e.target,t=a.name,n=a.value;d(Object(i.a)(Object(i.a)({},o),{},{[t]:n}))},name:"phrase",placeholder:"Phrase(required)"}),l.a.createElement(j,{disabled:!o.phrase,onClick:function(e){e.preventDefault(),o.phrase&&b.translate({text:o.phrase}).then(e=>{console.log(e),console.log(e.data[0].translation[0].translation);var a=[...x,e.data[0].translation[0].translation];w(a)}).catch(e=>console.log(e))}},"Translate Phrase"))),l.a.createElement(h,{size:"md-6 sm-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"My Flashcard list")),t.length?l.a.createElement(v,null,t.map(e=>l.a.createElement(N,{key:e._id},l.a.createElement(m.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.phrase)),l.a.createElement(u,{onClick:()=>{return e=t._id,void b.deleteTranslate(e).then(e=>console.log(e)).catch(e=>console.log(e));var e}})))):l.a.createElement("h3",null,"No Flashcards to Display"),l.a.createElement(h,{size:"md-6 sm-12"},x.length?l.a.createElement(v,null,x.map((e,a)=>l.a.createElement(N,{key:"translate-"+a},e))):l.a.createElement("span",null,"No translations")))))};var x=function(e){var a=Object(n.useState)({}),t=Object(s.a)(a,2),r=t[0],c=t[1],i=Object(o.h)().bookid;return Object(n.useEffect)(()=>{b.getBook(i).then(e=>c(e.data)).catch(e=>console.log(e))},[]),l.a.createElement(p,{fluid:!0},l.a.createElement(f,null,l.a.createElement(h,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,r.title," by ",r.author)))),l.a.createElement(f,null,l.a.createElement(h,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,r.synopsis)))),l.a.createElement(f,null,l.a.createElement(h,{size:"md-2"},l.a.createElement(m.b,{to:"/"},"\u2190 Back to Authors"))))};var w=function(){return l.a.createElement(p,{fluid:!0},l.a.createElement(f,null,l.a.createElement(h,{size:"md-12"},l.a.createElement(E,null,l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44"))))))},C=Object(n.createContext)({email:"",setEmail:()=>{},loggedIn:!1,setLoggedIn:()=>{},name:"",setName:()=>{}});var k=function(e){var a=Object(n.useContext)(C),t=a.email,r=a.setEmail,c=a.loggedIn,s=a.setLoggedIn,m=(a.name,a.setName),o=Object(n.useRef)(),i=Object(n.useRef)(),u=Object(n.useRef)(),E={};e.className&&(E.className=e.className);var d=e.className?e.className+"-signup-email":"signup-email",g=e.className?e.className+"-signup-email-help":"signup-email-help",p=e.className?e.className+"-signup-password":"signup-password",f=e.className?e.className+"-signup-name":"signup-name",h=e=>{e.preventDefault(),b.signup({email:o.current.value,password:i.current.value,name:u.current.value}).then(e=>{r(e.data.email),s(!0),m(e.data.name)}).catch(e=>{console.log(e)})};return l.a.createElement(n.Fragment,null,c?l.a.createElement("h3",null,t):l.a.createElement("form",Object.assign({},E,{onSubmit:h}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:f},"Name"),l.a.createElement("input",{ref:u,type:"text",className:"form-control",id:f})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:d},"Email address"),l.a.createElement("input",{ref:o,type:"email",className:"form-control",id:d,"aria-describedby":g}),l.a.createElement("small",{id:g,className:"email-help-text form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:p},"Password"),l.a.createElement("input",{ref:i,type:"password",className:"form-control",id:p})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Sign Up")))};var F=function(e){var a=Object(n.useContext)(C).loggedIn;return l.a.createElement("div",{className:"container"},a&&l.a.createElement(o.a,{to:"/"}),l.a.createElement("h1",null,"WELCOME TO VOCABULARY BEE"),l.a.createElement("h1",null,"SignUp"),l.a.createElement("h3",null,"If you have an account please login above"),l.a.createElement(k,{className:"full-page-signup"}))};t(57);var I=function(){var e=Object(n.useState)(),a=Object(s.a)(e,2),t=a[0],r=a[1];return Object(n.useEffect)(()=>{b.getFlashcards().then(e=>{console.log(e.data),r(e.data)}).catch(e=>{console.log(e)})},[]),l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"HELLO ",JSON.stringify(t)))};t(58);class L extends n.Component{constructor(e){super(e),this.drawCard=this.drawCard.bind(this)}drawCard(){this.props.drawCard()}render(e){return l.a.createElement("div",{className:"buttonContainer"},l.a.createElement("button",{className:"btn",onClick:this.drawCard},"Draw Card"))}}var S=L,z=e=>l.a.createElement(p,{fluid:!0},l.a.createElement(f,null,l.a.createElement(h,{size:"md-6"},l.a.createElement("div",{className:"card-container"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"front"},l.a.createElement(I,null)),l.a.createElement("div",{className:"front back"},l.a.createElement(I,null)))),l.a.createElement(S,null))));n.Component;var B=z;t(59);var R=function(e){var a=Object(n.useContext)(C),t=a.email,r=a.setEmail,c=a.loggedIn,s=a.setLoggedIn,m=Object(o.g)(),i=Object(n.useRef)(),u=Object(n.useRef)(),E={};e.className&&(E.className=e.className);var d=e.className?e.className+"-login-email":"login-email",g=e.className?e.className+"-login-email-help":"login-email-help",p=e.className?e.className+"-login-password":"login-password",f=e=>{e.preventDefault(),b.login({email:i.current.value,password:u.current.value}).then(e=>{r(e.data.email),s(!0),m.push("/translate")}).catch(e=>{console.log(e)})};return l.a.createElement(n.Fragment,null,c?l.a.createElement("h3",null,t):l.a.createElement("form",Object.assign({},E,{onSubmit:f}),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:d},"Email address"),l.a.createElement("input",{ref:i,type:"email",className:"form-control",id:d,"aria-describedby":g}),l.a.createElement("small",{id:g,className:"email-help-text form-text text-muted"},"We'll never share your email with anyone else.")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:p},"Password"),l.a.createElement("input",{ref:u,type:"password",className:"form-control",id:p})),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Login"),l.a.createElement("button",{type:"submit",className:"btn btn-primary"},"Logout")))};var P=function(e){var a=Object(n.useContext)(C).loggedIn;return l.a.createElement("div",{className:"container"},a&&l.a.createElement(o.a,{to:"/login"}),l.a.createElement("h1",null,"Login"),l.a.createElement(R,{className:"full-page-login"}))};var T=function(e){var a=Object(n.useContext)(C),t=a.setEmail,r=a.setLoggedIn;return Object(n.useEffect)(()=>{b.logout().then(e=>{r(!1),t("")}).catch(e=>{console.log(e)})},[t,r]),l.a.createElement("div",null,l.a.createElement("p",null,"You are now logged out."))};t(60);var U=function(){var e=Object(n.useState)(!1),a=Object(s.a)(e,2),t=(a[0],a[1],Object(n.useContext)(C)),r=(t.email,t.loggedIn);return l.a.createElement("nav",{className:"navbar navbar-expand-lg"},l.a.createElement("a",{className:"navbar-brand",href:"/"},"Vocabulary-Bee"),r?l.a.createElement(m.b,{to:"/logout"},"Logout"):l.a.createElement(m.b,{to:"/login"},"Login"),l.a.createElement(m.b,{to:"/card"},"Flashcard"),l.a.createElement(m.b,{to:"/translate"},"Translate"),l.a.createElement(m.b,{to:"/quiz"},"Quiz"),l.a.createElement(m.b,{to:"/card"},"About Us"))};var A=function(){var e=Object(n.useState)(""),a=Object(s.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),i=Object(s.a)(c,2),u=i[0],E=i[1];return l.a.createElement(m.a,null,l.a.createElement(C.Provider,{value:{email:t,setEmail:r,loggedIn:u,setLoggedIn:E}},l.a.createElement("div",null,l.a.createElement(U,null),l.a.createElement(o.d,null,l.a.createElement(o.b,{exact:!0,path:"/translate"},l.a.createElement(y,null)),l.a.createElement(o.b,{exact:!0,path:"/login"},l.a.createElement(P,null)),l.a.createElement(o.b,{exact:!0,path:["/","/signup"]},l.a.createElement(F,null)),l.a.createElement(o.b,{exact:!0,path:"/books/:bookid"},l.a.createElement(x,null)),l.a.createElement(o.b,{exact:!0,path:"/card"},l.a.createElement(B,null)),l.a.createElement(o.b,{exact:!0,path:"/quiz"},l.a.createElement(I,null)),l.a.createElement(o.b,{exact:!0,path:"/logout"},l.a.createElement(T,null)),l.a.createElement(o.b,null,l.a.createElement(w,null))))))};c.a.render(l.a.createElement(A,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.64700236.chunk.js.map