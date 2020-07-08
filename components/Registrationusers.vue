<template>
  <div class="registration-users">
    <div class="desktop-wrapper" style="width:1200px;">
      <h2 class="registration-users_h2">Завершение регистрации</h2>
      <h3 class="registration-users_h3">Заполните обязательные данные</h3>

      <div class="c-input registration-users_input">
        <input
          type="text"
          class="c-input__input"
          :class="{'c-input__input__error': 'first_name' in error && error.first_name}"
          placeholder="Введите имя*"
          v-model="user.first_name"
        />

        <h2 class="c-input__error-title">{{ error.first_name }}</h2>
      </div>

      <div class="c-input registration-users_input registration-users_input">
        <input
          type="text"
          class=" c-input__input"
          placeholder="Введите фамилию*"
          v-model="user.last_name"
          :class="{'c-input__input__error': 'last_name' in error && error.last_name}"
        />

        <h2 class="c-input__error-title">{{ error.last_name }}</h2>
      </div>

      <div class="c-input registration-users_input registration-users_input">
        <input
          type="text"
          class=" c-input__input"
          placeholder="Введите e-mail*"
          v-model="user.email"
          :class="{'c-input__input__error': 'email' in error && error.email}"
        />

        <h2 class="c-input__error-title">{{ error.email }}</h2>
      </div>

      <div class="c-input registration-users_input registration-users_input">
        <input
          type="text"
          class="c-input__input"
          placeholder="Введите дату рождения (ГГГГ-ММ-ДД)*"
          v-mask="'####-##-##'"
          v-model="user.date_of_birth"
          :class="{'c-input__input__error': 'date_of_birth' in error && error.date_of_birth}"
        />

        <h2 class="c-input__error-title">{{ error.date_of_birth }}</h2>
      </div>

      <h4 class="registration-users_h4">
        * - обязательные для заполнения поля
      </h4>
      <h3 class="registration-users_h3">Придумайте пароль</h3>

      <div class="c-input registration-users_input">
        <input
          type="password"
          class="c-input__input"
          placeholder="Введите пароль*"
          v-model="passwordCheck.password"
          :class="{'c-input__input__error': 'password' in error && error.password}"
        />

        <h2 class="c-input__error-title">{{ error.password }}</h2>
      </div>

      <div class="c-input registration-users_input">
        <input
          type="password"
          class="c-input__input "
          placeholder="Повторите пароль*"
          v-model="passwordCheck.repeat_password"
          :class="{'c-input__input__error': 'password' in error && error.password}"
        />

        <h2 class="c-input__error-title"></h2>
      </div>


      <h4 class="registration-users_h4" style="width:300px;">
        Пароль должен состоять минимум из 8 символов, 1 заглавной буквы и 1
        цифры
      </h4>
      <button @click="registerUser" class="registration-user_btn">Зарегистрироваться</button>
    </div>
  </div>
</template>

<script>
  import VueJwtDecode from 'vue-jwt-decode'

  export default {
    data: () => ({
      user: {
        first_name: '',
        last_name: '',
        date_of_birth: '',
        role: '1',
        email: '',
        password: ''
      },

      passwordCheck: {
        password: '',
        repeat_password: ''
      },

      error: {
        first_name: '',
        last_name: '',
        date_of_birth: '',
        email: '',
        password: ''
      }
    }),

    methods: {
       registerUser() {
        this.$store.dispatch('auth/registerClient', this.user)
          .then(() => {
            this.$router.push('/')
          })
          .catch((err) => {
            this.error = err.messages
          })

        if(this.passwordCheck.password == this.passwordCheck.repeat_password && this.passwordCheck.password.length > 0) {
          this.user.password = this.passwordCheck.password
        } else {
          this.error.password = 'Пароли не подходят'
        }
      }
    },

    mounted() {
      this.user.email = this.$route.query.email
    }
  }
</script>

<style></style>
