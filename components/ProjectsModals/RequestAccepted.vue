<template>
  <v-dialog v-model="show" width="600px">
    <div class="c-modal-accepted">
      <img class="c-modal-accepted__image" src="~/assets/images/modal-accepted-image.svg" alt="">

      <h2 class="c-modal-accepted__title">
        Заявка №{{ id || '' }} принята
      </h2>

      <h3 class="c-modal-accepted__subtitle">
        Уведомление было отправлено заказчику. Перейдите в Мои заявки чтобы связаться с заказчиком, в течении 24 часов, начиная с текущего момента.
      </h3>

      <div class="c-modal-accepted__buttons">
        <button @click="$router.push('/')" class="c-modal-accepted__button c-modal-accepted__button__border">Вернуться на главную</button>
        <button class="c-modal-accepted__button c-modal-accepted__button__theme-blue">Перейти в Мои заявки</button>
      </div>
    </div>
  </v-dialog>
</template>

<script>
  export default {
    data() {
      return {
        show: false
      }
    },

    computed: {
      id() {
        return this.$store.state.special.requestId
      }
    },

    created() {
      this.$store.subscribe((mutation) => {
        if (mutation.type === 'modal/RequestAccepted') {
          this.show = true
        }
      })
    }
  }
</script>
