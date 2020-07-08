<template>
  <v-dialog max-width="400" v-model="show">
    <div class="modal-window">
      <img src="~/assets/images/modal-window-log.png" class="modal-window_logo" />
      <div @click="fbLogin()" class="modal-window_facebook">
        <img src="~/assets/images/banner-facebook.png" class="modal-window_facebook_img" />
        Войти через Facebook
      </div>
      <div @click="vkLogin()" class="modal-window_vk">
        <img src="~/assets/images/banner-vk.png" class="modal-window_vk_img" />
        Войти через VK
      </div>
      <div @click="googleLogin" class="modal-window_google">
        <img src="~/assets/images/banner-google.png" class="modal-window_google_img" />
        Войти через Google
      </div>
      <div class="modal-window_line-div">
        <div class="modal-window_line"></div>
        <h2 class="modal-window_h2">ИЛИ</h2>
        <div class="modal-window_line"></div>
      </div>

      <div class="c-input modal-window_input">
        <input
          v-model="email"
          type="text"
          class="c-input__input"
          :class="{'c-input__input__error': 'email' in error && error.email}"
          placeholder="E-mail/номер телефона"
        />
        <h2 class="c-input__error-title">{{ error.email }}</h2>
      </div>

      <div class="c-input modal-window_input">
        <input
          v-model="password"
          type="password"
          class="c-input__input"
          :class="{'c-input__input__error': 'password' in error && error.password }"
          placeholder="Пароль"
        />
        <h2 class="c-input__error-title">{{ error.password }}</h2>
      </div>

      <button @click="login()" class="modal-window_loginbutton">Войти</button>
      <div class="modal-window_footer">
        <input type="checkbox" class="modal-window_footer_checkbox" />
        <label for="modal-window_footer_checkbox">Запомнить меня?</label>
        <h3 class="modal-window_footer_h3">Забыли пароль?</h3>
      </div>
      <div class="modal-window_under-footer">
        <h4 class="modal-window_h4">Нет аккаунта?</h4>
        <button
          @click="show = !show, $modals.showModal({modal: 'SelectRole'})"
          class="modal-window_under-footer_regbutton"
        >Зарегистрироваться</button>
        <img src="~/assets/images/the_true_sight.png" class="modal_img" />
      </div>
    </div>
  </v-dialog>
</template>
<script>
import VueJwtDecode from 'vue-jwt-decode'

export default {
  data: function() {
    return {
      show: false,
      info: null,

      email: '',
      password: '',

      error: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    fbLogin() {
      this.$auth.loginWith('facebook')
    },

    googleLogin() {
      this.$auth.loginWith('google')
    },

    vkLogin() {
      this.$auth.loginWith('vk')
    },

    login() {
      this.$store
        .dispatch('auth/login', { email: this.email, password: this.password })
        .then(res => {
          // this.$router.push('/')
          this.show = false
        })
        .catch(err => {
          this.error = err.messages
        })
    }
  },

  computed: {
    user() {
      return this.$store.state.auth.user
    }
  },

  created() {
    this.$store.subscribe(mutation => {
      if (mutation.type === 'modal/LogInModal') {
        this.show = true
      }
    })
  }
}
</script>

<style></style>
