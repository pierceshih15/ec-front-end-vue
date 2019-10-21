(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60e039a0"],{"049f":function(t,e,a){"use strict";var s=a("4f4f"),n=a.n(s);n.a},"4f4f":function(t,e,a){},ab31:function(t,e,a){"use strict";var s=a("2fa3");e["a"]={postCoupon:function(t){return s["apiHelper"].post("/coupon",t)},getCoupon:function(){return s["apiHelper"].get("/coupon")},deleteCoupon:function(t){return s["apiHelper"].delete("/coupon",t)}}},b789:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container py-5"},[t._m(0),t.cartItems.length<1?a("div",{staticClass:"row mt-5"},[a("div",{staticClass:"col-md-6 col-12 mx-auto"},[a("i",{staticClass:"fa fa-shopping-cart fa-5",attrs:{"aria-hidden":"true"}}),a("div",{staticClass:"mt-3 text-center"},[a("h5",[t._v("你的購物車是空的")]),a("p",[t._v("記得加入商品到你的購物車")]),a("router-link",{staticClass:"btn btn-success btn-large",attrs:{to:"/products"}},[t._v("繼續購物")])],1)])]):a("div",{staticClass:"row mt-3"},[a("div",{staticClass:"col-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header"},[a("b",[t._v("\n            購物車 (\n            "),a("span",{staticClass:"sl-cart-count ng-isolate-scope"},[t._v(t._s(t.cartItems.length))]),t._v(" 件)\n          ")])]),t._m(1),a("div",{staticClass:"card-body py-0"},t._l(t.cartItems,function(e){return a("div",{key:e.id,staticClass:"row item-data"},[a("div",{staticClass:"col-6 col-md-3 my-auto"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4 col-md-6"},[a("router-link",{attrs:{to:{name:"product",params:{productId:e.id}}}},[a("img",{staticClass:"w-100",attrs:{src:t._f("emptyImage")(e.image),alt:""}})])],1),a("h6",{staticClass:"col-8 col-md-6 item-name px-0"},[t._v(t._s(e.name))])])]),a("div",{staticClass:"col-6 col-md-3 item-price my-auto text-center"},[a("div",{staticClass:"row"},[a("span",{staticClass:"col-12 col-md-12 sell_price font-weight-bold"},[t._v("NT "+t._s(t._f("currency")(e.sell_price)))]),a("span",{staticClass:"col-12 col-md-12 original-price text-muted font-italic"},[t._v("NT "+t._s(t._f("currency")(e.origin_price)))])])]),a("div",{staticClass:"col-6 col-md-3 item-quantity text-center"},[a("div",{staticClass:"input-group"},[a("div",{staticClass:"input-group-prepend"},[a("button",{staticClass:"btn btn-secondary btn-quantity-decrease",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.subItemFromCart(t.cartId,e.CartItem.id)}}},[a("i",{staticClass:"fa fa-minus"})])]),a("div",{staticClass:"form-control text-center"},[t._v(t._s(e.CartItem.quantity))]),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary btn-quantity-increase",attrs:{disabled:!t.productSQIsEnough,type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.addItemToCart(t.cartId,e.CartItem.id)}}},[a("i",{staticClass:"fa fa-plus"})])])])]),a("div",{staticClass:"col-6 col-md-2 item-total text-center"},[a("span",{staticClass:"total-count"},[t._v("NT "+t._s(t._f("currency")(e.sell_price*e.CartItem.quantity)))])]),a("div",{staticClass:"col-1 col-md-1 item-action my-auto text-center hover-effect"},[a("a",{staticClass:"btn btn-link btn-remove-cart-item",on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteItemFromCart(t.cartId,e.CartItem.id)}}},[a("i",{staticClass:"fa fa-times text-secondary",attrs:{"aria-hidden":"true"}})])]),a("hr")])}),0),t.showCoupon||t.showDiscount?a("div",{staticClass:"card-body cart-promotions pt-0"},[a("hr"),a("div",{staticClass:"row"},[a("b",{staticClass:"col-12"},[t._v("已享用之優惠")]),t.discountData.id?a("div",{staticClass:"col-12 promotion-discount"},[a("div",{staticClass:"row text-center p-3"},[a("span",{staticClass:"col-7 col-md-4 discount-name bg-warning my-auto py-2"},[t._v("特價活動 - "+t._s(t.discountData.name))]),a("span",{staticClass:"col-5 col-md-3 my-auto py-2 bg-light discount-description"},[t._v(t._s(t.discountData.description))]),a("span",{staticClass:"col-12 col-md-5 my-auto py-2 text-right discount bg-light font-weight-bold"},[a("div",{staticClass:"row"},[a("span",{staticClass:"col-12"},[t._v("- NT "+t._s(t._f("currency")(t.coupon_discount_fee)))])])])])]):t._e(),t.discountData.id||null===t.couponData.length?t._e():a("div",{staticClass:"col-12 promotion-coupon"},[a("div",{staticClass:"row text-center p-3"},[a("span",{staticClass:"col-7 col-md-4 coupon-name bg-success text-light my-auto py-2"},[t._v("優惠券 - "+t._s(t.couponData.name))]),a("span",{staticClass:"col-5 col-md-3 my-auto py-2 coupon-description bg-light"},[t._v(t._s(t.couponData.description))]),a("span",{staticClass:"col-12 col-md-5 my-auto py-2 text-right discount"},[a("div",{staticClass:"row"},[a("span",{staticClass:"col-12"},[t._v("- NT "+t._s(t._f("currency")(t.coupon_discount_fee)))]),a("a",{staticClass:"col-12 text-right text-danger hover-effect",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.deleteCoupon(e)}}},[t._v("刪除")])])])])])])]):t._e()])]),a("div",{staticClass:"col-12 mt-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-7"},[a("div",{staticClass:"card"},[t._m(2),a("div",{staticClass:"card-body"},[a("form",{attrs:{name:"cartForm"}},[a("div",{staticClass:"form-group"},[t._m(3),a("span",{staticClass:"select-cart-form"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.shipping_method,expression:"shipping_method"}],staticClass:"form-control",attrs:{id:"cart-delivery-method",required:""},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e});t.shipping_method=e.target.multiple?a:a[0]},function(e){return t.TrackShippingMethod()}]}},[a("option",{attrs:{name:"cartDeliveryMethod",value:"住家宅配"}},[t._v("住家宅配")]),a("option",{attrs:{name:"cartDeliveryMethod",value:"其他"}},[t._v("其他")])])])])])])])]),a("div",{staticClass:"col-12 col-md-5"},[a("div",{staticClass:"card text-right"},[t._m(4),a("div",{staticClass:"card-body"},[a("div",{staticClass:"row subtotal"},[a("span",{staticClass:"col-7 col-md-6 text-left"},[t._v("小計:")]),a("span",{staticClass:"col-5 col-md-6 text-right"},[t._v("NT "+t._s(t._f("currency")(t.total_amount)))])]),a("div",{staticClass:"row discount-fee"},[a("span",{staticClass:"col-7 col-md-6 text-left"},[t._v("折扣:")]),a("span",{staticClass:"col-5 col-md-6 text-right"},[t._v("- NT "+t._s(t._f("currency")(t.coupon_discount_fee)))])]),a("div",{staticClass:"row delivery-fee"},[a("span",{staticClass:"col-7 col-md-6 text-left"},[t._v("運費:")]),a("span",{staticClass:"col-5 col-md-6 text-right"},[t._v("NT "+t._s(t._f("currency")(t.shipping_fee)))])]),a("div",{staticClass:"row cart-coupon mt-3"},[t.isCounponActivated?a("div",{staticClass:"col-12 text-left"},[a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"couponCode"}},[t._v("促銷代碼")]),a("div",[a("div",{staticClass:"input-group"},[t.discountData.id?a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.isBlocking}},[t._v("訂單已套用特價活動優惠")]):t._e(),t.discountData.id||null===t.couponData.length?t._e():a("input",{directives:[{name:"model",rawName:"v-model",value:t.couponCode,expression:"couponCode"}],staticClass:"form-control",attrs:{type:"text",id:"couponCode",name:"couponCode",disabled:t.isBlocking},domProps:{value:t.couponCode},on:{input:function(e){e.target.composing||(t.couponCode=e.target.value)}}}),a("div",{staticClass:"input-group-append"},[t.discountData.id||null===t.couponData.length?t._e():a("button",{staticClass:"btn btn-primary",attrs:{disabled:t.isBlocking},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.postCoupon(e)}}},[t._v(t._s(t.isBlocking?"已成功使用":"輸入優惠券"))])])])])]),a("div",{staticClass:"text-secondary"},[t._v("歡迎輸入 1111 優惠碼，取得消費折扣")])]):a("div",{staticClass:"text-left"},[a("span",{staticClass:"col-12 btn btn-link text-left hover-effect",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.activatedCounpon(e)}}},[t._v("使用促銷代碼")]),a("div",{staticClass:"col-12 text-secondary"},[t._v("歡迎輸入 1111 優惠碼，取得消費折扣")])])]),a("hr",{staticClass:"ng-scope"}),a("div",{staticClass:"row total ng-scope"},[a("span",{staticClass:"col-6 col-md-6 text-left"},[t._v("\n                  合計\n                  "),a("span",{staticClass:"hidden-sm hidden-md hidden-lg"},[t._v("("+t._s(t.cartItems.length)+" 件)")]),t._v(":\n                ")]),a("span",{staticClass:"col-6 col-md-6 text-right font-weight-bold"},[t._v("NT "+t._s(t._f("currency")(t.total_amount+t.shipping_fee-t.coupon_discount_fee)))])])])])]),a("div",{staticClass:"col-12"},[a("button",{staticClass:"btn btn-success btn-block mt-3",attrs:{type:"button"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.putCart(e)}}},[t._v("前往結帳")])])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center mt-3"},[a("div",{staticClass:"col-12 col-md-8"},[a("div",{staticClass:"row step"},[a("div",{staticClass:"col-4 text-center step-point-line step-point"},[a("span",{staticClass:"step-by-step bg-dark rounded-pill text-light d-inline-block"},[t._v("Step 1")]),a("p",{staticClass:"step-text text-dark"},[t._v("購物車")])]),a("div",{staticClass:"col-4 text-center step-point-line"},[a("span",{staticClass:"step-by-step border bg-secondary rounded-pill text-dark d-inline-block"},[t._v("Step 2")]),a("p",{staticClass:"step-text text-dark"},[t._v("填寫資料")])]),a("div",{staticClass:"col-4 text-center"},[a("span",{staticClass:"step-by-step border bg-secondary rounded-pill text-dark d-inline-block"},[t._v("Step 3")]),a("p",{staticClass:"step-text text-dark"},[t._v("訂單確認與與付款")])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-body pt-3 pb-0 hidden-In-Mobile"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[t._v("商品資料")]),a("div",{staticClass:"col-md-3 text-center"},[t._v("單件價格")]),a("div",{staticClass:"col-md-3 text-center"},[t._v("數量")]),a("div",{staticClass:"col-md-2 text-center item-total"},[t._v("小計")]),a("div",{staticClass:"col-md-1"})]),a("hr")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("b",[t._v("選擇配送方式")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("label",{attrs:{for:"cart-delivery-method"}},[t._v("\n                    配送方式\n                    "),a("span",{staticClass:"text-danger"},[t._v("*")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-header"},[a("b",[t._v("訂單資訊")])])}],o=(a("96cf"),a("3b8d")),r=a("cc17"),c=a("ab31"),i=a("2708"),u=a("2fa3"),p={mixins:[i["a"],i["d"]],data:function(){return{cartId:null,cartItems:[],total_amount:0,shipping_fee:60,shipping_method:"住家宅配",isCounponActivated:!1,showCoupon:!1,couponData:{},couponCode:"",coupon_discount_fee:0,isBlocking:!1,discountData:{},showDiscount:!1,productSQIsEnough:!0}},created:function(){this.fetchCart()},methods:{fetchCart:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a,s,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this,t.next=4,r["a"].getCart();case 4:if(a=t.sent,s=a.data,n=a.statusText,"error"!==s.status){t.next=9;break}return t.abrupt("return");case 9:if("OK"===n){t.next=11;break}throw new Error(n);case 11:if(e.cartId=s.cart.id,e.cartItems=s.cart.items,e.$store.commit("setNavbarCartItemNumber",e.cartItems.length),!(e.cartItems.length<1)){t.next=16;break}return t.abrupt("return");case 16:e.cartItems.map(function(t){return t.id*t.id}).reduce(function(t,e){return t+e}),e.total_amount=s.totalAmount,s.discountData.id?(e.discountData=s.discountData,e.showDiscount=!0,e.activatedDiscount()):(e.disActivatedDiscount(),e.fetchCoupon()),t.next=24;break;case 21:t.prev=21,t.t0=t["catch"](0),u["Toast"].fire({type:"error",title:"無法取得購物車資料，請稍後再試"});case 24:case"end":return t.stop()}},t,this,[[0,21]])}));function e(){return t.apply(this,arguments)}return e}(),TrackShippingMethod:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=this,"住家宅配"===e.shipping_method&&(e.shipping_fee=60),"其他"===e.shipping_method&&(e.shipping_fee=100),this.fetchCart();case 4:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),addItemToCart:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,a){var s,n,o,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=this,t.next=4,r["a"].addItemToCart(e,a);case 4:if(n=t.sent,o=n.data,c=n.statusText,void 0===o.product&&(s.productSQIsEnough=!1,u["Toast"].fire({type:"warning",title:"商品已無額外庫存囉！"})),"OK"===c){t.next=10;break}throw new Error(c);case 10:s.fetchCart(e),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),u["Toast"].fire({type:"error",title:"無法增加商品數量，請稍後再試"});case 16:case"end":return t.stop()}},t,this,[[0,13]])}));function e(e,a){return t.apply(this,arguments)}return e}(),subItemFromCart:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,a){var s,n,o,c;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=this,t.next=4,r["a"].subItemFromCart(e,a);case 4:if(n=t.sent,o=n.data,c=n.statusText,s.productSQIsEnough=!0,0===o.cartItem[0].quantity&&s.deleteItemFromCart(e,a),"OK"===c){t.next=11;break}throw new Error(c);case 11:s.fetchCart(e),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),u["Toast"].fire({type:"error",title:"無法刪減商品數量，請稍後再試"});case 17:case"end":return t.stop()}},t,this,[[0,14]])}));function e(e,a){return t.apply(this,arguments)}return e}(),deleteItemFromCart:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e,a){var s,n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=this,t.next=4,r["a"].deleteItemFromCart(e,a);case 4:if(n=t.sent,o=n.statusText,"OK"===o){t.next=8;break}throw new Error(o);case 8:s.fetchCart(e),t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](0),u["Toast"].fire({type:"error",title:"無法移除該商品，請稍後再試"});case 14:case"end":return t.stop()}},t,this,[[0,11]])}));function e(e,a){return t.apply(this,arguments)}return e}(),putCart:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a,s,n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e=this,a={shipping_method:e.shipping_method},t.next=5,r["a"].putCart(a);case 5:if(s=t.sent,n=s.data,o=s.statusText,"OK"===o&&"success"===n.status){t.next=10;break}throw new Error(o);case 10:u["Toast"].fire({type:"success",title:"配送資訊已更新"}),e.$router.push({name:"orderCreate"}),t.next=17;break;case 14:t.prev=14,t.t0=t["catch"](0),u["Toast"].fire({type:"error",title:"無法更新配送資訊，請稍後再試"});case 17:case"end":return t.stop()}},t,this,[[0,14]])}));function e(){return t.apply(this,arguments)}return e}(),activatedCounpon:function(){var t=this;t.isCounponActivated=!0},postCoupon:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(e){var a,s,n,o,r,i,p;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a=this,t.prev=1,a.showCoupon=!1,a.couponCode){t.next=6;break}return u["Toast"].fire({type:"warning",title:"請輸入 couponCode 優惠碼呦！"}),t.abrupt("return");case 6:return s={couponCode:a.couponCode},t.next=9,c["a"].postCoupon(s);case 9:if(n=t.sent,o=n.data,r=n.statusText,"error-notFound"!==o.status){t.next=15;break}return u["Toast"].fire({type:"warning",title:"查無此優惠券，請再次確認"}),t.abrupt("return");case 15:if("error-cantBeUsed"!==o.status){t.next=18;break}return u["Toast"].fire({type:"warning",title:"該優惠券已被使用完畢 哭哭QQ"}),t.abrupt("return");case 18:if("OK"===r&&"success"===o.status){t.next=20;break}throw new Error(r);case 20:i=o.couponData,0===i.type&&1===i.shipping_free&&(a.coupon_discount_fee=a.shipping_fee),1===i.type&&null!==i.product_reduce&&(a.coupon_discount_fee=i.product_reduce),2===i.type&&null!==i.percent&&(p=1-i.percent/100,a.coupon_discount_fee=Math.round(a.total_amount*p)),a.couponData=i,u["Toast"].fire({type:"success",title:"優惠券可成功使用，請確認"}),a.showCoupon=!0,a.isBlocking=!0,t.next=35;break;case 30:t.prev=30,t.t0=t["catch"](1),a.showCoupon=!1,a.isBlocking=!1,u["Toast"].fire({type:"error",title:"暫時無法使用 coupon 券，請稍後再試"});case 35:case"end":return t.stop()}},t,this,[[1,30]])}));function e(e){return t.apply(this,arguments)}return e}(),deleteCoupon:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a,s;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.prev=1,t.next=4,c["a"].deleteCoupon();case 4:if(a=t.sent,s=a.statusText,"OK"===s){t.next=8;break}throw new Error(s);case 8:e.isCounponActivated=!1,e.showCoupon=!1,e.isBlocking=!1,u["Toast"].fire({type:"success",title:"優惠券已取消使用，請確認"}),e.couponData={},e.couponCode="",e.coupon_discount_fee=0,t.next=23;break;case 17:t.prev=17,t.t0=t["catch"](1),e.isCounponActivated=!0,e.showCoupon=!1,e.isBlocking=!0,console.log("error",t.t0);case 23:case"end":return t.stop()}},t,this,[[1,17]])}));function e(){return t.apply(this,arguments)}return e}(),fetchCoupon:function(){var t=Object(o["a"])(regeneratorRuntime.mark(function t(){var e,a,s,n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return e=this,t.prev=1,t.next=4,c["a"].getCoupon();case 4:if(a=t.sent,s=a.data,n=a.statusText,"error"!==s.status){t.next=10;break}return e.showCoupon=!1,t.abrupt("return");case 10:if("OK"===n){t.next=13;break}throw e.showCoupon=!1,new Error(n);case 13:e.couponData=s.couponData,0===e.couponData.type&&1===e.couponData.shipping_free&&(e.coupon_discount_fee=e.shipping_fee,console.log("運費",e.coupon_discount_fee)),1===e.couponData.type&&null!==e.couponData.product_reduce&&(e.coupon_discount_fee=e.couponData.product_reduce,console.log("折價",e.coupon_discount_fee)),2===e.couponData.type&&null!==e.couponData.percent&&(o=1-e.couponData.percent/100,e.coupon_discount_fee=Math.round(e.total_amount*o),console.log("打折",e.coupon_discount_fee)),e.isCounponActivated=!0,e.couponCode=s.couponData.coupon_code,e.showCoupon=!0,e.isBlocking=!0,t.next=27;break;case 23:t.prev=23,t.t0=t["catch"](1),e.showCoupon=!1,u["Toast"].fire({type:"error",title:"無法取得優惠券資料，請稍後再試"});case 27:case"end":return t.stop()}},t,this,[[1,23]])}));function e(){return t.apply(this,arguments)}return e}(),activatedDiscount:function(){var t=this;if(t.coupon_discount_fee=0,0===t.discountData.type&&1===t.discountData.shipping_free&&(t.coupon_discount_fee=t.shipping_fee),1===t.discountData.type&&null!==t.discountData.product_reduce&&(t.coupon_discount_fee=t.discountData.product_reduce),2===t.discountData.type&&null!==t.discountData.percent){var e=1-t.discountData.percent/100;t.coupon_discount_fee=Math.round(t.total_amount*e)}t.isCounponActivated=!0,t.showCoupon=!1,t.isBlocking=!0},disActivatedDiscount:function(){var t=this;t.isBlocking=!1,t.showDiscount=!1,t.discountData={},t.coupon_discount_fee=0}}},l=p,d=(a("049f"),a("2877")),v=Object(d["a"])(l,s,n,!1,null,null,null);e["default"]=v.exports}}]);
//# sourceMappingURL=chunk-60e039a0.e2f7849b.js.map