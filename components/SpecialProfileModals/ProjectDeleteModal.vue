<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="780">
      <div class="p_d_m_c">
        <h3 class="p_d_m_c_h3">Удаление проекта</h3>
        <h4 class="p_d_m_c_h4">
          Вы действительно хотите удалить проект?
          Данное действие необратимо
        </h4>
        <div class="p_d_m_c_footer">
          <div class="p_d_m_c_btn">Да</div>
          <div class="p_d_m_c_btn">Нет</div>
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