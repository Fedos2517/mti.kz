<template>
  <div class="special-banner">
    <div class="desktop-wrapper">
      <div class="under-wrapper">
        <div class="special-banner_authform">
          <h2 class="special-banner_authform-h2">
            Зарегистрируйтесь бесплатно
          </h2>
          <div class="special-banner_authform-facebook">
            <img
              src="~/assets/images/banner-facebook.png"
              class="authform-facebook-img"
            />
            <h4 class="authform-facebook-h4">Войти через Facebook</h4>
          </div>
          <div class="special-banner_authform-vk">
            <img src="~/assets/images/banner-vk.png" class="authform-vk-img" />
            <h4 class="authform-vk-h4">Войти через VK</h4>
          </div>
          <div class="special-banner_authform-google">
            <img
              src="~/assets/images/banner-google.png"
              class="authform-google-img"
            />
            <h4 class="authform-google-h4">Войти через Google</h4>
          </div>
          <div class="line-div">
            <div class="special-banner_authform-line"></div>
            <h3 class="special-banner_authform-h3">ИЛИ</h3>
            <div class="special-banner_authform-line"></div>
          </div>
          <input
            type="text"
            class="special-banner_authform-input-name"
            placeholder="Название компании/Имя"
          />
          <input
            type="text"
            class="special-banner_authform-input-email"
            placeholder="Введите Ваш Email"
          />
          <div class="special-banner_authform-checkbox">
            <input type="checkbox" class="authform-checkbox" />
            <h4 class="authform-checkbox-h4">
              Я ознакомлен и принимаю Пользовательское соглашение и Политику
              конфиденциальности
            </h4>
          </div>
          <button 
          class="special-banner_authform-regbutton regbutton-h4"
          @click="openSignInModal"
          >
            Зарегистрироваться
          </button>
        </div>
        <div class="special-banner_text">
          Покажите свое портфолио более чем миллиону реальных пользователей
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  methods:{
    openSignInModal(){
      this.$emit('openSignInModal')
    }
  }
}
</script>

<style></style>
