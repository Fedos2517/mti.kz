<template>
  <div>
    <div class="search-nav-bar">
      <div class="desktop-wrapper">
        <div class="search-nav-bar_body">
          <h2 class="search-nav-bar_body_h2">Поиск</h2>
          <div class="nav-bar_body_searchtype" v-if="additional_data">
            <h3 class="nav-bar_body_searchtype_h3">Проекты ({{ additional_data.projects_count }})</h3>
            <h3 class="nav-bar_body_searchtype_h3">Специалисты ({{ additional_data.total_found }})</h3>
            <h3 class="nav-bar_body_searchtype_h3">Блог ({{ additional_data.blog_count }})</h3>
          </div>

          <div class="nav-bar_body_sort">
            <div class="nav-bar_body_sort_div1">
              Город
              <img
                src="~/assets/images/chevron.png"
                class="projects-client-special_top-projects_header_top_img"
              />
            </div>
            <div class="nav-bar_body_sort_div2">
              Категория
              <img
                src="~/assets/images/chevron.png"
                class="projects-client-special_top-projects_header_top_img"
              />
            </div>
            <div class="nav-bar_body_sort_div3">
              Тип
              <img
                src="~/assets/images/chevron.png"
                class="projects-client-special_top-projects_header_top_img"
              />
            </div>
            <div class="nav-bar_body_sort_div4">
              Назначение
              <img
                src="~/assets/images/chevron.png"
                class="projects-client-special_top-projects_header_top_img"
              />
            </div>
            <div class="nav-bar_body_sort_div5">
              Стиль
              <img
                src="~/assets/images/chevron.png"
                class="projects-client-special_top-projects_header_top_img"
              />
            </div>
            <div class="nav-bar_body_sort_div6">
              Площадь
              <img
                src="~/assets/images/chevron.png"
                class="projects-client-special_top-projects_header_top_img"
              />
            </div>
            <div class="nav-bar_body_sort_div7">
              Цена
              <img
                src="~/assets/images/chevron.png"
                class="projects-client-special_top-projects_header_top_img"
              />
            </div>
            <div class="nav-bar_body_sort_btn">Посмотреть</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    additional_data() {
      return this.$store.state.search.search.additional_data
    }
  }
}
</script>

<style>
</style>
