<template>
  <div class="desktop-wrapper">
<!--    <div class="specialist-projects_card_footer">-->
<!--      <h3 class="specialist-projects_card_footer-h3 specialist-projects_card_footer-h3__active">ПРОЕКТЫ ()</h3>-->
<!--      <div class="specialist-projects_card_footer-line"></div>-->
<!--      <h3 class="specialist-projects_card_footer-h3">ОТЗЫВЫ ()</h3>-->
<!--      <div class="specialist-projects_card_footer-line"></div>-->
<!--      <h3 class="specialist-projects_card_footer-h3">ОБЗОР</h3>-->
<!--    </div>-->

    <div v-if="special && isEdit" class="c-profile-menu c-profile-menu__border">
      <div @click="$emit('selectMenu', 'Projects')" class="c-profile-menu__item">
        <h2 class="c-profile-menu__title c-profile-menu__title__uppercase">Проекты ({{ special.projects_count }})</h2>
        <div v-show="type === 'Projects'" class="c-profile-menu__horizontal-line"></div>
      </div>
      <div class="c-profile-menu__vertical-line"></div>

      <div @click="$emit('selectMenu', 'Reviews')" class="c-profile-menu__item">
        <h2 class="c-profile-menu__title c-profile-menu__title__uppercase">Отзывы ({{ special.reviews_count }})</h2>
        <div v-show="type === 'Reviews'" class="c-profile-menu__horizontal-line"></div>
      </div>
      <div class="c-profile-menu__vertical-line"></div>

      <div @click="$emit('selectMenu', 'Overview')" class="c-profile-menu__item">
        <h2 class="c-profile-menu__title c-profile-menu__title__uppercase">Обзор</h2>
        <div v-show="type === 'Overview'" class="c-profile-menu__horizontal-line"></div>
      </div>
      <div class="c-profile-menu__vertical-line"></div>
    </div>

    <div v-else class="c-profile-menu c-profile-menu__border">
      <div @click="$emit('selectMenu', 'Projects')" class="c-profile-menu__item">
        <h2 class="c-profile-menu__title c-profile-menu__title__uppercase">Обзор</h2>
        <div v-show="type === 'Overview'" class="c-profile-menu__horizontal-line"></div>
      </div>
      <div class="c-profile-menu__vertical-line"></div>

      <div @click="$emit('selectMenu', 'Projects')" class="c-profile-menu__item">
        <h2 class="c-profile-menu__title c-profile-menu__title__uppercase">Проекты ({{ special.projects_count }})</h2>
        <div v-show="type === 'Projects'" class="c-profile-menu__horizontal-line"></div>
      </div>
      <div class="c-profile-menu__vertical-line"></div>

      <div @click="$emit('selectMenu', 'Reviews')" class="c-profile-menu__item">
        <h2 class="c-profile-menu__title c-profile-menu__title__uppercase">Отзывы ({{ special.reviews_count }})</h2>
        <div v-show="type === 'Reviews'" class="c-profile-menu__horizontal-line"></div>
      </div>
      <div class="c-profile-menu__vertical-line"></div>



      <div @click="$emit('selectMenu', 'Requests')" class="c-profile-menu__item">
        <h2 class="c-profile-menu__title c-profile-menu__title__uppercase">Заявки</h2>
        <div v-show="type === 'Requests'" class="c-profile-menu__horizontal-line"></div>
      </div>
      <div class="c-profile-menu__vertical-line"></div>

      <div @click="$emit('selectMenu', 'Notification')" class="c-profile-menu__item">
        <h2 class="c-profile-menu__title c-profile-menu__title__uppercase">Уведомления</h2>
        <div v-show="type === 'Notification'" class="c-profile-menu__horizontal-line"></div>
      </div>
      <div class="c-profile-menu__vertical-line"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['special', 'type', 'isEdit']
  }
</script>
