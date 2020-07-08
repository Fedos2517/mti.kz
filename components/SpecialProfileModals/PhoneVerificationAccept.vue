<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="754">
      <div class="p_c_m">
        <h3 class="p_v_a_h3">Большое спасибо!</h3>
        <h4
          class="p_v_a_h4"
        >Ваш номер телефона успешно подтвержден, теперь Вы можете использовать его для авторизации</h4>
        <img src="~/assets/images/phone_verification.png" class="p_v_a_im" />
        <div class="p_v_a_btn">Добавить новый проект</div>
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
