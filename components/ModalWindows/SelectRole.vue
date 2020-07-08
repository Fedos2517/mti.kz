<template>
  <v-dialog max-width="400" v-model="show">
    <div class="modal-window1">
      <h2 class="modal-window1_h2">Регистрация</h2>
      <h3 class="modal-window1_h3">Выберите Вашу роль на сайте ISTOK HOME</h3>
      <h4 class="modal-window1_h4">Что это значит?</h4>
      <div @click="selectRole(1)" class="modal_window1_btn_client"
           :class="{'modal-window1__button__active': role === 1}">Клиент
      </div>
      <div @click="selectRole(2)" class="modal_window1_btn_specialist"
           :class="{'modal-window1__button__active': role === 2}">Специалист
      </div>
      <div @click="sendRole()" class="modal_window1_btn_next">Далее</div>
    </div>
  </v-dialog>
</template>
<script>
  export default {
    data() {
      return {
        show: false,
        role: null
      }
    },

    methods: {
      selectRole(role) {
        this.role = role
      },

      sendRole() {
        if (this.role) {
          this.$store.commit('auth/setRole', this.role)
          this.show = false
          this.$modals.showModal({modal: 'SendEmail'})
        }
      }
    },

    created() {
      this.$store.subscribe((mutation) => {
        if (mutation.type === 'modal/SelectRole') {
          this.show = true
        }
      })
    },

   watch: {
      show(newVal) {
        if(!newVal){
          this.role = null
        }
      }
   }
  }
</script>

<style></style>
