<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" max-width="755">
      <div class="complain_accept_modal">
        <img src="~/assets/images/to_complain_accept.png" class="complain_accept_modal_img" />
        <h3 class="complain_accept_modal_h3">Ваша жалоба принята</h3>
        <h4 class="complain_accept_modal_h4">Мы обязательно рассмотрим её в ближайшее время</h4>
        <div class="complain_accept_modal_btn">Понятно</div>
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