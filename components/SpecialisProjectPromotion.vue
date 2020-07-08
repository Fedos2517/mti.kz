<template>
  <div class="s_p_p">
    <div class="desktop-wrapper">
      <div class="project_promotion_bar">
        <h3 class="project_promotion_bar_h3">Продвижение проектов</h3>
        <div class="project_promotion_bar_button">Управление продвижением</div>
      </div>
      <div class="go_to_pro_card">
        <div class="specialist-projects_body">
          <div class="specialist-projects_body-left">
            <div v-if="false" class="project_promotion_card">
              <img src="~/assets/images/top-special.png" class="project_promotion_img" />
              <h3 class="project_promotion_card_h3">Перейти на PRO</h3>
            </div>


            <div
              v-for="project in projects"
              :key="project"
              class="all-projects_body_card-big"
              style="height:400px; margin-top:30px;"
            >
              <div class="all-projects_card-big_header">
                <h2 class="all-projects_card-big_header-h2">{{ project.name }}</h2>
                <div class="all-projects_card-big_header-div">
                  <h3 class="all-projects_card-big_header-div_h3">{{ project.price_from_full }}</h3>
                  <img
                    src="~/assets/images/rating.png"
                    class="all-projects_card-big_header-div_star_img"
                  />
                  <h4 class="all-projects_card-big_header-div_h4">{{ project.rating }}</h4>
                </div>
              </div>
              <div
                class="all-projects_card-big_body"
                :style="{ backgroundImage: 'url(' + project.photo + ')'}"
              >
                <img
                  src="~/assets/images/likeheartpng.png"
                  class="all-projects_card-big_body_like-img"
                />
              </div>
              <div class="all-projects_card-big_footer">
                <img :src="project.user.avatar" class="all-projects_card-big_footer-img" />
                <h5 class="all-projects_card-big_footer-h5">{{ project.user.name }}</h5>
                <button class="all-projects_card-big_footer-btn">Подробнее</button>
              </div>
            </div>

          </div>
          <div class="specialist-projects_body-right">
            <div class="specialist-projects_body">

              <div class="specialist-projects_body-left">

                <div v-if="false" class="add_project_card_div">
                  <img src="~/assets/images/plus_button.png" class="add_project_card_img" />
                  <h3 class="add_project_card">Добавить новый проект</h3>
                </div>
                <div
                  v-for="project in projects"
                  :key="project"
                  class="all-projects_body_card-big"
                  style="height:400px; margin-top:30px;"
                >
                  <div class="all-projects_card-big_header">
                    <h2 class="all-projects_card-big_header-h2">{{ project.name }}</h2>
                    <div class="all-projects_card-big_header-div">
                      <h3 class="all-projects_card-big_header-div_h3">{{ project.price_from_full }}</h3>
                      <img
                        src="~/assets/images/rating.png"
                        class="all-projects_card-big_header-div_star_img"
                      />
                      <h4 class="all-projects_card-big_header-div_h4">{{ project.rating }}</h4>
                    </div>
                  </div>
                  <div
                    class="all-projects_card-big_body"
                    :style="{ backgroundImage: 'url(' + project.photo + ')'}"
                  >
                    <img
                      src="~/assets/images/likeheartpng.png"
                      class="all-projects_card-big_body_like-img"
                    />
                  </div>
                  <div class="all-projects_card-big_footer">
                    <img :src="project.user.avatar" class="all-projects_card-big_footer-img" />
                    <h5 class="all-projects_card-big_footer-h5">{{ project.user.name }}</h5>
                    <button class="all-projects_card-big_footer-btn">Подробнее</button>
                  </div>
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
export default {
  computed: {
    projects() {
      return this.$store.state.special.specialProjects.results
    }
  }
}
</script>
