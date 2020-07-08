<template>
  <div class="searchspecials-background">
    <div class="desktop-wrapper">
      <div class="searchspecials_sort">
        <h2 class="searchspecials_sort_h2">Сортировать по:</h2>
        <h3 class="searchspecials_sort_h3">Сначала новые</h3>
        <img src="~/assets/images/chevron.png" class="searchspecials_sort_img" />
        <h4 class="searchspecials_sort_h4">Найдено: 1 248 специалистов</h4>
      </div>



      <div v-for="item in results" @click="selectSpecial(item.id)" :key="item" class="searchspecials_card">
        <div class="searchspecials_card_left">
          <img :src="item.avatar" style="border-radius: 50%" class="searchspecials_card_left_photo" />
          <img v-show="item.is_pro" src="~/assets/images/top-special.png" class="searchspecials_card_left_topsign" />
        </div>
        <div class="searchspecials_card_mid">
          <h2 class="searchspecials_card_mid_name">{{ item.full_name }}</h2>
          <h3 class="searchspecials_card_mid_special">{{ item.specialization_name }}</h3>
          <div class="searchspecials_card_mid_statistics">
            <h4 class="searchspecials_card_mid_statistics_h4">Проекты: {{ item.projects_count }}</h4>
            <h4 class="searchspecials_card_mid_statistics_h4">Услуги: {{ item.tags_count }}</h4>
            <h4 class="searchspecials_card_mid_statistics_h4">Отзывы: 0</h4>
          </div>
          <div class="searchspecials_card_mid_location">
            <img
              src="~/assets/images/location_tag.png"
              class="searchspecials_card_mid_location_img"
            />
            <h5 class="searchspecials_card_mid_location_h5">{{ item.city }}</h5>
          </div>
          <div class="searchspecials_card_mid_div">
            <h6
              class="searchspecials_card_mid_h6"
            >{{ item.description_short }}</h6>
          </div>
        </div>
        <div class="searchspecials_card_right">
          <div class="searchspecials_card_right_raiting">
            <img
              src="~/assets/images/raiting-star.png"
              class="searchspecials_card_right_raiting_img"
            />
            <h3 class="searchspecials_card_right_h3">{{ item.rating }}</h3>
          </div>
          <h4 class="searchspecials_card_right_raiting_h4">{{ item.price_from_full }}</h4>
          <div class="searchspecials_card_right_portfolio">Посмотреть портфолио</div>
          <div class="searchspecials_card_right_sendinquiry">Оставить заявку</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    results() {
      return this.$store.state.search.search.results
    }
  },

  methods: {
    selectSpecial(id) {
      this.$router.push(`/specialist-projects?id=${id}&type=Projects`)
    }
  }
}
</script>

<style>
</style>
