(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{103:function(e,t,a){"use strict";a.r(t);var n=a(3),r=a(4),l=a(6),i=a(5),c=a(7),o=a(0),u=a.n(o),s=a(18),d=a(53),p=a(33),h=a(98),m=a.n(h),v=function(e){return u.a.createElement("div",{className:m.a.Checkoutsummary},u.a.createElement("h1",null,"Hope your Burger tastes good"),u.a.createElement("div",{style:{width:"100px",align:"center"}},u.a.createElement(d.a,{ingredients:e.ingredients})),u.a.createElement(p.a,{btnType:"Success",clicked:e.checkoutcontinue},"Continue"),u.a.createElement(p.a,{btnType:"Danger",clicked:e.checkoutcancelled},"Cancel"))},g=a(2),f=a(99),y=a.n(f),b=a(19),C=a(34),k=a(96),E=a(43),_=a(14),j=a(15),I=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).state={orderForms:{name:{elementType:"input",elementConfig:{type:"text",placeholder:"your Name"},value:"",validation:{required:!0},valid:!1,touched:!1},street:{elementType:"input",elementConfig:{type:"text",placeholder:"your Street"},value:"",validation:{required:!0},valid:!1,touched:!1},code:{elementType:"input",elementConfig:{type:"text",placeholder:"your Zipcode"},value:"",validation:{required:!0,minlength:5,maxlen:15},valid:!1,touched:!1},country:{elementType:"input",elementConfig:{type:"text",placeholder:"your Country"},value:"",validation:{required:!0,minlength:5,maxlen:15},valid:!1,touched:!1},mail:{elementType:"input",elementConfig:{type:"email",placeholder:"your mail"},value:"",validation:{required:!0},valid:!1,touched:!1},deliveryMethod:{elementType:"select",elementConfig:{options:[{value:"fastest",displayValue:"Fastest"},{value:"Cheapest",displayValue:"Cheapest"}]},value:"fastest",validation:{},valid:!0}},formIsValid:!1},a.inputChangeHandler=function(e,t){var n=Object(g.a)({},a.state.orderForms),r=Object(g.a)({},n[t]);r.value=e.target.value,r.valid=a.checkValidity(r.value,r.validation),r.touched=!0;var l=!0;for(var i in n[t]=r,n)l=n[i].valid&&l;a.setState({orderForms:n,formIsValid:l})},a.orderHandler=function(e){e.preventDefault();var t={};for(var n in a.state.orderForms)t[n]=a.state.orderForms[n].value;var r={ingredients:a.props.ings,price:a.props.price,orderData:t,userId:a.props.userId};a.props.onOrderBurger(a.props.token,r)},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"checkValidity",value:function(e,t){var a=!0;if(!t)return!0;if(t.required&&(a=""!==e.trim()&&a),t.minlength&&(a=e.length>=t.minlength&&a),t.maxlen&&(a=e.length<=t.maxlen&&a),t.isEmail){a=/[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(e)&&a}if(t.isNumeric){a=/^\d+$/.test(e)&&a}return a}},{key:"render",value:function(){var e=this,t=[];for(var a in this.state.orderForms)t.push({id:a,config:this.state.orderForms[a]});var n=u.a.createElement("form",{onSubmit:this.orderHandler},t.map(function(t){return u.a.createElement(k.a,{key:t.id,elementType:t.config.elementType,invalid:!t.config.valid,elementConfig:t.config.elementConfig,shouldValidate:t.config.validation,touched:t.config.touched,value:t.config.value,changed:function(a){e.inputChangeHandler(a,t.id)}})}),u.a.createElement(p.a,{btnType:"Success",disabled:!this.state.formIsValid},"Order"),"   ");return this.props.loading&&(n=u.a.createElement(C.a,null)),u.a.createElement("div",{className:y.a.ContactData},u.a.createElement("h3",null,"Please enter your contact details"),n)}}]),t}(o.Component),O=Object(_.b)(function(e){return{ings:e.burgerred.ingredients,price:e.burgerred.totalprice,loading:e.order.loading,token:e.authred.token,userId:e.authred.userId}},function(e){return{onOrderBurger:function(t,a){return e(j.g(t,a))}}})(Object(E.a)(I,b.a)),x=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(c)))).checkoutcontinue=function(){a.props.history.replace("/checkout/contact-data")},a.checkoutcancelled=function(){a.props.history.goBack()},a}return Object(c.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=u.a.createElement(s.a,{to:"/"});if(this.props.ings){var t=this.props.purchased?u.a.createElement(s.a,{to:"/"}):null;e=u.a.createElement("div",null,t,u.a.createElement(v,{ingredients:this.props.ings,checkoutcancelled:this.checkoutcancelled,checkoutcontinue:this.checkoutcontinue}),u.a.createElement(s.b,{path:this.props.match.path+"/contact-data",component:O}))}return e}}]),t}(o.Component);t.default=Object(_.b)(function(e){return{ings:e.burgerred.ingredients,purchased:e.order.purchased}})(x)},96:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(97),i=a.n(l);t.a=function(e){var t=null,a=null,n=[i.a.Inputelement];switch(e.invalid&&e.shouldValidate&&e.touched&&(a=r.a.createElement("p",null,"Please enter a valid value!"),n.push(i.a.Invalid)),e.elementType){case"input":t=r.a.createElement("input",Object.assign({className:n.join(" "),value:e.value},e.elementConfig,{onChange:e.changed}));break;case"textarea":t=r.a.createElement("textarea",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}));break;case"select":t=r.a.createElement("select",{className:n.join(" "),value:e.value,onChange:e.changed},e.elementConfig.options.map(function(e){return r.a.createElement("option",{key:e.value,value:e.value},e.displayValue)}));break;default:t=r.a.createElement("input",Object.assign({className:n.join(" ")},e.elementConfig,{value:e.value,onChange:e.changed}))}return r.a.createElement("div",{className:i.a.Input},r.a.createElement("label",{className:i.a.Input},e.label),t,a)}},97:function(e,t,a){e.exports={Input:"Input__Input__-hash-64-5-",Label:"Input__Label__-hash-64-5-",Inputelement:"Input__Inputelement__-hash-64-5-",Invalid:"Input__Invalid__-hash-64-5-"}},98:function(e,t,a){e.exports={Checkoutsummary:"Checkoutsummary__Checkoutsummary__-hash-64-5-"}},99:function(e,t,a){e.exports={ContactData:"ContactData__ContactData__-hash-64-5-"}}}]);
//# sourceMappingURL=3.e93b9f20.chunk.js.map