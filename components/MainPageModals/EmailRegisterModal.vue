<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="380">
      <div class="email_register_card">
        <h3
          class="email_register_card_h3"
        >Мы отправили ссылку на info@mti.kz, проверьте данный электронный адрес и следуйте инструкциям в письме</h3>
        <div class="email_register_card_btn">ОК</div>
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