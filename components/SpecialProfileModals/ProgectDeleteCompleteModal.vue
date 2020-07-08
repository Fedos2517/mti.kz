<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="755">
      <div class="p_d_c_m">
        <img src="~/assets/images/project_delete_accept_img.png" class="p_d_c_m_img" />
        <h3 class="p_d_c_m_h3">Проект удален</h3>
        <div class="p_d_c_m_btn">Перейти в Проекты</div>
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