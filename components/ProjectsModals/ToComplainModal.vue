<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="755">
      <div class="to_complain_modal">
        <h3 class="to_complain_modal_h3">Оставить жалобу</h3>
        <h4 class="to_complain_modal_h4">Ваша жалоба</h4>
        <input
          type="text"
          class="to_complain_modal_input"
          placeholder="Например: плагиат или ненастоящее фото"
        />
        <div class="to_complain_modal_btn">Оставить жалобу</div>
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