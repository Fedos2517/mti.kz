<template>
  <div class="projects-client-special">
    <div class="desktop-wrapper">
      <div class="projects-client-special_header">
        <v-breadcrumbs
          :items="items"
          divider="\"
          style="padding-left:0px; padding:18px 0;"
        ></v-breadcrumbs>
        <h2 class="projects-client-special_header-h2">
          Проекты
        </h2>
        <div class="projects-client-special_header-popup-div">
          <div class="projects-client-special_header-popup1">
            Город
            <img
              src="~/assets/images/popup-img.png"
              class="projects-client-special_popup-img"
            />
          </div>
          <div class="projects-client-special_header-popup2">
            Категория
            <img
              src="~/assets/images/popup-img.png"
              class="projects-client-special_popup-img"
            />
          </div>
          <div class="projects-client-special_header-popup3">
            Тип
            <img
              src="~/assets/images/popup-img.png"
              class="projects-client-special_popup-img"
            />
          </div>
          <div class="projects-client-special_header-popup4">
            Назначение
            <img
              src="~/assets/images/popup-img.png"
              class="projects-client-special_popup-img"
            />
          </div>
          <div class="projects-client-special_header-popup5">
            Стиль
            <img
              src="~/assets/images/popup-img.png"
              class="projects-client-special_popup-img"
            />
          </div>
          <div class="projects-client-special_header-popup6">
            Площадь
            <img
              src="~/assets/images/popup-img.png"
              class="projects-client-special_popup-img"
            />
          </div>
          <div class="projects-client-special_header-popup7">
            Цена
            <img
              src="~/assets/images/popup-img.png"
              class="projects-client-special_popup-img"
            />
          </div>
          <button class="projects-client-special_header-popup-btn">
            Посмотреть
          </button>
        </div>
      </div>
    </div>
    <div class="projects-client-special_top-projects">
      <div class="desktop-wrapper">
        <div class="projects-client-special_top-projects_header">
          <div class="projects-client-special_top-projects_header_top">
            <div class="projects-client-special_top-projects_header_top_div">
              <h4 class="projects-client-special_top-projects_header_top_h4">
                Сортировать по:
              </h4>
              <h6 class="projects-clients-special_top-projects_header_top_h6">
                Сначала новые
              </h6>
              <img
                src="~/assets/images/chevron.png"
                class="projects-client-special_top-projects_header_top_img"
              />
            </div>
            <h5 class="projects-client-special_header_top-h5">
              Найдено: {{ totalProjects }} проектов
            </h5>
            <div class="projects-client-special_top-projects_header_bottom">
              <h2
                class="projects-client-special_top-projects_header_top_bottom_h2"
              >
                Топ проекты
              </h2>
              <h3
                class="projects-client-special_top-projects_header_top_bottom_h3"
                style="margin-bottom:20px;"
              >
                Мы отобрали самые лучшие работы для Вас
              </h3>
            </div>
          </div>
          <div class="projects-client-special_top-projects_header_body">
            <div v-if="topProjects" class="projects-client-special_top-projects_header_body_top">
              <div v-for="project in topProjects" :key="project" class="top-projects_card" style="width:23%;">
                <h2 class="top-projects_card-h2">{{ project.name }}</h2>
                <div class="top-projects_card-rating">
                  <h3 class="top-projects_card-h3">{{ project.price_from_full }}</h3>
                  <div class="top-rojects_card-rating-div">
                    <img
                      src="~/assets/images/rating.png"
                      class="top-projects_card-rate-img"
                    />
                    <h4 class="top-projects_card-h4">{{ project.rating }}</h4>
                  </div>
                </div>
                <h5 class="top-projects_card-h5">{{ project.user.name }}</h5>
                <div class="top-projects_card-image" :style="{ backgroundImage: 'url(' + project.photo + ')'}">
                  <img
                    src="~/assets/images/likeheartpng.png"
                    style="position: relative; margin-bottom: 250px; margin-left: 215px;"
                    class="top-projects_card-image_like"
                  />
                  <img
                    src="~/assets/images/top.png"
                    style="position: relative; bottom: 23px; margin-top:0;"
                    class="top-projects_card-image_top"
                  />
                </div>
                <div @click="goToProject(project.id)" class="top-projects_card-footer">
                  <h6 class="top-projects_card-h6">Подробнее о проекте</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Проекты',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: '',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    }),

    methods: {
      goToProject(id) {
        if(this.$cookies.get('token')) {
          this.$router.push(`/project-details?id=${id}`)
        } else {
          this.$modals.showModal({modal: 'LogInModal'})
          console.log(false)
        }
      }
    },

    computed: {
      topProjects() {
        return this.$store.getters['projects/topProjects']
      },
      totalProjects() {
        return this.$store.getters['projects/totalProjects']
      }
    }
  }
</script>

<style></style>
