<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="780">
      <div class="subscribe_modal_card">
        <h3 class="subscribe_modal_card_h3">Большое спасибо!</h3>
        <h4
          class="subscribe_modal_card_h4"
        >Вы оформили подписку! Каждую неделю мы Вам будем отправлять самые лучшие подборки!</h4>
        <img src="~/assets/images/SubscribeModal.png" class="subscribe_modal_card_img" />
        <div class="subscribe_modal_card_btn">Отлично!</div>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  }
}
</script>
