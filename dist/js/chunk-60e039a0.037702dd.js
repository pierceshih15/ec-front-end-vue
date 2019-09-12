(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60e039a0"],{"049f":function(t,e,a){"use strict";var s=a("4f4f"),n=a.n(s);n.a},"4f4f":function(t,e,a){},ab31:function(t,e,a){"use strict";var s=a("2fa3");e["a"]={postCoupon:function(t){return s["apiHelper"].post("/coupon",t)},getCoupon:function(){return s["apiHelper"].get("/coupon")},deleteCoupon:function(t){return s["apiHelper"].delete("/coupon",t)}}},b789:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[t._m(0),t.cartItems.length<1?a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-md-6 col-12 mx-auto"},[a("i",{staticClass:"fa fa-shopping-cart fa-5",attrs:{"aria-hidden":"true"}}),a("div",{staticClass:"mt-3 text-center"},[a("h5",[t._v("你的購物車是空的")]),a("p",[t._v("記得加入商品到你的購物車")]),a("router-link",{staticClass:"btn btn-success btn-large",attrs:{to:"/products"}},[t._v("繼續購物")])],1)])]):a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("h3",[t._v("\n            購物車 (\n            "),a("span",{staticClass:"sl-cart-count ng-isolate-scope"},[t._v(t._s(t.cartItems.length))]),t._v(" 件)\n          ")])]),a("div",{staticClass:"card-body"},[t._m(1),a("hr",{staticClass:"hidden-In-Mobile"}),t._l(t.cartItems,function(e){return a("div",{key:e.id,staticClass:"table-row row cart-item py-1"},[a("div",{staticClass:"col-7 col-md-3 item-information"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-6 px-0"},[a("router-link",{attrs:{to:{name:"product",params:{productId:e.id}}}},[a("img",{staticClass:"col-auto",attrs:{src:t._f("emptyImage")(e.image),alt:""}})])],1),a("div",{staticClass:"col-6 pl-0 my-auto"},[a("div",[t._v(t._s(e.name))])])])]),a("div",{staticClass:"col-1 col-md-1 item-promotion"}),a("div",{staticClass:"col-4 col-md-2 text-center item-price my-auto"},[a("div",{staticClass:"row"},[a("span",{staticClass:"col-12 col-md-12 sell_price font-weight-bold"},[t._v("NT "+t._s(t._f("currency")(e.sell_price)))]),a("span",{staticClass:"col-12 col-md-12 original-price text-muted font-italic"},[t._v("NT "+t._s(t._f("currency")(e.origin_price)))])])]),a("div",{staticClass:"col-4 col-md-3 text-center item-quantity my-auto"},[a("div",{staticClass:"input-group"},[a("span",{staticClass:"input-group-btn"},[a("div",{staticClass:"btn btn-default btn-quantity-decrease",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.subItemFromCart(t.cartId,e.CartItem.id)}}},[a("i",{staticClass:"fa fa-minus"})])]),a("span",{staticClass:"form-control text-center"},[t._v(t._s(e.CartItem.quantity))]),a("span",{staticClass:"input-group-btn"},[a("div",{staticClass:"btn btn-default btn-quantity-increase",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addItemToCart(t.cartId,e.CartItem.id)}}},[a("i",{staticClass:"fa fa-plus"})])])])]),a("div",{staticClass:"col-4 col-md-2 text-center item-total my-auto"},[a("span",{staticClass:"total-count"},[t._v("NT "+t._s(t._f("currency")(e.sell_price*e.CartItem.quantity)))])]),a("div",{staticClass:"col-4 col-md-1 text-center item-action my-auto"},[a("a",{staticClass:"btn btn-link btn-remove-cart-item",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteItemFromCart(t.cartId,e.CartItem.id)}}},[a("i",{staticClass:"fa fa-times",attrs:{"aria-hidden":"true"}})])])])}),a("hr",{staticClass:"cart-promotions-hr d-none"}),a("div",{staticClass:"row cart-promotions d-none"},[a("h5",{staticClass:"col-12"},[t._v("已享用之優惠")]),a("div",{staticClass:"col-12 promotion-coupon"},[a("div",{staticClass:"row text-center p-3"},[a("span",{staticClass:"col-4 col-md-2 ccoupon-name bg-success text-light my-auto py-2"},[t._v(t._s(t.couponData.name))]),a("span",{staticClass:"col-4 col-md-3 my-auto py-2 coupon-description"},[t._v(t._s(t.couponData.description))]),a("span",{staticClass:"col-4 col-md-7 my-auto py-2 text-right discount"},[a("div",{staticClass:"row"},[a("span",{staticClass:"col-12"},[t._v("- NT "+t._s(t._f("currency")(t.coupon_discount_fee)))]),a("a",{staticClass:"col-12 text-right text-danger",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteCoupon(e)}}},[t._v("刪除")])])])])])])],2)])]),a("div",{staticClass:"col-12 mt-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-sm-7 col-md-8"},[a("div",{staticClass:"card"},[t._m(2),a("div",{staticClass:"card-body"},[a("form",{attrs:{name:"cartForm"}},[a("div",{staticClass:"form-group"},[t._m(3),a("span",{staticClass:"select-cart-form"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.shipping_method,expression:"shipping_method"}],staticClass:"form-control",attrs:{id:"cart-delivery-method",required:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.shipping_method=e.target.multiple?a:a[0]},function(e){return t.TrackShippingMethod()}]}},[a("option",{attrs:{name:"cartDeliveryMethod",value:"住家宅配"}},[t._v("住家宅配")]),a("option",{attrs:{name:"cartDeliveryMethod",value:"其他"}},[t._v("其他")])])])])])])])]),a("div",{staticClass:"col-sm-5 col-md-4"},[a("div",{staticClass:"card text-right"},[t._m(4),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row subtotal"},[a("span",{staticClass:"col-8 col-md-6 text-left"},[t._v("小計:")]),a("span",{staticClass:"col-4 col-md-6 text-right"},[t._v("NT "+t._s(t._f("currency")(t.total_amount)))])]),a("div",{staticClass:"row discount-fee"},[a("span",{staticClass:"col-8 col-md-6 text-left"},[t._v("折扣:")]),a("span",{staticClass:"col-4 col-md-6 text-right"},[t._v("- NT "+t._s(t._f("currency")(t.coupon_discount_fee)))])]),a("div",{staticClass:"row delivery-fee"},[a("span",{staticClass:"col-8 col-md-6 text-left"},[t._v("運費:")]),a("span",{staticClass:"col-4 col-md-6 text-right"},[t._v("NT "+t._s(t._f("currency")(t.shipping_fee)))])]),a("div",{staticClass:"row cart-coupon mt-3"},[t.isCounponActivated?a("div",{staticClass:"col-12 text-left"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"couponCode"}},[t._v("促銷代碼")]),a("div",[a("div",{staticClass:"input-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text",id:"couponCode",name:"couponCode",disabled:t.isBlocking},domProps:{value:t.couponCode},on:{input:function(e){e.target.composing||(t.couponCode=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.isBlocking},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.postCoupon(e)}}},[t._v(t._s(t.isBlocking?"已成功使用":"輸入優惠券"))])])])])])]):a("div",{staticClass:"col-12 btn btn-link use-coupon text-left",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.activatedCounpon(e)}}},[t._v("使用促銷代碼")])]),a("hr",{staticClass:"ng-scope"}),a("div",{staticClass:"row total ng-scope"},[a("span",{staticClass:"col-8 col-md-6 text-left"},[t._v("\n                  合計\n                  "),a("span",{staticClass:"hidden-sm hidden-md hidden-lg"},[t._v("("+t._s(t.cartItems.length)+" 件)")]),t._v(":\n                ")]),a("span",{staticClass:"col-4 col-md-6 text-right font-weight-bold"},[t._v("NT "+t._s(t._f("currency")(t.total_amount+t.shipping_fee-t.coupon_discount_fee)))])])])])]),a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-success btn-block mt-3",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.putCart(e)}}},[t._v("前往結帳")])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center mt-3"},[a("div",{staticClass:"col-md-7 col-12"},[a("div",{staticClass:"row step"},[a("div",{staticClass:"col text-center step-point-line step-point"},[a("span",{staticClass:"bg-dark px-4 py-2 rounded-pill text-light mb-3 d-inline-block"},[t._v("Step 1")]),a("p",{staticClass:"text-dark h6"},[t._v("購物車")])]),a("div",{staticClass:"col text-center step-point-line"},[a("span",{staticClass:"border bg-secondary px-4 py-2 rounded-pill text-dark mb-3 d-inline-block"},[t._v("Step 2")]),a("p",{staticClass:"text-dark h6"},[t._v("填寫資料")])]),a("div",{staticClass:"col text-center"},[a("span",{staticClass:"border bg-secondary px-4 py-2 rounded-pill text-dark mb-3 d-inline-block"},[t._v("Step 3")]),a("p",{staticClass:"text-dark h6"},[t._v("訂單確認與與付款")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row hidden-In-Mobile"},[a("div",{staticClass:"col-sm-3"},[t._v("商品資料")]),a("div",{staticClass:"col-sm-1"},[t._v("優惠")]),a("div",{staticClass:"col-sm-2 text-center"},[t._v("單件價格")]),a("div",{staticClass:"col-sm-3 text-center"},[t._v("數量")]),a("div",{staticClass:"col-sm-2 text-center item-total"},[t._v("小計")]),a("div",{staticClass:"col-sm-1"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("h3",[t._v("選擇配送方式")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"cart-delivery-method"}},[t._v("\n                    配送方式\n                    "),a("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("h3",[t._v("訂單資訊")])])}],r=(a("96cf"),a("3b8d")),o=a("cc17"),c=a("ab31"),i=a("2708"),u=a("2fa3"),l={mixins:[i["a"],i["d"]],data:function(){return{cartId:null,cartItems:[],total_amount:0,shipping_fee:60,shipping_method:"住家宅配",isCounponActivated:!1,couponData:{},couponCode:"",coupon_discount_fee:0,isBlocking:!1}},created:function(){this.fetchCart(),this.fetchCoupon()},methods:{fetchCart:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this,t.next=4,o["a"].getCart();case 4:if(a=t.sent,s=a.data,n=a.statusText,"error"!==s.status){t.next=9;break}return t.abrupt("return");case 9:if("OK"===n){t.next=11;break}throw new Error(n);case 11:if(e.cartId=s.cart.id,e.cartItems=s.cart.items,e.$store.commit("setNavbarCartItemNumber",e.cartItems.length),!(e.cartItems.length<1)){t.next=16;break}return t.abrupt("return");case 16:e.cartItems.map(function(t){return t.id*t.id}).reduce(function(t,e){return t+e}),e.total_amount=s.total_amount,t.next=23;break;case 20:t.prev=20,t.t0=t["catch"](0),u["Toast"].fire({type:"error",title:"無法取得購物車資料，請稍後再試"});case 23:case"end":return t.stop()}},t,this,[[0,20]])}));function e(){return t.apply(this,arguments)}return e}(),TrackShippingMethod:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this,"住家宅配"===e.shipping_method&&(e.shipping_fee=60),"其他"===e.shipping_method&&(e.shipping_fee=100);case 3:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),addItemToCart:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,a){var s,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=this,t.next=4,o["a"].addItemToCart(e,a);case 4:if(n=t.sent,n.data,r=n.statusText,"OK"===r){t.next=9;break}throw new Error(r);case 9:s.fetchCart(e),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),u["Toast"].fire({type:"error",title:"無法增加商品數量，請稍後再試"});case 15:case"end":return t.stop()}},t,this,[[0,12]])}));function e(e,a){return t.apply(this,arguments)}return e}(),subItemFromCart:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,a){var s,n,r,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=this,t.next=4,o["a"].subItemFromCart(e,a);case 4:if(n=t.sent,r=n.data,c=n.statusText,0===r.cartItem[0].quantity&&s.deleteItemFromCart(e,a),"OK"===c){t.next=10;break}throw new Error(c);case 10:s.fetchCart(e),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),u["Toast"].fire({type:"error",title:"無法刪減商品數量，請稍後再試"});case 16:case"end":return t.stop()}},t,this,[[0,13]])}));function e(e,a){return t.apply(this,arguments)}return e}(),deleteItemFromCart:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e,a){var s,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=this,t.next=4,o["a"].deleteItemFromCart(e,a);case 4:if(n=t.sent,n.data,r=n.statusText,"OK"===r){t.next=9;break}throw new Error(r);case 9:s.fetchCart(e),t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),u["Toast"].fire({type:"error",title:"無法移除該商品，請稍後再試"});case 15:case"end":return t.stop()}},t,this,[[0,12]])}));function e(e,a){return t.apply(this,arguments)}return e}(),putCart:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,s,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this,a={shipping_method:e.shipping_method},t.next=5,o["a"].putCart(a);case 5:if(s=t.sent,n=s.data,r=s.statusText,"OK"===r&&"success"===n.status){t.next=10;break}throw new Error(r);case 10:u["Toast"].fire({type:"success",title:"配送資訊已更新"}),e.$router.push({name:"orderCreate"}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),u["Toast"].fire({type:"error",title:"無法更新配送資訊，請稍後再試"});case 17:case"end":return t.stop()}},t,this,[[0,14]])}));function e(){return t.apply(this,arguments)}return e}(),activatedCounpon:function(){var t=this;t.isCounponActivated=!0},postCoupon:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(e){var a,s,n,r,o,i,l;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=this,t.prev=1,a.couponCode){t.next=5;break}return u["Toast"].fire({type:"warning",title:"請輸入 couponCode 優惠碼呦！"}),t.abrupt("return");case 5:return s={couponCode:a.couponCode},t.next=8,c["a"].postCoupon(s);case 8:if(n=t.sent,r=n.data,o=n.statusText,console.log("優惠券 data",r),"error-notFound"!==r.status){t.next=15;break}return u["Toast"].fire({type:"warning",title:"查無此優惠券，請再次確認"}),t.abrupt("return");case 15:if("error-cantBeUsed"!==r.status){t.next=18;break}return u["Toast"].fire({type:"warning",title:"該優惠券已被使用完畢 哭哭QQ"}),t.abrupt("return");case 18:if("OK"===o&&"success"===r.status){t.next=20;break}throw new Error(o);case 20:console.log("優惠券 data",r),i=r.couponData,0===i.type&&1===i.shipping_free&&(a.coupon_discount_fee=a.shipping_fee,console.log("運費",a.coupon_discount_fee)),1===i.type&&null!==i.product_reduce&&(a.coupon_discount_fee=i.product_reduce,console.log("折價",a.coupon_discount_fee)),2===i.type&&null!==i.percent&&(l=1-i.percent/100,a.coupon_discount_fee=Math.round(a.total_amount*l),console.log("打折",a.coupon_discount_fee)),a.couponData=i,u["Toast"].fire({type:"success",title:"優惠券可成功使用，請確認"}),a.isBlocking=!0,document.querySelector(".cart-promotions-hr").classList.remove("d-none"),document.querySelector(".cart-promotions").classList.remove("d-none"),t.next=36;break;case 32:t.prev=32,t.t0=t["catch"](1),a.isBlocking=!1,u["Toast"].fire({type:"error",title:"暫時無法使用 coupon 券，請稍後再試"});case 36:case"end":return t.stop()}},t,this,[[1,32]])}));function e(e){return t.apply(this,arguments)}return e}(),deleteCoupon:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.prev=1,t.next=4,c["a"].deleteCoupon();case 4:a=t.sent,s=a.data,a.statusText,console.log("優惠券 data",s),document.querySelector(".cart-promotions-hr").classList.add("d-none"),document.querySelector(".cart-promotions").classList.add("d-none"),e.isCounponActivated=!1,e.isBlocking=!1,e.couponData={},e.couponCode="",e.coupon_discount_fee=0,t.next=22;break;case 17:t.prev=17,t.t0=t["catch"](1),e.isCounponActivated=!0,e.isBlocking=!0,console.log("error",t.t0);case 22:case"end":return t.stop()}},t,this,[[1,17]])}));function e(){return t.apply(this,arguments)}return e}(),fetchCoupon:function(){var t=Object(r["a"])(regeneratorRuntime.mark(function t(){var e,a,s,n,r;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this,t.next=4,c["a"].getCoupon();case 4:if(a=t.sent,s=a.data,n=a.statusText,console.log("優惠券資料",s),"error"!==s.status){t.next=10;break}return t.abrupt("return");case 10:if("OK"===n){t.next=12;break}throw new Error(n);case 12:e.couponData=s.couponData,0===e.couponData.type&&1===e.couponData.shipping_free&&(e.coupon_discount_fee=e.shipping_fee,console.log("運費",e.coupon_discount_fee)),1===e.couponData.type&&null!==e.couponData.product_reduce&&(e.coupon_discount_fee=e.couponData.product_reduce,console.log("折價",e.coupon_discount_fee)),2===e.couponData.type&&null!==e.couponData.percent&&(r=1-e.couponData.percent/100,e.coupon_discount_fee=Math.round(e.total_amount*r),console.log("打折",e.coupon_discount_fee)),u["Toast"].fire({type:"success",title:"取得優惠券資訊，請確認"}),document.querySelector(".cart-promotions-hr").classList.remove("d-none"),document.querySelector(".cart-promotions").classList.remove("d-none"),e.isCounponActivated=!0,e.couponCode=s.couponData.coupon_code,e.isBlocking=!0,t.next=27;break;case 24:t.prev=24,t.t0=t["catch"](0),u["Toast"].fire({type:"error",title:"無法取得優惠券資料，請稍後再試"});case 27:case"end":return t.stop()}},t,this,[[0,24]])}));function e(){return t.apply(this,arguments)}return e}()}},p=l,d=(a("049f"),a("2877")),m=Object(d["a"])(p,s,n,!1,null,null,null);e["default"]=m.exports}}]);
//# sourceMappingURL=chunk-60e039a0.037702dd.js.map