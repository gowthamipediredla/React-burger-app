(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,n,r){e.exports={Order:"Order__Order__-hash-64-5-"}},104:function(e,n,r){"use strict";r.r(n);var t=r(3),a=r(4),i=r(6),o=r(5),s=r(7),c=r(0),u=r.n(c),d=r(101),p=r.n(d),l=function(e){var n=[];for(var r in e.ingredients)n.push({name:r,amount:e.ingredients[r]});var t=n.map(function(e){return u.a.createElement("span",{style:{textTransform:"Capitalize",margin:"0px 8px ",display:"inline-block",border:"1px solid #ccc",padding:"5px"},key:e.name},e.name,"(",e.amount,")")});return u.a.createElement("div",{className:p.a.Order},u.a.createElement("p",null," ingredients: ",t),u.a.createElement("p",null,"Price:",u.a.createElement("strong",null,"Rs:",e.price)))},m=r(19),h=r(14),f=r(43),O=r(15),b=r(34),g=function(e){function n(){return Object(t.a)(this,n),Object(i.a)(this,Object(o.a)(n).apply(this,arguments))}return Object(s.a)(n,e),Object(a.a)(n,[{key:"componentDidMount",value:function(){this.props.onFetchOrders(this.props.token,this.props.userId)}},{key:"render",value:function(){var e=u.a.createElement(b.a,null);return this.props.loading||(e=this.props.orders.map(function(e){return u.a.createElement(l,{key:e.id,price:e.price,ingredients:e.ingredients})})),u.a.createElement("div",null," ",e,"  ")}}]),n}(c.Component);n.default=Object(h.b)(function(e){return{orders:e.order.orders,loading:e.order.loading,token:e.authred.token,userId:e.authred.userId}},function(e){return{onFetchOrders:function(n,r){return e(O.d(n,r))}}})(Object(f.a)(g,m.a))}}]);
//# sourceMappingURL=5.b9a7a2c5.chunk.js.map