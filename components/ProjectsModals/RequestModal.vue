<template>
  <v-row justify="center">
    <v-dialog v-model="show" width="380px">
      <div class="request_modal">
        <div class="request_modal_header">
          <h2 class="request_modal_header_h2">Новая заявка</h2>
        </div>

        <div class="error-text">
          <h2 class="error-text__messages">{{ error }}</h2>
        </div>

        <div class="request_modal_body">
          <div class="request_modal_body_left">


            <h3 class="request_modal_body_h3">Выберите категорию</h3>
            <select class="request_modal_body_input" v-model="request.category">
              <option disabled selected value="">Выберите из списка</option>
              <option v-for="item in categories" :value="item.id">{{ item.name }}</option>
            </select>

          </div>
          <div class="request_modal_body_right">
            <h3 class="request_modal_body_h3">Ваш комментарий</h3>
            <textarea
              v-model="request.comment"
              class="request_modal_body_input_big"
              placeholder="Например: есть маленькие дети, желательно в классическом стиле"
            ></textarea>

            <div style="opacity: 0;" class="request_modal_body_right_text">
              <img src="~/assets/images/importfile.png" class="request_modal_body_right_img"/>
              <h4 class="request_modal_body_right_h4">(максимум 6 файлов)</h4>
            </div>
            <input
              style="display: none;"
              type="text"
              class="request_modal_body_right_input"
              placeholder="Прикрепить ТЗ, план или фото"
            />
          </div>
        </div>
        <div @click="sendSubmit" class="request_modal_footer">
          <div  class="request_modal_footer_btn">Отправить заявку</div>
        </div>
      </div>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    data() {
      return {
        show: false,

        error: '',

        request: {
          id: '',
          category: '',
          comment: ''
        }
      }
    },

    watch: {
      show() {
        this.error = ''
      }
    },

    computed: {
      categories() {
        return this.$store.state.auth.categories
      }
    },

    methods: {
      sendSubmit() {
        this.$store.dispatch('projects/sendSubmit', this.request)
          .then((res) => {
            this.show = false
            this.$modals.showModal({modal: 'RequestAcceptModal'})
          })
          .catch((err) => {
            this.error = err.messages
          })
      }
    },

    created() {
      this.$store.subscribe((mutation) => {
        if (mutation.type === 'modal/RequestModal') {
          this.show = true
          this.request.id = this.$route.query.id
          this.$store.dispatch('auth/getCategories')
        }
      })
    }
  }
</script>
