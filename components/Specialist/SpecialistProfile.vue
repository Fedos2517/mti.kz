<template>
  <div class="desktop-wrapper">
    <v-breadcrumbs :items="items" style="margin-top:28px; padding:0; margin-bottom:32px;"></v-breadcrumbs>
    <div v-if="special" class="specialist-projects_card">
      <div class="specialist-projects_card_left">
        <img
          :src="special.avatar"
          class="specialist-projects_card_left_avatar"
        />
        <img v-if="special.is_pro" src="~/assets/images/top-special.png" class="specialist-projects_card_left_prosign"/>
      </div>
      <div class="specialist-projects_card_mid">
        <h2 class="specialist-projects_card_mid_h2">{{ special.full_name }}</h2>
        <h3 class="specialist-projects_card_mid_h3">{{ special.specialization_name }}</h3>
        <div class="specialist-projects_card_mid_location">
          <img
            src="~/assets/images/location_tag.png"
            class="specialist-projects_card_mid_location_img"
          />
          <h4 class="specialist-projects_card_mid_location-h4">{{ special.city }}</h4>
          <img src="~/assets/images/link.png" class="specialist-projects_card_mid_location-img2"/>
          <h5 class="specialist-projects_card_mid_location-h5"><a :href="special.url" target="_blank">{{ special.url
            }}</a></h5>
        </div>
        <h6
          class="specialist-projects_card_mid-h6"
        >{{ special.description_short }}</h6>
      </div>
      <div class="specialist-projects_card_right">
        <h3 class="specialist-projects_card_right-h3">Рейтинг специалиста</h3>
        <h4 class="specialist-projects_card_right-h4">{{ special.rating }}/10</h4>
        <div class="specialist-projects_card_right-stars">
          <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star"/>
          <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star"/>
          <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star"/>
          <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star"/>
          <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star"/>
          <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star"/>
          <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star"/>
          <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star"/>
          <img src="~/assets/images/raiting-star.png" class="specialist-projects_card_right-star"/>
        </div>
        <div v-if="isEdit" @click="$modals.showModal({modal: 'RequestModal'})" class="specialist-projects_card_right-sendinqury">Оставить заявку</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['special', 'isEdit'],

    data: () => ({
      items: [
        {
          text: 'Главная',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Специалист',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: 'Проекты специалиста',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
    }),
  }
</script>
