(function(t){function e(e){for(var r,a,i=e[0],s=e[1],u=e[2],d=0,l=[];d<i.length;d++)a=i[d],o[a]&&l.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(l.length)l.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-08a502b2":"76b66051","chunk-0d01e2a0":"c12a96ff","chunk-0d6d658c":"7c32eb14","chunk-11a34356":"76258085","chunk-1aa10266":"8168c7f8","chunk-1e804642":"1105ea83","chunk-2794c691":"9e437d48","chunk-2d0d338e":"05f452b5","chunk-2d0e5e97":"74e7661f","chunk-2d9e1d6a":"522d1f3f","chunk-2deea3cf":"24f0bdc5","chunk-3bb24a87":"ee98ac35","chunk-0458f749":"d1536fba","chunk-2d0aa5f4":"8f823b8e","chunk-36d8d44e":"fb8f1006","chunk-3c947d60":"9ccf50a5","chunk-4408d0f6":"0358f6c3","chunk-490e49ca":"c486d94e","chunk-60e039a0":"037702dd","chunk-6a27d422":"db69d1d8","chunk-79c61efe":"27632249","chunk-52fae7e1":"52141f60","chunk-63ee0d53":"c1e85617","chunk-721b809b":"7370fd79","chunk-b7def596":"4ccbf815","chunk-eeb3e8a0":"7ba9b4e6"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-08a502b2":1,"chunk-0d01e2a0":1,"chunk-11a34356":1,"chunk-2deea3cf":1,"chunk-3c947d60":1,"chunk-4408d0f6":1,"chunk-490e49ca":1,"chunk-60e039a0":1,"chunk-6a27d422":1,"chunk-79c61efe":1,"chunk-b7def596":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-08a502b2":"22572c50","chunk-0d01e2a0":"cb25b9b6","chunk-0d6d658c":"31d6cfe0","chunk-11a34356":"fd083355","chunk-1aa10266":"31d6cfe0","chunk-1e804642":"31d6cfe0","chunk-2794c691":"31d6cfe0","chunk-2d0d338e":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-2d9e1d6a":"31d6cfe0","chunk-2deea3cf":"c8388080","chunk-3bb24a87":"31d6cfe0","chunk-0458f749":"31d6cfe0","chunk-2d0aa5f4":"31d6cfe0","chunk-36d8d44e":"31d6cfe0","chunk-3c947d60":"e1cb7a9c","chunk-4408d0f6":"6cd21acb","chunk-490e49ca":"6b303a5c","chunk-60e039a0":"5bca9cba","chunk-6a27d422":"29831687","chunk-79c61efe":"f7066e06","chunk-52fae7e1":"31d6cfe0","chunk-63ee0d53":"31d6cfe0","chunk-721b809b":"31d6cfe0","chunk-b7def596":"5336ae0e","chunk-eeb3e8a0":"31d6cfe0"}[t]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){u=l[i],d=u.getAttribute("data-href");if(d===r||d===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[t],p.parentNode.removeChild(p),n(c)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=c);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(t),u=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ec-front-end-vue/dist/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=d;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"09f9":function(t,e,n){"use strict";var r=n("dae9"),a=n.n(r);a.a},"120f":function(t,e,n){"use strict";var r=n("38a8"),a=n.n(r);a.a},"2fa3":function(t,e,n){"use strict";n.r(e),n.d(e,"apiHelper",function(){return u}),n.d(e,"Toast",function(){return d});var r=n("bc3a"),a=n.n(r),o=n("3d20"),c=n.n(o),i="https://ec-website-api.herokuapp.com/api",s=a.a.create({baseURL:i});s.defaults.withCredentials=!0,s.interceptors.request.use(function(t){var e=localStorage.getItem("token");return e&&(t.headers["Authorization"]="Bearer ".concat(e)),t},function(t){return Promise.reject(t)});var u=s,d=c.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},"38a8":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bc3a"),o=n.n(a),c=n("a7fe"),i=n.n(c),s=(n("4989"),n("ab8b"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("main",{staticClass:"mt-5 bg-white",attrs:{role:"main"}},[n("router-view")],1),t._m(0)],1)}),u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"bg-dark text-light py-3"},[n("div",{staticClass:"text-right pr-5"},[n("div",[t._v("(聲明)本作品內圖片、內容等，純粹為團隊練習前端使用，不做任何商業用途。")])])])}],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-expand-lg fixed-top navbar-dark bg-dark justify-content-between"},[n("router-link",{staticClass:"text-white mr-auto",attrs:{to:"/"}},[t._v("品牌 LOGO")]),n("li",{staticClass:"mr-5",staticStyle:{"list-style-type":"none"}},[n("span",{staticClass:"badge badge-danger mx-1",staticStyle:{display:"none"},attrs:{id:"navbarCartItemNumber"}}),n("span",{staticClass:"text-white",staticStyle:{cursor:"pointer"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleSideCart(e)}}},[t._v("購物車")])]),t._m(0),n("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[n("div",{staticClass:"d-flex align-items-center"},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item dropdown"},[t.isLogin?[n("a",{staticClass:"btn btn-light dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.currentUser.name))]),n("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"navbarDropdown"}},[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("個人資訊")]),"admin"===t.currentUser.role?n("router-link",{staticClass:"dropdown-item",attrs:{to:"/admin/products"}},[t._v("管理員後台")]):t._e(),n("div",{staticClass:"dropdown-divider"}),n("a",{staticClass:"dropdown-item",on:{click:t.logout}},[t._v("登出")])],1)]:t._e()],2)])])])],1)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],p=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),f=n("2f62"),m=n("1157"),h=n.n(m);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach(function(e){Object(p["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var g,k,C=h.a,w={computed:v({cartItemNumber:function(){var t=this.$store.state.cartItemNumber;return console.log("computed cartItemNumber",t),C("#navbarCartItemNumber").html(t),this.$store.state.cartItemNumber>0?C("#navbarCartItemNumber").show(1e3):C("#navbarCartItemNumber").hide(),this.$store.state.cartItemNumber}},Object(f["b"])(["currentUser","isLogin"])),watch:{cartItemNumber:function(){}},methods:{toggleSideCart:function(){this.$root.$emit("toggleSideCart")},logout:function(){this.$store.commit("logout"),this.$router.push("/admin/signin")}}},y=w,x=(n("09f9"),n("2877")),_=Object(x["a"])(y,d,l,!1,null,"1fdc866c",null),I=_.exports,P={components:{Navbar:I}},O=P,S=Object(x["a"])(O,s,u,!1,null,null,null),E=S.exports,j=(n("96cf"),n("3b8d")),T=n("8c4f"),N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[n("form",{staticClass:"w-100",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit(e)}}},[t._m(0),n("div",{staticClass:"form-label-group mb-2"},[n("label",{attrs:{for:"email"}},[t._v("email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-label-group mb-3"},[n("label",{attrs:{for:"password"}},[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit"}},[t._v("Submit")]),n("div",{staticClass:"text-center mb-3"},[n("p",[n("router-link",{attrs:{to:"/signup"}},[t._v("Sign Up")])],1)]),n("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[t._v("© 2019-2020")])])])},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center mb-4"},[n("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Sign In")])])}],D={name:"SignIn",data:function(){return{email:"",password:""}},methods:{handleSubmit:function(t){var e=JSON.stringify({email:this.email,password:this.password});console.log("data",e)}}},U=D,A=Object(x["a"])(U,N,$,!1,null,null,null),H=A.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[n("Searchbar",{on:{"filter-search":t.filterSearch}}),n("CategoryTab",{attrs:{categories:t.categories},on:{"filter-category":t.filterCategory}}),n("SideCartPreview",{directives:[{name:"show",rawName:"v-show",value:t.showSideCart,expression:"showSideCart"}],attrs:{"initial-cart":t.cart},on:{clickDeleteItem:t.handleDeleteItem}}),n("div",{staticClass:"row"},t._l(t.filterProducts,function(e){return n("ProductsCard",{key:e.id,attrs:{"initial-product":e},on:{"add-to-cart":t.handleAddToCart}})}),1),n("div",{staticClass:"text-center"},[0===t.filterProducts.length?n("div",[t._v("喔！沒有此商品QAQ")]):t._e()])],1)},R=[],q=(n("7f7f"),n("2fa3")),B=n("ee21"),K=n("cc17"),z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-lg-4"},[n("div",{staticClass:"card mb-4"},[n("div",{staticClass:"w-100"},[n("router-link",{attrs:{to:{name:"product",params:{productId:t.product.id}}}},[n("div",{staticStyle:{width:"100%","padding-bottom":"100%","background-position":"center","background-repeat":"no-repeat","background-size":"cover"},style:{"background-image":"url("+t.product.image+")"}})])],1),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-text title-wrap font-weight-bold"},[n("router-link",{attrs:{to:{name:"product",params:{productId:t.product.id}}}},[t._v(t._s(t.product.name))])],1),n("span",{staticClass:"badge badge-secondary"},[t._v(t._s(t.product.Category.name))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.product.description))]),n("hr"),n("span",{staticClass:"float-right text-secondary card-text text-truncate"},[t._v("原價$ "+t._s(t.product.origin_price)+" 元")]),n("h5",{staticClass:"card-text text-truncate font-weight-bold text-success"},[t._v("NT$ "+t._s(t.product.sell_price)+" 元")])]),n("div",{staticClass:"card-footer"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col px-1"},[n("router-link",{staticClass:"btn btn-primary btn-block",attrs:{to:{name:"product",params:{productId:t.product.id}}}},[t._v("商品資訊")])],1),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-danger btn-block",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleAddToCart(t.product.id,1)}}},[t._v("放入購物車")])])])])])])},M=[],F={props:{initialProduct:{type:Object,required:!0}},data:function(){return{product:this.initialProduct}},methods:{handleAddToCart:function(t,e){var n=this;n.$emit("add-to-cart",t,e)}}},J=F,Q=Object(x["a"])(J,z,M,!1,null,null,null),G=Q.exports,X={},V=Object(x["a"])(X,g,k,!1,null,null,null),W=V.exports,Y=n("bf4e"),Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3"},[n("ul",{staticClass:"nav justify-content-center"},[n("li",{staticClass:"nav-item mx-1"},[n("a",{staticClass:"btn btn-outline-dark",attrs:{href:"#"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.filterCategory()}}},[t._v("所有商品")])]),t._l(t.categories,function(e){return n("li",{key:e.id,staticClass:"nav-item mx-1"},[n("a",{staticClass:"btn btn-outline-dark",attrs:{href:"#"},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.filterCategory(e.id)}}},[t._v(t._s(e.name))])])})],2)])},tt=[],et={props:{categories:{type:Array,required:!0}},methods:{filterCategory:function(t){this.$emit("filter-category",t)}}},nt=et,rt=(n("df27"),Object(x["a"])(nt,Z,tt,!1,null,"65c26d12",null)),at=rt.exports,ot=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3 text-center"},[n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"來尋寶吧~"},domProps:{value:t.inputText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.filterSearch(e)},input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.filterSearch(e)}}},[t._v("搜尋")])])])])},ct=[],it={data:function(){return{inputText:""}},methods:{filterSearch:function(){this.$emit("filter-search",this.inputText)}}},st=it,ut=Object(x["a"])(st,ot,ct,!1,null,null,null),dt=ut.exports,lt={data:function(){return{categories:[],products:[],filterProducts:[],cart:{},showSideCart:!1}},created:function(){this.fetchProducts()},mounted:function(){var t=this;this.$root.$on("toggleSideCart",function(){t.showSideCart=!t.showSideCart})},methods:{fetchProducts:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this,t.next=4,B["a"].getProducts();case 4:if(n=t.sent,console.log("商品資料",n),"OK"===n.statusText){t.next=8;break}throw new Error(statusText);case 8:e.products=n.data.products,e.filterProducts=e.products,e.cart=n.data.cart,e.categories=n.data.categories,e.$store.commit("setNavbarCartItemNumber",n.data.cart.items.length),t.next=18;break;case 15:t.prev=15,t.t0=t["catch"](0),q["Toast"].fire({type:"error",title:"無法取得所有商品資料，請稍後再試"});case 18:case"end":return t.stop()}},t,this,[[0,15]])}));function e(){return t.apply(this,arguments)}return e}(),handleDeleteItem:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=this,t.next=4,B["a"].deleteItem(e,n);case 4:if(a=t.sent,o=a.statusText,"OK"===o){t.next=8;break}throw new Error(o);case 8:r.fetchProducts(),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),q["Toast"].fire({type:"error",title:"無法刪除購物車商品，請稍後再試"});case 14:case"end":return t.stop()}},t,this,[[0,11]])}));function e(e,n){return t.apply(this,arguments)}return e}(),filterCategory:function(t){this.filterProducts=void 0!==t?this.products.filter(function(e){if(e.CategoryId===t)return e}):this.products},filterSearch:function(t){this.filterProducts=""!==t?this.products.filter(function(e){if(e.name.indexOf(t)>0||e.Category.name.indexOf(t)>0)return e}):this.products},handleAddToCart:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(e,n){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=this,t.next=4,K["a"].addToCart(e,n);case 4:if(a=t.sent,"OK"===a.statusText){t.next=7;break}throw new Error(statusText);case 7:q["Toast"].fire({type:"success",title:"商品成功加入購物車！"}),r.fetchProducts(),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),q["Toast"].fire({type:"error",title:"無法加入購物車，請稍後再試"});case 14:case"end":return t.stop()}},t,this,[[0,11]])}));function e(e,n){return t.apply(this,arguments)}return e}()},components:{ProductsCard:G,Pagination:W,SideCartPreview:Y["a"],CategoryTab:at,Searchbar:dt}},pt=lt,ft=Object(x["a"])(pt,L,R,!1,null,null,null),mt=ft.exports,ht=n("d427");r["a"].use(f["a"]);var bt=new f["a"].Store({state:{currentUser:{id:-1,name:"",email:"",address:"",role:""},isLogin:!1,token:"",cartItemNumber:0},mutations:{setNavbarCartItemNumber:function(t,e){console.log("setNavbarCartItemNumber",e),t.cartItemNumber=e},setCurrentUser:function(t,e){console.log("setCurrentUser"),t.currentUser={id:e.id,name:e.name,email:e.email,address:e.address,role:e.role},t.isLogin=!0,t.token=localStorage.getItem("token")},logout:function(t){console.log("vuex-logout"),t.currentUser={},t.isLogin=!1,t.token="",localStorage.removeItem("token"),r["a"].axios.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("token")}},actions:{fetchCurrentUser:function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(e){var n,a,o,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,r["a"].axios.defaults.headers.common["Authorization"]="Bearer "+localStorage.getItem("token"),t.next=5,ht["a"].getCurrentUser();case 5:if(a=t.sent,o=a.data,c=a.statusText,console.log("fetchCurrentUser",o),"OK"===c&&"success"===o.status){t.next=11;break}throw new Error("statusText: ".concat(c,", ").concat(o.message));case 11:n("setCurrentUser",{id:o.user.id,name:o.user.name,email:o.user.email,address:o.user.address,role:o.user.role}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](1),console.log(t.t0);case 17:case"end":return t.stop()}},t,null,[[1,14]])}));function e(e){return t.apply(this,arguments)}return e}()}});r["a"].use(T["a"]);var vt=function(t,e,n){console.log("checkIsAdmin");var r=bt.state.currentUser;"admin"===r.role?n():n("/admin/signin")},gt=new T["a"]({linkExactActiveClass:"active",routes:[{path:"/",name:"root",redirect:"/products"},{path:"/signin",name:"sign-in",component:H},{path:"/signup",name:"sign-up",component:function(){return n.e("chunk-2d0d338e").then(n.bind(null,"5c9c"))}},{path:"/products",name:"products",component:mt},{path:"/cart",name:"cart",component:function(){return Promise.all([n.e("chunk-3bb24a87"),n.e("chunk-60e039a0")]).then(n.bind(null,"b789"))}},{path:"/order/create",name:"orderCreate",component:function(){return Promise.all([n.e("chunk-3bb24a87"),n.e("chunk-6a27d422")]).then(n.bind(null,"aaff"))}},{path:"/order",name:"orderDetail",component:function(){return Promise.all([n.e("chunk-3bb24a87"),n.e("chunk-3c947d60")]).then(n.bind(null,"d3bb"))}},{path:"/payment",name:"payment",component:function(){return Promise.all([n.e("chunk-3bb24a87"),n.e("chunk-2d0aa5f4")]).then(n.bind(null,"1175"))}},{path:"/products/:productId",name:"product",component:function(){return n.e("chunk-721b809b").then(n.bind(null,"d2f1"))}},{path:"/admin",exact:!0,redirect:"/admin/products"},{path:"/admin/signup",name:"admin-signup",component:function(){return n.e("chunk-63ee0d53").then(n.bind(null,"0b3a"))}},{path:"/admin/signin",name:"admin-signin",component:function(){return n.e("chunk-1aa10266").then(n.bind(null,"d122"))}},{path:"/admin/products",name:"admin-products",component:function(){return n.e("chunk-11a34356").then(n.bind(null,"724a"))},beforeEnter:vt},{path:"/admin/products/new",name:"admin-products-new",component:function(){return n.e("chunk-eeb3e8a0").then(n.bind(null,"46a9"))},beforeEnter:vt},{path:"/admin/products/:productId",name:"admin-product",component:function(){return Promise.all([n.e("chunk-3bb24a87"),n.e("chunk-4408d0f6")]).then(n.bind(null,"e1a3"))},beforeEnter:vt},{path:"/admin/products/:productId/edit",name:"admin-product-edit",component:function(){return n.e("chunk-1e804642").then(n.bind(null,"b6a9"))},beforeEnter:vt},{path:"/admin/categories",name:"admin-categories",component:function(){return n.e("chunk-b7def596").then(n.bind(null,"34c9"))},beforeEnter:vt},{path:"/admin/coupons",name:"admin-coupons",component:function(){return n.e("chunk-08a502b2").then(n.bind(null,"e48a"))},beforeEnter:vt},{path:"/admin/coupons/new",name:"admin-coupons-new",component:function(){return n.e("chunk-2d9e1d6a").then(n.bind(null,"b6d2"))},beforeEnter:vt},{path:"/admin/coupons/:couponId",name:"admin-coupon",component:function(){return Promise.all([n.e("chunk-3bb24a87"),n.e("chunk-0458f749")]).then(n.bind(null,"6bde"))},beforeEnter:vt},{path:"/admin/coupons/:couponId/edit",name:"admin-coupon-edit",component:function(){return n.e("chunk-0d6d658c").then(n.bind(null,"24fe"))},beforeEnter:vt},{path:"/admin/discounts",name:"admin-discounts",component:function(){return n.e("chunk-2deea3cf").then(n.bind(null,"d12a"))},beforeEnter:vt},{path:"/admin/discounts/new",name:"admin-discounts-new",component:function(){return n.e("chunk-52fae7e1").then(n.bind(null,"392f"))},beforeEnter:vt},{path:"/admin/discounts/:discountId",name:"admin-discount",component:function(){return Promise.all([n.e("chunk-3bb24a87"),n.e("chunk-36d8d44e")]).then(n.bind(null,"b6b2"))},beforeEnter:vt},{path:"/admin/discounts/:discountId/edit",name:"admin-discount-edit",component:function(){return n.e("chunk-2794c691").then(n.bind(null,"711a"))},beforeEnter:vt},{path:"/admin/orders",name:"admin-orders",component:function(){return Promise.all([n.e("chunk-3bb24a87"),n.e("chunk-490e49ca")]).then(n.bind(null,"860c"))},beforeEnter:vt},{path:"/admin/orders/:orderId",name:"admin-order",component:function(){return Promise.all([n.e("chunk-3bb24a87"),n.e("chunk-79c61efe")]).then(n.bind(null,"0750"))},beforeEnter:vt},{path:"/admin/users",name:"admin-users",component:function(){return n.e("chunk-0d01e2a0").then(n.bind(null,"6e64"))},beforeEnter:vt},{path:"*",name:"not-found",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}}]});gt.beforeEach(function(){var t=Object(j["a"])(regeneratorRuntime.mark(function t(e,n,r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.path.indexOf("admin")<0)){t.next=3;break}return r(),t.abrupt("return");case 3:if(console.log("store.state.token:",bt.state.token.slice(0,10)),bt.state.token){t.next=7;break}return t.next=7,bt.dispatch("fetchCurrentUser");case 7:r();case 8:case"end":return t.stop()}},t)}));return function(e,n,r){return t.apply(this,arguments)}}());var kt=gt;r["a"].config.productionTip=!1,o.a.defaults.withCredentials=!0,r["a"].use(i.a,o.a),new r["a"]({router:kt,store:bt,render:function(t){return t(E)}}).$mount("#app")},"5cd9":function(t,e,n){},bf4e:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sideCart"}},[n("div",{staticClass:"container py-5"},[n("h4",{staticClass:"mt-5"},[t._v("購物車")]),n("hr"),t._l(t.initialCart.items,function(e){return n("div",{key:e.id,staticClass:"w-100"},[n("router-link",{attrs:{to:{name:"product",params:{productId:e.id}}}},[t._v(t._s(e.name)+" X "+t._s(e.CartItem.quantity))]),n("div",{staticClass:"w-100 text-right"},[n("button",{staticClass:"btn btn-danger",on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.deleteItem(e.CartItem.id)}}},[t._v("刪除")])]),n("hr")],1)}),n("router-link",{staticClass:"w-100 btn btn-danger",attrs:{to:"/cart"}},[t._v("訂單結帳")])],2)])},a=[],o=(n("bc3a"),{props:{initialCart:{type:Object,required:!0}},data:function(){return{cart:{}}},methods:{deleteItem:function(t){this.$emit("clickDeleteItem",this.initialCart.id,t)}}}),c=o,i=(n("120f"),n("2877")),s=Object(i["a"])(c,r,a,!1,null,"4f527861",null);e["a"]=s.exports},cc17:function(t,e,n){"use strict";var r=n("2fa3");e["a"]={getCart:function(){return r["apiHelper"].get("/cart")},addToCart:function(t,e){return r["apiHelper"].post("/cart",{productId:t,quantity:e})},addItemToCart:function(t,e){return r["apiHelper"].post("/cart/".concat(t,"/cartItem/").concat(e,"/add"),{cartId:t,cartItemId:e})},subItemFromCart:function(t,e){return r["apiHelper"].post("/cart/".concat(t,"/cartItem/").concat(e,"/sub"),{cartId:t,cartItemId:e})},deleteItemFromCart:function(t,e){return r["apiHelper"].delete("/cart/".concat(t,"/cartItem/").concat(e),{cartId:t,cartItemId:e})},putCart:function(t){return r["apiHelper"].put("/cart",t)}}},d427:function(t,e,n){"use strict";var r=n("2fa3");e["a"]={getUsers:function(){return r["apiHelper"].get("/admin/users")},putUser:function(t){return r["apiHelper"].put("/admin/user",t)},getCurrentUser:function(){return r["apiHelper"].get("/get_current_user")}}},dae9:function(t,e,n){},df27:function(t,e,n){"use strict";var r=n("5cd9"),a=n.n(r);a.a},ee21:function(t,e,n){"use strict";var r=n("2fa3");e["a"]={getProducts:function(){return r["apiHelper"].get("/products")},getProduct:function(t){return r["apiHelper"].get("/products/".concat(t))},deleteItem:function(t,e){return r["apiHelper"].delete("/cart/".concat(t,"/cartItem/").concat(e))}}}});
//# sourceMappingURL=app.c78a12f1.js.map