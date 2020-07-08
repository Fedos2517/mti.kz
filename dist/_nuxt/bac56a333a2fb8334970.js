(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{393:function(t,e,r){"use strict";r.r(e);r(51);var o={data:function(){return{user:{first_name:"",last_name:"",date_of_birth:"",role:"1",email:"",password:""},passwordCheck:{password:"",repeat_password:""},error:{first_name:"",last_name:"",date_of_birth:"",email:"",password:""}}},methods:{registerUser:function(){var t=this;this.$store.dispatch("auth/registerClient",this.user).then((function(){t.$router.push("/")})).catch((function(e){t.error=e.messages})),this.passwordCheck.password==this.passwordCheck.repeat_password&&this.passwordCheck.password.length>0?this.user.password=this.passwordCheck.password:this.error.password="Пароли не подходят"}},mounted:function(){this.user.email=this.$route.query.email}},n=r(5),_={layout:"header",components:{Registrationusers:Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"registration-users"},[r("div",{staticClass:"desktop-wrapper",staticStyle:{width:"1200px"}},[r("h2",{staticClass:"registration-users_h2"},[t._v("Завершение регистрации")]),t._v(" "),r("h3",{staticClass:"registration-users_h3"},[t._v("Заполните обязательные данные")]),t._v(" "),r("div",{staticClass:"c-input registration-users_input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.first_name,expression:"user.first_name"}],staticClass:"c-input__input",class:{"c-input__input__error":"first_name"in t.error&&t.error.first_name},attrs:{type:"text",placeholder:"Введите имя*"},domProps:{value:t.user.first_name},on:{input:function(e){e.target.composing||t.$set(t.user,"first_name",e.target.value)}}}),t._v(" "),r("h2",{staticClass:"c-input__error-title"},[t._v(t._s(t.error.first_name))])]),t._v(" "),r("div",{staticClass:"c-input registration-users_input registration-users_input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.last_name,expression:"user.last_name"}],staticClass:" c-input__input",class:{"c-input__input__error":"last_name"in t.error&&t.error.last_name},attrs:{type:"text",placeholder:"Введите фамилию*"},domProps:{value:t.user.last_name},on:{input:function(e){e.target.composing||t.$set(t.user,"last_name",e.target.value)}}}),t._v(" "),r("h2",{staticClass:"c-input__error-title"},[t._v(t._s(t.error.last_name))])]),t._v(" "),r("div",{staticClass:"c-input registration-users_input registration-users_input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:" c-input__input",class:{"c-input__input__error":"email"in t.error&&t.error.email},attrs:{type:"text",placeholder:"Введите e-mail*"},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}}),t._v(" "),r("h2",{staticClass:"c-input__error-title"},[t._v(t._s(t.error.email))])]),t._v(" "),r("div",{staticClass:"c-input registration-users_input registration-users_input"},[r("input",{directives:[{name:"mask",rawName:"v-mask",value:"####-##-##",expression:"'####-##-##'"},{name:"model",rawName:"v-model",value:t.user.date_of_birth,expression:"user.date_of_birth"}],staticClass:"c-input__input",class:{"c-input__input__error":"date_of_birth"in t.error&&t.error.date_of_birth},attrs:{type:"text",placeholder:"Введите дату рождения (ГГГГ-ММ-ДД)*"},domProps:{value:t.user.date_of_birth},on:{input:function(e){e.target.composing||t.$set(t.user,"date_of_birth",e.target.value)}}}),t._v(" "),r("h2",{staticClass:"c-input__error-title"},[t._v(t._s(t.error.date_of_birth))])]),t._v(" "),r("h4",{staticClass:"registration-users_h4"},[t._v("\n      * - обязательные для заполнения поля\n    ")]),t._v(" "),r("h3",{staticClass:"registration-users_h3"},[t._v("Придумайте пароль")]),t._v(" "),r("div",{staticClass:"c-input registration-users_input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordCheck.password,expression:"passwordCheck.password"}],staticClass:"c-input__input",class:{"c-input__input__error":"password"in t.error&&t.error.password},attrs:{type:"password",placeholder:"Введите пароль*"},domProps:{value:t.passwordCheck.password},on:{input:function(e){e.target.composing||t.$set(t.passwordCheck,"password",e.target.value)}}}),t._v(" "),r("h2",{staticClass:"c-input__error-title"},[t._v(t._s(t.error.password))])]),t._v(" "),r("div",{staticClass:"c-input registration-users_input"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.passwordCheck.repeat_password,expression:"passwordCheck.repeat_password"}],staticClass:"c-input__input ",class:{"c-input__input__error":"password"in t.error&&t.error.password},attrs:{type:"password",placeholder:"Повторите пароль*"},domProps:{value:t.passwordCheck.repeat_password},on:{input:function(e){e.target.composing||t.$set(t.passwordCheck,"repeat_password",e.target.value)}}}),t._v(" "),r("h2",{staticClass:"c-input__error-title"})]),t._v(" "),r("h4",{staticClass:"registration-users_h4",staticStyle:{width:"300px"}},[t._v("\n      Пароль должен состоять минимум из 8 символов, 1 заглавной буквы и 1\n      цифры\n    ")]),t._v(" "),r("button",{staticClass:"registration-user_btn",on:{click:t.registerUser}},[t._v("Зарегистрироваться")])])])}),[],!1,null,null,null).exports}},l=Object(n.a)(_,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Registrationusers")],1)}),[],!1,null,null,null);e.default=l.exports}}]);