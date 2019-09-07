(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2deea3cf"],{"0bca":function(t,s,a){"use strict";var n=a("619b"),i=a.n(n);i.a},"5f0b":function(t,s,a){"use strict";var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"row mb-4"},[a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/products"}},[t._v("\n          產品列表\n          "),a("i",{staticClass:"fas fa-box-open"})])],1)])]),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/categories"}},[t._v("\n          產品類別\n          "),a("i",{staticClass:"fas fa-align-justify"})])],1)])]),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/coupons"}},[t._v("\n          優惠券\n          "),a("i",{staticClass:"fas fa-ticket-alt"})])],1)])]),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/discounts"}},[t._v("\n          特價活動\n          "),a("i",{staticClass:"fas fa-tags"})])],1)])]),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/orders"}},[t._v("\n          訂單列表\n          "),a("i",{staticClass:"far fa-list-alt"})])],1)])]),a("div",{staticClass:"col-sm-2"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-body"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:"/admin/users"}},[t._v("\n          會員管理\n          "),a("i",{staticClass:"fas fa-users-cog"})])],1)])])])},i=[],e=(a("0bca"),a("2877")),c={},r=Object(e["a"])(c,n,i,!1,null,"33f1f7a3",null);s["a"]=r.exports},"619b":function(t,s,a){},"671d":function(t,s,a){"use strict";var n=a("2fa3");s["a"]={getDiscounts:function(){return n["apiHelper"].get("/admin/discounts")},getDiscount:function(t){return n["apiHelper"].get("/admin/discounts/".concat(t))},postDiscount:function(t){return n["apiHelper"].post("/admin/discounts",t)},putDiscount:function(t,s){return n["apiHelper"].put("/admin/discounts/".concat(t),s)},deleteDiscount:function(t){return n["apiHelper"].delete("/admin/discounts/".concat(t))}}},8687:function(t,s,a){"use strict";var n=a("f1f0"),i=a.n(n);i.a},d12a:function(t,s,a){"use strict";a.r(s);var n=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container py-5"},[a("AdminNav"),a("router-link",{staticClass:"btn btn-primary btn-block mb-4",attrs:{to:"/admin/discounts/new"}},[t._v("\n    New Discounts\n    "),a("i",{staticClass:"fas fa-plus-square"})]),a("table",{staticClass:"table"},[t._m(0),a("tbody",t._l(t.discounts,function(s){return a("tr",{key:s.id},[a("th",{attrs:{scope:"row"}},[t._v(t._s(s.id))]),a("td",[t._v(t._s(s.name))]),a("td",[t._v(t._s(s.target_price))]),a("td",[0===s.type?a("span",{staticClass:"text-info"},[t._v("免運費")]):1===s.type?a("span",{staticClass:"text-info"},[t._v("扣款")]):2===s.type?a("span",{staticClass:"text-info"},[t._v("打折")]):t._e()]),a("td",{staticClass:"d-flex justify-content-between"},[a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-discount",params:{discountId:s.id}}}},[t._v("\n            Show\n            "),a("i",{staticClass:"fas fa-external-link-square-alt"})]),a("router-link",{staticClass:"btn btn-link",attrs:{to:{name:"admin-discount-edit",params:{discountId:s.id}}}},[t._v("\n            Edit\n            "),a("i",{staticClass:"fas fa-edit"})]),a("button",{staticClass:"btn btn-link",attrs:{type:"button"},on:{click:function(a){return a.stopPropagation(),a.preventDefault(),t.deleteDiscount(s.id)}}},[t._v("\n            Delete\n            "),a("i",{staticClass:"fas fa-trash-alt"})])],1)])}),0)])],1)},i=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("thead",{staticClass:"thead-dark"},[a("tr",[a("th",{attrs:{scope:"col"}},[t._v("#")]),a("th",{attrs:{scope:"col"}},[t._v("Discount")]),a("th",{attrs:{scope:"col"}},[t._v("消費額度")]),a("th",{attrs:{scope:"col"}},[t._v("活動方案")]),a("th",{attrs:{scope:"col",width:"300"}},[t._v("Action")])])])}],e=(a("96cf"),a("3b8d")),c=a("671d"),r=a("5f0b"),o=a("2fa3"),u={components:{AdminNav:r["a"]},data:function(){return{discounts:[]}},created:function(){this.fetchDiscounts()},methods:{fetchDiscounts:function(){var t=Object(e["a"])(regeneratorRuntime.mark(function t(){var s,a,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=this,t.next=4,c["a"].getDiscounts();case 4:if(a=t.sent,n=a.data,i=a.statusText,"OK"===i){t.next=9;break}throw new Error(i);case 9:s.discounts=n.discounts,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),o["Toast"].fire({type:"error",title:"無法取得 discount，請稍後再試"});case 15:case"end":return t.stop()}},t,this,[[0,12]])}));function s(){return t.apply(this,arguments)}return s}(),deleteDiscount:function(){var t=Object(e["a"])(regeneratorRuntime.mark(function t(s){var a,n,i,e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a=this,t.next=4,c["a"].deleteDiscount(s);case 4:if(n=t.sent,i=n.data,e=n.statusText,"OK"===e&&"success"===i.status){t.next=9;break}throw new Error(e);case 9:a.discounts=this.discounts.filter(function(t){return t.id!==s}),o["Toast"].fire({type:"success",title:"刪除 discount 成功"}),t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](0),o["Toast"].fire({type:"error",title:"無法取得刪除 discount，請稍後再試"});case 16:case"end":return t.stop()}},t,this,[[0,13]])}));function s(s){return t.apply(this,arguments)}return s}()}},l=u,d=(a("8687"),a("2877")),f=Object(d["a"])(l,n,i,!1,null,"2df45a64",null);s["default"]=f.exports},f1f0:function(t,s,a){}}]);
//# sourceMappingURL=chunk-2deea3cf.24f0bdc5.js.map