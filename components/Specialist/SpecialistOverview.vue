<template>
  <div class="overview_bg">
    <div class="desktop-wrapper">
      <div v-if="overview" class="overwiev_body">
        <div class="overwiev_body_left">
          <h3 class="overwiev_body_left_h3">Описание</h3>
          <h4 class="overwiev_body_left_h4">Дополнительная информация</h4>
          <h5 class="overwiev_body_left_h5">
            {{ overview.description_full }}
          </h5>
          <h3 class="overwiev_body_left_h3">Сертификаты и награды</h3>
          <h4 class="overwiev_body_left_h4">Гордость специалиста</h4>
          <div class="overwiev_body_left_certeficates_top">
            <img v-for="item in overview.documents" :src="item" class="overwiev_body_left_certeficates_img" />
          </div>
        </div>
        <div class="c-overview-tags">
          <h2 class="c-overview-tags__title">Услуги</h2>
          <h2 class="c-overview-tags__subtitle">Навыки специалиста</h2>

          <div class="c-overview-tags__tags">
            <div v-for="tag in overview.tags" :key="tag" class="c-overview-tags__tag">
              <h2 class="c-overview-tags__text">{{ tag.name }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['overview']
  }
</script>
