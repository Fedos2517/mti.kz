<template>
  <v-dialog max-width="450" v-model="show">
    <div class="modal-window3">
      <h2 class="modal-window3_h2">Проверка кода</h2>
      <img
        src="~/assets/images/modal-window-close.png"
        class="modal-window3-img"
      />
      <input v-model="code"  class="modal-window3__input" type="text" placeholder="Введите проверочный код">
      <div @click="verifyCode()" class="modal-window_btn">Отправить номер</div>
    </div>
  </v-dialog>
</template>
<script>
  export default {
    data() {
      return {
        show: false,
        code: ''
      }
    },

    methods: {
      verifyCode() {
        this.$store.dispatch('auth/verifyCode', this.code)
          .then(() => {
            this.show = false
          })
      }
    },

    computed: {
      phone() {
        return this.$store.state.auth.phone
      }
    },

    watch: {
      phone(newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },

    created() {
      this.$store.subscribe((mutation) => {
        if (mutation.type === 'modal/VerifyCode') {
          this.show = true
        }
      })
    }
  }
</script>

<style></style>
