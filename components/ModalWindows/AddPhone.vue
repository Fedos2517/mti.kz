<template>
  <v-dialog max-width="450" v-model="show">
    <div class="modal-window3">
      <h2 class="modal-window3_h2">Добавление номера</h2>
      <img
        src="~/assets/images/modal-window-close.png"
        class="modal-window3-img"
      />
      <input v-mask="'+# (###) ###-##-##'" v-model="phone"  class="modal-window3__input" type="text" placeholder="Введите номер телефона">
      <div @click="verifyPhone()" class="modal-window_btn">Отправить номер</div>
    </div>
  </v-dialog>
</template>
<script>
  export default {
    data() {
      return {
        show: false,
        phone: ''
      }
    },

    methods: {
      verifyPhone() {
        this.$store.dispatch('auth/verifyPhone', this.phone)
          .then(() => {
            this.show = false
            this.$modals.showModal({modal: 'VerifyCode'})
          })
      }
    },

    computed: {
      email() {
        return this.$store.state.auth.user.email
      }
    },

    created() {
      this.$store.subscribe((mutation) => {
        if (mutation.type === 'modal/AddPhone') {
          this.show = true
        }
      })
    }
  }
</script>

<style></style>
