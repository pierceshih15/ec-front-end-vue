(function(t){function e(e){for(var r,a,c=e[0],s=e[1],u=e[2],d=0,l=[];d<c.length;d++)a=c[d],o[a]&&l.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);p&&p(e);while(l.length)l.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function c(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-088266a2":"fe7fa576","chunk-0d6d658c":"8eab6af3","chunk-1aa10266":"1bcc4e09","chunk-1e804642":"e8a4b874","chunk-2794c691":"29026fe3","chunk-2a16bb2e":"d2cd180a","chunk-2d0aa5f4":"ccc41636","chunk-2d0d338e":"823f980f","chunk-2d0e5e97":"e0b0749f","chunk-2d21de4f":"53304235","chunk-2d9e1d6a":"242de83e","chunk-380e0471":"6de97c57","chunk-52fae7e1":"618e7480","chunk-63ee0d53":"67fcf7f1","chunk-7dc4bcf6":"20bf2979","chunk-b43abb68":"62d31a73","chunk-eeb3e8a0":"87703b71","chunk-f8335f52":"f221dfe4","chunk-0458f749":"9eb78316","chunk-0633678c":"248ff258","chunk-36d8d44e":"33b590ee","chunk-3c947d60":"d545f456","chunk-410f91b3":"8e25ed4b","chunk-455910aa":"b9805803","chunk-60e039a0":"9a4f834d","chunk-6a27d422":"a18c3049","chunk-e6470172":"5810be08"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-088266a2":1,"chunk-2a16bb2e":1,"chunk-380e0471":1,"chunk-7dc4bcf6":1,"chunk-b43abb68":1,"chunk-0633678c":1,"chunk-3c947d60":1,"chunk-410f91b3":1,"chunk-455910aa":1,"chunk-60e039a0":1,"chunk-6a27d422":1,"chunk-e6470172":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-088266a2":"83480963","chunk-0d6d658c":"31d6cfe0","chunk-1aa10266":"31d6cfe0","chunk-1e804642":"31d6cfe0","chunk-2794c691":"31d6cfe0","chunk-2a16bb2e":"4132bc10","chunk-2d0aa5f4":"31d6cfe0","chunk-2d0d338e":"31d6cfe0","chunk-2d0e5e97":"31d6cfe0","chunk-2d21de4f":"31d6cfe0","chunk-2d9e1d6a":"31d6cfe0","chunk-380e0471":"f0028c26","chunk-52fae7e1":"31d6cfe0","chunk-63ee0d53":"31d6cfe0","chunk-7dc4bcf6":"48b6f3b7","chunk-b43abb68":"3a632a3a","chunk-eeb3e8a0":"31d6cfe0","chunk-f8335f52":"31d6cfe0","chunk-0458f749":"31d6cfe0","chunk-0633678c":"47ae4c8f","chunk-36d8d44e":"31d6cfe0","chunk-3c947d60":"84e3db1e","chunk-410f91b3":"44dc4c9b","chunk-455910aa":"32563729","chunk-60e039a0":"76588251","chunk-6a27d422":"bf2a7c96","chunk-e6470172":"98f3da8a"}[t]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return e()}var l=document.getElementsByTagName("style");for(c=0;c<l.length;c++){u=l[c],d=u.getAttribute("data-href");if(d===r||d===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(t),u=function(e){d.onerror=d.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");i.type=r,i.request=a,n[1](i)}o[t]=void 0}};var l=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ec-front-end-vue/dist/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var l=0;l<u.length;l++)e(u[l]);var p=d;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0819":function(t,e,n){"use strict";var r=n("b8db"),a=n.n(r);a.a},"0830":function(t,e,n){},"114e":function(t,e,n){"use strict";var r=n("f9ac"),a=n.n(r);a.a},"1bd4":function(t,e,n){},2375:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex align-items-center justify-content-center",staticStyle:{height:"20em"}},[n("i",{staticClass:"fas fa-paw loader1"}),n("i",{staticClass:"fas fa-paw loader2"}),n("i",{staticClass:"fas fa-paw loader3"})])}],o=(n("3fd1"),n("2877")),i={},c=Object(o["a"])(i,r,a,!1,null,"1f8bd84e",null);e["a"]=c.exports},"2fa3":function(t,e,n){"use strict";n.r(e),n.d(e,"apiHelper",function(){return u}),n.d(e,"Toast",function(){return d});var r=n("bc3a"),a=n.n(r),o=n("3d20"),i=n.n(o),c="https://ec-website-api.herokuapp.com/api",s=a.a.create({baseURL:c});s.defaults.withCredentials=!0,s.interceptors.request.use(function(t){var e=localStorage.getItem("token");return e&&(t.headers["Authorization"]="Bearer ".concat(e)),t},function(t){return Promise.reject(t)});var u=s,d=i.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},"3a2c":function(t,e,n){},"3fd1":function(t,e,n){"use strict";var r=n("0830"),a=n.n(r);a.a},5530:function(t,e,n){"use strict";var r=n("3a2c"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),a=n("bc3a"),o=n.n(a),i=n("a7fe"),c=n.n(i),s=(n("4989"),n("ab8b"),n("d940"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("main",{staticClass:"main-content",attrs:{role:"main"}},[n("router-view")],1),t._m(0)],1)}),u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer-content"},[n("div",{staticClass:"state"},[t._v("(聲明)本作品內圖片、內容等，純粹為團隊練習前端使用，不做任何商業用途。")])])}],d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar fixed-top navbar-expand-lg navbar-dark"},[n("router-link",{staticClass:"logo mr-auto",attrs:{to:"/"}},[t._v("品牌 LOGO")]),n("li",{staticClass:"cart-content"},[n("span",{staticClass:"badge badge-warning",attrs:{id:"navbarCartItemNumber"}}),n("span",{staticClass:"cart-text text-white",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.toggleSideCart(e)}}},[n("i",{staticClass:"fas fa-shopping-cart"})])]),t._m(0),n("div",{staticClass:"navbar-collapse collapse",attrs:{id:"navbarSupportedContent"}},[n("div",{staticClass:"d-flex align-items-center"},[n("ul",{staticClass:"navbar-nav mr-auto"},[n("li",{staticClass:"nav-item dropdown"},[t.isLogin?[n("a",{staticClass:"btn btn-light dropdown-toggle",attrs:{href:"#",id:"navbarDropdown",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[t._v(t._s(t.currentUser.name))]),n("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"navbarDropdown"}},[n("a",{staticClass:"dropdown-item",attrs:{href:"#"}},[t._v("個人資訊")]),"admin"===t.currentUser.role?n("router-link",{staticClass:"dropdown-item",attrs:{to:"/admin/products"}},[t._v("管理員後台")]):t._e(),n("div",{staticClass:"dropdown-divider"}),n("a",{staticClass:"dropdown-item",on:{click:t.logout}},[t._v("登出")])],1)]:t._e()],2)])])])],1)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],p=(n("8e6e"),n("ac6a"),n("456d"),n("bd86")),f=n("2f62"),m=n("1157"),h=n.n(m);function b(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),n.push.apply(n,r)}return n}function v(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?b(n,!0).forEach(function(e){Object(p["a"])(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):b(n).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}var g=h.a,k={computed:v({cartItemNumber:function(){var t=this.$store.state.cartItemNumber;return console.log("computed cartItemNumber",t),g("#navbarCartItemNumber").html(t),this.$store.state.cartItemNumber>0?g("#navbarCartItemNumber").show(1e3):g("#navbarCartItemNumber").hide(),this.$store.state.cartItemNumber}},Object(f["b"])(["currentUser","isLogin"])),watch:{cartItemNumber:function(){}},methods:{toggleSideCart:function(){this.$root.$emit("toggleSideCart")},logout:function(){this.$store.commit("logout"),this.$router.push("/admin/signin")}}},w=k,C=(n("114e"),n("2877")),y=Object(C["a"])(w,d,l,!1,null,"57c9d4ae",null),x=y.exports,_=O()?"mobile":"desktop",I=parseInt(sessionStorage.getItem("userPageView"));isNaN(I)?sessionStorage.setItem("userPageView",1):sessionStorage.setItem("userPageView",I+1),I=parseInt(sessionStorage.getItem("userPageView")),"mobile"===_&&1===I&&(window.location="https://ec-website-api.herokuapp.com/redirect-back");var P={components:{Navbar:x}};function O(){var t=!1;return function(e){(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(e.substr(0,4)))&&(t=!0)}(navigator.userAgent||navigator.vendor||window.opera),t}var S=P,E=(n("f4b0"),Object(C["a"])(S,s,u,!1,null,"2374f689",null)),j=E.exports,N=(n("96cf"),n("3b8d")),T=n("8c4f"),$=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[n("form",{staticClass:"w-100",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit(e)}}},[t._m(0),n("div",{staticClass:"form-label-group mb-2"},[n("label",{attrs:{for:"email"}},[t._v("email")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{id:"email",name:"email",type:"email",placeholder:"email",required:"",autofocus:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),n("div",{staticClass:"form-label-group mb-3"},[n("label",{attrs:{for:"password"}},[t._v("Password")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{id:"password",name:"password",type:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),n("button",{staticClass:"btn btn-lg btn-primary btn-block mb-3",attrs:{type:"submit"}},[t._v("Submit")]),n("div",{staticClass:"text-center mb-3"},[n("p",[n("router-link",{attrs:{to:"/signup"}},[t._v("Sign Up")])],1)]),n("p",{staticClass:"mt-5 mb-3 text-muted text-center"},[t._v("© 2019-2020")])])])},U=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-center mb-4"},[n("h1",{staticClass:"h3 mb-3 font-weight-normal"},[t._v("Sign In")])])}],D={name:"SignIn",data:function(){return{email:"",password:""}},methods:{handleSubmit:function(t){var e=JSON.stringify({email:this.email,password:this.password});console.log("data",e)}}},q=D,A=Object(C["a"])(q,$,U,!1,null,null,null),H=A.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container py-5"},[n("Searchbar",{on:{"filter-search":t.filterSearch}}),n("CategoryTab",{attrs:{categories:t.categories},on:{"filter-category":t.filterCategory}}),n("SideCartPreview",{directives:[{name:"show",rawName:"v-show",value:t.showSideCart,expression:"showSideCart"}],attrs:{"initial-cart":t.cart},on:{clickDeleteItem:t.handleDeleteItem}}),n("div",{staticClass:"row"},t._l(t.filterProducts,function(e){return n("ProductsCard",{key:e.id,attrs:{"initial-product":e},on:{"add-to-cart":t.handleAddToCart}})}),1),t.isLoading?n("Spinner"):t._e(),n("div",{staticClass:"text-center"},[t.isNoProduct?n("div",[t._v("喔！沒有此商品QAQ")]):t._e()])],1)},z=[],R=(n("7f7f"),n("2fa3")),F=n("ee21"),B=n("cc17"),K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 col-lg-4"},[n("div",{staticClass:"card mb-4"},[n("div",{staticClass:"w-100"},[n("router-link",{attrs:{to:{name:"product",params:{productId:t.product.id}}}},[n("div",{staticStyle:{width:"100%","padding-bottom":"100%","background-position":"center","background-repeat":"no-repeat","background-size":"cover"},style:{"background-image":"url("+t.product.image+")"}})])],1),n("div",{staticClass:"card-body"},[n("h4",{staticClass:"card-text title-wrap font-weight-bold"},[n("router-link",{attrs:{to:{name:"product",params:{productId:t.product.id}}}},[t._v(t._s(t.product.name))])],1),n("span",{staticClass:"badge badge-secondary"},[t._v(t._s(t.product.Category.name))]),n("p",{staticClass:"card-text"},[t._v(t._s(t.product.description))]),n("hr"),n("span",{staticClass:"float-right text-secondary card-text text-truncate"},[t._v("原價$ "+t._s(t.product.origin_price)+" 元")]),n("h5",{staticClass:"card-text text-truncate font-weight-bold text-success"},[t._v("NT$ "+t._s(t.product.sell_price)+" 元")])]),n("div",{staticClass:"card-footer"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col px-1"},[n("router-link",{staticClass:"btn btn-primary btn-block",attrs:{to:{name:"product",params:{productId:t.product.id}}}},[t._v("商品資訊")])],1),n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-danger btn-block",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleAddToCart(t.product.id,1)}}},[t._v("放入購物車")])])])])])])},M=[],V={props:{initialProduct:{type:Object,required:!0}},data:function(){return{product:this.initialProduct}},methods:{handleAddToCart:function(t,e){var n=this;n.$emit("add-to-cart",t,e)}}},J=V,Q=Object(C["a"])(J,K,M,!1,null,null,null),G=Q.exports,X=n("bf4e"),W=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3"},[n("ul",{staticClass:"nav justify-content-center"},[n("label",{staticClass:"mx-1",on:{click:function(e){return e.stopPropagation(),t.filterCategory()}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],staticClass:"d-none",attrs:{type:"radio",value:"所有商品"},domProps:{checked:t._q(t.picked,"所有商品")},on:{change:function(e){t.picked="所有商品"}}}),n("div",{staticClass:"btn btn-outline-dark"},[t._v("所有商品")])]),t._l(t.categories,function(e){return n("label",{key:e.id,staticClass:"mx-1",on:{click:function(n){return n.stopPropagation(),t.filterCategory(e.id)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.picked,expression:"picked"}],staticClass:"d-none",attrs:{type:"radio"},domProps:{value:e.id,checked:t._q(t.picked,e.id)},on:{change:function(n){t.picked=e.id}}}),n("div",{staticClass:"btn btn-outline-dark"},[t._v(t._s(e.name))])])})],2)])},Y=[],Z={props:{categories:{type:Array,required:!0}},data:function(){return{picked:""}},methods:{filterCategory:function(t){this.$emit("filter-category",t)}}},tt=Z,et=(n("0819"),Object(C["a"])(tt,W,Y,!1,null,"08a92e0a",null)),nt=et.exports,rt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-3 text-center"},[n("div",{staticClass:"input-group mb-3"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputText,expression:"inputText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"來尋寶吧~"},domProps:{value:t.inputText},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.filterSearch(e)},input:function(e){e.target.composing||(t.inputText=e.target.value)}}}),n("div",{staticClass:"input-group-append"},[n("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.filterSearch(e)}}},[t._v("搜尋")])])])])},at=[],ot={data:function(){return{inputText:""}},methods:{filterSearch:function(){this.$emit("filter-search",this.inputText)}}},it=ot,ct=Object(C["a"])(it,rt,at,!1,null,null,null),st=ct.exports,ut=n("2375"),dt={data:function(){return{categories:[],products:[],filterProducts:[],cart:{},showSideCart:!1,isLoading:!0,isNoProduct:!1,filterInputText:"",filterCategoryId:void 0}},created:function(){this.fetchProducts()},mounted:function(){var t=this;this.$root.$on("toggleSideCart",function(){t.showSideCart=!t.showSideCart})},methods:{fetchProducts:function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(){var e,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this,t.next=4,F["a"].getProducts();case 4:if(n=t.sent,e.isNoProduct=!1,console.log("商品資料",n),"OK"===n.statusText){t.next=9;break}throw new Error(n.statusText);case 9:e.products=n.data.products,e.filterProducts=e.products,e.cart=n.data.cart,e.categories=n.data.categories,e.$store.commit("setNavbarCartItemNumber",n.data.cart.items.length),e.isLoading=!1,this.checkIsNoProduct(),t.next=21;break;case 18:t.prev=18,t.t0=t["catch"](0),R["Toast"].fire({type:"error",title:"無法取得所有商品資料，請稍後再試"});case 21:case"end":return t.stop()}},t,this,[[0,18]])}));function e(){return t.apply(this,arguments)}return e}(),handleDeleteItem:function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(e,n){var r,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=this,t.next=4,F["a"].deleteItem(e,n);case 4:if(a=t.sent,o=a.statusText,"OK"===o){t.next=8;break}throw new Error(o);case 8:r.fetchProducts(),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),R["Toast"].fire({type:"error",title:"無法刪除購物車商品，請稍後再試"});case 14:case"end":return t.stop()}},t,this,[[0,11]])}));function e(e,n){return t.apply(this,arguments)}return e}(),filterCategory:function(t){this.filterCategoryId=t,this.handleFilterProducts(),this.checkIsNoProduct()},filterSearch:function(t){this.filterInputText=t,this.handleFilterProducts(),this.checkIsNoProduct()},handleAddToCart:function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(e,n){var r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,r=this,t.next=4,B["a"].addToCart(e,n);case 4:if(a=t.sent,"OK"===a.statusText){t.next=7;break}throw new Error(a.statusText);case 7:R["Toast"].fire({type:"success",title:"商品成功加入購物車！"}),r.fetchProducts(),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),R["Toast"].fire({type:"error",title:"無法加入購物車，請稍後再試"});case 14:case"end":return t.stop()}},t,this,[[0,11]])}));function e(e,n){return t.apply(this,arguments)}return e}(),handleFilterProducts:function(){var t=this;t.filterProducts=t.products,t.isNoProduct=!1,void 0!==t.filterCategoryId&&(t.filterProducts=t.filterProducts.filter(function(e){if(e.CategoryId===t.filterCategoryId)return e})),""!==t.filterInputText&&(t.filterProducts=t.filterProducts.filter(function(e){if(e.name.indexOf(t.filterInputText)>0||e.Category.name.indexOf(t.filterInputText)>0)return e}))},checkIsNoProduct:function(){0===this.filterProducts.length&&(this.isNoProduct=!0)}},components:{ProductsCard:G,SideCartPreview:X["a"],CategoryTab:nt,Searchbar:st,Spinner:ut["a"]}},lt=dt,pt=Object(C["a"])(lt,L,z,!1,null,null,null),ft=pt.exports,mt=n("d427");r["a"].use(f["a"]);var ht=new f["a"].Store({state:{currentUser:{id:-1,name:"",email:"",address:"",role:""},isLogin:!1,token:"",cartItemNumber:0},mutations:{setNavbarCartItemNumber:function(t,e){console.log("setNavbarCartItemNumber",e),t.cartItemNumber=e},setCurrentUser:function(t,e){console.log("setCurrentUser"),t.currentUser={id:e.id,name:e.name,email:e.email,address:e.address,role:e.role},t.isLogin=!0,t.token=localStorage.getItem("token")},logout:function(t){console.log("vuex-logout"),t.currentUser={},t.isLogin=!1,t.token="",localStorage.removeItem("token")}},actions:{fetchCurrentUser:function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(e){var n,r,a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.prev=1,t.next=4,mt["a"].getCurrentUser();case 4:if(r=t.sent,a=r.data,o=r.statusText,console.log("fetchCurrentUser",a),"OK"===o&&"success"===a.status){t.next=10;break}throw new Error("statusText: ".concat(o,", ").concat(a.message));case 10:n("setCurrentUser",{id:a.user.id,name:a.user.name,email:a.user.email,address:a.user.address,role:a.user.role}),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](1),console.log(t.t0);case 16:case"end":return t.stop()}},t,null,[[1,13]])}));function e(e){return t.apply(this,arguments)}return e}()}});r["a"].use(T["a"]);var bt=function(t,e,n){console.log("checkIsAdmin");var r=ht.state.currentUser;"admin"===r.role?n():n("/admin/signin")},vt=new T["a"]({linkExactActiveClass:"active",routes:[{path:"/",name:"root",redirect:"/products"},{path:"/signin",name:"sign-in",component:H},{path:"/signup",name:"sign-up",component:function(){return n.e("chunk-2d0d338e").then(n.bind(null,"5c9c"))}},{path:"/products",name:"products",component:ft},{path:"/cart",name:"cart",component:function(){return Promise.all([n.e("chunk-f8335f52"),n.e("chunk-60e039a0")]).then(n.bind(null,"b789"))}},{path:"/order/create",name:"orderCreate",component:function(){return Promise.all([n.e("chunk-f8335f52"),n.e("chunk-6a27d422")]).then(n.bind(null,"aaff"))}},{path:"/order",name:"orderDetail",component:function(){return Promise.all([n.e("chunk-f8335f52"),n.e("chunk-3c947d60")]).then(n.bind(null,"d3bb"))}},{path:"/payment",name:"payment",component:function(){return n.e("chunk-2d0aa5f4").then(n.bind(null,"1175"))}},{path:"/products/:productId",name:"product",component:function(){return n.e("chunk-2d21de4f").then(n.bind(null,"d2f1"))}},{path:"/admin",exact:!0,redirect:"/admin/products"},{path:"/admin/signup",name:"admin-signup",component:function(){return n.e("chunk-63ee0d53").then(n.bind(null,"0b3a"))}},{path:"/admin/signin",name:"admin-signin",component:function(){return n.e("chunk-1aa10266").then(n.bind(null,"d122"))}},{path:"/admin/products",name:"admin-products",component:function(){return n.e("chunk-380e0471").then(n.bind(null,"724a"))},beforeEnter:bt},{path:"/admin/products/new",name:"admin-products-new",component:function(){return n.e("chunk-eeb3e8a0").then(n.bind(null,"46a9"))},beforeEnter:bt},{path:"/admin/products/:productId",name:"admin-product",component:function(){return Promise.all([n.e("chunk-f8335f52"),n.e("chunk-455910aa")]).then(n.bind(null,"e1a3"))},beforeEnter:bt},{path:"/admin/products/:productId/edit",name:"admin-product-edit",component:function(){return n.e("chunk-1e804642").then(n.bind(null,"b6a9"))},beforeEnter:bt},{path:"/admin/categories",name:"admin-categories",component:function(){return n.e("chunk-7dc4bcf6").then(n.bind(null,"34c9"))},beforeEnter:bt},{path:"/admin/coupons",name:"admin-coupons",component:function(){return n.e("chunk-2a16bb2e").then(n.bind(null,"e48a"))},beforeEnter:bt},{path:"/admin/coupons/new",name:"admin-coupons-new",component:function(){return n.e("chunk-2d9e1d6a").then(n.bind(null,"b6d2"))},beforeEnter:bt},{path:"/admin/coupons/:couponId",name:"admin-coupon",component:function(){return Promise.all([n.e("chunk-f8335f52"),n.e("chunk-0458f749")]).then(n.bind(null,"6bde"))},beforeEnter:bt},{path:"/admin/coupons/:couponId/edit",name:"admin-coupon-edit",component:function(){return n.e("chunk-0d6d658c").then(n.bind(null,"24fe"))},beforeEnter:bt},{path:"/admin/discounts",name:"admin-discounts",component:function(){return n.e("chunk-b43abb68").then(n.bind(null,"d12a"))},beforeEnter:bt},{path:"/admin/discounts/new",name:"admin-discounts-new",component:function(){return n.e("chunk-52fae7e1").then(n.bind(null,"392f"))},beforeEnter:bt},{path:"/admin/discounts/:discountId",name:"admin-discount",component:function(){return Promise.all([n.e("chunk-f8335f52"),n.e("chunk-36d8d44e")]).then(n.bind(null,"b6b2"))},beforeEnter:bt},{path:"/admin/discounts/:discountId/edit",name:"admin-discount-edit",component:function(){return n.e("chunk-2794c691").then(n.bind(null,"711a"))},beforeEnter:bt},{path:"/admin/orders",name:"admin-orders",component:function(){return Promise.all([n.e("chunk-f8335f52"),n.e("chunk-0633678c")]).then(n.bind(null,"860c"))},beforeEnter:bt},{path:"/admin/orders/:orderId",name:"admin-order",component:function(){return Promise.all([n.e("chunk-f8335f52"),n.e("chunk-410f91b3")]).then(n.bind(null,"0750"))},beforeEnter:bt},{path:"/admin/dashboard",name:"admin-dashboard",component:function(){return Promise.all([n.e("chunk-f8335f52"),n.e("chunk-e6470172")]).then(n.bind(null,"3394"))},beforeEnter:bt},{path:"/admin/users",name:"admin-users",component:function(){return n.e("chunk-088266a2").then(n.bind(null,"6e64"))},beforeEnter:bt},{path:"*",name:"not-found",component:function(){return n.e("chunk-2d0e5e97").then(n.bind(null,"9703"))}}]});vt.beforeEach(function(){var t=Object(N["a"])(regeneratorRuntime.mark(function t(e,n,r){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(!(e.path.indexOf("admin")<0)){t.next=3;break}return r(),t.abrupt("return");case 3:if(console.log("store.state.token:",ht.state.token.slice(0,10)),ht.state.token){t.next=7;break}return t.next=7,ht.dispatch("fetchCurrentUser");case 7:r();case 8:case"end":return t.stop()}},t)}));return function(e,n,r){return t.apply(this,arguments)}}());var gt=vt;r["a"].config.productionTip=!1,o.a.defaults.withCredentials=!0,r["a"].use(c.a,o.a),new r["a"]({router:gt,store:ht,render:function(t){return t(j)}}).$mount("#app")},b8db:function(t,e,n){},bf4e:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"sideCart"}},[n("div",{staticClass:"container py-5"},[n("h4",{staticClass:"mt-4"},[t._v("Shopping Cart")]),n("hr"),t._l(t.initialCart.items,function(e){return n("div",{key:e.id,staticClass:"w-100"},[n("router-link",{staticClass:"items",attrs:{to:{name:"product",params:{productId:e.id}}}},[t._v(t._s(e.name)+" X "+t._s(e.CartItem.quantity))]),n("div",{staticClass:"mt-1 text-right"},[n("button",{staticClass:"btn btn-danger",on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.deleteItem(e.CartItem.id)}}},[t._v("刪除")])]),n("hr")],1)}),n("router-link",{staticClass:"btn btn-info btn-block",attrs:{to:"/cart"}},[t._v("訂單結帳")])],2)])},a=[],o={props:{initialCart:{type:Object,required:!0}},data:function(){return{cart:{}}},methods:{deleteItem:function(t){this.$emit("clickDeleteItem",this.initialCart.id,t)}}},i=o,c=(n("5530"),n("2877")),s=Object(c["a"])(i,r,a,!1,null,"18fd6817",null);e["a"]=s.exports},cc17:function(t,e,n){"use strict";var r=n("2fa3");e["a"]={getCart:function(){return r["apiHelper"].get("/cart")},addToCart:function(t,e){return r["apiHelper"].post("/cart",{productId:t,quantity:e})},addItemToCart:function(t,e){return r["apiHelper"].post("/cart/".concat(t,"/cartItem/").concat(e,"/add"),{cartId:t,cartItemId:e})},subItemFromCart:function(t,e){return r["apiHelper"].post("/cart/".concat(t,"/cartItem/").concat(e,"/sub"),{cartId:t,cartItemId:e})},deleteItemFromCart:function(t,e){return r["apiHelper"].delete("/cart/".concat(t,"/cartItem/").concat(e),{cartId:t,cartItemId:e})},putCart:function(t){return r["apiHelper"].put("/cart",t)}}},d427:function(t,e,n){"use strict";var r=n("2fa3");e["a"]={getUsers:function(){return r["apiHelper"].get("/admin/users")},putUser:function(t){return r["apiHelper"].put("/admin/user",t)},getCurrentUser:function(){return r["apiHelper"].get("/get_current_user")}}},d940:function(t,e,n){},ee21:function(t,e,n){"use strict";var r=n("2fa3");e["a"]={getProducts:function(){return r["apiHelper"].get("/products")},getProduct:function(t){return r["apiHelper"].get("/products/".concat(t))},deleteItem:function(t,e){return r["apiHelper"].delete("/cart/".concat(t,"/cartItem/").concat(e))}}},f4b0:function(t,e,n){"use strict";var r=n("1bd4"),a=n.n(r);a.a},f9ac:function(t,e,n){}});
//# sourceMappingURL=app.11171606.js.map