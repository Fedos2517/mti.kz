<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="754">
      <div class="p_v_p_m">
        <h3 class="p_v_p_m_h3">Проверка номера телефона</h3>
        <h4
          class="p_v_p_m_h4"
        >Перед тем как начать добавлять проекты на ISTOK HOME Вам необходимо подтвердить Ваш номер телефона. Введите номер телефона, мы вышлем на него СМС-код</h4>
        <input type="text" class="p_v_p_m_input" placeholder="+7 (ХХХ) ХХХ - ХХ - ХХ" />
        <div class="p_v_p_m_btn">Далее</div>
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
  },
  created() {
    this.$store.subscribe(mutation => {
      if (mutation.type === 'modal/PhoneVerificationModal') {
        this.show = true
      }
    })
  }
}
</script>
