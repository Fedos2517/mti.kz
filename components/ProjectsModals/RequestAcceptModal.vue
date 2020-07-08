<template>
  <v-row justify="center">
    <v-dialog v-model="show" max-width="755">
      <div class="request_accept_modal">
        <img src="~/assets/images/RequestAccept.png" class="request_accept_modal_img" />
        <h3 class="request_accept_modal_h3">Ваша заявка принята</h3>
        <h4 class="request_accept_modal_h4">Специалист свяжется с Вами в ближайшее время</h4>
        <div class="request_accept_modal_btns">
          <div @click="$router.push('/'), show = false" class="request_accept_modal_btn1">Вернуться на главную</div>
          <div class="request_accept_modal_btn2">Перейти в Мои заявки</div>
        </div>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },

  created() {
    this.$store.subscribe((mutation) => {
      if (mutation.type === 'modal/RequestAcceptModal') {
        this.show = true
      }
    })
  }
}
</script>
