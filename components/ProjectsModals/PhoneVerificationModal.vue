<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="755">
      <div class="phone_verification_card">
        <h3
          class="phone_verification_card_h3"
        >Для оформления заявки необходимо указать и верифицировать Ваш номер телефона в Профиле клиента</h3>
        <img src="~/assets/images/phone_verification.png" class="phone_verification_card_img" />
        <div class="request_accept_modal_btns">
          <div class="request_accept_modal_btn1">Вернуться на главную</div>
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
      dialog: true
    }
  }
}
</script>