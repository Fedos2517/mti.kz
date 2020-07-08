<template>
  <div class="all-projects">
    <div class="desktop-wrapper">
      <div class="all-projects_body">
        <h2 class="all-projects_body_h2">Все проекты</h2>
        <h3 class="all-projects_body_h3">Найдено: {{ totalProjects }} проектов</h3>
        <div class="all-projects_body_row1">
          <div v-for="project in allProjects" :key="project"
               :class="{'all-projects_body_card-small': !project.is_detailed,'all-projects_body_card-big': project.is_detailed, }">
            <div
              :class="{'all-projects_body_card-small-header': !project.is_detailed, 'all-projects_card-big_header': project.is_detailed}">
              <h2
                :class="{'all-projects_body_card-small-h2': !project.is_detailed, 'all-projects_card-big_header-h2': project.is_detailed}">
                {{ project.name }}</h2>
              <div
                :class="{'all-projects_body_card-small-div': !project.is_detailed, 'all-projects_card-big_header-div': project.is_detailed}">
                <h3
                  :class="{'all-projects_body_card-small-h3': !project.is_detailed, 'all-projects_card-big_header-div_h3': project.is_detailed}">
                  {{ project.price_from_full }}</h3>
                <img
                  :class="{'all-projects_body_card-small-img': !project.is_detailed, 'all-projects_card-big_header-div_star_img': project.is_detailed}"
                  src="~/assets/images/rating.png"/>
                <h4
                  :class="{'all-projects_body_card-small-h4': !project.is_detailed, 'all-projects_card-big_header-div_h4': project.is_detailed}">
                  {{ project.rating }}</h4>
              </div>
              <h5 v-show="!project.is_detailed" :class="{'all-projects_body_card-small-h5': !project.is_detailed}">
                Сеилов Санат</h5>
            </div>
            <div
              :class="{'all-projects_body_card-small-body': !project.is_detailed, 'all-projects_card-big_body': project.is_detailed}"
              :style="{ backgroundImage: 'url(' + project.photo + ')'}">
              <img
                src="~/assets/images/likeheartpng.png"
                :class="{'all-projects_body_card-small-body-img': !project.is_detailed, 'all-projects_card-big_body_like-img': project.is_detailed}"
              />
            </div>
            <div @click="goToProject(project.id)" v-show="project.is_detailed === false" class="all-projects_body_card-small-footer">
              <h6 class="all-projects_body_card-small-footer-h6">Подробнее о проекте</h6>
            </div>
            <div v-show="project.is_detailed === true" class="all-projects_card-big_footer">
              <img
                :src="project.user.avatar"
                class="all-projects_card-big_footer-img"
              />
              <h5 class="all-projects_card-big_footer-h5">{{ project.user.name }}</h5>
              <button @click="goToProject(project.id)" class="all-projects_card-big_footer-btn">Подробнее</button>
            </div>
          </div>
          <!--          <div class="all-projects_body_card-small">-->
          <!--            <div class="all-projects_body_card-small-header">-->
          <!--              <h2 class="all-projects_body_card-small-h2">Кухня в Европейском стиле</h2>-->
          <!--              <div class="all-projects_body_card-small-div">-->
          <!--                <h3 class="all-projects_body_card-small-h3">от 9 900 тг/м2</h3>-->
          <!--                <img src="~/assets/images/rating.png" class="all-projects_body_card-small-img" />-->
          <!--                <h4 class="all-projects_body_card-small-h4">8.4</h4>-->
          <!--              </div>-->
          <!--              <h5 class="all-projects_body_card-small-h5">Сеилов Санат</h5>-->
          <!--            </div>-->
          <!--            <div class="all-projects_body_card-small-body">-->
          <!--              <img-->
          <!--                src="~/assets/images/likeheartpng.png"-->
          <!--                class="all-projects_body_card-small-body-img"-->
          <!--              />-->
          <!--            </div>-->
          <!--            <div class="all-projects_body_card-small-footer">-->
          <!--              <h6 class="all-projects_body_card-small-footer-h6">Подробнее о проекте</h6>-->
          <!--            </div>-->
          <!--          </div>-->
          <!--          <div class="all-projects_body_card-big">-->
          <!--            <div class="all-projects_card-big_header">-->
          <!--              <h2 class="all-projects_card-big_header-h2">Гостиная в стиле Лофт</h2>-->
          <!--              <div class="all-projects_card-big_header-div">-->
          <!--                <h3 class="all-projects_card-big_header-div_h3">от 9 900 тг/м2</h3>-->
          <!--                <img-->
          <!--                  src="~/assets/images/rating.png"-->
          <!--                  class="all-projects_card-big_header-div_star_img"-->
          <!--                />-->
          <!--                <h4 class="all-projects_card-big_header-div_h4">7.5</h4>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--            <div class="all-projects_card-big_body" >-->
          <!--              <img-->
          <!--                src="~/assets/images/likeheartpng.png"-->
          <!--                class="all-projects_card-big_body_like-img"-->
          <!--              />-->
          <!--            </div>-->
          <!--            <div class="all-projects_card-big_footer">-->
          <!--              <img-->
          <!--                src="~/assets/images/big-card-photo.png"-->
          <!--                class="all-projects_card-big_footer-img"-->
          <!--              />-->
          <!--              <h5 class="all-projects_card-big_footer-h5">Сеилов Санат</h5>-->
          <!--              <button class="all-projects_card-big_footer-btn">Подробнее</button>-->
          <!--            </div>-->
          <!--          </div>-->
        </div>
      </div>
      <div class="all-projects_footer">
        <div class="allprojects_footer_pagination">
          <button v-for="page in projectList.total_pages" class="allprojects_footer_pagination_btn" :class="{'allprojects_footer_pagination_btn__active-page': projectList.page === page}">{{ page }}</button>
          <button class="allprojects_footer_pagination_btn-last">
            Следущая
            <img
              src="~/assets/images/all-projects-pagination-btn-last.png"
              class="allprojects_footer_pagination_btn-last_img"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    computed: {
      totalProjects() {
        return this.$store.getters['projects/totalProjects']
      },
      allProjects() {
        return this.$store.getters['projects/allProjects']
      },
      projectList() {
        return this.$store.state.projects.projectList
      }
    },

    methods: {
      goToProject(id) {
        if(this.$cookies.get('token')) {
          this.$router.push(`/project-details?id=${id}`)
        } else {
          this.$modals.showModal({modal: 'LogInModal'})
          console.log(false)
        }
      }
    }
  }
</script>

<style></style>
