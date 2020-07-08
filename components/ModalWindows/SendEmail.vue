<template>
  <v-dialog max-width="790" v-model="show">
    <div class="modal-window2">
      <div class="modal-window2_left">
        <h2 class="modal-window_left-h2">Регистрация</h2>
        <h3 class="modal-window_left-h3">
          Введите Ваш электронный адрес на который мы отправим ссылку для
          завершении регистрации
        </h3>
        <div class="c-input modal-window_left-input-margin">
          <input
            v-model="email"
            type="text"
            class=" c-input__input modal-window_left-input"
            :class="{'c-input__input__error': error}"
            placeholder="Введите Ваш e-mail"
          />
          <h2 class="c-input__error-title">{{ error[0] }}</h2>
        </div>

        <div @click="sendEmail()" class="modal-window_left-btn">Отправить ссылку</div>
      </div>
      <div class="modal-window2_center"></div>
      <div class="modal-window2_right">
        <img
          src="~/assets/images/modal-window-close.png"
          class="modal-window_right-close"
        />
        <div class="special-banner_authform-facebook">
          <img
            src="~/assets/images/banner-facebook.png"
            class="authform-facebook-img"
          />
          <h4 class="authform-facebook-h4">Войти через Facebook</h4>
        </div>
        <div class="special-banner_authform-vk">
          <img src="~/assets/images/banner-vk.png" class="authform-vk-img" />
          <h4 class="authform-vk-h4">Войти через VK</h4>
        </div>
        <div class="special-banner_authform-google">
          <img
            src="~/assets/images/banner-google.png"
            class="authform-google-img"
          />
          <h4 class="authform-google-h4">Войти через Google</h4>
        </div>
      </div>
    </div>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      email: '',

      error: ''
    }
  },

  methods: {
    sendEmail() {
      this.$store.dispatch('auth/sendEmail', this.email)
        .then((res) => {
          this.show = false
          this.$modals.showModal({modal: 'CheckEmail'})
        })
        .catch((err) => {
          this.error = err.messages
        })
    }
  },

  created() {
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'modal/SendEmail') {
        this.show = true
      }
    })
  },

  watch: {
    show(newVal) {
      if(!newVal){
        this.email = ''
      }
    }
  }
}
</script>

<style></style>
