<template>
  <v-dialog max-width="790" v-model="show">
    <div class="modal-window3">
      <h2 class="modal-window3_h2">Регистрация</h2>
      <img
        src="~/assets/images/modal-window-close.png"
        class="modal-window3-img"
      />
      <h3 class="modal-window3_h3">
        Мы отправили ссылку на <span class="modal-window3_h3__bold">{{ email }}</span>, проверьте данный электронный адрес и
        следуйте инструкциям в письме
      </h3>
      <div @click="pushToHome()" class="modal-window_btn">Вернуться на главную</div>
    </div>
  </v-dialog>
</template>
<script>
export default {
  data() {
    return {
      show: false,
    }
  },

  methods: {
    pushToHome() {
      this.show = false
      this.$router.push('/')
    }
  },

  computed: {
    email() {
      return this.$store.state.auth.email
    }
  },

  created() {
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'modal/CheckEmail') {
        this.show = true
      }
    })
  }
}
</script>

<style></style>
