webpackJsonp([1],{"4oPD":function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=r("7+uW"),a={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("header",[r("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[r("a",{staticClass:"py-2",attrs:{href:"#"},on:{click:t.goback}},[r("svg",{staticClass:"d-block mx-auto",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"}},[r("circle",{attrs:{cx:"12",cy:"12",r:"10"}}),r("line",{attrs:{x1:"14.31",y1:"8",x2:"20.05",y2:"17.94"}}),r("line",{attrs:{x1:"9.69",y1:"8",x2:"21.17",y2:"8"}}),r("line",{attrs:{x1:"7.38",y1:"12",x2:"13.12",y2:"2.06"}}),r("line",{attrs:{x1:"9.69",y1:"16",x2:"3.95",y2:"6.06"}}),r("line",{attrs:{x1:"14.31",y1:"16",x2:"2.83",y2:"16"}}),r("line",{attrs:{x1:"16.62",y1:"12",x2:"10.88",y2:"21.94"}})])]),t._v(" "),r("a",{staticClass:"navbar-brand",attrs:{href:"/"}},[t._v("Pizza点餐系统")]),t._v(" "),t._m(0),t._v(" "),r("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarSupportedContent"}},[r("ul",{staticClass:"navbar-nav"},[r("li",[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"homeLink"}}},[t._v("主页")])],1),t._v(" "),r("li",[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"aboutLink"}}},[t._v("关于我们")])],1)]),t._v(" "),r("ul",{staticClass:"navbar-nav ml-auto"},[r("li",[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"loginLink"}}},[t._v("登陆")])],1),t._v(" "),r("li",[r("router-link",{staticClass:"nav-link",attrs:{to:{name:"registerLink"}}},[t._v("注册")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"}},[e("span",{staticClass:"navbar-toggler-icon"})])}]},i={components:{appHeader:r("VU/8")({methods:{goback:function(){this.$router.go(-1)}}},a,!1,null,null,null).exports}},n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("div",{staticClass:"container"},[e("app-header")],1),this._v(" "),e("div",{staticClass:"container"},[e("router-view")],1),this._v(" "),e("br"),this._v(" "),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-12 col-md-4"},[e("router-view",{attrs:{name:"orderingGuide"}})],1),this._v(" "),e("div",{staticClass:"col-sm-12 col-md-4"},[e("router-view",{attrs:{name:"delivery"}})],1),this._v(" "),e("div",{staticClass:"col-sm-12 col-md-4"},[e("router-view",{attrs:{name:"history"}})],1)])])])},staticRenderFns:[]};var l=r("VU/8")(i,n,!1,function(t){r("4oPD")},null,null).exports,o=r("zL8q"),c=r.n(o),u=r("/ocq"),d=r("DNVT"),m={mounted:function(){new d.a("#swiper",{loop:!0,speed:500,autoplay:!0,observer:!0,observeParents:!0,pagination:{el:".swiper-pagination"}})}},v={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"row"},[r("div",{staticClass:"swiper-container banner",attrs:{id:"swiper"}},[r("div",{staticClass:"swiper-wrapper"},[r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"col-sm-12 text-center",attrs:{id:"home"}},[r("div",{staticClass:"background"},[r("h2",[t._v("欢迎品尝pizza!")]),t._v(" "),r("h3",[t._v("这里有你非常喜欢的pizza！")]),t._v(" "),r("button",{staticClass:"btn btn-success"},[r("router-link",{attrs:{to:""}},[t._v("\r\n                                        点菜\r\n                                    ")])],1)])])]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"col-sm-12 text-center",attrs:{id:"home"}},[r("div",{staticClass:"background"},[r("h2",[t._v("欢迎登陆!")]),t._v(" "),r("h3",[t._v("这里有你非常喜欢的pizza！")]),t._v(" "),r("button",{staticClass:"btn btn-success"},[r("router-link",{attrs:{to:"/login"}},[t._v("\r\n                                        登陆\r\n                                    ")])],1)])])]),t._v(" "),r("div",{staticClass:"swiper-slide"},[r("div",{staticClass:"col-sm-12 text-center",attrs:{id:"home"}},[r("div",{staticClass:"background"},[r("h2",[t._v("欢迎注册!")]),t._v(" "),r("h3",[t._v("这里有你非常喜欢的pizza！")]),t._v(" "),r("button",{staticClass:"btn btn-success"},[r("router-link",{attrs:{to:"/register"}},[t._v("\r\n                                        注册\r\n                                    ")])],1)])])])]),t._v(" "),r("div",{staticClass:"swiper-pagination"})])])},staticRenderFns:[]};var p=r("VU/8")(m,v,!1,function(t){r("g+dl")},null,null).exports,_={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"row mb-5"},[r("div",{staticClass:"col-4"},[r("div",{staticClass:"list-group mb-5"},[r("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:{name:"historyLink"}}},[r("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:""}},[t._v("历史订单")])]),t._v(" "),r("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:{name:"contactLink"}}},[r("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:""}},[t._v("联系我们")])]),t._v(" "),r("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:{name:"orderingGuideLink"}}},[r("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:""}},[t._v("点餐文档")])]),t._v(" "),r("router-link",{staticClass:"nav-link",attrs:{tag:"li",to:{name:"deliveryLink"}}},[r("a",{staticClass:"list-group-item list-group-item-action",attrs:{href:""}},[t._v("快递信息")])])],1)]),t._v(" "),r("div",{staticClass:"col-8"},[r("router-view")],1)])])},staticRenderFns:[]},h=r("VU/8")(null,_,!1,null,null,null).exports,g={data:function(){return{passErr:"",loginForm:{user_email:"",user_password:""},rules:{user_email:[{required:!0,validator:function(t,e,r){""===e?r(new Error("请输入邮箱")):!1===/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/.test(e)?r(new Error("邮箱格式不正确")):r()},trigger:"blur"}],user_password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},methods:{login:function(){}}},f={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"loginForm",staticClass:"login",attrs:{model:t.loginForm,rules:t.rules}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("el-form-item",{staticClass:"col-sm-12 col-lg-12",attrs:{error:t.passErr,label:"邮箱",prop:"user_email"}},[r("el-input",{model:{value:t.loginForm.user_email,callback:function(e){t.$set(t.loginForm,"user_email",e)},expression:"loginForm.user_email"}})],1),t._v(" "),r("el-form-item",{staticClass:"col-sm-12 col-lg-12",attrs:{error:t.passErr,label:"密码",prop:"user_password"}},[r("el-input",{attrs:{type:"password"},model:{value:t.loginForm.user_password,callback:function(e){t.$set(t.loginForm,"user_password",e)},expression:"loginForm.user_password"}})],1)],1)]),t._v(" "),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")])],1)],1)},staticRenderFns:[]};var b=r("VU/8")(g,f,!1,function(t){r("ckEz")},"data-v-68389139",null).exports,C=r("WXLd"),k=r.n(C),w={data:function(){var t=this;return{imgDataURL:"",code:"",nameErr:"",emailErr:"",registerForm:{user_id:0,user_name:"",user_email:"",user_password:"",checkpass:"",verification:""},rules:{user_name:[{required:!0,message:"请输入用户名",trigger:"blur"},{max:6,min:3,message:"用户名长度应在3-6位",trigger:"blur"}],user_email:[{required:!0,validator:function(t,e,r){""===e?r(new Error("请输入邮箱")):!1===/^\w+@\w+(\.[a-zA-Z]{2,3}){1,2}$/.test(e)?r(new Error("邮箱格式不正确，例如web@baidu.com")):r()},trigger:"blur"}],user_password:[{required:!0,validator:function(e,r,s){""===r?s(new Error("请输入密码")):(""!==t.registerForm.checkPass&&t.$refs.registerForm.validateField("checkPass"),s())},trigger:"blur"}],checkpass:[{required:!0,validator:function(e,r,s){""===r?s(new Error("请再次输入密码")):r!==t.registerForm.user_password?s(new Error("两次输入密码不一致!")):s()},trigger:"blur"}],verification:[{required:!0,validator:function(e,r,s){""===r?s(new Error("请输入验证码")):r!==t.code?s(new Error("验证码不正确!")):s()},trigger:"blur"}]}}},methods:{changeVerification:function(){var t=k.a.create();this.code=t.code,this.imgDataURL=t.dataURL,console.log(this.code,this.imgDataURL)},submitForm:function(t){}},mounted:function(){this.changeVerification()}},x={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{ref:"registerForm",staticClass:"login",attrs:{model:t.registerForm,rules:t.rules}},[r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[r("el-form-item",{staticClass:"col-sm-12 col-lg-12",attrs:{error:t.nameErr,label:"用户名",prop:"user_name"}},[r("el-input",{attrs:{type:"text"},model:{value:t.registerForm.user_name,callback:function(e){t.$set(t.registerForm,"user_name",e)},expression:"registerForm.user_name"}})],1),t._v(" "),r("el-form-item",{staticClass:"col-sm-12 col-lg-12",attrs:{error:t.emailErr,label:"邮箱",prop:"user_email"}},[r("el-input",{attrs:{type:"email"},model:{value:t.registerForm.user_email,callback:function(e){t.$set(t.registerForm,"user_email",e)},expression:"registerForm.user_email"}})],1),t._v(" "),r("el-form-item",{staticClass:"col-sm-12 col-lg-12",attrs:{label:"密码",prop:"user_password"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.registerForm.user_password,callback:function(e){t.$set(t.registerForm,"user_password",e)},expression:"registerForm.user_password"}})],1),t._v(" "),r("el-form-item",{staticClass:"col-sm-12 col-lg-12",attrs:{label:"确认密码",prop:"checkpass"}},[r("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:t.registerForm.checkpass,callback:function(e){t.$set(t.registerForm,"checkpass",e)},expression:"registerForm.checkpass"}})],1),t._v(" "),r("el-form-item",{staticClass:"col-sm-12 col-lg-12",attrs:{label:"验证码",prop:"verification"}},[r("img",{staticClass:"verifications",attrs:{src:t.imgDataURL,alt:""},on:{click:t.changeVerification}}),t._v(" "),r("el-input",{attrs:{type:"text",autocomplete:"off"},model:{value:t.registerForm.verification,callback:function(e){t.$set(t.registerForm,"verification",e)},expression:"registerForm.verification"}})],1)],1)]),t._v(" "),r("el-form-item",[r("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:function(e){return t.submitForm("registerForm")}}},[t._v("注册")])],1)],1)},staticRenderFns:[]};var F=r("VU/8")(w,x,!1,function(t){r("dFc0")},"data-v-eca71d02",null).exports,y={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"card text-dark bg-light mb-3"},[r("div",{staticClass:"card-header"},[t._v("联系我们")]),t._v(" "),r("div",{staticClass:"card-body"},[r("h4",{staticClass:"card-title"},[t._v("联系我们")]),t._v(" "),r("p",{staticClass:"card-text"},[t._v("27732357.@qq.com")]),t._v(" "),r("router-link",{attrs:{to:{name:"phoneNumber"}}},[t._v("电话")]),t._v(" "),r("router-link",{attrs:{to:{name:"personName"}}},[t._v("联系人")]),t._v(" "),r("router-view")],1)])},staticRenderFns:[]},E=r("VU/8")(null,y,!1,null,null,null).exports,$={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card text-dark bg-light mb-3"},[e("div",{staticClass:"card-header"},[this._v("快递信息")]),this._v(" "),e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[this._v("快递信息")]),this._v(" "),e("p",{staticClass:"card-text"},[this._v("27732357.@qq.com")])])])}]},L=r("VU/8")(null,$,!1,null,null,null).exports,R={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card text-dark bg-light mb-3"},[e("div",{staticClass:"card-header"},[this._v("历史订单")]),this._v(" "),e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[this._v("历史订单")]),this._v(" "),e("p",{staticClass:"card-text"},[this._v("27732357.@qq.com")])])])}]},U=r("VU/8")(null,R,!1,null,null,null).exports,q={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"card text-dark bg-light mb-3"},[e("div",{staticClass:"card-header"},[this._v("点餐文档")]),this._v(" "),e("div",{staticClass:"card-body"},[e("h4",{staticClass:"card-title"},[this._v("点餐文档")]),this._v(" "),e("p",{staticClass:"card-text"},[this._v("27732357.@qq.com")])])])}]},z=r("VU/8")(null,q,!1,null,null,null).exports,V={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("400800230")])},staticRenderFns:[]},D={render:function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("YIYOU")])},staticRenderFns:[]},N=[{path:"/",name:"homeLink",components:{default:p,orderingGuide:z,delivery:L,history:U}},{path:"/about",name:"aboutLink",redirect:"/about/contact",component:h,children:[{path:"/about/contact",name:"contactLink",redirect:"/about/contact/personname",component:E,children:[{path:"/about/contact/phone",name:"phoneNumber",component:r("VU/8")(null,V,!1,null,null,null).exports},{path:"/about/contact/personname",name:"personName",component:r("VU/8")(null,D,!1,null,null,null).exports}]},{path:"/about/history",name:"historyLink",component:U},{path:"/about/delivery",name:"deliveryLink",component:L},{path:"/about/orderingGuide",name:"orderingGuideLink",component:z}]},{path:"/login",name:"loginLink",component:b},{path:"/register",name:"registerLink",component:F},{path:"*",redirect:"/"},{path:"*",redirect:"/"}];r("v2ns"),r("tvR6");s.default.use(c.a),s.default.use(u.a);var P=new u.a({routes:N,mode:"history",scrollBehavior:function(t,e,r){return r||{x:0,y:0}}});new s.default({el:"#app",router:P,render:function(t){return t(l)}})},ckEz:function(t,e){},dFc0:function(t,e){},"g+dl":function(t,e){},tvR6:function(t,e){},v2ns:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.baf38fea5f0cfb4a18ba.js.map