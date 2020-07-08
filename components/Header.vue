<template>
  <div class="header">
    <div class="header-wrapper">
      <div class="header-top">
        <img
          src="~/assets/images/logo.svg"
          @click="goTo('/')"
          class="header-top_logo"
        />
        <div class="header-top_search-box">

          <input
            v-model="searchData.value"
            @keyup.enter="search()"
            placeholder="Что ищем?"
            type="text"
            class="header-top_input"
          />

          <button @click="search()" class="header-top_search-button">Найти</button>
          <img src="~/assets/images/loopa.png" class="loopa"/>
        </div>
        <div v-if="!authorized" class="header-top_navigation-box">
          <button
            v-if="page !== 'specialists'"
            @click="goTo('/specialists')"
            class="header-top_specials"
          >
            Специалистам
          </button>
          <button
            @click="$modals.showModal({modal: 'LogInModal'})"
            class="header-top_login"
          >
            Войти
          </button>
        </div>

        <div v-if="user.role === 1" class="c-user">
          <div class="c-user__status">
            <h2 class="c-user__premium">ISTOK PREMIUM</h2>
          </div>

          <img class="c-user__favorites" src="~/assets/images/icons/favorites-icon.svg" alt="">

          <div class="c-user__profile-block">

            <div @click.prevent="showMenu()" @blur="closeMenu()" class="c-user__profile">
              <img src="~/assets/images/icons/profile-img.jpg" alt="" class="c-user__avatar">
              <h2 class="c-user__username">{{ user.email }}</h2>
            </div>

            <transition name="fade">
              <div v-show="dropdownMenu" class="c-user__drop-down l-drop-down">
                <div class="l-drop-down__list-items">
                  <div class="l-drop-down__list-item l-drop-down__padding">
                    <img class="l-drop-down__icon" src="~/assets/images/icons/profile-icon.svg" alt="">
                    <h2 class="l-drop-down__title">Профиль</h2>
                  </div>

                  <div class="l-drop-down__list-item l-drop-down__padding">
                    <img class="l-drop-down__icon" src="~/assets/images/icons/mail-icon.svg" alt="">
                    <h2 class="l-drop-down__title">Мои заявки</h2>
                  </div>

                  <div class="l-drop-down__list-item l-drop-down__padding">
                    <img class="l-drop-down__icon" src="~/assets/images/icons/notification-icon.svg" alt="">
                    <h2 class="l-drop-down__title">Уведомления</h2>
                  </div>

                  <div class="l-drop-down__line"></div>

                  <div @click="logout" class="l-drop-down__list-item l-drop-down__padding">
                    <img class="l-drop-down__icon" src="~/assets/images/icons/exit-icon.svg" alt="">
                    <h2 class="l-drop-down__title">Выйти</h2>
                  </div>
                </div>
              </div>
            </transition>

          </div>
        </div>

        <div v-if="user.role === 2" class="c-user">
          <div class="c-user__status">
            <h2 class="c-user__premium">Перейти на PRO</h2>
          </div>

          <img class="c-user__favorites" src="~/assets/images/icons/favorites-icon.svg" alt="">

          <div class="c-user__profile-block">

            <div @click.prevent="showMenu()" @blur="closeMenu()" class="c-user__profile">
              <img src="~/assets/images/icons/profile-img.jpg" alt="" class="c-user__avatar">
              <h2 class="c-user__username">{{ user.email }}</h2>
            </div>

            <transition name="fade">
              <div v-show="dropdownMenu" class="c-user__drop-down l-drop-down">
                <div class="l-drop-down__list-items">
                  <div class="l-drop-down__list-item l-drop-down__padding">
                    <img class="l-drop-down__icon" src="~/assets/images/icons/profile-icon.svg" alt="">
                    <h2 class="l-drop-down__title">Обзор</h2>
                  </div>

                  <div class="l-drop-down__list-item l-drop-down__padding">
                    <img class="l-drop-down__icon" src="~/assets/images/icons/projects-icon.svg" alt="">
                    <h2 class="l-drop-down__title">Проекты</h2>
                  </div>

                  <div class="l-drop-down__list-item l-drop-down__padding">
                    <img class="l-drop-down__icon" src="~/assets/images/icons/reviews-icon.svg" alt="">
                    <h2 class="l-drop-down__title">Отзывы</h2>
                  </div>

                  <div @click="$router.push(`/specialist-projects-manage?id=${user.user_id}&type=Requests&status=created`)" class="l-drop-down__list-item l-drop-down__padding">
                    <img class="l-drop-down__icon" src="~/assets/images/icons/mail-icon.svg" alt="">
                    <h2 class="l-drop-down__title">Заявки</h2>
                  </div>

                  <div class="l-drop-down__list-item l-drop-down__padding">
                    <img class="l-drop-down__icon" src="~/assets/images/icons/notification-icon.svg" alt="">
                    <h2 class="l-drop-down__title">Уведомления</h2>
                  </div>

                  <div class="l-drop-down__line"></div>

                  <div  @click="logout()" class="l-drop-down__list-item l-drop-down__padding">
                    <img class="l-drop-down__icon" src="~/assets/images/icons/exit-icon.svg" alt="">
                    <h2  class="l-drop-down__title">Выйти</h2>
                  </div>
                </div>
              </div>
            </transition>

          </div>
        </div>
      </div>
    </div>

    <div class="header-bottom">
      <button @click="$router.push('/projects-client-special')" class="header-bottom_btn">Проекты</button>
      <div style="width: 1px; height: 20px; background: #E5E5E5;"></div>
      <button class="header-bottom_btn">Специалисты</button>
      <div style="width: 1px; height: 20px; background: #E5E5E5;"></div>
      <button class="header-bottom_btn">Блог</button>
    </div>
    <!-- <GlobalModal /> -->
  </div>
</template>

<script>
  import GlobalModal from '~/components/ModalWindows/GlobalModal.vue'

  export default {
    components: {
      GlobalModal
    },

    data() {
      return {
        dropdownMenu: false,

        searchData: {
          page: 1,
          value: ''
        }
      }
    },

    computed: {
      page() {
        return this.$route.name
      },

      authorized() {
        return this.$store.state.auth.token
      },

      user() {
        return this.$store.state.auth.user
      }
    },

    methods: {
      search() {
        this.$router.push(`/search-specials?page=${this.searchData.page}&search=${this.searchData.value}`)
      },

      goTo(link) {
        this.$router.push(link)
      },

      showMenu() {
        this.dropdownMenu = !this.dropdownMenu
      },

      closeMenu(e) {
        if (!this.$el.contains(e.target)) {
          this.dropdownMenu = false
        }
      },

      logout() {
        this.$cookies.removeAll()

        this.$store.commit('auth/setToken', '')
        this.$store.commit('auth/setUser', '')

        this.$router.push('/')
      }
    },

    mounted() {
      document.addEventListener('click', this.closeMenu)
    }
  }
</script>

<style></style>
