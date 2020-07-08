<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="755">
      <div class="g_t_p_m">
        <h3 class="g_t_p_m_h3">Перейти на PRO</h3>
        <div class="g_t_p_m_div">
          <h3 class="g_t_p_m_div_h3">
            Стандартный аккаунт Специалиста сервиса ISTOK HOME включает добавление 3-х бесплатных проектов, чтобы продолжить добавлять больше проектов, Вам необходимо оформить статус PRO-специалиста.
            <br />
            <br />Оставьте заявку, наш менеджер свяжется с Вами в рабочее время для уточнения информации и оформления статуса PRO.
          </h3>
          <img src="~/assets/images/GoToProImg.png" class="g_t_p_m_div_img" />
        </div>
        <div class="g_t_p_m_btn">Стать PRO</div>
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