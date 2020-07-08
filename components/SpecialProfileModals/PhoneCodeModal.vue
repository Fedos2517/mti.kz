<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="754">
      <div class="p_c_m">
        <h3 class="p_c_m_h3">Проверка номера телефона</h3>
        <h4 class="p_c_m_h4">
          Введите код, который мы отправили на номер
          +7 702 000 00 28
        </h4>
        <input type="text" class="p_c_m_input" />
        <h5 class="p_c_m_h5">Отправить код повторно через - 00:59</h5>
        <div class="p_c_m_btn">Далее</div>
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